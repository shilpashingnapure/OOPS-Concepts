// public 
// both are decleared as public
class Employee {
    public empCode : string  = '123';
    empName : string = 'shilpa';
    constructor(){

    }
}

let emp = new Employee();

console.log(emp.empCode)
console.log(emp.empName);


// private
class Employee1{
    private empCode : string = '123';
    empName : string = 'shilpa';

    getCode(){
        console.log(this.empCode);
    }
}
let emp1 = new Employee1();
//console.log(emp1.empCode); /* this will only acceseable within the class */
console.log(emp1.empName);
emp1.getCode();


// protected
/* The protected access modifier is similar to the private access modifier, 
except that protected members can be accessed using their deriving classes.*/

class Employee2{
    protected empCode : string = '123';
    empName : string = 'shilpa';
}
let emp2 = new Employee2();
//console.log(emp1.empCode); /* this will only acceseable within the class */
console.log(emp1.empName);


