abstract class Shape {
    shape : string;

    constructor(shape : string){
        this.shape = shape;
    }

    abstract draw() : void;

    displayShape(){
        console.log('given shape',this.shape);
    }
}

class Square extends Shape{
    constructor(shape : string){
        super(shape);
    }

    draw(): void {
        // draw square here
        console.log('square is draw')
    }
}

const s = new Square('sqaure');
s.displayShape();
s.draw();


class Circle extends Shape{
    constructor(shape : string){
        super(shape);
    }

    draw(): void {
        // draw square here
        console.log('circle is draw')
    }
}
const c = new Circle('circle');
c.displayShape();
c.draw();

