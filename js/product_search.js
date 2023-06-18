/* fetch(getParameter('q'))
.then(listfilter); */

/* fetch('./search_data.json')
.then(res => console.log(JSON.stringify(res))); */

import { sub_page_product_list } from './data.js';

console.log(sub_page_product_list);

function getParameter(parameter) {
  const urlObject = new URLSearchParams(location.search);

  //urlsearchparams란?
  //url쿼리문자열을 파싱하는 객체로
  //해당 객체를 생성후 get으로 ?뒤에 설정한 쿼리문자열을 매개변수로 받아
  //뒤에오는 문자열을 전달받을수있 다고 한다.

  //여기서 q는 key고 = 뒤에 오는게 value이다. 
  //?질의 q(멋대로설정가능) key ,=, 값 value
  //ex ?query='바나나' 라고 가정하면 위의 선언한 객체에서
  //.get('query')를하면 바나나라는 값을 가져오게 될수 있게되는것.

  return urlObject.get(parameter);

}

/* function listfilter(value,) {
  const returnArray = sub_page_product_list.filter((object) => {
    for(let key in object) {
      if(object[key] === )
    }
  })
}
 */
function listnPageCreate(array) {
  listCreate(array);
  pageCreate(array);
}

function pageCreate(array) {
  if (array.length === 0) {
    addClass(pageSection, `none_on`);
  } else {
    removeClass(pageSection, `none_on`);
  }

  let receive = ``;
  pageNumber.innerHTML = ``;
  for (let i = 1; i <= calc(array); i++) {
    const pageInner = `
          <li>
              ${i}
          </li>
      `
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
  const pageNumberBtn = document.querySelectorAll('.page_number > li');
  //페이지 번호에 따라 아이템 생성
  for (let i = 0; i < pageNumberBtn.length; i++) {
    pageNumberBtn[i].addEventListener('click', () => {
      for (let j = 0; j < pageNumberBtn.length; j++) {
        removeClass(pageNumberBtn[j], 'page_on');
      }
      //페이지 활성화 효과
      addClass(pageNumberBtn[i], 'page_on');
      //복사할 배열을 인자로 받고 인덱스 추출 번호를 계산하여 
      //복사한다. 그리고 페이지 클릭했을때 이후 해당 배열을 기반으로 리스트 생성
      let returnSlice = arraySliceCreate(i, pageItemView, array);
      listCreate(returnSlice);
    });
  }
}
//페이지 리스트 생성
function listCreate(array) {
  productListWrapper.innerHTML = ``;
  let receive = ``;

  if (array.length === 0) {
    productListWrapper.innerHTML = `
          <p class="lengthNotice">
              <i class="far fa-times-circle"></i>
              해당하는 상품이 존재하지 않습니다!
          </p>
      `;
  }
  for (let i = 0; i < array.length; i++) {
    if (i === pageItemView) {
      break;
    }
    let list = `
          <li>
              <a class = "img_link_01" href = './detail_product_buy.html'>
                  <img src = ${array[i].imgSrc[0]} alt = "product_img_${i}">
              </a>    
              <a class = "img_link_02" href = './detail_product_buy.html'>
                  <img src = ${array[i].imgSrc[1]} alt = "product_img_${i}_hover">
              </a>
              <a class = "product_name" href = "./detail_product_buy.html">
                  ${array[i].productNameKor}
              </a>
              <a class = "model_name" href = "./detail_product_buy.html">
                  ${array[i].productModelName}
              </a>
              <span class = "price_unit">₩</span>
              <span class = "price">${array[i].price.toLocaleString()}</span>
          </li>
      `

    if (array[i].isBest === true && array[i].isNew === true) {
      list = list.replaceAll(`<a class = "product_name" href = "./detail_product_buy.html">`, `<span class="best">BEST</span><span class="new">NEW</span><a class = "product_name" href = "./detail_product_buy.html">`);
    } else if (array[i].isBest === true) {
      list = list.replaceAll(`<a class = "product_name" href = "./detail_product_buy.html">`, `<span class="best">BEST</span><a class = "product_name" href = "./detail_product_buy.html">`);
    } else if (array[i].isNew === true) {
      list = list.replaceAll(`<a class = "product_name" href = "./detail_product_buy.html">`, `<span class="new">NEW</span><a class = "product_name" href = "./detail_product_buy.html">`);
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
  let startIndex = (firstValue + 1) * lastValue - lastValue; //sub_page_product_list기준 0, 1, 2
  let lastIndex = lastValue + startIndex;

  let returnArray = array.slice(startIndex, lastIndex); //배열복제
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
  ClassArray.forEach((ClassName) => {
    Element.classList.add(ClassName);
  });
}

//클래스 제거
function removeClass(Element, ClassName) {
  Element.classList.remove(ClassName);
}
