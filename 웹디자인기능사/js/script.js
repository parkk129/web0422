$(()=>{

    // nav

    $(".nav > ul > li").mouseover(function(){

        $(".submenu").stop().fadeIn();
        $("#slider").addClass("on");

    });

    $(".nav > ul > li").mouseout(function(){

        $(".submenu").stop().fadeOut();
        $("#slider").removeClass("on");

    });




// slider

let currentIndex = 0;

setInterval(()=>{

    currentIndex++;

    $(".sliderWrap").animate({marginTop : - 350 * currentIndex + "px"}, 600);
    
    if(currentIndex == 3){

        setTimeout(()=>{
            $(".sliderWrap").animate({marginTop:0 }, 0);
        },700)

        currentIndex = 0;
    }


}, 3000)



});