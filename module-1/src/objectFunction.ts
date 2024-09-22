const poorUser = {
    name:"Ashequr",
    balance: 78,
    addBalance(balance:number):number{
        return balance+this.balance
    }
}

poorUser.addBalance(90);