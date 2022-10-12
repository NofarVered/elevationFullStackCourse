function firstFunc() {
  function asyncCallback() {
    console.log("I will wait, but I won't block!");
  }
  setTimeout(asyncCallback, 3000);
}
function secondFunc() {
  console.log("Then I can go");
}

firstFunc();
secondFunc();
