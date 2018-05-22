function scrollToAnchor(aid) {
    var aTag = $("a[name='" + aid + "']")
    $('html, body').animate({
        scrollTop: aTag.offset().top
    }, "slow")
}


$('#link').click(function () {
    scrollToAnchor('super');
})