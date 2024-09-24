const createArray = <T>(keyvalue:T):T[] => {
    return [keyvalue]
}

const val = createArray<{name:string}>({name:"dfsfdfgwa"})

// if multiple parameters needs then

const multiDatafun = <T , Q>(importenVal:T ,nonImpotentVal:Q):[T,Q] =>{
    return [importenVal , nonImpotentVal]
}