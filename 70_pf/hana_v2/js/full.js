
window.addEventListener("DOMContentLoaded", () => {


    $(function () {

        $('#fullpage').fullpage({
            menu: '#hana_nav',
            anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
            sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke'],
            navigation: true,
            navigationTooltips: ['section1', 'section2', 'section3', 'section4'],
            showActiveTooltip: true,
            //slidesNavigation: true,
            //loopHorizontal: false,
        });
    });

});