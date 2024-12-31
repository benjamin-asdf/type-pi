(ns bennischwerdtner.typepi.page
  (:require
   [reagent.dom :as rd]
   [reagent.core :as r]
   [shadow.css :refer [css] :include-macros true]))

(def dark-surface-color "#121212")
(def dark-lighter "#1a1a1a")
(def dark-lightest "#242424")

;; contrast with dark-lightest is 12.05:1
(def navajo-white "#ffdead")
(def green-yellow "#adff2f")
;; black on green-yellow is also good

(defonce pi (r/atom ""))
(defonce typed (r/atom []))

(def state
  (r/atom
   {:cursor-idx 0
    :page-idx 0
    :per-page (* 3 (+ 2 1 2 1 2))
    :typed []
    :typed-history []}))

(defn next-pi-idx
  [{:keys [cursor-idx per-page page-idx]}]
  (+ (* per-page page-idx) cursor-idx))

(defonce keymap
  (r/atom
    {"." :repeat
     ";" :reveal
     "ArrowLeft" :left
     "ArrowRight" :right
     "Backspace" :back
     "a" "1"
     "b" "2"
     "d" "4"
     "e" "5"
     "g" "7"
     "h" "8"
     "i" "9"
     "j" "9"
     "k" "4"
     "l" "2"
     "m" "3"
     "n" "9"
     "o" "0"
     "s" "6"
     "t" "4"
     "u" "0"
     "y" "5"}))



(-> (js/fetch "pi.txt")
    (.then #(.. % text))
    (.then (fn [r]
             (reset! pi r))))

(defn pi-number [{:keys [typed-kind]}]
  ;; (case typed-kind)
  )

(def $idle-cursor (css {:animation "blink 3s infinite"}))


(def $almost-done
  (css {
        ;; :animation "blink-border 3s infinite"
        :animation "blink-2 3s infinite"
        :border-color "var(--green-yellow)"}))

(defn page-forward
  [state]
  (-> state
      (update :page-idx inc)
      (assoc :cursor-idx 0)
      (assoc :typed [])))

(defn page-backward
  [state]
  (-> state
      (update :page-idx (comp #(min % 0) dec))
      (assoc :cursor-idx 0)
      (assoc :typed [])))

(defn normalize-page
  [{:as state :keys [typed-history cursor-idx per-page]}]
  (cond (< per-page cursor-idx) (page-forward state)
        (< cursor-idx 0) (page-backward state)
        :else state))

(defn page-almost-done?
  [{:as state :keys [typed-history cursor-idx per-page]}]
  (def per-page per-page)
  (def cursor-idx cursor-idx)
  (< (- per-page 3) (inc cursor-idx)))

(defn udpate-typed
  [{:as state :keys [typed-history]} pi k]
  (let [current-pi (nth pi (next-pi-idx state))
        correct? (= (str current-pi) k)
        state (case k
                :back (-> state
                          (update :cursor-idx dec)
                          (update :typed pop))
                (cond-> state
                  :always (update :typed-history conj k)
                  (or correct? (= k :reveal))
                  (update :cursor-idx inc)
                  (= k :reveal)
                  (update :typed conj :revealed)
                  correct? (update :typed conj :success)))]
    (-> state
        normalize-page)))

(defn type-area
  [{:keys []}]
  (let [idle? (r/atom false)
        idle-timeout (r/atom nil)
        handle-typed (fn [k]
                       (when-let [pi @pi]
                         (let [k (@keymap (str k) k)]
                           (swap! state udpate-typed pi k)
                           (swap! idle? (constantly
                                          false)))))
        active? (r/atom false)
        keydown-listener (js/window.addEventListener
                           "keydown"
                           (fn [e]
                             (handle-typed (.-key e))
                             #_(if (= (.-key e) "Tab")
                                 nil
                                 (when @active?
                                   (handle-typed (.-key e))
                                   (.preventDefault e)))))]
    (r/create-class
      {:component-did-mount
       (fn [] (js/window.addEventListener "keydown" keydown-listener))
       :component-will-unmount
       (fn [] (js/window.removeEventListener "keydown" keydown-listener))
       :name :type-area
       :reagent-render
       (fn []
         (when-let [idle @idle-timeout]
           (js/clearTimeout idle))
         (js/setTimeout (fn []
                          (swap! idle? (constantly true)))
                        1000)
         (let [$base
               (css "u-background-lighter"
                    :shadow
                    {:max-width "90%"
                     :min-width "50%"}
                    {:min-height "4rem"}
                    :rounded
                    :p-6
                    :border-2
                    {:border-color "transparent"}
                    :rounded)
               ]
           [:div

            {:class
             [$base
              (when
                  (page-almost-done? @state)
                  $almost-done)
              ]
             :on-blur #(reset! active? false)
             :on-focus #(reset! active? true)
             :tabIndex "0"}

            [:div
             {:class (css :tracking-widest :text-5xl)}
             (let [{:keys [page-idx cursor-idx per-page
                           typed]}
                   @state]
               (doall
                (map-indexed
                 (fn [idx c]
                   [:span
                    {:class
                     (str
                      (css :transition-all)
                      " " (case (get typed idx :no)
                            :wrong "u-error"
                            :revealed
                            "u-color-default"
                            :no "u-color-default"
                            ;; (css {:color
                            ;; "transparent"})
                            "u-success")
                      " "
                      (when (= cursor-idx idx)
                        (str
                         (css
                           :underline
                           {:text-decoration-color
                            "var(--navajo-white)"})
                         " "
                         (when @idle?
                           $idle-cursor))))
                     :key idx} c])
                 (take per-page
                       (drop (* page-idx per-page)
                             @pi)))))]]))})))

(defn ui
  []
  [:div
   [:h1
    {:class (css :mt-8 :font-bold
                 :justify-center :flex)} "type pi"]
   [:div
    {:class (css {:min-height "50vh"}
                 :flex
                 :flex-col :items-center
                 :justify-center :w-full)} [type-area]]])

(defn ^:dev/after-load  page []
  (rd/render
   [ui]
   (.getElementById js/document "app")))
