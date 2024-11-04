{
    // Getter and setter
    class BankAccount{
        readonly id:string; //Read Only
        name:string;
        // private _balance:number;//Private property
        protected _balance:number; //Protected property
        constructor(id:string,name:string,balance:number){
            this._balance=balance
            this.id=id
            this.name= name
        }

        // Getter
        get Balance (){
            return this._balance
        }

        // Setter
        set AddBalance(amount:number){
            this._balance= this._balance + amount
        }


        // addBalance(amount:number){
        //    return this._balance =this._balance + amount
        // }
        // getBalance(){
        //     return this._balance
        // }
    }
    
    const goribErAccount = new BankAccount("2222222","Amdadul",100)
    
    goribErAccount.AddBalance = 20
    // const myTotalBalance = goribErAccount.addBalance(10)
    // console.log(myTotalBalance);
    
    // const myBalance = goribErAccount.getBalance()
    const  myBalance = goribErAccount.Balance
    console.log(myBalance);
    
    // class StudentAccount extends BankAccount {
    //     test(){
    //         this._balance
    //     }
    // }





}