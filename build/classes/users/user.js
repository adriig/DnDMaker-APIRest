"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
class Users {
    constructor(_id, _ClassesSelected, _RacesSelected) {
        this._id = _id,
            this._Nombre = this.generateName(),
            this._ClassesSelected = _ClassesSelected,
            this._RacesSelected = _RacesSelected;
    }
    set setname(newName) {
        this._Nombre = newName;
    }
    generateName() {
        let Availables = ["magician", "warrior", "knight", "killer", "assasin", "king", "destroyer"];
        let item = Availables[Math.floor(Math.random() * Availables.length)];
        let randomNum = Math.floor(Math.random() * (999999 - 1) + 1);
        let nombreNuevo = item.concat('-', String(randomNum));
        return nombreNuevo;
    }
    searchMyClass(value) {
        let feedback = false;
        this._ClassesSelected.forEach(element => {
            if (element == value) {
                feedback = true;
            }
        });
        console.log(feedback);
        return feedback;
    }
}
exports.Users = Users;
