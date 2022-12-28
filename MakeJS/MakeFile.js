import fs from 'node:fs'
import { makeObject } from './MakeObject/MakeObject.js';
import {ModuleLevelMake, ModuleLevelVars, ProjectLevelVars, ProjectLevelMake} from "./MakeFileLiterals.js"

export class MakeFile{
    constructor(oldMakeObject, newMakeObject){
        this.oldMakeObject=oldMakeObject;
        this.newMakeObject=newMakeObject;
        this.context(oldMakeObject, newMakeObject);
        //fs.writeFileSync('./makefile', this.makefileOutput);
    }

    context(oldMakeObject, newMakeObject){
        var _context=this._context(oldMakeObject, newMakeObject)
        if(_context=='modify'){
            this.modify(oldMakeObject, newMakeObject)
        }else if(_context=='create'){
            this.create(oldMakeObject, newMakeObject)
        }else if(_context=='refactor'){
            this.refactor(oldMakeObject, newMakeObject)
        }else if(_context=='depend'){
            this.depend(oldMakeObject, newMakeObject)
        }else if(_context=='add'){
            this.add(oldMakeObject, newMakeObject)
        }else{
            throw new Error('context is undefined')
        }
    }
    _context(oldMakeObject, newMakeObject){

    }

    modify(oldMakeObject, newMakeObject){
        //copy existing makefile object and change only what the descriptor describes in its actions field
        //and returns the new makefile object
    }

    create(oldMakeObject, newMakeObject){

    }

    refactor(oldMakeObject, newMakeObject){

    }

    depend(oldMakeObject, newMakeObject){

    }

    add(oldMakeObject, newMakeObject){

    }
}

class MakeFileString{
    constructor(makeObject){
        this.string = this.makeFileString(makeObject)
        fs.writeFileSync('./makefile', this.string)
    }
    makeFileString(makeObject){
        var mlm = new ModuleLevelMake()
        var plv = new ProjectLevelVars()
        var plm = new ProjectLevelMake()
        var mlv = new ModuleLevelVars()
        var string=``
        for(var i = 0; i<Object.keys(makeObject).length; i++){
            var dependencies = makeObject[Object.keys(makeObject)[i]]
            var dir = Object.keys(makeObject)[i]
            var name = dir.slice().split('/')[dir.slice().split('/').length-2]
            plv.update(dir, plv.projVars)
            plm.update(dir, plv.projVars)
            string+=this.moduleVars(mlv, name, dir, dependencies)
            string+=this.moduleMake(mlm, name, dir)
        }
        string +=this.projectVars(plv, plv.projVars) 
        string +=this.projectMake(plm, plv.projVars)
        return string
    }
    moduleMake(mlm, name, dir){
       return ``+
        mlm.devBuild(dir, name)+
        mlm.prodBuild(dir, name)+
        mlm.devBuildClean(dir, name)+
        mlm.prodBuildClean(dir, name)+
        mlm.devBuildLink(dir, name)+
        mlm.prodBuildLink(dir, name)+
        mlm.devBuildRun(dir, name)+
        mlm.endOfSection()
    }

    moduleVars(mlv, name, dir, deps){
        var depsH=``
        var depsC=``
        var depsO=``
        for(var i = 0; i<deps.length; i++){
            depsH+=deps[i].slice(0,-1)+`h `
            depsC+=deps[i].slice(0,-1)+`c `
            depsO+=deps[i].slice(0,-1)+`o `
        }

        return ``+
        mlv.path(dir, name)+
        mlv.testPath(dir)+
        mlv.cFile(dir, name+'.c')+
        mlv.hFile(dir, name+'.h')+
        mlv.oFile(dir, name+'.o')+
        mlv.testCFile(dir)+
        mlv.testHFile(dir)+
        mlv.testOFile(dir)+
        mlv.testDrvrCFile(dir)+
        mlv.testDrvrHFile(dir)+
        mlv.testDrvrOFile(dir)+
        mlv.cFilePath(dir)+
        mlv.hFilePath(dir)+
        mlv.oFilePath(dir)+
        mlv.testCFilePath(dir)+
        mlv.testHFilePath(dir)+
        mlv.testOFilePath(dir)+
        mlv.testDrvrCFilePath(dir)+
        mlv.testDrvrHFilePath(dir)+
        mlv.testDrvrOFilePath(dir)+
        mlv.testDrvrCFilePath(dir)+
        mlv.testDrvrHFilePath(dir)+
        mlv.testDrvrOFilePath(dir)+
        mlv.prodTestCDeps(dir, depsC)+
        mlv.prodTestHDeps(dir, depsH)+
        mlv.prodTestODeps(dir, depsO)+
        mlv.devTestCDeps(dir, depsC)+
        mlv.devTestHDeps(dir, depsH)+
        mlv.devTestODeps(dir, depsO)+
        mlv.devTestCFiles(dir, depsC)+
        mlv.devTestHFiles(dir, depsH)+
        mlv.devTestOFiles(dir, depsO)+
        mlv.prodTestCFiles(dir, depsC)+
        mlv.prodTestHFiles(dir, depsH)+
        mlv.prodTestOFiles(dir, depsO)+
        mlv.devTestFiles(dir)
    }
    projectVars(plv, projVars){
        return ``+
        plv.devTestCDeps(projVars) +
        plv.devTestHDeps(projVars) +
        plv.devTestODeps(projVars) +
        plv.prodTestCDeps(projVars) +
        plv.prodTestHDeps(projVars) +
        plv.prodTestODeps(projVars) +
        plv.devTestCFiles(projVars) +
        plv.devTestHFiles(projVars) +
        plv.devTestOFiles(projVars) +
        plv.prodTestCFiles(projVars) +
        plv.prodTestHFiles(projVars) +
        plv.prodTestOFiles(projVars) +
        plv.endOfSection()     
    }

    projectMake(plm, projVars){
        return ``+
        plm.prodTests(projVars) +
        plm.prodTestsLink(projVars) +
        plm.prodTestsClean(projVars) +
        plm.prodTestsRun(projVars) +
        plm.endOfSection()        
    }
}

console.log(new MakeFileString(makeObject))