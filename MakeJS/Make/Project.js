import fs from 'node:fs'
import path from "node:path"
import assert from "node:assert"

export class Project{
    constructor(base){
        //base could be absolute or relative to the current working directory
        //we want the absolute pth either way ../../base or /some/pth/to/base
        this.base;
        if(this.isAbsolutepth(base)){
            if(base[base.length-1]=='/'){this.base=base}else{this.base=base+'/'}
        }else{
            if(base[base.length-1]=='/'){this.base=path.resolve('../', base)}else{this.base=path.resolve('../', base)+'/'}
        }
    }


    refreshProject(makeObject){
        var directories=Object.keys(makeObject)
        console.log(directories)
        for(var i=0; i<directories.length; i++){
            console.log(this.baseDirectory(directories[i]))
        }


        //the project should always resemble the makeObject state
        //files outside the dependencies should not be modified
        //new modules are created with the Project and Module Classes
        //modules are deleted using the Project and Module Classes
        //modules are moved using the Project Class

        //all projects begin with a base directory ./Base/
        //all modules are built using the base directory namespace
        //because we are using the makeObject, there no namespace collisions, 
        //just modification of the dependencies

        //Project and MakeFile utilities are accessed through the modifier and makeObject
        //which can be accessed directly or through a command line interface


        // for(var i=0; i<directories.length; i++){
        //     var directory=directories[i].slice()
        //     var testDirectory=this.testDirectory(directory)
        //     this.createDirectory(directory)
        //     this.createDirectory(testDirectory)
        //     var fileBase=directory.split('/')[directory.split('/').length-2]
        //     var dependencies=makeObject[directory]
        //     for(var n=0; n<dependencies.length; n++){
        //         var m =directory.slice().split('/').length-3
        //         var pth=``
        //         for(var j = 0; j<m; j++){
        //             pth+=`../`
        //         }
        //         pth+=dependencies[n]
        //         dependencies[n]=pth
        //     }
        //     if(!this.createHFile(directory, dependencies)){
        //         this.updateFileDependencies(directory+fileBase+'.h', dependencies);
        //     }
        //     this.createHTestFile(testDirectory)
        //     this.createHTestDriverFile(testDirectory)
        //     this.createCFile(directory)
        //     this.createCTestFile(testDirectory)
        //     this.createCTestDriverFile(testDirectory)
        // }
    }


    testExec(pth){ if(this.isProjectpth(pth)){return this.testDirectory(this.projectpth(pth))+'test'}}
    mainExec(pth){ if(this.isProjectpth(pth)){return this.baseDirectory(this.projectpth(pth))+'main'}}
    createpth(pth){ if(!fs.existsSync(pth) && this.isProjectpth(pth)){return fs.mkdirSync(this.projectpth(pth));} }
    deletepth(pth){ if(fs.existsSync(pth) && this.isProjectpth(pth)){return fs.rmdirSync(this.projectpth(pth))}}
    createFile(pth){ if(!fs.existsSync(pth) && this.isProjectpth(pth)){return fs.writeFileSync(this.projectpth(pth), '')}}
    deleteFile(pth){ if(fs.existsSync(pth) && this.isProjectpth(pth)){return fs.rmSync(this.projectpth(pth))}}
    

    moduleC(pth){if(this.isProjectpth(this.projectpth(pth))){return this.projectpth(pth)+this.projectpth(pth).split('/').slice(-2)[0]+'.c'}}
    moduleH(pth){if(this.isProjectpth(this.projectpth(pth))){return this.projectpth(pth)+this.projectpth(pth).split('/').slice(-2)[0]+'.h'}}
    moduleO(pth){if(this.isProjectpth(this.projectpth(pth))){return this.projectpth(pth)+this.projectpth(pth).split('/').slice(-2)[0]+'.o'}}
    testDirectory(pth){ if(this.isProjectpth(this.projectpth(pth))){return this.projectpth(pth)+'Test/' }}
    testC(pth){ if(this.isProjectpth(this.projectpth(pth))){return this.testDirectory(this.projectpth(pth))+'Test.c'}}
    testH(pth){ if(this.isProjectpth(this.projectpth(pth))){return this.testDirectory(this.projectpth(pth))+'Test.h'}}
    testO(pth){ if(this.isProjectpth(this.projectpth(pth))){return this.testDirectory(this.projectpth(pth))+'Test.o'}}
    testDriverC(pth){ if(this.isProjectpth(this.projectpth(pth))){return this.testDirectory(this.projectpth(pth))+'Driver.c'}}
    testDriverH(pth){ if(this.isProjectpth(this.projectpth(pth))){return this.testDirectory(this.projectpth(pth))+'Driver.h'}}
    testDriverO(pth){ if(this.isProjectpth(this.projectpth(pth))){return this.testDirectory(this.projectpth(pth))+'Driver.o'}}
    isProjectpth(pth){if(pth.includes(this.base)){return true}else{return false}}
    isAbsolutepth(pth){if(pth[0]=='.'){return false}else if(pth[0]=='/'){return true}}
    projectpth(pth){return path.resolve(this.base, pth)+'/'}
    // isProjectMain(pth){if(dir.split('/').length==3&&)}



    updateFileDependencies(file, dependencies){

        if(this.exists(file)){
            var data = fs.readFileSync(file, 'UTF-8');
            var lines = data.split(/\r?\n/);
            console.log(lines)
            //we only want to update dependencies that do not already exist in the file
            //we also do not want to overwrite the other parts of the file
            //there is no other possibility except for removing an existing dependency
            //that we know should not belong in the file by way of some express intent to remove
        }
        return false
    }

    isMainDirectory(dir){
        if(dir.split('/').length==3){
            return true
        }else{
            return false
        }
    }

    createCMainFile(directory, fileBase){
        if(this.isMainDirectory(directory)&&!this.exists(directory+fileBase+'.c')){
            var output = 
            `#include `+`"`+fileBase+'.h'+`"\n`+
            `#include <stdio.h>\n\n`+
            `int main(int argc, char *argv[]){\n`+
            `\tprintf("argc: %d, argv: %s", argc, argv);\n`+
            `\treturn 0;\n`+`}`
            fs.writeFileSync(directory+fileBase+'.c', output);
            return true
        }else{
            return false
        }
    }
}

class Module{

    createHFile(directory, dependencies){
        if(this.exists(directory+fileBase+'.h')){
            return false
        }else{
            var fileBase=directory.split('/')[directory.split('/').length-2];
            var fileDescriptor=(directory.split('/').slice(1).join('_')+fileBase).toUpperCase();
            var output = `#ifndef ${fileDescriptor}\n#define ${fileDescriptor}\n\n`;
            output+=`//?\n`
            for(var i=0; i<dependencies.length; i++){
                var m =directory.slice().split('/').length-3;
                output+= `#include `+`"`+dependencies[i]+`"\n`;
            }
            output+=`\n//?\n`
            output+=`#endif`;
            fs.writeFileSync(directory+fileBase+'.h', output);
        }
    }

    createHTestFile(directory){
        var fileBase=directory.split('/')[directory.split('/').length-3];
        var fileDescriptor=(directory.split('/').slice(1).join('_')+'Test').toUpperCase();
        var output2 = `#include "../`+fileBase+`.h"`;
        var output3 = `int _${fileDescriptor}(int argc, char *argv[]);`;
        var output = 
            `#ifndef ${fileDescriptor}\n`+
            `#define ${fileDescriptor}\n\n`+
            output2+`\n\n`+
            output3+`\n\n`+
            `#endif`
        fs.writeFileSync(directory+'Test'+'.h', output);
    }

    createHTestDriverFile(directory){
        var fileDescriptor=(directory.split('/').slice(1).join('_')+'driver').toUpperCase();
        var output = `#ifndef ${fileDescriptor}\n`+
        `#define ${fileDescriptor}\n`+
        `#include "Test.h"\n`+
        `#endif`
        fs.writeFileSync(directory+'Driver'+'.h', output);
    }


    createCFile(directory){
        var fileBase=directory.split('/')[directory.split('/').length-2];
        if(this.isMainDirectory(directory)){
            return this.createCMainFile(directory, fileBase);
        }else{
            var output = `#include `+`"`+fileBase+'.h'+`"\n`
            fs.writeFileSync(directory+fileBase+'.c', output);
            return true
        }
    }


    createCTestFile(directory){
        var fileDescriptor=(directory.split('/').slice(1).join('_')+'Test').toUpperCase();
        var output = 
        `#include `+`"`+'Test'+'.h'+`"\n\n`+
        `int _${fileDescriptor}(int argc, char *argv[]){\n\n\treturn 0;\n}`;
        fs.writeFileSync( directory+'Test'+'.c', output);
    }


    createCTestDriverFile(directory){
        var fileDescriptor1=(directory.split('/').slice(1).join('_')+'Driver').toUpperCase();
        var fileDescriptor2=(directory.split('/').slice(1).join('_')+'Test').toUpperCase();
        var output=
        `#include <stdio.h>\n`+
        `#include "Test.h"\n`+
        `#include "Driver.h"\n\n`+
        `int main(int argc, char *argv[]){\n`+
            `\tprintf("${fileDescriptor1}\\n");\n`+
            `\t${fileDescriptor2}(argc, argv);\n\n`+
            `\treturn 0;\n`+
        `}`
        fs.writeFileSync(directory+'Driver'+'.c', output);
    }

}

class Test{
    tests(){
        this.projectpth()
        this.testC()
        this.testH()
        this.testO()
        this.testDriverC()
        this.testDriverH()
        this.testDriverO()
        this.moduleC()
        this.moduleH()
        this.moduleO()
        this.testExec()
        this.mainExec()
        this.baseDirectory()
        this.testDirectory()
        this.createpth()
        this.deletepth()
        this.createFile()
        this.deleteFile()
        this.isProjectpth()
        this.isAbsolutepth()
    }
    projectpth(){
        var project = new Project('./base')
        assert.equal(project.projectpth('somePath/to/folder'), project.base+'somePath/to/folder/')
        assert.equal(project.projectpth('somePath/to/folder/'), project.base+'somePath/to/folder/')
    }
    testC(){ 
        var project = new Project('./base')
        assert.equal(project.testC('somePath/to/folder/'), project.base+'somePath/to/folder/Test/'+'Test.c')
        assert.equal(project.testC('somePath/to/folder'), project.base+'somePath/to/folder/Test/'+'Test.c')

    }
    testH(){ 
        var project = new Project('./base')
        assert.equal(project.testH('somePath/to/folder/'), project.base+'somePath/to/folder/Test/'+'Test.h')
        assert.equal(project.testH('somePath/to/folder'), project.base+'somePath/to/folder/Test/'+'Test.h')
    }
    testO(){ 
        var project = new Project('./base')
        assert.equal(project.testO('somePath/to/folder/'), project.base+'somePath/to/folder/Test/'+'Test.o')
        assert.equal(project.testO('somePath/to/folder'), project.base+'somePath/to/folder/Test/'+'Test.o')
    }
    testDriverC(){ 
        var project = new Project('./base')
        assert.equal(project.testDriverC('somePath/to/folder/'), project.base+'somePath/to/folder/Test/'+'Driver.c')
        assert.equal(project.testDriverC('somePath/to/folder'), project.base+'somePath/to/folder/Test/'+'Driver.c')
    }
    testDriverH(){ 
        var project = new Project('./base')
        assert.equal(project.testDriverH('somePath/to/folder/'), project.base+'somePath/to/folder/Test/'+'Driver.h')
        assert.equal(project.testDriverH('somePath/to/folder'), project.base+'somePath/to/folder/Test/'+'Driver.h')
    }
    testDriverO(){
        var project = new Project('./base')
        assert.equal(project.testDriverO('somePath/to/folder/'), project.base+'somePath/to/folder/Test/'+'Driver.o')
        assert.equal(project.testDriverO('somePath/to/folder'), project.base+'somePath/to/folder/Test/'+'Driver.o')
    }
    moduleC(){ 
        var project = new Project('./base')
        assert.equal(project.moduleC('somePath/to/folder/'), project.base+'somePath/to/folder/'+'folder.c')
        assert.equal(project.moduleC('somePath/to/folder'), project.base+'somePath/to/folder/'+'folder.c')
    }
    moduleH(){
        var project = new Project('./base')
        assert.equal(project.moduleH('somePath/to/folder/'), project.base+'somePath/to/folder/'+'folder.h')
        assert.equal(project.moduleH('somePath/to/folder'), project.base+'somePath/to/folder/'+'folder.h')
    }
    moduleO(){
        var project = new Project('./base')
        assert.equal(project.moduleO('somePath/to/folder/'), project.base+'somePath/to/folder/'+'folder.o')
        assert.equal(project.moduleO('somePath/to/folder'), project.base+'somePath/to/folder/'+'folder.o')
    }
    testExec(){

    }
    mainExec(){

    }
    baseDirectory(){

    }
    testDirectory(){

    }
    createpth(){

    }
    deletepth(){ 

    }
    createFile(){

    }
    deleteFile(){

    }
    isProjectpth(){

    }
    isAbsolutepth(){

    }

}

new Test().tests()