let movieList = document.querySelector(".movie__list");
let movieName = document.querySelector(".movie__name");
let form = document.querySelector(".movie__year");
let inputFrom = document.querySelector(".movie__yearfrom");
let inputTo = document.querySelector(".movie__yearto");
const fav = document.querySelector(".movie__fav");
const favBox = document.querySelector("#modall");
const bookmarkList = document.querySelector(".modal__list");
const exit = document.querySelector(".modal-exit");

const bookmark_arr = JSON.parse(localStorage.getItem("bookmark") || "[]");

showMovies(bookmark_arr, bookmarkList, false);

function showMovies(array, ulElement, remove) {
  ulElement.innerHTML = "";
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
    bookmarkBtn.dataset.id = element.ytid;

    let deleteBookmark = document.createElement("img");
    deleteBookmark.classList.add("style");
    deleteBookmark.setAttribute("src", "/img/del.png");
    deleteBookmark.dataset.id = element.ytid;

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

    if (remove) {
      textbox.append(
        movrating,
        movadate,
        movlang,
        movlink,
        moreInfoBtn,
        bookmarkBtn,
      );

      li.append(movimg, movtitle, textbox);
    } else {
      li.append(movimg, movtitle, deleteBookmark);
    }

    ulElement.append(li);
  });
}

showMovies(movies, movieList, true);

movieName.addEventListener("keyup", function () {
  movieList.innerHTML = "";
  const searchValue = movieName.value.trim().toLowerCase();

  let result = movies.filter((element) => {
    let searchName = element.Title.toLowerCase();
    return searchName.includes(searchValue);
  });

  showMovies(result, movieList);
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

  showMovies(mov, movieList);
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

fav.addEventListener("click", function () {
  favBox.classList.remove("no-display");
});

exit.addEventListener("click", function () {
  favBox.classList.add("no-display");
});

const bkmbtn = document.querySelector(".bookmarkButton");
const mm = document.querySelector(".movie__item");

movieList.addEventListener("click", function (e) {
  if (e.target.matches(".bookmarkButton")) {
    bkmbtn.classList.toggle("bkmb");

    const btnId = e.target.dataset.id;
    const foundMovie = movies.find((item) => {
      return item.ytid == btnId;
    });

    if (!bookmark_arr.find((item) => item == foundMovie)) {
      bookmark_arr.push(foundMovie);
    } else {
      alert("Already saved to favorites");
    }

    localStorage.setItem("bookmark", JSON.stringify(bookmark_arr));

    showMovies(bookmark_arr, bookmarkList);
  }
});

bookmarkList.addEventListener("click", function (e) {
  if (e.target.matches(".style")) {
    const btnId = e.target.dataset.id;
    const foundBookmark = bookmark_arr.findIndex((item) => item.ytid == btnId);
    bookmark_arr.splice(foundBookmark, 1);
    localStorage.setItem("bookmark", JSON.stringify(bookmark_arr));
    showMovies(bookmark_arr, bookmarkList, false);
  }
});
