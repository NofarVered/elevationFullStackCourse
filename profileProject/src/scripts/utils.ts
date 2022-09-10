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
    static getPerson(): Person {
        let output:Person = { key: "", fname: "", lname: "", city: "", state: "", urlImg: "", friends: []};
        $.get("https://randomuser.me/api/?results=3").then((data) => {
            let currentUser=data.results[0];
            output.key = currentUser.email;
            output.fname = currentUser.name.first;
            output.fname = currentUser.name.first;
            output.lname = currentUser.name.last;
            output.city = currentUser.location.city;
            output.state = currentUser.location.state;
            output.urlImg = currentUser.picture.medium;
            output.friends = [];
            console.log(data);
          }).catch((error)=> console.error(error));
        return output;
    }
    static getPokemon(): Pokemon { 
        let output:Pokemon = {name:"", urlImg:""};
        $.get(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 900)}`).then((res)=>{
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