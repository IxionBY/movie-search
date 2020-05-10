import { mySwiper } from "./slider";

export function createSlideElement(tag, parentElement, className) {
    const newElement = document.createElement(tag);
    newElement.classList.add(className);
    parentElement.appendChild(newElement);
    return newElement;
}

export function createSlide (name, img, year , rate, filmId){
    const swiperSlide = document.createElement('div');
    swiperSlide.classList.add('swiper-slide');
    mySwiper.appendSlide(swiperSlide);

    const slideName = createSlideElement('a', swiperSlide, 'swiper-slide__name');
    slideName.textContent = name;
    slideName.href =`https://www.imdb.com/title/${filmId}/videogallery/`;

    const slideImg = createSlideElement('img', swiperSlide, 'swiper-slide__img');
    if (img === 'N/A'){
        slideImg.src = 'img/nothinghere.png';
    } else {
        slideImg.src = img;
    }

    const slideYear = createSlideElement('p', swiperSlide, 'swiper-slide__year');
    slideYear.textContent = year;

    const sliderRate = createSlideElement('p', swiperSlide, 'swiper-slide__rate');
    if (rate === 'N/A'){
        sliderRate.textContent = 'People didnt want to rate this film';
    } else {
        sliderRate.textContent = rate;
    }
}