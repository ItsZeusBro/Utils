import fs from "node:fs"
import { spawn, exec } from "node:child_process"
import { scheduler } from 'node:timers/promises';

class Watcher{
    watch(files){
        console.log('watching files')
        var state=[]
        var semaphore=[]
        for(var j = 0; j<files.length; j++){
            state.push(fs.statSync(files[j]));
            semaphore.push(1);
        }
        setInterval(this._watch, 10, state, this, files, semaphore);
    }

    async _watch(state, obj, files, semaphore){
        for(var i = 0; i<files.length; i++){
            if(i==files.length){ return }
            if(semaphore[i]){
                var stat=fs.statSync(files[i]);
                var stat1=JSON.stringify(stat);
                var stat2=JSON.stringify(state[i]);
                var dif=false;
                if(stat1!=stat2){
                    dif=true;
                    state[i]=stat
                }
            }
            if(semaphore[i]&&dif){
                console.log(JSON.parse(stat1), JSON.parse(stat2))
                dif=false;
                semaphore[i]=0;
                Promise.resolve(obj.recompiler(files[i])).then(
                    ()=>{
                        state[i]=stat;
                        semaphore[i]=1;
                    }
                )
            }
        }

    }

    async recompiler(file){
        var makeArgs;
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
            // console.log('\x1b[32m%s\x1b[0m', stdout,'\n');
            console.log('\x1b[33m%s\x1b[0m', stderr,'\n');
            console.log('\x1b[31m%s\x1b[0m', error,'\n');
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