//(페이지1)

//약관 동의 전체 감싸는 form
const termsArea = document.getElementById('terms_area');
//전부 체크
const termsAllChkBtn = document.getElementById('terms_all_chk');
//이용약관동의 체크
const termsChk01Btn = document.getElementById('terms_chk_01');
//개인정보 수집 체크
const termsChk02Btn = document.getElementById('terms_chk_02');
//전체 체크를 제외한 체크버튼
const termsClass = document.querySelectorAll('.terms_chk');
//경고 문구
const cautionChk = document.getElementById('caution');

//페이지1 경고 문구 상태 변수
let cautionState;

//실행 이벤트 
termsAllChkBtn.addEventListener('click', termsAllChk);
termsChk01Btn.addEventListener('click', termsClick);
termsChk02Btn.addEventListener('click', termsClick);

//약관 체크 동작 함수 
function termsAllChk() {
    if (termsAllChkBtn.checked) { //순서 -> click -> 콜백실행 -> termsAllChkBtn.check = true -> 이후 조건체크
        for (let i = 0; i < termsClass.length; i++) {
            termsClass[i].checked = true;
        }
    } else {
        for (let i = 0; i < termsClass.length; i++) {
            termsClass[i].checked = false;
        }
    }
}

//하나라도 체크해제시 전부체크 해제 / 두개 체크시 올 체크
function termsClick() {
    for (let i = 0; i < termsClass.length; i++) {
        //2개다 true가 되면 전체 약관동의도 true되게함.
        let termsClassValue = Array.from(termsClass).every((value) => {
            return value.checked === true;
        });
        if (termsClassValue) {
            termsAllChkBtn.checked = true;
        }
        //하나라도 false되면 전체 약관동의 false
        if (!(termsClass[i].checked)) {
            termsAllChkBtn.checked = false;
        }
        console.log(termsClassValue);
    }
}

//경고 문구 토글 함수
function toggleCation() {
    if (!cautionState) {
        cautionChk.style.display = 'block';
    } else if (cautionState) {
        cautionChk.style.display = 'none';
    }
}


//(페이지2)

//필수 입력 요소들
const necessaryInput = document.querySelectorAll('.necessary_text');
//페이지2 경고 문구 팝업
const popUpToggleBtn = document.querySelector('.caution_pop_up_ex');

const user_name = document.getElementById('user_name');

//팝업 클릭시 
popUpToggleBtn.addEventListener('click', function() {
    this.classList.remove('pop_up_on');
})


//페이지 공통 (뒤로가기 /앞으로가기 /단계 표시)

//페이지에 따라 상단 효과
const stepCircle = document.querySelectorAll('.circle');
const stepText = document.querySelectorAll('.text');
//페이지 버튼
const prevPageBtn = document.getElementById('prev_btn');
const nextPageBtn = document.getElementById('next_btn');
const showPage = document.querySelectorAll('.page');

//prev,next 클릭 이벤트
nextPageBtn.addEventListener('click', showNextPage);
prevPageBtn.addEventListener('click', showPrevPage);

//page count 
let pageCount = 0;

//동작함수
function showNextPage() {
    if (pageCount === 0) {
        pageCheck01();

    } else if (pageCount === 1) {
        pageCheck02();
    }
}

function showPrevPage() {
    if (pageCount === 0) {
        location.href = '../login_page/login.html';
    }
    if (pageCount === 1) {
        pageCount--;

        pageOn();

        for (let i = 0; i < necessaryInput.length; i++) {
            necessaryInput[i].value = '';
        }
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

        pageOn();
    }
}

function pageCheck02() {
    let necessaryInputChk = Array.from(necessaryInput).every((inputValue) => {
        return inputValue.value;
    }) //해당 클래스 속성을 가진 요소들의 밸류가 전부 true가 됐을때 true 그게 아니면 false
    if (!(necessaryInputChk)) {
        //밸류가 하나라도 false일때 조건문실행, //necessaryInputChk 가 false라는 뜻은 배열 요소중 어느 하나라도 false라는 말이므로
        
        //pop_up 관련
        popUpToggleBtn.classList.add('pop_up_on');
    } else if (necessaryInputChk) {
        pageCount++;

        pageOn();
    }
}

function pageOn() {
    for (let i = 0; i < showPage.length; i++) {
        showPage[i].classList.remove('page_on');
        stepCircle[i].classList.remove('step_on');
        stepText[i].classList.remove('text_step_on');
    }

    showPage[pageCount].classList.add('page_on');
    stepCircle[pageCount].classList.add('step_on');
    stepText[pageCount].classList.add('text_step_on');
    //console.log(pageCount);
}
