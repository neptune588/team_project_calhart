import {detail_page_produdct_list} from './data.js';

/******************** view_thumnail ********************/
//change_list
const pdCodeNum = document.getElementById('code_number');
const viewContainer = document.getElementById('view_thumnail');
const viewThum = document.querySelectorAll('.thumnail_box');
const viewSmallThum = document.querySelectorAll('.img_box');

function thumCreate(arr) {

    arr.forEach(obj => {
        let list01 = `
            
        `;
    
        let list02 = `
        
        `
    })
}
viewContainer.addEventListener('mousemove', (e) => {
    viewThum[1].style.transform = `translate(${e.offsetX * -2}px, ${e.offsetY * -2}px)`;
})
viewContainer.addEventListener('mouseout', () => {
    viewThum[1].style.transform = `translate(0px, 0px)`;
})
viewSmallThum.forEach(imgBx => {
    imgBx.addEventListener('click', () => {
        viewThum[0].querySelector('img').src = imgBx.querySelector('img').src;
    })
});

function setAttributeMuliti(el, attrArr) {
    for(let [first, last] of attrArr) {
        el.setAttribute(first, last);
    }
}