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
},{}],"js/main.js":[function(require,module,exports) {
"use strict";

var _data = require("./data.js");
/*************** visual_main ******************/ //visual_main_ul
var vmList = document.getElementById('visual_main_ul');
var visualSrc = [{
  src: ["./images/visual_main01.jpg"],
  class: "visual01"
}, {
  src: ["./images/visual_main02.jpg"],
  class: "visual02"
}, {
  src: ["./images/visual_main03.jpg"],
  class: "visual03"
}, {
  src: ["./images/visual_main04.jpg"],
  class: "visual04"
}];
vmMaker();
function vmMaker() {
  var list = "";
  var receive = "";
  visualSrc.forEach(function (obj, i) {
    list = "\n            <li class=\"visual_main_li ".concat(obj.class, "\">\n                <a href=\"./sub_product_list.html\">\n                    <img src=\"").concat(obj.src, "\" alt=\"vm_img_").concat(i, "\"/>\n                </a>\n            </li>\n        ");
    receive += list;
  });
  vmList.innerHTML = receive;
  var vmListChild = document.querySelectorAll('.visual_main_li');
  vmList.appendChild(cloneCreate(vmListChild[0]));
  //vmListChild[0]가 고정되어있으므로 li가 순차적으로 고정돤0번앞에 추가됨.
  vmListChild.forEach(function (li) {
    return vmList.insertBefore(cloneCreate(li), vmListChild[0]);
  });
}

/*************** visual_main_next_prev ******************/
var visualPrevBtn = document.getElementById('visual_prev_btn');
var visualNextBtn = document.getElementById('visual_next_btn');

//li 마진값 추출
var vmLiMargin = parseInt(window.getComputedStyle(vmList.children[0]).getPropertyValue('margin-bottom'), 10);
//li 마진값 + offsetHeight로 이동값 계산
var vmMoveValue = moveValueCalc(vmList.children[0]) + vmLiMargin;
//li 이동시간 추출
var vmMoveDelay = parseFloat(window.getComputedStyle(document.querySelector('.visual_trans_active')).getPropertyValue('transition-duration')) * 1000;
//li 이동시간 second(초) 기준으로 재 계산

var vmSlider = {
  moveEl: vmList,
  ctrlClass: 'visual_trans_active',
  moveCount: 0,
  calcCount: 1,
  clearCount: 0,
  moveArrow: "left",
  moveValue: vmMoveValue,
  moveTime: vmMoveDelay,
  countMax: (vmList.children.length - 1) / 2,
  autoArrow: "left"
};
var vmPrevClick = false;
var vmNextClick = false;
visualPrevBtn.addEventListener('click', function () {
  var time;
  clearTimeout(time);
  time = setTimeout(function () {
    vmPrevMove();
  }, 50);
});
visualNextBtn.addEventListener('click', function () {
  var time;
  clearTimeout(time);
  time = setTimeout(function () {
    vmNextMove();
  }, 50);
});
function vmPrevMove() {
  if (!vmPrevClick) {
    vmPrevClick = true;
    vmSlider.autoArrow = "left", vmSlider.calcCount = 1;
    vmSlider.countMax = (vmList.children.length - 1) / 2;
    moveInterval(vmSlider);
    setTimeout(function () {
      vmPrevClick = false;
    }, vmSlider.moveTime + 260);
  }
}
function vmNextMove() {
  if (!vmNextClick) {
    vmNextClick = true;
    vmSlider.autoArrow = "right", vmSlider.calcCount = -1;
    vmSlider.countMax = (vmList.children.length - 1) * -1 / 2;
    moveInterval(vmSlider);
    setTimeout(function () {
      vmNextClick = false;
    }, vmSlider.moveTime + 260);
  }
}

/*************** visual_main_autoPlay ******************/
var visualPlay = document.getElementById('play_btn');
var visualStop = document.getElementById('stop_btn');
var vmAuto;
visualPlay.addEventListener('click', function () {
  vmAuto = setInterval(function () {
    if (vmSlider.autoArrow === "left") {
      vmPrevMove();
    } else if (vmSlider.autoArrow === "right") {
      vmNextMove();
    }
  }, vmSlider.moveTime);
});
visualStop.addEventListener('click', function () {
  if (vmAuto) {
    clearInterval(vmAuto);
  }
});

/*************** best_n_new_create ******************/

//length를 기준으로 계산해야할게 많기 떄문에
//list생산 함수로 innerhtml로 박아넣고, 그 안에서 클론 생성까지 이루어지게 코드를 짰기 떄문에
//클론이 되어있지 않은 lenght를 받아올 필요가 있으므로, 미리 초기화해두고 함수안에서 받아오고,
//그 값을 기준으로 transform 값 밑 maxcount를 구하자.
var innerLiLength = 0;
var bestList = document.getElementById('best_product_list');
var bestPdMaker = {
  parentEl: bestList,
  childClass: "best_product_list",
  data: _data.bestProductList,
  alt: "best_list_img"
};
listMaker(bestPdMaker);
var newList = document.getElementById('new_product_list');
var newPdMaker = {
  parentEl: newList,
  childClass: "new_product_list",
  data: _data.newProductList,
  alt: "new_list_img"
};
listMaker(newPdMaker);
function listMaker(obj) {
  var list = "";
  var receive = "";
  obj.data.forEach(function (innerObj, index) {
    list = "\n            <li class=\"".concat(obj.childClass, "\">\n                <a href=\"#!\">\n                    <img src=\"").concat(innerObj.src, "\" alt=\"").concat(obj.alt + index, "\"/>\n                    <span>").concat(innerObj.modelName, "</span>\n                    <span>").concat(innerObj.name, "</span>\n                </a>\n            </li>\n        ");
    receive += list;
  });
  obj.parentEl.innerHTML = receive;

  //children으로 하면 오류가 생겨서, 클래스주고 쿼리셀렉터로 특정했다.
  var innerLi = document.querySelectorAll(".".concat(obj.childClass));
  innerLiLength = innerLi.length;
  innerLi.forEach(function (li) {
    return obj.parentEl.insertBefore(cloneCreate(li), innerLi[0]);
  });
  for (var i = 0; i < innerLiLength / 2; i++) {
    obj.parentEl.appendChild(cloneCreate(innerLi[i]));
  }
}

/*************** best_n_new_default_settings ******************/
var pdListWidth = parseInt(window.getComputedStyle(bestList.children[0]).getPropertyValue('width'), 10);
var pdListMargin = parseInt(window.getComputedStyle(bestList.children[0]).getPropertyValue('margin-right'), 10);
var pdListMoveValue = moveValueCalc(bestList.children[0]) + pdListMargin;
var pdListMoveDelay = parseFloat(window.getComputedStyle(document.querySelector('.move_active')).getPropertyValue('transition-duration')) * 1000;
var productList = document.querySelectorAll('.product_list');
productList.forEach(function (ul) {
  return ul.style.transform = "translateX(-".concat(innerLiLength * (pdListWidth + pdListMargin), "px)");
});

//console.log(pdListMargin, pdListWidth, pdListMoveValue, pdListMoveDelay);

var bestPdSlider = {
  moveEl: bestList,
  ctrlClass: 'move_active',
  moveCount: 0,
  calcCount: 1,
  clearCount: 0,
  moveArrow: "left",
  moveValue: pdListMoveValue,
  moveTime: pdListMoveDelay,
  countMax: innerLiLength,
  prevState: false,
  nextState: false
};
var newPdSlider = {
  moveEl: newList,
  ctrlClass: 'move_active',
  moveCount: 0,
  calcCount: 1,
  clearCount: 0,
  moveArrow: "left",
  moveValue: pdListMoveValue,
  moveTime: pdListMoveDelay,
  countMax: innerLiLength,
  prevState: false,
  nextState: false
};

/*************** best_n_new_slider ******************/
var bestPrevBtn = document.getElementById('prev_btn01');
var bestNextBtn = document.getElementById('next_btn01');
var newPrevBtn = document.getElementById('prev_btn02');
var newNextBtn = document.getElementById('next_btn02');
bestPrevBtn.addEventListener('click', function () {
  prevSlide(bestPdSlider);
});
bestNextBtn.addEventListener('click', function () {
  nextSlide(bestPdSlider);
});
newPrevBtn.addEventListener('click', function () {
  prevSlide(newPdSlider);
});
newNextBtn.addEventListener('click', function () {
  nextSlide(newPdSlider);
});
function prevSlide(obj) {
  if (!obj.prevState) {
    obj.prevState = true;
    obj.calcCount = 1;
    obj.countMax = innerLiLength;
    moveInterval(obj);
    setTimeout(function () {
      obj.prevState = false;
    }, obj.moveTime + 260);
  }
}
function nextSlide(obj) {
  if (!obj.nextState) {
    obj.nextState = true;
    obj.calcCount = -1;
    obj.countMax = innerLiLength * -1;
    moveInterval(obj);
    setTimeout(function () {
      obj.nextState = false;
    }, obj.moveTime + 260);
  }
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
var _loop = function _loop(i) {
  hoverImg[i].addEventListener('mouseover', function () {
    for (var j = 0; j < lookBookInnerTextBox.length; j++) {
      removeClass(lookBookInnerTextBox[j], 'hover_on');
    }
    addClass(lookBookInnerTextBox[i], 'hover_on');
  });
};
for (var i = 0; i < hoverImg.length; i++) {
  _loop(i);
}
//img out시 text 제거
for (var _i = 0; _i < hoverImg.length; _i++) {
  hoverImg[_i].addEventListener('mouseout', function () {
    for (var j = 0; j < lookBookInnerTextBox.length; j++) {
      removeClass(lookBookInnerTextBox[j], 'hover_on');
    }
  });
}

//img등록
for (var _i2 = 0; _i2 < lookBookTap.length; _i2++) {
  lookBookTap[_i2].lastElementChild.setAttribute('src', "./images/look_book_thumnail".concat(_i2, ".jpg"));
}
//탭 순회하면서 클릭이벤트 등록, 클릭했을시 클래스 전부 제거 후 
//i값에 해당하는 섹션 block_on
var _loop2 = function _loop2(_i3) {
  lookBookTap[_i3].addEventListener('click', function () {
    for (var j = 0; j < lookBookViewZone.length; j++) {
      removeClass(lookBookViewZone[j], 'block_on');
    }
    addClass(lookBookViewZone[_i3], 'block_on');
  });
};
for (var _i3 = 0; _i3 < lookBookTap.length; _i3++) {
  _loop2(_i3);
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
var _loop3 = function _loop3(_i4) {
  mdsList[_i4].addEventListener('click', function () {
    for (var j = 0; j < mdsList.length; j++) {
      removeClass(mdsList[j], 'acodian_on');
      removeClass(mdProductInfo[j], 'hover_on');
      mdsList[j].children[0].children[0].setAttribute('src', "./images/mds_0".concat(j + 1, ".jpg"));
    }
    addClass(mdsList[_i4], 'acodian_on');
    addClass(mdProductInfo[_i4], 'hover_on');
    mdsList[_i4].children[0].children[0].setAttribute('src', "./images/mds_acodian_0".concat(_i4 + 1, ".jpg"));
  });
};
for (var _i4 = 0; _i4 < mdsList.length; _i4++) {
  _loop3(_i4);
}

//1. 아코디언 상태일때만 mds_acodian이 된다. 그 말인 즉슨 그 클래스가 제거가 되면 이미지는 mds_0 시리즈로 되어야한다.
//2. 따라서 그렇게 mds를 다 부여하고, 내가 클릭한 녀석 즉 i에게만 mds_acodian을 부여하면 되는것이다.

/*************** mds_pick_section ******************/
var instaMoveUl = document.querySelectorAll('.insta_frame > ul');
var instaFrame = document.querySelector('.insta_frame');
var condition = document.body.scrollHeight * 0.6;
window.addEventListener('scroll', function () {
  if (window.scrollY >= condition) {
    instaMoveUl.forEach(function (value) {
      addClass(value, 'animate');
    });
  }
});
instaFrame.addEventListener('mouseover', function () {
  instaMoveUl.forEach(function (el) {
    return el.style.animationPlayState = 'paused';
  });
});
instaFrame.addEventListener('mouseout', function () {
  instaMoveUl.forEach(function (el) {
    return el.style.animationPlayState = 'running';
  });
});

/*************** common ******************/
function moveInterval(obj) {
  //동작
  addClass(obj.moveEl, obj.ctrlClass);
  var repeatMove = setInterval(function () {
    obj.clearCount = 0;
    obj.moveCount += obj.calcCount;

    //console.log(obj.moveCount);
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
    obj.clearCount++;
    if (obj.clearCount === 1) {
      clearInterval(repeatMove);
    }
  });
}

//클래스 추가
function addClass(Element, ClassName) {
  Element.classList.add(ClassName);
}
//클래스 제거
function removeClass(Element, ClassName) {
  Element.classList.remove(ClassName);
}
function moveValueCalc(el) {
  return el.offsetWidth;
}
function cloneCreate(el) {
  return el.cloneNode(true);
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54457" + '/');
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