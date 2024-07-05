const btn1 = document.querySelectorAll('#tabs a').item(0);
const btn2 = document.querySelectorAll('#tabs a').item(1);
const btn3 = document.querySelectorAll('#tabs a').item(2);
const btn4 = document.querySelectorAll('#tabs a').item(3);



const btnn1 = document.querySelectorAll('#tabs li').item(0);
const btnn2 = document.querySelectorAll('#tabs li').item(1);
const btnn3 = document.querySelectorAll('#tabs li').item(2);
const btnn4 = document.querySelectorAll('#tabs li').item(3);



const cont1 = document.querySelector('#tab1');
const cont2 = document.querySelector('#tab2');
const cont3 = document.querySelector('#tab3');
const cont4 = document.querySelector('#tab4');


// 이벤트 처리
btnn1.onclick = function () {
    resetF();
    btn1.style.color = "white";
    btnn1.style.background = "#111111";
    cont1.classList.add('on');
}
btn2.onclick = function () {
    resetF();
    btn2.style.color = "white";
    btnn2.style.background = "#111111";
    cont2.classList.add('on');
}
btn3.onclick = function () {
    resetF();
    btn3.style.color = "white";
    btnn3.style.background = "#111111";
    cont3.classList.add('on');

}
btn4.onclick = function () {
    resetF();
    btn4.style.color = "white";
    btnn4.style.background = "#111111";
    cont4.classList.add('on');
}

function resetF() {
    cont1.classList.remove('on');
    cont2.classList.remove('on');
    cont3.classList.remove('on');
    cont4.classList.remove('on');
}




