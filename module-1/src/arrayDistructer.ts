const myFrend:string[] = ["Sheikh","Ashequr","Rahman","Jihad","My Name","Done"];

const [,,,jihadName] = myFrend;

const [,,,...rest] = myFrend;


/// Distructers object

{
    const user = {
        id: 123,
        name:{
            frname:"sheokh",
            mdName: "Asheadd",
            lsName: "Rahman",
        },
        contuct : 23524345235,

    }

    const {id , name:{lsName}
    } = user
}