import {makeObject} from "./MakeObject.js"
import fs from 'node:fs'

class Make{
    constructor(makeObject, buildPaths=false){
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
                console.log('creating empty project...')
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

        makefileOutput+=this.finalMake()
        fs.writeFileSync('./makefile', makefileOutput);
    }

    cmain(dir, fileBase){
        console.log(dir, fileBase)
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
        var dirName=dir
        dir=dir.split('/')
        dir.pop()
        dir.shift()
        var fileName=dir.slice().pop()
        var name = dir.join("")
        dir=dir.join('_').toUpperCase()
        var dependenciesH=``
        var dependenciesC=``
        var dependenciesO=``
        
       for(var i = 0; i<dependencies.length; i++){
            
            dependenciesH+=dependencies[0].slice(0,-1)+`h `
            dependenciesC+=dependencies[0].slice(0,-1)+`c `
            dependenciesO+=dependencies[0].slice(0,-1)+`o `
       }
       var output = 
       `${dir}_DIR=${dirName}\n`+
       `${dir}_TEST_DIR=\$\{${dir}_DIR\}Test/\n`+
       `${dir}_C=${fileName}.c\n`+
       `${dir}_H=${fileName}.h\n`+
       `${dir}_O=${fileName}.o\n`+
       `${dir}_TEST_C=Test.c\n`+
       `${dir}_TEST_H=Test.h\n`+
       `${dir}_TEST_O=Test.o\n`+
       `${dir}_TEST_DRIVER_C=Driver.c\n`+
       `${dir}_TEST_DRIVER_H=Driver.h\n`+
       `${dir}_TEST_DRIVER_O=Driver.o\n`+

       `${dir}_C_PATH=\$\{${dir}_DIR\}\$\{${dir}_C\}\n`+
       `${dir}_H_PATH=\$\{${dir}_DIR\}\$\{${dir}_H\}\n`+
       `${dir}_O_PATH=\$\{${dir}_DIR\}\$\{${dir}_O\}\n`+

       `${dir}_TEST_C_PATH=\$\{${dir}_TEST_DIR\}\$\{${dir}_TEST_C\}\n`+
       `${dir}_TEST_H_PATH=\$\{${dir}_TEST_DIR\}\$\{${dir}_TEST_H\}\n`+
       `${dir}_TEST_O_PATH=\$\{${dir}_TEST_DIR\}\$\{${dir}_TEST_O\}\n`+

       `${dir}_TEST_DRIVER_C_PATH=\$\{${dir}_TEST_DIR\}\$\{${dir}_TEST_DRIVER_C\}\n`+
       `${dir}_TEST_DRIVER_H_PATH=\$\{${dir}_TEST_DIR\}\$\{${dir}_TEST_DRIVER_H\}\n`+
       `${dir}_TEST_DRIVER_O_PATH=\$\{${dir}_TEST_DIR\}\$\{${dir}_TEST_DRIVER_O\}\n`+

       `PRODUCTION_${dir}_TEST_C_DEPENDENCIES=\$\{${dir}_C_PATH\} \$\{${dir}_TEST_C_PATH\} `+ dependenciesC + `\n`+
       `PRODUCTION_${dir}_TEST_H_DEPENDENCIES=\$\{${dir}_H_PATH\} \$\{${dir}_TEST_H_PATH\} `+ dependenciesH + `\n`+
       `PRODUCTION_${dir}_TEST_O_DEPENDENCIES=\$\{${dir}_O_PATH\} \$\{${dir}_TEST_O_PATH\} `+ dependenciesO + `\n`+
       
       `DEVELOPER_${dir}_TEST_C_DEPENDENCIES=\$\{${dir}_C_PATH\} \$\{${dir}_TEST_C_PATH\} \$\{${dir}_TEST_DRIVER_C_PATH\} `+ dependenciesC + `\n`+
       `DEVELOPER_${dir}_TEST_H_DEPENDENCIES=\$\{${dir}_H_PATH\} \$\{${dir}_TEST_H_PATH\} \$\{${dir}_TEST_DRIVER_H_PATH\} `+ dependenciesH + `\n`+
       `DEVELOPER_${dir}_TEST_O_DEPENDENCIES=\$\{${dir}_O_PATH\} \$\{${dir}_TEST_O_PATH\} \$\{${dir}_TEST_DRIVER_O_PATH\} `+ dependenciesO + `\n`+

       `DEVELOPER_${dir}_TEST_C_FILES=\$\{${dir}_C_PATH\} \$\{${dir}_TEST_C_PATH\} \$\{${dir}_TEST_DRIVER_C_PATH\} `+ dependenciesC + `\n`+
       `DEVELOPER_${dir}_TEST_H_FILES=\$\{${dir}_H_PATH\} \$\{${dir}_TEST_H_PATH\} \$\{${dir}_TEST_DRIVER_H_PATH\} `+ dependenciesH + `\n`+
       `DEVELOPER_${dir}_TEST_O_FILES=\$\{${dir}_O_PATH\} \$\{${dir}_TEST_O_PATH\} \$\{${dir}_TEST_DRIVER_O_PATH\} `+ dependenciesO + `\n`+

       `PRODUCTION_${dir}_TEST_C_FILES=\$\{${dir}_C_PATH\} \$\{${dir}_TEST_C_PATH\} `+ dependenciesC + `\n`+
       `PRODUCTION_${dir}_TEST_H_FILES=\$\{${dir}_H_PATH\} \$\{${dir}_TEST_H_PATH\} `+ dependenciesH + `\n`+
       `PRODUCTION_${dir}_TEST_O_FILES=\$\{${dir}_O_PATH\} \$\{${dir}_TEST_O_PATH\} `+ dependenciesO + `\n`+

       `${dir}_TEST_DEVELOPER_FILES= \$\{DEVELOPER_${dir}_TEST_C_FILES\} \$\{DEVELOPER_${dir}_TEST_H_FILES\} \$\{DEVELOPER_${dir}_TEST_O_FILES\} \n\n\n`+


       `Developer${name}: \$\{DEVELOPER_${dir}_TEST_C_DEPENDENCIES\} \$\{DEVELOPER_${dir}_TEST_H_DEPENDENCIES\}\n`+
       `\tcd \$\{${dir}_DIR\}; gcc -c \$\{${dir}_C\}\n`+
       `\tcd \$\{${dir}_TEST_DIR\}; gcc -c \$\{${dir}_TEST_C\} \$\{${dir}_TEST_DRIVER_C\}\n\n`+

       `Production${name}: \$\{PRODUCTION_${dir}_TEST_C_DEPENDENCIES\} \$\{PRODUCTION_${dir}_TEST_H_DEPENDENCIES\}\n`+
       `\tcd \$\{${dir}_DIR\}; gcc -c \$\{${dir}_C\}\n`+
       `\tcd \$\{${dir}_TEST_DIR\}; gcc -c \$\{${dir}_TEST_C\}\n\n`+

        `Developer${name}Clean: \$\{DEVELOPER_${dir}_TEST_O_DEPENDENCIES\}\n`+
        `\tcd \$\{${dir}_DIR\}; rm -f \$\{${dir}_O\}\n`+
        `\tcd \$\{${dir}_TEST_DIR\}; rm -f \$\{${dir}_TEST_O\} \$\{${dir}_TEST_DRIVER_O\}\n\n` +

        `Production${name}Clean: \$\{PRODUCTION_${dir}_TEST_O_DEPENDENCIES\}\n`+
        `\tcd \$\{${dir}_DIR\}; rm -f \$\{${dir}_O\}\n`+
        `\tcd \$\{${dir}_TEST_DIR\}; rm -f \$\{${dir}_TEST_O\}\n\n` +

        `Developer${name}Link: \$\{DEVELOPER_${dir}_TEST_O_DEPENDENCIES\}\n`+
	    `\t(gcc -o developerTest \$\{${dir}_O_PATH\} \$\{${dir}_TEST_O_PATH\} \$\{${dir}_TEST_DRIVER_O_PATH\})\n\n`+

        `Production${name}Link: \$\{PRODUCTION_${dir}_TEST_O_DEPENDENCIES\}\n`+
	    `\t(gcc -o productionTest \$\{${dir}_O_PATH\} \$\{${dir}_TEST_O_PATH\})\n\n`+
        
        `Developer${name}Run: \$\{DEVELOPER_${dir}_TEST_O_DEPENDENCIES\} \$\{DEVELOPER_${dir}_TEST_C_DEPENDENCIES\} \$\{DEVELOPER_${dir}_TEST_H_DEPENDENCIES\}\n`+
        `\tmake Developer${name}Clean\n`+
        `\tmake Developer${name}\n`+
        `\tmake Developer${name}Link\n`+
        `\t./developerTest\n\n`+

        `########################################################################################################################################\n\n\n\n\n\n`
       return output        
    }
    finalMake(){

        var output = 
        `\n\n`+
        `DEVELOPER_TEST_C_DEPENDENCIES=${this.DEVELOPER_TEST_C_DEPENDENCIES}\n`+
        `DEVELOPER_TEST_H_DEPENDENCIES=${this.DEVELOPER_TEST_H_DEPENDENCIES}\n`+
        `DEVELOPER_TEST_O_DEPENDENCIES=${this.DEVELOPER_TEST_O_DEPENDENCIES}\n`+
        `PRODUCTION_TEST_C_DEPENDENCIES=${this.PRODUCTION_TEST_C_DEPENDENCIES}\n`+
        `PRODUCTION_TEST_H_DEPENDENCIES=${this.PRODUCTION_TEST_H_DEPENDENCIES}\n`+
        `PRODUCTION_TEST_O_DEPENDENCIES=${this.PRODUCTION_TEST_O_DEPENDENCIES}\n`+
        `DEVELOPER_TEST_C_FILES=${this.DEVELOPER_TEST_C_FILES}\n`+
        `DEVELOPER_TEST_H_FILES=${this.DEVELOPER_TEST_H_FILES}\n`+
        `DEVELOPER_TEST_O_FILES=${this.DEVELOPER_TEST_O_FILES}\n`+
        `PRODUCTION_TEST_C_FILES=${this.PRODUCTION_TEST_C_FILES}\n`+
        `PRODUCTION_TEST_H_FILES=${this.PRODUCTION_TEST_H_FILES}\n`+
        `PRODUCTION_TEST_O_FILES=${this.PRODUCTION_TEST_O_FILES}\n`+
        `########################################################################################################################################\n\n\n\n\n\n`+

        `ProductionTests: ${this.PRODUCTION_TEST_C_DEPENDENCIES} ${this.PRODUCTION_TEST_H_DEPENDENCIES}\n`+
        `${this.ProductionTests}\n\n`+
        `ProductionTestsLink: ${this.PRODUCTION_TEST_O_DEPENDENCIES}\n`+
        `\tgcc -o Production ${this.PRODUCTION_TEST_O_FILES}\n\n`+
        `ProductionTestsClean: ${this.PRODUCTION_TEST_O_DEPENDENCIES}\n`+
        `${this.ProductionTestsClean}\n\n`+
        `ProductionTestsRun: ${this.PRODUCTION_TEST_C_DEPENDENCIES} ${this.PRODUCTION_TEST_H_DEPENDENCIES}\n`+
        `\tmake ProductionTestsClean\n`+
        `\tmake ProductionTests\n`+
        `\tmake ProductionTestsLink\n`+
        `\t./Production\n\n`+
        `########################################################################################################################################\n\n\n\n\n\n`
        
        return output
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
        dir=dir.slice().split('/')
        dir.pop()
        dir.shift()
        var fileName=dir.slice().pop()
        dir=dir.join('_').toUpperCase()

        return `\tmake Production${fileName}\n`
    }
    _ProductionTestsClean(dir){
        dir=dir.slice().split('/')
        dir.pop()
        dir.shift()
        var fileName=dir.slice().pop()
        dir=dir.join('_').toUpperCase()

        return `\tmake Production${fileName}Clean\n`
    }

}


new Make(makeObject, process.argv[2])