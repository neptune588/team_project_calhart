import {
    sub_page_product_list
} from './data.js'


/*************** product_list ******************/

const sortState = {
    defaultState: false,
    priceState: false,
    latestState: false,
    bestState: false,
}

const productListWrapper = document.querySelector('.product_list_wrapper');
const pageSection = document.querySelector('.pagenation');
const pageNumber = document.querySelector('.page_number');
//변수 선언 해놓고 반복문돌려서 li생성되면 queryselectorall로 받기
let pageItemView = 12;

//전체페이지 기준으로, 1페이지 작성
//페이지 카운터 생성 함수 호출
arraySort(sub_page_product_list);
/* topMenuStateObject.allstate = true; */
//console.log(topMenuStateObject.allstate);

//페이지 카운터 생성 함수, 필터의 조건을 누를떄마다 실행하게 계획, 무조건 인덱스0 즉 숫자1에는 불이 들어와야하니까
//페이지 생성 후 인덱스 0에 스타일클래스 부여
//필터의 조건들을 누를 시 매 빈 배열에 조건에 맞게 값을 가져올것이기 떄문에, 계산식도 함수로 지정하여 매개변수 이용
//calc(내가만든배열); 하면 계산식이 나오게 된다. 아이템갯수에 따라


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


/*************** filter_check ******************/

//사이드필터 인풋
const chkList = document.querySelectorAll(`.side_filter input`);
//필터 카테고리
const allFillterSection = document.querySelectorAll('.check_detect');
//필터 카테고리 배열화
const filtterSectionArr = Array.from(allFillterSection);

//top_menu 조건배열
const fillterArrayTopMenu = [];
//price 조건배열
const fillterArrayPrice = [];
//color 조건배열
const fillterArrayColor = [];
//sale 조건배열
const fillterArraySale = [];

//통합 배열(반복문 돌리기 위해 2중배열)
const fillterCompareArray = [fillterArrayTopMenu, fillterArrayPrice, fillterArrayColor, fillterArraySale];

//각 카테고리 섹션들 index 순서에 맞게 inputdata에 번호지정
for (let i = 0; i < chkList.length; i++) {
    let currentSection = chkList[i].closest('.check_detect');
    let currnetSectionIndex = filtterSectionArr.indexOf(currentSection);
    chkList[i].dataset.myFillterIndex = currnetSectionIndex;
}

//전체 input 순회하며 클릭한 input밸류 받아오기, 빼기 
for (let i = 0; i < chkList.length; i++) {
    chkList[i].addEventListener('click', function () {
        let currentInputDataIndex = this.dataset.myFillterIndex;

        if (this.checked) {
            fillterCompareArray[currentInputDataIndex].push(this.value);
            //indexCompare(prevChkBoxChecked, input);
        } else {
            let valueIndex = fillterCompareArray[currentInputDataIndex].indexOf(this.value);
            fillterCompareArray[currentInputDataIndex].splice(valueIndex, 1);
        }

        //color section의 인덱스번호가 2라고치면, 그 안에든 input의 데이터번호도 2
        //조건배열을 담아둔 fillterCompareArray안에 각 인덱스에 맞게 배열을 배치했으니

        //fillterCompareArray[colorinput의 데이터셋] 을 해주면 해당 조건배열에 value값 업데이트 !!

        arrayReturn(sub_page_product_list, fillterCompareArray);
    });
}

function arrayReturn(array01, array02) {
    //외부에서 값받아주기 위해 변수 선언;
    let resultArray01;

    //array01에는 처음에는 외부모듈의 배열이 
    //그 이후부터는 외부모듈에서 조건에 맞게 걸러진 배열이 대입되게 했다.
    //만약 일치하는게 없거나 length가 0이되면 false를 반환하여
    //빈 배열이 array01에 할당되기때문에 조건이 없는 즉 length 0부분은 걸러줘야 한다.
    //array02[i].length === 0 즉 value가 없으면 건너뛰게 설계(continue)

    for (let i = 0; i < array02.length; i++) {
        if (array02[i].length === 0) {
            continue;
        }

        //object.keys는 객체의 key를 순환하는 역할을 하는 메서드이다.
        //object.values는 호환성이 안좋아서 key로 ㄱㄱ하자 
        //괄호안에 순회할 객체를넣어뒀다.
        //또한 some메서드를 활용해 객체의 key값과 조건 배열 arra02[i]이 일치하는지
        //검사하기 위해 또 한번 some을 써주었다. 
        //object 1개에있는 값중 일치하는값이 나오면 true반환 안나오면 false반환

        resultArray01 = array01.filter((object) => {
            return Object.keys(object).some((key) => {
                return array02[i].some((arrayValue) => {
                    //console.log(object[key], arrayValue);
                    return object[key] === arrayValue;
                });
            });
        });

        //처음에는 외부모듈 기준 이후에는 그것을 바탕으로 걸러진배열 1, 1을 바탕으로 2 -> 2를 바탕으로 3 ...

        //이런식으로 중첩조건체크가 되는것

        array01 = resultArray01;
    }

    //걸러진 배열을 바탕으로 정렬 
    arraySort(resultArray01);
}

function stateObjectReset(object) {
    for (let key in object) {
        object[key] = false;
    }
}

function arraySort(array = []) {
    //정렬(sort) 셀렉터
    const sortFillter = document.getElementById('sort_chk');
    //정렬된 배열 변수 선언
    let sortArr;

    //기본 list생성
    listnPageCreate(array);

    //해당 객체 상태변수가 켜졌다는말은 change가 되어있다는말.
    if (sortState.defaultState) {
        sortArr = array.slice().sort((a, b) => {
            return a.propertyNumber - b.propertyNumber;
        });

        listnPageCreate(sortArr);

    } else if (sortState.priceState) {
        sortArr = array.slice().sort((a, b) => {
            if (a.price < b.price) {
                return -1;
            } else if (a.price === b.price) {
                return 0;
            }
        });

        listnPageCreate(sortArr);

    }


    sortFillter.addEventListener("change", (event) => {
        let currentTarget = event.target.value

        //기본 눌렀을시
        if (currentTarget === 'defalut') {
            //정렬 된 결과를 선택했을때에도 적용하기 위해
            stateObjectReset(sortState);
            sortState.defaultState = true;

            sortArr = array.slice().sort((a, b) => {
                return a.propertyNumber - b.propertyNumber;
            });
        
        //가격 순 으로
        } else if (currentTarget === 'price') {
            stateObjectReset(sortState);
            sortState.priceState = true;

            sortArr = array.slice().sort((a, b) => {
                if (a.price < b.price) {
                    return -1;
                } else if (a.price === b.price) {
                    return 0;
                }
            });

        //최근 순으로 
        } else if (currentTarget === 'latest') {
            stateObjectReset(sortState);
            sortState.latestState = true;

            sortArr = array.slice().sort((a, b) => {
                if (a.propertyNumber < b.propertyNumber) {
                    return -1;
                } else if (a.propertyNumber > b.propertyNumber) {
                    return 1;
                }
            });
        }

        //정렬된 결과 가지고 리스트 생산
        listnPageCreate(sortArr);
    });
}

//리셋하기
const resetBtn = document.querySelector('.reset');
resetBtn.addEventListener('click', () => {
    //밸류 defalut로
    document.getElementById('sort_chk').value = 'defalut';
    //상태변수도 그에맞게
    stateObjectReset(sortState);
    sortState.defaultState = true;
    
    //위의 변수 적용된 이후 리스트 뽑기
    arraySort(sub_page_product_list);

    chkList.forEach((input) => {
        //input reset
        input.checked = false;

        //조건 array reset
        fillterCompareArray.forEach((array) => {
            array.splice(0, array.length);
        })
    });
});


function listnPageCreate(array) {
    listCreate(array);
    pageCreate(array);
}

function pageCreate(array) {
    if (array.length === 0) {
        addClass(pageSection, `none_on`);
    } else {
        removeClass(pageSection, `none_on`);
    }

    let receive = ``;
    pageNumber.innerHTML = ``;
    for (let i = 1; i <= calc(array); i++) {
        const pageInner = `
            <li>
                ${i}
            </li>
        `
        receive += pageInner;
    }
    pageNumber.innerHTML = receive;
    //1페이지 활성화 표시
    if (pageNumber.children.length !== 0) {
        addClass(pageNumber.children[0], 'page_on');
    }
    pageControl(array);
}

function pageControl(array) {
    const pageNumberBtn = document.querySelectorAll('.page_number > li');
    //페이지 번호에 따라 아이템 생성
    for (let i = 0; i < pageNumberBtn.length; i++) {
        pageNumberBtn[i].addEventListener('click', () => {
            for (let j = 0; j < pageNumberBtn.length; j++) {
                removeClass(pageNumberBtn[j], 'page_on');
            }
            //페이지 활성화 효과
            addClass(pageNumberBtn[i], 'page_on');
            //복사할 배열을 인자로 받고 인덱스 추출 번호를 계산하여 
            //복사한다. 그리고 페이지 클릭했을때 이후 해당 배열을 기반으로 리스트 생성
            let returnSlice = arraySliceCreate(i, pageItemView, array);
            listCreate(returnSlice);
        });
    }
}
//페이지 리스트 생성
function listCreate(array) {
    productListWrapper.innerHTML = ``;
    let receive = ``;

    if (array.length === 0) {
        productListWrapper.innerHTML = `
            <p class="lengthNotice">
                <i class="far fa-times-circle"></i>
                해당하는 상품이 존재하지 않습니다!
            </p>
        `;
    }
    for (let i = 0; i < array.length; i++) {
        if (i === pageItemView) {
            break;
        }
        let list = `
            <li>
                <a class = "img_link_01" href = './detail_product_buy.html'>
                    <img src = ${array[i].imgSrc[0]} alt = "product_img_${i}">
                </a>    
                <a class = "img_link_02" href = './detail_product_buy.html'>
                    <img src = ${array[i].imgSrc[1]} alt = "product_img_${i}_hover">
                </a>
                <a class = "product_name" href = "./detail_product_buy.html">
                    ${array[i].productNameKor}
                </a>
                <a class = "model_name" href = "./detail_product_buy.html">
                    ${array[i].productModelName}
                </a>
                <span class = "price_unit">₩</span>
                <span class = "price">${array[i].price.toLocaleString()}</span>
            </li>
        `

        if (array[i].isBest === true && array[i].isNew === true) {
            list = list.replaceAll(`<a class = "product_name" href = "./detail_product_buy.html">`, `<span class="best">BEST</span><span class="new">NEW</span><a class = "product_name" href = "./detail_product_buy.html">`);
        } else if (array[i].isBest === true) {
            list = list.replaceAll(`<a class = "product_name" href = "./detail_product_buy.html">`, `<span class="best">BEST</span><a class = "product_name" href = "./detail_product_buy.html">`);
        } else if (array[i].isNew === true) {
            list = list.replaceAll(`<a class = "product_name" href = "./detail_product_buy.html">`, `<span class="new">NEW</span><a class = "product_name" href = "./detail_product_buy.html">`);
        }

        receive += list;
    }
    productListWrapper.innerHTML += receive;
}
//배열 받아서 페이지 계산
function calc(array) {
    return Math.ceil(array.length / pageItemView);

    //math.ceil은 올림 함수이다.

    //총 아이템이 30개이고 

    //한 페이지당 아이템이 12개씩 나온다고 가정을 해보면

    // 1 12 /2 12 /3 6 이 되는데

    //12개로 나눈 나머지 부분에도 페이지를 구현해주기 위해 올림함수를 쓰는것이다.

    // 30 / 12는 2.5 -> 올림 -> 3 나머지 0.5부분도 페이지로 나타나져야 하니까 올림 함수를 이용해 카운트를 올리고 페이지에 표현

}

//배열 계산 후 복제
function arraySliceCreate(firstValue, lastValue, array) {
    let startIndex = (firstValue + 1) * lastValue - lastValue; //sub_page_product_list기준 0, 1, 2
    let lastIndex = lastValue + startIndex;

    let returnArray = array.slice(startIndex, lastIndex); //배열복제
    return returnArray;

    //console.log(returnArray);
    //console.log(startIndex);
    //console.log(lastIndex);
}

//클래스 추가
function addClass(Element, ClassName) {
    Element.classList.add(ClassName);
}
//클래스 제거
function removeClass(Element, ClassName) {
    Element.classList.remove(ClassName);
}
