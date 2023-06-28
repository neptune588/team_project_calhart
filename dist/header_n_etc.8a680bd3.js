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
},{}],"js/header_n_etc.js":[function(require,module,exports) {
"use strict";

var _data = require("./data.js");
/*************** header ******************/ //nav
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

//const searchKeword = [];

/* sub_page_product_list.forEach((object, i) => {
    let parseStr = object.productNameKor;
    searchKeword.push(parseStr);
    console.log(searchKeword[i]);
    console.log(searchKeword[i].charCodeAt(i));
}) */

//searchTab EVENT
searchTab.addEventListener('input', function () {
  addClass(recommendSearch, 'block_on');
  if (this.value === '' || this.value === undefined || this.value === null) {
    removeClass(recommendSearch, 'block_on');
  }
  /*     for(let i = 0; i < this.value.length; i++) {
          console.log(this.value[i] + ':' + this.value.charCodeAt(i));
      } */

  //console.log(e.target.value);
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
//콘솔로 확인해보면 scrolly값이 소숫점단위가아닌 큰단위로 바껴잇음

//윈도우 스크롤이벤트가 아닌 다른이벤트에서 디바운스가 필요한경우
//애플라이 메서드로 this를 바꿔주는 작업이 필요할듯? input 같은?

window.addEventListener('scroll', debounce(60));
function debounce(delay) {
  var controlTime;
  //console.log(window.scrollY);

  return function () {
    clearTimeout(controlTime);
    controlTime = setTimeout(function () {
      console.log(window.scrollY);
      quickMenu.style.top = "".concat(window.scrollY + quickMenuLocate, "px");
    }, delay);
  };
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54717" + '/');
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