import { totalRegex } from './regex.js'
import { userData } from './userdata.js'

/********************************* 페이지1 ***********************************/

const regexTestName = totalRegex.nameRegexArr[0].regex;
const regexTest00 = totalRegex.totalRegexArr[0].regex;
const regexTest01 = totalRegex.totalRegexArr[1].regex;
const regexTest02 = totalRegex.totalRegexArr[2].regex;
const regexTestEmailBefore = totalRegex.emailRegexArr[0].regex;
const regexTestEmailAfter = totalRegex.emailRegexArr[1].regex;

//전부 체크
const termsAllChkBtn = document.getElementById('terms_all_chk');
//이용약관동의 체크
const termsChk01Btn = document.getElementById('terms_chk_01');
//개인정보 수집 체크
const termsChk02Btn = document.getElementById('terms_chk_02');
//전체 체크를 제외한 체크버튼
const terms = document.querySelectorAll('.terms_chk');
//경고 문구
const cautionChk = document.getElementById('caution');


//경고 문구 상태 변수
let cautionState;

//실행 이벤트 
termsAllChkBtn.addEventListener('click', termsAllChk);

termsChk01Btn.addEventListener('click', termsClick);
termsChk02Btn.addEventListener('click', termsClick);

//약관 체크 동작 함수 
function termsAllChk() {
    if (termsAllChkBtn.checked) { //순서 -> click -> termsAllChkBtn.check = true -> 이벤트핸들러(함수동작전달) 
        terms.forEach(checkBtn => checkBtn.checked = true);
    } else {
        terms.forEach(checkBtn => checkBtn.checked = false);
    }
}

function termsClick() {
    const arrChange = Array.from(terms);
    let checkedBool;

    terms.forEach(() => {
        checkedBool = arrChange.every(term => term.checked);
    })

    if(checkedBool) {
        termsAllChkBtn.checked = true;
    } else {
        termsAllChkBtn.checked = false;
    }
}


/********************************* 페이지2 ***********************************/

//필수 입력 요소들
const necessaryInput = document.querySelectorAll('.necessary_text');
//페이지2 경고 문구 팝업
const popUpToggleBtn = document.querySelector('.caution_pop_up_ex');
//이름 입력창
const userName = document.getElementById('user_name');
//아이디 입력창
const userId = document.getElementById('user_id');
//비밀번호 입력창
const userPw = document.getElementById('user_pw');
//비밀번호 확인 입력창
const userPwReChk = document.getElementById('user_pw_chk');
//이메일 입력창 중 도메인 넣는부분(뒷부분)
const userEmailAfter = document.getElementById('user_email_last');
//이메일 입력창 중 도메인 넣는부분 선택창
const userEmailSelected = document.getElementById('user_email_last_select');
//비밀번호 보이기 버튼
const userPwShowBtn = document.getElementById('pw_view_btn');
//아이디 체크
const userIdChkBtn = document.getElementById('user_id_chk');

//팝업 클릭시 
popUpToggleBtn.addEventListener('click', function () {
    removeClass(this, 'pop_up_on');
})

//input 전체 순환
necessaryInput.forEach((input) => {
    input.addEventListener('keyup', valueChecks);
    input.addEventListener('blur', valueChecks);
});

//1. 공백체크 -> 공백아니면 이후 조건들 체크
function valueChecks() {
    const thisIndex = Array.from(necessaryInput).indexOf(this);
    const guideMessageArea = this.parentNode.lastElementChild;

    if (this.value === '' || this.value === undefined || this.value === null) {
        falseOn(this, guideMessageArea); //해당 인덱스 요소의 밸류가 공백이면 false 추가 함수로
        guideMessageArea.textContent = '입력값을 입력 혹은 선택해주세요!';
    } else {
        etcCheck(this, thisIndex);
    } 
}

//아이디 confirm 상태 
let idConfirm;
//중복확인체크 , 아이디의 경우 버튼을 통해 체크
userIdChkBtn.addEventListener('click', userIdCheck);
function userIdCheck() {
    const guideMessageArea = userId.parentNode.lastElementChild;
    const duplicateCheck = userData.some(object => object.userIDInfo === userId.value);

    if (userId.value === '' || userId.value === undefined || userId.value === null) {
        falseOn(userId, guideMessageArea);
        guideMessageArea.textContent = '입력값을 입력 혹은 선택해주세요!';
    } else if (!(regexTest02.test(userId.value))) {
        falseOn(userId, guideMessageArea);
        guideMessageArea.textContent = '유효하지 않은 입력입니다. (특수문자 _는 한번만 가능, 영어 소문자 또는 숫자 특수문자_ 조합 가능, 6~15자)'
    } else if (duplicateCheck) {
        falseOn(userId, guideMessageArea);
        guideMessageArea.textContent = '중복된 아이디입니다!'
    } else {
        trueOn(userId, guideMessageArea);
        guideMessageArea.textContent = '알맞은 양식입니다!';
        //userId전달
        idConfirm = true;
    }
}

//pw상태체크
let pwToggleState = false;
//pw보이기 체크
userPwShowBtn.addEventListener('click', userPwShow);
//패스워드 보이기/끄기 
function userPwShow() {
    if (!pwToggleState) {
        userPw.setAttribute('type', 'text');
        userPwReChk.setAttribute('type', 'text');

        //아이콘 on
        addClass(userPwShowBtn, 'pw_on');
        pwToggleState = true;
    } else {
        userPw.setAttribute('type', 'password');
        userPwReChk.setAttribute('type', 'password');

        //아이콘 off
        removeClass(userPwShowBtn, 'pw_on');
        pwToggleState = false;
    }
}


//pw가 가려졌을때 캡스락이 눌러졌는지 체크
userPw.addEventListener('keyup', function(e) {
    let CapsLock = e.getModifierState('CapsLock');
    let guideMessageArea = this.parentNode.lastElementChild;
    if (!pwToggleState && CapsLock && userPw.value.length > 0) {
        guideMessageArea.textContent = 'Caps Lock을 꺼주세요!'
    }
});

//이메일 도메인부분 선택해서 넣었을떄 
userEmailSelected.addEventListener('change', emailSelected);
//이메일 뒷자리(도메인영역) 셀렉트로 선택했을때(선택영역)
function emailSelected () {
    let selectedValue = userEmailSelected.options[userEmailSelected.selectedIndex];
    const guideMessageArea = this.parentNode.lastElementChild;

    if (selectedValue.value === '' || selectedValue.value === undefined || selectedValue.value === null) {
        userEmailAfter.removeAttribute('disabled');
        //직접입력을 선택했을때는 이메인 도메인 입력창 활성화 
    } else {
        userEmailAfter.value = selectedValue.textContent;
        userEmailAfter.setAttribute('disabled', 'true');
        trueOn(userEmailAfter, guideMessageArea);
        guideMessageArea.textContent = '알맞은 양식입니다!'
        //그외 선택을 했을때는 이메일 도메인 입력창에 선택한 옵션의 텍스트값이 전달/입력창 비활성화
    }
}

//공백이 아닐때 각각의 인덱스 번호에 해당하는 조건식함수들 호출
function etcCheck(nowInput, nowIndex) {
    switch (nowIndex) {
        case 0: {
            valueCheck01(nowInput);
            break;
        }
        case 2: {
            valueCheck02(nowInput);
            break;
        }
        case 1:
        case 3: {
            valueCheck03(nowInput);
            break;
        }
        case 4: {
            valueCheck04(nowInput);
            break;
        }
        case 5: {
            valueCheck05(nowInput);
            break;
        }
        case 6: {
            valueCheck06(nowInput);
            break;
        }
        case 7: {
            valueCheck07(nowInput);
            break;
        }
        case 8: {
            valueCheck08(nowInput);
            break;
        }
        case 9: {
            valueCheck09(nowInput);
            break;
        }
    }
}

//이름 체크
function valueCheck01(myInput) {
    let guideMessageArea = myInput.parentNode.lastElementChild;

    if (!(regexTestName.test(myInput.value))) {
        falseOn(myInput, guideMessageArea);
        guideMessageArea.textContent = '이름은 한글만 가능합니다.(최대 8자) 또한 초성 입력은 안됩니다.'
    } else {
        trueOn(myInput, guideMessageArea);
        guideMessageArea.textContent = '알맞은 양식입니다!'
    }
}

//생년월일 중에 생년 체크
function valueCheck02(myInput) {
    let guideMessageArea = myInput.parentNode.lastElementChild;
    //value값은 항상 문자열이기떄문에 숫자비교를할떄는 숫자로 형변환 후 비교 
    if (!(regexTest00.test(parseInt(myInput.value)))) {
        falseOn(myInput, guideMessageArea);
        guideMessageArea.textContent = '유효한 년도가 아닙니다 (1900~2100까지 가능)'
    } else {
        trueOn(myInput, guideMessageArea);
        guideMessageArea.textContent = '알맞은 양식입니다!'
    }
}

//성별, 생년월일중 월 체크
function valueCheck03(myInput) {
    let guideMessageArea = myInput.parentNode.lastElementChild;
    if (!(myInput.value)) {
        falseOn(myInput, guideMessageArea);
    } else {
        trueOn(myInput, guideMessageArea);
        guideMessageArea.textContent = '알맞은 양식입니다!'
    }
}

//생년월일 중에 일 체크
function valueCheck04(myInput) {
    let guideMessageArea = myInput.parentNode.lastElementChild;
    if (!(regexTest01.test(parseInt(myInput.value)))) {
        falseOn(myInput, guideMessageArea);
        guideMessageArea.textContent = '유효한 입력이 아닙니다 (1일~31일까지 가능)'
    } else {
        trueOn(myInput, guideMessageArea);
        guideMessageArea.textContent = '알맞은 양식입니다!'
    }
}

//공백아닐때 false제거 (아이디칸만)
function valueCheck05(myInput) {
    falseTrueReset(myInput);
}

//비밀번호 체크 
function valueCheck06(myInput) {
    let guideMessageArea = myInput.parentNode.lastElementChild;
    if (!(regexTest02.test(myInput.value))) {
        falseOn(myInput, guideMessageArea);
        guideMessageArea.textContent = '유효하지 않은 입력입니다. (특수문자 _는 한번만 가능, 영어 소문자 또는 숫자 특수문자_ 조합 가능, 6~15자)'
    } else {
        trueOn(myInput, guideMessageArea);
        guideMessageArea.textContent = '알맞은 양식입니다!'
    }
}

//비밀번호 재확인 
function valueCheck07(myInput) {
    let guideMessageArea = myInput.parentNode.lastElementChild;
    //비밀번호칸에 유효한 값이 들어갔는지 체크
    let pwBool = userPw.classList.contains('trueOn');
    if (!pwBool && (userPw.value !== myInput.value)) {
        falseOn(myInput, guideMessageArea);
        guideMessageArea.textContent = '비밀번호가 일치하지 않습니다.'
    } else {
        trueOn(myInput, guideMessageArea);
        guideMessageArea.textContent = '비밀번호가 일치합니다!'
    }
}

//이메일 골뱅이 앞부분 체크
function valueCheck08(myInput) {
    let guideMessageArea = myInput.parentNode.lastElementChild;
    if (!regexTestEmailBefore.test(myInput.value)) {
        falseOn(myInput, guideMessageArea);
        guideMessageArea.textContent = '유효하지 않은 입력입니다. (특수문자 _는 한번만 가능, 영어 소문자 또는 숫자 특수문자_ 조합 가능, 2~12자)'
    } else {
        trueOn(myInput, guideMessageArea);
        guideMessageArea.textContent = '알맞은 양식입니다!'
    }
}

//이메일 뒷자리 부분 체크(직접입력하는 영역)
function valueCheck09(myInput) {
    let guideMessageArea = myInput.parentNode.lastElementChild;
    if (!regexTestEmailAfter.test(myInput.value)) {
        falseOn(myInput, guideMessageArea);
        guideMessageArea.textContent = '유효하지 않은 입력입니다. (영어 소문자와 숫자, .만 입력 가능, .은 두번까지만)'
    } else {
        trueOn(myInput, guideMessageArea);
        guideMessageArea.textContent = '알맞은 양식입니다!'
    }
}

//border_red //스타일주는 용도
function falseOn(el, mentEl) {
    mentEl.style.color = 'red';
    removeClass(el, 'true_on');
    addClass(el, 'false_on');
}

//border_green //스타일주는 용도
function trueOn(el, mentEl) {
    mentEl.style.color = 'green';
    removeClass(el, 'false_on');
    addClass(el, 'true_on');
}

//border_reset 
function falseTrueReset(el) {
    const classArr = ['false,on', 'true_on'];
    removeClassMulti(el, classArr);
}

/********************************* 페이지3 ***********************************/
const IdNTitleMent = document.getElementById('id_n_title_ment');
const titleMent = document.getElementById('title_ment');


/********************************* 페이지 공통 ***********************************/

//페이지에 따라 상단 효과
const stepCircle = document.querySelectorAll('.circle');
const stepText = document.querySelectorAll('.text');
//페이지 버튼
const prevPageBtn = document.getElementById('prev_btn');
const nextPageBtn = document.getElementById('next_btn');
const showPage = document.querySelectorAll('.page');
const loginPageInBtn = document.getElementById('login_page_in_btn');
//prev,next 클릭 이벤트
nextPageBtn.addEventListener('click', showNextPage);
prevPageBtn.addEventListener('click', showPrevPage);

//page count 
let pageCount = 0;

//가입한 아이디 표기
function IdValueLoad() {
    if (idConfirm) {
        let newP = document.createElement('p');
        newP.textContent = userId.value;
        IdNTitleMent.insertBefore(newP, titleMent);
    }
}

function showPrevPage() {
    if (pageCount === 0) {
        location.href = './login.html';
    } else if (pageCount === 1) {
        pageCount--;

        nextPageBtn.textContent = `Next`;
        pageOn();
    }
    //초기화
    necessaryInput.forEach(input => input.value = '');
    necessaryInput.forEach((input) => { 
        input.parentElement.lastElementChild.textContent = '';
        removeClass(input, 'true_on');
        removeClass(input, 'false_on');
    });
}

function showNextPage() {
    
    if (pageCount === 0) {
        pageCheck01();
    } else if (pageCount === 1) {
        pageCheck02();  
    } 
}

function pageCheck01() {
    if (!(termsAllChkBtn.checked)) { //약관동의 안됐을경우
        cautionState = false;
        toggleCation();
    } else {
        pageCount++;

        //약관 동의 체크 
        termsAllChkBtn.checked = false;
        termsAllChk();

        //경고 문구
        cautionState = true;
        toggleCation();

        nextPageBtn.textContent = `Submit`;
        pageOn();
    }
}

function pageCheck02() {
    let lastInputChk = Array.from(necessaryInput).every(input => input.value && input.classList.contains('true_on'));

    console.log(lastInputChk);
    
    //모든 원소가 조건을 만족하면 true, 하나라도 만족하지 않으면 false를 반환한다.
    //해당 배열안에 있는 값들이 조건을 "모두" 통과해야만 true를 반환해준다.
    if (!lastInputChk) {
        addClass(popUpToggleBtn, 'pop_up_on');
    } else {
        pageCount++;

        prevPageBtn.style.display = 'none';
        nextPageBtn.style.display = 'none';

        addClass(loginPageInBtn, 'login_page_in_btn_on');
        IdValueLoad();

        pageOn();
    }
}

//경고 문구 토글 함수
function toggleCation() {
    if (!cautionState) {
        addClass(cautionChk, 'block_on');
    } else {
        removeClass(cautionChk, 'block_on');
    }
}

function pageOn() {
    for (let i = 0; i < showPage.length; i++) {
        removeClass(showPage[i], 'page_on');
        removeClass(stepCircle[i], 'step_on');
        removeClass(stepText[i], 'text_step_on');
    }

    addClass(showPage[pageCount], 'page_on');
    addClass(stepCircle[pageCount], 'step_on');
    addClass(stepText[pageCount], 'text_step_on');

    if (pageCount === 1) {
        userName.focus();
    }
}

function addClass(el, className) {
    el.classList.add(className);
}

function addClassMulit(el, classArr) {
    classArr.forEach(className => el.classList.add(className));
}

function removeClass(el, className) {
    el.classList.remove(className);
}

function removeClassMulti(el, classArr) {
    classArr.forEach(className => el.classList.remove(className));
}

function setAttributeMulti(el, attrArr) {
    for(let [attrBefore, attrAfter] of attrArr) {
        el.setAttribute(attrBefore, attrAfter);
    }
}