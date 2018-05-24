const scrollToAnchor = (aid, offset) => {
    let aTag = $(`a[name=${aid}]`);
    $(`html`).animate({
        scrollTop: aTag.offset().top - offset
    }, "slow")
}

$('#aboutMe').click(() => {
    scrollToAnchor('link2', 100);
    console.log($('.aboutMe').position());

})

$('#projects').click(() => {
    scrollToAnchor('link1', 50);
    console.log($('.projects').position());
})

$('#skills').click(() => {
    scrollToAnchor('skills', 50)
    console.log($('.skills').position());
})

$('#contact').click(() => {
    scrollToAnchor('link3', 50)
    console.log($('.contact').position());
})

$('#textLink').click(() => {
    scrollToAnchor('skills', 50)
})