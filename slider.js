var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1600: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 50,
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 50,
        },

    }
});