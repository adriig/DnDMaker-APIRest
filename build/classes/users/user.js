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
    deleteMyClass(value) {
        for (let i = 0; i < this._ClassesSelected.length; i++) {
            if (this._ClassesSelected[i] == value) {
                this._ClassesSelected.splice(i, 1);
            }
        }
        return this._ClassesSelected;
    }
    searchMyClass(value) {
        let feedback = false;
        this._ClassesSelected.forEach(element => {
            if (element == value) {
                feedback = true;
            }
        });
        return feedback;
    }
    deleteMyRace(value) {
        for (let i = 0; i < this._RacesSelected.length; i++) {
            if (this._RacesSelected[i] == value) {
                this._RacesSelected.splice(i, 1);
            }
        }
        return this._RacesSelected;
    }
    searchMyRace(value) {
        let feedback = false;
        this._RacesSelected.forEach(element => {
            if (element == value) {
                feedback = true;
            }
        });
        return feedback;
    }
}
exports.Users = Users;
