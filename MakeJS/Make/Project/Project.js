import fs from 'node:fs'
import path from "node:path"
import assert from "node:assert"

export class Project{
    constructor(base, makeObject){
        //base could be absolute or relative to the current working Path
        //we want the absolute pth either way ../../base or /some/pth/to/base
        this.makeObject=makeObject;
        this.base;
        if(path.isAbsolute(base)){ if(base[base.length-1]=='/'){this.base=base}else{this.base=base+'/'}}
        else{if(base[base.length-1]=='/'){this.base=path.resolve('../', base)}else{this.base=path.resolve('../', base)+'/'}}
    }

    refreshProject(makeObject){
        var directories=Object.keys(makeObject)
        for(var i=0; i<directories.length; i++){
            console.log(this.basePath(directories[i]))
        }

        //the project should always resemble the makeObject state
        //files outside the dependencies should not be modified
        //new modules are created with the Project and Module Classes
        //modules are deleted using the Project and Module Classes
        //modules are moved using the Project Class

        //all projects begin with a base Path ./Base/
        //all modules are built using the base Path namespace
        //because we are using the makeObject, there no namespace collisions, 
        //just modification of the dependencies

        //Project and MakeFile utilities are accessed through the modifier and makeObject
        //which can be accessed directly or through a command line interface


        // for(var i=0; i<directories.length; i++){
        //     var Path=directories[i].slice()
        //     var testPath=this.testPath(Path)
        //     this.createPath(Path)
        //     this.createPath(testPath)
        //     var fileBase=Path.split('/')[Path.split('/').length-2]
        //     var dependencies=makeObject[Path]
        //     for(var n=0; n<dependencies.length; n++){
        //         var m =Path.slice().split('/').length-3
        //         var pth=``
        //         for(var j = 0; j<m; j++){
        //             pth+=`../`
        //         }
        //         pth+=dependencies[n]
        //         dependencies[n]=pth
        //     }
        //     if(!this.createHFile(Path, dependencies)){
        //         this.updateFileDependencies(Path+fileBase+'.h', dependencies);
        //     }
        //     this.createHTestFile(testPath)
        //     this.createHTestDriverFile(testPath)
        //     this.createCFile(Path)
        //     this.createCTestFile(testPath)
        //     this.createCTestDriverFile(testPath)
        // }
    }


    updateFileDependencies(file, dependencies){

        if(this.exists(file)){
            var data = fs.readFileSync(file, 'UTF-8');
            var lines = data.split(/\r?\n/);
            //we only want to update dependencies that do not already exist in the file
            //we also do not want to overwrite the other parts of the file
            //there is no other possibility except for removing an existing dependency
            //that we know should not belong in the file by way of some express intent to remove
        }
        return false
    }

    isMainPath(dir){
        if(dir.split('/').length==3){
            return true
        }else{
            return false
        }
    }

    createCMainFile(Path, fileBase){
        if(this.isMainPath(Path)&&!this.exists(Path+fileBase+'.c')){
            var output = 
            `#include `+`"`+fileBase+'.h'+`"\n`+
            `#include <stdio.h>\n\n`+
            `int main(int argc, char *argv[]){\n`+
            `\tprintf("argc: %d, argv: %s", argc, argv);\n`+
            `\treturn 0;\n`+`}`
            fs.writeFileSync(Path+fileBase+'.c', output);
            return true
        }else{
            return false
        }
    }


    createPath(pth){ 
        var paths=pth.split('/')
        var _paths=''
        for(var i = 0; i<paths.length; i++){
            _paths=_paths+paths[i]+'/'
            if(!fs.existsSync(this.projectPath(_paths))){ 
                console.log(this.projectPath(_paths))
                fs.mkdirSync(this.projectPath(_paths))
            }
        }
    }

    createFile(pth){ 
        var paths=pth.split('/')
        var file=paths.pop()
        var _paths=''
        for(var i = 0; i<paths.length; i++){
            _paths=_paths+paths[i]+'/'
            if(!fs.existsSync(this.projectPath(_paths))){ 
                console.log(this.projectPath(_paths))
                fs.mkdirSync(this.projectPath(_paths))
            }
        }
        paths.push(file)
        console.log(this.projectFile(paths.join('/')))
        fs.writeFileSync(this.projectFile(paths.join('/')), '')
    }


    deletePath(pth){ if(fs.existsSync(this.projectPath(pth))){ return fs.rmSync(this.projectPath(pth), {recursive:true}) } }
    basePath(){ return this.base }
    testPath(pth){ if(this.inProjectBoundary(this.projectPath(pth))){ return this.projectPath(pth)+'Test/' } }
    projectPath(pth){ return path.resolve(this.base, pth)+'/' }
    projectPathExists(pth){ return fs.existsSync(this.projectPath(pth)) }
    deleteFile(pth){ if(fs.existsSync(this.projectFile(pth))){ return fs.rmSync(this.projectFile(pth))} }
    testExec(pth){ if(this.inProjectBoundary(this.projectFile(pth))){ return this.testPath(this.projectPath(pth))+'test.e'} }
    mainExec(){ return this.base+'main.e'}
    moduleC(pth){ if(this.inProjectBoundary(this.projectFile(pth))){ return this.projectPath(pth)+this.projectPath(pth).split('/').slice(-2)[0]+'.c'} }
    moduleH(pth){ if(this.inProjectBoundary(this.projectFile(pth))){ return this.projectPath(pth)+this.projectPath(pth).split('/').slice(-2)[0]+'.h'} }
    moduleO(pth){ if(this.inProjectBoundary(this.projectFile(pth))){ return this.projectPath(pth)+this.projectPath(pth).split('/').slice(-2)[0]+'.o'} }
    testC(pth){ if(this.inProjectBoundary(this.projectFile(pth))){ return this.testPath(this.projectPath(pth))+'Test.c'} }
    testH(pth){ if(this.inProjectBoundary(this.projectFile(pth))){ return this.testPath(this.projectPath(pth))+'Test.h'} }
    testO(pth){ if(this.inProjectBoundary(this.projectFile(pth))){ return this.testPath(this.projectPath(pth))+'Test.o'} }
    testDriverC(pth){ if(this.inProjectBoundary(this.projectFile(pth))){ return this.testPath(this.projectPath(pth))+'Driver.c'} }
    testDriverH(pth){ if(this.inProjectBoundary(this.projectFile(pth))){ return this.testPath(this.projectPath(pth))+'Driver.h'} }
    testDriverO(pth){ if(this.inProjectBoundary(this.projectFile(pth))){ return this.testPath(this.projectPath(pth))+'Driver.o'} }
    inProjectBoundary(pth){if(pth.includes(this.base)){ return true }else{return false} }
    projectFile(pth){ return path.resolve(this.base, pth) }
    projectFileExists(pth){ return fs.existsSync(this.projectFile(pth)) }

    createModule(pth, dependencies){
        pth=this.projectPath(pth)
        if(this.inProjectBoundary(pth)){
            this.moduleHFile(pth, dependencies)
            this.moduleCFile(pth, dependencies)
            this.moduleTestHFile(pth, dependencies)
            this.moduleTestCFile(pth, dependencies)
            this.moduleTestDriverHFile(pth, dependencies)
            this.moduleTestDriverCFile(pth, dependencies)
        }
    }
    moduleHFile(pth, dependencies){
        this.createFile(this.moduleH(pth))

        var fileBase=this.moduleH(pth).split('/')[this.moduleH(pth).split('/').length-2];
        console.log(fileBase)
        // var fileDescriptor=(Path.split('/').slice(1).join('_')+fileBase).toUpperCase();
        // var output = `#ifndef ${fileDescriptor}\n#define ${fileDescriptor}\n\n`;
        // output+=`//?\n`
        // for(var i=0; i<dependencies.length; i++){
        //     var m =Path.slice().split('/').length-3;
        //     output+= `#include `+`"`+dependencies[i]+`"\n`;
        // }
        // output+=`\n//?\n`
        // output+=`#endif`;
        // fs.writeFileSync(Path+fileBase+'.h', output);


    }

    moduleTestHFile(pth, dependencies){
        this.createFile(this.testH(pth))
        var fileBase=this.testH(pth).split('/')[this.testH(pth).split('/').length-2];
        console.log(fileBase)
        // var fileBase=Path.split('/')[Path.split('/').length-3];
        // var fileDescriptor=(Path.split('/').slice(1).join('_')+'Test').toUpperCase();
        // var output2 = `#include "../`+fileBase+`.h"`;
        // var output3 = `int _${fileDescriptor}(int argc, char *argv[]);`;
        // var output = 
        //     `#ifndef ${fileDescriptor}\n`+
        //     `#define ${fileDescriptor}\n\n`+
        //     output2+`\n\n`+
        //     output3+`\n\n`+
        //     `#endif`
        // fs.writeFileSync(Path+'Test'+'.h', output);
    }

    moduleTestCFile(pth, dependencies){
        this.createFile(this.testC(pth))
        var fileBase=this.testC(pth).split('/')[this.testC(pth).split('/').length-2];
        console.log(fileBase)

        // var fileBase=Path.split('/')[Path.split('/').length-2];
        // if(this.isMainPath(Path)){
        //     return this.createCMainFile(Path, fileBase);
        // }else{
        //     var output = `#include `+`"`+fileBase+'.h'+`"\n`
        //     fs.writeFileSync(Path+fileBase+'.c', output);
        //     return true
        // }
    }

    moduleTestDriverHFile(pth, dependencies){
        this.createFile(this.testDriverH(pth))
        var fileBase=this.testDriverH(pth).split('/')[this.testDriverH(pth).split('/').length-2];
        console.log(fileBase)
        // var fileDescriptor=(Path.split('/').slice(1).join('_')+'driver').toUpperCase();
        // var output = `#ifndef ${fileDescriptor}\n`+
        // `#define ${fileDescriptor}\n`+
        // `#include "Test.h"\n`+
        // `#endif`
        // fs.writeFileSync(Path+'Driver'+'.h', output);
    }

    moduleTestDriverCFile(pth, dependencies){
        this.createFile(this.testDriverC(pth))
        var fileBase=this.testDriverC(pth).split('/')[this.testDriverC(pth).split('/').length-2];
        console.log(fileBase)

        // var fileDescriptor=(Path.split('/').slice(1).join('_')+'driver').toUpperCase();
        // var output = `#ifndef ${fileDescriptor}\n`+
        // `#define ${fileDescriptor}\n`+
        // `#include "Test.h"\n`+
        // `#endif`
        // fs.writeFileSync(Path+'Driver'+'.h', output);
    }

    moduleCFile(pth, dependencies){
        this.createFile(this.moduleC(pth))
        var fileBase=this.moduleC(pth).split('/')[this.moduleC(pth).split('/').length-2];
        console.log(fileBase)

        // var fileDescriptor=(Path.split('/').slice(1).join('_')+'Test').toUpperCase();
        // var output = 
        // `#include `+`"`+'Test'+'.h'+`"\n\n`+
        // `int _${fileDescriptor}(int argc, char *argv[]){\n\n\treturn 0;\n}`;
        // fs.writeFileSync( Path+'Test'+'.c', output);
    }

    moduleHFile(pth, dependencies){
        this.createFile(this.moduleH(pth))
        var fileBase=this.moduleH(pth).split('/')[this.moduleH(pth).split('/').length-2];
        console.log(fileBase)
    }
}