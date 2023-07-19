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

import {
    bestProductList,
    newProductList,
    lookBookProudctList,
    mdsProductList,
} from './data.js';

//버튼 state
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

const count = {
    bestMoveCount: 0,
    newMoveCount: 0,
    visualMainMoveCount: 0,
}

const arrow = {
    autoPlayArrow: 'left',
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

let condition = document.body.scrollHeight * 0.6;
window.addEventListener('scroll' , () => {
    if(window.scrollY >= condition) {
        instaMoveUl.forEach((value) => {
            addClass(value, 'animate');
        });
    } 
});
instaFrame.addEventListener('mouseover', () => {
    instaMoveUl.forEach(el => el.style.animationPlayState = 'paused');
});
instaFrame.addEventListener('mouseout', () => {
    instaMoveUl.forEach(el => el.style.animationPlayState = 'running');
});


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

import {
    sub_page_product_list
} from './data.js'


/*************** product_list ******************/

const sortState = {
    defaultState: false,
    priceState: false,
    latestState: false,
    bestState: false,
}

const productListWrapper = document.querySelector('.product_list_wrapper');
const pageSection = document.querySelector('.pagenation');
const pageNumber = document.querySelector('.page_number');
//변수 선언 해놓고 반복문돌려서 li생성되면 queryselectorall로 받기
let pageItemView = 12;

//전체페이지 기준으로, 1페이지 작성
//페이지 카운터 생성 함수 호출
arraySort(sub_page_product_list);
/* topMenuStateObject.allstate = true; */
//console.log(topMenuStateObject.allstate);

//페이지 카운터 생성 함수, 필터의 조건을 누를떄마다 실행하게 계획, 무조건 인덱스0 즉 숫자1에는 불이 들어와야하니까
//페이지 생성 후 인덱스 0에 스타일클래스 부여
//필터의 조건들을 누를 시 매 빈 배열에 조건에 맞게 값을 가져올것이기 떄문에, 계산식도 함수로 지정하여 매개변수 이용
//calc(내가만든배열); 하면 계산식이 나오게 된다. 아이템갯수에 따라


/*************** filter_view_control ******************/
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


/*************** filter_check ******************/
//사이드필터 인풋
const chkList = document.querySelectorAll(`.side_filter input`);
//필터 카테고리
const allFillterSection = document.querySelectorAll('.check_detect');
//필터 카테고리 배열화
const filtterSectionArr = Array.from(allFillterSection);

//top_menu 조건배열
const fillterArrayTopMenu = [];
//price 조건배열
const fillterArrayPrice = [];
//color 조건배열
const fillterArrayColor = [];
//sale 조건배열
const fillterArraySale = [];

//통합 배열(반복문 돌리기 위해 2중배열)
const fillterCompareArray = [fillterArrayTopMenu, fillterArrayPrice, fillterArrayColor, fillterArraySale];

//각 카테고리 섹션들 index 순서에 맞게 inputdata에 번호지정
for (let i = 0; i < chkList.length; i++) {
    let currentSection = chkList[i].closest('.check_detect');
    let currnetSectionIndex = filtterSectionArr.indexOf(currentSection);
    chkList[i].dataset.myFillterIndex = currnetSectionIndex;
}

//전체 input 순회하며 클릭한 input밸류 받아오기, 빼기 
for (let i = 0; i < chkList.length; i++) {
    chkList[i].addEventListener('click', function () {
        let currentInputDataIndex = this.dataset.myFillterIndex;

        if (this.checked) {
            fillterCompareArray[currentInputDataIndex].push(this.value);
            console.log(fillterCompareArray[currentInputDataIndex]);
            //indexCompare(prevChkBoxChecked, input);
        } else {
            let valueIndex = fillterCompareArray[currentInputDataIndex].indexOf(this.value);
            fillterCompareArray[currentInputDataIndex].splice(valueIndex, 1);
            //console.log(fillterCompareArray[currentInputDataIndex], fillterCompareArray[currentInputDataIndex].splice(valueIndex, 1), fillterCompareArray);
        }

        //color section의 인덱스번호가 2라고치면, 그 안에든 input의 데이터번호도 2
        //조건배열을 담아둔 fillterCompareArray안에 각 인덱스에 맞게 배열을 배치했으니

        //fillterCompareArray[colorinput의 데이터셋] 을 해주면 해당 조건배열에 value값 업데이트 !!

        arrayReturn(sub_page_product_list, fillterCompareArray);
    });
}

function arrayReturn(array01, array02) {
    //외부에서 값받아주기 위해 변수 선언;
    let resultArray01;

    //array01에는 처음에는 외부모듈의 배열이 
    //그 이후부터는 외부모듈에서 조건에 맞게 걸러진 배열이 대입되게 했다.
    //만약 일치하는게 없거나 length가 0이되면 false를 반환하여
    //빈 배열이 array01에 할당되기때문에 조건이 없는 즉 length 0부분은 걸러줘야 한다.
    //array02[i].length === 0 즉 value가 없으면 건너뛰게 설계(continue)

    for (let i = 0; i < array02.length; i++) {
        if (array02[i].length === 0) {
            continue;
        }

        //object.keys는 객체의 key를 순환하는 역할을 하는 메서드이다.
        //object.values는 호환성이 안좋아서 key로 ㄱㄱ하자 
        //괄호안에 순회할 객체를넣어뒀다.
        //또한 some메서드를 활용해 객체의 key값과 조건 배열 arra02[i]이 일치하는지
        //검사하기 위해 또 한번 some을 써주었다. 
        //object 1개에있는 값중 일치하는값이 나오면 true반환 안나오면 false반환

        resultArray01 = array01.filter((object) => {
            return Object.keys(object).some((key) => {
                return array02[i].some((arrayValue) => {
                    //console.log(object[key], arrayValue);
                    return object[key] === arrayValue;
                });
            });
        });

        //처음에는 외부모듈 기준 이후에는 그것을 바탕으로 걸러진배열 1, 1을 바탕으로 2 -> 2를 바탕으로 3 ...

        //이런식으로 중첩조건체크가 되는것

        array01 = resultArray01;
    }

    //걸러진 배열을 바탕으로 정렬 
    arraySort(resultArray01);
}

function stateObjectReset(object) {
    for (let key in object) {
        object[key] = false;
    }
}

function arraySort(array = []) {
    //정렬(sort) 셀렉터
    const sortFillter = document.getElementById('sort_chk');
    //정렬된 배열 변수 선언
    let sortArr;

    //기본 list생성
    listnPageCreate(array);

    //해당 객체 상태변수가 켜졌다는말은 change가 되어있다는말.
    if (sortState.defaultState || sortState.latestState) {
        sortArr = array.slice().sort((a, b) => {
            return a.propertyNumber - b.propertyNumber;
        });

        listnPageCreate(sortArr);

    } else if (sortState.priceState) {
        sortArr = array.slice().sort((a, b) => {
            if (a.price < b.price) {
                return -1;
            } else if (a.price === b.price) {
                return 0;
            }
        });

        listnPageCreate(sortArr);

    }


    sortFillter.addEventListener("change", (event) => {
        let currentTarget = event.target.value

        //기본 눌렀을시
        if (currentTarget === 'defalut') {
            //정렬 된 결과를 선택했을때에도 적용하기 위해
            stateObjectReset(sortState);
            sortState.defaultState = true;

            sortArr = array.slice().sort((a, b) => {
                return a.propertyNumber - b.propertyNumber;
            });
        
        //가격 순 으로
        } else if (currentTarget === 'price') {
            stateObjectReset(sortState);
            sortState.priceState = true;

            sortArr = array.slice().sort((a, b) => {
                if (a.price < b.price) {
                    return -1;
                } else if (a.price === b.price) {
                    return 0;
                }
            });

        //최근 순으로 
        } else if (currentTarget === 'latest') {
            stateObjectReset(sortState);
            sortState.latestState = true;

            sortArr = array.slice().sort((a, b) => {
                if (a.propertyNumber < b.propertyNumber) {
                    return -1;
                } else if (a.propertyNumber > b.propertyNumber) {
                    return 1;
                }
            });
        }

        //정렬된 결과 가지고 리스트 생산
        listnPageCreate(sortArr);
    });
}

//리셋하기
const resetBtn = document.querySelector('.reset');
resetBtn.addEventListener('click', () => {
    //밸류 defalut로
    document.getElementById('sort_chk').value = 'defalut';
    //상태변수도 그에맞게
    stateObjectReset(sortState);
    sortState.defaultState = true;
    
    //위의 변수 적용된 이후 리스트 뽑기
    arraySort(sub_page_product_list);

    chkList.forEach((input) => {
        //input reset
        input.checked = false;

        //조건 array reset
        fillterCompareArray.forEach((array) => {
            array.splice(0, array.length);
        })
    });
});


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

            window.scrollTo({top: 0, smooth: "behaivor"});
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
}

//클래스 추가
function addClass(Element, ClassName) {
    Element.classList.add(ClassName);
}
//클래스 제거
function removeClass(Element, ClassName) {
    Element.classList.remove(ClassName);
}
