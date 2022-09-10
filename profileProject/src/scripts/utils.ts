interface Person {
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
    static getPerson(): Person {
        let output:Person = { fname: "", lname: "", city: "", state: "", urlImg: "", friends: []};
        $.get("https://randomuser.me/api/?format=JSON&results=7").then((res)=>{
            output.fname = res[0].name.first;
            output.lname = res[0].name.last;
            output.city = res[0].location.city;
            output.state = res[0].location.state;
            output.urlImg = res[0].picture.medium;
            output.friends = [];
            }).catch((error)=> console.error(error))
        return output;
    }
    static getPokemon(): Pokemon { 
        let output:Pokemon = {name:"", urlImg:""};
        let randomId=Math.floor(Math.random()*900 +1);
        $.get("https://pokeapi.co/api/v2/pokemon/${randomId}").then((res)=>{
            output.name=res.name;
             output.urlImg=res.sprites.front_default;
            }).catch((error)=> console.error(error))
        return output;
    }
    static getQuote(): Quote {
        let output: Quote = {text: ""};
        $.get("https://api.kanye.rest").then((res)=>{output.text=res.quote}).catch((error)=> console.error(error))
        return output;
    }
    static getAbout(): About {
        let output: About = {text: ""};
        $.get("https://baconipsum.com/api/?type=all-meat&paras=1").then((res)=>{output.text=res[0]}).catch((error)=> console.error(error))
        return output;
    }
}

export {Person, Pokemon, Quote, About, apiGenerator}