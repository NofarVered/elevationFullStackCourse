// const myQuery = function (selector) {
//   if (selector[0] == "#") {
//     const elementId = selector.split("#")[1]; //will return everything after the # in selector
//     return document.getElementById(elementId);
//   }
// };
// console.log(myQuery("#yourElementID"));

// $("h1").css("color", "blue");
// $(".red-div").css("background-color", "red");
// $("ul li:first-child").css("background-color", "green");
// $("li:nth-child(2)").css("background-color", "pink");
// $("#brown-div").css("color", "brown");

// $("#b1").addClass();

// $("#my-input").val("element");

0; // const output = $("h1").data().barcode;
// const output2 = $("h1").data().expirationdate;

// console.log(output);
// console.log(output2);

// $("#b1").hover(function () {
//   $("#b1").css("background-color", "yellow");
// });

// $("button").click(() => {
//   alert($("#my-input").val());
// });

// $("#b1").hover(function () {
//   console.log($(this));
// });

// $("#b2").hover(function () {
//   console.log($(this));
// });

// $("div").hover(function () {
//   $(this).css("background-color", "blue");
// });

// $(".feedme").on("click", function () {
// let divCopy = $(`<div class=fruit>${$(this).text()}</div>`);
// console.log(this);
// console.log($(this));
// $("body").append(jQuery.clone(this));

// $("body").append(divCopy);
// });

// const names = [
//   { first: "Alex", last: "Johnson" },
//   { first: "Byron", last: "Loveall" },
//   { first: "Cassandra", last: "Wuthers" },
//   { first: "Deandre", last: "Rahm" },
//   { first: "Ellena", last: "Freeman" },
// ];

// function spot10() {
//   for (let obj of names) {
//     $("body").append(`<div>${obj.first} - ${obj.last}</div>`);
//   }
// }

// $("div").hover(function () {
//   $("div").remove(".box1");
// });

$("button").click(function () {
  $("#blogs").append(`<div class="words"> <p>This is a test.</p></div>`);
});

$("#blogs").on("click", ".words", function () {
  console.log("xxxxxxx");
  $(this).text("<p> BLAAAAA .</p>");
});

// $(".words").click(function () {
//   console.log("xxxxxxx");
//   // $(this).text("<p> BLAAAAA .</p>");
// });
