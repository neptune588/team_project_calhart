import {
    bestProductList,
    newProductList,
    lookBookProudctList,
    mdsProductList,
} from './data.js';

//버튼 state
//객체 형식이면 함수 내부에서 데이터 참조 및 변형이 가능
const btnState = {
    visualMainLeftClicked: false,
    visualMainRightClicked: false,

    vMainLeftEventClicked: false,
    vMainRightEventClicked: false,

    leftClicked01: false,
    leftClicked02: false,

    rightClicked01: false,
    rightClicked02: false,
}
//객체 형식이면 함수 내부에서 데이터 참조 및 변형이 가능
const count = {
    bestMoveCount: 0,
    newMoveCount: 0,
    visualMainMoveCount: 0,
}

const arrow = {
    autoPlayArrow: 'left',
}


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


/*************** visual_main ******************/
//visual_main_ul
const visualMainUl = document.getElementById('visual_main_ul');
//visual_main_btn

const visualPrevBtn = document.getElementById('visual_prev_btn');
const visualNextBtn = document.getElementById('visual_next_btn');
//visual_main_play_stop_btn
const visualPlay = document.getElementById('play_btn');
const visualStop = document.getElementById('stop_btn');
//visual_main_ul li
const visualMainLi = document.querySelectorAll('.visual_main_li');
//visual_main_ul li width
const visualMainLiWidth = visualMainLi[0].offsetWidth;


visualMainLi.forEach((value, index) => {
    addClass(value, `visual0${index+1}`);
});

cloneCreate01(visualMainLi, visualMainUl);
cloneCreate02(visualMainLi, visualMainUl);



//autoplay제어 변수
let visualRepeat;

if (!btnState.vMainLeftEventClicked) {
    btnState.vMainLeftEventClicked = true;
    visualPrevBtn.addEventListener('click', prevPlay);
}
if (!btnState.vMainRightEventClicked) {
    btnState.vMainLeftEventClicked = true;
    visualNextBtn.addEventListener('click', nextPlay);
}
visualPlay.addEventListener('click', () => {
    visualRepeat = setInterval(() => {
        //&& btnState.vMainLeftEventClicked
        //이 부분을 셋인터벌에도 넣게 되면 무한 재생이 아닌 클릭할때마다 한번씩 호출되게됨.
        if (arrow.autoPlayArrow === 'left') {
            prevPlay();
        } else if (arrow.autoPlayArrow === 'right') {
            nextPlay();
        }
    }, 650);
});
visualStop.addEventListener('click', () => {
    clearInterval(visualRepeat);
});

function prevPlay() {
    if (!btnState.visualMainLeftClicked) {
        btnState.visualMainLeftClicked = true;
        arrow.autoPlayArrow = 'left';
        //방향 지정
        leftMove(count, 'visualMainMoveCount', visualMainUl, visualMainLiWidth, btnState, 'visualMainLeftClicked', 4, 'visual_trans_active');
        btnState.vMainLeftEventClicked = false;
    }
}

function nextPlay() {
    if (!btnState.visualMainRightClicked) {
        btnState.visualMainRightClicked = true;
        arrow.autoPlayArrow = 'right';
        rightMove(count, 'visualMainMoveCount', visualMainUl, visualMainLiWidth, btnState, 'visualMainRightClicked', 4, 'visual_trans_active');
        btnState.vMainRightEventClicked = false;
    }
}

/*************** product_section ******************/
//bestproductUl
const bestProductUl = document.getElementById('product_ul01');
//newproductUl
const newProductUl = document.getElementById('product_ul02');

//best_product_li_make
for (let i = 0; i < bestProductList.length; i++) {
    //요소 추가
    let addBestLi = document.createElement('li');
    let bestLiInA = document.createElement('a');
    let bestLiInImg = document.createElement('img');
    let bestLiTextModel = document.createElement('span');
    let bestLiTextName = document.createElement('span');

    //span에 들어가는 text
    let bestLiTextModelText = document.createTextNode(bestProductList[i].modelName);
    let bestLiTextNameText = document.createTextNode(bestProductList[i].name);

    //이미지 속성 변경
    bestLiInImg.setAttribute('src', bestProductList[i].src);

    //삽입 명령어
    bestLiTextModel.appendChild(bestLiTextModelText);
    bestLiTextName.appendChild(bestLiTextNameText);
    bestLiInA.appendChild(bestLiInImg);
    bestLiInA.appendChild(bestLiTextModel);
    bestLiInA.appendChild(bestLiTextName);
    addBestLi.appendChild(bestLiInA);

    bestProductUl.appendChild(addBestLi);

    //클래스 주기

    bestLiInA.setAttribute('href', '#!');
    addBestLi.setAttribute('class', 'Best_product_list');
    //addBestLi.setAttribute('id', "i" + i);
}
//new_product_li_make
for (let i = 0; i < newProductList.length; i++) {
    //요소 추가
    let addNewLi = document.createElement('li');
    let newLiInA = document.createElement('a');
    let newLiInImg = document.createElement('img');
    let newLiTextModel = document.createElement('span');
    let newLiTextName = document.createElement('span');

    //span에 들어가는 text
    let newLiTextModelText = document.createTextNode(newProductList[i].modelName);
    let newLiTextNameText = document.createTextNode(newProductList[i].name);

    //이미지 속성 변경
    newLiInImg.setAttribute('src', newProductList[i].src);

    //삽입 명령어
    newLiTextModel.appendChild(newLiTextModelText);
    newLiTextName.appendChild(newLiTextNameText);
    newLiInA.appendChild(newLiInImg);
    newLiInA.appendChild(newLiTextModel);
    newLiInA.appendChild(newLiTextName);
    addNewLi.appendChild(newLiInA);

    newProductUl.appendChild(addNewLi);

    //클래스 주기

    newLiInA.setAttribute('href', '#!');
    addNewLi.setAttribute('class', 'new_product_list');
}

//best box_arrow_btn
const prevBtn01 = document.getElementById('prev_btn01');
const nextBtn01 = document.getElementById('next_btn01');
//new box_arrow_btn
const prevBtn02 = document.getElementById('prev_btn02');
const nextBtn02 = document.getElementById('next_btn02');

//bestList
const bestLi = document.querySelectorAll('.Best_product_list');
//bestList
const newLi = document.querySelectorAll('.new_product_list');

//product seciton li width 추출
let productLiWidth = bestProductUl.children[0].offsetWidth + 15;

//bestProductClone
cloneCreate01(bestLi, bestProductUl);
cloneCreate02(bestLi, bestProductUl);

//newProductClone
cloneCreate01(newLi, newProductUl);
cloneCreate02(newLi, newProductUl);

//best_Section_left_Btn
prevBtn01.addEventListener('click', function () {
    //연속클릭 방지
    if (!btnState.leftClicked01) {
        btnState.leftClicked01 = true;
        leftMove(count, 'bestMoveCount', bestProductUl, productLiWidth, btnState, 'leftClicked01', 8, 'move_active');
    }
});
//best_Section_right_Btn
nextBtn01.addEventListener('click', function () {
    //연속클릭 방지
    if (!btnState.rightClicked01) {
        btnState.rightClicked01 = true;
        rightMove(count, 'bestMoveCount', bestProductUl, productLiWidth, btnState, 'rightClicked01', 8, 'move_active');
    }
});
//new_Section_left_Btn
prevBtn02.addEventListener('click', function () {
    //연속클릭 방지
    if (!btnState.leftClicked02) {
        btnState.leftClicked02 = true;
        leftMove(count, 'newMoveCount', newProductUl, productLiWidth, btnState, 'leftClicked02', 8, 'move_active');
    }
});
//new_Section_right_Btn
nextBtn02.addEventListener('click', function () {
    //연속클릭 방지
    if (!btnState.rightClicked02) {
        btnState.rightClicked02 = true;
        rightMove(count, 'newMoveCount', newProductUl, productLiWidth, btnState, 'rightClicked02', 8, 'move_active');
    }
});

//왼쪽 이동 인터벌 함수
function leftMove(countObject, countValue, productUl, elementWidth, stateObject, stateProperty, maxCounting, ClassName) {
    let clickCount = 0;
    let leftMoving = setInterval(() => {
        //위치 감지 및 left값 지정. leftmove와 값을 공유해야 유기적으로 이동
        countObject[countValue]++;
        //공유한 count로 계산,
        //왼쪽누르면 카운트증가 오른쪽 누르면 카운트 감소이니까
        //liwidth * count값을 주면된다.
        //나중에 봐도 이해할수잇게 ex적기
        //ex : 3 - 2  
        let moved = move(elementWidth, countObject[countValue]);
        productUl.style.left = moved;

        //인터벌 제어를 위해 
        clickCount++;
        if (clickCount === 1) {
            clearInterval(leftMoving);
        }
        if (countObject[countValue] === maxCounting) {
            countObject[countValue] = 0;
            setTimeout(() => {
                removeClass(productUl, ClassName);
                productUl.style.left = 0;
            }, 600);
            setTimeout(() => {
                addClass(productUl, ClassName);
            }, 650);
        }
    });
    setTimeout(() => {
        //애니메이션 다 끝나고 이동 가능하게 버튼활성화
        stateObject[stateProperty] = false;
    }, 650);
}

//오른쪽 이동 인터벌 함수
function rightMove(countObject, countValue, productUl, elementWidth, stateObject, stateProperty, maxCounting, ClassName) {
    let clickCount = 0;
    let rightMoving = setInterval(() => {
        //위치 감지 및 left값 지정. leftmove와 값을 공유해야 유기적으로 이동
        countObject[countValue]--;

        let moved = move(elementWidth, countObject[countValue]);

        productUl.style.left = moved;
        //인터벌 제어를 위해 
        clickCount++;
        if (clickCount === 1) {
            clearInterval(rightMoving);
        }
        if (countObject[countValue] === (maxCounting * -1)) {
            countObject[countValue] = 0;
            setTimeout(() => {
                removeClass(productUl, ClassName);
                productUl.style.left = 0;
            }, 600);
            setTimeout(() => {
                addClass(productUl, ClassName);
            }, 650);
        }
    });
    setTimeout(() => {
        //애니메이션 다 끝나고 이동 가능하게 버튼활성화
        stateObject[stateProperty] = false;
    }, 650);
}


/*************** look_book_section ******************/
//룩북 썸네일 탭
//배열로 변환하기 위해 let사용
let lookBookTap = document.querySelectorAll('.look_book_show_tab');
//룩북 view 존
const lookBookViewZone = document.querySelectorAll('.look_book_view');
//text_box
const lookBookInnerTextBox = document.querySelectorAll('.text_box');
//hover_img
const hoverImg = document.querySelectorAll('.hover_img');

/* const bigLookBook = document.getElementById('look_book_thm_area_01');
const smallLookBook = document.getElementById('look_book_thm_area_02'); */

/* //배열 변환.
lookBookTap = LookBookfunctionList.changeArray(lookBookTap); */

//text박스 text생성
lookBookInnerTextBox.forEach((value, index) => {
    let newP01 = document.createElement('p');
    let newP02 = document.createElement('p');
    let newP03 = document.createElement('p');

    newP01.textContent = lookBookProudctList[index].modelName;
    newP02.textContent = lookBookProudctList[index].name;
    newP03.textContent = lookBookProudctList[index].price;

    value.appendChild(newP01);
    value.appendChild(newP02);
    value.appendChild(newP03);
});
//img hover시 text 등장
for (let i = 0; i < hoverImg.length; i++) {
    hoverImg[i].addEventListener('mouseover', () => {
        for (let j = 0; j < lookBookInnerTextBox.length; j++) {
            removeClass(lookBookInnerTextBox[j], 'hover_on');
        }
        addClass(lookBookInnerTextBox[i], 'hover_on');
    });
}
//img out시 text 제거
for (let i = 0; i < hoverImg.length; i++) {
    hoverImg[i].addEventListener('mouseout', () => {
        for (let j = 0; j < lookBookInnerTextBox.length; j++) {
            removeClass(lookBookInnerTextBox[j], 'hover_on');
        }
    });
}

//img등록
for (let i = 0; i < lookBookTap.length; i++) {
    lookBookTap[i].lastElementChild.setAttribute('src', `./images/look_book_thumnail${i}.jpg`);
}
//탭 순회하면서 클릭이벤트 등록, 클릭했을시 클래스 전부 제거 후 
//i값에 해당하는 섹션 block_on
for (let i = 0; i < lookBookTap.length; i++) {
    lookBookTap[i].addEventListener('click', () => {
        for (let j = 0; j < lookBookViewZone.length; j++) {
            removeClass(lookBookViewZone[j], 'block_on');
        }
        addClass(lookBookViewZone[i], 'block_on');
    });
}


/*************** mds_pick_section ******************/

//mdlist
const mdsList = document.querySelectorAll('.md_list');
//mdAcodian
const mdAcodianOn = document.querySelectorAll('.acodian_on');
const mdProductInfo = document.querySelectorAll('.product_info');

mdProductInfo.forEach((value, index) => {
    let newP01 = document.createElement('p');
    let newP02 = document.createElement('p');
    let newP03 = document.createElement('p');
    let newP04 = document.createElement('p');
    let newP05 = document.createElement('p');
    let button = document.createElement('a');

    newP01.textContent = mdsProductList[index].nameEng;
    newP02.textContent = mdsProductList[index].etc;
    newP03.textContent = mdsProductList[index].nameKor;
    newP04.textContent = mdsProductList[index].productNumber;
    newP05.textContent = mdsProductList[index].price;
    button.textContent = '구매하기';

    value.appendChild(newP01);
    value.appendChild(newP02);
    value.appendChild(newP03);
    value.appendChild(newP04);
    value.appendChild(newP05);
    value.appendChild(button);

    addClass(newP01, 'md_info_text01');
    addClass(newP02, 'md_info_text02');
    addClass(newP03, 'md_info_text03');
    addClass(newP04, 'md_info_text04');
    addClass(newP05, 'md_info_text05');
    addClass(button, 'buy_button');
    button.setAttribute('href', '#!');
});

//하나는 아코디언상태여야기 때문에 아코디언 부여. 
//쿼리셀렉터 올로 잡아뒀기때문에 반복문을 안쓸꺼면 mdsList[0].children[0].children[0] 이런식으로 잡을수잇다.
mdAcodianOn.forEach((value, index) => {
    value.children[0].children[0].setAttribute('src', `./images/mds_acodian_0${index + 1}.jpg`);
});

for (let i = 0; i < mdsList.length; i++) {
    mdsList[i].addEventListener('click', () => {
        for(let j = 0; j < mdsList.length; j++) {
            removeClass(mdsList[j], 'acodian_on');
            removeClass(mdProductInfo[j], 'hover_on');
            mdsList[j].children[0].children[0].setAttribute('src', `./images/mds_0${j + 1}.jpg`);
        }
        addClass(mdsList[i], 'acodian_on');
        addClass(mdProductInfo[i], 'hover_on');
        mdsList[i].children[0].children[0].setAttribute('src', `./images/mds_acodian_0${i + 1}.jpg`);
    });
}

//1. 아코디언 상태일때만 mds_acodian이 된다. 그 말인 즉슨 그 클래스가 제거가 되면 이미지는 mds_0 시리즈로 되어야한다.
//2. 따라서 그렇게 mds를 다 부여하고, 내가 클릭한 녀석 즉 i에게만 mds_acodian을 부여하면 되는것이다.


/*************** mds_pick_section ******************/
const instaMoveUl = document.querySelectorAll('.insta_frame > ul');
const instaFrame = document.querySelector('.insta_frame');
window.addEventListener('scroll' , () => {
    //console.log(window.scrollY);
    if(window.scrollY > 2300) {
        instaMoveUl.forEach((value) => {
            addClass(value, 'animate');
        });
    } 
});
instaFrame.addEventListener('mouseover', () => {
    instaMoveUl.forEach((value) => {
        value.style.animationPlayState = 'paused';
    })
});
instaFrame.addEventListener('mouseout', () => {
    instaMoveUl.forEach((value) => {
        value.style.animationPlayState = 'running';
    })
});
/* instaMoveUl.forEach((value) => {
    value.addEventListener('mouseover', () => {
        value.style.animationPlayState = 'paused';
    })
    value.addEventListener('mouseout', () => {
        value.style.animationPlayState = 'running';
    })
})
 */
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