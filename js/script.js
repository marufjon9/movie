let movieList = document.querySelector(".movie__list");
let movieName = document.querySelector(".movie__name");
let form = document.querySelector(".movie__year");
let inputFrom = document.querySelector(".movie__yearfrom");
let inputTo = document.querySelector(".movie__yearto");

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

    // let movdescription = document.createElement("p");
    // movdescription.classList.add("movie__description");
    // movdescription.textContent = element.summary;

    let moreInfoBtn = document.createElement("button");
    moreInfoBtn.textContent = "More info";
    moreInfoBtn.setAttribute("type", "button");
    moreInfoBtn.classList.add("moreInfoButton", "modal-btn");
    moreInfoBtn.setAttribute("data-bs-toggle", "modal");
    moreInfoBtn.setAttribute("data-bs-target", "#exampleModal");
    moreInfoBtn.dataset.id = element.ytid;

    let bookmarkBtn = document.createElement("button");
    bookmarkBtn.classList.add("bookmarkButton");

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

    textbox.append(
      movrating,
      movadate,
      movlang,
      movlink,
      moreInfoBtn,
      bookmarkBtn,
    );

    li.append(movimg, movtitle, textbox);

    movieList.append(li);
  });
};

showMovies(movies);

movieName.addEventListener("keyup", function () {
  movieList.innerHTML = "";
  const searchValue = movieName.value.trim().toLowerCase();

  let result = movies.filter((element) => {
    let searchName = element.Title.toLowerCase();
    return searchName.includes(searchValue);
  });

  showMovies(result);
});

form.addEventListener("submit", function (e) {
  movieList.innerHTML = "";
  e.preventDefault();

  let from = Number(inputFrom.value);
  let to = Number(inputTo.value);

  let mov = movies.filter((element) => {
    let u = from <= element.movie_year && to >= element.movie_year;

    return u;
  });
  inputFrom.value = "";
  inputTo.value = "";

  showMovies(mov);
});

const modalTitle = document.querySelector(".modal-title");
const modalBody = document.querySelector(".modal-body");
const modalBtn = document.querySelector(".modal-btn");

movieList.addEventListener("click", function (e) {
  if (e.target.matches(".modal-btn")) {
    const btnId = e.target.dataset.id;
    const foundMovie = movies.find((item) => {
      return item.ytid == btnId;
    });
    modalTitle.textContent = foundMovie.fulltitle;
    modalBody.textContent = foundMovie.summary;
  }
});

function renderModal(id) {
  console.log(id);
}
