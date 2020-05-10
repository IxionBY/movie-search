import { mySwiper } from './slider';
import { getMoviesBySearch, translateSearchAreaValue, getRatingBySearch } from './infoFromAPI';
import { createSlide } from './creation';

const searchBtn = document.querySelector('.submit');
const searchArea = document.querySelector('.search');
const searchAnnouncement = document.querySelector('.search-announcement');
const LOADER = document.getElementById('loader');
const swiperContainer = document.querySelector('.swiper-container');

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
            throw new Error("invalid parametr");
        }
        mySwiper.removeAllSlides();
    } catch(error){
        console.log(error);
        document.querySelector(".search-announcement").textContent = "No results for ";
    }
});

async function getInformationForSwiper(searchValue, pageNumber){
    try{
        LOADER.style.display = 'block';
        swiperContainer.style.display = 'none';
        let moviesFromSearchList = await getMoviesBySearch(searchValue, pageNumber);
        console.log(moviesFromSearchList);
        if (moviesFromSearchList.Response == "False"){
            searchAnnouncement.textContent = "No results for " + searchValue;
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
        console.log(error);
    }
}

mySwiper.on('reachEnd', function(){
    console.log(currentPageNumber);
    getInformationForSwiper(translationFromRussian.text, currentPageNumber);
    currentPageNumber++;
})

