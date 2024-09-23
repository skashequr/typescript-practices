// amra jei kaj gulo type diye korte pari eki kaj gulo amra interface diyeo korte karbo.
{

        type UserData = {
            name:string;
            age:number;
        }


        const newData = user2


        interface UserData2{
            name: string;
            age:number
        }

       

        const user:UserData ={
            name:"sdasdf",
            age: 453,
            
        }

        type UserWithRole = UserData & {role:string}

        const user6 : UserWithRole = {
            name:"chgchc",
            age:67,
            role:"drf",
        }


        // ei kaj ta amra interface diye korte pari/
        interface Useer5 {
            name:string;
            age:number;
            role:string;
        }
        const user5 : Useer5 ={
            name:"string",
            age:99,
            role:"string",
        }
        interface Roll4 extends Useer5 {
            rolell:string
        }
        const user99 : Roll4 ={
            name:"string",
            age:99,
            role:"string",
            rolell:"jbjb"
        }
        





        // interface in array
        interface Roll2{
            [index : number] : number
        }

        const randNumber : Roll2 = [2,4,23,342,4,2]



        // type
        function xyz(p1:number,p2:number):number{
            return 99
        }

        interface Addition{
            (num:number , num1:number) : number
        }
        
        const add : Addition = (num:number=3,num1:number=3)=> num+num1;
}
// type 