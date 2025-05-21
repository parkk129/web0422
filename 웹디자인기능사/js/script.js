$(()=>{

    // nav

    $(".nav > ul > li").mouseover(function(){

        $(this).find(".submenu").stop().slideDown();
    });

    $(".nav > ul > li").mouseout(function(){

        $(this).find(".submenu").stop().slideUp();
    });

    // slide

    currentIndex = 0;

    setInterval(()=>{
        
        currentIndex++;

        $(".sliderWrap").animate({marginLeft: - 100 * currentIndex + "%"},600);

        if(currentIndex == 3){

            $(".sliderWrap").animate({marginLeft:0},0);

            currentIndex = 0;

        }

    }, 3000);

});