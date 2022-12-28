import fs from 'node:fs'
export class Project{
    constructor(makeObject, options){
        this.createProject(makeObject);
    }

    createProject(makeObject){
        var directories=Object.keys(makeObject)
        for(var i=0; i<directories.length; i++){
            var directory=directories[i].slice()
            var testDirectory=this.testDirectory(directory)
            this.createDirectory(directory)
            this.createDirectory(testDirectory)
            var fileBase=directory.split('/')[directory.split('/').length-2]
            var dependencies=makeObject[directory]
            for(var n=0; n<dependencies.length; n++){
                var m =directory.slice().split('/').length-3
                var path=``
                for(var j = 0; j<m; j++){
                    path+=`../`
                }
                path+=dependencies[n]
                dependencies[n]=path
            }
            if(!this.createHFile(directory, dependencies)){
                this.updateFileDependencies(directory+fileBase+'.h', dependencies);
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

        if(this.exists(file)){
            var data = fs.readFileSync(file, 'UTF-8');
            var lines = data.split(/\r?\n/);
            console.log(lines)
            //we only want to update dependencies that do not already exist in the file
            //we also do not want to overwrite the other parts of the file
            //there is no other possibility except for removing an existing dependency
            //that we know should not belong in the file by way of some express intent to remove
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
            output+=`//?\n`
            for(var i=0; i<dependencies.length; i++){
                var m =directory.slice().split('/').length-3;
                output+= `#include `+`"`+dependencies[i]+`"\n`;
            }
            output+=`\n//?\n`
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