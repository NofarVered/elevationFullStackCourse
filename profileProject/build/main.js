"use strict";
const defultUser = new Model();
defultUser.generate().then(() => View.renderAll(defultUser));
localStorage["usersData"] = '[]';
$("#btn-g").on("click", function () {
    defultUser.generate().then(() => View.renderAll(defultUser));
});
$("#btn-s").on("click", function () {
    const users = JSON.parse(localStorage["usersData"]);
    users.push({ id: defultUser.user.key, data: defultUser });
    localStorage["usersData"] = JSON.stringify(users);
});
$("#btn-l").on("click", function () {
    const users = JSON.parse(localStorage["usersData"]);
    console.log(users);
    users.forEach((element) => {
        View.renderNames(element);
    });
});
