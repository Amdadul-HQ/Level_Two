{
// Abstraction in OOP
// Two way to create abstraction 1. interface 2. abstract class

interface Vehicle {
    startEngine():void;
    stopEngine():void;
    move():void;
}

class Vehicle1 implements Vehicle {
    name:string
    constructor(name:string){
        this.name = name
    }
    startEngine(): void {
        console.log(`${this.name} start the engine`);
    }
    stopEngine(): void {
        console.log(`${this.name} stop the engine`);
    }
    move(): void {
        console.log(`${this.name} move the engine`);
    }
    
    
}
abstract class Car {
   abstract startEngine() :void;
   abstract stopEngine():void;
   abstract RunEngine():void;
}

class Car2 extends Car {
    name:string
    constructor(name:string){
        super()
        this.name = name
    }

    startEngine(): void {
        console.log(`${this.name} start the engine`);
    }
    stopEngine(): void {
        console.log(`${this.name} stop the engine`);
    }
    RunEngine(): void {
        console.log(`${this.name} is Runing the engine`);
    }
}


const vehicle1 = new Car2("Amdadul")
vehicle1.RunEngine()

const vehicle = new Vehicle1("Amdadul")

vehicle.stopEngine()


}