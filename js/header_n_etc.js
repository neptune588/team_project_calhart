import {
    sub_page_product_list
} from './data.js'

/*************** header ******************/
//nav
const navEx = document.getElementById('lnb_ex');
//full_down_menu
const fullDownMenu = document.getElementById('full_down_menu_ex');
//sub_menu_ul
const liInnerUl = document.querySelectorAll('.li_inner_ul');
//main_menu_li
const mainMenuLi = document.querySelectorAll('.main_menu_list > .menu_list');
//full_down_img box
const fullDonwInnerImg = document.querySelectorAll('.menu_img');

//풀다운 토글
navEx.addEventListener('mouseover', () => {
    addClass(fullDownMenu, 'full_down_on');
    for (let i = 0; i < liInnerUl.length; i++) {
        addClass(liInnerUl[i], 'block_on');
    }
})
navEx.addEventListener('mouseout', () => {
    removeClass(fullDownMenu, 'full_down_on');
    for (let i = 0; i < liInnerUl.length; i++) {
        removeClass(liInnerUl[i], 'block_on');
    }
});

//메인 메뉴 호버에 따라 img박스 속성 변경 
for (let i = 0; i < mainMenuLi.length; i++) {
    mainMenuLi[i].addEventListener('mouseover', () => {
        for (let j = 0; j < fullDonwInnerImg.length; j += fullDonwInnerImg.length) {
            fullDonwInnerImg[j].children[0].setAttribute('src', `./images/menu_img_${i + i}.jpg`);
            fullDonwInnerImg[j + 1].children[0].setAttribute('src', `./images/menu_img_${i + i + 1}.jpg`);
        }
    });
}

//keword_auto_move
const keyWordMoveUl = document.querySelector('.keyward_list');
const keyWordLiHeight = keyWordMoveUl.children[0].offsetHeight + 5;

//style.top 초기화를 위함 + 현재 위치 탐색 카운트
let keyWordMoveCount = 0;
let topZeroCount = 0;

let kewordClone = keyWordMoveUl.children[0].cloneNode(true);
keyWordMoveUl.appendChild(kewordClone);
//keyword autoplay 
keyWordMove();

function keyWordMove() {
    let clearCount = 0;
    topZeroCount++;
    //sliderMove(topMoving, keyWordMoveCount, topMoved, keyWordLiHeight ,keyWordMoveUl, clearCount);
    addClass(keyWordMoveUl, 'keyward_list_active');
    let topMoving = setInterval(() => {
        keyWordMoveCount--;

        let topMoved = move(keyWordLiHeight, keyWordMoveCount);
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
    setTimeout(() => {
        if (topZeroCount === 5) {
            removeClass(keyWordMoveUl, 'keyward_list_active');
            keyWordMoveUl.style.top = 0;
            topZeroCount = 0;
        }
    }, 1050);
    setTimeout(() => {
        keyWordMove();
    }, 1150);
}


/*************** search ******************/
const body = document.querySelector('body');

const searchOnBtn = document.querySelector('.gnb_list > .icon');
const searchCloseBtn = document.querySelector('.search_ex .close_btn');

const searchEx = document.querySelector('.search_ex');
const searchBar = document.querySelector('.search');

const searchTab = document.getElementById('product_search');
const searchDelete = document.querySelector('.search_delete');

const recommendSearch = document.getElementById('recommend_search');

let serachTabState = false;

//search_on
searchOnBtn.addEventListener('click', function () {

    if (!serachTabState) {

        body.style.overflow = 'hidden';

        addClass(searchEx, 'block_on');

        setTimeout(() => {
            searchTab.focus();
            addClass(searchBar, 'search_on');
            addClass(searchCloseBtn, 'search_close_on');
        }, 50)

        serachTabState = true;
    }
});

//search_off
searchCloseBtn.addEventListener('click', () => {
    body.style.overflow = 'visible';

    searchTab.value = '';

    serachTabState = false;

    removeClass(searchEx, 'block_on');

    removeClass(searchBar, 'search_on');
    removeClass(searchCloseBtn, 'search_close_on');
    removeClass(recommendSearch, 'block_on');

});

searchDelete.addEventListener('click', () => {
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
        const searchValue = encodeURIComponent(e.target.value);
        //encodeURIComponent란? 괄호안에 오는 값을 url값으로 인코딩할때 쓰는 메서드

        //인코딩을 하는 이유는 

        //URL에 사용할 수 없거나 특수한 의미를 가지는 문자들을 안전하게 전송하기 위해, 
        //URL은 일부 문자를 특별한 목적으로 예약하고 있기 때문에, 이러한 예약된 문자들은 인코딩되어야 한다.

        //인코딩되어야 하는 문자에는 URL에 사용되는 
        //구분자인 ? , & , = , #, 슬래시 / , 공백 등이 있다.

        //만약 URL에 이러한 특수문자가 포함되어 있다면, 인코딩하여 안전하게 전송해야 한다고 함.

        const resultUrl = './product_search.html?q=' + searchValue; 
        //console.log(resultUrl);
        location.href = resultUrl;
    }
});

searchTab.addEventListener('blur', () => {
    removeClass(recommendSearch, 'block_on');
});
searchTab.addEventListener('focus', function () {
    setTimeout(() => {
        if (this.value.length > 0) {
            addClass(recommendSearch, 'block_on');
        }
    }, 10);
});


/*************** top_btn ******************/
const topBtn = document.querySelector('.top_btn');

topBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
    })
})


/*************** quick_menu ******************/
const quickMenu = document.getElementById('quick_menu');

//let prevScroll = 0;
let quickMenuLocate = quickMenu.offsetTop;

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
    let controlTime;
    //console.log(window.scrollY);

    return function () {
        clearTimeout(controlTime);
        controlTime = setTimeout(() => {
            console.log(window.scrollY);
            quickMenu.style.top = `${window.scrollY + quickMenuLocate}px`;
        }, delay);
    }
}


/*************** common ******************/
//position값 계산
function move(LiWidth, count) {
    return (LiWidth * count) + `px`;
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
    for (let i = 0; i < elements.length / 2; i++) {
        let cloneElement = elements[i].cloneNode(true);
        parentEle.appendChild(cloneElement);
    }
}
//클론 만들기 함수02
function cloneCreate02(elements, parentEle) {
    for (let i = 0; i < elements.length; i++) {
        let cloneElement = elements[i].cloneNode(true);
        parentEle.insertBefore(cloneElement, elements[0]);
    }
}