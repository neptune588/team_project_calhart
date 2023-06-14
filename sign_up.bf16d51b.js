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
})({"../js/sign_up.js":[function(require,module,exports) {
//(페이지1)

//약관 동의 전체 감싸는 form
var termsArea = document.getElementById('terms_area');
//전부 체크
var termsAllChkBtn = document.getElementById('terms_all_chk');
//이용약관동의 체크
var termsChk01Btn = document.getElementById('terms_chk_01');
//개인정보 수집 체크
var termsChk02Btn = document.getElementById('terms_chk_02');
//전체 체크를 제외한 체크버튼
var termsClass = document.querySelectorAll('.terms_chk');
//경고 문구
var cautionChk = document.getElementById('caution');

//페이지1 경고 문구 상태 변수
var cautionState;

//실행 이벤트 
termsAllChkBtn.addEventListener('click', termsAllChk);
termsChk01Btn.addEventListener('click', termsClick);
termsChk02Btn.addEventListener('click', termsClick);

//약관 체크 동작 함수 
function termsAllChk() {
  if (termsAllChkBtn.checked) {
    //순서 -> click -> 콜백실행 -> termsAllChkBtn.check = true -> 이후 조건체크
    for (var i = 0; i < termsClass.length; i++) {
      termsClass[i].checked = true;
    }
  } else {
    for (var _i = 0; _i < termsClass.length; _i++) {
      termsClass[_i].checked = false;
    }
  }
}

//하나라도 체크해제시 전부체크 해제 / 두개 체크시 올 체크
function termsClick() {
  for (var i = 0; i < termsClass.length; i++) {
    //2개다 true가 되면 전체 약관동의도 true되게함.
    var termsClassValue = Array.from(termsClass).every(function (value) {
      return value.checked === true;
    });
    if (termsClassValue) {
      termsAllChkBtn.checked = true;
    }
    //하나라도 false되면 전체 약관동의 false
    if (!termsClass[i].checked) {
      termsAllChkBtn.checked = false;
    }
    console.log(termsClassValue);
  }
}

//경고 문구 토글 함수
function toggleCation() {
  if (!cautionState) {
    cautionChk.style.display = 'block';
  } else if (cautionState) {
    cautionChk.style.display = 'none';
  }
}

//(페이지2)

//필수 입력 요소들
var necessaryInput = document.querySelectorAll('.necessary_text');
//페이지2 경고 문구 팝업
var popUpToggleBtn = document.querySelector('.caution_pop_up_ex');
var user_name = document.getElementById('user_name');

//팝업 클릭시 
popUpToggleBtn.addEventListener('click', function () {
  this.classList.remove('pop_up_on');
});

//페이지 공통 (뒤로가기 /앞으로가기 /단계 표시)

//페이지에 따라 상단 효과
var stepCircle = document.querySelectorAll('.circle');
var stepText = document.querySelectorAll('.text');
//페이지 버튼
var prevPageBtn = document.getElementById('prev_btn');
var nextPageBtn = document.getElementById('next_btn');
var showPage = document.querySelectorAll('.page');

//prev,next 클릭 이벤트
nextPageBtn.addEventListener('click', showNextPage);
prevPageBtn.addEventListener('click', showPrevPage);

//page count 
var pageCount = 0;

//동작함수
function showNextPage() {
  if (pageCount === 0) {
    pageCheck01();
  } else if (pageCount === 1) {
    pageCheck02();
  }
}
function showPrevPage() {
  if (pageCount === 0) {
    location.href = '../login_page/login.html';
  }
  if (pageCount === 1) {
    pageCount--;
    pageOn();
    for (var i = 0; i < necessaryInput.length; i++) {
      necessaryInput[i].value = '';
    }
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
    pageOn();
  }
}
function pageCheck02() {
  var necessaryInputChk = Array.from(necessaryInput).every(function (inputValue) {
    return inputValue.value;
  }); //해당 클래스 속성을 가진 요소들의 밸류가 전부 true가 됐을때 true 그게 아니면 false
  if (!necessaryInputChk) {
    //밸류가 하나라도 false일때 조건문실행, //necessaryInputChk 가 false라는 뜻은 배열 요소중 어느 하나라도 false라는 말이므로

    //pop_up 관련
    popUpToggleBtn.classList.add('pop_up_on');
  } else if (necessaryInputChk) {
    pageCount++;
    pageOn();
  }
}
function pageOn() {
  for (var i = 0; i < showPage.length; i++) {
    showPage[i].classList.remove('page_on');
    stepCircle[i].classList.remove('step_on');
    stepText[i].classList.remove('text_step_on');
  }
  showPage[pageCount].classList.add('page_on');
  stepCircle[pageCount].classList.add('step_on');
  stepText[pageCount].classList.add('text_step_on');
  //console.log(pageCount);
}
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60860" + '/');
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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../js/sign_up.js"], null)
//# sourceMappingURL=/sign_up.bf16d51b.js.map