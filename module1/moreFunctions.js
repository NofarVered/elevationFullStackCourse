// --------------------------------------------------------------------- 2. Functions Galore
const people_info = [
  {
    name: "guido",
    profession: "bungalow builder",
    age: 17,
    country: "canaland",
    city: "sydurn",
    catchphrase: "what a piece of wood!",
  },
  {
    name: "petra",
    profession: "jet plane mechanic",
    age: 31,
    country: "greenmark",
    city: "bostork",
    catchphrase: "that's my engine, bub",
  },
  {
    name: "damian",
    profession: "nursery assistant",
    age: 72,
    country: "zimbia",
    city: "bekyo",
    catchphrase: "with great responsibility comes great power",
  },
];

// All proper nouns* should be capitalized
// The city and country should come together with a comma in between
// If the age is below 21, it should say “Underage” instead
// If the age is above 55 it should say “55+” instead
// The catchphrase should be wrapped in quotes with its first letter capitalized

const capitalize = function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
const getAge = function (num) {
  return num < 21 ? "Underage" : num > 55 ? "55+" : `${num}`;
};
const getSummary = function (person) {
  return `${capitalize(person.name)} is ${getAge(
    person.age
  )} years old ${capitalize(person.profession)} from ${capitalize(
    person.city
  )}, ${capitalize(person.country)}. ${capitalize(
    person.name
  )} loves to say ${capitalize(person.catchphrase)} `;
};

function tester() {
  for (const p of people_info) {
    console.log(getSummary(p));
  }
}
