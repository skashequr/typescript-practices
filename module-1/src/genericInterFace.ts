interface Developer<T>  {
    name: string;
    pcMdel: {
        cpu: string,
        generation : number,
        ram: string,
        condition: string
    }
    bick: T
}

const amarmotoDev : Developer<{name:string}> = {
    name: "dgff",
    pcMdel:{
        cpu:"i5",
        generation: 10,
        ram:"dfgdf",
        condition: "fresh"

    },
    bick:{
        name:"dfgf"
    }
}