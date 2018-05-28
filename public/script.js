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

$('video').mouseenter((e) => {
    console.log("adding github icon");
    if (!$(e.target).hasClass('video_github')) {
        $('.video_github').addClass('displayBlock');
    } else {
        e.target.preventDefault();
    }
});


// TODO: CHANGE THIS SHIT
$(window).mouseenter((e) => {
    if ($(e.target).hasClass('videoContainer')) {
        console.log("removing github icon");
        $('.video_github').removeClass('displayBlock');
    }
});




// $('.playIcon').click(() => {
//     if ($('video').get(0).paused) {
//         $('.playIcon').addClass('displayNone');
//         $('video').get(0).play();
//         setTimeout(() => {
//             $('.pauseIcon').removeClass('displayBlock');
//         }, 1000);
//     } else {
//         $('video').get(0).pause();
//         $('.playIcon').removeClass('displayNone');
//     }
// });

// $('.pauseIcon').click(() => {
//     $('video').get(0).pause();
// });

// $('video').hover(() => {
//     if (!$('video').get(0).paused) {
//         $('.pauseIcon').addClass('displayBlock');
//         setTimeout(() => {
//             $('.pauseIcon').removeClass('displayBlock');
//         }, 3000);
//     } else {
//         setTimeout(() => {
//             $('.pauseIcon').addClass('displayBlock');
//         }, 3000);
//         $('.playIcon').removeClass('displayNone');
//     }
// });