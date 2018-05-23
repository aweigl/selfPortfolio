const scrollToAnchor = (aid) => {
    let aTag = $(`a[name=${aid}]`);
    $(`html`).animate({
        scrollTop: aTag.offset().top - 50
    }, "slow")
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

$('#skills').click(() => {
    scrollToAnchor('skills')
})

changing dsomething