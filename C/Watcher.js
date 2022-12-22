import fs from "node:fs"
import { spawn } from "node:child_process"


class Watcher{
    watch(files){
        console.log(files)
        var prev=[]
        var current=[]
        var i = 0;

        while(true){
            if(JSON.stringify(current[i])!=JSON.stringify(prev[i])){
                //then we need to compile the sub project over again
            }
            if(i==files.length){
                //make prev current for next round of comparisons
                prev=current
                current=[]
                for(var i = 0; i<files.length; i++){
                    current.push(fs.statSync(files[i]))
                }
                i=0;
            }
            i++;
        }
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

