import {makeObject} from "./MakeObject.js"

class Make{
    constructor(makeObject){
        console.log(makeObject)
        this.uniquePaths=this.uniquePaths(makeObject)
        console.log(this.uniquePaths)
        this.filePaths=this.filePaths(makeObject)

    }

    uniquePaths(makeObject){
        var uniquePaths=[]
        var keys = Object.keys(makeObject)
        for(var i=0;  i<keys.length; i++){
            var path=keys[i].split('/')
            path.pop()
            uniquePaths.push(path.join('/')+'/')
        }
        return Array.from(new Set(uniquePaths))
    }

    filePaths(makeObject){

    }

    cFile(){

    }

    hFile(){
        
    }

    cTest(){

    }

    hTest(){

    }

    cDriver(){

    }

    hDriver(){

    }
}


new Make(makeObject)