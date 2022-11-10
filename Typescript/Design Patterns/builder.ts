class Shawarma{
    constructor(
        public meat: string,
        public bread: string,
        public mayonnaise?: boolean,
        public sauce?: boolean,
        public spice?: boolean
    ){}
    addMayonnaise(){
        this.mayonnaise = true;
        return this;
    }
    addSauce(){
        this.sauce = true;
        return this;
    }
    addSpice(){
        this.spice = true;
        return this;
    }
}

const myFood = new Shawarma('Chicken','Kubboos').addMayonnaise().addSauce().addSpice();
console.log(myFood);

/* myFood.addMayonnaise().addSauce().addSpice();
console.log(myFood); */