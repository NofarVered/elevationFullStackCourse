// $.get(
//   "https://www.googleapis.com/books/v1/volumes?q=title:name%20of%20the%20wind",
//   function (result) {
//     console.log(result.items[0].volumeInfo.description); //prints A lot of description Text
//   }
// );

// 9. Exercises
// 1
$.get(
  "https://www.googleapis.com/books/v1/volumes?q=isbn:9782806269171",
  function (result) {
    console.log(result.items[0].volumeInfo.title);
  }
); // The Little Prince: Book Analysis

$.get(
  "https://www.googleapis.com/books/v1/volumes?q=isbn:1440633908",
  function (result) {
    console.log(result.items[0].volumeInfo.title);
  }
); // Of Mice and Men by John Steinbeck

$.get(
  "https://www.googleapis.com/books/v1/volumes?q=isbn:9781945048470",
  function (result) {
    console.log(result.items[0].volumeInfo.title);
  }
); // The Alchemist by Paulo Coelho

//2
const fetchTwo = function (queryType, queryValue) {
  $.ajax({
    method: "GET",
    url: "https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}",
    success: function (response) {
      console.log(response.items[0].volumeInfo.title);
    },
    error: function (xhr, text, error) {
      alert("error");
    },
  });
};

//3
const fetchThree = function (queryType, queryValue) {
  $.ajax({
    method: "GET",
    url: "https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}",
    success: function (response) {
      response.items.forEach((book) => {
        console.log(
          `${book.volumeInfo.title} by ${book.volumeInfo.authors}, ISBN: ${book.volumeInfo.industryIdentifiers[0].identifier}`
        );
      });
    },
    error: function (xhr, text, error) {
      alert("error");
    },
  });
};

//4
const gif = function (input) {
  let apiKey = "X59hT9vdUQ5ng9OnNCEELabQU9BHedDx";

  const url = `https://api.giphy.com/v1/gifs/search?q=${input}&api_key=${apiKey}`;
  $.ajax({
    method: "GET",
    url: url,
    success: function (response) {
      $("#gif").attr("src", response.data[0].embed_url);
    },
    error: function (xhr, text, error) {
      alert("error !");
    },
  });
};

gif("pig");

//5
$("button").on("click", function () {
  const inputSearch = $("input").val();
  gif(inputSearch);
  $("input").val("");
});
