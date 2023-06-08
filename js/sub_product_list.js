import {
    sub_page_product_list
} from './data.js'

console.log("subpage loaded");


/*************** product_list ******************/
const productListWrapper = document.querySelector('.product_list_wrapper');
const pageSection = document.querySelector('.pagenation');
const pageNumber = document.querySelector('.page_number');
//변수 선언 해놓고 반복문돌려서 li생성되면 queryselectorall로 받기
let pageItemView = 12;

const fillterArrayTopMenu = [];
const fillterArrayPrice = [];
const fillterArrayColor = [];
const fillterArraySale = [];

const stateObject = {
    topArray : [],
    colorArray : [],
    priceArray : [],
    saleArrray : [],
}

//전체페이지 기준으로, 1페이지 작성
//페이지 카운터 생성 함수 호출
listnPageCreate(sub_page_product_list);
/* topMenuStateObject.allstate = true; */
//console.log(topMenuStateObject.allstate);

//페이지 카운터 생성 함수, 필터의 조건을 누를떄마다 실행하게 계획, 무조건 인덱스0 즉 숫자1에는 불이 들어와야하니까
//페이지 생성 후 인덱스 0에 스타일클래스 부여
//필터의 조건들을 누를 시 매 빈 배열에 조건에 맞게 값을 가져올것이기 떄문에, 계산식도 함수로 지정하여 매개변수 이용
//calc(내가만든배열); 하면 계산식이 나오게 된다. 아이템갯수에 따라

const filterBox = document.querySelector('.filter_btn');
const filterSection = document.querySelectorAll('.filter_section');
let filterState = false;

filterBox.addEventListener('click', () => {
    if (!filterState) {
        addClass(filterBox, 'filter_on');
        filterSection.forEach((value) => {
            addClass(value, `block_on`);
        });
        filterState = true;
    } else {
        removeClass(filterBox, 'filter_on');
        filterSection.forEach((value) => {
            removeClass(value, `block_on`);
        });
        filterState = false;
    }
});


function clickEvent(...a) {
    const objectArray = [];
    objectArray.push(a);
    return objectArray;
}

//top메뉴 클릭효과
const topMenuList = document.querySelectorAll('.product_menu_list input');
const topMenuListStyle = document.querySelectorAll('.product_menu_list .chk_box');
topMenuList.forEach((input, i) => {
    input.addEventListener('click', function() {
        if(input.checked) {
            fillterArrayTopMenu.push(input.value);
            addClass(topMenuListStyle[i], 'clicked');
        } else {
            let valueIndex = fillterArrayTopMenu.indexOf(input.value);
            fillterArrayTopMenu.splice(valueIndex, 1);
            removeClass(topMenuListStyle[i], 'clicked');
        }
        let array = arrayReturn(sub_page_product_list, fillterArrayTopMenu);
        stateObject.topArray = clickEvent(array);
        totalcheck(stateObject);
    });
});

//컬러메뉴 클릭효과
const colorSelector = document.querySelectorAll('.color_select input');
const colorSelectorStyle = document.querySelectorAll('.color_select .chk_box');
colorSelector.forEach((input, i) => {
    input.addEventListener('click', function() {
        if(input.checked) {
            fillterArrayColor.push(input.value);
            addClass(colorSelectorStyle[i], 'clicked_border');
        } else {
            let valueIndex = fillterArrayColor.indexOf(input.value);
            fillterArrayColor.splice(valueIndex, 1);
            removeClass(colorSelectorStyle[i], 'clicked_border');
        }
        let array = arrayReturn(sub_page_product_list, fillterArrayColor);
        stateObject.colorArray = clickEvent(array);
        totalcheck(stateObject);
    })
})

//가격메뉴 클릭효과
const priceSelector = document.querySelectorAll(`.price_select input`);
priceSelector.forEach((input) => {
    input.addEventListener('click', () => {
        if (input.checked) {
            fillterArrayPrice.push(input.value);
        } else {
            let valueIndex = fillterArrayPrice.indexOf(input.value);
            fillterArrayPrice.splice(valueIndex, 1);
        }
        let array = arrayReturn(sub_page_product_list, fillterArrayPrice);
        stateObject.priceArray = clickEvent(array);
        totalcheck(stateObject);
    });
});

//세일메뉴 클릭효과
const saleSelector = document.querySelectorAll(`.sale_select input`);
saleSelector.forEach((input) => {
    input.addEventListener('click', () => {
        if (input.checked) {
            fillterArraySale.push(input.value);
        } else {
            let valueIndex = fillterArraySale.indexOf(input.value);
            fillterArraySale.splice(valueIndex, 1);
        }
        let array = arrayReturn(sub_page_product_list, fillterArraySale);
        stateObject.saleArrray = clickEvent(array);
        totalcheck(stateObject);
    });
});


function arrayReturn(array01 = '', array02 = '') {
    let returnArray;
    returnArray = array01.filter((object) => {
        for (let value in object) {
            if (array02.includes(object[value])) {
                return true;
            }
        }
    })
    return returnArray;
}

function totalcheck(object) {
    console.log(object[0]);

    /* 1. object 안의 어레이 추출
    2. 클릭했을떄 상태의 배열 가져와서 한 배열에 전부 합산
    3. arrayreturn함수로 밸류담고잇는 클릭했을때 배열 과 합산 배열 비교
    4. arrayreturn 함수로 비교해보면 될듯, 주가 되는 배열은 결국 다른게 클릭됐을때의 배열 */
}


/*************** common function ******************/
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

function listnPageCreate(array) {
    listCreate(array);
    pageCreate(array);
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

function stateObjectReset(object) {
    for (let key in object) {
        object[key] = false;
    }
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