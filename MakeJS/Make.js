import {makeObject} from "./MakeObject.js"
import {MakeFile} from "./MakeFile.js"
import fs from 'node:fs'

class Make{
    constructor(makeObject, buildPaths=false){
        this.makeFile = new MakeFile()
        this.scafolding(makeObject, buildPaths);
    }

    scafolding(makeObject, buildPaths){
        //we need to make sure we do not overwrite the paths in the makeObject if they already exist, 
        //especially if we are just adding a dependency...

        var makefileOutput=``;
        var uniquePaths=Object.keys(makeObject)
        for(var i=0; i<uniquePaths.length; i++){
            var testDir=uniquePaths[i]+'Test/'
            var dir=uniquePaths[i].slice()
            var fileBase=dir.split('/')[dir.split('/').length-2]

            if(JSON.parse(buildPaths.toLowerCase())==true){
                console.log('creating empty module', dir)
                if (!fs.existsSync(dir)){
                    fs.mkdirSync(dir);
                }
                if (!fs.existsSync(testDir)){
                    fs.mkdirSync(testDir);
                }
                if(!this.cmain(dir, fileBase)){
                    this.cFile(dir, fileBase, makeObject[uniquePaths[i]])
                }
                this.hFile(dir, fileBase)
                this.cTest(testDir)
                this.hTest(testDir)
                this.cDriver(testDir)
                this.hDriver(testDir)
            }else{
                
            }
            
            makefileOutput+=this.make(uniquePaths[i].slice(), makeObject[uniquePaths[i]])
            this.makeFile.DEVELOPER_TEST_C_DEPENDENCIES+=this.DeveloperTestCDependencies(uniquePaths[i].slice())
            this.makeFile.DEVELOPER_TEST_H_DEPENDENCIES+=this.DeveloperTestHDependencies(uniquePaths[i].slice())
            this.makeFile.DEVELOPER_TEST_O_DEPENDENCIES+=this.DeveloperTestODependencies(uniquePaths[i].slice())
            this.makeFile.PRODUCTION_TEST_C_DEPENDENCIES+=this.ProductionTestCDependencies(uniquePaths[i].slice())
            this.makeFile.PRODUCTION_TEST_H_DEPENDENCIES+=this.ProductionTestHDependencies(uniquePaths[i].slice())
            this.makeFile.PRODUCTION_TEST_O_DEPENDENCIES+=this.ProductionTestODependencies(uniquePaths[i].slice())
            this.makeFile.DEVELOPER_TEST_C_FILES+=this.DeveloperTestCFiles(uniquePaths[i].slice())
            this.makeFile.DEVELOPER_TEST_H_FILES+=this.DeveloperTestHFiles(uniquePaths[i].slice())
            this.makeFile.DEVELOPER_TEST_O_FILES+=this.DeveloperTestOFiles(uniquePaths[i].slice())
            this.makeFile.PRODUCTION_TEST_C_FILES+=this.ProductionTestCFiles(uniquePaths[i].slice())
            this.makeFile.PRODUCTION_TEST_H_FILES+=this.ProductionTestHFiles(uniquePaths[i].slice())
            this.makeFile.PRODUCTION_TEST_O_FILES+=this.ProductionTestOFiles(uniquePaths[i].slice())
            this.makeFile.ProductionTests+=this._ProductionTests(uniquePaths[i].slice())
            this.makeFile.ProductionTestsClean+=this._ProductionTestsClean(uniquePaths[i].slice())
        }

        makefileOutput+=this.finalMake()
        fs.writeFileSync('./makefile', makefileOutput);
    }

    cmain(dir, fileBase){
        if(dir.split('/').length==3){
            var output = 
                `#include `+`"`+fileBase+'.h'+`"\n\n`+
                `int main(int argc, char *argv[]){\n`+
                `\treturn 0;\n`+`}`
            fs.writeFileSync( dir+fileBase+'.c', output);
            return true
        }else{
            return false
        }
    }
    cFile(dir, fileBase, dependencies){
        var output = `#include `+`"`+fileBase+'.h'+`"\n`
        for(var i=0; i<dependencies.length; i++){
            var m =dir.slice().split('/').length-3
            var path=``
            for(var j = 0; j<m; j++){
                path+=`../`
            }
            path+=dependencies[i].split('/').slice(2).join('/')
            output+= `#include `+`"`+path+`"\n`
        }
        fs.writeFileSync( dir+fileBase+'.c', output);
    }

    hFile(dir, fileBase){
        var fileDescriptor=(dir.split('/').slice(1).join('_')+fileBase).toUpperCase()
        var output = `#ifndef ${fileDescriptor}\n#define ${fileDescriptor}\n\n#endif`
        fs.writeFileSync( dir+fileBase+'.h', output);
    }

    cTest(dir){
        var fileDescriptor=(dir.split('/').slice(1).join('_')+'Test').toUpperCase()
        var output = 
        `#include `+`"`+'Test'+'.h'+`"\n\n`+
        `int _${fileDescriptor}(int argc, char *argv[]){\n\n\treturn 0;\n}`;
        fs.writeFileSync( dir+'Test'+'.c', output);
    }

    hTest(dir){
        var fileBase=dir.split('/')[dir.split('/').length-3]
        var fileDescriptor=(dir.split('/').slice(1).join('_')+'Test').toUpperCase()
        var output2 = `#include "../`+fileBase+`.h"`;
        var output3 = `int _${fileDescriptor}(int argc, char *argv[]);`;
        var output = 
            `#ifndef ${fileDescriptor}\n`+
            `#define ${fileDescriptor}\n\n`+
            output2+`\n\n`+
            output3+`\n\n`+
            `#endif`
        fs.writeFileSync( dir+'Test'+'.h', output);
    }

    cDriver(dir){
        var fileDescriptor1=(dir.split('/').slice(1).join('_')+'Driver').toUpperCase()
        var fileDescriptor2=(dir.split('/').slice(1).join('_')+'Test').toUpperCase()
        var output=
        `#include <stdio.h>\n`+
        `#include "Test.h"\n`+
        `#include "Driver.h"\n\n`+
        `int main(int argc, char *argv[]){\n`+
            `\tprintf("${fileDescriptor1}\\n");\n`+
            `\t${fileDescriptor2}(argc, argv);\n\n`+
            `\treturn 0;\n`+
        `}`
        fs.writeFileSync(dir+'Driver'+'.c', output);
    }

    hDriver(dir){
        var fileDescriptor=(dir.split('/').slice(1).join('_')+'driver').toUpperCase()
        var output = `#ifndef ${fileDescriptor}\n`+
        `#define ${fileDescriptor}\n`+
        `#include "Test.h"\n`+
        `#endif`
        fs.writeFileSync( dir+'Driver'+'.h', output);
    }


    make(dir, dependencies){
        this.makeFile.set(dir, dependencies)

        return ``+
        this.makeFile.modulePath()+
        this.makeFile.moduleTestPath()+
        this.makeFile.moduleCFile()+
        this.makeFile.moduleHFile()+
        this.makeFile.moduleOFile()+
        this.makeFile.moduleTestCFile()+
        this.makeFile.moduleTestHFile()+
        this.makeFile.moduleTestOFile()+
        this.makeFile.moduleTestDriverCFile()+
        this.makeFile.moduleTestDriverHFile()+
        this.makeFile.moduleTestDriverOFile()+
        this.makeFile.moduleCFilePath()+
        this.makeFile.moduleHFilePath()+
        this.makeFile.moduleOFilePath()+
        this.makeFile.moduleTestCFilePath()+
        this.makeFile.moduleTestHFilePath()+
        this.makeFile.moduleTestOFilePath()+
        this.makeFile.moduleTestDriverCFilePath()+
        this.makeFile.moduleTestDriverHFilePath()+
        this.makeFile.moduleTestDriverOFilePath()+
        this.makeFile.moduleTestDriverCFilePath()+
        this.makeFile.moduleTestDriverHFilePath()+
        this.makeFile.moduleTestDriverOFilePath()+
        this.makeFile.productionTestCDependencies()+
        this.makeFile.productionTestHDependencies()+
        this.makeFile.productionTestODependencies()+
        this.makeFile.developerTestCDependencies()+
        this.makeFile.developerTestHDependencies()+
        this.makeFile.developerTestODependencies()+
        this.makeFile.developerTestCFiles()+
        this.makeFile.developerTestHFiles()+
        this.makeFile.developerTestOFiles()+
        this.makeFile.productionTestCFiles()+
        this.makeFile.productionTestHFiles()+
        this.makeFile.productionTestOFiles()+
        this.makeFile.developerTestFiles()+
        this.makeFile.developerBuild()+
        this.makeFile.productionBuild()+
        this.makeFile.developerBuildClean()+
        this.makeFile.productionBuildClean()+
        this.makeFile.developerBuildLink()+
        this.makeFile.productionBuildLink()+
        this.makeFile.developerBuildRun()+
        this.makeFile.endOfModule()
    }
    finalMake(){

        
        return ``+
        this.makeFile.allDeveloperTestCDependencies() +
        this.makeFile.allDeveloperTestHDependencies() +
        this.makeFile.allDeveloperTestODependencies() +
        this.makeFile.allProductionTestCDependencies() +
        this.makeFile.allProductionTestHDependencies() +
        this.makeFile.allProductionTestODependencies() +
        this.makeFile.allDeveloperTestCFiles() +
        this.makeFile.allDeveloperTestHFiles() +
        this.makeFile.allDeveloperTestOFiles() +
        this.makeFile.allProductionTestCFiles() +
        this.makeFile.allProductionTestHFiles() +
        this.makeFile.allProductionTestOFiles() +
        this.makeFile.endOfModule() +       
        this.makeFile.productionTests() +
        this.makeFile.productionTestsLink() +
        this.makeFile.productionTestsClean() +
        this.makeFile.productionTestsRun()+
        this.makeFile.endOfModule()        
    }

    DeveloperTestCDependencies(dir){
        dir=dir.slice().split('/')
        dir.pop()
        dir.shift()
        dir=dir.join('_').toUpperCase()

        return `\$\{DEVELOPER_${dir}_TEST_C_DEPENDENCIES\} `
    }
    DeveloperTestHDependencies(dir){
        dir=dir.slice().split('/')
        dir.pop()
        dir.shift()
        dir=dir.join('_').toUpperCase()

        return `\$\{DEVELOPER_${dir}_TEST_H_DEPENDENCIES\} `
    }
    DeveloperTestODependencies(dir){
        dir=dir.slice().split('/')
        dir.pop()
        dir.shift()
        dir=dir.join('_').toUpperCase()

        return `\$\{DEVELOPER_${dir}_TEST_O_DEPENDENCIES\} `
    }
    ProductionTestCDependencies(dir){
        dir=dir.slice().split('/')
        dir.pop()
        dir.shift()
        dir=dir.join('_').toUpperCase()

        return `\$\{PRODUCTION_${dir}_TEST_C_DEPENDENCIES\} `
    }
    ProductionTestHDependencies(dir){
        dir=dir.slice().split('/')
        dir.pop()
        dir.shift()
        dir=dir.join('_').toUpperCase()

        return `\$\{PRODUCTION_${dir}_TEST_H_DEPENDENCIES\} `
    }
    ProductionTestODependencies(dir){
        dir=dir.slice().split('/')
        dir.pop()
        dir.shift()
        dir=dir.join('_').toUpperCase()
        return `\$\{PRODUCTION_${dir}_TEST_O_DEPENDENCIES\} `
    }
    DeveloperTestCFiles(dir){
        dir=dir.slice().split('/')
        dir.pop()
        dir.shift()
        dir=dir.join('_').toUpperCase()

        return `\$\{DEVELOPER_${dir}_TEST_C_FILES\} `
    }
    DeveloperTestHFiles(dir){
        dir=dir.slice().split('/')
        dir.pop()
        dir.shift()
        dir=dir.join('_').toUpperCase()

        return `\$\{DEVELOPER_${dir}_TEST_H_FILES\} `

    }
    DeveloperTestOFiles(dir){
        dir=dir.slice().split('/')
        dir.pop()
        dir.shift()
        dir=dir.join('_').toUpperCase()

        return `\$\{DEVELOPER_${dir}_TEST_O_FILES\} `

    }
    ProductionTestCFiles(dir){
        dir=dir.slice().split('/')
        dir.pop()
        dir.shift()
        dir=dir.join('_').toUpperCase()

        return `\$\{PRODUCTION_${dir}_TEST_C_FILES\} `

    }
    ProductionTestHFiles(dir){
        dir=dir.slice().split('/')
        dir.pop()
        dir.shift()
        dir=dir.join('_').toUpperCase()

        return `\$\{PRODUCTION_${dir}_TEST_H_FILES\} `

    }
    ProductionTestOFiles(dir){
        dir=dir.slice().split('/')
        dir.pop()
        dir.shift()
        dir=dir.join('_').toUpperCase()

        return `\$\{PRODUCTION_${dir}_TEST_O_FILES\} `

    }
    _ProductionTests(dir){
        return `\tmake Production${dir.split('/').slice(1).join('')}\n`
    }
    
    _ProductionTestsClean(dir){
        return `\tmake Production${dir.split('/').slice(1).join('')}Clean\n`
    }

}


new Make(makeObject, process.argv[2])