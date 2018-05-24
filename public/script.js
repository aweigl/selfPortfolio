const scrollToAnchor = (aid) => {
    let aTag = $(`a[name=${aid}]`);
    $(`html`).animate({
        scrollTop: aTag.offset().top - 50
    }, "slow")
}

$('#aboutMe').click(() => {
    scrollToAnchor('link2');
    console.log($('.aboutMe').position());

})

$('#projects').click(() => {
    scrollToAnchor('link1');
    console.log($('.projects').position());
})

$('#skills').click(() => {
    scrollToAnchor('skills')
    console.log($('.skills').position());
})

$('#contact').click(() => {
    scrollToAnchor('link3')
    console.log($('.contact').position());
})

$('#textLink').click(() => {
    scrollToAnchor('skills')
})