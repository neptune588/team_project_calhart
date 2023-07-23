import {
    sub_page_product_list
} from './data';
import {
    filterSections
} from './sub_page_filter_data';

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
                ${filterLiCreate(obj.sectnIn.liInfo, index)}
            </ul>
        </div>
        `

        if (index === 0) {
            contents = `
            <div id="${obj.sectnId}" class="${classReduce(obj.sectnClass)}">
                <div class="${classReduce(obj.sectnIn.titleInfo.titleWrapClass)}">
                    <h2 class="${classReduce(obj.sectnIn.titleInfo.titleClass)}">${obj.sectnIn.titleInfo.titleStr}</h2>
                    <div class="${classReduce(obj.sectnIn.titleInfo.resetClass)}"><i class="${classReduce(obj.sectnIn.titleInfo.resetIcon)}"></i>${obj.sectnIn.titleInfo.resetStr}</div>
                </div>
                <ul id="${obj.sectnIn.liInfo.ulId}" class="${classReduce(obj.sectnIn.liInfo.ulClass)}">
                    ${filterLiCreate(obj.sectnIn.liInfo, index)}
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

function filterLiCreate(parentObj, parentIndex) {
    let list = ``;
    let receive = ``;

    parentObj.innerLi.forEach((obj) => {

        list = `
        <li>
            <input type="${parentObj.cmnInputType}" id=${obj.inputId} value="${obj.inputValue}" data-my-filter-index=${parentIndex}>
            <label for="${obj.inputId}" class="${parentObj.cmnLabelClass ? classReduce(parentObj.cmnLabelClass) : classReduce(obj.individualClass)}">${obj.labelStr ? obj.labelStr : ""}</label>
        </li>        
        `

        if (parentObj.isSpan) {
            list = `
                <li>
                    <label class="${parentObj.cmnLabelClass ? classReduce(parentObj.cmnLabelClass) : classReduce(obj.individualClass)}" for="${obj.inputId}">
                        <input type="${parentObj.cmnInputType}" id="${obj.inputId}" value="${obj.inputValue}" data-my-filter-index=${parentIndex}>
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
const pageNumberWrapper = document.querySelector('.page_number_wrapper');
const prevPage = document.getElementById('prev_btn');
const nextPage = document.getElementById('next_btn');
const firstPage = document.getElementById('first_prev_btn');
const lastPage = document.getElementById('last_next_btn');

const sortChk = document.getElementById('sort_chk');

const listArr = [...sub_page_product_list];
const viewLength = 12;

const listObj = {
    referenceArr: listArr,
    liWrapper: pdWrapper,
    maxView: viewLength,
    pageNumber: null,
    pageWrapper: pageNumberWrapper,
    pageSection: pageSection,
    paegLength: 0,
    curPageIndex: 0,
}

handleSort(listObj, listArr);

prevPage.addEventListener('click', () => pagePrevClick(listObj));
firstPage.addEventListener('click', () => {
    if(listObj.curPageIndex === 0) {
        alert('첫번째 페이지 입니다!');
    } else {
        const copy = [...listObj.referenceArr].splice(0, listObj.maxView);
        listObj.curPageIndex = 0;
        
        listObj.pageNumber.forEach(li => removeClass(li, 'page_on'));
        addClass(listObj.pageNumber[0], 'page_on');
    
        listCreate(listObj, copy);
        window.scrollTo({top: 0, smooth: "behaivor"});
    }
})
nextPage.addEventListener('click', () => pageNextClick(listObj));
lastPage.addEventListener('click', () => {
    if(listObj.curPageIndex === listObj.pageNumber.length - 1) {
        alert('마지막 페이지 입니다!');
    } else {
        let first = (listObj.pageNumber.length - 1) * listObj.maxView;
        let last = first + listObj.maxView;
        
        const copy = [...listObj.referenceArr].splice(first, last);
        listObj.curPageIndex = listObj.pageNumber.length - 1;

        listObj.pageNumber.forEach(li => removeClass(li, 'page_on'));
        addClass(listObj.pageNumber[listObj.curPageIndex], 'page_on');

        listCreate(listObj, copy);
        window.scrollTo({top: 0, smooth: "behaivor"});
    }
})

function handleSort(obj) {
    listCreate(obj, obj.referenceArr);
    pageCreate(obj);

    let sortArr;
    sortChk.addEventListener('change', (e) => {
        let nowValue = e.target.value;
        if (nowValue === "defalut" || nowValue === "latest") {
            sortArr = [...obj.referenceArr].sort((cur, next) => {
                return cur.propertyNumber - next.propertyNumber;
            })
        }
        if (nowValue === "price") {
            sortArr = [...obj.referenceArr].sort((cur, next) => {
                if (cur.price < next.price) {
                    return -1;
                } else if (cur.price === next.price) {
                    return 0;
                }
            })
        }

        obj.curPageIndex = 0;
        obj.referenceArr = sortArr;

        listCreate(obj, sortArr);
        pageCreate(obj);
    })
}

//리스트를 만들때는 splice로 자른 arr도 리스트도 뽑아줘야하므로
//arr을 따로 파라미터로 받자. 
function listCreate(obj, arr) {
    let list01 = ``;
    let list02 = ``;
    let list03 = ``;

    let receive = ``;

    if (arr.length === 0) {
        obj.liWrapper.innerHTML = `
        <p class="lengthNotice">
            <i class="far fa-times-circle"></i>
            해당하는 상품이 존재하지 않습니다!
        </p>
        `
    }

    for (let i = 0; i < arr.length; i++) {
        if (i === obj.maxView) {
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

        if (arr[i].isNew) {
            list02 = `
                <span class="new">NEW</span>
                ${list02}
            `
        }

        if (arr[i].isBest) {
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

function pageCreate(obj) {
    let list = ``;
    let receive = ``;

    obj.paegLength = pageCalc(obj.referenceArr, obj.maxView);
    if (obj.referenceArr.length === 0) {
        obj.pageSection.innerHTML = "";
    }

    for (let i = 0; i < obj.paegLength; i++) {
        list = `<li>${i + 1}</li>`

        if (i === obj.curPageIndex) {
            list = `<li class="page_on">${i + 1}</li>`
        }

        receive += list;
    }

    obj.pageWrapper.innerHTML = receive;
    pageControl(obj);
}

function pageControl(obj) {
    const pageBtn = obj.pageWrapper.querySelectorAll('li');
    //매번 객체에 바뀐 el 갱신
    //prev,next btn은 매번 새로 덮어씌워지는게 아니므로, 오브젝트에 항상 el을 갱신시켜주고
    //그 el에게 page_on클래스를 주자.

    obj.pageNumber = pageBtn;

    pageBtn.forEach((page, index) => {
        page.addEventListener('click', () => {
            /*             first = 0 * 12 -> 0 
                        last = first( == 0) + 12

                        first = 1 * 12 -> 12
                        last = first( == 12) + 12 */

            for (let j = 0; j < pageBtn.length; j++) {
                removeClass(pageBtn[j], 'page_on');
            }
            addClass(page, 'page_on');
            obj.curPageIndex = index;

            let first = index * obj.maxView;
            let last = first + obj.maxView;

            const result = [...obj.referenceArr].splice(first, last);
            listCreate(obj, result);

            window.scrollTo({top: 0, smooth: "behaivor"});
        })
    })
}

function pagePrevClick(obj) {
    obj.curPageIndex = obj.curPageIndex - 1;

    if (obj.curPageIndex < 0) {
        obj.curPageIndex = 0;
        alert('첫번쨰 페이지 입니다!');
        console.log(obj.curPageIndex);

    } else {
        for (let j = 0; j < obj.pageNumber.length; j++) {
            removeClass(obj.pageNumber[j], 'page_on');
        }

        addClass(obj.pageNumber[obj.curPageIndex], 'page_on');

        let first = obj.curPageIndex * obj.maxView;
        let last = first + obj.maxView;

        const result = [...obj.referenceArr].splice(first, last);
        listCreate(obj, result);

        window.scrollTo({top: 0, smooth: "behaivor"});
    }
}

function pageNextClick(obj) {
    //next누르면 페이지[0] -> 페이지[1]되고 그거 기반으로 리스트가 뽑힘.
    obj.curPageIndex = obj.curPageIndex + 1;

    //+1이된 curPageIndex가 page의 갯수와 같아졌다는 뜻은, 마지막 페이지라는 뜻이니까
    //즉 마지막 페이지에서 next를 눌렀다는 뜻이니까
    //curPageIndex를 다시 마지막 인덱스로 만들어줌.
    if (obj.curPageIndex >= obj.paegLength) {
        obj.curPageIndex = obj.paegLength - 1;
        alert('마지막 페이지 입니다!');

    } else {
        for (let j = 0; j < obj.pageNumber.length; j++) {
            removeClass(obj.pageNumber[j], 'page_on');
        }

        addClass(obj.pageNumber[obj.curPageIndex], 'page_on');

        let first = obj.curPageIndex * obj.maxView;
        let last = first + obj.maxView;

        const result = [...obj.referenceArr].splice(first, last);
        listCreate(obj, result);

        window.scrollTo({top: 0, smooth: "behaivor"});
    }
}

function pageCalc(arr, viewLength) {
    /*     let pageNum;
        if(arr.length % viewLength > 0) {
            pageNum = Math.floor((arr.length / viewLength)) + 1
        } else {
            pageNum = arr.length / viewLength
        } */

    const pageNum = Math.ceil(arr.length / viewLength);
    return pageNum;
}

/*************** filter_check ******************/
const filterChkSections = document.querySelectorAll('.check_section');
const filterChk = document.querySelectorAll('.check_section input');
const filtersArr = Array.from({length: filterChkSections.length}, () => []);
//fill()로 빈배열을 만들엇을때는 0의자리에잇는 배열을 수정해도 전부 다 바뀌게 되더라.
//참조: https://velog.io/@teihong93/Array.from%EC%9D%84-%ED%86%B5%ED%95%9C-%EB%B0%B0%EC%97%B4%EC%9D%98-%EC%B4%88%EA%B8%B0%ED%99%94

//console.log(filterChkSections, filterChk, filtersArr);

filterChk.forEach(input => {
    input.addEventListener('click',() => {
        let nowIndex = input.dataset.myFilterIndex;

        if(input.checked) {
            filtersArr[nowIndex].push(input.value);
        } else {
            let valueIdx = filtersArr[nowIndex].indexOf(input.value);
            filtersArr[nowIndex].splice(valueIdx, 1);
        }

        const result = filterArr(listObj, filtersArr[nowIndex], filtersArr);
    });
})

function filterArr(obj, parentArr) {
    //1) 첫 기준 배열은 바닐라 배열
    //2) 반복이 끝날때마다 기준 배열(반복 메서드가 돌아가는) 배열은 걸러진 배열로 바뀌어야 한다.

    let changeArr;
    let result;

    changeArr = obj.referenceArr;
    result = changeArr.forEach(obj => {
        
    })

    changeArr = result;

}

function addClass(el, className) {
    el.classList.add(className);
}

function removeClass(el, className) {
    el.classList.remove(className);
}
