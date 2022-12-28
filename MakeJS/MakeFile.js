import fs from 'node:fs'

export class MakeFile{
    constructor(makeObject, flags){
       this.name;
       this.dir;
       this.fileName;
       this.dependencies;
       this.dependenciesC;
       this.dependenciesH;
       this.dependenciesO;
       this.DEVELOPER_TEST_C_DEPENDENCIES=``;
       this.DEVELOPER_TEST_H_DEPENDENCIES=``;
       this.DEVELOPER_TEST_O_DEPENDENCIES=``;
       this.PRODUCTION_TEST_C_DEPENDENCIES=``;
       this.PRODUCTION_TEST_H_DEPENDENCIES=``;
       this.PRODUCTION_TEST_O_DEPENDENCIES=``;
       this.DEVELOPER_TEST_C_FILES=``;
       this.DEVELOPER_TEST_H_FILES=``;
       this.DEVELOPER_TEST_O_FILES=``;
       this.PRODUCTION_TEST_C_FILES=``;
       this.PRODUCTION_TEST_H_FILES=``;
       this.PRODUCTION_TEST_O_FILES=``;
       this.ProductionTests=``;
       this.ProductionTestsClean=``;
       this.ProductionTestsLink=``;
       this.makefileOutput=this.modules(makeObject)
       fs.writeFileSync('./makefile', this.makefileOutput);
    }

    modules(makeObject){
        var makefileOutput=``;
        var uniquePaths=Object.keys(makeObject)
        for(var i=0; i<uniquePaths.length; i++){
            makefileOutput+=this.module(uniquePaths[i].slice(), makeObject[uniquePaths[i]])
            this.DEVELOPER_TEST_C_DEPENDENCIES+=this.DeveloperTestCDependencies(uniquePaths[i].slice())
            this.DEVELOPER_TEST_H_DEPENDENCIES+=this.DeveloperTestHDependencies(uniquePaths[i].slice())
            this.DEVELOPER_TEST_O_DEPENDENCIES+=this.DeveloperTestODependencies(uniquePaths[i].slice())
            this.PRODUCTION_TEST_C_DEPENDENCIES+=this.ProductionTestCDependencies(uniquePaths[i].slice())
            this.PRODUCTION_TEST_H_DEPENDENCIES+=this.ProductionTestHDependencies(uniquePaths[i].slice())
            this.PRODUCTION_TEST_O_DEPENDENCIES+=this.ProductionTestODependencies(uniquePaths[i].slice())
            this.DEVELOPER_TEST_C_FILES+=this.DeveloperTestCFiles(uniquePaths[i].slice())
            this.DEVELOPER_TEST_H_FILES+=this.DeveloperTestHFiles(uniquePaths[i].slice())
            this.DEVELOPER_TEST_O_FILES+=this.DeveloperTestOFiles(uniquePaths[i].slice())
            this.PRODUCTION_TEST_C_FILES+=this.ProductionTestCFiles(uniquePaths[i].slice())
            this.PRODUCTION_TEST_H_FILES+=this.ProductionTestHFiles(uniquePaths[i].slice())
            this.PRODUCTION_TEST_O_FILES+=this.ProductionTestOFiles(uniquePaths[i].slice())
            this.ProductionTests+=this._ProductionTests(uniquePaths[i].slice())
            this.ProductionTestsClean+=this._ProductionTestsClean(uniquePaths[i].slice())
        }
        makefileOutput+=this.consolodateModules()
        return makefileOutput
    }

    module(dir, dependencies){
        this.set(dir, dependencies)
        return ``+
        this.modulePath()+
        this.moduleTestPath()+
        this.moduleCFile()+
        this.moduleHFile()+
        this.moduleOFile()+
        this.moduleTestCFile()+
        this.moduleTestHFile()+
        this.moduleTestOFile()+
        this.moduleTestDriverCFile()+
        this.moduleTestDriverHFile()+
        this.moduleTestDriverOFile()+
        this.moduleCFilePath()+
        this.moduleHFilePath()+
        this.moduleOFilePath()+
        this.moduleTestCFilePath()+
        this.moduleTestHFilePath()+
        this.moduleTestOFilePath()+
        this.moduleTestDriverCFilePath()+
        this.moduleTestDriverHFilePath()+
        this.moduleTestDriverOFilePath()+
        this.moduleTestDriverCFilePath()+
        this.moduleTestDriverHFilePath()+
        this.moduleTestDriverOFilePath()+
        this.productionTestCDependencies()+
        this.productionTestHDependencies()+
        this.productionTestODependencies()+
        this.developerTestCDependencies()+
        this.developerTestHDependencies()+
        this.developerTestODependencies()+
        this.developerTestCFiles()+
        this.developerTestHFiles()+
        this.developerTestOFiles()+
        this.productionTestCFiles()+
        this.productionTestHFiles()+
        this.productionTestOFiles()+
        this.developerTestFiles()+
        this.developerBuild()+
        this.productionBuild()+
        this.developerBuildClean()+
        this.productionBuildClean()+
        this.developerBuildLink()+
        this.productionBuildLink()+
        this.developerBuildRun()+
        this.endOfModule()
    }
    consolodateModules(){
        return ``+
        this.allDeveloperTestCDependencies() +
        this.allDeveloperTestHDependencies() +
        this.allDeveloperTestODependencies() +
        this.allProductionTestCDependencies() +
        this.allProductionTestHDependencies() +
        this.allProductionTestODependencies() +
        this.allDeveloperTestCFiles() +
        this.allDeveloperTestHFiles() +
        this.allDeveloperTestOFiles() +
        this.allProductionTestCFiles() +
        this.allProductionTestHFiles() +
        this.allProductionTestOFiles() +
        this.endOfModule() +       
        this.productionTests() +
        this.productionTestsLink() +
        this.productionTestsClean() +
        this.productionTestsRun()+
        this.endOfModule()        
    }
    set(dir, dependencies){
        this.name=dir
        dir=dir.split('/')
        dir.pop()
        dir.shift()
        this.fileName=dir.slice().pop()
        this.dir=dir.join('_').toUpperCase()
        
        this.dependencies=dependencies
        this.dependenciesH=``
        this.dependenciesC=``
        this.dependenciesO=``
       for(var i = 0; i<this.dependencies.length; i++){
            this.dependenciesH+=this.dependencies[i].slice(0,-1)+`h `
            this.dependenciesC+=this.dependencies[i].slice(0,-1)+`c `
            this.dependenciesO+=this.dependencies[i].slice(0,-1)+`o `
       }
    }

    
}

// new MakeFile(makeObject)