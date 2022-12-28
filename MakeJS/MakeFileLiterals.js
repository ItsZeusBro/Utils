    export class MakeFileLiterals{
        constructor(){
            this.name;
            this.dir;
            this.fileName;
            this.dependencies;
            this.dependenciesC;
            this.dependenciesH;
            this.dependenciesO;
            this.DEVELOPER_TEST_C_DEPENDENCIES=``;
            this.DEVELOPER_TEST_H_DEPENDENCIES=``;
            this.DEVELOPER_TEST_O_DEPENDENCIES=``;
            this.PRODUCTION_TEST_C_DEPENDENCIES=``;
            this.PRODUCTION_TEST_H_DEPENDENCIES=``;
            this.PRODUCTION_TEST_O_DEPENDENCIES=``;
            this.DEVELOPER_TEST_C_FILES=``;
            this.DEVELOPER_TEST_H_FILES=``;
            this.DEVELOPER_TEST_O_FILES=``;
            this.PRODUCTION_TEST_C_FILES=``;
            this.PRODUCTION_TEST_H_FILES=``;
            this.PRODUCTION_TEST_O_FILES=``;
            this.ProductionTests=``;
            this.ProductionTestsClean=``;
            this.ProductionTestsLink=``;
            this.makefileOutput=this.modules(makeObject)
        }

        modules(makeObject){
            var makefileOutput=``;
            var uniquePaths=Object.keys(makeObject)
            for(var i=0; i<uniquePaths.length; i++){
                makefileOutput+=this.module(uniquePaths[i].slice(), makeObject[uniquePaths[i]])
                this.DEVELOPER_TEST_C_DEPENDENCIES+=this.DeveloperTestCDependencies(uniquePaths[i].slice())
                this.DEVELOPER_TEST_H_DEPENDENCIES+=this.DeveloperTestHDependencies(uniquePaths[i].slice())
                this.DEVELOPER_TEST_O_DEPENDENCIES+=this.DeveloperTestODependencies(uniquePaths[i].slice())
                this.PRODUCTION_TEST_C_DEPENDENCIES+=this.ProductionTestCDependencies(uniquePaths[i].slice())
                this.PRODUCTION_TEST_H_DEPENDENCIES+=this.ProductionTestHDependencies(uniquePaths[i].slice())
                this.PRODUCTION_TEST_O_DEPENDENCIES+=this.ProductionTestODependencies(uniquePaths[i].slice())
                this.DEVELOPER_TEST_C_FILES+=this.DeveloperTestCFiles(uniquePaths[i].slice())
                this.DEVELOPER_TEST_H_FILES+=this.DeveloperTestHFiles(uniquePaths[i].slice())
                this.DEVELOPER_TEST_O_FILES+=this.DeveloperTestOFiles(uniquePaths[i].slice())
                this.PRODUCTION_TEST_C_FILES+=this.ProductionTestCFiles(uniquePaths[i].slice())
                this.PRODUCTION_TEST_H_FILES+=this.ProductionTestHFiles(uniquePaths[i].slice())
                this.PRODUCTION_TEST_O_FILES+=this.ProductionTestOFiles(uniquePaths[i].slice())
                this.ProductionTests+=this._ProductionTests(uniquePaths[i].slice())
                this.ProductionTestsClean+=this._ProductionTestsClean(uniquePaths[i].slice())
            }
            makefileOutput+=this.consolodateModules()
            return makefileOutput
        }

        modulePath(dir, name){ return`${dir}_DIR=${name}\n` }
        moduleTestPath(dir){return `${dir}_TEST_DIR=\$\{${dir}_DIR\}Test/\n`}
        moduleCFile(dir, fileName){ return `${dir}_C=${fileName}.c\n`}
        moduleHFile(dir, fileName){ return `${dir}_H=${fileName}.h\n`}
        moduleOFile(dir, fileName){ return `${dir}_O=${fileName}.o\n`}
        moduleTestCFile(dir){return `${dir}_TEST_C=Test.c\n`}
        moduleTestHFile(dir){return `${dir}_TEST_H=Test.h\n`}
        moduleTestOFile(dir){return `${dir}_TEST_O=Test.o\n`}
        moduleTestDriverCFile(dir){return `${dir}_TEST_DRIVER_C=Driver.c\n`}
        moduleTestDriverHFile(dir){return `${dir}_TEST_DRIVER_H=Driver.h\n`}
        moduleTestDriverOFile(dir){return `${dir}_TEST_DRIVER_O=Driver.o\n`}
        moduleCFilePath(dir){return `${dir}_C_PATH=\$\{${dir}_DIR\}\$\{${dir}_C\}\n`}
        moduleHFilePath(dir){return `${dir}_H_PATH=\$\{${dir}_DIR\}\$\{${dir}_H\}\n`}
        moduleOFilePath(dir){return `${dir}_O_PATH=\$\{${dir}_DIR\}\$\{${dir}_O\}\n`}
        moduleTestCFilePath(dir){return `${dir}_TEST_C_PATH=\$\{${dir}_TEST_DIR\}\$\{${dir}_TEST_C\}\n`}
        moduleTestHFilePath(dir){return `${dir}_TEST_H_PATH=\$\{${dir}_TEST_DIR\}\$\{${dir}_TEST_H\}\n`}
        moduleTestOFilePath(dir){return `${dir}_TEST_O_PATH=\$\{${dir}_TEST_DIR\}\$\{${dir}_TEST_O\}\n`}
        moduleTestDriverCFilePath(dir){return `${dir}_TEST_DRIVER_C_PATH=\$\{${dir}_TEST_DIR\}\$\{${dir}_TEST_DRIVER_C\}\n`}
        moduleTestDriverHFilePath(dir){return `${dir}_TEST_DRIVER_H_PATH=\$\{${dir}_TEST_DIR\}\$\{${dir}_TEST_DRIVER_H\}\n`}
        moduleTestDriverOFilePath(dir){return `${dir}_TEST_DRIVER_O_PATH=\$\{${dir}_TEST_DIR\}\$\{${dir}_TEST_DRIVER_O\}\n`}
        moduleTestDriverCFilePath(dir){return `${dir}_TEST_DRIVER_C_PATH=\$\{${dir}_TEST_DIR\}\$\{${dir}_TEST_DRIVER_C\}\n`}
        moduleTestDriverHFilePath(dir){return `${dir}_TEST_DRIVER_H_PATH=\$\{${dir}_TEST_DIR\}\$\{${dir}_TEST_DRIVER_H\}\n`}
        moduleTestDriverOFilePath(dir){return `${dir}_TEST_DRIVER_O_PATH=\$\{${dir}_TEST_DIR\}\$\{${dir}_TEST_DRIVER_O\}\n`}
        productionTestCDependencies(dir, dependenciesC){return `PRODUCTION_${dir}_TEST_C_DEPENDENCIES=\$\{${dir}_C_PATH\} \$\{${dir}_TEST_C_PATH\} `+ dependenciesC + `\n`}
        productionTestHDependencies(dir, dependenciesH){return `PRODUCTION_${dir}_TEST_H_DEPENDENCIES=\$\{${dir}_H_PATH\} \$\{${dir}_TEST_H_PATH\} `+ dependenciesH + `\n`}
        productionTestODependencies(dir, dependenciesO){return `PRODUCTION_${dir}_TEST_O_DEPENDENCIES=\$\{${dir}_O_PATH\} \$\{${dir}_TEST_O_PATH\} `+ dependenciesO + `\n`}
        developerTestCDependencies(dir, dependenciesC){return `DEVELOPER_${dir}_TEST_C_DEPENDENCIES=\$\{${dir}_C_PATH\} \$\{${dir}_TEST_C_PATH\} \$\{${dir}_TEST_DRIVER_C_PATH\} `+ dependenciesC + `\n`}
        developerTestHDependencies(dir, dependenciesH){return `DEVELOPER_${dir}_TEST_H_DEPENDENCIES=\$\{${dir}_H_PATH\} \$\{${dir}_TEST_H_PATH\} \$\{${dir}_TEST_DRIVER_H_PATH\} `+ dependenciesH + `\n`}
        developerTestODependencies(dir, dependenciesO){return `DEVELOPER_${dir}_TEST_O_DEPENDENCIES=\$\{${dir}_O_PATH\} \$\{${dir}_TEST_O_PATH\} \$\{${dir}_TEST_DRIVER_O_PATH\} `+ dependenciesO + `\n`}
        developerTestCFiles(dir, dependenciesC){ return `DEVELOPER_${dir}_TEST_C_FILES=\$\{${dir}_C_PATH\} \$\{${dir}_TEST_C_PATH\} \$\{${dir}_TEST_DRIVER_C_PATH\} `+ dependenciesC + `\n`}
        developerTestHFiles(dir, dependenciesH){ return `DEVELOPER_${dir}_TEST_H_FILES=\$\{${dir}_H_PATH\} \$\{${dir}_TEST_H_PATH\} \$\{${dir}_TEST_DRIVER_H_PATH\} `+ dependenciesH + `\n`}
        developerTestOFiles(dir, dependenciesO){ return `DEVELOPER_${dir}_TEST_O_FILES=\$\{${dir}_O_PATH\} \$\{${dir}_TEST_O_PATH\} \$\{${dir}_TEST_DRIVER_O_PATH\} `+ dependenciesO + `\n`}
        productionTestCFiles(dir, dependenciesC){ return `PRODUCTION_${dir}_TEST_C_FILES=\$\{${dir}_C_PATH\} \$\{${dir}_TEST_C_PATH\} `+ dependenciesC + `\n`}
        productionTestHFiles(dir, dependenciesH){ return `PRODUCTION_${dir}_TEST_H_FILES=\$\{${dir}_H_PATH\} \$\{${dir}_TEST_H_PATH\} `+ dependenciesH + `\n`}
        productionTestOFiles(dir, dependenciesO){ return `PRODUCTION_${dir}_TEST_O_FILES=\$\{${dir}_O_PATH\} \$\{${dir}_TEST_O_PATH\} `+ dependenciesO + `\n`}
        developerTestFiles(dir){ return `${dir}_TEST_DEVELOPER_FILES= \$\{DEVELOPER_${dir}_TEST_C_FILES\} \$\{DEVELOPER_${dir}_TEST_H_FILES\} \$\{DEVELOPER_${dir}_TEST_O_FILES\} \n\n\n`}
        developerBuild(dir, name){ 
            return `Developer${name.split('/').slice(1).join('')}: \$\{DEVELOPER_${dir}_TEST_C_DEPENDENCIES\} \$\{DEVELOPER_${dir}_TEST_H_DEPENDENCIES\}\n` +
            `\tcd \$\{${dir}_DIR\}; gcc -c \$\{${dir}_C\}\n` +
            `\tcd \$\{${dir}_TEST_DIR\}; gcc -c \$\{${dir}_TEST_C\} \$\{${dir}_TEST_DRIVER_C\}\n\n`
        }
        productionBuild(dir, name){
            return `Production${name.split('/').slice(1).join('')}: \$\{PRODUCTION_${dir}_TEST_C_DEPENDENCIES\} \$\{PRODUCTION_${dir}_TEST_H_DEPENDENCIES\}\n`+
            `\tcd \$\{${dir}_DIR\}; gcc -c \$\{${dir}_C\}\n`+
            `\tcd \$\{${dir}_TEST_DIR\}; gcc -c \$\{${dir}_TEST_C\}\n\n`
        }
        developerBuildClean(dir, name){
            return `Developer${name.split('/').slice(1).join('')}Clean: \$\{DEVELOPER_${dir}_TEST_O_DEPENDENCIES\}\n`+
            `\tcd \$\{${dir}_DIR\}; rm -f \$\{${dir}_O\}\n`+
            `\tcd \$\{${dir}_TEST_DIR\}; rm -f \$\{${dir}_TEST_O\} \$\{${dir}_TEST_DRIVER_O\}\n\n`
        }
        productionBuildClean(dir, name){
            return `Production${name.split('/').slice(1).join('')}Clean: \$\{PRODUCTION_${dir}_TEST_O_DEPENDENCIES\}\n`+
            `\tcd \$\{${dir}_DIR\}; rm -f \$\{${dir}_O\}\n`+
            `\tcd \$\{${dir}_TEST_DIR\}; rm -f \$\{${dir}_TEST_O\}\n\n`
        }
        developerBuildLink(dir, name){
            return `Developer${name.split('/').slice(1).join('')}Link: \$\{DEVELOPER_${dir}_TEST_O_DEPENDENCIES\}\n`+
            `\t(gcc -o developerTest \$\{${dir}_O_PATH\} \$\{${dir}_TEST_O_PATH\} \$\{${dir}_TEST_DRIVER_O_PATH\})\n\n`
        }
        productionBuildLink(dir, name){
            return `Production${name.split('/').slice(1).join('')}Link: \$\{PRODUCTION_${dir}_TEST_O_DEPENDENCIES\}\n`+
            `\t(gcc -o productionTest \$\{${dir}_O_PATH\} \$\{${dir}_TEST_O_PATH\})\n\n`
        }
        developerBuildRun(dir, name){
            return `Developer${name.split('/').slice(1).join('')}Run: \$\{DEVELOPER_${dir}_TEST_O_DEPENDENCIES\} \$\{DEVELOPER_${dir}_TEST_C_DEPENDENCIES\} \$\{DEVELOPER_${dir}_TEST_H_DEPENDENCIES\}\n`+
            `\tmake Developer${name.split('/').slice(1).join('')}Clean\n`+
            `\tmake Developer${name.split('/').slice(1).join('')}\n`+
            `\tmake Developer${name.split('/').slice(1).join('')}Link\n`+
            `\t./developerTest\n\n`
        }
        endOfModule(){
            return  `########################################################################################################################################\n\n\n\n\n\n`
        }
        allDeveloperTestCDependencies(DEVELOPER_TEST_C_DEPENDENCIES){
            return `DEVELOPER_TEST_C_DEPENDENCIES=${DEVELOPER_TEST_C_DEPENDENCIES}\n`
        }
        allDeveloperTestHDependencies(DEVELOPER_TEST_H_DEPENDENCIES){
            return  `DEVELOPER_TEST_H_DEPENDENCIES=${DEVELOPER_TEST_H_DEPENDENCIES}\n`
        }
        allDeveloperTestODependencies(DEVELOPER_TEST_O_DEPENDENCIES){
            return `DEVELOPER_TEST_O_DEPENDENCIES=${DEVELOPER_TEST_O_DEPENDENCIES}\n`
        }
        allProductionTestCDependencies(PRODUCTION_TEST_C_DEPENDENCIES){
            return `PRODUCTION_TEST_C_DEPENDENCIES=${PRODUCTION_TEST_C_DEPENDENCIES}\n`
        }
        allProductionTestHDependencies(PRODUCTION_TEST_H_DEPENDENCIES){
            return `PRODUCTION_TEST_H_DEPENDENCIES=${PRODUCTION_TEST_H_DEPENDENCIES}\n`
        }
        allProductionTestODependencies(PRODUCTION_TEST_O_DEPENDENCIES){
            return `PRODUCTION_TEST_O_DEPENDENCIES=${PRODUCTION_TEST_O_DEPENDENCIES}\n`
        }
        allDeveloperTestCFiles(DEVELOPER_TEST_C_FILES){
            return `DEVELOPER_TEST_C_FILES=${DEVELOPER_TEST_C_FILES}\n`
        }
        allDeveloperTestHFiles(DEVELOPER_TEST_H_FILES){
            return `DEVELOPER_TEST_H_FILES=${DEVELOPER_TEST_H_FILES}\n`
        }
        allDeveloperTestOFiles(DEVELOPER_TEST_O_FILES){
            return `DEVELOPER_TEST_O_FILES=${DEVELOPER_TEST_O_FILES}\n`
        }
        allProductionTestCFiles(PRODUCTION_TEST_C_FILES){
            return `PRODUCTION_TEST_C_FILES=${PRODUCTION_TEST_C_FILES}\n`
        }
        allProductionTestHFiles(PRODUCTION_TEST_H_FILES){
            return `PRODUCTION_TEST_H_FILES=${PRODUCTION_TEST_H_FILES}\n`
        }
        allProductionTestOFiles(PRODUCTION_TEST_O_FILES){
            return `PRODUCTION_TEST_O_FILES=${PRODUCTION_TEST_O_FILES}\n\n\n`
        }
        productionTests(PRODUCTION_TEST_C_DEPENDENCIES, PRODUCTION_TEST_H_DEPENDENCIES){
            return `ProductionTests: ${PRODUCTION_TEST_C_DEPENDENCIES} ${PRODUCTION_TEST_H_DEPENDENCIES}\n`+
            `${ProductionTests}\n\n`
        }
        productionTestsLink(PRODUCTION_TEST_O_DEPENDENCIES, PRODUCTION_TEST_O_FILES){
            return `ProductionTestsLink: ${PRODUCTION_TEST_O_DEPENDENCIES}\n`+
            `\tgcc -o Production ${PRODUCTION_TEST_O_FILES}\n\n`
        }
        productionTestsClean(PRODUCTION_TEST_O_DEPENDENCIES){
            return `ProductionTestsClean: ${PRODUCTION_TEST_O_DEPENDENCIES}\n`+
            `${ProductionTestsClean}\n\n`
        }
        productionTestsRun(PRODUCTION_TEST_C_DEPENDENCIES, PRODUCTION_TEST_H_DEPENDENCIES){
            return `ProductionTestsRun: ${PRODUCTION_TEST_C_DEPENDENCIES} ${PRODUCTION_TEST_H_DEPENDENCIES}\n`+
            `\tmake ProductionTestsClean\n`+
            `\tmake ProductionTests\n`+
            `\tmake ProductionTestsLink\n`+
            `\t./Production\n\n`
        }   
        DeveloperTestCDependencies(dir){
            dir=dir.slice().split('/')
            dir.pop()
            dir.shift()
            dir=dir.join('_').toUpperCase()
    
            return `\$\{DEVELOPER_${dir}_TEST_C_DEPENDENCIES\} `
        }
        DeveloperTestHDependencies(dir){
            dir=dir.slice().split('/')
            dir.pop()
            dir.shift()
            dir=dir.join('_').toUpperCase()
    
            return `\$\{DEVELOPER_${dir}_TEST_H_DEPENDENCIES\} `
        }
        DeveloperTestODependencies(dir){
            dir=dir.slice().split('/')
            dir.pop()
            dir.shift()
            dir=dir.join('_').toUpperCase()
    
            return `\$\{DEVELOPER_${dir}_TEST_O_DEPENDENCIES\} `
        }
        ProductionTestCDependencies(dir){
            dir=dir.slice().split('/')
            dir.pop()
            dir.shift()
            dir=dir.join('_').toUpperCase()
    
            return `\$\{PRODUCTION_${dir}_TEST_C_DEPENDENCIES\} `
        }
        ProductionTestHDependencies(dir){
            dir=dir.slice().split('/')
            dir.pop()
            dir.shift()
            dir=dir.join('_').toUpperCase()
    
            return `\$\{PRODUCTION_${dir}_TEST_H_DEPENDENCIES\} `
        }
        ProductionTestODependencies(dir){
            dir=dir.slice().split('/')
            dir.pop()
            dir.shift()
            dir=dir.join('_').toUpperCase()
            return `\$\{PRODUCTION_${dir}_TEST_O_DEPENDENCIES\} `
        }
        DeveloperTestCFiles(dir){
            dir=dir.slice().split('/')
            dir.pop()
            dir.shift()
            dir=dir.join('_').toUpperCase()
    
            return `\$\{DEVELOPER_${dir}_TEST_C_FILES\} `
        }
        DeveloperTestHFiles(dir){
            dir=dir.slice().split('/')
            dir.pop()
            dir.shift()
            dir=dir.join('_').toUpperCase()
    
            return `\$\{DEVELOPER_${dir}_TEST_H_FILES\} `
    
        }
        DeveloperTestOFiles(dir){
            dir=dir.slice().split('/')
            dir.pop()
            dir.shift()
            dir=dir.join('_').toUpperCase()
    
            return `\$\{DEVELOPER_${dir}_TEST_O_FILES\} `
    
        }
        ProductionTestCFiles(dir){
            dir=dir.slice().split('/')
            dir.pop()
            dir.shift()
            dir=dir.join('_').toUpperCase()
    
            return `\$\{PRODUCTION_${dir}_TEST_C_FILES\} `
    
        }
        ProductionTestHFiles(dir){
            dir=dir.slice().split('/')
            dir.pop()
            dir.shift()
            dir=dir.join('_').toUpperCase()
    
            return `\$\{PRODUCTION_${dir}_TEST_H_FILES\} `
    
        }
        ProductionTestOFiles(dir){
            dir=dir.slice().split('/')
            dir.pop()
            dir.shift()
            dir=dir.join('_').toUpperCase()
    
            return `\$\{PRODUCTION_${dir}_TEST_O_FILES\} `
    
        }
        _ProductionTests(dir){ return `\tmake Production${dir.split('/').slice(1).join('')}\n`}
        _ProductionTestsClean(dir){ return `\tmake Production${dir.split('/').slice(1).join('')}Clean\n` }

        module(dir, dependencies){
            this.set(dir, dependencies)
            return ``+
            this.modulePath()+
            this.moduleTestPath()+
            this.moduleCFile()+
            this.moduleHFile()+
            this.moduleOFile()+
            this.moduleTestCFile()+
            this.moduleTestHFile()+
            this.moduleTestOFile()+
            this.moduleTestDriverCFile()+
            this.moduleTestDriverHFile()+
            this.moduleTestDriverOFile()+
            this.moduleCFilePath()+
            this.moduleHFilePath()+
            this.moduleOFilePath()+
            this.moduleTestCFilePath()+
            this.moduleTestHFilePath()+
            this.moduleTestOFilePath()+
            this.moduleTestDriverCFilePath()+
            this.moduleTestDriverHFilePath()+
            this.moduleTestDriverOFilePath()+
            this.moduleTestDriverCFilePath()+
            this.moduleTestDriverHFilePath()+
            this.moduleTestDriverOFilePath()+
            this.productionTestCDependencies()+
            this.productionTestHDependencies()+
            this.productionTestODependencies()+
            this.developerTestCDependencies()+
            this.developerTestHDependencies()+
            this.developerTestODependencies()+
            this.developerTestCFiles()+
            this.developerTestHFiles()+
            this.developerTestOFiles()+
            this.productionTestCFiles()+
            this.productionTestHFiles()+
            this.productionTestOFiles()+
            this.developerTestFiles()+
            this.developerBuild()+
            this.productionBuild()+
            this.developerBuildClean()+
            this.productionBuildClean()+
            this.developerBuildLink()+
            this.productionBuildLink()+
            this.developerBuildRun()+
            this.endOfModule()
        }
        consolodateModules(){
            return ``+
            this.allDeveloperTestCDependencies() +
            this.allDeveloperTestHDependencies() +
            this.allDeveloperTestODependencies() +
            this.allProductionTestCDependencies() +
            this.allProductionTestHDependencies() +
            this.allProductionTestODependencies() +
            this.allDeveloperTestCFiles() +
            this.allDeveloperTestHFiles() +
            this.allDeveloperTestOFiles() +
            this.allProductionTestCFiles() +
            this.allProductionTestHFiles() +
            this.allProductionTestOFiles() +
            this.endOfModule() +       
            this.productionTests() +
            this.productionTestsLink() +
            this.productionTestsClean() +
            this.productionTestsRun()+
            this.endOfModule()        
        }
        set(dir, dependencies){
            this.name=dir
            dir=dir.split('/')
            dir.pop()
            dir.shift()
            this.fileName=dir.slice().pop()
            this.dir=dir.join('_').toUpperCase()
            
            this.dependencies=dependencies
            this.dependenciesH=``
            this.dependenciesC=``
            this.dependenciesO=``
           for(var i = 0; i<this.dependencies.length; i++){
                this.dependenciesH+=this.dependencies[i].slice(0,-1)+`h `
                this.dependenciesC+=this.dependencies[i].slice(0,-1)+`c `
                this.dependenciesO+=this.dependencies[i].slice(0,-1)+`o `
           }
        }
    }
   