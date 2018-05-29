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

const primary_move = () => {
    setTimeout(() => {
        $('#primaryProject').addClass('moveAside_primary');
        setTimeout(() => {
            $('#primaryProject').removeClass('moveAside_primary');
        }, 1400);
    }, 700);
};

let passed_once = false;

$('#projects').click(() => {
    scrollToAnchor('link1', -70);
    console.log($('.projects').position());
    if (!passed_once) {
        primary_move();
        passed_once = true;
    }
});
$(window).scroll(() => {
    if ($(window).scrollTop() >= 670 && $(window).scrollTop() <= 900) {
        if (!passed_once) {
            primary_move();
            passed_once = true;
        }
    }
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

// $(window).click((e) => {
//     if (!$(e.target).hasClass('seeThrough')) {
//         $('.seeThrough').removeClass('seeThrough');
//         $('.moveForward').removeClass('moveForward');
//     }
// });

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


$('#playButton').click(() => {
    const video = $('.videoContainer');

    video.css({
        display: "flex",
        height: $(document).innerHeight() + "px",
        top: 0
    });

    $('video').css({
        top: $(this).offset().top + $(window).scrollTop() + 100
    });

    $('body').css({
        overflow: 'hidden'
    });
});

$('.videoContainer').click((e) => {
    if ($(e.target).hasClass('videoContainer')) {
        $('.videoContainer').css("display", "none");
        $('body').css({
            overflow: ''
        });
    }
});

$(window).keydown((e) => {
    if (e.keyCode === 27) {
        $('.videoContainer').css("display", "none");
        $('body').css({
            overflow: ''
        });
    } else if (e.keyCode === 32) {
        e.preventDefault();
        if ($('video')[0].paused) {
            $('video')[0].play();
        } else {
            $('video')[0].pause();
        }
    }
});