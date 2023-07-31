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
})({"js/data.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sub_page_product_list = exports.newProductList = exports.mdsProductList = exports.lookBookProudctList = exports.detail_page_produdct_list = exports.bestProductList = void 0;
var bestProductList = [{
  id: 1,
  modelName: 'S/S DELRAY SHIRT',
  name: 'AMALFI/WAX',
  price: 118000,
  src: './images/bp_01.jpg'
}, {
  id: 2,
  modelName: 'S/S LUMEN SHIRT',
  name: 'LUMEN PRINT, BLACK',
  price: 175000,
  src: './images/bp_02.jpg'
}, {
  id: 3,
  modelName: 'S/S BOOGIE T-SHIRT',
  name: 'DAHLIA HEAVY STONE WASH',
  price: 175000,
  src: './images/bp_03.jpg'
}, {
  id: 4,
  modelName: 'BIG BUCK BANDANA',
  name: 'SOUVENIR PRINT, BLACK',
  price: 58000,
  src: './images/bp_04.jpg'
}, {
  id: 5,
  modelName: 'SINGLE KNEE SHORT SMITH',
  name: 'BLUE STONE WASHED',
  price: 135000,
  src: './images/bp_05.jpg'
}, {
  id: 6,
  modelName: 'SINGLE KNEE SHORT SMITH',
  name: 'BLACK STONE WASHED',
  price: 135000,
  src: './images/bp_06.jpg'
}, {
  id: 7,
  modelName: 'DETROIT JACKET',
  name: 'BLACK/BLACK RINSED',
  price: 288000,
  src: './images/bp_07.jpg'
}, {
  id: 8,
  modelName: 'WYNTON BUCKET HAT',
  name: 'JURA/YUCCA STONE WASHED',
  price: 85000,
  src: './images/bp_08.jpg'
}];
exports.bestProductList = bestProductList;
var newProductList = [{
  id: 1,
  modelName: 'SALEDO JACKET',
  name: 'BLACK LIGHT USED WASH',
  price: 245000,
  src: './images/np_01.jpg'
}, {
  id: 2,
  modelName: 'SALEDO JACKET',
  name: 'BLUE STONE WASHED',
  price: 208000,
  src: './images/np_02.jpg'
}, {
  id: 3,
  modelName: 'COASTAL PANT',
  name: 'WHITE/BLACK',
  price: 173000,
  src: './images/np_03.jpg'
}, {
  id: 4,
  modelName: 'DOUBLE KNEE PANT FAIRFIELD',
  name: 'BLUE HEAVY STONE WASH',
  price: 173000,
  src: './images/np_04.jpg'
}, {
  id: 5,
  modelName: 'ISLAND SWIM TRUNKS',
  name: 'KIWI/BLACK',
  price: 108000,
  src: './images/np_05.jpg'
}, {
  id: 6,
  modelName: 'ISLAND SWIM TRUNKS',
  name: 'MARINA PRINT, ATOM BLUE/WHITE',
  price: 123000,
  src: './images/np_06.jpg'
}, {
  id: 7,
  modelName: 'DELRAY CAP',
  name: 'WALL/CITRON',
  price: 78000,
  src: './images/np_07.jpg'
}, {
  id: 8,
  modelName: 'SIBERIAN PARKA KEYCHAIN',
  name: 'GOLD',
  price: 33000,
  src: './images/np_08.jpg'
}];
exports.newProductList = newProductList;
var lookBookProudctList = [{
  propertyNumber: 1,
  modelName: 'S/S MARINA SHIRT',
  name: 'MARINA PRINT, ARCADE',
  price: '145,000'
}, {
  propertyNumber: 2,
  modelName: 'DOUBLE KNEE PANT DEARBORN',
  name: 'WAX STONE WASHED',
  price: '168,000'
}, {
  propertyNumber: 3,
  modelName: 'BACKLEY CAP',
  name: 'LUPINUS',
  price: '58,000'
}, {
  propertyNumber: 4,
  modelName: 'W S/S TAMAS TROPICS SHIRT',
  name: 'TAMAS TROPICS PRINT, PARADISE BIRD',
  price: '168,000'
}, {
  propertyNumber: 5,
  modelName: 'W TRISTIN SHORT',
  name: 'WAX RINSED',
  price: '138,000'
}, {
  propertyNumber: 6,
  modelName: 'MADISON LOGO CAP',
  name: 'WALL',
  price: '68,000'
}, {
  propertyNumber: 7,
  modelName: 'BAYFIELD TOTESTORM BLUE FADED',
  name: 'STORM BLUE FADED',
  price: '108,000'
}, {
  propertyNumber: 8,
  modelName: 'S/S BRAXTON SHIRT',
  name: 'WHITE/WHITE',
  price: '118,000'
}, {
  propertyNumber: 9,
  modelName: 'LANDON SHORT ROBERTSON',
  name: 'BLUE BLEACHED',
  price: '135,000'
}];
exports.lookBookProudctList = lookBookProudctList;
var mdsProductList = [{
  infoData: {
    nameEng: 'LEAGUE JACKET',
    nameKor: '리그 자켓 블루',
    etc: 'BLUE',
    productNumber: 'CA22FWJAJL00026001',
    price: '₩ 263,000'
  },
  src: ["./images/mds_01.jpg", "./images/mds_acodian_01.jpg"]
}, {
  infoData: {
    nameEng: 'LEAGUE JACKET',
    nameKor: '리그 자켓 펜스 와이어',
    etc: 'FENCE WIRE',
    productNumber: 'CA22FWJAJL10290001',
    price: '₩ 263,000'
  },
  src: ["./images/mds_02.jpg", "./images/mds_acodian_02.jpg"]
}, {
  infoData: {
    nameEng: 'MONTANA BLAZER',
    nameKor: '몬타나 블레이저 시위드',
    etc: 'SEAWEED',
    productNumber: 'CA22FWJAJL10066001',
    price: '₩ 243,000'
  },
  src: ["./images/mds_03.jpg", "./images/mds_acodian_03.jpg"]
}, {
  infoData: {
    nameEng: 'S/S MIRAGE SHIRT',
    nameKor: '반팔 미라지 셔츠 미라지 프린트, 프로스티드 블루',
    etc: 'MIRAGE PRINT, FROSTED BLUE',
    productNumber: 'CA22SSSHSS09401001',
    price: '₩ 135,000'
  },
  src: ["./images/mds_04.jpg", "./images/mds_acodian_04.jpg"]
}];
exports.mdsProductList = mdsProductList;
var sub_page_product_list = [/***************** jaket ******************/
{
  propertyNumber: 1,
  productNameKor: "\uC54C\uB9C1\uD134 \uBCA0\uC2A4\uD2B8 \uC5D0\uC77C \uD5E4\uBE44 \uC2A4\uD1A4 \uC6CC\uC2DC",
  productModelName: "ALE HEAVY STONE WASH",
  productColor: "brown",
  productStyle: "jaket",
  price: 283000,
  priceRate: "250000~500000",
  imgSrc: ["./images/sub_page_img/CA22FWJAJH10144002/CA22FWJAJH10144002-1.jpg", "./images/sub_page_img/CA22FWJAJH10144002/CA22FWJAJH10144002-0.jpg"],
  isNew: true,
  isBest: true,
  isSalesRateValue: "30~50",
  isSoldOut: false
}, {
  propertyNumber: 2,
  productNameKor: "\uCF54\uC2A4\uD0C8 \uC790\uCF13 \uBE14\uB799/\uD654\uC774\uD2B8",
  productModelName: "COASTAL JACKET BLACK",
  productColor: "black",
  productStyle: "jaket",
  price: 248000,
  priceRate: "150000~250000",
  imgSrc: ["./images/sub_page_img/CA23SSJAJL00358002/CA23SSJAJL00358002-1.jpg", "./images/sub_page_img/CA23SSJAJL00358002/CA23SSJAJL00358002-0.jpg"],
  isNew: true,
  isBest: true,
  isSoldOut: false
}, {
  propertyNumber: 3,
  productNameKor: "\uCF54\uC2A4\uD0C8 \uC790\uCF13 \uD654\uC774\uD2B8/\uBE14\uB799",
  productModelName: "COASTAL JACKET WHITE",
  productColor: "white",
  productStyle: "jaket",
  price: 248000,
  priceRate: "150000~250000",
  imgSrc: ["./images/sub_page_img/CA23SSJAJL00266002/CA23SSJAJL00266002-1.jpg", "./images/sub_page_img/CA23SSJAJL00266002/CA23SSJAJL00266002-0.jpg"],
  isNew: true,
  isBest: true,
  isSoldOut: false
}, {
  propertyNumber: 4,
  productNameKor: "\uB9AC\uADF8 \uC790\uCF13 \uBE14\uB8E8",
  productModelName: "LEAGUE JACKET",
  productColor: "blue",
  productStyle: "jaket",
  price: 263000,
  priceRate: "250000~500000",
  imgSrc: ["./images/sub_page_img/CA22FWJAJL00026001/CA22FWJAJL00026001-1.jpg", "./images/sub_page_img/CA22FWJAJL00026001/CA22FWJAJL00026001-0.jpg"],
  isNew: true,
  isBest: false,
  isSalesRateValue: "30~50",
  isSoldOut: false
}, {
  propertyNumber: 5,
  productNameKor: "\uB808\uD130\uB9E8 \uC790\uCF13 \uBE14\uB799/\uBE0C\uB9AD",
  productModelName: "LETTERMAN JACKET",
  productColor: "black",
  productStyle: "jaket",
  price: 258000,
  priceRate: "250000~500000",
  imgSrc: ["./images/sub_page_img/CA22FWJAJL10171001/CA22FWJAJL10171001-1.jpg", "./images/sub_page_img/CA22FWJAJL10171001/CA22FWJAJL10171001-0.jpg"],
  isNew: true,
  isBest: false,
  isSalesRateValue: "30~50",
  isSoldOut: false
}, {
  propertyNumber: 6,
  productNameKor: "\uD2B8\uB808\uBC84 \uC790\uCF13 \uBE14\uB799/\uBE14\uB799",
  productModelName: "TREVOR JACKET",
  productColor: "black",
  productStyle: "jaket",
  price: 343000,
  priceRate: "250000~500000",
  imgSrc: ["./images/sub_page_img/CA22FWJAHS00285001/CA22FWJAHS00285001-1.jpg", "./images/sub_page_img/CA22FWJAHS00285001/CA22FWJAHS00285001-0.jpg"],
  isNew: true,
  isBest: false,
  isSalesRateValue: "30~50",
  isSoldOut: false
}, /***************** shirt ******************/
{
  propertyNumber: 7,
  productNameKor: "\uAE34\uD314 \uB9E4\uB514\uC2A8 \uC154\uCE20 \uD398\uC77C \uCFFC\uCE20/\uD654\uC774\uD2B8",
  productModelName: "L/S MADISON SHIRT",
  productColor: "pink",
  productStyle: "shirt",
  price: 113000,
  priceRate: "50000~150000",
  imgSrc: ["./images/sub_page_img/CA22SSSHLS09389001/CA22SSSHLS09389001-1.jpg", "./images/sub_page_img/CA22SSSHLS09389001/CA22SSSHLS09389001-0.jpg"],
  isNew: true,
  isBest: false,
  isSalesRateValue: "30~50",
  isSoldOut: false
}, {
  propertyNumber: 8,
  productNameKor: "\uB9E4\uB2DD \uC154\uCE20 \uC790\uCF13 \uB9E4\uB2DD \uCCB4\uD06C, \uB2E4\uD06C \uC5C4\uBC84/\uB808\uB354",
  productModelName: "MANNING SHIRT JAC",
  productColor: "brown",
  productStyle: "shirt",
  price: 278000,
  priceRate: "250000~500000",
  imgSrc: ["./images/sub_page_img/CA22FWJAJL10139001/CA22FWJAJL10139001-1.jpg", "./images/sub_page_img/CA22FWJAJL10139001/CA22FWJAJL10139001-0.jpg"],
  isNew: true,
  isBest: false,
  isSalesRateValue: "30~50",
  isSoldOut: false
}, {
  propertyNumber: 9,
  productNameKor: "\uBAAC\uD2B8\uB808\uC774 \uC154\uCE20 \uC790\uCF13 \uD0A4\uC704 \uC6D0 \uC6CC\uC2DC\uB4DC",
  productModelName: "MONTEREY SHIRT JAC",
  productColor: "green",
  productStyle: "shirt",
  price: 218000,
  priceRate: "150000~250000",
  imgSrc: ["./images/sub_page_img/CA23SSJAJL11129001/CA23SSJAJL11129001-1.jpg", "./images/sub_page_img/CA23SSJAJL11129001/CA23SSJAJL11129001-0.jpg"],
  isNew: true,
  isBest: false,
  isSoldOut: false
}, {
  propertyNumber: 10,
  productNameKor: "\uBC18\uD314 \uD06C\uB798\uD504\uD2B8 \uC154\uCE20 \uC950\uB77C \uB9B0\uC2A4\uB4DC",
  productModelName: "S/S CRAFT SHIRT",
  productColor: "greenDown",
  productStyle: "shirt",
  price: 123000,
  priceRate: "50000~150000",
  imgSrc: ["./images/sub_page_img/CA23SSSHSS11170001/CA23SSSHSS11170001-1.jpg", "./images/sub_page_img/CA23SSSHSS11170001/CA23SSSHSS11170001-0.jpg"],
  isNew: true,
  isBest: false,
  isSoldOut: false
}, {
  propertyNumber: 11,
  productNameKor: "\uBC18\uD314 \uB378\uB808\uC774 \uC154\uCE20 \uC544\uB9D0\uD53C/\uC641\uC2A4",
  productModelName: "S/S DELRAY SHIRT",
  productColor: "blue",
  productStyle: "shirt",
  price: 118000,
  priceRate: "50000~150000",
  imgSrc: ["./images/sub_page_img/CA23SSSHSS11171001/CA23SSSHSS11171001-1.jpg", "./images/sub_page_img/CA23SSSHSS11171001/CA23SSSHSS11171001-0.jpg"],
  isNew: true,
  isBest: false,
  isSoldOut: false
}, {
  propertyNumber: 12,
  productNameKor: "\uBC18\uD314 \uB378\uB808\uC774 \uC154\uCE20 \uD53C\uB2C9\uC2A4/\uC641\uC2A4",
  productModelName: "S/S DELRAY SHIRT",
  productColor: "orange",
  productStyle: "shirt",
  price: 118000,
  priceRate: "50000~150000",
  imgSrc: ["./images/sub_page_img/CA23SSSHSS11172001/CA23SSSHSS11172001-1.jpg", "./images/sub_page_img/CA23SSSHSS11172001/CA23SSSHSS11172001-0.jpg"],
  isNew: true,
  isBest: false,
  isSoldOut: false
}, /***************** swater ******************/
{
  propertyNumber: 13,
  productNameKor: "\uCE7C\uD558\uD2B8 \uC2A4\uC6FB\uC154\uCE20 \uADF8\uB808\uC774 \uD5E4\uB354/\uBE14\uB799",
  productModelName: "CARHARTT SWEATSHIRT",
  productColor: "gray",
  productStyle: "sweater",
  price: 138000,
  priceRate: "50000~150000",
  imgSrc: ["./images/sub_page_img/CA23SSSWCR00991001/CA23SSSWCR00991001-1.jpg", "./images/sub_page_img/CA23SSSWCR00991001/CA23SSSWCR00991001-0.jpg"],
  isNew: false,
  isBest: false,
  isSoldOut: false
}, {
  propertyNumber: 14,
  productNameKor: "\uCE7C\uD558\uD2B8 \uC2A4\uC6FB\uC154\uCE20 \uD2B8\uB9AC\uD558\uC6B0\uC2A4/\uD654\uC774\uD2B8",
  productModelName: "CARHARTT SWEATSHIRT",
  productColor: "greenDown",
  productStyle: "sweater",
  price: 138000,
  priceRate: "50000~150000",
  imgSrc: ["./images/sub_page_img/CA23SSSWCR06655001/CA23SSSWCR06655001-1.jpg", "./images/sub_page_img/CA23SSSWCR06655001/CA23SSSWCR06655001-0.jpg"],
  isNew: false,
  isBest: false,
  isSoldOut: false
}, {
  propertyNumber: 15,
  productNameKor: "\uCE7C\uD558\uD2B8 \uC2A4\uC6FB\uC154\uCE20 \uB8E8\uD53C\uB108\uC2A4/\uD654\uC774\uD2B8",
  productModelName: "CARHARTT SWEATSHIRT",
  productColor: "purple",
  productStyle: "sweater",
  price: 138000,
  priceRate: "50000~150000",
  imgSrc: ["./images/sub_page_img/CA23SSSWCR11284001/CA23SSSWCR11284001-1.jpg", "./images/sub_page_img/CA23SSSWCR11284001/CA23SSSWCR11284001-0.jpg"],
  isNew: false,
  isBest: false,
  isSoldOut: false
}, {
  propertyNumber: 16,
  productNameKor: "\uD6C4\uB514\uB4DC \uCE7C\uD558\uD2B8 \uC2A4\uC6FB\uC154\uCE20 \uD0A4\uC704/\uC2DC\uD2B8\uB860",
  productModelName: "HOODED CARHARTT SWEATSHIRT",
  productColor: "green",
  productStyle: "sweater",
  price: 148000,
  priceRate: "50000~150000",
  imgSrc: ["./images/sub_page_img/CA23SSSWCR11230001/CA23SSSWCR11230001-1.jpg", "./images/sub_page_img/CA23SSSWCR11230001/CA23SSSWCR11230001-0.jpg"],
  isNew: false,
  isBest: false,
  isSoldOut: false
}, {
  propertyNumber: 17,
  productNameKor: "\uD6C4\uB514\uB4DC \uB85C\uCEE4 \uC2A4\uC6FB\uC154\uCE20 \uD53C\uB2C9\uC2A4/\uBE14\uB799",
  productModelName: "HOODED LOCKER SWEATSHIRT",
  productColor: "orange",
  productStyle: "sweater",
  price: 153000,
  priceRate: "150000~250000",
  imgSrc: ["./images/sub_page_img/CA23SSSWHO11200001/CA23SSSWHO11200001-1.jpg", "./images/sub_page_img/CA23SSSWHO11200001/CA23SSSWHO11200001-0.jpg"],
  isNew: false,
  isBest: false,
  isSoldOut: false
}, {
  propertyNumber: 18,
  productNameKor: "\uB12C\uC2A8 \uC2A4\uC6FB\uC154\uCE20 \uD53C\uC2E0 \uAC00\uBA3C\uD2B8 \uB2E4\uC774\uB4DC",
  productModelName: "NELSON SWEATSHIRT",
  productColor: "skyBlue",
  productStyle: "sweater",
  price: 163000,
  priceRate: "150000~250000",
  imgSrc: ["./images/sub_page_img/CA23SSSWCR11195001/CA23SSSWCR11195001-1.jpg", "./images/sub_page_img/CA23SSSWCR11195001/CA23SSSWCR11195001-0.jpg"],
  isNew: false,
  isBest: false,
  isSoldOut: false
}, /***************** neat ******************/
{
  propertyNumber: 19,
  productNameKor: "\uC568\uBE44\uC5B8 \uAC00\uB514\uAC74 \uC7AC\uC2A4\uD37C \uD5E4\uB354",
  productModelName: "ALBION CARDIGAN",
  productColor: "brown",
  productStyle: "neat",
  price: 218000,
  priceRate: "150000~250000",
  imgSrc: ["./images/sub_page_img/CA22FWKNKC10174001/CA22FWKNKC10174001-1.jpg", "./images/sub_page_img/CA22FWKNKC10174001/CA22FWKNKC10174001-0.jpg"],
  isNew: false,
  isBest: false,
  isSalesRateValue: "30~50",
  isSoldOut: false
}, {
  propertyNumber: 20,
  productNameKor: "\uCF54\uC2A4\uD2B8 \uC2A4\uD14C\uC774\uD2B8 \uC2A4\uC6E8\uD130 \uD654\uC774\uD2B8",
  productModelName: "COAST STATE SWEATER",
  productColor: "gray",
  productStyle: "neat",
  price: 185000,
  priceRate: "150000~250000",
  imgSrc: ["./images/sub_page_img/CA23SSKNKP00040001/CA23SSKNKP00040001-1.jpg", "./images/sub_page_img/CA23SSKNKP00040001/CA23SSKNKP00040001-0.jpg"],
  isNew: false,
  isBest: false,
  isSoldOut: false
}, {
  propertyNumber: 21,
  productNameKor: "\uB9E4\uB514\uC2A8 \uC2A4\uC6E8\uD130 \uC544\uC774\uC2DC \uC6CC\uD130/\uD504\uB85C\uC2A4\uD2F0\uB4DC \uBE14\uB8E8",
  productModelName: "MADISON SWEATER",
  productColor: "blue",
  productStyle: "neat",
  price: 95000,
  priceRate: "50000~150000",
  imgSrc: ["./images/sub_page_img/CA22SSKNKP09357001/CA22SSKNKP09357001-1.jpg", "./images/sub_page_img/CA22SSKNKP09357001/CA22SSKNKP09357001-0.jpg"],
  isNew: false,
  isBest: false,
  isSalesRateValue: "30~50",
  isSoldOut: false
}, {
  propertyNumber: 22,
  productNameKor: "\uC2A4\uD06C\uB9BD\uD2B8 \uB2C8\uD2B8 \uBCA0\uC2A4\uD2B8 \uB0B4\uCE04\uB7F4",
  productModelName: "SCRIPT KNIT VEST",
  productColor: "white",
  productStyle: "neat",
  price: 98000,
  priceRate: "50000~150000",
  imgSrc: ["./images/sub_page_img/CA22FWKNKP00104001/CA22FWKNKP00104001-1.jpg", "./images/sub_page_img/CA22FWKNKP00104001/CA22FWKNKP00104001-0.jpg"],
  isNew: false,
  isBest: false,
  isSalesRateValue: "30~50",
  isSoldOut: false
}, {
  propertyNumber: 23,
  productNameKor: "\uC54C\uB354\uC2A4 \uB2C8\uD2B8 \uBCA0\uC2A4\uD2B8 \uCE90\uB9AC\uBE44\uC548 \uC2DC",
  productModelName: "S/S ALDUS KNIT VEST",
  productColor: "skyBlue",
  productStyle: "neat",
  price: 113000,
  priceRate: "50000~150000",
  imgSrc: ["./images/sub_page_img/CA23SSKNKP11280001/CA23SSKNKP11280001-1.jpg", "./images/sub_page_img/CA23SSKNKP11280001/CA23SSKNKP11280001-0.jpg"],
  isNew: false,
  isBest: false,
  isSoldOut: false
}, {
  propertyNumber: 24,
  productNameKor: "\uBC18\uD314 \uCF04\uC6E8\uC774 \uB2C8\uD2B8 \uD3F4\uB85C \uBE14\uB799",
  productModelName: "S/S KENWAY KNIT POLO",
  productColor: "black",
  productStyle: "neat",
  price: 148000,
  priceRate: "50000~150000",
  imgSrc: ["./images/sub_page_img/CA23SSKNKP00002002/CA23SSKNKP00002002-1.jpg", "./images/sub_page_img/CA23SSKNKP00002002/CA23SSKNKP00002002-0.jpg"],
  isNew: false,
  isBest: false,
  isSoldOut: false
}, /***************** t-shirt ******************/
{
  propertyNumber: 25,
  productNameKor: "\uBC18\uD314 \uC140\uB9AC \uD2F0\uC154\uCE20 \uCE90\uB9AC\uBE44\uC548 \uC2DC",
  productModelName: "S/S CELLY T-SHIRT",
  productColor: "blue",
  productStyle: "TShirt",
  price: 85000,
  priceRate: "50000~150000",
  imgSrc: ["./images/sub_page_img/CA23SSTSSS11280001/CA23SSTSSS11280001-1.jpg", "./images/sub_page_img/CA23SSTSSS11280001/CA23SSTSSS11280001-0.jpg"],
  isNew: false,
  isBest: false,
  isSoldOut: false
}, {
  propertyNumber: 26,
  productNameKor: "\uBC18\uD314 \uCF54\uC2A4\uD2B8 \uC2A4\uD14C\uC774\uD2B8 \uD2F0\uC154\uCE20 \uD654\uC774\uD2B8",
  productModelName: "S/S COAST STATE T-SHIRT",
  productColor: "white",
  productStyle: "TShirt",
  price: 98000,
  priceRate: "50000~150000",
  imgSrc: ["./images/sub_page_img/CA23SSTSSS00040026/CA23SSTSSS00040026-1.jpg", "./images/sub_page_img/CA23SSTSSS00040026/CA23SSTSSS00040026-0.jpg"],
  isNew: false,
  isBest: false,
  isSoldOut: false,
  isGender: "male"
}, {
  propertyNumber: 27,
  productNameKor: "\uBC18\uD314 \uD788\uD2B8 \uC2A4\uD06C\uB9BD\uD2B8 \uD2F0\uC154\uCE20 \uC544\uB80C\uAC00",
  productModelName: "S/S HEAT SCRIPT T-SHIRT",
  productColor: "purple",
  productStyle: "TShirt",
  price: 75000,
  priceRate: "50000~150000",
  imgSrc: ["./images/sub_page_img/CA23SSTSSS11234002/CA23SSTSSS11234002-1.jpg", "./images/sub_page_img/CA23SSTSSS11234002/CA23SSTSSS11234002-0.jpg"],
  isNew: false,
  isBest: false,
  isSoldOut: false,
  isGender: "male"
}, {
  propertyNumber: 28,
  productNameKor: "\uBC18\uD314 \uB9E4\uB274\uC5BC \uD2F0\uC154\uCE20 \uB2EC\uB9AC\uC544 \uAC00\uBA3C\uD2B8 \uB2E4\uC774\uB4DC",
  productModelName: "S/S MANUAL T-SHIRT",
  productColor: "pink",
  productStyle: "TShirt",
  price: 93000,
  priceRate: "50000~150000",
  imgSrc: ["./images/sub_page_img/CA23SSTSSS11190002/CA23SSTSSS11190002-1.jpg", "./images/sub_page_img/CA23SSTSSS11190002/CA23SSTSSS11190002-0.jpg"],
  isNew: false,
  isBest: false,
  isSoldOut: false
}, {
  propertyNumber: 29,
  productNameKor: "\uBC18\uD314 \uB274 \uD504\uB860\uD2F0\uC5B4 \uD2F0\uC154\uCE20 \uBC84\uD314\uB85C",
  productModelName: "S/S NEW FRONTIER T-SHIRT",
  productColor: "brown",
  productStyle: "TShirt",
  price: 78000,
  priceRate: "50000~150000",
  imgSrc: ["./images/sub_page_img/CA23SSTSSS11110001/CA23SSTSSS11110001-1.jpg", "./images/sub_page_img/CA23SSTSSS11110001/CA23SSTSSS11110001-0.jpg"],
  isNew: false,
  isBest: false,
  isSoldOut: false
}, {
  propertyNumber: 30,
  productNameKor: "\uBC18\uD314 \uD31C \uC2A4\uD06C\uB9BD\uD2B8 \uD2F0\uC154\uCE20 \uBE14\uB799",
  productModelName: "S/S PALM SCRIPT T-SHIRT",
  productColor: "black",
  productStyle: "TShirt",
  price: 75000,
  priceRate: "50000~150000",
  imgSrc: ["./images/sub_page_img/CA23SSTSSS00002018/CA23SSTSSS00002018-1.jpg", "./images/sub_page_img/CA23SSTSSS00002018/CA23SSTSSS00002018-0.jpg"],
  isNew: false,
  isBest: false,
  isSoldOut: false
}];
exports.sub_page_product_list = sub_page_product_list;
var detail_page_produdct_list = [{
  propertyNumber: 1,
  productNameKor: "\uCF54\uC2A4\uD0C8 \uC790\uCF13 \uBE14\uB799/\uD654\uC774\uD2B8",
  productModelName: "COASTAL JACKET BLACK",
  productCode: "CA23SSJAJL00358002",
  price: 248000,
  imgSrc01: ["./images/detail_page_img/CA23SSJAJL00358002_thumnail/CA23SSJAJL00358002-01.jpg", "./images/detail_page_img/CA23SSJAJL00358002_thumnail/CA23SSJAJL00358002-02.jpg", "./images/detail_page_img/CA23SSJAJL00358002_thumnail/CA23SSJAJL00358002-03.jpg", "./images/detail_page_img/CA23SSJAJL00358002_thumnail/CA23SSJAJL00358002-04.jpg", "./images/detail_page_img/CA23SSJAJL00358002_thumnail/CA23SSJAJL00358002-05.jpg"],
  imgSrc02: ["./images/detail_page_img/CA23SSJAJL00358002_thumnail/CA23SSJAJL00358002-01_hover.jpg", "./images/detail_page_img/CA23SSJAJL00358002_thumnail/CA23SSJAJL00358002-02_hover.jpg", "./images/detail_page_img/CA23SSJAJL00358002_thumnail/CA23SSJAJL00358002-03_hover.jpg", "./images/detail_page_img/CA23SSJAJL00358002_thumnail/CA23SSJAJL00358002-04_hover.jpg", "./images/detail_page_img/CA23SSJAJL00358002_thumnail/CA23SSJAJL00358002-05_hover.jpg"],
  limitQuantity: 6
}, {
  propertyNumber: 2,
  productNameKor: "\uCF54\uC2A4\uD0C8 \uC790\uCF13 \uD654\uC774\uD2B8/\uBE14\uB799",
  productModelName: "COASTAL JACKET WHITE",
  productCode: "CA23SSJAJL00266002",
  price: 248000,
  imgSrc01: ["./images/detail_page_img/CA23SSJAJL00266002_thumnail/CA23SSJAJL00266002-01.jpg", "./images/detail_page_img/CA23SSJAJL00266002_thumnail/CA23SSJAJL00266002-02.jpg", "./images/detail_page_img/CA23SSJAJL00266002_thumnail/CA23SSJAJL00266002-03.jpg", "./images/detail_page_img/CA23SSJAJL00266002_thumnail/CA23SSJAJL00266002-04.jpg", "./images/detail_page_img/CA23SSJAJL00266002_thumnail/CA23SSJAJL00266002-05.jpg"],
  imgSrc02: ["./images/detail_page_img/CA23SSJAJL00266002_thumnail/CA23SSJAJL00266002-01_hover.jpg", "./images/detail_page_img/CA23SSJAJL00266002_thumnail/CA23SSJAJL00266002-02_hover.jpg", "./images/detail_page_img/CA23SSJAJL00266002_thumnail/CA23SSJAJL00266002-03_hover.jpg", "./images/detail_page_img/CA23SSJAJL00266002_thumnail/CA23SSJAJL00266002-04_hover.jpg", "./images/detail_page_img/CA23SSJAJL00266002_thumnail/CA23SSJAJL00266002-05_hover.jpg"],
  limitQuantity: 9
}];
exports.detail_page_produdct_list = detail_page_produdct_list;
},{}],"js/detail_product_list.js":[function(require,module,exports) {
"use strict";

var _data = require("./data.js");
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
//change_list
var pdCodeNum = document.getElementById('code_number');
var quantityNum = document.getElementById('quantity_number');
var totalPrice = document.getElementById('total_price');
var pdMoney = document.getElementById('product_money');

/******************** view_thumnail ********************/
var viewContainer = document.getElementById('view_thumnail');
var viewThum = document.querySelectorAll('.thumnail_box');
var viewSmallThum = document.querySelectorAll('.img_box');
var detailItem = _toConsumableArray(_data.detail_page_produdct_list);
viewContainer.addEventListener('mousemove', function (e) {
  viewThum[1].style.transform = "translate(".concat(e.offsetX * -2, "px, ").concat(e.offsetY * -2, "px)");
});
viewContainer.addEventListener('mouseout', function () {
  viewThum[1].style.transform = "translate(0px, 0px)";
});

/******************** init_settings ********************/
txtChange(quantityNum, detailItem[0].limitQuantity);
txtChange(pdCodeNum, detailItem[0].productCode);
txtChange(totalPrice, "".concat(detailItem[0].price.toLocaleString(), " \uC6D0"));
txtChange(pdMoney, detailItem[0].price.toLocaleString());
viewSmallThum.forEach(function (imgBx, i) {
  imgBx.addEventListener('click', function () {
    viewThum[0].children[0].src = detailItem[0].imgSrc01[i];
    viewThum[1].children[0].src = detailItem[0].imgSrc02[i];
  });
});

/******************** color_select + handleEv ********************/
var colorSelArea = document.getElementById('select_list');
colorBoxCreate(detailItem);
function colorBoxCreate(arr) {
  var list = "";
  var receive = "";
  arr.forEach(function (obj, i) {
    list = "\n            <li class=\"color_select_box\">\n                <a href=\"#!\">\n                    <img src=\"".concat(obj.imgSrc01[0], "\" alt=\"select_img").concat(i, "\"/>\n                </a>\n            </li>        \n        ");
    receive += list;
  });
  colorSelArea.innerHTML = receive;
  handleSelect(arr);
}
function handleSelect(arr) {
  //color_select
  var colorSelBox = document.querySelectorAll('.color_select_box');
  colorSelBox.forEach(function (box, i) {
    box.addEventListener('click', function () {
      viewThum[0].children[0].src = arr[i].imgSrc01[0];
      viewThum[1].children[0].src = arr[i].imgSrc02[0];
      viewSmallThum.forEach(function (imgBx, j) {
        return imgBx.children[0].src = arr[i].imgSrc01[j];
      });
      thumChange(arr, i);
      styleCodeChange(arr, i);
      quantityChange(arr, i);
    });
  });
}
function thumChange(arr, parentIdx) {
  //small_thum_select
  viewSmallThum.forEach(function (imgBx, i) {
    imgBx.addEventListener('click', function () {
      viewThum[0].children[0].src = arr[parentIdx].imgSrc01[i];
      viewThum[1].children[0].src = arr[parentIdx].imgSrc02[i];
    });
  });
}
function styleCodeChange(arr, parentIdx) {
  pdCodeNum.textContent = arr[parentIdx].productCode;
}
function quantityChange(arr, parentIdx) {
  quantityNum.textContent = arr[parentIdx].limitQuantity;
}

/******************** size_select ********************/
var sizeList = document.querySelectorAll('.size_list > li');
sizeBtnClick();
function sizeBtnClick() {
  var clickIndex = null;
  sizeList.forEach(function (btn, i) {
    btn.addEventListener('click', function () {
      if (clickIndex !== i) {
        clickIndex = i;
        for (var j = 0; j < sizeList.length; j++) {
          removeClass(sizeList[j], 'bgc_amber');
        }
        addClass(btn, 'bgc_amber');
      } else if (clickIndex === i) {
        clickIndex = null;
        removeClass(btn, 'bgc_amber');
      }
    });
  });
}

/******************** size_check ********************/
var sizeModalOnBtn = document.getElementById('size_chk_btn');
var sizeModalCloseBtn = document.getElementById('modal_close_btn');
var sizeModal = document.querySelector('.size_chk_modal_ex');
var heightInput = document.getElementById('height_input');
var weightInput = document.getElementById('weight_input');
var numberInput = document.querySelectorAll('.only_number');
var noticeMent = document.querySelector('.notice_ment');
var sizeCalcBtn = document.getElementById('size_search_btn');
var sizeShow = document.querySelector('.show_txt');
modalEv();
function modalEv() {
  var modalState = false;
  sizeModalOnBtn.addEventListener('click', function () {
    if (!modalState) {
      modalState = true;
      addClass(sizeModal, 'block_on');
      setTimeout(function () {
        heightInput.focus();
      }, 10);
    }
  });
  sizeModalCloseBtn.addEventListener('click', function () {
    if (modalState) {
      modalState = false;
      removeClass(sizeModal, 'block_on');
      numberInput.forEach(function (input) {
        return valueChange(input, "");
      });
      removeClass(noticeMent, "block_on");
    }
  });
}
modalInputChk();
function modalInputChk() {
  var conditionRegex = /^\d+$/;
  var maxLength = 3;
  numberInput.forEach(function (input) {
    input.addEventListener('input', function () {
      if (!conditionRegex.test(input.value)) {
        input.value = "";
        addClass(noticeMent, "block_on");
        txtChange(noticeMent.children[0], "숫자만 입력 가능합니다.");
      } else {
        removeClass(noticeMent, "block_on");
      }
      if (input.value.length > maxLength) {
        input.value = input.value.substring(0, maxLength);
      }
    });
  });
}
sizeCalcBtn.addEventListener('click', function () {
  var cm = heightInput.value;
  var kg = weightInput.value;
  var condition = cm && kg;
  if (condition !== null && condition !== "" && condition !== undefined) {
    sizeCalc(cm, kg);
  } else {
    addClass(noticeMent, "block_on");
    txtChange(noticeMent.children[0], "유효한 입력값이 아닙니다.");
  }
});
function sizeCalc(height, weight) {
  var calc = weight / (height * 2) * 100;
  //22.8888이라고 가정하면 x100 -> 2288.88 -> 버림 2288 -> /100 -> 22.88;
  var bmi = Math.floor(calc * 100) / 100;
  if (bmi > 25 && bmi <= 35) {
    txtChange(sizeShow, "XL");
  } else if (bmi > 23 && bmi <= 25) {
    txtChange(sizeShow, "L");
  } else if (bmi > 18.5 && bmi <= 23) {
    txtChange(sizeShow, "M");
  } else if (bmi > 17.5 && bmi <= 18.5) {
    txtChange(sizeShow, "S");
  } else if (bmi > 14 && bmi <= 17.5) {
    txtChange(sizeShow, "XS");
  } else {
    txtChange(sizeShow, "없음");
  }
}

/******************** reveiw ********************/
var rviewCrtBtn = document.getElementById('review_create_btn');
var rviewArea = document.getElementById('review_create_area');
var rviewLengthView = document.getElementById('review_now_length');
var rviewTxtBox = document.getElementById('review_text_box');
var rviewCrtComplete = document.getElementById('create_complete');
var rviewListArea = document.getElementById('review_list');
var rviewPageArea = document.getElementById('review_page_list');
var rviewID = document.getElementById('review_user_id');
var rviewCounting = document.querySelector('.review_couting');
var rviewIDMinLength = rviewID.getAttribute('minlength');
var rviewIDMaxLength = rviewID.getAttribute('maxlength');
var rviewRatingLi = document.querySelectorAll('#review_rating_star > li');
var rviewRatingStar = document.querySelectorAll('#review_rating_star > li > i');
var rviewResetEl = document.querySelectorAll('.review_reset');
var rviewNoticeMent = document.getElementById('review_notice_ment');
var starSave = {
  nowRating: null,
  clickState: false
};
var starMaxCount = 5;
var brLength = 50;
var reviewInfo = {
  type: "review",
  liData: [],
  liWrapper: rviewListArea,
  liMaxView: 6,
  liTotalLength: rviewCounting,
  pageIdx: 0,
  pageWrapper: rviewPageArea
};

//object create 참조: https://leehwarang.github.io/docs/tech/constructor.html
function RviewObj(time, id) {
  var ratingIdx = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var reviewText = arguments.length > 3 ? arguments[3] : undefined;
  this.time = time;
  this.privacy = {
    id: id
  };
  this.ratingIdx = ratingIdx;
  this.reviewText = [reviewText];
}

//review_chk_btn
rviewClick();
function rviewClick() {
  var rviewChkState = false;
  rviewCrtBtn.addEventListener('click', function () {
    if (!rviewChkState) {
      rviewChkState = true;
      addClass(rviewArea, 'block_on');
      setTimeout(function () {
        rviewID.focus();
      }, 10);
    } else {
      rviewChkState = false;
      removeClass(rviewArea, 'block_on');
      rviewReset();
      txtChange(rviewLengthView, "0 \uC790");
    }
  });
}

//review_id_chk
rviewID.addEventListener('input', function () {
  lengthChk(rviewID, rviewNoticeMent);
});

//review_input_event
rviewTxtBox.addEventListener('input', function () {
  txtChange(rviewLengthView, "".concat(rviewTxtBox.value.length, " \uC790"));
  if (rviewNoticeMent.textContent.length > 0) {
    txtChange(rviewNoticeMent, "");
  }
});

//review_rating_click_event
rviewRatingLi.forEach(function (li, i) {
  return li.addEventListener('click', function () {
    ratingClick(i);
  });
});
function ratingClick(parentIdx) {
  if (parentIdx !== starSave.nowRating) {
    starSave.nowRating = parentIdx;
    starSave.clickState = true;
    for (var i = 0; i < starMaxCount; i++) {
      if (i <= starSave.nowRating) {
        changeClass(rviewRatingStar[i], ["far", "fas"]);
      } else {
        changeClass(rviewRatingStar[i], ["fas", "far"]);
      }
    }
  } else {
    starReset();
  }
}
//review_select_star_reset
function starReset() {
  starSave.nowRating = null;
  starSave.clickState = false;
  for (var i = 0; i < starMaxCount; i++) {
    changeClass(rviewRatingStar[i], ["fas", "far"]);
  }
}

//review_create_complete
rviewComplete();
function rviewComplete() {
  rviewCrtComplete.addEventListener('click', function () {
    var nowTxt = rviewTxtBox.value;
    var idCondition = rviewID.value.length >= rviewIDMinLength && rviewID.value.length <= rviewIDMaxLength;
    if (nowTxt !== null && nowTxt !== "" && nowTxt !== undefined && idCondition && starSave.clickState) {
      var property = [calcDate(), rviewID.value, starSave.nowRating, nowTxt];
      var resetEl = [rviewResetEl, rviewNoticeMent, rviewLengthView, rviewID];
      reviewInfo.liData.push(_construct(RviewObj, property));

      //리셋
      textReset.apply(void 0, resetEl);
      starReset();
      listMaker(reviewInfo, arrSlice(reviewInfo.pageIdx, reviewInfo));
      pageCreate(reviewInfo);
      reviewInfo.pageIdx = Math.floor(reviewInfo.liData.length / reviewInfo.liMaxView);
    } else if (!idCondition) {
      txtChange(rviewNoticeMent, "ID\uB97C \uC591\uC2DD\uC5D0 \uB9DE\uAC8C \uC791\uC131 \uD574\uC8FC\uC138\uC694.");
    } else if (!starSave.clickState) {
      txtChange(rviewNoticeMent, "\uB9AC\uBDF0 \uBCC4\uC810\uC744 \uC791\uC131 \uD574\uC8FC\uC138\uC694.");
    } else {
      txtChange(rviewNoticeMent, "\uB0B4\uC6A9\uC744 \uC785\uB825 \uD574\uC8FC\uC138\uC694.");
    }
  });
}

//view_star_create(표기용)
function starCreate(num) {
  var list = "";
  var receive = "";
  for (var i = 0; i < starMaxCount; i++) {
    if (i <= num) {
      list = " <li><i class=\"fas fa-star\"></i></li>";
    } else {
      list = " <li><i class=\"far fa-star\"></i></li>";
    }
    receive += list;
  }
  return receive;
}
/******************** qna ********************/
var qnaCraateBtn = document.getElementById('question_btn');
var qnaArea = document.getElementById('create_question');
var qnaTxtBox = document.getElementById('create_question_ment');
var qnaCrtComplete = document.getElementById('qna_create');
var qnaListArea = document.getElementById('qna_list');
var qnaPageArea = document.getElementById('qna_page_list');
var qnaID = document.getElementById('qna_user_id');
var qnaCounting = document.querySelector('.qna_couting');
var qnaIDMinLength = qnaID.getAttribute('minlength');
var qnaIDMaxLength = qnaID.getAttribute('maxlength');
var qnaLengthView = document.getElementById('qna_now_length');
var qnaResetEl = document.querySelectorAll('.qna_reset');
var qnaNoticeMent = document.getElementById('qna_notice_ment');
var qnaInfo = {
  type: "qna",
  liData: [],
  liWrapper: qnaListArea,
  liMaxView: 6,
  liTotalLength: qnaCounting,
  pageIdx: 0,
  pageWrapper: qnaPageArea,
  managerName: "[CARHARTT] 관리자"
};

//object create 참조: https://leehwarang.github.io/docs/tech/constructor.html
function QnaObj(time, id) {
  var questionTxt = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
  this.time = time;
  this.privacy = {
    id: id
  };
  this.answerInfo = {
    answerClick: false,
    answerState: false,
    answerMentClick: false,
    answerTxt: [""]
  };
  this.questionTxt = [questionTxt];
}
//review_chk_btn
qnaClick();
function qnaClick() {
  var qnaChkState = false;
  qnaCraateBtn.addEventListener('click', function () {
    if (!qnaChkState) {
      qnaChkState = true;
      addClass(qnaArea, 'block_on');
      setTimeout(function () {
        qnaID.focus();
      }, 10);
    } else {
      qnaChkState = false;
      removeClass(qnaArea, 'block_on');
      txtChange(qnaLengthView, "0 \uC790");
    }
  });
}

//qna_id_chk
qnaID.addEventListener('input', function () {
  lengthChk(qnaID, qnaNoticeMent);
});

//review_input_event
qnaTxtBox.addEventListener('input', function () {
  txtChange(qnaLengthView, "".concat(qnaTxtBox.value.length, " \uC790"));
  if (qnaNoticeMent.textContent.length > 0) {
    txtChange(qnaNoticeMent, "");
  }
});

//qna_create_complete
qnaComplete();
function qnaComplete() {
  qnaCrtComplete.addEventListener('click', function () {
    var nowTxt = qnaTxtBox.value;
    var idCondition = qnaID.value.length >= qnaIDMinLength && qnaID.value.length <= qnaIDMaxLength;
    if (nowTxt !== null && nowTxt !== "" && nowTxt !== undefined && idCondition) {
      var property = [calcDate(), qnaID.value, nowTxt];
      var resetEl = [qnaResetEl, qnaNoticeMent, qnaLengthView, qnaID];
      qnaInfo.liData.push(_construct(QnaObj, property));

      //리셋
      textReset.apply(void 0, resetEl);
      listMaker(qnaInfo, arrSlice(qnaInfo.pageIdx, qnaInfo));
      pageCreate(qnaInfo);
      qnaInfo.pageIdx = Math.floor(qnaInfo.liData.length / qnaInfo.liMaxView);
    } else if (!idCondition) {
      txtChange(qnaNoticeMent, "ID\uB97C \uC591\uC2DD\uC5D0 \uB9DE\uAC8C \uC791\uC131 \uD574\uC8FC\uC138\uC694.");
    } else {
      txtChange(qnaNoticeMent, "\uB0B4\uC6A9\uC744 \uC785\uB825 \uD574\uC8FC\uC138\uC694.");
    }
  });
}
function handleAnswer(obj) {
  //관리자 답변 작성 Area ON/OFF BTN
  var answerChk = obj.liWrapper.querySelectorAll('.comment_click_on');
  //관리자 답변 작성 Area
  var answerInputArea = obj.liWrapper.querySelectorAll('.ment_input');
  //관리자 답변 작성 Area안 텍스트 박스
  var answerTxtArea = obj.liWrapper.querySelectorAll('.answer_text_box');
  //관리자 답변 작성 완료 BTN
  var answerBtn = obj.liWrapper.querySelectorAll('.answer_create');
  //관리자 멘트 AREA 보기 ON/OFF BTN
  var answerMentOnBtn = obj.liWrapper.querySelectorAll('.manager_ment_on');

  //관리자 멘트 AREA
  var answerMentArea = obj.liWrapper.querySelectorAll('.ment_area');
  //관리자 멘트 TEXT_VIEW
  var answerMentTxt = obj.liWrapper.querySelectorAll('.anmswer_ment');
  //관리자가 답변을 작성 하였는지 안하였는지 표시
  var answerStateView = obj.liWrapper.querySelectorAll('.answer_state');

  //답변 작성 창 ON/OFF
  answerChk.forEach(function (chkBtn, i) {
    chkBtn.addEventListener('click', function () {
      if (!obj.liData[i].answerInfo.answerClick && !obj.liData[i].answerInfo.answerState) {
        obj.liData[i].answerInfo.answerClick = true;
        addClass(answerInputArea[i], 'block_on');
      } else {
        obj.liData[i].answerInfo.answerClick = false;
        removeClass(answerInputArea[i], 'block_on');
      }
    });
  });

  //답변 작성 완료
  answerBtn.forEach(function (comBtn, i) {
    comBtn.addEventListener('click', function (e) {
      e.preventDefault();
      if (answerTxtArea[i].value !== undefined && answerTxtArea[i].value !== "" && answerTxtArea[i].value !== "") {
        //답변 달리면 작성창 안뜨게
        obj.liData[i].answerInfo.answerState = true;
        obj.liData[i].answerInfo.answerTxt[0] = answerTxtArea[i].value;
        txtChange(answerMentTxt[i], answerTxtArea[i].value);
        txtChange(answerStateView[i], "답변완료");

        //멘트 열람 버튼
        addClass(answerMentOnBtn[i], 'block_on');
        //답변 텍스트박스 제거
        removeClass(answerInputArea[i], 'block_on');
      } else {
        alert("관리자 답변을 작성 해주세요!");
      }
    });
  });

  //답변 보기 ON/OFF
  answerMentOnBtn.forEach(function (openBtn, i) {
    openBtn.addEventListener('click', function () {
      if (!obj.liData[i].answerInfo.answerMentClick) {
        obj.liData[i].answerInfo.answerMentClick = true;
        addClass(answerMentArea[i], 'flex_on');
      } else {
        obj.liData[i].answerInfo.answerMentClick = false;
        removeClass(answerMentArea[i], 'flex_on');
      }
    });
  });
}

/******************** common ********************/
//list_create
function listMaker(obj, arr) {
  var receive = "";
  if (obj.type === "review") {
    if (arr.length === 0) {
      obj.liWrapper.innerHTML = "\n                <div class=\"not_ment\">\n                    \uD604\uC7AC \uC791\uC131\uB41C \uB9AC\uBDF0\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.\n                </div>\n            ";
    } else {
      for (var i = 0; i < arr.length; i++) {
        var list = "\n                        <li class=\"review\">\n                            <p class=\"review_ment\">\n                                ".concat(arr[i].reviewText[0].length > brLength ? lineBrake(arr[i].reviewText[0]) : arr[i].reviewText[0], "\n                                <span class=\"delete\">\n                                    <i class=\"fas fa-window-close\"></i>\n                                </span>\n                            </p>\n                            <div class=\"right_info\">\n                                <ul class=\"rating_star\">").concat(starCreate(arr[i].ratingIdx), "</ul>\n                                <span class=\"review_date date\">").concat(arr[i].time, "</span>\n                                <span class=\"review_id\">").concat(idHide(arr[i].privacy.id), "</span>\n                            </div>\n                        </li>\n                        ");
        receive += list;
      }
      obj.liWrapper.innerHTML = receive;
      handleDelete(obj);
    }
    txtChange(obj.liTotalLength, "".concat(obj.liData.length));
  }
  if (obj.type === "qna") {
    if (arr.length === 0) {
      obj.liWrapper.innerHTML = "\n                <div class=\"qna_not_ment\">\n                    \uD604\uC7AC \uC791\uC131\uB41C QNA\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.\n                </div>\n            ";
    } else {
      for (var _i = 0; _i < arr.length; _i++) {
        var _list = "\n                        <li class=\"question_list\">\n                            <div class=\"question_box\">\n                                <div class=\"left_box\">\n                                    <span class=\"answer_state\">".concat(arr[_i].answerInfo.answerState ? "답변완료" : "미처리", "</span>\n                                    <p class=\"qna_ment\">\n                                        ").concat(arr[_i].questionTxt[0].length > brLength ? lineBrake(arr[_i].questionTxt[0]) : arr[_i].questionTxt[0], "\n                                        <span class=\"qna_list_delete delete\">\n                                            <i class=\"fas fa-window-close\"></i>\n                                        </span>\n                                        <span class=\"").concat(arr[_i].answerInfo.answerState ? "manager_ment_on block_on" : "manager_ment_on", "\">\n                                            <i class=\"fas fa-level-down-alt\"></i>\n                                        </span>\n                                    </p>\n                                </div>\n                                <div class=\"right_box\">\n                                    <span class=\"qna_date date\">").concat(arr[_i].time, "</span>\n                                    <span class=\"qna_id list_view_id\">").concat(idHide(arr[_i].privacy.id), "</span>\n                                    <span class=\"comment_click_on\">\n                                        <i class=\"fas fa-user-tag\"></i>\n                                    </span>\n                                </div>\n                            </div>\n                            <div class=\"answer_box\">\n                                <div class=\"ment_input\">\n                                    <h2>").concat(obj.managerName, "</h2>\n                                    <textarea class=\"answer_text_box\" cols=\"10\" rows=\"4\" maxlength=\"200\"></textarea>\n                                    <button class=\"answer_create blue_btn\">\n                                        \uB2F5\uBCC0\uD558\uAE30\n                                    </button>\n                                </div>\n                                <div class=\"").concat(arr[_i].answerInfo.answerMentClick ? "ment_area flex_on" : "ment_area", "\">\n                                    <span class=\"answer\">\uB2F5\uBCC0</span>\n                                    <div class=\"guide_ment_area\">\n                                        <p class=\"spot\">").concat(obj.managerName, "</p>\n                                        <p class=\"anmswer_ment\">\n                                            ").concat(arr[_i].answerInfo.answerTxt, "\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                        </li>\n                        ");
        receive += _list;
      }
      obj.liWrapper.innerHTML = receive;
      handleDelete(obj);
      handleAnswer(obj);
    }
    txtChange(obj.liTotalLength, "".concat(obj.liData.length));
  }
}

//text_list_reset;
function textReset(valElements, resetTxt01, resetTxt02, focusEl) {
  valElements.forEach(function (valEl) {
    return valueChange(valEl, "");
  });
  txtChange(resetTxt01, "");
  txtChange(resetTxt02, "0 \uC790");
  focusEl.focus();
}
function lengthChk(myInput, noticeBox) {
  var maxLength = parseInt(myInput.getAttribute('maxlength'), 10);
  if (myInput.value.length > maxLength) {
    myInput.value = myInput.value.substring(0, maxLength);
  }
  if (noticeBox.textContent.length > 0) {
    txtChange(noticeBox, "");
  }
}
//list_slice
function arrSlice(index, obj) {
  var first = index * obj.liMaxView;
  var last = first + obj.liMaxView;
  var slice = obj.liData.slice(first, last);
  return slice;
}
//page_create
function pageCreate(obj) {
  var list = "";
  for (var i = 0; i <= obj.pageIdx; i++) {
    list += "<li class=\"".concat(i === obj.pageIdx ? "page_on" : "", "\">").concat(i + 1, "</li>");
  }
  obj.pageWrapper.innerHTML = list;
  if (obj.liData.length === 0) {
    addClass(obj.pageWrapper, 'none_on');
  } else {
    removeClass(obj.pageWrapper, 'none_on');
  }
  pageControl(obj);
}
//page_click_ev
function pageControl(obj) {
  var page = obj.pageWrapper.querySelectorAll('li');
  page.forEach(function (li, i) {
    li.addEventListener('click', function () {
      for (var j = 0; j < page.length; j++) {
        removeClass(page[j], 'page_on');
      }
      addClass(li, 'page_on');
      listMaker(obj, arrSlice(i, obj));
    });
  });
}
function handleDelete(obj) {
  var deleteBtn = obj.liWrapper.querySelectorAll('.delete');
  deleteBtn.forEach(function (btn, idx) {
    btn.addEventListener('click', function () {
      obj.liData.splice(idx, 1);
      obj.pageIdx = Math.floor((obj.liData.length - 1) / obj.liMaxView);
      if (obj.pageIdx < 0) {
        obj.pageIdx = 0;
      }
      listMaker(obj, arrSlice(obj.pageIdx, obj));
      pageCreate(obj);
    });
  });
}
function lineBrake(str) {
  //라인 나누기, 
  //1. 나누고자하는 갯수 구하기.
  //2. str.length가 나누고자하는 갯수 넘으면, 나누기로 몫만큼 br주면 될듯
  var result = "";
  var repeat = Math.floor(str.length / brLength);
  for (var i = 0; i < repeat; i++) {
    result += str.substring(i * brLength, (i + 1) * brLength) + "<br />";
  }
  result += str.substring(repeat * brLength, repeat.length); //남은 찌꺼기부분 더해주기

  return result;
}

//date_calc
function calcDate() {
  var newDate = new Date();
  var nowYear = newDate.getFullYear();
  var nowMonth = newDate.getMonth() + 1;
  var nowDay = newDate.getDate();
  var nowHours = newDate.getHours();
  var nowMinutes = newDate.getMinutes();
  var nowSeconds = newDate.getSeconds();
  function numChange(num) {
    return num < 10 ? "0".concat(num) : num;
  }
  var result = "".concat(nowYear, "-").concat(numChange(nowMonth), "-").concat(numChange(nowDay), "/").concat(numChange(nowHours), ":").concat(numChange(nowMinutes), ":").concat(numChange(nowSeconds));
  return result;
}
//id_hide (ex: aa****)
function idHide(txt) {
  var cut = txt.substring(0, 2);
  var hide = '*'.repeat(txt.length - cut.length);
  return cut + hide;
}
function valueChange(el) {
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  el.value = value;
}
function txtChange(el) {
  var txt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  el.textContent = txt;
}
function addClass(el, ClassName) {
  el.classList.add(ClassName);
}
function removeClass(el, ClassName) {
  el.classList.remove(ClassName);
}
function changeClass(el) {
  var _el$classList;
  var arr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  (_el$classList = el.classList).replace.apply(_el$classList, _toConsumableArray(arr));
}
},{"./data.js":"js/data.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54758" + '/');
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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/detail_product_list.js"], null)
//# sourceMappingURL=/detail_product_list.266b5310.js.map