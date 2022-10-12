//3. Spot Check 2:
let users = [];

const getData = function (callback) {
  setTimeout(function () {
    users = [{ name: "Rick" }, { name: "Morty" }];
    console.log("Got users");
    callback();
  }, 3000);
};

const displayData = function () {
  console.log("Going to display: " + users);
  for (user of users) {
    console.log(user.name);
  }
};
function tester1() {
  getData(displayData);
}

//5. Spot Check 3 :
function tester2() {
  setInterval(function () {
    console.log(new Date());
  }, 1000);
}

//7. Spot Check 4 :
const square = (num) => {
  console.log(num * num);
};
function tester3() {
  square(4); // should print 16
}

//9. Spot Check 5:
const getFormalTitle = (str1, str2) => str1 + " " + str2;
function tester4() {
  formalTitle = getFormalTitle("Madamme", "Lellouche");
  console.log(formalTitle);
}

// ----------------------------------- Exercises -----------------------------------
// 11.1
const pushPull = function (callback) {
  callback();
};
const push = function () {
  console.log("pushing it!");
};

const pull = function () {
  console.log("pulling it!");
};
function tester5() {
  pushPull(push); //should print "pushing it!"
  pushPull(pull); //should print "pulling it!"
}
// 11.2
const time = new Date();

const getTime = function (callback) {
  callback(time);
};
const returnTime = function (time) {
  alert("The current time is: " + time);
};
function tester6() {
  getTime(returnTime);
}
// 11.3
const logData = (data) => console.log(data);
const displayData2 = function (alertDataFunc, logDataFunc, data) {
  alertDataFunc(data);
  logDataFunc(data);
};
function tester7() {
  displayData2(alert, logData, "I like to party");
}
// 11.4
const sumThree = (a, b, c) => a + b + c;

// 11.5
const capitalize = (str) => {
  console.log(str[0].toUpperCase() + str.slice(1).toLowerCase());
};
function tester8() {
  capitalize("bOb"); // returns Bob
  capitalize("TAYLOR"); // returns Taylor
  capitalize("feliSHIA"); // returns Felishia
}

// 11.6
const commentOnWeather = (temp) => {
  return temp > 25 ? "hot" : "cold";
};
const determineWeather = (temp) => {
  if (temp > 25) {
    return "hot";
  }
  return "cold";
};
function tester9() {
  commentOnWeather(30); //returns "It's hot"
  commentOnWeather(22); //returns "It's cold"
}

// 11.7
const explode = (lightFunc, soundFunc, sound) => {
  lightFunc();
  soundFunc(sound);
};
const shineLight = () =>
  (document.getElementById("box").style.backgroundColor = "yellow");
const makeSound = (sound) => alert(sound);
// explode(shineLight, makeSound, "BOOM");
