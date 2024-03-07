class Parent{
    constructor(){

    }

    Surname(){
        return 'Shingnapure'
    }

    
}



class Child extends Parent{
    constructor(){
        super();
    }

    childName(){
        console.log('Shilpa ' + this.Surname());
    }



}

const ch = new Child();
ch.childName();
