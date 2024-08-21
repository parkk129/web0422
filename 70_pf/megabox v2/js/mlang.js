// import는 최상단에 기록한다
// import 변수명 from "./경로/파일명";

import main_data from "../js/mdata.js";

window.addEventListener("DOMContentLoaded", ()=>{
    const sel = document.querySelector("header select");
    const logo = document.querySelector(".logo img");
    const gnb = document.querySelectorAll(".gnb a");
    const tit = document.querySelectorAll("#sec1 b");

    //console.log(sel,logo,gnb,tit,flogo,fmenu,addr);

    //이벤트 종류 : 클릭 onclick 마우스 요소 위에 올렸을때 onmouseEnter 마우스 요소를 벗어났을때 onmouseleave
    // 셀렉트 태그에서 옵션이 바뀔때 onchange 

    //select의 option값이 바뀔때
    sel.onchange = (e) => {
        // "value속성"은 select의 option값을 가져온다
        // event.currentTarget은 현재 선택된 option을 가리킨다
        let opt = e.currentTarget.value;

        console.log("opt?",opt);

        let data = main_data[opt];

        //로고 변경
        // setAttribute("html속성","값") >> html의 속성값을 변경
        logo.innerText = data["logo"][0]
        console.log(data["logo"]);

        // 메인 타이틀 변경
        tit.forEach((ele,idx)=>
            ele.innerText = data["tit"][idx]);

        // 메뉴 변경
        gnb.forEach((ele,idx)=>
            ele.innerText = data["gnb"][idx]);

        // 푸터 메뉴 변경
        fmenu.forEach((ele,idx)=>
            ele.innerText = data["fmenu"][idx]);

        //푸터 로고 변경
        flogo.setAttribute("src",`${data["flogo"]}`);
        console.log(data["flogo"]);

        // 주소 변경
        addr.innerText = data["addr"];
    };
});
