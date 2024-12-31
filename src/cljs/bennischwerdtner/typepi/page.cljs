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

(def typing-state
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

(defn udpate-typed
  [{:as typing-state :keys [typed-history]} pi k]
  (let
      [current-pi (nth pi (next-pi-idx typing-state))
       correct? (= (str current-pi) k)
       typing-state
       (case k
         :back (-> typing-state
                   (update :cursor-idx dec)
                   (update :typed pop))
         (cond-> typing-state
           :always (update :typed-history conj k)
           (or correct? (= k :reveal)) (update :cursor-idx inc)
           (= k :reveal) (update :typed conj :revealed)
           correct? (update :typed conj :success)))]
    typing-state))


(defn type-area
  [{:keys []}]
  (let [idle? (r/atom false)
        idle-timeout (r/atom nil)
        handle-typed
        (fn [k]
          (when-let [pi @pi]
            (let [k (@keymap (str k) k)]
              (swap! typing-state udpate-typed pi k)
              (swap! idle? (constantly false)))))
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
     {:component-did-mount (fn []
                             (js/window.addEventListener
                              "keydown"
                              keydown-listener))
      :component-will-unmount
      (fn []
        (js/window.removeEventListener "keydown"
                                       keydown-listener))
      :name :type-area
      :reagent-render
      (fn []
        (when-let [idle @idle-timeout]
          (js/clearTimeout idle))
        (js/setTimeout (fn []
                         (swap! idle? (constantly true)))
                       1000)
        (let [$base (css "u-background-lighter"
                         :shadow
                         {:max-width "90%"
                          :min-width "50%"}
                         {:min-height "4rem"}
                         :rounded
                         :p-6
                         :rounded)
              $selected (css :shadow
                             :rounded :transition-all
                             :duration-200 :ease-in-out)]
          [:div
           {:class [$base (when @active? $selected)]
            :on-blur #(reset! active? false)
            :on-focus #(reset! active? true)
            :tabIndex "0"}
           [:div
            {:class (css :tracking-widest :text-5xl)}
            (let [{:keys
                   [page-idx cursor-idx per-page typed]}
                  @typing-state]
              (doall
               (map-indexed
                (fn [idx c]
                  [:span
                   {:class
                    (str
                     (css :transition-all)
                     " "
                     (case (get typed idx :no)
                       :wrong "u-error"
                       :revealed "u-color-default"
                       :no (css
                             {:color
                              "transparent"})
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
                      (drop
                       (* page-idx per-page)
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
