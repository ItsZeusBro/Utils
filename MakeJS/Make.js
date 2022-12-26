import {makeObject} from "./MakeObject.js"
import {MakeFile} from "./MakeFile.js"
import fs from 'node:fs'

class Make{
    constructor(makeObject, flags){
        this.makeFile = new MakeFile(makeObject, flags)
        this.projectFiles= new Project(makeObject, flags);
    }
}

new Make(makeObject, process.argv[2])