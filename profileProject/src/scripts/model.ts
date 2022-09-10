class Model {
    private user: Person;
    private pokemon: Pokemon;
    private quote: Quote;
    private about: About;
    
    constructor(){
        this.pokemon=apiGenerator.getPokemon();
        this.quote=apiGenerator.getQuote();
        this.about=apiGenerator.getAbout();
        this.user=apiGenerator.getPerson();
    }
}

// console.log(new Model())