// 3. Spot Check 1
// $("button").on("click", function () {
//   console.log($(this).closest("div").find("span").text());
// });

// 4. Spot Check 2
$("button").on("click", function () {
  console.log($(".container").find("p").text());
});
