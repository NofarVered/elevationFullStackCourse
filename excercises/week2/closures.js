// 4. Spot Check 1
const Family = () => {
  let members = [];
  const birth = (name) => {
    members.push(name);
    console.log(members);
  };
  return birth;
};
const giveBirth = Family();
// giveBirth("Clarissa");
// giveBirth("Mayana");

//5. Modules
const mathOperations = function () {
  const add = function (x, y) {
    return x + y;
  };

  const subtract = function (x, y) {
    return x - y;
  };

  const multiply = function (x, y) {
    return x * y;
  };

  const divide = function (x, y) {
    return x / y;
  };
  return {
    add: add,
    sub: subtract,
    mult: multiply,
    div: divide,
  };
};
// mathOperations().add(1,2)
// mathOperations().add(13, 29)
// mathOperations().mult(1.75, 24)
// mathOperations().mult(7, m.div(36, 6))

// 9. Exercises
// 9.1
const StringFormatter = function () {
  const capitalizeFirst = function (str) {
    console.log(str[0].toUpperCase() + str.slice(1).toLowerCase());
  };
  const skewerCase = function (str) {
    console.log(str.replace(" ", "-"));
  };
  return { capitalizeFirst: capitalizeFirst, skewerCase: skewerCase };
};
const formatter = StringFormatter();
// formatter.capitalizeFirst("dorothy"); //should print Dorothy
// formatter.skewerCase("blue box"); //should print blue-box

// 9.2
const Bank = function () {
  let money = 500;
  const deposit = (num) => {
    money += num;
  };
  const showBalance = () => {
    console.log(money);
  };
  return { deposit: deposit, showBalance: showBalance };
};
function test10() {
  const bank = Bank();
  bank.deposit(200);
  bank.deposit(250);
  bank.showBalance(); //should print 950
}

// 9.3
const SongsManager = function () {
  const songs = {};
  const addSong = function (name, link) {
    songs[name] = link.slice(link.indexOf("="));
  };
  const getSong = function (song) {
    console.log("https://www.youtube.com/watch?v" + songs[song]);
  };
  return { addSong, getSong };
};
const songsManager = SongsManager();
// songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ");
// songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U");
// songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8");

// songsManager.getSong("sax"); // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ
