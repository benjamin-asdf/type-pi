goog.provide('bennischwerdtner.typepi.page');
bennischwerdtner.typepi.page.dark_surface_color = "#121212";
bennischwerdtner.typepi.page.dark_lighter = "#1a1a1a";
bennischwerdtner.typepi.page.dark_lightest = "#454545";
bennischwerdtner.typepi.page.navajo_white = "#ffdead";
bennischwerdtner.typepi.page.green_yellow = "#adff2f";
if((typeof bennischwerdtner !== 'undefined') && (typeof bennischwerdtner.typepi !== 'undefined') && (typeof bennischwerdtner.typepi.page !== 'undefined') && (typeof bennischwerdtner.typepi.page.pi !== 'undefined')){
} else {
bennischwerdtner.typepi.page.pi = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
}
bennischwerdtner.typepi.page.commands = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(10))),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"back","back",-417520012),new cljs.core.Keyword(null,"reveal","reveal",-131374202),new cljs.core.Keyword(null,"reveal-group","reveal-group",-379236085),new cljs.core.Keyword(null,"reveal-page","reveal-page",2100686331)], null)));
bennischwerdtner.typepi.page.default_keymap = cljs.core.PersistentHashMap.fromArrays(["d","n","Backspace","z","w","s","f","e","q","p","j","x","v","a","t",":","i","k","b",".","y",";","g","l","u","h","m","o","c",">"],["4","9",new cljs.core.Keyword(null,"back","back",-417520012),"6","2","6","6","5","7","8","9","3","1","1","4",new cljs.core.Keyword(null,"reveal-group","reveal-group",-379236085),"9","4","2",new cljs.core.Keyword(null,"repeat","repeat",832692087),"5",new cljs.core.Keyword(null,"reveal","reveal",-131374202),"7","2","0","8","3","0","3",new cljs.core.Keyword(null,"reveal-page","reveal-page",2100686331)]);
bennischwerdtner.typepi.page.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"cursor-idx","cursor-idx",-650695576),new cljs.core.Keyword(null,"typed","typed",-1899219128),new cljs.core.Keyword(null,"per-page","per-page",-54905429),new cljs.core.Keyword(null,"keymap","keymap",-499605268),new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"bookmarks","bookmarks",1877375283),new cljs.core.Keyword(null,"typed-history","typed-history",1266571667),new cljs.core.Keyword(null,"grouping-scheme","grouping-scheme",423941849),new cljs.core.Keyword(null,"hide-things?","hide-things?",-677887075),new cljs.core.Keyword(null,"page-idx","page-idx",-1616470722),new cljs.core.Keyword(null,"incorrect-counter","incorrect-counter",1289679039)],[(0),cljs.core.PersistentVector.EMPTY,((3) * (((((2) + (1)) + (2)) + (1)) + (2))),(function (){var or__5002__auto__ = (function (){try{return clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(localStorage.getItem("keymap"));
}catch (e48697){if((e48697 instanceof Error)){
var _ = e48697;
return null;
} else {
throw e48697;

}
}})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return bennischwerdtner.typepi.page.default_keymap;
}
})(),new cljs.core.Keyword(null,"type-pi","type-pi",860975041),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,"aabaabaa",(function (){var or__5002__auto__ = (function (){try{return clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(localStorage.getItem("hide-things?"));
}catch (e48698){if((e48698 instanceof Error)){
var _ = e48698;
return false;
} else {
throw e48698;

}
}})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return false;
}
})(),(0),(0)]));
bennischwerdtner.typepi.page.game_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"entities","entities",1940967403),cljs.core.PersistentVector.EMPTY], null));
if((typeof bennischwerdtner !== 'undefined') && (typeof bennischwerdtner.typepi !== 'undefined') && (typeof bennischwerdtner.typepi.page !== 'undefined') && (typeof bennischwerdtner.typepi.page.wobble_anim_state !== 'undefined')){
} else {
bennischwerdtner.typepi.page.wobble_anim_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"idle","idle",-2007156861));
}
if((typeof bennischwerdtner !== 'undefined') && (typeof bennischwerdtner.typepi !== 'undefined') && (typeof bennischwerdtner.typepi.page !== 'undefined') && (typeof bennischwerdtner.typepi.page.blink_anim_state !== 'undefined')){
} else {
bennischwerdtner.typepi.page.blink_anim_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"idle","idle",-2007156861));
}
bennischwerdtner.typepi.page.points = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"green","green",-945526839),(0)], null));
bennischwerdtner.typepi.page.group_by_scheme = (function bennischwerdtner$typepi$page$group_by_scheme(coll,scheme){
var grp = (function bennischwerdtner$typepi$page$group_by_scheme_$_grp(acc,coll__$1){
if(cljs.core.not(cljs.core.seq(coll__$1))){
return acc;
} else {
return bennischwerdtner$typepi$page$group_by_scheme_$_grp(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partition_by.cljs$core$IFn$_invoke$arity$1(cljs.core.first),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (g){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (elm){
return cljs.core.second(elm);
}),g);
}))),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,scheme,coll__$1))),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.count(scheme),coll__$1));
}
});
return grp(cljs.core.PersistentVector.EMPTY,coll);
});
bennischwerdtner.typepi.page.$button = (shadow.css.sel("bennischwerdtner_typepi_page__L126_C14"));
bennischwerdtner.typepi.page.$idle_cursor = (shadow.css.sel("bennischwerdtner_typepi_page__L128_C19"));
bennischwerdtner.typepi.page.$incorrect_blink = (shadow.css.sel("bennischwerdtner_typepi_page__L130_C3"));
bennischwerdtner.typepi.page.$almost_done = (shadow.css.sel("bennischwerdtner_typepi_page__L135_C3"));
bennischwerdtner.typepi.page.page_forward = (function bennischwerdtner$typepi$page$page_forward(state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"page-idx","page-idx",-1616470722),cljs.core.inc),new cljs.core.Keyword(null,"cursor-idx","cursor-idx",-650695576),(0)),new cljs.core.Keyword(null,"typed","typed",-1899219128),cljs.core.PersistentVector.EMPTY);
});
bennischwerdtner.typepi.page.page_backward = (function bennischwerdtner$typepi$page$page_backward(state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"page-idx","page-idx",-1616470722),cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p){
var x__5087__auto__ = p;
var y__5088__auto__ = (0);
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
}),cljs.core.dec)),new cljs.core.Keyword(null,"cursor-idx","cursor-idx",-650695576),(0)),new cljs.core.Keyword(null,"typed","typed",-1899219128),cljs.core.PersistentVector.EMPTY);
});
bennischwerdtner.typepi.page.normalize_page = (function bennischwerdtner$typepi$page$normalize_page(p__48705){
var map__48706 = p__48705;
var map__48706__$1 = cljs.core.__destructure_map(map__48706);
var state = map__48706__$1;
var cursor_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48706__$1,new cljs.core.Keyword(null,"cursor-idx","cursor-idx",-650695576));
var per_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48706__$1,new cljs.core.Keyword(null,"per-page","per-page",-54905429));
if((per_page < (cursor_idx + (1)))){
return bennischwerdtner.typepi.page.page_forward(state);
} else {
if((cursor_idx < (0))){
return bennischwerdtner.typepi.page.page_backward(state);
} else {
return state;

}
}
});
bennischwerdtner.typepi.page.next_pi_idx = (function bennischwerdtner$typepi$page$next_pi_idx(p__48707){
var map__48708 = p__48707;
var map__48708__$1 = cljs.core.__destructure_map(map__48708);
var cursor_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48708__$1,new cljs.core.Keyword(null,"cursor-idx","cursor-idx",-650695576));
var per_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48708__$1,new cljs.core.Keyword(null,"per-page","per-page",-54905429));
var page_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48708__$1,new cljs.core.Keyword(null,"page-idx","page-idx",-1616470722));
return ((per_page * page_idx) + cursor_idx);
});
bennischwerdtner.typepi.page.normalize_state = (function bennischwerdtner$typepi$page$normalize_state(p__48709){
var map__48710 = p__48709;
var map__48710__$1 = cljs.core.__destructure_map(map__48710);
var s = map__48710__$1;
var per_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48710__$1,new cljs.core.Keyword(null,"per-page","per-page",-54905429));
var index = bennischwerdtner.typepi.page.next_pi_idx(s);
var index__$1 = (function (){var x__5087__auto__ = (0);
var y__5088__auto__ = index;
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cursor-idx","cursor-idx",-650695576),cljs.core.mod(index__$1,per_page),new cljs.core.Keyword(null,"index","index",-1531685915),index__$1,new cljs.core.Keyword(null,"page-idx","page-idx",-1616470722),((index__$1 / per_page) | (0)),new cljs.core.Keyword(null,"typed","typed",-1899219128),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.mod(index__$1,per_page),new cljs.core.Keyword(null,"revealed","revealed",-1090849585))),new cljs.core.Keyword(null,"typed-history","typed-history",1266571667),cljs.core.PersistentVector.EMPTY], null)], 0));
});
bennischwerdtner.typepi.page.cursor_forward = (function bennischwerdtner$typepi$page$cursor_forward(state,amount){
return bennischwerdtner.typepi.page.normalize_state(cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"cursor-idx","cursor-idx",-650695576),cljs.core._PLUS_,amount));
});
bennischwerdtner.typepi.page.page_almost_succ_QMARK_ = (function bennischwerdtner$typepi$page$page_almost_succ_QMARK_(p__48711){
var map__48712 = p__48711;
var map__48712__$1 = cljs.core.__destructure_map(map__48712);
var cursor_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48712__$1,new cljs.core.Keyword(null,"cursor-idx","cursor-idx",-650695576));
var per_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48712__$1,new cljs.core.Keyword(null,"per-page","per-page",-54905429));
var typed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48712__$1,new cljs.core.Keyword(null,"typed","typed",-1899219128));
return ((((per_page - (3)) < (cursor_idx + (1)))) && (cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"success","success",1890645906),null], null), null),typed)));
});
bennischwerdtner.typepi.page.correct_QMARK_ = (function bennischwerdtner$typepi$page$correct_QMARK_(pi,k){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(pi,bennischwerdtner.typepi.page.next_pi_idx(cljs.core.deref(bennischwerdtner.typepi.page.state)))),k);
});
bennischwerdtner.typepi.page.incorrect_QMARK_ = (function bennischwerdtner$typepi$page$incorrect_QMARK_(pi,k){
var and__5000__auto__ = (function (){var fexpr__48713 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, ["9",null,"3",null,"4",null,"8",null,"7",null,"5",null,"6",null,"1",null,"0",null,"2",null], null), null);
return (fexpr__48713.cljs$core$IFn$_invoke$arity$1 ? fexpr__48713.cljs$core$IFn$_invoke$arity$1(k) : fexpr__48713.call(null, k));
})();
if(cljs.core.truth_(and__5000__auto__)){
return (!(bennischwerdtner.typepi.page.correct_QMARK_(pi,k)));
} else {
return and__5000__auto__;
}
});
bennischwerdtner.typepi.page.handle_repeat = (function bennischwerdtner$typepi$page$handle_repeat(p__48714,pi){
var map__48715 = p__48714;
var map__48715__$1 = cljs.core.__destructure_map(map__48715);
var state = map__48715__$1;
var typed_history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48715__$1,new cljs.core.Keyword(null,"typed-history","typed-history",1266571667));
var temp__5821__auto__ = cljs.core.first(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(10))))),cljs.core.reverse(typed_history)));
if(cljs.core.truth_(temp__5821__auto__)){
var rep = temp__5821__auto__;
return (bennischwerdtner.typepi.page.update_typed.cljs$core$IFn$_invoke$arity$3 ? bennischwerdtner.typepi.page.update_typed.cljs$core$IFn$_invoke$arity$3(state,pi,rep) : bennischwerdtner.typepi.page.update_typed.call(null, state,pi,rep));
} else {
return state;
}
});
bennischwerdtner.typepi.page.handle_reveal = (function bennischwerdtner$typepi$page$handle_reveal(state){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"typed","typed",-1899219128),cljs.core.conj,new cljs.core.Keyword(null,"success","success",1890645906));
});
bennischwerdtner.typepi.page.reveal_many = (function bennischwerdtner$typepi$page$reveal_many(state,to_reveal){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"typed","typed",-1899219128),(function (typed){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(typed,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(to_reveal,new cljs.core.Keyword(null,"revealed","revealed",-1090849585)));
})),new cljs.core.Keyword(null,"cursor-idx","cursor-idx",-650695576),cljs.core._PLUS_,to_reveal);
});
bennischwerdtner.typepi.page.handle_reveal_group = (function bennischwerdtner$typepi$page$handle_reveal_group(state){
var group_len = cljs.core.count(new cljs.core.Keyword(null,"grouping-scheme","grouping-scheme",423941849).cljs$core$IFn$_invoke$arity$1(state));
return bennischwerdtner.typepi.page.reveal_many(state,(group_len - cljs.core.mod(new cljs.core.Keyword(null,"cursor-idx","cursor-idx",-650695576).cljs$core$IFn$_invoke$arity$1(state),group_len)));
});
bennischwerdtner.typepi.page.reveal_page = (function bennischwerdtner$typepi$page$reveal_page(state){
return bennischwerdtner.typepi.page.reveal_many(state,(new cljs.core.Keyword(null,"per-page","per-page",-54905429).cljs$core$IFn$_invoke$arity$1(state) - cljs.core.mod(new cljs.core.Keyword(null,"cursor-idx","cursor-idx",-650695576).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"per-page","per-page",-54905429).cljs$core$IFn$_invoke$arity$1(state))));
});
bennischwerdtner.typepi.page.handle_back = (function bennischwerdtner$typepi$page$handle_back(state){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"cursor-idx","cursor-idx",-650695576),cljs.core.dec),new cljs.core.Keyword(null,"typed","typed",-1899219128),(function (v){
var G__48716 = v;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,G__48716)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.pop(v);

}
}));
});
bennischwerdtner.typepi.page.update_typed = (function bennischwerdtner$typepi$page$update_typed(p__48717,pi,k){
var map__48718 = p__48717;
var map__48718__$1 = cljs.core.__destructure_map(map__48718);
var state = map__48718__$1;
var per_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48718__$1,new cljs.core.Keyword(null,"per-page","per-page",-54905429));
var page_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48718__$1,new cljs.core.Keyword(null,"page-idx","page-idx",-1616470722));
var page_revealed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48718__$1,new cljs.core.Keyword(null,"page-revealed?","page-revealed?",2046750534));
var correct_QMARK_ = bennischwerdtner.typepi.page.correct_QMARK_(pi,k);
var incorrect_QMARK_ = bennischwerdtner.typepi.page.incorrect_QMARK_(pi,k);
var state__$1 = (function (){var G__48719 = state;
var G__48719__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"back","back",-417520012)))?bennischwerdtner.typepi.page.handle_back(G__48719):G__48719);
var G__48719__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"page-revealed?","page-revealed?",2046750534).cljs$core$IFn$_invoke$arity$1(state))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__48719__$1,new cljs.core.Keyword(null,"page-revealed?","page-revealed?",2046750534)):G__48719__$1);
var G__48719__$3 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"repeat","repeat",832692087),k))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__48719__$2,new cljs.core.Keyword(null,"typed-history","typed-history",1266571667),cljs.core.conj,k):G__48719__$2);
var G__48719__$4 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"repeat","repeat",832692087),k))?bennischwerdtner.typepi.page.handle_repeat(G__48719__$3,pi):G__48719__$3);
var G__48719__$5 = ((((correct_QMARK_) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"reveal","reveal",-131374202)))))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__48719__$4,new cljs.core.Keyword(null,"cursor-idx","cursor-idx",-650695576),cljs.core.inc):G__48719__$4);
var G__48719__$6 = ((((correct_QMARK_) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"reveal","reveal",-131374202)))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48719__$5,new cljs.core.Keyword(null,"incorrect-counter","incorrect-counter",1289679039),(0)):G__48719__$5);
var G__48719__$7 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"reveal","reveal",-131374202)))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__48719__$6,new cljs.core.Keyword(null,"typed","typed",-1899219128),cljs.core.conj,new cljs.core.Keyword(null,"revealed","revealed",-1090849585)):G__48719__$6);
var G__48719__$8 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"reveal-group","reveal-group",-379236085)))?bennischwerdtner.typepi.page.handle_reveal_group(G__48719__$7):G__48719__$7);
var G__48719__$9 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"reveal-page","reveal-page",2100686331)))?bennischwerdtner.typepi.page.reveal_page(G__48719__$8):G__48719__$8);
var G__48719__$10 = ((correct_QMARK_)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__48719__$9,new cljs.core.Keyword(null,"typed","typed",-1899219128),cljs.core.conj,new cljs.core.Keyword(null,"success","success",1890645906)):G__48719__$9);
var G__48719__$11 = (cljs.core.truth_(incorrect_QMARK_)?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__48719__$10,new cljs.core.Keyword(null,"incorrect-counter","incorrect-counter",1289679039),cljs.core.inc):G__48719__$10);
if(cljs.core.truth_((function (){var fexpr__48720 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.vals(new cljs.core.Keyword(null,"keymap","keymap",-499605268).cljs$core$IFn$_invoke$arity$1(state)));
return (fexpr__48720.cljs$core$IFn$_invoke$arity$1 ? fexpr__48720.cljs$core$IFn$_invoke$arity$1(k) : fexpr__48720.call(null, k));
})())){
return bennischwerdtner.typepi.page.normalize_page(G__48719__$11);
} else {
return G__48719__$11;
}
})();
if(cljs.core.truth_((function (){var and__5000__auto__ = (function (){var fexpr__48721 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reveal","reveal",-131374202),null,new cljs.core.Keyword(null,"reveal-group","reveal-group",-379236085),null,new cljs.core.Keyword(null,"reveal-page","reveal-page",2100686331),null], null), null);
return (fexpr__48721.cljs$core$IFn$_invoke$arity$1 ? fexpr__48721.cljs$core$IFn$_invoke$arity$1(k) : fexpr__48721.call(null, k));
})();
if(cljs.core.truth_(and__5000__auto__)){
return (((new cljs.core.Keyword(null,"cursor-idx","cursor-idx",-650695576).cljs$core$IFn$_invoke$arity$1(state__$1) === (0))) && (cljs.core.not(page_revealed_QMARK_)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state__$1,new cljs.core.Keyword(null,"cursor-idx","cursor-idx",-650695576),per_page,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"page-revealed?","page-revealed?",2046750534),true,new cljs.core.Keyword(null,"typed","typed",-1899219128),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(per_page,new cljs.core.Keyword(null,"revealed","revealed",-1090849585))),new cljs.core.Keyword(null,"typed-history","typed-history",1266571667),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"page-idx","page-idx",-1616470722),page_idx], 0));
} else {
return state__$1;
}
});
bennischwerdtner.typepi.page.play_anim_BANG_ = (function bennischwerdtner$typepi$page$play_anim_BANG_(ref,play_time,idle_time){
cljs.core.reset_BANG_(ref,new cljs.core.Keyword(null,"playing","playing",70013335));

return setTimeout((function (){
cljs.core.reset_BANG_(ref,new cljs.core.Keyword(null,"timeout","timeout",-318625318));

return setTimeout((function (){
return cljs.core.reset_BANG_(ref,new cljs.core.Keyword(null,"idle","idle",-2007156861));
}),idle_time);
}),play_time);
});
bennischwerdtner.typepi.page.set_anim_BANG_ = (function bennischwerdtner$typepi$page$set_anim_BANG_(ref,play_time,idle_time){
var G__48722 = cljs.core.deref(ref);
var G__48722__$1 = (((G__48722 instanceof cljs.core.Keyword))?G__48722.fqn:null);
switch (G__48722__$1) {
case "playing":
return null;

break;
case "timeout":
return null;

break;
case "idle":
return bennischwerdtner.typepi.page.play_anim_BANG_(ref,play_time,idle_time);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48722__$1)].join('')));

}
});
bennischwerdtner.typepi.page.set_wobble_anim_BANG_ = (function bennischwerdtner$typepi$page$set_wobble_anim_BANG_(){
return bennischwerdtner.typepi.page.set_anim_BANG_(bennischwerdtner.typepi.page.wobble_anim_state,(100),(50));
});
bennischwerdtner.typepi.page.set_blink_anim_BANG_ = (function bennischwerdtner$typepi$page$set_blink_anim_BANG_(){
return bennischwerdtner.typepi.page.set_anim_BANG_(bennischwerdtner.typepi.page.blink_anim_state,(1200),(50));
});
bennischwerdtner.typepi.page.page_overview_ui = (function bennischwerdtner$typepi$page$page_overview_ui(p__48723){
var map__48724 = p__48723;
var map__48724__$1 = cljs.core.__destructure_map(map__48724);
var state = map__48724__$1;
var cursor_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48724__$1,new cljs.core.Keyword(null,"cursor-idx","cursor-idx",-650695576));
var per_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48724__$1,new cljs.core.Keyword(null,"per-page","per-page",-54905429));
var page_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48724__$1,new cljs.core.Keyword(null,"page-idx","page-idx",-1616470722));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(shadow.css.sel("bennischwerdtner_typepi_page__L312_C12"))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"page: ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(shadow.css.sel("bennischwerdtner_typepi_page__L317_C34"))], null),page_idx], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(shadow.css.sel("bennischwerdtner_typepi_page__L318_C20"))], null)," / ",((cljs.core.count(cljs.core.deref(bennischwerdtner.typepi.page.pi)) / per_page) | (0))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(shadow.css.sel("bennischwerdtner_typepi_page__L320_C25"))], null),"index: "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(shadow.css.sel("bennischwerdtner_typepi_page__L321_C20"))], null),bennischwerdtner.typepi.page.next_pi_idx(state)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(shadow.css.sel("bennischwerdtner_typepi_page__L323_C18"))], null),"cursor: ",cursor_idx], null)], null);
});
bennischwerdtner.typepi.page.character_id = (function bennischwerdtner$typepi$page$character_id(idx){
return ["type-area-character-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join('');
});
bennischwerdtner.typepi.page.type_area_characters = (function bennischwerdtner$typepi$page$type_area_characters(p__48725){
var map__48726 = p__48725;
var map__48726__$1 = cljs.core.__destructure_map(map__48726);
var pi = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48726__$1,new cljs.core.Keyword(null,"pi","pi",-1463757343));
var idle_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48726__$1,new cljs.core.Keyword(null,"idle?","idle?",1779138705));
var grouping_scheme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48726__$1,new cljs.core.Keyword(null,"grouping-scheme","grouping-scheme",423941849));
var cursor_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48726__$1,new cljs.core.Keyword(null,"cursor-idx","cursor-idx",-650695576));
var per_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48726__$1,new cljs.core.Keyword(null,"per-page","per-page",-54905429));
var incorrect_counter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48726__$1,new cljs.core.Keyword(null,"incorrect-counter","incorrect-counter",1289679039));
var page_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48726__$1,new cljs.core.Keyword(null,"page-idx","page-idx",-1616470722));
var typed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48726__$1,new cljs.core.Keyword(null,"typed","typed",-1899219128));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#number-text","div#number-text",-773793202),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(shadow.css.sel("bennischwerdtner_typepi_page__L333_C12"))], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var characters = cljs.core.take.cljs$core$IFn$_invoke$arity$2(per_page,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((page_idx * per_page),pi));
var characters_rendered = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,c){
var incorrect_blink_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cursor_idx,idx))?((2) < incorrect_counter):null);
if(cljs.core.truth_(incorrect_blink_QMARK_)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),["type-area-character-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"relative","relative",22796862)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(shadow.css.sel("bennischwerdtner_typepi_page__L349_C25"))], null),c], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cursor_idx,idx))?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((incorrect_blink_QMARK_)?bennischwerdtner.typepi.page.$incorrect_blink:null))].join(''):null))], null),new cljs.core.Keyword(null,"key","key",-1516042587),idx], null),c], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__48728 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(typed,idx,new cljs.core.Keyword(null,"no","no",-390373634));
var G__48728__$1 = (((G__48728 instanceof cljs.core.Keyword))?G__48728.fqn:null);
switch (G__48728__$1) {
case "wrong":
return "u-error";

break;
case "revealed":
return "u-color-default";

break;
case "no":
return (shadow.css.sel("bennischwerdtner_typepi_page__L375_C39"));

break;
case "success":
return "u-success";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48728__$1)].join('')));

}
})())," ",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cursor_idx,idx))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1((shadow.css.sel("bennischwerdtner_typepi_page__L378_C44")))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(idle_QMARK_)?bennischwerdtner.typepi.page.$idle_cursor:null))].join(''):null)].join('')], null),new cljs.core.Keyword(null,"id","id",-1388402092),["type-area-character-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''),new cljs.core.Keyword(null,"key","key",-1516042587),idx], null),c], null);
}
}),characters);
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,ui){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null),ui], null);
}),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"\u2009\u2009"], null)], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (grp){
return cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"\u2009"], null)], null),grp);
}),bennischwerdtner.typepi.page.group_by_scheme(characters_rendered,grouping_scheme)))], 0))], 0)));
})())], null);
});
bennischwerdtner.typepi.page.firefly = (function bennischwerdtner$typepi$page$firefly(p__48729){
var map__48730 = p__48729;
var map__48730__$1 = cljs.core.__destructure_map(map__48730);
var vec__48731 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48730__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48731,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48731,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),("c-background-success " + shadow.css.sel("bennischwerdtner_typepi_page__L398_C12")),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),x,new cljs.core.Keyword(null,"top","top",-1856271961),y], null)], null)], null);
});
bennischwerdtner.typepi.page.fireflies = (function bennischwerdtner$typepi$page$fireflies(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function bennischwerdtner$typepi$page$fireflies_$_iter__48734(s__48735){
return (new cljs.core.LazySeq(null,(function (){
var s__48735__$1 = s__48735;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__48735__$1);
if(temp__5823__auto__){
var s__48735__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48735__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__48735__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__48737 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__48736 = (0);
while(true){
if((i__48736 < size__5479__auto__)){
var vec__48738 = cljs.core._nth(c__5478__auto__,i__48736);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48738,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48738,(1),null);
cljs.core.chunk_append(b__48737,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bennischwerdtner.typepi.page.firefly,e], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null)));

var G__48811 = (i__48736 + (1));
i__48736 = G__48811;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48737),bennischwerdtner$typepi$page$fireflies_$_iter__48734(cljs.core.chunk_rest(s__48735__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48737),null);
}
} else {
var vec__48741 = cljs.core.first(s__48735__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48741,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48741,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bennischwerdtner.typepi.page.firefly,e], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null)),bennischwerdtner$typepi$page$fireflies_$_iter__48734(cljs.core.rest(s__48735__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(bennischwerdtner.typepi.page.game_state))));
})()),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(shadow.css.sel("bennischwerdtner_typepi_page__L413_C18"))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(shadow.css.sel("bennischwerdtner_typepi_page__L414_C19"))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#green-points","div#green-points",-782739672),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [("c-background-success " + shadow.css.sel("bennischwerdtner_typepi_page__L417_C9")),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"playing","playing",70013335),cljs.core.deref(bennischwerdtner.typepi.page.wobble_anim_state)))?"u-wobble":null)], null)], null),((((1000) < new cljs.core.Keyword(null,"green","green",-945526839).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(bennischwerdtner.typepi.page.points))))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((new cljs.core.Keyword(null,"green","green",-945526839).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(bennischwerdtner.typepi.page.points)) / (1000)) | (0))),"k"].join(''):new cljs.core.Keyword(null,"green","green",-945526839).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(bennischwerdtner.typepi.page.points)))], null)], null)], null)], null);
});
bennischwerdtner.typepi.lib.entity_update.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"firefly","firefly",97973027),(function (e,state){
var reached_target_QMARK_ = (bennischwerdtner.typepi.lib.distance(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(e),new cljs.core.Keyword(null,"green-points-position","green-points-position",1917436396).cljs$core$IFn$_invoke$arity$1(state)) < (40));
if(reached_target_QMARK_){
bennischwerdtner.typepi.page.set_wobble_anim_BANG_();

if(((300) < bennischwerdtner.typepi.lib.age(e))){
bennischwerdtner.typepi.lib.play_sound_BANG_("757612__qubodup__pop-sound.wav",0.5);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bennischwerdtner.typepi.page.points,cljs.core.update,new cljs.core.Keyword(null,"green","green",-945526839),cljs.core.inc);
} else {
}

var G__48744 = e;
var G__48744__$1 = ((((((500) < bennischwerdtner.typepi.lib.age(e))) && ((bennischwerdtner.typepi.lib.age(e) < (1000)))))?bennischwerdtner.typepi.lib.attracted(G__48744,"green-points",0.5):G__48744);
var G__48744__$2 = ((((1000) < bennischwerdtner.typepi.lib.age(e)))?bennischwerdtner.typepi.lib.attracted(G__48744__$1,"green-points",0.4):G__48744__$1);
if(reached_target_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48744__$2,new cljs.core.Keyword(null,"kill?","kill?",1633768568),true);
} else {
return G__48744__$2;
}
}));
bennischwerdtner.typepi.page.spawn_firefly_BANG_ = (function bennischwerdtner$typepi$page$spawn_firefly_BANG_(state){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"entities","entities",1940967403),(function (ents){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(ents,cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((1),(function (){
return bennischwerdtner.typepi.lib.__GT_entity(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"firefly?","firefly?",2082094686),true,new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"firefly","firefly",97973027),new cljs.core.Keyword(null,"forces","forces",337219267),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gravity","gravity",-1815198225),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0.1 + cljs.core.rand.cljs$core$IFn$_invoke$arity$1(0.05))], null)], null),new cljs.core.Keyword(null,"kinetic-energy","kinetic-energy",-625976084),(100),new cljs.core.Keyword(null,"pos","pos",-864607220),bennischwerdtner.typepi.lib.rand_on_element("number-text"),new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bennischwerdtner.typepi.lib.norm((0),(6000)),bennischwerdtner.typepi.lib.norm((-1000),(1000))], null)], null));
})));
}));
});
bennischwerdtner.typepi.page.key_ui = (function bennischwerdtner$typepi$page$key_ui(k){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),("u-background-lightest " + shadow.css.sel("bennischwerdtner_typepi_page__L477_C12")),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return null;
}),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),"0"], null),k], null);
});
bennischwerdtner.typepi.page.keymap_ui = (function bennischwerdtner$typepi$page$keymap_ui(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(shadow.css.sel("bennischwerdtner_typepi_page__L489_C12"))], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function bennischwerdtner$typepi$page$keymap_ui_$_iter__48746(s__48747){
return (new cljs.core.LazySeq(null,(function (){
var s__48747__$1 = s__48747;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__48747__$1);
if(temp__5823__auto__){
var s__48747__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48747__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__48747__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__48749 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__48748 = (0);
while(true){
if((i__48748 < size__5479__auto__)){
var vec__48750 = cljs.core._nth(c__5478__auto__,i__48748);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48750,(0),null);
var vec__48753 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48750,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48753,(0),null);
var keymap_keys = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48753,(1),null);
cljs.core.chunk_append(b__48749,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(shadow.css.sel("bennischwerdtner_typepi_page__L506_C21"))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (i__48748,vec__48750,idx,vec__48753,v,keymap_keys,c__5478__auto__,size__5479__auto__,b__48749,s__48747__$2,temp__5823__auto__){
return (function (idx__$1,o){
return cljs.core.with_meta(o,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx__$1], null));
});})(i__48748,vec__48750,idx,vec__48753,v,keymap_keys,c__5478__auto__,size__5479__auto__,b__48749,s__48747__$2,temp__5823__auto__))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),", "], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__5480__auto__ = ((function (i__48748,vec__48750,idx,vec__48753,v,keymap_keys,c__5478__auto__,size__5479__auto__,b__48749,s__48747__$2,temp__5823__auto__){
return (function bennischwerdtner$typepi$page$keymap_ui_$_iter__48746_$_iter__48756(s__48757){
return (new cljs.core.LazySeq(null,((function (i__48748,vec__48750,idx,vec__48753,v,keymap_keys,c__5478__auto__,size__5479__auto__,b__48749,s__48747__$2,temp__5823__auto__){
return (function (){
var s__48757__$1 = s__48757;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__48757__$1);
if(temp__5823__auto____$1){
var s__48757__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__48757__$2)){
var c__5478__auto____$1 = cljs.core.chunk_first(s__48757__$2);
var size__5479__auto____$1 = cljs.core.count(c__5478__auto____$1);
var b__48759 = cljs.core.chunk_buffer(size__5479__auto____$1);
if((function (){var i__48758 = (0);
while(true){
if((i__48758 < size__5479__auto____$1)){
var k = cljs.core._nth(c__5478__auto____$1,i__48758);
cljs.core.chunk_append(b__48759,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bennischwerdtner.typepi.page.key_ui,k], null));

var G__48812 = (i__48758 + (1));
i__48758 = G__48812;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48759),bennischwerdtner$typepi$page$keymap_ui_$_iter__48746_$_iter__48756(cljs.core.chunk_rest(s__48757__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48759),null);
}
} else {
var k = cljs.core.first(s__48757__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bennischwerdtner.typepi.page.key_ui,k], null),bennischwerdtner$typepi$page$keymap_ui_$_iter__48746_$_iter__48756(cljs.core.rest(s__48757__$2)));
}
} else {
return null;
}
break;
}
});})(i__48748,vec__48750,idx,vec__48753,v,keymap_keys,c__5478__auto__,size__5479__auto__,b__48749,s__48747__$2,temp__5823__auto__))
,null,null));
});})(i__48748,vec__48750,idx,vec__48753,v,keymap_keys,c__5478__auto__,size__5479__auto__,b__48749,s__48747__$2,temp__5823__auto__))
;
return iter__5480__auto__(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(bennischwerdtner.typepi.lib.keychord_or_key__GT_string,keymap_keys)));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),(shadow.css.sel("bennischwerdtner_typepi_page__L521_C34")),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__48748,vec__48750,idx,vec__48753,v,keymap_keys,c__5478__auto__,size__5479__auto__,b__48749,s__48747__$2,temp__5823__auto__){
return (function (){
scrollTo((0),(0));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(bennischwerdtner.typepi.page.state,cljs.core.assoc,new cljs.core.Keyword(null,"dialog","dialog",1415150135),new cljs.core.Keyword(null,"add-key","add-key",909996182),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"add-key","add-key",909996182),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),v], null)], 0));
});})(i__48748,vec__48750,idx,vec__48753,v,keymap_keys,c__5478__auto__,size__5479__auto__,b__48749,s__48747__$2,temp__5823__auto__))
,new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),"0"], null),"+"], null)], null))))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),v], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null)));

var G__48813 = (i__48748 + (1));
i__48748 = G__48813;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48749),bennischwerdtner$typepi$page$keymap_ui_$_iter__48746(cljs.core.chunk_rest(s__48747__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48749),null);
}
} else {
var vec__48760 = cljs.core.first(s__48747__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48760,(0),null);
var vec__48763 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48760,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48763,(0),null);
var keymap_keys = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48763,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(shadow.css.sel("bennischwerdtner_typepi_page__L506_C21"))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (vec__48760,idx,vec__48763,v,keymap_keys,s__48747__$2,temp__5823__auto__){
return (function (idx__$1,o){
return cljs.core.with_meta(o,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx__$1], null));
});})(vec__48760,idx,vec__48763,v,keymap_keys,s__48747__$2,temp__5823__auto__))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),", "], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__5480__auto__ = ((function (vec__48760,idx,vec__48763,v,keymap_keys,s__48747__$2,temp__5823__auto__){
return (function bennischwerdtner$typepi$page$keymap_ui_$_iter__48746_$_iter__48766(s__48767){
return (new cljs.core.LazySeq(null,(function (){
var s__48767__$1 = s__48767;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__48767__$1);
if(temp__5823__auto____$1){
var s__48767__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__48767__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__48767__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__48769 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__48768 = (0);
while(true){
if((i__48768 < size__5479__auto__)){
var k = cljs.core._nth(c__5478__auto__,i__48768);
cljs.core.chunk_append(b__48769,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bennischwerdtner.typepi.page.key_ui,k], null));

var G__48814 = (i__48768 + (1));
i__48768 = G__48814;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48769),bennischwerdtner$typepi$page$keymap_ui_$_iter__48746_$_iter__48766(cljs.core.chunk_rest(s__48767__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48769),null);
}
} else {
var k = cljs.core.first(s__48767__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bennischwerdtner.typepi.page.key_ui,k], null),bennischwerdtner$typepi$page$keymap_ui_$_iter__48746_$_iter__48766(cljs.core.rest(s__48767__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__48760,idx,vec__48763,v,keymap_keys,s__48747__$2,temp__5823__auto__))
;
return iter__5480__auto__(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(bennischwerdtner.typepi.lib.keychord_or_key__GT_string,keymap_keys)));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),(shadow.css.sel("bennischwerdtner_typepi_page__L521_C34")),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__48760,idx,vec__48763,v,keymap_keys,s__48747__$2,temp__5823__auto__){
return (function (){
scrollTo((0),(0));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(bennischwerdtner.typepi.page.state,cljs.core.assoc,new cljs.core.Keyword(null,"dialog","dialog",1415150135),new cljs.core.Keyword(null,"add-key","add-key",909996182),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"add-key","add-key",909996182),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),v], null)], 0));
});})(vec__48760,idx,vec__48763,v,keymap_keys,s__48747__$2,temp__5823__auto__))
,new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),"0"], null),"+"], null)], null))))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),v], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null)),bennischwerdtner$typepi$page$keymap_ui_$_iter__48746(cljs.core.rest(s__48747__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__48745_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,p1__48745_SHARP_);
}),cljs.core.second)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.group_by(cljs.core.val,(function (){var fexpr__48770 = cljs.core.deref(bennischwerdtner.typepi.page.state);
return (fexpr__48770.cljs$core$IFn$_invoke$arity$1 ? fexpr__48770.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"keymap","keymap",-499605268)) : fexpr__48770.call(null, new cljs.core.Keyword(null,"keymap","keymap",-499605268)));
})())),bennischwerdtner.typepi.page.commands))));
})())], null);
});
bennischwerdtner.typepi.page.index_jump_ui = (function bennischwerdtner$typepi$page$index_jump_ui(_){
var by_how_much = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((100));
return (function (s){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(shadow.css.sel("bennischwerdtner_typepi_page__L541_C16"))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(shadow.css.sel("bennischwerdtner_typepi_page__L544_C22"))], null),(function (){var btn = (function (p__48771,content){
var map__48772 = p__48771;
var map__48772__$1 = cljs.core.__destructure_map(map__48772);
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48772__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(shadow.css.sel("bennischwerdtner_typepi_page__L547_C30")),new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click], null),content], null);
});
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,v){
return cljs.core.with_meta(v,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [btn(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(bennischwerdtner.typepi.page.state,bennischwerdtner.typepi.page.cursor_forward,(- cljs.core.deref(by_how_much)));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(shadow.css.sel("bennischwerdtner_typepi_page__L563_C35"))], null),"\u2190"], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(shadow.css.sel("bennischwerdtner_typepi_page__L565_C25")),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(by_how_much,new cljs.core.PersistentArrayMap(null, 3, [(100),(1000),(760),(100),(1000),(760)], null));
})], null),cljs.core.deref(by_how_much)], null),btn(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(bennischwerdtner.typepi.page.state,bennischwerdtner.typepi.page.cursor_forward,cljs.core.deref(by_how_much));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(shadow.css.sel("bennischwerdtner_typepi_page__L587_C35"))], null),"\u2192"], null))], null)));
})()], null)], null);
});
});
bennischwerdtner.typepi.page.type_area = (function bennischwerdtner$typepi$page$type_area(p__48773){
var map__48774 = p__48773;
var map__48774__$1 = cljs.core.__destructure_map(map__48774);
var idle_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var idle_timeout = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var handle_typed = (function (e){
if(cljs.core.truth_(new cljs.core.Keyword(null,"adding-key?","adding-key?",-1709561250).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(bennischwerdtner.typepi.page.state)))){
return null;
} else {
var temp__5823__auto__ = cljs.core.deref(bennischwerdtner.typepi.page.pi);
if(cljs.core.truth_(temp__5823__auto__)){
var pi = temp__5823__auto__;
var k = (function (){var or__5002__auto__ = (function (){var G__48777 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(e.key);
var fexpr__48776 = (function (){var fexpr__48778 = cljs.core.deref(bennischwerdtner.typepi.page.state);
return (fexpr__48778.cljs$core$IFn$_invoke$arity$1 ? fexpr__48778.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"keymap","keymap",-499605268)) : fexpr__48778.call(null, new cljs.core.Keyword(null,"keymap","keymap",-499605268)));
})();
return (fexpr__48776.cljs$core$IFn$_invoke$arity$1 ? fexpr__48776.cljs$core$IFn$_invoke$arity$1(G__48777) : fexpr__48776.call(null, G__48777));
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = (function (){var G__48781 = bennischwerdtner.typepi.lib.event__GT_key_chord(e);
var fexpr__48780 = (function (){var fexpr__48782 = cljs.core.deref(bennischwerdtner.typepi.page.state);
return (fexpr__48782.cljs$core$IFn$_invoke$arity$1 ? fexpr__48782.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"keymap","keymap",-499605268)) : fexpr__48782.call(null, new cljs.core.Keyword(null,"keymap","keymap",-499605268)));
})();
return (fexpr__48780.cljs$core$IFn$_invoke$arity$1 ? fexpr__48780.cljs$core$IFn$_invoke$arity$1(G__48781) : fexpr__48780.call(null, G__48781));
})();
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(e.key);
}
}
})();
if(bennischwerdtner.typepi.page.correct_QMARK_(pi,k)){
bennischwerdtner.typepi.page.set_blink_anim_BANG_();

bennischwerdtner.typepi.lib.play_sound_BANG_("plop.mp3",(1));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(bennischwerdtner.typepi.page.game_state,bennischwerdtner.typepi.page.spawn_firefly_BANG_);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bennischwerdtner.typepi.page.state,bennischwerdtner.typepi.page.update_typed,pi,k);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(idle_QMARK_,cljs.core.constantly(false));
} else {
return null;
}

}
});
var keydown_listener = (function (e){
return handle_typed(e);
});
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
return window.addEventListener("keydown",keydown_listener);
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (){
return window.removeEventListener("keydown",keydown_listener);
}),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"type-area","type-area",796781252),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
var temp__5823__auto___48815 = cljs.core.deref(idle_timeout);
if(cljs.core.truth_(temp__5823__auto___48815)){
var idle_48816 = temp__5823__auto___48815;
clearTimeout(idle_48816);
} else {
}

setTimeout((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(idle_QMARK_,cljs.core.constantly(true));
}),(1000));

var $base = ("u-background-lighter " + shadow.css.sel("bennischwerdtner_typepi_page__L633_C21"));
var map__48783 = cljs.core.deref(bennischwerdtner.typepi.page.state);
var map__48783__$1 = cljs.core.__destructure_map(map__48783);
var page_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48783__$1,new cljs.core.Keyword(null,"page-idx","page-idx",-1616470722));
var cursor_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48783__$1,new cljs.core.Keyword(null,"cursor-idx","cursor-idx",-650695576));
var per_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48783__$1,new cljs.core.Keyword(null,"per-page","per-page",-54905429));
var typed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48783__$1,new cljs.core.Keyword(null,"typed","typed",-1899219128));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [$base,((bennischwerdtner.typepi.page.page_almost_succ_QMARK_(cljs.core.deref(bennischwerdtner.typepi.page.state)))?bennischwerdtner.typepi.page.$almost_done:null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"playing","playing",70013335),cljs.core.deref(bennischwerdtner.typepi.page.blink_anim_state)))?"u-blink-green-anim":null)], null),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),"0"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(shadow.css.sel("bennischwerdtner_typepi_page__L654_C26"))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(shadow.css.sel("bennischwerdtner_typepi_page__L656_C22"))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(shadow.css.sel("bennischwerdtner_typepi_page__L659_C24")),((cljs.core.odd_QMARK_(cursor_idx))?(shadow.css.sel("bennischwerdtner_typepi_page__L662_C26")):null)], null)], null),"\u03C0"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bennischwerdtner.typepi.page.type_area_characters,(function (){var s = cljs.core.deref(bennischwerdtner.typepi.page.state);
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"cursor-idx","cursor-idx",-650695576),cursor_idx,new cljs.core.Keyword(null,"grouping-scheme","grouping-scheme",423941849),new cljs.core.Keyword(null,"grouping-scheme","grouping-scheme",423941849).cljs$core$IFn$_invoke$arity$1(s),new cljs.core.Keyword(null,"incorrect-counter","incorrect-counter",1289679039),new cljs.core.Keyword(null,"incorrect-counter","incorrect-counter",1289679039).cljs$core$IFn$_invoke$arity$1(s),new cljs.core.Keyword(null,"idle","idle",-2007156861),cljs.core.deref(idle_QMARK_),new cljs.core.Keyword(null,"page-idx","page-idx",-1616470722),page_idx,new cljs.core.Keyword(null,"per-page","per-page",-54905429),per_page,new cljs.core.Keyword(null,"pi","pi",-1463757343),cljs.core.deref(bennischwerdtner.typepi.page.pi),new cljs.core.Keyword(null,"typed","typed",-1899219128),typed], null);
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(shadow.css.sel("bennischwerdtner_typepi_page__L677_C26"))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(shadow.css.sel("bennischwerdtner_typepi_page__L679_C22"))], null),page_idx], null)], null)], null);
})], null));
});
bennischwerdtner.typepi.page.bookmark_ui = (function bennischwerdtner$typepi$page$bookmark_ui(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(shadow.css.sel("bennischwerdtner_typepi_page__L686_C17"))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),"0",new cljs.core.Keyword(null,"class","class",-2030961996),(shadow.css.sel("bennischwerdtner_typepi_page__L690_C6")),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bennischwerdtner.typepi.page.state,cljs.core.update,new cljs.core.Keyword(null,"bookmarks","bookmarks",1877375283),(function (bks){
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(bennischwerdtner.typepi.page.next_pi_idx(cljs.core.deref(bennischwerdtner.typepi.page.state)),cljs.core.peek(bks))))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(bks,bennischwerdtner.typepi.page.next_pi_idx(cljs.core.deref(bennischwerdtner.typepi.page.state)));
} else {
return bks;
}
}));

return localStorage.setItem("bookmarks",cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"bookmarks","bookmarks",1877375283).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(bennischwerdtner.typepi.page.state))], 0)));
})], null),"bookmark"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(shadow.css.sel("bennischwerdtner_typepi_page__L714_C18"))], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function bennischwerdtner$typepi$page$bookmark_ui_$_iter__48784(s__48785){
return (new cljs.core.LazySeq(null,(function (){
var s__48785__$1 = s__48785;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__48785__$1);
if(temp__5823__auto__){
var s__48785__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48785__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__48785__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__48787 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__48786 = (0);
while(true){
if((i__48786 < size__5479__auto__)){
var vec__48788 = cljs.core._nth(c__5478__auto__,i__48786);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48788,(0),null);
var bk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48788,(1),null);
cljs.core.chunk_append(b__48787,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),(shadow.css.sel("bennischwerdtner_typepi_page__L718_C23")),new cljs.core.Keyword(null,"key","key",-1516042587),idx,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__48786,vec__48788,idx,bk,c__5478__auto__,size__5479__auto__,b__48787,s__48785__$2,temp__5823__auto__){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(bennischwerdtner.typepi.page.state,bennischwerdtner.typepi.page.cursor_forward,(bk - bennischwerdtner.typepi.page.next_pi_idx(cljs.core.deref(bennischwerdtner.typepi.page.state))));
});})(i__48786,vec__48788,idx,bk,c__5478__auto__,size__5479__auto__,b__48787,s__48785__$2,temp__5823__auto__))
,new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),"0"], null)], null));

var G__48817 = (i__48786 + (1));
i__48786 = G__48817;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48787),bennischwerdtner$typepi$page$bookmark_ui_$_iter__48784(cljs.core.chunk_rest(s__48785__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48787),null);
}
} else {
var vec__48791 = cljs.core.first(s__48785__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48791,(0),null);
var bk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48791,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),(shadow.css.sel("bennischwerdtner_typepi_page__L718_C23")),new cljs.core.Keyword(null,"key","key",-1516042587),idx,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__48791,idx,bk,s__48785__$2,temp__5823__auto__){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(bennischwerdtner.typepi.page.state,bennischwerdtner.typepi.page.cursor_forward,(bk - bennischwerdtner.typepi.page.next_pi_idx(cljs.core.deref(bennischwerdtner.typepi.page.state))));
});})(vec__48791,idx,bk,s__48785__$2,temp__5823__auto__))
,new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),"0"], null)], null),bennischwerdtner$typepi$page$bookmark_ui_$_iter__48784(cljs.core.rest(s__48785__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,new cljs.core.Keyword(null,"bookmarks","bookmarks",1877375283).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(bennischwerdtner.typepi.page.state))));
})())], null)], null);
});
bennischwerdtner.typepi.page.set_keybind = (function bennischwerdtner$typepi$page$set_keybind(state,kchord){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keymap","keymap",-499605268),kchord], null),new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"add-key","add-key",909996182).cljs$core$IFn$_invoke$arity$1(state))),new cljs.core.Keyword(null,"add-key","add-key",909996182)),new cljs.core.Keyword(null,"dialog","dialog",1415150135));
});
bennischwerdtner.typepi.page.delete_keybind = (function bennischwerdtner$typepi$page$delete_keybind(state,kchord){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (state__$1,kchord__$1){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"keymap","keymap",-499605268),(function (km){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(km,kchord__$1);
}));
}),state,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kchord], null),(cljs.core.truth_(bennischwerdtner.typepi.lib.key_chord_composed_QMARK_(kchord))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(kchord)], null)))),new cljs.core.Keyword(null,"add-key","add-key",909996182)),new cljs.core.Keyword(null,"dialog","dialog",1415150135));
});
if((typeof bennischwerdtner !== 'undefined') && (typeof bennischwerdtner.typepi !== 'undefined') && (typeof bennischwerdtner.typepi.page !== 'undefined') && (typeof bennischwerdtner.typepi.page.dialog !== 'undefined')){
} else {
bennischwerdtner.typepi.page.dialog = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__48794 = cljs.core.get_global_hierarchy;
return (fexpr__48794.cljs$core$IFn$_invoke$arity$0 ? fexpr__48794.cljs$core$IFn$_invoke$arity$0() : fexpr__48794.call(null, ));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("bennischwerdtner.typepi.page","dialog"),(function (k,_){
return k;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
bennischwerdtner.typepi.page.dialog.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"add-key","add-key",909996182),(function (_,___$1){
var what_you_just_pressed = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var $inacitve = (shadow.css.sel("bennischwerdtner_typepi_page__L757_C19"));
var $active = (shadow.css.sel("bennischwerdtner_typepi_page__L758_C17"));
var keydown_listener = (function (e){
var kc = bennischwerdtner.typepi.lib.event__GT_key_chord(e);
if(cljs.core.truth_((function (){var G__48796 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(kc);
var fexpr__48795 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["Alt",null,"Control",null,"Meta",null,"Shift",null], null), null);
return (fexpr__48795.cljs$core$IFn$_invoke$arity$1 ? fexpr__48795.cljs$core$IFn$_invoke$arity$1(G__48796) : fexpr__48795.call(null, G__48796));
})())){
return null;
} else {
return cljs.core.reset_BANG_(what_you_just_pressed,bennischwerdtner.typepi.lib.event__GT_key_chord(e));
}
});
var keyup_listener = (function (_e){
if(cljs.core.truth_(cljs.core.deref(what_you_just_pressed))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(bennischwerdtner.typepi.page.state,bennischwerdtner.typepi.page.set_keybind,cljs.core.deref(what_you_just_pressed));

return localStorage.setItem("keymap",cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keymap","keymap",-499605268).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(bennischwerdtner.typepi.page.state))], 0)));
} else {
return null;
}
});
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
window.addEventListener("keydown",keydown_listener);

return window.addEventListener("keyup",keyup_listener);
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (){
window.removeEventListener("keydown",keydown_listener);

return window.removeEventListener("keyup",keyup_listener);
}),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"type-area","type-area",796781252),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (___$2,s){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["u-background-lighter",(shadow.css.sel("bennischwerdtner_typepi_page__L791_C27")),(cljs.core.truth_(cljs.core.deref(what_you_just_pressed))?$active:$inacitve)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Press to asign ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(shadow.css.sel("bennischwerdtner_typepi_page__L800_C21"))], null),new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"add-key","add-key",909996182).cljs$core$IFn$_invoke$arity$1(s))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(shadow.css.sel("bennischwerdtner_typepi_page__L803_C27"))], null),(cljs.core.truth_(cljs.core.deref(what_you_just_pressed))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(shadow.css.sel("bennischwerdtner_typepi_page__L806_C30"))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),bennischwerdtner.typepi.lib.key_chord__GT_printed(cljs.core.deref(what_you_just_pressed))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"release to assign"], null)], null):null)], null)], null);
})], null));
}));
bennischwerdtner.typepi.page.dialog.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"delete-key","delete-key",1385635171),(function (_,___$1){
var what_you_just_pressed = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var $inacitve = (shadow.css.sel("bennischwerdtner_typepi_page__L817_C19"));
var $active = (shadow.css.sel("bennischwerdtner_typepi_page__L818_C17"));
var keydown_listener = (function (e){
return cljs.core.reset_BANG_(what_you_just_pressed,bennischwerdtner.typepi.lib.event__GT_key_chord(e));
});
var keyup_listener = (function (_e){
if(cljs.core.truth_(cljs.core.deref(what_you_just_pressed))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(bennischwerdtner.typepi.page.state,bennischwerdtner.typepi.page.delete_keybind,cljs.core.deref(what_you_just_pressed));

return localStorage.setItem("keymap",cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keymap","keymap",-499605268).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(bennischwerdtner.typepi.page.state))], 0)));
} else {
return null;
}
});
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
window.addEventListener("keydown",keydown_listener);

return window.addEventListener("keyup",keyup_listener);
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (){
window.removeEventListener("keydown",keydown_listener);

return window.removeEventListener("keyup",keyup_listener);
}),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"type-area","type-area",796781252),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (___$2,s){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["u-background-lighter",(shadow.css.sel("bennischwerdtner_typepi_page__L848_C19")),(cljs.core.truth_(cljs.core.deref(what_you_just_pressed))?$active:$inacitve)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Press to delete"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(shadow.css.sel("bennischwerdtner_typepi_page__L854_C24"))], null),(cljs.core.truth_(cljs.core.deref(what_you_just_pressed))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(shadow.css.sel("bennischwerdtner_typepi_page__L857_C22"))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),bennischwerdtner.typepi.lib.key_chord__GT_printed(cljs.core.deref(what_you_just_pressed))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"release to delete"], null)], null):null)], null)], null);
})], null));
}));
bennischwerdtner.typepi.page.ui = (function bennischwerdtner$typepi$page$ui(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(shadow.css.sel("bennischwerdtner_typepi_page__L868_C18"))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(shadow.css.sel("bennischwerdtner_typepi_page__L869_C18"))], null),"Type PI"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bennischwerdtner.typepi.page.fireflies], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(shadow.css.sel("bennischwerdtner_typepi_page__L871_C18"))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(shadow.css.sel("bennischwerdtner_typepi_page__L873_C14"))], null),(cljs.core.truth_(new cljs.core.Keyword(null,"dialog","dialog",1415150135).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(bennischwerdtner.typepi.page.state)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bennischwerdtner.typepi.page.dialog,new cljs.core.Keyword(null,"dialog","dialog",1415150135).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(bennischwerdtner.typepi.page.state)),cljs.core.deref(bennischwerdtner.typepi.page.state)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bennischwerdtner.typepi.page.type_area], null))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(shadow.css.sel("bennischwerdtner_typepi_page__L881_C14"))], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(shadow.css.sel("bennischwerdtner_typepi_page__L882_C20"))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bennischwerdtner.typepi.page.state,cljs.core.assoc,new cljs.core.Keyword(null,"hide-things?","hide-things?",-677887075),cljs.core.not((function (){var fexpr__48797 = cljs.core.deref(bennischwerdtner.typepi.page.state);
return (fexpr__48797.cljs$core$IFn$_invoke$arity$1 ? fexpr__48797.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hide-things?","hide-things?",-677887075)) : fexpr__48797.call(null, new cljs.core.Keyword(null,"hide-things?","hide-things?",-677887075)));
})()));

return localStorage.setItem("hide-things?",cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__48798 = cljs.core.deref(bennischwerdtner.typepi.page.state);
return (fexpr__48798.cljs$core$IFn$_invoke$arity$1 ? fexpr__48798.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hide-things?","hide-things?",-677887075)) : fexpr__48798.call(null, new cljs.core.Keyword(null,"hide-things?","hide-things?",-677887075)));
})()], 0)));
})], null),(cljs.core.truth_(new cljs.core.Keyword(null,"hide-things?","hide-things?",-677887075).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(bennischwerdtner.typepi.page.state)))?"\uD83D\uDC40 show elements":"\uD83D\uDC40 hide elements")], null),(cljs.core.truth_(new cljs.core.Keyword(null,"hide-things?","hide-things?",-677887075).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(bennischwerdtner.typepi.page.state)))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bennischwerdtner.typepi.page.bookmark_ui], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bennischwerdtner.typepi.page.page_overview_ui,cljs.core.deref(bennischwerdtner.typepi.page.state)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"hide-things?","hide-things?",-677887075).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(bennischwerdtner.typepi.page.state)))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bennischwerdtner.typepi.page.index_jump_ui,cljs.core.deref(bennischwerdtner.typepi.page.state)], null)),(cljs.core.truth_(new cljs.core.Keyword(null,"hide-things?","hide-things?",-677887075).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(bennischwerdtner.typepi.page.state)))?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),(shadow.css.sel("bennischwerdtner_typepi_page__L900_C18")),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bennischwerdtner.typepi.page.state,cljs.core.assoc,new cljs.core.Keyword(null,"bookmarks","bookmarks",1877375283),cljs.core.PersistentVector.EMPTY);

return localStorage.removeItem("bookmarks");
}),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),"0"], null),"delete bookmarks"], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(shadow.css.sel("bennischwerdtner_typepi_page__L909_C20"))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(shadow.css.sel("bennischwerdtner_typepi_page__L911_C16"))], null),(cljs.core.truth_(new cljs.core.Keyword(null,"hide-things?","hide-things?",-677887075).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(bennischwerdtner.typepi.page.state)))?null:new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(shadow.css.sel("bennischwerdtner_typepi_page__L916_C12"))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"keymap"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bennischwerdtner.typepi.page.keymap_ui], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(shadow.css.sel("bennischwerdtner_typepi_page__L921_C20"))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(shadow.css.sel("bennischwerdtner_typepi_page__L923_C21")),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
scrollTo((0),(0));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bennischwerdtner.typepi.page.state,cljs.core.assoc,new cljs.core.Keyword(null,"dialog","dialog",1415150135),new cljs.core.Keyword(null,"delete-key","delete-key",1385635171));
})], null),"Delete a key"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(shadow.css.sel("bennischwerdtner_typepi_page__L932_C21")),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bennischwerdtner.typepi.page.state,cljs.core.assoc,new cljs.core.Keyword(null,"keymap","keymap",-499605268),bennischwerdtner.typepi.page.default_keymap);

return localStorage.removeItem("keymap");
})], null),"Reset keymap"], null)], null)], null))], null)], null)], null)], null)], null);
});
bennischwerdtner.typepi.page.setup = (function bennischwerdtner$typepi$page$setup(){
fetch("pi.txt").then((function (p1__48799_SHARP_){
return p1__48799_SHARP_.text();
})).then((function (r){
return cljs.core.reset_BANG_(bennischwerdtner.typepi.page.pi,r);
}));

var temp__5823__auto___48818 = localStorage.getItem("bookmarks");
if(cljs.core.truth_(temp__5823__auto___48818)){
var bookmarks_48819 = temp__5823__auto___48818;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bennischwerdtner.typepi.page.state,cljs.core.assoc,new cljs.core.Keyword(null,"bookmarks","bookmarks",1877375283),(function (){try{return clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(bookmarks_48819);
}catch (e48800){if((e48800 instanceof Error)){
var _ = e48800;
return cljs.core.PersistentVector.EMPTY;
} else {
throw e48800;

}
}})());
} else {
}

var temp__5823__auto___48820 = new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(bennischwerdtner.typepi.lib.current_search_params());
if(cljs.core.truth_(temp__5823__auto___48820)){
var idx_48821 = temp__5823__auto___48820;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(bennischwerdtner.typepi.page.state,bennischwerdtner.typepi.page.cursor_forward,idx_48821);
} else {
}

var zero_48822 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(document.timeline.currentTime);
var animate = (function bennischwerdtner$typepi$page$setup_$_animate(t){
var dt_48823 = ((t - cljs.core.deref(zero_48822)) / (1000));
cljs.core.reset_BANG_(zero_48822,t);

if(cljs.core.truth_((function (){var G__48806 = new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(bennischwerdtner.typepi.page.state));
var fexpr__48805 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type-pi","type-pi",860975041),null], null), null);
return (fexpr__48805.cljs$core$IFn$_invoke$arity$1 ? fexpr__48805.cljs$core$IFn$_invoke$arity$1(G__48806) : fexpr__48805.call(null, G__48806));
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bennischwerdtner.typepi.page.game_state,cljs.core.update,new cljs.core.Keyword(null,"entities","entities",1940967403),(function (ents){
var _STAR_dt_STAR__orig_val__48807 = bennischwerdtner.typepi.lib._STAR_dt_STAR_;
var _STAR_dt_STAR__temp_val__48808 = dt_48823;
(bennischwerdtner.typepi.lib._STAR_dt_STAR_ = _STAR_dt_STAR__temp_val__48808);

try{return bennischwerdtner.typepi.lib.update_entities(bennischwerdtner.typepi.lib.physics_update_2d(ents,dt_48823),dt_48823);
}finally {(bennischwerdtner.typepi.lib._STAR_dt_STAR_ = _STAR_dt_STAR__orig_val__48807);
}}));
} else {
}

return requestAnimationFrame(bennischwerdtner$typepi$page$setup_$_animate);
});
requestAnimationFrame(animate);

return new cljs.core.Keyword(null,"setup","setup",1987730512);
});
if((typeof bennischwerdtner !== 'undefined') && (typeof bennischwerdtner.typepi !== 'undefined') && (typeof bennischwerdtner.typepi.page !== 'undefined') && (typeof bennischwerdtner.typepi.page.setup_QMARK_ !== 'undefined')){
} else {
bennischwerdtner.typepi.page.setup_QMARK_ = bennischwerdtner.typepi.page.setup();
}
bennischwerdtner.typepi.page.page = (function bennischwerdtner$typepi$page$page(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bennischwerdtner.typepi.page.ui], null),document.getElementById("app"));
});

//# sourceMappingURL=bennischwerdtner.typepi.page.js.map
