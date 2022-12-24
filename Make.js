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
            var testDir=uniquePaths[i]+'Test/'
            var dir=uniquePaths[i]
            var fileBase=dir.split('/')[dir.split('/').length-2]
            console.log(fileBase)
            if (!fs.existsSync(dir)){
                fs.mkdirSync(dir);
            }
            if (!fs.existsSync(testDir)){
                fs.mkdirSync(testDir);
            }
            this.cFile(dir, fileBase)
            this.hFile(dir, fileBase)
            this.cTest(testDir)
            this.hTest(testDir)
            this.cDriver(testDir)
            this.hDriver(testDir)
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