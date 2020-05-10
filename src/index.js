import { mySwiper } from './slider';
import { getMoviesBySearch, translateSearchAreaValue, getRatingBySearch } from './infoFromAPI';
import { createSlide } from './creation';
import '../keyboard/script';

const searchBtn = document.querySelector('.submit');
const searchArea = document.querySelector('.search');
const keyboardBtn = document.querySelector('.keyboard-button');
const searchAnnouncement = document.querySelector('.search-announcement');
const LOADER = document.getElementById('loader');
const swiperContainer = document.querySelector('.swiper-container');
const keyboard = document.querySelector('.keyboard');

let currentPageNumber = 1;
let translationFromRussian = {
    text: 'deadpool'
};

getInformationForSwiper(translationFromRussian.text, currentPageNumber);
currentPageNumber++;

searchBtn.addEventListener('click', async (event) => {
    try{
        event.preventDefault();
        currentPageNumber = 1;
        let searchValue = searchArea.value;
        translationFromRussian = await translateSearchAreaValue(searchValue);
        if(translationFromRussian.code == 502){
            throw new Error("invalid request");
        }
        mySwiper.removeAllSlides();
    } catch(error){
        swiperContainer.style.display = 'none';
        document.querySelector(".search-announcement").textContent = "Invalid request";
    }
});

keyboardBtn.addEventListener('click', (event) => {
    if (keyboard.classList.contains('none')){
        keyboard.classList.remove('none');
    } else {
        keyboard.classList.add('none');
    }
});

async function getInformationForSwiper(searchValue, pageNumber){
    try{
        LOADER.style.display = 'block';
        swiperContainer.style.display = 'none';
        let moviesFromSearchList = await getMoviesBySearch(searchValue, pageNumber);
        if (moviesFromSearchList.Response == "False"){
            throw new Error(moviesFromSearchList.Error);
        } else {
            searchAnnouncement.textContent = "Showing results for " + searchValue;
            for(let i = 0; i < moviesFromSearchList.Search.length; i++){
                let movieRating = await getRatingBySearch(moviesFromSearchList.Search[i].imdbID);
                createSlide (moviesFromSearchList.Search[i].Title, moviesFromSearchList.Search[i].Poster, moviesFromSearchList.Search[i].Year, movieRating.imdbRating, moviesFromSearchList.Search[i].imdbID);
            }
            LOADER.style.display = 'none';
            swiperContainer.style.display = 'block';
            mySwiper.update();
        }
    } catch(error){
        LOADER.style.display = 'none';
        swiperContainer.style.display = 'block';
        searchAnnouncement.textContent = "No results for " + searchValue;
        getInformationForSwiper(translationFromRussian.text, currentPageNumber);
    }
}

mySwiper.on('reachEnd', function(){
    getInformationForSwiper(translationFromRussian.text, currentPageNumber);
    currentPageNumber++;
})

