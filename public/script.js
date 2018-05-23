function scrollToAnchor(aid) {
    var aTag = $("a[name='" + aid + "']");
    $('html, body').animate({
        scrollTop: aTag.offset().top
    }, "slow");
}


$('#projects').click(() => {
    scrollToAnchor('link1');
})

$('#aboutMe').click(() => {
    scrollToAnchor('link2')
})

$('#contact').click(() => {
    scrollToAnchor('link3')
})