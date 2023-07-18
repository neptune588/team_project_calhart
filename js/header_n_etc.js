
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
const fullDonwInnerImg = document.querySelectorAll('.menu_img > img');

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

const navSrc = [
    {
        src: ["./images/menu_img_01-1.jpg","./images/menu_img_01-2.jpg"]
    },
    {
        src: ["./images/menu_img_02-1.jpg","./images/menu_img_02-2.jpg"]
    },
    {
        src: ["./images/menu_img_03-1.jpg","./images/menu_img_03-2.jpg"]
    },
    {
        src: ["./images/menu_img_04-1.jpg","./images/menu_img_04-2.jpg"]
    },
    {
        src: ["./images/menu_img_05-1.jpg","./images/menu_img_05-2.jpg"]
    },
    {
        src: ["./images/menu_img_06-1.jpg","./images/menu_img_06-2.jpg"]
    }
];

//메인 메뉴 호버에 따라 img박스 속성 변경 
for (let i = 0; i < mainMenuLi.length; i++) {
    mainMenuLi[i].addEventListener('mouseover', () => {

        setAttributeMuliti(fullDonwInnerImg[0], [
            ["src", navSrc[i].src[0]],
            ["alt", `nav_hover_img${i + 1}-1`]
        ]);
        setAttributeMuliti(fullDonwInnerImg[1], [
            ["src", navSrc[i].src[1]],
            ["alt", `nav_hover_img${i + 1}-2`]
        ]);
    });
}

/*************** keword_auto_move ******************/

const kewordHref = [
    {
        num: 1,
        href: ["./sub_product_list.html"],
        content: "티셔츠"
    },
    {
        num: 2,
        href: ["./sub_product_list.html"],
        content: "맨투맨"
    },
    {
        num: 3,
        href: ["./sub_product_list.html"],
        content: "셔츠"
    },
    {
        num: 4,
        href: ["./sub_product_list.html"],
        content: "청바지"
    },
    {
        num: 5,
        href: ["./sub_product_list.html"],
        content: "언더웨어"
    }
]

const keywordList = document.getElementById('keyward_list');

kewordFrameMaker();
function kewordFrameMaker() {
    let list = ``;
    let receive = ``;

    kewordHref.forEach((object) => {
        list = `
            <li>
                <span>${object.num}</span>
                <a href="${object.href}">${object.content}</a>
            </li>
        `

        receive += list;
    })

    keywordList.innerHTML = receive;
    keywordList.appendChild(cloneCreate(keywordList.children[0]));
}

function cloneCreate(el) {
    return el.cloneNode(true);
}

/*************** object_list ************/
//li 마진값 추출
const keywordMargin = parseInt(window.getComputedStyle(keywordList.children[0]).getPropertyValue('margin-bottom'), 10);
//li 마진값 + offsetHeight로 이동값 계산
const moveValue = moveValueCalc(keywordList.children[0]) + keywordMargin;
//li 이동시간 추출
const moveDelay = parseFloat(window.getComputedStyle(document.querySelector('.keyward_list_active')).getPropertyValue('transition-duration')) * 1000;

const arguObject = {
    moveEl: keywordList,
    ctrlClass: 'keyward_list_active',
    moveCount: 0,
    calcCount: -1,
    moveArrow: "top",
    moveValue: moveValue,
    moveTime: moveDelay,
    countMax: (keywordList.children.length - 1) * -1    
}

function moveValueCalc(el) {
    return el.offsetHeight;
}

/*************** 동작함수 ************/
let clearCount;

//동작함수 ,리셋함수, 재실행 함수 3단계로 나누어서 코드를 짜자.
moveInterval(arguObject);
function moveInterval(obj) {
    //동작
    addClass(obj.moveEl, obj.ctrlClass);

    let repeatMove = setInterval(() => {
        clearCount = 0;
        obj.moveCount += obj.calcCount;
        //console.log("현재" + moveCount, "마지막" + keywordList.children.length * -1)
        obj.moveEl.style[obj.moveArrow] = obj.moveCount * obj.moveValue + 'px';
        
        //리셋
        if(obj.moveCount === obj.countMax) {
            //마지막 li 이동 -> delay -> 트랜지션 제거 후 0으로 이동 시키고 -> 인터벌 종료.
            setTimeout(() => {
                removeClass(obj.moveEl, obj.ctrlClass);
        
                //1번으로 이동시키기 위해
                obj.moveCount = 0;
                obj.moveEl.style[obj.moveArrow] = obj.moveCount * obj.moveValue + 'px';
                
            }, obj.moveTime + 250);
        }        

        //재실행
        clearCount++;
        if(clearCount === 1) {
            clearInterval(repeatMove);
    
            setTimeout(() => {
                moveInterval(obj);
            }, obj.moveTime + 300);
        }
    });
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


window.addEventListener('scroll', debounce(60));

function debounce(delay) {
    let controlTime;
    //console.log(window.scrollY);

    return function () {
        clearTimeout(controlTime);
        controlTime = setTimeout(() => {
            quickMenu.style.top = `${window.scrollY + quickMenuLocate}px`;
        }, delay);
    }
}


/*************** common ******************/

//클래스 추가
function addClass(Element, ClassName) {
    Element.classList.add(ClassName);
}
//클래스 제거
function removeClass(Element, ClassName) {
    Element.classList.remove(ClassName);
}
function setAttributeMuliti(el, attrArr) {
/*     attrArr.forEach((innerArr) => {
        const [attrName, attrValue] = innerArr;
        el.setAttribute(attrName, attrValue);
    }) */

    for(let [attrName, attrValue] of attrArr) {
        el.setAttribute(attrName, attrValue)
    }
}