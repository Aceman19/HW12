class human {
    constructor(name,stamina,strength,marksmanship,mentality) {
        this._name = name;
        this._stamina = stamina;
        this._strength = strength;
        this._marksmanship = marksmanship;
        this._mentality = mentality;
    }

    get name() {
        return this._name;
    }

    get stamina() {
        return this._stamina;
    }

    get strength() {
        return this._strength;
    }

    get marksmanship() {
        return this._marksmanship;
    }

    get mentality() {
        return this._mentality;
    }
}

var Tyler = new human("Tyler", 69, 75, "66%", "Passive");
console.log(Tyler.name);
console.log(Tyler.stamina);
console.log(Tyler.strength);
console.log(Tyler.marksmanship);
console.log(Tyler.mentality);


class Marine extends human {
    constructor(ID, name,stamina,strength,marksmanship,mentality) {
        super(name,stamina,strength,marksmanship,mentality);
        this._ID = ID;
    }

    get ID() {
        return this._ID;
    }

    incrementStamina() {
        this._stamina += 23;
    }

    incrementStrength() {
        this._strength += 20;
    }

}

var Tyler = new Marine( "TS-3689","Tyler", 69, 75, "96%", "Aggressive");
Tyler.incrementStamina();
Tyler.incrementStrength();
console.log(Tyler.ID);
console.log(Tyler.name);
console.log(Tyler.stamina)
console.log(Tyler.strength);
console.log(Tyler.marksmanship);
console.log(Tyler.mentality);