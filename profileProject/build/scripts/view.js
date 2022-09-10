"use strict";
class View {
    static renderAll(defultUser) {
        this.clean();
        this.renderAbout(defultUser.about);
        this.renderPokemon(defultUser.pokemon);
        this.renderQuote(defultUser.quote);
        this.renderPerson(defultUser.user);
    }
    static clean() {
        $("#friends-div").empty();
        $("#user-div").empty();
        $("#pokemon-div").empty();
        $("#quote-div").empty();
        $("#about-div").empty();
    }
    static renderPerson(user) {
        let source = $("#user-template").html();
        let template = Handlebars.compile(source);
        $("#user-div").append(template(user));
        source = $("#friends-template").html();
        template = Handlebars.compile(source);
        const friendsList = user.friends;
        $("#friends-div").append(template({ friendsList }));
    }
    static renderQuote(quote) {
        const source = $("#quote-template").html();
        let template = Handlebars.compile(source);
        $("#quote-div").append(template(quote));
    }
    static renderPokemon(pokemon) {
        const source = $("#pokemon-template").html();
        let template = Handlebars.compile(source);
        $("#pokemon-div").append(template(pokemon));
    }
    static renderAbout(about) {
        const source = $("#about-template").html();
        let template = Handlebars.compile(source);
        $("#about-div").append(template(about));
    }
}
