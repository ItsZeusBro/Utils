import {makeObject} from "./MakeObject.js"
import fs from 'node:fs'

class Make{
    constructor(makeObject){
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
        for(var i=0; i<uniquePaths.length; i++){
            var testDir=uniquePaths[i]+'Test/'
            var dir=uniquePaths[i]
            var fileBase=dir.split('/')[dir.split('/').length-2]
            console.log(fileBase)
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
}


new Make(makeObject)