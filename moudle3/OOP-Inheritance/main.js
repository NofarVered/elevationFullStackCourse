class Person {
  constructor(name, startYear) {
    this.name = name;
    this.startYear = startYear;
    this.courses = [];
  }

  addCourse(course) {
    this.courses.push(course);
  }
}
class Student extends Person {
  constructor(name, startYear) {
    super(name, startYear);
    this.grades = [];
  }

  receiveGrade(courseName, finalGrade) {
    this.grades.push({
      course: courseName,
      grade: finalGrade,
    });
  }
}

//3. Spot Check 1
class Teacher extends Person {
  constructor(name, startYear, salary) {
    super(null, startYear);
    this.salary = salary;
    this.name = "Professor " + name;
  }

  giveGrade(student, courseName, finalGrade) {
    student.receiveGrade(courseName, finalGrade);
  }
}
const s1 = new Student("Ronda", 2017);
console.log(s1 instanceof Student); //prints true
const t1 = new Teacher("Cassandra", 2002, 40000);
console.log(t1.name);
