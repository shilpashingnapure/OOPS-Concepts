interface Bird{
    name:string;
    canFly() : void;
}

class Parrot implements Bird{

    name;

    constructor(){
        this.name = 'shilpa';
    }
    canFly() {
        console.log('parrot can fly');
    }
}

let p = new Parrot();
p.canFly();