import fs from 'node:fs'
import { makeObject } from './MakeObject.js'
export class Project{
    constructor(makeObject, flags){
        this.createProject(makeObject, flags)
    }

    createProject(makeObject, flags){
        var directories=Object.keys(makeObject)
        for(var i=0; i<directories.length; i++){
            var directory=directories[i].slice()
            var testDirectory=this.testDirectory(directory)
            var fileBase=directory.split('/')[directory.split('/').length-2]
            this.createDirectory(directory)
            this.createDirectory(testDirectory)

            if(!this.createCMainFile(directory, fileBase)){ 
                this.updateFileDependencies(directory+fileBase+'.h', makeObject[directory])
                console.log('updateCFile')
            }
            //else{
            //     if(!this.createCFile(directory, fileBase, makeObject[directory])){
            //         //update dependencies
            //         this.updateCFile(directory, fileBase, makeObject[directory])
            //     }
            // }

            // if(!this.createHFile(directory, fileBase)){
            //     //update dependencies
            //     this.updateHFile(directory, fileBase, makeObject[directory])
            // }
            // if(!this.createCTestFile(testDirectory)){
            //     //update dependencies
            //     this.updateCTestFile(directory, fileBase, makeObject[directory])

            // }
            // if(!this.createHTestFile(testDirectory)){
            //     //update dependencies
            //     this.updateHTestFile(directory, fileBase, makeObject[directory])

            // }
            // if(!this.createCTestDriverFile(testDirectory)){
            //     //update dependencies
            //     this.updateCDriverFile(testDirectory, fileBase, makeObject[directory])

            // }
            // if(!this.createHTestDriverFile(testDirectory)){
            //     //update dependencies
            //     this.updateHDriverFile(directory, fileBase, makeObject[directory])

            // }
        }
    }


    testDirectory(path){
        return path+'Test/'
    }

    createDirectory(directory){
        //if the paths or files dont exist, we make them no matter what
        if (!fs.existsSync(directory)){ fs.mkdirSync(directory); }
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

    isMainDirectory(dir){
        if(dir.split('/').length==3){
            return true
        }else{
            return false
        }
    }

    exists(file){
        return fs.existsSync(file)
    }

    updateFileDependencies(file, dependencies){
        console.log('updating File', file, dependencies)
        if(this.exists(file)){
            var data = fs.readFileSync(file, 'UTF-8')
            var lines = data.split(/\r?\n/)
            console.log(lines)
            for(var i = lines.length-1; i>=0; i--){
                if(lines[i].includes('#include')){
                    console.log(lines[i])
                    var newLine =i+1;
                    for(var j = 0; j<dependencies.length; j++){
                        lines.splice(newLine, 0, `#include `+`"${dependencies[j]}"`);
                    }
                    fs.writeFileSync(file, lines.join('\n'));

                    return true
                }
            }
            
        }
        return false
    }
    
    createCFile(directory, fileBase){
        var output = `#include `+`"`+fileBase+'.h'+`"\n`

        fs.writeFileSync(directory+fileBase+'.c', output);
    }
    updateCFile(directory, fileBase){
        
    }

    createHFile(directory, fileBase, dependencies){
        var fileDescriptor=(directory.split('/').slice(1).join('_')+fileBase).toUpperCase()
        var output = `#ifndef ${fileDescriptor}\n#define ${fileDescriptor}\n\n#endif`

        for(var i=0; i<dependencies.length; i++){
            var m =directory.slice().split('/').length-3
            var dependency=``
            for(var j = 0; j<m; j++){
                dependency+=`../`
            }
            dependency+=dependencies[i].split('/').slice(2).join('/')
            output+= `#include `+`"`+dependency+`"\n`
        }

        fs.writeFileSync(directory+fileBase+'.h', output);
    }
    updateHFile(directory, fileBase, dependencies){
        for(var i=0; i<dependencies.length; i++){
            var m =directory.slice().split('/').length-3
            var dependency=``
            for(var j = 0; j<m; j++){
                dependency+=`../`
            }
            dependency+=dependencies[i].split('/').slice(2).join('/')
            output+= `#include `+`"`+dependency+`"\n`
        }
    }

    createCTestFile(directory){
        var fileDescriptor=(directory.split('/').slice(1).join('_')+'Test').toUpperCase()
        var output = 
        `#include `+`"`+'Test'+'.h'+`"\n\n`+
        `int _${fileDescriptor}(int argc, char *argv[]){\n\n\treturn 0;\n}`;
        fs.writeFileSync( directory+'Test'+'.c', output);
    }

    createHTestFile(directory){
        var fileBase=directory.split('/')[directory.split('/').length-3]
        var fileDescriptor=(directory.split('/').slice(1).join('_')+'Test').toUpperCase()
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

    createCDriverFile(directory){
        var fileDescriptor1=(directory.split('/').slice(1).join('_')+'Driver').toUpperCase()
        var fileDescriptor2=(directory.split('/').slice(1).join('_')+'Test').toUpperCase()
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

    createHDriverFile(directory){
        var fileDescriptor=(directory.split('/').slice(1).join('_')+'driver').toUpperCase()
        var output = `#ifndef ${fileDescriptor}\n`+
        `#define ${fileDescriptor}\n`+
        `#include "Test.h"\n`+
        `#endif`
        fs.writeFileSync(directory+'Driver'+'.h', output);
    }
}

new Project(makeObject)