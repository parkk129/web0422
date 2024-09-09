
window.addEventListener("DOMContentLoaded", () => {

    // 원페이지 롱스크롤
    $(function () {

        $('#fullpage').fullpage({
            menu: '#hana_nav',
            anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
            sectionsColor: ['#f2f2f2', '#f2f2f2', '#f2f2f2', '#f2f2f2'],
            navigation: true,
            navigationTooltips: ['', '', '', ''],
            showActiveTooltip: true,
            //slidesNavigation: true,
            //loopHorizontal: false,
        });
    });

});
