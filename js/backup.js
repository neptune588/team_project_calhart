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
const changePriceQuntity = document.querySelector('.quantity_number');

const productQuanView = document.getElementById('product_quantity_select');
//input value 받아서 변경
const totalQuanNumber = document.querySelector('.total_quntaitly_view');
//input value * price
const totalPrice = document.querySelector('.total_price');

/*************** product_quntaitly_select ******************/
const productMinusBtn = document.getElementById('quantity_minus');
const productPlusBtn = document.getElementById('quantity_plus');
//재고량 넘겼을시 나오는 멘트
const priSelNotMent = document.querySelector('.select_notice_ment');

//재고량
changePriceQuntity.dataset.myQuntity = detail_page_produdct_list[0].limitQuantity;
changePriceQuntity.textContent = changePriceQuntity.dataset.myQuntity;


productPlusBtn.addEventListener('click', function () {
    let currentValue = productQuanView.value;
    //수량 표시
    productQuanView.value = parseInt(currentValue) + 1;

    //현재 재고량 몇개인지
    let currentQuntity = changePriceQuntity.textContent;

    if (parseInt(productQuanView.value) > parseInt(currentQuntity)) {
        addClass(priSelNotMent, 'block_on');
        productQuanView.value = currentQuntity;
    }

    totalCheck();

});

productMinusBtn.addEventListener('click', function () {
    let currentValue = productQuanView.value;
    //수량 표시
    productQuanView.value = parseInt(currentValue) - 1;

    //0이하 가지못하게
    if (parseInt(productQuanView.value) < 1) {
        productQuanView.value = 1;
    }

    totalCheck();

});

let prevInput = '';
productQuanView.addEventListener('input', function (e) {
    const numberReg = /^\d+$/;

    ///\D/g, '' 숫자 제외한 모든 문자 공백으로 전환
    if (!(numberReg.test(this.value))) {
        this.value = this.value.replaceAll(/\D/g, '');
    }

    //재고량 넘어서게 입력시 그전 입력값으로 대입 f
    if (parseInt(this.value) > changePriceQuntity.dataset.myQuntity) {
        //console.log(prevInput);
        this.value = prevInput;
    }

    if (parseInt(this.value) < 1) {
        this.value = 1;
    }

    prevInput = e.target.value;

    inputBlur();
    totalCheck();
});


function totalCheck() {
    //현재 재고량 몇개인지
    let currentQuntity = changePriceQuntity.textContent;

    if (parseInt(productQuanView.value) < parseInt(currentQuntity)) {
        removeClass(priSelNotMent, 'block_on');
    }

    let currentPrice = totalPrice.dataset.price;
    totalQuanNumber.textContent = productQuanView.value;
    totalPrice.textContent = `${(currentPrice * productQuanView.value).toLocaleString()} 원`;
}

function inputBlur() {
    productQuanView.addEventListener('blur', function () {
        if (this.value === '' || this.value === undefined || this.value === null) {
            this.value = 1;
        }
        totalCheck();
    })
}



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

        //코드 초기화
        changeCodeNum.textContent = detail_page_produdct_list[i].productCode;
        //상품 이름 초기화
        changeProductName.textContent = detail_page_produdct_list[i].productNameKor;
        //상품 가격 초기화
        changeProductMoney.textContent = detail_page_produdct_list[i].price.toLocaleString();
        //선택 수량 가격 초기화
        totalPrice.textContent = `${detail_page_produdct_list[i].price.toLocaleString()} 원`;
        //데이터셋 상품에 맞게 
        totalPrice.setAttribute('data-price', `${detail_page_produdct_list[i].price}`);
        //적립금 초기화
        changeProductPoint.textContent = detail_page_produdct_list[i].price * 0.005;
        //재고 초기화
        changePriceQuntity.dataset.myQuntity = detail_page_produdct_list[i].limitQuantity;
        changePriceQuntity.textContent = changePriceQuntity.dataset.myQuntity;
        //수량 초기화
        productQuanView.value = 1;
        //총 구매 수량 초기화
        totalQuanNumber.textContent = productQuanView.value;
        //멘트 삭제
        removeClass(priSelNotMent, 'block_on');
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

//배열에서 src시 가져옴.
function thumnailChange(srcChangeArray, num01, num02, array, imgProperty) {
    srcChangeArray[num02].setAttribute('src', `${array[num01][imgProperty][num02]}`);
    srcChangeArray[num02].setAttribute('alt', `${array[num01][imgProperty][num02]}`);
}


/*************** review 관련  ******************/
const reviewCreateBtn = document.querySelector('.create_btn');

const reviewCreateArea = document.querySelector('.review_create');

const reviewCreateComBtn = document.getElementById('create_complete');

const reviewBox = document.getElementById('review_text_box');
const reviewLengthBox = document.querySelector('.review_now_length');

const reviewList = document.querySelector('.review_list');

const reviewCounting = document.querySelector('.review_couting');
//별점
const reviewRating = document.querySelector('.review_rating_star');


const reviewNoticeMent = document.querySelector('.review_notice_ment');

//한 페이지에 몇개 보여줄것인지
const pageViewLength = 6;
const pageSection = document.querySelector('.pagenation');
const pageUl = document.querySelector('.page_list');


//list 들어갈 배열 
const reviewContents = [];

//page count 받아오기
const countingObject = {
    pageCount: 0,
}
const ratingObject = {
    ratingCount: 0,
}

let starMaxLength = 5;
let starCreate = false;

let rvCrteBtnState = false;
reviewCreateBtn.addEventListener('click', () => {
    if (!rvCrteBtnState) {
        addClass(reviewCreateArea, `block_on`);

        reviewBox.focus();
        //별점클릭 함수
        starClick();

        rvCrteBtnState = true;
    } else {
        reviewNoticeMent.textContent = '';
        removeClass(reviewCreateArea, `block_on`);

        valueReset(reviewBox, reviewLengthBox);
        starReset();
        rvCrteBtnState = false;
    }
});

reviewBox.addEventListener('input', () => {
    let reviewLengthReturn = reviewBox.value.length;
    reviewLengthBox.textContent = `${reviewLengthReturn} 자`;
});

reviewCreateComBtn.addEventListener('click', () => {
    if (reviewBox.value !== null && reviewBox.value !== '' && reviewBox.value !== undefined && starCreate) {
        //클릭함수가 실행되었을때 들어가는 기능
        //1. 리스트 text
        //2. 리스트 별점
        //3. 리스트 생성날짜
        //4. 배열 길이에 따른 페이지 네이션 생성
        //5. 유효하게 생성되었다면 value reset 및 focus
        reviewNoticeMent.textContent = '';

        //리스트 생성에 필요한 정보를 넣기 위해 
        //클릭할때마다 새로운 객체 생성
        const listObject = {};

        //시간 계산
        let nowTime = calcDate();

        //만약 함수 밖에서 객체 선언을 해버리면, 
        //밑의 명령어로 인해 각 객체의 속성을 실시간으로 바꿔버리기 때문에
        //함수 스코프 내부에서 선언을 해준다.
        //데이터가 다 기입, 입력된상태에서 클릭이벤트가 일어나는것이기 때문에
        //클릭함수에서는 속성값만 기입해주면 되는것  
        listObject.text = reviewBox.value;
        listObject.ratingStar = ratingObject.ratingCount;
        listObject.date = nowTime;


        //배열 push
        reviewContents.push(listObject);

        //문자열 알림 리셋
        valueReset(reviewBox, reviewLengthBox);
        reviewBox.focus();

        //데이터를 기반으로 페이지와 리스트 생성
        //리스트는 페이지 number를 기반으로 생성되기 때문에 
        //page함수부터 선언 
        pageCreate(reviewContents);

        let returnSlice = arraySlice(countingObject.pageCount, pageViewLength, reviewContents);
        createList(returnSlice);

        starReset();
        starCreate = false;

    } else if (!starCreate) {
        reviewNoticeMent.textContent = '리뷰 별점을 남겨주세요!'
    } else {
        reviewNoticeMent.textContent = '공백은 안됩니다!'
    }
});

//별점 클릭했을때 
function starClick() {
    const reviewStar = document.querySelectorAll('.review_rating_star > li');
    for (let i = 0; i < reviewStar.length; i++) {
        reviewStar[i].addEventListener('click', () => {
            //i값 받아와서 내가 클릭한 i만큼 별 채워지게 하기
            ratingObject.ratingCount = i + 1;

            reviewRating.innerHTML = ``;
            let receive = ``;

            //채워지는 별은 i값 받아온만큼 즉, 2번쨰(인덱스 1) 클릭하면
            //2까지 별이 채워지고, 그 나머지 부분은 배경없는 별(5 - 2)
            for (let j = 0; j < ratingObject.ratingCount; j++) {
                let list01 =
                    `
                        <li><i class="fas fa-star"></i></li>
                    `
                receive += list01;
            }
            for (let j = 0; j < starMaxLength - ratingObject.ratingCount; j++) {
                let list02 =
                    `
                        <li><i class="far fa-star"></i></li>
                    `
                receive += list02;
            }
            reviewRating.innerHTML = receive;

            starCreate = true;
            starClick();
        });
    }
}

function starReset() {
    reviewRating.innerHTML = ``;
    let receive = ``;

    for (let i = 0; i < starMaxLength; i++) {
        let list =
            `
                <li><i class="far fa-star"></i></li>
            `
        receive += list;
    }
    reviewRating.innerHTML = receive;
    starClick();
}

//별점등록 함수
function starWrite(arrayInnerObject, property) {
    let recieve = ``;

    for (let i = 0; i < arrayInnerObject[property]; i++) {
        let list01 =
            `
                <i class="fas fa-star"></i>
            `
        recieve += list01;
    }
    for (let i = 0; i < starMaxLength - arrayInnerObject[property]; i++) {
        let list02 =
            `
                <i class="far fa-star"></i>
            `
        recieve += list02;
    }
    return recieve;
}

function createList(array) {
    reviewList.innerHTML = ``;
    let receive = ``;
    for (let i = 0; i < array.length; i++) {
        //6개 까지만 보여주게
        if (i === pageViewLength) {
            break;
        }
        let list = `
            <li class="review">
                <p class="review_ment">
                    ${array[i].text}
                    <span id = "${indexCalc(i)}" class = "delete">
                        <i class="fas fa-window-close"></i>
                    </span>
                </p>
                <div class="right_info">
                    <ul class="rating_star">${starWrite(array[i], `ratingStar`)}</ul>
                    <span class="review_date date">${array[i].date}</span>
                    <span class="review_id">ju****</span>
                </div>
            </li>
        `
        receive += list;

    }

    reviewList.innerHTML = receive;

    if (array.length === 0) {
        reviewList.innerHTML = `
        <div class="not_ment">
            현재 작성된 리뷰가 없습니다.
        </div>
        `;
    }

    const deleteBtn = document.querySelectorAll('.delete');
    deleteBtn.forEach((btn) => {
        btn.addEventListener('click', () => {
            listDelete(btn, reviewContents);
        });
    });


    //순서
    //1) id 원본 리스트배열에서 몇번째인지 알아야하는데 slice로 페이지에 맞게 배열을 잘라오기 떄문에 쉽지 않음. 
    //2) ex: 페이지수가 1이면 0,6 페이지가 2면 6,12만 잘라온 배열로 리스트생성하기 때문에 그냥 i로하면 id값이 0~6고정됨
    //3) 따라서 pageCount라는 변수를 만들어서 페이지수의 인덱스값을 받아온다.  
    //4) ex: mate.ceil(배열안의 length/6) 이기 때문에 무조건 최솟값은 1, 6개를 넘어가면 1씩 증가
    //5) 다만 인덱스값은 0 / 1/ 2 즉 표기는 +1을통해 1로해주고, 공식구할때는 인덱스 값으로 
    //6) 생성된 페이지의 인덱스 값과 한화면에 보이는 length 즉 6을 곱해주고 현재 인덱스를 더해주면 
    //7) 원본 배열에서 몇번째 인덱스인지 알수있게된다. 그리고 그 값을 리스트생성할떄 delete버튼에 id값으로 추가해주면 끝.

    //console.log(deleteBtn);
    //console.log(reviewContents);

    //리뷰 몇개인지 알려줌.
    reviewCounting.textContent = array.length;
}

function indexCalc(i) {
    return pageViewLength * countingObject.pageCount + i;
    // 1페이지
    // countingObject.pageCount = 0
    // pageViewLength = 6
    // i = 0
    // 6 * 0 + 0 -> 0번째 
    // 6 * 0 + 1 -> 1번째 
    // 6 * 0 + 2 -> 2번째 
    // 6 * 0 + 3 -> 3번째 
    // 6 * 0 + 4 -> 4번째 
    // 6 * 0 + 5 -> 5번째 

    // 2페이지
    // countingObject.pageCount = 1
    // pageViewLength = 6
    // i = 0
    // 6 * 1 + 0 -> 6번째 
    // 6 * 1 + 1 -> 7번째 
    // 6 * 1 + 2 -> 8번째 
    // 6 * 1 + 3 -> 9번째 
    // 6 * 1 + 4 -> 10번째 
    // 6 * 1 + 5 -> 11번째 

    // 3페이지
    // countingObject.pageCount = 2
    // pageViewLength = 6
    // i = 0
    // 6 * 2 + 0 -> 12번째 
    // 6 * 2 + 1 -> 13번째 
    // 6 * 2 + 2 -> 14번째 
    // 6 * 2 + 3 -> 15번째 
    // 6 * 2 + 4 -> 16번째 
    // 6 * 2 + 5 -> 17번째 
}

function pageCreate(array) {
    // console.log('x눌렀음');
    if (array.length === 0) {
        addClass(pageSection, `none_on`);
    } else {
        removeClass(pageSection, `none_on`);
    }

    let receive = ``;
    pageUl.innerHTML = ``;

    for (let i = 1; i <= calc(array, pageViewLength); i++) {
        let pageList =
            `
            <li>
                ${i}
            </li>    
        `
        receive += pageList;
        countingObject.pageCount = i - 1; //인덱스 계산위해 
    }
    pageUl.innerHTML = receive;
    //console.log(countingObject.pageCount);

    pageControl(array);
}

function pageControl(array) {
    // console.log('x눌렀음');
    const pageNumber = document.querySelectorAll('.page_list > li');

    for (let i = 0; i < pageNumber.length; i++) {
        pageNumber[i].addEventListener('click', function () {
            for (let j = 0; j < pageNumber.length; j++) {
                removeClass(pageNumber[j], `page_on`);
            }
            addClass(pageNumber[i], `page_on`);
            //이거는 클릭했을때 인덱스 번호 재계산 
            countingObject.pageCount = i;
            let returnSlice = arraySlice(i, pageViewLength, array);
            createList(returnSlice);
        });
    }
    //i값 받아와서 활성화된 페이지 표시
    // i = 1이면 1에 페이지온 클래스
    // i = 2이면 2에 페이지온 클래스
    if (pageNumber.length !== 0) {
        addClass(pageNumber[countingObject.pageCount], `page_on`);
    }
}

function arraySlice(index01, index02, array) {
    let returnArray;
    let firstIndex = (index01 + 1) * index02 - index02;
    let lastIndex = firstIndex + index02;

    returnArray = array.slice(firstIndex, lastIndex);

    return returnArray;
}

function calc(array, viewLength) {
    return Math.ceil(array.length / viewLength);
}


/*************** qna 관련  ******************/
const qusetionCreateStartBtn = document.querySelector('.question_btn');

const questionCreateArea = document.querySelector('.create_question');

const questionBox = document.getElementById('create_question_ment');
const questionLengthBox = document.querySelector('.qna_now_length');

const questionCreateComBtn = document.getElementById('qna_create');

const qnaUserID = document.getElementById('qna_user_id');

const qnaList = document.querySelector('.qna');

//const qnaNotMentBox = document.querySelector('.qna_not_ment');

const qnaCounting = document.querySelector('.qna_couting');

const qnaNoticeMent = document.querySelector('.qna_notice_ment');

const qnaContents = [];


questionCreateComBtn.addEventListener('click', () => {
    let IDvalue = qnaUserID.value;
    let questionvalue = questionBox.value;

    if ((IDvalue && questionvalue) !== null && (IDvalue && questionvalue) !== '' && (IDvalue && questionvalue) !== undefined && IDvalue.length > 2) {

        qnaNoticeMent.textContent = '';

        const qnalistObject = {};

        //시간 계산
        let nowTime = calcDate();

        qnalistObject.userId = qnaUserID.value;
        qnalistObject.answerState = false;
        qnalistObject.listState = false;
        qnalistObject.answer = answerStateReturn(qnalistObject.answerState);
        qnalistObject.text = questionBox.value;
        qnalistObject.date = nowTime;

        //배열 push
        qnaContents.push(qnalistObject);

        qnaCreate(qnalistObject, qnaContents);

        //문자열 알림 리셋
        valueReset(questionBox, questionLengthBox);
        qnaUserID.value = ``;
        questionBox.focus();

    } else if (IDvalue === undefined || IDvalue === null || IDvalue === ``) {
        qnaNoticeMent.textContent = '아이디를 입력 해주세요.';
    } else if (IDvalue.length < 3) {
        qnaNoticeMent.textContent = '아이디를 2자를 넘어야 합니다.';
    } else {
        qnaNoticeMent.textContent = '내용을 입력 해주세요!';
    }
});

questionBox.addEventListener('input', () => {
    let questionLengthReturn = questionBox.value.length;
    questionLengthBox.textContent = `${questionLengthReturn} 자`;
});

let questionState = false;
qusetionCreateStartBtn.addEventListener('click', () => {
    if (!questionState) {
        addClass(questionCreateArea, 'block_on');
        questionState = true;
    } else {
        qnaNoticeMent.textContent = '';
        removeClass(questionCreateArea, 'block_on');
        questionState = false;

        valueReset(questionBox, questionLengthBox);
        qnaUserID.value = ``;
    }
});


function qnaCreate(object, array) {
    const fragment = document.createDocumentFragment();

    /* question */
    const newLiQnAlist = document.createElement('li');

    const newDivQbox = document.createElement('div');

    const newDivLeftBox = document.createElement('div');
    const newSpanQState = document.createElement('span');
    const newPQuMent = document.createElement('p');

    const newDivRightBox = document.createElement('div');
    const newSpanQdate = document.createElement('span');
    const newSpanUserID = document.createElement('span');
    const newComIcon = document.createElement('i');
    const newSpanManageComment = document.createElement('span');

    const newSpanQnADeleteBtn = document.createElement('span');
    const newIDeleteIcon = document.createElement('i');
    const newSpanManagerMent = document.createElement('span');
    const newIManageMentIcon = document.createElement('i');

    addClass(newSpanQnADeleteBtn, 'qna_list_delete');
    addClassMulti(newIDeleteIcon, ['fas', 'fa-window-close']);
    addClass(newSpanManagerMent, 'manager_ment_on');
    addClassMulti(newIManageMentIcon, ['fas', 'fa-level-down-alt']);
    addClass(newSpanQState, 'state_answer_complete');
    addClass(newPQuMent, 'qna_ment');
    addClass(newDivLeftBox, 'left_box');

    newSpanQState.textContent = object.answer;
    newPQuMent.textContent = object.text;

    newSpanQnADeleteBtn.appendChild(newIDeleteIcon);
    newSpanManagerMent.appendChild(newIManageMentIcon);
    newPQuMent.appendChild(newSpanQnADeleteBtn);
    newPQuMent.appendChild(newSpanManagerMent);
    newDivLeftBox.appendChild(newSpanQState);
    newDivLeftBox.appendChild(newPQuMent);

    addClassMulti(newSpanQdate, ['qna_date', 'date']);
    addClassMulti(newSpanUserID, ['qna_id', 'list_view_id']);
    addClassMulti(newComIcon, ['fas', 'fa-user-tag']);
    addClass(newSpanManageComment, 'comment_click_on');
    addClass(newDivRightBox, 'right_box');
    newSpanQdate.textContent = object.date;
    newSpanUserID.textContent = IDViewLengthCut(object.userId);

    newSpanManageComment.appendChild(newComIcon);
    newDivRightBox.appendChild(newSpanQdate);
    newDivRightBox.appendChild(newSpanUserID);
    newDivRightBox.appendChild(newSpanManageComment);

    addClass(newDivQbox, 'question_box');

    newDivQbox.appendChild(newDivLeftBox);
    newDivQbox.appendChild(newDivRightBox);


    /* answer */
    const newDivAnswerBox = document.createElement('div');
    const newDivMentInputArea = document.createElement('div');
    const newH2 = document.createElement('h2');
    const newTextAreaAnswerComment = document.createElement('textarea');
    const newButtonAnswerCreate = document.createElement('div');

    newH2.textContent = '[CARHARTT] 관리자';
    newButtonAnswerCreate.textContent = '답변하기';
    addClass(newDivMentInputArea, 'ment_input');
    addClassMulti(newButtonAnswerCreate, ['answer_create', 'blue_btn']);
    addClass(newDivAnswerBox, 'answer_box');

    setAttributeMulti(newTextAreaAnswerComment, [
        ['class', 'answer_text_box'],
        ['cols', '10'],
        ['rows', '4'],
        ['maxlength', '200']
    ]);
    newDivMentInputArea.appendChild(newH2);
    newDivMentInputArea.appendChild(newTextAreaAnswerComment);
    newDivMentInputArea.appendChild(newButtonAnswerCreate);
    newDivAnswerBox.appendChild(newDivMentInputArea);

    addClass(newLiQnAlist, 'question_list');
    newLiQnAlist.appendChild(newDivQbox);
    newLiQnAlist.appendChild(newDivAnswerBox);
    fragment.appendChild(newLiQnAlist);

    //리뷰 몇개인지 알려줌.
    qnaCounting.textContent = array.length + 1;
    qnaList.appendChild(fragment);

    //0개 되면 알림창
    //arrayLengthCheck(array);

    let answerInputState = false;
    newSpanManageComment.addEventListener('click', function () {
        if (!object.answerState && !answerInputState) {
            addClass(newDivAnswerBox, 'block_on');
            answerInputState = true;
        } else if (!object.answerState && answerInputState) {
            removeClass(newDivAnswerBox, 'block_on');
            answerInputState = false;
        }
    });

    newSpanQnADeleteBtn.addEventListener('click', function () {
        let parentUl = this.closest('.qna');
        let parentli = this.closest('.question_list');
        if (parentUl) {
            let objectNum = array.indexOf(object);
            array.splice(objectNum, 1);
            parentUl.removeChild(parentli);
            //0개 되면 알림창
            //arrayLengthCheck(array);
            qnaCounting.textContent = array.length + 1;
        }
    });

    const argueArray = [newLiQnAlist, newDivAnswerBox, newTextAreaAnswerComment, newSpanQState, newButtonAnswerCreate, newSpanManagerMent, object];
    answerClick(argueArray);

}

function IDViewLengthCut(ID) {
    let userIDBefore = ID.substring(0, 2);
    let userIDafter = '*'.repeat(ID.length - userIDBefore.length);

    let userID = userIDBefore + userIDafter;

    //console.log(ID.length, userIDBefore, userIDafter);
    return userID;
}

function answerStateReturn(objectProperty) {
    let result = ``;
    if (!objectProperty) {
        result = `미처리`
    } else {
        result = `답변완료`
    }

    return result;
}

function setAttributeMulti(Element, arrays) {
    //구조 분해 할당을 이용한 setattriubute 반복문
    //구조 분해 할당 예시
    //강의듣고 이해한것 적은것

    //const array = [10, 20, 30];
    //const [a, b ,c] = array;

    //과정설명
    //const [a, b ,c] => array[10, 20, 30];
    //const a = array[0]
    //const b = array[1]
    //const c = array[2]

    //변수 갯수와 배열안의 요소 갯수가 일치하지 않으면, 예를들어
    //const [a,b,c] array[10, 20]
    //c는 undefined가 뜬다.
    //따라서 기본값을 주면 저런 상황을 미연에 방지 가능

    //const array = [10,20];
    //const [a = 1, b = 2, c = 3] = array
    //const a = 10, b = 20, c = 3

    //const array = [10,20,30];
    //const [a, '', c] = array;
    //const a = 10 c = 30;
    //이렇게 건너띌수도 있음.

    //값 바꿔치기를 할때도 배열 구조분해를 이용하면 간단하게 된다.
    //let a = 5; let b = 6 이라고 가정하고, b와 a를 바꾸려면 원래는 새로운 변수를 하나 만들어서
    //해당 값들중 하나를 저장해두어야 했지만
    //배열 구조분해할당을 이용하면 그럴필요도 없어진다.
    //let a = 5; 
    //let b = 10;
    //let [a, b] = [b, a] a에 b값 대입되고 b에 a값이 대입됨.
    for (const [indexFirst = '', indexLast = ''] of arrays) {
        Element.setAttribute(indexFirst, indexLast);
        //따라서 해당 과정은 이런형식으로 진행된다.
        //array[0] -> ['id', 'answer_text_box'] 
        //const [indexFirst, indexLast] = ['id', 'answer_text_box']
        //indexFirst에 id 대입됨.
    }
}

function answerClick(array) {
    let [nowLi = '', nowAnBox = '', nowTextBox = '', nowQstate = '', nowBtn = '', nowDetail = '', nowobject] = array;
    nowBtn.addEventListener('click', () => {
        if (nowTextBox.value !== null && nowTextBox.value !== undefined && nowTextBox.value !== '') {
            const fragment = document.createDocumentFragment();

            //해당하는 리스트의 객체속성 변경
            nowobject.answerState = true;
            nowobject.answer = answerStateReturn(nowobject.answerState);
            nowQstate.textContent = nowobject.answer;

            removeClass(nowAnBox, 'block_on');

            const newDivMentArea = document.createElement('div');
            const newSpanAnswer = document.createElement('span');
            const newDivGuideMent = document.createElement('div');
            const newPSpot = document.createElement('p');
            const newPMent = document.createElement('p');

            addClass(nowDetail, 'block_on');
            addClassMulti(newDivMentArea, ['ment_area', 'none_on']);
            addClass(newSpanAnswer, 'answer');
            addClass(newDivGuideMent, 'qna_guide_ment');
            addClass(newPSpot, 'spot');
            addClass(newPMent, 'ment');

            newSpanAnswer.textContent = `답변`;
            newPSpot.textContent = `↘[CARHARTT] 관리자`;
            newPMent.textContent = nowTextBox.value;

            newDivGuideMent.appendChild(newPSpot);
            newDivGuideMent.appendChild(newPMent);
            newDivMentArea.appendChild(newSpanAnswer);
            newDivMentArea.appendChild(newDivGuideMent);

            fragment.appendChild(newDivMentArea);
            nowLi.appendChild(fragment);
            /*             let receive = '';
                        receive = 
                        `
                            <div class="ment_area">
                                <span class="answer">답변</span>
                                <div class="qna_guide_ment">
                                    <p class="spot">↘[CARHARTT] 관리자</p>
                                    <p class="ment">${nowTextBox.value}</p>
                                </div>
                            </div>
                        `;
                        nowLi.innerHTML += receive; */
            nowDetail.addEventListener('click', () => {
                if (!nowobject.listState) {
                    nowobject.listState = true;
                    removeClass(newDivMentArea, 'none_on');
                } else {
                    addClass(newDivMentArea, 'none_on');
                    nowobject.listState = false;
                }
            })
        } else {
            alert('글자를 입력하세요!');
        }
    });

}

function arrayLengthCheck(array) {
    if (array.length > 0) {
        addClass(qnaNotMentBox, 'none_on');
    } else {
        removeClass(qnaNotMentBox, 'none_on');
    }
}

/*********************************** qna & review common  ********************************/
function calcDate() {
    let newDate = new Date();
    let nowYear = newDate.getFullYear();
    let nowMonth = newDate.getMonth() + 1;
    let nowDay = newDate.getDate();
    let nowHours = newDate.getHours();
    let nowMinutes = newDate.getMinutes();
    let nowSeconds = newDate.getSeconds();

    //const DateArray = [nowDay, nowMonth, nowHours, nowMinutes, nowSeconds]

    if (nowDay < 10) {
        nowDay = `0${nowDay}`;
    }
    if (nowMonth < 10) {
        nowMonth = `0${nowMonth}`;
    }
    if (nowHours < 10) {
        nowHours = `0${nowHours}`;
    }
    if (nowMinutes < 10) {
        nowMinutes = `0${nowMinutes}`;
    }
    if (nowSeconds < 10) {
        nowSeconds = `0${nowSeconds}`;
    }

    let time = `${nowYear}-${nowMonth}-${nowDay}/${nowHours}:${nowMinutes}:${nowSeconds}`;

    return time;
}

function listDelete(btn, array) {
    let idValue = btn.getAttribute(`id`);

    //리스트 배열에서 해당 id숫자를 가진 인덱스 객체 삭제
    array.splice(idValue, 1);

    //그리고 다시 리스트생성 및 페이지 생성
    pageCreate(reviewContents);
    let returnSlice = arraySlice(countingObject.pageCount, pageViewLength, reviewContents);
    createList(returnSlice);
}

function valueReset(textBox01, textBox02) {
    textBox01.value = ``;
    textBox02.textContent = `${0} 자`;
}


/*************** modal 관련  ******************/
const heightInput = document.getElementById('height_input');
const weightInput = document.getElementById('weight_input');
const numberInput = document.querySelectorAll('.only_number');

const sizeCalcBtn = document.querySelector('.siez_search_btn');

const noticeMent = document.querySelector('.notice_ment');
const showSize = document.querySelector('.show_box');

const modalOpenBtn = document.querySelector('.size_chk_btn');
const modalCloseBtn = document.querySelector('.size_chk_modal_ex .modal_close_btn');

const modalEx = document.querySelector('.size_chk_modal_ex');

const inputMaxLength = 3;

numberInput.forEach((inputBar) => {
    inputBar.addEventListener('keyup', () => {

        let numberReg = /^\d+$/;

        //.length는 숫자에는 안먹힘 문자열에만 적용 
        //따라서 메서드써서 문자열로 변경해주거나, 템플릿스트링 표기법으로
        //console.log(`${inputBar.value.length}`, inputMaxLength);
        if (!(numberReg.test(`${inputBar.value}`))) {
            inputBar.value = ``;
            addClass(noticeMent, `block_on`);
            noticeMent.children[0].textContent = `숫자만 입력 가능합니다.`;
        } else {
            removeClass(noticeMent, `block_on`);
        }

        if (`${inputBar.value.length}` > inputMaxLength) {
            //문자열의 0번째자리부터 3자리만 표기되게
            //console.log(`${inputBar.value}`.substring(0, inputMaxLength));

            //value안에 잘린값 대입해줘야함.
            inputBar.value = `${inputBar.value}`.substring(0, inputMaxLength);
        }
    })
});

sizeCalcBtn.addEventListener('click', () => {
    let valueCheck01 = heightInput.value
    let valueCheck02 = weightInput.value

    if ((valueCheck01 && valueCheck02) !== null && (valueCheck01 && valueCheck02) !== undefined && (valueCheck01 && valueCheck02) !== ``) {
        removeClass(noticeMent, `block_on`);

        sizeCalc(valueCheck01, valueCheck02);


    } else {
        addClass(noticeMent, `block_on`);
        noticeMent.children[0].textContent = `유효한 입력값이 아닙니다.`;
    }
});

modalOpenBtn.addEventListener('click', () => {
    addClass(modalEx, `block_on`);
});
modalCloseBtn.addEventListener('click', () => {
    removeClass(modalEx, `block_on`);
});

function sizeCalc(value01, value02) {
    let valueCalc01 = value02 / ((value01 * 0.01) * 2)
    //소숫점 2자리까지 표기를 위해
    let valueCalc02 = Math.floor(valueCalc01 * 100) / 100;
    //console.log(valueCalc02);

    if (valueCalc02 < 17.5) {
        showSize.children[0].textContent = `XS`;
    } else if (valueCalc02 > 17.5 && valueCalc02 < 18.5) {
        showSize.children[0].textContent = `S`;
    } else if (valueCalc02 > 18.5 && valueCalc02 < 23) {
        showSize.children[0].textContent = `M`;
    } else if (valueCalc02 > 23 && valueCalc02 < 25) {
        showSize.children[0].textContent = `L`;
    } else if (valueCalc02 > 25 && valueCalc02 < 40) {
        showSize.children[0].textContent = `XL`;
    } else {
        showSize.children[0].textContent = `없음`;
    }
}
//클래스 추가
function addClass(Element, ClassName) {
    Element.classList.add(ClassName);
}

function addClassMulti(Element, ClassArray) {
    ClassArray.forEach((ClassName) => {
        Element.classList.add(ClassName);
    });
}

//클래스 제거
function removeClass(Element, ClassName) {
    Element.classList.remove(ClassName);
}

/* function Num(value) {
    let result = parseInt(value, 10);
    return result;
} */


/************************ search_product_list ****************************/
const searchProductWrapper = document.getElementById('product_list');
const pageSection = document.getElementById('search_pagenation');
const pageNumber = document.querySelector('.page_number');

const pageItemView = 12;

const searchValue = document.querySelector('.search_value');
const productLengthNotice = document.querySelector('.list_length');


fetch('./product_search_data.json')
  .then(res => res.json())
  .then((data) => {
    listRequest(getParameter('q'), data);
  })
  .catch(error => console.log(error));

function getParameter(parameter) {
  const urlObject = new URLSearchParams(location.search);

  //urlsearchparams란?
  //url쿼리문자열을 파싱하는 객체로
  //해당 객체를 생성후 get으로 ?뒤에 설정한 쿼리문자열을 매개변수로 받아
  //뒤에오는 문자열을 전달받을수있 다고 한다.

  //여기서 q는 key고 = 뒤에 오는게 value이다. 

  //ex ?query='바나나' 라고 가정하면 위의 선언한 객체에서
  //.get('query')를하면 바나나라는 값을 가져오게 될수 있게되는것.

  return urlObject.get(parameter);

}


function listfilter(value = '', array = []) {
  const returnArray = array.filter((object) => {

    if (value === '') {
      return false;
    }
    
    return object.productNameKor.includes(value) || object.productModelName.includes(value) || object.productStyle.includes(value);
  })

  console.log(returnArray);
  return returnArray;
}

function lengthShow(value, array) {
  searchValue.textContent = value;
  productLengthNotice.textContent = array.length;
}

function listRequest(value, data) {
  const filterArray = listfilter(value, data);

  lengthShow(value, filterArray);
  listnPageCreate(filterArray);
}

/************************ search_tab ****************************/
const productPageSearchDelete = document.getElementById('search_delete_btn');
const productPageSearchTab = document.getElementById('product_page_search');
const maxValueLength = 50;

productPageSearchDelete.addEventListener('click', () => {
  productPageSearchTab.focus();
  productPageSearchTab.value = '';
});

productPageSearchTab.addEventListener('keyup', function (e) {
  let time;
  if (this.value.length > maxValueLength) {
    this.value = this.value.substring(0, maxValueLength);
  }
  if (e.key === 'Enter') {
    
    clearTimeout(time);
    time = setTimeout(() => {
      fetch('./product_search_data.json')
      .then(res => res.json())
      .then((data) => {
        listRequest(this.value, data);
      })
      .catch(error => console.log(error));
    }, 400);
  }

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
    });
  }
}
//페이지 리스트 생성
function listCreate(array) {
  searchProductWrapper.innerHTML = ``;
  let receive = ``;

  if (array.length === 0) {
    searchProductWrapper.innerHTML = `
          <div class="search_not_ment">
            <p>
              <i class="far fa-times-circle"></i>
              검색어와 일치하는 내용이 없습니다.
            </p>
            <p>다른 검색어를 입력하시거나, 검색어와 띄어쓰기를 확인 해보세요.</p>
          </div>
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
  searchProductWrapper.innerHTML += receive;
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

  //console.log(returnArray);
  //console.log(startIndex);
  //console.log(lastIndex);
}

//클래스 추가
function addClass(Element, ClassName) {
  Element.classList.add(ClassName);
}

function addClassMulti(Element, ClassArray) {
  ClassArray.forEach((ClassName) => {
    Element.classList.add(ClassName);
  });
}

//클래스 제거
function removeClass(Element, ClassName) {
  Element.classList.remove(ClassName);
}
