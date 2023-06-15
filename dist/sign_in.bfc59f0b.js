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
},{}],"js/sign_in.js":[function(require,module,exports) {
"use strict";

var _userdata = require("./userdata.js");
//전체 감싸는 FORM
var loginForm = document.getElementById('login_form');

//아이디 입력창
var userId = document.getElementById('user_id');
//비밀번호 입력창
var userPw = document.getElementById('user_pw');
//가이드멘트
var IDmessage = userId.parentNode.lastElementChild;
var PWmessage = userPw.parentNode.lastElementChild;

//비밀번호 숫자로 표시 ON/OFF 버튼
var showNBlockBtn = document.getElementById('pw_show_block_btn');

//비밀번호 표시 상태 변수
var pwShowState;
//아이디 저장 상태 변수
var IDRememberState;
//아이디 저장 ON/OFF 버튼
var userIdRmBtn = document.getElementById('id_rm_chk');
//로그인하기 버튼
var userSignIn = document.getElementById('sign_in_chk');

//비밀번호 보기 버튼 눌렸을때
showNBlockBtn.addEventListener('click', userPwShow);
//로그인했을때 조건들 체크
userSignIn.addEventListener('click', allChks);
//빨간박스 초기화
userId.addEventListener('keyup', function () {
  falseReset(userId, IDmessage);
});
//함수로 바로전달하면 언디파인드 도출됨 함수 자체를 return 값으로 받자.
userPw.addEventListener('keyup', function () {
  falseReset(userPw, PWmessage);
});

//아이디 체크
function allChks() {
  var IdSearch = _userdata.userData.some(function (value) {
    return value.userIDInfo === userId.value;
  });
  if (!IdSearch) {
    IDmessage.textContent = '아이디가 일치하지 않습니다!';
    falseOn(userId, IDmessage);
  } else {
    PWCheck();
  }
}
//비밀번호 체크
function PWCheck() {
  var idcheck = _userdata.userData.findIndex(function (items) {
    //입력한 밸류값이 items(userData).userIDinfo값에 존재한다면
    //즉 같다면 해당 인덱스 번호를 반환 그게 아닐시 -1 반환;
    return items.userIDInfo === userId.value;
  });
  var pwcheck = _userdata.userData.findIndex(function (items) {
    return items.userPWInfo === userPw.value;
  });
  var PWSearch = _userdata.userData.some(function (value) {
    return value.userPWInfo === userPw.value;
  });
  //idcheck pwcheck가 둘다 -1이 나왔다는 말은 해당 밸류값이
  //userData 배열안에 존재하지 않는다는 말이므로
  //결국 PWsearch를 통과못해서 false  

  //idcheck !== pwcheck --> 같지 않다면이 true라면 조건문 실행이라는 뜻이기 때문에 알맞지 않음.
  if (!(PWSearch && idcheck === pwcheck)) {
    PWmessage.textContent = '비밀번호가 일치하지 않습니다!';
    falseOn(userPw, PWmessage);
  } else {
    location.href = '../index.html';
  }
}

//비밀번호 보이기
function userPwShow() {
  if (!pwShowState) {
    pwShowState = true;
    userPw.setAttribute('type', 'text');
  } else {
    pwShowState = false;
    userPw.setAttribute('type', 'password');
  }
}
//border_red //스타일주는 용도
function falseOn(object, objectsiblingLast) {
  objectsiblingLast.style.display = 'block';
  object.classList.add('false_on');
}
//타자 입력했을때 보더및 배경해제
function falseReset(object, objectsiblingLast) {
  objectsiblingLast.style.display = 'none';
  object.classList.remove('false_on');
}

/* //border_green //스타일주는 용도
function trueOn (object, objectsiblingLast) {
    objectsiblingLast.style.color = 'green';
    object.classList.remove('false_on');
    object.classList.add('true_on');
} */
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54834" + '/');
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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/sign_in.js"], null)
//# sourceMappingURL=/sign_in.bfc59f0b.js.map