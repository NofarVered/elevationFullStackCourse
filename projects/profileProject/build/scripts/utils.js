"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class apiGenerator {
    static getPerson() {
        return __awaiter(this, void 0, void 0, function* () {
            let output = { key: "", fname: "", lname: "", city: "", state: "", urlImg: "", friends: [] };
            const promise = yield $.get("https://randomuser.me/api/?format=JSON&results=7");
            let currentUser = promise.results[0];
            output.key = currentUser.email; //assumption - email is a unique field
            output.fname = currentUser.name.first;
            output.lname = currentUser.name.last;
            output.city = currentUser.location.city;
            output.state = currentUser.location.state;
            output.urlImg = currentUser.picture.large;
            output.friends = promise.results.splice(1);
            return output;
        });
    }
    static getPokemon() {
        return __awaiter(this, void 0, void 0, function* () {
            let output = { name: "", urlImg: "" };
            const randomId = Math.floor(Math.random() * 900);
            const promise = yield $.get(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
            output.name = promise.name;
            output.urlImg = promise.sprites.front_default;
            return output;
        });
    }
    static getQuote() {
        return __awaiter(this, void 0, void 0, function* () {
            let output = { text: "" };
            const promise = yield $.get("https://api.kanye.rest");
            output.text = promise.quote;
            return output;
        });
    }
    static getAbout() {
        return __awaiter(this, void 0, void 0, function* () {
            let output = { text: "" };
            const promise = yield $.get("https://baconipsum.com/api/?type=all-meat&paras=1");
            output.text = promise[0];
            return output;
        });
    }
}
