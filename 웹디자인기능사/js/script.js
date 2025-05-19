$(()=>{

    // @charset "utf-8";  ==  $(()=>{});  css js 작동 시작 명령어어

    $(".nav > ul > li").mouseover(function(){

        $(".nav > ul > li > ul").stop().fadeIn(300);
        $("#main").addClass("on");
        
    });


    $(".nav > ul > li").mouseout(function(){

        $(".nav > ul > li > ul").stop().fadeOut(300);
        $("#main").removeClass("on");

    });


    // slide

    let currentIndex = 0;

    
    setInterval(()=>{
        
        let nextIndex = (currentIndex + 1) % 3;

        $(".slider").eq(currentIndex).fadeOut(1200);
        $(".slider").eq(nextIndex).fadeIn(1200);

        currentIndex = nextIndex;

    },3000);


    // tab menu

    // . 찍어서 클래스 표시 

    // tabBtn tabCont >> let
    let tabBtn = $(".tab-btn > ul > li");
    let tabCont = $(".tab-cont > div");


    tabBtn.click(function(){

        // index >> const
        const index = $(this).index();

        // eq(index)
        tabCont.eq(index).show().siblings().hide();

    })

});