{
    type FontendDeveloper = "Basic Strong" | "Basic Week";


    type User = {
        name:string;
        bloogGroup: "O+" | "A+" | "AB+";
    }

    const user : User = {
        name: "Sheikh",
        bloogGroup: "A+"
    }

    type FontendDev = {
        skill: string[];
        dev2: "fontend dev";
    }
    
    type BackendDev = {
        skill: string[];
        dev1: "backend dev";
    }
    
    type FullStackDev = BackendDev & FontendDev;
    
    const developer : FullStackDev= {
        skill: ["HTML", "CSS"],
        dev2: "fontend dev", // This value should match the one required for FontendDev
        dev1: "backend dev"
    };
    
}