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

    serachTabState = false;

    removeClass(searchEx, 'block_on');

    removeClass(searchBar, 'search_on');
    removeClass(searchCloseBtn, 'search_close_on');

});

searchDelete.addEventListener('click', () => {
    searchTab.focus();
    searchTab.value = '';
});


/*************** top_btn ******************/
const topBtn = document.querySelector('.top_btn');
const siteInfoSection = document.querySelector('.site_info');
const footerEx = document.querySelector('.footer_ex');

let siteInfoHeight = siteInfoSection.offsetHeight;
let footerExHeight = footerEx.offsetHeight;
let totalHeight = siteInfoHeight + footerExHeight;

topBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
    })
})


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