import fs from 'node:fs'

export class MakeFile{
    constructor(makeObject, flags){
       
       fs.writeFileSync('./makefile', this.makefileOutput);
    }

   



    
}

// new MakeFile(makeObject)