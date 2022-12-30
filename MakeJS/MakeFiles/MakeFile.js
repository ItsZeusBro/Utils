import fs from 'node:fs'
import { execSync } from 'node:child_process';
import {MakeFileString} from "./MakeFileString.js"

export class MakeFile{
    constructor(makeObject, modifier){
        this.actions=this.action_queue(makeObject, modifier);
        var makeFileString=new MakeFileString(makeObject);
        var [makeFileString, makeObject]=this.modify(makeFileString, this.actions, makeObject);
        var string=''
        var keys = Object.keys(makeFileString.resolved)
        for(var i=0; i<keys.length; i++){
            string+=makeFileString.resolved[keys[i]]+'\n'
        }
        fs.writeFileSync('./tmp/makefile', string);
        // fs.writeFileSync('./MakeObject/OldMakeObject.js', JSON.stringify(makeObject));
    }

    modify(makeFileString, actions, makeObject){
        var resolved=this.resolve(makeFileString)
        for(var i = 0; i<actions.length; i++){ 
            [makeFileString, makeObject]=this._modify(resolved, actions[i], makeObject) 
        }
        return [makeFileString, makeObject]
    }

    _modify(resolved, action, makeObject){
        if(action['action']=='delete'){
            return this.delete(resolved, action['module'], action, makeObject)
        }else if(action['action']=='add'){
            //we need to:
            //add the new module and its dependencies to makefile
            return this.add(resolved, action['module'], action, makeObject)


        }else if(action['action']=='move'){
            //we need to:
            //rename the module in the makefile and change its dependencies to account for the move if necessary

        }
        return resolved
    }
    add(resolved, _module, action, makeObject){
        //we want to find a section in the make appropriate to the module
        //we want to use makeFileLiterals to create a module page

        makeObject[_module]=action['dependencies']
        var makeFileString = new MakeFileString(makeObject);
        return [makeFileString, makeObject]
    }
    delete(resolved, _module, action, makeObject){
        for(var i=0; i<Object.keys(resolved).length; i++){
            if(resolved[i]&&resolved[i].includes(_module)){
                var matches = resolved[i].match(new RegExp( `${_module}[^ ]* `, 'g'));
                if(matches){
                    for(var j = 0; j<matches.length; j++){
                        resolved[i]=resolved[i].replace(matches[j], '');
                    }
                }
            }else if(resolved[i]&&resolved[i].includes(_module.split('/').join("").slice(1))){
                resolved[i]=''
            }
        }
        return this._delete(resolved, _module)
    }

    _delete(resolved, _module){
        var sectionMarker1=0;
        var sectionMarker2=0;
        var sectionFound=false
        for(var i = 0; i<Object.keys(resolved).length; i++){
            if(resolved[i].includes(_module)){
                sectionFound=true
            }
            
            if(sectionFound){
                if(resolved[i].includes('#################')){
                    sectionMarker2=i
                    break
                }
            }else{
                if(resolved[i].includes('#################')){
                    sectionMarker1=i
                }
            }
        }
        sectionMarker1+=1
        for(var i=sectionMarker1; i<=sectionMarker2; i++){
            delete resolved[i]
        }
        return resolved
    }

    _makeObject(makeFileString){
        //makeFileString
    }

    action_queue(makeObject, modifier){
        var add=[]
        var del=[]
        var refactor=[]
        var move = []
        for(var i=0; i<modifier.length; i++){
            if(modifier[i]['action']=='add'){ add.push(modifier[i]) }
            else if(modifier[i]['action']=='delete'){ del.push(modifier[i]) }
            else if(modifier[i]['action']=='refactor'){ refactor.push(modifier[i]) }
            else if(modifier[i]['action']=='move'){ move.push(modifier[i]) }
        }
        return del.concat(refactor.concat(add.concat(move)))
    }

    resolve(makeFileString){

        var resolved={}
        var lines=makeFileString.string.split('\n');
        for(var  i=0; i<lines.length; i++){
            var line=''

            line = lines[i]
            var echo = `echo:\n\techo `+line
            var makeFile=lines.slice(0, i)
            makeFile.push(echo)
            makeFile=makeFile.join('\n')

            if(!fs.existsSync('./tmp/')){ fs.mkdirSync('./tmp/') }
            fs.writeFileSync('./tmp/makefile', makeFile)

            if(line.includes('${')){
                resolved[i]=execSync('cd ./tmp/; make echo &', {'stdio':[]}).toString()
                resolved[i]=this.format(resolved[i].substring(0, resolved[i].indexOf('\n')).split('\n').join('').replace('echo', ''))
            }else{
                resolved[i]=this.format(line)
            }

        }   
        return resolved
    }
    format(line){
        //strip leading spaces but not tabs
        for(var i =0; i<line.length; i++){
            if(line[0]==' '){
                line=line.slice(1)
            }
        }
        return line
    }

    unresolve(makeFileString, resolved){
        //repacks variables for resolved object
    }
}



import { modifier } from '../MakeObject/Modifier.js';
import { makeObject } from '../MakeObject/MakeObject.js';
new MakeFile(makeObject, modifier);


    //we need to 
    //1. consume the modifier object, 
    //2. turn it into a queue, 
    //3. run it through MakeFileString class, 
    //4. output the string to makefile, 
    //5. reset the Modifier object to null in MakeObject.js
    //6. overwrite section of file that exports modifier, without removing other code'