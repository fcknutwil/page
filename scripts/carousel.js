function changeTab(index) {
    $('#carousel .active').removeClass('active');
    $('#carousel .tab:nth-child('+index+')').addClass('active');
}