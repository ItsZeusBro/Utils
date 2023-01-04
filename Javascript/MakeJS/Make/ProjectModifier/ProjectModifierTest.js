
export var ProjectModifier = [
    {
        "action":"add",
        "module":"./Project/",
        "dependencies": []
    }, 
    {   
        "action":"add",
        "module":"./Project/CTools/",
        "dependencies": ["./Project/CTools/Automata/Automata.h"]
    },

    {   
        "action":"add",
        "module":"./Project/CTools/Automata/",
        "dependencies": []
    },


    {   
        "action":"add",
        "module":"./Project/CTools/Combinatorics/", 
        'dependencies': ["./Project/CTools/Automata/Automata.h"]
    },

    // {   
    //     "action":"move",
    //     "module":"./CTools/Combinatorics/",
    //     "to": "./CTools/Combinatorics1/"
    // },
    // {   
    //     "action":"add",
    //     "module":"./CTools/Utils/", 
    //     'dependencies': []
    // },
    // {   
    //     "action":"move",
    //     "module":"./CTools/Combinatorics1/",
    //     "to": "./CTools/Utils/Combinatorics/"
    // }
]

//1. delete
//2. refactor
//3. add


//it can also be an object
// "./CTools/Combinatorics/":[],
// "./CTools/Crypto/":[],
// "./CTools/Matrix/":[],
// "./CTools/Stats/":[],
// "./CTools/Utils/":[],
// "./CTools/Utils/Assertions/":[],
// "./CTools/Utils/Dictionary/":[],
// "./CTools/Utils/Rand/":[],
// "./CTools/Utils/Types/":[],
// "./CTools/Utils/Types/Array/":[],
// "./CTools/Utils/Types/Float/":[],
// "./CTools/Utils/Types/LinkList/":[],
// "./CTools/Utils/Types/Number/":[],
// "./CTools/Utils/Types/String/":[],
// "./CTools/Utils/Types/Unicode/":[]