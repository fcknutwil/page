$( document ).ready(function() {
    setContent(1);
    var odd = true;
    setInterval(function() {
        console.log('bilderwechsel');
        if(odd) {
            $('#bilderwechsel img').attr('src', 'images/bilderwechsel2.png');
        } else {
            $('#bilderwechsel img').attr('src', 'images/bilderwechsel.png');
        }
        odd ^= true;
    }, 5000);
});

function changeTab(index) {
    $('#carousel .active').removeClass('active');
    $('#carousel .tab:nth-child('+index+')').addClass('active');
    setContent(index);
}

function setContent(index) {
    $('#carousel .content').empty();
    $('#platzhalter .carousel_content_'+index).children().clone().appendTo('#carousel .content');
}

function newsToContent() {
    $('#bilderwechsel').empty();
    $('#platzhalter .news').children().clone().appendTo('#bilderwechsel');
}

