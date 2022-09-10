class Model {
    user: Person | any;
    pokemon: Pokemon | any;
    quote: Quote | any;
    about: About | any;
    
    constructor(){
        this.user = undefined;
        this.quote = undefined;
        this.pokemon = undefined;
        this.about = undefined;
    }
    async generate(){
        this.user = await apiGenerator.getPerson();
        this.quote = await apiGenerator.getQuote();
        this.pokemon = await apiGenerator.getPokemon();
        this.about = await apiGenerator.getAbout();
    }
}
