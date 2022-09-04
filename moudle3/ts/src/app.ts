// let employee: {
//     name: string,
//     salary: number,
//     isManager: false,
//     workDays: number[]
//   }
  
//   employee = {
//     name: 'John',
//     salary: 25000,
//     isManager: false,
//     workDays: [1,1,1,1,0,0]
//   }
  
//   if (employee.isManager) {
//     console.log(`${employee.name} is a manager`);
//     employee.salary = 30000;
//   } else {
//     employee.workDays[2] = 0;
//     employee.workDays.push(0);
//   }

//ex1
const sum = (arr: number[]): number => {return arr.reduce((partialSum, a) => partialSum + a, 0);}
const isEven = (num : number): boolean => {return num % 2 ==0}
const numArray1: number[] = [4,7,44,5,234];
const numArray2: number[] = [65,33,5,2532,32,6];
const numArray3: number[] = [54,6,656,4];

console.log(`${numArray1} | ${sum(numArray1)} | ${isEven(sum(numArray1))}`);
console.log(`${numArray2} | ${sum(numArray2)} | ${isEven(sum(numArray2))}`);
console.log(`${numArray3} | ${sum(numArray3)} | ${isEven(sum(numArray3))}`);

//ex2
class Student {
  constructor(public fname: string,public age: number , public grades: number[]) {}
  addGrade(grade: number): void  {this.grades.push(grade)}
  getGradeAvg(): number {return this.grades.reduce((a, b) => a + b, 0)/this.grades.length}
}
const student1: Student = new Student("John Smith", 23, [77,68,99,98]);
const student2: Student = new Student("Mike Johnson", 35, [84,85,75,88]);
const student3: Student = new Student("Jeff Howard", 32, [79,92,94,96]);
  
const students: Student[] = [student1, student2, student3];
students.forEach(student => {
  console.log(`${student.fname}: ${student.getGradeAvg()}`);
});
