$(()=>{

    // nav

    $(".nav > ul > li").mouseover(function(){

        $(this).find(".submenu").stop().slideDown();
    });

    // slide

    currentIndex = 0;

    setInterval(()=>{
        
        currentIndex++;

        $(".sliderWrap").animate({marginLeft: - 100 * currentIndex + "%"},600);

    }, 3000);

});