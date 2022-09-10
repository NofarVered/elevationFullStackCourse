class render{
    static clean():void {
        $("#friends-div").empty();
        $("#user-div").empty();
        $("#pokemon-div").empty();
        $("#quote-div").empty();
        $("#about-div").empty();
    }
    static renderPerson(user:Person):void {
        let source = $("#user-template").html();
        let template = Handlebars.compile(source);
        $("#user-div").append(template(user));
        
        source = $("#friends-template").html();
        template = Handlebars.compile(source);
        $("#friends-div").append(template({ friends: user.friends }));
    }
    static renderQuote(quote: Quote):void {
        const source = $("#quote-template").html();
        let template = Handlebars.compile(source);
        $("#quote-div").append(template(quote));
    }
    static renderPokemon(pokemon: Pokemon):void {
        const source = $("#pokemon-template").html();
        let template = Handlebars.compile(source);
        $("#pokemon-div").append(template(pokemon));
    }
    static renderAboutMe(about: About):void {
        const source = $("#about-template").html();
        let template = Handlebars.compile(source);
        $("#about-div").append(template(about));
    }

}
