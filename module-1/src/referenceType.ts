// Objece

const user = {
    name: "sheikh",
    age: 23,
    school: "BMS",
    isAdmin: false

} // this code is just javascript 

// in typescript we can declear data types in this object

const user2 : {
    name: string;
    age: number;
    contuctNumber: number;
    isAdmin: boolean;
    userId?: number;
    company: "Doyel Digital";
    readonly nid : number;

} = {
    name: "sheikh",
    age: 78,
    contuctNumber: 2390230,
    isAdmin: true,
    company: "Doyel Digital", //cant change it
    nid: 45345346
}
// if i have no user id then we use optional chining ? 

// if i have a value theis value if fixed then we used 
// company: "Doyel Digital"
//this value we cant change 

// if just red only cant change value we just add readonly