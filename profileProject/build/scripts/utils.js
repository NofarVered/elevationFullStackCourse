"use strict";
class apiGenerator {
    static getPerson() {
        let output = { key: "", fname: "", lname: "", city: "", state: "", urlImg: "", friends: [] };
        $.get("https://randomuser.me/api/?results=5").then((data) => {
            let currentUser = data.results[0];
            output.key = currentUser.email; // email is a unique field
            output.fname = currentUser.name.first;
            output.fname = currentUser.name.first;
            output.lname = currentUser.name.last;
            output.city = currentUser.location.city;
            output.state = currentUser.location.state;
            output.urlImg = currentUser.picture.medium;
            output.friends = data.results.splice(1);
            console.log("End proccesing");
        }).catch((error) => console.error(error));
        return output;
    }
    static getPokemon() {
        let output = { name: "", urlImg: "" };
        $.get(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 900)}`).then((res) => {
            output.name = res.name;
            output.urlImg = res.sprites.front_default;
        }).catch((error) => console.error(error));
        return output;
    }
    static getQuote() {
        let output = { text: "" };
        $.get("https://api.kanye.rest").then((res) => { output.text = res.quote; }).catch((error) => console.error(error));
        return output;
    }
    static getAbout() {
        let output = { text: "" };
        $.get("https://baconipsum.com/api/?type=all-meat&paras=1").then((res) => { output.text = res[0]; }).catch((error) => console.error(error));
        return output;
    }
}
