import {detail_page_produdct_list} from './data.js';

//change_list
const pdCodeNum = document.getElementById('code_number');
const quantityNum = document.getElementById('quantity_number');
const totalPrice = document.getElementById('total_price');
const pdMoney = document.getElementById('product_money');

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

/******************** color_select + handleEv ********************/
const colorSelArea = document.getElementById('select_list');

colorBoxCreate(detailItem);
function colorBoxCreate(arr) {
    let list = ``;
    let receive = ``;

    arr.forEach((obj, i)=> {
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

            thumChange(arr, i);
            styleCodeChange(arr, i);
            quantityChange(arr, i);
        });
    })
}

function thumChange(arr, parentIdx) {
    //small_thum_select
    viewSmallThum.forEach((imgBx, i) => {
        imgBx.addEventListener('click', () => {
            viewThum[0].children[0].src = arr[parentIdx].imgSrc01[i];
            viewThum[1].children[0].src = arr[parentIdx].imgSrc02[i];
        })
    })
}

function styleCodeChange(arr, parentIdx) {
    pdCodeNum.textContent = arr[parentIdx].productCode;
}

function quantityChange(arr, parentIdx) {
    quantityNum.textContent = arr[parentIdx].limitQuantity;
}

/******************** size_select ********************/
const sizeList = document.querySelectorAll('.size_list > li');

sizeBtnClick();
function sizeBtnClick() {
    let clickIndex = null;
    sizeList.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            if(clickIndex !== i) {
                clickIndex = i;
                for(let j = 0; j < sizeList.length; j++) {
                    removeClass(sizeList[j], 'bgc_amber');
                }
                addClass(btn, 'bgc_amber');
            } else if(clickIndex === i) {
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
        if(!modalState) {
            modalState = true;
            addClass(sizeModal, 'block_on');
    
            setTimeout(() => {heightInput.focus()}, 10)
        }
    });
    sizeModalCloseBtn.addEventListener('click', () => {
        if(modalState) {
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
            if(!conditionRegex.test(input.value)) {
                input.value = "";
                addClass(noticeMent, `block_on`);
                txtChange(noticeMent.children[0], "숫자만 입력 가능합니다.");
                
            } else {
                removeClass(noticeMent, `block_on`);
            }

            if(input.value.length > maxLength) {
                input.value = input.value.substring(0, maxLength);
            }
        })
    })
}

sizeCalcBtn.addEventListener('click', () => {
    let cm = heightInput.value;
    let kg = weightInput.value;

    let condition = cm && kg;
    if(condition !== null && condition !== "" && condition !== undefined) {
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

    if(bmi > 25 && bmi <= 35) {
        txtChange(sizeShow, "XL");
    } else if(bmi > 23 && bmi <= 25) {
        txtChange(sizeShow, "L");
    } else if(bmi > 18.5 && bmi <= 23) {
        txtChange(sizeShow, "M");
    } else if(bmi > 17.5 && bmi <= 18.5) {
        txtChange(sizeShow, "S");
    } else if(bmi > 14 && bmi <= 17.5) {
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

const rviewID = document.getElementById('review_user_id');
const rviewPW = document.getElementById('review_user_pw');
const rviewIDNPW = document.querySelectorAll('.review_id_pw');

const IDMinLength = rviewID.getAttribute('minlength');
const IDMaxLength = rviewID.getAttribute('maxlength');
const PWMinLength = rviewPW.getAttribute('minlength');
const PWMaxLength = rviewPW.getAttribute('maxlength');

const rviewRatingLi = document.querySelectorAll('#review_rating_star > li');
const rviewRatingStar = document.querySelectorAll('#review_rating_star > li > i');

console.log(rviewRatingLi, rviewRatingStar);
const rviewNoticeMent = document.getElementById('review_notice_ment');

const reviewData = [
    {
        time: ["2023-01-01/05:28:48"],
        private: {
            id: "ju1548",
            pw: "1345",
        },
        rating: 5,
        reviewText: ["봄에 입기 딱 좋아요! 핏도 너무 오버하지않고 딱 떨어져서 좋아요."],
    }
];

const starSave = {nowRating: null, clickState: false}
const starMaxCount = 5;

//object create 참조: https://leehwarang.github.io/docs/tech/constructor.html
function RviewObj(time, id, pw, ratingIdx = 0, reviewText) {
    this.time = time;
    this.privacy = {id: id, pw: pw};
    this.ratingIdx = ratingIdx;
    this.reviewText = [reviewText];
}

//review_chk_btn
rviewClick();
function rviewClick() {
    let rviewChkState = false;
    rviewCrtBtn.addEventListener('click', () => {
        if(!rviewChkState) {
            rviewChkState = true;
            addClass(rviewArea, 'block_on');

            setTimeout(()=>{rviewTxtBox.focus()},10);

        } else {
            rviewChkState = false;
            removeClass(rviewArea, 'block_on');

            valueChange(rviewTxtBox, ``);
            txtChange(rviewLengthView, `0 자`);
        }
    });
}

//review_id_pw_chk
rviewIDNPW.forEach(inputBar => inputBar.addEventListener('input', () => {
    idNPwChk(inputBar);

    if(rviewNoticeMent.textContent.length > 0) {
        txtChange(rviewNoticeMent, "");
    }
}));
function idNPwChk(myInput) {
    let maxLength = parseInt(myInput.getAttribute('maxlength'), 10);
    if(myInput.value.length > maxLength) {
        myInput.value = myInput.value.substring(0, maxLength);
    }
}

//review_input_event
rviewTxtBox.addEventListener('input', () => {
    txtChange(rviewLengthView, `${rviewTxtBox.value.length} 자`);

    if(rviewNoticeMent.textContent.length > 0) {
        txtChange(rviewNoticeMent, "");
    }
});

//review_rating_click_event
rviewRatingLi.forEach((li, i) => li.addEventListener('click', () => {ratingClick(i)}));
function ratingClick (parentIdx) {
    if(parentIdx !== starSave.nowRating) {
        starSave.nowRating = parentIdx;
        starSave.clickState = true;

        for(let i = 0; i < starMaxCount; i++) {
            if(i <= starSave.nowRating) {
                changeClass(rviewRatingStar[i], ["far","fas"]);
            } else {
                changeClass(rviewRatingStar[i], ["fas","far"]);
            }
        }
    } else {
        starSave.nowRating = null;
        starSave.clickState = false;

        for(let i = 0; i < starMaxCount; i++) {
            changeClass(rviewRatingStar[i], ["fas","far"]);
        }
    }
}

//review_create_complete
rviewComplete();
function rviewComplete() {
    rviewCrtComplete.addEventListener('click', () => {
        let nowTxt = rviewTxtBox.value;

        let idCondition = rviewID.value.length >= IDMinLength && rviewID.value.length <= IDMaxLength; 
        let pwCondition = rviewPW.value.length >= PWMinLength && rviewPW.value.length <= PWMaxLength; 

        if(nowTxt !== null && nowTxt !== "" && nowTxt !== undefined && idCondition && pwCondition && starSave.clickState) {
            let property = [calcDate(), rviewID.value, rviewPW.value, 0, nowTxt];

            reviewData.push(new RviewObj(...property));
            
            rviewID.focus();
            txtChange(rviewNoticeMent, "");

        } else if(!idCondition) {
            txtChange(rviewNoticeMent, `ID를 양식에 맞게 작성 해주세요.`);
        } else if(!pwCondition) {
            txtChange(rviewNoticeMent, `PW를 양식에 맞게 작성 해주세요.`);
        } else if(!starSave.clickState) {
            txtChange(rviewNoticeMent, `리뷰 별점을 작성 해주세요.`);
        } else {
            txtChange(rviewNoticeMent, `내용을 입력 해주세요.`);
        }
    });
}

function calcDate() {
    let newDate = new Date();
    let nowYear = newDate.getFullYear();
    let nowMonth = newDate.getMonth() + 1;
    let nowDay = newDate.getDate();
    let nowHours = newDate.getHours();
    let nowMinutes = newDate.getMinutes();
    let nowSeconds = newDate.getSeconds();

    const dateArr = [nowDay, nowMonth, nowHours, nowMinutes, nowSeconds];

    for(let i = 0; i < dateArr.length; i++) {
        if(dateArr[i] < 10) {
            dateArr[i] = `0${dateArr[i]}`;
        }
    }

    let result = `${nowYear}-${dateArr[0]}-${dateArr[1]}/${dateArr[2]}:${dateArr[3]}:${dateArr[4]}`;

    return result;
}

function valueChange (el, value = "") {
    el.value = value;
}

function txtChange (el, txt = "") {
    el.textContent = txt;
}

function setAttributeMuliti(el, attrArr) {
    for(let [first, last] of attrArr) {
        el.setAttribute(first, last);
    }
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