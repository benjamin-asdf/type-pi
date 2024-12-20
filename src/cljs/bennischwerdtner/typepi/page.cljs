(ns bennischwerdtner.typepi.page
  (:require
   [reagent.dom :as rd]
   [reagent.core :as r]))


(defn ui []
  [:div "hurr"])

(defn page []
  (rd/render
   [ui]
   (.getElementById js/document "app")))
