parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"u1Lo":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.totalRegex=void 0;var e={totalRegexArr:[{id:"regexOnlyNumber04length",regex:/^(19\d\d|20\d\d|2100)$/},{id:"regexOnlyNumber02length",regex:/^(0?[1-9]|[1-2][0-9]|3[0-1])$/},{id:"regexEngNSymbolsNNumber",regex:/^(?!.*[_].*[_])[a-z0-9_]{6,15}$/}],nameRegexArr:[{id:"regexKor",regex:/^[가-힣]{2,8}$/},{id:"regexSymbols",regex:/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/}],emailRegexArr:[{id:"regexEmail_before",regex:/^(?!.*[_].*[_])[a-z0-9_]{2,12}$/},{id:"regexEmail_after",regex:/^(?!.*\.\.)[a-z][a-z\d.]{0,10}[a-z\d]$/}]};exports.totalRegex=e;
},{}],"wKcg":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.userData=void 0;var e=[{userIDInfo:"dbstjghks",userPWInfo:"154876",userName:"윤서환",userBirth:"19951019",userEmail:"ctr_nike@naver.com"},{userIDInfo:"dbstjghks777",userPWInfo:"15484846",userName:"윤시환",userBirth:"19951018",userEmail:"dbstjghks777@naver.com"},{userIDInfo:"javascript",userPWInfo:"difficult",userName:"자바스크립",userBirth:"19601017",userEmail:"javascript@naver.com"},{userIDInfo:"kimnadan",userPWInfo:"d58484",userName:"김나단",userBirth:"19960214",userEmail:"jgagagagcript@naver.com"}];exports.userData=e;
},{}],"WjuU":[function(require,module,exports) {
"use strict";var e=require("./regex.js"),t=require("./userdata.js");function n(e,t){return a(e)||o(e,t)||u(e,t)||r()}function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,l,u=[],c=!0,i=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(u.push(r.value),u.length!==t);c=!0);}catch(s){i=!0,o=s}finally{try{if(!c&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(i)throw o}}return u}}function a(e){if(Array.isArray(e))return e}function l(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=u(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,l=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){c=!0,a=e},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw a}}}}function u(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var i,s=e.totalRegex.nameRegexArr[0].regex,d=e.totalRegex.totalRegexArr[0].regex,f=e.totalRegex.totalRegexArr[1].regex,m=e.totalRegex.totalRegexArr[2].regex,v=e.totalRegex.emailRegexArr[0].regex,y=e.totalRegex.emailRegexArr[1].regex,_=document.getElementById("terms_all_chk"),h=document.getElementById("terms_chk_01"),p=document.getElementById("terms_chk_02"),x=document.querySelectorAll(".terms_chk"),g=document.getElementById("caution");function E(){_.checked?x.forEach(function(e){return e.checked=!0}):x.forEach(function(e){return e.checked=!1})}function b(){var e,t=Array.from(x);x.forEach(function(){e=t.every(function(e){return e.checked})}),_.checked=!!e}_.addEventListener("click",E),h.addEventListener("click",b),p.addEventListener("click",b);var C,k=document.querySelectorAll(".necessary_text"),A=document.querySelector(".caution_pop_up_ex"),I=document.getElementById("user_name"),L=document.getElementById("user_id"),B=document.getElementById("user_pw"),w=document.getElementById("user_pw_chk"),S=document.getElementById("user_email_last"),N=document.getElementById("user_email_last_select"),R=document.getElementById("pw_view_btn"),j=document.getElementById("user_id_chk");function q(){var e=Array.from(k).indexOf(this),t=this.parentNode.lastElementChild;""===this.value||void 0===this.value||null===this.value?(V(this,t),t.textContent="입력값을 입력 혹은 선택해주세요!"):U(this,e)}function O(){var e=L.parentNode.lastElementChild,n=t.userData.some(function(e){return e.userIDInfo===L.value});""===L.value||void 0===L.value||null===L.value?(V(L,e),e.textContent="입력값을 입력 혹은 선택해주세요!"):m.test(L.value)?n?(V(L,e),e.textContent="중복된 아이디입니다!"):(W(L,e),e.textContent="알맞은 양식입니다!",C=!0):(V(L,e),e.textContent="유효하지 않은 입력입니다. (특수문자 _는 한번만 가능, 영어 소문자 또는 숫자 특수문자_ 조합 가능, 6~15자)")}A.addEventListener("click",function(){_e(this,"pop_up_on")}),k.forEach(function(e){e.addEventListener("keyup",q),e.addEventListener("blur",q)}),j.addEventListener("click",O);var D=!1;function M(){D?(B.setAttribute("type","password"),w.setAttribute("type","password"),_e(R,"pw_on"),D=!1):(B.setAttribute("type","text"),w.setAttribute("type","text"),ve(R,"pw_on"),D=!0)}function T(){var e=N.options[N.selectedIndex],t=this.parentNode.lastElementChild;""===e.value||void 0===e.value||null===e.value?S.removeAttribute("disabled"):(S.value=e.textContent,S.setAttribute("disabled","true"),W(S,t),t.textContent="알맞은 양식입니다!")}function U(e,t){switch(t){case 0:$(e);break;case 2:z(e);break;case 1:case 3:F(e);break;case 4:G(e);break;case 5:H(e);break;case 6:J(e);break;case 7:K(e);break;case 8:P(e);break;case 9:Q(e)}}function $(e){var t=e.parentNode.lastElementChild;s.test(e.value)?(W(e,t),t.textContent="알맞은 양식입니다!"):(V(e,t),t.textContent="이름은 한글만 가능합니다.(최대 8자) 또한 초성 입력은 안됩니다.")}function z(e){var t=e.parentNode.lastElementChild;d.test(parseInt(e.value))?(W(e,t),t.textContent="알맞은 양식입니다!"):(V(e,t),t.textContent="유효한 년도가 아닙니다 (1900~2100까지 가능)")}function F(e){var t=e.parentNode.lastElementChild;e.value?(W(e,t),t.textContent="알맞은 양식입니다!"):V(e,t)}function G(e){var t=e.parentNode.lastElementChild;f.test(parseInt(e.value))?(W(e,t),t.textContent="알맞은 양식입니다!"):(V(e,t),t.textContent="유효한 입력이 아닙니다 (1일~31일까지 가능)")}function H(e){X(e)}function J(e){var t=e.parentNode.lastElementChild;m.test(e.value)?(W(e,t),t.textContent="알맞은 양식입니다!"):(V(e,t),t.textContent="유효하지 않은 입력입니다. (특수문자 _는 한번만 가능, 영어 소문자 또는 숫자 특수문자_ 조합 가능, 6~15자)")}function K(e){var t=e.parentNode.lastElementChild;B.classList.contains("trueOn")||B.value===e.value?(W(e,t),t.textContent="비밀번호가 일치합니다!"):(V(e,t),t.textContent="비밀번호가 일치하지 않습니다.")}function P(e){var t=e.parentNode.lastElementChild;v.test(e.value)?(W(e,t),t.textContent="알맞은 양식입니다!"):(V(e,t),t.textContent="유효하지 않은 입력입니다. (특수문자 _는 한번만 가능, 영어 소문자 또는 숫자 특수문자_ 조합 가능, 2~12자)")}function Q(e){var t=e.parentNode.lastElementChild;y.test(e.value)?(W(e,t),t.textContent="알맞은 양식입니다!"):(V(e,t),t.textContent="유효하지 않은 입력입니다. (영어 소문자와 숫자, .만 입력 가능, .은 두번까지만)")}function V(e,t){t.style.color="red",_e(e,"true_on"),ve(e,"false_on")}function W(e,t){t.style.color="green",_e(e,"false_on"),ve(e,"true_on")}function X(e){he(e,["false,on","true_on"])}R.addEventListener("click",M),B.addEventListener("keyup",function(e){var t=e.getModifierState("CapsLock"),n=this.parentNode.lastElementChild;!D&&t&&B.value.length>0&&(n.textContent="Caps Lock을 꺼주세요!")}),N.addEventListener("change",T);var Y=document.getElementById("id_n_title_ment"),Z=document.getElementById("title_ment"),ee=document.querySelectorAll(".circle"),te=document.querySelectorAll(".text"),ne=document.getElementById("prev_btn"),re=document.getElementById("next_btn"),oe=document.querySelectorAll(".page"),ae=document.getElementById("login_page_in_btn");re.addEventListener("click",ie),ne.addEventListener("click",ce);var le=0;function ue(){if(C){var e=document.createElement("p");e.textContent=L.value,Y.insertBefore(e,Z)}}function ce(){0===le?location.href="./login.html":1===le&&(le--,re.textContent="Next",me()),k.forEach(function(e){return e.value=""}),k.forEach(function(e){e.parentElement.lastElementChild.textContent="",_e(e,"true_on"),_e(e,"false_on")})}function ie(){0===le?se():1===le&&de()}function se(){_.checked?(le++,_.checked=!1,E(),i=!0,fe(),re.textContent="Submit",me()):(i=!1,fe())}function de(){var e=Array.from(k).every(function(e){return e.value&&e.classList.contains("true_on")});console.log(e),e?(le++,ne.style.display="none",re.style.display="none",ve(ae,"login_page_in_btn_on"),ue(),me()):ve(A,"pop_up_on")}function fe(){i?_e(g,"block_on"):ve(g,"block_on")}function me(){for(var e=0;e<oe.length;e++)_e(oe[e],"page_on"),_e(ee[e],"step_on"),_e(te[e],"text_step_on");ve(oe[le],"page_on"),ve(ee[le],"step_on"),ve(te[le],"text_step_on"),1===le&&I.focus()}function ve(e,t){e.classList.add(t)}function ye(e,t){t.forEach(function(t){return e.classList.add(t)})}function _e(e,t){e.classList.remove(t)}function he(e,t){t.forEach(function(t){return e.classList.remove(t)})}function pe(e,t){var r,o=l(t);try{for(o.s();!(r=o.n()).done;){var a=n(r.value,2),u=a[0],c=a[1];e.setAttribute(u,c)}}catch(i){o.e(i)}finally{o.f()}}
},{"./regex.js":"u1Lo","./userdata.js":"wKcg"}]},{},["WjuU"], null)
//# sourceMappingURL=sign_up.84ca8444.js.map