import { sub_page_product_list } from './data';
import { filterSections } from './sub_page_filter_data';

/*************** product_list ******************/
const pdWrapper = document.querySelector('.product_list_wrapper');
const pageSection = document.querySelector('.pagenation');
const pageNumber = document.querySelector('.page_number');
const sideFilter = document.querySelector('.side_filter');

const listArr = [...sub_page_product_list];
const viewLength = 12;

const listInfo = {
    arr: listArr,
    liWrapper: pdWrapper,
    maxView: viewLength,
    pageWrapper: pageSection,
    pageNumber: pageNumber,
}

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
            <input type="${parentObj.cmnInputType}" id=${obj.inputId}>
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

/* function listCreate(obj) {
    let {liWrapper, maxView, arr, pageWrapper, pageNumber} = obj;

    let list = ``;
    let receive = ``;

    if(arr.length === 0) {
        liWrapper.innerHTML = `
        <p class="lengthNotice">
            <i class="far fa-times-circle"></i>
            해당하는 상품이 존재하지 않습니다!
        </p>
        `
    }

    for(let i = 0; i < arr.length; i++) {
        if(i === maxView) {
            break;
        }
        list = `
            <li>
                <a class = "img_link_01" href = './detail_product_buy.html'>
                    <img src = ${arr[i].imgSrc[0]} alt = "product_img_${i}">
                </a>    
                <a class = "img_link_02" href = './detail_product_buy.html'>
                    <img src = ${arr[i].imgSrc[1]} alt = "product_img_${i}_hover">
                </a>
                <a class = "product_name" href = "./detail_product_buy.html">
                    ${arr[i].productNameKor}
                </a>
                <a class = "model_name" href = "./detail_product_buy.html">
                    ${arr[i].productModelName}
                </a>
                <span class = "price_unit">₩</span>
                <span class = "price">${arr[i].price.toLocaleString()}</span>
            </li>
        `
        if (arr[i].isBest && arr[i].isNew) {
            list = list.replaceAll(`<a class = "product_name" href = "./detail_product_buy.html">`, `<span class="best">BEST</span><span class="new">NEW</span><a class = "product_name" href = "./detail_product_buy.html">`);
        } else if (arr[i].isBest) {
            list = list.replaceAll(`<a class = "product_name" href = "./detail_product_buy.html">`, `<span class="best">BEST</span><a class = "product_name" href = "./detail_product_buy.html">`);
        } else if (arr[i].isNew) {
            list = list.replaceAll(`<a class = "product_name" href = "./detail_product_buy.html">`, `<span class="new">NEW</span><a class = "product_name" href = "./detail_product_buy.html">`);
        }
        receive += list;
    }
    liWrapper.innerHTML = receive;

    handleSort();
    pageCreate(arr, pageWrapper, pageNumber);
}

function handleSort(){

}

function pageCreate(myArr, maxView) {
    let list = ``;
    let receive = ``;

    for(let i = 1; i <= pageCalc(myArr, maxView); i++) {

    }
}

function pageCalc (arr, viewLength) {
    const pageNum = Math.ceil(arr.length / viewLength);
    return pageNum;
} */

/*************** filter_view_control ******************/
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

function addClass(el, className) {
    el.classList.add(className);
}
function removeClass(el, className) {
    el.classList.remove(className);
}
