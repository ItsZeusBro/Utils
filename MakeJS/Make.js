import {makeObject} from "./MakeObject.js"
import {MakeFile} from "./MakeFile.js"
import { Project } from "./Project.js"
import fs from "node:fs"

class Make{
    constructor(makeObject, flags){
        this.save(makeObject, flags)
        this.clean(makeObject, flags)
        this.makeFile = new MakeFile(makeObject, flags)
        this.projectFiles = new Project(makeObject, flags);
    }

    clean(makeObject, flags){
        if(flags.includes('-clean')){
            for(var i = 0; i<Object.keys(makeObject).length; i++){
                if(fs.existsSync(Object.keys(makeObject)[i])){
                    fs.rmSync(Object.keys(makeObject)[i], {recursive:true})
                }
            }
        }
        
    }
    save(makeObject, flags){
        if(flags.includes('-save')){
            var dir;
            for(var i = 0; i<flags.length; i++){
                if(flags[i]=='-save'){
                    if(i+1<flags.length){
                        dir=flags[i+1]
                    }else{
                        dir='./'
                    }
                }
            }
            var keys = Object.keys(makeObject)
            for(var i = 0; i<keys.length; i++){
                if(keys[i].slice().split('/').length==2||keys[i].slice().split('/').length==3){
                    if(fs.existsSync(keys[i])){
                        fs.cpSync(keys[i], dir, {recursive:true, force:true})
                    }
                }
            }
        }
    }
}

new Make(makeObject, process.argv.slice(2))