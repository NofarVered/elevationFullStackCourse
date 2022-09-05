const renderFirst = function () {
  const source = $("#first-template").html();
  const template = Handlebars.compile(source);
  let newHTML = template({ text: "This gets rendered" });
  $("body").append(newHTML);
};

const renderSecond = function () {
  const source = $("#second-template").html();
  const template = Handlebars.compile(source);
  let newHTML = template({ moreText: "This also gets rendered" });
  $("#special").append(newHTML);
};

renderFirst();
renderSecond();

// -----------------------------------------------------
// Spot check
const animals = [
  "Rabbit",
  "Giraffe",
  "Kangaroo",
  "Whale",
  "Seagull",
  "Caterpie",
];

const languages = ["French", "Spanish", "Togolese", "Javascript", "Uruk"];

const sourceF = $("#first-template").html();
const templateF = Handlebars.compile(sourceF);
for (const animal of animals) {
  let newHTMLF = templateF({ text: animal });
  $("body").append(newHTMLF);
}

const sourceT = $("#third-template").html();
const templateT = Handlebars.compile(sourceT);
let newHTMLT = templateT({ languages });
$("body").append(newHTMLT);
