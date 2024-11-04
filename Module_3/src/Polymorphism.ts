{
// Polymorphism


class Shape {
    getShape():number{
        return 0;
    }
}

class Circle extends Shape {
    radius:number;
    constructor(radius:number){
        super()
        this.radius= radius
    }
    getShape(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    height:number;
    width:number;
    constructor(height:number,width:number) {
        super()
        this.height=height;
        this.width= width
    }
    getShape(): number {
        return this.height * this.width
    }
}


const shape1 = new Shape()
console.log(shape1.getShape());

const circle = new Circle(10)
console.log(circle.getShape());

const rectangle = new Rectangle(5,2)
console.log(rectangle.getShape());







}