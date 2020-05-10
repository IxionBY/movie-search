import { Swiper, Navigation, Pagination, Scrollbar} from 'swiper/js/swiper.esm.js';

Swiper.use([Navigation, Pagination, Scrollbar]);

export let mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    reachEnd: false,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1680: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
        1250: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
        820: {
            slidesPerView: 2,
            spaceBetween: 50,
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 50,
        },

    }
});