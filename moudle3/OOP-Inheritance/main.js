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

//3. Spot Check 1 + 9. Spot Check 3
class Teacher extends Person {
  constructor(name, startYear, salary) {
    super(null, startYear);
    this.salary = salary;
    this.name = "Professor " + name;
    this.courses = {}; //override the courses attribute
  }
  //override the addCourse method
  addCourse(course) {
    if (this.courses[course]) {
      return this.courses[course]++;
    }
    this.courses[course] = 1;
  }

  giveGrade(student, courseName, finalGrade) {
    student.receiveGrade(courseName, finalGrade);
  }
}

const s1 = new Student("Ronda", 2017);
console.log(s1 instanceof Student); //prints true
const t1 = new Teacher("Cassandra", 2002, 40000);
console.log(t1.name);

class TeachingAssistant extends Teacher {
  constructor(name, startYear, salary) {
    super(name, startYear, salary);
  }
}
const ta1 = new TeachingAssistant("Brandon", 2014, 20000);
ta1.addCourse("General Relativity");

const ta2 = new TeachingAssistant("Brandon", 2014, 20000);
console.log(ta2.toString());

class Page {
  constructor(text) {
    this.text = text;
  }
}

class Notebook {
  constructor(pageNum) {
    this.pageNum = pageNum;
    this.pages = [];
  }

  write(page) {
    this.pages.push(page);
  }
}

class Diary extends Notebook {
  constructor(pageNum, owner) {
    super(pageNum);
    this.owner = owner;
  }
}

const myDiary = new Diary(50, "Shila");
const mathNotebook = new Notebook(200);
const p1 = new Page(
  "Pythagoreas realized tha the sum of the squares of the sides of a right triangle will equal the square of the hypoteneuse"
);
myDiary.pages.push(new Page("I think I'm in love with a Greek man."));

console.log(myDiary.pages[0].text);
console.log(p1 instanceof Page);
console.log(myDiary instanceof Notebook);
console.log(myDiary instanceof mathNotebook);

class Image {
  constructor(url, width, height, db) {
    this.url = url;
    this.width = width || 150;
    this.height = height || 150;
    this.db = db;
  }

  save() {
    this.db.save(JSON.stringify(this));
  }
}

class SQL_DB {
  constructor() {}
  save(str) {
    //wicked code that saves to SQL database
  }
}

class Mongo_DB {
  constructor() {}
  save(str) {
    //wicked code that saves to Mongo database
  }
}

const sqlDB = new SQL_DB();
const mongoDB = new Mongo_DB();
const pic = new Image("https://a3.amazon.com/93112/ist.png", null, null, sqlDB);

pic.save();
