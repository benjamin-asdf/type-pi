(ns dev.tools)

(defn reload-css!
  []
  (doseq [node (array-seq (.querySelectorAll
                            js/document
                            "link[rel=\"stylesheet\"]"))]
    (set! (.-href node)
          (str (.-href node) "?reload=" (random-uuid)))))
