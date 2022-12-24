import {makeObject} from "./MakeObject.js"
import fs from 'node:fs'

class Make{
    constructor(makeObject){
        this.uniquePaths=this.uniquePaths(makeObject)
        this.buildPaths(this.uniquePaths)
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

    buildPaths(uniquePaths){
        for(var i=0; i<uniquePaths.length; i++){
            console.log(uniquePaths[i])
            if (!fs.existsSync(uniquePaths[i])){
                fs.mkdirSync(uniquePaths[i]);
            }
            if (!fs.existsSync(uniquePaths[i]+'Test/')){
                fs.mkdirSync(uniquePaths[i]+'Test/');
            }

        }
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