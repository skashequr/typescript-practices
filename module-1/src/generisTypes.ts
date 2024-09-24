{

    type ArrayData = {
        name: string;
        age:number;
        class: string;
    }

    const student : ArrayData ={
        name: "asjdfnwj",
        age: 88,
        class: "cgfc",
    }

    // generic type array of object
    type GenericType <T> = Array<T>

    const data : GenericType<{name:string ; age:number}> = [
       {
        name: "sddfv",
        age: 88
       }
    ]
        
    // Generic topple

    const manus : [string,string] = ["sheikh " ,"ashequr"];

    //generic mode

    type GeenericTople <X,Y> = [X,Y];

    const manush2 : GeenericTople<string,string> =["ds" ,"sdgd"]
    
}