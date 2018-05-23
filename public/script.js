const scrollToAnchor = (aid) => {
    let aTag = $(`a[name=${aid}]`);
    $(`html`).animate({
        scrollTop: aTag.offset().top - 50
    }, "slow")
}

$('#aboutMe').click(() => {
    $('#menu1').addClass('underlined');
    scrollToAnchor('link2');
    console.log($('.aboutMe').position());

})

$('#projects').click(() => {
    $('#menu2').addClass('underlined');
    scrollToAnchor('link1');
    console.log($('.projects').position());
})

$('#skills').click(() => {
    $('#menu3').addClass('underlined');
    scrollToAnchor('skills')
    console.log($('.skills').position());
})

$('#contact').click(() => {
    $('#menu4').addClass('underlined');
    scrollToAnchor('link3')
    console.log($('.contact').position());
})