import {
    detail_page_produdct_list
} from './data.js'

/*************** view_thumnail ******************/
const viewContainer = document.querySelector('.view_thumnail');
const viewZoomBox = document.querySelectorAll('.view_thumnail > div');
const viewSmallThumnail = document.querySelectorAll('.img_box > img');
const viewSmallThumnailHover = document.querySelectorAll('.src_img > img');
const colorSelectBox = document.querySelectorAll('.color_select_box > a');
const sizeSelectBox = document.querySelectorAll('.size_list> li');

/*************** color_box선택시 바뀌는 글자 목록 ******************/
const changeCodeNum = document.querySelector('.code_number');
const changeProductName = document.querySelector('.product_name');
const changeProductMoney = document.querySelector('.product_money');
const changeProductPoint = document.querySelector('.product_point');


for (let i = 0; i < viewSmallThumnail.length; i++) {
    //초기설정
    thumnailChange(viewSmallThumnail, 0, i, detail_page_produdct_list, `imgSrc01`);
    thumnailChange(viewSmallThumnailHover, 0, i, detail_page_produdct_list, `imgSrc02`);

    viewSmallThumnail[i].addEventListener('click', function () {
        viewZoomBox[0].style.backgroundImage = `url(${viewSmallThumnail[i].src})`;
        viewZoomBox[1].style.backgroundImage = `url(${viewSmallThumnailHover[i].src})`;
    });
}

//color 선택 박스 클릭시
for (let i = 0; i < colorSelectBox.length; i++) {
    colorSelectBox[i].addEventListener('click', function () {
        //클릭한 컬러박스의 인덱스 번호에 맞게 첫 hover이미지변경
        viewZoomBox[0].style.backgroundImage = `url(${detail_page_produdct_list[i].imgSrc01[0]})`;
        viewZoomBox[1].style.backgroundImage = `url(${detail_page_produdct_list[i].imgSrc02[0]})`;

        //컬러 박스를 클릭했을시 작은 썸네일 변경
        for (let j = 0; j < detail_page_produdct_list[i].imgSrc01.length; j++) {
            thumnailChange(viewSmallThumnail, i, j, detail_page_produdct_list, `imgSrc01`);
            thumnailChange(viewSmallThumnailHover, i, j, detail_page_produdct_list, `imgSrc02`);
        }

        changeCodeNum.textContent = detail_page_produdct_list[i].productCode;
        changeProductName.textContent = detail_page_produdct_list[i].productNameKor;
        changeProductMoney.textContent = detail_page_produdct_list[i].price.toLocaleString();
        changeProductPoint.textContent = detail_page_produdct_list[i].price * 0.005;
    });
}

for (let i = 0; i < sizeSelectBox.length; i++) {
    sizeSelectBox[i].addEventListener('click', function () {
        for (let j = 0; j < sizeSelectBox.length; j++) {
            removeClass(sizeSelectBox[j], `bgc_amber`);
        }
        addClass(this, `bgc_amber`);
    })
}
//배열에서 src시 가져옴.
function thumnailChange(srcChangeArray, num01, num02, array, imgProperty) {
    srcChangeArray[num02].setAttribute('src', `${array[num01][imgProperty][num02]}`);
    srcChangeArray[num02].setAttribute('alt', `${array[num01][imgProperty][num02]}`);
}

viewContainer.addEventListener('mousemove', (event) => {
    let moveLocateX = event.offsetX;
    let moveLocateY = event.offsetY;

    viewZoomBox[1].style.backgroundPositionX = `${moveLocateX * -2}px`;
    viewZoomBox[1].style.backgroundPositionY = `${moveLocateY * -2}px`;
});

viewContainer.addEventListener('mouseout', () => {
    viewZoomBox[1].style.backgroundPositionX = `0`;
    viewZoomBox[1].style.backgroundPositionY = `0`;
});


/*************** review 관련  ******************/
const reviewCreateBtn = document.querySelector('.create_btn');
const reviewCreateComBtn = document.getElementById('create_complete');
const reviewCreateArea = document.querySelector('.review_create');
const reviewBox = document.getElementById('review_text_box');
const reviewLengthBox = document.querySelector('.now_length');
const reviewCounting = document.querySelector('.review_couting');
const reviewList = document.querySelector('.review_list');

//한 페이지에 몇개 보여줄것인지
const pageViewLength = 6;
const pageSection = document.querySelector('.pagenation');
const pageUl = document.querySelector('.page_list');

//list 들어갈 배열 
const reviewContents = [];

let rvCrteBtnState = false;
reviewCreateBtn.addEventListener('click', () => {
    if (!rvCrteBtnState) {
        addClass(reviewCreateArea, `block_on`);

        reviewBox.focus();
        rvCrteBtnState = true;
    } else {
        removeClass(reviewCreateArea, `block_on`);

        valueReset();

        rvCrteBtnState = false;
    }
});

reviewBox.addEventListener('input', () => {
    let reviewLengthReturn = reviewBox.value.length;
    reviewLengthBox.textContent = `${reviewLengthReturn} 자`;
});

reviewCreateComBtn.addEventListener('click', () => {
    if (reviewBox.value !== null && reviewBox.value !== '' && reviewBox.value !== undefined) {
        //배열 push
        reviewContents.push(reviewBox.value);

        //문자열 알림 리셋
        valueReset();
        //focus
        reviewBox.focus();

        //리스트 생성
        createList(reviewContents);
        pageCreate(reviewContents);

        //리뷰 몇개인지 알려줌.
        reviewCounting.textContent = reviewContents.length;

        console.log(reviewContents);
    } else {
        console.log('불가!');
    }
});

function createList(array) {
    let newDate = new Date();
    let nowYear = newDate.getFullYear();
    let nowMonth = newDate.getMonth() + 1;
    let nowDay = newDate.getDate();

    if (nowDay < 10) {
        nowDay = `0${nowDay}`;
    }
    if (nowMonth < 10) {
        nowMonth = `0${nowMonth}`;
    }

    let receive = ``;
    for (let i = 0; i < array.length; i++) {
        if(i === pageViewLength) {
            break;
        }

        let list = `
            <li>
                <p class="review_ment">
                    ${array[i]}
                </p>
                <div class="right_info">
                <span class="rating_star"></span>
                <span class="review_date date">${nowYear}-${nowMonth}-${nowDay}</span>
                <span class="review_id">ju****</span>
            </div>
            </li>
        `
        receive += list;
    }
    reviewList.innerHTML = receive;
}

function pageCreate(array) {
    if (array.length === 0) {
        addClass(pageSection, `none_on`);
    } else {
        removeClass(pageSection, `none_on`);
    }
    let receive = ``;
    pageUl.innerHTML = ``;
    for (let i = 1; i <= calc(array); i++) {
        let pageList =
            `
            <li>
                ${i}
            </li>    
        `
        receive += pageList;
    }
    pageUl.innerHTML = receive;
    pageControl(array);
}

function pageControl(array) {
    const pageNumber = document.querySelectorAll('.page_list > li');
    for(let i = 0; i < pageNumber.length; i++) {
        pageNumber[i].addEventListener('click', function(){
            for(let j = 0; j < pageNumber.length; j++) {
                removeClass(pageNumber[j], `page_on`);
            }
            addClass(pageNumber[i], `page_on`);
            let returnSlice = arraySlice(i, pageViewLength, array);
            createList(returnSlice);
        });
        let returnSlice = arraySlice(i, pageViewLength, array);
        createList(returnSlice);
    }
}

function arraySlice(index01, index02, array) {
    let firstIndex = (index01 + 1) * index02 - index02;
    let lastIndex = firstIndex + index02;
    
    let returnArray = array.slice(firstIndex, lastIndex);

    return returnArray;
}

function calc(array) {
    return Math.ceil(array.length / pageViewLength);
}

function valueReset() {
    reviewBox.value = ``;
    reviewLengthBox.textContent = `${0} 자`;
}
//클래스 추가
function addClass(Element, ClassName) {
    Element.classList.add(ClassName);
}
//클래스 제거
function removeClass(Element, ClassName) {
    Element.classList.remove(ClassName);
}