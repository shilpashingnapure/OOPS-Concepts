class Car{
    constructor(){

    }

    run(speed : number){
        console.log(`moving at ${speed} mph `)
    }
}

class Honda extends Car{
    constructor(){
        super();
    }

    run(speed : number) {
        console.log('A car is started');
        super.run(speed);


    }
}

const honda = new Honda();
honda.run(100);

