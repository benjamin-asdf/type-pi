(ns dev.repl
  (:require
   [clojure.java.io :as io]
   [build :as build]
   [shadow.cljs.devtools.api :as shadow]
   [shadow.cljs.devtools.server :as shadow-server]
   [shadow.cljs.devtools.server.fs-watch :as fs-watch]))

(defonce css-watch-ref (atom nil))

(defn start
  {:shadow/requires-server true}
  []
  (shadow-server/start!)
  (shadow.cljs.devtools.api/watch :app {:autobuild false})
  (build/css-release)
  (reset! css-watch-ref
    (fs-watch/start
      {}
      [(io/file "src" "cljs")]
      ["cljs" "cljc" "clj"]
      (fn [_]
        (try (println "-- refresh css/cljs --")
             (build/css-release)
             (shadow.cljs.devtools.api/watch-compile! :app)
             (catch Exception e (prn [:css-failed e]))))))
  ::started)

(defn stop []
  (when-some [css-watch @css-watch-ref]
    (fs-watch/stop css-watch))

  ::stopped)

(defn go []
  (stop)
  (start))

(defn watch-css [_]
  (go)
  (println "started watch-css")
  (deref (promise)))

(comment
  (go))
