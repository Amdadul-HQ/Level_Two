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




}