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
},{}],"js/sub_page_filter_data.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filterSections = void 0;
var filterSections = [{
  sectnId: "menu_list_section",
  sectnClass: ["menu_list_section_design", "check_section"],
  sectnIn: {
    titleInfo: {
      titleWrapClass: ["side_top"],
      titleStr: "TOP",
      titleClass: ["menu_title"],
      resetIcon: ["fas fa-sync"],
      resetClass: ["reset"],
      resetStr: "리셋하기"
    },
    liInfo: {
      ulId: "product_ment_list",
      ulClass: ["product_menu_list_design", "check_detect"],
      cmnLabelClass: ["chk_box"],
      cmnInputType: "checkbox",
      isSpan: false,
      innerLi: [{
        inputId: "jaket_cloth",
        inputValue: "jaket",
        labelStr: "자켓"
      }, {
        inputId: "sweater_cloth",
        inputValue: "sweater",
        labelStr: "스웨터"
      }, {
        inputId: "neat_cloth",
        inputValue: "neat",
        labelStr: "니트"
      }, {
        inputId: "shirt_cloth",
        inputValue: "shirt",
        labelStr: "셔츠"
      }, {
        inputId: "T_shirt_cloth",
        inputValue: "TShirt",
        labelStr: "티셔츠"
      }]
    }
  }
}, {
  sectnId: "price_select_section",
  sectnClass: ["price_select_design", "filter_section", "check_design", "check_section"],
  sectnIn: {
    titleInfo: {
      titleStr: "가격",
      titleClass: ["info_title"]
    },
    liInfo: {
      ulId: "price_list",
      ulClass: ["price_list_design", "check_detect"],
      isSpan: true,
      cmnSpanClass: ["chk_box"],
      cmnLabelClass: ["label_style"],
      cmnInputType: ["checkbox"],
      innerLi: [{
        inputId: "price_range_0_50000",
        inputValue: "0~50000",
        labelStr: "0 ~ 50,000원"
      }, {
        inputId: "price_range_50000_150000",
        inputValue: "50000~150000",
        labelStr: "50,000원 ~ 150,000원"
      }, {
        inputId: "price_range_150000_250000",
        inputValue: "150000~250000",
        labelStr: "150,000원 ~ 250,000원"
      }, {
        inputId: "price_range_250000_500000",
        inputValue: "250000~500000",
        labelStr: "250,000원 ~ 500,000원"
      }, {
        inputId: "price_500000_up",
        inputValue: "500000~",
        labelStr: "500,000원 이상"
      }]
    }
  }
}, {
  sectnId: "color_select_section",
  sectnClass: ["color_select_design", "filter_section", "check_design", "check_section"],
  sectnIn: {
    titleInfo: {
      titleStr: "색상",
      titleClass: ["info_title"]
    },
    liInfo: {
      ulId: "color_list",
      ulClass: ["color_list_design", "check_detect"],
      isSpan: false,
      cmnInputType: ["checkbox"],
      innerLi: [{
        inputId: "color_black",
        inputValue: "black",
        individualClass: ["black_box"]
      }, {
        inputId: "color_white",
        inputValue: "white",
        individualClass: ["white_box"]
      }, {
        inputId: "color_gray",
        inputValue: "gray",
        individualClass: ["gray_box"]
      }, {
        inputId: "color_brown",
        inputValue: "brown",
        individualClass: ["brown_box"]
      }, {
        inputId: "color_blue",
        inputValue: "blue",
        individualClass: ["blue_box"]
      }, {
        inputId: "color_sky_blue",
        inputValue: "skyBlue",
        individualClass: ["sky_blue_box"]
      }, {
        inputId: "color_green",
        inputValue: "green",
        individualClass: ["green_box"]
      }, {
        inputId: "color_green_down",
        inputValue: "greenDown",
        individualClass: ["green_down_box"]
      }, {
        inputId: "color_orange",
        inputValue: "orange",
        individualClass: ["orange_box"]
      }, {
        inputId: "color_pink",
        inputValue: "pink",
        individualClass: ["pink_box"]
      }, {
        inputId: "color_purple",
        inputValue: "purple",
        individualClass: ["purple_box"]
      }]
    }
  }
}, {
  sectnId: "sale_select_section",
  sectnClass: ["sale_select_design", "filter_section", "check_design", "check_section"],
  sectnIn: {
    titleInfo: {
      titleStr: "할인율",
      titleClass: ["info_title"]
    },
    liInfo: {
      ulId: "sale_list",
      ulClass: ["sale_list_design", "check_detect"],
      isSpan: true,
      cmnSpanClass: ["chk_box"],
      cmnLabelClass: ["label_style"],
      cmnInputType: ["checkbox"],
      innerLi: [{
        inputId: "sale_range_0_30",
        inputValue: "0~30",
        labelStr: "0% ~ 30%"
      }, {
        inputId: "sale_range_30_50",
        inputValue: "30~50",
        labelStr: "30% ~ 50%"
      }, {
        inputId: "sale_range_50_70",
        inputValue: "50~70",
        labelStr: "50% ~ 70%"
      }, {
        inputId: "sale_70_up",
        inputValue: "70~",
        labelStr: "70% 이상"
      }]
    }
  }
}];
exports.filterSections = filterSections;
},{}],"js/sub_product_list.js":[function(require,module,exports) {
"use strict";

var _data = require("./data");
var _sub_page_filter_data = require("./sub_page_filter_data");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/*************** filter_create ******************/
var sideFilter = document.querySelector('.side_filter');
filterMaker();
function filterMaker() {
  var contents = "";
  var receive = "";
  _sub_page_filter_data.filterSections.forEach(function (obj, index) {
    contents = "\n        <div id=\"".concat(obj.sectnId, "\" class=\"").concat(classReduce(obj.sectnClass), "\">\n            <h2 class=\"").concat(classReduce(obj.sectnIn.titleInfo.titleClass), "\">").concat(obj.sectnIn.titleInfo.titleStr, "</h2>\n            <ul id=\"").concat(obj.sectnIn.liInfo.ulId, "\" class=\"").concat(classReduce(obj.sectnIn.liInfo.ulClass), "\">\n                ").concat(filterLiCreate(obj.sectnIn.liInfo, index), "\n            </ul>\n        </div>\n        ");
    if (index === 0) {
      contents = "\n            <div id=\"".concat(obj.sectnId, "\" class=\"").concat(classReduce(obj.sectnClass), "\">\n                <div class=\"").concat(classReduce(obj.sectnIn.titleInfo.titleWrapClass), "\">\n                    <h2 class=\"").concat(classReduce(obj.sectnIn.titleInfo.titleClass), "\">").concat(obj.sectnIn.titleInfo.titleStr, "</h2>\n                    <div class=\"").concat(classReduce(obj.sectnIn.titleInfo.resetClass), "\"><i class=\"").concat(classReduce(obj.sectnIn.titleInfo.resetIcon), "\"></i>").concat(obj.sectnIn.titleInfo.resetStr, "</div>\n                </div>\n                <ul id=\"").concat(obj.sectnIn.liInfo.ulId, "\" class=\"").concat(classReduce(obj.sectnIn.liInfo.ulClass), "\">\n                    ").concat(filterLiCreate(obj.sectnIn.liInfo, index), "\n                </ul>\n            </div>\n            ");
    }
    receive += contents;
  });
  sideFilter.innerHTML = receive;
}
function classReduce(arr) {
  var total = arr.reduce(function (cur, next) {
    return cur + " " + next;
  });
  return total;
}
function filterLiCreate(parentObj, parentIndex) {
  var list = "";
  var receive = "";
  parentObj.innerLi.forEach(function (obj) {
    list = "\n        <li>\n            <input type=\"".concat(parentObj.cmnInputType, "\" id=").concat(obj.inputId, " value=\"").concat(obj.inputValue, "\" data-my-filter-index=").concat(parentIndex, ">\n            <label for=\"").concat(obj.inputId, "\" class=\"").concat(parentObj.cmnLabelClass ? classReduce(parentObj.cmnLabelClass) : classReduce(obj.individualClass), "\">").concat(obj.labelStr ? obj.labelStr : "", "</label>\n        </li>        \n        ");
    if (parentObj.isSpan) {
      list = "\n                <li>\n                    <label class=\"".concat(parentObj.cmnLabelClass ? classReduce(parentObj.cmnLabelClass) : classReduce(obj.individualClass), "\" for=\"").concat(obj.inputId, "\">\n                        <input type=\"").concat(parentObj.cmnInputType, "\" id=\"").concat(obj.inputId, "\" value=\"").concat(obj.inputValue, "\" data-my-filter-index=").concat(parentIndex, ">\n                        <span class=\"").concat(classReduce(parentObj.cmnSpanClass), "\"></span>\n                        ").concat(obj.labelStr, "\n                    </label>\n                </li>\n            ");
    }
    receive += list;
  });
  return receive;
}
var filterBox = document.querySelector('.filter_btn');
var filterSection = document.querySelectorAll('.filter_section');
var filterState = false;
filterBox.addEventListener('click', function () {
  if (!filterState) {
    addClass(filterBox, 'filter_on');
    filterSection.forEach(function (section) {
      return addClass(section, "block_on");
    });
    filterState = true;
  } else {
    removeClass(filterBox, 'filter_on');
    filterSection.forEach(function (section) {
      return removeClass(section, "block_on");
    });
    filterState = false;
  }
});

/*************** list_create ******************/
var pdWrapper = document.querySelector('.product_list_wrapper');
var pageSection = document.querySelector('.pagenation');
var pageNumberWrapper = document.querySelector('.page_number_wrapper');
var prevPage = document.getElementById('prev_btn');
var nextPage = document.getElementById('next_btn');
var firstPage = document.getElementById('first_prev_btn');
var lastPage = document.getElementById('last_next_btn');
var sortChk = document.getElementById('sort_chk');
var listArr = _toConsumableArray(_data.sub_page_product_list);
var viewLength = 12;
var listObj = {
  referenceArr: listArr,
  liWrapper: pdWrapper,
  maxView: viewLength,
  pageNumber: null,
  pageWrapper: pageNumberWrapper,
  pageSection: pageSection,
  paegLength: 0,
  curPageIndex: 0,
  sortState: {
    price: false,
    default: false
  }
};
handleSort(listObj);
prevPage.addEventListener('click', function () {
  return pagePrevClick(listObj);
});
nextPage.addEventListener('click', function () {
  return pageNextClick(listObj);
});
firstPage.addEventListener('click', function () {
  return pageFirstClick(listObj);
});
lastPage.addEventListener('click', function () {
  return pageLastClick(listObj);
});
function handleSort(obj) {
  var sortArr;
  if (!obj.sortState.default && !obj.sortState.price) {
    listCreate(obj, obj.referenceArr);
    pageCreate(obj);
  } else if (obj.sortState.default) {
    sortArr = _toConsumableArray(obj.referenceArr).sort(function (cur, next) {
      return cur.propertyNumber - next.propertyNumber;
    });
    obj.referenceArr = sortArr;
    listCreate(obj, obj.referenceArr);
    pageCreate(obj);
  } else if (obj.sortState.price) {
    sortArr = _toConsumableArray(obj.referenceArr).sort(function (cur, next) {
      if (cur.price < next.price) {
        return -1;
      } else if (cur.price === next.price) {
        return 0;
      }
    });
    obj.referenceArr = sortArr;
    listCreate(obj, obj.referenceArr);
    pageCreate(obj);
  }
  sortChk.addEventListener('change', function (e) {
    var nowValue = e.target.value;
    if (nowValue === "defalut" || nowValue === "latest") {
      stateReset(obj.sortState, false);
      obj.sortState.default = true;
      sortArr = _toConsumableArray(obj.referenceArr).sort(function (cur, next) {
        return cur.propertyNumber - next.propertyNumber;
      });
    }
    if (nowValue === "price") {
      stateReset(obj.sortState, false);
      obj.sortState.price = true;
      sortArr = _toConsumableArray(obj.referenceArr).sort(function (cur, next) {
        if (cur.price < next.price) {
          return -1;
        } else if (cur.price === next.price) {
          return 0;
        }
      });
    }
    obj.curPageIndex = 0;
    obj.referenceArr = sortArr;
    listCreate(obj, sortArr);
    pageCreate(obj);
  });
}
function stateReset(obj, bool) {
  for (var key in obj) {
    obj[key] = bool;
  }
}

//리스트를 만들때는 splice로 자른 arr도 리스트도 뽑아줘야하므로
//arr을 따로 파라미터로 받자. 
function listCreate(obj, arr) {
  var list01 = "";
  var list02 = "";
  var list03 = "";
  var receive = "";
  if (arr.length === 0) {
    obj.liWrapper.innerHTML = "\n            <p class=\"lengthNotice\">\n                <i class=\"far fa-times-circle\"></i>\n                \uD574\uB2F9\uD558\uB294 \uC0C1\uD488\uC774 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4!\n            </p>\n        ";
  } else {
    for (var i = 0; i < arr.length; i++) {
      if (i === obj.maxView) {
        break;
      }
      list01 = "\n                    <a class = \"img_link_01\" href = './detail_product_buy.html'>\n                        <img src = ".concat(arr[i].imgSrc[0], " alt = \"product_img_").concat(i, "\">\n                    </a>    \n                    <a class = \"img_link_02\" href = './detail_product_buy.html'>\n                        <img src = ").concat(arr[i].imgSrc[1], " alt = \"product_img_").concat(i, "_hover\">\n                    </a>\n                ");
      list02 = "\n                    <a class = \"product_name\" href = \"./detail_product_buy.html\">\n                        ".concat(arr[i].productNameKor, "\n                    </a>\n                    <a class = \"model_name\" href = \"./detail_product_buy.html\">\n                        ").concat(arr[i].productModelName, "\n                    </a>\n                    <span class = \"price_unit\">\u20A9</span>\n                    <span class = \"price\">").concat(arr[i].price.toLocaleString(), "</span>\n                ");
      if (arr[i].isNew) {
        list02 = "\n                    <span class=\"new\">NEW</span>\n                    ".concat(list02, "\n                ");
      }
      if (arr[i].isBest) {
        list02 = "\n                    <span class=\"best\">BEST</span>\n                    ".concat(list02, "\n                ");
      }
      list03 = "\n            <li>\n                ".concat(list01, "\n                ").concat(list02, "\n            </li>\n            ");
      receive += list03;
    }
    obj.liWrapper.innerHTML = receive;
  }
}
function pageCreate(obj) {
  //console.log(obj.referenceArr);
  var list = "";
  var receive = "";
  obj.paegLength = pageCalc(obj.referenceArr, obj.maxView);
  if (obj.referenceArr.length === 0) {
    addClass(obj.pageSection, 'none_on');
  } else {
    for (var i = 0; i < obj.paegLength; i++) {
      list = "<li>".concat(i + 1, "</li>");
      if (i === obj.curPageIndex) {
        list = "<li class=\"page_on\">".concat(i + 1, "</li>");
      }
      receive += list;
    }
    obj.pageWrapper.innerHTML = receive;
    removeClass(obj.pageSection, 'none_on');
  }
  pageControl(obj);
}
function pageControl(obj) {
  var pageBtn = obj.pageWrapper.querySelectorAll('li');
  //매번 객체에 바뀐 el 갱신
  //prev,next btn은 매번 새로 덮어씌워지는게 아니므로, 오브젝트에 항상 el을 갱신시켜주고
  //그 el에게 page_on클래스를 주자.

  obj.pageNumber = pageBtn;
  pageBtn.forEach(function (page, index) {
    page.addEventListener('click', function () {
      /*             first = 0 * 12 -> 0 
                  last = first( == 0) + 12
                    first = 1 * 12 -> 12
                  last = first( == 12) + 12 */

      for (var j = 0; j < pageBtn.length; j++) {
        removeClass(pageBtn[j], 'page_on');
      }
      addClass(page, 'page_on');
      obj.curPageIndex = index;
      listCreate(obj, arrSlice(obj.curPageIndex, obj));
      window.scrollTo({
        top: 0
      });
    });
  });
}
function pagePrevClick(obj) {
  obj.curPageIndex = obj.curPageIndex - 1;
  if (obj.curPageIndex < 0) {
    obj.curPageIndex = 0;
    alert('첫번쨰 페이지 입니다!');
    //console.log(obj.curPageIndex);
  } else {
    for (var j = 0; j < obj.pageNumber.length; j++) {
      removeClass(obj.pageNumber[j], 'page_on');
    }
    addClass(obj.pageNumber[obj.curPageIndex], 'page_on');
    listCreate(obj, arrSlice(obj.curPageIndex, obj));
    window.scrollTo({
      top: 0
    });
  }
}
function pageNextClick(obj) {
  obj.curPageIndex = obj.curPageIndex + 1;
  if (obj.curPageIndex >= obj.paegLength) {
    obj.curPageIndex = obj.paegLength - 1;
    alert('마지막 페이지 입니다!');
  } else {
    for (var j = 0; j < obj.pageNumber.length; j++) {
      removeClass(obj.pageNumber[j], 'page_on');
    }
    addClass(obj.pageNumber[obj.curPageIndex], 'page_on');
    listCreate(obj, arrSlice(obj.curPageIndex, obj));
    window.scrollTo({
      top: 0
    });
  }
}
function pageFirstClick(obj) {
  if (obj.curPageIndex === 0) {
    alert('첫번째 페이지 입니다!');
  } else {
    obj.curPageIndex = 0;
    obj.pageNumber.forEach(function (li) {
      return removeClass(li, 'page_on');
    });
    addClass(listObj.pageNumber[0], 'page_on');
    listCreate(obj, arrSlice(obj.curPageIndex, obj));
    window.scrollTo({
      top: 0
    });
  }
}
function pageLastClick(obj) {
  if (obj.curPageIndex === obj.pageNumber.length - 1) {
    alert('마지막 페이지 입니다!');
  } else {
    obj.curPageIndex = obj.pageNumber.length - 1;
    obj.pageNumber.forEach(function (li) {
      return removeClass(li, 'page_on');
    });
    addClass(obj.pageNumber[obj.curPageIndex], 'page_on');
    listCreate(obj, arrSlice(obj.curPageIndex, obj));
    window.scrollTo({
      top: 0
    });
  }
}
function pageCalc(arr, viewLength) {
  /*     let pageNum;
      if(arr.length % viewLength > 0) {
          pageNum = Math.floor((arr.length / viewLength)) + 1
      } else {
          pageNum = arr.length / viewLength
      } */

  var pageNum = Math.ceil(arr.length / viewLength);
  return pageNum;
}

/*************** filter_check ******************/
var filterChkSections = document.querySelectorAll('.check_section');
var filterChk = document.querySelectorAll('.check_section input');
var filtersArr = Array.from({
  length: filterChkSections.length
}, function () {
  return [];
});
//fill()로 빈배열을 만들엇을때는 인덱스0번에 있는 배열을 수정해도 전부 다 바뀌게 되더라.
//참조: https://velog.io/@teihong93/Array.from%EC%9D%84-%ED%86%B5%ED%95%9C-%EB%B0%B0%EC%97%B4%EC%9D%98-%EC%B4%88%EA%B8%B0%ED%99%94

//console.log(filterChkSections, filterChk, filtersArr);

filterChk.forEach(function (input) {
  input.addEventListener('click', function () {
    var nowIndex = input.dataset.myFilterIndex;
    if (input.checked) {
      filtersArr[nowIndex].push(input.value);
    } else {
      var valueIdx = filtersArr[nowIndex].indexOf(input.value);
      filtersArr[nowIndex].splice(valueIdx, 1);
    }

    //console.log(filtersArr);
    filterArr(listObj, filtersArr, listArr);
  });
});
function filterArr(obj, parentArr, immunArr) {
  //1) 첫 기준 배열은 바닐라 배열
  //2) 반복이 끝날때마다 기준 배열(반복 메서드가 돌아가는) 배열은 걸러진 배열로 바뀌어야 한다.
  //3) 즉 각 필터 조건 섹션을 전부 순회해야 하면서 1조건 순회하면 그 배열을 기준으로 2조건을 순회하고 ... 3.. 4.. 이런식으로 짜야하는데, length가 0이라는 말은 조건이 없다는거니까 그것들은 건너뛰게 코드를 짜자.

  var result = [];
  var changeArr = immunArr;
  var _loop = function _loop(i) {
    if (parentArr[i].length === 0) {
      return "continue";
    }
    result = changeArr.filter(function (obj) {
      //obj 1개를 검사 -> 해당 obj의 key값을 Object.keys를 통해 배열에 담고
      //some 메서드를 사용해서 검사한다. some은 조건에맞으면 boolean으로 반환되기 떄문에
      //true이면 filter에서 true에 속하는 obj를 배열에 담게되는것임.
      //한 key속성에 대하여 1차원 배열의 value가 순회된다. 있으면 true 없으면 false;
      //즉 value와 같으면 그 즉시 순회가 전부 멈추고 가장 상위의 obj가 배열에 속하게 됨.
      //ex key -> a obj["a"] === value 없으면 그 다음 key 그다음 key ... 
      return Object.keys(obj).some(function (key) {
        return parentArr[i].some(function (value) {
          return obj[key] === value;
        });
      });
    });
    changeArr = result;
  };
  for (var i = 0; i < parentArr.length; i++) {
    var _ret = _loop(i);
    if (_ret === "continue") continue;
  }
  obj.referenceArr = result;
  handleSort(obj);
}

//list_slice
function arrSlice(index, obj) {
  var first = index * obj.maxView;
  var last = first + obj.maxView;
  var slice = obj.referenceArr.slice(first, last);
  return slice;
}

/*************** chk_reset ******************/
var resetBtn = document.querySelector('.reset');
resetBtn.addEventListener('click', function () {
  stateReset(listObj.sortState, 'false');
  sortChk.value = "defalut";
  listObj.referenceArr = listArr;
  listObj.curPageIndex = 0;
  filterChk.forEach(function (input) {
    return input.checked = false;
  });
  handleSort(listObj);
});
function addClass(el, className) {
  el.classList.add(className);
}
function removeClass(el, className) {
  el.classList.remove(className);
}
},{"./data":"js/data.js","./sub_page_filter_data":"js/sub_page_filter_data.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52535" + '/');
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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/sub_product_list.js"], null)
//# sourceMappingURL=/sub_product_list.a2bacaba.js.map