import {ModuleLevelMake, ModuleLevelVars, ProjectLevelVars, ProjectLevelMake} from "./MakeFileLiterals.js"

export class MakeFileString{
    constructor(makeObject){
        this.string=this.makeFileString(makeObject)
        this.resolved;
    }
    makeFileString(makeObject){
        var mlm = new ModuleLevelMake()
        var plv = new ProjectLevelVars()
        var plm = new ProjectLevelMake()
        var mlv = new ModuleLevelVars()
        var string=``
        for(var i = 0; i<Object.keys(makeObject).length; i++){
            var dir = Object.keys(makeObject)[i]
            var dependencies = makeObject[Object.keys(makeObject)[i]]
            var literal=dir.slice().split('/').slice(1).slice(0,-1).join('_').toUpperCase()
            var name = dir.slice().split('/').slice(1).slice(0, -1).join('')
            var fileBase = dir.slice().split('/').slice(-2).join('')
            plv.update(literal, plv.projVars)
            plm.update(name, plv.projVars)
            string+=this.moduleVars(mlv, literal, dir, fileBase, dependencies)
            string+=this.moduleMake(mlm, literal, name)
        }
        string+=this.projectVars(plv, plv.projVars) 
        string+=this.projectMake(plm, plv.projVars)
        return string
    }
    moduleMake(mlm, literal, name){

        return ``+
        mlm.devBuild(literal, name)+
        mlm.prodBuild(literal, name)+
        mlm.devBuildClean(literal, name)+
        mlm.prodBuildClean(literal, name)+
        mlm.devBuildLink(literal, name)+
        mlm.prodBuildLink(literal, name)+
        mlm.devBuildRun(literal, name)+
        mlm.endOfSection()
    }
    moduleVars(mlv, literal, dir, fileBase, deps){
        var depsH=``
        var depsC=``
        var depsO=``
        for(var i = 0; i<deps.length; i++){
            depsH+=deps[i].slice(0,-1)+`h `
            depsC+=deps[i].slice(0,-1)+`c `
            depsO+=deps[i].slice(0,-1)+`o `
        }

        return ``+
        mlv.path(literal, dir)+
        mlv.testPath(literal)+
        mlv.cFile(literal, fileBase)+
        mlv.hFile(literal, fileBase)+
        mlv.oFile(literal, fileBase)+
        mlv.testCFile(literal)+
        mlv.testHFile(literal)+
        mlv.testOFile(literal)+
        mlv.testDrvrCFile(literal)+
        mlv.testDrvrHFile(literal)+
        mlv.testDrvrOFile(literal)+
        mlv.cFilePath(literal)+
        mlv.hFilePath(literal)+
        mlv.oFilePath(literal)+
        mlv.testCFilePath(literal)+
        mlv.testHFilePath(literal)+
        mlv.testOFilePath(literal)+
        mlv.testDrvrCFilePath(literal)+
        mlv.testDrvrHFilePath(literal)+
        mlv.testDrvrOFilePath(literal)+
        mlv.testDrvrCFilePath(literal)+
        mlv.testDrvrHFilePath(literal)+
        mlv.testDrvrOFilePath(literal)+
        mlv.prodTestCDeps(literal, depsC)+
        mlv.prodTestHDeps(literal, depsH)+
        mlv.prodTestODeps(literal, depsO)+
        mlv.devTestCDeps(literal, depsC)+
        mlv.devTestHDeps(literal, depsH)+
        mlv.devTestODeps(literal, depsO)+
        mlv.devTestCFiles(literal, depsC)+
        mlv.devTestHFiles(literal, depsH)+
        mlv.devTestOFiles(literal, depsO)+
        mlv.prodTestCFiles(literal, depsC)+
        mlv.prodTestHFiles(literal, depsH)+
        mlv.prodTestOFiles(literal, depsO)+
        mlv.devTestFiles(literal)
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