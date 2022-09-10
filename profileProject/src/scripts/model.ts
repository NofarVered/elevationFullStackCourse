import {Person, Pokemon, Quote, About, apiGenerator} from './utils'

class Model {
    private user: Person;
    private pokemon: Pokemon;
    private quote: Quote;
    private about: About;
    
    constructor(){
        this.user=apiGenerator.getPerson();
        this.pokemon=apiGenerator.getPokemon();
        this.quote=apiGenerator.getQuote();
        this.about=apiGenerator.getAbout();
    }
}

// console.log(new Model());