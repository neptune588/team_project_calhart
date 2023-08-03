import {
    detail_page_produdct_list
} from './data.js';

//change_list
const pdCodeNum = document.getElementById('code_number');
const quantityNum = document.getElementById('quantity_number');
const totalQuantity = document.querySelector('.total_quntaitly_view');
const totalPrice = document.getElementById('total_price');
const pdMoney = document.getElementById('product_money');
const quantityInput = document.getElementById('product_quantity_select');

/******************** view_thumnail ********************/
const viewContainer = document.getElementById('view_thumnail');
const viewThum = document.querySelectorAll('.thumnail_box');
const viewSmallThum = document.querySelectorAll('.img_box');

const detailItem = [...detail_page_produdct_list];

viewContainer.addEventListener('mousemove', (e) => {
    viewThum[1].style.transform = `translate(${e.offsetX * -2}px, ${e.offsetY * -2}px)`;
})
viewContainer.addEventListener('mouseout', () => {
    viewThum[1].style.transform = `translate(0px, 0px)`;
})

/******************** init_settings ********************/
txtChange(quantityNum, detailItem[0].limitQuantity);
txtChange(pdCodeNum, detailItem[0].productCode);
txtChange(totalPrice, `${detailItem[0].price.toLocaleString()} 원`);
txtChange(pdMoney, detailItem[0].price.toLocaleString());

viewSmallThum.forEach((imgBx, i) => {
    imgBx.addEventListener('click', () => {
        viewThum[0].children[0].src = detailItem[0].imgSrc01[i];
        viewThum[1].children[0].src = detailItem[0].imgSrc02[i];
    })
});
pdMoney.dataset.pdPrice = detailItem[0].price;
quantityNum.dataset.limitQuantity = detailItem[0].limitQuantity;

/******************** init_settings// qunatity_select ********************/
const quantityPlus = document.getElementById('quantity_plus');
const quantityMinus = document.getElementById('quantity_minus');
const priceNoticeMent = document.getElementById('select_notice_ment');

quantityPlus.addEventListener('click', () => {
    let nowValue = parseInt(quantityInput.value);

    if(nowValue < quantityNum.dataset.limitQuantity) {
        quantityInput.value = nowValue + 1;

        txtChange(totalPrice, `${(pdMoney.dataset.pdPrice * quantityInput.value).toLocaleString()} 원`);
        txtChange(totalQuantity, quantityInput.value);
    }  else {
        addClass(priceNoticeMent, 'block_on');
    }
});

quantityMinus.addEventListener('click', () => {
    let nowValue = parseInt(quantityInput.value);

    removeClass(priceNoticeMent, 'block_on');
    
    if(nowValue > 1) {
        quantityInput.value = nowValue - 1;

        txtChange(totalPrice, `${(pdMoney.dataset.pdPrice * quantityInput.value).toLocaleString()} 원`);
        txtChange(totalQuantity, quantityInput.value);
    }
});

qunatityInputEv();
function qunatityInputEv() {
    let prevValue = "";

    quantityInput.addEventListener('input', function () {
        const regex = /^\d+$/;
        let changeValue = parseInt(this.value);
        //숫자가 아닐시 
        if(!regex.test(this.value)) {
            this.value = this.value.replaceAll(/\D/g, '');
        }
    
        if(changeValue > quantityNum.dataset.limitQuantity) {
            this.value = prevValue;
        }

        if(parseInt(this.value) < 1) {
            this.value = 1;
        }
        
        txtChange(totalPrice, `${(pdMoney.dataset.pdPrice * quantityInput.value).toLocaleString()} 원`);
        txtChange(totalQuantity, quantityInput.value);

        prevValue = this.value;
    });

    quantityInput.addEventListener('blur', function () {
        if(this.value === null || this.value === undefined || this.value === "") {
            this.value = 1;
        }

        txtChange(totalPrice, `${(pdMoney.dataset.pdPrice * quantityInput.value).toLocaleString()} 원`);
        txtChange(totalQuantity, quantityInput.value);
    });
}

/******************** color_select + handleEv ********************/
const colorSelArea = document.getElementById('select_list');

colorBoxCreate(detailItem);

function colorBoxCreate(arr) {
    let list = ``;
    let receive = ``;

    arr.forEach((obj, i) => {
        list = `
            <li class="color_select_box">
                <a href="#!">
                    <img src="${obj.imgSrc01[0]}" alt="select_img${i}"/>
                </a>
            </li>        
        `

        receive += list;
    })

    colorSelArea.innerHTML = receive;

    handleSelect(arr);
}

function handleSelect(arr) {
    //color_select
    const colorSelBox = document.querySelectorAll('.color_select_box');
    colorSelBox.forEach((box, i) => {
        box.addEventListener('click', () => {
            viewThum[0].children[0].src = arr[i].imgSrc01[0];
            viewThum[1].children[0].src = arr[i].imgSrc02[0];

            viewSmallThum.forEach((imgBx, j) => imgBx.children[0].src = arr[i].imgSrc01[j]);

            //change_fnc
            thumChange(arr[i]);
            styleCodeChange(arr[i]);
            quantityChange(arr[i]);
            priceDataChange(arr[i]);
            limitDataChange(arr[i]);

            //reset_fnc
            quantityInput.value = 1;
            txtChange(totalPrice, `${(pdMoney.dataset.pdPrice * quantityInput.value).toLocaleString()} 원`);
            txtChange(totalQuantity, quantityInput.value);
            removeClass(priceNoticeMent, 'block_on');
        });
    })
}

function thumChange(obj) {
    //small_thum_select
    viewSmallThum.forEach((imgBx, i) => {
        imgBx.addEventListener('click', () => {
            viewThum[0].children[0].src = obj.imgSrc01[i];
            viewThum[1].children[0].src = obj.imgSrc02[i];
        })
    })
}

function styleCodeChange(obj) {
    txtChange(pdCodeNum, obj.productCode);
}

function quantityChange(obj) {
    txtChange(quantityNum, obj.limitQuantity);
}

function priceDataChange(obj) {
    pdMoney.dataset.pdPrice = obj.price;
}

function limitDataChange(obj) {
    quantityNum.dataset.limitQuantity = obj.limitQuantity;
}
/******************** size_select ********************/
const sizeList = document.querySelectorAll('.size_list > li');

sizeBtnClick();

function sizeBtnClick() {
    let clickIndex = null;
    sizeList.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            if (clickIndex !== i) {
                clickIndex = i;
                for (let j = 0; j < sizeList.length; j++) {
                    removeClass(sizeList[j], 'bgc_amber');
                }
                addClass(btn, 'bgc_amber');
            } else if (clickIndex === i) {
                clickIndex = null;
                removeClass(btn, 'bgc_amber');
            }
        })
    })
}

/******************** size_check ********************/
const sizeModalOnBtn = document.getElementById('size_chk_btn');
const sizeModalCloseBtn = document.getElementById('modal_close_btn');
const sizeModal = document.querySelector('.size_chk_modal_ex');

const heightInput = document.getElementById('height_input');
const weightInput = document.getElementById('weight_input');
const numberInput = document.querySelectorAll('.only_number');
const noticeMent = document.querySelector('.notice_ment');

const sizeCalcBtn = document.getElementById('size_search_btn');
const sizeShow = document.querySelector('.show_txt');

modalEv();

function modalEv() {
    let modalState = false;
    sizeModalOnBtn.addEventListener('click', () => {
        if (!modalState) {
            modalState = true;
            addClass(sizeModal, 'block_on');

            setTimeout(() => {
                heightInput.focus()
            }, 10)
        }
    });
    sizeModalCloseBtn.addEventListener('click', () => {
        if (modalState) {
            modalState = false;

            removeClass(sizeModal, 'block_on');

            numberInput.forEach(input => valueChange(input, ""));
            removeClass(noticeMent, `block_on`);
        }
    });
}

modalInputChk();

function modalInputChk() {
    let conditionRegex = /^\d+$/;
    const maxLength = 3;
    numberInput.forEach(input => {
        input.addEventListener('input', () => {
            if (!conditionRegex.test(input.value)) {
                input.value = "";
                addClass(noticeMent, `block_on`);
                txtChange(noticeMent.children[0], "숫자만 입력 가능합니다.");

            } else {
                removeClass(noticeMent, `block_on`);
            }

            if (input.value.length > maxLength) {
                input.value = input.value.substring(0, maxLength);
            }
        })
    })
}

sizeCalcBtn.addEventListener('click', () => {
    let cm = heightInput.value;
    let kg = weightInput.value;

    let condition = cm && kg;
    if (condition !== null && condition !== "" && condition !== undefined) {
        sizeCalc(cm, kg);
    } else {
        addClass(noticeMent, `block_on`);
        txtChange(noticeMent.children[0], "유효한 입력값이 아닙니다.");
    }
});

function sizeCalc(height, weight) {
    let calc = weight / (height * 2) * 100;
    //22.8888이라고 가정하면 x100 -> 2288.88 -> 버림 2288 -> /100 -> 22.88;
    let bmi = Math.floor(calc * 100) / 100;

    if (bmi > 25 && bmi <= 35) {
        txtChange(sizeShow, "XL");
    } else if (bmi > 23 && bmi <= 25) {
        txtChange(sizeShow, "L");
    } else if (bmi > 18.5 && bmi <= 23) {
        txtChange(sizeShow, "M");
    } else if (bmi > 17.5 && bmi <= 18.5) {
        txtChange(sizeShow, "S");
    } else if (bmi > 14 && bmi <= 17.5) {
        txtChange(sizeShow, "XS");
    } else {
        txtChange(sizeShow, "없음");
    }
}


/******************** reveiw ********************/
const rviewCrtBtn = document.getElementById('review_create_btn');
const rviewArea = document.getElementById('review_create_area');
const rviewLengthView = document.getElementById('review_now_length');
const rviewTxtBox = document.getElementById('review_text_box');
const rviewCrtComplete = document.getElementById('create_complete');
const rviewListArea = document.getElementById('review_list');
const rviewPageArea = document.getElementById('review_page_list');

const rviewID = document.getElementById('review_user_id');

const rviewCounting = document.querySelector('.review_couting');

const rviewIDMinLength = rviewID.getAttribute('minlength');
const rviewIDMaxLength = rviewID.getAttribute('maxlength');

const rviewRatingLi = document.querySelectorAll('#review_rating_star > li');
const rviewRatingStar = document.querySelectorAll('#review_rating_star > li > i');

const rviewResetEl = document.querySelectorAll('.review_reset');

const rviewNoticeMent = document.getElementById('review_notice_ment');

const starSave = {
    nowRating: null,
    clickState: false
}
const starMaxCount = 5;
const brLength = 50;

const reviewInfo = {
    type: "review",
    liData: [],
    liWrapper: rviewListArea,
    liMaxView: 6,
    liTotalLength: rviewCounting,
    pageIdx: 0,
    pageWrapper: rviewPageArea,
}

//object create 참조: https://leehwarang.github.io/docs/tech/constructor.html
function RviewObj(time, id, ratingIdx = 0, reviewText) {
    this.time = time;
    this.privacy = {
        id: id,
    };
    this.ratingIdx = ratingIdx;
    this.reviewText = [reviewText];
}

//review_chk_btn
rviewClick();

function rviewClick() {
    let rviewChkState = false;
    rviewCrtBtn.addEventListener('click', () => {
        if (!rviewChkState) {
            rviewChkState = true;
            addClass(rviewArea, 'block_on');

            setTimeout(() => {
                rviewID.focus();
            }, 10);

        } else {
            rviewChkState = false;
            removeClass(rviewArea, 'block_on');

            rviewReset();
            txtChange(rviewLengthView, `0 자`);
        }
    });
}

//review_id_chk
rviewID.addEventListener('input', () => {
    lengthChk(rviewID, rviewNoticeMent);
});

//review_input_event
rviewTxtBox.addEventListener('input', () => {
    txtChange(rviewLengthView, `${rviewTxtBox.value.length} 자`);

    if (rviewNoticeMent.textContent.length > 0) {
        txtChange(rviewNoticeMent, "");
    }
});

//review_rating_click_event
rviewRatingLi.forEach((li, i) => li.addEventListener('click', () => {
    ratingClick(i)
}));

function ratingClick(parentIdx) {
    if (parentIdx !== starSave.nowRating) {
        starSave.nowRating = parentIdx;
        starSave.clickState = true;

        for (let i = 0; i < starMaxCount; i++) {
            if (i <= starSave.nowRating) {
                changeClass(rviewRatingStar[i], ["far", "fas"]);
            } else {
                changeClass(rviewRatingStar[i], ["fas", "far"]);
            }
        }
    } else {
        starReset();
    }
}
//review_select_star_reset
function starReset() {
    starSave.nowRating = null;
    starSave.clickState = false;
    for (let i = 0; i < starMaxCount; i++) {
        changeClass(rviewRatingStar[i], ["fas", "far"]);
    }
}

//review_create_complete
rviewComplete();

function rviewComplete() {
    rviewCrtComplete.addEventListener('click', () => {
        let nowTxt = rviewTxtBox.value;

        let idCondition = rviewID.value.length >= rviewIDMinLength && rviewID.value.length <= rviewIDMaxLength;

        if (nowTxt !== null && nowTxt !== "" && nowTxt !== undefined && idCondition && starSave.clickState) {
            const property = [calcDate(), rviewID.value, starSave.nowRating, nowTxt];
            const resetEl = [rviewResetEl, rviewNoticeMent, rviewLengthView, rviewID];

            reviewInfo.liData.push(new RviewObj(...property));

            //리셋
            textReset(...resetEl);
            starReset();

            listMaker(reviewInfo, arrSlice(reviewInfo.pageIdx, reviewInfo));
            pageCreate(reviewInfo);
            
            reviewInfo.pageIdx = Math.floor(reviewInfo.liData.length / reviewInfo.liMaxView);
        } else if (!idCondition) {
            txtChange(rviewNoticeMent, `ID를 양식에 맞게 작성 해주세요.`);
        } else if (!starSave.clickState) {
            txtChange(rviewNoticeMent, `리뷰 별점을 작성 해주세요.`);
        } else {
            txtChange(rviewNoticeMent, `내용을 입력 해주세요.`);
        }
    });
}

//view_star_create(표기용)
function starCreate(num) {
    let list = ``;
    let receive = ``;

    for (let i = 0; i < starMaxCount; i++) {
        if (i <= num) {
            list = ` <li><i class="fas fa-star"></i></li>`;
        } else {
            list = ` <li><i class="far fa-star"></i></li>`;
        }
        receive += list;
    }

    return receive;
}
/******************** qna ********************/
const qnaCraateBtn  = document.getElementById('question_btn');
const qnaArea = document.getElementById('create_question');
const qnaTxtBox = document.getElementById('create_question_ment');
const qnaCrtComplete = document.getElementById('qna_create');
const qnaListArea = document.getElementById('qna_list');
const qnaPageArea = document.getElementById('qna_page_list');

const qnaID = document.getElementById('qna_user_id');

const qnaCounting = document.querySelector('.qna_couting');

const qnaIDMinLength = qnaID.getAttribute('minlength');
const qnaIDMaxLength = qnaID.getAttribute('maxlength');

const qnaLengthView = document.getElementById('qna_now_length');

const qnaResetEl = document.querySelectorAll('.qna_reset');

const qnaNoticeMent = document.getElementById('qna_notice_ment');

const qnaInfo = {
    type: "qna",
    liData: [],
    liWrapper: qnaListArea,
    liMaxView: 6,
    liTotalLength: qnaCounting,
    pageIdx: 0,
    pageWrapper: qnaPageArea,
    managerName: "[CARHARTT] 관리자"
}

//object create 참조: https://leehwarang.github.io/docs/tech/constructor.html
function QnaObj(time, id, questionTxt = "") {
    this.time = time;
    this.privacy = {
        id: id,
    };
    this.answerInfo = {
        answerClick: false, 
        answerState: false,
        answerMentClick: false,
        answerTxt: [""],
    };
    this.questionTxt = [questionTxt];
}
//review_chk_btn
qnaClick();

function qnaClick() {
    let qnaChkState = false;
    qnaCraateBtn.addEventListener('click', () => {
        if (!qnaChkState) {
            qnaChkState = true;
            addClass(qnaArea, 'block_on');

            setTimeout(() => {
                qnaID.focus();
            }, 10);

        } else {
            qnaChkState = false;
            removeClass(qnaArea, 'block_on');

            txtChange(qnaLengthView, `0 자`);
        }
    });
}

//qna_id_chk
qnaID.addEventListener('input', () => {
    lengthChk(qnaID, qnaNoticeMent);
});

//review_input_event
qnaTxtBox.addEventListener('input', () => {
    txtChange(qnaLengthView, `${qnaTxtBox.value.length} 자`);

    if (qnaNoticeMent.textContent.length > 0) {
        txtChange(qnaNoticeMent, "");
    }
});

//qna_create_complete
qnaComplete();

function qnaComplete() {
    qnaCrtComplete.addEventListener('click', () => {
        let nowTxt = qnaTxtBox.value;

        let idCondition = qnaID.value.length >= qnaIDMinLength && qnaID.value.length <= qnaIDMaxLength;

        if (nowTxt !== null && nowTxt !== "" && nowTxt !== undefined && idCondition) {
            const property = [calcDate(), qnaID.value, nowTxt];
            const resetEl = [qnaResetEl, qnaNoticeMent, qnaLengthView, qnaID]; 

            qnaInfo.liData.push(new QnaObj(...property));

            //리셋
            textReset(...resetEl);
            
            listMaker(qnaInfo, arrSlice(qnaInfo.pageIdx, qnaInfo));
            pageCreate(qnaInfo);
            
            qnaInfo.pageIdx = Math.floor(qnaInfo.liData.length / qnaInfo.liMaxView);
        } else if (!idCondition) {
            txtChange(qnaNoticeMent, `ID를 양식에 맞게 작성 해주세요.`);
        } else {
            txtChange(qnaNoticeMent, `내용을 입력 해주세요.`);
        }
    });
}

function handleAnswer(obj) {
    //관리자 답변 작성 Area ON/OFF BTN
    const answerChk = obj.liWrapper.querySelectorAll('.comment_click_on');
    //관리자 답변 작성 Area
    const answerInputArea = obj.liWrapper.querySelectorAll('.ment_input');
    //관리자 답변 작성 Area안 텍스트 박스
    const answerTxtArea = obj.liWrapper.querySelectorAll('.answer_text_box');
    //관리자 답변 작성 완료 BTN
    const answerBtn = obj.liWrapper.querySelectorAll('.answer_create');
    //관리자 멘트 AREA 보기 ON/OFF BTN
    const answerMentOnBtn = obj.liWrapper.querySelectorAll('.manager_ment_on');

    //관리자 멘트 AREA
    const answerMentArea = obj.liWrapper.querySelectorAll('.ment_area');
    //관리자 멘트 TEXT_VIEW
    const answerMentTxt = obj.liWrapper.querySelectorAll('.anmswer_ment');
    //관리자가 답변을 작성 하였는지 안하였는지 표시
    const answerStateView = obj.liWrapper.querySelectorAll('.answer_state');

    //답변 작성 창 ON/OFF
    answerChk.forEach((chkBtn, i) => {
        chkBtn.addEventListener('click', () => {
            if(!obj.liData[i].answerInfo.answerClick && !obj.liData[i].answerInfo.answerState) {
                obj.liData[i].answerInfo.answerClick = true;
                addClass(answerInputArea[i], 'block_on');
            } else {
                obj.liData[i].answerInfo.answerClick = false;
                removeClass(answerInputArea[i], 'block_on');
            }
        });
    })

    //답변 작성 완료
    answerBtn.forEach((comBtn, i) => {
        comBtn.addEventListener('click', (e) => {
            e.preventDefault();

            if(answerTxtArea[i].value !== undefined && answerTxtArea[i].value !== "" && answerTxtArea[i].value !== "") {
                //답변 달리면 작성창 안뜨게
                obj.liData[i].answerInfo.answerState = true;
                obj.liData[i].answerInfo.answerTxt[0] = answerTxtArea[i].value;
                txtChange(answerMentTxt[i], answerTxtArea[i].value);
                txtChange(answerStateView[i], "답변완료");
                
                //멘트 열람 버튼
                addClass(answerMentOnBtn[i], 'block_on');
                //답변 텍스트박스 제거
                removeClass(answerInputArea[i], 'block_on');
            } else {
                alert("관리자 답변을 작성 해주세요!");
            }
        }) 
    })

    //답변 보기 ON/OFF
    answerMentOnBtn.forEach((openBtn, i) => {
        openBtn.addEventListener('click', () => {
            if(!obj.liData[i].answerInfo.answerMentClick) {
                obj.liData[i].answerInfo.answerMentClick = true;
                addClass(answerMentArea[i], 'flex_on');
            } else {
                obj.liData[i].answerInfo.answerMentClick = false;
                removeClass(answerMentArea[i], 'flex_on');
            }
        });
    })
}

/******************** common ********************/
//list_create
function listMaker(obj, arr) {
    let receive = ``;
    
    if(obj.type === "review") {
        if(arr.length === 0) {
            obj.liWrapper.innerHTML = `
                <div class="not_ment">
                    현재 작성된 리뷰가 없습니다.
                </div>
            `
        } else {
            for (let i = 0; i < arr.length; i++) {
                let list = `
                        <li class="review">
                            <p class="review_ment">
                                ${arr[i].reviewText[0].length > brLength ? lineBrake(arr[i].reviewText[0]) : arr[i].reviewText[0]}
                                <span class="delete">
                                    <i class="fas fa-window-close"></i>
                                </span>
                            </p>
                            <div class="right_info">
                                <ul class="rating_star">${starCreate(arr[i].ratingIdx)}</ul>
                                <span class="review_date date">${arr[i].time}</span>
                                <span class="review_id">${idHide(arr[i].privacy.id)}</span>
                            </div>
                        </li>
                        `
                receive += list;
            }
            obj.liWrapper.innerHTML = receive;
            handleDelete(obj);
        }
        txtChange(obj.liTotalLength, `${obj.liData.length}`);
    }

    if(obj.type === "qna") {
        if(arr.length === 0) {
            obj.liWrapper.innerHTML = `
                <div class="qna_not_ment">
                    현재 작성된 QNA가 없습니다.
                </div>
            `
        } else {
            for (let i = 0; i < arr.length; i++) {
                let list = `
                        <li class="question_list">
                            <div class="question_box">
                                <div class="left_box">
                                    <span class="answer_state">${arr[i].answerInfo.answerState ? "답변완료":"미처리"}</span>
                                    <p class="qna_ment">
                                        ${arr[i].questionTxt[0].length > brLength ? lineBrake(arr[i].questionTxt[0]) : arr[i].questionTxt[0]}
                                        <span class="qna_list_delete delete">
                                            <i class="fas fa-window-close"></i>
                                        </span>
                                        <span class="${arr[i].answerInfo.answerState ? "manager_ment_on block_on" : "manager_ment_on"}">
                                            <i class="fas fa-level-down-alt"></i>
                                        </span>
                                    </p>
                                </div>
                                <div class="right_box">
                                    <span class="qna_date date">${arr[i].time}</span>
                                    <span class="qna_id list_view_id">${idHide(arr[i].privacy.id)}</span>
                                    <span class="comment_click_on">
                                        <i class="fas fa-user-tag"></i>
                                    </span>
                                </div>
                            </div>
                            <div class="answer_box">
                                <div class="ment_input">
                                    <h2>${obj.managerName}</h2>
                                    <textarea class="answer_text_box" cols="10" rows="4" maxlength="200"></textarea>
                                    <button class="answer_create blue_btn">
                                        답변하기
                                    </button>
                                </div>
                                <div class="${arr[i].answerInfo.answerMentClick ? "ment_area flex_on" : "ment_area"}">
                                    <span class="answer">답변</span>
                                    <div class="guide_ment_area">
                                        <p class="spot">${obj.managerName}</p>
                                        <p class="anmswer_ment">
                                            ${arr[i].answerInfo.answerTxt}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        `
                receive += list;
            }
            obj.liWrapper.innerHTML = receive;

            handleDelete(obj);
            handleAnswer(obj);
        }
        txtChange(obj.liTotalLength, `${obj.liData.length}`);
    }
}

//text_list_reset;
function textReset(valElements, resetTxt01, resetTxt02, focusEl) {
    valElements.forEach(valEl => valueChange(valEl, ""));
    txtChange(resetTxt01, "");
    txtChange(resetTxt02, `0 자`);
    focusEl.focus();
}

function lengthChk (myInput, noticeBox) {
    let maxLength = parseInt(myInput.getAttribute('maxlength'), 10);
    if (myInput.value.length > maxLength) {
        myInput.value = myInput.value.substring(0, maxLength);
    }
    if (noticeBox.textContent.length > 0) {
        txtChange(noticeBox, "");
    }
}
//list_slice
function arrSlice(index, obj) {
    let first = index * obj.liMaxView;
    let last = first + obj.liMaxView;
    
    const slice = obj.liData.slice(first, last);
    return slice;
}
//page_create
function pageCreate(obj) {
    let list = ``;
    for (let i = 0; i <= obj.pageIdx; i++) {
        list += `<li class="${i === obj.pageIdx ? "page_on" : ""}">${i + 1}</li>`
    }
    obj.pageWrapper.innerHTML = list;

    if(obj.liData.length === 0) {
        addClass(obj.pageWrapper, 'none_on');
    } else {
        removeClass(obj.pageWrapper, 'none_on');
    }

    pageControl(obj);
}
//page_click_ev
function pageControl(obj) {
    const page = obj.pageWrapper.querySelectorAll('li');
    page.forEach((li, i) => {
        li.addEventListener('click', () => {
            for(let j = 0; j < page.length; j++) {
                removeClass(page[j], 'page_on');
            }
            addClass(li, 'page_on');
            listMaker(obj, arrSlice(i, obj));
        })
    })
}
function handleDelete (obj) {
    const deleteBtn = obj.liWrapper.querySelectorAll('.delete');

    deleteBtn.forEach((btn, idx) => {
        btn.addEventListener('click', () => {
            obj.liData.splice(idx, 1); 
            obj.pageIdx = Math.floor((obj.liData.length - 1) / obj.liMaxView);
            if(obj.pageIdx < 0 ) {
                obj.pageIdx = 0;
            }

            listMaker(obj, arrSlice(obj.pageIdx, obj));
            pageCreate(obj);
        });
    })  
}
function lineBrake(str) {
    //라인 나누기, 
    //1. 나누고자하는 갯수 구하기.
    //2. str.length가 나누고자하는 갯수 넘으면, 나누기로 몫만큼 br주면 될듯
    let result = ``;
    let repeat = Math.floor(str.length / brLength);

    for (let i = 0; i < repeat; i++) {
        result += str.substring(i * brLength, (i + 1) * brLength) + `<br />`;
    }
    result += str.substring(repeat * brLength, repeat.length); //남은 찌꺼기부분 더해주기
    
    return result;
}

//date_calc
function calcDate() {
    let newDate = new Date();
    let nowYear = newDate.getFullYear();
    let nowMonth = newDate.getMonth() + 1;
    let nowDay = newDate.getDate();
    let nowHours = newDate.getHours();
    let nowMinutes = newDate.getMinutes();
    let nowSeconds = newDate.getSeconds();


    function numChange(num) {
        return num < 10 ? `0${num}` : num;
    }

    let result = `${nowYear}-${numChange(nowMonth)}-${numChange(nowDay)}/${numChange(nowHours)}:${numChange(nowMinutes)}:${numChange(nowSeconds)}`;

    return result;
}
//id_hide (ex: aa****)
function idHide(txt) {
    let cut = txt.substring(0, 2);
    let hide = '*'.repeat(txt.length - cut.length);

    return cut + hide;
}

function valueChange(el, value = "") {
    el.value = value;
}

function txtChange(el, txt = "") {
    el.textContent = txt;
}

function addClass(el, ClassName) {
    el.classList.add(ClassName);
}

function removeClass(el, ClassName) {
    el.classList.remove(ClassName);
}

function changeClass(el, arr = []) {
    el.classList.replace(...arr);
}