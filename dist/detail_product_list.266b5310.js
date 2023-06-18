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
  //searchKeword : [`jaket`,`자켓`,`자`,`ㅈ`,`알링턴`,`${productNameKor}`],
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
  //searchKeword : [`jaket`,`자켓`,`자`,`ㅈ`,`코스탈`,`${productNameKor}`],
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
  //searchKeword : [`jaket`,`자켓`,`자`,`ㅈ`,`코스탈`,`${productNameKor}`],
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
  //searchKeword : [`jaket`,`자켓`,`자`,`ㅈ`,`리그`,`${productNameKor}`],
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
  //searchKeword : [`jaket`,`자켓`,`자`,`ㅈ`,`레터맨`,`${productNameKor}`],
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
  //searchKeword : [`jaket`,`자켓`,`자`,`ㅈ`,`트레버`,`${productNameKor}`],
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
  //searchKeword : [`shirt`,`셔츠`,`셔`,`ㅅ`,`매디슨`,`${productNameKor}`],
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
  //searchKeword : [`shirt`,`셔츠`,`셔`,`ㅅ`,`매닝`,`${productNameKor}`],
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
  //searchKeword : [`shirt`,`셔츠`,`셔`,`ㅅ`,`몬트레이`,`${productNameKor}`],
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
  //searchKeword : [`shirt`,`셔츠`,`셔`,`ㅅ`,`크래프트`,`${productNameKor}`],
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
  //searchKeword : [`shirt`,`셔츠`,`셔`,`ㅅ`,`델레이`,`${productNameKor}`],
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
  //searchKeword : [`shirt`,`셔츠`,`셔`,`ㅅ`,`델레이`,`${productNameKor}`],
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
  //searchKeword : [`sweater`,`스웨터`,`스`,`ㅅ`,`헤더`,`${productNameKor}`],
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
  //searchKeword : [`sweater`,`스웨터`,`스`,`ㅅ`,`트리하우스`,`${productNameKor}`],
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
  //searchKeword : [`shirt`,`셔츠`,`셔`,`ㅅ`,`루피너스`,`${productNameKor}`],
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
  //searchKeword : [`shirt`,`셔츠`,`셔`,`ㅅ`,`키위`,`${productNameKor}`],
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
  //searchKeword : [`shirt`,`셔츠`,`셔`,`ㅅ`,`로커`,`${productNameKor}`],
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
  //searchKeword : [`shirt`,`셔츠`,`셔`,`ㅅ`,`피신`,`${productNameKor}`],
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
  //searchKeword : [`neat`,`니트`,`니`,`ㄴ`,`재스퍼`,`${productNameKor}`],
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
  //searchKeword : [`neat`,`니트`,`니`,`ㄴ`,`스테이트`,`${productNameKor}`],
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
  //searchKeword : [`neat`,`니트`,`니`,`ㄴ`,`아이시`,`${productNameKor}`],
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
  //searchKeword : [`neat`,`니트`,`니`,`ㄴ`,`내츄럴`,`${productNameKor}`],
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
  //searchKeword : [`neat`,`니트`,`니`,`ㄴ`,`캐리비안`,`${productNameKor}`],
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
  //searchKeword : [`neat`,`니트`,`니`,`ㄴ`,`폴로`,`${productNameKor}`],
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
  //searchKeword : [`TShirt`,`티셔츠`,`티`,`ㅌ`,`캐리비안`,`${productNameKor}`],
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
  //searchKeword : [`TShirt`,`티셔츠`,`티`,`ㅌ`,`스테이트`,`${productNameKor}`],
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
  //searchKeword : [`TShirt`,`티셔츠`,`티`,`ㅌ`,`스크립트`,`${productNameKor}`],
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
  //searchKeword : [`TShirt`,`티셔츠`,`티`,`ㅌ`,`달리아`,`${productNameKor}`],
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
  //searchKeword : [`TShirt`,`티셔츠`,`티`,`ㅌ`,`프론티어`,`${productNameKor}`],
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
  //searchKeword : [`TShirt`,`티셔츠`,`티`,`ㅌ`,`스크립트`,`${productNameKor}`],
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
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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
var changePriceQuntity = document.querySelector('.quantity_number');
var productQuanView = document.getElementById('product_quantity_select');
//input value 받아서 변경
var totalQuanNumber = document.querySelector('.total_quntaitly_view');
//input value * price
var totalPrice = document.querySelector('.total_price');

/*************** product_quntaitly_select ******************/
var productMinusBtn = document.getElementById('quantity_minus');
var productPlusBtn = document.getElementById('quantity_plus');
//재고량 넘겼을시 나오는 멘트
var priSelNotMent = document.querySelector('.select_notice_ment');

//재고량
changePriceQuntity.dataset.myQuntity = _data.detail_page_produdct_list[0].limitQuantity;
changePriceQuntity.textContent = changePriceQuntity.dataset.myQuntity;
productPlusBtn.addEventListener('click', function () {
  var currentValue = productQuanView.value;
  //수량 표시
  productQuanView.value = parseInt(currentValue) + 1;

  //현재 재고량 몇개인지
  var currentQuntity = changePriceQuntity.textContent;
  if (parseInt(productQuanView.value) > parseInt(currentQuntity)) {
    addClass(priSelNotMent, 'block_on');
    productQuanView.value = currentQuntity;
  }
  totalCheck();
});
productMinusBtn.addEventListener('click', function () {
  var currentValue = productQuanView.value;
  //수량 표시
  productQuanView.value = parseInt(currentValue) - 1;

  //0이하 가지못하게
  if (parseInt(productQuanView.value) < 1) {
    productQuanView.value = 1;
  }
  totalCheck();
});
var prevInput = '';
productQuanView.addEventListener('input', function (e) {
  var numberReg = /^\d+$/;

  ///\D/g, '' 숫자 제외한 모든 문자 공백으로 전환
  if (!numberReg.test(this.value)) {
    this.value = this.value.replaceAll(/\D/g, '');
  }

  //재고량 넘어서게 입력시 그전 입력값으로 대입 
  if (parseInt(this.value) > changePriceQuntity.dataset.myQuntity) {
    //console.log(prevInput);
    this.value = prevInput;
  }
  prevInput = e.target.value;
  inputBlur();
  totalCheck();
});
function totalCheck() {
  //현재 재고량 몇개인지
  var currentQuntity = changePriceQuntity.textContent;
  if (parseInt(productQuanView.value) < parseInt(currentQuntity)) {
    removeClass(priSelNotMent, 'block_on');
  }
  var currentPrice = totalPrice.dataset.price;
  totalQuanNumber.textContent = productQuanView.value;
  totalPrice.textContent = "".concat((currentPrice * productQuanView.value).toLocaleString(), " \uC6D0");
}
function inputBlur() {
  productQuanView.addEventListener('blur', function () {
    if (this.value === '' || this.value === undefined || this.value === null) {
      this.value = 1;
    }
    totalCheck();
  });
}
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

    //코드 초기화
    changeCodeNum.textContent = _data.detail_page_produdct_list[_i].productCode;
    //상품 이름 초기화
    changeProductName.textContent = _data.detail_page_produdct_list[_i].productNameKor;
    //상품 가격 초기화
    changeProductMoney.textContent = _data.detail_page_produdct_list[_i].price.toLocaleString();
    //선택 수량 가격 초기화
    totalPrice.textContent = "".concat(_data.detail_page_produdct_list[_i].price.toLocaleString(), " \uC6D0");
    //데이터셋 상품에 맞게 
    totalPrice.setAttribute('data-price', "".concat(_data.detail_page_produdct_list[_i].price));
    //적립금 초기화
    changeProductPoint.textContent = _data.detail_page_produdct_list[_i].price * 0.005;
    //재고 초기화
    changePriceQuntity.dataset.myQuntity = _data.detail_page_produdct_list[_i].limitQuantity;
    changePriceQuntity.textContent = changePriceQuntity.dataset.myQuntity;
    //수량 초기화
    productQuanView.value = 1;
    //총 구매 수량 초기화
    totalQuanNumber.textContent = productQuanView.value;
    //멘트 삭제
    removeClass(priSelNotMent, 'block_on');
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
var reviewNoticeMent = document.querySelector('.review_notice_ment');

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
    reviewNoticeMent.textContent = '';
    removeClass(reviewCreateArea, "block_on");
    valueReset(reviewBox, reviewLengthBox);
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
    reviewNoticeMent.textContent = '';

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
    valueReset(reviewBox, reviewLengthBox);
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
    reviewNoticeMent.textContent = '리뷰 별점을 남겨주세요!';
  } else {
    reviewNoticeMent.textContent = '공백은 안됩니다!';
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
function createList(array) {
  reviewList.innerHTML = "";
  var receive = "";
  for (var _i7 = 0; _i7 < array.length; _i7++) {
    //6개 까지만 보여주게
    if (_i7 === pageViewLength) {
      break;
    }
    var list = "\n            <li class=\"review\">\n                <p class=\"review_ment\">\n                    ".concat(array[_i7].text, "\n                    <span id = \"").concat(indexCalc(_i7), "\" class = \"delete\">\n                        <i class=\"fas fa-window-close\"></i>\n                    </span>\n                </p>\n                <div class=\"right_info\">\n                    <ul class=\"rating_star\">").concat(starWrite(array[_i7], "ratingStar"), "</ul>\n                    <span class=\"review_date date\">").concat(array[_i7].date, "</span>\n                    <span class=\"review_id\">ju****</span>\n                </div>\n            </li>\n        ");
    receive += list;
  }
  reviewList.innerHTML = receive;
  if (array.length === 0) {
    reviewList.innerHTML = "\n        <div class=\"not_ment\">\n            \uD604\uC7AC \uC791\uC131\uB41C \uB9AC\uBDF0\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.\n        </div>\n        ";
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

  //리뷰 몇개인지 알려줌.
  reviewCounting.textContent = array.length;
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

function pageCreate(array) {
  // console.log('x눌렀음');
  if (array.length === 0) {
    addClass(pageSection, "none_on");
  } else {
    removeClass(pageSection, "none_on");
  }
  var receive = "";
  pageUl.innerHTML = "";
  for (var _i8 = 1; _i8 <= calc(array, pageViewLength); _i8++) {
    var pageList = "\n            <li>\n                ".concat(_i8, "\n            </li>    \n        ");
    receive += pageList;
    countingObject.pageCount = _i8 - 1; //인덱스 계산위해 
  }

  pageUl.innerHTML = receive;
  //console.log(countingObject.pageCount);

  pageControl(array);
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
function calc(array, viewLength) {
  return Math.ceil(array.length / viewLength);
}

/*************** qna 관련  ******************/
var qusetionCreateStartBtn = document.querySelector('.question_btn');
var questionCreateArea = document.querySelector('.create_question');
var questionBox = document.getElementById('create_question_ment');
var questionLengthBox = document.querySelector('.qna_now_length');
var questionCreateComBtn = document.getElementById('qna_create');
var qnaUserID = document.getElementById('qna_user_id');
var qnaList = document.querySelector('.qna');

//const qnaNotMentBox = document.querySelector('.qna_not_ment');

var qnaCounting = document.querySelector('.qna_couting');
var qnaNoticeMent = document.querySelector('.qna_notice_ment');
var qnaContents = [];
questionCreateComBtn.addEventListener('click', function () {
  var IDvalue = qnaUserID.value;
  var questionvalue = questionBox.value;
  if ((IDvalue && questionvalue) !== null && (IDvalue && questionvalue) !== '' && (IDvalue && questionvalue) !== undefined && IDvalue.length > 2) {
    qnaNoticeMent.textContent = '';
    var qnalistObject = {};

    //시간 계산
    var nowTime = calcDate();
    qnalistObject.userId = qnaUserID.value;
    qnalistObject.answerState = false;
    qnalistObject.listState = false;
    qnalistObject.answer = answerStateReturn(qnalistObject.answerState);
    qnalistObject.text = questionBox.value;
    qnalistObject.date = nowTime;

    //배열 push
    qnaContents.push(qnalistObject);
    qnaCreate(qnalistObject, qnaContents);

    //문자열 알림 리셋
    valueReset(questionBox, questionLengthBox);
    qnaUserID.value = "";
    questionBox.focus();
  } else if (IDvalue === undefined || IDvalue === null || IDvalue === "") {
    qnaNoticeMent.textContent = '아이디를 입력 해주세요.';
  } else if (IDvalue.length < 3) {
    qnaNoticeMent.textContent = '아이디를 2자를 넘어야 합니다.';
  } else {
    qnaNoticeMent.textContent = '내용을 입력 해주세요!';
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
    qnaNoticeMent.textContent = '';
    removeClass(questionCreateArea, 'block_on');
    questionState = false;
    valueReset(questionBox, questionLengthBox);
    qnaUserID.value = "";
  }
});
function qnaCreate(object, array) {
  var fragment = document.createDocumentFragment();

  /* question */
  var newLiQnAlist = document.createElement('li');
  var newDivQbox = document.createElement('div');
  var newDivLeftBox = document.createElement('div');
  var newSpanQState = document.createElement('span');
  var newPQuMent = document.createElement('p');
  var newDivRightBox = document.createElement('div');
  var newSpanQdate = document.createElement('span');
  var newSpanUserID = document.createElement('span');
  var newComIcon = document.createElement('i');
  var newSpanManageComment = document.createElement('span');
  var newSpanQnADeleteBtn = document.createElement('span');
  var newIDeleteIcon = document.createElement('i');
  var newSpanManagerMent = document.createElement('span');
  var newIManageMentIcon = document.createElement('i');
  addClass(newSpanQnADeleteBtn, 'qna_list_delete');
  addClassMulti(newIDeleteIcon, ['fas', 'fa-window-close']);
  addClass(newSpanManagerMent, 'manager_ment_on');
  addClassMulti(newIManageMentIcon, ['fas', 'fa-level-down-alt']);
  addClass(newSpanQState, 'state_answer_complete');
  addClass(newPQuMent, 'qna_ment');
  addClass(newDivLeftBox, 'left_box');
  newSpanQState.textContent = object.answer;
  newPQuMent.textContent = object.text;
  newSpanQnADeleteBtn.appendChild(newIDeleteIcon);
  newSpanManagerMent.appendChild(newIManageMentIcon);
  newPQuMent.appendChild(newSpanQnADeleteBtn);
  newPQuMent.appendChild(newSpanManagerMent);
  newDivLeftBox.appendChild(newSpanQState);
  newDivLeftBox.appendChild(newPQuMent);
  addClassMulti(newSpanQdate, ['qna_date', 'date']);
  addClassMulti(newSpanUserID, ['qna_id', 'list_view_id']);
  addClassMulti(newComIcon, ['fas', 'fa-user-tag']);
  addClass(newSpanManageComment, 'comment_click_on');
  addClass(newDivRightBox, 'right_box');
  newSpanQdate.textContent = object.date;
  newSpanUserID.textContent = IDViewLengthCut(object.userId);
  newSpanManageComment.appendChild(newComIcon);
  newDivRightBox.appendChild(newSpanQdate);
  newDivRightBox.appendChild(newSpanUserID);
  newDivRightBox.appendChild(newSpanManageComment);
  addClass(newDivQbox, 'question_box');
  newDivQbox.appendChild(newDivLeftBox);
  newDivQbox.appendChild(newDivRightBox);

  /* answer */
  var newDivAnswerBox = document.createElement('div');
  var newDivMentInputArea = document.createElement('div');
  var newH2 = document.createElement('h2');
  var newTextAreaAnswerComment = document.createElement('textarea');
  var newButtonAnswerCreate = document.createElement('div');
  newH2.textContent = '[CARHARTT] 관리자';
  newButtonAnswerCreate.textContent = '답변하기';
  addClass(newDivMentInputArea, 'ment_input');
  addClassMulti(newButtonAnswerCreate, ['answer_create', 'blue_btn']);
  addClass(newDivAnswerBox, 'answer_box');
  setAttributeMulti(newTextAreaAnswerComment, [['class', 'answer_text_box'], ['cols', '10'], ['rows', '4'], ['maxlength', '200']]);
  newDivMentInputArea.appendChild(newH2);
  newDivMentInputArea.appendChild(newTextAreaAnswerComment);
  newDivMentInputArea.appendChild(newButtonAnswerCreate);
  newDivAnswerBox.appendChild(newDivMentInputArea);
  addClass(newLiQnAlist, 'question_list');
  newLiQnAlist.appendChild(newDivQbox);
  newLiQnAlist.appendChild(newDivAnswerBox);
  fragment.appendChild(newLiQnAlist);

  //리뷰 몇개인지 알려줌.
  qnaCounting.textContent = array.length + 1;
  qnaList.appendChild(fragment);

  //0개 되면 알림창
  //arrayLengthCheck(array);

  var answerInputState = false;
  newSpanManageComment.addEventListener('click', function () {
    if (!object.answerState && !answerInputState) {
      addClass(newDivAnswerBox, 'block_on');
      answerInputState = true;
    } else if (!object.answerState && answerInputState) {
      removeClass(newDivAnswerBox, 'block_on');
      answerInputState = false;
    }
  });
  newSpanQnADeleteBtn.addEventListener('click', function () {
    var parentUl = this.closest('.qna');
    var parentli = this.closest('.question_list');
    if (parentUl) {
      var objectNum = array.indexOf(object);
      array.splice(objectNum, 1);
      parentUl.removeChild(parentli);
      //0개 되면 알림창
      //arrayLengthCheck(array);
      qnaCounting.textContent = array.length + 1;
    }
  });
  var argueArray = [newLiQnAlist, newDivAnswerBox, newTextAreaAnswerComment, newSpanQState, newButtonAnswerCreate, newSpanManagerMent, object];
  answerClick(argueArray);
}
function IDViewLengthCut(ID) {
  var userIDBefore = ID.substring(0, 2);
  var userIDafter = '*'.repeat(ID.length - userIDBefore.length);
  var userID = userIDBefore + userIDafter;

  //console.log(ID.length, userIDBefore, userIDafter);
  return userID;
}
function answerStateReturn(objectProperty) {
  var result = "";
  if (!objectProperty) {
    result = "\uBBF8\uCC98\uB9AC";
  } else {
    result = "\uB2F5\uBCC0\uC644\uB8CC";
  }
  return result;
}
function setAttributeMulti(Element, arrays) {
  //구조 분해 할당을 이용한 setattriubute 반복문
  //구조 분해 할당 예시
  //강의듣고 이해한것 적은것
  //const array = [10, 20, 30];
  //const [a, b ,c] = array;
  //과정설명
  //const [a, b ,c] => array[10, 20, 30];
  //const a = array[0]
  //const b = array[1]
  //const c = array[2]
  //변수 갯수와 배열안의 요소 갯수가 일치하지 않으면, 예를들어
  //const [a,b,c] array[10, 20]
  //c는 undefined가 뜬다.
  //따라서 기본값을 주면 저런 상황을 미연에 방지 가능
  //const array = [10,20];
  //const [a = 1, b = 2, c = 3] = array
  //const a = 10, b = 20, c = 3
  //const array = [10,20,30];
  //const [a, '', c] = array;
  //const a = 10 c = 30;
  //이렇게 건너띌수도 있음.
  //값 바꿔치기를 할때도 배열 구조분해를 이용하면 간단하게 된다.
  //let a = 5; let b = 6 이라고 가정하고, b와 a를 바꾸려면 원래는 새로운 변수를 하나 만들어서
  //해당 값들중 하나를 저장해두어야 했지만
  //배열 구조분해할당을 이용하면 그럴필요도 없어진다.
  //let a = 5; 
  //let b = 10;
  //let [a, b] = [b, a] a에 b값 대입되고 b에 a값이 대입됨.
  var _iterator = _createForOfIteratorHelper(arrays),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _slicedToArray(_step.value, 2),
        _step$value$ = _step$value[0],
        indexFirst = _step$value$ === void 0 ? '' : _step$value$,
        _step$value$2 = _step$value[1],
        indexLast = _step$value$2 === void 0 ? '' : _step$value$2;
      Element.setAttribute(indexFirst, indexLast);
      //따라서 해당 과정은 이런형식으로 진행된다.
      //array[0] -> ['id', 'answer_text_box'] 
      //const [indexFirst, indexLast] = ['id', 'answer_text_box']
      //indexFirst에 id 대입됨.
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}
function answerClick(array) {
  var _array = _slicedToArray(array, 7),
    _array$ = _array[0],
    nowLi = _array$ === void 0 ? '' : _array$,
    _array$2 = _array[1],
    nowAnBox = _array$2 === void 0 ? '' : _array$2,
    _array$3 = _array[2],
    nowTextBox = _array$3 === void 0 ? '' : _array$3,
    _array$4 = _array[3],
    nowQstate = _array$4 === void 0 ? '' : _array$4,
    _array$5 = _array[4],
    nowBtn = _array$5 === void 0 ? '' : _array$5,
    _array$6 = _array[5],
    nowDetail = _array$6 === void 0 ? '' : _array$6,
    nowobject = _array[6];
  nowBtn.addEventListener('click', function () {
    if (nowTextBox.value !== null && nowTextBox.value !== undefined && nowTextBox.value !== '') {
      var fragment = document.createDocumentFragment();

      //해당하는 리스트의 객체속성 변경
      nowobject.answerState = true;
      nowobject.answer = answerStateReturn(nowobject.answerState);
      nowQstate.textContent = nowobject.answer;
      removeClass(nowAnBox, 'block_on');
      var newDivMentArea = document.createElement('div');
      var newSpanAnswer = document.createElement('span');
      var newDivGuideMent = document.createElement('div');
      var newPSpot = document.createElement('p');
      var newPMent = document.createElement('p');
      addClass(nowDetail, 'block_on');
      addClassMulti(newDivMentArea, ['ment_area', 'none_on']);
      addClass(newSpanAnswer, 'answer');
      addClass(newDivGuideMent, 'qna_guide_ment');
      addClass(newPSpot, 'spot');
      addClass(newPMent, 'ment');
      newSpanAnswer.textContent = "\uB2F5\uBCC0";
      newPSpot.textContent = "\u2198[CARHARTT] \uAD00\uB9AC\uC790";
      newPMent.textContent = nowTextBox.value;
      newDivGuideMent.appendChild(newPSpot);
      newDivGuideMent.appendChild(newPMent);
      newDivMentArea.appendChild(newSpanAnswer);
      newDivMentArea.appendChild(newDivGuideMent);
      fragment.appendChild(newDivMentArea);
      nowLi.appendChild(fragment);
      /*             let receive = '';
                  receive = 
                  `
                      <div class="ment_area">
                          <span class="answer">답변</span>
                          <div class="qna_guide_ment">
                              <p class="spot">↘[CARHARTT] 관리자</p>
                              <p class="ment">${nowTextBox.value}</p>
                          </div>
                      </div>
                  `;
                  nowLi.innerHTML += receive; */
      nowDetail.addEventListener('click', function () {
        if (!nowobject.listState) {
          nowobject.listState = true;
          removeClass(newDivMentArea, 'none_on');
        } else {
          addClass(newDivMentArea, 'none_on');
          nowobject.listState = false;
        }
      });
    } else {
      alert('글자를 입력하세요!');
    }
  });
}
function arrayLengthCheck(array) {
  if (array.length > 0) {
    addClass(qnaNotMentBox, 'none_on');
  } else {
    removeClass(qnaNotMentBox, 'none_on');
  }
}

/*********************************** qna & review common  ********************************/
function calcDate() {
  var newDate = new Date();
  var nowYear = newDate.getFullYear();
  var nowMonth = newDate.getMonth() + 1;
  var nowDay = newDate.getDate();
  var nowHours = newDate.getHours();
  var nowMinutes = newDate.getMinutes();
  var nowSeconds = newDate.getSeconds();

  //const DateArray = [nowDay, nowMonth, nowHours, nowMinutes, nowSeconds]

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
function listDelete(btn, array) {
  var idValue = btn.getAttribute("id");

  //리스트 배열에서 해당 id숫자를 가진 인덱스 객체 삭제
  array.splice(idValue, 1);

  //그리고 다시 리스트생성 및 페이지 생성
  pageCreate(reviewContents);
  var returnSlice = arraySlice(countingObject.pageCount, pageViewLength, reviewContents);
  createList(returnSlice);
}
function valueReset(textBox01, textBox02) {
  textBox01.value = "";
  textBox02.textContent = "".concat(0, " \uC790");
}

/*************** modal 관련  ******************/
var heightInput = document.getElementById('height_input');
var weightInput = document.getElementById('weight_input');
var numberInput = document.querySelectorAll('.only_number');
var sizeCalcBtn = document.querySelector('.siez_search_btn');
var noticeMent = document.querySelector('.notice_ment');
var showSize = document.querySelector('.show_box');
var modalOpenBtn = document.querySelector('.size_chk_btn');
var modalCloseBtn = document.querySelector('.size_chk_modal_ex .modal_close_btn');
var modalEx = document.querySelector('.size_chk_modal_ex');
var inputMaxLength = 3;
numberInput.forEach(function (inputBar) {
  inputBar.addEventListener('keyup', function () {
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
  } else if (valueCalc02 > 25 && valueCalc02 < 40) {
    showSize.children[0].textContent = "XL";
  } else {
    showSize.children[0].textContent = "\uC5C6\uC74C";
  }
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

/* function Num(value) {
    let result = parseInt(value, 10);
    return result;
} */
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55263" + '/');
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