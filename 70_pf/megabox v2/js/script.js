window.addEventListener("DOMContentLoaded", () => {

    // 모바일 햄버거


    // 요소 찾기
    const collapsedMenuIcon = document.querySelector(".collapsedMenuIcon");
    const nav = document.querySelector("nav");

    // 이벤트 처리
    collapsedMenuIcon.onclick = () => {
        // event.currentTarget는 이벤트 함수내에서 객체 자신을 가리킨다.
        // 함수 호출
        btnMotion(event.currentTarget);
    };

    // 호이스팅
    // 함수 선언(정의)
    function btnMotion(x) {
        /* 
            classList.add("선택자"); -> 선택자 추가
            classList.remove("선택자"); -> 선택자 제거
            classList.toggle("선택자"); -> 선택자를 추가 또는 제거
        */

        // x객체가 change가 있으면 제거, 아니면 추가
        // toggle 기능 : 했다가 안했다가 반복
        // 햄버거 버튼이 x로 바뀌는 것 + x에서 햄버거 버튼으로 바뀌는 것
        x.classList.toggle("change");

        //nav 태그에 change 클래스가 추가
        nav.classList.toggle("change");
    }

});