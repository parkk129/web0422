// DOM 요소를 모두 로딩한 후 - load 이벤트
window.addEventListener("DOMContentLoaded", () => {
    const ye = document.querySelectorAll("span")[0];
    const mo = document.querySelectorAll("span")[1];
    const da = document.querySelectorAll("span")[2];
    const we = document.querySelectorAll("span")[3];
    const ho = document.querySelectorAll("span")[4];
    const mi = document.querySelectorAll("span")[5];
    const se = document.querySelectorAll("span")[6];

    // 1초마다 clock 호출
    setInterval(clock, 1000);

    function clock() {
        // d라는 날짜 인스턴스 생성
        const d = new Date();

        // 날짜/시간 값 가져오기
        let yea = d.getFullYear();
        let mon = d.getMonth() + 1; //0~11
        let dat = d.getDate(); //0~11
        let wee = d.getDay(); // 0(일)~6(토)
        let hou = d.getHours();
        let min = d.getMinutes();
        let sec = d.getSeconds();

        switch (wee) {
            case 0:
                wee = "일";
                break;
            case 1:
                wee = "월";
                break;
            case 2:
                wee = "화";
                break;
            case 3:
                wee = "수";
                break;
            case 4:
                wee = "목";
                break;
            case 5:
                wee = "금";
                break;
            default:
                wee = "토";
        }

        // 출력
        ye.innerText = yea + "년";
        mo.innerText = ze(mon) + "월";
        da.innerText = ze(dat) + "일";
        we.innerText = wee + "요일";
        ho.innerText = ze(hou)+ "시";
        mi.innerText = ze(min)+ "분";
        se.innerText = ze(sec);

        // 0~9는 00~09로 표기
        function ze(num) {
            return num < 10 ? (num = "0" + num) : (num = num);
        }
    } // clock_fn
}); // DOMContentLoaded