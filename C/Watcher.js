import fs from "node:fs"
import { spawn, exec } from "node:child_process"
import { scheduler } from 'node:timers/promises';
import {Console} from "node:console";
import { stderr, stdout } from "node:process";


class Watcher{
    async watch(files){
        console.log('watching files')
        var state=[]
        for(var i = 0; i<files.length; i++){
            state.push(fs.statSync(files[i]))
        }
        var i = 0;
        while(true){
            var stat = fs.statSync(files[i])
            if(JSON.stringify(stat)!=JSON.stringify(state[i])){
                //then we need to compile the sub project over again
                //console.log(stat, state[i], 'file change discovered; recompiling', files[i])
                state[i]=stat
                this.recompiler(files[i])
            }
            if(i==files.length-1){ 
                await scheduler.wait(1000);
                i=0; 
            }   
            i++;  
        }
    }

    recompiler(file){
        var makeArgs;
        if(file.includes('./Test.')){
            //compile whole project
            console.log(file, 'allDevRun')
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
            console.log('\x1b[32m%s\x1b[0m', stdout);
            console.log('\x1b[33m%s\x1b[0m', stderr);
            console.log('\x1b[31m%s\x1b[0m', error);
        });
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

