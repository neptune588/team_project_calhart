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
    sortState: {
        price: false,
        default: false,
    }
}

handleSort(listObj);

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
    let sortArr;

    if(!obj.sortState.default && !obj.sortState.price) {
        listCreate(obj, obj.referenceArr);
        pageCreate(obj);
    } else if(obj.sortState.default) {
        sortArr = [...obj.referenceArr].sort((cur, next) => {
            return cur.propertyNumber - next.propertyNumber;
        })
        obj.referenceArr = sortArr;
        listCreate(obj, obj.referenceArr);
        pageCreate(obj);

    } else if(obj.sortState.price) {
        sortArr = [...obj.referenceArr].sort((cur, next) => {
            if (cur.price < next.price) {
                return -1;
            } else if (cur.price === next.price) {
                return 0;
            }
        })

        obj.referenceArr = sortArr;
        listCreate(obj, obj.referenceArr);
        pageCreate(obj);
    }

    sortChk.addEventListener('change', (e) => {
        let nowValue = e.target.value;
        if (nowValue === "defalut" || nowValue === "latest") {
            stateReset(obj.sortState, false);
            obj.sortState.default = true;

            sortArr = [...obj.referenceArr].sort((cur, next) => {
                return cur.propertyNumber - next.propertyNumber;
            })
        }
        if (nowValue === "price") {
            stateReset(obj.sortState, false);
            obj.sortState.price = true;

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

function stateReset(obj, bool) {
    for(let key in obj) {
        obj[key] = bool;
    }
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
    } else {
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

}

function pageCreate(obj) {
    //console.log(obj.referenceArr);
    let list = ``;
    let receive = ``;

    obj.paegLength = pageCalc(obj.referenceArr, obj.maxView);
    if (obj.referenceArr.length === 0) {
        addClass(obj.pageSection, 'none_on');
    } else {
        for (let i = 0; i < obj.paegLength; i++) {
            list = `<li>${i + 1}</li>`
    
            if (i === obj.curPageIndex) {
                list = `<li class="page_on">${i + 1}</li>`
            }
    
            receive += list;
        }
    
        obj.pageWrapper.innerHTML = receive;
        removeClass(obj.pageSection, 'none_on');
    }

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
        //console.log(obj.curPageIndex);

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
//fill()로 빈배열을 만들엇을때는 인덱스0번에 있는 배열을 수정해도 전부 다 바뀌게 되더라.
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

        //console.log(filtersArr);
        filterArr(listObj, filtersArr, listArr);
    });
})

function filterArr(obj, parentArr, immunArr) {
    //1) 첫 기준 배열은 바닐라 배열
    //2) 반복이 끝날때마다 기준 배열(반복 메서드가 돌아가는) 배열은 걸러진 배열로 바뀌어야 한다.
    //3) 즉 각 필터 조건 섹션을 전부 순회해야 하면서 1조건 순회하면 그 배열을 기준으로 2조건을 순회하고 ... 3.. 4.. 이런식으로 짜야하는데, length가 0이라는 말은 조건이 없다는거니까 그것들은 건너뛰게 코드를 짜자.

    let result = [];
    let changeArr = immunArr;

    for(let i = 0; i < parentArr.length; i++) {
        if(parentArr[i].length === 0) {
            continue;
        }
        result = changeArr.filter(obj => {
                //obj 1개를 검사 -> 해당 obj의 key값을 Object.keys를 통해 배열에 담고
                //some 메서드를 사용해서 검사한다. some은 조건에맞으면 boolean으로 반환되기 떄문에
                //true이면 filter에서 true에 속하는 obj를 배열에 담게되는것임.
                //한 key속성에 대하여 1차원 배열의 value가 순회된다. 있으면 true 없으면 false;
                //즉 value와 같으면 그 즉시 순회가 전부 멈추고 가장 상위의 obj가 배열에 속하게 됨.
                //ex key -> a obj["a"] === value 없으면 그 다음 key 그다음 key ... 
                return Object.keys(obj).some(key => {
                    return parentArr[i].some(value => obj[key] === value);
                });
        })
        changeArr = result;
    }
    obj.referenceArr = result;
    handleSort(obj);
}

/*************** chk_reset ******************/
const resetBtn = document.querySelector('.reset');
resetBtn.addEventListener('click', () => {
    stateReset(listObj.sortState, 'false');
    sortChk.value = "defalut"

    listObj.referenceArr = listArr;
    listObj.curPageIndex = 0;

    filterChk.forEach(input => input.checked = false);
    handleSort(listObj);
});


function addClass(el, className) {
    el.classList.add(className);
}

function removeClass(el, className) {
    el.classList.remove(className);
}
