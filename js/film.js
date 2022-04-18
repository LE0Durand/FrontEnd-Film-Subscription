const filmID = localStorage.getItem("filmID");
const filmInfoEL = document.querySelector(".film__container") 

async function renderFilmInfo(filmID){
    const apiRequestLink = "https://www.omdbapi.com/?apikey=7dd56162&i=" + filmID;
    const filmInfo = await fetch(apiRequestLink);
    const filmInfoData = await filmInfo.json();
    filmInfoEL.innerHTML = filmInfoHTML(filmInfoData);
}

renderFilmInfo(filmID);

function filmInfoHTML(film){
    return `<div class="film__wrapper">
    <figure class="film__poster">
      <img
        class="film__poster--img"
        src="${film.Poster}"
        alt=""
      />
    </figure>
    <div class="film__description">
      <div class="film__description--list">
        <div class="film__description--list--element">Title : ${film.Title}</div>
        <div class="film__description--list--element">Released : ${film.Released}</div>
        <div class="film__description--list--element">Genre : ${film.Genre}</div>
        <div class="film__description--list--element">Director : ${film.Director}</div>
        <div class="film__description--list--element">Actors : ${film.Actors}</div>
        <div class="film__description--list--element">Runtime : ${film.Runtime}</div>
        <div class="film__description--list--element">Type : ${film.Type}</div>
      </div>
    </div>
  </div>
  <p class="film__plot">
  ${film.Plot}
  </p>`
}