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
  priceRate: "250000~500000",
  imgSrc: ["./images/sub_page_img/CA22FWJAJH10144002/CA22FWJAJH10144002-1.jpg", "./images/sub_page_img/CA22FWJAJH10144002/CA22FWJAJH10144002-0.jpg"],
  isNew: true,
  isBest: true,
  isSales: true,
  isSalesRate: 40 / 100,
  // 곱하기 해주기
  isSalesRateValue: "30~50",
  isSoldOut: false,
  isGender: "male"
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
  priceRate: "150000~250000",
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
  priceRate: "250000~500000",
  imgSrc: ["./images/sub_page_img/CA22FWJAJL00026001/CA22FWJAJL00026001-1.jpg", "./images/sub_page_img/CA22FWJAJL00026001/CA22FWJAJL00026001-0.jpg"],
  isNew: true,
  isBest: false,
  isSales: true,
  isSalesRate: 40 / 100,
  // 곱하기 해주기
  isSalesRateValue: "30~50",
  isSoldOut: false,
  isGender: "male"
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
  isSales: true,
  isSalesRate: 40 / 100,
  // 곱하기 해주기
  isSalesRateValue: "30~50",
  isSoldOut: false,
  isGender: "male"
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
  isSales: true,
  isSalesRate: 40 / 100,
  // 곱하기 해주기
  isSalesRateValue: "30~50",
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
  priceRate: "50000~150000",
  imgSrc: ["./images/sub_page_img/CA22SSSHLS09389001/CA22SSSHLS09389001-1.jpg", "./images/sub_page_img/CA22SSSHLS09389001/CA22SSSHLS09389001-0.jpg"],
  isNew: true,
  isBest: false,
  isSales: true,
  isSalesRate: 40 / 100,
  // 곱하기 해주기
  isSalesRateValue: "30~50",
  isSoldOut: false,
  isGender: "male"
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
  isSales: true,
  isSalesRate: 40 / 100,
  // 곱하기 해주기
  isSalesRateValue: "30~50",
  isSoldOut: false,
  isGender: "male"
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
  priceRate: "50000~150000",
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
  priceRate: "50000~150000",
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
  priceRate: "50000~150000",
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
  priceRate: "50000~150000",
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
  priceRate: "50000~150000",
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
  priceRate: "50000~150000",
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
  priceRate: "50000~150000",
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
  priceRate: "150000~250000",
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
  priceRate: "150000~250000",
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
  priceRate: "150000~250000",
  imgSrc: ["./images/sub_page_img/CA22FWKNKC10174001/CA22FWKNKC10174001-1.jpg", "./images/sub_page_img/CA22FWKNKC10174001/CA22FWKNKC10174001-0.jpg"],
  isNew: false,
  isBest: false,
  isSales: true,
  isSalesRate: 40 / 100,
  // 곱하기 해주기
  isSalesRateValue: "30~50",
  isSoldOut: false,
  isGender: "male"
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
  priceRate: "50000~150000",
  imgSrc: ["./images/sub_page_img/CA22SSKNKP09357001/CA22SSKNKP09357001-1.jpg", "./images/sub_page_img/CA22SSKNKP09357001/CA22SSKNKP09357001-0.jpg"],
  isNew: false,
  isBest: false,
  isSales: true,
  isSalesRate: 40 / 100,
  // 곱하기 해주기
  isSalesRateValue: "30~50",
  isSoldOut: false,
  isGender: "male"
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
  isSales: true,
  isSalesRate: 40 / 100,
  // 곱하기 해주기
  isSalesRateValue: "30~50",
  isSoldOut: false,
  isGender: "male"
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
  priceRate: "50000~150000",
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
  priceRate: "50000~150000",
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
  priceRate: "50000~150000",
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
  priceRate: "50000~150000",
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
  priceRate: "50000~150000",
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
  priceRate: "50000~150000",
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
  priceRate: "50000~150000",
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
},{}],"js/main.js":[function(require,module,exports) {
"use strict";

var _data = require("./data.js");
//버튼 state
//객체 형식이면 함수 내부에서 데이터 참조 및 변형이 가능
var btnState = {
  visualMainLeftClicked: false,
  visualMainRightClicked: false,
  vMainLeftEventClicked: false,
  vMainRightEventClicked: false,
  leftClicked01: false,
  leftClicked02: false,
  rightClicked01: false,
  rightClicked02: false
};
//객체 형식이면 함수 내부에서 데이터 참조 및 변형이 가능
var count = {
  bestMoveCount: 0,
  newMoveCount: 0,
  visualMainMoveCount: 0
};
var arrow = {
  autoPlayArrow: 'left'
};

/*************** visual_main ******************/
//visual_main_ul
var visualMainUl = document.getElementById('visual_main_ul');
//visual_main_btn

var visualPrevBtn = document.getElementById('visual_prev_btn');
var visualNextBtn = document.getElementById('visual_next_btn');
//visual_main_play_stop_btn
var visualPlay = document.getElementById('play_btn');
var visualStop = document.getElementById('stop_btn');
//visual_main_ul li
var visualMainLi = document.querySelectorAll('.visual_main_li');
//visual_main_ul li width
var visualMainLiWidth = visualMainLi[0].offsetWidth;
visualMainLi.forEach(function (value, index) {
  addClass(value, "visual0".concat(index + 1));
});
cloneCreate01(visualMainLi, visualMainUl);
cloneCreate02(visualMainLi, visualMainUl);

//autoplay제어 변수
var visualRepeat;
if (!btnState.vMainLeftEventClicked) {
  btnState.vMainLeftEventClicked = true;
  visualPrevBtn.addEventListener('click', prevPlay);
}
if (!btnState.vMainRightEventClicked) {
  btnState.vMainLeftEventClicked = true;
  visualNextBtn.addEventListener('click', nextPlay);
}
visualPlay.addEventListener('click', function () {
  visualRepeat = setInterval(function () {
    //&& btnState.vMainLeftEventClicked
    //이 부분을 셋인터벌에도 넣게 되면 무한 재생이 아닌 클릭할때마다 한번씩 호출되게됨.
    if (arrow.autoPlayArrow === 'left') {
      prevPlay();
    } else if (arrow.autoPlayArrow === 'right') {
      nextPlay();
    }
  }, 650);
});
visualStop.addEventListener('click', function () {
  clearInterval(visualRepeat);
});
function prevPlay() {
  if (!btnState.visualMainLeftClicked) {
    btnState.visualMainLeftClicked = true;
    arrow.autoPlayArrow = 'left';
    //방향 지정
    leftMove(count, 'visualMainMoveCount', visualMainUl, visualMainLiWidth, btnState, 'visualMainLeftClicked', 4, 'visual_trans_active');
    btnState.vMainLeftEventClicked = false;
  }
}
function nextPlay() {
  if (!btnState.visualMainRightClicked) {
    btnState.visualMainRightClicked = true;
    arrow.autoPlayArrow = 'right';
    rightMove(count, 'visualMainMoveCount', visualMainUl, visualMainLiWidth, btnState, 'visualMainRightClicked', 4, 'visual_trans_active');
    btnState.vMainRightEventClicked = false;
  }
}

/*************** product_section ******************/
//bestproductUl
var bestProductUl = document.getElementById('product_ul01');
//newproductUl
var newProductUl = document.getElementById('product_ul02');

//best_product_li_make
for (var i = 0; i < _data.bestProductList.length; i++) {
  //요소 추가
  var addBestLi = document.createElement('li');
  var bestLiInA = document.createElement('a');
  var bestLiInImg = document.createElement('img');
  var bestLiTextModel = document.createElement('span');
  var bestLiTextName = document.createElement('span');

  //span에 들어가는 text
  var bestLiTextModelText = document.createTextNode(_data.bestProductList[i].modelName);
  var bestLiTextNameText = document.createTextNode(_data.bestProductList[i].name);

  //이미지 속성 변경
  bestLiInImg.setAttribute('src', _data.bestProductList[i].src);

  //삽입 명령어
  bestLiTextModel.appendChild(bestLiTextModelText);
  bestLiTextName.appendChild(bestLiTextNameText);
  bestLiInA.appendChild(bestLiInImg);
  bestLiInA.appendChild(bestLiTextModel);
  bestLiInA.appendChild(bestLiTextName);
  addBestLi.appendChild(bestLiInA);
  bestProductUl.appendChild(addBestLi);

  //클래스 주기

  bestLiInA.setAttribute('href', '#!');
  addBestLi.setAttribute('class', 'Best_product_list');
  //addBestLi.setAttribute('id', "i" + i);
}
//new_product_li_make
for (var _i = 0; _i < _data.newProductList.length; _i++) {
  //요소 추가
  var addNewLi = document.createElement('li');
  var newLiInA = document.createElement('a');
  var newLiInImg = document.createElement('img');
  var newLiTextModel = document.createElement('span');
  var newLiTextName = document.createElement('span');

  //span에 들어가는 text
  var newLiTextModelText = document.createTextNode(_data.newProductList[_i].modelName);
  var newLiTextNameText = document.createTextNode(_data.newProductList[_i].name);

  //이미지 속성 변경
  newLiInImg.setAttribute('src', _data.newProductList[_i].src);

  //삽입 명령어
  newLiTextModel.appendChild(newLiTextModelText);
  newLiTextName.appendChild(newLiTextNameText);
  newLiInA.appendChild(newLiInImg);
  newLiInA.appendChild(newLiTextModel);
  newLiInA.appendChild(newLiTextName);
  addNewLi.appendChild(newLiInA);
  newProductUl.appendChild(addNewLi);

  //클래스 주기

  newLiInA.setAttribute('href', '#!');
  addNewLi.setAttribute('class', 'new_product_list');
}

//best box_arrow_btn
var prevBtn01 = document.getElementById('prev_btn01');
var nextBtn01 = document.getElementById('next_btn01');
//new box_arrow_btn
var prevBtn02 = document.getElementById('prev_btn02');
var nextBtn02 = document.getElementById('next_btn02');

//bestList
var bestLi = document.querySelectorAll('.Best_product_list');
//bestList
var newLi = document.querySelectorAll('.new_product_list');

//product seciton li width 추출
var productLiWidth = bestProductUl.children[0].offsetWidth + 15;

//bestProductClone
cloneCreate01(bestLi, bestProductUl);
cloneCreate02(bestLi, bestProductUl);

//newProductClone
cloneCreate01(newLi, newProductUl);
cloneCreate02(newLi, newProductUl);

//best_Section_left_Btn
prevBtn01.addEventListener('click', function () {
  //연속클릭 방지
  if (!btnState.leftClicked01) {
    btnState.leftClicked01 = true;
    leftMove(count, 'bestMoveCount', bestProductUl, productLiWidth, btnState, 'leftClicked01', 8, 'move_active');
  }
});
//best_Section_right_Btn
nextBtn01.addEventListener('click', function () {
  //연속클릭 방지
  if (!btnState.rightClicked01) {
    btnState.rightClicked01 = true;
    rightMove(count, 'bestMoveCount', bestProductUl, productLiWidth, btnState, 'rightClicked01', 8, 'move_active');
  }
});
//new_Section_left_Btn
prevBtn02.addEventListener('click', function () {
  //연속클릭 방지
  if (!btnState.leftClicked02) {
    btnState.leftClicked02 = true;
    leftMove(count, 'newMoveCount', newProductUl, productLiWidth, btnState, 'leftClicked02', 8, 'move_active');
  }
});
//new_Section_right_Btn
nextBtn02.addEventListener('click', function () {
  //연속클릭 방지
  if (!btnState.rightClicked02) {
    btnState.rightClicked02 = true;
    rightMove(count, 'newMoveCount', newProductUl, productLiWidth, btnState, 'rightClicked02', 8, 'move_active');
  }
});

//왼쪽 이동 인터벌 함수
function leftMove(countObject, countValue, productUl, elementWidth, stateObject, stateProperty, maxCounting, ClassName) {
  var clickCount = 0;
  var leftMoving = setInterval(function () {
    //위치 감지 및 left값 지정. leftmove와 값을 공유해야 유기적으로 이동
    countObject[countValue]++;
    //공유한 count로 계산,
    //왼쪽누르면 카운트증가 오른쪽 누르면 카운트 감소이니까
    //liwidth * count값을 주면된다.
    //나중에 봐도 이해할수잇게 ex적기
    //ex : 3 - 2  
    var moved = move(elementWidth, countObject[countValue]);
    productUl.style.left = moved;

    //인터벌 제어를 위해 
    clickCount++;
    if (clickCount === 1) {
      clearInterval(leftMoving);
    }
    if (countObject[countValue] === maxCounting) {
      countObject[countValue] = 0;
      setTimeout(function () {
        removeClass(productUl, ClassName);
        productUl.style.left = 0;
      }, 600);
      setTimeout(function () {
        addClass(productUl, ClassName);
      }, 650);
    }
  });
  setTimeout(function () {
    //애니메이션 다 끝나고 이동 가능하게 버튼활성화
    stateObject[stateProperty] = false;
  }, 650);
}

//오른쪽 이동 인터벌 함수
function rightMove(countObject, countValue, productUl, elementWidth, stateObject, stateProperty, maxCounting, ClassName) {
  var clickCount = 0;
  var rightMoving = setInterval(function () {
    //위치 감지 및 left값 지정. leftmove와 값을 공유해야 유기적으로 이동
    countObject[countValue]--;
    var moved = move(elementWidth, countObject[countValue]);
    productUl.style.left = moved;
    //인터벌 제어를 위해 
    clickCount++;
    if (clickCount === 1) {
      clearInterval(rightMoving);
    }
    if (countObject[countValue] === maxCounting * -1) {
      countObject[countValue] = 0;
      setTimeout(function () {
        removeClass(productUl, ClassName);
        productUl.style.left = 0;
      }, 600);
      setTimeout(function () {
        addClass(productUl, ClassName);
      }, 650);
    }
  });
  setTimeout(function () {
    //애니메이션 다 끝나고 이동 가능하게 버튼활성화
    stateObject[stateProperty] = false;
  }, 650);
}

/*************** look_book_section ******************/
//룩북 썸네일 탭
//배열로 변환하기 위해 let사용
var lookBookTap = document.querySelectorAll('.look_book_show_tab');
//룩북 view 존
var lookBookViewZone = document.querySelectorAll('.look_book_view');
//text_box
var lookBookInnerTextBox = document.querySelectorAll('.text_box');
//hover_img
var hoverImg = document.querySelectorAll('.hover_img');

/* const bigLookBook = document.getElementById('look_book_thm_area_01');
const smallLookBook = document.getElementById('look_book_thm_area_02'); */

/* //배열 변환.
lookBookTap = LookBookfunctionList.changeArray(lookBookTap); */

//text박스 text생성
lookBookInnerTextBox.forEach(function (value, index) {
  var newP01 = document.createElement('p');
  var newP02 = document.createElement('p');
  var newP03 = document.createElement('p');
  newP01.textContent = _data.lookBookProudctList[index].modelName;
  newP02.textContent = _data.lookBookProudctList[index].name;
  newP03.textContent = _data.lookBookProudctList[index].price;
  value.appendChild(newP01);
  value.appendChild(newP02);
  value.appendChild(newP03);
});
//img hover시 text 등장
var _loop = function _loop(_i2) {
  hoverImg[_i2].addEventListener('mouseover', function () {
    for (var j = 0; j < lookBookInnerTextBox.length; j++) {
      removeClass(lookBookInnerTextBox[j], 'hover_on');
    }
    addClass(lookBookInnerTextBox[_i2], 'hover_on');
  });
};
for (var _i2 = 0; _i2 < hoverImg.length; _i2++) {
  _loop(_i2);
}
//img out시 text 제거
for (var _i3 = 0; _i3 < hoverImg.length; _i3++) {
  hoverImg[_i3].addEventListener('mouseout', function () {
    for (var j = 0; j < lookBookInnerTextBox.length; j++) {
      removeClass(lookBookInnerTextBox[j], 'hover_on');
    }
  });
}

//img등록
for (var _i4 = 0; _i4 < lookBookTap.length; _i4++) {
  lookBookTap[_i4].lastElementChild.setAttribute('src', "./images/look_book_thumnail".concat(_i4, ".jpg"));
}
//탭 순회하면서 클릭이벤트 등록, 클릭했을시 클래스 전부 제거 후 
//i값에 해당하는 섹션 block_on
var _loop2 = function _loop2(_i5) {
  lookBookTap[_i5].addEventListener('click', function () {
    for (var j = 0; j < lookBookViewZone.length; j++) {
      removeClass(lookBookViewZone[j], 'block_on');
    }
    addClass(lookBookViewZone[_i5], 'block_on');
  });
};
for (var _i5 = 0; _i5 < lookBookTap.length; _i5++) {
  _loop2(_i5);
}

/*************** mds_pick_section ******************/

//mdlist
var mdsList = document.querySelectorAll('.md_list');
//mdAcodian
var mdAcodianOn = document.querySelectorAll('.acodian_on');
var mdProductInfo = document.querySelectorAll('.product_info');
mdProductInfo.forEach(function (value, index) {
  var newP01 = document.createElement('p');
  var newP02 = document.createElement('p');
  var newP03 = document.createElement('p');
  var newP04 = document.createElement('p');
  var newP05 = document.createElement('p');
  var button = document.createElement('a');
  newP01.textContent = _data.mdsProductList[index].nameEng;
  newP02.textContent = _data.mdsProductList[index].etc;
  newP03.textContent = _data.mdsProductList[index].nameKor;
  newP04.textContent = _data.mdsProductList[index].productNumber;
  newP05.textContent = _data.mdsProductList[index].price;
  button.textContent = '구매하기';
  value.appendChild(newP01);
  value.appendChild(newP02);
  value.appendChild(newP03);
  value.appendChild(newP04);
  value.appendChild(newP05);
  value.appendChild(button);
  addClass(newP01, 'md_info_text01');
  addClass(newP02, 'md_info_text02');
  addClass(newP03, 'md_info_text03');
  addClass(newP04, 'md_info_text04');
  addClass(newP05, 'md_info_text05');
  addClass(button, 'buy_button');
  button.setAttribute('href', '#!');
});

//하나는 아코디언상태여야기 때문에 아코디언 부여. 
//쿼리셀렉터 올로 잡아뒀기때문에 반복문을 안쓸꺼면 mdsList[0].children[0].children[0] 이런식으로 잡을수잇다.
mdAcodianOn.forEach(function (value, index) {
  value.children[0].children[0].setAttribute('src', "./images/mds_acodian_0".concat(index + 1, ".jpg"));
});
var _loop3 = function _loop3(_i6) {
  mdsList[_i6].addEventListener('click', function () {
    for (var j = 0; j < mdsList.length; j++) {
      removeClass(mdsList[j], 'acodian_on');
      removeClass(mdProductInfo[j], 'hover_on');
      mdsList[j].children[0].children[0].setAttribute('src', "./images/mds_0".concat(j + 1, ".jpg"));
    }
    addClass(mdsList[_i6], 'acodian_on');
    addClass(mdProductInfo[_i6], 'hover_on');
    mdsList[_i6].children[0].children[0].setAttribute('src', "./images/mds_acodian_0".concat(_i6 + 1, ".jpg"));
  });
};
for (var _i6 = 0; _i6 < mdsList.length; _i6++) {
  _loop3(_i6);
}

//1. 아코디언 상태일때만 mds_acodian이 된다. 그 말인 즉슨 그 클래스가 제거가 되면 이미지는 mds_0 시리즈로 되어야한다.
//2. 따라서 그렇게 mds를 다 부여하고, 내가 클릭한 녀석 즉 i에게만 mds_acodian을 부여하면 되는것이다.

/*************** mds_pick_section ******************/
var instaMoveUl = document.querySelectorAll('.insta_frame > ul');
var instaFrame = document.querySelector('.insta_frame');
window.addEventListener('scroll', function () {
  //console.log(window.scrollY);
  if (window.scrollY > 2300) {
    instaMoveUl.forEach(function (value) {
      addClass(value, 'animate');
    });
  }
});
instaFrame.addEventListener('mouseover', function () {
  instaMoveUl.forEach(function (value) {
    value.style.animationPlayState = 'paused';
  });
});
instaFrame.addEventListener('mouseout', function () {
  instaMoveUl.forEach(function (value) {
    value.style.animationPlayState = 'running';
  });
});
/* instaMoveUl.forEach((value) => {
    value.addEventListener('mouseover', () => {
        value.style.animationPlayState = 'paused';
    })
    value.addEventListener('mouseout', () => {
        value.style.animationPlayState = 'running';
    })
})
 */

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
  for (var _i7 = 0; _i7 < elements.length / 2; _i7++) {
    var cloneElement = elements[_i7].cloneNode(true);
    parentEle.appendChild(cloneElement);
  }
}
//클론 만들기 함수02
function cloneCreate02(elements, parentEle) {
  for (var _i8 = 0; _i8 < elements.length; _i8++) {
    var cloneElement = elements[_i8].cloneNode(true);
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50824" + '/');
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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/main.js"], null)
//# sourceMappingURL=/main.fb6bbcaf.js.map