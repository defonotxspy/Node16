var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function(){var g=this,h=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var d=Object.prototype.toString.call(a);if("[object Window]"==d)return"object";if("[object Array]"==d||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==d||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b};var k=parseFloat("0.06"),l=isNaN(k)||1<k||0>k?0:k;var m=function(a,b){for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&b.call(null,a[d],d,a)};var n;e:{var p=g.navigator;if(p){var q=p.userAgent;if(q){n=q;break e}}n=""};var r=-1!=n.indexOf("Opera")||-1!=n.indexOf("OPR"),s=-1!=n.indexOf("Trident")||-1!=n.indexOf("MSIE"),t=-1!=n.indexOf("Gecko")&&-1==n.toLowerCase().indexOf("webkit")&&!(-1!=n.indexOf("Trident")||-1!=n.indexOf("MSIE")),u=-1!=n.toLowerCase().indexOf("webkit");
(function(){var a="",b;if(r&&g.opera)return a=g.opera.version,"function"==h(a)?a():a;t?b=/rv\:([^\);]+)(\)|;)/:s?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:u&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(n))?a[1]:"");return s&&(b=(b=g.document)?b.documentMode:void 0,b>parseFloat(a))?String(b):a})();var v=function(a){this.b=[];this.a={};for(var b=0,d=arguments.length;b<d;++b)this.a[arguments[b]]=""},y=function(){var a=x,b="317150500 317150501 317150502 317150503 317150504 317150505".split(" ");if(a.a.hasOwnProperty(1)&&""==a.a[1]){e:{if(!(1E-4>Math.random())){var d=Math.random();if(d<l){try{var c=new Uint16Array(1);window.crypto.getRandomValues(c);d=c[0]/65536}catch(e){d=Math.random()}b=b[Math.floor(d*b.length)];break e}}b=null}b&&""!=b&&a.a.hasOwnProperty(1)&&(a.a[1]=b)}};
v.prototype.c=function(a){return this.a.hasOwnProperty(a)?this.a[a]:""};v.prototype.geil=v.prototype.c;var z=function(){var a=x,b=[];m(a.a,function(a){""!=a&&b.push(a)});return 0<a.b.length&&0<b.length?a.b.join(",")+","+b.join(","):a.b.join(",")+b.join(",")};var x,A="google_conversion_id google_conversion_format google_conversion_type google_conversion_order_id google_conversion_language google_conversion_value google_conversion_currency google_conversion_domain google_conversion_label google_conversion_color google_disable_viewthrough google_remarketing_only google_remarketing_for_search google_conversion_items google_custom_params google_conversion_date google_conversion_time google_conversion_js_version onload_callback opt_image_generator google_is_call google_conversion_page_url".split(" ");
function B(a){return null!=a?escape(a.toString()):""}function C(a){return null!=a?a.toString().substring(0,512):""}function D(a,b){var d=B(b);if(""!=d){var c=B(a);if(""!=c)return"&".concat(c,"=",d)}return""}function E(a){var b=typeof a;return null==a||"object"==b||"function"==b?null:String(a).replace(/,/g,"\\,").replace(/;/g,"\\;").replace(/=/g,"\\=")}
function F(a){var b;if((a=a.google_custom_params)&&"object"==typeof a&&"function"!=typeof a.join){var d=[];for(b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];if(c&&"function"==typeof c.join){for(var e=[],f=0;f<c.length;++f){var w=E(c[f]);null!=w&&e.push(w)}c=0==e.length?null:e.join(",")}else c=E(c);(e=E(b))&&null!=c&&d.push(e+"="+c)}b=d.join(";")}else b="";return""==b?"":"&".concat("data=",encodeURIComponent(b))}
function G(a){return"number"!=typeof a&&"string"!=typeof a?"":B(a.toString())}function H(a){if(!a)return"";a=a.google_conversion_items;if(!a)return"";for(var b=[],d=0,c=a.length;d<c;d++){var e=a[d],f=[];e&&(f.push(G(e.value)),f.push(G(e.quantity)),f.push(G(e.item_id)),f.push(G(e.adwords_grouping)),f.push(G(e.sku)),b.push("("+f.join("*")+")"))}return 0<b.length?"&item="+b.join(""):""}
function I(a,b,d){var c=[];if(a){var e=a.screen;e&&(c.push(D("u_h",e.height)),c.push(D("u_w",e.width)),c.push(D("u_ah",e.availHeight)),c.push(D("u_aw",e.availWidth)),c.push(D("u_cd",e.colorDepth)));a.history&&c.push(D("u_his",a.history.length))}d&&"function"==typeof d.getTimezoneOffset&&c.push(D("u_tz",-d.getTimezoneOffset()));b&&("function"==typeof b.javaEnabled&&c.push(D("u_java",b.javaEnabled())),b.plugins&&c.push(D("u_nplug",b.plugins.length)),b.mimeTypes&&c.push(D("u_nmime",b.mimeTypes.length)));
return c.join("")}function J(a,b,d){var c="";if(b){var e;if(a.top==a)e=0;else{var f=a.location.ancestorOrigins;if(f)e=f[f.length-1]==a.location.origin?1:2;else{f=a.top;try{e=!!f.location.href||""===f.location.href}catch(w){e=!1}e=e?1:2}}f="";f=d?d:1==e?a.top.location.href:a.location.href;c+=D("frm",e);c+=D("url",C(f));c+=D("ref",C(b.referrer))}return c}function K(a){return a&&a.location&&a.location.protocol&&"https:"==a.location.protocol.toString().toLowerCase()?"https:":"http:"}
function L(a){return a.google_remarketing_only?"googleads.g.doubleclick.net":a.google_conversion_domain||"www.googleadservices.com"}
function M(a,b,d,c){var e="/?";"landing"==c.google_conversion_type&&(e="/extclk?");var e=K(a)+"//"+L(c)+"/pagead/"+[c.google_remarketing_only?"viewthroughconversion/":"conversion/",B(c.google_conversion_id),e,"random=",B(c.google_conversion_time)].join(""),f;e:{f=c.google_conversion_language;if(null!=f){f=f.toString();if(2==f.length){f=D("hl",f);break e}if(5==f.length){f=D("hl",f.substring(0,2))+D("gl",f.substring(3,5));break e}}f=""}a=[D("cv",c.google_conversion_js_version),D("fst",c.google_conversion_first_time),
D("num",c.google_conversion_snippets),D("fmt",c.google_conversion_format),D("value",c.google_conversion_value),D("currency_code",c.google_conversion_currency),D("label",c.google_conversion_label),D("oid",c.google_conversion_order_id),D("bg",c.google_conversion_color),f,D("guid","ON"),D("disvt",c.google_disable_viewthrough),D("is_call",c.google_is_call),D("eid",z()),H(c),I(a,b,c.google_conversion_date),F(c),J(a,d,c.google_conversion_page_url),c.google_remarketing_for_search&&!c.google_conversion_domain?
"&srr=n":""].join("");return e+a}function N(){var a=O,b=document,d=P,c;c=K(a)+"//web.archive.org/web/20140325211259/http://www.google.com/ads/user-lists/"+[B(d.google_conversion_id),"/?random=",Math.floor(1E9*Math.random())].join("");return c+=[D("label",d.google_conversion_label),D("fmt","3"),J(a,b,d.google_conversion_page_url)].join("")}
function Q(a){return{ar:1,bg:1,cs:1,da:1,de:1,el:1,en_AU:1,en_US:1,en_GB:1,es:1,et:1,fi:1,fr:1,hi:1,hr:1,hu:1,id:1,is:1,it:1,iw:1,ja:1,ko:1,lt:1,nl:1,no:1,pl:1,pt_BR:1,pt_PT:1,ro:1,ru:1,sk:1,sl:1,sr:1,sv:1,th:1,tl:1,tr:1,vi:1,zh_CN:1,zh_TW:1}[a]?a+".html":"en_US.html"}
function R(){var a=O,b=navigator,d=document,c=O;3!=c.google_conversion_format||c.google_remarketing_only||c.google_conversion_domain||x&&y();var e=x?x.c(1):"",b=M(a,b,d,c),d=function(a,b,c){return'<img height="'+c+'" width="'+b+'" border="0" alt="" src="'+a+'" />'};return 0==c.google_conversion_format&&null==c.google_conversion_domain?'<a href="'+(K(a)+"//web.archive.org/web/20140325211259/http://services.google.com/sitestats/"+Q(c.google_conversion_language)+"?cid="+B(c.google_conversion_id))+'" target="_blank">'+d(b,135,27)+"</a>":1<c.google_conversion_snippets||
3==c.google_conversion_format?"317150501"==e||"317150502"==e||"317150503"==e||"317150504"==e||"317150505"==e?d(b,1,1)+('<script src="'+b.replace(/(&|\?)fmt=3(&|$)/,"$1fmt=4&adtest=on$2")+'">\x3c/script>'):d(b,1,1):'<iframe name="google_conversion_frame" title="Google conversion frame" width="'+(2==c.google_conversion_format?200:300)+'" height="'+(2==c.google_conversion_format?26:13)+'" src="'+b+'" frameborder="0" marginwidth="0" marginheight="0" vspace="0" hspace="0" allowtransparency="true" scrolling="no">'+
d(b.replace(/\?random=/,"?frame=0&random="),1,1)+"</iframe>"}function S(){return new Image}function T(){var a=P,b=N(),d=S;"function"===typeof a.opt_image_generator&&(d=a.opt_image_generator);a=d();b+=D("async","1");a.src=b;a.onload=function(){}};var O=window;
if(O)if(null!=/[\?&;]google_debug/.exec(document.URL)){var U=O,V=document.getElementsByTagName("head")[0];V||(V=document.createElement("head"),document.getElementsByTagName("html")[0].insertBefore(V,document.getElementsByTagName("body")[0]));var W=document.createElement("script");W.src=K(window)+"//"+L(U)+"/pagead/conversion_debug_overlay.js";V.appendChild(W)}else{try{var X;var Y=O;"landing"==Y.google_conversion_type||!Y.google_conversion_id||Y.google_remarketing_only&&Y.google_disable_viewthrough?X=
!1:(Y.google_conversion_date=new Date,Y.google_conversion_time=Y.google_conversion_date.getTime(),Y.google_conversion_snippets="number"==typeof Y.google_conversion_snippets&&0<Y.google_conversion_snippets?Y.google_conversion_snippets+1:1,"number"!=typeof Y.google_conversion_first_time&&(Y.google_conversion_first_time=Y.google_conversion_time),Y.google_conversion_js_version="7",0!=Y.google_conversion_format&&1!=Y.google_conversion_format&&2!=Y.google_conversion_format&&3!=Y.google_conversion_format&&
(Y.google_conversion_format=1),x=new v(1),X=!0);if(X&&(document.write(R()),O.google_remarketing_for_search&&!O.google_conversion_domain)){var P=O;T()}}catch(aa){}for(var Z=O,$=0;$<A.length;$++)Z[A[$]]=null};})();


}
/*
     FILE ARCHIVED ON 21:12:59 Mar 25, 2014 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 04:45:08 Dec 12, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.085
  exclusion.robots.policy: 0.076
  cdx.remote: 0.121
  esindex: 0.009
  LoadShardBlock: 672.496 (6)
  PetaboxLoader3.datanode: 359.957 (7)
  load_resource: 102.962
  PetaboxLoader3.resolve: 56.977
*/