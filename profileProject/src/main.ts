const defultUser:Model = new Model();
defultUser.generate().then(() => View.renderAll(defultUser));

$("#btn-g").on("click", function(){
    defultUser.generate().then(() => View.renderAll(defultUser));
})

$("#btn-s").on("click", function(){
})

$("#btn-l").on("click", function(){
})
