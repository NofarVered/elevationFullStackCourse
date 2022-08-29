// 11. Exercises
function apiData(callback) {
  $.ajax({
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/users",
    success: function (response) {
      return callback(response);
    },
    error: function (xhr, text, error) {
      alert("error");
    },
  });
}

const result = apiData(function (users) {
  const users1 = users.map((elem) => {
    return { email: "${elem.email}", companyName: "${elem.companyName}" };
  });
  console.log(users1); // 1
  const users2 = users.filter((elem) => {
    return elem.address.zipcode[0] == 5;
  });
  console.log(users2); // 2
  console.log(users2.map((elem) => elem.id)); // 3
  console.log(
    users
      .filter((elem) => {
        return elem.name[0].toLowerCase() == "c";
      })
      .map((elem) => elem.name)
  ); // 4
  console.log(users.every((elem) => elem.address.city == "South Christy")); //5
});
