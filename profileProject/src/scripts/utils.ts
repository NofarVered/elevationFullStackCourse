interface Person {
    key: string;
    fname: string;
    lname: string;
    city: string;
    state: string;
    urlImg: string;
    friends :string[];
}

interface Pokemon {
    name: string;
    urlImg: string;
}

interface Quote {
    text: string;
}

interface About {
    text: string;
}

class apiGenerator {
    static async getPerson(): Promise<Person> {
        let output:Person = { key: "", fname: "", lname: "", city: "", state: "", urlImg: "", friends: []};
        const promise = await $.get("https://randomuser.me/api/?format=JSON&results=7");
        let currentUser=promise.results[0];
        output.key = currentUser.email; //assumption - email is a unique field
        output.fname = currentUser.name.first;
        output.lname = currentUser.name.last;
        output.city = currentUser.location.city;
        output.state = currentUser.location.state;
        output.urlImg = currentUser.picture.large;
        output.friends = promise.results.splice(1);
        return output;
    }
    static async getPokemon(): Promise<Pokemon> { 
        let output:Pokemon = {name:"", urlImg:""};
        const randomId = Math.floor(Math.random() * 900);
        const promise =await $.get(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
        output.name= promise.name;
        output.urlImg=promise.sprites.front_default;
        return output;
    }
    static async getQuote(): Promise<Quote> {
        let output: Quote = {text: ""};
        const promise = await $.get("https://api.kanye.rest");
        output.text=promise.quote;
        return output;
    }
    static async getAbout(): Promise<About> {
        let output: About = {text: ""};
        const promise = await $.get("https://baconipsum.com/api/?type=all-meat&paras=1");
        output.text=promise[0];
        return output;
    }
}