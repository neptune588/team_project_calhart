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
})({"js/userdata.js":[function(require,module,exports) {
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
},{}],"js/userdata_research.js":[function(require,module,exports) {
"use strict";

var _userdata = require("./userdata.js");
//탭
var IDTab = document.getElementById('id_search_tab');
var PWTab = document.getElementById('pw_search_tab');

//탭 순환 용도
var tabs = document.querySelectorAll('.tab');

//아이디 찾기 메뉴/ 비번 찾기 메뉴
var menu01 = document.getElementById('menu01');
var menu02 = document.getElementById('menu02');

//찾기 버튼
var searchBtn = document.getElementById('search_btn');

//팝업
var popUpParent = document.getElementById('pop_up_ex');
var IDResultPopUp = document.getElementById('pop_up_01');
var PWResultPopUp = document.getElementById('pop_up_02');
//조건x시 띄우는 팝업
var notSearchPopUp = document.getElementById('pop_up_03');

//팝업 순환 용도
var popUpList = document.querySelectorAll('.pop_up');

//확인 버튼
var closeBtn = document.querySelectorAll('.confirm_btn_design');

//이름 표시
var userNameShow = document.getElementById('user_name_show');
var userIDShow = document.getElementById('user_id_show');
var userPWShow = document.getElementById('user_pw_show');

//필수 입력 창
var NameBar = document.getElementById('name_bar');
var EmailBar = document.getElementById('email_bar');
var IDBar = document.getElementById('id_bar');
var BirthBar = document.getElementById('birth_bar');

//인풋 입력 창 --> 초기화 용도
var allInput = document.querySelectorAll('.bar_style');

//찾기 버튼 클릭 이벤트 
searchBtn.addEventListener('click', allChks);
for (var i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener('click', tabChks);
}
for (var _i = 0; _i < closeBtn.length; _i++) {
  closeBtn[_i].addEventListener('click', function () {
    var eventTarget = this;
    //클로즈(확인)버튼의 .length와 pop의 .length및 순서 같으므로 인덱스 일치화 가능
    var eventTargetIndex = Array.from(closeBtn).indexOf(eventTarget);
    //console.log(eventTarget);
    classRemove(popUpParent, 'pop_up_on');
    classRemove(popUpList[eventTargetIndex], 'pop_up_on');
    //확인 입력시 입력창 내용 초기화
    valueClear();
  });
}
function tabChks() {
  if (this === IDTab) {
    classAdd(IDTab, 'tab_on');
    classAdd(menu01, 'menu_on');
    classRemove(PWTab, 'tab_on');
    classRemove(menu02, 'menu_on');
  }
  if (this === PWTab) {
    classAdd(PWTab, 'tab_on');
    classAdd(menu02, 'menu_on');
    classRemove(IDTab, 'tab_on');
    classRemove(menu01, 'menu_on');
  }
}
function allChks() {
  var classChks01 = IDTab.classList.contains('tab_on');
  var classChks02 = menu01.classList.contains('menu_on');
  if (classChks01 && classChks02) {
    chk01();
  } else {
    chk02();
  }
}

//아이디 찾기
function chk01() {
  //객체 속성은 속성 그 자체로 전달이 안되기 때문에 문자열의 형태로 전달
  //해당 value가 모듈에 포함되어있는지 some으로 검사 -> 검사한값 객체형태로 반환
  var dataSearch01 = dataChecks('userName', NameBar);
  var dataSearch02 = dataChecks('userEmail', EmailBar);

  /*     let returnData01 = {
          property : dataCheck01, 
      }  의 형태로 된다는 것 */

  var returnDataName = dataSearch01.property;
  var returnDataEmail = dataSearch02.property;

  //해당 value가 모듈에 있는 속성과 일치하면 그 값이 존재하는 인덱스값 반환
  //해당하는 속성의 값과 value가 맞지 않으면 -1 반환
  //(배열안 객체를 인덱스 순서대로 순회하면서 값을 발견하기만 하면 해당하는 인덱스의 숫자 반환, 숫자 반환이 -1 이라는 말은 결국 값이 없다는 말과도 같아진다.)
  //즉 -1 라는뜻은 some으로 찾은 결과가 없다는 말과도 같기 떄문에
  //따라서 -1 === -1이 되어도 some 중 하나 혹은 둘이 false가 되어서 조건식 통과X
  var returnDataIndex01 = dataIndexChecks('userName', NameBar);
  var returnDataIndex02 = dataIndexChecks('userEmail', EmailBar);
  var DataIndex01 = returnDataIndex01.property; //인덱스 넘버
  var DataIndex02 = returnDataIndex02.property; //인덱스 넘버

  if (returnDataName && returnDataEmail && DataIndex01 === DataIndex02) {
    classAdd(popUpParent, 'pop_up_on');
    classAdd(IDResultPopUp, 'pop_up_on');
    textInner(userNameShow, NameBar.value);
    textInner(userIDShow, _userdata.userData[DataIndex01].userIDInfo);
    //userIdshow에 배열 userData[dataindex01] 즉 입력한 이름과 같은 인덱스 객체안에
    //있는 유저 아이디를 가져와라. 
    //console.log(userData[DataIndex01].userIDInfo);
  } else {
    //console.log('조건x');
    classAdd(popUpParent, 'pop_up_on');
    classAdd(notSearchPopUp, 'pop_up_on');
  }
}

//비밀번호 찾기
function chk02() {
  //''문자열의 형태로 비교하려는 속성을 넣어  ['']를 통해 비교한다.
  //속성명에 '' "" 가 들어가면 []안에 해당 문자열을 넣어준다.
  var dataSearch01 = dataChecks('userIDInfo', IDBar);
  var dataSearch02 = dataChecks('userBirth', BirthBar);
  var returnDataName = dataSearch01.property;
  var returnDataEmail = dataSearch02.property;
  var returnDataIndex01 = dataIndexChecks('userIDInfo', IDBar);
  var returnDataIndex02 = dataIndexChecks('userBirth', BirthBar);
  var DataIndex01 = returnDataIndex01.property; //인덱스 넘버
  var DataIndex02 = returnDataIndex02.property; //인덱스 넘버

  if (returnDataName && returnDataEmail && DataIndex01 === DataIndex02) {
    classAdd(popUpParent, 'pop_up_on');
    classAdd(PWResultPopUp, 'pop_up_on');
    textInner(userPWShow, _userdata.userData[DataIndex01].userPWInfo);
  } else {
    classAdd(popUpParent, 'pop_up_on');
    classAdd(notSearchPopUp, 'pop_up_on');
  }
}

//밸류와 모듈 데이터 속성값 비교, boolean값 반환 (true / false)
function dataChecks(property, input) {
  //문자열의 형태로 되어있는 속성은 [] 대괄호안에 넣어서 표기 ex: ['food'] 
  var dataCheck01 = _userdata.userData.some(function (event) {
    return event[property] === input.value;
  }); //맞으면 true반환
  return {
    property: dataCheck01 //true or false 반환 (some 조건 안맞으면 false)
  };
}

//밸류와 모듈 데이터 속성값을 비교, 값이 있으면 그 값이 있는 인덱스 넘버 반환
//없을시 -1 , === some false 
function dataIndexChecks(property, input) {
  var dataIndexCheck01 = _userdata.userData.findIndex(function (event) {
    return event[property] === input.value;
  });
  return {
    property: dataIndexCheck01
    //밸류값이 모듈에 존재하면 그 값이 존재하는 모듈의 인덱스 반환
    //반환x시 -1 즉 값이 없다는말 
  };
}

//클래스 생성 함수 
function classAdd(element, className) {
  element.classList.add(className);
}

//클래스 제거 함수
function classRemove(element, className) {
  element.classList.remove(className);
}

//텍스트 생성 함수
function textInner(element, text) {
  element.textContent = "".concat(text); //변수값을 문자열로 표현하기 위해 
}

//밸류 초기화
function valueClear() {
  allInput.forEach(function (event) {
    event.value = '';
  });
}
},{"./userdata.js":"js/userdata.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54662" + '/');
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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/userdata_research.js"], null)
//# sourceMappingURL=/userdata_research.432babc3.js.map