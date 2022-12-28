import fs from 'node:fs'

export class MakeFile{
    constructor(oldMakeObject, newMakeObject){
        this.oldMakeObject=oldMakeObject;
        this.newMakeObject=newMakeObject;
        this.context(oldMakeObject, newMakeObject)
        //fs.writeFileSync('./makefile', this.makefileOutput);
    }

    context(oldMakeObject, newMakeObject){

    }

    modify(){
        //copy existing makefile object and change only what the descriptor describes in its actions field
        //and returns the new makefile object
    }

    create(){

    }

    refactor(path, toPath){

    }

    depend(path, dependsOnPath){

    }

    add(path, dependencies){

    }
}

// new MakeFile(makeObject)