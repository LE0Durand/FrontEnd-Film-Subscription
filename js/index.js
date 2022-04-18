// test api http://www.omdbapi.com/?apikey=7dd56162&s=shrek

const filmListEL = document.querySelector(".film-list");


// async function main(){
//     const films = await fetch("https://www.omdbapi.com/?apikey=7dd56162&s=harry");
//     const filmObject= await films.json();
//     const filmData = await Object.values(filmObject)[0];

//     filmListEL.innerHTML = filmData.map((film) => filmHTML(film)).join("");
// }

// main();

async function searchFilm(event){
  event.preventDefault();
  const keyword = event.target[0].value;
  const apiRequestLink = "https://www.omdbapi.com/?apikey=7dd56162&s=" + keyword;
  const films = await fetch(apiRequestLink);
  const filmObject= await films.json();
  const filmData = await Object.values(filmObject)[0];

  filmListEL.innerHTML = filmData.map((film) => filmHTML(film)).join("");
}

function filmHTML(film){
  console.log(`${film.imdbID}`);
    return `<div class="film-card" onclick="showFilmInfo('${film.imdbID}')">
    <div class="film-card__container">
      <img class="film__img" src="${film.Poster}" alt="">
      <h3 class="film__title">${film.Title}</h3>
        <p class="film__para"><b>Year :</b> ${film.Year}</p>
        <p class="film__para"><b>Type :</b> ${film.Type}</p>
    </div>
  </div>`
}

function showFilmInfo(filmID){
  localStorage.setItem("filmID", filmID);
  window.location.href= `${window.location.origin}/FrontEnd-Film-Subscription/film.html`;
}