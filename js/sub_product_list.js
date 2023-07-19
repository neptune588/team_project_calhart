import { sub_page_product_list } from './data';

/*************** product_list ******************/
const pdWrapper = document.querySelector('.product_list_wrapper');
const pageSection = document.querySelector('.pagenation');
const pageNumber = document.querySelector('.page_number');

const listArr = [...sub_page_product_list];
const viewLength = 12;

const listInfo = {
    wrapper: pdWrapper,
    maxView: viewLength,
    arr: listArr,
}

function listCreate(obj) {
    let {wrapper, maxView, arr} = obj;

    let list = ``;
    let receive = ``;

    if(arr.length === 0) {
        wrapper.innerHTML = `
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
    wrapper.innerHTML = receive;
}

function pageCreate(obj) {
    let list = ``;
    let receive = ``;

    for(let i = 1; i <= pageCalc(); i++) {

    }
}

function pageCalc (arr, viewLength) {
    const pageNum = Math.ceil(arr.length / viewLength);
    return pageNum;
}

/*************** filter_view_control ******************/
const filterBox = document.querySelector('.filter_btn');
const filterSection = document.querySelectorAll('.filter_section');
let filterState = false;

filterBox.addEventListener('click', () => {
    if (!filterState) {
        addClass(filterBox, 'filter_on');
        filterSection.forEach((value) => {
            addClass(value, `block_on`);
        });
        filterState = true;
    } else {
        removeClass(filterBox, 'filter_on');
        filterSection.forEach((value) => {
            removeClass(value, `block_on`);
        });
        filterState = false;
    }
});
