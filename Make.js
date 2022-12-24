import {makeObject} from "./MakeObject.js"
import fs from 'node:fs'

class Make{
    constructor(makeObject){
        this.makeVariables={}

        this.makeVariables['ALL_TEST_c_DEVELOPER_DEPENDENCIES']=``
        this.makeVariables['ALL_TEST_h_DEVELOPER_DEPENDENCIES']=``
        this.makeVariables['ALL_TEST_o_DEVELOPER_DEPENDENCIES']=``
        this.makeVariables['ALL_TEST_c_PRODUCTION_DEPENDENCIES']=``
        this.makeVariables['ALL_TEST_h_PRODUCTION_DEPENDENCIES']=``
        this.makeVariables['ALL_TEST_o_PRODUCTION_DEPENDENCIES']=``
        this.makeVariables['ALL_TEST_c_DEVELOPER_FILES']=``
        this.makeVariables['ALL_TEST_h_DEVELOPER_FILES']=``
        this.makeVariables['ALL_TEST_o_DEVELOPER_FILES']=``
        this.makeVariables['ALL_TEST_c_PRODUCTION_FILES']=``
        this.makeVariables['ALL_TEST_h_PRODUCTION_FILES']=``
        this.makeVariables['ALL_TEST_o_PRODUCTION_FILES']=``

        this.uniquePaths=this.uniquePaths(makeObject)
        this.buildPaths(this.uniquePaths)
    }

    uniquePaths(makeObject){
        var uniquePaths=[]
        var keys = Object.keys(makeObject)
        for(var i=0;  i<keys.length; i++){
            var path=keys[i].split('/')
            path.pop()
            uniquePaths.push(path.join('/')+'/')
        }
        return Array.from(new Set(uniquePaths))
    }

    buildPaths(uniquePaths){
        var makefileOutput=``;


        for(var i=0; i<uniquePaths.length; i++){
            var testDir=uniquePaths[i]+'Test/'
            var dir=uniquePaths[i].slice()
            var fileBase=dir.split('/')[dir.split('/').length-2]
            if (!fs.existsSync(dir)){
                fs.mkdirSync(dir);
            }
            if (!fs.existsSync(testDir)){
                fs.mkdirSync(testDir);
            }
            if(!this.cmain(dir, fileBase)){
                this.cFile(dir, fileBase)
            }
            this.hFile(dir, fileBase)
            this.cTest(testDir)
            this.hTest(testDir)
            this.cDriver(testDir)
            this.hDriver(testDir)
            //makefileOutput+=this.make(uniquePaths[i].slice())
            this.load(uniquePaths[i].slice())
        }

        //makefileOutput+=this.finalMake(uniquePaths[i].slice())

        console.log(this.makeVariables)
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
    cFile(dir, fileBase){
        var output = `#include `+`"`+fileBase+'.h'+`"`
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

    load(dir){
        var dirName=dir
        dir=dir.split('/')
        dir.pop()
        dir.shift()
        var fileName=dir.slice().pop()
        dir=dir.join('_').toUpperCase()

        this.makeVariables[`${dir}_DIR`]=`${dirName}`
        this.makeVariables[`${dir}_TEST_DIR`]=`\$\{${dir}_DIR\}Test/`

        this.makeVariables[`${dir}_c`]=`${fileName}.c`
        this.makeVariables[`${dir}_h`]=`${fileName}.h`
        this.makeVariables[`${dir}_o`]=`${fileName}.o`

        this.makeVariables[`${dir}_TEST_c`]=`Test.c`
        this.makeVariables[`${dir}_TEST_h`]=`Test.h`
        this.makeVariables[`${dir}_TEST_o`]=`Test.o`

        this.makeVariables[`${dir}_TEST_DRIVER_c`]=`Driver.c`
        this.makeVariables[`${dir}_TEST_DRIVER_h`]=`Driver.h`
        this.makeVariables[`${dir}_TEST_DRIVER_o`]=`Driver.o`

        this.makeVariables[`${dir}_c_PATH`]=`\$\{${dir}_DIR\}\$\{${dir}_c\}`
        this.makeVariables[`${dir}_h_PATH`]=`\$\{${dir}_DIR\}\$\{${dir}_h\}`
        this.makeVariables[`${dir}_o_PATH`]=`\$\{${dir}_DIR\}\$\{${dir}_o\}`

        this.makeVariables[`${dir}_TEST_c_PATH`]=`\$\{${dir}_TEST_DIR\}\$\{${dir}_TEST_c\}`
        this.makeVariables[`${dir}_TEST_h_PATH`]=`\$\{${dir}_TEST_DIR\}\$\{${dir}_TEST_h\}`
        this.makeVariables[`${dir}_TEST_o_PATH`]=`\$\{${dir}_TEST_DIR\}\$\{${dir}_TEST_o\}`

        this.makeVariables[`${dir}_TEST_DRIVER_c_PATH`]=`\$\{${dir}_TEST_DIR\}\$\{${dir}_TEST_DRIVER_c\}`
        this.makeVariables[`${dir}_TEST_DRIVER_h_PATH`]=`\$\{${dir}_TEST_DIR\}\$\{${dir}_TEST_DRIVER_h\}`
        this.makeVariables[`${dir}_TEST_DRIVER_o_PATH`]=`\$\{${dir}_TEST_DIR\}\$\{${dir}_TEST_DRIVER_o\}`

        this.makeVariables[`${dir}_TEST_c_PRODUCTION_DEPENDENCIES`]=`\$\{${dir}_c_PATH\} \$\{${dir}_TEST_c_PATH\}`
        this.makeVariables[`${dir}_TEST_h_PRODUCTION_DEPENDENCIES`]=`\$\{${dir}_h_PATH\} \$\{${dir}_TEST_h_PATH\}`
        this.makeVariables[`${dir}_TEST_o_PRODUCTION_DEPENDENCIES`]=`\$\{${dir}_o_PATH\} \$\{${dir}_TEST_o_PATH\}`

        this.makeVariables[`${dir}_TEST_c_DEVELOPER_DEPENDENCIES`]=`\$\{${dir}_c_PATH\} \$\{${dir}_TEST_c_PATH\} \$\{${dir}_TEST_DRIVER_c_PATH\}`
        this.makeVariables[`${dir}_TEST_h_DEVELOPER_DEPENDENCIES`]=`\$\{${dir}_h_PATH\} \$\{${dir}_TEST_h_PATH\} \$\{${dir}_TEST_DRIVER_h_PATH\}`
        this.makeVariables[`${dir}_TEST_o_DEVELOPER_DEPENDENCIES`]=`\$\{${dir}_o_PATH\} \$\{${dir}_TEST_o_PATH\} \$\{${dir}_TEST_DRIVER_o_PATH\}`

        this.makeVariables[`${dir}_TEST_c_DEVELOPER_FILES`]=`/$/{${dir}_c_PATH/} /$/{${dir}_TEST_c_PATH/} /$/{${dir}_TEST_DRIVER_c_PATH/}`
        this.makeVariables[`${dir}_TEST_h_DEVELOPER_FILES`]=`/$/{${dir}_h_PATH/} /$/{${dir}_TEST_h_PATH/} /$/{${dir}_TEST_DRIVER_h_PATH/}`
        this.makeVariables[`${dir}_TEST_o_DEVELOPER_FILES`]=`/$/{${dir}_o_PATH/} /$/{${dir}_TEST_o_PATH/} /$/{${dir}_TEST_DRIVER_o_PATH/}`
        
        this.makeVariables[`${dir}_TEST_DEVELOPER_FILES`]=`/$/{${dir}_TEST_c_DEVELOPER_FILES/} /$/{${dir}_TEST_h_DEVELOPER_FILES/} /$/{${dir}_TEST_o_DEVELOPER_FILES/}`

        this.makeVariables['ALL_TEST_c_DEVELOPER_DEPENDENCIES']+=this.makeAllTestCDeveloperDependencies(dir)
        this.makeVariables['ALL_TEST_h_DEVELOPER_DEPENDENCIES']+=this.makeAllTestHDeveloperDependencies(dir)
        this.makeVariables['ALL_TEST_o_DEVELOPER_DEPENDENCIES']+=this.makeAllTestODeveloperDependencies(dir)
        this.makeVariables['ALL_TEST_c_PRODUCTION_DEPENDENCIES']+=this.makeAllTestCProductionDependencies(dir)
        this.makeVariables['ALL_TEST_h_PRODUCTION_DEPENDENCIES']+=this.makeAllTestHProductionDependencies(dir)
        this.makeVariables['ALL_TEST_o_PRODUCTION_DEPENDENCIES']+=this.makeAllTestOProductionDependencies(dir)
        this.makeVariables['ALL_TEST_c_DEVELOPER_FILES']+=this.makeAllTestCDeveloperFiles(dir)
        this.makeVariables['ALL_TEST_h_DEVELOPER_FILES']+=this.makeAllTestHDeveloperFiles(dir)
        this.makeVariables['ALL_TEST_o_DEVELOPER_FILES']+=this.makeAllTestODeveloperFiles(dir)
        this.makeVariables['ALL_TEST_c_PRODUCTION_FILES']+=this.makeAllTestCProductionFiles(dir)
        this.makeVariables['ALL_TEST_h_PRODUCTION_FILES']+=this.makeAllTestHProductionFiles(dir)
        this.makeVariables['ALL_TEST_o_PRODUCTION_FILES']+=this.makeAllTestOProductionFiles(dir)
    }

    make(dir){
        var dirName=dir
        dir=dir.split('/')
        dir.pop()
        dir.shift()
        var fileName=dir.slice().pop()
        dir=dir.join('_').toUpperCase()
        
        var output = 
       `${dir}_DIR=${dirName}\n`+
       `${dir}_TEST_DIR=\$\{${dir}_DIR\}Test/\n`+
       `${dir}_c=${fileName}.c\n`+
       `${dir}_h=${fileName}.h\n`+
       `${dir}_o=${fileName}.o\n`+
       `${dir}_TEST_c=Test.c\n`+
       `${dir}_TEST_h=Test.h\n`+
       `${dir}_TEST_o=Test.o\n`+
       `${dir}_TEST_DRIVER_c=Driver.c\n`+
       `${dir}_TEST_DRIVER_h=Driver.h\n`+
       `${dir}_TEST_DRIVER_o=Driver.o\n`+
       `${dir}_c_PATH=\$\{${dir}_DIR\}\$\{${dir}_c\}\n`+
       `${dir}_h_PATH=\$\{${dir}_DIR\}\$\{${dir}_h\}\n`+
       `${dir}_o_PATH=\$\{${dir}_DIR\}\$\{${dir}_o\}\n`+
       `${dir}_TEST_c_PATH=\$\{${dir}_TEST_DIR\}\$\{${dir}_TEST_c\}\n`+
       `${dir}_TEST_h_PATH=\$\{${dir}_TEST_DIR\}\$\{${dir}_TEST_h\}\n`+
       `${dir}_TEST_o_PATH=\$\{${dir}_TEST_DIR\}\$\{${dir}_TEST_o\}\n`+
       `${dir}_TEST_DRIVER_c_PATH=\$\{${dir}_TEST_DIR\}\$\{${dir}_TEST_DRIVER_c\}\n`+
       `${dir}_TEST_DRIVER_h_PATH=\$\{${dir}_TEST_DIR\}\$\{${dir}_TEST_DRIVER_h\}\n`+
       `${dir}_TEST_DRIVER_o_PATH=\$\{${dir}_TEST_DIR\}\$\{${dir}_TEST_DRIVER_o\}\n`+
       `${dir}_TEST_c_PRODUCTION_DEPENDENCIES=\$\{${dir}_c_PATH\} \$\{${dir}_TEST_c_PATH\}\n`+
       `${dir}_TEST_h_PRODUCTION_DEPENDENCIES=\$\{${dir}_h_PATH\} \$\{${dir}_TEST_h_PATH\}\n`+
       `${dir}_TEST_o_PRODUCTION_DEPENDENCIES=\$\{${dir}_o_PATH\} \$\{${dir}_TEST_o_PATH\}\n`+
       `${dir}_TEST_c_DEVELOPER_DEPENDENCIES=\$\{${dir}_c_PATH\} \$\{${dir}_TEST_c_PATH\} \$\{${dir}_TEST_DRIVER_c_PATH\}\n`+
       `${dir}_TEST_h_DEVELOPER_DEPENDENCIES=\$\{${dir}_h_PATH\} \$\{${dir}_TEST_h_PATH\} \$\{${dir}_TEST_DRIVER_h_PATH\}\n`+
       `${dir}_TEST_o_DEVELOPER_DEPENDENCIES=\$\{${dir}_o_PATH\} \$\{${dir}_TEST_o_PATH\} \$\{${dir}_TEST_DRIVER_o_PATH\}\n`+

       `${dir}_TEST_c_DEVELOPER_FILES= /$/{${dir}_c_PATH/} /$/{${dir}_TEST_c_PATH/} /$/{${dir}_TEST_DRIVER_c_PATH/} \n`+
       `${dir}_TEST_h_DEVELOPER_FILES= /$/{${dir}_h_PATH/} /$/{${dir}_TEST_h_PATH/} /$/{${dir}_TEST_DRIVER_h_PATH/} \n`+
       `${dir}_TEST_o_DEVELOPER_FILES= /$/{${dir}_o_PATH/} /$/{${dir}_TEST_o_PATH/} /$/{${dir}_TEST_DRIVER_o_PATH/} \n\n\n`+

       `${dir}_TEST_DEVELOPER_FILES= /$/{${dir}_TEST_c_DEVELOPER_FILES/} /$/{${dir}_TEST_h_DEVELOPER_FILES/} /$/{${dir}_TEST_o_DEVELOPER_FILES/} \n\n\n`+


       `${fileName}Developer: \$\{${dir}_TEST_c_DEVELOPER_DEPENDENCIES\} \$\{${dir}_TEST_h_DEVELOPER_DEPENDENCIES\}\n`+
       `\tcd \$\{${dir}_DIR\}; gcc -c \$\{${dir}_c\}\n`+
       `\tcd \$\{${dir}_TEST_DIR\}; gcc -c \$\{${dir}_TEST_c\} \$\{${dir}_TEST_DRIVER_c\}\n\n`+

        `${fileName}DeveloperClean: \$\{${dir}_TEST_o_DEVELOPER_DEPENDENCIES\}\n`+
        `\tcd \$\{${dir}_DIR\}; rm -f \$\{${dir}_o\}\n`+
        `\tcd \$\{${dir}_TEST_DIR\}; rm -f \$\{${dir}_TEST_o\} \$\{${dir}_TEST_DRIVER_o\}\n\n` +

        `${fileName}DeveloperLink: \$\{${dir}_TEST_o_DEVELOPER_DEPENDENCIES\}\n`+
	    `\t(gcc -o developerTest \$\{${dir}_o_PATH\} \$\{${dir}_TEST_o_PATH\} \$\{${dir}_TEST_DRIVER_o_PATH\})\n\n`+
        
        `${fileName}DeveloperRun: ${fileName}Developer ${fileName}DeveloperClean ${fileName}DeveloperLink\n`+
        `\tmake ${fileName}DeveloperClean\n`+
        `\tmake ${fileName}Developer\n`+
        `\tmake ${fileName}DeveloperLink\n\n`+
       `######################################################################################\n\n`
       return output        
    }
    finalMake(){

    }

    makeAllTestCDeveloperDependencies(dir){
        return `\$\{${dir}_TEST_c_DEVELOPER_DEPENDENCIES\} `
    }

    makeAllTestHDeveloperDependencies(dir){
        return `\$\{${dir}_TEST_h_DEVELOPER_DEPENDENCIES\} `
    }

    makeAllTestODeveloperDependencies(dir){
        return `\$\{${dir}_TEST_o_DEVELOPER_DEPENDENCIES\} `
    }

    makeAllTestCProductionDependencies(dir){
        return `\$\{${dir}_TEST_c_PRODUCTION_DEPENDENCIES\} `
    }

    makeAllTestHProductionDependencies(dir){
        return `\$\{${dir}_TEST_h_PRODUCTION_DEPENDENCIES\} `
    }

    makeAllTestOProductionDependencies(dir){
        return `\$\{${dir}_TEST_o_PRODUCTION_DEPENDENCIES\} `
    }

    makeAllTestCDeveloperFiles(dir){
        return `\$\{${dir}_TEST_c_DEVELOPER_FILES\} `
    }

    makeAllTestHDeveloperFiles(dir){
        return `\$\{${dir}_TEST_h_DEVELOPER_FILES\} `
    }
    makeAllTestODeveloperFiles(dir){
        return `\$\{${dir}_TEST_o_DEVELOPER_FILES\} `
    }

    makeAllTestCProductionFiles(dir){
        return `\$\{${dir}_TEST_c_PRODUCTION_FILES\} `
    }
    makeAllTestHProductionFiles(dir){
        return `\$\{${dir}_TEST_h_PRODUCTION_FILES\} `
    }

    makeAllTestOProductionFiles(dir){

        return `\$\{${dir}_TEST_o_PRODUCTION_FILES\} `
    }
}


new Make(makeObject)