// let userStorage = {
//   darkMode: true,
//   showSideNav: false,
//   defaultResultCount: 9,
//   latestMarks: {
//     sectionA: 92,
//     sectionB: 11,
//   },
//   cart: [
//     { id: 3112, count: 2 },
//     { id: 812, count: 16 },
//   ],
// };
// localStorage.userStorage = JSON.stringify(userStorage);
let wisdom = [];
const source = $('#template').html();
const template = Handlebars.compile(source);
let loadHTML = template({ moreText: `${localStorage.userStorage}` });
$('body').append(loadHTML);

$('#b1').on('click', function () {
  let userInput = $('input').val();
  wisdom.push(userInput);
  let newHTML = template({ moreText: `${userInput}` });
  $('body').append(newHTML);
  $('input').val('');
  console.log(wisdom);
  localStorage.userStorage = wisdom;
});

$('#b2').on('click', function () {
  wisdom = [];
  localStorage.clear();
});
