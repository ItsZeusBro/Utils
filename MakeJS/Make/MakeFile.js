import fs from 'node:fs'
import { execSync } from 'node:child_process';
import {MakeFileString} from "./MakeFileString.js"

export class MakeFile{
    constructor(modifier, makeObject){
        this.actions=this.action_queue(modifier);
        var [makeFileString, makeObject]=this.modify(this.actions, makeObject);
        fs.writeFileSync('./tmp/makefile', makeFileString.string);
        fs.writeFileSync('./MakeObject/MakeObject.json', JSON.stringify(makeObject));
    }

    modify(actions, makeObject){
        for(var i = 0; i<actions.length; i++){ 
            var [makeFileString, makeObject]=this._modify(actions[i], makeObject) 
        }
        return [makeFileString, makeObject]
    }

    _modify(action, makeObject){
        //var makeFileString=new MakeFileString(makeObject);
        if(action['action']=='delete'){
            return this.delete(action, makeObject)
        }else if(action['action']=='add'){
            return this.add(action, makeObject)
        }else if(action['action']=='move'){
            return this.move(action, makeObject)
        }
    }
    add(action, makeObject){
        makeObject[action['module']]=action['dependencies']
        var makeFileString = new MakeFileString(makeObject);
        return [makeFileString, makeObject]
    }
    delete(action, makeObject){
        delete makeObject[action['module']]
        var makeFileString = new MakeFileString(makeObject);
        return [makeFileString, makeObject]
    }

    move(action, makeObject){
        delete makeObject[action['module']]
        makeObject[action['module']]=action['dependencies']
        var makeFileString = new MakeFileString(makeObject);
        return [makeFileString, makeObject]
    }

    action_queue(modifier){
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
}



import { modifier } from './MakeObject/Modifier.js';
var makeObject= JSON.parse(fs.readFileSync("./MakeObject/MakeObject.json"))
new MakeFile(modifier, makeObject);