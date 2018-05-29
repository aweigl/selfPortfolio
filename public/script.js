const scrollToAnchor = (aid, offset) => {
    let aTag = $(`a[name=${aid}]`);
    $(`html`).animate({
        scrollTop: aTag.offset().top - offset
    }, "slow");
};

//mail parcing 



const mail = $("#mail")
mail.on("click", () => {
    console.log("CLICK");
    const part1 = "aaron.weigl";
    const extra = Math.pow(2, 6);
    const part2 = String.fromCharCode(extra);
    const part3 = "hotmail.com";
    mail.attr("href", `mailto:${part1}${part2}${part3}`);
});
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
    scrollToAnchor('skills', 0)
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
    if (!$(e.target).hasClass('seeThrough')) {
        $('.seeThrough').removeClass('seeThrough');
        $('.moveForward').removeClass('moveForward');
    }
});

$(window).click((e) => {
    if ($(e.target).hasClass('projectImg') && !$(e.target).hasClass('moveAside')) {
        $('.moveAside').removeClass('moveAside');
        $(e.target).addClass('moveAside');
    } else if ($(e.target).hasClass('projectImg') && $(e.target).hasClass('moveAside')) {
        $(e.target).removeClass('moveAside');
    } else {
        $('.moveAside').removeClass('moveAside');
    }
});


// $('video').mouseenter((e) => {
//     console.log("adding github icon");
//     if (!$(e.target).hasClass('video_github')) {
//         $('.video_github').addClass('displayBlock');
//     } else {
//         e.target.preventDefault();
//     }
// });