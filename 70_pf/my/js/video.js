$(() => {


    // 비디오 클릭 재생
    
    // 비디오 가져오기 : 객체.get(0)
    // 비디오 플레이 : 객체.play()
    // 비디오 일시정지 : 객체.pause()
    // 비디오 정지 : 객체.load()

    const vid = $('#s2 video').get(0);
    const vidBtn = $("s2 .vid i");

    vidBtn.click(()=>{
        vid.play();
    });

    // 푸터 배경색 랜덤하게 바꾸기

    const footerEle = $("footer");
    const colors = ["orange", "tomato", "blue"]

    setInterval(bgcolor, 1000);

    function bgcolor(){
        footerEle.css
    }


});