(ns bennischwerdtner.typepi.lib)

(def ^:dynamic *dt*)

(def ascending compare)

(def descending (fn [a b] (compare b a)))

(defn by
  ([k] (by k ascending))
  ([k c] (fn [a b] (c (k a) (k b)))))

(defn then
  [comparator1 comparator2]
  (fn [a b]
    (let [r (comparator1 a b)]
      (if (zero? r) (comparator2 a b) r))))

(defn v* [a b]
  (cond
    (and (coll? a) (coll? b))
    (vec (map * a b))
    (coll? a)
    (vec (map * a (repeat b)))
    (coll? b)
    (vec (map * b (repeat a)))
    :else (* a b)))

(defn v+ [a b]
  (cond
    (and (coll? a) (coll? b))
    (vec (map + a b))
    (coll? a)
    (vec (map + a (repeat b)))
    (coll? b)
    (vec (map + b (repeat a)))
    :else (+ a b)))


(defn v- [a b]
  (v+ a (v* -1 b)))

(defn normalize-vector
  [v]
  (let [len (Math/sqrt (reduce + (map #(* % %) v)))]
    (if (zero? len) [0 0] (vec (map #(/ % len) v)))))

(defn vector-len [v]
  (Math/sqrt (reduce + (map #(* % %) v))))

(defn play-sound! [path volume]
  (let [elm
        (or
         (.getElementById js/document (str "audio-" path))
         (let [elm (js/document.createElement "audio")]
           (set! (.-id elm) (str "audio-" path))
           (set! (.-src elm) path)
           (set! (.-type elm) "audio/mpeg")
           (set! (.-volume elm) volume)
           (js/document.body.appendChild elm)
           elm))]
    (when
        (not (.-paused elm))
      (set! (.-currentTime elm) 0))
    (set! (.-volume elm) volume)
    (.. elm (play))))

;; -------------------------------
;; physics game stuff

(defn ->entity [opts]
  (merge
   {:entity? true
    :spawn-time (js/Date.)}
   opts))

(defn age [e]
  (- (js/Date.) (:spawn-time e)))

(defn gaussianRandish
  []
  (- (/ (reduce (fn [acc _] (+ acc (Math/random)))
                0
                (range 7))
        7)
     (/ 1 2)))

(defn norm
  [mean std]
  (+ mean (* std (gaussianRandish))))

(defn brownian-motion
  [{:as e :keys [kinetic-energy acceleration] :or {acceleration 0}} dt]
  (assoc e
    :acceleration (v+ acceleration
                      [(* kinetic-energy (norm 0 1) dt 20)
                       (* kinetic-energy (norm 0 1) dt 20)])))

(defn apply-forces
  [e dt]
  (update e
          :acceleration
          (fn [a]
            (v+
             a
             (v*
              (* 1000 62.5 dt)
              (reduce (fn [acc f] (v+ acc f))
                      (vals (:forces e))))))))

(def element-position-1
  (fn [id]
    (let [rect (.. (.getElementById js/document id)
                   getBoundingClientRect)]
      [(+ (.. rect -x) (/ (.. rect -width) 2))
       (+ (.. rect -y) (/ (.. rect -height) 2))])))

(defn rand-on-element [id]
  (let [rect (.. (.getElementById js/document id)
                 getBoundingClientRect)]
    [(+ (.. rect -x) (rand (.. rect -width)))
     (+ (.. rect -y) (rand (.. rect -height)))]))

(defn attracted
  [e id force]
  (let [diff (v- (element-position-1 id) (:pos e))
        len (vector-len diff)]
    (assoc-in e
              [:forces [:attracted id]]
              (v* (normalize-vector diff)
                  force))))

(defn physics-update-2d
  [entities dt]
  (doall (for [e entities]
           (cond-> e
             (:acceleration e)
             (update :velocity v+ (v* (:acceleration e) dt))
             (:acceleration e)
             (update :acceleration v* (- 1 (* dt 62.5 0.1)))
             (:velocity e) (update :pos v+ (v* (:velocity e) dt))
             (:velocity e)
             (update :velocity v* (- 1 (* dt 62.5 0.1)))
             (:kinetic-energy e) (brownian-motion dt)
             true (apply-forces dt)))))

(defn distance [a b]
  (Math/sqrt (reduce + (map #(* % %) (v- a b)))))

(defmulti entity-update :kind)

(defmethod entity-update :default [x] x)

(defn update-entities
  [entities dt]
  (let [state {:green-points-position
               (element-position-1 "green-points")}]
    (doall
     (for [e entities
           :when (not (:kill? e))]
       (do (cond-> e
             :always (entity-update state)
             (:lifetime e) (update :lifetime #(- % dt))
             (and (:lifetime e) (< (:lifetime e) 0))
             (assoc :kill? true)))))))


(defn current-search-params
  []
  (into {}
        (->> (js->clj (into []
                            (.. (js/URLSearchParams.
                                 (.-search js/location))
                                entries)))
             (map (comp (fn [[k v]] [(keyword k) v]))))))

;; ---------------------------------------

;; isTrusted
;; :
;; true
;; altKey
;; :
;; false
;; bubbles
;; :
;; true
;; cancelBubble
;; :
;; false
;; cancelable
;; :
;; true
;; charCode
;; :
;; 0
;; code
;; :
;; "MetaRight"
;; composed
;; :
;; true
;; ctrlKey
;; :
;; false
;; currentTarget
;; :
;; null
;; defaultPrevented
;; :
;; false
;; detail
;; :
;; 0
;; eventPhase
;; :
;; 0
;; isComposing
;; :
;; false
;; key
;; :
;; "Meta"
;; keyCode
;; :
;; 91
;; location
;; :
;; 0
;; metaKey
;; :
;; true
;; repeat
;; :
;; false
;; returnValue
;; :
;; true
;; shiftKey
;; :
;; false

(defn event->key-chord
  [e]
  (let [key (.-key e)
        ;; code (.-code e)
        alt-key? (.-altKey e)
        ctrl-key? (.-ctrlKey e)
        shift-key? (.-shiftKey e)
        meta-key? (.-metaKey e)
        ;; key-code (.-keyCode e)
        ;; repeat? (.-repeat e)
        ]
    {:key key
     :alt-key? alt-key?
     :ctrl-key? ctrl-key?
     :shift-key? shift-key?
     :meta-key? meta-key?}))

(defn key-chord-composed?
  [kc]
  (or (:alt-key? kc)
      (:ctrl-key? kc)
      (:shift-key? kc)
      (:meta-key? kc)))

(defn key-chord->printed
  [kc]
  (let [keys-and-names
        [[:alt-key? "Alt"] [:ctrl-key? "Ctrl"]
         [:shift-key? "Shift"] [:meta-key? "Meta"]
         [:key (:key kc)]]]
    (apply str
           (interpose " + "
                      (for [[k n] keys-and-names
                            :when (kc k)]
                        n)))))

(defn keychord-or-key->string [kc]
  (cond
    (map? kc)
    (key-chord->printed kc)
    :else
    (str kc)))
