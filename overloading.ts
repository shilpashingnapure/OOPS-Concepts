// multiple methods with same name and same return type , but diff number of parameters or diff parameter types.
class Maths{
    constructor(){

    }

    // overload method with 2 params
    sum(a : number,b : number) : number;

    // overload method with 3 params
    sum(a : number , b : number , c : number) : number ;

    // implementation of method
    sum(a : number , b : number , c? : number) : number{
        if ( c == undefined){
            return a + b;
        }else{
            return a + b + c;
        }
    }


}

const m = new Maths();

console.log(m.sum(1 , 2));
console.log(m.sum(1 , 2 ,3));