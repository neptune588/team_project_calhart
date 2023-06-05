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
  propertyNumber: 1,
  nameEng: 'LEAGUE JACKET',
  nameKor: '리그 자켓 블루',
  etc: 'BLUE',
  productNumber: 'CA22FWJAJL00026001',
  price: '₩ 263,000'
}, {
  propertyNumber: 2,
  nameEng: 'LEAGUE JACKET',
  nameKor: '리그 자켓 펜스 와이어',
  etc: 'FENCE WIRE',
  productNumber: 'CA22FWJAJL10290001',
  price: '₩ 263,000'
}, {
  propertyNumber: 3,
  nameEng: 'MONTANA BLAZER',
  nameKor: '몬타나 블레이저 시위드',
  etc: 'SEAWEED',
  productNumber: 'CA22FWJAJL10066001',
  price: '₩ 243,000'
}, {
  propertyNumber: 4,
  nameEng: 'S/S MIRAGE SHIRT',
  nameKor: '반팔 미라지 셔츠 미라지 프린트, 프로스티드 블루',
  etc: 'MIRAGE PRINT, FROSTED BLUE',
  productNumber: 'CA22SSSHSS09401001',
  price: '₩ 135,000'
}];
exports.mdsProductList = mdsProductList;
var sub_page_product_list = [
/* 	컬러,
	할인율,
	판매량,
	새로 나온것,
	품절된것인지, */

/***************** jaket ******************/
{
  propertyNumber: 1,
  productNameKor: "\uC54C\uB9C1\uD134 \uBCA0\uC2A4\uD2B8 \uC5D0\uC77C \uD5E4\uBE44 \uC2A4\uD1A4 \uC6CC\uC2DC",
  productModelName: "ALE HEAVY STONE WASH",
  productColor: "brown",
  productStyle: "jaket",
  price: 283000,
  imgSrc: ["./images/sub_page_img/CA22FWJAJH10144002/CA22FWJAJH10144002-1.jpg", "./images/sub_page_img/CA22FWJAJH10144002/CA22FWJAJH10144002-0.jpg"],
  isNew: true,
  isBest: true,
  isSales: true,
  isSalesRate: 40 / 100,
  // 곱하기 해주기
  isSalesRateValue: "40",
  isSoldOut: false,
  isGender: "male"
}, {
  propertyNumber: 2,
  productNameKor: "\uCF54\uC2A4\uD0C8 \uC790\uCF13 \uBE14\uB799/\uD654\uC774\uD2B8",
  productModelName: "COASTAL JACKET BLACK",
  productColor: "black",
  productStyle: "jaket",
  price: 248000,
  imgSrc: ["./images/sub_page_img/CA23SSJAJL00358002/CA23SSJAJL00358002-1.jpg", "./images/sub_page_img/CA23SSJAJL00358002/CA23SSJAJL00358002-0.jpg"],
  isNew: true,
  isBest: true,
  isSales: false,
  //isSalesRate: 1, 
  //isSalesRateValue: ``,
  isSoldOut: false,
  isGender: "male"
}, {
  propertyNumber: 3,
  productNameKor: "\uCF54\uC2A4\uD0C8 \uC790\uCF13 \uD654\uC774\uD2B8/\uBE14\uB799",
  productModelName: "COASTAL JACKET WHITE",
  productColor: "white",
  productStyle: "jaket",
  price: 248000,
  imgSrc: ["./images/sub_page_img/CA23SSJAJL00266002/CA23SSJAJL00266002-1.jpg", "./images/sub_page_img/CA23SSJAJL00266002/CA23SSJAJL00266002-0.jpg"],
  isNew: true,
  isBest: true,
  isSales: false,
  //isSalesRate: 1, 
  //isSalesRateValue: ``,
  isSoldOut: false,
  isGender: "male"
}, {
  propertyNumber: 4,
  productNameKor: "\uB9AC\uADF8 \uC790\uCF13 \uBE14\uB8E8",
  productModelName: "LEAGUE JACKET",
  productColor: "blue",
  productStyle: "jaket",
  price: 263000,
  imgSrc: ["./images/sub_page_img/CA22FWJAJL00026001/CA22FWJAJL00026001-1.jpg", "./images/sub_page_img/CA22FWJAJL00026001/CA22FWJAJL00026001-0.jpg"],
  isNew: true,
  isBest: false,
  isSales: true,
  isSalesRate: 40 / 100,
  // 곱하기 해주기
  isSalesRateValue: "40",
  isSoldOut: false,
  isGender: "male"
}, {
  propertyNumber: 5,
  productNameKor: "\uB808\uD130\uB9E8 \uC790\uCF13 \uBE14\uB799/\uBE0C\uB9AD",
  productModelName: "LETTERMAN JACKET",
  productColor: "black",
  productStyle: "jaket",
  price: 258000,
  imgSrc: ["./images/sub_page_img/CA22FWJAJL10171001/CA22FWJAJL10171001-1.jpg", "./images/sub_page_img/CA22FWJAJL10171001/CA22FWJAJL10171001-0.jpg"],
  isNew: true,
  isBest: false,
  isSales: true,
  isSalesRate: 40 / 100,
  // 곱하기 해주기
  isSalesRateValue: "40",
  isSoldOut: false,
  isGender: "male"
}, {
  propertyNumber: 6,
  productNameKor: "\uD2B8\uB808\uBC84 \uC790\uCF13 \uBE14\uB799/\uBE14\uB799",
  productModelName: "TREVOR JACKET",
  productColor: "black",
  productStyle: "jaket",
  price: 343000,
  imgSrc: ["./images/sub_page_img/CA22FWJAHS00285001/CA22FWJAHS00285001-1.jpg", "./images/sub_page_img/CA22FWJAHS00285001/CA22FWJAHS00285001-0.jpg"],
  isNew: true,
  isBest: false,
  isSales: true,
  isSalesRate: 40 / 100,
  // 곱하기 해주기
  isSalesRateValue: "40",
  isSoldOut: false,
  isGender: "male"
}, /***************** shirt ******************/
{
  propertyNumber: 7,
  productNameKor: "\uAE34\uD314 \uB9E4\uB514\uC2A8 \uC154\uCE20 \uD398\uC77C \uCFFC\uCE20/\uD654\uC774\uD2B8",
  productModelName: "L/S MADISON SHIRT",
  productColor: "pink",
  productStyle: "shirt",
  price: 113000,
  imgSrc: ["./images/sub_page_img/CA22SSSHLS09389001/CA22SSSHLS09389001-1.jpg", "./images/sub_page_img/CA22SSSHLS09389001/CA22SSSHLS09389001-0.jpg"],
  isNew: true,
  isBest: false,
  isSales: true,
  isSalesRate: 40 / 100,
  // 곱하기 해주기
  isSalesRateValue: "40",
  isSoldOut: false,
  isGender: "male"
}, {
  propertyNumber: 8,
  productNameKor: "\uB9E4\uB2DD \uC154\uCE20 \uC790\uCF13 \uB9E4\uB2DD \uCCB4\uD06C, \uB2E4\uD06C \uC5C4\uBC84/\uB808\uB354",
  productModelName: "MANNING SHIRT JAC",
  productColor: "brown",
  productStyle: "shirt",
  price: 278000,
  imgSrc: ["./images/sub_page_img/CA22FWJAJL10139001/CA22FWJAJL10139001-1.jpg", "./images/sub_page_img/CA22FWJAJL10139001/CA22FWJAJL10139001-0.jpg"],
  isNew: true,
  isBest: false,
  isSales: true,
  isSalesRate: 40 / 100,
  // 곱하기 해주기
  isSalesRateValue: "40",
  isSoldOut: false,
  isGender: "male"
}, {
  propertyNumber: 9,
  productNameKor: "\uBAAC\uD2B8\uB808\uC774 \uC154\uCE20 \uC790\uCF13 \uD0A4\uC704 \uC6D0 \uC6CC\uC2DC\uB4DC",
  productModelName: "MONTEREY SHIRT JAC",
  productColor: "green",
  productStyle: "shirt",
  price: 218000,
  imgSrc: ["./images/sub_page_img/CA23SSJAJL11129001/CA23SSJAJL11129001-1.jpg", "./images/sub_page_img/CA23SSJAJL11129001/CA23SSJAJL11129001-0.jpg"],
  isNew: true,
  isBest: false,
  isSales: false,
  //isSalesRate: 1, 
  //isSalesRateValue: ``,
  isSoldOut: false,
  isGender: "male"
}, {
  propertyNumber: 10,
  productNameKor: "\uBC18\uD314 \uD06C\uB798\uD504\uD2B8 \uC154\uCE20 \uC950\uB77C \uB9B0\uC2A4\uB4DC",
  productModelName: "S/S CRAFT SHIRT",
  productColor: "greenDown",
  productStyle: "shirt",
  price: 123000,
  imgSrc: ["./images/sub_page_img/CA23SSSHSS11170001/CA23SSSHSS11170001-1.jpg", "./images/sub_page_img/CA23SSSHSS11170001/CA23SSSHSS11170001-0.jpg"],
  isNew: true,
  isBest: false,
  isSales: false,
  //isSalesRate: 1, 
  //isSalesRateValue: ``,
  isSoldOut: false,
  isGender: "male"
}, {
  propertyNumber: 11,
  productNameKor: "\uBC18\uD314 \uB378\uB808\uC774 \uC154\uCE20 \uC544\uB9D0\uD53C/\uC641\uC2A4",
  productModelName: "S/S DELRAY SHIRT",
  productColor: "blue",
  productStyle: "shirt",
  price: 118000,
  imgSrc: ["./images/sub_page_img/CA23SSSHSS11171001/CA23SSSHSS11171001-1.jpg", "./images/sub_page_img/CA23SSSHSS11171001/CA23SSSHSS11171001-0.jpg"],
  isNew: true,
  isBest: false,
  isSales: false,
  //isSalesRate: 1, 
  //isSalesRateValue: ``,
  isSoldOut: false,
  isGender: "male"
}, {
  propertyNumber: 12,
  productNameKor: "\uBC18\uD314 \uB378\uB808\uC774 \uC154\uCE20 \uD53C\uB2C9\uC2A4/\uC641\uC2A4",
  productModelName: "S/S DELRAY SHIRT",
  productColor: "orange",
  productStyle: "shirt",
  price: 118000,
  imgSrc: ["./images/sub_page_img/CA23SSSHSS11172001/CA23SSSHSS11172001-1.jpg", "./images/sub_page_img/CA23SSSHSS11172001/CA23SSSHSS11172001-0.jpg"],
  isNew: true,
  isBest: false,
  isSales: false,
  //isSalesRate: 1, 
  //isSalesRateValue: ``,
  isSoldOut: false,
  isGender: "male"
}, /***************** swater ******************/
{
  propertyNumber: 13,
  productNameKor: "\uCE7C\uD558\uD2B8 \uC2A4\uC6FB\uC154\uCE20 \uADF8\uB808\uC774 \uD5E4\uB354/\uBE14\uB799",
  productModelName: "CARHARTT SWEATSHIRT",
  productColor: "gray",
  productStyle: "sweater",
  price: 138000,
  imgSrc: ["./images/sub_page_img/CA23SSSWCR00991001/CA23SSSWCR00991001-1.jpg", "./images/sub_page_img/CA23SSSWCR00991001/CA23SSSWCR00991001-0.jpg"],
  isNew: false,
  isBest: false,
  isSales: false,
  //isSalesRate: 1, 
  //isSalesRateValue: ``,
  isSoldOut: false,
  isGender: "male"
}, {
  propertyNumber: 14,
  productNameKor: "\uCE7C\uD558\uD2B8 \uC2A4\uC6FB\uC154\uCE20 \uD2B8\uB9AC\uD558\uC6B0\uC2A4/\uD654\uC774\uD2B8",
  productModelName: "CARHARTT SWEATSHIRT",
  productColor: "greenDown",
  productStyle: "sweater",
  price: 138000,
  imgSrc: ["./images/sub_page_img/CA23SSSWCR06655001/CA23SSSWCR06655001-1.jpg", "./images/sub_page_img/CA23SSSWCR06655001/CA23SSSWCR06655001-0.jpg"],
  isNew: false,
  isBest: false,
  isSales: false,
  //isSalesRate: 1, 
  //isSalesRateValue: ``,
  isSoldOut: false,
  isGender: "male"
}, {
  propertyNumber: 15,
  productNameKor: "\uCE7C\uD558\uD2B8 \uC2A4\uC6FB\uC154\uCE20 \uB8E8\uD53C\uB108\uC2A4/\uD654\uC774\uD2B8",
  productModelName: "CARHARTT SWEATSHIRT",
  productColor: "purple",
  productStyle: "sweater",
  price: 138000,
  imgSrc: ["./images/sub_page_img/CA23SSSWCR11284001/CA23SSSWCR11284001-1.jpg", "./images/sub_page_img/CA23SSSWCR11284001/CA23SSSWCR11284001-0.jpg"],
  isNew: false,
  isBest: false,
  isSales: false,
  //isSalesRate: 1, 
  //isSalesRateValue: ``,
  isSoldOut: false,
  isGender: "male"
}, {
  propertyNumber: 16,
  productNameKor: "\uD6C4\uB514\uB4DC \uCE7C\uD558\uD2B8 \uC2A4\uC6FB\uC154\uCE20 \uD0A4\uC704/\uC2DC\uD2B8\uB860",
  productModelName: "HOODED CARHARTT SWEATSHIRT",
  productColor: "green",
  productStyle: "sweater",
  price: 148000,
  imgSrc: ["./images/sub_page_img/CA23SSSWCR11230001/CA23SSSWCR11230001-1.jpg", "./images/sub_page_img/CA23SSSWCR11230001/CA23SSSWCR11230001-0.jpg"],
  isNew: false,
  isBest: false,
  isSales: false,
  //isSalesRate: 1, 
  //isSalesRateValue: ``,
  isSoldOut: false,
  isGender: "male"
}, {
  propertyNumber: 17,
  productNameKor: "\uD6C4\uB514\uB4DC \uB85C\uCEE4 \uC2A4\uC6FB\uC154\uCE20 \uD53C\uB2C9\uC2A4/\uBE14\uB799",
  productModelName: "HOODED LOCKER SWEATSHIRT",
  productColor: "orange",
  productStyle: "sweater",
  price: 153000,
  imgSrc: ["./images/sub_page_img/CA23SSSWHO11200001/CA23SSSWHO11200001-1.jpg", "./images/sub_page_img/CA23SSSWHO11200001/CA23SSSWHO11200001-0.jpg"],
  isNew: false,
  isBest: false,
  isSales: false,
  //isSalesRate: 1, 
  //isSalesRateValue: ``,
  isSoldOut: false,
  isGender: "male"
}, {
  propertyNumber: 18,
  productNameKor: "\uB12C\uC2A8 \uC2A4\uC6FB\uC154\uCE20 \uD53C\uC2E0 \uAC00\uBA3C\uD2B8 \uB2E4\uC774\uB4DC",
  productModelName: "NELSON SWEATSHIRT",
  productColor: "skyBlue",
  productStyle: "sweater",
  price: 163000,
  imgSrc: ["./images/sub_page_img/CA23SSSWCR11195001/CA23SSSWCR11195001-1.jpg", "./images/sub_page_img/CA23SSSWCR11195001/CA23SSSWCR11195001-0.jpg"],
  isNew: false,
  isBest: false,
  isSales: false,
  //isSalesRate: 1, 
  //isSalesRateValue: ``,
  isSoldOut: false,
  isGender: "male"
}, /***************** neat ******************/
{
  propertyNumber: 19,
  productNameKor: "\uC568\uBE44\uC5B8 \uAC00\uB514\uAC74 \uC7AC\uC2A4\uD37C \uD5E4\uB354",
  productModelName: "ALBION CARDIGAN",
  productColor: "brown",
  productStyle: "neat",
  price: 218000,
  imgSrc: ["./images/sub_page_img/CA22FWKNKC10174001/CA22FWKNKC10174001-1.jpg", "./images/sub_page_img/CA22FWKNKC10174001/CA22FWKNKC10174001-0.jpg"],
  isNew: false,
  isBest: false,
  isSales: true,
  isSalesRate: 40 / 100,
  // 곱하기 해주기
  isSalesRateValue: "40",
  isSoldOut: false,
  isGender: "male"
}, {
  propertyNumber: 20,
  productNameKor: "\uCF54\uC2A4\uD2B8 \uC2A4\uD14C\uC774\uD2B8 \uC2A4\uC6E8\uD130 \uD654\uC774\uD2B8",
  productModelName: "COAST STATE SWEATER",
  productColor: "gray",
  productStyle: "neat",
  price: 185000,
  imgSrc: ["./images/sub_page_img/CA23SSKNKP00040001/CA23SSKNKP00040001-1.jpg", "./images/sub_page_img/CA23SSKNKP00040001/CA23SSKNKP00040001-0.jpg"],
  isNew: false,
  isBest: false,
  isSales: false,
  //isSalesRate: 1, 
  //isSalesRateValue: ``,
  isSoldOut: false,
  isGender: "male"
}, {
  propertyNumber: 21,
  productNameKor: "\uB9E4\uB514\uC2A8 \uC2A4\uC6E8\uD130 \uC544\uC774\uC2DC \uC6CC\uD130/\uD504\uB85C\uC2A4\uD2F0\uB4DC \uBE14\uB8E8",
  productModelName: "MADISON SWEATER",
  productColor: "blue",
  productStyle: "neat",
  price: 95000,
  imgSrc: ["./images/sub_page_img/CA22SSKNKP09357001/CA22SSKNKP09357001-1.jpg", "./images/sub_page_img/CA22SSKNKP09357001/CA22SSKNKP09357001-0.jpg"],
  isNew: false,
  isBest: false,
  isSales: true,
  isSalesRate: 40 / 100,
  // 곱하기 해주기
  isSalesRateValue: "40",
  isSoldOut: false,
  isGender: "male"
}, {
  propertyNumber: 22,
  productNameKor: "\uC2A4\uD06C\uB9BD\uD2B8 \uB2C8\uD2B8 \uBCA0\uC2A4\uD2B8 \uB0B4\uCE04\uB7F4",
  productModelName: "SCRIPT KNIT VEST",
  productColor: "white",
  productStyle: "neat",
  price: 98000,
  imgSrc: ["./images/sub_page_img/CA22FWKNKP00104001/CA22FWKNKP00104001-1.jpg", "./images/sub_page_img/CA22FWKNKP00104001/CA22FWKNKP00104001-0.jpg"],
  isNew: false,
  isBest: false,
  isSales: true,
  isSalesRate: 40 / 100,
  // 곱하기 해주기
  isSalesRateValue: "40",
  isSoldOut: false,
  isGender: "male"
}, {
  propertyNumber: 23,
  productNameKor: "\uC54C\uB354\uC2A4 \uB2C8\uD2B8 \uBCA0\uC2A4\uD2B8 \uCE90\uB9AC\uBE44\uC548 \uC2DC",
  productModelName: "S/S ALDUS KNIT VEST",
  productColor: "skyBlue",
  productStyle: "neat",
  price: 113000,
  imgSrc: ["./images/sub_page_img/CA23SSKNKP11280001/CA23SSKNKP11280001-1.jpg", "./images/sub_page_img/CA23SSKNKP11280001/CA23SSKNKP11280001-0.jpg"],
  isNew: false,
  isBest: false,
  isSales: false,
  //isSalesRate: 1, 
  //isSalesRateValue: ``,
  isSoldOut: false,
  isGender: "male"
}, {
  propertyNumber: 24,
  productNameKor: "\uBC18\uD314 \uCF04\uC6E8\uC774 \uB2C8\uD2B8 \uD3F4\uB85C \uBE14\uB799",
  productModelName: "S/S KENWAY KNIT POLO",
  productColor: "black",
  productStyle: "neat",
  price: 148000,
  imgSrc: ["./images/sub_page_img/CA23SSKNKP00002002/CA23SSKNKP00002002-1.jpg", "./images/sub_page_img/CA23SSKNKP00002002/CA23SSKNKP00002002-0.jpg"],
  isNew: false,
  isBest: false,
  isSales: false,
  //isSalesRate: 1, 
  //isSalesRateValue: ``,
  isSoldOut: false,
  isGender: "male"
}, /***************** t-shirt ******************/
{
  propertyNumber: 25,
  productNameKor: "\uBC18\uD314 \uC140\uB9AC \uD2F0\uC154\uCE20 \uCE90\uB9AC\uBE44\uC548 \uC2DC",
  productModelName: "S/S CELLY T-SHIRT",
  productColor: "blue",
  productStyle: "TShirt",
  price: 85000,
  imgSrc: ["./images/sub_page_img/CA23SSTSSS11280001/CA23SSTSSS11280001-1.jpg", "./images/sub_page_img/CA23SSTSSS11280001/CA23SSTSSS11280001-0.jpg"],
  isNew: false,
  isBest: false,
  isSales: false,
  //isSalesRate: 1, 
  //isSalesRateValue: ``,
  isSoldOut: false,
  isGender: "male"
}, {
  propertyNumber: 26,
  productNameKor: "\uBC18\uD314 \uCF54\uC2A4\uD2B8 \uC2A4\uD14C\uC774\uD2B8 \uD2F0\uC154\uCE20 \uD654\uC774\uD2B8",
  productModelName: "S/S COAST STATE T-SHIRT",
  productColor: "white",
  productStyle: "TShirt",
  price: 98000,
  imgSrc: ["./images/sub_page_img/CA23SSTSSS00040026/CA23SSTSSS00040026-1.jpg", "./images/sub_page_img/CA23SSTSSS00040026/CA23SSTSSS00040026-0.jpg"],
  isNew: false,
  isBest: false,
  isSales: false,
  //isSalesRate: 1, 
  //isSalesRateValue: ``,
  isSoldOut: false,
  isGender: "male"
}, {
  propertyNumber: 27,
  productNameKor: "\uBC18\uD314 \uD788\uD2B8 \uC2A4\uD06C\uB9BD\uD2B8 \uD2F0\uC154\uCE20 \uC544\uB80C\uAC00",
  productModelName: "S/S HEAT SCRIPT T-SHIRT",
  productColor: "purple",
  productStyle: "TShirt",
  price: 75000,
  imgSrc: ["./images/sub_page_img/CA23SSTSSS11234002/CA23SSTSSS11234002-1.jpg", "./images/sub_page_img/CA23SSTSSS11234002/CA23SSTSSS11234002-0.jpg"],
  isNew: false,
  isBest: false,
  isSales: false,
  //isSalesRate: 1, 
  //isSalesRateValue: ``,
  isSoldOut: false,
  isGender: "male"
}, {
  propertyNumber: 28,
  productNameKor: "\uBC18\uD314 \uB9E4\uB274\uC5BC \uD2F0\uC154\uCE20 \uB2EC\uB9AC\uC544 \uAC00\uBA3C\uD2B8 \uB2E4\uC774\uB4DC",
  productModelName: "S/S MANUAL T-SHIRT",
  productColor: "pink",
  productStyle: "TShirt",
  price: 93000,
  imgSrc: ["./images/sub_page_img/CA23SSTSSS11190002/CA23SSTSSS11190002-1.jpg", "./images/sub_page_img/CA23SSTSSS11190002/CA23SSTSSS11190002-0.jpg"],
  isNew: false,
  isBest: false,
  isSales: false,
  //isSalesRate: 1, 
  //isSalesRateValue: ``,
  isSoldOut: false,
  isGender: "male"
}, {
  propertyNumber: 29,
  productNameKor: "\uBC18\uD314 \uB274 \uD504\uB860\uD2F0\uC5B4 \uD2F0\uC154\uCE20 \uBC84\uD314\uB85C",
  productModelName: "S/S NEW FRONTIER T-SHIRT",
  productColor: "brown",
  productStyle: "TShirt",
  price: 78000,
  imgSrc: ["./images/sub_page_img/CA23SSTSSS11110001/CA23SSTSSS11110001-1.jpg", "./images/sub_page_img/CA23SSTSSS11110001/CA23SSTSSS11110001-0.jpg"],
  isNew: false,
  isBest: false,
  isSales: false,
  //isSalesRate: 1, 
  //isSalesRateValue: ``,
  isSoldOut: false,
  isGender: "male"
}, {
  propertyNumber: 30,
  productNameKor: "\uBC18\uD314 \uD31C \uC2A4\uD06C\uB9BD\uD2B8 \uD2F0\uC154\uCE20 \uBE14\uB799",
  productModelName: "S/S PALM SCRIPT T-SHIRT",
  productColor: "black",
  productStyle: "TShirt",
  price: 75000,
  imgSrc: ["./images/sub_page_img/CA23SSTSSS00002018/CA23SSTSSS00002018-1.jpg", "./images/sub_page_img/CA23SSTSSS00002018/CA23SSTSSS00002018-0.jpg"],
  isNew: false,
  isBest: false,
  isSales: false,
  //isSalesRate: 1, 
  //isSalesRateValue: ``,
  isSoldOut: false,
  isGender: "male"
}];
exports.sub_page_product_list = sub_page_product_list;
var detail_page_produdct_list = [{
  propertyNumber: 1,
  productNameKor: "\uCF54\uC2A4\uD0C8 \uC790\uCF13 \uBE14\uB799/\uD654\uC774\uD2B8",
  productModelName: "COASTAL JACKET BLACK",
  productCode: "CA23SSJAJL00358002",
  price: 248000,
  imgSrc01: ["./images/detail_page_img/CA23SSJAJL00358002_thumnail/CA23SSJAJL00358002-01.jpg", "./images/detail_page_img/CA23SSJAJL00358002_thumnail/CA23SSJAJL00358002-02.jpg", "./images/detail_page_img/CA23SSJAJL00358002_thumnail/CA23SSJAJL00358002-03.jpg", "./images/detail_page_img/CA23SSJAJL00358002_thumnail/CA23SSJAJL00358002-04.jpg", "./images/detail_page_img/CA23SSJAJL00358002_thumnail/CA23SSJAJL00358002-05.jpg"],
  imgSrc02: ["./images/detail_page_img/CA23SSJAJL00358002_thumnail/CA23SSJAJL00358002-01_hover.jpg", "./images/detail_page_img/CA23SSJAJL00358002_thumnail/CA23SSJAJL00358002-02_hover.jpg", "./images/detail_page_img/CA23SSJAJL00358002_thumnail/CA23SSJAJL00358002-03_hover.jpg", "./images/detail_page_img/CA23SSJAJL00358002_thumnail/CA23SSJAJL00358002-04_hover.jpg", "./images/detail_page_img/CA23SSJAJL00358002_thumnail/CA23SSJAJL00358002-05_hover.jpg"]
}, {
  propertyNumber: 2,
  productNameKor: "\uCF54\uC2A4\uD0C8 \uC790\uCF13 \uD654\uC774\uD2B8/\uBE14\uB799",
  productModelName: "COASTAL JACKET WHITE",
  productCode: "CA23SSJAJL00266002",
  price: 248000,
  imgSrc01: ["./images/detail_page_img/CA23SSJAJL00266002_thumnail/CA23SSJAJL00266002-01.jpg", "./images/detail_page_img/CA23SSJAJL00266002_thumnail/CA23SSJAJL00266002-02.jpg", "./images/detail_page_img/CA23SSJAJL00266002_thumnail/CA23SSJAJL00266002-03.jpg", "./images/detail_page_img/CA23SSJAJL00266002_thumnail/CA23SSJAJL00266002-04.jpg", "./images/detail_page_img/CA23SSJAJL00266002_thumnail/CA23SSJAJL00266002-05.jpg"],
  imgSrc02: ["./images/detail_page_img/CA23SSJAJL00266002_thumnail/CA23SSJAJL00266002-01_hover.jpg", "./images/detail_page_img/CA23SSJAJL00266002_thumnail/CA23SSJAJL00266002-02_hover.jpg", "./images/detail_page_img/CA23SSJAJL00266002_thumnail/CA23SSJAJL00266002-03_hover.jpg", "./images/detail_page_img/CA23SSJAJL00266002_thumnail/CA23SSJAJL00266002-04_hover.jpg", "./images/detail_page_img/CA23SSJAJL00266002_thumnail/CA23SSJAJL00266002-05_hover.jpg"]
}];
exports.detail_page_produdct_list = detail_page_produdct_list;
},{}],"js/detail_product_list.js":[function(require,module,exports) {
"use strict";

var _data = require("./data.js");
/*************** view_thumnail ******************/
var viewContainer = document.querySelector('.view_thumnail');
var viewZoomBox = document.querySelectorAll('.view_thumnail > div');
var viewSmallThumnail = document.querySelectorAll('.img_box > img');
var viewSmallThumnailHover = document.querySelectorAll('.src_img > img');
var colorSelectBox = document.querySelectorAll('.color_select_box > a');
var sizeSelectBox = document.querySelectorAll('.size_list> li');

/*************** color_box선택시 바뀌는 글자 목록 ******************/
var changeCodeNum = document.querySelector('.code_number');
var changeProductName = document.querySelector('.product_name');
var changeProductMoney = document.querySelector('.product_money');
var changeProductPoint = document.querySelector('.product_point');
var _loop = function _loop(i) {
  //초기설정
  thumnailChange(viewSmallThumnail, 0, i, _data.detail_page_produdct_list, "imgSrc01");
  thumnailChange(viewSmallThumnailHover, 0, i, _data.detail_page_produdct_list, "imgSrc02");
  viewSmallThumnail[i].addEventListener('click', function () {
    viewZoomBox[0].style.backgroundImage = "url(".concat(viewSmallThumnail[i].src, ")");
    viewZoomBox[1].style.backgroundImage = "url(".concat(viewSmallThumnailHover[i].src, ")");
  });
};
for (var i = 0; i < viewSmallThumnail.length; i++) {
  _loop(i);
}

//color 선택 박스 클릭시
var _loop2 = function _loop2(_i) {
  colorSelectBox[_i].addEventListener('click', function () {
    //클릭한 컬러박스의 인덱스 번호에 맞게 첫 hover이미지변경
    viewZoomBox[0].style.backgroundImage = "url(".concat(_data.detail_page_produdct_list[_i].imgSrc01[0], ")");
    viewZoomBox[1].style.backgroundImage = "url(".concat(_data.detail_page_produdct_list[_i].imgSrc02[0], ")");

    //컬러 박스를 클릭했을시 작은 썸네일 변경
    for (var j = 0; j < _data.detail_page_produdct_list[_i].imgSrc01.length; j++) {
      thumnailChange(viewSmallThumnail, _i, j, _data.detail_page_produdct_list, "imgSrc01");
      thumnailChange(viewSmallThumnailHover, _i, j, _data.detail_page_produdct_list, "imgSrc02");
    }
    changeCodeNum.textContent = _data.detail_page_produdct_list[_i].productCode;
    changeProductName.textContent = _data.detail_page_produdct_list[_i].productNameKor;
    changeProductMoney.textContent = _data.detail_page_produdct_list[_i].price.toLocaleString();
    changeProductPoint.textContent = _data.detail_page_produdct_list[_i].price * 0.005;
  });
};
for (var _i = 0; _i < colorSelectBox.length; _i++) {
  _loop2(_i);
}
for (var _i2 = 0; _i2 < sizeSelectBox.length; _i2++) {
  sizeSelectBox[_i2].addEventListener('click', function () {
    for (var j = 0; j < sizeSelectBox.length; j++) {
      removeClass(sizeSelectBox[j], "bgc_amber");
    }
    addClass(this, "bgc_amber");
  });
}
viewContainer.addEventListener('mousemove', function (event) {
  var moveLocateX = event.offsetX;
  var moveLocateY = event.offsetY;
  viewZoomBox[1].style.backgroundPositionX = "".concat(moveLocateX * -2, "px");
  viewZoomBox[1].style.backgroundPositionY = "".concat(moveLocateY * -2, "px");
});
viewContainer.addEventListener('mouseout', function () {
  viewZoomBox[1].style.backgroundPositionX = "0";
  viewZoomBox[1].style.backgroundPositionY = "0";
});

//배열에서 src시 가져옴.
function thumnailChange(srcChangeArray, num01, num02, array, imgProperty) {
  srcChangeArray[num02].setAttribute('src', "".concat(array[num01][imgProperty][num02]));
  srcChangeArray[num02].setAttribute('alt', "".concat(array[num01][imgProperty][num02]));
}

/*************** review 관련  ******************/
var reviewCreateBtn = document.querySelector('.create_btn');
var reviewCreateArea = document.querySelector('.review_create');
var reviewCreateComBtn = document.getElementById('create_complete');
var reviewBox = document.getElementById('review_text_box');
var reviewLengthBox = document.querySelector('.review_now_length');
var reviewList = document.querySelector('.review_list');
var reviewCounting = document.querySelector('.review_couting');
//별점
var reviewRating = document.querySelector('.review_rating_star');

//한 페이지에 몇개 보여줄것인지
var pageViewLength = 6;
var pageSection = document.querySelector('.pagenation');
var pageUl = document.querySelector('.page_list');

//list 들어갈 배열 
var reviewContents = [];

//page count 받아오기
var countingObject = {
  pageCount: 0
};
var ratingObject = {
  ratingCount: 0
};
var starMaxLength = 5;
var starCreate = false;
var rvCrteBtnState = false;
reviewCreateBtn.addEventListener('click', function () {
  if (!rvCrteBtnState) {
    addClass(reviewCreateArea, "block_on");
    reviewBox.focus();
    //별점클릭 함수
    starClick();
    rvCrteBtnState = true;
  } else {
    removeClass(reviewCreateArea, "block_on");
    valueReset();
    starReset();
    rvCrteBtnState = false;
  }
});
reviewBox.addEventListener('input', function () {
  var reviewLengthReturn = reviewBox.value.length;
  reviewLengthBox.textContent = "".concat(reviewLengthReturn, " \uC790");
});
reviewCreateComBtn.addEventListener('click', function () {
  if (reviewBox.value !== null && reviewBox.value !== '' && reviewBox.value !== undefined && starCreate) {
    //클릭함수가 실행되었을때 들어가는 기능
    //1. 리스트 text
    //2. 리스트 별점
    //3. 리스트 생성날짜
    //4. 배열 길이에 따른 페이지 네이션 생성
    //5. 유효하게 생성되었다면 value reset 및 focus

    //리스트 생성에 필요한 정보를 넣기 위해 
    //클릭할때마다 새로운 객체 생성
    var listObject = {};

    //시간 계산
    var nowTime = calcDate();

    //만약 함수 밖에서 객체 선언을 해버리면, 
    //밑의 명령어로 인해 각 객체의 속성을 실시간으로 바꿔버리기 때문에
    //함수 스코프 내부에서 선언을 해준다.
    //데이터가 다 기입, 입력된상태에서 클릭이벤트가 일어나는것이기 때문에
    //클릭함수에서는 속성값만 기입해주면 되는것  
    listObject.text = reviewBox.value;
    listObject.ratingStar = ratingObject.ratingCount;
    listObject.date = nowTime;

    //배열 push
    reviewContents.push(listObject);

    //문자열 알림 리셋
    valueReset();
    reviewBox.focus();

    //데이터를 기반으로 페이지와 리스트 생성
    //리스트는 페이지 number를 기반으로 생성되기 때문에 
    //page함수부터 선언 
    pageCreate(reviewContents);
    var returnSlice = arraySlice(countingObject.pageCount, pageViewLength, reviewContents);
    createList(returnSlice);
    starReset();
    starCreate = false;
  } else if (!starCreate) {
    console.log('리뷰 별점을 남겨주세요!');
  } else {
    console.log('공백은 안됩니다.');
  }
});

//별점 클릭했을때 
function starClick() {
  var reviewStar = document.querySelectorAll('.review_rating_star > li');
  var _loop3 = function _loop3(_i3) {
    reviewStar[_i3].addEventListener('click', function () {
      //i값 받아와서 내가 클릭한 i만큼 별 채워지게 하기
      ratingObject.ratingCount = _i3 + 1;
      reviewRating.innerHTML = "";
      var receive = "";

      //채워지는 별은 i값 받아온만큼 즉, 2번쨰(인덱스 1) 클릭하면
      //2까지 별이 채워지고, 그 나머지 부분은 배경없는 별(5 - 2)
      for (var j = 0; j < ratingObject.ratingCount; j++) {
        var list01 = "\n                        <li><i class=\"fas fa-star\"></i></li>\n                    ";
        receive += list01;
      }
      for (var _j = 0; _j < starMaxLength - ratingObject.ratingCount; _j++) {
        var list02 = "\n                        <li><i class=\"far fa-star\"></i></li>\n                    ";
        receive += list02;
      }
      reviewRating.innerHTML = receive;
      starCreate = true;
      starClick();
    });
  };
  for (var _i3 = 0; _i3 < reviewStar.length; _i3++) {
    _loop3(_i3);
  }
}
function starReset() {
  reviewRating.innerHTML = "";
  var receive = "";
  for (var _i4 = 0; _i4 < starMaxLength; _i4++) {
    var list = "\n                <li><i class=\"far fa-star\"></i></li>\n            ";
    receive += list;
  }
  reviewRating.innerHTML = receive;
  starClick();
}

//별점등록 함수
function starWrite(arrayInnerObject, property) {
  var recieve = "";
  for (var _i5 = 0; _i5 < arrayInnerObject[property]; _i5++) {
    var list01 = "\n                <i class=\"fas fa-star\"></i>\n            ";
    recieve += list01;
  }
  for (var _i6 = 0; _i6 < starMaxLength - arrayInnerObject[property]; _i6++) {
    var list02 = "\n                <i class=\"far fa-star\"></i>\n            ";
    recieve += list02;
  }
  return recieve;
}

/*************** qna 관련  ******************/
var qusetionCreateStartBtn = document.querySelector('.question_btn');
var questionCreateArea = document.querySelector('.create_question');
var questionBox = document.getElementById('create_question_ment');
var questionLengthBox = document.querySelector('.qna_now_length');
var questionCreateComBtn = document.getElementById('qna_create');
var qnaUserID = document.getElementById('qna_user_id');
var qnaList = document.querySelector('.qna');
var qnaCounting = document.querySelector('.qna_couting');
var qnaContents = [];

//한 페이지에 몇개 보여줄것인지
var qnapageViewLength = 6;
var qnapageSection = document.querySelector('.qna_pagenation');
var qnapageUl = document.querySelector('.qna_page_list');

//page count 받아오기
var qnaCountingObject = {
  qnaPageCount: 0
};
questionCreateComBtn.addEventListener('click', function () {
  var IDvalue = qnaUserID.value;
  var questionvalue = questionBox.value;
  if ((IDvalue && questionvalue) !== null && (IDvalue && questionvalue) !== '' && (IDvalue && questionvalue) !== undefined) {
    var qnalistObject = {};

    //시간 계산
    var nowTime = calcDate();
    qnalistObject.id = qnaUserID.value;
    qnalistObject.text = questionBox.value;
    qnalistObject.date = nowTime;

    //배열 push
    qnaContents.push(qnalistObject);

    //문자열 알림 리셋
    valueReset();
    qnaContents.focus();
    pageCreate(qnalistObject);
    var returnSlice = arraySlice(countingObject.pageCount, qnapageViewLength, qnalistObject);
    createList(returnSlice);
    starReset();
    starCreate = false;
  } else if (!IDvalue) {
    console.log('아이디를 작성 해주세요.');
  } else {
    console.log('공백은 안됩니다.');
  }
});
questionBox.addEventListener('input', function () {
  var questionLengthReturn = questionBox.value.length;
  questionLengthBox.textContent = "".concat(questionLengthReturn, " \uC790");
});
var questionState = false;
qusetionCreateStartBtn.addEventListener('click', function () {
  if (!questionState) {
    addClass(questionCreateArea, 'block_on');
    questionState = true;
  } else {
    removeClass(questionCreateArea, 'block_on');
    questionState = false;
  }
});
function qnaCreate() {}

/*********************************** qna & review common  ********************************/
function calcDate() {
  var newDate = new Date();
  var nowYear = newDate.getFullYear();
  var nowMonth = newDate.getMonth() + 1;
  var nowDay = newDate.getDate();
  var nowHours = newDate.getHours();
  var nowMinutes = newDate.getMinutes();
  var nowSeconds = newDate.getSeconds();
  if (nowDay < 10) {
    nowDay = "0".concat(nowDay);
  }
  if (nowMonth < 10) {
    nowMonth = "0".concat(nowMonth);
  }
  if (nowHours < 10) {
    nowHours = "0".concat(nowHours);
  }
  if (nowMinutes < 10) {
    nowMinutes = "0".concat(nowMinutes);
  }
  if (nowSeconds < 10) {
    nowSeconds = "0".concat(nowSeconds);
  }
  var time = "".concat(nowYear, "-").concat(nowMonth, "-").concat(nowDay, "/").concat(nowHours, ":").concat(nowMinutes, ":").concat(nowSeconds);
  return time;
}
function createList(array) {
  reviewList.innerHTML = "";
  var receive = "";
  for (var _i7 = 0; _i7 < array.length; _i7++) {
    //6개 까지만 보여주게
    if (_i7 === pageViewLength) {
      break;
    }
    var list = "\n            <li class=\"review\">\n                <p class=\"review_ment\">\n                    ".concat(array[_i7].text, "\n                    <span id = \"").concat(indexCalc(_i7), "\" class = \"delete\">\n                        <i class=\"fas fa-window-close\"></i>\n                    </span>\n                </p>\n                <div class=\"right_info\">\n                    <span class=\"rating_star\">").concat(starWrite(array[_i7], "ratingStar"), "</span>\n                    <span class=\"review_date date\">").concat(array[_i7].date, "</span>\n                    <span class=\"review_id\">ju****</span>\n                </div>\n            </li>\n        ");
    receive += list;
  }
  reviewList.innerHTML = receive;
  if (reviewContents.length === 0) {
    reviewList.innerHTML = "\n        <div class=\"not_ment\">\n            \uD604\uC7AC \uC791\uC131\uB41C \uD6C4\uAE30\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.\n        </div>\n        ";
  }
  var deleteBtn = document.querySelectorAll('.delete');
  deleteBtn.forEach(function (btn) {
    btn.addEventListener('click', function () {
      listDelete(btn, reviewContents);
    });
  });

  //순서
  //1) id 원본 리스트배열에서 몇번째인지 알아야하는데 slice로 페이지에 맞게 배열을 잘라오기 떄문에 쉽지 않음. 
  //2) ex: 페이지수가 1이면 0,6 페이지가 2면 6,12만 잘라온 배열로 리스트생성하기 때문에 그냥 i로하면 id값이 0~6고정됨
  //3) 따라서 pageCount라는 변수를 만들어서 페이지수의 인덱스값을 받아온다.  
  //4) ex: mate.ceil(배열안의 length/6) 이기 때문에 무조건 최솟값은 1, 6개를 넘어가면 1씩 증가
  //5) 다만 인덱스값은 0 / 1/ 2 즉 표기는 +1을통해 1로해주고, 공식구할때는 인덱스 값으로 
  //6) 생성된 페이지의 인덱스 값과 한화면에 보이는 length 즉 6을 곱해주고 현재 인덱스를 더해주면 
  //7) 원본 배열에서 몇번째 인덱스인지 알수있게된다. 그리고 그 값을 리스트생성할떄 delete버튼에 id값으로 추가해주면 끝.

  //console.log(deleteBtn);
  //console.log(reviewContents);
}

function indexCalc(i) {
  return pageViewLength * countingObject.pageCount + i;
  // 1페이지
  // countingObject.pageCount = 0
  // pageViewLength = 6
  // i = 0
  // 6 * 0 + 0 -> 0번째 
  // 6 * 0 + 1 -> 1번째 
  // 6 * 0 + 2 -> 2번째 
  // 6 * 0 + 3 -> 3번째 
  // 6 * 0 + 4 -> 4번째 
  // 6 * 0 + 5 -> 5번째 

  // 2페이지
  // countingObject.pageCount = 1
  // pageViewLength = 6
  // i = 0
  // 6 * 1 + 0 -> 6번째 
  // 6 * 1 + 1 -> 7번째 
  // 6 * 1 + 2 -> 8번째 
  // 6 * 1 + 3 -> 9번째 
  // 6 * 1 + 4 -> 10번째 
  // 6 * 1 + 5 -> 11번째 

  // 3페이지
  // countingObject.pageCount = 2
  // pageViewLength = 6
  // i = 0
  // 6 * 2 + 0 -> 12번째 
  // 6 * 2 + 1 -> 13번째 
  // 6 * 2 + 2 -> 14번째 
  // 6 * 2 + 3 -> 15번째 
  // 6 * 2 + 4 -> 16번째 
  // 6 * 2 + 5 -> 17번째 
}

function listDelete(btn, array) {
  var idValue = btn.getAttribute("id");

  //리스트 배열에서 해당 id숫자를 가진 인덱스 객체 삭제
  array.splice(idValue, 1);

  //그리고 다시 리스트생성 및 페이지 생성
  pageCreate(reviewContents);
  var returnSlice = arraySlice(countingObject.pageCount, pageViewLength, reviewContents);
  createList(returnSlice);
}
function pageCreate(array) {
  // console.log('x눌렀음');
  if (array.length === 0) {
    addClass(pageSection, "none_on");
  } else {
    removeClass(pageSection, "none_on");
  }
  var receive = "";
  pageUl.innerHTML = "";
  for (var _i8 = 1; _i8 <= calc(array); _i8++) {
    var pageList = "\n            <li>\n                ".concat(_i8, "\n            </li>    \n        ");
    receive += pageList;
    countingObject.pageCount = _i8 - 1; //인덱스 계산위해 
  }

  pageUl.innerHTML = receive;
  //console.log(countingObject.pageCount);

  pageControl(array);
  //리뷰 몇개인지 알려줌.
  reviewCounting.textContent = array.length;
}
function pageControl(array) {
  // console.log('x눌렀음');
  var pageNumber = document.querySelectorAll('.page_list > li');
  var _loop4 = function _loop4(_i9) {
    pageNumber[_i9].addEventListener('click', function () {
      for (var j = 0; j < pageNumber.length; j++) {
        removeClass(pageNumber[j], "page_on");
      }
      addClass(pageNumber[_i9], "page_on");
      //이거는 클릭했을때 인덱스 번호 재계산 
      countingObject.pageCount = _i9;
      var returnSlice = arraySlice(_i9, pageViewLength, array);
      createList(returnSlice);
    });
  };
  for (var _i9 = 0; _i9 < pageNumber.length; _i9++) {
    _loop4(_i9);
  }
  //i값 받아와서 활성화된 페이지 표시
  // i = 1이면 1에 페이지온 클래스
  // i = 2이면 2에 페이지온 클래스
  if (pageNumber.length !== 0) {
    addClass(pageNumber[countingObject.pageCount], "page_on");
  }
}
function arraySlice(index01, index02, array) {
  var returnArray;
  var firstIndex = (index01 + 1) * index02 - index02;
  var lastIndex = firstIndex + index02;
  returnArray = array.slice(firstIndex, lastIndex);
  return returnArray;
}
function calc(array) {
  return Math.ceil(array.length / pageViewLength);
}
function valueReset() {
  reviewBox.value = "";
  reviewLengthBox.textContent = "".concat(0, " \uC790");
}

/*************** modal 관련  ******************/
var heightInput = document.getElementById('height_input');
var weightInput = document.getElementById('weight_input');
var numberInput = document.querySelectorAll('.only_number');
var sizeCalcBtn = document.querySelector('.siez_search_btn');
var noticeMent = document.querySelector('.notice_ment');
var showSize = document.querySelector('.show_box');
var modalOpenBtn = document.querySelector('.size_chk_btn');
var modalCloseBtn = document.querySelector('.close_btn');
var modalEx = document.querySelector('.size_chk_modal_ex');
var inputMaxLength = 3;
numberInput.forEach(function (inputBar) {
  inputBar.addEventListener('input', function () {
    var numberReg = /^\d+$/;

    //.length는 숫자에는 안먹힘 문자열에만 적용 
    //따라서 메서드써서 문자열로 변경해주거나, 템플릿스트링 표기법으로
    //console.log(`${inputBar.value.length}`, inputMaxLength);
    if (!numberReg.test("".concat(inputBar.value))) {
      inputBar.value = "";
      addClass(noticeMent, "block_on");
      noticeMent.children[0].textContent = "\uC22B\uC790\uB9CC \uC785\uB825 \uAC00\uB2A5\uD569\uB2C8\uB2E4.";
    } else {
      removeClass(noticeMent, "block_on");
    }
    if ("".concat(inputBar.value.length) > inputMaxLength) {
      //문자열의 0번째자리부터 3자리만 표기되게
      //console.log(`${inputBar.value}`.substring(0, inputMaxLength));

      //value안에 잘린값 대입해줘야함.
      inputBar.value = "".concat(inputBar.value).substring(0, inputMaxLength);
    }
  });
});
sizeCalcBtn.addEventListener('click', function () {
  var valueCheck01 = heightInput.value;
  var valueCheck02 = weightInput.value;
  if ((valueCheck01 && valueCheck02) !== null && (valueCheck01 && valueCheck02) !== undefined && (valueCheck01 && valueCheck02) !== "") {
    removeClass(noticeMent, "block_on");
    sizeCalc(valueCheck01, valueCheck02);
  } else {
    addClass(noticeMent, "block_on");
    noticeMent.children[0].textContent = "\uC720\uD6A8\uD55C \uC785\uB825\uAC12\uC774 \uC544\uB2D9\uB2C8\uB2E4.";
  }
});
modalOpenBtn.addEventListener('click', function () {
  addClass(modalEx, "block_on");
});
modalCloseBtn.addEventListener('click', function () {
  removeClass(modalEx, "block_on");
});
function sizeCalc(value01, value02) {
  var valueCalc01 = value02 / (value01 * 0.01 * 2);
  //소숫점 2자리까지 표기를 위해
  var valueCalc02 = Math.floor(valueCalc01 * 100) / 100;
  //console.log(valueCalc02);

  if (valueCalc02 < 17.5) {
    showSize.children[0].textContent = "XS";
  } else if (valueCalc02 > 17.5 && valueCalc02 < 18.5) {
    showSize.children[0].textContent = "S";
  } else if (valueCalc02 > 18.5 && valueCalc02 < 23) {
    showSize.children[0].textContent = "M";
  } else if (valueCalc02 > 23 && valueCalc02 < 25) {
    showSize.children[0].textContent = "L";
  } else if (valueCalc02 > 25 && valueCalc02 < 50) {
    showSize.children[0].textContent = "XL";
  } else {
    showSize.children[0].textContent = "\uC5C6\uC74C";
  }
}
//클래스 추가
function addClass(Element, ClassName) {
  Element.classList.add(ClassName);
}
//클래스 제거
function removeClass(Element, ClassName) {
  Element.classList.remove(ClassName);
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49944" + '/');
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