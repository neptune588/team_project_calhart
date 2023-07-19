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
})({"js/product_search.js":[function(require,module,exports) {
/************************ search_product_list ****************************/
var searchProductWrapper = document.getElementById('product_list');
var pageSection = document.getElementById('search_pagenation');
var pageNumber = document.querySelector('.page_number');
var pageItemView = 12;
var searchValue = document.querySelector('.search_value');
var productLengthNotice = document.querySelector('.list_length');
fetch('./product_search_data.json').then(function (res) {
  return res.json();
}).then(function (data) {
  listRequest(getParameter('q'), data);
}).catch(function (error) {
  return console.log(error);
});
function getParameter(parameter) {
  var urlObject = new URLSearchParams(location.search);

  //urlsearchparams란?
  //url쿼리문자열을 파싱하는 객체로
  //해당 객체를 생성후 get으로 ?뒤에 설정한 쿼리문자열을 매개변수로 받아
  //뒤에오는 문자열을 전달받을수있 다고 한다.

  //여기서 q는 key고 = 뒤에 오는게 value이다. 

  //ex ?query='바나나' 라고 가정하면 위의 선언한 객체에서
  //.get('query')를하면 바나나라는 값을 가져오게 될수 있게되는것.

  return urlObject.get(parameter);
}
function listfilter() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var array = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var returnArray = array.filter(function (object) {
    if (value === '') {
      return false;
    }
    return object.productNameKor.includes(value) || object.productModelName.includes(value) || object.productStyle.includes(value);
  });
  console.log(returnArray);
  return returnArray;
}
function lengthShow(value, array) {
  searchValue.textContent = value;
  productLengthNotice.textContent = array.length;
}
function listRequest(value, data) {
  var filterArray = listfilter(value, data);
  lengthShow(value, filterArray);
  listnPageCreate(filterArray);
}

/************************ search_tab ****************************/
var productPageSearchDelete = document.getElementById('search_delete_btn');
var productPageSearchTab = document.getElementById('product_page_search');
var maxValueLength = 50;
productPageSearchDelete.addEventListener('click', function () {
  productPageSearchTab.focus();
  productPageSearchTab.value = '';
});
productPageSearchTab.addEventListener('keyup', function (e) {
  var _this = this;
  var time;
  if (this.value.length > maxValueLength) {
    this.value = this.value.substring(0, maxValueLength);
  }
  if (e.key === 'Enter') {
    clearTimeout(time);
    time = setTimeout(function () {
      fetch('./search_data.json').then(function (res) {
        return res.json();
      }).then(function (data) {
        listRequest(_this.value, data);
      }).catch(function (error) {
        return console.log(error);
      });
    }, 400);
  }
});
function listnPageCreate(array) {
  listCreate(array);
  pageCreate(array);
}
function pageCreate(array) {
  if (array.length === 0) {
    addClass(pageSection, "none_on");
  } else {
    removeClass(pageSection, "none_on");
  }
  var receive = "";
  pageNumber.innerHTML = "";
  for (var i = 1; i <= calc(array); i++) {
    var pageInner = "\n          <li>\n              ".concat(i, "\n          </li>\n      ");
    receive += pageInner;
  }
  pageNumber.innerHTML = receive;
  //1페이지 활성화 표시
  if (pageNumber.children.length !== 0) {
    addClass(pageNumber.children[0], 'page_on');
  }
  pageControl(array);
}
function pageControl(array) {
  var pageNumberBtn = document.querySelectorAll('.page_number > li');
  //페이지 번호에 따라 아이템 생성
  var _loop = function _loop(i) {
    pageNumberBtn[i].addEventListener('click', function () {
      for (var j = 0; j < pageNumberBtn.length; j++) {
        removeClass(pageNumberBtn[j], 'page_on');
      }
      //페이지 활성화 효과
      addClass(pageNumberBtn[i], 'page_on');
      //복사할 배열을 인자로 받고 인덱스 추출 번호를 계산하여 
      //복사한다. 그리고 페이지 클릭했을때 이후 해당 배열을 기반으로 리스트 생성
      var returnSlice = arraySliceCreate(i, pageItemView, array);
      listCreate(returnSlice);
    });
  };
  for (var i = 0; i < pageNumberBtn.length; i++) {
    _loop(i);
  }
}
//페이지 리스트 생성
function listCreate(array) {
  searchProductWrapper.innerHTML = "";
  var receive = "";
  if (array.length === 0) {
    searchProductWrapper.innerHTML = "\n          <div class=\"search_not_ment\">\n            <p>\n              <i class=\"far fa-times-circle\"></i>\n              \uAC80\uC0C9\uC5B4\uC640 \uC77C\uCE58\uD558\uB294 \uB0B4\uC6A9\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.\n            </p>\n            <p>\uB2E4\uB978 \uAC80\uC0C9\uC5B4\uB97C \uC785\uB825\uD558\uC2DC\uAC70\uB098, \uAC80\uC0C9\uC5B4\uC640 \uB744\uC5B4\uC4F0\uAE30\uB97C \uD655\uC778 \uD574\uBCF4\uC138\uC694.</p>\n          </div>\n      ";
  }
  for (var i = 0; i < array.length; i++) {
    if (i === pageItemView) {
      break;
    }
    var list = "\n          <li>\n              <a class = \"img_link_01\" href = './detail_product_buy.html'>\n                  <img src = ".concat(array[i].imgSrc[0], " alt = \"product_img_").concat(i, "\">\n              </a>    \n              <a class = \"img_link_02\" href = './detail_product_buy.html'>\n                  <img src = ").concat(array[i].imgSrc[1], " alt = \"product_img_").concat(i, "_hover\">\n              </a>\n              <a class = \"product_name\" href = \"./detail_product_buy.html\">\n                  ").concat(array[i].productNameKor, "\n              </a>\n              <a class = \"model_name\" href = \"./detail_product_buy.html\">\n                  ").concat(array[i].productModelName, "\n              </a>\n              <span class = \"price_unit\">\u20A9</span>\n              <span class = \"price\">").concat(array[i].price.toLocaleString(), "</span>\n          </li>\n      ");
    if (array[i].isBest === true && array[i].isNew === true) {
      list = list.replaceAll("<a class = \"product_name\" href = \"./detail_product_buy.html\">", "<span class=\"best\">BEST</span><span class=\"new\">NEW</span><a class = \"product_name\" href = \"./detail_product_buy.html\">");
    } else if (array[i].isBest === true) {
      list = list.replaceAll("<a class = \"product_name\" href = \"./detail_product_buy.html\">", "<span class=\"best\">BEST</span><a class = \"product_name\" href = \"./detail_product_buy.html\">");
    } else if (array[i].isNew === true) {
      list = list.replaceAll("<a class = \"product_name\" href = \"./detail_product_buy.html\">", "<span class=\"new\">NEW</span><a class = \"product_name\" href = \"./detail_product_buy.html\">");
    }
    receive += list;
  }
  searchProductWrapper.innerHTML += receive;
}
//배열 받아서 페이지 계산
function calc(array) {
  return Math.ceil(array.length / pageItemView);

  //math.ceil은 올림 함수이다.

  //총 아이템이 30개이고 

  //한 페이지당 아이템이 12개씩 나온다고 가정을 해보면

  // 1 12 /2 12 /3 6 이 되는데

  //12개로 나눈 나머지 부분에도 페이지를 구현해주기 위해 올림함수를 쓰는것이다.

  // 30 / 12는 2.5 -> 올림 -> 3 나머지 0.5부분도 페이지로 나타나져야 하니까 올림 함수를 이용해 카운트를 올리고 페이지에 표현
}

//배열 계산 후 복제
function arraySliceCreate(firstValue, lastValue, array) {
  var startIndex = (firstValue + 1) * lastValue - lastValue; //sub_page_product_list기준 0, 1, 2
  var lastIndex = lastValue + startIndex;
  var returnArray = array.slice(startIndex, lastIndex); //배열복제
  return returnArray;

  //console.log(returnArray);
  //console.log(startIndex);
  //console.log(lastIndex);
}

//클래스 추가
function addClass(Element, ClassName) {
  Element.classList.add(ClassName);
}
function addClassMulti(Element, ClassArray) {
  ClassArray.forEach(function (ClassName) {
    Element.classList.add(ClassName);
  });
}

//클래스 제거
function removeClass(Element, ClassName) {
  Element.classList.remove(ClassName);
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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/product_search.js"], null)
//# sourceMappingURL=/product_search.a95a72a3.js.map