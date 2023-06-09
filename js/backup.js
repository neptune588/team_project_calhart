01

//구현실패
//관련객체
const LookBookfunctionList = {
    changeArray: function (array) {
        return Array.from(array);
    },
    arrayRelocation: function (array, changeNode01, changedNode02) {
        let changeNode01IndexNumber = array.indexOf(changeNode01);
        //let changeNode02Save = changedNode02;
        let changeNode01Save = array.slice(changeNode01IndexNumber, changeNode01IndexNumber + 1)[0];
        //배열의 형태로 반환되기 떄문에 거기서 [0] 즉 0번째인덱스값을 저장한다.
        array[0] = changeNode01Save;
        array[changeNode01IndexNumber] = changedNode02;
        //바꾼 배열 html적용.

        //1. 먼저 변화가 일어나는 배열(array), 인덱스 번호가 0번째 값, 바꿀 값을 받는다.
        //2. 내가 클릭한 small_thumnail의 이미지가 왼쪽의 큰 룩북썸네일(위치: 인덱스0)로 가고 기존에 0에 위치에 있던 이미지는
        //   내가 클릭한 small_thumnai이미지의 위치로 간다.
        //3. 그러기 위해선, 바꿀 small_thumnail의 인덱스 위치를 알아야한다.
        //4. 따라서 변수(changeNode01IndexNumber)에 indexof로 index번호를 저장.
        //5. 이후 slice index, index+1을 활용해 그 인덱스 하나만을 복사한다. 
        //6. slice()메서드는 배열의 형태로 복사를 하기 떄문에 메소드 옆에 [0]을 붙여준다.
        //   changeNode01Save = array.slice(changeNode01IndexNumber, changeNode01IndexNumber+1)[0];
        //7. 그렇게 하면 slice()메서드로 복사한 배열의 0번째 인덱스가 복사가 된다.
        //8. 그러면 이제 array[0]에는 내가 클릭한 small_thumanil을 small_thumnail의 위치에는 기존에 있떤 0번째 인덱스를
        //   넣어주면 된다.  
    },
    /*     elementRelocation: function(lookBookArea01, lookBookArea02, node01, node02) {
            lookBookArea01.appendChild(node01);
            lookBookArea02.appendChild(node02);
        }    */
}



02

for (let i = 0; i < lookBookTap.length; i++) {
    lookBookTap[i].lastElementChild.setAttribute('src', `./images/look_book_thumnail${i}.jpg`);
}
//탭 순회하면서 클릭이벤트 등록, 클릭했을시 클래스 전부 제거 후 
//i값에 해당하는 섹션 block_on
for (let i = 0; i < lookBookTap.length; i++) {
    lookBookTap[i].addEventListener('click', () => {
        for (let j = 0; j < lookBookViewZone.length; j++) {
            removeClass(lookBookViewZone[j], 'block_on');
        }
        addClass(lookBookViewZone[i], 'block_on');
        /*         //클릭한 탭 배열전환
                LookBookfunctionList.arrayRelocation(lookBookTap, lookBookTap[i], lookBookTap[0]);
                //배열요소 html적용
                LookBookfunctionList.elementRelocation(bigLookBook, smallLookBook, lookBookTap[i], lookBookTap[0]); */
    });
}

/* lookBookViewZone.forEach((value) => {
    value.children[]
});
 */

/*     thumNailChange: function(bigThum, smallThum) {
        SrcSave.bigThumSrc = bigThum.children[0].src; //큰 썸네일 
        SrcSave.smallThumSrc = smallThum.children[0].src; //작은 썸네일
        SrcSave.ThumSaveSrc = SrcSave.bigThumSrc ; // ThumSave = bigThum.getAttribute.src;
        // c = a; 바꿔지는값 한개를 저장.
        // a = b; a가 b가되면 값이 바뀌게 되지만 c에 a를 담아뒀으므로
        // b = c; b에 c값(a의값)을 넣으면 결과적으로 서로의 값이 바뀌는게됨.
        bigThum.children[0].setAttribute('src', SrcSave.smallThumSrc);
        smallThum.children[0].setAttribute('src', SrcSave.ThumSaveSrc);
        //this.arrayRelocation(bigThum, smallThum);
    } */
/*     arrayRelocation: function (array, changeNode, changedNode) {
        //내가 바꿀 노드의 인덱스 번호를 파악한다.
        //해당 인덱스 번호를 splice로 제거한다.
        //splice로 추출한 값을 저장해둔다.
        //그 값을 unshift에 넣는다. 
        //0번쨰에 있는 값을 파악한다.
        //그 값을 저장해두고 위치를 바꿀 인덱스에 넣는다.
        let arrayChange = Array.from(array);
        

    } */

03

//인디케이터 번호 구현 실패

/* function locateSearchRepeat() {
    for (let i = 0; i < visualMainLi.length; i++) {
        //getBoundingClientRect 뷰포트를 기준으로, 들어오는 컨텐츠의 왼쪽변을 기준으로 계산한다.
        let visualLocate = visualMainLi[i].getBoundingClientRect();
        console.log(visualLocate);
        if (visualLocate.left === 0 && visualLocate.right <= window.innerWidth) {
            switch (i) {
                case 0:
                case 4:
                case 8: {
                    indiCatorClass(0);
                    console.log(visualMainLi[i]);
                    break;
                }
                case 1:
                case 5:
                case 9: {
                    indiCatorClass(1);
                    console.log(visualMainLi[i]);
                    break;
                }
                case 2:
                case 6: {
                    indiCatorClass(2);
                    console.log(visualMainLi[i]);
                    break;
                }
                case 3:
                case 7: {
                    indiCatorClass(3);
                    console.log(visualMainLi[i]);
                    break;
                }
                default:
                    break;
            }
        }
    }
}

function indiCatorClass(index) {
    for (let i = 0; i < visualIndiCator.length; i++) {
        removeClass(visualIndiCator[i], 'visual_page_on');
    }
    addClass(visualIndiCator[index], 'visual_page_on');
}
 */




/* //자켓 활성화에 0~50000을눌렀을경우
if (topMenuStateObject.jaketState && ChkBox[i].checked) {
    let returnArray01 = checkArray(sub_page_product_list, `productStyle`, `jaket`);
    let returnArray02 = priceCheckArray(returnArray01, `price`, 0, 50000);
    listCreate(returnArray02);
    pageCreate(returnArray02);
} else if (topMenuStateObject.jaketState && !ChkBox[i].checked) {
    let returnArray01 = checkArray(sub_page_product_list, `productStyle`, `jaket`);
    listCreate(returnArray01);
    pageCreate(returnArray01);
}

//스웨터활성화에 0~50000을눌렀을경우
if (topMenuStateObject.sweaterState && ChkBox[i].checked) {
    let returnArray01 = checkArray(sub_page_product_list, `productStyle`, `sweater`);
    let returnArray02 = priceCheckArray(returnArray01, `price`, 0, 50000);
    listCreate(returnArray02);
    pageCreate(returnArray02);
} else if (topMenuStateObject.sweaterState && !ChkBox[i].checked) {
    let returnArray01 = checkArray(sub_page_product_list, `productStyle`, `sweater`);
    listCreate(returnArray01);
    pageCreate(returnArray01);
}

//니트활성화에 0~50000을 눌렀을경우 
if (topMenuStateObject.neatState && ChkBox[i].checked) {
    let returnArray01 = checkArray(sub_page_product_list, `productStyle`, `neat`);
    let returnArray02 = priceCheckArray(returnArray01, `price`, 0, 50000);
    listCreate(returnArray02);
    pageCreate(returnArray02);
} else if (topMenuStateObject.neatState && !ChkBox[i].checked) {
    let returnArray01 = checkArray(sub_page_product_list, `productStyle`, `neat`);
    listCreate(returnArray01);
    pageCreate(returnArray01);
}

//셔츠활성화에 0~50000을 눌렀을경우 
if (topMenuStateObject.shirtState && ChkBox[i].checked) {
    let returnArray01 = checkArray(sub_page_product_list, `productStyle`, `shirt`);
    let returnArray02 = priceCheckArray(returnArray01, `price`, 0, 50000);
    listCreate(returnArray02);
    pageCreate(returnArray02);
} else if (topMenuStateObject.shirtState && !ChkBox[i].checked) {
    let returnArray01 = checkArray(sub_page_product_list, `productStyle`, `shirt`);
    listCreate(returnArray01);
    pageCreate(returnArray01);
}

//티셔츠 활성화에 0~50000을 눌렀을경우 
if (topMenuStateObject.TShirtState && ChkBox[i].checked) {
    let returnArray01 = checkArray(sub_page_product_list, `productStyle`, `TShirt`);
    let returnArray02 = priceCheckArray(returnArray01, `price`, 0, 50000);
    listCreate(returnArray02);
    pageCreate(returnArray02);
} else if (topMenuStateObject.TShirtState && !ChkBox[i].checked) {
    let returnArray01 = checkArray(sub_page_product_list, `productStyle`, `TShirt`);
    listCreate(returnArray01);
    pageCreate(returnArray01);
} */






function priceCheck(i, state, style, price01, price02) {
    let returnArray01 = checkArray(sub_page_product_list, `productStyle`, style);
    if (state && ChkBox[i].checked) {
        let returnArray02 = pricechkRetrunArray(returnArray01, `price`, price01, price02);
        console.log(returnArray02);
        listCreate(returnArray02);
        pageCreate(returnArray02);
    } else if (state && !ChkBox[i].checked) {
        listCreate(returnArray01);
        pageCreate(returnArray01);
    }
}


 //함수 재활용을 위해 매개변수로 전달할수없는 조건을 미리 거르기.
 if (topMenuStateObject.jaketState && ChkBox[i].checked) {
    priceSaleCheck01(`jaket`, `price`, 150000, 250000);
} else if (!ChkBox[i].checked) {
    priceSaleCheck02(`jaket`);
}

if (topMenuStateObject.sweaterState && ChkBox[i].checked) {
    priceSaleCheck01(`sweater`, `price`, 150000, 250000);
} else if (!ChkBox[i].checked) {
    priceSaleCheck02(`sweater`);
}

if (topMenuStateObject.neatState && ChkBox[i].checked) {
    priceSaleCheck01(`neat`, `price`, 150000, 250000);
} else if (!ChkBox[i].checked) {
    priceSaleCheck02(`neat`);
}

if (topMenuStateObject.shirtState && ChkBox[i].checked) {
    priceSaleCheck01(`shirt`, `price`, 150000, 250000);
} else if (!ChkBox[i].checked) {
    priceSaleCheck02(`shirt`);
}

if (topMenuStateObject.TShirtState && ChkBox[i].checked) {
    priceSaleCheck01(`TShirt`, `price`, 150000, 250000);
} else if (!ChkBox[i].checked) {
    priceSaleCheck02(`TShirt`);
}

function priceSaleCheck02(style) {
    let returnArray01 = checkArray(sub_page_product_list, `productStyle`, style);
    listCreate(returnArray01);
    pageCreate(returnArray01);
}





function menuchecks01(i) {
    switch (i) {
        case 0: {
            //버튼 상태변수 전부 초기화
            stateObjectReset(topMenuStateObject);
            //내가 클릭한것만 상태 true
            topMenuStateObject.allstate = true;

            if(priceStateObject.costRange050000 && topMenuStateObject.allstate) {
                priceSaleCheck01(topMenuStateObject.allstate, priceStateObject.costRange050000, `price`, `jaket`, 0, 50000);
            }
            if(priceStateObject.costRange50000150000 && topMenuStateObject.allstate) {
                priceSaleCheck01(topMenuStateObject.allstate, priceStateObject.costRange50000150000, `price`, `jaket`, 50000, 150000);
            }
            if(priceStateObject.costRange150000250000 && topMenuStateObject.allstate) {
                priceSaleCheck01(topMenuStateObject.allstate, priceStateObject.costRange150000250000, `price`, `jaket`, 150000, 250000);
            }
            if(priceStateObject.costRange250000500000 && topMenuStateObject.allstate) {
                priceSaleCheck01(topMenuStateObject.allstate, priceStateObject.costRange250000500000, `price`, `jaket`, 250000, 500000);
            }
            if(priceStateObject.costRange500000 && topMenuStateObject.allstate) {
                priceSaleCheck01(topMenuStateObject.allstate, priceStateObject.costRange500000, `price`, `jaket`, 500000);
            }
            

            break;
        }
        case 1: {
            stateObjectReset(topMenuStateObject);
            topMenuStateObject.jaketState = true;

            //console.log(topMenuStateObject.jaketState, priceStateObject.costRange050000);
            //원본 배열에서 해당 속성 조건을 만족하는 배열 복사
            //해당 배열을 기반으로 동적 페이지 생성/ 컨트롤
            let returnArray = checkArray(sub_page_product_list, `productStyle`, `jaket`);
            listCreate(returnArray);
            pageCreate(returnArray);

            if(priceStateObject.costRange050000 && topMenuStateObject.jaketState) {
                priceSaleCheck01(topMenuStateObject.jaketState, priceStateObject.costRange050000, `price`, `jaket`, 0, 50000);
            }
            if(priceStateObject.costRange50000150000 && topMenuStateObject.jaketState) {
                priceSaleCheck01(topMenuStateObject.jaketState, priceStateObject.costRange50000150000, `price`, `jaket`, 50000, 150000);
            }
            if(priceStateObject.costRange150000250000 && topMenuStateObject.jaketState) {
                priceSaleCheck01(topMenuStateObject.jaketState, priceStateObject.costRange150000250000, `price`, `jaket`, 150000, 250000);
            }
            if(priceStateObject.costRange250000500000 && topMenuStateObject.jaketState) {
                priceSaleCheck01(topMenuStateObject.jaketState, priceStateObject.costRange250000500000, `price`, `jaket`, 250000, 500000);
            }
            if(priceStateObject.costRange500000 && topMenuStateObject.jaketState) {
                priceSaleCheck01(topMenuStateObject.jaketState, priceStateObject.costRange500000, `price`, `jaket`, 500000);
            }

            break;
        }
        case 2: {
            stateObjectReset(topMenuStateObject);
            topMenuStateObject.sweaterState = true;

            let returnArray = checkArray(sub_page_product_list, `productStyle`, `sweater`);
            listCreate(returnArray);
            pageCreate(returnArray);

            if(priceStateObject.costRange050000 && topMenuStateObject.sweaterState) {
                priceSaleCheck01(topMenuStateObject.sweaterState, priceStateObject.costRange050000, `price`, `sweater`, 0, 50000);
            }
            if(priceStateObject.costRange50000150000 && topMenuStateObject.sweaterState) {
                priceSaleCheck01(topMenuStateObject.sweaterState, priceStateObject.costRange50000150000, `price`, `sweater`, 50000, 150000);
            }
            if(priceStateObject.costRange150000250000 && topMenuStateObject.sweaterState) {
                priceSaleCheck01(topMenuStateObject.sweaterState, priceStateObject.costRange150000250000, `price`, `sweater`, 150000, 250000);
            }
            if(priceStateObject.costRange250000500000 && topMenuStateObject.sweaterState) {
                priceSaleCheck01(topMenuStateObject.sweaterState, priceStateObject.costRange250000500000, `price`, `sweater`, 250000, 500000);
            }
            if(priceStateObject.costRange500000 && topMenuStateObject.sweaterState) {
                priceSaleCheck01(topMenuStateObject.sweaterState, priceStateObject.costRange500000, `price`, `sweater`, 500000);
            }

            break;
        }
        case 3: {
            stateObjectReset(topMenuStateObject);
            topMenuStateObject.neatState = true;

            let returnArray = checkArray(sub_page_product_list, `productStyle`, `neat`);
            listCreate(returnArray);
            pageCreate(returnArray);

            priceSaleCheck01(topMenuStateObject.neatState, priceStateObject.costRange050000, `price`, `neat`, 0, 50000);

            priceSaleCheck01(topMenuStateObject.neatState, priceStateObject.costRange50000150000, `price`, `neat`, 50000, 150000);

            priceSaleCheck01(topMenuStateObject.neatState, priceStateObject.costRange150000250000, `price`, `neat`, 150000, 250000);

            priceSaleCheck01(topMenuStateObject.neatState, priceStateObject.costRange250000500000, `price`, `neat`, 250000, 500000);

            priceSaleCheck01(topMenuStateObject.neatState, priceStateObject.costRange500000, `price`, `neat`, 500000);

            break;
        }
        case 4: {
            stateObjectReset(topMenuStateObject);
            topMenuStateObject.shirtState = true;

            let returnArray = checkArray(sub_page_product_list, `productStyle`, `shirt`);
            listCreate(returnArray);
            pageCreate(returnArray);

            priceSaleCheck01(topMenuStateObject.shirtState, priceStateObject.costRange050000, `price`, `shirt`, 0, 50000);

            priceSaleCheck01(topMenuStateObject.shirtState, priceStateObject.costRange50000150000, `price`, `shirt`, 50000, 150000);

            priceSaleCheck01(topMenuStateObject.shirtState, priceStateObject.costRange150000250000, `price`, `shirt`, 150000, 250000);

            priceSaleCheck01(topMenuStateObject.shirtState, priceStateObject.costRange250000500000, `price`, `shirt`, 250000, 500000);

            priceSaleCheck01(topMenuStateObject.shirtState, priceStateObject.costRange500000, `price`, `shirt`, 500000);

            break;
        }
        case 5: {
            stateObjectReset(topMenuStateObject);
            topMenuStateObject.TShirtState = true;

            let returnArray = checkArray(sub_page_product_list, `productStyle`, `TShirt`);
            listCreate(returnArray);
            pageCreate(returnArray);

            priceSaleCheck01(topMenuStateObject.TShirtState, priceStateObject.costRange050000, `price`, `TShirt`, 0, 50000);

            priceSaleCheck01(topMenuStateObject.TShirtState, priceStateObject.costRange50000150000, `price`, `TShirt`, 50000, 150000);

            priceSaleCheck01(topMenuStateObject.TShirtState, priceStateObject.costRange150000250000, `price`, `TShirt`, 150000, 250000);

            priceSaleCheck01(topMenuStateObject.TShirtState, priceStateObject.costRange250000500000, `price`, `TShirt`, 250000, 500000);

            priceSaleCheck01(topMenuStateObject.TShirtState, priceStateObject.costRange500000, `price`, `TShirt`, 500000);

            break;
        }
    }
}


/*************** filter_chkbox ******************/
const ChkBox = document.querySelectorAll('input');

for (let i = 0; i < ChkBox.length; i++) {
    ChkBox[i].addEventListener('click', () => {
        if (!ChkBox[i].checked) {
            ChkBox[i].checked = false;
        } else {
            for (let j = 0; j < ChkBox.length; j++) {
                ChkBox[j].checked = false;
            }
            ChkBox[i].checked = true;
        }
        menucheck02(i);

        //ChkBox[i].checked = true;, 클릭한 부분을 무조건 true로 바꾸고, 나머진 다 해제
        //하지만 위의 명령어 때문에 체크된 박스를 한번더 클릭했을때 해제가 안됨
        //따라서 클릭한 체크부분을 한번 더 클릭했을대 체크를 해제해주는 기능 필요
        //클릭되어잇는 체크박스를 한번더 클릭했다 == cheked가 false라는뜻과 같다.
        //왜냐면 체크박스에 클릭이벤트를걸면 상태가 변화가 된 이후에 실행이 되기 떄문에
        //따라서 if문과 else로 명령어를 처리해주어야 한다.
        //클릭했을때 클릭되어있는 놈이 상태가 false라면, 즉 클릭되어있는놈을 한번 더 클릭했다면 
        //상태를 false로 만들어라, (반복문으로 내가 클릭한놈을 true로 만드는 명령어를 써놨기 때문에 위와 같이 강제로 false로 만들어줘야한다.)
        //그리고 else, 즉 박스가 체크가 안되어있다면 내가 클릭한 놈만 true로 해라 
        //이런식으로 명령어를 구성하면 된다.

        //console.log(ChkBox[i].checked);
    });
}

function menucheck02(i) {
    switch (i) {
        case 0: {
            if(ChkBox[i].checked) {
                //top밑의 옷 스타일 메뉴들은 false가되는경우가 없기 때문에 따로 조건문을 짜지 않아도 됐지만, 얘내들은 input이라 false가되는경우도 있기 때문에 그거에 맞게 조건문을 짜준다.
                
                //내가 클릭한것만 true가 되게
                //상태를 기반으로 조건을 체크하기 떄문에, 내가 클릭했을때 즉 체크드가 트루일때는 객체상태를 전부 false돌려주고, 내가 클릭한 상태 속성만 true
                stateObjectReset(priceStateObject);
                priceStateObject.costRange050000 = true;
            } else {
                //그게 아닐 경우는 false가 됐다는말이기때문에 객체 속성을 전부 false로 돌려준다.
                stateObjectReset(priceStateObject);
            }

            //all활성화에 0~50000을눌렀을경우
            if (topMenuStateObject.allstate && priceStateObject.costRange050000) {
                let returnArray01 = pricechkRetrunArray(sub_page_product_list, `price`, 0, 50000);
                listCreate(returnArray01);
                pageCreate(returnArray01);
            } else if (topMenuStateObject.allstate && !priceStateObject.costRange050000) {
                console.log(priceStateObject.costRange050000);
                listCreate(sub_page_product_list);
                pageCreate(sub_page_product_list);
            }

            priceSaleCheck01(topMenuStateObject.jaketState, priceStateObject.costRange050000, `price`, `jaket`, 0, 50000);

            priceSaleCheck01(topMenuStateObject.sweaterState, priceStateObject.costRange050000, `price`, `sweater`, 0, 50000);

            priceSaleCheck01(topMenuStateObject.neatState, priceStateObject.costRange050000, `price`, `neat`, 0, 50000);

            priceSaleCheck01(topMenuStateObject.shirtState, priceStateObject.costRange050000, `price`, `shirt`, 0, 50000);

            priceSaleCheck01(topMenuStateObject.TShirtState, priceStateObject.costRange050000, `price`, `TShirt`, 0, 50000);

            break;
        }

        case 1: {
            if(ChkBox[i].checked) {
                stateObjectReset(priceStateObject);
                priceStateObject.costRange50000150000 = true;
            } else {
                stateObjectReset(priceStateObject);
            }

            //all활성화에 50000~150000을눌렀을경우
            if (topMenuStateObject.allstate && priceStateObject.costRange50000150000) {
                let returnArray01 = pricechkRetrunArray(sub_page_product_list, `price`, 50000, 150000);
                listCreate(returnArray01);
                pageCreate(returnArray01);
            } else if (topMenuStateObject.allstate && !priceStateObject.costRange50000150000) {
                listCreate(sub_page_product_list);
                pageCreate(sub_page_product_list);
            }

            priceSaleCheck01(topMenuStateObject.jaketState, priceStateObject.costRange50000150000, `price`, `jaket`, 50000, 150000);

            priceSaleCheck01(topMenuStateObject.sweaterState, priceStateObject.costRange50000150000, `price`, `sweater`, 50000, 150000);

            priceSaleCheck01(topMenuStateObject.neatState, priceStateObject.costRange50000150000, `price`, `neat`, 50000, 150000);

            priceSaleCheck01(topMenuStateObject.shirtState, priceStateObject.costRange50000150000, `price`, `shirt`, 50000, 150000);

            priceSaleCheck01(topMenuStateObject.TShirtState, priceStateObject.costRange50000150000, `price`, `TShirt`, 50000, 150000);

            break;
        }

        case 2: {
            if(ChkBox[i].checked) {
                stateObjectReset(priceStateObject);
                priceStateObject.costRange150000250000 = true;
            } else {
                stateObjectReset(priceStateObject);
            }

            if (topMenuStateObject.allstate && priceStateObject.costRange150000250000) {
                let returnArray01 = pricechkRetrunArray(sub_page_product_list, `price`, 150000, 250000);
                listCreate(returnArray01);
                pageCreate(returnArray01);
            } else if (topMenuStateObject.allstate && !priceStateObject.costRange150000250000) {
                console.log(priceStateObject.costRange150000250000);
                listCreate(sub_page_product_list);
                pageCreate(sub_page_product_list);
            }

            priceSaleCheck01(topMenuStateObject.jaketState, priceStateObject.costRange150000250000, `price`, `jaket`, 150000, 250000);

            priceSaleCheck01(topMenuStateObject.sweaterState, priceStateObject.costRange150000250000, `price`, `sweater`, 150000, 250000);

            priceSaleCheck01(topMenuStateObject.neatState, priceStateObject.costRange150000250000, `price`, `neat`, 150000, 250000);

            priceSaleCheck01(topMenuStateObject.shirtState, priceStateObject.costRange150000250000, `price`, `shirt`, 150000, 250000);

            priceSaleCheck01(topMenuStateObject.TShirtState, priceStateObject.costRange150000250000, `price`, `TShirt`, 150000, 250000);

            break;
        }

        case 3: {
            if(ChkBox[i].checked) {
                stateObjectReset(priceStateObject);
                priceStateObject.costRange250000500000 = true;
            } else {
                stateObjectReset(priceStateObject);
            }

            if (topMenuStateObject.allstate && priceStateObject.costRange250000500000) {
                let returnArray01 = pricechkRetrunArray(sub_page_product_list, `price`, 250000, 500000);
                listCreate(returnArray01);
                pageCreate(returnArray01);
            } else if (topMenuStateObject.allstate && !priceStateObject.costRange250000500000) {
                listCreate(sub_page_product_list);
                pageCreate(sub_page_product_list);
            }

            priceSaleCheck01(topMenuStateObject.jaketState, priceStateObject.costRange250000500000, `price`, `jaket`, 250000, 500000);

            priceSaleCheck01(topMenuStateObject.sweaterState, priceStateObject.costRange250000500000, `price`, `sweater`, 250000, 500000);

            priceSaleCheck01(topMenuStateObject.neatState, priceStateObject.costRange250000500000, `price`, `neat`, 250000, 500000);

            priceSaleCheck01(topMenuStateObject.shirtState, priceStateObject.costRange250000500000, `price`, `shirt`, 250000, 500000);

            priceSaleCheck01(topMenuStateObject.TShirtState, priceStateObject.costRange250000500000, `price`, `TShirt`, 250000, 500000);

            break;
        }

        case 4: {
            if(ChkBox[i].checked) {
                stateObjectReset(priceStateObject);
                priceStateObject.costRange500000 = true;
            } else {
                stateObjectReset(priceStateObject);
            }

            //all활성화에 500000~을눌렀을경우
            if (topMenuStateObject.allstate && priceStateObject.costRange500000) {
                let returnArray01 = pricechkRetrunArray(sub_page_product_list, `price`, 500000);
                listCreate(returnArray01);
                pageCreate(returnArray01);
            } else if (topMenuStateObject.allstate && !priceStateObject.costRange500000) {
                listCreate(sub_page_product_list);
                pageCreate(sub_page_product_list);
            }

            priceSaleCheck01(topMenuStateObject.jaketState, priceStateObject.costRange500000, `price`, `jaket`,500000);

            priceSaleCheck01(topMenuStateObject.sweaterState, priceStateObject.costRange500000, `price`, `sweater`, 500000);

            priceSaleCheck01(topMenuStateObject.neatState, priceStateObject.costRange500000, `price`, `neat`, 500000);

            priceSaleCheck01(topMenuStateObject.shirtState, priceStateObject.costRange500000, `price`, `shirt`, 500000);

            priceSaleCheck01(topMenuStateObject.TShirtState, priceStateObject.costRange500000, `price`, `TShirt`, 500000);

            break;
        }
    }
}

function priceSaleCheck01(state01, state02, property = 0, style, price01, price02 = 99999999) {
    let returnArray01 = checkArray(sub_page_product_list, `productStyle`, style);
    if (state01 && state02) {
        let returnArray02 = pricechkRetrunArray(returnArray01, property, price01, price02);
        listCreate(returnArray02);
        pageCreate(returnArray02);
        //console.log(returnArray02);
    } else if (state01 && !state02 || state01 === topMenuStateObject.allstate) {
        listCreate(returnArray01);
        pageCreate(returnArray01);
    }
}



function menuchecks01(i) {
    switch (i) {
        case 0: {
            let CurrentMenuState = topMenuStateObject.allstate;

            //버튼 상태변수 전부 초기화
            stateObjectReset(topMenuStateObject);
            //내가 클릭한것만 상태 true
            CurrentMenuState = true;

            listnPageCreate(sub_page_product_list);

            if (CurrentMenuState && priceStateObject.costRange050000) {
                priceSaleCheck01(`price`, 0, 50000);
            } else if (CurrentMenuState && !priceStateObject.costRange050000) {
                listnPageCreate(sub_page_product_list);
            }

            if (CurrentMenuState && priceStateObject.costRange50000150000) {
                priceSaleCheck01(`price`, 50000, 150000);
            } else if (CurrentMenuState && !priceStateObject.costRange50000150000) {
                listnPageCreate(sub_page_product_list);
            }

            if (CurrentMenuState && priceStateObject.costRange150000250000) {
                priceSaleCheck01(`price`, 150000, 250000);
            } else if (CurrentMenuState && !priceStateObject.costRange150000250000) {
                listnPageCreate(sub_page_product_list);
            }

            if (CurrentMenuState && priceStateObject.costRange250000500000) {
                priceSaleCheck01(`price`, 250000, 500000);
            } else if (CurrentMenuState && !priceStateObject.costRange250000500000) {
                priceSaleCheck02();
            }

            if (CurrentMenuState && priceStateObject.costRange500000) {
                priceSaleCheck01(`price`, 500000);
            } else if (CurrentMenuState && !priceStateObject.costRange500000) {
                priceSaleCheck02();
            }

            break;
        }
        case 1: {
            let CurrentMenuState = topMenuStateObject.jaketState;

            stateObjectReset(topMenuStateObject);
            CurrentMenuState = true;

            //console.log(topMenuStateObject.jaketState, priceStateObject.costRange050000);
            //원본 배열에서 해당 속성 조건을 만족하는 배열 복사
            //해당 배열을 기반으로 동적 페이지 생성/ 컨트롤
            let returnArray = checkArray(sub_page_product_list, `productStyle`, `jaket`);
            listCreate(returnArray);
            pageCreate(returnArray);

            if (CurrentMenuState && priceStateObject.costRange050000) {
                priceSaleCheck01(`price`, 0, 50000);
            } else if (CurrentMenuState && !priceStateObject.costRange050000) {
                priceSaleCheck02();
            }

            if (CurrentMenuState && priceStateObject.costRange50000150000) {
                priceSaleCheck01(`price`, 50000, 150000);
            } else if (CurrentMenuState && !priceStateObject.costRange50000150000) {
                priceSaleCheck02();
            }

            if (CurrentMenuState && priceStateObject.costRange150000250000) {
                priceSaleCheck01(`price`, 150000, 250000);
            } else if (CurrentMenuState && !priceStateObject.costRange150000250000) {
                priceSaleCheck02();
            }

            if (CurrentMenuState && priceStateObject.costRange250000500000) {
                priceSaleCheck01(`price`, 250000, 500000);
            } else if (CurrentMenuState && !priceStateObject.costRange250000500000) {
                priceSaleCheck02();
            }

            if (CurrentMenuState && priceStateObject.costRange500000) {
                priceSaleCheck01(`price`, 500000);
            } else if (CurrentMenuState && !priceStateObject.costRange500000) {
                priceSaleCheck02();
            }

            break;
        }
        case 2: {
            let CurrentMenuState = topMenuStateObject.sweaterState;

            stateObjectReset(topMenuStateObject);
            CurrentMenuState = true;

            let returnArray = checkArray(sub_page_product_list, `productStyle`, `sweater`);
            listCreate(returnArray);
            pageCreate(returnArray);

            if (CurrentMenuState && priceStateObject.costRange050000) {
                priceSaleCheck01(`price`, 0, 50000);
            } else if (CurrentMenuState && !priceStateObject.costRange050000) {
                priceSaleCheck02();
            }

            if (CurrentMenuState && priceStateObject.costRange50000150000) {
                priceSaleCheck01(`price`, 50000, 150000);
            } else if (CurrentMenuState && !priceStateObject.costRange50000150000) {
                priceSaleCheck02();
            }

            if (CurrentMenuState && priceStateObject.costRange150000250000) {
                priceSaleCheck01(`price`, 150000, 250000);
            } else if (CurrentMenuState && !priceStateObject.costRange150000250000) {
                priceSaleCheck02();
            }

            if (CurrentMenuState && priceStateObject.costRange250000500000) {
                priceSaleCheck01(`price`, 250000, 500000);
            } else if (CurrentMenuState && !priceStateObject.costRange250000500000) {
                priceSaleCheck02();
            }

            if (CurrentMenuState && priceStateObject.costRange500000) {
                priceSaleCheck01(`price`, 500000);
            } else if (CurrentMenuState && !priceStateObject.costRange500000) {
                priceSaleCheck02();
            }

            break;
        }
        case 3: {
            let CurrentMenuState = topMenuStateObject.neatState;

            stateObjectReset(topMenuStateObject);
            CurrentMenuState = true;

            let returnArray = checkArray(sub_page_product_list, `productStyle`, `neat`);
            listCreate(returnArray);
            pageCreate(returnArray);

            if (CurrentMenuState && priceStateObject.costRange050000) {
                priceSaleCheck01(`price`, 0, 50000);
            } else if (CurrentMenuState && !priceStateObject.costRange050000) {
                priceSaleCheck02();
            }

            if (CurrentMenuState && priceStateObject.costRange50000150000) {
                priceSaleCheck01(`price`, 50000, 150000);
            } else if (CurrentMenuState && !priceStateObject.costRange50000150000) {
                priceSaleCheck02();
            }

            if (CurrentMenuState && priceStateObject.costRange150000250000) {
                priceSaleCheck01(`price`, 150000, 250000);
            } else if (CurrentMenuState && !priceStateObject.costRange150000250000) {
                priceSaleCheck02();
            }

            if (CurrentMenuState && priceStateObject.costRange250000500000) {
                priceSaleCheck01(`price`, 250000, 500000);
            } else if (CurrentMenuState && !priceStateObject.costRange250000500000) {
                priceSaleCheck02();
            }

            if (CurrentMenuState && priceStateObject.costRange500000) {
                priceSaleCheck01(`price`, 500000);
            } else if (CurrentMenuState && !priceStateObject.costRange500000) {
                priceSaleCheck02();
            }

            break;
        }
        case 4: {
            let CurrentMenuState = topMenuStateObject.shirtState;

            stateObjectReset(topMenuStateObject);
            CurrentMenuState = true;

            let returnArray = checkArray(sub_page_product_list, `productStyle`, `shirt`);
            listCreate(returnArray);
            pageCreate(returnArray);

            if (CurrentMenuState && priceStateObject.costRange050000) {
                priceSaleCheck01(`price`, 0, 50000);
            } else if (CurrentMenuState && !priceStateObject.costRange050000) {
                priceSaleCheck02();
            }

            if (CurrentMenuState && priceStateObject.costRange50000150000) {
                priceSaleCheck01(`price`, 50000, 150000);
            } else if (CurrentMenuState && !priceStateObject.costRange50000150000) {
                priceSaleCheck02();
            }

            if (CurrentMenuState && priceStateObject.costRange150000250000) {
                priceSaleCheck01(`price`, 150000, 250000);
            } else if (CurrentMenuState && !priceStateObject.costRange150000250000) {
                priceSaleCheck02();
            }

            if (CurrentMenuState && priceStateObject.costRange250000500000) {
                priceSaleCheck01(`price`, 250000, 500000);
            } else if (CurrentMenuState && !priceStateObject.costRange250000500000) {
                priceSaleCheck02();
            }

            if (CurrentMenuState && priceStateObject.costRange500000) {
                priceSaleCheck01(`price`, 500000);
            } else if (CurrentMenuState && !priceStateObject.costRange500000) {
                priceSaleCheck02();
            }

            break;
        }
        case 5: {
            let CurrentMenuState = topMenuStateObject.TShirtState;

            stateObjectReset(topMenuStateObject);
            CurrentMenuState = true;

            let returnArray = checkArray(sub_page_product_list, `productStyle`, `TShirt`);
            listCreate(returnArray);
            pageCreate(returnArray);

            if (CurrentMenuState && priceStateObject.costRange050000) {
                priceSaleCheck01(`price`, 0, 50000);
            } else if (CurrentMenuState && !priceStateObject.costRange050000) {
                priceSaleCheck02();
            }

            if (CurrentMenuState && priceStateObject.costRange50000150000) {
                priceSaleCheck01(`price`, 50000, 150000);
            } else if (CurrentMenuState && !priceStateObject.costRange50000150000) {
                priceSaleCheck02();
            }

            if (CurrentMenuState && priceStateObject.costRange150000250000) {
                priceSaleCheck01(`price`, 150000, 250000);
            } else if (CurrentMenuState && !priceStateObject.costRange150000250000) {
                priceSaleCheck02();
            }

            if (CurrentMenuState && priceStateObject.costRange250000500000) {
                priceSaleCheck01(`price`, 250000, 500000);
            } else if (CurrentMenuState && !priceStateObject.costRange250000500000) {
                priceSaleCheck02();
            }

            if (CurrentMenuState && priceStateObject.costRange500000) {
                priceSaleCheck01(`price`, 500000);
            } else if (CurrentMenuState && !priceStateObject.costRange500000) {
                priceSaleCheck02();
            }

            break;
        }
    }
}


/*************** filter_chkbox ******************/
const ChkBox = document.querySelectorAll('input');

for (let i = 0; i < ChkBox.length; i++) {
    ChkBox[i].addEventListener('click', () => {
        if (!ChkBox[i].checked) {
            ChkBox[i].checked = false;
        } else {
            for (let j = 0; j < ChkBox.length; j++) {
                ChkBox[j].checked = false;
            }
            ChkBox[i].checked = true;
        }
        menucheck02(i);

        //ChkBox[i].checked = true;, 클릭한 부분을 무조건 true로 바꾸고, 나머진 다 해제
        //하지만 위의 명령어 때문에 체크된 박스를 한번더 클릭했을때 해제가 안됨
        //따라서 클릭한 체크부분을 한번 더 클릭했을대 체크를 해제해주는 기능 필요
        //클릭되어잇는 체크박스를 한번더 클릭했다 == cheked가 false라는뜻과 같다.
        //왜냐면 체크박스에 클릭이벤트를걸면 상태가 변화가 된 이후에 실행이 되기 떄문에
        //따라서 if문과 else로 명령어를 처리해주어야 한다.
        //클릭했을때 클릭되어있는 놈이 상태가 false라면, 즉 클릭되어있는놈을 한번 더 클릭했다면 
        //상태를 false로 만들어라, (반복문으로 내가 클릭한놈을 true로 만드는 명령어를 써놨기 때문에 위와 같이 강제로 false로 만들어줘야한다.)
        //그리고 else, 즉 박스가 체크가 안되어있다면 내가 클릭한 놈만 true로 해라 
        //이런식으로 명령어를 구성하면 된다.

        //console.log(ChkBox[i].checked);
    });
}

function menucheck02(i) {
    switch (i) {
        case 0: {
            let CurrentPriceState = priceStateObject.costRange050000;

            if (ChkBox[i].checked) {
                //내가 클릭한것만 true가 되게
                //상태를 기반으로 조건을 체크하기 떄문에, 내가 클릭했을때 즉 체크드가 트루일때는 객체상태를 전부 false돌려주고, 내가 클릭한 상태 속성만 true
                stateObjectReset(priceStateObject);
                CurrentPriceState = true;
            } else {
                //그게 아닐 경우는 false가 됐다는말이기때문에 객체 속성을 전부 false로 돌려준다.
                stateObjectReset(priceStateObject);
            }

            //all활성화에 0~50000을눌렀을경우
            if (topMenuStateObject.allstate && CurrentPriceState) {
                priceSaleCheck01(`price`, 0, 50000);
            } else if (topMenuStateObject.allstate && !CurrentPriceState) {
                priceSaleCheck02();
            }

            //함수 재활용을 위해 매개변수로 전달할수없는 조건을 미리 거르기.
            //각 탭이 활성화 된 상태에서 0만~5만체크박스를 클릭 했을때
            if (topMenuStateObject.jaketState && CurrentPriceState) {
                priceSaleCheck01(`jaket`, `price`, 0, 50000);
            } else if (topMenuStateObject.jaketState && !CurrentPriceState) {
                priceSaleCheck02(`jaket`);
            }

            if (topMenuStateObject.sweaterState && CurrentPriceState) {
                priceSaleCheck01(`sweater`, `price`, 0, 50000);
            } else if (topMenuStateObject.sweaterState && !CurrentPriceState) {
                priceSaleCheck02(`sweater`);
            }

            if (topMenuStateObject.neatState && CurrentPriceState) {
                priceSaleCheck01(`neat`, `price`, 0, 50000);
            } else if (topMenuStateObject.neatState && !CurrentPriceState) {
                priceSaleCheck02(`neat`);
            }

            if (topMenuStateObject.shirtState && CurrentPriceState) {
                priceSaleCheck01(`shirt`, `price`, 0, 50000);
            } else if (topMenuStateObject.shirtState && !CurrentPriceState) {
                priceSaleCheck02(`shirt`);
            }

            if (topMenuStateObject.TShirtState && CurrentPriceState) {
                priceSaleCheck01(`TShirt`, `price`, 0, 50000);
            } else if (topMenuStateObject.TShirtState && !CurrentPriceState) {
                priceSaleCheck02(`TShirt`);
            }
            break;
        }

        case 1: {
            let CurrentPriceState = priceStateObject.costRange50000150000;

            if (ChkBox[i].checked) {
                stateObjectReset(priceStateObject);
                CurrentPriceState = true;
            } else {
                stateObjectReset(priceStateObject);
            }

            if (topMenuStateObject.allstate && CurrentPriceState) {
                priceSaleCheck01(`price`, 50000, 150000);
            } else if (topMenuStateObject.allstate && !CurrentPriceState) {
                priceSaleCheck02();
            }

            //함수 재활용을 위해 매개변수로 전달할수없는 조건을 미리 거르기.
            //각 탭이 활성화 된 상태에서 5만~15만체크박스를 클릭 했을때
            if (topMenuStateObject.jaketState && CurrentPriceState) {
                priceSaleCheck01(`jaket`, `price`, 50000, 150000);
            } else if (topMenuStateObject.jaketState && !CurrentPriceState) {
                priceSaleCheck02(`jaket`);
            }

            if (topMenuStateObject.sweaterState && CurrentPriceState) {
                priceSaleCheck01(`sweater`, `price`, 50000, 150000);
            } else if (topMenuStateObject.sweaterState && !CurrentPriceState) {
                priceSaleCheck02(`sweater`);
            }

            if (topMenuStateObject.neatState && CurrentPriceState) {
                priceSaleCheck01(`neat`, `price`, 50000, 150000);
            } else if (topMenuStateObject.neatState && !CurrentPriceState) {
                priceSaleCheck02(`neat`);
            }

            if (topMenuStateObject.shirtState && CurrentPriceState) {
                priceSaleCheck01(`shirt`, `price`, 50000, 150000);
            } else if (topMenuStateObject.shirtState && !CurrentPriceState) {
                priceSaleCheck02(`shirt`);
            }

            if (topMenuStateObject.TShirtState && CurrentPriceState) {
                priceSaleCheck01(`TShirt`, `price`, 50000, 150000);
            } else if (topMenuStateObject.TShirtState && !CurrentPriceState) {
                priceSaleCheck02(`TShirt`);
            }

            break;
        }

        case 2: {
            let CurrentPriceState = priceStateObject.costRange150000250000;

            if (ChkBox[i].checked) {
                stateObjectReset(priceStateObject);
                CurrentPriceState = true;
            } else {
                stateObjectReset(priceStateObject);
            }

            if (topMenuStateObject.allstate && CurrentPriceState) {
                priceSaleCheck01(`price`, 150000, 250000);
            } else if (topMenuStateObject.allstate && !CurrentPriceState) {
                priceSaleCheck02();
            }

            //함수 재활용을 위해 매개변수로 전달할수없는 조건을 미리 거르기.
            //각 탭이 활성화 된 상태에서 5만~15만체크박스를 클릭 했을때
            if (topMenuStateObject.jaketState && CurrentPriceState) {
                priceSaleCheck01(`jaket`, `price`, 150000, 250000);
            } else if (topMenuStateObject.jaketState && !CurrentPriceState) {
                priceSaleCheck02(`jaket`);
            }

            if (topMenuStateObject.sweaterState && CurrentPriceState) {
                priceSaleCheck01(`sweater`, `price`, 150000, 250000);
            } else if (topMenuStateObject.sweaterState && !CurrentPriceState) {
                priceSaleCheck02(`sweater`);
            }

            if (topMenuStateObject.neatState && CurrentPriceState) {
                priceSaleCheck01(`neat`, `price`, 150000, 250000);
            } else if (topMenuStateObject.neatState && !CurrentPriceState) {
                priceSaleCheck02(`neat`);
            }

            if (topMenuStateObject.shirtState && CurrentPriceState) {
                priceSaleCheck01(`shirt`, `price`, 150000, 250000);
            } else if (topMenuStateObject.shirtState && !CurrentPriceState) {
                priceSaleCheck02(`shirt`);
            }

            if (topMenuStateObject.TShirtState && CurrentPriceState) {
                priceSaleCheck01(`TShirt`, `price`, 150000, 250000);
            } else if (topMenuStateObject.TShirtState && !CurrentPriceState) {
                priceSaleCheck02(`TShirt`);
            }

            break;
        }

        case 3: {
            let CurrentPriceState = priceStateObject.costRange250000500000;

            if (ChkBox[i].checked) {
                stateObjectReset(priceStateObject);
                CurrentPriceState = true;
            } else {
                stateObjectReset(priceStateObject);
            }

            if (topMenuStateObject.allstate && CurrentPriceState) {
                priceSaleCheck01(`price`, 250000, 500000);
            } else if (topMenuStateObject.allstate && !CurrentPriceState) {
                priceSaleCheck02();
            }

            //함수 재활용을 위해 매개변수로 전달할수없는 조건을 미리 거르기.
            //각 탭이 활성화 된 상태에서 5만~15만체크박스를 클릭 했을때
            if (topMenuStateObject.jaketState && CurrentPriceState) {
                priceSaleCheck01(`jaket`, `price`, 250000, 500000);
            } else if (topMenuStateObject.jaketState && !CurrentPriceState) {
                priceSaleCheck02(`jaket`);
            }

            if (topMenuStateObject.sweaterState && CurrentPriceState) {
                priceSaleCheck01(`sweater`, `price`, 250000, 500000);
            } else if (topMenuStateObject.sweaterState && !CurrentPriceState) {
                priceSaleCheck02(`sweater`);
            }

            if (topMenuStateObject.neatState && CurrentPriceState) {
                priceSaleCheck01(`neat`, `price`, 250000, 500000);
            } else if (topMenuStateObject.neatState && !CurrentPriceState) {
                priceSaleCheck02(`neat`);
            }

            if (topMenuStateObject.shirtState && CurrentPriceState) {
                priceSaleCheck01(`shirt`, `price`, 250000, 500000);
            } else if (topMenuStateObject.shirtState && !CurrentPriceState) {
                priceSaleCheck02(`shirt`);
            }

            if (topMenuStateObject.TShirtState && CurrentPriceState) {
                priceSaleCheck01(`TShirt`, `price`, 250000, 500000);
            } else if (topMenuStateObject.TShirtState && !CurrentPriceState) {
                priceSaleCheck02(`TShirt`);
            }

            break;
        }

        case 4: {
            let CurrentPriceState = priceStateObject.costRange500000;

            if (ChkBox[i].checked) {
                stateObjectReset(priceStateObject);
                CurrentPriceState = true;
            } else {
                stateObjectReset(priceStateObject);
            }

            if (topMenuStateObject.allstate && CurrentPriceState) {
                priceSaleCheck01(`price`, 500000);
            } else if (topMenuStateObject.allstate && !CurrentPriceState) {
                priceSaleCheck02();
            }

            if (topMenuStateObject.jaketState && CurrentPriceState) {
                priceSaleCheck01(`jaket`, `price`, 500000);
            } else if (topMenuStateObject.jaketState && !CurrentPriceState) {
                priceSaleCheck02(`jaket`);
            }

            if (topMenuStateObject.sweaterState && CurrentPriceState) {
                priceSaleCheck01(`sweater`, `price`, 500000);
            } else if (topMenuStateObject.sweaterState && !CurrentPriceState) {
                priceSaleCheck02(`sweater`);
            }

            if (topMenuStateObject.neatState && CurrentPriceState) {
                priceSaleCheck01(`neat`, `price`, 500000);
            } else if (topMenuStateObject.neatState && !CurrentPriceState) {
                priceSaleCheck02(`neat`);
            }

            if (topMenuStateObject.shirtState && CurrentPriceState) {
                priceSaleCheck01(`shirt`, `price`, 500000);
            } else if (topMenuStateObject.shirtState && !CurrentPriceState) {
                priceSaleCheck02(`shirt`);
            }

            if (topMenuStateObject.TShirtState && CurrentPriceState) {
                priceSaleCheck01(`TShirt`, `price`, 500000);
            } else if (topMenuStateObject.TShirtState && !CurrentPriceState) {
                priceSaleCheck02(`TShirt`);
            }

            break;

        }
    }
}


function priceSaleCheck01(style = 0, property, price01, price02 = 9999999) {
    let returnArray01 = checkArray(sub_page_product_list, `productStyle`, style);
    let returnArray02 = pricechkRetrunArray(returnArray01, property, price01, price02);
    if (topMenuStateObject.allstate) {
        returnArray01 = pricechkRetrunArray(sub_page_product_list, `price`, price01, price02);
        listnPageCreate(returnArray01);
    } else {
        listnPageCreate(returnArray02);
    }
}

function priceSaleCheck02(style = 0) {
    let returnArray01 = checkArray(sub_page_product_list, `productStyle`, style);
    listnPageCreate(returnArray01);
}

/* function priceSaleCheck01(state01, state02, property = 0, style, price01, price02 = 99999999) {
    let returnArray01 = checkArray(sub_page_product_list, `productStyle`, style);
    if (state01 && state02) {
        let returnArray02 = pricechkRetrunArray(returnArray01, property, price01, price02);
        listCreate(returnArray02);
        pageCreate(returnArray02);
        //console.log(returnArray02);
    } else if (state01 && !state02 || state01 === topMenuStateObject.allstate) {
        listCreate(returnArray01);
        pageCreate(returnArray01);
    }
}
 */


\
function listCreate(array) {
    let fragment = document.createDocumentFragment();

    productListWrapper.innerHTML = ``;
    let receive = ``;
    
    for (let i = 0; i < array.length; i++) {
        if (i === pageItemView) {
            break;
        }

        
/*         let listCreate = `
        <li class = "list_item">
            <a href = "#!">
                <img src = ${array[i].imgSrc[0]} alt = "">
            </a>
            <a class = "product_name" href = "#!">
                ${array[i].productNameKor}
            </a>
            <a class = "model_name" href = "#!">
                ${array[i].productModelName}
            </a>
            <span class = "price_unit">₩</span>
            <span class = "price">${array[i].price.toLocaleString()}</span>
        </li>
        ` */

        if (array[i].isBest === true && array[i].isNew === true) {
            
        } else if (array[i].isBest === true) {
        } else if (array[i].isNew === true) {
        }

        receive += listCreate;
    }
    productListWrapper.innerHTML = receive;
}


}

let newList = document.createElement(`li`);
let newImgA = document.createElement(`a`);
let newImg = document.createElement(`img`);

let newBestSpan = document.createElement(`span`);
let newNewSpan = document.createElement(`span`);

let newNameA = document.createElement(`a`);
let newModelNameA = document.createElement(`a`);
let newPriceSpan01 = document.createElement(`span`);
let newPriceSpan02 = document.createElement(`span`);

newImg.setAttribute(`src`, array[i].imgSrc[0]);
newList.setAttribute(`class`, `list_item`);
newNameA.setAttribute(`class`, `product_name`);
newModelNameA.setAttribute(`class`, `model_name`);
newPriceSpan01.setAttribute(`class`, `price_unit`);
newPriceSpan02.setAttribute(`class`, `price`);

newBestSpan.textContent = `BEST`;
newNewSpan.textContent = `NEW`;

newNameA.textContent = array[i].productNameKor;
newModelNameA.textContent = array[i].productModelName;

newPriceSpan01.textContent = `₩`;
newPriceSpan02.textContent = array[i].price.toLocaleString();

newImgA.appendChild(newImg);
newList.appendChild(newImgA);
newList.appendChild(newNameA);
newList.appendChild(newModelNameA);
newList.appendChild(newPriceSpan01);
newList.appendChild(newPriceSpan02);

const itemList = document.querySelectorAll(`.list_item`);
if (array[i].isBest === true && array[i].isNew === true) {
    itemList.insertBefore()
} else if (array[i].isBest === true) {
} else if (array[i].isNew === true) {
}




<li class = "list_item">
<a href = "#!">
    <img src = ${array[i].imgSrc[0]} alt = "">
</a>
<a class = "product_name" href = "#!">
    ${array[i].productNameKor}
</a>
<a class = "model_name" href = "#!">
    ${array[i].productModelName}
</a>
<span class = "price_unit">₩</span>
<span class = "price">${array[i].price.toLocaleString()}</span>
</li>
`

if (array[i].isBest === true && array[i].isNew === true) {
listCreate = listCreate.replaceAll(`<a class = "product_name" href = "#!">`, `<span class="best">BEST</span><span class="new">NEW</span><a class = "product_name" href = "#!">`);
} else if (array[i].isBest === true) {
listCreate = listCreate.replaceAll(`<a class = "product_name" href = "#!">`, `<span class="best">BEST</span><a class = "product_name" href = "#!">`);
} else if (array[i].isNew === true) {
listCreate = listCreate.replaceAll(`<a class = "product_name" href = "#!">`, `<span class="new">NEW</span><a class = "product_name" href = "#!">`);
}






function listCreate(array) {
    const fragment = document.createDocumentFragment();

    while(productListWrapper.firstChild) {
        productListWrapper.firstChild.remove();
    }
    for (let i = 0; i < array.length; i++) {
        if (i === pageItemView) {
            break;
        }
        let newList = document.createElement(`li`);
        let newImgA = document.createElement(`a`);
        let newImg = document.createElement(`img`);
        
        let newBestSpan = document.createElement(`span`);
        let newNewSpan = document.createElement(`span`);
        
        let newNameA = document.createElement(`a`);
        let newModelNameA = document.createElement(`a`);
        let newPriceSpan01 = document.createElement(`span`);
        let newPriceSpan02 = document.createElement(`span`);
        
        newImg.setAttribute(`src`, array[i].imgSrc[0]);
        newImgA.setAttribute(`href`, `#!`);
        newList.setAttribute(`class`, `list_item`);

        newBestSpan.setAttribute(`class`, `best`);
        newNewSpan.setAttribute(`class`, `new`);
        
        newNameA.setAttribute(`class`, `product_name`);
        newNameA.setAttribute(`href`, `#!`);
        newModelNameA.setAttribute(`class`, `model_name`);
        newModelNameA.setAttribute(`href`, `#!`);

        newPriceSpan01.setAttribute(`class`, `price_unit`);
        newPriceSpan02.setAttribute(`class`, `price`);
        
        newBestSpan.textContent = `BEST`;
        newNewSpan.textContent = `NEW`;
        
        newNameA.textContent = array[i].productNameKor;
        newModelNameA.textContent = array[i].productModelName;
        
        newPriceSpan01.textContent = `₩`;
        newPriceSpan02.textContent = array[i].price.toLocaleString();
        
        newImgA.appendChild(newImg);
        newList.appendChild(newImgA);
        newList.appendChild(newNameA);
        newList.appendChild(newModelNameA);
        newList.appendChild(newPriceSpan01);
        newList.appendChild(newPriceSpan02);

/*         if (array[i].isBest === true && array[i].isNew === true) {
            newList.insertBefore(newBestSpan, newNameA);
            newList.insertBefore(newNewSpan, newNameA);
        } else if (array[i].isBest === true) {
            newList.insertBefore(newBestSpan, newNameA);
        } else if (array[i].isNew === true) {
            newList.insertBefore(newNewSpan, newNameA);
        }
 */
        fragment.appendChild(newList);
    }
    productListWrapper.appendChild(fragment);
}





















//top메뉴 클릭효과
const topMenuList = document.querySelectorAll('.product_menu_list input');
const topMenuListStyle = document.querySelectorAll('.product_menu_list .chk_box');
topMenuList.forEach((input, i) => {
    input.addEventListener('click', function() {
        if(input.checked) {
            fillterArrayTopMenu.push(input.value);
            addClass(topMenuListStyle[i], 'clicked');
        } else {
            let valueIndex = fillterArrayTopMenu.indexOf(input.value);
            fillterArrayTopMenu.splice(valueIndex, 1);
            removeClass(topMenuListStyle[i], 'clicked');
        }
        arrayReturn(sub_page_product_list, fillterArrayTopMenu);
    });
});

//컬러메뉴 클릭효과
const colorSelector = document.querySelectorAll('.color_select input');
const colorSelectorStyle = document.querySelectorAll('.color_select .chk_box');
colorSelector.forEach((input, i) => {
    input.addEventListener('click', function() {
        if(input.checked) {
            fillterArrayColor.push(input.value);
            addClass(colorSelectorStyle[i], 'clicked_border');
        } else {
            let valueIndex = fillterArrayColor.indexOf(input.value);
            fillterArrayColor.splice(valueIndex, 1);
            removeClass(colorSelectorStyle[i], 'clicked_border');
        }
        arrayReturn(sub_page_product_list, fillterArrayColor);
    })
})

//가격메뉴 클릭효과
const priceSelector = document.querySelectorAll(`.price_select input`);
priceSelector.forEach((input) => {
    input.addEventListener('click', () => {
        if (input.checked) {
            fillterArrayPrice.push(input.value);
        } else {
            let valueIndex = fillterArrayPrice.indexOf(input.value);
            fillterArrayPrice.splice(valueIndex, 1);
        }
        arrayReturn(sub_page_product_list, fillterArrayPrice);
    });
});

//세일메뉴 클릭효과
const saleSelector = document.querySelectorAll(`.sale_select input`);
saleSelector.forEach((input) => {
    input.addEventListener('click', () => {
        if (input.checked) {
            fillterArraySale.push(input.value);
        } else {
            let valueIndex = fillterArraySale.indexOf(input.value);
            fillterArraySale.splice(valueIndex, 1);
        }
        arrayReturn(sub_page_product_list, fillterArraySale);
    });
});


function arrayReturn(array01 = '', array02 = '') {
    let returnArray;
    returnArray = array01.filter((object) => {
        for (let value in object) {
            if (array02.includes(object[value])) {
                return true;
            }
        }
    })
    arrayUpdate(returnArray);
}
























//top메뉴 클릭효과
const topMenuList = document.querySelectorAll('.product_menu_list input');
const topMenuListStyle = document.querySelectorAll('.product_menu_list .chk_box');
topMenuList.forEach((input, i) => {
    input.addEventListener('click', function() {
        if(input.checked) {
            fillterArrayTopMenu.push(input.value);
            addClass(topMenuListStyle[i], 'clicked');
        } else {
            let valueIndex = fillterArrayTopMenu.indexOf(input.value);
            fillterArrayTopMenu.splice(valueIndex, 1);
            removeClass(topMenuListStyle[i], 'clicked');
        }
        let array = arrayReturn(sub_page_product_list, fillterArrayTopMenu);
        listnPageCreate(array);
    });
});

//컬러메뉴 클릭효과
const colorSelector = document.querySelectorAll('.color_select input');
const colorSelectorStyle = document.querySelectorAll('.color_select .chk_box');
colorSelector.forEach((input, i) => {
    input.addEventListener('click', function() {
        if(input.checked) {
            fillterArrayColor.push(input.value);
            addClass(colorSelectorStyle[i], 'clicked_border');
        } else {
            let valueIndex = fillterArrayColor.indexOf(input.value);
            fillterArrayColor.splice(valueIndex, 1);
            removeClass(colorSelectorStyle[i], 'clicked_border');
        }
        let array = arrayReturn(sub_page_product_list, fillterArrayColor);
        listnPageCreate(array);
    })
})

//가격메뉴 클릭효과
const priceSelector = document.querySelectorAll(`.price_select input`);
priceSelector.forEach((input) => {
    input.addEventListener('click', () => {
        if (input.checked) {
            fillterArrayPrice.push(input.value);
        } else {
            let valueIndex = fillterArrayPrice.indexOf(input.value);
            fillterArrayPrice.splice(valueIndex, 1);
        }
        let array = arrayReturn(sub_page_product_list, fillterArrayPrice);
        listnPageCreate(array);
    });
});

//세일메뉴 클릭효과
const saleSelector = document.querySelectorAll(`.sale_select input`);
saleSelector.forEach((input) => {
    input.addEventListener('click', () => {
        if (input.checked) {
            fillterArraySale.push(input.value);
        } else {
            let valueIndex = fillterArraySale.indexOf(input.value);
            fillterArraySale.splice(valueIndex, 1);
        }
        let array = arrayReturn(sub_page_product_list, fillterArraySale);
        listnPageCreate(array);
    });
});