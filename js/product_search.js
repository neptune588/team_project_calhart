/************************ search_product_list ****************************/
const searchPdWrapper = document.getElementById('product_list');
const searchPageSection = document.getElementById('search_pagenation');
const searchPageNumber = document.querySelector('.page_number');

//페이지 컨트롤 요소
const searchPrevPage = document.getElementById('search_prev_btn');
const searchNextPage = document.getElementById('search_next_btn');
const searchFisrtPage = document.getElementById('search_first_prev_btn');
const searchLastPage = document.getElementById('search_last_next_btn');

//상품정보표기
const pdName = document.getElementById('search_value');
const pdLengthView = document.getElementById('list_length');

//검색페이지내의 검색창
const pdSearchInput = document.getElementById('product_page_search');
//검색어 삭제
const searchValueDelete = document.getElementById('search_delete_btn');
//검색창 최대 글자 입력 갯수
const searchInputMaxLength = pdSearchInput.getAttribute('maxlength');

const searchObj = {
  referenceArr: [],
  liWrapper: searchPdWrapper,
  maxView: 12,
  pageNumber: null,
  pageWrapper: searchPageNumber,
  pageSection: searchPageSection,
  paegLength: 0,
  curPageIndex: 0,
}


dataRequest(new URLSearchParams(location.search).get('q'));
async function dataRequest(param) {
  const request = await dataReceive();


  searchObj.referenceArr = [...listFilter(request, param)];

  listCreate(searchObj, searchObj.referenceArr);
  pageCreate(searchObj);

  txtChange(pdName, param);
  txtChange(pdLengthView, searchObj.referenceArr.length);
}

//검색창 관련
pdSearchInput.focus();
pdSearchInput.addEventListener('keyup', (e) => {
  if (e.target.value.length > searchInputMaxLength) {
    e.target.value = e.target.value.substring(0, searchInputMaxLength);
  }
  if (e.key === "Enter") {
    let time;
    clearTimeout(time);

    time = setTimeout(() => dataRequest(e.target.value), 20);
  }
});
searchValueDelete.addEventListener('click', () => {
  pdSearchInput.value = "";
  pdSearchInput.focus();
});

//page Move
searchPrevPage.addEventListener('click', () => pagePrevClick(searchObj));
searchNextPage.addEventListener('click', () => pageNextClick(searchObj));
searchFisrtPage.addEventListener('click', () => pageFirstClick(searchObj));
searchLastPage.addEventListener('click', () => pageLastClick(searchObj));

function dataReceive() {
  return fetch('./product_search_data.json').then(res => res.json());
}

function listFilter(arr, value) {
  return arr.filter(obj => {
    if (value === '' || value === undefined || value === null) {
      return false;
    } else {
      return obj.productNameKor.replace(/(\s*)/g, "").includes(value) || obj.productModelName.replace(/(\s*)/g, "").includes(value) || obj.productStyle.replace(/(\s*)/g, "").includes(value);
    }
  })
}

function listCreate(obj, arr) {
  let list01 = ``;
  let list02 = ``;
  let list03 = ``;

  let receive = ``;

  if (arr.length === 0) {
    obj.liWrapper.innerHTML = `
        <div class="search_not_ment">
          <p>
            <i class="far fa-times-circle"></i>
            검색어와 일치하는 내용이 없습니다.
          </p>
          <p>다른 검색어를 입력하시거나, 검색어와 띄어쓰기를 확인 해보세요.</p>
        </div>
      `
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (i === obj.maxView) {
        break;
      }

      list01 = `
                  <a class = "img_link_01" href = './detail_product_buy.html'>
                      <img src = ${arr[i].imgSrc[0]} alt = "product_img_${i}">
                  </a>    
                  <a class = "img_link_02" href = './detail_product_buy.html'>
                      <img src = ${arr[i].imgSrc[1]} alt = "product_img_${i}_hover">
                  </a>
              `

      list02 = `
                  <a class = "product_name" href = "./detail_product_buy.html">
                      ${arr[i].productNameKor}
                  </a>
                  <a class = "model_name" href = "./detail_product_buy.html">
                      ${arr[i].productModelName}
                  </a>
                  <span class = "price_unit">₩</span>
                  <span class = "price">${arr[i].price.toLocaleString()}</span>
              `

      if (arr[i].isNew) {
        list02 = `
                  <span class="new">NEW</span>
                  ${list02}
              `
      }

      if (arr[i].isBest) {
        list02 = `
                  <span class="best">BEST</span>
                  ${list02}
              `
      }

      list03 = `
          <li>
              ${list01}
              ${list02}
          </li>
          `
      receive += list03;
    }
    obj.liWrapper.innerHTML = receive;
  }

}

function pageCreate(obj) {
  let list = ``;
  let receive = ``;

  obj.paegLength = pageCalc(obj.referenceArr, obj.maxView);
  if (obj.referenceArr.length === 0) {
    addClass(obj.pageSection, 'none_on');
  } else {
    for (let i = 0; i < obj.paegLength; i++) {
      list = `<li>${i + 1}</li>`

      if (i === obj.curPageIndex) {
        list = `<li class="page_on">${i + 1}</li>`
      }

      receive += list;
    }

    obj.pageWrapper.innerHTML = receive;
    removeClass(obj.pageSection, 'none_on');
  }

  pageControl(obj);
}

function pageControl(obj) {
  const pageBtn = obj.pageWrapper.querySelectorAll('li');
  //매번 객체에 바뀐 el 갱신
  //prev,next btn은 매번 새로 덮어씌워지는게 아니므로, 오브젝트에 항상 el을 갱신시켜주고
  //그 el에게 page_on클래스를 주자.

  obj.pageNumber = pageBtn;

  pageBtn.forEach((page, index) => {
    page.addEventListener('click', () => {
      for (let j = 0; j < pageBtn.length; j++) {
        removeClass(pageBtn[j], 'page_on');
      }
      addClass(page, 'page_on');
      obj.curPageIndex = index;

      listCreate(obj, arrSlice(obj.curPageIndex, obj));

      window.scrollTo({
        top: 0
      });
    })
  })
}

function pagePrevClick(obj) {
  obj.curPageIndex = obj.curPageIndex - 1;

  if (obj.curPageIndex < 0) {
    obj.curPageIndex = 0;
    alert('첫번쨰 페이지 입니다!');
    //console.log(obj.curPageIndex);

  } else {
    for (let j = 0; j < obj.pageNumber.length; j++) {
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
    for (let j = 0; j < obj.pageNumber.length; j++) {
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

    obj.pageNumber.forEach(li => removeClass(li, 'page_on'));
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

    obj.pageNumber.forEach(li => removeClass(li, 'page_on'));
    addClass(obj.pageNumber[obj.curPageIndex], 'page_on');

    listCreate(obj, arrSlice(obj.curPageIndex, obj));

    window.scrollTo({
      top: 0
    });
  }
}

function pageCalc(arr, viewLength) {
  const pageNum = Math.ceil(arr.length / viewLength);
  return pageNum;
}
//list_slice
function arrSlice(index, obj) {
  let first = index * obj.maxView;
  let last = first + obj.maxView;

  const slice = obj.referenceArr.slice(first, last);
  return slice;
}

function addClass(el, ClassName) {
  el.classList.add(ClassName);
}

function removeClass(el, ClassName) {
  el.classList.remove(ClassName);
}

function txtChange(el, txt = "") {
  el.textContent = txt;
}