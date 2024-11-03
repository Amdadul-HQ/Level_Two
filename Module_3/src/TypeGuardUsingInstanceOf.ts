{

    class Animal {
        name:string;
        spices:string;
        age:number;
        constructor(name:string,spices:string,age:number){
            this.age= age;
            this.name= name;
            this.spices= spices
        }
        makeSound(){
            console.log("Try to make sound");
        }
    }


    class Dog extends Animal {
        constructor(name:string,spices:string,age:number){
            super(name,spices,age)
        }
        makeBark(){
            console.log(`${this.name} is a Dog & Barking like ${this.spices}`)
        }
    }


    class Cat extends Animal {
        constructor(name:string,spices:string,age:number){
            super(name,spices,age)
        }
        makeMew(){
            console.log(`${this.name} is a Cat & Mewing like ${this.spices}`)
        }
    }


    const isAnimalDog = (animal: Animal) : animal is Dog =>{
        return animal instanceof Dog;
    }
    const isAnimalCat = (animal :Animal) : animal is Cat =>{
        return animal instanceof Cat;
    }

    const getAnimal = (animal: Animal) => {
        if(isAnimalDog(animal)){
            animal.makeBark()
        }
        if(isAnimalCat(animal)){
            animal.makeMew()
        }

    }

    const dog = new Dog("BoB","Tiger",2)
    const cat = new Cat("pookie","Tiger",2)
    getAnimal(dog)
    getAnimal(cat)
   







}