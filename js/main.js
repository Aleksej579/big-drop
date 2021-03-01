// slider from swiper
var swiper = new Swiper('.swiper-container', {
    effect: 'fade',
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});

// load content for menu (start)
$.ajax({
    url: './template/page-1.html',
    type: 'GET',
    beforeSend: function () {
        $('#content').empty();
    },
    success: function (responce) {
        $('#content').append(responce);
    },
    error: function () {
        alert('Error!');
    }
});

// load content for menu 
$('#about, .about, .wrapper_logo').on('click', function () {
    $.ajax({
        url: './template/page-1.html',
        type: 'GET',
        beforeSend: function () {
            $('#content').empty();
        },
        success: function (responce) {
            $('#content').append(responce);
        },
        error: function () {
            alert('Error!');
        }
    });
});
$('#guides, .guides').on('click', function () {
    $.ajax({
        url: `./template/page-2.html`,
        type: 'GET',
        beforeSend: function () {
            $('#content').empty();
        },
        success: function (responce) {
            $('#content').append(responce);
        },
        error: function () {
            alert('Error!');
        }
    });
});
$('#community, .community').on('click', function () {
    $.ajax({
        url: `./template/page-3.html`,
        type: 'GET',
        beforeSend: function () {
            $('#content').empty();
        },
        success: function (responce) {
            $('#content').append(responce);
        },
        error: function () {
            alert('Error!');
        }
    });
});
$('#resources, .resources').on('click', function () {
    $.ajax({
        url: `./template/page-4.html`,
        type: 'GET',
        beforeSend: function () {
            $('#content').empty();
        },
        success: function (responce) {
            $('#content').append(responce);
        },
        error: function () {
            alert('Error!');
        }
    });
});
$('#contact_us, .contact_us').on('click', function () {
    $.ajax({
        url: `./template/page-5.html`,
        type: 'GET',
        beforeSend: function () {
            $('#content').empty();
        },
        success: function (responce) {
            $('#content').append(responce);
        },
        error: function () {
            alert('Error!');
        }
    });
});

