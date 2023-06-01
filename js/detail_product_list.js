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


/*************** color_box선택시 바뀌는 글자 목록 ******************/
const reviewCreateBtn = document.querySelector('.create_btn');
const reviewCreateArea = document.querySelector('.review_create');
const reviewBox = document.getElementById('review_text_box');
const reviewLengthBox = document.querySelector('.now_length');

let rvCrteBtnState = false;
reviewCreateBtn.addEventListener('click', () => {
    if (!rvCrteBtnState) {
        addClass(reviewCreateArea, `block_on`);
        reviewBox.focus();
        rvCrteBtnState = true;
    } else {
        removeClass(reviewCreateArea, `block_on`);
        reviewBox.value = ``;
        rvCrteBtnState = false;
    }
});

reviewBox.addEventListener('keyup', (event) => {

    let reviewLengthReturn = reviewBox.value.length;
    reviewLengthBox.textContent = `${reviewLengthReturn} 자`;

    if (event.key === 'Enter') {
        event.preventDefault();
        console.log('엔터 누르셨습니다.');
    }

    /*     if(reviewLengthReturn > 100) {

        } */
});

/*************** info_tab_list ******************/
/* const infoTab = document.querySelectorAll('.info_tab_list > li > a');

infoTab.forEach((value) => {
    value.addEventListener('click', (event) => {
        event.preventDefault();
        let btnOffset = value.getAttribute('href');
        let move = document.querySelector(btnOffset);

        window.scrollTo({
            top: move.offsetTop,
            behavior: 'smooth',
        });
    });
}); */


/* scrollSearch();
function scrollSearch() {
    window.addEventListener('scroll', () => {
        console.log(window.scrollY);
        console.log(infoTab[0].offsetTop);
    });
} */

//클래스 추가
function addClass(Element, ClassName) {
    Element.classList.add(ClassName);
}
//클래스 제거
function removeClass(Element, ClassName) {
    Element.classList.remove(ClassName);
}