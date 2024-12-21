(ns bennischwerdtner.typepi.page
  (:require
   [reagent.dom :as rd]
   [reagent.core :as r]
   [shadow.css :refer [css] :include-macros true]))


;; now the app...

(defn ui
  []
  [:div
   {:class
    (css :flex :w-screen :h-screen :text-base :bg-black)}
   "hurr"])

(defn ^:dev/after-load  page []
  (rd/render
   [ui]
   (.getElementById js/document "app")))
