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
})({"js/header_n_etc.js":[function(require,module,exports) {
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/*************** header ******************/
//nav
var navEx = document.getElementById('lnb_ex');
//full_down_menu
var fullDownMenu = document.getElementById('full_down_menu_ex');
//sub_menu_ul
var liInnerUl = document.querySelectorAll('.li_inner_ul');
//main_menu_li
var mainMenuLi = document.querySelectorAll('.main_menu_list > .menu_list');
//full_down_img box
var fullDonwInnerImg = document.querySelectorAll('.menu_img > img');

//풀다운 토글
navEx.addEventListener('mouseover', function () {
  addClass(fullDownMenu, 'full_down_on');
  for (var i = 0; i < liInnerUl.length; i++) {
    addClass(liInnerUl[i], 'block_on');
  }
});
navEx.addEventListener('mouseout', function () {
  removeClass(fullDownMenu, 'full_down_on');
  for (var i = 0; i < liInnerUl.length; i++) {
    removeClass(liInnerUl[i], 'block_on');
  }
});
var navSrc = [{
  src: ["./images/menu_img_01-1.jpg", "./images/menu_img_01-2.jpg"]
}, {
  src: ["./images/menu_img_02-1.jpg", "./images/menu_img_02-2.jpg"]
}, {
  src: ["./images/menu_img_03-1.jpg", "./images/menu_img_03-2.jpg"]
}, {
  src: ["./images/menu_img_04-1.jpg", "./images/menu_img_04-2.jpg"]
}, {
  src: ["./images/menu_img_05-1.jpg", "./images/menu_img_05-2.jpg"]
}, {
  src: ["./images/menu_img_06-1.jpg", "./images/menu_img_06-2.jpg"]
}];

//메인 메뉴 호버에 따라 img박스 속성 변경 
var _loop = function _loop(i) {
  mainMenuLi[i].addEventListener('mouseover', function () {
    setAttributeMuliti(fullDonwInnerImg[0], [["src", navSrc[i].src[0]], ["alt", "nav_hover_img".concat(i + 1, "-1")]]);
    setAttributeMuliti(fullDonwInnerImg[1], [["src", navSrc[i].src[1]], ["alt", "nav_hover_img".concat(i + 1, "-2")]]);
  });
};
for (var i = 0; i < mainMenuLi.length; i++) {
  _loop(i);
}

/*************** keword_auto_move ******************/

var kewordHref = [{
  num: 1,
  href: ["./sub_product_list.html"],
  content: "티셔츠"
}, {
  num: 2,
  href: ["./sub_product_list.html"],
  content: "맨투맨"
}, {
  num: 3,
  href: ["./sub_product_list.html"],
  content: "셔츠"
}, {
  num: 4,
  href: ["./sub_product_list.html"],
  content: "청바지"
}, {
  num: 5,
  href: ["./sub_product_list.html"],
  content: "언더웨어"
}];
var keywordList = document.getElementById('keyward_list');
kewordFrameMaker();
function kewordFrameMaker() {
  var list = "";
  var receive = "";
  kewordHref.forEach(function (object) {
    list = "\n            <li>\n                <span>".concat(object.num, "</span>\n                <a href=\"").concat(object.href, "\">").concat(object.content, "</a>\n            </li>\n        ");
    receive += list;
  });
  keywordList.innerHTML = receive;
  keywordList.appendChild(cloneCreate(keywordList.children[0]));
}
function cloneCreate(el) {
  return el.cloneNode(true);
}

/*************** object_list ************/
//li 마진값 추출
var keywordMargin = parseInt(window.getComputedStyle(keywordList.children[0]).getPropertyValue('margin-bottom'), 10);
//li 마진값 + offsetHeight로 이동값 계산
var moveValue = moveValueCalc(keywordList.children[0]) + keywordMargin;
//li 이동시간 추출
var moveDelay = parseFloat(window.getComputedStyle(document.querySelector('.keyward_list_active')).getPropertyValue('transition-duration')) * 1000;
var arguObject = {
  moveEl: keywordList,
  ctrlClass: 'keyward_list_active',
  moveCount: 0,
  calcCount: -1,
  moveArrow: "top",
  moveValue: moveValue,
  moveTime: moveDelay,
  countMax: (keywordList.children.length - 1) * -1
};
function moveValueCalc(el) {
  return el.offsetHeight;
}

/*************** 동작함수 ************/
var clearCount;

//동작함수 ,리셋함수, 재실행 함수 3단계로 나누어서 코드를 짜자.
setInterval(function () {
  moveInterval(arguObject);
}, arguObject.moveTime + 300);
function moveInterval(obj) {
  //동작
  addClass(obj.moveEl, obj.ctrlClass);
  var repeatMove = setInterval(function () {
    clearCount = 0;
    obj.moveCount += obj.calcCount;
    //console.log("현재" + moveCount, "마지막" + keywordList.children.length * -1)
    obj.moveEl.style[obj.moveArrow] = obj.moveCount * obj.moveValue + 'px';

    //리셋
    if (obj.moveCount === obj.countMax) {
      //마지막 li 이동 -> delay -> 트랜지션 제거 후 0으로 이동 시키고 -> 인터벌 종료.
      setTimeout(function () {
        removeClass(obj.moveEl, obj.ctrlClass);

        //1번으로 이동시키기 위해
        obj.moveCount = 0;
        obj.moveEl.style[obj.moveArrow] = obj.moveCount * obj.moveValue + 'px';
      }, obj.moveTime + 250);
    }

    //재실행
    clearCount++;
    if (clearCount === 1) {
      clearInterval(repeatMove);
    }
  });
}

/*************** search ******************/
var body = document.querySelector('body');
var searchOnBtn = document.querySelector('.gnb_list > .icon');
var searchCloseBtn = document.querySelector('.search_ex .close_btn');
var searchEx = document.querySelector('.search_ex');
var searchBar = document.querySelector('.search');
var searchTab = document.getElementById('product_search');
var searchDelete = document.querySelector('.search_delete');
var recommendSearch = document.getElementById('recommend_search');
var serachTabState = false;

//search_on
searchOnBtn.addEventListener('click', function () {
  if (!serachTabState) {
    body.style.overflow = 'hidden';
    addClass(searchEx, 'block_on');
    setTimeout(function () {
      searchTab.focus();
      addClass(searchBar, 'search_on');
      addClass(searchCloseBtn, 'search_close_on');
    }, 50);
    serachTabState = true;
  }
});

//search_off
searchCloseBtn.addEventListener('click', function () {
  body.style.overflow = 'visible';
  searchTab.value = '';
  serachTabState = false;
  removeClass(searchEx, 'block_on');
  removeClass(searchBar, 'search_on');
  removeClass(searchCloseBtn, 'search_close_on');
  removeClass(recommendSearch, 'block_on');
});
searchDelete.addEventListener('click', function () {
  searchTab.focus();
  searchTab.value = '';
});
searchTab.addEventListener('keyup', function (e) {
  if (e.key === 'Enter') {
    var searchValue = encodeURIComponent(e.target.value);
    //encodeURIComponent란? 괄호안에 오는 값을 url값으로 인코딩할때 쓰는 메서드

    //인코딩을 하는 이유는 

    //URL에 사용할 수 없거나 특수한 의미를 가지는 문자들을 안전하게 전송하기 위해, 
    //URL은 일부 문자를 특별한 목적으로 예약하고 있기 때문에, 이러한 예약된 문자들은 인코딩되어야 한다.

    //인코딩되어야 하는 문자에는 URL에 사용되는 
    //구분자인 ? , & , = , #, 슬래시 / , 공백 등이 있다.

    //만약 URL에 이러한 특수문자가 포함되어 있다면, 인코딩하여 안전하게 전송해야 한다고 함.

    var resultUrl = './product_search.html?q=' + searchValue;
    //console.log(resultUrl);
    location.href = resultUrl;
  }
});
searchTab.addEventListener('blur', function () {
  removeClass(recommendSearch, 'block_on');
});
searchTab.addEventListener('focus', function () {
  var _this = this;
  setTimeout(function () {
    if (_this.value.length > 0) {
      addClass(recommendSearch, 'block_on');
    }
  }, 10);
});

/*************** top_btn ******************/
var topBtn = document.querySelector('.top_btn');
topBtn.addEventListener('click', function () {
  window.scrollTo({
    top: 0
  });
});

/*************** quick_menu ******************/
var quickMenu = document.getElementById('quick_menu');

//let prevScroll = 0;
var quickMenuLocate = quickMenu.offsetTop;

/* window.addEventListener('scroll', () => {
    console.log(window.scrollY);
    //quickMenu.style.top = `${window.scrollY + quickMenuLocate}px`;
}); */

//정상작동은 되지만 스크롤할때마다 매번 이벤트가 발생됨.
//따라서 무언가 조치가 필요

//알아보니 debounce라는 개념이 있음
//셋 타임아웃을 설정하고 예를들면 500밀리세컨드라고 가정
//500밀리세컨드 안에 동작 이벤트를 넣어놨는데
//만약 그 안에 스크롤 이벤트가 일어나면 클리어 타임아웃으로 셋 타임아웃을 무효화하여 그 전의 이벤트는 초기화가 되는 원리인듯

//즉 정리해보자면 다음과 같다.
//로직: 함수 debounce은 셋 타임아웃을 리턴하는 콜백함수이다.
//cleartimeout으로 셋타임 아웃을 제어할수있게 변수 선언을 해준다.
//만약에 전에 셋타임아웃이없는 함수가 처음 발동된거면
//클리어타임아웃은 무시가되고 셋타임아웃이 실행되는거고
//셋 타임아웃이 있다면 클리어타임아웃으로 셋타임아웃을 클리어하면됨
//이렇게하면 스크롤할때마다 이벤트가 발생하는것이아닌 셋타임아웃간격을 두고
//셋타임간격 100이라고치면 100동안 스크롤이벤트가 안일어나면 셋타임 안에 넣어둔 명령어가 실행
//스크롤이벤트가 일어나면 클리어timeout으로 명령어 삭제하고 다시 셋타임아웃시작

window.addEventListener('scroll', debounce(60));
function debounce(delay) {
  var controlTime;
  //console.log(window.scrollY);

  return function () {
    clearTimeout(controlTime);
    controlTime = setTimeout(function () {
      quickMenu.style.top = "".concat(window.scrollY + quickMenuLocate, "px");
    }, delay);
  };
}

/*************** common ******************/

//클래스 추가
function addClass(Element, ClassName) {
  Element.classList.add(ClassName);
}
//클래스 제거
function removeClass(Element, ClassName) {
  Element.classList.remove(ClassName);
}
function setAttributeMuliti(el, attrArr) {
  /*     attrArr.forEach((innerArr) => {
          const [attrName, attrValue] = innerArr;
          el.setAttribute(attrName, attrValue);
      }) */
  var _iterator = _createForOfIteratorHelper(attrArr),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _slicedToArray(_step.value, 2),
        attrName = _step$value[0],
        attrValue = _step$value[1];
      el.setAttribute(attrName, attrValue);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51599" + '/');
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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/header_n_etc.js"], null)
//# sourceMappingURL=/header_n_etc.8a680bd3.js.map