function Add(num1 : number,num2 : number): number{
    return num1 + num2
}

Add(1,2)

const add = (num1:number,num2:number):number => num1 +num2

//method

const poorUser = {
    name: "Rimon",
    balance: 0,
    addBalance(balance:number){
        return this.balance + balance
    }
}