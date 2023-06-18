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
},{}],"js/sub_product_list.js":[function(require,module,exports) {
"use strict";

var _data = require("./data.js");
/*************** product_list ******************/

var sortState = {
  defaultState: false,
  priceState: false,
  latestState: false,
  bestState: false
};
var productListWrapper = document.querySelector('.product_list_wrapper');
var pageSection = document.querySelector('.pagenation');
var pageNumber = document.querySelector('.page_number');
//변수 선언 해놓고 반복문돌려서 li생성되면 queryselectorall로 받기
var pageItemView = 12;

//전체페이지 기준으로, 1페이지 작성
//페이지 카운터 생성 함수 호출
arraySort(_data.sub_page_product_list);
/* topMenuStateObject.allstate = true; */
//console.log(topMenuStateObject.allstate);

//페이지 카운터 생성 함수, 필터의 조건을 누를떄마다 실행하게 계획, 무조건 인덱스0 즉 숫자1에는 불이 들어와야하니까
//페이지 생성 후 인덱스 0에 스타일클래스 부여
//필터의 조건들을 누를 시 매 빈 배열에 조건에 맞게 값을 가져올것이기 떄문에, 계산식도 함수로 지정하여 매개변수 이용
//calc(내가만든배열); 하면 계산식이 나오게 된다. 아이템갯수에 따라

/*************** filter_view_control ******************/
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

/*************** filter_check ******************/

//사이드필터 인풋
var chkList = document.querySelectorAll(".side_filter input");
//필터 카테고리
var allFillterSection = document.querySelectorAll('.check_detect');
//필터 카테고리 배열화
var filtterSectionArr = Array.from(allFillterSection);

//top_menu 조건배열
var fillterArrayTopMenu = [];
//price 조건배열
var fillterArrayPrice = [];
//color 조건배열
var fillterArrayColor = [];
//sale 조건배열
var fillterArraySale = [];

//통합 배열(반복문 돌리기 위해 2중배열)
var fillterCompareArray = [fillterArrayTopMenu, fillterArrayPrice, fillterArrayColor, fillterArraySale];

//각 카테고리 섹션들 index 순서에 맞게 inputdata에 번호지정
for (var i = 0; i < chkList.length; i++) {
  var currentSection = chkList[i].closest('.check_detect');
  var currnetSectionIndex = filtterSectionArr.indexOf(currentSection);
  chkList[i].dataset.myFillterIndex = currnetSectionIndex;
}

//전체 input 순회하며 클릭한 input밸류 받아오기, 빼기 
for (var _i = 0; _i < chkList.length; _i++) {
  chkList[_i].addEventListener('click', function () {
    var currentInputDataIndex = this.dataset.myFillterIndex;
    if (this.checked) {
      fillterCompareArray[currentInputDataIndex].push(this.value);
      //indexCompare(prevChkBoxChecked, input);
    } else {
      var valueIndex = fillterCompareArray[currentInputDataIndex].indexOf(this.value);
      fillterCompareArray[currentInputDataIndex].splice(valueIndex, 1);
    }

    //color section의 인덱스번호가 2라고치면, 그 안에든 input의 데이터번호도 2
    //조건배열을 담아둔 fillterCompareArray안에 각 인덱스에 맞게 배열을 배치했으니

    //fillterCompareArray[colorinput의 데이터셋] 을 해주면 해당 조건배열에 value값 업데이트 !!

    arrayReturn(_data.sub_page_product_list, fillterCompareArray);
  });
}
function arrayReturn(array01, array02) {
  //외부에서 값받아주기 위해 변수 선언;
  var resultArray01;

  //array01에는 처음에는 외부모듈의 배열이 
  //그 이후부터는 외부모듈에서 조건에 맞게 걸러진 배열이 대입되게 했다.
  //만약 일치하는게 없거나 length가 0이되면 false를 반환하여
  //빈 배열이 array01에 할당되기때문에 조건이 없는 즉 length 0부분은 걸러줘야 한다.
  //array02[i].length === 0 즉 value가 없으면 건너뛰게 설계(continue)
  var _loop = function _loop(_i2) {
    if (array02[_i2].length === 0) {
      return "continue";
    }

    //object.keys는 객체의 key를 순환하는 역할을 하는 메서드이다.
    //object.values는 호환성이 안좋아서 key로 ㄱㄱ하자 
    //괄호안에 순회할 객체를넣어뒀다.
    //또한 some메서드를 활용해 객체의 key값과 조건 배열 arra02[i]이 일치하는지
    //검사하기 위해 또 한번 some을 써주었다. 
    //object 1개에있는 값중 일치하는값이 나오면 true반환 안나오면 false반환

    resultArray01 = array01.filter(function (object) {
      return Object.keys(object).some(function (key) {
        return array02[_i2].some(function (arrayValue) {
          //console.log(object[key], arrayValue);
          return object[key] === arrayValue;
        });
      });
    });

    //처음에는 외부모듈 기준 이후에는 그것을 바탕으로 걸러진배열 1, 1을 바탕으로 2 -> 2를 바탕으로 3 ...

    //이런식으로 중첩조건체크가 되는것

    array01 = resultArray01;
  };
  for (var _i2 = 0; _i2 < array02.length; _i2++) {
    var _ret = _loop(_i2);
    if (_ret === "continue") continue;
  }

  //걸러진 배열을 바탕으로 정렬 
  arraySort(resultArray01);
}
function stateObjectReset(object) {
  for (var key in object) {
    object[key] = false;
  }
}
function arraySort() {
  var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  //정렬(sort) 셀렉터
  var sortFillter = document.getElementById('sort_chk');
  //정렬된 배열 변수 선언
  var sortArr;

  //기본 list생성
  listnPageCreate(array);

  //해당 객체 상태변수가 켜졌다는말은 change가 되어있다는말.
  if (sortState.defaultState || sortState.latestState) {
    sortArr = array.slice().sort(function (a, b) {
      return a.propertyNumber - b.propertyNumber;
    });
    listnPageCreate(sortArr);
  } else if (sortState.priceState) {
    sortArr = array.slice().sort(function (a, b) {
      if (a.price < b.price) {
        return -1;
      } else if (a.price === b.price) {
        return 0;
      }
    });
    listnPageCreate(sortArr);
  }
  sortFillter.addEventListener("change", function (event) {
    var currentTarget = event.target.value;

    //기본 눌렀을시
    if (currentTarget === 'defalut') {
      //정렬 된 결과를 선택했을때에도 적용하기 위해
      stateObjectReset(sortState);
      sortState.defaultState = true;
      sortArr = array.slice().sort(function (a, b) {
        return a.propertyNumber - b.propertyNumber;
      });

      //가격 순 으로
    } else if (currentTarget === 'price') {
      stateObjectReset(sortState);
      sortState.priceState = true;
      sortArr = array.slice().sort(function (a, b) {
        if (a.price < b.price) {
          return -1;
        } else if (a.price === b.price) {
          return 0;
        }
      });

      //최근 순으로 
    } else if (currentTarget === 'latest') {
      stateObjectReset(sortState);
      sortState.latestState = true;
      sortArr = array.slice().sort(function (a, b) {
        if (a.propertyNumber < b.propertyNumber) {
          return -1;
        } else if (a.propertyNumber > b.propertyNumber) {
          return 1;
        }
      });
    }

    //정렬된 결과 가지고 리스트 생산
    listnPageCreate(sortArr);
  });
}

//리셋하기
var resetBtn = document.querySelector('.reset');
resetBtn.addEventListener('click', function () {
  //밸류 defalut로
  document.getElementById('sort_chk').value = 'defalut';
  //상태변수도 그에맞게
  stateObjectReset(sortState);
  sortState.defaultState = true;

  //위의 변수 적용된 이후 리스트 뽑기
  arraySort(_data.sub_page_product_list);
  chkList.forEach(function (input) {
    //input reset
    input.checked = false;

    //조건 array reset
    fillterCompareArray.forEach(function (array) {
      array.splice(0, array.length);
    });
  });
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
  for (var _i3 = 1; _i3 <= calc(array); _i3++) {
    var pageInner = "\n            <li>\n                ".concat(_i3, "\n            </li>\n        ");
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
  var _loop2 = function _loop2(_i4) {
    pageNumberBtn[_i4].addEventListener('click', function () {
      for (var j = 0; j < pageNumberBtn.length; j++) {
        removeClass(pageNumberBtn[j], 'page_on');
      }
      //페이지 활성화 효과
      addClass(pageNumberBtn[_i4], 'page_on');
      //복사할 배열을 인자로 받고 인덱스 추출 번호를 계산하여 
      //복사한다. 그리고 페이지 클릭했을때 이후 해당 배열을 기반으로 리스트 생성
      var returnSlice = arraySliceCreate(_i4, pageItemView, array);
      listCreate(returnSlice);
    });
  };
  for (var _i4 = 0; _i4 < pageNumberBtn.length; _i4++) {
    _loop2(_i4);
  }
}
//페이지 리스트 생성
function listCreate(array) {
  productListWrapper.innerHTML = "";
  var receive = "";
  if (array.length === 0) {
    productListWrapper.innerHTML = "\n            <p class=\"lengthNotice\">\n                <i class=\"far fa-times-circle\"></i>\n                \uD574\uB2F9\uD558\uB294 \uC0C1\uD488\uC774 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4!\n            </p>\n        ";
  }
  for (var _i5 = 0; _i5 < array.length; _i5++) {
    if (_i5 === pageItemView) {
      break;
    }
    var list = "\n            <li>\n                <a class = \"img_link_01\" href = './detail_product_buy.html'>\n                    <img src = ".concat(array[_i5].imgSrc[0], " alt = \"product_img_").concat(_i5, "\">\n                </a>    \n                <a class = \"img_link_02\" href = './detail_product_buy.html'>\n                    <img src = ").concat(array[_i5].imgSrc[1], " alt = \"product_img_").concat(_i5, "_hover\">\n                </a>\n                <a class = \"product_name\" href = \"./detail_product_buy.html\">\n                    ").concat(array[_i5].productNameKor, "\n                </a>\n                <a class = \"model_name\" href = \"./detail_product_buy.html\">\n                    ").concat(array[_i5].productModelName, "\n                </a>\n                <span class = \"price_unit\">\u20A9</span>\n                <span class = \"price\">").concat(array[_i5].price.toLocaleString(), "</span>\n            </li>\n        ");
    if (array[_i5].isBest === true && array[_i5].isNew === true) {
      list = list.replaceAll("<a class = \"product_name\" href = \"./detail_product_buy.html\">", "<span class=\"best\">BEST</span><span class=\"new\">NEW</span><a class = \"product_name\" href = \"./detail_product_buy.html\">");
    } else if (array[_i5].isBest === true) {
      list = list.replaceAll("<a class = \"product_name\" href = \"./detail_product_buy.html\">", "<span class=\"best\">BEST</span><a class = \"product_name\" href = \"./detail_product_buy.html\">");
    } else if (array[_i5].isNew === true) {
      list = list.replaceAll("<a class = \"product_name\" href = \"./detail_product_buy.html\">", "<span class=\"new\">NEW</span><a class = \"product_name\" href = \"./detail_product_buy.html\">");
    }
    receive += list;
  }
  productListWrapper.innerHTML += receive;
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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/sub_product_list.js"], null)
//# sourceMappingURL=/sub_product_list.a2bacaba.js.map