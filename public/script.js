const scrollToAnchor = (aid, offset) => {
    let aTag = $(`a[name=${aid}]`);
    $(`html`).animate({
        scrollTop: aTag.offset().top - offset
    }, "slow");
};


// hover

$('#aboutMe').click(() => {
    scrollToAnchor('link2', 100);
    console.log($('.aboutMe').position());

});

$('#projects').click(() => {
    scrollToAnchor('link1', -70);
    console.log($('.projects').position());
});

$('#skills').click(() => {
    scrollToAnchor('skills', 50)
    console.log($('.skills').position());
});

$('#contact').click(() => {
    scrollToAnchor('link3', 0)
    console.log($('.contact').position());
});

$('#textLink').click(() => {
    scrollToAnchor('skills', 50)
});

//clickEvents

$(window).click((e) => {
    console.log(e.target);
    if (!$(e.target).hasClass('seeThrough')) {
        $('.seeThrough').removeClass('seeThrough');
        $('.moveForward').removeClass('moveForward');
    }
});

$(window).click((e) => {
    console.log($(e.target).parent().find('.projectIcons'));

    if ($(e.target).hasClass('projectImg')) {
        $('.seeThrough').removeClass('seeThrough');
        $('.moveForward').removeClass('moveForward');
        $(e.target).addClass('seeThrough');
        $(e.target).parent().find('.projectIcons').addClass('moveForward');
    }
});