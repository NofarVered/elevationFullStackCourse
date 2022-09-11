"use strict";
// ex1
const concat = function (input, shouldPrinted) {
    let output = input;
    typeof input == "string" ? null : output = input.join("");
    shouldPrinted ? console.log(output) : null;
};
function examplesEx1() {
    concat("Tomer", false);
    concat("Tomer", 2);
    concat(["Tomer", "Sagi"], 1);
    concat(["Tomer", "Sagi"], 0);
    concat(["Michael", "Jordan", "is", "the", "King"], true);
}
examplesEx1();
function print_numbers(numbers) {
    Array.isArray(numbers) ? console.log(`array ${typeof numbers[0]} ${numbers}`) : console.log(`${typeof numbers} ${numbers}`);
}
function examplesEx2() {
    print_numbers(972528684411);
    print_numbers([972528684411, 9725242223]);
    print_numbers("052863423243");
    print_numbers(["052343434286", "0547734343"]);
}
examplesEx2();
