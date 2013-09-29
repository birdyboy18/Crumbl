// @preserve Crumbl - A lightweight javascript framework
// https://github.com/glennnaessens/crumbl
// copyright Glenn Naessens 2013
// MIT License
(function(e,t,n){"use strict";function r(e,t){return e&&typeof e=="object"&&(t=e[nodeType])&&(t==1||t==9)}function i(e,t){var n=0,r=e.length;for(;n<r;n++)t(e[n])}function s(e){for(var t=[],n=0,r=e.length;n<r;++n)a(e[n])?t=t.concat(e[n]):t[t.length]=e[n];return t}function o(e){var t=0,n=e.length,r=[];for(;t<n;t++)r[t]=e[t];return r}function u(e){while(e=e.previousSibling)if(e[nodeType]==1)break;return e}function a(e){return typeof e=="object"&&isFinite(e.length)}function p(){var e;c=!0;for(e=0;e<f.length;e+=1)f[e]();f=[]}function d(){var e;h=!0;c||p();for(e=0;e<l.length;e+=1)l[e]();l=[]}function v(e){e=e.reverse();e.length===1&&(e=e[0]);return e}function m(e,n,r,s){i(s,function(i){t.addEventListener?r?i.removeEventListener(e,i[e],!1):i.addEventListener(e,n,!1):t.attachEvent&&(r?i.detachEvent("on"+e,i[e]):i.attachEvent("on"+e,n));i[e]=r?null:n})}function g(e,t,n){var r=[],s,o,u,a,f,l,c;if(e){s=e.split(/\s+/);o=s.length;i(n,function(n){u=n.className;if(t==="add")n.className=u+" "+e;else{f=!0;for(l=0;l<o;l+=1){c=s[l];a=new RegExp("\\b"+c+"\\b","g");t==="has"?u.match(a)||(f=!1):t==="toggle"?n.className=n.className.match(a)?n.className.replace(a,""):n.className+" "+c:n.className=n.className.replace(a,"")}t==="has"&&r.push(f)}n.className=n.className.replace(/^\s+|\s+$/g,"")});if(r.length>0)return v(r)}}function y(e,t,n,r){var s=[];i(r,function(r){if(e){e=e.toLowerCase();n?r.removeAttribute(e):t?r.setAttribute(e,t):r.getAttribute(e)?s.push(r.getAttribute(e)):s.push(null)}});if(s.length>0)return v(s)}function b(e,t,n){var r=[],s;t.nodes&&t.nodes!==0?r=t.nodes:t.nodeType&&t.nodeType===1&&r.push(t);s=r.length;e==="append"?i(n,function(e){for(var t=0;t<s;t++)e.appendChild(r[t])}):i(n,function(e){for(var t=0;t<s;t++)e.insertBefore(r[t],e.firstChild)})}function w(e,t){if(e){var n=[],r,i=t.length;switch(e){case"children":case"siblings":for(r=0;r<i;r++){var s=e==="siblings"?t[r].parentNode.firstChild:t[r].firstChild,o=t[r];do{s&&s.nodeType===1&&s!==o&&n.push(s);s=s.nextSibling}while(s)}break;case"parent":for(r=0;r<i;r++)n.push(t[r].parentNode);break;case"next":for(r=0;r<i;r++){var u=t[r];do u=u.nextSibling;while(u&&u.nodeType!==1);n.push(u)}break;case"previous":for(r=0;r<i;r++){var a=t[r];do a=a.previousSibling;while(a&&a.nodeType!==1);n.push(a)}}t=n}return t}function E(e,t){return new E.methods.init(e,t)}window.qwery=function(){function H(){this.c={}}function q(e){return B.g(e)||B.s(e,"(^|\\s+)"+e+"(\\s+|$)",1)}function R(e){return e.match(D)}function U(e,t,n,r,i,s,o,u,a,f,l){var c,h,v,y,b;if(this[d]!==1)return!1;if(t&&t!=="*"&&this[p]&&this[p].toLowerCase()!==t)return!1;if(n&&(h=n.match(m))&&h[1]!==this.id)return!1;if(n&&(b=n.match(g)))for(c=b.length;c--;)if(!q(b[c].slice(1)).test(this.className))return!1;if(a&&G.pseudos[a]&&!G.pseudos[a](this,l))return!1;if(r&&!o){y=this.attributes;for(v in y)if(Object.prototype.hasOwnProperty.call(y,v)&&(y[v].name||v)==i)return this}return r&&!W(s,et(this,i)||"",o)?!1:this}function z(e){return j.g(e)||j.s(e,e.replace(C,"\\$1"))}function W(e,t,n){switch(e){case"=":return t==n;case"^=":return t.match(F.g("^="+n)||F.s("^="+n,"^"+z(n),1));case"$=":return t.match(F.g("$="+n)||F.s("$="+n,z(n)+"$",1));case"*=":return t.match(F.g(n)||F.s(n,z(n),1));case"~=":return t.match(F.g("~="+n)||F.s("~="+n,"(?:^|\\s+)"+z(n)+"(?:\\s+|$)",1));case"|=":return t.match(F.g("|="+n)||F.s("|="+n,"^"+z(n)+"(-|$)",1))}return 0}function X(e,t){var n=[],r=[],s,o,u,a,f,c,h,v,m=t,g=I.g(e)||I.s(e,e.split(_)),b=e.match(M);if(!g.length)return n;a=(g=g.slice(0)).pop();g.length&&(u=g[g.length-1].match(y))&&(m=Q(t,u[1]));if(!m)return n;h=R(a);c=m!==t&&m[d]!==9&&b&&/^[+~]$/.test(b[b.length-1])?function(e){while(m=m.nextSibling)m[d]==1&&(h[1]?h[1]==m[p].toLowerCase():1)&&(e[e.length]=m);return e}([]):m[l](h[1]||"*");for(s=0,o=c.length;s<o;s++)if(v=U.apply(c[s],h))n[n.length]=v;if(!g.length)return n;i(n,function(e){$(e,g,b)&&(r[r.length]=e)});return r}function V(e,t,n){if(r(t))return e==t;if(a(t))return!!~s(t).indexOf(e);var i=t.split(","),o,u;while(t=i.pop()){o=I.g(t)||I.s(t,t.split(_));u=t.match(M);o=o.slice(0);if(U.apply(e,R(o.pop()))&&(!o.length||$(e,o,u,n)))return!0}return!1}function $(e,t,n,i){function o(e,i,u){while(u=P[n[i]](u,e))if(r(u)&&U.apply(u,R(t[i]))){if(!i)return u;if(s=o(u,i-1,u))return s}}var s;return(s=o(e,t.length-1,e))&&(!i||Z(s,i))}function J(e){var t=[],n,r;e:for(n=0;n<e.length;++n){for(r=0;r<t.length;++r)if(t[r]==e[n])continue e;t[t.length]=e[n]}return t}function K(t){return t?typeof t=="string"?G(t)[0]:!t[d]&&a(t)?t[0]:t:e}function Q(e,t,n){return e[d]===9?e.getElementById(t):e.ownerDocument&&((n=e.ownerDocument.getElementById(t))&&Z(n,e)&&n||!Z(e,e.ownerDocument)&&v('[id="'+t+'"]',e)[0])}function G(e,t){var n,i,u=K(t);if(!u||!e)return[];if(e===window||r(e))return!t||e!==window&&r(u)&&Z(e,u)?[e]:[];if(e&&a(e))return s(e);if(n=e.match(O)){if(n[1])return(i=Q(u,n[1]))?[i]:[];if(n[2])return o(u[l](n[2]));if(tt&&n[3])return o(u[f](n[3]))}return v(e,u)}function Y(e,t){return function(n){var r,i;if(S.test(n)){if(e[d]!==9){(i=r=e.getAttribute("id"))||e.setAttribute("id",i="__qwerymeupscotty");n='[id="'+i+'"]'+n;t(e.parentNode||e,n,!0);r||e.removeAttribute("id")}return}n.length&&t(e,n,!1)}}var e=document,t=e.documentElement,f="getElementsByClassName",l="getElementsByTagName",c="querySelectorAll",h="useNativeQSA",p="tagName",d="nodeType",v,m=/#([\w\-]+)/,g=/\.[\w\-]+/g,y=/^#([\w\-]+)$/,b=/^\.([\w\-]+)$/,w=/^([\w\-]+)$/,E=/^([\w]+)?\.([\w\-]+)$/,S=/(^|,)\s*[>~+]/,x=/^\s+|\s*([,\s\+\~>]|$)\s*/g,T=/[\s\>\+\~]/,N=/(?![\s\w\-\/\?\&\=\:\.\(\)\!,@#%<>\{\}\$\*\^'"]*\]|[\s\w\+\-]*\))/,C=/([.*+?\^=!:${}()|\[\]\/\\])/g,k=/^(\*|[a-z0-9]+)?(?:([\.\#]+[\w\-\.#]+)?)/,L=/\[([\w\-]+)(?:([\|\^\$\*\~]?\=)['"]?([ \w\-\/\?\&\=\:\.\(\)\!,@#%<>\{\}\$\*\^]+)["']?)?\]/,A=/:([\w\-]+)(\(['"]?([^()]+)['"]?\))?/,O=new RegExp(y.source+"|"+w.source+"|"+b.source),M=new RegExp("("+T.source+")"+N.source,"g"),_=new RegExp(T.source+N.source),D=new RegExp(k.source+"("+L.source+")?"+"("+A.source+")?"),P={" ":function(e){return e&&e!==t&&e.parentNode},">":function(e,t){return e&&e.parentNode==t.parentNode&&e.parentNode},"~":function(e){return e&&e.previousSibling},"+":function(e,t,n,r){return e?(n=u(e))&&(r=u(t))&&n==r&&n:!1}};H.prototype={g:function(e){return this.c[e]||n},s:function(e,t,n){t=n?new RegExp(t):t;return this.c[e]=t}};var B=new H,j=new H,F=new H,I=new H,Z="compareDocumentPosition"in t?function(e,t){return(t.compareDocumentPosition(e)&16)==16}:"contains"in t?function(e,n){n=n[d]===9||n==window?t:n;return n!==e&&n.contains(e)}:function(e,t){while(e=e.parentNode)if(e===t)return 1;return 0},et=function(){var t=e.createElement("p");return(t.innerHTML='<a href="#x">x</a>')&&t.firstChild.getAttribute("href")!="#x"?function(e,t){return t==="class"?e.className:t==="href"||t==="src"?e.getAttribute(t,2):e.getAttribute(t)}:function(e,t){return e.getAttribute(t)}}(),tt=!!e[f],nt=e.querySelector&&e[c],rt=function(e,t){var n=[],r,s;try{if(t[d]===9||!S.test(e))return o(t[c](e));i(r=e.split(","),Y(t,function(e,t){s=e[c](t);s.length==1?n[n.length]=s.item(0):s.length&&(n=n.concat(o(s)))}));return r.length>1&&n.length>1?J(n):n}catch(u){}return it(e,t)},it=function(e,t){var n=[],r,s,o,u,a,f;e=e.replace(x,"$1");if(s=e.match(E)){a=q(s[2]);r=t[l](s[1]||"*");for(o=0,u=r.length;o<u;o++)a.test(r[o].className)&&(n[n.length]=r[o]);return n}i(f=e.split(","),Y(t,function(e,r,i){a=X(r,e);for(o=0,u=a.length;o<u;o++)if(e[d]===9||i||Z(a[o],t))n[n.length]=a[o]}));return f.length>1&&n.length>1?J(n):n},st=function(e){e[h]!==n&&(v=e[h]?nt?rt:it:it)};st({useNativeQSA:!0});G.configure=st;G.uniq=J;G.is=V;G.pseudos={};return G}();var f=[],l=[],c=!1,h=!1;if(t.addEventListener){t.addEventListener("DOMContentLoaded",p,!1);e.addEventListener("load",d,!1)}else if(t.attachEvent){t.attachEvent("onreadystatechange",p);e.attachEvent("onload",d)}else e.onload=d;E.methods=E.prototype={init:function(e,n){var r=[],n=n||t,i=null,s=0,o,u=!1;if(e)if(e.nodeType&&e.nodeType===1)r=[e];else{if(e.constructor&&e.call&&e.apply){f.push(e);return null}if(e instanceof Array)r=e;else if(typeof e=="string")if(e.match(/<\/*[a-z][^>]+?>/gi)){var a=document.createElement("div");a.innerHTML=e;r.push(a.firstChild)}else{if(n===t){i=qwery(e);s=i.length;u=!0}else if(typeof n=="string"){i=qwery(e);s=i.length;u=!0}else if(n.nodeType&&n.nodeType===1||n instanceof Array&&n.length===1){i=qwery(e,n[0]||n);s=i.length;u=!0}else if(n instanceof Array){var l=n.length,c;for(c=0;c<l;c++){i=qwery(e,n[c]);s=i.length;for(o=0;o<s;o++)r.push(i[o])}}if(u)for(o=0;o<s;o++)r.push(i[o])}}this.nodes=r;this.length=o;return this},ready:function(e){e&&(c?e():f.push(e))},loaded:function(e){e&&(h?e():l.push(e))},each:function(e){typeof e=="function"&&i(this.nodes,function(t){return e.apply(t,arguments)});return this},find:function(e){return new E.methods.init(e,this.nodes)},children:function(){return new E.methods.init(w("children",this.nodes))},siblings:function(){return new E.methods.init(w("siblings",this.nodes))},parent:function(){return new E.methods.init(w("parent",this.nodes))},next:function(){return new E.methods.init(w("next",this.nodes))},prev:function(){return new E.methods.init(w("previous",this.nodes))},append:function(e){b("append",e,this.nodes)},prepend:function(e){b("prepend",e,this.nodes)},empty:function(){i(this.nodes,function(e){while(e.hasChildNodes())e.removeChild(e.lastChild)});return this},remove:function(){i(this.nodes,function(e){try{e.parentNode.removeChild(e)}catch(t){}});this.nodes=[];return this},clone:function(e){e=e===!0||e===n?!0:!1;var t=[];i(this.nodes,function(n){(n.nodeType||n.nodeType===1)&&t.push(n.cloneNode(e))});return new E.methods.init(t)},hasClass:function(e){return g(e,"has",this.nodes)},addClass:function(e){g(e,"add",this.nodes);return this},removeClass:function(e){g(e,"remove",this.nodes);return this},toggleClass:function(e){g(e,"toggle",this.nodes);return this},html:function(e){var t=[];i(this.nodes,function(n){e?n.innerHTML=e:t.push(n.innerHTML)});if(t.length>0)return v(t)},attr:function(e,t){if(e){if(t){y(e,t,!1,this.nodes);return this}return y(e,!1,!1,this.nodes)}},removeAttr:function(e){y(e,!1,!0,this.nodes);return this},on:function(e,t){m(e,t,!1,this.nodes);return this},off:function(e){m(e,null,!0,this.nodes);return this}};E.methods.init.prototype=E.methods;e.$=E})(window,document);