import { Project, Module } from "./Project.js"
import assert from "node:assert"
import fs from 'node:fs'
import path from "node:path"
import process from "node:process"
import { ProjectModifier } from "./ProjectModifier/ProjectModifierTest.js"

class ProjectTest{
    tests(verbose){
        // this.stripRelativity(verbose)
        // this.projectPath(verbose)
        // this.createPath(verbose)
        // this.deletePath(verbose)
        // this.exists(verbose)
        // this.createFile(verbose)
        // this.deleteFile(verbose)
        // this.projectFile(verbose)
        // this.basePath(verbose)
        // this.testPath(verbose)
        // this.relativePath(verbose)
        // this.moduleDependencies(verbose)
        this.createProject(verbose)
        // this.mainExec(verbose)
        //this.find(verbose)
    }

    createProject(verbose){
        if(verbose){console.log('createProject')}
        var project = new Project(JSON.parse(JSON.stringify(ProjectModifier)));

        //make project level assertions
    }
    moduleDependencies(verbose){
        if(verbose){console.log('moduleDependencies')}
        var project = new Project(JSON.parse(JSON.stringify(ProjectModifier)));
        var _module = new Module('CTools', project)
        // project.moduleDependencies('CTools')
        assert.equal(project.moduleDependencies('CTools')[0],  './Project/CTools/Automata/Automata.h/')
    }

    relativePath(verbose){
        if(verbose){console.log('relativePath')}
        var project = new Project(JSON.parse(JSON.stringify(ProjectModifier)))
        assert.equal('../some/path/to/file' , project.relativePath('some/path/to/file'))
    }

    modulePath(verbose){

    }

    stripRelativity(verbose){
        if(verbose){console.log('stripRelativity')}
        var project = new Project(JSON.parse(JSON.stringify(ProjectModifier)))
        assert.equal(project.stripRelativity('../../../whatever'), 'whatever')
        assert.equal(project.stripRelativity('./whatever'), 'whatever')
        assert.equal(project.stripRelativity('/whatever'), 'whatever')
    }

    projectPath(verbose){
        if(verbose){console.log('projectPath')}

        var project = new Project(JSON.parse(JSON.stringify(ProjectModifier)))
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
        var project = new Project(JSON.parse(JSON.stringify(ProjectModifier)))
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
        var project = new Project(JSON.parse(JSON.stringify(ProjectModifier)))
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
        var project = new Project(JSON.parse(JSON.stringify(ProjectModifier)))
        assert.equal(project.basePath(), project.base)
        project.deletePath('.')
    }

    testPath(verbose){
        if(verbose){console.log('testPath')}
        var project = new Project(JSON.parse(JSON.stringify(ProjectModifier)))
        assert.equal(project.testPath('somePath/to/folder'), project.base+'somePath/to/folder/'+'Test/')
        project.deletePath('.')
    }

    deletePath(verbose){ 
        if(verbose){console.log('deletePath')}
        var project = new Project(JSON.parse(JSON.stringify(ProjectModifier)))
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
        var project = new Project(JSON.parse(JSON.stringify(ProjectModifier)))
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
        var project = new Project(JSON.parse(JSON.stringify(ProjectModifier)))
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
        var project = new Project(JSON.parse(JSON.stringify(ProjectModifier)))
        assert.equal(project.projectFile('/someFile.txt'), './Project/someFile.txt')
        assert.equal(project.projectFile('/Module1/someFile.txt'), './Project/Module1/someFile.txt')
        project.deletePath('.')
    }

    

    testExec(verbose){
        if(verbose){console.log('testExec')}
        var project = new Project(JSON.parse(JSON.stringify(ProjectModifier)))
        assert.equal(project.testExec('somePath/to/folder/'), project.base+'somePath/to/folder/Test/'+'test.e')
        assert.equal(project.testExec('somePath/to/folder'), project.base+'somePath/to/folder/Test/'+'test.e')
        project.deletePath('.')
    }

    mainExec(verbose){
        if(verbose){console.log('mainExec')}
        var project = new Project(JSON.parse(JSON.stringify(ProjectModifier)))
        assert.equal(project.mainExec(), project.base+'main.e')
        project.deletePath('.')
    }
}

class ModuleTest{

    tests(verbose){
        if(verbose){console.log('ModuleTest')}
        // this.moduleC(verbose)
        //this.moduleH(verbose)
        // this.moduleO(verbose)
        // this.testC(verbose)
        // this.testH(verbose)
        // this.testO(verbose)
        // this.testDriverC(verbose)
        // this.testDriverH(verbose)
        // this.testDriverO(verbose)
        // this.moduleFromPath(verbose)
        // this.moduleHFile(verbose)
        //this.moduleCFile(pth)
        // this.moduleTestHFile(pth)
        // this.moduleTestCFile(pth)
        // this.moduleTestDriverHFile(pth)
        // this.moduleTestDriverCFile(pth)
        //this.createModule(verbose)

        // this.deleteModule(verbose)

        // this.modulePath(verbose)
        // this.moduleWriteAndRead(verbose)
        
        // this.testExec(verbose)
    }


    moduleFromPath(verbose){
        if(verbose){console.log('moduleFromPath')}
        var _project= new Project(JSON.parse(JSON.stringify(ProjectModifier)))
        var _module = new Module('somePath/to/folder/', _project)
        assert.equal(_module.moduleFromPath('somePath/to/folder/'), 'folder')
        _module = new Module('somePath/', _project)
        assert.equal(_module.moduleFromPath('somePath/'), 'somePath')
    }

    moduleHFile(verbose){
        if(verbose){console.log('moduleHFile')}
        var _project= new Project(JSON.parse(JSON.stringify(ProjectModifier)))
        var _module = new Module(ProjectModifier[0]['module'], _project)        
    }

    moduleH(verbose){
        if(verbose){console.log('moduleH')}
        var _project= new Project(JSON.parse(JSON.stringify(ProjectModifier)))
        var _module = new Module('somePath/to/folder/', _project)
        assert.equal(_module.moduleH('somePath/to/folder/'), _project.base+'somePath/to/folder/'+'folder.h')
        assert.equal(_module.moduleH('somePath/to/folder'), _project.base+'somePath/to/folder/'+'folder.h')
        assert.equal(_module.moduleH('./Project/'), _project.base+Project+'.h')

        _project.deletePath('.')
    }

    moduleC(verbose){ 
        if(verbose){console.log('moduleC')}
        var _project= new Project(JSON.parse(JSON.stringify(ProjectModifier)))
        var _module = new Module('somePath/to/folder/', _project)
        assert.equal(_module.moduleC('somePath/to/folder/'), _project.base+'somePath/to/folder/'+'folder.c')
        assert.equal(_module.moduleC('somePath/to/folder'), _project.base+'somePath/to/folder/'+'folder.c')
        _project.deletePath('.')
    }

    moduleO(verbose){
        if(verbose){console.log('moduleO')}
        var _project= new Project(JSON.parse(JSON.stringify(ProjectModifier)))
        var _module = new Module('somePath/to/folder/', _project)
        assert.equal(_module.moduleO('somePath/to/folder/'), _project.base+'somePath/to/folder/'+'folder.o')
        assert.equal(_module.moduleO('somePath/to/folder'), _project.base+'somePath/to/folder/'+'folder.o')
        _project.deletePath('.')
    }

    testC(verbose){ 
        if(verbose){console.log('testC')}
        var _project = new Project(JSON.parse(JSON.stringify(ProjectModifier)))
        var _module = new Module('somePath/to/folder/', _project)
        assert.equal(_module.testC('somePath/to/folder/'), _project.base+'somePath/to/folder/Test/'+'Test.c')
        assert.equal(_module.testC('somePath/to/folder'), _project.base+'somePath/to/folder/Test/'+'Test.c')
        _project.deletePath('.')
    }

    testH(verbose){ 
        if(verbose){console.log('testH')}
        var _project = new Project(JSON.parse(JSON.stringify(ProjectModifier)))
        var _module = new Module('somePath/to/folder/', _project)
        assert.equal(_module.testH('somePath/to/folder/'), _project.base+'somePath/to/folder/Test/'+'Test.h')
        assert.equal(_module.testH('somePath/to/folder'), _project.base+'somePath/to/folder/Test/'+'Test.h')
        _project.deletePath('.')
    }

    testO(verbose){ 
        if(verbose){console.log('testO')}
        var _project = new Project(JSON.parse(JSON.stringify(ProjectModifier)))
        var _module = new Module('somePath/to/folder/', _project)
        assert.equal(_module.testO('somePath/to/folder/'), _project.base+'somePath/to/folder/Test/'+'Test.o')
        assert.equal(_module.testO('somePath/to/folder'), _project.base+'somePath/to/folder/Test/'+'Test.o')
        _project.deletePath('.')
    }

    testDriverC(verbose){ 
        if(verbose){console.log('testDriverC')}
        var _project = new Project(JSON.parse(JSON.stringify(ProjectModifier)))
        var _module = new Module('somePath/to/folder/', _project)
        assert.equal(_module.testDriverC('somePath/to/folder/'), _project.base+'somePath/to/folder/Test/'+'Driver.c')
        assert.equal(_module.testDriverC('somePath/to/folder'), _project.base+'somePath/to/folder/Test/'+'Driver.c')
        _project.deletePath('.')
    }

    testDriverH(verbose){ 
        if(verbose){console.log('testDriverH')}
        var _project = new Project(JSON.parse(JSON.stringify(ProjectModifier)))
        var _module = new Module('somePath/to/folder/', _project)
        assert.equal(_module.testDriverH('somePath/to/folder/'), _project.base+'somePath/to/folder/Test/'+'Driver.h')
        assert.equal(_module.testDriverH('somePath/to/folder'), _project.base+'somePath/to/folder/Test/'+'Driver.h')
        _project.deletePath('.')
    }

    testDriverO(verbose){ 
        if(verbose){console.log('testDriverO')}
        var _project = new Project(JSON.parse(JSON.stringify(ProjectModifier)))
        var _module = new Module('somePath/to/folder/', _project)
        assert.equal(_module.testDriverO('somePath/to/folder/'), _project.base+'somePath/to/folder/Test/'+'Driver.o')
        assert.equal(_module.testDriverO('somePath/to/folder'), _project.base+'somePath/to/folder/Test/'+'Driver.o')
        _project.deletePath('.')
    }


    createModule(verbose){
        if(verbose){console.log('createModule')}

        var project = new Project(ProjectModifier);
        var module = new Module('CTools', project)


        // assert.equal(fs.existsSync(project.projectFile('./Project/Modules/Module1/Module1.h')), true);
        // assert.equal(fs.existsSync(project.projectFile('./Project/Modules/Module1/Module1.c')), true);
        // assert.equal(fs.existsSync(project.projectFile('./Project/Modules/Module1/Test/Test.c')), true);
        // assert.equal(fs.existsSync(project.projectFile('./Project/Modules/Module1/Test/Test.h')), true);
        // assert.equal(fs.existsSync(project.projectFile('./Project/Modules/Module1/Test/Driver.c')), true);
        // assert.equal(fs.existsSync(project.projectFile('./Project/Modules/Module1/Test/Driver.h')), true);
        // project.deleteModule('./Project/Modules/Module1');
        // assert.equal(fs.existsSync(project.projectPath('./Project/Modules/Module1')), false);
    }

    deleteModule(verbose){
        if(verbose){console.log('deleteModule')}
        var project = new Project('./Project');
        project.createModule('Modules/Module1', []);
        // project.deleteModule('./Project/Modules/Module1');
        // project.createModule('./Project/Modules', []);
        // project.deleteModule('./Project/Modules');
        // assert.equal(fs.existsSync(project.projectPath('./Project/Modules')), false);
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


new ProjectTest().tests(true)

// new ModuleTest().tests(true)