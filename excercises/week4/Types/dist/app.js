"use strict";
//ex1
const sum = (arr) => { return arr.reduce((partialSum, a) => partialSum + a, 0); };
const isEven = (num) => { return num % 2 == 0; };
function runningEx1() {
    const numArray1 = [4, 7, 44, 5, 234];
    const numArray2 = [65, 33, 5, 2532, 32, 6];
    const numArray3 = [54, 6, 656, 4];
    console.log(`${numArray1} // ${sum(numArray1)} // ${isEven(sum(numArray1))}`);
    console.log(`${numArray2} // ${sum(numArray2)} // ${isEven(sum(numArray2))}`);
    console.log(`${numArray3} // ${sum(numArray3)} // ${isEven(sum(numArray3))}`);
}
runningEx1();
//ex2
class Student {
    constructor(fname, age, grades) {
        this.fname = fname;
        this.age = age;
        this.grades = grades;
    }
    addGrade(grade) { this.grades.push(grade); }
    getGradeAvg() { return this.grades.reduce((a, b) => a + b, 0) / this.grades.length; }
}
function runningEx2() {
    const student1 = new Student("John Smith", 23, [77, 68, 99, 98]);
    const student2 = new Student("Mike Johnson", 35, [84, 85, 75, 88]);
    const student3 = new Student("Jeff Howard", 32, [79, 92, 94, 96]);
    const students = [student1, student2, student3];
    students.forEach(student => {
        console.log(`${student.fname}: ${student.getGradeAvg()}`);
    });
}
runningEx2();
