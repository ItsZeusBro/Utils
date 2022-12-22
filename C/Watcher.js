import fs from "node:fs"
import { spawn } from "node:child_process"


class Watcher{
    watch(files){
        var prev=[]
        var current=[]
        for(var i = 0; i<files.length; i++){
            current.push(fs.statSync(files[i]))
        }
        prev=current
        var i = 0;
        while(true){
            if(JSON.stringify(current[i])!=JSON.stringify(prev[i])){
                //then we need to compile the sub project over again
                console.log(files[i], 'changed; recompiling...')
                prev=current
                current=[]
                for(var j = 0; j<files.length; j++){
                    current.push(fs.statSync(files[j]))
                }
                i=0;
                this.recompiler(files[i])
            }
            if(i==files.length){
                //make prev current for next round of comparisons
                prev=current
                current=[]
                for(var j = 0; j<files.length; j++){
                    current.push(fs.statSync(files[j]))
                }
                i=0;
            }   
            i++;  
        }
    }

    recompiler(file){
        var makeArgs;
        if(file.includes('./Test.')){
            //compile whole project
            console.log(file, 'allDevRunClean')
            makeArgs=['allDevRunClean']
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
        const make = spawn('make', makeArgs)
        make.stdout.on('data', (data, err) => {
            console.log(data, err)
        });
        make.stderr.on('data', (data) => {
            console.log(data)
        });
    }
}
const find = spawn('find', ['.', '-name', '*.c', '-o', '-name', '*.h']);
var watcher = new Watcher()

find.stdout.on('data', (data) => {
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
});

