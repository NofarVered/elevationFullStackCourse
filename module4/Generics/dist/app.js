"use strict";
// ex1
const sumEx1 = function (input) {
    if (Array.isArray(input)) {
        return input.filter(element => typeof element == "number").reduce((a, b) => a + b, 0);
    }
    else if (typeof input === 'string') {
        const num = parseInt(input);
        return !isNaN(num) ? num : 0;
    }
    else if (typeof input === 'number') {
        return input;
    }
    return 0;
};
function examplesEx1() {
    console.log(sumEx1("23"));
    console.log(sumEx1("Tomer"));
    console.log(sumEx1(44));
    console.log(sumEx1(["test", 22, 55, "block", "9"]));
    console.log(sumEx1([23, 433, 11]));
}
examplesEx1();
// ex2
class Numbers {
    constructor(numbers) {
        this.numbers = numbers;
    }
    addNumber(number) {
        this.numbers.push(number);
    }
    sum() {
        let total = 0;
        this.numbers.forEach(elem => { total += sumEx1(elem); });
        return total;
    }
}
function examplesEx2() {
    const numbers1 = new Numbers(["test", "22"]);
    numbers1.addNumber("55");
    numbers1.addNumber("block");
    numbers1.addNumber("9");
    const numbers2 = new Numbers([23]);
    numbers2.addNumber(433);
    numbers2.addNumber(11);
    console.log(`1: ${numbers1.sum()}`);
    console.log(`2: ${numbers2.sum()}`);
}
examplesEx2();
