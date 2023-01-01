import { Project } from "./Project.js"
import assert from "node:assert"
import fs from 'node:fs'
import path from "node:path"
import process from "node:process"

class Test{
    tests(verbose){
        this.stripRelativity(verbose)
        this.projectPath(verbose)
        this.createPath(verbose)
        this.deletePath(verbose)
        this.exists(verbose)
        this.createFile(verbose)
        this.deleteFile(verbose)
        this.projectFile(verbose)
        this.basePath(verbose)
        this.testPath(verbose)
        this.moduleC(verbose)
        this.moduleH(verbose)
        this.moduleO(verbose)
        this.testC(verbose)
        this.testH(verbose)
        this.testO(verbose)
        this.testDriverC(verbose)
        this.testDriverH(verbose)
        this.testDriverO(verbose)
        this.testExec(verbose)
        this.mainExec(verbose)
        // this.createModule(verbose)
        // this.deleteModule(verbose)
        // this.modulePath(verbose)
        // this.moduleWriteAndRead(verbose)
        // this.find(verbose)
    }

    stripRelativity(verbose){
        if(verbose){console.log('stripRelativity')}
        var project = new Project('./tmp/Project/')
        assert.equal(project.stripRelativity('../../../whatever'), 'whatever')
        assert.equal(project.stripRelativity('./whatever'), 'whatever')
        assert.equal(project.stripRelativity('/whatever'), 'whatever')
    }

    projectPath(verbose){
        if(verbose){console.log('projectPath')}
        var project = new Project('../../tmp/Project/')
        assert.equal(project.projectPath('somePath/to/folder'), project.base+'somePath/to/folder/')
        assert.equal(project.projectPath('somePath/to/folder/'), project.base+'somePath/to/folder/')
        assert.equal(project.projectPath('/somePath/to/folder'), project.base+'somePath/to/folder/')
        assert.equal(project.projectPath('/somePath/to/folder/'), project.base+'somePath/to/folder/')
        assert.equal(project.projectPath('../somePath/to/folder'), project.base+'somePath/to/folder/')
        assert.equal(project.projectPath('../somePath/to/folder/'), project.base+'somePath/to/folder/')
        assert.equal(project.projectPath('../../somePath/to/folder'), project.base+'somePath/to/folder/')
        assert.equal(project.projectPath('../../somePath/to/folder/'), project.base+'somePath/to/folder/')

        project = new Project('./tmp/Project/')
        assert.equal(project.projectPath('somePath/to/folder'), project.base+'somePath/to/folder/')
        assert.equal(project.projectPath('somePath/to/folder/'), project.base+'somePath/to/folder/')
        assert.equal(project.projectPath('/somePath/to/folder'), project.base+'somePath/to/folder/')
        assert.equal(project.projectPath('/somePath/to/folder/'), project.base+'somePath/to/folder/')
        assert.equal(project.projectPath('../somePath/to/folder'), project.base+'somePath/to/folder/')
        assert.equal(project.projectPath('../somePath/to/folder/'), project.base+'somePath/to/folder/')
        assert.equal(project.projectPath('../../somePath/to/folder'), project.base+'somePath/to/folder/')
        assert.equal(project.projectPath('../../somePath/to/folder/'), project.base+'somePath/to/folder/')

        project = new Project('.tmp/Project/')
        assert.equal(project.projectPath('somePath/to/folder'), project.base+'somePath/to/folder/')
        assert.equal(project.projectPath('somePath/to/folder/'), project.base+'somePath/to/folder/')
        assert.equal(project.projectPath('/somePath/to/folder'), project.base+'somePath/to/folder/')
        assert.equal(project.projectPath('/somePath/to/folder/'), project.base+'somePath/to/folder/')
        assert.equal(project.projectPath('../somePath/to/folder'), project.base+'somePath/to/folder/')
        assert.equal(project.projectPath('../somePath/to/folder/'), project.base+'somePath/to/folder/')
        assert.equal(project.projectPath('../../somePath/to/folder'), project.base+'somePath/to/folder/')
        assert.equal(project.projectPath('../../somePath/to/folder/'), project.base+'somePath/to/folder/')

        project = new Project('tmp/Project/')
        assert.equal(project.projectPath('somePath/to/folder'), project.base+'somePath/to/folder/')
        assert.equal(project.projectPath('somePath/to/folder/'), project.base+'somePath/to/folder/')
        assert.equal(project.projectPath('/somePath/to/folder'), project.base+'somePath/to/folder/')
        assert.equal(project.projectPath('/somePath/to/folder/'), project.base+'somePath/to/folder/')
        assert.equal(project.projectPath('../somePath/to/folder'), project.base+'somePath/to/folder/')
        assert.equal(project.projectPath('../somePath/to/folder/'), project.base+'somePath/to/folder/')
        assert.equal(project.projectPath('../../somePath/to/folder'), project.base+'somePath/to/folder/')
        assert.equal(project.projectPath('../../somePath/to/folder/'), project.base+'somePath/to/folder/')

        project = new Project('../tmp/Project/')
        assert.equal(project.projectPath('somePath/to/folder'), project.base+'somePath/to/folder/')
        assert.equal(project.projectPath('somePath/to/folder/'), project.base+'somePath/to/folder/')
        assert.equal(project.projectPath('/somePath/to/folder'), project.base+'somePath/to/folder/')
        assert.equal(project.projectPath('/somePath/to/folder/'), project.base+'somePath/to/folder/')
        assert.equal(project.projectPath('../somePath/to/folder'), project.base+'somePath/to/folder/')
        assert.equal(project.projectPath('../somePath/to/folder/'), project.base+'somePath/to/folder/')
        assert.equal(project.projectPath('../../somePath/to/folder'), project.base+'somePath/to/folder/')
        assert.equal(project.projectPath('../../somePath/to/folder/'), project.base+'somePath/to/folder/')

        assert.equal(project.projectPath('./'), project.base)        
        assert.equal(project.projectPath('../'), project.base)        
        assert.equal(project.projectPath(''), project.base)        
        assert.equal(project.projectPath(' '), project.base)        
        assert.equal(project.projectPath('../../'), project.base)        
        assert.equal(project.projectPath('/'), project.base)        

        project.deletePath('./')
    }

    createPath(verbose){
        if(verbose){console.log('createPath')}
        var project = new Project('tmp')
        console.log(project.base)
        assert.equal(project.exists(''), true)
        project.createPath('./Module1/')
        assert.equal(project.exists('Module1'), true)
        project.createPath('./Module1/Module3')
        assert.equal(project.exists('Module1/Module3'), true)
        project.createPath('./Module1/Module3/Module4')
        assert.equal(project.exists('Module1/Module3/Module4'), true)
        project.deletePath('.')
    }

    exists(verbose){
        if(verbose){console.log('exists')}
        var project = new Project('tmp')
        console.log(project.base)
        assert.equal(project.exists(''), true)
        project.createPath('./Module1/')
        assert.equal(project.exists('Module1'), true)
        project.createPath('./Module1/Module3')
        assert.equal(project.exists('Module1/Module3'), true)
        project.createPath('./Module1/Module3/Module4')
        assert.equal(project.exists('Module1/Module3/Module4'), true)
        project.deletePath('.')
    }


    basePath(verbose){
        if(verbose){console.log('basePath')}
        var project = new Project('./tmp')
        assert.equal(project.basePath(), project.base)
    }

    testPath(verbose){
        if(verbose){console.log('testPath')}
        var project = new Project('./tmp')
        assert.equal(project.testPath('somePath/to/folder'), project.base+'somePath/to/folder/'+'Test/')
    }

    deletePath(verbose){ 
        if(verbose){console.log('deletePath')}
        var project = new Project('./tmp')
        project.createPath('./')
        project.createPath('./Module1')
        project.createPath('./Module1/Module2')
        project.deletePath('./Module1/Module2')
        assert.equal(fs.existsSync(project.projectPath('./Module1/Module2')), false)
        project.deletePath('./Module1')
        assert.equal(fs.existsSync(project.projectPath('./Module1')), false)
        project.deletePath('./')
        assert.equal(fs.existsSync(project.projectPath('./')), false)
    }


    createFile(verbose){
        if(verbose){console.log('createFile')}
        var project = new Project('./tmp')
        project.createPath('./')
        project.createPath('./Module1')
        project.createFile('./Module1/Module1.c')
        project.deleteFile('./Module1/Module1.c')
        assert.equal(project.exists('./Module1/Module1.c'), false)
        project.deletePath('./Module1')
        assert.equal(project.exists('./Module1'), false)
        project.deletePath('./')
    }

    deleteFile(verbose){
        if(verbose){console.log('deleteFile')}
        var project = new Project('./tmp')
        project.createPath('./')
        project.createPath('./Module1')
        project.createFile('./Module1/module1.c')
        project.deleteFile('./Module1/module1.c')
        assert.equal(project.exists('./Module1/module1.c'), false)
        project.deletePath('./Module1')
        assert.equal(project.exists('./Module1'), false)
        project.deletePath('./')
    }

    projectFile(verbose){
        if(verbose){console.log('projectFile')}
        var project = new Project('./tmp')
        assert.equal(project.projectFile('/someFile.txt'), './tmp/someFile.txt')
        assert.equal(project.projectFile('/Module1/someFile.txt'), './tmp/Module1/someFile.txt')
    }

    moduleC(verbose){ 
        if(verbose){console.log('moduleC')}
        var project = new Project('./tmp')
        assert.equal(project.moduleC('somePath/to/folder/'), project.base+'somePath/to/folder/'+'folder.c')
        assert.equal(project.moduleC('somePath/to/folder'), project.base+'somePath/to/folder/'+'folder.c')
    }

    moduleH(verbose){
        if(verbose){console.log('moduleH')}
        var project = new Project('./tmp')
        assert.equal(project.moduleH('somePath/to/folder/'), project.base+'somePath/to/folder/'+'folder.h')
        assert.equal(project.moduleH('somePath/to/folder'), project.base+'somePath/to/folder/'+'folder.h')
    }

    moduleO(verbose){
        if(verbose){console.log('moduleO')}
        var project = new Project('./tmp')
        assert.equal(project.moduleO('somePath/to/folder/'), project.base+'somePath/to/folder/'+'folder.o')
        assert.equal(project.moduleO('somePath/to/folder'), project.base+'somePath/to/folder/'+'folder.o')
    }

    testC(verbose){ 
        if(verbose){console.log('testC')}
        var project = new Project('./tmp')
        assert.equal(project.testC('somePath/to/folder/'), project.base+'somePath/to/folder/Test/'+'Test.c')
        assert.equal(project.testC('somePath/to/folder'), project.base+'somePath/to/folder/Test/'+'Test.c')
    }

    testH(verbose){ 
        if(verbose){console.log('testH')}
        var project = new Project('./tmp')
        assert.equal(project.testH('somePath/to/folder/'), project.base+'somePath/to/folder/Test/'+'Test.h')
        assert.equal(project.testH('somePath/to/folder'), project.base+'somePath/to/folder/Test/'+'Test.h')
    }

    testO(verbose){ 
        if(verbose){console.log('testO')}
        var project = new Project('./tmp')
        assert.equal(project.testO('somePath/to/folder/'), project.base+'somePath/to/folder/Test/'+'Test.o')
        assert.equal(project.testO('somePath/to/folder'), project.base+'somePath/to/folder/Test/'+'Test.o')
    }

    testDriverC(verbose){ 
        if(verbose){console.log('testDriverC')}
        var project = new Project('./tmp')
        assert.equal(project.testDriverC('somePath/to/folder/'), project.base+'somePath/to/folder/Test/'+'Driver.c')
        assert.equal(project.testDriverC('somePath/to/folder'), project.base+'somePath/to/folder/Test/'+'Driver.c')
    }

    testDriverH(verbose){ 
        if(verbose){console.log('testDriverH')}
        var project = new Project('./tmp')
        assert.equal(project.testDriverH('somePath/to/folder/'), project.base+'somePath/to/folder/Test/'+'Driver.h')
        assert.equal(project.testDriverH('somePath/to/folder'), project.base+'somePath/to/folder/Test/'+'Driver.h')
    }

    testDriverO(verbose){
        if(verbose){console.log('testDriverO')}
        var project = new Project('./tmp')
        assert.equal(project.testDriverO('somePath/to/folder/'), project.base+'somePath/to/folder/Test/'+'Driver.o')
        assert.equal(project.testDriverO('somePath/to/folder'), project.base+'somePath/to/folder/Test/'+'Driver.o')
    }

    testExec(verbose){
        if(verbose){console.log('testExec')}
        var project = new Project('./tmp')
        assert.equal(project.testExec('somePath/to/folder/'), project.base+'somePath/to/folder/Test/'+'test.e')
        assert.equal(project.testExec('somePath/to/folder'), project.base+'somePath/to/folder/Test/'+'test.e')
    }

    mainExec(verbose){
        if(verbose){console.log('mainExec')}
        var project = new Project('./tmp')
        assert.equal(project.mainExec(), project.base+'main.e')
    }

    createModule(verbose){
        if(verbose){console.log('createModule')}
        var project = new Project('./Project');
        project.createModule('./Project/Modules/Module1', []);
        assert.equal(fs.existsSync(project.projectFile('./Project/Modules/Module1/Module1.h')), true);
        assert.equal(fs.existsSync(project.projectFile('./Project/Modules/Module1/Module1.c')), true);
        assert.equal(fs.existsSync(project.projectFile('./Project/Modules/Module1/Test/Test.c')), true);
        assert.equal(fs.existsSync(project.projectFile('./Project/Modules/Module1/Test/Test.h')), true);
        assert.equal(fs.existsSync(project.projectFile('./Project/Modules/Module1/Test/Driver.c')), true);
        assert.equal(fs.existsSync(project.projectFile('./Project/Modules/Module1/Test/Driver.h')), true);
        project.deleteModule('./Project/Modules/Module1');
        assert.equal(fs.existsSync(project.projectPath('./Project/Modules/Module1')), false);
    }

    deleteModule(verbose){
        if(verbose){console.log('deleteModule')}
        var project = new Project('./Project');
        project.createModule('./Project/Modules/Module1', []);
        project.deleteModule('./Project/Modules/Module1');
        project.createModule('./Project/Modules', []);
        project.deleteModule('./Project/Modules');
        assert.equal(fs.existsSync(project.projectPath('./Project/Modules')), false);
    }

    modulePath(verbose){
        if(verbose){console.log('modulePath')}
        var project = new Project('./Project');
        project.createModule('./Project/Modules/Module1', []);
        assert.equal(project.modulePath('Module1'), project.projectPath('./Project/Modules/Module1'));
    }

    moduleWriteAndRead(verbose){
        if(verbose){console.log('moduleWriteAndRead')}
        var project = new Project('./Project');
        project.createModule('./Project/Modules/Module1', []);
        for(var i=2; i<1000; i++){
            project.moduleHWrite('Module1', i+``, i);
            assert.equal(project.moduleHRead('Module1', i), i+``);
        }
    }

    find(verbose){
        if(verbose){console.log('find')}
        var project = new Project('./Project');
        project.createModule('./Project/Modules/Module1', []);
        for(var i=2; i<1000; i++){
            project.moduleHWrite('Module1', i+``, i);
            assert.equal(project.find('./Project/Modules/Module1/Module1.h',``+i)['data'], i+``);
        }
    }
}


new Test().tests(true)