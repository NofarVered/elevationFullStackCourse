// turn our "template" into html
var source = $("#store-template").html();

// compile our template html using handlebars
var template = Handlebars.compile(source);

// fill our template with information
var newHTML = template({ item: "bread", price: "3" });

// append our new html to the page
$(".items").append(newHTML);

var newHTML2 = template({ item: "Cheese", price: "10" });

$(".items").append(newHTML2);

// -----------------------------------------------------

const menuData = {
  menu: [
    { name: "Google", link: "http://google.com", socialNetwork: false },
    { name: "Facebook", link: "http://facebook.com", socialNetwork: false },
    { name: "Instagram", link: "http://nstagram.com", socialNetwork: true },
    { name: "Twitter", link: "http://twitter.com", socialNetwork: false },
  ],
};

const source2 = $("#menu-template").html();
const template2 = Handlebars.compile(source2);
const newHTML3 = template2(menuData);

// append our new html to the page
$(".menu").append(newHTML3);

// -----------------------------------------------------

const sourceIf = $("#menu-template-If").html();
const templateIf = Handlebars.compile(sourceIf);
const newHTMLIf = templateIf(menuData);

// append our new html to the page
$(".menuIf").append(newHTMLIf);

// -----------------------------------------------------
