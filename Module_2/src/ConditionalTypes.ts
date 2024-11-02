{
    // Conditional Types
    type A1 = number
    type B1 = null

    type C1 = A1 extends null ? true : B1 extends string ? string : undefined


    type Shaik = {
        bike : string,
        car : string,
        ship: string
    }

    type CheckVehicle<T> = T extends keyof Shaik ?  true : false

    type HasCar =  CheckVehicle<"car">

    type HasTractor = CheckVehicle<"Tractor">


}