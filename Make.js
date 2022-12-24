import {makeObject} from "./MakeObject.js"
import fs from 'node:fs'

class Make{
    constructor(makeObject, buildPaths){
        this.ALL_TEST_c_DEVELOPER_DEPENDENCIES=``;
        this.ALL_TEST_h_DEVELOPER_DEPENDENCIES=``;
        this.ALL_TEST_o_DEVELOPER_DEPENDENCIES=``;
        this.ALL_TEST_c_PRODUCTION_DEPENDENCIES=``;
        this.ALL_TEST_h_PRODUCTION_DEPENDENCIES=``;
        this.ALL_TEST_o_PRODUCTION_DEPENDENCIES=``;
        this.ALL_TEST_c_DEVELOPER_FILES=``;
        this.ALL_TEST_h_DEVELOPER_FILES=``;
        this.ALL_TEST_o_DEVELOPER_FILES=``;
        this.ALL_TEST_c_PRODUCTION_FILES=``;
        this.ALL_TEST_h_PRODUCTION_FILES=``;
        this.ALL_TEST_o_PRODUCTION_FILES=``;
        this.makeAllProductionTests=``;
        this.makeAllProductionTestsClean=``;
        this.makeAllProductionTestsLink=``;

        this.uniquePaths=this.uniquePaths(makeObject)
        this.buildPaths(this.uniquePaths, buildPaths)
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

    buildPaths(uniquePaths, buildPaths){
        var makefileOutput=``;


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
                    this.cFile(dir, fileBase)
                }
                this.hFile(dir, fileBase)
                this.cTest(testDir)
                this.hTest(testDir)
                this.cDriver(testDir)
                this.hDriver(testDir)
            }
            
            makefileOutput+=this.make(uniquePaths[i].slice())
            this.ALL_TEST_c_DEVELOPER_DEPENDENCIES+=this.makeAllTestCDeveloperDependencies(uniquePaths[i].slice())
            this.ALL_TEST_h_DEVELOPER_DEPENDENCIES+=this.makeAllTestHDeveloperDependencies(uniquePaths[i].slice())
            this.ALL_TEST_o_DEVELOPER_DEPENDENCIES+=this.makeAllTestODeveloperDependencies(uniquePaths[i].slice())
            this.ALL_TEST_c_PRODUCTION_DEPENDENCIES+=this.makeAllTestCProductionDependencies(uniquePaths[i].slice())
            this.ALL_TEST_h_PRODUCTION_DEPENDENCIES+=this.makeAllTestHProductionDependencies(uniquePaths[i].slice())
            this.ALL_TEST_o_PRODUCTION_DEPENDENCIES+=this.makeAllTestOProductionDependencies(uniquePaths[i].slice())
            this.ALL_TEST_c_DEVELOPER_FILES+=this.makeAllTestCDeveloperFiles(uniquePaths[i].slice())
            this.ALL_TEST_h_DEVELOPER_FILES+=this.makeAllTestHDeveloperFiles(uniquePaths[i].slice())
            this.ALL_TEST_o_DEVELOPER_FILES+=this.makeAllTestODeveloperFiles(uniquePaths[i].slice())
            this.ALL_TEST_c_PRODUCTION_FILES+=this.makeAllTestCProductionFiles(uniquePaths[i].slice())
            this.ALL_TEST_h_PRODUCTION_FILES+=this.makeAllTestHProductionFiles(uniquePaths[i].slice())
            this.ALL_TEST_o_PRODUCTION_FILES+=this.makeAllTestOProductionFiles(uniquePaths[i].slice())
            this.makeAllProductionTests+=this._makeAllProductionTests(uniquePaths[i].slice())
            this.makeAllProductionTestsClean+=this._makeAllProductionTestsClean(uniquePaths[i].slice())

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

       `${dir}_TEST_c_DEVELOPER_FILES=\$\{${dir}_c_PATH\} \$\{${dir}_TEST_c_PATH\} \$\{${dir}_TEST_DRIVER_c_PATH\} \n`+
       `${dir}_TEST_h_DEVELOPER_FILES=\$\{${dir}_h_PATH\} \$\{${dir}_TEST_h_PATH\} \$\{${dir}_TEST_DRIVER_h_PATH\} \n`+
       `${dir}_TEST_o_DEVELOPER_FILES=\$\{${dir}_o_PATH\} \$\{${dir}_TEST_o_PATH\} \$\{${dir}_TEST_DRIVER_o_PATH\} \n`+

       `${dir}_TEST_c_PRODUCTION_FILES=\$\{${dir}_c_PATH\} \$\{${dir}_TEST_c_PATH\} \n`+
       `${dir}_TEST_h_PRODUCTION_FILES=\$\{${dir}_h_PATH\} \$\{${dir}_TEST_h_PATH\} \n`+
       `${dir}_TEST_o_PRODUCTION_FILES=\$\{${dir}_o_PATH\} \$\{${dir}_TEST_o_PATH\} \n\n\n`+

       `${dir}_TEST_DEVELOPER_FILES= \$\{${dir}_TEST_c_DEVELOPER_FILES\} \$\{${dir}_TEST_h_DEVELOPER_FILES\} \$\{${dir}_TEST_o_DEVELOPER_FILES\} \n\n\n`+


       `${fileName}Developer: \$\{${dir}_TEST_c_DEVELOPER_DEPENDENCIES\} \$\{${dir}_TEST_h_DEVELOPER_DEPENDENCIES\}\n`+
       `\tcd \$\{${dir}_DIR\}; gcc -c \$\{${dir}_c\}\n`+
       `\tcd \$\{${dir}_TEST_DIR\}; gcc -c \$\{${dir}_TEST_c\} \$\{${dir}_TEST_DRIVER_c\}\n\n`+

       `${fileName}Production: \$\{${dir}_TEST_c_PRODUCTION_DEPENDENCIES\} \$\{${dir}_TEST_h_PRODUCTION_DEPENDENCIES\}\n`+
       `\tcd \$\{${dir}_DIR\}; gcc -c \$\{${dir}_c\}\n`+
       `\tcd \$\{${dir}_TEST_DIR\}; gcc -c \$\{${dir}_TEST_c\}\n\n`+

        `${fileName}DeveloperClean: \$\{${dir}_TEST_o_DEVELOPER_DEPENDENCIES\}\n`+
        `\tcd \$\{${dir}_DIR\}; rm -f \$\{${dir}_o\}\n`+
        `\tcd \$\{${dir}_TEST_DIR\}; rm -f \$\{${dir}_TEST_o\} \$\{${dir}_TEST_DRIVER_o\}\n\n` +

        `${fileName}ProductionClean: \$\{${dir}_TEST_o_PRODUCTION_DEPENDENCIES\}\n`+
        `\tcd \$\{${dir}_DIR\}; rm -f \$\{${dir}_o\}\n`+
        `\tcd \$\{${dir}_TEST_DIR\}; rm -f \$\{${dir}_TEST_o\}\n\n` +

        `${fileName}DeveloperLink: \$\{${dir}_TEST_o_DEVELOPER_DEPENDENCIES\}\n`+
	    `\t(gcc -o developerTest \$\{${dir}_o_PATH\} \$\{${dir}_TEST_o_PATH\} \$\{${dir}_TEST_DRIVER_o_PATH\})\n\n`+

        `${fileName}ProductionLink: \$\{${dir}_TEST_o_PRODUCTION_DEPENDENCIES\}\n`+
	    `\t(gcc -o productionTest \$\{${dir}_o_PATH\} \$\{${dir}_TEST_o_PATH\})\n\n`+
        
        `${fileName}DeveloperRun: \$\{${dir}_TEST_o_DEVELOPER_DEPENDENCIES\} \$\{${dir}_TEST_c_DEVELOPER_DEPENDENCIES\} \$\{${dir}_TEST_h_DEVELOPER_DEPENDENCIES\}\n`+
        `\tmake ${fileName}DeveloperClean\n`+
        `\tmake ${fileName}Developer\n`+
        `\tmake ${fileName}DeveloperLink\n`+
        `\t./developerTest\n\n`+

        `########################################################################################################################################\n\n\n\n\n\n`
       return output        
    }
    finalMake(){

        var output = 
        `\n\n`+
        `ALL_TEST_c_DEVELOPER_DEPENDENCIES=${this.ALL_TEST_c_DEVELOPER_DEPENDENCIES}\n`+
        `ALL_TEST_h_DEVELOPER_DEPENDENCIES=${this.ALL_TEST_h_DEVELOPER_DEPENDENCIES}\n`+
        `ALL_TEST_o_DEVELOPER_DEPENDENCIES=${this.ALL_TEST_o_DEVELOPER_DEPENDENCIES}\n`+
        `ALL_TEST_c_PRODUCTION_DEPENDENCIES=${this.ALL_TEST_c_PRODUCTION_DEPENDENCIES}\n`+
        `ALL_TEST_h_PRODUCTION_DEPENDENCIES=${this.ALL_TEST_h_PRODUCTION_DEPENDENCIES}\n`+
        `ALL_TEST_o_PRODUCTION_DEPENDENCIES=${this.ALL_TEST_o_PRODUCTION_DEPENDENCIES}\n`+
        `ALL_TEST_c_DEVELOPER_FILES=${this.ALL_TEST_c_DEVELOPER_FILES}\n`+
        `ALL_TEST_h_DEVELOPER_FILES=${this.ALL_TEST_h_DEVELOPER_FILES}\n`+
        `ALL_TEST_o_DEVELOPER_FILES=${this.ALL_TEST_o_DEVELOPER_FILES}\n`+
        `ALL_TEST_c_PRODUCTION_FILES=${this.ALL_TEST_c_PRODUCTION_FILES}\n`+
        `ALL_TEST_h_PRODUCTION_FILES=${this.ALL_TEST_h_PRODUCTION_FILES}\n`+
        `ALL_TEST_o_PRODUCTION_FILES=${this.ALL_TEST_o_PRODUCTION_FILES}\n`+
        `########################################################################################################################################\n\n\n\n\n\n`+

        `allProductionTests: ${this.ALL_TEST_c_PRODUCTION_DEPENDENCIES} ${this.ALL_TEST_h_PRODUCTION_DEPENDENCIES}\n`+
        `${this.makeAllProductionTests}\n\n`+
        `allProductionTestsLink: ${this.ALL_TEST_o_PRODUCTION_DEPENDENCIES}\n`+
        `\tgcc -o allProduction ${this.ALL_TEST_o_PRODUCTION_FILES}\n\n`+
        `allProductionTestsClean: ${this.ALL_TEST_o_PRODUCTION_DEPENDENCIES}\n`+
        `${this.makeAllProductionTestsClean}\n\n`+
        `allProductionTestsRun: ${this.ALL_TEST_c_PRODUCTION_DEPENDENCIES} ${this.ALL_TEST_h_PRODUCTION_DEPENDENCIES}\n`+
        `\tmake allProductionTestsClean\n`+
        `\tmake allProductionTests\n`+
        `\tmake allProductionTestsLink\n`+
        `\t./allProduction\n\n`+
        `########################################################################################################################################\n\n\n\n\n\n`
        
        return output
    }

    makeAllTestCDeveloperDependencies(dir){
        dir=dir.slice().split('/')
        dir.pop()
        dir.shift()
        dir=dir.join('_').toUpperCase()

        return `\$\{${dir}_TEST_c_DEVELOPER_DEPENDENCIES\} `
    }
    makeAllTestHDeveloperDependencies(dir){
        dir=dir.slice().split('/')
        dir.pop()
        dir.shift()
        dir=dir.join('_').toUpperCase()

        return `\$\{${dir}_TEST_h_DEVELOPER_DEPENDENCIES\} `
    }
    makeAllTestODeveloperDependencies(dir){
        dir=dir.slice().split('/')
        dir.pop()
        dir.shift()
        dir=dir.join('_').toUpperCase()

        return `\$\{${dir}_TEST_o_DEVELOPER_DEPENDENCIES\} `
    }
    makeAllTestCProductionDependencies(dir){
        dir=dir.slice().split('/')
        dir.pop()
        dir.shift()
        dir=dir.join('_').toUpperCase()

        return `\$\{${dir}_TEST_c_PRODUCTION_DEPENDENCIES\} `
    }
    makeAllTestHProductionDependencies(dir){
        dir=dir.slice().split('/')
        dir.pop()
        dir.shift()
        dir=dir.join('_').toUpperCase()

        return `\$\{${dir}_TEST_h_PRODUCTION_DEPENDENCIES\} `
    }
    makeAllTestOProductionDependencies(dir){
        dir=dir.slice().split('/')
        dir.pop()
        dir.shift()
        dir=dir.join('_').toUpperCase()

        return `\$\{${dir}_TEST_o_PRODUCTION_DEPENDENCIES\} `
    }
    makeAllTestCDeveloperFiles(dir){
        dir=dir.slice().split('/')
        dir.pop()
        dir.shift()
        dir=dir.join('_').toUpperCase()

        return `\$\{${dir}_TEST_c_DEVELOPER_FILES\} `
    }
    makeAllTestHDeveloperFiles(dir){
        dir=dir.slice().split('/')
        dir.pop()
        dir.shift()
        dir=dir.join('_').toUpperCase()

        return `\$\{${dir}_TEST_h_DEVELOPER_FILES\} `

    }
    makeAllTestODeveloperFiles(dir){
        dir=dir.slice().split('/')
        dir.pop()
        dir.shift()
        dir=dir.join('_').toUpperCase()

        return `\$\{${dir}_TEST_o_DEVELOPER_FILES\} `

    }
    makeAllTestCProductionFiles(dir){
        dir=dir.slice().split('/')
        dir.pop()
        dir.shift()
        dir=dir.join('_').toUpperCase()

        return `\$\{${dir}_TEST_c_PRODUCTION_FILES\} `

    }
    makeAllTestHProductionFiles(dir){
        dir=dir.slice().split('/')
        dir.pop()
        dir.shift()
        dir=dir.join('_').toUpperCase()

        return `\$\{${dir}_TEST_h_PRODUCTION_FILES\} `

    }
    makeAllTestOProductionFiles(dir){
        dir=dir.slice().split('/')
        dir.pop()
        dir.shift()
        dir=dir.join('_').toUpperCase()

        return `\$\{${dir}_TEST_o_PRODUCTION_FILES\} `

    }
    _makeAllProductionTests(dir){
        dir=dir.slice().split('/')
        dir.pop()
        dir.shift()
        var fileName=dir.slice().pop()
        dir=dir.join('_').toUpperCase()

        return `\tmake ${fileName}Production\n`
    }
    _makeAllProductionTestsClean(dir){
        dir=dir.slice().split('/')
        dir.pop()
        dir.shift()
        var fileName=dir.slice().pop()
        dir=dir.join('_').toUpperCase()

        return `\tmake ${fileName}ProductionClean\n`
    }

}


new Make(makeObject, process.argv[2])