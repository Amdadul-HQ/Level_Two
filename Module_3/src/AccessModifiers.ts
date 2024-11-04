{

    
class BankAccount{
    readonly id:string; //Read Only
    name:string;
    private balance:number;
    constructor(id:string,name:string,balance:number){
        this.balance=balance
        this.id=id
        this.name= name
    }
}

const goribErAccount = new BankAccount("2222222","Amdadul",100)





}