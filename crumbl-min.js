/*!
 * @preserve Crumbl - A lightweight javascript framework
 * https://github.com/glennnaessens/crumbl
 * copyright Glenn Naessens 2013
 * MIT License
 */(function(e,t,n){"use strict";function u(){var e;s=!0;for(e=0;e<r.length;e+=1)r[e]();r=[]}function a(){var e;o=!0;s||u();for(e=0;e<i.length;e+=1)i[e]();i=[]}function f(e,t){var n;for(n=t.length-1;n>=0;n-=1)e(t[n])}function l(e){e=e.reverse();e.length===1&&(e=e[0]);return e}function c(e,n,r,i){f(function(i){t.addEventListener?r?i.removeEventListener(e,i[e],!1):i.addEventListener(e,n,!1):t.attachEvent&&(r?i.detachEvent("on"+e,i[e]):i.attachEvent("on"+e,n));r?i[e]=null:i[e]=n},i)}function h(e,t,n){var r=[],i,s,o,u,a,c,h,p;if(e){i=e.split(/\s+/);s=i.length;f(function(n){o=n.className;if(t==="add")n.className=o+" "+e;else{a=!0;for(c=0;c<s;c+=1){p=i[c];u=new RegExp("\\b"+p+"\\b","g");t==="has"?o.match(u)||(a=!1):t==="toggle"?n.className=n.className.match(u)?n.className.replace(u,""):n.className+" "+p:n.className=n.className.replace(u,"")}t==="has"&&r.push(a)}n.className=n.className.replace(/^\s+|\s+$/g,"")},n);if(r.length>0)return l(r)}}function p(e,t,n,r){var i=[];f(function(r){if(e){e=e.toLowerCase();n?r.removeAttribute(e):t?r.setAttribute(e,t):r.getAttribute(e)?i.push(r.getAttribute(e)):i.push(null)}},r);if(i.length>0)return l(i)}function d(e,t,n){var r=[],i;t.nodes&&t.nodes!==0?r=t.nodes:t.nodeType&&t.nodeType===1&&r.push(t);i=r.length;e==="append"?f(function(e){for(var t=0;t<i;t++)e.appendChild(r[t])},n):f(function(e){for(var t=0;t<i;t++)e.insertBefore(r[t],e.firstChild)},n)}function v(e,t){if(e){var n=[],r,i=t.length;switch(e){case"children":case"siblings":for(r=0;r<i;r++){var s=e==="siblings"?t[r].parentNode.firstChild:t[r].firstChild,o=t[r];do{s&&s.nodeType===1&&s!==o&&n.push(s);s=s.nextSibling}while(s)}break;case"parent":for(r=0;r<i;r++)n.push(t[r].parentNode);break;case"next":for(r=0;r<i;r++){var u=t[r];do u=u.nextSibling;while(u&&u.nodeType!==1);n.push(u)}break;case"previous":for(r=0;r<i;r++){var a=t[r];do a=a.previousSibling;while(a&&a.nodeType!==1);n.push(a)}}t=n}return t}function m(e,t){return new m.methods.init(e,t)}window.qwery=function(){function A(){this.c={}}function P(e){return O.g(e)||O.s(e,"(^|\\s+)"+e+"(\\s+|$)",1)}function H(e,t){var n=0,r=e.length;for(;n<r;n++)t(e[n])}function B(e){for(var t=[],n=0,r=e.length;n<r;++n)J(e[n])?t=t.concat(e[n]):t[t.length]=e[n];return t}function j(e){var t=0,n=e.length,r=[];for(;t<n;t++)r[t]=e[t];return r}function F(e){while(e=e.previousSibling)if(e[a]==1)break;return e}function I(e){return e.match(k)}function q(e,t,n,r,i,s,o,f,h,p,d){var v,m,g,y,b;if(this[a]!==1)return!1;if(t&&t!=="*"&&this[u]&&this[u].toLowerCase()!==t)return!1;if(n&&(m=n.match(l))&&m[1]!==this.id)return!1;if(n&&(b=n.match(c)))for(v=b.length;v--;)if(!P(b[v].slice(1)).test(this.className))return!1;if(h&&G.pseudos[h]&&!G.pseudos[h](this,d))return!1;if(r&&!o){y=this.attributes;for(g in y)if(Object.prototype.hasOwnProperty.call(y,g)&&(y[g].name||g)==i)return this}return r&&!U(s,et(this,i)||"",o)?!1:this}function R(e){return M.g(e)||M.s(e,e.replace(w,"\\$1"))}function U(e,t,n){switch(e){case"=":return t==n;case"^=":return t.match(_.g("^="+n)||_.s("^="+n,"^"+R(n),1));case"$=":return t.match(_.g("$="+n)||_.s("$="+n,R(n)+"$",1));case"*=":return t.match(_.g(n)||_.s(n,R(n),1));case"~=":return t.match(_.g("~="+n)||_.s("~="+n,"(?:^|\\s+)"+R(n)+"(?:\\s+|$)",1));case"|=":return t.match(_.g("|="+n)||_.s("|="+n,"^"+R(n)+"(-|$)",1))}return 0}function z(e,t){var n=[],r=[],s,o,f,l,c,p,d,v,m=t,g=D.g(e)||D.s(e,e.split(C)),y=e.match(N);if(!g.length)return n;l=(g=g.slice(0)).pop();g.length&&(f=g[g.length-1].match(h))&&(m=Q(t,f[1]));if(!m)return n;d=I(l);p=m!==t&&m[a]!==9&&y&&/^[+~]$/.test(y[y.length-1])?function(e){while(m=m.nextSibling)m[a]==1&&(d[1]?d[1]==m[u].toLowerCase():1)&&(e[e.length]=m);return e}([]):m[i](d[1]||"*");for(s=0,o=p.length;s<o;s++)if(v=q.apply(p[s],d))n[n.length]=v;if(!g.length)return n;H(n,function(e){X(e,g,y)&&(r[r.length]=e)});return r}function W(e,t,n){if(V(t))return e==t;if(J(t))return!!~B(t).indexOf(e);var r=t.split(","),i,s;while(t=r.pop()){i=D.g(t)||D.s(t,t.split(C));s=t.match(N);i=i.slice(0);if(q.apply(e,I(i.pop()))&&(!i.length||X(e,i,s,n)))return!0}return!1}function X(e,t,n,r){function s(e,r,o){while(o=L[n[r]](o,e))if(V(o)&&q.apply(o,I(t[r]))){if(!r)return o;if(i=s(o,r-1,o))return i}}var i;return(i=s(e,t.length-1,e))&&(!r||Z(i,r))}function V(e,t){return e&&typeof e=="object"&&(t=e[a])&&(t==1||t==9)}function $(e){var t=[],n,r;e:for(n=0;n<e.length;++n){for(r=0;r<t.length;++r)if(t[r]==e[n])continue e;t[t.length]=e[n]}return t}function J(e){return typeof e=="object"&&isFinite(e.length)}function K(t){return t?typeof t=="string"?G(t)[0]:!t[a]&&J(t)?t[0]:t:e}function Q(e,t,n){return e[a]===9?e.getElementById(t):e.ownerDocument&&((n=e.ownerDocument.getElementById(t))&&Z(n,e)&&n||!Z(e,e.ownerDocument)&&f('[id="'+t+'"]',e)[0])}function G(e,t){var n,s,o=K(t);if(!o||!e)return[];if(e===window||V(e))return!t||e!==window&&V(o)&&Z(e,o)?[e]:[];if(e&&J(e))return B(e);if(n=e.match(T)){if(n[1])return(s=Q(o,n[1]))?[s]:[];if(n[2])return j(o[i](n[2]));if(tt&&n[3])return j(o[r](n[3]))}return f(e,o)}function Y(e,t){return function(n){var r,i;if(m.test(n)){if(e[a]!==9){(i=r=e.getAttribute("id"))||e.setAttribute("id",i="__qwerymeupscotty");n='[id="'+i+'"]'+n;t(e.parentNode||e,n,!0);r||e.removeAttribute("id")}return}n.length&&t(e,n,!1)}}var e=document,t=e.documentElement,r="getElementsByClassName",i="getElementsByTagName",s="querySelectorAll",o="useNativeQSA",u="tagName",a="nodeType",f,l=/#([\w\-]+)/,c=/\.[\w\-]+/g,h=/^#([\w\-]+)$/,p=/^\.([\w\-]+)$/,d=/^([\w\-]+)$/,v=/^([\w]+)?\.([\w\-]+)$/,m=/(^|,)\s*[>~+]/,g=/^\s+|\s*([,\s\+\~>]|$)\s*/g,y=/[\s\>\+\~]/,b=/(?![\s\w\-\/\?\&\=\:\.\(\)\!,@#%<>\{\}\$\*\^'"]*\]|[\s\w\+\-]*\))/,w=/([.*+?\^=!:${}()|\[\]\/\\])/g,E=/^(\*|[a-z0-9]+)?(?:([\.\#]+[\w\-\.#]+)?)/,S=/\[([\w\-]+)(?:([\|\^\$\*\~]?\=)['"]?([ \w\-\/\?\&\=\:\.\(\)\!,@#%<>\{\}\$\*\^]+)["']?)?\]/,x=/:([\w\-]+)(\(['"]?([^()]+)['"]?\))?/,T=new RegExp(h.source+"|"+d.source+"|"+p.source),N=new RegExp("("+y.source+")"+b.source,"g"),C=new RegExp(y.source+b.source),k=new RegExp(E.source+"("+S.source+")?"+"("+x.source+")?"),L={" ":function(e){return e&&e!==t&&e.parentNode},">":function(e,t){return e&&e.parentNode==t.parentNode&&e.parentNode},"~":function(e){return e&&e.previousSibling},"+":function(e,t,n,r){return e?(n=F(e))&&(r=F(t))&&n==r&&n:!1}};A.prototype={g:function(e){return this.c[e]||n},s:function(e,t,n){t=n?new RegExp(t):t;return this.c[e]=t}};var O=new A,M=new A,_=new A,D=new A,Z="compareDocumentPosition"in t?function(e,t){return(t.compareDocumentPosition(e)&16)==16}:"contains"in t?function(e,n){n=n[a]===9||n==window?t:n;return n!==e&&n.contains(e)}:function(e,t){while(e=e.parentNode)if(e===t)return 1;return 0},et=function(){var t=e.createElement("p");return(t.innerHTML='<a href="#x">x</a>')&&t.firstChild.getAttribute("href")!="#x"?function(e,t){return t==="class"?e.className:t==="href"||t==="src"?e.getAttribute(t,2):e.getAttribute(t)}:function(e,t){return e.getAttribute(t)}}(),tt=!!e[r],nt=e.querySelector&&e[s],rt=function(e,t){var n=[],r,i;try{if(t[a]===9||!m.test(e))return j(t[s](e));H(r=e.split(","),Y(t,function(e,t){i=e[s](t);i.length==1?n[n.length]=i.item(0):i.length&&(n=n.concat(j(i)))}));return r.length>1&&n.length>1?$(n):n}catch(o){}return it(e,t)},it=function(e,t){var n=[],r,s,o,u,f,l;e=e.replace(g,"$1");if(s=e.match(v)){f=P(s[2]);r=t[i](s[1]||"*");for(o=0,u=r.length;o<u;o++)f.test(r[o].className)&&(n[n.length]=r[o]);return n}H(l=e.split(","),Y(t,function(e,r,i){f=z(r,e);for(o=0,u=f.length;o<u;o++)if(e[a]===9||i||Z(f[o],t))n[n.length]=f[o]}));return l.length>1&&n.length>1?$(n):n},st=function(e){typeof e[o]!="undefined"&&(f=e[o]?nt?rt:it:it)};st({useNativeQSA:!0});G.configure=st;G.uniq=$;G.is=W;G.pseudos={};return G}();var r=[],i=[],s=!1,o=!1;if(t.addEventListener){t.addEventListener("DOMContentLoaded",u,!1);e.addEventListener("load",a,!1)}else if(t.attachEvent){t.attachEvent("onreadystatechange",u);e.attachEvent("onload",a)}else e.onload=a;m.methods=m.prototype={init:function(e,n){var i=[],n=n||t,s=null,o=0,u,a=!1;if(e)if(e.nodeType&&e.nodeType===1)i=[e];else if(e.constructor&&e.call&&e.apply)r.push(e);else if(e instanceof Array)i=e;else if(typeof e=="string")if(e.match(/<\/*[a-z][^>]+?>/gi)){var f=document.createElement("div");f.innerHTML=e;i.push(f.firstChild)}else{if(n===t){s=qwery(e);o=s.length;a=!0}else if(typeof n=="string"){s=qwery(e);o=s.length;a=!0}else if(n.nodeType&&n.nodeType===1||n instanceof Array&&n.length===1){s=qwery(e,n[0]||n);o=s.length;a=!0}else if(n instanceof Array){var l=n.length,c;for(c=0;c<l;c++){s=qwery(e,n[c]);o=s.length;for(u=0;u<o;u++)i.push(s[u])}}if(a)for(u=0;u<o;u++)i.push(s[u])}this.nodes=i;this.length=u;return this},ready:function(e){e&&(s?e():r.push(e))},loaded:function(e){e&&(o?e():i.push(e))},each:function(e){typeof e=="function"&&f(function(t){return e.apply(t,arguments)},this.nodes);return this},find:function(e){return new m.methods.init(e,this.nodes)},children:function(){return new m.methods.init(v("children",this.nodes))},siblings:function(){return new m.methods.init(v("siblings",this.nodes))},parent:function(){return new m.methods.init(v("parent",this.nodes))},next:function(){return new m.methods.init(v("next",this.nodes))},prev:function(){return new m.methods.init(v("previous",this.nodes))},append:function(e){d("append",e,this.nodes)},prepend:function(e){d("prepend",e,this.nodes)},empty:function(){f(function(e){while(e.hasChildNodes())e.removeChild(e.lastChild)},this.nodes);return this},remove:function(){f(function(e){try{e.parentNode.removeChild(e)}catch(t){}},this.nodes);this.nodes=[];return this},clone:function(e){e=e===!0||e===n?!0:!1;var t=[];f(function(n){(n.nodeType||n.nodeType===1)&&t.push(n.cloneNode(e))},this.nodes);return new m.methods.init(t)},hasClass:function(e){return h(e,"has",this.nodes)},addClass:function(e){h(e,"add",this.nodes);return this},removeClass:function(e){h(e,"remove",this.nodes);return this},toggleClass:function(e){h(e,"toggle",this.nodes);return this},html:function(e,t){var n=[];f(function(t){e?t.innerHTML=e:n.push(t.innerHTML)},this.nodes);if(n.length>0)return l(n)},attr:function(e,t){if(e){if(t){p(e,t,!1,this.nodes);return this}return p(e,!1,!1,this.nodes)}},removeAttr:function(e){p(e,!1,!0,this.nodes);return this},val:function(e){var t=[],n=[],r,i,s,o;typeof e=="string"&&(e=[e]);f(function(u){if(e)switch(u.nodeName){case"SELECT":for(r=0;r<u.length;r+=1)for(i=0;i<e.length;i+=1){u[r].selected="";if(u[r].value===e[i]){u[r].selected="selected";break}}break;case"INPUT":switch(u.type){case"checkbox":case"radio":u.checked="";for(r=0;r<e.length;r+=1)if(u.value===e[r]){u.checked="checked";break}break;default:u.value=e[0]}break;case"TEXTAREA":case"BUTTON":u.value=e[0]}else switch(u.nodeName){case"SELECT":o=n.length;n.push([]);for(r=0;r<u.length;r+=1)u[r].selected&&n[o].push(u[r].value);switch(n[o].length){case 0:n[o]=null;break;case 1:n[o]=n[o][0]}break;case"INPUT":switch(u.type){case"checkbox":u.checked?n.push(u.value):n.push(null);break;case"radio":s=!1;for(r=0;r<t.length;r+=1)if(t[r][0]===u.name){u.checked&&(n[t[r][1]]=u.value);s=!0}if(!s){t.push([u.name,n.length]);u.checked?n.push(u.value):n.push(null)}break;default:n.push(u.value)}break;case"TEXTAREA":case"BUTTON":n.push(u.value)}},this.nodes);if(n.length>0)return l(n)},on:function(e,t){c(e,t,!1,this.nodes);return this},off:function(e){c(e,null,!0,this.nodes);return this}};m.methods.init.prototype=m.methods;e.$=m})(window,document);