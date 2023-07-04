
//20230704 리뉴얼 완료 
for (let i = 0; i < termsClass.length; i++) {
    let termsClassValue = Array.from(termsClass).every((value) => {
        return value.checked;
    });
    if (termsClassValue) {
        termsAllChkBtn.checked = true;
    }
    if (!(termsClass[i].checked)) {
        termsAllChkBtn.checked = false;
    }
}

//20230704 리뉴얼 완료 
function pwShowOnOff() {
    if (!pwToggleState) {
        addClass(userPwShowBtn, 'pw_on');
        pwToggleState = true;
    } else {
        removeClass(userPwShowBtn, 'pw_on');
        pwToggleState = false;
    }
}

//20230704 리뉴얼 완료 
function valueChecks() {
    let eventTarget = this; //blur 이벤트 발동한 객체
    //배열로 전환 후 indexof로 지금 해당하는 그것의 인덱스 번호 추출
    let eventTargetIndex = Array.from(necessaryInput).indexOf(eventTarget);
    //해당하는 요소 마지막 요소인 가이드문구 요소
    let guideMessageArea = this.parentNode.lastElementChild;
    if (!(this.value)) {
        falseOn(eventTarget, guideMessageArea); //해당 인덱스 요소의 밸류가 공백이면 false 추가 함수로
        guideMessageArea.textContent = '입력값을 입력 혹은 선택해주세요!';
    } else {
        indexSearch(eventTargetIndex);
    } //공백이 아니면 다른 조건 체크하기 위해 indexSearch실행
}

function valueCheck01(myIndex) {
    //문자열과 정규식은 자료형(타입)이 다르기 떄문에 바로 비교를 하면 안되고
    //test메서드를 통해 밸류를 체크
    let thisInputIndex = necessaryInput[index];
    let guideMessageArea = thisInputIndex.parentNode.lastElementChild;
    if (!(regexTestName.test(thisInputIndex.value))) {
        falseOn(thisInputIndex, guideMessageArea);
        guideMessageArea.textContent = '이름은 한글만 가능합니다.(최대 8자) 또한 초성 입력은 안됩니다.'
    } else {
        trueOn(thisInputIndex, guideMessageArea);
        guideMessageArea.textContent = '알맞은 양식입니다!'
    }
}

//비밀번호 재확인 
function valueCheck07(myInput) {
    let thisInputIndex = necessaryInput[index];
    let guideMessageArea = thisInputIndex.parentNode.lastElementChild;
    //비밀번호칸에 유효한 값이 들어갔는지 체크
    let pwInputClassChk = userPw.classList.contains('trueOn');
    let userPwValue = userPw.value
    //console.log(userPwValue);
    if (!pwInputClassChk && (userPwValue !== thisInputIndex.value)) {
        falseOn(thisInputIndex, guideMessageArea);
        guideMessageArea.textContent = '비밀번호가 일치하지 않습니다.'
    } else {
        trueOn(thisInputIndex, guideMessageArea);
        guideMessageArea.textContent = '비밀번호가 일치합니다!'
    }
}