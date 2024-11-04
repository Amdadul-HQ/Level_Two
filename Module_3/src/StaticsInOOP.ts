{
// Statics in OOP
class Counter {
    // static 
    static count : number = 0;
    increment(){
        return Counter.count= Counter.count + 1;
    }
    decrement(){
        return Counter.count= Counter.count - 1;
    }
}


const instanc1 = new Counter();

console.log(instanc1.increment());
console.log(instanc1.increment());
console.log(instanc1.increment());


const instanc2 = new Counter();

console.log(instanc2.increment());

const instanc3 = new Counter();

console.log(instanc3.decrement());

}