"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = __importDefault(require("./utils"));
class Model {
    constructor() {
        this.user = utils_1.default.getPerson();
        this.pokemon = utils_1.default.getPokemon();
        this.quote = utils_1.default.getQuote();
        this.about = utils_1.default.getAbout();
    }
}
