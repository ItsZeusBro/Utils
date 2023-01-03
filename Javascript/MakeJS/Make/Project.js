import fs from 'node:fs'
import path from "node:path"
import assert from "node:assert"

export class Project{
    constructor(_projectModifier){
        this.base='';
        this._projectModifier=_projectModifier;
        this.createProject(this._projectModifier)
    }

    createProject(_projectModifier){
        //just create these files for now
        for(var i = 0; i<_projectModifier.length; i++){
            var queue=this.projectPathQueue(_projectModifier[i]['module'])
            for(var j = 0; j<queue.length; j++){
                new Module(queue[j], this)
            }
        }
    }
    
    projectPathQueue(pth){
        var queue=[]
        for(var i = 2; i<pth.split('/').length; i++){
            queue.push('./'+pth.split('/').slice(1, i).join('/'))
        }
        return queue
    }


    moduleDependencies(_module){
        //console.log(this.projectPath(_module), this.projectPath(this._projectModifier[0]['module']))
        for(var i =0; i<this._projectModifier.length; i++){
            if(this._projectModifier[i]['action']=='add'){
                if(this.projectPath(_module)==this._projectModifier[i]['module']){
                    return this._projectModifier[i]['dependencies']
                }
            }
        }
    }

    createPath(pth){ 
        //sanitize pth and remove base from pth before using it
    
        pth = pth.slice(pth.indexOf(this.base)+this.base.length-1).split('/')
        pth.pop()
        pth=pth.slice(1)
        var _pth=this.base.slice(0,-1)

        for(var i=0; i<pth.length;i++){
            _pth+='/'+pth[i]
            if(!fs.existsSync(_pth)){
                fs.mkdirSync(_pth)
            }
        }
    }
    deletePath(pth){ 
        if(fs.existsSync(pth)){ 
            return fs.rmSync(pth, {recursive:true}) 
        } 
    }
    createFile(pth){ 
        var paths=pth.split('/')
        var file=paths.pop()
        var _paths=''
        for(var i = 0; i<paths.length; i++){
            _paths=_paths+paths[i]+'/'
            if(!fs.existsSync(this.projectPath(_paths))){ 
                fs.mkdirSync(this.projectPath(_paths))
            }
        }
        paths.push(file)
        fs.writeFileSync(this.projectFile(paths.join('/')), '')
    }
    basePath(){ return this.base }
    relativePath(pth){ return path.relative(this.base, pth) }
    testPath(pth){ return pth+'Test/' }
    deleteFile(pth){ if(fs.existsSync(this.projectFile(pth))){ return fs.rmSync(this.projectFile(pth))} }

    exists(pth){ return fs.existsSync(pth) }
    find(pth, string){
        pth = this.projectFile(pth)
        var file = fs.readFileSync(pth).toString().split('\n')
        var obj={}
        for(var i = 0; i<file.length; i++){
            if(file[i].includes(string)){
                obj['line#']=i
                obj['path']=pth
                obj['data']=file[i]
                return obj
            }
        }
    }
    mainExec(){ return this.base+'main.e'}

}


export class Module{
    constructor(_module, project){
        this.project = project
        this.modules={}
        this.createModule(_module)
    }
    createModule(_module){

        this.moduleHFile(_module)
        // this.moduleCFile(pth)
        // this.moduleTestHFile(pth)
        // this.moduleTestCFile(pth)
        // this.moduleTestDriverHFile(pth)
        // this.moduleTestDriverCFile(pth)
    }
    moduleHFile(pth, writeToFile=true){
        //if it exists, we retrieve it, if it doesnt we the string from the path
        console.log('moduleHFile', this.moduleH(pth))

        var moduleHFile=''
        var fileBase=this.moduleH(pth).split('/')[this.moduleH(pth).split('/').length-2];
        var fileDescriptor=(this.moduleH(pth).split('/').slice(1).join('_')).toUpperCase();
        console.log(fileBase, fileDescriptor)
        // if(fs.existsSync(this.moduleH(pth))){
        //     moduleHFile=fs.readFileSync(this.moduleH(pth)).toString()

        // }else{
        //     var moduleHFile=`#ifndef ${fileDescriptor}\n#define ${fileDescriptor}\n\n`;

        //     var dependencies=this.project.moduleDependencies(this.moduleFromPath(pth))
        //     for(var i=0; i<dependencies.length; i++){
        //         moduleHFile+= `#include `+`"`+dependencies[i]+`"\n`;
        //     }
        //     moduleHFile+=`#endif`;
        // }

        
        // if(writeToFile){
        //     this.moduleHWrite(fileBase, moduleHFile, 0)
        // }
        // return moduleHFile
    }

    moduleC(pth){ 
        return pth+pth.split('/').slice(-2)[0]+'.c'
    }

    moduleH(pth){ 
        // possibilities ./something, ../something, ./somePath/to/module
        var file = pth.split('/')[pth.split('/').length-1]
        if(pth[pth.length-1]!='/'){
            return pth+'/'+file+'.h'
        }else{
            return pth+file+'.h'
        }
    } 

    moduleO(pth){ return pth+pth.split('/').slice(-2)[0]+'.o'}

    testC(pth){ return this.project.testPath(pth)+'Test.c'} 

    testH(pth){ return this.project.testPath(pth)+'Test.h'}

    testO(pth){ return this.project.testPath(pth)+'Test.o'} 

    testDriverC(pth){ return this.project.testPath(pth)+'Driver.c'}

    testDriverH(pth){ return this.project.testPath(pth)+'Driver.h'}

    testDriverO(pth){ return this.project.testPath(pth)+'Driver.o'}

    deleteModule(pth){
        this.deletePath(pth)
        pth=pth
        delete this.modules[pth.split('/')[pth.split('/').length-1]]
    }



    
    moduleCFile(pth, dependencies){
        // this.createFile(this.moduleC(pth))
        // var fileBase=this.moduleC(pth).split('/')[this.moduleC(pth).split('/').length-2];
        // var fileDescriptor=(Path.split('/').slice(1).join('_')+'Test').toUpperCase();
        // var output = 
        // `#include `+`"`+'Test'+'.h'+`"\n\n`+
        // `int _${fileDescriptor}(int argc, char *argv[]){\n\n\treturn 0;\n}`;
        // fs.writeFileSync( Path+'Test'+'.c', output);
    }

    moduleIndex(_module){ 
        for(var i = 0; i<this.project._projectModifier.length; i++){
            if(this.project._projectModifier[i]['module']==_module){
                return i
            }
        }
    }

    moduleHWrite(_module, output, atIndex){
        var moduleH=this.moduleHRead(_module, atIndex)
        if(moduleH.length){
            moduleH=moduleH.split('\n')
            for(var i=0; i<moduleH.length; i++){
                if(i==atIndex){ 
                    moduleH=moduleH.slice(0, i).concat(output).concat(moduleH.slice(i))
                }
            }
            moduleH=moduleH.join('\n')
        }else{
            moduleH+=output
        }

        fs.writeFileSync(this.moduleH(_module), moduleH);
    }

    moduleHRead(_module, atIndex){
        var str = fs.readFileSync(this.moduleH(_module)).toString()
        if(atIndex!=undefined){
            str=str.split('\n')
            for(var i=0; i<str.length; i++){
                if(i==atIndex){
                    return str[i]
                }
            }
        }else{
            return str
        }
    }


    moduleTestCFile(pth, dependencies){
        this.createFile(this.testC(pth))
        var fileBase=this.testC(pth).split('/')[this.testC(pth).split('/').length-2];

        // var fileBase=Path.split('/')[Path.split('/').length-2];
        // if(this.isMainPath(Path)){
        //     return this.createCMainFile(Path, fileBase);
        // }else{
        //     var output = `#include `+`"`+fileBase+'.h'+`"\n`
        //     fs.writeFileSync(Path+fileBase+'.c', output);
        //     return true
        // }
    }

    moduleTestDriverHFile(pth, dependencies){
        this.createFile(this.testDriverH(pth))
        var fileBase=this.testDriverH(pth).split('/')[this.testDriverH(pth).split('/').length-2];
        // var fileDescriptor=(Path.split('/').slice(1).join('_')+'driver').toUpperCase();
        // var output = `#ifndef ${fileDescriptor}\n`+
        // `#define ${fileDescriptor}\n`+
        // `#include "Test.h"\n`+
        // `#endif`
        // fs.writeFileSync(Path+'Driver'+'.h', output);
    }

    moduleTestDriverCFile(pth, dependencies){
        this.createFile(this.testDriverC(pth))
        var fileBase=this.testDriverC(pth).split('/')[this.testDriverC(pth).split('/').length-2];

        // var fileDescriptor=(Path.split('/').slice(1).join('_')+'driver').toUpperCase();
        // var output = `#ifndef ${fileDescriptor}\n`+
        // `#define ${fileDescriptor}\n`+
        // `#include "Test.h"\n`+
        // `#endif`
        // fs.writeFileSync(Path+'Driver'+'.h', output);
    }

    moduleFromPath(pth){ 
        if(pth[pth.length-1]=='/'){
            return pth.split('/')[pth.split('/').length-2] 
        }else{
            return pth.split('/')[pth.split('/').length-1] 
        }
    }
    
    // _moduleHFile(pth){
    //     console.log(pth)
    //     console.log('moduleHFile',this.moduleIndex(pth), this.project._projectModifier[this.moduleIndex(pth)])
    //     var dependencies=this.project._projectModifier[this.moduleIndex(pth)]['dependencies']
    //     this.createFile(this.moduleH(pth))
    //     var fileBase=this.moduleH(pth).split('/')[this.moduleH(pth).split('/').length-2];
    // }

    moduleTestHFile(pth, dependencies){
        //this.createFile(this.testH(pth))
        //var fileBase=this.testH(pth).split('/')[this.testH(pth).split('/').length-2];
        // var fileBase=Path.split('/')[Path.split('/').length-3];
        // var fileDescriptor=(Path.split('/').slice(1).join('_')+'Test').toUpperCase();
        // var output2 = `#include "../`+fileBase+`.h"`;
        // var output3 = `int _${fileDescriptor}(int argc, char *argv[]);`;
        // var output = 
        //     `#ifndef ${fileDescriptor}\n`+
        //     `#define ${fileDescriptor}\n\n`+
        //     output2+`\n\n`+
        //     output3+`\n\n`+
        //     `#endif`
        // fs.writeFileSync(Path+'Test'+'.h', output);
    }

    createCMainFile(Path, fileBase){
        if(this.isMainPath(Path)&&!this.exists(Path+fileBase+'.c')){
            var output = 
            `#include `+`"`+fileBase+'.h'+`"\n`+
            `#include <stdio.h>\n\n`+
            `int main(int argc, char *argv[]){\n`+
            `\tprintf("argc: %d, argv: %s", argc, argv);\n`+
            `\treturn 0;\n`+`}`
            fs.writeFileSync(Path+fileBase+'.c', output);
            return true
        }else{
            return false
        }
    }

    testExec(pth){ return this.testPath(pth)+'test.e' }
    
}