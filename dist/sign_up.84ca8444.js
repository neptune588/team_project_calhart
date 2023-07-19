// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/regex.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.totalRegex = void 0;
var totalRegex = {
  totalRegexArr: [{
    id: 'regexOnlyNumber04length',
    regex: /^(19\d\d|20\d\d|2100)$/ //숫자1900~2100까지 4자리숫자만
  }, {
    id: 'regexOnlyNumber02length',
    regex: /^(0?[1-9]|[1-2][0-9]|3[0-1])$/ //01~09까지는 한자릿수도 가능 이후부턴 두자리만 가능
  }, {
    id: 'regexEngNSymbolsNNumber',
    regex: /^(?!.*[_].*[_])[a-z0-9_]{6,15}$/ //영어 소문자 ok 숫자 ok 특수문자_ 만가능, _ _ 두개올수없음 
  }],

  nameRegexArr: [{
    id: 'regexKor',
    regex: /^[가-힣]{2,8}$/
  }, {
    id: 'regexSymbols',
    regex: /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
  }],
  emailRegexArr: [{
    id: 'regexEmail_before',
    regex: /^(?!.*[_].*[_])[a-z0-9_]{2,12}$/
    // 
  }, {
    id: 'regexEmail_after',
    regex: /^(?!.*\.\.)[a-z][a-z\d.]{0,10}[a-z\d]$/
    // .이 맨앞에올수없음, .. 연속두번 사용불가능, .최대 두번까지사용가능, 영어소문자만 가능, 특수문자불가능
  }]
};
exports.totalRegex = totalRegex;
},{}],"js/userdata.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userData = void 0;
var userData = [{
  userIDInfo: 'dbstjghks',
  userPWInfo: '154876',
  userName: '윤서환',
  userBirth: '19951019',
  userEmail: 'ctr_nike@naver.com'
}, {
  userIDInfo: 'dbstjghks777',
  userPWInfo: '15484846',
  userName: '윤시환',
  userBirth: '19951018',
  userEmail: 'dbstjghks777@naver.com'
}, {
  userIDInfo: 'javascript',
  userPWInfo: 'difficult',
  userName: '자바스크립',
  userBirth: '19601017',
  userEmail: 'javascript@naver.com'
}, {
  userIDInfo: 'kimnadan',
  userPWInfo: 'd58484',
  userName: '김나단',
  userBirth: '19960214',
  userEmail: 'jgagagagcript@naver.com'
}];
exports.userData = userData;
},{}],"js/sign_up.js":[function(require,module,exports) {
"use strict";

var _regex = require("./regex.js");
var _userdata = require("./userdata.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/********************************* 페이지1 ***********************************/ //정규식 (수정필요할것같다.)
var regexTestName = _regex.totalRegex.nameRegexArr[0].regex;
var regexTest00 = _regex.totalRegex.totalRegexArr[0].regex;
var regexTest01 = _regex.totalRegex.totalRegexArr[1].regex;
var regexTest02 = _regex.totalRegex.totalRegexArr[2].regex;
var regexTestEmailBefore = _regex.totalRegex.emailRegexArr[0].regex;
var regexTestEmailAfter = _regex.totalRegex.emailRegexArr[1].regex;

//전부 체크
var termsAllChkBtn = document.getElementById('terms_all_chk');
//이용약관동의 체크
var termsChk01Btn = document.getElementById('terms_chk_01');
//개인정보 수집 체크
var termsChk02Btn = document.getElementById('terms_chk_02');
//전체 체크를 제외한 체크버튼
var terms = document.querySelectorAll('.terms_chk');
//경고 문구
var cautionChk = document.getElementById('caution');

//경고 문구 상태 변수
var cautionState;

//실행 이벤트 
termsAllChkBtn.addEventListener('click', termsAllChk);
termsChk01Btn.addEventListener('click', termsClick);
termsChk02Btn.addEventListener('click', termsClick);

//약관 체크 동작 함수 
function termsAllChk() {
  if (termsAllChkBtn.checked) {
    //순서 -> click -> termsAllChkBtn.check = true -> 이벤트핸들러(함수동작전달) 
    terms.forEach(function (checkBtn) {
      return checkBtn.checked = true;
    });
  } else {
    terms.forEach(function (checkBtn) {
      return checkBtn.checked = false;
    });
  }
}
function termsClick() {
  var arrChange = Array.from(terms);
  var checkedBool;
  terms.forEach(function () {
    checkedBool = arrChange.every(function (term) {
      return term.checked;
    });
  });
  if (checkedBool) {
    termsAllChkBtn.checked = true;
  } else {
    termsAllChkBtn.checked = false;
  }
}

/********************************* 페이지2 ***********************************/

//필수 입력 요소들
var necessaryInput = document.querySelectorAll('.necessary_text');
//페이지2 경고 문구 팝업
var popUpToggleBtn = document.querySelector('.caution_pop_up_ex');
//이름 입력창
var userName = document.getElementById('user_name');
//아이디 입력창
var userId = document.getElementById('user_id');
//비밀번호 입력창
var userPw = document.getElementById('user_pw');
//비밀번호 확인 입력창
var userPwReChk = document.getElementById('user_pw_chk');
//이메일 입력창 중 도메인 넣는부분(뒷부분)
var userEmailAfter = document.getElementById('user_email_last');
//이메일 입력창 중 도메인 넣는부분 선택창
var userEmailSelected = document.getElementById('user_email_last_select');
//비밀번호 보이기 버튼
var userPwShowBtn = document.getElementById('pw_view_btn');
//아이디 체크
var userIdChkBtn = document.getElementById('user_id_chk');

//팝업 클릭시 
popUpToggleBtn.addEventListener('click', function () {
  removeClass(this, 'pop_up_on');
});

//input 전체 순환
necessaryInput.forEach(function (input) {
  input.addEventListener('keyup', valueChecks);
  input.addEventListener('blur', valueChecks);
});

//1. 공백체크 -> 공백아니면 이후 조건들 체크
function valueChecks() {
  var thisIndex = Array.from(necessaryInput).indexOf(this);
  var guideMessageArea = this.parentNode.lastElementChild;
  if (this.value === '' || this.value === undefined || this.value === null) {
    falseOn(this, guideMessageArea); //해당 인덱스 요소의 밸류가 공백이면 false 추가 함수로
    guideMessageArea.textContent = '입력값을 입력 혹은 선택해주세요!';
  } else {
    etcCheck(this, thisIndex);
  }
}

//아이디 confirm 상태 
var idConfirm;
//중복확인체크 , 아이디의 경우 버튼을 통해 체크
userIdChkBtn.addEventListener('click', userIdCheck);
function userIdCheck() {
  var guideMessageArea = userId.parentNode.lastElementChild;
  var duplicateCheck = _userdata.userData.some(function (object) {
    return object.userIDInfo === userId.value;
  });
  if (userId.value === '' || userId.value === undefined || userId.value === null) {
    falseOn(userId, guideMessageArea);
    guideMessageArea.textContent = '입력값을 입력 혹은 선택해주세요!';
  } else if (!regexTest02.test(userId.value)) {
    falseOn(userId, guideMessageArea);
    guideMessageArea.textContent = '유효하지 않은 입력입니다. (특수문자 _는 한번만 가능, 영어 소문자 또는 숫자 특수문자_ 조합 가능, 6~15자)';
  } else if (duplicateCheck) {
    falseOn(userId, guideMessageArea);
    guideMessageArea.textContent = '중복된 아이디입니다!';
  } else {
    trueOn(userId, guideMessageArea);
    guideMessageArea.textContent = '알맞은 양식입니다!';
    //userId전달
    idConfirm = true;
  }
}

//pw상태체크
var pwToggleState = false;
//pw보이기 체크
userPwShowBtn.addEventListener('click', userPwShow);
//패스워드 보이기/끄기 
function userPwShow() {
  if (!pwToggleState) {
    userPw.setAttribute('type', 'text');
    userPwReChk.setAttribute('type', 'text');

    //아이콘 on
    addClass(userPwShowBtn, 'pw_on');
    pwToggleState = true;
  } else {
    userPw.setAttribute('type', 'password');
    userPwReChk.setAttribute('type', 'password');

    //아이콘 off
    removeClass(userPwShowBtn, 'pw_on');
    pwToggleState = false;
  }
}

//pw가 가려졌을때 캡스락이 눌러졌는지 체크
userPw.addEventListener('keyup', function (e) {
  var CapsLock = e.getModifierState('CapsLock');
  var guideMessageArea = this.parentNode.lastElementChild;
  if (!pwToggleState && CapsLock && userPw.value.length > 0) {
    guideMessageArea.textContent = 'Caps Lock을 꺼주세요!';
  }
});

//이메일 도메인부분 선택해서 넣었을떄 
userEmailSelected.addEventListener('change', emailSelected);
//이메일 뒷자리(도메인영역) 셀렉트로 선택했을때(선택영역)
function emailSelected() {
  var selectedValue = userEmailSelected.options[userEmailSelected.selectedIndex];
  var guideMessageArea = this.parentNode.lastElementChild;
  if (selectedValue.value === '' || selectedValue.value === undefined || selectedValue.value === null) {
    userEmailAfter.removeAttribute('disabled');
    //직접입력을 선택했을때는 이메인 도메인 입력창 활성화 
  } else {
    userEmailAfter.value = selectedValue.textContent;
    userEmailAfter.setAttribute('disabled', 'true');
    trueOn(userEmailAfter, guideMessageArea);
    guideMessageArea.textContent = '알맞은 양식입니다!';
    //그외 선택을 했을때는 이메일 도메인 입력창에 선택한 옵션의 텍스트값이 전달/입력창 비활성화
  }
}

//공백이 아닐때 각각의 인덱스 번호에 해당하는 조건식함수들 호출
function etcCheck(nowInput, nowIndex) {
  switch (nowIndex) {
    case 0:
      {
        valueCheck01(nowInput);
        break;
      }
    case 2:
      {
        valueCheck02(nowInput);
        break;
      }
    case 1:
    case 3:
      {
        valueCheck03(nowInput);
        break;
      }
    case 4:
      {
        valueCheck04(nowInput);
        break;
      }
    case 5:
      {
        valueCheck05(nowInput);
        break;
      }
    case 6:
      {
        valueCheck06(nowInput);
        break;
      }
    case 7:
      {
        valueCheck07(nowInput);
        break;
      }
    case 8:
      {
        valueCheck08(nowInput);
        break;
      }
    case 9:
      {
        valueCheck09(nowInput);
        break;
      }
  }
}

//이름 체크
function valueCheck01(myInput) {
  var guideMessageArea = myInput.parentNode.lastElementChild;
  if (!regexTestName.test(myInput.value)) {
    falseOn(myInput, guideMessageArea);
    guideMessageArea.textContent = '이름은 한글만 가능합니다.(최대 8자) 또한 초성 입력은 안됩니다.';
  } else {
    trueOn(myInput, guideMessageArea);
    guideMessageArea.textContent = '알맞은 양식입니다!';
  }
}

//생년월일 중에 생년 체크
function valueCheck02(myInput) {
  var guideMessageArea = myInput.parentNode.lastElementChild;
  //value값은 항상 문자열이기떄문에 숫자비교를할떄는 숫자로 형변환 후 비교 
  if (!regexTest00.test(parseInt(myInput.value))) {
    falseOn(myInput, guideMessageArea);
    guideMessageArea.textContent = '유효한 년도가 아닙니다 (1900~2100까지 가능)';
  } else {
    trueOn(myInput, guideMessageArea);
    guideMessageArea.textContent = '알맞은 양식입니다!';
  }
}

//성별, 생년월일중 월 체크
function valueCheck03(myInput) {
  var guideMessageArea = myInput.parentNode.lastElementChild;
  if (!myInput.value) {
    falseOn(myInput, guideMessageArea);
  } else {
    trueOn(myInput, guideMessageArea);
    guideMessageArea.textContent = '알맞은 양식입니다!';
  }
}

//생년월일 중에 일 체크
function valueCheck04(myInput) {
  var guideMessageArea = myInput.parentNode.lastElementChild;
  if (!regexTest01.test(parseInt(myInput.value))) {
    falseOn(myInput, guideMessageArea);
    guideMessageArea.textContent = '유효한 입력이 아닙니다 (1일~31일까지 가능)';
  } else {
    trueOn(myInput, guideMessageArea);
    guideMessageArea.textContent = '알맞은 양식입니다!';
  }
}

//공백아닐때 false제거 (아이디칸만)
function valueCheck05(myInput) {
  falseTrueReset(myInput);
}

//비밀번호 체크 
function valueCheck06(myInput) {
  var guideMessageArea = myInput.parentNode.lastElementChild;
  if (!regexTest02.test(myInput.value)) {
    falseOn(myInput, guideMessageArea);
    guideMessageArea.textContent = '유효하지 않은 입력입니다. (특수문자 _는 한번만 가능, 영어 소문자 또는 숫자 특수문자_ 조합 가능, 6~15자)';
  } else {
    trueOn(myInput, guideMessageArea);
    guideMessageArea.textContent = '알맞은 양식입니다!';
  }
}

//비밀번호 재확인 
function valueCheck07(myInput) {
  var guideMessageArea = myInput.parentNode.lastElementChild;
  //비밀번호칸에 유효한 값이 들어갔는지 체크
  var pwBool = userPw.classList.contains('trueOn');
  if (!pwBool && userPw.value !== myInput.value) {
    falseOn(myInput, guideMessageArea);
    guideMessageArea.textContent = '비밀번호가 일치하지 않습니다.';
  } else {
    trueOn(myInput, guideMessageArea);
    guideMessageArea.textContent = '비밀번호가 일치합니다!';
  }
}

//이메일 골뱅이 앞부분 체크
function valueCheck08(myInput) {
  var guideMessageArea = myInput.parentNode.lastElementChild;
  if (!regexTestEmailBefore.test(myInput.value)) {
    falseOn(myInput, guideMessageArea);
    guideMessageArea.textContent = '유효하지 않은 입력입니다. (특수문자 _는 한번만 가능, 영어 소문자 또는 숫자 특수문자_ 조합 가능, 2~12자)';
  } else {
    trueOn(myInput, guideMessageArea);
    guideMessageArea.textContent = '알맞은 양식입니다!';
  }
}

//이메일 뒷자리 부분 체크(직접입력하는 영역)
function valueCheck09(myInput) {
  var guideMessageArea = myInput.parentNode.lastElementChild;
  if (!regexTestEmailAfter.test(myInput.value)) {
    falseOn(myInput, guideMessageArea);
    guideMessageArea.textContent = '유효하지 않은 입력입니다. (영어 소문자와 숫자, .만 입력 가능, .은 두번까지만)';
  } else {
    trueOn(myInput, guideMessageArea);
    guideMessageArea.textContent = '알맞은 양식입니다!';
  }
}

//border_red //스타일주는 용도
function falseOn(el, mentEl) {
  mentEl.style.color = 'red';
  removeClass(el, 'true_on');
  addClass(el, 'false_on');
}

//border_green //스타일주는 용도
function trueOn(el, mentEl) {
  mentEl.style.color = 'green';
  removeClass(el, 'false_on');
  addClass(el, 'true_on');
}

//border_reset 
function falseTrueReset(el) {
  var classArr = ['false,on', 'true_on'];
  removeClassMulti(el, classArr);
}

/********************************* 페이지3 ***********************************/
var IdNTitleMent = document.getElementById('id_n_title_ment');
var titleMent = document.getElementById('title_ment');

/********************************* 페이지 공통 ***********************************/

//페이지에 따라 상단 효과
var stepCircle = document.querySelectorAll('.circle');
var stepText = document.querySelectorAll('.text');
//페이지 버튼
var prevPageBtn = document.getElementById('prev_btn');
var nextPageBtn = document.getElementById('next_btn');
var showPage = document.querySelectorAll('.page');
var loginPageInBtn = document.getElementById('login_page_in_btn');
//prev,next 클릭 이벤트
nextPageBtn.addEventListener('click', showNextPage);
prevPageBtn.addEventListener('click', showPrevPage);

//page count 
var pageCount = 0;

//가입한 아이디 표기
function IdValueLoad() {
  if (idConfirm) {
    var newP = document.createElement('p');
    newP.textContent = userId.value;
    IdNTitleMent.insertBefore(newP, titleMent);
  }
}
function showPrevPage() {
  if (pageCount === 0) {
    location.href = './login.html';
  } else if (pageCount === 1) {
    pageCount--;
    nextPageBtn.textContent = "Next";
    pageOn();
  }
  //초기화
  necessaryInput.forEach(function (input) {
    return input.value = '';
  });
  necessaryInput.forEach(function (input) {
    input.parentElement.lastElementChild.textContent = '';
    removeClass(input, 'true_on');
    removeClass(input, 'false_on');
  });
}
function showNextPage() {
  if (pageCount === 0) {
    pageCheck01();
  } else if (pageCount === 1) {
    pageCheck02();
  }
}
function pageCheck01() {
  if (!termsAllChkBtn.checked) {
    //약관동의 안됐을경우
    cautionState = false;
    toggleCation();
  } else {
    pageCount++;

    //약관 동의 체크 
    termsAllChkBtn.checked = false;
    termsAllChk();

    //경고 문구
    cautionState = true;
    toggleCation();
    nextPageBtn.textContent = "Submit";
    pageOn();
  }
}
function pageCheck02() {
  var lastInputChk = Array.from(necessaryInput).every(function (input) {
    return input.value && input.classList.contains('true_on');
  });
  console.log(lastInputChk);

  //모든 원소가 조건을 만족하면 true, 하나라도 만족하지 않으면 false를 반환한다.
  //해당 배열안에 있는 값들이 조건을 "모두" 통과해야만 true를 반환해준다.
  if (!lastInputChk) {
    addClass(popUpToggleBtn, 'pop_up_on');
  } else {
    pageCount++;
    prevPageBtn.style.display = 'none';
    nextPageBtn.style.display = 'none';
    addClass(loginPageInBtn, 'login_page_in_btn_on');
    IdValueLoad();
    pageOn();
  }
}

//경고 문구 토글 함수
function toggleCation() {
  if (!cautionState) {
    addClass(cautionChk, 'block_on');
  } else {
    removeClass(cautionChk, 'block_on');
  }
}
function pageOn() {
  for (var i = 0; i < showPage.length; i++) {
    removeClass(showPage[i], 'page_on');
    removeClass(stepCircle[i], 'step_on');
    removeClass(stepText[i], 'text_step_on');
  }
  addClass(showPage[pageCount], 'page_on');
  addClass(stepCircle[pageCount], 'step_on');
  addClass(stepText[pageCount], 'text_step_on');
  if (pageCount === 1) {
    userName.focus();
  }
}
function addClass(el, className) {
  el.classList.add(className);
}
function addClassMulit(el, classArr) {
  classArr.forEach(function (className) {
    return el.classList.add(className);
  });
}
function removeClass(el, className) {
  el.classList.remove(className);
}
function removeClassMulti(el, classArr) {
  classArr.forEach(function (className) {
    return el.classList.remove(className);
  });
}
function setAttributeMulti(el, attrArr) {
  var _iterator = _createForOfIteratorHelper(attrArr),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _slicedToArray(_step.value, 2),
        attrBefore = _step$value[0],
        attrAfter = _step$value[1];
      el.setAttribute(attrBefore, attrAfter);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}
},{"./regex.js":"js/regex.js","./userdata.js":"js/userdata.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52856" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/sign_up.js"], null)
//# sourceMappingURL=/sign_up.84ca8444.js.map