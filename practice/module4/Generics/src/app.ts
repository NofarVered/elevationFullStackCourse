// ex1
const sumEx1 = function <Type> (input: Type) : number {
    if (Array.isArray(input)){
        return input.filter(element => typeof element == "number").reduce((a, b) => a + b, 0);
    }
    else if (typeof input === 'string') {
        const num: number = parseInt(input);
        return !isNaN(num) ? num : 0;
    }
    else if (typeof input === 'number'){return input;}
    return 0;
}

function examplesEx1() {
    console.log(sumEx1("23"));
    console.log(sumEx1("Tomer"));
    console.log(sumEx1(44));
    console.log(sumEx1(["test", 22, 55, "block", "9"]));
    console.log(sumEx1([23, 433, 11]));
}
examplesEx1();

// ex2
class Numbers<Type> {
    numbers: Type[];

    constructor(numbers: Type[]) {
        this.numbers = numbers;
    }

    addNumber(number: Type): void {
        this.numbers.push(number);
    }
    
    sum(): number {
        let total: number = 0;
        this.numbers.forEach(elem => {total+=sumEx1(elem) });
        return total;
    }

}

function examplesEx2() {
    const numbers1: Numbers<string> = new Numbers<string>(["test", "22"]);
    numbers1.addNumber("55");
    numbers1.addNumber("block");
    numbers1.addNumber("9");

    const numbers2: Numbers<number> = new Numbers<number>([23]);
    numbers2.addNumber(433);
    numbers2.addNumber(11);

    console.log(`1: ${numbers1.sum()}`);
    console.log(`2: ${numbers2.sum()}`);
}
examplesEx2()
