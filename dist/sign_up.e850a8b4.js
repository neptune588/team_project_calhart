parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"u1Lo":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.regextTotalArray=exports.regexNameArray=exports.regexEmailArray=void 0;var e=[{id:"regexOnlyNumber04length",regex:/^(19\d\d|20\d\d|2100)$/},{id:"regexOnlyNumber02length",regex:/^(0?[1-9]|[1-2][0-9]|3[0-1])$/},{id:"regexEngNSymbolsNNumber",regex:/^(?!.*[_].*[_])[a-z0-9_]{6,15}$/}];exports.regextTotalArray=e;var r=[{id:"regexKor",regex:/^[가-힣]{2,8}$/},{id:"regexSymbols",regex:/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/}];exports.regexNameArray=r;var x=[{id:"regexEmail_before",regex:/^(?!.*[_].*[_])[a-z0-9_]{2,12}$/},{id:"regexEmail_after",regex:/^(?!.*\.\.)[a-z][a-z\d.]{0,10}[a-z\d]$/}];exports.regexEmailArray=x;
},{}],"wKcg":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.userData=void 0;var e=[{userIDInfo:"dbstjghks",userPWInfo:"154876",userName:"윤서환",userBirth:"19951019",userEmail:"ctr_nike@naver.com"},{userIDInfo:"dbstjghks777",userPWInfo:"15484846",userName:"윤시환",userBirth:"19951018",userEmail:"dbstjghks777@naver.com"},{userIDInfo:"javascript",userPWInfo:"difficult",userName:"자바스크립",userBirth:"19601017",userEmail:"javascript@naver.com"},{userIDInfo:"kimnadan",userPWInfo:"d58484",userName:"김나단",userBirth:"19960214",userEmail:"jgagagagcript@naver.com"}];exports.userData=e;
},{}],"WjuU":[function(require,module,exports) {
"use strict";var e,t=require("./regex.js"),n=require("./userdata.js"),r=t.regexNameArray[0].regex,a=t.regextTotalArray[0].regex,o=t.regextTotalArray[1].regex,l=t.regextTotalArray[2].regex,s=t.regexEmailArray[0].regex,c=t.regexEmailArray[1].regex,i=document.getElementById("terms_area"),d=document.getElementById("terms_all_chk"),u=document.getElementById("terms_chk_01"),m=document.getElementById("terms_chk_02"),v=document.querySelectorAll(".terms_chk"),_=document.getElementById("caution");function f(){if(d.checked)for(var e=0;e<v.length;e++)v[e].checked=!0;else for(var t=0;t<v.length;t++)v[t].checked=!1}function g(){for(var e=0;e<v.length;e++){var t=Array.from(v).every(function(e){return e.checked});t&&(d.checked=!0),v[e].checked||(d.checked=!1),console.log(t)}}function p(){e?e&&(_.style.display="none"):_.style.display="block"}d.addEventListener("click",f),u.addEventListener("click",g),m.addEventListener("click",g);var y,x,h=document.querySelectorAll(".necessary_text"),E=document.querySelectorAll(".guide_message"),C=document.querySelector(".caution_pop_up_ex"),k=document.getElementById("user_name"),L=document.getElementById("user_id"),b=document.getElementById("user_pw"),I=document.getElementById("user_pw_chk"),A=document.getElementById("user_email_last"),B=document.getElementById("user_email_last_select"),N=document.getElementById("pw_view_btn"),q=document.getElementById("user_id_chk");C.addEventListener("click",function(){this.classList.remove("pop_up_on")});for(var w=0;w<h.length;w++)h[w].addEventListener("keyup",O),h[w].addEventListener("blur",O);function S(){var e=L.parentNode.lastElementChild,t=n.userData.some(function(e){return e.userIDInfo===L.value});console.log(t),L.value?l.test(L.value)?t?(U(L,e),e.textContent="중복된 아이디입니다!"):(V(L,e),e.textContent="알맞은 양식입니다!",x=!0):(U(L,e),e.textContent="유효하지 않은 입력입니다. (특수문자 _는 한번만 가능, 영어 소문자 또는 숫자 특수문자_ 조합 가능, 6~15자)"):(U(L,e),e.textContent="입력값을 입력 혹은 선택해주세요!")}function T(){y?(b.setAttribute("type","password"),I.setAttribute("type","password")):(b.setAttribute("type","text"),I.setAttribute("type","text")),j()}function j(){y?(N.classList.remove("pw_on"),y=!1):(N.classList.add("pw_on"),y=!0)}function D(){var e=B.options[B.selectedIndex],t=this.parentNode.lastElementChild;e.value?(A.value=e.innerText,A.setAttribute("disabled","true"),V(A,t),t.textContent="알맞은 양식입니다!"):A.removeAttribute("disabled")}function O(){var e=Array.from(h).indexOf(this),t=this.parentNode.lastElementChild;this.value?M(e):(U(this,t),t.textContent="입력값을 입력 혹은 선택해주세요!")}function M(e){switch(e){case 0:z(e);break;case 2:F(e);break;case 1:case 3:G(e);break;case 4:H(e);break;case 5:J(e);break;case 6:K(e);break;case 7:P(e);break;case 8:Q(e);break;case 9:R(e)}}function z(e){var t=h[e],n=t.parentNode.lastElementChild;r.test(t.value)?(V(t,n),n.textContent="알맞은 양식입니다!"):(U(t,n),n.textContent="이름은 한글만 가능합니다.(최대 8자) 또한 초성 입력은 안됩니다.")}function F(e){var t=h[e],n=t.parentNode.lastElementChild;a.test(parseInt(t.value))?(V(t,n),n.textContent="알맞은 양식입니다!"):(U(t,n),n.textContent="유효한 년도가 아닙니다 (1900~2100까지 가능)")}function G(e){var t=h[e],n=t.parentNode.lastElementChild;t.value?(V(t,n),n.textContent="알맞은 양식입니다!"):U(t,n)}function H(e){var t=h[e],n=t.parentNode.lastElementChild;o.test(parseInt(t.value))?(V(t,n),n.textContent="알맞은 양식입니다!"):(U(t,n),n.textContent="유효한 입력이 아닙니다 (1일~31일까지 가능)")}function J(e){W(h[e])}function K(e){var t=h[e],n=t.parentNode.lastElementChild;l.test(t.value)?(V(t,n),n.textContent="알맞은 양식입니다!"):(U(t,n),n.textContent="유효하지 않은 입력입니다. (특수문자 _는 한번만 가능, 영어 소문자 또는 숫자 특수문자_ 조합 가능, 6~15자)")}function P(e){var t=h[e],n=t.parentNode.lastElementChild,r=b.classList.contains("trueOn"),a=b.value;r||a===t.value?(V(t,n),n.textContent="비밀번호가 일치합니다!"):(U(t,n),n.textContent="비밀번호가 일치하지 않습니다.")}function Q(e){var t=h[e],n=t.parentNode.lastElementChild;s.test(t.value)?(V(t,n),n.textContent="알맞은 양식입니다!"):(U(t,n),n.textContent="유효하지 않은 입력입니다. (특수문자 _는 한번만 가능, 영어 소문자 또는 숫자 특수문자_ 조합 가능, 2~12자)")}function R(e){var t=h[e],n=t.parentNode.lastElementChild;c.test(t.value)?(V(t,n),n.textContent="알맞은 양식입니다!"):(U(t,n),n.textContent="유효하지 않은 입력입니다. (영어 소문자와 숫자, .만 입력 가능, .은 두번까지만)")}function U(e,t){t.style.color="red",e.classList.remove("true_on"),e.classList.add("false_on")}function V(e,t){t.style.color="green",e.classList.remove("false_on"),e.classList.add("true_on")}function W(e){e.classList.remove("false_on"),e.classList.remove("true_on")}q.addEventListener("click",S),N.addEventListener("click",T),b.addEventListener("keyup",function(e){var t=e.getModifierState("CapsLock"),n=b.parentNode.lastElementChild;!y&&t&&b.value.length>0&&(n.textContent="Caps Lock을 꺼주세요!")}),B.addEventListener("change",D);var X=document.getElementById("id_n_title_ment"),Y=document.getElementById("title_ment");function Z(){if(x){var e=document.createElement("p");e.textContent=L.value,X.insertBefore(e,Y)}}var $=document.querySelectorAll(".circle"),ee=document.querySelectorAll(".text"),te=document.getElementById("prev_btn"),ne=document.getElementById("next_btn"),re=document.querySelectorAll(".page"),ae=document.getElementById("login_page_in_btn");ne.addEventListener("click",le),te.addEventListener("click",se);var oe=0;function le(){if(0===oe?ce():1===oe&&ie(),2===oe){te.style.display="none",ne.style.display="none",ae.classList.add("login_page_in_btn_on"),Z();for(var e=0;e<h.length;e++)h[e].value=""}}function se(){if(0===oe&&(location.href="../login_page/login.html"),1===oe){oe--,de();for(var e=0;e<h.length;e++)h[e].value=""}}function ce(){d.checked?(oe++,d.checked=!1,f(),e=!0,p(),de()):(e=!1,p())}function ie(){var e=Array.from(h).every(function(e){return e.value}),t=Array.from(h).every(function(e){return e.classList.contains("true_on")});e&&t?(oe++,de()):C.classList.add("pop_up_on")}function de(){for(var e=0;e<re.length;e++)re[e].classList.remove("page_on"),$[e].classList.remove("step_on"),ee[e].classList.remove("text_step_on");re[oe].classList.add("page_on"),$[oe].classList.add("step_on"),ee[oe].classList.add("text_step_on"),1===oe&&k.focus()}
},{"./regex.js":"u1Lo","./userdata.js":"wKcg"}]},{},["WjuU"], null)
//# sourceMappingURL=/sign_up.e850a8b4.js.map