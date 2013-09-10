/*!
 * @preserve Qwery - A Blazing Fast query selector engine
 * https://github.com/ded/qwery
 * copyright Dustin Diaz 2012
 * MIT License
 */(function(e,t,n){typeof module!="undefined"&&module.exports?module.exports=n():typeof define=="function"&&define.amd?define(n):t[e]=n()})("qwery",this,function(){function L(){this.c={}}function D(e){return A.g(e)||A.s(e,"(^|\\s+)"+e+"(\\s+|$)",1)}function P(e,t){var n=0,r=e.length;for(;n<r;n++)t(e[n])}function H(e){for(var t=[],n=0,r=e.length;n<r;++n)$(e[n])?t=t.concat(e[n]):t[t.length]=e[n];return t}function B(e){var t=0,n=e.length,r=[];for(;t<n;t++)r[t]=e[t];return r}function j(e){while(e=e.previousSibling)if(e[u]==1)break;return e}function F(e){return e.match(C)}function I(e,t,n,r,i,s,a,c,h,p,d){var v,m,g,y,b;if(this[u]!==1)return!1;if(t&&t!=="*"&&this[o]&&this[o].toLowerCase()!==t)return!1;if(n&&(m=n.match(f))&&m[1]!==this.id)return!1;if(n&&(b=n.match(l)))for(v=b.length;v--;)if(!D(b[v].slice(1)).test(this.className))return!1;if(h&&Q.pseudos[h]&&!Q.pseudos[h](this,d))return!1;if(r&&!a){y=this.attributes;for(g in y)if(Object.prototype.hasOwnProperty.call(y,g)&&(y[g].name||g)==i)return this}return r&&!R(s,Z(this,i)||"",a)?!1:this}function q(e){return O.g(e)||O.s(e,e.replace(b,"\\$1"))}function R(e,t,n){switch(e){case"=":return t==n;case"^=":return t.match(M.g("^="+n)||M.s("^="+n,"^"+q(n),1));case"$=":return t.match(M.g("$="+n)||M.s("$="+n,q(n)+"$",1));case"*=":return t.match(M.g(n)||M.s(n,q(n),1));case"~=":return t.match(M.g("~="+n)||M.s("~="+n,"(?:^|\\s+)"+q(n)+"(?:\\s+|$)",1));case"|=":return t.match(M.g("|="+n)||M.s("|="+n,"^"+q(n)+"(-|$)",1))}return 0}function U(e,t){var n=[],i=[],s,a,f,l,h,p,d,v,m=t,g=_.g(e)||_.s(e,e.split(N)),y=e.match(T);if(!g.length)return n;l=(g=g.slice(0)).pop();g.length&&(f=g[g.length-1].match(c))&&(m=K(t,f[1]));if(!m)return n;d=F(l);p=m!==t&&m[u]!==9&&y&&/^[+~]$/.test(y[y.length-1])?function(e){while(m=m.nextSibling)m[u]==1&&(d[1]?d[1]==m[o].toLowerCase():1)&&(e[e.length]=m);return e}([]):m[r](d[1]||"*");for(s=0,a=p.length;s<a;s++)if(v=I.apply(p[s],d))n[n.length]=v;if(!g.length)return n;P(n,function(e){W(e,g,y)&&(i[i.length]=e)});return i}function z(e,t,n){if(X(t))return e==t;if($(t))return!!~H(t).indexOf(e);var r=t.split(","),i,s;while(t=r.pop()){i=_.g(t)||_.s(t,t.split(N));s=t.match(T);i=i.slice(0);if(I.apply(e,F(i.pop()))&&(!i.length||W(e,i,s,n)))return!0}return!1}function W(e,t,n,r){function s(e,r,o){while(o=k[n[r]](o,e))if(X(o)&&I.apply(o,F(t[r]))){if(!r)return o;if(i=s(o,r-1,o))return i}}var i;return(i=s(e,t.length-1,e))&&(!r||Y(i,r))}function X(e,t){return e&&typeof e=="object"&&(t=e[u])&&(t==1||t==9)}function V(e){var t=[],n,r;e:for(n=0;n<e.length;++n){for(r=0;r<t.length;++r)if(t[r]==e[n])continue e;t[t.length]=e[n]}return t}function $(e){return typeof e=="object"&&isFinite(e.length)}function J(t){return t?typeof t=="string"?Q(t)[0]:!t[u]&&$(t)?t[0]:t:e}function K(e,t,n){return e[u]===9?e.getElementById(t):e.ownerDocument&&((n=e.ownerDocument.getElementById(t))&&Y(n,e)&&n||!Y(e,e.ownerDocument)&&a('[id="'+t+'"]',e)[0])}function Q(e,t){var i,s,o=J(t);if(!o||!e)return[];if(e===window||X(e))return!t||e!==window&&X(o)&&Y(e,o)?[e]:[];if(e&&$(e))return H(e);if(i=e.match(x)){if(i[1])return(s=K(o,i[1]))?[s]:[];if(i[2])return B(o[r](i[2]));if(et&&i[3])return B(o[n](i[3]))}return a(e,o)}function G(e,t){return function(n){var r,i;if(v.test(n)){if(e[u]!==9){(i=r=e.getAttribute("id"))||e.setAttribute("id",i="__qwerymeupscotty");n='[id="'+i+'"]'+n;t(e.parentNode||e,n,!0);r||e.removeAttribute("id")}return}n.length&&t(e,n,!1)}}var e=document,t=e.documentElement,n="getElementsByClassName",r="getElementsByTagName",i="querySelectorAll",s="useNativeQSA",o="tagName",u="nodeType",a,f=/#([\w\-]+)/,l=/\.[\w\-]+/g,c=/^#([\w\-]+)$/,h=/^\.([\w\-]+)$/,p=/^([\w\-]+)$/,d=/^([\w]+)?\.([\w\-]+)$/,v=/(^|,)\s*[>~+]/,m=/^\s+|\s*([,\s\+\~>]|$)\s*/g,g=/[\s\>\+\~]/,y=/(?![\s\w\-\/\?\&\=\:\.\(\)\!,@#%<>\{\}\$\*\^'"]*\]|[\s\w\+\-]*\))/,b=/([.*+?\^=!:${}()|\[\]\/\\])/g,w=/^(\*|[a-z0-9]+)?(?:([\.\#]+[\w\-\.#]+)?)/,E=/\[([\w\-]+)(?:([\|\^\$\*\~]?\=)['"]?([ \w\-\/\?\&\=\:\.\(\)\!,@#%<>\{\}\$\*\^]+)["']?)?\]/,S=/:([\w\-]+)(\(['"]?([^()]+)['"]?\))?/,x=new RegExp(c.source+"|"+p.source+"|"+h.source),T=new RegExp("("+g.source+")"+y.source,"g"),N=new RegExp(g.source+y.source),C=new RegExp(w.source+"("+E.source+")?"+"("+S.source+")?"),k={" ":function(e){return e&&e!==t&&e.parentNode},">":function(e,t){return e&&e.parentNode==t.parentNode&&e.parentNode},"~":function(e){return e&&e.previousSibling},"+":function(e,t,n,r){return e?(n=j(e))&&(r=j(t))&&n==r&&n:!1}};L.prototype={g:function(e){return this.c[e]||undefined},s:function(e,t,n){t=n?new RegExp(t):t;return this.c[e]=t}};var A=new L,O=new L,M=new L,_=new L,Y="compareDocumentPosition"in t?function(e,t){return(t.compareDocumentPosition(e)&16)==16}:"contains"in t?function(e,n){n=n[u]===9||n==window?t:n;return n!==e&&n.contains(e)}:function(e,t){while(e=e.parentNode)if(e===t)return 1;return 0},Z=function(){var t=e.createElement("p");return(t.innerHTML='<a href="#x">x</a>')&&t.firstChild.getAttribute("href")!="#x"?function(e,t){return t==="class"?e.className:t==="href"||t==="src"?e.getAttribute(t,2):e.getAttribute(t)}:function(e,t){return e.getAttribute(t)}}(),et=!!e[n],tt=e.querySelector&&e[i],nt=function(e,t){var n=[],r,s;try{if(t[u]===9||!v.test(e))return B(t[i](e));P(r=e.split(","),G(t,function(e,t){s=e[i](t);s.length==1?n[n.length]=s.item(0):s.length&&(n=n.concat(B(s)))}));return r.length>1&&n.length>1?V(n):n}catch(o){}return rt(e,t)},rt=function(e,t){var n=[],i,s,o,a,f,l;e=e.replace(m,"$1");if(s=e.match(d)){f=D(s[2]);i=t[r](s[1]||"*");for(o=0,a=i.length;o<a;o++)f.test(i[o].className)&&(n[n.length]=i[o]);return n}P(l=e.split(","),G(t,function(e,r,i){f=U(r,e);for(o=0,a=f.length;o<a;o++)if(e[u]===9||i||Y(f[o],t))n[n.length]=f[o]}));return l.length>1&&n.length>1?V(n):n},it=function(e){typeof e[s]!="undefined"&&(a=e[s]?tt?nt:rt:rt)};it({useNativeQSA:!0});Q.configure=it;Q.uniq=V;Q.is=z;Q.pseudos={};return Q});(function(){"use strict";function o(){var t;n=!0;for(t=0;t<e.length;t+=1)e[t]();e=[]}function u(){var e;r=!0;n||o();for(e=0;e<t.length;e+=1)t[e]();t=[]}function a(e,t){var n;for(n=t.length-1;n>=0;n-=1)e(t[n])}function f(e){e=e.reverse();e.length===1&&(e=e[0]);return e}function l(e,t,n,r){a(function(r){i.addEventListener?n?r.removeEventListener(e,r[e],!1):r.addEventListener(e,t,!1):i.attachEvent&&(n?r.detachEvent("on"+e,r[e]):r.attachEvent("on"+e,t));n?r[e]=null:r[e]=t},r)}function c(e,t,n){var r=[],i,s,o,u,l,c,h,p;if(e){i=e.split(/\s+/);s=i.length;a(function(n){o=n.className;if(t==="add")n.className=o+" "+e;else{l=!0;for(c=0;c<s;c+=1){p=i[c];u=new RegExp("\\b"+p+"\\b","g");t==="has"?o.match(u)||(l=!1):t==="toggle"?n.className=n.className.match(u)?n.className.replace(u,""):n.className+" "+p:n.className=n.className.replace(u,"")}t==="has"&&r.push(l)}n.className=n.className.replace(/^\s+|\s+$/g,"")},n);if(r.length>0)return f(r)}}function h(e,t,n,r){var i=[];a(function(r){if(e){e=e.toLowerCase();n?r.removeAttribute(e):t?r.setAttribute(e,t):r.getAttribute(e)?i.push(r.getAttribute(e)):i.push(null)}},r);if(i.length>0)return f(i)}function p(e,t,n){var r=[],i;t.nodes&&t.nodes!==0?r=t.nodes:t.nodeType&&t.nodeType===1&&r.push(t);i=r.length;e==="append"?a(function(e){for(var t=0;t<i;t++)e.appendChild(r[t])},n):a(function(e){for(var t=0;t<i;t++)e.insertBefore(r[t],e.firstChild)},n)}function d(e,t){if(e){var n=[],r,i=t.length;switch(e){case"children":case"siblings":for(r=0;r<i;r++){var s=e==="siblings"?t[r].parentNode.firstChild:t[r].firstChild,o=t[r];do{s&&s.nodeType===1&&s!==o&&n.push(s);s=s.nextSibling}while(s)}break;case"parent":for(r=0;r<i;r++)n.push(t[r].parentNode);break;case"next":for(r=0;r<i;r++){var u=t[r];do u=u.nextSibling;while(u&&u.nodeType!==1);n.push(u)}break;case"previous":for(r=0;r<i;r++){var a=t[r];do a=a.previousSibling;while(a&&a.nodeType!==1);n.push(a)}}t=n}return t}function v(s){var o=[],u={},v;if(s)if(s.nodeType&&s.nodeType===1)o=[s];else if(s.constructor&&s.call&&s.apply)e.push(s);else if(typeof s=="string")if(s.match(/<\/*[a-z][^>]+?>/gi)){var m=document.createElement("div");m.innerHTML=s;o.push(m.firstChild)}else{var g=qwery(s),y=g.length;for(v=0;v<y;v++)o.push(g[v])}u.nodes=o;u.ready=function(t){t&&(n?t():e.push(t))};u.loaded=function(e){e&&(r?e():t.push(e))};u.each=function(e){typeof e=="function"&&a(function(t){return e.apply(t,arguments)},o);return u};u.find=function(e){if(e){var t=[];a(function(n){var r=qwery(e,n),i=qwery.length,s;for(s=0;s<i;s++)typeof r[s]!="undefined"&&t.push(r[s])},o);o=t}return u};u.filter=function(e){if(e){var t=[],n;switch(e){case"first":o.length>0&&(o=[o.shift()]);break;case"last":o.length>0&&(o=[o.pop()]);break;case"odd":case"even":for(n=e==="odd"?0:1;n<o.length;n+=2)t.push(o[n]);o=t}}return u};u.children=function(){o=d("children",o);return u};u.siblings=function(){o=d("siblings",o);return u};u.parent=function(){o=d("parent",o);return u};u.next=function(){o=d("next",o);return u};u.previous=function(){o=d("previous",o);return u};u.append=function(e){p("append",e,o)};u.prepend=function(e){p("prepend",e,o)};u.empty=function(){a(function(e){while(e.hasChildNodes())e.removeChild(e.lastChild)},o);return u};u.remove=function(){var e=o.length;a(function(e){try{e.parentNode.removeChild(e)}catch(t){}},o);o=[]};u.clone=function(e){e=e===!0||typeof e=="undefined"?!0:!1;var t=[],n=null;console.log("nodes before cloning");console.log(o);a(function(r){n=r.cloneNode(e);var i=document.createTextNode("CLONE");n.appendChild(i);t.push(n)},o);o=t;console.log("nodes after cloning");console.log(o);return u};u.hasClass=function(e){return c(e,"has",o)};u.addClass=function(e){c(e,"add",o);return u};u.removeClass=function(e){c(e,"remove",o);return u};u.toggleClass=function(e){c(e,"toggle",o);return u};u.html=function(e,t){var n=[],r,s;a(function(o){if(t){r=i.createElement("div");r.innerHTML=e;while((s=r.lastChild)!==null)try{t==="before"?o.parentNode.insertBefore(s,o):t==="after"&&o.parentNode.insertBefore(s,o.nextSibling)}catch(u){break}}else e?o.innerHTML=e:n.push(o.innerHTML)},o);if(n.length>0)return f(n)};u.attr=function(e,t){if(e){if(t){h(e,t,!1,o);return u}return h(e,!1,!1,o)}};u.removeAttr=function(e){h(e,!1,!0,o);return u};u.val=function(e){var t=[],n=[],r,i,s,u;typeof e=="string"&&(e=[e]);a(function(o){if(e)switch(o.nodeName){case"SELECT":for(r=0;r<o.length;r+=1)for(i=0;i<e.length;i+=1){o[r].selected="";if(o[r].value===e[i]){o[r].selected="selected";break}}break;case"INPUT":switch(o.type){case"checkbox":case"radio":o.checked="";for(r=0;r<e.length;r+=1)if(o.value===e[r]){o.checked="checked";break}break;default:o.value=e[0]}break;case"TEXTAREA":case"BUTTON":o.value=e[0]}else switch(o.nodeName){case"SELECT":u=n.length;n.push([]);for(r=0;r<o.length;r+=1)o[r].selected&&n[u].push(o[r].value);switch(n[u].length){case 0:n[u]=null;break;case 1:n[u]=n[u][0]}break;case"INPUT":switch(o.type){case"checkbox":o.checked?n.push(o.value):n.push(null);break;case"radio":s=!1;for(r=0;r<t.length;r+=1)if(t[r][0]===o.name){o.checked&&(n[t[r][1]]=o.value);s=!0}if(!s){t.push([o.name,n.length]);o.checked?n.push(o.value):n.push(null)}break;default:n.push(o.value)}break;case"TEXTAREA":case"BUTTON":n.push(o.value)}},o);if(n.length>0)return f(n)};u.on=function(e,t){l(e,t,!1,o);return u};u.off=function(e){l(e,null,!0,o);return u};return u}var e=[],t=[],n=!1,r=!1,i=document,s=window;if(i.addEventListener){i.addEventListener("DOMContentLoaded",o,!1);s.addEventListener("load",u,!1)}else if(i.attachEvent){i.attachEvent("onreadystatechange",o);s.attachEvent("onload",u)}else s.onload=u;s.$=v})();