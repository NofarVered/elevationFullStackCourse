"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
class Model {
    constructor() {
        this.user = utils_1.apiGenerator.getPerson();
        this.pokemon = utils_1.apiGenerator.getPokemon();
        this.quote = utils_1.apiGenerator.getQuote();
        this.about = utils_1.apiGenerator.getAbout();
    }
}
// console.log(new Model());
