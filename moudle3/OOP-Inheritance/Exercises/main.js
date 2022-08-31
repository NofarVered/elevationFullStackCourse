class Person {
  constructor(name, startYear) {
    this.name = name;
    this.startYear = this.startYear;
  }
}

class Student extends Person {
  constructor(name, startYear) {
    super(name, startYear);
    this.grades = [];
  }
}

class Teacher extends Person {
  constructor(name, salary, startYear) {
    super(null, startYear);
    this.salary = salary;
    this.name = 'Professor ' + name;
    this.courses = {};
  }
}

class Principal extends Person {
  constructor(name, salary, startYear) {
    super(name, startYear);
    this.salary = salary;
    this.teachers = [];
    this.students = [];
  }
  hireTeacher(t) {
    this.teachers.push(t);
    console.log(`${this.name} just hired ${t.name}`);
  }
  recruitStudent(t) {
    this.students.push(t);
    console.log(`${this.name} just hired ${t.name}`);
  }
  expelStudent(t) {
    this.students = this.students.filter((elem) => {
      return elem.name != t.name;
    });
  }
  transferStudent(s, p) {
    this.expelStudent(s);
    p.recruitStudent(s);
  }
}
const p1 = new Principal('Martin', 1991);
const p2 = new Principal('Martha', 1990);

const t1 = new Teacher('Cassandra', 2002, 40000);
const t2 = new Teacher('Kevin', 2006, 30000);

const s1 = new Student('Ronda', 2017);
const s2 = new Student('Byron', 2016);

//1 & 2
p1.hireTeacher(t1); //should print "Martin just hired Cassandra"
console.log(p1.teachers); //should print Array(1) [Teacher] - the teacher should be Cassandra

p1.hireTeacher(t2); //should print "Martin just hired Kevin"
console.log(p1.teachers); //should print Array(2) [Teacher, Teacher]

//3 & 4
p1.recruitStudent(s1);
p1.recruitStudent(s2);
console.log(p1.students); //should print Array(2) [Student, Student]

//5
p1.expelStudent(s1);
console.log(p1.students); //should print Array(1) [Student] - the student should be Byron

//6
p1.transferStudent(s2, p2);
console.log(p1.students); //should print Array(0) []
console.log(p2.students); //should print Array(1) [Student] - the student should be Byron
