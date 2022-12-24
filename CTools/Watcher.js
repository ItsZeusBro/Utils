import fs, { symlinkSync } from "node:fs"
import { spawn, exec } from "node:child_process"
import { scheduler } from 'node:timers/promises';

class Watcher{

    watch(files){
        console.log('watching files')
        var state=[]
        var semaphore=[]
        for(var j = 0; j<files.length; j++){
            state.push(JSON.stringify(fs.statSync(files[j])));
            semaphore.push(1);
        }
        setInterval(this._watch, 500, state, this, files, semaphore);
    }

    _watch(state, obj, files, semaphore){
        for(var i = 0; i<files.length; i++){
            if(i==files.length){ return }
            var stat=fs.statSync(files[i]);
            var stat1=JSON.stringify(stat).trim();
            var stat2=state[i].trim();
            if(stat1!=stat2){
                state[i]=stat1
                if(semaphore[i]){
                    semaphore[i]=0;
                    var some_function = function (file, semaphore, i) {
                        return new Promise(
                            (resolve, reject)=>{
                                obj.recompiler(file)
                                resolve([semaphore, i])
                            }
                        )
                    }
                    some_function(files[i], semaphore, i).then(function (semaphore) {
                        semaphore[0][semaphore[1]]=1;
                    });
                }
            }
        }
    }

    async recompiler(file){
        var makeArgs;
        console.log(file)
        if(file.includes('./Test/Test.')){
            //compile whole project
            console.log('File Change Detected in', file, '\n', 'running make allDevRun')
            makeArgs=['allDevRun']
        }else if(file.includes('Crypto')){
            //compile crypto
            makeArgs=['cryptoDevRun']
            console.log(file, 'cryptoDevRun')
        }else if(file.includes('Automata')){
            //compile automata
            makeArgs=['automataDevRun']
            console.log(file, 'automataDevRun')
        }else if(file.includes('Utils/Types/Test')||file.includes('Utils/Types/Types')){
            //compile entire Utils Types lib
            makeArgs=['utilsDevRun']
            console.log(file, 'utilsDevRun')
        }else if(file.includes('Utils/Types/Unicode')){
            //compile Unicode lib
            makeArgs=['utilsTypesUnicodeDevRun']
            console.log(file, 'utilsTypesUnicodeDevRun')
        }else if(file.includes('Utils/Types/Array')){
            //compile Array lib
            makeArgs=['utilsTypesArrayDevRun']
            console.log(file, 'utilsTypesArrayDevRun')
        }else if(file.includes('Utils/Types/Number')){
            //compile Number lib
            makeArgs=['utilsTypesNumberDevRun']
            console.log(file, 'utilsTypesNumberDevRun')
        }else if(file.includes('Utils/Types/Float')){
            //compile Float lib
            makeArgs=['utilsTypesFloatDevRun']
            console.log(file, 'utilsTypesFloatDevRun')
        }else if(file.includes('Utils/Types/LinkList')){
            //compile Link List lib
            makeArgs=['utilsTypesLinkListDevRun']
            console.log(file, 'utilsTypesLinkListDevRun')
        }else if(file.includes('Utils/Types/String')){
            //compile String lib
            makeArgs=['utilsTypesStringDevRun']
            console.log(file, 'utilsTypesStringDevRun')
        }else if(file.includes('Utils/Test/Test')||file.includes('Utils/Utils.')){
            makeArgs=['utilsDevRun']          
            console.log(file, 'utilsDevRun')
        }else if(file.includes('Utils/Assertions')){
            //compile Assertions
            makeArgs=['utilsAssertionsDevRun']
            console.log(file, 'utilsAssertionsDevRun')
        }else if(file.includes('Utils/Dictionary')){
            //compile Dictionary
            makeArgs=['utilsDictionaryDevRun']
            console.log(file, 'utilsDictionaryDevRun')
        }else if(file.includes('Utils/Rand')){
            //compile Rand
            makeArgs=['utilsRandDevRun']
            console.log(file, 'utilsRandDevRun')
        }else if(file.includes('Combinatorics')){
            //compile Combinatorics
            makeArgs=['combinatoricsDevRun']
            console.log(file, 'combinatoricsDevRun')
        }else if(file.includes('Matrix')){
            //compile matrix
            makeArgs=['matrixDevRun']
            console.log(file, 'matrixDevRun')
        }else if(file.includes('Stats')){
            //compile stats
            makeArgs=['statsDevRun']
            console.log(file, 'statsDevRun')
        }
        exec('make '+makeArgs.join(' '), (error, stdout, stderr)=>{
            if(stdout){
                console.log('\x1b[32m%s\x1b[0m', stdout,'\n');
            }
            if(stderr){
                console.log('\x1b[33m%s\x1b[0m', stderr,'\n');
            }
            if(error){
                console.log('\x1b[31m%s\x1b[0m', error,'\n');
            }
        })
    }
}

const find = spawn('find', ['.', '-name', '*.c', '-o', '-name', '*.h']);
var watcher = new Watcher()

find.stdout.on('data', (data) => {
    if(typeof(data)!=='null'){
        var string = data.toJSON().data
        var file=''
        var files=[]
        for(var i = 0; i<string.length; i++){
            if('\n'!=String.fromCharCode(string[i])){
                file+=String.fromCharCode(string[i])
            }else{
                files.push(file)
                file=''
            }
        }
        watcher.watch(files)
    }
});

var dependency_tree={
    "project":"./",

    //add standard and non standard c dependencies for each file 
    "Automata/Automata.c":[],
    "Automata/Automata.h":[],


    "Combinatorics/Combinatorics.c":[],
    "Combinatorics/Combinatorics.h":[],


    "Crypto/Crypto.c":[],
    "Crypto/Crypto.h":[],


    "Matrix/Matrix.c":[],
    "Matrix/Matrix.h":[],


    "Stats/Stats.c":[],
    "Stats/Stats.h":[],


    "Utils/Utils.c":[],
    "Utils/Utils.h":[],


    "Utils/Assertions/Assertions.c":[],
    "Utils/Assertions/Assertions.h":[],


    "Utils/Dictionary/Dictionary.c":[],
    "Utils/Dictionary/Dictionary.h":[],


    "Utils/Rand/Rand.c":[],
    "Utils/Rand/Rand.h":[],


    "Utils/Types/Types.c":[],
    "Utils/Types/Types.h":[],


    "Utils/Types/Array/Array.c":[],
    "Utils/Types/Array/Array.h":[],


    "Utils/Types/Float/Float.c":[],
    "Utils/Types/Float/Float.h":[],


    "Utils/Types/LinkList/LinkList.c":[],
    "Utils/Types/LinkList/LinkList.h":[],


    "Utils/Types/Number/Number.c":[],
    "Utils/Types/Number/Number.h":[],


    "Utils/Types/String/String.c":[],
    "Utils/Types/String/String.h":[]

}