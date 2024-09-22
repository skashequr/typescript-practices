{

const user:{
    names:string;
    age:number;
    school:string
} = {
    names:"Sheikh Ashequr Rahman",
    age:90,
    school: "BMS"
}

const user2:{
    deprtment:string;
    adarsh:string
} ={
    deprtment: "mathmatics",
    adarsh:"Khilafat"
}

const personaliti = {
    ...user,
    ...user2
}
}