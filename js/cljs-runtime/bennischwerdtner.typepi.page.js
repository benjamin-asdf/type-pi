goog.provide('bennischwerdtner.typepi.page');
bennischwerdtner.typepi.page.v_STAR_ = (function bennischwerdtner$typepi$page$v_STAR_(a,b){
if(((cljs.core.coll_QMARK_(a)) && (cljs.core.coll_QMARK_(b)))){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._STAR_,a,b));
} else {
if(cljs.core.coll_QMARK_(a)){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._STAR_,a,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(b)));
} else {
if(cljs.core.coll_QMARK_(b)){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._STAR_,b,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(a)));
} else {
return (a * b);

}
}
}
});
bennischwerdtner.typepi.page.v_PLUS_ = (function bennischwerdtner$typepi$page$v_PLUS_(a,b){
if(((cljs.core.coll_QMARK_(a)) && (cljs.core.coll_QMARK_(b)))){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,a,b));
} else {
if(cljs.core.coll_QMARK_(a)){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,a,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(b)));
} else {
if(cljs.core.coll_QMARK_(b)){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,b,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(a)));
} else {
return (a + b);

}
}
}
});
bennischwerdtner.typepi.page.v_ = (function bennischwerdtner$typepi$page$v_(a,b){
return bennischwerdtner.typepi.page.v_PLUS_(a,bennischwerdtner.typepi.page.v_STAR_((-1),b));
});
bennischwerdtner.typepi.page.normalize_vector = (function bennischwerdtner$typepi$page$normalize_vector(v){
var len = Math.sqrt(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59239_SHARP_){
return (p1__59239_SHARP_ * p1__59239_SHARP_);
}),v)));
if((len === (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
} else {
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59240_SHARP_){
return (p1__59240_SHARP_ / len);
}),v));
}
});
bennischwerdtner.typepi.page.vector_len = (function bennischwerdtner$typepi$page$vector_len(v){
return Math.sqrt(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59241_SHARP_){
return (p1__59241_SHARP_ * p1__59241_SHARP_);
}),v)));
});
bennischwerdtner.typepi.page.play_sound_BANG_ = (function bennischwerdtner$typepi$page$play_sound_BANG_(path,volume){
var elm = (function (){var or__5002__auto__ = document.getElementById(["audio-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var elm = document.createElement("audio");
(elm.id = ["audio-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));

(elm.src = path);

(elm.type = "audio/mpeg");

(elm.volume = volume);

document.body.appendChild(elm);

return elm;
}
})();
if(cljs.core.not(elm.paused)){
(elm.currentTime = (0));
} else {
}

(elm.volume = volume);

return elm.play();
});
bennischwerdtner.typepi.page.dark_surface_color = "#121212";
bennischwerdtner.typepi.page.dark_lighter = "#1a1a1a";
bennischwerdtner.typepi.page.dark_lightest = "#454545";
bennischwerdtner.typepi.page.navajo_white = "#ffdead";
bennischwerdtner.typepi.page.green_yellow = "#adff2f";
if((typeof bennischwerdtner !== 'undefined') && (typeof bennischwerdtner.typepi !== 'undefined') && (typeof bennischwerdtner.typepi.page !== 'undefined') && (typeof bennischwerdtner.typepi.page.pi !== 'undefined')){
} else {
bennischwerdtner.typepi.page.pi = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
}
bennischwerdtner.typepi.page.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"cursor-idx","cursor-idx",-650695576),(0),new cljs.core.Keyword(null,"grouping-scheme","grouping-scheme",423941849),"aabaabaa",new cljs.core.Keyword(null,"keymap","keymap",-499605268),cljs.core.PersistentHashMap.fromArrays(["d","n","Backspace","s","f","e","p","j","ArrowRight","ArrowLeft","a","t",":","i","k","b",".","y",";","g","l","u","h","m","o","c",">"],["4","9",new cljs.core.Keyword(null,"back","back",-417520012),"6","6","5","8","9",new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"left","left",-399115937),"1","4",new cljs.core.Keyword(null,"reveal-group","reveal-group",-379236085),"9","4","2",new cljs.core.Keyword(null,"repeat","repeat",832692087),"5",new cljs.core.Keyword(null,"reveal","reveal",-131374202),"7","2","0","8","3","0","3",new cljs.core.Keyword(null,"reveal-page","reveal-page",2100686331)]),new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"type-pi","type-pi",860975041),new cljs.core.Keyword(null,"page-idx","page-idx",-1616470722),(0),new cljs.core.Keyword(null,"per-page","per-page",-54905429),((3) * (((((2) + (1)) + (2)) + (1)) + (2))),new cljs.core.Keyword(null,"typed","typed",-1899219128),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"typed-history","typed-history",1266571667),cljs.core.PersistentVector.EMPTY], null));
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
bennischwerdtner.typepi.page.$button = (shadow.css.sel("bennischwerdtner_typepi_page__L142_C14"));
bennischwerdtner.typepi.page.$idle_cursor = (shadow.css.sel("bennischwerdtner_typepi_page__L144_C19"));
bennischwerdtner.typepi.page.$almost_done = (shadow.css.sel("bennischwerdtner_typepi_page__L147_C3"));
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
bennischwerdtner.typepi.page.normalize_page = (function bennischwerdtner$typepi$page$normalize_page(p__59242){
var map__59243 = p__59242;
var map__59243__$1 = cljs.core.__destructure_map(map__59243);
var state = map__59243__$1;
var typed_history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59243__$1,new cljs.core.Keyword(null,"typed-history","typed-history",1266571667));
var cursor_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59243__$1,new cljs.core.Keyword(null,"cursor-idx","cursor-idx",-650695576));
var per_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59243__$1,new cljs.core.Keyword(null,"per-page","per-page",-54905429));
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
bennischwerdtner.typepi.page.next_pi_idx = (function bennischwerdtner$typepi$page$next_pi_idx(p__59244){
var map__59245 = p__59244;
var map__59245__$1 = cljs.core.__destructure_map(map__59245);
var cursor_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59245__$1,new cljs.core.Keyword(null,"cursor-idx","cursor-idx",-650695576));
var per_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59245__$1,new cljs.core.Keyword(null,"per-page","per-page",-54905429));
var page_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59245__$1,new cljs.core.Keyword(null,"page-idx","page-idx",-1616470722));
return ((per_page * page_idx) + cursor_idx);
});
bennischwerdtner.typepi.page.normalize_state = (function bennischwerdtner$typepi$page$normalize_state(p__59246){
var map__59247 = p__59246;
var map__59247__$1 = cljs.core.__destructure_map(map__59247);
var s = map__59247__$1;
var cursor_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59247__$1,new cljs.core.Keyword(null,"cursor-idx","cursor-idx",-650695576));
var per_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59247__$1,new cljs.core.Keyword(null,"per-page","per-page",-54905429));
var page_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59247__$1,new cljs.core.Keyword(null,"page-idx","page-idx",-1616470722));
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
bennischwerdtner.typepi.page.page_almost_succ_QMARK_ = (function bennischwerdtner$typepi$page$page_almost_succ_QMARK_(p__59248){
var map__59249 = p__59248;
var map__59249__$1 = cljs.core.__destructure_map(map__59249);
var state = map__59249__$1;
var typed_history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59249__$1,new cljs.core.Keyword(null,"typed-history","typed-history",1266571667));
var cursor_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59249__$1,new cljs.core.Keyword(null,"cursor-idx","cursor-idx",-650695576));
var per_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59249__$1,new cljs.core.Keyword(null,"per-page","per-page",-54905429));
var typed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59249__$1,new cljs.core.Keyword(null,"typed","typed",-1899219128));
return ((((per_page - (3)) < (cursor_idx + (1)))) && (cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"success","success",1890645906),null], null), null),typed)));
});
bennischwerdtner.typepi.page.correct_QMARK_ = (function bennischwerdtner$typepi$page$correct_QMARK_(pi,k){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(pi,bennischwerdtner.typepi.page.next_pi_idx(cljs.core.deref(bennischwerdtner.typepi.page.state)))),k);
});
bennischwerdtner.typepi.page.incorrect_QMARK_ = (function bennischwerdtner$typepi$page$incorrect_QMARK_(pi,k){
var and__5000__auto__ = (function (){var fexpr__59250 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, ["9",null,"3",null,"4",null,"8",null,"7",null,"5",null,"6",null,"1",null,"0",null,"2",null], null), null);
return (fexpr__59250.cljs$core$IFn$_invoke$arity$1 ? fexpr__59250.cljs$core$IFn$_invoke$arity$1(k) : fexpr__59250.call(null, k));
})();
if(cljs.core.truth_(and__5000__auto__)){
return (!(bennischwerdtner.typepi.page.correct_QMARK_(pi,k)));
} else {
return and__5000__auto__;
}
});
bennischwerdtner.typepi.page.handle_repeat = (function bennischwerdtner$typepi$page$handle_repeat(p__59251,pi){
var map__59252 = p__59251;
var map__59252__$1 = cljs.core.__destructure_map(map__59252);
var state = map__59252__$1;
var typed_history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59252__$1,new cljs.core.Keyword(null,"typed-history","typed-history",1266571667));
var temp__5821__auto__ = cljs.core.first(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(10))))),cljs.core.reverse(typed_history)));
if(cljs.core.truth_(temp__5821__auto__)){
var rep = temp__5821__auto__;
return (bennischwerdtner.typepi.page.update_typed.cljs$core$IFn$_invoke$arity$3 ? bennischwerdtner.typepi.page.update_typed.cljs$core$IFn$_invoke$arity$3(state,pi,rep) : bennischwerdtner.typepi.page.update_typed.call(null, state,pi,rep));
} else {
return state;
}
});
bennischwerdtner.typepi.page.handle_reveal = (function bennischwerdtner$typepi$page$handle_reveal(state){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"typed","typed",-1899219128),cljs.core.conj,new cljs.core.Keyword(null,"revealed","revealed",-1090849585));
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
var G__59253 = v;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,G__59253)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.pop(v);

}
}));
});
bennischwerdtner.typepi.page.update_typed = (function bennischwerdtner$typepi$page$update_typed(p__59254,pi,k){
var map__59255 = p__59254;
var map__59255__$1 = cljs.core.__destructure_map(map__59255);
var state = map__59255__$1;
var typed_history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59255__$1,new cljs.core.Keyword(null,"typed-history","typed-history",1266571667));
var per_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59255__$1,new cljs.core.Keyword(null,"per-page","per-page",-54905429));
var page_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59255__$1,new cljs.core.Keyword(null,"page-idx","page-idx",-1616470722));
var page_revealed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59255__$1,new cljs.core.Keyword(null,"page-revealed?","page-revealed?",2046750534));
var correct_QMARK_ = bennischwerdtner.typepi.page.correct_QMARK_(pi,k);
var state__$1 = (function (){var G__59256 = state;
var G__59256__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"back","back",-417520012)))?bennischwerdtner.typepi.page.handle_back(G__59256):G__59256);
var G__59256__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"page-revealed?","page-revealed?",2046750534).cljs$core$IFn$_invoke$arity$1(state))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__59256__$1,new cljs.core.Keyword(null,"page-revealed?","page-revealed?",2046750534)):G__59256__$1);
var G__59256__$3 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"repeat","repeat",832692087),k))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__59256__$2,new cljs.core.Keyword(null,"typed-history","typed-history",1266571667),cljs.core.conj,k):G__59256__$2);
var G__59256__$4 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"repeat","repeat",832692087),k))?bennischwerdtner.typepi.page.handle_repeat(G__59256__$3,pi):G__59256__$3);
var G__59256__$5 = ((((correct_QMARK_) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"reveal","reveal",-131374202)))))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__59256__$4,new cljs.core.Keyword(null,"cursor-idx","cursor-idx",-650695576),cljs.core.inc):G__59256__$4);
var G__59256__$6 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"reveal","reveal",-131374202)))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__59256__$5,new cljs.core.Keyword(null,"typed","typed",-1899219128),cljs.core.conj,new cljs.core.Keyword(null,"revealed","revealed",-1090849585)):G__59256__$5);
var G__59256__$7 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"reveal-group","reveal-group",-379236085)))?bennischwerdtner.typepi.page.handle_reveal_group(G__59256__$6):G__59256__$6);
var G__59256__$8 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"reveal-page","reveal-page",2100686331)))?bennischwerdtner.typepi.page.reveal_page(G__59256__$7):G__59256__$7);
var G__59256__$9 = ((correct_QMARK_)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__59256__$8,new cljs.core.Keyword(null,"typed","typed",-1899219128),cljs.core.conj,new cljs.core.Keyword(null,"success","success",1890645906)):G__59256__$8);
if(cljs.core.truth_((function (){var fexpr__59257 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.vals(new cljs.core.Keyword(null,"keymap","keymap",-499605268).cljs$core$IFn$_invoke$arity$1(state)));
return (fexpr__59257.cljs$core$IFn$_invoke$arity$1 ? fexpr__59257.cljs$core$IFn$_invoke$arity$1(k) : fexpr__59257.call(null, k));
})())){
return bennischwerdtner.typepi.page.normalize_page(G__59256__$9);
} else {
return G__59256__$9;
}
})();
if(cljs.core.truth_((function (){var and__5000__auto__ = (function (){var fexpr__59258 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reveal","reveal",-131374202),null,new cljs.core.Keyword(null,"reveal-group","reveal-group",-379236085),null,new cljs.core.Keyword(null,"reveal-page","reveal-page",2100686331),null], null), null);
return (fexpr__59258.cljs$core$IFn$_invoke$arity$1 ? fexpr__59258.cljs$core$IFn$_invoke$arity$1(k) : fexpr__59258.call(null, k));
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
bennischwerdtner.typepi.page.page_overview_ui = (function bennischwerdtner$typepi$page$page_overview_ui(p__59259){
var map__59260 = p__59259;
var map__59260__$1 = cljs.core.__destructure_map(map__59260);
var state = map__59260__$1;
var typed_history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59260__$1,new cljs.core.Keyword(null,"typed-history","typed-history",1266571667));
var cursor_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59260__$1,new cljs.core.Keyword(null,"cursor-idx","cursor-idx",-650695576));
var per_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59260__$1,new cljs.core.Keyword(null,"per-page","per-page",-54905429));
var page_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59260__$1,new cljs.core.Keyword(null,"page-idx","page-idx",-1616470722));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(shadow.css.sel("bennischwerdtner_typepi_page__L294_C12"))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"page: ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(shadow.css.sel("bennischwerdtner_typepi_page__L300_C20"))], null),page_idx], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(shadow.css.sel("bennischwerdtner_typepi_page__L302_C20"))], null)," / ",((cljs.core.count(cljs.core.deref(bennischwerdtner.typepi.page.pi)) / per_page) | (0))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(shadow.css.sel("bennischwerdtner_typepi_page__L304_C25"))], null),"index: "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(shadow.css.sel("bennischwerdtner_typepi_page__L305_C20"))], null),bennischwerdtner.typepi.page.next_pi_idx(state)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(shadow.css.sel("bennischwerdtner_typepi_page__L307_C18"))], null),"cursor: ",cursor_idx], null)], null);
});
bennischwerdtner.typepi.page.type_area = (function bennischwerdtner$typepi$page$type_area(p__59261){
var map__59262 = p__59261;
var map__59262__$1 = cljs.core.__destructure_map(map__59262);
var idle_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var idle_timeout = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var handle_typed = (function (k){
var temp__5823__auto__ = cljs.core.deref(bennischwerdtner.typepi.page.pi);
if(cljs.core.truth_(temp__5823__auto__)){
var pi = temp__5823__auto__;
var k__$1 = (function (){var G__59265 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(k);
var G__59266 = k;
var fexpr__59264 = (function (){var fexpr__59267 = cljs.core.deref(bennischwerdtner.typepi.page.state);
return (fexpr__59267.cljs$core$IFn$_invoke$arity$1 ? fexpr__59267.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"keymap","keymap",-499605268)) : fexpr__59267.call(null, new cljs.core.Keyword(null,"keymap","keymap",-499605268)));
})();
return (fexpr__59264.cljs$core$IFn$_invoke$arity$2 ? fexpr__59264.cljs$core$IFn$_invoke$arity$2(G__59265,G__59266) : fexpr__59264.call(null, G__59265,G__59266));
})();
if(bennischwerdtner.typepi.page.correct_QMARK_(pi,k__$1)){
(bennischwerdtner.typepi.page.spawn_firefly_BANG_.cljs$core$IFn$_invoke$arity$0 ? bennischwerdtner.typepi.page.spawn_firefly_BANG_.cljs$core$IFn$_invoke$arity$0() : bennischwerdtner.typepi.page.spawn_firefly_BANG_.call(null, ));
} else {
}

if(cljs.core.truth_(bennischwerdtner.typepi.page.incorrect_QMARK_(pi,k__$1))){
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bennischwerdtner.typepi.page.state,bennischwerdtner.typepi.page.update_typed,pi,k__$1);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(idle_QMARK_,cljs.core.constantly(false));
} else {
return null;
}
});
var keydown_listener = window.addEventListener("keydown",(function (e){
return handle_typed(e.key);
}));
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
return window.addEventListener("keydown",keydown_listener);
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (){
return window.removeEventListener("keydown",keydown_listener);
}),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"type-area","type-area",796781252),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
var temp__5823__auto___59350 = cljs.core.deref(idle_timeout);
if(cljs.core.truth_(temp__5823__auto___59350)){
var idle_59351 = temp__5823__auto___59350;
clearTimeout(idle_59351);
} else {
}

setTimeout((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(idle_QMARK_,cljs.core.constantly(true));
}),(1000));

var $base = ("u-background-lighter " + shadow.css.sel("bennischwerdtner_typepi_page__L351_C21"));
var map__59268 = cljs.core.deref(bennischwerdtner.typepi.page.state);
var map__59268__$1 = cljs.core.__destructure_map(map__59268);
var page_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59268__$1,new cljs.core.Keyword(null,"page-idx","page-idx",-1616470722));
var cursor_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59268__$1,new cljs.core.Keyword(null,"cursor-idx","cursor-idx",-650695576));
var per_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59268__$1,new cljs.core.Keyword(null,"per-page","per-page",-54905429));
var typed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59268__$1,new cljs.core.Keyword(null,"typed","typed",-1899219128));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [$base,((bennischwerdtner.typepi.page.page_almost_succ_QMARK_(cljs.core.deref(bennischwerdtner.typepi.page.state)))?bennischwerdtner.typepi.page.$almost_done:null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"playing","playing",70013335),cljs.core.deref(bennischwerdtner.typepi.page.blink_anim_state)))?"u-blink-green-anim":null)], null),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),"0"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(shadow.css.sel("bennischwerdtner_typepi_page__L373_C26"))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(shadow.css.sel("bennischwerdtner_typepi_page__L374_C27"))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(shadow.css.sel("bennischwerdtner_typepi_page__L377_C22")),((cljs.core.odd_QMARK_(cursor_idx))?(shadow.css.sel("bennischwerdtner_typepi_page__L380_C24")):null)], null)], null),"\u03C0"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#number-text","div#number-text",-773793202),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(shadow.css.sel("bennischwerdtner_typepi_page__L385_C14"))], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var characters = cljs.core.take.cljs$core$IFn$_invoke$arity$2(per_page,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((page_idx * per_page),cljs.core.deref(bennischwerdtner.typepi.page.pi)));
var characters_rendered = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,c){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__59270 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(typed,idx,new cljs.core.Keyword(null,"no","no",-390373634));
var G__59270__$1 = (((G__59270 instanceof cljs.core.Keyword))?G__59270.fqn:null);
switch (G__59270__$1) {
case "wrong":
return "u-error";

break;
case "revealed":
return "u-color-default";

break;
case "no":
return (shadow.css.sel("bennischwerdtner_typepi_page__L403_C41"));

break;
default:
return "u-success";

}
})())," ",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cursor_idx,idx))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1((shadow.css.sel("bennischwerdtner_typepi_page__L406_C44")))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.deref(idle_QMARK_))?bennischwerdtner.typepi.page.$idle_cursor:null))].join(''):null)].join(''),new cljs.core.Keyword(null,"key","key",-1516042587),idx], null),c], null);
}),characters);
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,ui){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null),ui], null);
}),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"\u2009\u2009"], null)], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (grp){
return cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"\u2009"], null)], null),grp);
}),bennischwerdtner.typepi.page.group_by_scheme(characters_rendered,(function (){var fexpr__59271 = cljs.core.deref(bennischwerdtner.typepi.page.state);
return (fexpr__59271.cljs$core$IFn$_invoke$arity$1 ? fexpr__59271.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"grouping-scheme","grouping-scheme",423941849)) : fexpr__59271.call(null, new cljs.core.Keyword(null,"grouping-scheme","grouping-scheme",423941849)));
})())))], 0))], 0)));
})())], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(shadow.css.sel("bennischwerdtner_typepi_page__L428_C26"))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(shadow.css.sel("bennischwerdtner_typepi_page__L430_C22"))], null),page_idx], null)], null)], null);
})], null));
});
bennischwerdtner.typepi.page.firefly = (function bennischwerdtner$typepi$page$firefly(p__59272){
var map__59273 = p__59272;
var map__59273__$1 = cljs.core.__destructure_map(map__59273);
var vec__59274 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59273__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59274,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59274,(1),null);
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59273__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),("c-background-success " + shadow.css.sel("bennischwerdtner_typepi_page__L438_C12")),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),x,new cljs.core.Keyword(null,"top","top",-1856271961),y], null)], null)], null);
});
bennischwerdtner.typepi.page.__GT_entity = (function bennischwerdtner$typepi$page$__GT_entity(opts){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"entity?","entity?",-1085193334),true,new cljs.core.Keyword(null,"spawn-time","spawn-time",1452547596),(new Date())], null),opts], 0));
});
bennischwerdtner.typepi.page.age = (function bennischwerdtner$typepi$page$age(e){
return ((new Date()) - new cljs.core.Keyword(null,"spawn-time","spawn-time",1452547596).cljs$core$IFn$_invoke$arity$1(e));
});
bennischwerdtner.typepi.page.gaussianRandish = (function bennischwerdtner$typepi$page$gaussianRandish(){
return ((cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,_){
return (acc + Math.random());
}),(0),cljs.core.range.cljs$core$IFn$_invoke$arity$1((7))) / (7)) - ((1) / (2)));
});
bennischwerdtner.typepi.page.norm = (function bennischwerdtner$typepi$page$norm(mean,std){
return (mean + (std * bennischwerdtner.typepi.page.gaussianRandish()));
});
bennischwerdtner.typepi.page.brownian_motion = (function bennischwerdtner$typepi$page$brownian_motion(p__59277){
var map__59278 = p__59277;
var map__59278__$1 = cljs.core.__destructure_map(map__59278);
var e = map__59278__$1;
var kinetic_energy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59278__$1,new cljs.core.Keyword(null,"kinetic-energy","kinetic-energy",-625976084));
var acceleration = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__59278__$1,new cljs.core.Keyword(null,"acceleration","acceleration",-1213888421),(0));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(e,new cljs.core.Keyword(null,"acceleration","acceleration",-1213888421),bennischwerdtner.typepi.page.v_PLUS_(acceleration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(kinetic_energy * bennischwerdtner.typepi.page.norm((0),(1))),(kinetic_energy * bennischwerdtner.typepi.page.norm((0),(1)))], null)));
});
bennischwerdtner.typepi.page.apply_forces = (function bennischwerdtner$typepi$page$apply_forces(e,dt){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(e,new cljs.core.Keyword(null,"acceleration","acceleration",-1213888421),(function (a){
return bennischwerdtner.typepi.page.v_PLUS_(a,bennischwerdtner.typepi.page.v_STAR_((1000),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (acc,f){
return bennischwerdtner.typepi.page.v_PLUS_(acc,f);
}),cljs.core.vals(new cljs.core.Keyword(null,"forces","forces",337219267).cljs$core$IFn$_invoke$arity$1(e)))));
}));
});
bennischwerdtner.typepi.page.element_position_1 = (function bennischwerdtner$typepi$page$element_position_1(id){
var rect = document.getElementById(id).getBoundingClientRect();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(rect.x + (rect.width / (2))),(rect.y + (rect.height / (2)))], null);
});
bennischwerdtner.typepi.page.rand_on_element = (function bennischwerdtner$typepi$page$rand_on_element(id){
var rect = document.getElementById(id).getBoundingClientRect();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(rect.x + cljs.core.rand.cljs$core$IFn$_invoke$arity$1(rect.width)),(rect.y + cljs.core.rand.cljs$core$IFn$_invoke$arity$1(rect.height))], null);
});
bennischwerdtner.typepi.page.attracted = (function bennischwerdtner$typepi$page$attracted(e,id,force){
var diff = bennischwerdtner.typepi.page.v_(bennischwerdtner.typepi.page.element_position_1(id),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(e));
var len = bennischwerdtner.typepi.page.vector_len(diff);
return cljs.core.assoc_in(e,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"forces","forces",337219267),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attracted","attracted",2000317360),id], null)], null),bennischwerdtner.typepi.page.v_STAR_(bennischwerdtner.typepi.page.normalize_vector(diff),force));
});
bennischwerdtner.typepi.page.physics_update_2d = (function bennischwerdtner$typepi$page$physics_update_2d(entities,dt){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function bennischwerdtner$typepi$page$physics_update_2d_$_iter__59279(s__59280){
return (new cljs.core.LazySeq(null,(function (){
var s__59280__$1 = s__59280;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__59280__$1);
if(temp__5823__auto__){
var s__59280__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__59280__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__59280__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__59282 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__59281 = (0);
while(true){
if((i__59281 < size__5479__auto__)){
var e = cljs.core._nth(c__5478__auto__,i__59281);
cljs.core.chunk_append(b__59282,(function (){var G__59283 = e;
var G__59283__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"acceleration","acceleration",-1213888421).cljs$core$IFn$_invoke$arity$1(e))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__59283,new cljs.core.Keyword(null,"velocity","velocity",-581524355),bennischwerdtner.typepi.page.v_PLUS_,bennischwerdtner.typepi.page.v_STAR_(new cljs.core.Keyword(null,"acceleration","acceleration",-1213888421).cljs$core$IFn$_invoke$arity$1(e),dt)):G__59283);
var G__59283__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"acceleration","acceleration",-1213888421).cljs$core$IFn$_invoke$arity$1(e))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__59283__$1,new cljs.core.Keyword(null,"acceleration","acceleration",-1213888421),bennischwerdtner.typepi.page.v_STAR_,0.9):G__59283__$1);
var G__59283__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"velocity","velocity",-581524355).cljs$core$IFn$_invoke$arity$1(e))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__59283__$2,new cljs.core.Keyword(null,"pos","pos",-864607220),bennischwerdtner.typepi.page.v_PLUS_,bennischwerdtner.typepi.page.v_STAR_(new cljs.core.Keyword(null,"velocity","velocity",-581524355).cljs$core$IFn$_invoke$arity$1(e),dt)):G__59283__$2);
var G__59283__$4 = (cljs.core.truth_(new cljs.core.Keyword(null,"velocity","velocity",-581524355).cljs$core$IFn$_invoke$arity$1(e))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__59283__$3,new cljs.core.Keyword(null,"velocity","velocity",-581524355),bennischwerdtner.typepi.page.v_STAR_,0.9):G__59283__$3);
var G__59283__$5 = (cljs.core.truth_(new cljs.core.Keyword(null,"kinetic-energy","kinetic-energy",-625976084).cljs$core$IFn$_invoke$arity$1(e))?bennischwerdtner.typepi.page.brownian_motion(G__59283__$4):G__59283__$4);
return bennischwerdtner.typepi.page.apply_forces(G__59283__$5,dt);

})());

var G__59353 = (i__59281 + (1));
i__59281 = G__59353;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59282),bennischwerdtner$typepi$page$physics_update_2d_$_iter__59279(cljs.core.chunk_rest(s__59280__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59282),null);
}
} else {
var e = cljs.core.first(s__59280__$2);
return cljs.core.cons((function (){var G__59284 = e;
var G__59284__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"acceleration","acceleration",-1213888421).cljs$core$IFn$_invoke$arity$1(e))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__59284,new cljs.core.Keyword(null,"velocity","velocity",-581524355),bennischwerdtner.typepi.page.v_PLUS_,bennischwerdtner.typepi.page.v_STAR_(new cljs.core.Keyword(null,"acceleration","acceleration",-1213888421).cljs$core$IFn$_invoke$arity$1(e),dt)):G__59284);
var G__59284__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"acceleration","acceleration",-1213888421).cljs$core$IFn$_invoke$arity$1(e))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__59284__$1,new cljs.core.Keyword(null,"acceleration","acceleration",-1213888421),bennischwerdtner.typepi.page.v_STAR_,0.9):G__59284__$1);
var G__59284__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"velocity","velocity",-581524355).cljs$core$IFn$_invoke$arity$1(e))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__59284__$2,new cljs.core.Keyword(null,"pos","pos",-864607220),bennischwerdtner.typepi.page.v_PLUS_,bennischwerdtner.typepi.page.v_STAR_(new cljs.core.Keyword(null,"velocity","velocity",-581524355).cljs$core$IFn$_invoke$arity$1(e),dt)):G__59284__$2);
var G__59284__$4 = (cljs.core.truth_(new cljs.core.Keyword(null,"velocity","velocity",-581524355).cljs$core$IFn$_invoke$arity$1(e))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__59284__$3,new cljs.core.Keyword(null,"velocity","velocity",-581524355),bennischwerdtner.typepi.page.v_STAR_,0.9):G__59284__$3);
var G__59284__$5 = (cljs.core.truth_(new cljs.core.Keyword(null,"kinetic-energy","kinetic-energy",-625976084).cljs$core$IFn$_invoke$arity$1(e))?bennischwerdtner.typepi.page.brownian_motion(G__59284__$4):G__59284__$4);
return bennischwerdtner.typepi.page.apply_forces(G__59284__$5,dt);

})(),bennischwerdtner$typepi$page$physics_update_2d_$_iter__59279(cljs.core.rest(s__59280__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(entities);
})());
});
bennischwerdtner.typepi.page.distance = (function bennischwerdtner$typepi$page$distance(a,b){
return Math.sqrt(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59285_SHARP_){
return (p1__59285_SHARP_ * p1__59285_SHARP_);
}),bennischwerdtner.typepi.page.v_(a,b))));
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
var G__59286 = cljs.core.deref(ref);
var G__59286__$1 = (((G__59286 instanceof cljs.core.Keyword))?G__59286.fqn:null);
switch (G__59286__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59286__$1)].join('')));

}
});
bennischwerdtner.typepi.page.set_wobble_anim_BANG_ = (function bennischwerdtner$typepi$page$set_wobble_anim_BANG_(){
return bennischwerdtner.typepi.page.set_anim_BANG_(bennischwerdtner.typepi.page.wobble_anim_state,(100),(50));
});
bennischwerdtner.typepi.page.set_blink_anim_BANG_ = (function bennischwerdtner$typepi$page$set_blink_anim_BANG_(){
return bennischwerdtner.typepi.page.set_anim_BANG_(bennischwerdtner.typepi.page.blink_anim_state,(1200),(50));
});
bennischwerdtner.typepi.page.update_firefly = (function bennischwerdtner$typepi$page$update_firefly(e,state){
var reached_target_QMARK_ = (bennischwerdtner.typepi.page.distance(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(e),new cljs.core.Keyword(null,"green-points-position","green-points-position",1917436396).cljs$core$IFn$_invoke$arity$1(state)) < (40));
if(reached_target_QMARK_){
bennischwerdtner.typepi.page.set_wobble_anim_BANG_();

if(((300) < bennischwerdtner.typepi.page.age(e))){
bennischwerdtner.typepi.page.play_sound_BANG_("757612__qubodup__pop-sound.wav",0.5);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bennischwerdtner.typepi.page.points,cljs.core.update,new cljs.core.Keyword(null,"green","green",-945526839),cljs.core.inc);
} else {
}

var G__59287 = e;
var G__59287__$1 = ((((((500) < bennischwerdtner.typepi.page.age(e))) && ((bennischwerdtner.typepi.page.age(e) < (1000)))))?bennischwerdtner.typepi.page.attracted(G__59287,"green-points",0.5):G__59287);
var G__59287__$2 = ((((1000) < bennischwerdtner.typepi.page.age(e)))?bennischwerdtner.typepi.page.attracted(G__59287__$1,"green-points",0.4):G__59287__$1);
if(reached_target_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59287__$2,new cljs.core.Keyword(null,"kill?","kill?",1633768568),true);
} else {
return G__59287__$2;
}
});
bennischwerdtner.typepi.page.entity_update = (function bennischwerdtner$typepi$page$entity_update(entities,dt){
var state = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"green-points-position","green-points-position",1917436396),bennischwerdtner.typepi.page.element_position_1("green-points")], null);
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function bennischwerdtner$typepi$page$entity_update_$_iter__59289(s__59290){
return (new cljs.core.LazySeq(null,(function (){
var s__59290__$1 = s__59290;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__59290__$1);
if(temp__5823__auto__){
var s__59290__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__59290__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__59290__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__59292 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__59291 = (0);
while(true){
if((i__59291 < size__5479__auto__)){
var e = cljs.core._nth(c__5478__auto__,i__59291);
if(cljs.core.not(new cljs.core.Keyword(null,"kill?","kill?",1633768568).cljs$core$IFn$_invoke$arity$1(e))){
cljs.core.chunk_append(b__59292,(function (){var G__59293 = e;
var G__59293__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"firefly?","firefly?",2082094686).cljs$core$IFn$_invoke$arity$1(e))?bennischwerdtner.typepi.page.update_firefly(G__59293,state):G__59293);
var G__59293__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561).cljs$core$IFn$_invoke$arity$1(e))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__59293__$1,new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561),((function (i__59291,s__59290__$1,G__59293,G__59293__$1,e,c__5478__auto__,size__5479__auto__,b__59292,s__59290__$2,temp__5823__auto__,state){
return (function (p1__59288_SHARP_){
return (p1__59288_SHARP_ - dt);
});})(i__59291,s__59290__$1,G__59293,G__59293__$1,e,c__5478__auto__,size__5479__auto__,b__59292,s__59290__$2,temp__5823__auto__,state))
):G__59293__$1);
if(cljs.core.truth_((function (){var and__5000__auto__ = new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561).cljs$core$IFn$_invoke$arity$1(e);
if(cljs.core.truth_(and__5000__auto__)){
return (new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561).cljs$core$IFn$_invoke$arity$1(e) < (0));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59293__$2,new cljs.core.Keyword(null,"kill?","kill?",1633768568),true);
} else {
return G__59293__$2;
}
})());

var G__59355 = (i__59291 + (1));
i__59291 = G__59355;
continue;
} else {
var G__59356 = (i__59291 + (1));
i__59291 = G__59356;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59292),bennischwerdtner$typepi$page$entity_update_$_iter__59289(cljs.core.chunk_rest(s__59290__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59292),null);
}
} else {
var e = cljs.core.first(s__59290__$2);
if(cljs.core.not(new cljs.core.Keyword(null,"kill?","kill?",1633768568).cljs$core$IFn$_invoke$arity$1(e))){
return cljs.core.cons((function (){var G__59294 = e;
var G__59294__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"firefly?","firefly?",2082094686).cljs$core$IFn$_invoke$arity$1(e))?bennischwerdtner.typepi.page.update_firefly(G__59294,state):G__59294);
var G__59294__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561).cljs$core$IFn$_invoke$arity$1(e))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__59294__$1,new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561),((function (s__59290__$1,G__59294,G__59294__$1,e,s__59290__$2,temp__5823__auto__,state){
return (function (p1__59288_SHARP_){
return (p1__59288_SHARP_ - dt);
});})(s__59290__$1,G__59294,G__59294__$1,e,s__59290__$2,temp__5823__auto__,state))
):G__59294__$1);
if(cljs.core.truth_((function (){var and__5000__auto__ = new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561).cljs$core$IFn$_invoke$arity$1(e);
if(cljs.core.truth_(and__5000__auto__)){
return (new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561).cljs$core$IFn$_invoke$arity$1(e) < (0));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59294__$2,new cljs.core.Keyword(null,"kill?","kill?",1633768568),true);
} else {
return G__59294__$2;
}
})(),bennischwerdtner$typepi$page$entity_update_$_iter__59289(cljs.core.rest(s__59290__$2)));
} else {
var G__59357 = cljs.core.rest(s__59290__$2);
s__59290__$1 = G__59357;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(entities);
})());
});
bennischwerdtner.typepi.page.spawn_firefly_BANG_ = (function bennischwerdtner$typepi$page$spawn_firefly_BANG_(){
bennischwerdtner.typepi.page.set_blink_anim_BANG_();

bennischwerdtner.typepi.page.play_sound_BANG_("plop.mp3",(1));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bennischwerdtner.typepi.page.game_state,cljs.core.update,new cljs.core.Keyword(null,"entities","entities",1940967403),(function (ents){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(ents,cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((1),(function (){
return bennischwerdtner.typepi.page.__GT_entity(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"firefly?","firefly?",2082094686),true,new cljs.core.Keyword(null,"forces","forces",337219267),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gravity","gravity",-1815198225),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0.1 + cljs.core.rand.cljs$core$IFn$_invoke$arity$1(0.05))], null)], null),new cljs.core.Keyword(null,"kinetic-energy","kinetic-energy",-625976084),(100),new cljs.core.Keyword(null,"pos","pos",-864607220),bennischwerdtner.typepi.page.rand_on_element("number-text"),new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bennischwerdtner.typepi.page.norm((0),(6000)),bennischwerdtner.typepi.page.norm((-1000),(1000))], null)], null));
})));
}));
});
bennischwerdtner.typepi.page.fireflies = (function bennischwerdtner$typepi$page$fireflies(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function bennischwerdtner$typepi$page$fireflies_$_iter__59295(s__59296){
return (new cljs.core.LazySeq(null,(function (){
var s__59296__$1 = s__59296;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__59296__$1);
if(temp__5823__auto__){
var s__59296__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__59296__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__59296__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__59298 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__59297 = (0);
while(true){
if((i__59297 < size__5479__auto__)){
var vec__59299 = cljs.core._nth(c__5478__auto__,i__59297);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59299,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59299,(1),null);
cljs.core.chunk_append(b__59298,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bennischwerdtner.typepi.page.firefly,e], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null)));

var G__59358 = (i__59297 + (1));
i__59297 = G__59358;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59298),bennischwerdtner$typepi$page$fireflies_$_iter__59295(cljs.core.chunk_rest(s__59296__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59298),null);
}
} else {
var vec__59302 = cljs.core.first(s__59296__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59302,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59302,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bennischwerdtner.typepi.page.firefly,e], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null)),bennischwerdtner$typepi$page$fireflies_$_iter__59295(cljs.core.rest(s__59296__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(bennischwerdtner.typepi.page.game_state))));
})()),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(shadow.css.sel("bennischwerdtner_typepi_page__L598_C18"))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(shadow.css.sel("bennischwerdtner_typepi_page__L599_C19"))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#green-points","div#green-points",-782739672),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [("c-background-success " + shadow.css.sel("bennischwerdtner_typepi_page__L601_C16")),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"playing","playing",70013335),cljs.core.deref(bennischwerdtner.typepi.page.wobble_anim_state)))?"u-wobble":null)], null)], null),new cljs.core.Keyword(null,"green","green",-945526839).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(bennischwerdtner.typepi.page.points))], null)], null)], null)], null);
});
bennischwerdtner.typepi.page.current_search_params = (function bennischwerdtner$typepi$page$current_search_params(){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$1((function (p__59305){
var vec__59306 = p__59305;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59306,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59306,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),v], null);
})),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(new URLSearchParams(location.search)).entries()))));
});
bennischwerdtner.typepi.page.ascending = cljs.core.compare;
bennischwerdtner.typepi.page.descending = (function bennischwerdtner$typepi$page$descending(a,b){
return cljs.core.compare(b,a);
});
bennischwerdtner.typepi.page.by = (function bennischwerdtner$typepi$page$by(var_args){
var G__59310 = arguments.length;
switch (G__59310) {
case 1:
return bennischwerdtner.typepi.page.by.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return bennischwerdtner.typepi.page.by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(bennischwerdtner.typepi.page.by.cljs$core$IFn$_invoke$arity$1 = (function (k){
return bennischwerdtner.typepi.page.by.cljs$core$IFn$_invoke$arity$2(k,bennischwerdtner.typepi.page.ascending);
}));

(bennischwerdtner.typepi.page.by.cljs$core$IFn$_invoke$arity$2 = (function (k,c){
return (function (a,b){
var G__59311 = (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(a) : k.call(null, a));
var G__59312 = (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(b) : k.call(null, b));
return (c.cljs$core$IFn$_invoke$arity$2 ? c.cljs$core$IFn$_invoke$arity$2(G__59311,G__59312) : c.call(null, G__59311,G__59312));
});
}));

(bennischwerdtner.typepi.page.by.cljs$lang$maxFixedArity = 2);

bennischwerdtner.typepi.page.then = (function bennischwerdtner$typepi$page$then(comparator1,comparator2){
return (function (a,b){
var r = (comparator1.cljs$core$IFn$_invoke$arity$2 ? comparator1.cljs$core$IFn$_invoke$arity$2(a,b) : comparator1.call(null, a,b));
if((r === (0))){
return (comparator2.cljs$core$IFn$_invoke$arity$2 ? comparator2.cljs$core$IFn$_invoke$arity$2(a,b) : comparator2.call(null, a,b));
} else {
return r;
}
});
});
bennischwerdtner.typepi.page.keymap_ui = (function bennischwerdtner$typepi$page$keymap_ui(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(shadow.css.sel("bennischwerdtner_typepi_page__L640_C12"))], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function bennischwerdtner$typepi$page$keymap_ui_$_iter__59314(s__59315){
return (new cljs.core.LazySeq(null,(function (){
var s__59315__$1 = s__59315;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__59315__$1);
if(temp__5823__auto__){
var s__59315__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__59315__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__59315__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__59317 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__59316 = (0);
while(true){
if((i__59316 < size__5479__auto__)){
var vec__59318 = cljs.core._nth(c__5478__auto__,i__59316);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59318,(0),null);
var vec__59321 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59318,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59321,(0),null);
var keymap_keys = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59321,(1),null);
cljs.core.chunk_append(b__59317,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(shadow.css.sel("bennischwerdtner_typepi_page__L656_C24"))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (i__59316,vec__59318,idx,vec__59321,v,keymap_keys,c__5478__auto__,size__5479__auto__,b__59317,s__59315__$2,temp__5823__auto__){
return (function (idx__$1,o){
return cljs.core.with_meta(o,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx__$1], null));
});})(i__59316,vec__59318,idx,vec__59321,v,keymap_keys,c__5478__auto__,size__5479__auto__,b__59317,s__59315__$2,temp__5823__auto__))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),", "], null),(function (){var iter__5480__auto__ = ((function (i__59316,vec__59318,idx,vec__59321,v,keymap_keys,c__5478__auto__,size__5479__auto__,b__59317,s__59315__$2,temp__5823__auto__){
return (function bennischwerdtner$typepi$page$keymap_ui_$_iter__59314_$_iter__59324(s__59325){
return (new cljs.core.LazySeq(null,((function (i__59316,vec__59318,idx,vec__59321,v,keymap_keys,c__5478__auto__,size__5479__auto__,b__59317,s__59315__$2,temp__5823__auto__){
return (function (){
var s__59325__$1 = s__59325;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__59325__$1);
if(temp__5823__auto____$1){
var s__59325__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__59325__$2)){
var c__5478__auto____$1 = cljs.core.chunk_first(s__59325__$2);
var size__5479__auto____$1 = cljs.core.count(c__5478__auto____$1);
var b__59327 = cljs.core.chunk_buffer(size__5479__auto____$1);
if((function (){var i__59326 = (0);
while(true){
if((i__59326 < size__5479__auto____$1)){
var k = cljs.core._nth(c__5478__auto____$1,i__59326);
cljs.core.chunk_append(b__59327,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),("u-background-lightest " + shadow.css.sel("bennischwerdtner_typepi_page__L666_C35")),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__59326,i__59316,k,c__5478__auto____$1,size__5479__auto____$1,b__59327,s__59325__$2,temp__5823__auto____$1,vec__59318,idx,vec__59321,v,keymap_keys,c__5478__auto__,size__5479__auto__,b__59317,s__59315__$2,temp__5823__auto__){
return (function (){
return null;
});})(i__59326,i__59316,k,c__5478__auto____$1,size__5479__auto____$1,b__59327,s__59325__$2,temp__5823__auto____$1,vec__59318,idx,vec__59321,v,keymap_keys,c__5478__auto__,size__5479__auto__,b__59317,s__59315__$2,temp__5823__auto__))
], null),k], null));

var G__59360 = (i__59326 + (1));
i__59326 = G__59360;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59327),bennischwerdtner$typepi$page$keymap_ui_$_iter__59314_$_iter__59324(cljs.core.chunk_rest(s__59325__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59327),null);
}
} else {
var k = cljs.core.first(s__59325__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),("u-background-lightest " + shadow.css.sel("bennischwerdtner_typepi_page__L666_C35")),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__59316,k,s__59325__$2,temp__5823__auto____$1,vec__59318,idx,vec__59321,v,keymap_keys,c__5478__auto__,size__5479__auto__,b__59317,s__59315__$2,temp__5823__auto__){
return (function (){
return null;
});})(i__59316,k,s__59325__$2,temp__5823__auto____$1,vec__59318,idx,vec__59321,v,keymap_keys,c__5478__auto__,size__5479__auto__,b__59317,s__59315__$2,temp__5823__auto__))
], null),k], null),bennischwerdtner$typepi$page$keymap_ui_$_iter__59314_$_iter__59324(cljs.core.rest(s__59325__$2)));
}
} else {
return null;
}
break;
}
});})(i__59316,vec__59318,idx,vec__59321,v,keymap_keys,c__5478__auto__,size__5479__auto__,b__59317,s__59315__$2,temp__5823__auto__))
,null,null));
});})(i__59316,vec__59318,idx,vec__59321,v,keymap_keys,c__5478__auto__,size__5479__auto__,b__59317,s__59315__$2,temp__5823__auto__))
;
return iter__5480__auto__(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(keymap_keys));
})()))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),v], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null)));

var G__59361 = (i__59316 + (1));
i__59316 = G__59361;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59317),bennischwerdtner$typepi$page$keymap_ui_$_iter__59314(cljs.core.chunk_rest(s__59315__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59317),null);
}
} else {
var vec__59328 = cljs.core.first(s__59315__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59328,(0),null);
var vec__59331 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59328,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59331,(0),null);
var keymap_keys = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59331,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(shadow.css.sel("bennischwerdtner_typepi_page__L656_C24"))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (vec__59328,idx,vec__59331,v,keymap_keys,s__59315__$2,temp__5823__auto__){
return (function (idx__$1,o){
return cljs.core.with_meta(o,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx__$1], null));
});})(vec__59328,idx,vec__59331,v,keymap_keys,s__59315__$2,temp__5823__auto__))
,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),", "], null),(function (){var iter__5480__auto__ = ((function (vec__59328,idx,vec__59331,v,keymap_keys,s__59315__$2,temp__5823__auto__){
return (function bennischwerdtner$typepi$page$keymap_ui_$_iter__59314_$_iter__59334(s__59335){
return (new cljs.core.LazySeq(null,(function (){
var s__59335__$1 = s__59335;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__59335__$1);
if(temp__5823__auto____$1){
var s__59335__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__59335__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__59335__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__59337 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__59336 = (0);
while(true){
if((i__59336 < size__5479__auto__)){
var k = cljs.core._nth(c__5478__auto__,i__59336);
cljs.core.chunk_append(b__59337,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),("u-background-lightest " + shadow.css.sel("bennischwerdtner_typepi_page__L666_C35")),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__59336,k,c__5478__auto__,size__5479__auto__,b__59337,s__59335__$2,temp__5823__auto____$1,vec__59328,idx,vec__59331,v,keymap_keys,s__59315__$2,temp__5823__auto__){
return (function (){
return null;
});})(i__59336,k,c__5478__auto__,size__5479__auto__,b__59337,s__59335__$2,temp__5823__auto____$1,vec__59328,idx,vec__59331,v,keymap_keys,s__59315__$2,temp__5823__auto__))
], null),k], null));

var G__59362 = (i__59336 + (1));
i__59336 = G__59362;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59337),bennischwerdtner$typepi$page$keymap_ui_$_iter__59314_$_iter__59334(cljs.core.chunk_rest(s__59335__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59337),null);
}
} else {
var k = cljs.core.first(s__59335__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),("u-background-lightest " + shadow.css.sel("bennischwerdtner_typepi_page__L666_C35")),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (k,s__59335__$2,temp__5823__auto____$1,vec__59328,idx,vec__59331,v,keymap_keys,s__59315__$2,temp__5823__auto__){
return (function (){
return null;
});})(k,s__59335__$2,temp__5823__auto____$1,vec__59328,idx,vec__59331,v,keymap_keys,s__59315__$2,temp__5823__auto__))
], null),k], null),bennischwerdtner$typepi$page$keymap_ui_$_iter__59314_$_iter__59334(cljs.core.rest(s__59335__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__59328,idx,vec__59331,v,keymap_keys,s__59315__$2,temp__5823__auto__))
;
return iter__5480__auto__(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(keymap_keys));
})()))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),v], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null)),bennischwerdtner$typepi$page$keymap_ui_$_iter__59314(cljs.core.rest(s__59315__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__59313_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,p1__59313_SHARP_);
}),cljs.core.val)),cljs.core.sort.cljs$core$IFn$_invoke$arity$2(bennischwerdtner.typepi.page.by.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.key)),cljs.core.group_by(cljs.core.val,(function (){var fexpr__59338 = cljs.core.deref(bennischwerdtner.typepi.page.state);
return (fexpr__59338.cljs$core$IFn$_invoke$arity$1 ? fexpr__59338.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"keymap","keymap",-499605268)) : fexpr__59338.call(null, new cljs.core.Keyword(null,"keymap","keymap",-499605268)));
})())))));
})())], null);
});
bennischwerdtner.typepi.page.index_jump_ui = (function bennischwerdtner$typepi$page$index_jump_ui(p__59339){
var map__59340 = p__59339;
var map__59340__$1 = cljs.core.__destructure_map(map__59340);
var s = map__59340__$1;
var by_how_much = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((100));
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(shadow.css.sel("bennischwerdtner_typepi_page__L680_C21"))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(shadow.css.sel("bennischwerdtner_typepi_page__L681_C22"))], null),(function (){var btn = (function (p__59341,content){
var map__59342 = p__59341;
var map__59342__$1 = cljs.core.__destructure_map(map__59342);
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59342__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(shadow.css.sel("bennischwerdtner_typepi_page__L684_C30")),new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click], null),content], null);
});
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,v){
return cljs.core.with_meta(v,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null));
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [btn(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(bennischwerdtner.typepi.page.state,bennischwerdtner.typepi.page.cursor_forward,(- cljs.core.deref(by_how_much)));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(shadow.css.sel("bennischwerdtner_typepi_page__L700_C35"))], null),"\u2190"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),bennischwerdtner.typepi.page.next_pi_idx(s)], null),btn(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(bennischwerdtner.typepi.page.state,bennischwerdtner.typepi.page.cursor_forward,cljs.core.deref(by_how_much));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(shadow.css.sel("bennischwerdtner_typepi_page__L705_C35"))], null),"\u2192"], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(shadow.css.sel("bennischwerdtner_typepi_page__L707_C25")),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(by_how_much,new cljs.core.PersistentArrayMap(null, 3, [(100),(1000),(1000),(760),(760),(100)], null));
})], null),cljs.core.deref(by_how_much)], null)], null)));
})()], null)], null);
});
});
bennischwerdtner.typepi.page.ui = (function bennischwerdtner$typepi$page$ui(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(shadow.css.sel("bennischwerdtner_typepi_page__L730_C18"))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(shadow.css.sel("bennischwerdtner_typepi_page__L731_C18"))], null),"Type PI"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bennischwerdtner.typepi.page.fireflies], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(shadow.css.sel("bennischwerdtner_typepi_page__L733_C18"))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(shadow.css.sel("bennischwerdtner_typepi_page__L735_C14"))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bennischwerdtner.typepi.page.type_area], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(shadow.css.sel("bennischwerdtner_typepi_page__L739_C19"))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(shadow.css.sel("bennischwerdtner_typepi_page__L740_C20"))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bennischwerdtner.typepi.page.page_overview_ui,cljs.core.deref(bennischwerdtner.typepi.page.state)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bennischwerdtner.typepi.page.index_jump_ui,cljs.core.deref(bennischwerdtner.typepi.page.state)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(shadow.css.sel("bennischwerdtner_typepi_page__L745_C15"))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var hidden_QMARK_ = (function (){var fexpr__59343 = cljs.core.deref(bennischwerdtner.typepi.page.state);
return (fexpr__59343.cljs$core$IFn$_invoke$arity$1 ? fexpr__59343.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"keymap-hidden?","keymap-hidden?",-735217545)) : fexpr__59343.call(null, new cljs.core.Keyword(null,"keymap-hidden?","keymap-hidden?",-735217545)));
})();
if(cljs.core.truth_(hidden_QMARK_)){
localStorage.removeItem("keymap");
} else {
localStorage.setItem("keymap","hidden");
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bennischwerdtner.typepi.page.state,cljs.core.assoc,new cljs.core.Keyword(null,"keymap-hidden?","keymap-hidden?",-735217545),cljs.core.not(hidden_QMARK_));
})], null),"keymap"], null),(cljs.core.truth_((function (){var fexpr__59344 = cljs.core.deref(bennischwerdtner.typepi.page.state);
return (fexpr__59344.cljs$core$IFn$_invoke$arity$1 ? fexpr__59344.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"keymap-hidden?","keymap-hidden?",-735217545)) : fexpr__59344.call(null, new cljs.core.Keyword(null,"keymap-hidden?","keymap-hidden?",-735217545)));
})())?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bennischwerdtner.typepi.page.keymap_ui], null))], null)], null)], null)], null);
});
fetch("pi.txt").then((function (p1__59345_SHARP_){
return p1__59345_SHARP_.text();
})).then((function (r){
return cljs.core.reset_BANG_(bennischwerdtner.typepi.page.pi,r);
}));
bennischwerdtner.typepi.page.page = (function bennischwerdtner$typepi$page$page(){
reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bennischwerdtner.typepi.page.ui], null),document.getElementById("app"));

var zero = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(document.timeline.currentTime);
var animate = (function bennischwerdtner$typepi$page$page_$_animate(t){
var dt_59363 = ((t - cljs.core.deref(zero)) / (1000));
cljs.core.reset_BANG_(zero,t);

if(cljs.core.truth_((function (){var G__59349 = new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(bennischwerdtner.typepi.page.state));
var fexpr__59348 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type-pi","type-pi",860975041),null], null), null);
return (fexpr__59348.cljs$core$IFn$_invoke$arity$1 ? fexpr__59348.cljs$core$IFn$_invoke$arity$1(G__59349) : fexpr__59348.call(null, G__59349));
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bennischwerdtner.typepi.page.game_state,cljs.core.update,new cljs.core.Keyword(null,"entities","entities",1940967403),(function (ents){
return bennischwerdtner.typepi.page.entity_update(bennischwerdtner.typepi.page.physics_update_2d(ents,dt_59363),dt_59363);
}));
} else {
}

return requestAnimationFrame(bennischwerdtner$typepi$page$page_$_animate);
});
return requestAnimationFrame(animate);
});

//# sourceMappingURL=bennischwerdtner.typepi.page.js.map
