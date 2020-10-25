export class Ingredient {
    public name: string;
    public amount: number;
    constructor(name: string, amount: number) {
        this.name = name;
        this.amount = amount;
    }
}


// Also valid typescript shorthand:
// export class ingredient {
//        constructor(public name: string, public amount: number) {}
//  }


