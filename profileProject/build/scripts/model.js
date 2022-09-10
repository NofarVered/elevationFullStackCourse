"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Model {
    constructor() {
        this.user = undefined;
        this.quote = undefined;
        this.pokemon = undefined;
        this.about = undefined;
    }
    generate() {
        return __awaiter(this, void 0, void 0, function* () {
            this.user = yield apiGenerator.getPerson();
            this.quote = yield apiGenerator.getQuote();
            this.pokemon = yield apiGenerator.getPokemon();
            this.about = yield apiGenerator.getAbout();
        });
    }
}
