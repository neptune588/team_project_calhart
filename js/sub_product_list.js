import { sub_page_product_list } from './data';
import { filterSections } from './sub_page_filter_data';

/*************** filter_create ******************/
const sideFilter = document.querySelector('.side_filter');

filterMaker();
function filterMaker() {
    let contents = ``;
    let receive = ``;

    filterSections.forEach((obj, index) => {
        contents = `
        <div id="${obj.sectnId}" class="${classReduce(obj.sectnClass)}">
            <h2 class="${classReduce(obj.sectnIn.titleInfo.titleClass)}">${obj.sectnIn.titleInfo.titleStr}</h2>
            <ul id="${obj.sectnIn.liInfo.ulId}" class="${classReduce(obj.sectnIn.liInfo.ulClass)}">
                ${filterLiCreate(obj.sectnIn.liInfo)}
            </ul>
        </div>
        `

        if(index === 0) {
            contents = `
            <div id="${obj.sectnId}" class="${classReduce(obj.sectnClass)}">
                <div class="${classReduce(obj.sectnIn.titleInfo.titleWrapClass)}">
                    <h2 class="${classReduce(obj.sectnIn.titleInfo.titleClass)}">${obj.sectnIn.titleInfo.titleStr}</h2>
                    <div class="${classReduce(obj.sectnIn.titleInfo.resetClass)}"><i class="${classReduce(obj.sectnIn.titleInfo.resetIcon)}"></i>${obj.sectnIn.titleInfo.resetStr}</div>
                </div>
                <ul id="${obj.sectnIn.liInfo.ulId}" class="${classReduce(obj.sectnIn.liInfo.ulClass)}">
                    ${filterLiCreate(obj.sectnIn.liInfo)}
                </ul>
            </div>
            `
        } 

        receive += contents;
    })

    sideFilter.innerHTML = receive;
}

function classReduce(arr) {
    const total = arr.reduce((cur, next) => cur + " " + next);
    return total;
}
function filterLiCreate(parentObj) {
    let list = ``;
    let receive = ``;

    parentObj.innerLi.forEach((obj) => {

        list = `
        <li>
            <input type="${parentObj.cmnInputType}" id=${obj.inputId} value="${obj.inputValue}">
            <label for="${obj.inputId}" class="${parentObj.cmnLabelClass ? classReduce(parentObj.cmnLabelClass) : classReduce(obj.individualClass)}">${obj.labelStr ? obj.labelStr : ""}</label>
        </li>        
        `
        
        if(parentObj.isSpan) {
            list = `
                <li>
                    <label class="${parentObj.cmnLabelClass ? classReduce(parentObj.cmnLabelClass) : classReduce(obj.individualClass)}" for="${obj.inputId}">
                        <input type="${parentObj.cmnInputType}" id="${obj.inputId}" value="${obj.inputValue}">
                        <span class="${classReduce(parentObj.cmnSpanClass)}"></span>
                        ${obj.labelStr}
                    </label>
                </li>
            `
        } 
        

        receive += list;
    })
    return receive;
}

const filterBox = document.querySelector('.filter_btn');
const filterSection = document.querySelectorAll('.filter_section');
let filterState = false;

filterBox.addEventListener('click', () => {
    if (!filterState) {
        addClass(filterBox, 'filter_on');
        filterSection.forEach(section => addClass(section, `block_on`));
        filterState = true;
    } else {
        removeClass(filterBox, 'filter_on');
        filterSection.forEach(section => removeClass(section, `block_on`));
        filterState = false;
    }
});


/*************** list_create ******************/
const pdWrapper = document.querySelector('.product_list_wrapper');
const pageSection = document.querySelector('.pagenation');
const pageNumber = document.querySelector('.page_number');
const prevPage = document.getElementById('prev_btn');
const nextPage = document.getElementById('next_btn');
const firstPage = document.getElementById('first_prev_btn');
const lastPage = document.getElementById('last_next_btn');

const sortChk = document.getElementById('sort_chk');

const listArr = [...sub_page_product_list];
const viewLength = 12;

const listObj = {
    liWrapper: pdWrapper,
    maxView: viewLength,
    pageWrapper: pageNumber,
    pageSection: pageSection,
    pagePrev: prevPage,
    pageNext: nextPage,
    pageFirst: firstPage,
    pageLast: lastPage,
    paegLength: 0,
    curPageIndex: 0,
}

handleSort(listObj, listArr);

function handleSort(obj, arr) {
    listCreate(obj, arr);
    pageCreate(obj, arr);

    let sortArr;
    sortChk.addEventListener('change', (e) => {
        let nowValue = e.target.value;
        if(nowValue === "defalut" || nowValue === "latest") {
            sortArr = [...arr].sort((cur, next) => {
                return cur.propertyNumber - next.propertyNumber;
            })
        }
        if(nowValue === "price") {
            sortArr = [...arr].sort((cur, next) => {
                if(cur.price < next.price) {
                    return -1;
                } else if(cur.price === next.price) {
                    return 0;
                }
            })
        }

        obj.curPageIndex = 0;
        listCreate(obj, sortArr);
        pageCreate(obj, sortArr);
    })
}
function listCreate(obj, arr) {
    let list01 = ``;
    let list02 = ``;
    let list03 = ``;

    let receive = ``;

    if(arr.length === 0) {
        obj.liWrapper.innerHTML = `
        <p class="lengthNotice">
            <i class="far fa-times-circle"></i>
            해당하는 상품이 존재하지 않습니다!
        </p>
        `
    }

    for(let i = 0; i < arr.length; i++) {
        if(i === obj.maxView) {
            break;
        }

        list01 = `
                <a class = "img_link_01" href = './detail_product_buy.html'>
                    <img src = ${arr[i].imgSrc[0]} alt = "product_img_${i}">
                </a>    
                <a class = "img_link_02" href = './detail_product_buy.html'>
                    <img src = ${arr[i].imgSrc[1]} alt = "product_img_${i}_hover">
                </a>
            `

        list02 = `
                <a class = "product_name" href = "./detail_product_buy.html">
                    ${arr[i].productNameKor}
                </a>
                <a class = "model_name" href = "./detail_product_buy.html">
                    ${arr[i].productModelName}
                </a>
                <span class = "price_unit">₩</span>
                <span class = "price">${arr[i].price.toLocaleString()}</span>
            `

        if(arr[i].isNew) {
            list02 = `
                <span class="new">NEW</span>
                ${list02}
            `
        }

        if(arr[i].isBest) {
            list02 = `
                <span class="best">BEST</span>
                ${list02}
            `
        }

        list03 = `
        <li>
            ${list01}
            ${list02}
        </li>
        `
        receive += list03;
    }
    obj.liWrapper.innerHTML = receive;
}

function pageCreate(obj, arr) {
    let list = ``;
    let receive = ``;

    obj.paegLength = pageCalc(arr, obj.maxView);
    if(arr.length === 0) {
        obj.pageSection.innerHTML = "";
    }

    for(let i = 0; i < obj.paegLength; i++) {
        list = `<li>${i + 1}</li>`

        if(i === obj.curPageIndex) {
            list = `<li class="page_on">${i + 1}</li>`
        }

        receive += list;
    }

    obj.pageWrapper.innerHTML = receive;
    pageControl(obj, arr);
}

function pageControl(obj, arr) {
    const pageBtn = obj.pageWrapper.querySelectorAll('li');
    
    pageBtn.forEach((page, index) => {
        page.addEventListener('click', () => {
/*             first = 0 * 12 -> 0 
            last = first( == 0) + 12

            first = 1 * 12 -> 12
            last = first( == 12) + 12 */

            for(let j = 0; j < pageBtn.length; j++) {
                removeClass(pageBtn[j], 'page_on');
            } 
            addClass(page, 'page_on');
            obj.curPageIndex = index;

            let first = index * obj.maxView;
            let last = first + obj.maxView;

            const result = [...arr].splice(first, last);
            listCreate(obj, result);

            window.scrollTo({top: 0, smooth: "behaivor"});
        })
    })

    obj.pagePrev.addEventListener('click', () => pagePrevClick(obj, arr, pageBtn));
    obj.pageNext.addEventListener('click', () => pagePrevClick(obj, arr, pageBtn));
}

function pagePrevClick(obj, arr, pageBtn) {
    return () => {
        obj.curPageIndex = obj.curPageIndex - 1;
        console.log(obj.curPageIndex);
        
        if(obj.curPageIndex < 0) {
            obj.curPageIndex = 0;
            alert('첫번쨰 페이지 입니다!');
            console.log(obj.curPageIndex);

        } else {
            for(let j = 0; j < pageBtn.length; j++) {
                removeClass(pageBtn[j], 'page_on');
            } 

            addClass(pageBtn[obj.curPageIndex], 'page_on');

            let first = obj.curPageIndex * obj.maxView;
            let last = first + obj.maxView;
            
            const result = [...arr].splice(first, last);
            listCreate(obj, result);
            
            window.scrollTo({top: 0, smooth: "behaivor"});
        }
    }
}
function pageNextClick(obj, arr, pageBtn) {
    return () => {
        //next누르면 페이지[0] -> 페이지[1]되고 그거 기반으로 리스트가 뽑힘.
        obj.curPageIndex = obj.curPageIndex + 1;
        console.log(obj.curPageIndex);

        //+1이된 curPageIndex가 page의 갯수와 같아졌다는 뜻은, 마지막 페이지라는 뜻이니까
        //즉 마지막 페이지에서 next를 눌렀다는 뜻이니까
        //curPageIndex를 다시 마지막 인덱스로 만들어줌.
        if(obj.curPageIndex >= obj.paegLength) {
            obj.curPageIndex = obj.paegLength - 1;
            alert('마지막 페이지 입니다!');

        } else {
            for(let j = 0; j < pageBtn.length; j++) {
                removeClass(pageBtn[j], 'page_on');
            } 

            addClass(pageBtn[obj.curPageIndex], 'page_on');

            let first = obj.curPageIndex * obj.maxView;
            let last = first + obj.maxView;
            
            const result = [...arr].splice(first, last);
            listCreate(obj, result);
            
            window.scrollTo({top: 0, smooth: "behaivor"});
        }
    }
}


function pageCalc (arr, viewLength) {
/*     let pageNum;
    if(arr.length % viewLength > 0) {
        pageNum = Math.floor((arr.length / viewLength)) + 1
    } else {
        pageNum = arr.length / viewLength
    } */
    
    const pageNum = Math.ceil(arr.length / viewLength);
    return pageNum;
}

function addClass(el, className) {
    el.classList.add(className);
}
function removeClass(el, className) {
    el.classList.remove(className);
}

