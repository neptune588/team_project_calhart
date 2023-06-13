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
                    <span class="rating_star">${starWrite(array[i], `ratingStar`)}</span>
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
const qnaNotMentBox = document.querySelector('.qna_not_ment');

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
    qnaCounting.textContent = array.length;
    qnaList.appendChild(fragment);

    //0개 되면 알림창
    arrayLengthCheck(array);

    let answerInputState = false;
    newSpanManageComment.addEventListener('click', function() {
        if(!object.answerState && !answerInputState) {
            addClass(newDivAnswerBox, 'block_on');
            answerInputState = true;
        } else if(!object.answerState && answerInputState) {
            removeClass(newDivAnswerBox, 'block_on');
            answerInputState = false;
        }
    });

    newSpanQnADeleteBtn.addEventListener('click', function() {
        let parentUl = this.closest('.qna');
        let parentli = this.closest('.question_list');
        if(parentUl) {
            let objectNum = array.indexOf(object);
            array.splice(objectNum, 1);
            parentUl.removeChild(parentli);
            //0개 되면 알림창
            arrayLengthCheck(array);
            qnaCounting.textContent = array.length;
        }
    });

    const argueArray = [newLiQnAlist, newDivAnswerBox, newTextAreaAnswerComment, newSpanQState,  newButtonAnswerCreate, newSpanManagerMent, object];
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
        if(nowTextBox.value !== null && nowTextBox.value !== undefined && nowTextBox.value !== '') {
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
                if(!nowobject.listState) {
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
        removeClass(qnaNotMentBox, 'none_on')
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