const defultUser:Model = new Model();
defultUser.generate().then(() => View.renderAll(defultUser));
localStorage["usersData"] = '[]';

$("#btn-g").on("click", function(){
    defultUser.generate().then(() => View.renderAll(defultUser));
})

$("#btn-s").on("click", function(){
    const users = JSON.parse(localStorage["usersData"]);
    users.push({id: defultUser.user.key, data: defultUser});
    localStorage["usersData"] = JSON.stringify(users);
})

$("#btn-l").on("click", function(){
    $("#dropdown-div").empty();
    const users = JSON.parse(localStorage["usersData"]);
    users.forEach((element:any) => {
        View.renderNames(element);
    });
})
