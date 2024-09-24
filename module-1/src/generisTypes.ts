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
        
    
}