// 4. Spot Check 1
class Animal {
  constructor(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
  }
  giveBirth(name) {
    console.log("Boom. Birthed " + name);
  }
}

const dog = new Animal("Bo", 3);
console.log(dog.name);

//5. Spot Check 2
class Human {
  constructor(name, age, isFriendly) {
    this.name = name;
    this.age = age;
    this.isFriendly = isFriendly;
  }
}

const h1 = new Human("Mark", 31, true);
console.log(
  `${h1.name}, who is ${h1.age} years old, is ${
    h1.isFriendly ? "friendly" : "not friendly"
  }`
); //prints "Mark, who is 31 years old, is friendly"

const cat = new Animal("Puss", 4);
cat.giveBirth("Dolly"); // prints "Boom. Birthed Dolly"

class Vehicle {
  constructor(x, y, speed) {
    this._x = x;
    this._y = y;
    this._speed = speed;
    Vehicle.carsSold++;
  }
  set x(value) {
    this._x = value;
  }
  set speed(speed) {
    if (speed < 0) {
      return console.log("Speed must be positive");
    }
    this._speed = speed;
  }

  static getInfo() {
    console.log("Cars are great");
  }
  static calculateMoney() {
    console.log(Vehicle.carsSold);
  }
}
// 11. Spot Check 5
Vehicle.carsSold = 0;

const v1 = new Vehicle(5, 6, 100);
const v2 = new Vehicle(5, 6, 400);
Vehicle.getInfo();
Vehicle.calculateMoney();

const c = new Vehicle();
c.x = 3;
c.y = 1;
c.speed = -2; // at this point, we'll get the console log saying speed needs to be positive
console.log(c.speed); // prints undefined
