parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"u0NS":[function(require,module,exports) {
var e=document.getElementById("lnb_ex"),t=document.getElementById("full_down_menu_ex"),n=document.querySelectorAll(".li_inner_ul"),o=document.querySelectorAll(".main_menu_list > .menu_list"),c=document.querySelectorAll(".menu_img");e.addEventListener("mouseover",function(){A(t,"full_down_on");for(var e=0;e<n.length;e++)A(n[e],"block_on")}),e.addEventListener("mouseout",function(){I(t,"full_down_on");for(var e=0;e<n.length;e++)I(n[e],"block_on")});for(var r=function(e){o[e].addEventListener("mouseover",function(){for(var t=0;t<c.length;t+=c.length)c[t].children[0].setAttribute("src","./images/menu_img_".concat(e+e,".jpg")),c[t+1].children[0].setAttribute("src","./images/menu_img_".concat(e+e+1,".jpg"))})},l=0;l<o.length;l++)r(l);var u=document.querySelector(".keyward_list"),i=u.children[0].offsetHeight+5,d=0,s=0,a=u.children[0].cloneNode(!0);function _(){var e=0;s++,A(u,"keyward_list_active");var t=setInterval(function(){var n=x(i,--d);u.style.top=n,1===++e&&clearInterval(t),-5===d&&(d=0)});setTimeout(function(){5===s&&(I(u,"keyward_list_active"),u.style.top=0,s=0)},1050),setTimeout(function(){_()},1150)}u.appendChild(a),_();var f=document.querySelector("body"),m=document.querySelector(".gnb_list > .icon"),v=document.querySelector(".search_ex .close_btn"),h=document.querySelector(".search_ex"),y=document.querySelector(".search"),g=document.getElementById("product_search"),q=document.querySelector(".search_delete"),S=!1;m.addEventListener("click",function(){S||(f.style.overflow="hidden",A(h,"block_on"),setTimeout(function(){g.focus(),A(y,"search_on"),A(v,"search_close_on")},50),S=!0)}),v.addEventListener("click",function(){f.style.overflow="visible",S=!1,I(h,"block_on"),I(y,"search_on"),I(v,"search_close_on")}),q.addEventListener("click",function(){g.focus(),g.value=""});var b=document.querySelector(".top_btn"),p=document.querySelector(".site_info"),k=document.querySelector(".footer_ex"),w=p.offsetHeight,E=k.offsetHeight,L=w+E;function x(e,t){return e*t+"px"}function A(e,t){e.classList.add(t)}function I(e,t){e.classList.remove(t)}function B(e,t){for(var n=0;n<e.length/2;n++){var o=e[n].cloneNode(!0);t.appendChild(o)}}function T(e,t){for(var n=0;n<e.length;n++){var o=e[n].cloneNode(!0);t.insertBefore(o,e[0])}}b.addEventListener("click",function(){window.scrollTo({top:0})});
},{}]},{},["u0NS"], null)
//# sourceMappingURL=header_n_etc.8a680bd3.js.map