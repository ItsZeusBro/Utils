//IDEA: COLLECT OUTPUT FROM EXECUTION FILE, IF IT RETURNS 0 ONCE, THEN PRINT SUCCESSFUL RUN OUTPUT
//IF IT DOESNT RETURN 0 ONCE, PRINT UNSUCCESSFUL OUTPUT. THIS ENSURES WE ONLY PRINT WHATS USEFUL
//WITHOUT REDUNDANCY
import { spawn, exec } from "node:child_process"
import fs from "node:fs";
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
            makeArgs=['CryptoDeveloperRun']
            console.log(file, 'CryptoDeveloperRun')
        }else if(file.includes('Automata')){
            //compile automata
            makeArgs=['AutomataDeveloperRun']
            console.log(file, 'AutomataDeveloperRun')
        }else if(file.includes('Utils/Types/Test')||file.includes('Utils/Types/Types')){
            //compile entire Utils Types lib
            makeArgs=['UtilsDeveloperRun']
            console.log(file, 'UtilsDeveloperRun')
        }else if(file.includes('Utils/Types/Unicode')){
            //compile Unicode lib
            makeArgs=['UnicodeDeveloperRun']
            console.log(file, 'UnicodeDeveloperRun')
        }else if(file.includes('Utils/Types/Array')){
            //compile Array lib
            makeArgs=['ArrayDeveloperRun']
            console.log(file, 'ArrayDeveloperRun')
        }else if(file.includes('Utils/Types/Number')){
            //compile Number lib
            makeArgs=['NumberDeveloperRun']
            console.log(file, 'NumberDeveloperRun')
        }else if(file.includes('Utils/Types/Float')){
            //compile Float lib
            makeArgs=['FloatDeveloperRun']
            console.log(file, 'FloatDeveloperRun')
        }else if(file.includes('Utils/Types/LinkList')){
            //compile Link List lib
            makeArgs=['LinkListDeveloperRun']
            console.log(file, 'LinkListDeveloperRun')
        }else if(file.includes('Utils/Types/String')){
            //compile String lib
            makeArgs=['StringDeveloperRun']
            console.log(file, 'StringDeveloperRun')
        }else if(file.includes('Utils/Test/Test')||file.includes('Utils/Utils.')){
            makeArgs=['UtilsDeveloperRun']          
            console.log(file, 'UtilsDeveloperRun')
        }else if(file.includes('Utils/Assertions')){
            //compile Assertions
            makeArgs=['AssertionsDeveloperRun']
            console.log(file, 'AssertionsDeveloperRun')
        }else if(file.includes('Utils/Dictionary')){
            //compile Dictionary
            makeArgs=['DictionaryDeveloperRun']
            console.log(file, 'DictionaryDeveloperRun')
        }else if(file.includes('Utils/Rand')){
            //compile Rand
            makeArgs=['RandDeveloperRun']
            console.log(file, 'RandDeveloperRun')
        }else if(file.includes('Combinatorics')){
            //compile Combinatorics
            makeArgs=['CombinatoricsDeveloperRun']
            console.log(file, 'CombinatoricsDeveloperRun')
        }else if(file.includes('Matrix')){
            //compile matrix
            makeArgs=['MatrixDeveloperRun']
            console.log(file, 'MatrixDeveloperRun')
        }else if(file.includes('Stats')){
            //compile stats
            makeArgs=['StatsDeveloperRun']
            console.log(file, 'StatsDeveloperRun')
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