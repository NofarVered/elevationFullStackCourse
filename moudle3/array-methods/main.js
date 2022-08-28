const people = [
  { id: 1, name: "Humbert", money: 499, hasAC: false },
  { id: 2, name: "Bellatrix", money: 499, hasAC: true },
  { id: 3, name: "Mola", money: 720, hasAC: false },
];

let isCool = function (humbert) {
  return humbert.money > 500 || humbert.hasAC;
}; // returns true is money > 500 or hasAC is true
// Bellatrix and Mola
let print = (p) => console.log(p);

people
  .filter(isCool)
  .map((p) => p.name)
  .forEach(print);

console.log(people.find((p) => p.id === 2));
