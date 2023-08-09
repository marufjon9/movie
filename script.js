let movieList = document.querySelector(".movie__list");
let movieName = document.querySelector(".movie__name");

const showMovies = function (array) {
  array.forEach((element) => {
    let li = document.createElement("li");
    li.classList.add("movie__item");

    let movimg = document.createElement("img");
    movimg.classList.add("movie__img");
    movimg.setAttribute(
      "src",
      `https://i3.ytimg.com/vi/${element.ytid}/maxresdefault.jpg`,
    );

    let movtitle = document.createElement("p");
    movtitle.classList.add("item__title");
    movtitle.textContent = element.Title;

    let movdescription = document.createElement("p");
    movdescription.classList.add("movie__description");
    movdescription.textContent = element.summary;

    let textbox = document.createElement("div");
    textbox.classList.add("movie__textbox");

    let movrating = document.createElement("p");
    movrating.classList.add("movie__rating");
    movrating.textContent = `Rating: ${element.imdb_rating}`;

    let movadate = document.createElement("p");
    movadate.classList.add("movie__date");
    movadate.textContent = `Year: ${element.movie_year}`;

    let movlang = document.createElement("p");
    movlang.classList.add("movie__language");
    movlang.textContent = `Lang: ${element.language}`;

    let movlink = document.createElement("a");
    movlink.classList.add("movie__link");
    movlink.setAttribute(
      "href",
      `https://www.imdb.com/title/${element["imdb_id"]}/`,
    );
    movlink.textContent = `IMDB link`;

    textbox.append(movrating, movadate, movlang, movlink);

    li.append(movimg, movtitle, movdescription, textbox);

    movieList.append(li);
  });
};

showMovies(movies);

movieName.addEventListener("keyup", function () {
  movieList.innerHTML = "";
  const searchValue = movieName.value.trim().toLowerCase();

  let result = movies.filter(function (element) {
    let searchName = element.Title.toLowerCase();
    return searchName.includes(searchValue);
  });

  showMovies(result);
});
