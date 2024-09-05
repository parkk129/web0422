
window.addEventListener("DOMContentLoaded", () => {


    $(function () {

        $('#fullpage').fullpage({
            menu: '#hana_nav',
            anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
            sectionsColor: ['#f2f2f2', '#f2f2f2', '#7BAABE', 'whitesmoke'],
            navigation: true,
            navigationTooltips: ['', '', '', ''],
            showActiveTooltip: true,
            //slidesNavigation: true,
            //loopHorizontal: false,
        });
    });

});