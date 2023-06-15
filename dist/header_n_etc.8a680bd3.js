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
var fullDonwInnerImg = document.querySelectorAll('.menu_img');

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

//메인 메뉴 호버에 따라 img박스 속성 변경 
var _loop = function _loop(i) {
  mainMenuLi[i].addEventListener('mouseover', function () {
    for (var j = 0; j < fullDonwInnerImg.length; j += fullDonwInnerImg.length) {
      fullDonwInnerImg[j].children[0].setAttribute('src', "./images/menu_img_".concat(i + i, ".jpg"));
      fullDonwInnerImg[j + 1].children[0].setAttribute('src', "./images/menu_img_".concat(i + i + 1, ".jpg"));
    }
  });
};
for (var i = 0; i < mainMenuLi.length; i++) {
  _loop(i);
}

//keword_auto_move
var keyWordMoveUl = document.querySelector('.keyward_list');
var keyWordLiHeight = keyWordMoveUl.children[0].offsetHeight + 5;

//style.top 초기화를 위함 + 현재 위치 탐색 카운트
var keyWordMoveCount = 0;
var topZeroCount = 0;
var kewordClone = keyWordMoveUl.children[0].cloneNode(true);
keyWordMoveUl.appendChild(kewordClone);
//keyword autoplay 
keyWordMove();
function keyWordMove() {
  var clearCount = 0;
  topZeroCount++;
  //sliderMove(topMoving, keyWordMoveCount, topMoved, keyWordLiHeight ,keyWordMoveUl, clearCount);
  addClass(keyWordMoveUl, 'keyward_list_active');
  var topMoving = setInterval(function () {
    keyWordMoveCount--;
    var topMoved = move(keyWordLiHeight, keyWordMoveCount);
    keyWordMoveUl.style.top = topMoved;

    //동작이 실행 된 후 클리어 카운터 1증가.
    clearCount++;

    //console.log(keyWordMoveCount);
    //console.log(zeroCount);
    if (clearCount === 1) {
      clearInterval(topMoving);
    }
    //5번 움직였을시 movecount 초기화.
    if (keyWordMoveCount === -5) {
      keyWordMoveCount = 0;
    }
  });
  setTimeout(function () {
    if (topZeroCount === 5) {
      removeClass(keyWordMoveUl, 'keyward_list_active');
      keyWordMoveUl.style.top = 0;
      topZeroCount = 0;
    }
  }, 1050);
  setTimeout(function () {
    keyWordMove();
  }, 1150);
}

/*************** search ******************/
var body = document.querySelector('body');
var searchOnBtn = document.querySelector('.gnb_list > .icon');
var searchCloseBtn = document.querySelector('.search_ex .close_btn');
var searchEx = document.querySelector('.search_ex');
var searchBar = document.querySelector('.search');
var searchTab = document.getElementById('product_search');
var searchDelete = document.querySelector('.search_delete');
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
  serachTabState = false;
  removeClass(searchEx, 'block_on');
  removeClass(searchBar, 'search_on');
  removeClass(searchCloseBtn, 'search_close_on');
});
searchDelete.addEventListener('click', function () {
  searchTab.focus();
  searchTab.value = '';
});

/*************** top_btn ******************/
var topBtn = document.querySelector('.top_btn');
var siteInfoSection = document.querySelector('.site_info');
var footerEx = document.querySelector('.footer_ex');
var siteInfoHeight = siteInfoSection.offsetHeight;
var footerExHeight = footerEx.offsetHeight;
var totalHeight = siteInfoHeight + footerExHeight;
topBtn.addEventListener('click', function () {
  window.scrollTo({
    top: 0
  });
});

/*************** quick_menu ******************/
var quickMenu = document.getElementById('quick_menu');
var prevScroll = 0;
var quickMenuLocate = quickMenu.offsetTop;

/* window.addEventListener('scroll', () => {
    quickMenu.style.top = `${window.scrollY + quickMenuLocate}px`;
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
//콘솔로 확인해보면 scrolly값이 소숫점단위가아닌 큰단위로 바껴잇음

//윈도우 스크롤이벤트가 아닌 다른이벤트에서 디바운스가 필요한경우
//애플라이 메서드로 this를 바꿔주는 작업이 필요할듯? input 같은?

window.addEventListener('scroll', debounce(60));
function debounce(delay) {
  var controlTime;
  console.log(window.scrollY);
  return function () {
    clearTimeout(controlTime);
    controlTime = setTimeout(function () {
      console.log(window.scrollY);
      quickMenu.style.top = "".concat(window.scrollY + quickMenuLocate, "px");
    }, delay);
  };
}
function scrollEvent(currentScroll) {
  prevScroll = currentScroll;
  console.log(window.scrollY, prevScroll);
}

/*************** common ******************/
//position값 계산
function move(LiWidth, count) {
  return LiWidth * count + "px";
}

//클래스 추가
function addClass(Element, ClassName) {
  Element.classList.add(ClassName);
}
//클래스 제거
function removeClass(Element, ClassName) {
  Element.classList.remove(ClassName);
}

//클론 만들기 함수01
function cloneCreate01(elements, parentEle) {
  for (var _i = 0; _i < elements.length / 2; _i++) {
    var cloneElement = elements[_i].cloneNode(true);
    parentEle.appendChild(cloneElement);
  }
}
//클론 만들기 함수02
function cloneCreate02(elements, parentEle) {
  for (var _i2 = 0; _i2 < elements.length; _i2++) {
    var cloneElement = elements[_i2].cloneNode(true);
    parentEle.insertBefore(cloneElement, elements[0]);
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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/header_n_etc.js"], null)
//# sourceMappingURL=/header_n_etc.8a680bd3.js.map