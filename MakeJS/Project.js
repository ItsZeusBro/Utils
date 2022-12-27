import fs from 'node:fs'
import { makeObject } from './MakeObject.js'
export class Project{
    constructor(makeObject, flags){
        this.createProject(makeObject, flags);
    }

    createProject(makeObject, flags){
        var directories=Object.keys(makeObject)
        for(var i=0; i<directories.length; i++){
            var directory=directories[i].slice()
            var testDirectory=this.testDirectory(directory)
            this.createDirectory(directory)
            this.createDirectory(testDirectory)
            var fileBase=directory.split('/')[directory.split('/').length-2]
            if(!this.createHFile(directory, makeObject[directory])){
                this.updateFileDependencies(directory+fileBase+'.h', makeObject[directory]);
            }
            this.createHTestFile(testDirectory)
            this.createHTestDriverFile(testDirectory)
            this.createCFile(directory)
            this.createCTestFile(testDirectory)
            this.createCTestDriverFile(testDirectory)
        }
    }

    testDirectory(path){ return path+'Test/' }

    createDirectory(directory){ if (!fs.existsSync(directory)){ fs.mkdirSync(directory); } }

    exists(file){ return fs.existsSync(file) }

    updateFileDependencies(file, dependencies){
        console.log('updating File', file, dependencies);
        if(this.exists(file)){
            var data = fs.readFileSync(file, 'UTF-8');
            var lines = data.split(/\r?\n/);
            var doNotUpdate=[]
            for(var i = lines.length-1; i>=0; i--){
                if(lines[i].includes('#include')){
                    var update=true
                    for(var j = 0; j<dependencies.length; j++){
                        if(lines[i]==`#include `+`"${dependencies[j]}"`){
                            update=false
                            doNotUpdate.push(j)
                        }
                    }
                    if(update){
                        //we only want to update dependencies that are not in doNotUpdate
                        for(var j = 0; j<dependencies.length; j++){
                            if(!doNotUpdate.includes(j)){
                                //then update
                                var begining = lines.slice(0, 1)
                                var end = lines.slice(1)
                                lines=begining.concat([`#include `+`"${dependencies[j]}"`]).concat(end)
                                console.log(lines)
                            }

                        }
                        fs.writeFileSync(file, lines.join('\n'));
                        return true
                    }
                }
            }
        }
        return false
    }

    createHFile(directory, dependencies){
        if(this.exists(directory+fileBase+'.h')){
            return false
        }else{
            var fileBase=directory.split('/')[directory.split('/').length-2];
            var fileDescriptor=(directory.split('/').slice(1).join('_')+fileBase).toUpperCase();
            var output = `#ifndef ${fileDescriptor}\n#define ${fileDescriptor}\n\n`;
            for(var i=0; i<dependencies.length; i++){
                var m =directory.slice().split('/').length-3;
                output+= `#include `+`"`+dependencies[i]+`"\n`;
            }
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

new Project(makeObject);