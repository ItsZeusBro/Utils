import { Project } from "./Project.js"
import assert from "node:assert"
import fs from 'node:fs'
import path from "node:path"

class Test{

    tests(verbose){
        this.inProjectBoundary(verbose)
        this.projectPath(verbose)
        this.basePath(verbose)
        this.testPath(verbose)
        this.createPath(verbose)
        this.deletePath(verbose)
        this.projectPathExists(verbose)
        this.createFile(verbose)
        this.deleteFile(verbose)
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
        this.createModule(verbose)
    }

    inProjectBoundary(verbose){
        if(verbose){console.log('isProjectpth')}
        var project = new Project('./base')
        assert.equal(project.inProjectBoundary(project.projectPath('somePath/to/folder')), true)
        assert.equal(project.inProjectBoundary('somePath/to/folder'), false)
    }

    projectPath(verbose){
        if(verbose){console.log('projectPath')}
        var project = new Project('./base')
        assert.equal(project.projectPath('somePath/to/folder'), project.base+'somePath/to/folder/')
        assert.equal(project.projectPath('somePath/to/folder/'), project.base+'somePath/to/folder/')
    }

    basePath(verbose){
        if(verbose){console.log('basePath')}
        var project = new Project('./base')
        assert.equal(project.basePath(), project.base)
    }

    testPath(verbose){
        if(verbose){console.log('testPath')}
        var project = new Project('./base')
        assert.equal(project.testPath('somePath/to/folder'), project.base+'somePath/to/folder/'+'Test/')
    }

    createPath(verbose){
        if(verbose){console.log('createPath')}
        var project = new Project('./base')
        project.createPath('./Module1/Module3')
        assert.equal(fs.existsSync(project.projectPath('./Module1/Module3')), true)
        fs.rmSync(project.projectPath('./'), {recursive:true})

    }

    deletePath(verbose){ 
        if(verbose){console.log('deletePath')}
        var project = new Project('./base')
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

    projectPathExists(verbose){
        if(verbose){console.log('projectPathExists')}
        var project = new Project('./base')
        project.createPath('./')
        project.createPath('./Module1')
        assert.equal(project.projectPathExists('./Module1'), true)
    }

    createFile(verbose){
        if(verbose){console.log('createFile')}
        var project = new Project('./base')
        project.createPath('./')
        project.createPath('./Module1')
        project.createFile('./Module1/Module1.c')
        project.deleteFile('./Module1/Module1.c')
        assert.equal(project.projectFileExists('./Module1/Module1.c'), false)
        project.deletePath('./Module1')
        assert.equal(project.projectPathExists('./Module1'), false)
        project.deletePath('./')
    }

    deleteFile(verbose){
        if(verbose){console.log('deleteFile')}
        var project = new Project('./base')
        project.createPath('./')
        project.createPath('./Module1')
        project.createFile('./Module1/module1.c')
        project.deleteFile('./Module1/module1.c')
        assert.equal(project.projectFileExists('./Module1/module1.c'), false)
        project.deletePath('./Module1')
        assert.equal(project.projectPathExists('./Module1'), false)
        project.deletePath('./')
    }


    moduleC(verbose){ 
        if(verbose){console.log('moduleC')}
        var project = new Project('./base')
        assert.equal(project.moduleC('somePath/to/folder/'), project.base+'somePath/to/folder/'+'folder.c')
        assert.equal(project.moduleC('somePath/to/folder'), project.base+'somePath/to/folder/'+'folder.c')
    }

    moduleH(verbose){
        if(verbose){console.log('moduleH')}
        var project = new Project('./base')
        assert.equal(project.moduleH('somePath/to/folder/'), project.base+'somePath/to/folder/'+'folder.h')
        assert.equal(project.moduleH('somePath/to/folder'), project.base+'somePath/to/folder/'+'folder.h')
    }

    moduleO(verbose){
        if(verbose){console.log('moduleO')}
        var project = new Project('./base')
        assert.equal(project.moduleO('somePath/to/folder/'), project.base+'somePath/to/folder/'+'folder.o')
        assert.equal(project.moduleO('somePath/to/folder'), project.base+'somePath/to/folder/'+'folder.o')
    }


    testC(verbose){ 
        if(verbose){console.log('testC')}
        var project = new Project('./base')
        assert.equal(project.testC('somePath/to/folder/'), project.base+'somePath/to/folder/Test/'+'Test.c')
        assert.equal(project.testC('somePath/to/folder'), project.base+'somePath/to/folder/Test/'+'Test.c')
    }

    testH(verbose){ 
        if(verbose){console.log('testH')}
        var project = new Project('./base')
        assert.equal(project.testH('somePath/to/folder/'), project.base+'somePath/to/folder/Test/'+'Test.h')
        assert.equal(project.testH('somePath/to/folder'), project.base+'somePath/to/folder/Test/'+'Test.h')
    }

    testO(verbose){ 
        if(verbose){console.log('testO')}
        var project = new Project('./base')
        assert.equal(project.testO('somePath/to/folder/'), project.base+'somePath/to/folder/Test/'+'Test.o')
        assert.equal(project.testO('somePath/to/folder'), project.base+'somePath/to/folder/Test/'+'Test.o')
    }

    testDriverC(verbose){ 
        if(verbose){console.log('testDriverC')}
        var project = new Project('./base')
        assert.equal(project.testDriverC('somePath/to/folder/'), project.base+'somePath/to/folder/Test/'+'Driver.c')
        assert.equal(project.testDriverC('somePath/to/folder'), project.base+'somePath/to/folder/Test/'+'Driver.c')
    }

    testDriverH(verbose){ 
        if(verbose){console.log('testDriverH')}
        var project = new Project('./base')
        assert.equal(project.testDriverH('somePath/to/folder/'), project.base+'somePath/to/folder/Test/'+'Driver.h')
        assert.equal(project.testDriverH('somePath/to/folder'), project.base+'somePath/to/folder/Test/'+'Driver.h')
    }

    testDriverO(verbose){
        if(verbose){console.log('testDriverO')}
        var project = new Project('./base')
        assert.equal(project.testDriverO('somePath/to/folder/'), project.base+'somePath/to/folder/Test/'+'Driver.o')
        assert.equal(project.testDriverO('somePath/to/folder'), project.base+'somePath/to/folder/Test/'+'Driver.o')
    }

    testExec(verbose){
        if(verbose){console.log('testExec')}
        var project = new Project('./base')
        assert.equal(project.testExec('somePath/to/folder/'), project.base+'somePath/to/folder/Test/'+'test.e')
        assert.equal(project.testExec('somePath/to/folder'), project.base+'somePath/to/folder/Test/'+'test.e')
    }

    mainExec(verbose){
        if(verbose){console.log('mainExec')}
        var project = new Project('./base')
        assert.equal(project.mainExec(), project.base+'main.e')
    }

    createModule(verbose){
        if(verbose){console.log('createModule')}
        var project = new Project('./Project')
        project.createModule('./Project/Module1', [])
    }
}

new Test().tests(false)