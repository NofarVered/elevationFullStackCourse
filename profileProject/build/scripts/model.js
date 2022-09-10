"use strict";
class Model {
    constructor() {
        this.pokemon = apiGenerator.getPokemon();
        this.quote = apiGenerator.getQuote();
        this.about = apiGenerator.getAbout();
        this.user = apiGenerator.getPerson();
    }
}
// console.log(new Model())
