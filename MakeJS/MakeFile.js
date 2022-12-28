import fs from 'node:fs'

export class MakeFile{
    constructor(existingMakeFileobject, makeObjectDescriptor){
        this.existingMakeFileobject=existingMakeFileobject;
        this.makeObjectDescriptor=makeObjectDescriptor;
        this.context(existingMakeFileobject, makeObjectDescriptor)
        //fs.writeFileSync('./makefile', this.makefileOutput);

    }

    context(existingMakeFileobject, makeObjectDescriptor){

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