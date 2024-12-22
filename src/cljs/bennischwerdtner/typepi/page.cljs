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
(defonce typed (r/atom [1 4 1 :wrong]))

(defonce keymap
  (r/atom

   {

    ;; "a" "1"
    ;; "s" "2"
    ;; "d" "3"
    ;; "f" "4"
    ;; "g" "5"
    ;; "h" "6"

    ;; "j" "7"
    ;; "k" "8"
    ;; "l" "9"
    ;; "o" "0"



    "s" "6"
    "u" "0"
    "o" "0"
    "l" "2"
    "e" "5"
    "g" "7"
    "h" "8"
    "t" "4"
    "d" "4"
    "m" "3"
    "n" "9"
    "j" "9"
    "k" "4"
    "y" "5"
    "i" "9"
    "p" "8"

    "." :repeat
    ;; ","

    }
   ))


;; (take 10 @pi)
;; ("1" "4" "1" "5" "9" "2" "6" "5" "3" "5")

(-> (js/fetch "pi.txt")
    (.then #(.. % text))
    (.then (fn [r]
             (reset! pi r))))

(defn pi-number [{:keys [typed-kind]}]
  ;; (case typed-kind)
  )


(defn type-area
  [{:keys []}]
  (let [handle-typed (fn [k]
                       (when-let [pi @pi]
                         (let [current-pi
                               (nth pi (count @typed))
                               k (@keymap (str k) k)]
                           (if (= (str current-pi) k)
                             (swap! typed conj current-pi)
                             (swap! typed conj :wrong)))))
        active? (r/atom false)
        keydown-listener (js/window.addEventListener
                          "keydown"
                          (fn [e]
                            (if (= (.-key e) "Tab")
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
        (let [$base (css "u-background-lighter"
                         :shadow
                         :w-1of2
                         {:min-height "4rem"}
                         ;; {:border-color
                         ;; "transparent"
                         ;;  :border-width "1px"}
                         :rounded
                         :p-6
                         :rounded)
              $selected (css
                         :bg-green-500
                         ;; {:border-color
                         ;;    "var(--navajo-white)"
                         ;;  :border-width
                         ;;  "1px"}
                         :shadow
                         :rounded :transition-all
                         :duration-200 :ease-in-out)]
          [:div
           {:class [$base (when @active? $selected)]
            :on-blur #(reset! active? false)
            :on-focus #(reset! active? true)
            :tabIndex "0"}
           [:div
            {:class (css :tracking-widest :text-5xl)}
            (doall (map-indexed (fn [idx c]
                                  [:span
                                   {:class
                                    (case (get @typed
                                               idx
                                               :no)
                                      :wrong "u-error"
                                      :no (css :hidden)
                                      "u-success")
                                    :key idx} c])
                                (take 10 @pi)))]]))})))


(defn ui
  []
  [:div
   [:h1
    {:class (css :mt-8 :font-bold
                 :items-center :w-full
                 :justify-center :flex)} "type pi"]

   [:div
    {:class
     (css {:min-height "50vh"} :flex :flex-col :items-center :justify-center :w-full)}
    [type-area]]])



(defn ^:dev/after-load  page []
  (rd/render
   [ui]
   (.getElementById js/document "app")))
