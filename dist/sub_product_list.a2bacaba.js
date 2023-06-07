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
},{}],"js/sub_product_list.js":[function(require,module,exports) {
"use strict";

var _data = require("./data.js");
console.log("subpage loaded");

/*************** product_list ******************/
var productListWrapper = document.querySelector('.product_list_wrapper');
var pageSection = document.querySelector('.pagenation');
var pageNumber = document.querySelector('.page_number');
//변수 선언 해놓고 반복문돌려서 li생성되면 queryselectorall로 받기
var pageItemView = 12;
var topMenuStateObject = {
  allstate: false,
  jaketState: false,
  sweaterState: false,
  neatState: false,
  shirtState: false,
  TShirtState: false
};
var priceStateObject = {
  costRange050000: false,
  costRange50000150000: false,
  costRange150000250000: false,
  costRange250000500000: false,
  costRange500000: false
};

//전체페이지 기준으로, 1페이지 작성
//페이지 카운터 생성 함수 호출
listnPageCreate(_data.sub_page_product_list);
topMenuStateObject.allstate = true;
//console.log(topMenuStateObject.allstate);

//페이지 카운터 생성 함수, 필터의 조건을 누를떄마다 실행하게 계획, 무조건 인덱스0 즉 숫자1에는 불이 들어와야하니까
//페이지 생성 후 인덱스 0에 스타일클래스 부여
//필터의 조건들을 누를 시 매 빈 배열에 조건에 맞게 값을 가져올것이기 떄문에, 계산식도 함수로 지정하여 매개변수 이용
//calc(내가만든배열); 하면 계산식이 나오게 된다. 아이템갯수에 따라

var filterBox = document.querySelector('.filter_btn');
var filterSection = document.querySelectorAll('.filter_section');
var filterState = false;
filterBox.addEventListener('click', function () {
  if (!filterState) {
    addClass(filterBox, 'filter_on');
    filterSection.forEach(function (value) {
      addClass(value, "block_on");
    });
    filterState = true;
  } else {
    removeClass(filterBox, 'filter_on');
    filterSection.forEach(function (value) {
      removeClass(value, "block_on");
    });
    filterState = false;
  }
});
var topMenuList = document.querySelectorAll('.product_menu_list > li');
var _loop = function _loop(i) {
  topMenuList[i].addEventListener('click', function () {
    for (var j = 0; j < topMenuList.length; j++) {
      removeClass(topMenuList[j], 'clicked');
    }
    addClass(topMenuList[i], 'clicked');
    menuchecks01(i);
  });
};
for (var i = 0; i < topMenuList.length; i++) {
  _loop(i);
}
function menuchecks01(i) {
  switch (i) {
    case 0:
      {
        //버튼 상태변수 전부 초기화
        stateObjectReset(topMenuStateObject);
        //내가 클릭한것만 상태 true
        topMenuStateObject.allstate = true;

        //금액 chkbox가 체크되었을경우에만 조건을 걸어주면 된다. 체크가 해제되엇을경우는 밑에서 명령어 처리를 해놓았기 때문에 
        //chkbox가 선택되어있으면서 all탭이 선택됐을때 

        if (priceStateObject.costRange050000 && topMenuStateObject.allstate) {
          var returnArray = pricechkRetrunArray(_data.sub_page_product_list, "price", 0, 50000);
          listnPageCreate(returnArray);
        } else if (priceStateObject.costRange50000150000 && topMenuStateObject.allstate) {
          var _returnArray = pricechkRetrunArray(_data.sub_page_product_list, "price", 50000, 150000);
          listnPageCreate(_returnArray);
        } else if (priceStateObject.costRange150000250000 && topMenuStateObject.allstate) {
          var _returnArray2 = pricechkRetrunArray(_data.sub_page_product_list, "price", 150000, 250000);
          listnPageCreate(_returnArray2);
        } else if (priceStateObject.costRange250000500000 && topMenuStateObject.allstate) {
          var _returnArray3 = pricechkRetrunArray(_data.sub_page_product_list, "price", 250000, 500000);
          listnPageCreate(_returnArray3);
        } else if (priceStateObject.costRange500000 && topMenuStateObject.allstate) {
          var _returnArray4 = pricechkRetrunArray(_data.sub_page_product_list, "price", 500000);
          listnPageCreate(_returnArray4);
        } else if (topMenuStateObject.allstate) {
          listnPageCreate(_data.sub_page_product_list);
        }
        break;
      }
    case 1:
      {
        stateObjectReset(topMenuStateObject);
        topMenuStateObject.jaketState = true;

        //한번 더 걸러서 jakect인것에서 필터링해서 뽑아내야하기 때문에 
        if (priceStateObject.costRange050000 && topMenuStateObject.jaketState) {
          priceSaleCheck01(topMenuStateObject.jaketState, priceStateObject.costRange050000, "price", "jaket", 0, 50000);
        } else if (priceStateObject.costRange50000150000 && topMenuStateObject.jaketState) {
          priceSaleCheck01(topMenuStateObject.jaketState, priceStateObject.costRange50000150000, "price", "jaket", 50000, 150000);
        } else if (priceStateObject.costRange150000250000 && topMenuStateObject.jaketState) {
          priceSaleCheck01(topMenuStateObject.jaketState, priceStateObject.costRange150000250000, "price", "jaket", 150000, 250000);
        } else if (priceStateObject.costRange250000500000 && topMenuStateObject.jaketState) {
          priceSaleCheck01(topMenuStateObject.jaketState, priceStateObject.costRange250000500000, "price", "jaket", 250000, 500000);
        } else if (priceStateObject.costRange500000 && topMenuStateObject.jaketState) {
          priceSaleCheck01(topMenuStateObject.jaketState, priceStateObject.costRange500000, "price", "jaket", 500000);
        } else if (topMenuStateObject.jaketState) {
          var _returnArray5 = checkArray(_data.sub_page_product_list, "productStyle", "jaket");
          listnPageCreate(_returnArray5);
        }
        break;
      }
    case 2:
      {
        stateObjectReset(topMenuStateObject);
        topMenuStateObject.sweaterState = true;
        if (priceStateObject.costRange050000 && topMenuStateObject.sweaterState) {
          priceSaleCheck01(topMenuStateObject.sweaterState, priceStateObject.costRange050000, "price", "sweater", 0, 50000);
        } else if (priceStateObject.costRange50000150000 && topMenuStateObject.sweaterState) {
          priceSaleCheck01(topMenuStateObject.sweaterState, priceStateObject.costRange50000150000, "price", "sweater", 50000, 150000);
        } else if (priceStateObject.costRange150000250000 && topMenuStateObject.sweaterState) {
          priceSaleCheck01(topMenuStateObject.sweaterState, priceStateObject.costRange150000250000, "price", "sweater", 150000, 250000);
        } else if (priceStateObject.costRange250000500000 && topMenuStateObject.sweaterState) {
          priceSaleCheck01(topMenuStateObject.sweaterState, priceStateObject.costRange250000500000, "price", "sweater", 250000, 500000);
        } else if (priceStateObject.costRange500000 && topMenuStateObject.sweaterState) {
          priceSaleCheck01(topMenuStateObject.sweaterState, priceStateObject.costRange500000, "price", "sweater", 500000);
        } else if (topMenuStateObject.sweaterState) {
          var _returnArray6 = checkArray(_data.sub_page_product_list, "productStyle", "sweater");
          listnPageCreate(_returnArray6);
        }
        break;
      }
    case 3:
      {
        stateObjectReset(topMenuStateObject);
        topMenuStateObject.neatState = true;
        if (priceStateObject.costRange050000 && topMenuStateObject.neatState) {
          priceSaleCheck01(topMenuStateObject.neatState, priceStateObject.costRange050000, "price", "neat", 0, 50000);
        } else if (priceStateObject.costRange50000150000 && topMenuStateObject.neatState) {
          priceSaleCheck01(topMenuStateObject.neatState, priceStateObject.costRange50000150000, "price", "neat", 50000, 150000);
        } else if (priceStateObject.costRange150000250000 && topMenuStateObject.neatState) {
          priceSaleCheck01(topMenuStateObject.neatState, priceStateObject.costRange150000250000, "price", "neat", 150000, 250000);
        } else if (priceStateObject.costRange250000500000 && topMenuStateObject.neatState) {
          priceSaleCheck01(topMenuStateObject.neatState, priceStateObject.costRange250000500000, "price", "neat", 250000, 500000);
        } else if (priceStateObject.costRange500000 && topMenuStateObject.neatState) {
          priceSaleCheck01(topMenuStateObject.neatState, priceStateObject.costRange500000, "price", "neat", 500000);
        } else if (topMenuStateObject.neatState) {
          var _returnArray7 = checkArray(_data.sub_page_product_list, "productStyle", "neat");
          listnPageCreate(_returnArray7);
        }
        break;
      }
    case 4:
      {
        stateObjectReset(topMenuStateObject);
        topMenuStateObject.shirtState = true;
        if (priceStateObject.costRange050000 && topMenuStateObject.shirtState) {
          priceSaleCheck01(topMenuStateObject.shirtState, priceStateObject.costRange050000, "price", "shirt", 0, 50000);
        } else if (priceStateObject.costRange50000150000 && topMenuStateObject.shirtState) {
          priceSaleCheck01(topMenuStateObject.shirtState, priceStateObject.costRange50000150000, "price", "shirt", 50000, 150000);
        } else if (priceStateObject.costRange150000250000 && topMenuStateObject.shirtState) {
          priceSaleCheck01(topMenuStateObject.shirtState, priceStateObject.costRange150000250000, "price", "shirt", 150000, 250000);
        } else if (priceStateObject.costRange250000500000 && topMenuStateObject.shirtState) {
          priceSaleCheck01(topMenuStateObject.shirtState, priceStateObject.costRange250000500000, "price", "shirt", 250000, 500000);
        } else if (priceStateObject.costRange500000 && topMenuStateObject.shirtState) {
          priceSaleCheck01(topMenuStateObject.shirtState, priceStateObject.costRange500000, "price", "shirt", 500000);
        } else if (topMenuStateObject.shirtState) {
          var _returnArray8 = checkArray(_data.sub_page_product_list, "productStyle", "shirt");
          listnPageCreate(_returnArray8);
        }
        break;
      }
    case 5:
      {
        stateObjectReset(topMenuStateObject);
        topMenuStateObject.TShirtState = true;
        if (priceStateObject.costRange050000 && topMenuStateObject.TShirtState) {
          priceSaleCheck01(topMenuStateObject.TShirtState, priceStateObject.costRange050000, "price", "TShirt", 0, 50000);
        } else if (priceStateObject.costRange50000150000 && topMenuStateObject.TShirtState) {
          priceSaleCheck01(topMenuStateObject.TShirtState, priceStateObject.costRange50000150000, "price", "TShirt", 50000, 150000);
        } else if (priceStateObject.costRange150000250000 && topMenuStateObject.TShirtState) {
          priceSaleCheck01(topMenuStateObject.TShirtState, priceStateObject.costRange150000250000, "price", "TShirt", 150000, 250000);
        } else if (priceStateObject.costRange250000500000 && topMenuStateObject.TShirtState) {
          priceSaleCheck01(topMenuStateObject.TShirtState, priceStateObject.costRange250000500000, "price", "TShirt", 250000, 500000);
        } else if (priceStateObject.costRange500000 && topMenuStateObject.TShirtState) {
          priceSaleCheck01(topMenuStateObject.TShirtState, priceStateObject.costRange500000, "price", "TShirt", 500000);
        } else if (topMenuStateObject.TShirtState) {
          var _returnArray9 = checkArray(_data.sub_page_product_list, "productStyle", "TShirt");
          listnPageCreate(_returnArray9);
        }
        break;
      }
  }
}

/*************** filter_chkbox ******************/
var ChkBox = document.querySelectorAll('input');
var _loop2 = function _loop2(_i) {
  ChkBox[_i].addEventListener('click', function () {
    if (!ChkBox[_i].checked) {
      ChkBox[_i].checked = false;
    } else {
      for (var j = 0; j < ChkBox.length; j++) {
        ChkBox[j].checked = false;
      }
      ChkBox[_i].checked = true;
    }
    menucheck02(_i);

    //ChkBox[i].checked = true;, 클릭한 부분을 무조건 true로 바꾸고, 나머진 다 해제
    //하지만 위의 명령어 때문에 체크된 박스를 한번더 클릭했을때 해제가 안됨
    //따라서 클릭한 체크부분을 한번 더 클릭했을대 체크를 해제해주는 기능 필요
    //클릭되어잇는 체크박스를 한번더 클릭했다 == cheked가 false라는뜻과 같다.
    //왜냐면 체크박스에 클릭이벤트를걸면 상태가 변화가 된 이후에 실행이 되기 떄문에
    //따라서 if문과 else로 명령어를 처리해주어야 한다.
    //클릭했을때 클릭되어있는 놈이 상태가 false라면, 즉 클릭되어있는놈을 한번 더 클릭했다면 
    //상태를 false로 만들어라, (반복문으로 내가 클릭한놈을 true로 만드는 명령어를 써놨기 때문에 위와 같이 강제로 false로 만들어줘야한다.)
    //그리고 else, 즉 박스가 체크가 안되어있다면 내가 클릭한 놈만 true로 해라 
    //이런식으로 명령어를 구성하면 된다.

    //console.log(ChkBox[i].checked);
  });
};
for (var _i = 0; _i < ChkBox.length; _i++) {
  _loop2(_i);
}
function menucheck02(i) {
  switch (i) {
    case 0:
      {
        if (ChkBox[i].checked) {
          //top밑의 옷 스타일 메뉴들은 false가되는경우가 없기 때문에 따로 조건문을 짜지 않아도 됐지만, 얘내들은 input이라 false가되는경우도 있기 때문에 그거에 맞게 조건문을 짜준다.

          //내가 클릭한것만 true가 되게
          //상태를 기반으로 조건을 체크하기 떄문에, 내가 클릭했을때 즉 체크드가 트루일때는 객체상태를 전부 false돌려주고, 내가 클릭한 상태 속성만 true
          stateObjectReset(priceStateObject);
          priceStateObject.costRange050000 = true;
        } else {
          //그게 아닐 경우는 false가 됐다는말이기때문에 객체 속성을 전부 false로 돌려준다.
          stateObjectReset(priceStateObject);
        }

        //all활성화에 0~50000을눌렀을경우
        if (topMenuStateObject.allstate && priceStateObject.costRange050000) {
          var returnArray01 = pricechkRetrunArray(_data.sub_page_product_list, "price", 0, 50000);
          listnPageCreate(returnArray01);
        } else if (topMenuStateObject.allstate && !priceStateObject.costRange050000) {
          listnPageCreate(_data.sub_page_product_list);
        }

        //각 탭이 활성화가 되어있으면서 (선택되어있으면서) 0~50000박스가 클릭됐을때
        priceSaleCheck01(topMenuStateObject.jaketState, priceStateObject.costRange050000, "price", "jaket", 0, 50000);
        priceSaleCheck01(topMenuStateObject.sweaterState, priceStateObject.costRange050000, "price", "sweater", 0, 50000);
        priceSaleCheck01(topMenuStateObject.neatState, priceStateObject.costRange050000, "price", "neat", 0, 50000);
        priceSaleCheck01(topMenuStateObject.shirtState, priceStateObject.costRange050000, "price", "shirt", 0, 50000);
        priceSaleCheck01(topMenuStateObject.TShirtState, priceStateObject.costRange050000, "price", "TShirt", 0, 50000);
        break;
      }
    case 1:
      {
        if (ChkBox[i].checked) {
          stateObjectReset(priceStateObject);
          priceStateObject.costRange50000150000 = true;
        } else {
          stateObjectReset(priceStateObject);
        }

        //all활성화에 50000~150000을눌렀을경우
        if (topMenuStateObject.allstate && priceStateObject.costRange50000150000) {
          var _returnArray10 = pricechkRetrunArray(_data.sub_page_product_list, "price", 50000, 150000);
          listnPageCreate(_returnArray10);
        } else if (topMenuStateObject.allstate && !priceStateObject.costRange50000150000) {
          listnPageCreate(_data.sub_page_product_list);
        }
        priceSaleCheck01(topMenuStateObject.jaketState, priceStateObject.costRange50000150000, "price", "jaket", 50000, 150000);
        priceSaleCheck01(topMenuStateObject.sweaterState, priceStateObject.costRange50000150000, "price", "sweater", 50000, 150000);
        priceSaleCheck01(topMenuStateObject.neatState, priceStateObject.costRange50000150000, "price", "neat", 50000, 150000);
        priceSaleCheck01(topMenuStateObject.shirtState, priceStateObject.costRange50000150000, "price", "shirt", 50000, 150000);
        priceSaleCheck01(topMenuStateObject.TShirtState, priceStateObject.costRange50000150000, "price", "TShirt", 50000, 150000);
        break;
      }
    case 2:
      {
        if (ChkBox[i].checked) {
          stateObjectReset(priceStateObject);
          priceStateObject.costRange150000250000 = true;
        } else {
          stateObjectReset(priceStateObject);
        }
        if (topMenuStateObject.allstate && priceStateObject.costRange150000250000) {
          var _returnArray11 = pricechkRetrunArray(_data.sub_page_product_list, "price", 150000, 250000);
          listnPageCreate(_returnArray11);
        } else if (topMenuStateObject.allstate && !priceStateObject.costRange150000250000) {
          listnPageCreate(_data.sub_page_product_list);
        }
        priceSaleCheck01(topMenuStateObject.jaketState, priceStateObject.costRange150000250000, "price", "jaket", 150000, 250000);
        priceSaleCheck01(topMenuStateObject.sweaterState, priceStateObject.costRange150000250000, "price", "sweater", 150000, 250000);
        priceSaleCheck01(topMenuStateObject.neatState, priceStateObject.costRange150000250000, "price", "neat", 150000, 250000);
        priceSaleCheck01(topMenuStateObject.shirtState, priceStateObject.costRange150000250000, "price", "shirt", 150000, 250000);
        priceSaleCheck01(topMenuStateObject.TShirtState, priceStateObject.costRange150000250000, "price", "TShirt", 150000, 250000);
        break;
      }
    case 3:
      {
        if (ChkBox[i].checked) {
          stateObjectReset(priceStateObject);
          priceStateObject.costRange250000500000 = true;
        } else {
          stateObjectReset(priceStateObject);
        }
        if (topMenuStateObject.allstate && priceStateObject.costRange250000500000) {
          var _returnArray12 = pricechkRetrunArray(_data.sub_page_product_list, "price", 250000, 500000);
          listnPageCreate(_returnArray12);
        } else if (topMenuStateObject.allstate && !priceStateObject.costRange250000500000) {
          listnPageCreate(_data.sub_page_product_list);
        }
        priceSaleCheck01(topMenuStateObject.jaketState, priceStateObject.costRange250000500000, "price", "jaket", 250000, 500000);
        priceSaleCheck01(topMenuStateObject.sweaterState, priceStateObject.costRange250000500000, "price", "sweater", 250000, 500000);
        priceSaleCheck01(topMenuStateObject.neatState, priceStateObject.costRange250000500000, "price", "neat", 250000, 500000);
        priceSaleCheck01(topMenuStateObject.shirtState, priceStateObject.costRange250000500000, "price", "shirt", 250000, 500000);
        priceSaleCheck01(topMenuStateObject.TShirtState, priceStateObject.costRange250000500000, "price", "TShirt", 250000, 500000);
        break;
      }
    case 4:
      {
        if (ChkBox[i].checked) {
          stateObjectReset(priceStateObject);
          priceStateObject.costRange500000 = true;
        } else {
          stateObjectReset(priceStateObject);
        }

        //all활성화에 500000~을눌렀을경우
        if (topMenuStateObject.allstate && priceStateObject.costRange500000) {
          var _returnArray13 = pricechkRetrunArray(_data.sub_page_product_list, "price", 500000);
          listnPageCreate(_returnArray13);
        } else if (topMenuStateObject.allstate && !priceStateObject.costRange500000) {
          listnPageCreate(_data.sub_page_product_list);
        }
        priceSaleCheck01(topMenuStateObject.jaketState, priceStateObject.costRange500000, "price", "jaket", 500000);
        priceSaleCheck01(topMenuStateObject.sweaterState, priceStateObject.costRange500000, "price", "sweater", 500000);
        priceSaleCheck01(topMenuStateObject.neatState, priceStateObject.costRange500000, "price", "neat", 500000);
        priceSaleCheck01(topMenuStateObject.shirtState, priceStateObject.costRange500000, "price", "shirt", 500000);
        priceSaleCheck01(topMenuStateObject.TShirtState, priceStateObject.costRange500000, "price", "TShirt", 500000);
        break;
      }
  }
}
function priceSaleCheck01(state01, state02) {
  var property = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var style = arguments.length > 3 ? arguments[3] : undefined;
  var price01 = arguments.length > 4 ? arguments[4] : undefined;
  var price02 = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 99999999;
  var returnArray01 = checkArray(_data.sub_page_product_list, "productStyle", style);
  if (state01 && state02) {
    var returnArray02 = pricechkRetrunArray(returnArray01, property, price01, price02);
    listnPageCreate(returnArray02);
  } else if (state01 && !state02) {
    listnPageCreate(returnArray01);
  }
}

/*************** common function ******************/
function pageCreate(array) {
  if (array.length === 0) {
    addClass(pageSection, "none_on");
  } else {
    removeClass(pageSection, "none_on");
  }
  var receive = "";
  pageNumber.innerHTML = "";
  for (var _i2 = 1; _i2 <= calc(array); _i2++) {
    var pageInner = "\n            <li>\n                ".concat(_i2, "\n            </li>\n        ");
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
  var _loop3 = function _loop3(_i3) {
    pageNumberBtn[_i3].addEventListener('click', function () {
      for (var j = 0; j < pageNumberBtn.length; j++) {
        removeClass(pageNumberBtn[j], 'page_on');
      }
      //페이지 활성화 효과
      addClass(pageNumberBtn[_i3], 'page_on');
      //복사할 배열을 인자로 받고 인덱스 추출 번호를 계산하여 
      //복사한다. 그리고 페이지 클릭했을때 이후 해당 배열을 기반으로 리스트 생성
      var returnSlice = arraySliceCreate(_i3, pageItemView, array);
      listCreate(returnSlice);
    });
  };
  for (var _i3 = 0; _i3 < pageNumberBtn.length; _i3++) {
    _loop3(_i3);
  }
}
//페이지 리스트 생성
function listCreate(array) {
  productListWrapper.innerHTML = "";
  var receive = "";
  for (var _i4 = 0; _i4 < array.length; _i4++) {
    if (_i4 === pageItemView) {
      break;
    }
    var list = "\n            <li>\n                <a class = \"img_link_01\" href = './detail_product_buy.html'>\n                    <img src = ".concat(array[_i4].imgSrc[0], " alt = \"product_img_").concat(_i4, "\">\n                </a>    \n                <a class = \"img_link_02\" href = './detail_product_buy.html'>\n                    <img src = ").concat(array[_i4].imgSrc[1], " alt = \"product_img_").concat(_i4, "_hover\">\n                </a>\n                <a class = \"product_name\" href = \"./detail_product_buy.html\">\n                    ").concat(array[_i4].productNameKor, "\n                </a>\n                <a class = \"model_name\" href = \"./detail_product_buy.html\">\n                    ").concat(array[_i4].productModelName, "\n                </a>\n                <span class = \"price_unit\">\u20A9</span>\n                <span class = \"price\">").concat(array[_i4].price.toLocaleString(), "</span>\n            </li>\n        ");
    if (array[_i4].isBest === true && array[_i4].isNew === true) {
      list = list.replaceAll("<a class = \"product_name\" href = \"./detail_product_buy.html\">", "<span class=\"best\">BEST</span><span class=\"new\">NEW</span><a class = \"product_name\" href = \"./detail_product_buy.html\">");
    } else if (array[_i4].isBest === true) {
      list = list.replaceAll("<a class = \"product_name\" href = \"./detail_product_buy.html\">", "<span class=\"best\">BEST</span><a class = \"product_name\" href = \"./detail_product_buy.html\">");
    } else if (array[_i4].isNew === true) {
      list = list.replaceAll("<a class = \"product_name\" href = \"./detail_product_buy.html\">", "<span class=\"new\">NEW</span><a class = \"product_name\" href = \"./detail_product_buy.html\">");
    }
    receive += list;
  }
  productListWrapper.innerHTML = receive;
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

function listnPageCreate(array) {
  listCreate(array);
  pageCreate(array);
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

function checkArray(array, property, value) {
  var filterArray = array.filter(function (object) {
    return object[property] === value;
  });
  return filterArray;
}
function pricechkRetrunArray(array, property, price01) {
  var price02 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 99999999;
  var filterArray = array.filter(function (object) {
    return object[property] >= price01 && object[property] <= price02;
  });
  //console.log(filterArray);
  return filterArray;
}
function stateObjectReset(object) {
  for (var key in object) {
    object[key] = false;
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

//클론 만들기 함수01
function cloneCreate01(elements, parentEle) {
  for (var _i5 = 0; _i5 < elements.length / 2; _i5++) {
    var cloneElement = elements[_i5].cloneNode(true);
    parentEle.appendChild(cloneElement);
  }
}
//클론 만들기 함수02
function cloneCreate02(elements, parentEle) {
  for (var _i6 = 0; _i6 < elements.length; _i6++) {
    var cloneElement = elements[_i6].cloneNode(true);
    parentEle.insertBefore(cloneElement, elements[0]);
  }
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50729" + '/');
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