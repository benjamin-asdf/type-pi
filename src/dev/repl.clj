(ns dev.repl
  (:require
   [clojure.java.io :as io]
   [dev.build :as build]
   [shadow.cljs.devtools.api :as shadow]
   [shadow.cljs.devtools.server :as shadow-server]
   [shadow.cljs.devtools.server.fs-watch :as fs-watch]))

(defonce dev-watch-ref (atom nil))

(defn start
  {:shadow/requires-server true}
  []
  (when @dev-watch-ref
    (throw (Exception. "Already running, call stop first")))
  (shadow-server/start!)
  (shadow.cljs.devtools.api/watch :app {:autobuild false})
  (build/css-release)
  (reset!
   dev-watch-ref
   (fs-watch/start
    {}
    [(io/file "src")]
    ["cljs" "cljc" "clj"]
    (fn [_]
      (try
        (println "-- refresh css/cljs --")
        ;; is sync
        (build/css-release)
        (shadow.cljs.devtools.api/watch-compile! :app)
        (shadow.cljs.devtools.api/cljs-eval
         :app
         (str (slurp "src/dev/tools.cljs") "\n" "(reload-css!)")
         {})
        (catch Exception e (prn [:watch-failed e]))))))
  ::started)

(defn stop []
  (when-some [css-watch @dev-watch-ref]
    (fs-watch/stop css-watch)
    (reset! dev-watch-ref nil))

  ::stopped)

(defn go []
  (stop)
  (start))

(defn watch-css [_]
  (go)
  (println "started dev-watch")
  (deref (promise)))

(comment (go))
