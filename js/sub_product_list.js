import {
    sub_page_product_list
} from './data.js'

console.log("subpage loaded");

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


/*************** product_list ******************/
const productListWrapper = document.querySelector('.product_list_wrapper');
const pageSection = document.querySelector('.pagenation');
const pageNumber = document.querySelector('.page_number');
//변수 선언 해놓고 반복문돌려서 li생성되면 queryselectorall로 받기
let pageItemView = 12;

const topMenuStateObject = {
    allstate: false,
    jaketState: false,
    sweaterState: false,
    neatState: false,
    shirtState: false,
    TShirtState: false,
}
const priceStateObject = {
    costRange050000: false,
    costRange50000150000: false,
    costRange150000250000: false,
    costRange250000500000: false,
    costRange500000: false,
}

//전체페이지 기준으로, 1페이지 작성
//페이지 카운터 생성 함수 호출
listnPageCreate(sub_page_product_list);
topMenuStateObject.allstate = true;
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

const topMenuList = document.querySelectorAll('.product_menu_list > li');
for (let i = 0; i < topMenuList.length; i++) {
    topMenuList[i].addEventListener('click', () => {
        for (let j = 0; j < topMenuList.length; j++) {
            removeClass(topMenuList[j], 'clicked');
        }
        addClass(topMenuList[i], 'clicked');
        menuchecks01(i);
    })
}

function menuchecks01(i) {
    switch (i) {
        case 0: {
            //버튼 상태변수 전부 초기화
            stateObjectReset(topMenuStateObject);
            //내가 클릭한것만 상태 true
            topMenuStateObject.allstate = true;

            //금액 chkbox가 체크되었을경우에만 조건을 걸어주면 된다. 체크가 해제되엇을경우는 밑에서 명령어 처리를 해놓았기 때문에 
            //chkbox가 선택되어있으면서 all탭이 선택됐을때 

            if (priceStateObject.costRange050000 && topMenuStateObject.allstate) {
                let returnArray = pricechkRetrunArray(sub_page_product_list, `price`, 0, 50000);
                listnPageCreate(returnArray);

            } else if (priceStateObject.costRange50000150000 && topMenuStateObject.allstate) {
                let returnArray = pricechkRetrunArray(sub_page_product_list, `price`, 50000, 150000);
                listnPageCreate(returnArray);

            } else if (priceStateObject.costRange150000250000 && topMenuStateObject.allstate) {
                let returnArray = pricechkRetrunArray(sub_page_product_list, `price`, 150000, 250000);
                listnPageCreate(returnArray);

            } else if (priceStateObject.costRange250000500000 && topMenuStateObject.allstate) {
                let returnArray = pricechkRetrunArray(sub_page_product_list, `price`, 250000, 500000);
                listnPageCreate(returnArray);

            } else if (priceStateObject.costRange500000 && topMenuStateObject.allstate) {
                let returnArray = pricechkRetrunArray(sub_page_product_list, `price`, 500000);
                listnPageCreate(returnArray);

            } else if (topMenuStateObject.allstate) {
                listnPageCreate(sub_page_product_list);
            }

            break;
        }
        case 1: {
            stateObjectReset(topMenuStateObject);
            topMenuStateObject.jaketState = true;

            //한번 더 걸러서 jakect인것에서 필터링해서 뽑아내야하기 때문에 
            if (priceStateObject.costRange050000 && topMenuStateObject.jaketState) {
                priceSaleCheck01(topMenuStateObject.jaketState, priceStateObject.costRange050000, `price`, `jaket`, 0, 50000);

            } else if (priceStateObject.costRange50000150000 && topMenuStateObject.jaketState) {
                priceSaleCheck01(topMenuStateObject.jaketState, priceStateObject.costRange50000150000, `price`, `jaket`, 50000, 150000);

            } else if (priceStateObject.costRange150000250000 && topMenuStateObject.jaketState) {
                priceSaleCheck01(topMenuStateObject.jaketState, priceStateObject.costRange150000250000, `price`, `jaket`, 150000, 250000);

            } else if (priceStateObject.costRange250000500000 && topMenuStateObject.jaketState) {
                priceSaleCheck01(topMenuStateObject.jaketState, priceStateObject.costRange250000500000, `price`, `jaket`, 250000, 500000);

            } else if (priceStateObject.costRange500000 && topMenuStateObject.jaketState) {
                priceSaleCheck01(topMenuStateObject.jaketState, priceStateObject.costRange500000, `price`, `jaket`, 500000);

            } else if (topMenuStateObject.jaketState) {
                let returnArray = checkArray(sub_page_product_list, `productStyle`, `jaket`);
                listnPageCreate(returnArray)
            }

            break;
        }
        case 2: {
            stateObjectReset(topMenuStateObject);
            topMenuStateObject.sweaterState = true;

            if (priceStateObject.costRange050000 && topMenuStateObject.sweaterState) {
                priceSaleCheck01(topMenuStateObject.sweaterState, priceStateObject.costRange050000, `price`, `sweater`, 0, 50000);

            } else if (priceStateObject.costRange50000150000 && topMenuStateObject.sweaterState) {
                priceSaleCheck01(topMenuStateObject.sweaterState, priceStateObject.costRange50000150000, `price`, `sweater`, 50000, 150000);

            } else if (priceStateObject.costRange150000250000 && topMenuStateObject.sweaterState) {
                priceSaleCheck01(topMenuStateObject.sweaterState, priceStateObject.costRange150000250000, `price`, `sweater`, 150000, 250000);

            } else if (priceStateObject.costRange250000500000 && topMenuStateObject.sweaterState) {
                priceSaleCheck01(topMenuStateObject.sweaterState, priceStateObject.costRange250000500000, `price`, `sweater`, 250000, 500000);

            } else if (priceStateObject.costRange500000 && topMenuStateObject.sweaterState) {
                priceSaleCheck01(topMenuStateObject.sweaterState, priceStateObject.costRange500000, `price`, `sweater`, 500000);

            } else if (topMenuStateObject.sweaterState) {
                let returnArray = checkArray(sub_page_product_list, `productStyle`, `sweater`);
                listnPageCreate(returnArray);
            }

            break;
        }
        case 3: {
            stateObjectReset(topMenuStateObject);
            topMenuStateObject.neatState = true;

            if (priceStateObject.costRange050000 && topMenuStateObject.neatState) {
                priceSaleCheck01(topMenuStateObject.neatState, priceStateObject.costRange050000, `price`, `neat`, 0, 50000);

            } else if (priceStateObject.costRange50000150000 && topMenuStateObject.neatState) {
                priceSaleCheck01(topMenuStateObject.neatState, priceStateObject.costRange50000150000, `price`, `neat`, 50000, 150000);

            } else if (priceStateObject.costRange150000250000 && topMenuStateObject.neatState) {
                priceSaleCheck01(topMenuStateObject.neatState, priceStateObject.costRange150000250000, `price`, `neat`, 150000, 250000);

            } else if (priceStateObject.costRange250000500000 && topMenuStateObject.neatState) {
                priceSaleCheck01(topMenuStateObject.neatState, priceStateObject.costRange250000500000, `price`, `neat`, 250000, 500000);

            } else if (priceStateObject.costRange500000 && topMenuStateObject.neatState) {
                priceSaleCheck01(topMenuStateObject.neatState, priceStateObject.costRange500000, `price`, `neat`, 500000);
            } else if (topMenuStateObject.neatState) {
                let returnArray = checkArray(sub_page_product_list, `productStyle`, `neat`);
                listnPageCreate(returnArray);
            }

            break;
        }
        case 4: {
            stateObjectReset(topMenuStateObject);
            topMenuStateObject.shirtState = true;

            if (priceStateObject.costRange050000 && topMenuStateObject.shirtState) {
                priceSaleCheck01(topMenuStateObject.shirtState, priceStateObject.costRange050000, `price`, `shirt`, 0, 50000);

            } else if (priceStateObject.costRange50000150000 && topMenuStateObject.shirtState) {
                priceSaleCheck01(topMenuStateObject.shirtState, priceStateObject.costRange50000150000, `price`, `shirt`, 50000, 150000);

            } else if (priceStateObject.costRange150000250000 && topMenuStateObject.shirtState) {
                priceSaleCheck01(topMenuStateObject.shirtState, priceStateObject.costRange150000250000, `price`, `shirt`, 150000, 250000);

            } else if (priceStateObject.costRange250000500000 && topMenuStateObject.shirtState) {
                priceSaleCheck01(topMenuStateObject.shirtState, priceStateObject.costRange250000500000, `price`, `shirt`, 250000, 500000);

            } else if (priceStateObject.costRange500000 && topMenuStateObject.shirtState) {
                priceSaleCheck01(topMenuStateObject.shirtState, priceStateObject.costRange500000, `price`, `shirt`, 500000);

            } else if (topMenuStateObject.shirtState) {
                let returnArray = checkArray(sub_page_product_list, `productStyle`, `shirt`);
                listnPageCreate(returnArray);
            }

            break;
        }
        case 5: {
            stateObjectReset(topMenuStateObject);
            topMenuStateObject.TShirtState = true;

            if (priceStateObject.costRange050000 && topMenuStateObject.TShirtState) {
                priceSaleCheck01(topMenuStateObject.TShirtState, priceStateObject.costRange050000, `price`, `TShirt`, 0, 50000);

            } else if (priceStateObject.costRange50000150000 && topMenuStateObject.TShirtState) {
                priceSaleCheck01(topMenuStateObject.TShirtState, priceStateObject.costRange50000150000, `price`, `TShirt`, 50000, 150000);

            } else if (priceStateObject.costRange150000250000 && topMenuStateObject.TShirtState) {
                priceSaleCheck01(topMenuStateObject.TShirtState, priceStateObject.costRange150000250000, `price`, `TShirt`, 150000, 250000);

            } else if (priceStateObject.costRange250000500000 && topMenuStateObject.TShirtState) {
                priceSaleCheck01(topMenuStateObject.TShirtState, priceStateObject.costRange250000500000, `price`, `TShirt`, 250000, 500000);

            } else if (priceStateObject.costRange500000 && topMenuStateObject.TShirtState) {
                priceSaleCheck01(topMenuStateObject.TShirtState, priceStateObject.costRange500000, `price`, `TShirt`, 500000);

            } else if (topMenuStateObject.TShirtState) {
                let returnArray = checkArray(sub_page_product_list, `productStyle`, `TShirt`);
                listnPageCreate(returnArray);
            }

            break;
        }
    }
}


/*************** filter_chkbox ******************/
const ChkBox = document.querySelectorAll('input');

for (let i = 0; i < ChkBox.length; i++) {
    ChkBox[i].addEventListener('click', () => {
        if (!ChkBox[i].checked) {
            ChkBox[i].checked = false;
        } else {
            for (let j = 0; j < ChkBox.length; j++) {
                ChkBox[j].checked = false;
            }
            ChkBox[i].checked = true;
        }
        menucheck02(i);

        //ChkBox[i].checked = true;, 클릭한 부분을 무조건 true로 바꾸고, 나머진 다 해제
        //하지만 위의 명령어 때문에 체크된 박스를 한번더 클릭했을때 해제가 안됨
        //따라서 클릭한 체크부분을 한번 더 클릭했을대 체크를 해제해주는 기능 필요
        //클릭되어잇는 체크박스를 한번더 클릭했다 == cheked가 false라는뜻과 같다.
        //왜냐면 체크박스에 클릭이벤트를걸면 상태가 변화가 된 이후에 실행이 되기 떄문에
        //따라서 if문과 else로 명령어를 처리해주어야 한다.
        //클릭했을때 클릭되어있는 놈이 상태가 false라면, 즉 클릭되어있는놈을 한번 더 클릭했다면 
        //상태를 false로 만들어라, (반복문으로 내가 클릭한놈을 true로 만드는 명령어를 써놨기 때문에 위와 같이 강제로 false로 만들어줘야한다.)
        //그리고 else, 즉 박스가 체크가 안되어있다면 내가 클릭한 놈만 true로 해라 
        //이런식으로 명령어를 구성하면 된다.

        //console.log(ChkBox[i].checked);
    });
}

function menucheck02(i) {
    switch (i) {
        case 0: {
            if (ChkBox[i].checked) {
                //top밑의 옷 스타일 메뉴들은 false가되는경우가 없기 때문에 따로 조건문을 짜지 않아도 됐지만, 얘내들은 input이라 false가되는경우도 있기 때문에 그거에 맞게 조건문을 짜준다.

                //내가 클릭한것만 true가 되게
                //상태를 기반으로 조건을 체크하기 떄문에, 내가 클릭했을때 즉 체크드가 트루일때는 객체상태를 전부 false돌려주고, 내가 클릭한 상태 속성만 true
                stateObjectReset(priceStateObject);
                priceStateObject.costRange050000 = true;
            } else {
                //그게 아닐 경우는 false가 됐다는말이기때문에 객체 속성을 전부 false로 돌려준다.
                stateObjectReset(priceStateObject);
            }

            //all활성화에 0~50000을눌렀을경우
            if (topMenuStateObject.allstate && priceStateObject.costRange050000) {
                let returnArray01 = pricechkRetrunArray(sub_page_product_list, `price`, 0, 50000);
                listnPageCreate(returnArray01);
            } else if (topMenuStateObject.allstate && !priceStateObject.costRange050000) {
                listnPageCreate(sub_page_product_list);
            }

            //각 탭이 활성화가 되어있으면서 (선택되어있으면서) 0~50000박스가 클릭됐을때
            priceSaleCheck01(topMenuStateObject.jaketState, priceStateObject.costRange050000, `price`, `jaket`, 0, 50000);

            priceSaleCheck01(topMenuStateObject.sweaterState, priceStateObject.costRange050000, `price`, `sweater`, 0, 50000);

            priceSaleCheck01(topMenuStateObject.neatState, priceStateObject.costRange050000, `price`, `neat`, 0, 50000);

            priceSaleCheck01(topMenuStateObject.shirtState, priceStateObject.costRange050000, `price`, `shirt`, 0, 50000);

            priceSaleCheck01(topMenuStateObject.TShirtState, priceStateObject.costRange050000, `price`, `TShirt`, 0, 50000);

            break;
        }

        case 1: {
            if (ChkBox[i].checked) {
                stateObjectReset(priceStateObject);
                priceStateObject.costRange50000150000 = true;
            } else {
                stateObjectReset(priceStateObject);
            }

            //all활성화에 50000~150000을눌렀을경우
            if (topMenuStateObject.allstate && priceStateObject.costRange50000150000) {
                let returnArray01 = pricechkRetrunArray(sub_page_product_list, `price`, 50000, 150000);
                listnPageCreate(returnArray01);
            } else if (topMenuStateObject.allstate && !priceStateObject.costRange50000150000) {
                listnPageCreate(sub_page_product_list);
            }

            priceSaleCheck01(topMenuStateObject.jaketState, priceStateObject.costRange50000150000, `price`, `jaket`, 50000, 150000);

            priceSaleCheck01(topMenuStateObject.sweaterState, priceStateObject.costRange50000150000, `price`, `sweater`, 50000, 150000);

            priceSaleCheck01(topMenuStateObject.neatState, priceStateObject.costRange50000150000, `price`, `neat`, 50000, 150000);

            priceSaleCheck01(topMenuStateObject.shirtState, priceStateObject.costRange50000150000, `price`, `shirt`, 50000, 150000);

            priceSaleCheck01(topMenuStateObject.TShirtState, priceStateObject.costRange50000150000, `price`, `TShirt`, 50000, 150000);

            break;
        }

        case 2: {
            if (ChkBox[i].checked) {
                stateObjectReset(priceStateObject);
                priceStateObject.costRange150000250000 = true;
            } else {
                stateObjectReset(priceStateObject);
            }

            if (topMenuStateObject.allstate && priceStateObject.costRange150000250000) {
                let returnArray01 = pricechkRetrunArray(sub_page_product_list, `price`, 150000, 250000);
                listnPageCreate(returnArray01);
            } else if (topMenuStateObject.allstate && !priceStateObject.costRange150000250000) {
                listnPageCreate(sub_page_product_list);
            }

            priceSaleCheck01(topMenuStateObject.jaketState, priceStateObject.costRange150000250000, `price`, `jaket`, 150000, 250000);

            priceSaleCheck01(topMenuStateObject.sweaterState, priceStateObject.costRange150000250000, `price`, `sweater`, 150000, 250000);

            priceSaleCheck01(topMenuStateObject.neatState, priceStateObject.costRange150000250000, `price`, `neat`, 150000, 250000);

            priceSaleCheck01(topMenuStateObject.shirtState, priceStateObject.costRange150000250000, `price`, `shirt`, 150000, 250000);

            priceSaleCheck01(topMenuStateObject.TShirtState, priceStateObject.costRange150000250000, `price`, `TShirt`, 150000, 250000);

            break;
        }

        case 3: {
            if (ChkBox[i].checked) {
                stateObjectReset(priceStateObject);
                priceStateObject.costRange250000500000 = true;
            } else {
                stateObjectReset(priceStateObject);
            }

            if (topMenuStateObject.allstate && priceStateObject.costRange250000500000) {
                let returnArray01 = pricechkRetrunArray(sub_page_product_list, `price`, 250000, 500000);
                listnPageCreate(returnArray01);
            } else if (topMenuStateObject.allstate && !priceStateObject.costRange250000500000) {
                listnPageCreate(sub_page_product_list);
            }

            priceSaleCheck01(topMenuStateObject.jaketState, priceStateObject.costRange250000500000, `price`, `jaket`, 250000, 500000);

            priceSaleCheck01(topMenuStateObject.sweaterState, priceStateObject.costRange250000500000, `price`, `sweater`, 250000, 500000);

            priceSaleCheck01(topMenuStateObject.neatState, priceStateObject.costRange250000500000, `price`, `neat`, 250000, 500000);

            priceSaleCheck01(topMenuStateObject.shirtState, priceStateObject.costRange250000500000, `price`, `shirt`, 250000, 500000);

            priceSaleCheck01(topMenuStateObject.TShirtState, priceStateObject.costRange250000500000, `price`, `TShirt`, 250000, 500000);

            break;
        }

        case 4: {
            if (ChkBox[i].checked) {
                stateObjectReset(priceStateObject);
                priceStateObject.costRange500000 = true;
            } else {
                stateObjectReset(priceStateObject);
            }

            //all활성화에 500000~을눌렀을경우
            if (topMenuStateObject.allstate && priceStateObject.costRange500000) {
                let returnArray01 = pricechkRetrunArray(sub_page_product_list, `price`, 500000);
                listnPageCreate(returnArray01);
            } else if (topMenuStateObject.allstate && !priceStateObject.costRange500000) {
                listnPageCreate(sub_page_product_list);
            }

            priceSaleCheck01(topMenuStateObject.jaketState, priceStateObject.costRange500000, `price`, `jaket`, 500000);

            priceSaleCheck01(topMenuStateObject.sweaterState, priceStateObject.costRange500000, `price`, `sweater`, 500000);

            priceSaleCheck01(topMenuStateObject.neatState, priceStateObject.costRange500000, `price`, `neat`, 500000);

            priceSaleCheck01(topMenuStateObject.shirtState, priceStateObject.costRange500000, `price`, `shirt`, 500000);

            priceSaleCheck01(topMenuStateObject.TShirtState, priceStateObject.costRange500000, `price`, `TShirt`, 500000);

            break;

        }
    }
}

function priceSaleCheck01(state01, state02, property = 0, style, price01, price02 = 99999999) {
    let returnArray01 = checkArray(sub_page_product_list, `productStyle`, style);
    if (state01 && state02) {
        let returnArray02 = pricechkRetrunArray(returnArray01, property, price01, price02);
        listnPageCreate(returnArray02);
    } else if (state01 && !state02) {
        listnPageCreate(returnArray01);
    }
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
    productListWrapper.innerHTML = receive;
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

function checkArray(array, property, value) {
    let filterArray = array.filter((object) => {
        return object[property] === value;
    })
    return filterArray;
}

function pricechkRetrunArray(array, property, price01, price02 = 99999999) {
    let filterArray = array.filter((object) => {
        return object[property] >= price01 && object[property] <= price02;
    })
    //console.log(filterArray);
    return filterArray;
}

function stateObjectReset(object) {
    for (let key in object) {
        object[key] = false;
    }
}

/* for(let key in topMenuStateObject) {
    console.log(topMenuStateObject[key]);
} */



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