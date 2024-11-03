{


    class Animal {
        name: string;
        spices:string;
        sound:string;
        constructor(name:string,spices:string,sound:string) {
            this.name = name;
            this.spices = spices;
            this.sound = sound;
        }
        makeSound(){
            console.log(`The ${this.name} sound ${this.sound}`);
        }
    }

    const dog = new Animal("Tiger","Dog","Gew Gew")

    console.log(dog.name);
    dog.makeSound()
      class Person {
        constructor(public name:string,public spices:string,public sound:string) {
        }
        makeSound(){
            console.log(`The ${this.name} sound ${this.sound}`);
        }
    }

    const person = new Person("Amdadul","Human","ouch")

    person.makeSound()
    console.log(person.name);

    




}