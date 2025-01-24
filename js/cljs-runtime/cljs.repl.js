goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__42548){
var map__42549 = p__42548;
var map__42549__$1 = cljs.core.__destructure_map(map__42549);
var m = map__42549__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42549__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42549__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [(function (){var temp__5823__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__42565_42974 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__42566_42975 = null;
var count__42567_42976 = (0);
var i__42568_42977 = (0);
while(true){
if((i__42568_42977 < count__42567_42976)){
var f_42978 = chunk__42566_42975.cljs$core$IIndexed$_nth$arity$2(null, i__42568_42977);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_42978], 0));


var G__42979 = seq__42565_42974;
var G__42980 = chunk__42566_42975;
var G__42981 = count__42567_42976;
var G__42982 = (i__42568_42977 + (1));
seq__42565_42974 = G__42979;
chunk__42566_42975 = G__42980;
count__42567_42976 = G__42981;
i__42568_42977 = G__42982;
continue;
} else {
var temp__5823__auto___42983 = cljs.core.seq(seq__42565_42974);
if(temp__5823__auto___42983){
var seq__42565_42984__$1 = temp__5823__auto___42983;
if(cljs.core.chunked_seq_QMARK_(seq__42565_42984__$1)){
var c__5525__auto___42985 = cljs.core.chunk_first(seq__42565_42984__$1);
var G__42986 = cljs.core.chunk_rest(seq__42565_42984__$1);
var G__42987 = c__5525__auto___42985;
var G__42988 = cljs.core.count(c__5525__auto___42985);
var G__42989 = (0);
seq__42565_42974 = G__42986;
chunk__42566_42975 = G__42987;
count__42567_42976 = G__42988;
i__42568_42977 = G__42989;
continue;
} else {
var f_42990 = cljs.core.first(seq__42565_42984__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_42990], 0));


var G__42991 = cljs.core.next(seq__42565_42984__$1);
var G__42992 = null;
var G__42993 = (0);
var G__42994 = (0);
seq__42565_42974 = G__42991;
chunk__42566_42975 = G__42992;
count__42567_42976 = G__42993;
i__42568_42977 = G__42994;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_42995 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_42995], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_42995)))?cljs.core.second(arglists_42995):arglists_42995)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__42646_42996 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__42647_42997 = null;
var count__42648_42998 = (0);
var i__42649_42999 = (0);
while(true){
if((i__42649_42999 < count__42648_42998)){
var vec__42702_43000 = chunk__42647_42997.cljs$core$IIndexed$_nth$arity$2(null, i__42649_42999);
var name_43001 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42702_43000,(0),null);
var map__42705_43002 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42702_43000,(1),null);
var map__42705_43003__$1 = cljs.core.__destructure_map(map__42705_43002);
var doc_43004 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42705_43003__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_43005 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42705_43003__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_43001], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_43005], 0));

if(cljs.core.truth_(doc_43004)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_43004], 0));
} else {
}


var G__43006 = seq__42646_42996;
var G__43007 = chunk__42647_42997;
var G__43008 = count__42648_42998;
var G__43009 = (i__42649_42999 + (1));
seq__42646_42996 = G__43006;
chunk__42647_42997 = G__43007;
count__42648_42998 = G__43008;
i__42649_42999 = G__43009;
continue;
} else {
var temp__5823__auto___43010 = cljs.core.seq(seq__42646_42996);
if(temp__5823__auto___43010){
var seq__42646_43011__$1 = temp__5823__auto___43010;
if(cljs.core.chunked_seq_QMARK_(seq__42646_43011__$1)){
var c__5525__auto___43012 = cljs.core.chunk_first(seq__42646_43011__$1);
var G__43013 = cljs.core.chunk_rest(seq__42646_43011__$1);
var G__43014 = c__5525__auto___43012;
var G__43015 = cljs.core.count(c__5525__auto___43012);
var G__43016 = (0);
seq__42646_42996 = G__43013;
chunk__42647_42997 = G__43014;
count__42648_42998 = G__43015;
i__42649_42999 = G__43016;
continue;
} else {
var vec__42742_43017 = cljs.core.first(seq__42646_43011__$1);
var name_43018 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42742_43017,(0),null);
var map__42745_43019 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42742_43017,(1),null);
var map__42745_43020__$1 = cljs.core.__destructure_map(map__42745_43019);
var doc_43021 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42745_43020__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_43022 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42745_43020__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_43018], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_43022], 0));

if(cljs.core.truth_(doc_43021)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_43021], 0));
} else {
}


var G__43028 = cljs.core.next(seq__42646_43011__$1);
var G__43029 = null;
var G__43030 = (0);
var G__43031 = (0);
seq__42646_42996 = G__43028;
chunk__42647_42997 = G__43029;
count__42648_42998 = G__43030;
i__42649_42999 = G__43031;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5823__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5823__auto__)){
var fnspec = temp__5823__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__42753 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__42754 = null;
var count__42755 = (0);
var i__42756 = (0);
while(true){
if((i__42756 < count__42755)){
var role = chunk__42754.cljs$core$IIndexed$_nth$arity$2(null, i__42756);
var temp__5823__auto___43032__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5823__auto___43032__$1)){
var spec_43033 = temp__5823__auto___43032__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_43033)], 0));
} else {
}


var G__43034 = seq__42753;
var G__43035 = chunk__42754;
var G__43036 = count__42755;
var G__43037 = (i__42756 + (1));
seq__42753 = G__43034;
chunk__42754 = G__43035;
count__42755 = G__43036;
i__42756 = G__43037;
continue;
} else {
var temp__5823__auto____$1 = cljs.core.seq(seq__42753);
if(temp__5823__auto____$1){
var seq__42753__$1 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__42753__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__42753__$1);
var G__43039 = cljs.core.chunk_rest(seq__42753__$1);
var G__43040 = c__5525__auto__;
var G__43041 = cljs.core.count(c__5525__auto__);
var G__43042 = (0);
seq__42753 = G__43039;
chunk__42754 = G__43040;
count__42755 = G__43041;
i__42756 = G__43042;
continue;
} else {
var role = cljs.core.first(seq__42753__$1);
var temp__5823__auto___43043__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5823__auto___43043__$2)){
var spec_43044 = temp__5823__auto___43043__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_43044)], 0));
} else {
}


var G__43046 = cljs.core.next(seq__42753__$1);
var G__43047 = null;
var G__43048 = (0);
var G__43049 = (0);
seq__42753 = G__43046;
chunk__42754 = G__43047;
count__42755 = G__43048;
i__42756 = G__43049;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__42795 = datafied_throwable;
var map__42795__$1 = cljs.core.__destructure_map(map__42795);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42795__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42795__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42795__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__42796 = cljs.core.last(via);
var map__42796__$1 = cljs.core.__destructure_map(map__42796);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42796__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42796__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42796__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__42797 = data;
var map__42797__$1 = cljs.core.__destructure_map(map__42797);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42797__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42797__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42797__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__42798 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__42798__$1 = cljs.core.__destructure_map(map__42798);
var top_data = map__42798__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42798__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__42805 = phase;
var G__42805__$1 = (((G__42805 instanceof cljs.core.Keyword))?G__42805.fqn:null);
switch (G__42805__$1) {
case "read-source":
var map__42812 = data;
var map__42812__$1 = cljs.core.__destructure_map(map__42812);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42812__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42812__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__42813 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__42813__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42813,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__42813);
var G__42813__$2 = (cljs.core.truth_((function (){var fexpr__42814 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__42814.cljs$core$IFn$_invoke$arity$1 ? fexpr__42814.cljs$core$IFn$_invoke$arity$1(source) : fexpr__42814.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__42813__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__42813__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42813__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__42813__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__42821 = top_data;
var G__42821__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42821,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__42821);
var G__42821__$2 = (cljs.core.truth_((function (){var fexpr__42836 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__42836.cljs$core$IFn$_invoke$arity$1 ? fexpr__42836.cljs$core$IFn$_invoke$arity$1(source) : fexpr__42836.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__42821__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__42821__$1);
var G__42821__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42821__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__42821__$2);
var G__42821__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42821__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__42821__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42821__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__42821__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__42864 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42864,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42864,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42864,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42864,(3),null);
var G__42867 = top_data;
var G__42867__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42867,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__42867);
var G__42867__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42867__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__42867__$1);
var G__42867__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42867__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__42867__$2);
var G__42867__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42867__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__42867__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42867__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__42867__$4;
}

break;
case "execution":
var vec__42875 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42875,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42875,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42875,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42875,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__42787_SHARP_){
var or__5002__auto__ = (p1__42787_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__42882 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__42882.cljs$core$IFn$_invoke$arity$1 ? fexpr__42882.cljs$core$IFn$_invoke$arity$1(p1__42787_SHARP_) : fexpr__42882.call(null, p1__42787_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__42883 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__42883__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42883,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__42883);
var G__42883__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42883__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__42883__$1);
var G__42883__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42883__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__42883__$2);
var G__42883__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42883__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__42883__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42883__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__42883__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42805__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__42904){
var map__42905 = p__42904;
var map__42905__$1 = cljs.core.__destructure_map(map__42905);
var triage_data = map__42905__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42905__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42905__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42905__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42905__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42905__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42905__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42905__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42905__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__42913 = phase;
var G__42913__$1 = (((G__42913 instanceof cljs.core.Keyword))?G__42913.fqn:null);
switch (G__42913__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null, "Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__42914 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__42915 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__42916 = loc;
var G__42917 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__42919_43068 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__42920_43069 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__42921_43070 = true;
var _STAR_print_fn_STAR__temp_val__42922_43071 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__42921_43070);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__42922_43071);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42898_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__42898_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__42920_43069);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__42919_43068);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null, "%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__42914,G__42915,G__42916,G__42917) : format.call(null, G__42914,G__42915,G__42916,G__42917));

break;
case "macroexpansion":
var G__42931 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__42932 = cause_type;
var G__42933 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__42934 = loc;
var G__42935 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__42931,G__42932,G__42933,G__42934,G__42935) : format.call(null, G__42931,G__42932,G__42933,G__42934,G__42935));

break;
case "compile-syntax-check":
var G__42936 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__42937 = cause_type;
var G__42938 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__42939 = loc;
var G__42940 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__42936,G__42937,G__42938,G__42939,G__42940) : format.call(null, G__42936,G__42937,G__42938,G__42939,G__42940));

break;
case "compilation":
var G__42942 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__42943 = cause_type;
var G__42944 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__42945 = loc;
var G__42946 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__42942,G__42943,G__42944,G__42945,G__42946) : format.call(null, G__42942,G__42943,G__42944,G__42945,G__42946));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__42947 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__42948 = symbol;
var G__42949 = loc;
var G__42950 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__42951_43086 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__42952_43087 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__42953_43088 = true;
var _STAR_print_fn_STAR__temp_val__42954_43089 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__42953_43088);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__42954_43089);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42899_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__42899_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__42952_43087);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__42951_43086);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__42947,G__42948,G__42949,G__42950) : format.call(null, G__42947,G__42948,G__42949,G__42950));
} else {
var G__42964 = "Execution error%s at %s(%s).\n%s\n";
var G__42965 = cause_type;
var G__42966 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__42967 = loc;
var G__42968 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__42964,G__42965,G__42966,G__42967,G__42968) : format.call(null, G__42964,G__42965,G__42966,G__42967,G__42968));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42913__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
