import {
    userData
} from './userdata.js';

//아이디 입력창
const userId = document.getElementById('user_id');
//비밀번호 입력창
const userPw = document.getElementById('user_pw');

//가이드멘트
const IDmessage = userId.parentNode.lastElementChild;
const PWmessage = userPw.parentNode.lastElementChild;

//비밀번호 숫자로 표시 ON/OFF 버튼
const showNBlockBtn = document.getElementById('pw_show_block_btn');

//비밀번호 표시 상태 변수
let pwShowState;

//로그인하기 버튼
const userSignIn = document.getElementById('sign_in_chk');

//비밀번호 보기 버튼 눌렸을때
showNBlockBtn.addEventListener('click', userPwShow);
//로그인했을때 조건들 체크
userSignIn.addEventListener('click', allChks);

//빨간박스 초기화
userId.addEventListener('keyup', function () {
    falseReset(userId, IDmessage)
});
//함수로 바로전달하면 언디파인드 도출됨 함수 자체를 return 값으로 받자.
userPw.addEventListener('keyup', function () {
    falseReset(userPw, PWmessage)
});

//아이디 체크
function allChks () {
    const IdSearch = userData.some(object => object.userIDInfo === userId.value);

    console.log(IdSearch);
    if(!IdSearch) {
        IDmessage.textContent = '아이디가 일치하지 않습니다!';
        falseOn(userId, IDmessage);
    } else {
        PWCheck();
    }
}
//비밀번호 체크
function PWCheck() {
    const PWSearch = userData.some(object => object.userPWInfo === userPw.value);
    
    let nowIdIndex = userData.findIndex(object => object.userIDInfo === userId.value);
    let nowPWIndex = userData.findIndex(object => object.userPWInfo === userPw.value);

    //console.log(PWSearch, nowIdIndex, nowPWIndex);

    if(!PWSearch && (nowIdIndex !== nowPWIndex) ) {

        /*         간단하게 정리하자면, findIndex로 id도  -1이 나오고 pw -1이 나오면 둘이 같은경우가 되는건데
        왜 이렇게했냐?
        답은 간단하다, 앞서 id에서 some으로 false면 pw체크까지 못오게 해놨기 때문에
        즉 pw체크하는 로직에서 id는 이미 일치한다는게 되는것이다. id는 -1이 나오는 경우가 없다고 봐야한다.
        그러면 이제 pw체크 로직을 봐야하는데, 이미 pw가 없으면 some에서 false -> if문에서 false인경우는
        걸러놨기때문에 
        
        한마디로 pw로직에 왔으면 id는 무조건 통과 따라서 id의 findindex가 -1이 되는경우는 없음. 
        pw가 -1이라는말은 일치하는게 없다는건데, 그러면 또 idindex !== pwindex 혹은 some이 false라는 조건이 성립하게되니 조건 불만족이 됨. */

        PWmessage.textContent = '비밀번호가 일치하지 않습니다!';
        falseOn(userPw, PWmessage);
    } else {
        location.href = './index.html';
    }
}

//비밀번호 보이기
function userPwShow() {
    if (!pwShowState) {
        pwShowState = true;
        userPw.setAttribute('type', 'text');
    } else {
        pwShowState = false;
        userPw.setAttribute('type', 'password');
    }
}
//border_red //스타일주는 용도
function falseOn(el01, el02) {
    el02.style.display = 'block';
    addClass(el01, 'false_on');
}

//타자 입력했을때 보더및 배경해제
function falseReset(el01, el02) {
    el02.style.display = 'none';
    removeClass(el01, 'false_on');
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