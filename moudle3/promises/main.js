// 7. Exercises
// 1
class APIWord {
  fetch() {
    return $.get("https://random-word-api.herokuapp.com/word");
  }
}

class Renderer {
  render(dataPromise) {
    dataPromise.then(function (data) {
      return $.get(
        `https://www.googleapis.com/books/v1/volumes?q=intitle:${data}`
      );
    });
  }
}
const apiWord = new APIWord();
const renderer = new Renderer();
let initialDataPromise = apiWord.fetch();
renderer.render(initialDataPromise);

// 2
$.get("https://random-word-api.herokuapp.com/word").then(function (word) {
  console.log(word);
  let randomBook = $.get(
    `https://www.googleapis.com/books/v1/volumes?q=title:${word}`
  );
  let randomGif = $.get(
    `http://api.giphy.com/v1/gifs/search?q=${word}&api_key=50m5Set06jQuFMy7VNXir7iaNl8ypsEu`
  );
  Promise.all([randomBook, randomGif]).then(function (result) {
    $("body").append(`<div>${result[0].items[0].volumeInfo.title}</div>`);
    $("body").append(`<iframe src="${result[1].data[0].embed_url}">`);
  });
});
