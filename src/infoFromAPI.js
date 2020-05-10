export function getMoviesBySearch(searchQuery, page) {
    const url = `https://www.omdbapi.com/?s=${searchQuery}&page=${page}&apikey=425318e3`;
    return fetch(url)
      .then(movies => movies.json());
}

export function translateSearchAreaValue(somethingYouNeedToTranslate) {
    const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200504T163502Z.71622e961ce0edea.2b0c261f4927ed72917b789880d3e7f019712d29&text=${somethingYouNeedToTranslate}&lang=ru-en`;
    return fetch(url)
      .then(translate => translate.json())
}

export function getRatingBySearch(filmId) {
    const url = `https://www.omdbapi.com/?i=${filmId}&apikey=425318e3`;
    return fetch(url)
      .then(id => id.json())
}