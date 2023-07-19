import {
    bestProductList,
    newProductList,
    lookBookProudctList,
    mdsProductList,
} from './data.js';

/*************** visual_main ******************/
//visual_main_ul
const vmList = document.getElementById('visual_main_ul');

const visualSrc = [
    {
        src: ["./images/visual_main01.jpg"],
        class: "visual01"
    },
    {
        src: ["./images/visual_main02.jpg"],
        class: "visual02"
    },
    {
        src: ["./images/visual_main03.jpg"],
        class: "visual03"
    },
    {
        src: ["./images/visual_main04.jpg"],
        class: "visual04"
    }
]

vmMaker();
function vmMaker() {
    let list = ``;
    let receive = ``;

    visualSrc.forEach((obj, i) => {
        list = `
            <li class="visual_main_li ${obj.class}">
                <a href="./sub_product_list.html">
                    <img src="${obj.src}" alt="vm_img_${i}"/>
                </a>
            </li>
        `
        
        receive += list;
    })

    vmList.innerHTML = receive;

    const vmListChild = document.querySelectorAll('.visual_main_li'); 
    
    vmList.appendChild(cloneCreate(vmListChild[0]));
    //vmListChild[0]가 고정되어있으므로 li가 순차적으로 고정돤0번앞에 추가됨.
    vmListChild.forEach(li => vmList.insertBefore(cloneCreate(li), vmListChild[0]));
}

/*************** visual_main_next_prev ******************/
const visualPrevBtn = document.getElementById('visual_prev_btn');
const visualNextBtn = document.getElementById('visual_next_btn');

//li 마진값 추출
const vmLiMargin = parseInt(window.getComputedStyle(vmList.children[0]).getPropertyValue('margin-bottom'), 10);
//li 마진값 + offsetHeight로 이동값 계산
const vmMoveValue = moveValueCalc(vmList.children[0]) + vmLiMargin;
//li 이동시간 추출
const vmMoveDelay = parseFloat(window.getComputedStyle(document.querySelector('.visual_trans_active')).getPropertyValue('transition-duration')) * 1000;
//li 이동시간 second(초) 기준으로 재 계산

const vmSlider = {
    moveEl: vmList,
    ctrlClass: 'visual_trans_active',
    moveCount: 0,
    calcCount: 1,
    clearCount: 0,
    moveArrow: "left",
    moveValue: vmMoveValue,
    moveTime: vmMoveDelay,
    countMax: (vmList.children.length - 1) / 2,
    immunCount: (vmList.children.length - 1) / 2,
    autoArrow: "left",
    prevState: false,
    nextState: false,
}

visualPrevBtn.addEventListener('click', () => {
    let time; 
    clearTimeout(time);

    time = setTimeout(() => {
        vmSlider.autoArrow = "left",
        prevSlide(vmSlider);
    }, 50)
});
visualNextBtn.addEventListener('click', () => {
    let time; 
    clearTimeout(time);

    time = setTimeout(() => {
        vmSlider.autoArrow = "right",
        nextSlide(vmSlider);
    }, 50);
});

/*************** visual_main_autoPlay ******************/
const visualPlay = document.getElementById('play_btn');
const visualStop = document.getElementById('stop_btn');

let vmAuto;
visualPlay.addEventListener('click', () => {
    vmAuto = setInterval(() => {
        if(vmSlider.autoArrow === "left") {
            prevSlide(vmSlider);
        } else if(vmSlider.autoArrow === "right") {
            nextSlide(vmSlider);
        }
    }, vmSlider.moveTime);
})
visualStop.addEventListener('click', () => {
    if(vmAuto) {
        clearInterval(vmAuto);
    }
})

/*************** best_n_new_create ******************/

//length를 기준으로 계산해야할게 많기 떄문에
//list생산 함수로 innerhtml로 박아넣고, 그 안에서 클론 생성까지 이루어지게 코드를 짰기 떄문에
//클론이 되어있지 않은 lenght를 받아올 필요가 있으므로, 미리 초기화해두고 함수안에서 받아오고,
//그 값을 기준으로 transform 값 밑 maxcount를 구하자.
let innerLiLength = 0;

const bestList = document.getElementById('best_product_list');
const bestPdMaker = {
    parentEl: bestList,
    childClass: "best_product_list",
    data: bestProductList,
    alt: "best_list_img"
}

listMaker(bestPdMaker);

const newList = document.getElementById('new_product_list');
const newPdMaker = {
    parentEl: newList,
    childClass: "new_product_list",
    data: newProductList,
    alt: "new_list_img"
}

listMaker(newPdMaker);

function listMaker(obj) {
    let list = ``;
    let receive = ``;

    obj.data.forEach((innerObj, index) => {
        list = `
            <li class="${obj.childClass}">
                <a href="#!">
                    <img src="${innerObj.src}" alt="${obj.alt + index}"/>
                    <span>${innerObj.modelName}</span>
                    <span>${innerObj.name}</span>
                </a>
            </li>
        `

        receive += list;
    });

    obj.parentEl.innerHTML = receive;

    //children으로 하면 오류가 생겨서, 클래스주고 쿼리셀렉터로 특정했다.
    const innerLi = document.querySelectorAll(`.${obj.childClass}`);
    innerLiLength = innerLi.length;
    
    innerLi.forEach(li => obj.parentEl.insertBefore(cloneCreate(li), innerLi[0]));
    for(let i = 0; i < innerLiLength / 2; i++) {
        obj.parentEl.appendChild(cloneCreate(innerLi[i]));
    }
}

/*************** best_n_new_default_settings ******************/
const pdListWidth = parseInt(window.getComputedStyle(bestList.children[0]).getPropertyValue('width'), 10);
const pdListMargin = parseInt(window.getComputedStyle(bestList.children[0]).getPropertyValue('margin-right'), 10);
const pdListMoveValue = moveValueCalc(bestList.children[0]) + pdListMargin;
const pdListMoveDelay = parseFloat(window.getComputedStyle(document.querySelector('.move_active')).getPropertyValue('transition-duration')) * 1000;

const productList = document.querySelectorAll('.product_list');
productList.forEach(ul => ul.style.transform = `translateX(-${innerLiLength * (pdListWidth + pdListMargin)}px)`);

//console.log(pdListMargin, pdListWidth, pdListMoveValue, pdListMoveDelay);

const bestPdSlider = {
    moveEl: bestList,
    ctrlClass: 'move_active',
    moveCount: 0,
    calcCount: 1,
    clearCount: 0,
    moveArrow: "left",
    moveValue: pdListMoveValue,
    moveTime: pdListMoveDelay,
    countMax: innerLiLength,
    immunCount: innerLiLength,
    prevState: false,
    nextState: false,
}

const newPdSlider = {
    moveEl: newList,
    ctrlClass: 'move_active',
    moveCount: 0,
    calcCount: 1,
    clearCount: 0,
    moveArrow: "left",
    moveValue: pdListMoveValue,
    moveTime: pdListMoveDelay,
    countMax: innerLiLength,
    immunCount: innerLiLength,
    prevState: false,
    nextState: false,
}

/*************** best_n_new_slider ******************/
const bestPrevBtn = document.getElementById('prev_btn01');
const bestNextBtn = document.getElementById('next_btn01');

const newPrevBtn = document.getElementById('prev_btn02');
const newNextBtn = document.getElementById('next_btn02');

bestPrevBtn.addEventListener('click', () => {prevSlide(bestPdSlider)});
bestNextBtn.addEventListener('click', () => {nextSlide(bestPdSlider)});

newPrevBtn.addEventListener('click', () => {prevSlide(newPdSlider)});
newNextBtn.addEventListener('click', () => {nextSlide(newPdSlider)});

function prevSlide (obj) {
    if(!obj.prevState) {
        obj.prevState = true;

        obj.calcCount = 1;
        obj.countMax = obj.immunCount;
        
        moveInterval(obj);
        setTimeout(() => {obj.prevState = false}, obj.moveTime + 260);
    }
}

function nextSlide (obj) {
    if(!obj.nextState) {
        obj.nextState = true;

        obj.calcCount = -1;
        obj.countMax = obj.immunCount * -1;
        
        moveInterval(obj);
        setTimeout(() => {obj.nextState = false}, obj.moveTime + 260);
    }
}

function moveInterval(obj) {
    //동작
    addClass(obj.moveEl, obj.ctrlClass);

    let repeatMove = setInterval(() => {
        obj.clearCount = 0;
        obj.moveCount += obj.calcCount;

        //console.log(obj.moveCount);
        obj.moveEl.style[obj.moveArrow] = obj.moveCount * obj.moveValue + 'px';
        
        //리셋
        if(obj.moveCount === obj.countMax) {
            //마지막 li 이동 -> delay -> 트랜지션 제거 후 0으로 이동 시키고 -> 인터벌 종료.
            setTimeout(() => {
                removeClass(obj.moveEl, obj.ctrlClass);
        
                //1번으로 이동시키기 위해
                obj.moveCount = 0;
                obj.moveEl.style[obj.moveArrow] = obj.moveCount * obj.moveValue + 'px';
                
            }, obj.moveTime + 250);
        }        

        //재실행
        obj.clearCount++;
        if(obj.clearCount === 1) {
            clearInterval(repeatMove);
        }

    });
}

function moveValueCalc(el) {
    return el.offsetWidth;
}

function cloneCreate(el) {
    return el.cloneNode(true);
}

/*************** look_book_section ******************/
const lBkTap = document.querySelectorAll('.look_book_show_tab');
//룩북 view 존
const lBkViewZone = document.querySelectorAll('.look_book_view');
//text_box
const lBkInnerTxtBox = document.querySelectorAll('.text_box');
//hover_img
const hoverImg = document.querySelectorAll('.hover_img');

//text박스 text생성
lBkInnerTxtBox.forEach((el, index) => {
    let newP01 = document.createElement('p');
    let newP02 = document.createElement('p');
    let newP03 = document.createElement('p');

    newP01.textContent = lookBookProudctList[index].modelName;
    newP02.textContent = lookBookProudctList[index].name;
    newP03.textContent = lookBookProudctList[index].price;

    el.appendChild(newP01);
    el.appendChild(newP02);
    el.appendChild(newP03);
});

//img hover시 text 등장
for (let i = 0; i < hoverImg.length; i++) {
    hoverImg[i].addEventListener('mouseover', () => {
        for (let j = 0; j < lBkInnerTxtBox.length; j++) {
            removeClass(lBkInnerTxtBox[j], 'hover_on');
        }
        addClass(lBkInnerTxtBox[i], 'hover_on');
    });
}
//img out시 text 제거
for (let i = 0; i < hoverImg.length; i++) {
    hoverImg[i].addEventListener('mouseout', () => {
        for (let j = 0; j < lBkInnerTxtBox.length; j++) {
            removeClass(lBkInnerTxtBox[j], 'hover_on');
        }
    });
}

//img등록
for (let i = 0; i < lBkTap.length; i++) {
    lBkTap[i].lastElementChild.setAttribute('src', `./images/look_book_thumnail${i}.jpg`);
}
//탭 순회하면서 클릭이벤트 등록, 클릭했을시 클래스 전부 제거 후 
//i값에 해당하는 섹션 block_on
for (let i = 0; i < lBkTap.length; i++) {
    lBkTap[i].addEventListener('click', () => {
        for (let j = 0; j < lBkViewZone.length; j++) {
            removeClass(lBkViewZone[j], 'block_on');
        }
        addClass(lBkViewZone[i], 'block_on');

    });
}

/*************** mds_pick_section ******************/
const mdsListArea = document.getElementById('mds_list_area');

mdListMaker();
function mdListMaker() {
    let list = ``;
    let receive = ``;

    mdsProductList.forEach((obj, i) => {
        list = `
            <li class="${i === 0 ? "md_list acodian_on" : "md_list"}">
                <a class="img_link" href="#!">
                    <img src="${obj.src[0]}" alt="mds_${i}"/>
                </a>
                <div class="product_info">
                    <p>
                        ${mdTextMaker(obj.infoData)}
                    </p>
                    <button class="buy_button">
                        <a href="#!">
                            구매하기
                        </a>
                    </button>
                </div>
            </li>
            `
        if(i === 0) {
            list = list.replaceAll(`<img src="${obj.src[0]}" alt="mds_${i}"/>`,`<img src="${obj.src[1]}" alt="mds_hover_${i}"/>`)
        }

        receive += list;

    })

    mdsListArea.innerHTML = receive;

    const mdList = document.querySelectorAll('.md_list');
    const acordianImg = document.querySelectorAll('.md_list img');

    for(let i = 0; i < mdList.length; i++) {
        mdList[i].addEventListener('click', () => {
            for(let j = 0; j < mdList.length; j++) {
                removeClass(mdList[j], "acodian_on");
                acordianImg[j].src = mdsProductList[j].src[0];
            }
            addClass(mdList[i], "acodian_on");
            acordianImg[i].src = mdsProductList[i].src[1];
        })
    }
}

function mdTextMaker(myObj) {
    let text = ``;

    for(let key in myObj) {
        text += myObj[key] + "<br />";
    }

    return text;
}

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
//클래스 추가
function addClass(Element, ClassName) {
    Element.classList.add(ClassName);
}
//클래스 제거
function removeClass(Element, ClassName) {
    Element.classList.remove(ClassName);
}
