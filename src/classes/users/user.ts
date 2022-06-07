export class Users {
    _id: string;
    _Nombre: string;
    _ClassesSelected: Array<string>;
    _RacesSelected: Array<string>;
    constructor(_id: string, _ClassesSelected: Array<string>, _RacesSelected: Array<string>) {
        this._id = _id,
        this._Nombre = this.generateName(),
        this._ClassesSelected = _ClassesSelected,
        this._RacesSelected = _RacesSelected
    }

    set setname(newName: string) {
        this._Nombre=newName;
    }

    generateName() {
        let Availables=["magician", "warrior", "knight", "killer", "assasin", "king", "destroyer"]
        let item=Availables[Math.floor(Math.random()*Availables.length)]
        let randomNum = Math.floor(Math.random()*(999999 - 1)+1)
        let nombreNuevo=item.concat('-', String(randomNum));
        return nombreNuevo
    }

    deleteMyClass(value: string) {
        for(let i=0; i<this._ClassesSelected.length; i++) {
            if(this._ClassesSelected[i]==value) {
                this._ClassesSelected.splice(i,1)
            }
        }
        return this._ClassesSelected
    }

    searchMyClass(value: string) {
        let feedback=false
        this._ClassesSelected.forEach(element => {
            if(element==value) {
                feedback=true
            }
        });
        return feedback
    }

    deleteMyRace(value: string) {
        for(let i=0; i<this._RacesSelected.length; i++) {
            if(this._RacesSelected[i]==value) {
                this._RacesSelected.splice(i,1)
            }
        }
        return this._RacesSelected
    }

    searchMyRace(value: string) {
        let feedback=false
        this._RacesSelected.forEach(element => {
            if(element==value) {
                feedback=true
            }
        });
        return feedback
    }
  }