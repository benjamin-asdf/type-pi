(ns build
  (:require
   [shadow.css.build :as cb]
   [clojure.string :as str]
   [clojure.java.io :as io]))

(defn css-release
  [& args]
  (let [build-state
        (-> (cb/start)
            (cb/index-path
             ;; ~/repos/type_pi/src/clj/bennischwerdtner/typepi/
             (io/file "src" "cljs")
             {})
            (cb/generate
             '{:ui {:entries
                    [bennischwerdtner.typepi.page]}})
            (cb/minify)
            (cb/write-outputs-to (io/file "resources" "public" "css")))]
    (doseq [mod (:outputs build-state)
            {:as warning :keys [warning-type]} (:warnings
                                                mod)]
      (prn [:CSS (name warning-type)
            (dissoc warning :warning-type)]))))
