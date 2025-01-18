(ns bennischwerdtner.typepi.page
  (:require
   [reagent.dom :as rd]
   [reagent.core :as r]
   [clojure.edn :as edn]

   [shadow.css :refer [css] :include-macros true]

   [bennischwerdtner.typepi.lib :as lib :refer [by ]]))

(def dark-surface-color "#121212")
(def dark-lighter "#1a1a1a")
(def dark-lightest "#454545")

(def navajo-white "#ffdead")
(def green-yellow "#adff2f")

(defonce pi
  (r/atom ""))

(def state
  (r/atom
   {:bookmarks []
    :hide-things?
    (or (try
          (edn/read-string
           (js/localStorage.getItem
            "hide-things?"))
          (catch js/Error _ false))
        false)
    ;; :dialog  :add-key
    ;; :add-key {:target "0"}
    :cursor-idx 0
    :grouping-scheme
    "aabaabaa"
    :incorrect-counter 0
    :keymap

    (merge
     {"." :repeat
      ":" :reveal-group
      ";" :reveal
      ">" :reveal-page
      "Backspace" :back
      "a" "1"
      "b" "2"
      "c" "3"
      "d" "4"
      "e" "5"
      "f" "6"
      "g" "7"
      "h" "8"
      "i" "9"
      "j" "9"
      "k" "4"
      "l" "2"
      "m" "3"
      "n" "9"
      "o" "0"
      "p" "8"
      "s" "6"
      "t" "4"
      "u" "0"
      "y" "5"
      }
     (or (try (edn/read-string
               (js/localStorage.getItem
                "keymap"))
              (catch js/Error _
                (do (js/localStorage.removeItem
                     "keymap")
                    {})))
         nil)
     )
    :page :type-pi
    :page-idx 0
    :per-page (* 3 (+ 2 1 2 1 2))
    :typed []
    :typed-history []}))

(def game-state
  (r/atom {:entities [ ;; {:pos [(rand 1000) (rand
                      ;; 1000)]
                      ;;  :velocity [10 10]
                      ;;  :kinetic-energy 0.2}
                      ;; {:pos [(rand 1000) (rand
                      ;; 1000)]
                      ;;  :velocity [10 10]
                      ;;  :kinetic-energy 0.2}
                      ;; {:pos [100 100]
                      ;;  :velocity [0 0]
                      ;;  :lifetime 1
                      ;;  ;; :kinetic-energy 0
                      ;;  :forces {:gravity [0 0.1]}}
                      ]}))

(defonce wobble-anim-state
  (r/atom :idle))
(defonce blink-anim-state
  (r/atom :idle))

(def points (r/atom {:green 0}))

;; -----------

(defn group-by-scheme
  [coll scheme]
  (letfn [(grp [acc coll]
            (if-not (seq coll)
              acc
              (grp (conj acc
                         (sequence
                          (comp (partition-by first)
                                (map (fn [g]
                                       (map (fn [elm]
                                              (second elm))
                                            g))))
                          (map vector scheme coll)))
                   (drop (count scheme) coll))))]
    (grp [] coll)))

(def $button (css :text-base :border :p-1 :rounded :border-color-white))

(def $idle-cursor (css {:animation "blink 3s infinite"}))
(def $incorrect-blink
  (css
    {:animation "blink 3s infinite"
     :color "var(--navajo-white)"}))

(def $almost-done
  (css {
        ;; :animation "blink-border 3s infinite"
        :animation "blink-2 3s infinite"}))

(defn page-forward
  [state]
  (-> state
      (update :page-idx inc)
      (assoc :cursor-idx 0)
      (assoc :typed [])))

(defn page-backward
  [state]
  (-> state
      (update
       :page-idx
       (comp
        (fn [p] (max p 0))
        dec))
      (assoc :cursor-idx 0)
      (assoc :typed [])))

(defn normalize-page
  [{:as state :keys [cursor-idx per-page]}]
  (cond (< per-page (inc cursor-idx)) (page-forward state)
        (< cursor-idx 0) (page-backward state)
        :else state))

(defn next-pi-idx
  [{:keys [cursor-idx per-page page-idx]}]
  (+ (* per-page page-idx) cursor-idx))

(defn normalize-state
  [{:as s :keys [per-page]}]
  (let [index (next-pi-idx s)
        index (max 0 index)]
    (merge s
           {:cursor-idx (mod index per-page)
            :index index
            :page-idx (int (/ index per-page))
            :typed
            (into []
                  (repeat (mod index per-page) :revealed))
            :typed-history []})))


(defn cursor-forward
  [state amount]
  (normalize-state (update state :cursor-idx + amount)))

(defn page-almost-succ?
  [{:keys [cursor-idx per-page typed]}]
  (and (< (- per-page 3) (inc cursor-idx))
       (every? #{:success} typed)))

(declare spawn-firefly!)

(defn correct? [pi k]
  (= (str (nth pi (next-pi-idx @state))) k))

(defn incorrect? [pi k]
  (and
   (#{"0" "1" "2" "3" "4" "5" "6" "7" "8" "9"} k)
   (not (correct? pi k))))

(declare update-typed)

(defn handle-repeat
  [{:as state :keys [typed-history]} pi]
  (if-let [rep (first (drop-while
                       (complement
                        (into #{} (map str (range 0 10))))
                       (reverse typed-history)))]
    (update-typed state pi rep)
    state))

(defn handle-reveal [state]
  (update state :typed conj
          :success
          ;; :revealed
          ))


(defn reveal-many
  [state to-reveal]
  (-> state
      (update :typed
              (fn [typed]
                (into typed (repeat to-reveal :revealed))))
      (update :cursor-idx + to-reveal)))

(defn handle-reveal-group
  [state]
  (let [group-len (count (:grouping-scheme state))]
    (reveal-many state
                 (- group-len
                    (mod (:cursor-idx state) group-len)))))

(defn reveal-page
  [state]
  (reveal-many state
               (- (:per-page state)
                  (mod (:cursor-idx state)
                       (:per-page state)))))

(defn handle-back
  [state]
  (-> state
      (update :cursor-idx dec)
      (update :typed
              (fn [v]
                (case v
                  [] []
                  (pop v))))))

(defn update-typed
  [{:as state
    :keys [per-page page-idx page-revealed?]}
   pi k]
  (let [correct? (correct? pi k)
        incorrect? (incorrect? pi k)
        state
        (cond-> state
          (= k :back) (handle-back)
          (:page-revealed? state) (dissoc :page-revealed?)
          (not= :repeat k) (update :typed-history conj k)
          (= :repeat k) (handle-repeat pi)
          (or correct? (= k :reveal))
          (update :cursor-idx inc)
          (or correct? (= k :reveal))
          (assoc :incorrect-counter 0)
          (= k :reveal) (update :typed conj :revealed)
          (= k :reveal-group) (handle-reveal-group)
          (= k :reveal-page) (reveal-page)

          correct? (update :typed conj :success)

          incorrect?
          (update :incorrect-counter inc)


          ((into #{} (vals (:keymap state))) k)
          (normalize-page))]
    (if (and (#{:reveal :reveal-group :reveal-page} k)
             (zero? (:cursor-idx state))
             (not page-revealed?))
      (-> state
          (assoc :cursor-idx per-page
                 :page-revealed? true
                 :typed (into [] (repeat per-page :revealed))
                 :typed-history []
                 :page-idx page-idx))
      state)))


(defn play-anim!
  [ref play-time idle-time]
  (reset! ref :playing)
  (js/setTimeout
   (fn []
     (reset! ref :timeout)
     (js/setTimeout (fn [] (reset! ref :idle)) idle-time))
   play-time))


(defn set-anim!
  [ref play-time idle-time]
  (case @ref
    :playing nil
    :timeout nil
    :idle (play-anim! ref play-time idle-time)))

(defn set-wobble-anim! [] (set-anim! wobble-anim-state 100 50))

(defn set-blink-anim! []
  (set-anim! blink-anim-state 1200 50))

(defn page-overview-ui
  [{:as state
    :keys [cursor-idx per-page page-idx]}]
  [:div
   {:class (css {:min-width "13rem"}
                :flex
                :flex-col :border
                :p-2 :gap-2
                :px-4 {:border-color "white"})}
   [:div "page: "
    [:span {:class (css :text-3xl)}
     page-idx]
    [:span {:class (css :text-sm)} " / "
     (int (/ (count @pi) per-page))]]
   [:div [:span {:class (css :text-sm)} "index: "]
    [:span {:class (css :mx-2 :text-5xl)}
     (next-pi-idx state)]]
   [:div {:class (css :text-sm)} "cursor: " cursor-idx]])

(defn character-id [idx]
  (str "type-area-character-" idx))

(defn type-area-characters
  [{:keys [pi idle? grouping-scheme cursor-idx per-page
           incorrect-counter
           page-idx typed]}]
  [:div#number-text
   {:class (css :tracking-widest :text-3xl [:xl :text-5xl])}
   (doall
     (let [characters (take per-page
                            (drop (* page-idx per-page) pi))
           characters-rendered
             (map-indexed
               (fn [idx c]
                 (let [incorrect-blink?
                       (when (= cursor-idx idx)
                         (< 2 incorrect-counter))]
                   (if incorrect-blink?
                     [:span
                      {:id (str "type-area-character-" idx)
                       :style {:position :relative}}
                      [:span
                       {:class
                        (css
                          :absolute
                          :underline
                          {:color "transparent"
                           :text-decoration-color
                           "var(--navajo-white)"})}
                       c]
                      [:span
                       {:class
                        [(str
                          (when (= cursor-idx idx)
                            (str
                             " "
                             (when incorrect-blink?
                               $incorrect-blink))))]

                        :key idx}
                       c]]
                     [:span
                      {:class [(str
                                ;; (css :transition-all)
                                " " (case (get typed idx :no)
                                      :wrong "u-error"
                                      :revealed "u-color-default"
                                      :no
                                      ;; "u-color-default"
                                      (css {:color "transparent"})
                                      :success "u-success")
                                " " (when (= cursor-idx idx)
                                      (str (css :underline
                                                {:text-decoration-color
                                                 "var(--navajo-white)"})
                                           " "
                                           (when idle? $idle-cursor))))]
                       :id (str "type-area-character-" idx)
                       :key idx} c])))
               characters)]
       (map-indexed
         (fn [idx ui] [:span {:key idx} ui])
         (mapcat identity
           (mapcat identity
             (interpose [[[:span "  "]]]
               (map (fn [grp] (interpose [[:span " "]] grp))
                 (group-by-scheme characters-rendered
                                  grouping-scheme))))))))])

(defn firefly
  [{:keys [] [x y] :pos}]
  [:div
   {:class (css :absolute
                :p-2
                ;; {:height "1rem" :width "2.5rem"}
                :min-w-0
                :text-center :text-black
                :rounded-full "c-background-success")
    :style {:left x :top y}}])

(defn fireflies
  []
  [:<>
   (doall (for [[idx e] (map-indexed vector
                                     (:entities
                                      @game-state))]
            ^{:key idx} [firefly e]))
   [:div {:class (css :flex :justify-center)}
    [:div {:class (css :relative :flex :justify-center)}
     [:div#green-points
      {:class
       [(css :absolute
             :p-3
             :pt-4
             :flex
             :items-center
             :justify-center
             :transition-all
             {:height "3rem"
              :top "2rem"
              :width "3rem"}
             :min-w-0
             :text-center
             :text-black
             :rounded-full "c-background-success")
        (when (= :playing @wobble-anim-state)
          "u-wobble")]}
      (if
          (< 1000 (:green @points))
          (str (int (/ (:green @points) 1000)) "k")
          (:green @points))]]]])

(defmethod lib/entity-update :firefly
  [e state]
  (println e state)
  (let [reached-target? (< (lib/distance (:pos e)
                                         (:green-points-position
                                          state))
                           40)]
    (when reached-target?
      (set-wobble-anim!)
      (when (< 300 (lib/age e))
        (lib/play-sound! "757612__qubodup__pop-sound.wav" 0.5))
      (swap! points update :green inc))
    (cond-> e
      (< 500 (lib/age e) 1000) (lib/attracted "green-points" 0.5)
      (< 1000 (lib/age e)) (lib/attracted "green-points" 0.4)
      reached-target? (assoc :kill? true))))

(defn spawn-firefly!
  [state]
  (update
   state
   :entities
   (fn [ents]
     (into ents
           (repeatedly
            1
            (fn []
              (lib/->entity
               {:firefly? true
                :kind :firefly
                :forces {:gravity [0
                                   (+ 0.1 (rand 0.05))]}
                :kinetic-energy 100
                :pos (lib/rand-on-element "number-text")
                :velocity [(lib/norm 0 6000)
                           (lib/norm -1000 1000)]})))))))

(defn key-ui
  [k]
  [:span
   {:class (css "u-background-lightest"
                :rounded
                :p-1
                :text-center
                {:min-width "2rem"}
                :cursor-pointer)
    :on-click (fn [])
    :tabIndex "0"} k])


(defn keymap-ui
  []
  [:div
   {:class (css :flex
                :flex-col
                :gap-2
                :border-2
                :border-white
                {:max-width "30rem"}
                :p-4)}
   (doall
    (for [[idx [v keymap-keys]]
          (map-indexed
           vector
           (map (juxt key (comp #(map first %) val))
                (sort (->
                       (by (comp lib/keychord-or-key->string key)))
                      (group-by val (@state :keymap)))))]
      ^{:key idx}
      [:div {:class (css :justify-between :w-full :flex)}
       [:span
        (doall
         ^{:key kidx}
         (doall
          (map-indexed
           (fn [idx o] (with-meta o {:key idx}))
           (interpose [:span ", "]
                      (concat
                       (for [k (sort (map lib/keychord-or-key->string keymap-keys))]
                         [key-ui k])
                       [[:span
                         {:class (css :border
                                      :rounded
                                      :text-base
                                      :p-1
                                      :text-center
                                      {:min-width "2rem"}
                                      :cursor-pointer)
                          :on-click (fn []
                                      (js/scrollTo 0 0)
                                      (swap! state assoc
                                             :dialog :add-key
                                             :add-key {:target v}))
                          :tabIndex "0"} "+"]])))))]
       [:span v]]))])

(defn index-jump-ui
  [_]
  (let [by-how-much (r/atom 100)]
    (fn [s]
      [:div {:class (css :mt-2)}
       [:div {:class (css :flex :gap-3 :items-center)}
        (let [btn (fn [{:keys [on-click]} content]
                    [:button
                     {:class (css :rounded
                                  :p-1
                                  :border
                                  :border-white
                                  :hover
                                  {:min-height "2.5rem"
                                   :min-width "3rem"}
                                  {:border-color
                                   "var(--navajo-white)"})
                      :on-click on-click} content])]
          (doall
           (map-indexed
            (fn [idx v] (with-meta v {:key idx}))
            [(btn {:on-click (fn []
                               (swap! state cursor-forward
                                      (- @by-how-much)))}
                  [:div {:class (css :text-4xl)} "←"])
             [:div (next-pi-idx s)]
             (btn {:on-click (fn []
                               (swap! state cursor-forward
                                      @by-how-much))}
                  [:div {:class (css :text-4xl)} "→"])

             [:button
              {:class (css :rounded
                           :p-1
                           :flex
                           :items-center
                           :justify-center
                           :border
                           :border-white
                           :hover
                           :text-center
                           {:min-height "2.5rem"
                            :min-width "5rem"}
                           {:border-color
                            "var(--navajo-white)"})
               :on-click (fn []
                           (swap! by-how-much
                                  {100 1000
                                   1000 760
                                   760 100}))}
              @by-how-much]])))]])))

(defn type-area
  [{:keys []}]
  (let [idle? (r/atom false)
        idle-timeout (r/atom nil)
        handle-typed
        (fn [e]
          (cond
            (:adding-key? @state)
            nil
            :else
            (when-let [pi @pi]
              (let [k (or
                       ((@state :keymap) (str (.-key e)))
                       ((@state :keymap) (lib/event->key-chord e))
                       (str (.-key e)))]
                (when (correct? pi k)
                  (set-blink-anim!)
                  (lib/play-sound! "plop.mp3" 1)
                  (swap! game-state spawn-firefly!))
                (swap! state update-typed pi k)
                (swap! idle? (constantly false))))))
        keydown-listener
        (fn [e]
          (handle-typed e)
          #_(if (= (.-key e) "Tab")
              nil
              (when @active?
                (handle-typed (.-key e))
                (.preventDefault e))))]
    (r/create-class
     {:component-did-mount
      (fn []
        (js/window.addEventListener "keydown" keydown-listener))
      :component-will-unmount
      (fn []
        (js/window.removeEventListener "keydown" keydown-listener))
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
                         {:max-width "95%"
                          ;; :min-width "50%"
                          }
                         {:min-height "4rem"}
                         :rounded
                         :p-6
                         :border-2
                         {:border-color "transparent"}
                         :rounded)
              {:keys [page-idx cursor-idx per-page
                      typed]}
              @state]
          [:div
           {:class [$base
                    (when (page-almost-succ? @state)
                      $almost-done)
                    (when (= :playing @blink-anim-state)
                      "u-blink-green-anim")]
            :tabIndex "0"}
           [:div {:class (css :relative)}
            [:div
             {:class (css :absolute
                          {:left "2rem" :top "-8rem"})}
             [:div
              {:class [(css :text-6xl
                            {:transition "0.3s all"})
                       (when (odd? cursor-idx)
                         (css
                          {:color
                           "var(--green-yellow)"}))]}
              "π"]]]
           [type-area-characters
            (let [s @state]
              {:cursor-idx cursor-idx
               :grouping-scheme (:grouping-scheme s)
               :incorrect-counter (:incorrect-counter s)
               :idle @idle?
               :page-idx page-idx
               :per-page per-page
               :pi @pi
               :typed typed})]

           [:div {:class (css :relative)}
            [:div
             {:class (css :absolute
                          {:bottom "-5rem" :left "-1rem"}
                          :text-3xl)} page-idx]]]))})))


(defn bookmark-ui
  []
  [:div {:class (css :items-center :flex :gap-2)}
   [:div
    {:tabIndex "0"
     :class
     (css :flex
          ;; $button
          :p-1
          :rounded

          :my-1 :cursor-pointer
          :max-w-fit {:background-color
                      "var(--navajo-white)"
                      ;; :border-color
                      ;; "var(--navajo-white)"
                      :color "black"})
     :on-click
     (fn []
       (swap! state update
              :bookmarks
              (fn [bks]
                (if-not
                    (= (next-pi-idx @state) (peek bks))
                    (conj bks (next-pi-idx @state))
                    bks)))
       (js/localStorage.setItem
        "bookmarks"
        (prn-str (:bookmarks @state))))}
    "bookmark"]
   [:div {:class (css :m-1 :flex :gap-2)}
    (doall (for [[idx bk] (map-indexed vector
                                       (:bookmarks @state))]
             [:div
              {:class (css :text-sm
                           :flex :items-center
                           :justify-between :cursor-pointer
                           :p-1 :rounded-full
                           :hover {:background-color
                                   "var(--navajo-white)"
                                   :color "black"})
               :key idx
               :on-click (fn []
                           (swap! state cursor-forward
                                  (- bk (next-pi-idx @state))))
               :tabIndex "0"}]))]])


(defn set-keybind
  [state kchord]
  (-> state
      (assoc-in [:keymap kchord] (:target (:add-key state)))
      (dissoc :add-key)
      (dissoc :dialog)))

(defn delete-keybind
  [state kchord]
  (->
    (reduce
      (fn [state kchord]
        (update state :keymap (fn [km] (dissoc km kchord))))
      state
      (concat [kchord]
              (when-not (lib/key-chord-composed? kchord)
                [(:key kchord)])))
    (dissoc :add-key)
    (dissoc :dialog)))

(defmulti dialog (fn [k _] k))

(defmethod dialog :add-key
  [_ _]
  (let [what-you-just-pressed (r/atom nil)
        $inacitve (css :border-transparent)
        $active (css :border-white)
        keydown-listener (fn [e]
                           (reset! what-you-just-pressed
                                   (lib/event->key-chord e)))
        keyup-listener (fn [_e]
                         (when @what-you-just-pressed
                           (swap! state set-keybind
                                  @what-you-just-pressed)
                           (js/localStorage.setItem
                            "keymap"
                            (prn-str (:keymap @state)))))]
    (r/create-class
     {:component-did-mount
      (fn []
        (js/window.addEventListener "keydown"
                                    keydown-listener)
        (js/window.addEventListener "keyup"
                                    keyup-listener))
      :component-will-unmount
      (fn []
        (js/window.removeEventListener "keydown"
                                       keydown-listener)
        (js/window.removeEventListener "keyup"
                                       keyup-listener))
      :name :type-area
      :reagent-render
      (fn [_ s] [:div
                 {:class ["u-background-lighter"
                          (css :p-3 :border
                               :flex :items-center
                               :justify-center :flex-col)
                          (if @what-you-just-pressed
                            $active
                            $inacitve)]}
                 [:div "Press to asign "
                  [:strong
                   {:class
                    (css :font-extrabold)}
                   (-> s :add-key :target)]]
                 [:div
                  {:class (css {:min-height "6rem"})}
                  (when @what-you-just-pressed
                    [:div
                     {:class (css :justify-center :flex
                                  :items-center
                                  :flex-col)}
                     [:div
                      (lib/key-chord->printed
                       @what-you-just-pressed)]
                     [:div "release to assign"]])]])})))


(defmethod dialog :delete-key
  [_ _]
  (let [what-you-just-pressed (r/atom nil)
        $inacitve (css :border-transparent)
        $active (css :border-white)
        keydown-listener (fn [e]
                           (reset! what-you-just-pressed
                                   (lib/event->key-chord e)))
        keyup-listener (fn [_e]
                         (when @what-you-just-pressed
                           (swap! state
                                  delete-keybind
                                  @what-you-just-pressed)
                           (js/localStorage.setItem
                            "keymap"
                            (prn-str (:keymap @state)))))]
    (r/create-class
     {:component-did-mount
      (fn []
        (js/window.addEventListener "keydown"
                                    keydown-listener)
        (js/window.addEventListener "keyup"
                                    keyup-listener))
      :component-will-unmount
      (fn []
        (js/window.removeEventListener "keydown"
                                       keydown-listener)
        (js/window.removeEventListener "keyup"
                                       keyup-listener))
      :name :type-area
      :reagent-render
      (fn [_ s]
        [:div
         {:class ["u-background-lighter"
                  (css :p-3 :border
                       :flex :items-center
                       :justify-center :flex-col)
                  (if @what-you-just-pressed
                    $active
                    $inacitve)]} [:div "Press to delete"]
         [:div {:class (css {:min-height "6rem"})}
          (when @what-you-just-pressed
            [:div
             {:class (css :justify-center :flex
                          :items-center :flex-col)}
             [:div
              (lib/key-chord->printed
               @what-you-just-pressed)]
             [:div "release to delete"]])]])})))


(defn ui
  []
  [:div
   [:div {:class (css :flex :justify-center)}
    [:h1 {:class (css :mt-8 :font-bold)} "Type PI"]]
   [fireflies]
   [:div {:class (css :flex :flex-col :gap-16)}
    [:div
     {:class (css {:min-height "50vh"}
                  :flex
                  :flex-col :items-center
                  :justify-center :w-full)}
     (if (:dialog @state)
       [dialog (:dialog @state) @state]
       [type-area])]
    [:div
     {:class
      (css :flex :gap-2 :w-full :justify-between)}
     [:div {:class (css :ml-20)}
      [:button
       {:on-click (fn []
                    (swap! state assoc
                           :hide-things?
                           (not (@state :hide-things?)))
                    (js/localStorage.setItem
                     "hide-things?"
                     (prn-str (@state :hide-things?))))}
       (if (:hide-things? @state)
         "👀 show elements"
         "👀 hide elements")]
      (when-not (:hide-things? @state) [bookmark-ui])
      [page-overview-ui @state]
      (when-not (:hide-things? @state)
        [index-jump-ui @state])
      (when-not (:hide-things? @state)
        [:div
         {:class (css :cursor-pointer
                      :border :border-white
                      :max-w-fit :p-1
                      :rounded {:margin-top "40vh"})
          :on-click (fn []
                      (swap! state assoc :bookmarks [])
                      (js/localStorage.removeItem
                       "bookmarks"))
          :tabIndex "0"}
         "delete bookmarks"])]
     [:div
      {:class (css :w-full :flex :justify-end)}
      [:div
       {:class
        (css
          {:margin-right "25vw"
           :min-width "20rem"})}
       (when-not (:hide-things? @state)
         [:div {:class (css :flex :flex-col :gap-2)}
          [:div "keymap"]
          [keymap-ui]
          [:button
           {:class (css :rounded :p-1 :border :border-white)
            :on-click
            (fn []
              (js/scrollTo 0 0)
              (swap! state assoc :dialog :delete-key))}
           "Delete a key"]])]]]]])

;; -----------------------------------------

;; state setup

(-> (js/fetch "pi.txt")
    (.then #(.. % text))
    (.then (fn [r]
             (reset! pi r))))

(when-let [bookmarks (js/localStorage.getItem "bookmarks")]
  (swap! state assoc :bookmarks (try
                                  (edn/read-string bookmarks)
                                  (catch js/Error _ []))))

(when-let [idx (:idx (lib/current-search-params))]
    (swap! state cursor-forward
           idx))

;; http://localhost:8090/?idx=312

(defn ^:dev/after-load page
  []
  (rd/render [ui] (.getElementById js/document "app"))
  (let [zero (atom (.. js/document -timeline -currentTime))]
    (letfn [(animate [t]
              (let [dt (/ (- t @zero) 1000)]
                (reset! zero t)
                (when (#{:type-pi} (:page @state))
                  (swap! game-state update
                         :entities
                         (fn [ents]
                           (-> ents
                               (lib/physics-update-2d dt)
                               (lib/update-entities dt))))))
              (js/requestAnimationFrame animate))]
      (js/requestAnimationFrame animate))))


(comment
  (apply str (take 50 (drop 760 @pi)))
  "49999998372978049951059731732816096318595024459455")
