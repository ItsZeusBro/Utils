import { Project } from "./Project.js"
import assert from "node:assert"
import fs from 'node:fs'
import path from "node:path"

class Test{

    tests(){
        this.inProjectBoundary()
        this.projectPath()
        this.basePath()
        this.testPath()
        this.createPath()
        this.deletePath()
        this.projectPathExists()
        this.createFile()
        this.deleteFile()
        this.moduleC()
        this.moduleH()
        this.moduleO()
        this.testC()
        this.testH()
        this.testO()
        this.testDriverC()
        this.testDriverH()
        this.testDriverO()
        this.testExec()
        this.mainExec()
        this.createModule()
    }

    inProjectBoundary(){
        console.log('isProjectpth')
        var project = new Project('./base')
        assert.equal(project.inProjectBoundary(project.projectPath('somePath/to/folder')), true)
        assert.equal(project.inProjectBoundary('somePath/to/folder'), false)
    }

    projectPath(){
        console.log('projectpth')
        var project = new Project('./base')
        assert.equal(project.projectPath('somePath/to/folder'), project.base+'somePath/to/folder/')
        assert.equal(project.projectPath('somePath/to/folder/'), project.base+'somePath/to/folder/')
    }

    basePath(){
        console.log('basePath')
        var project = new Project('./base')
        assert.equal(project.basePath(), project.base)
    }

    testPath(){
        console.log('testPath')
        var project = new Project('./base')
        assert.equal(project.testPath('somePath/to/folder'), project.base+'somePath/to/folder/'+'Test/')
    }

    createPath(){
        console.log('createPath')
        var project = new Project('./base')
        project.createPath('./Module1/Module3')
        assert.equal(fs.existsSync(project.projectPath('./Module1/Module3')), true)
        fs.rmSync(project.projectPath('./'), {recursive:true})

    }

    deletePath(){ 
        console.log('deletePath')
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

    projectPathExists(){
        console.log('projectPathExists')
        var project = new Project('./base')
        project.createPath('./')
        project.createPath('./Module1')
        assert.equal(project.projectPathExists('./Module1'), true)
    }

    createFile(){
        console.log('createFile')
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

    deleteFile(){
        console.log('deleteFile')
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


    moduleC(){ 
        console.log('moduleC')
        var project = new Project('./base')
        assert.equal(project.moduleC('somePath/to/folder/'), project.base+'somePath/to/folder/'+'folder.c')
        assert.equal(project.moduleC('somePath/to/folder'), project.base+'somePath/to/folder/'+'folder.c')
    }

    moduleH(){
        console.log('moduleH')
        var project = new Project('./base')
        assert.equal(project.moduleH('somePath/to/folder/'), project.base+'somePath/to/folder/'+'folder.h')
        assert.equal(project.moduleH('somePath/to/folder'), project.base+'somePath/to/folder/'+'folder.h')
    }

    moduleO(){
        console.log('moduleO')
        var project = new Project('./base')
        assert.equal(project.moduleO('somePath/to/folder/'), project.base+'somePath/to/folder/'+'folder.o')
        assert.equal(project.moduleO('somePath/to/folder'), project.base+'somePath/to/folder/'+'folder.o')
    }


    testC(){ 
        console.log('testC')
        var project = new Project('./base')
        assert.equal(project.testC('somePath/to/folder/'), project.base+'somePath/to/folder/Test/'+'Test.c')
        assert.equal(project.testC('somePath/to/folder'), project.base+'somePath/to/folder/Test/'+'Test.c')
    }

    testH(){ 
        console.log('testH')
        var project = new Project('./base')
        assert.equal(project.testH('somePath/to/folder/'), project.base+'somePath/to/folder/Test/'+'Test.h')
        assert.equal(project.testH('somePath/to/folder'), project.base+'somePath/to/folder/Test/'+'Test.h')
    }

    testO(){ 
        console.log('testO')
        var project = new Project('./base')
        assert.equal(project.testO('somePath/to/folder/'), project.base+'somePath/to/folder/Test/'+'Test.o')
        assert.equal(project.testO('somePath/to/folder'), project.base+'somePath/to/folder/Test/'+'Test.o')
    }

    testDriverC(){ 
        console.log('testDriverC')
        var project = new Project('./base')
        assert.equal(project.testDriverC('somePath/to/folder/'), project.base+'somePath/to/folder/Test/'+'Driver.c')
        assert.equal(project.testDriverC('somePath/to/folder'), project.base+'somePath/to/folder/Test/'+'Driver.c')
    }

    testDriverH(){ 
        console.log('testDriverH')
        var project = new Project('./base')
        assert.equal(project.testDriverH('somePath/to/folder/'), project.base+'somePath/to/folder/Test/'+'Driver.h')
        assert.equal(project.testDriverH('somePath/to/folder'), project.base+'somePath/to/folder/Test/'+'Driver.h')
    }

    testDriverO(){
        console.log('testDriverO')
        var project = new Project('./base')
        assert.equal(project.testDriverO('somePath/to/folder/'), project.base+'somePath/to/folder/Test/'+'Driver.o')
        assert.equal(project.testDriverO('somePath/to/folder'), project.base+'somePath/to/folder/Test/'+'Driver.o')
    }

    testExec(){
        console.log('testExec')
        var project = new Project('./base')
        assert.equal(project.testExec('somePath/to/folder/'), project.base+'somePath/to/folder/Test/'+'test.e')
        assert.equal(project.testExec('somePath/to/folder'), project.base+'somePath/to/folder/Test/'+'test.e')
    }

    mainExec(){
        console.log('mainExec')
        var project = new Project('./base')
        assert.equal(project.mainExec(), project.base+'main.e')
    }

    createModule(){
        console.log('createModule')
        var project = new Project('./Project')
        project.createModule('./Project/Module1', [])
    }
}

new Test().tests()