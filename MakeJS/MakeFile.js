export class MakeFile{
    constructor(dir, dependencies){
        dir=dir.split('/')
        dir.pop()
        dir.shift()
        this.fileName=dir.slice().pop()
        this.name = dir.join("")
        this.dir=dir.join('_').toUpperCase()
        this.dependencies=dependencies
        this.dependenciesH=``
        this.dependenciesC=``
        this.dependenciesO=``
        
       for(var i = 0; i<this.dependencies.length; i++){
            this.dependenciesH+=this.dependencies[0].slice(0,-1)+`h `
            this.dependenciesC+=this.dependencies[0].slice(0,-1)+`c `
            this.dependenciesO+=this.dependencies[0].slice(0,-1)+`o `
       }
    }
    modulePath(){ return`${this.dir}_DIR=${this.dirName}\n` }
    moduleTestPath(){return `${this.dir}_TEST_DIR=\$\{${this.dir}_DIR\}Test/\n`}
    moduleCFile(){ return `${this.dir}_C=${this.fileName}.c\n`}
    moduleHFile(){ return `${this.dir}_H=${this.fileName}.h\n`}
    moduleOFile(){ return `${this.dir}_O=${this.fileName}.o\n`}
    moduleTestCFile(){return `${this.dir}_TEST_C=Test.c\n`}
    moduleTestHFile(){return `${this.dir}_TEST_H=Test.h\n`}
    moduleTestOFile(){return `${this.dir}_TEST_O=Test.o\n`}
    moduleTestDriverCFile(){return `${this.dir}_TEST_DRIVER_C=Driver.c\n`}
    moduleTestDriverHFile(){return `${this.dir}_TEST_DRIVER_H=Driver.h\n`}
    moduleTestDriverOFile(){return `${this.dir}_TEST_DRIVER_O=Driver.o\n`}
    moduleCFilePath(){return `${this.dir}_C_PATH=\$\{${this.dir}_DIR\}\$\{${this.dir}_C\}\n`}
    moduleHFilePath(){return `${this.dir}_H_PATH=\$\{${this.dir}_DIR\}\$\{${this.dir}_H\}\n`}
    moduleOFilePath(){return `${this.dir}_O_PATH=\$\{${this.dir}_DIR\}\$\{${this.dir}_O\}\n`}
    moduleTestCFilePath(){return `${this.dir}_TEST_C_PATH=\$\{${this.dir}_TEST_DIR\}\$\{${this.dir}_TEST_C\}\n`}
    moduleTestHFilePath(){return `${this.dir}_TEST_H_PATH=\$\{${this.dir}_TEST_DIR\}\$\{${this.dir}_TEST_H\}\n`}
    moduleTestOFilePath(){return `${this.dir}_TEST_O_PATH=\$\{${this.dir}_TEST_DIR\}\$\{${this.dir}_TEST_O\}\n`}
    moduleTestDriverCFilePath(){return `${this.dir}_TEST_DRIVER_C_PATH=\$\{${this.dir}_TEST_DIR\}\$\{${this.dir}_TEST_DRIVER_C\}\n`}
    moduleTestDriverHFilePath(){return `${this.dir}_TEST_DRIVER_H_PATH=\$\{${this.dir}_TEST_DIR\}\$\{${this.dir}_TEST_DRIVER_H\}\n`}
    moduleTestDriverOFilePath(){return `${this.dir}_TEST_DRIVER_O_PATH=\$\{${this.dir}_TEST_DIR\}\$\{${this.dir}_TEST_DRIVER_O\}\n`}
    moduleTestDriverCFilePath(){return `${this.dir}_TEST_DRIVER_C_PATH=\$\{${this.dir}_TEST_DIR\}\$\{${this.dir}_TEST_DRIVER_C\}\n`}
    moduleTestDriverHFilePath(){return `${this.dir}_TEST_DRIVER_H_PATH=\$\{${this.dir}_TEST_DIR\}\$\{${this.dir}_TEST_DRIVER_H\}\n`}
    moduleTestDriverOFilePath(){return `${this.dir}_TEST_DRIVER_O_PATH=\$\{${this.dir}_TEST_DIR\}\$\{${this.dir}_TEST_DRIVER_O\}\n`}
    productionTestCDependencies(){return `PRODUCTION_${this.dir}_TEST_C_DEPENDENCIES=\$\{${this.dir}_C_PATH\} \$\{${this.dir}_TEST_C_PATH\} `+ this.dependenciesC + `\n`}
    productionTestHDependencies(){return `PRODUCTION_${this.dir}_TEST_H_DEPENDENCIES=\$\{${this.dir}_H_PATH\} \$\{${this.dir}_TEST_H_PATH\} `+ this.dependenciesH + `\n`}
    productionTestODependencies(){return `PRODUCTION_${this.dir}_TEST_O_DEPENDENCIES=\$\{${this.dir}_O_PATH\} \$\{${this.dir}_TEST_O_PATH\} `+ this.dependenciesO + `\n`}
    developerTestCDependencies(){return `DEVELOPER${this.dir}_TEST_C_DEPENDENCIES=\$\{${this.dir}_C_PATH\} \$\{${this.dir}_TEST_C_PATH\} \$\{${this.dir}_TEST_DRIVER_C_PATH\}`+ this.dependenciesC + `\n`}
    developerTestHDependencies(){return `DEVELOPER${this.dir}_TEST_H_DEPENDENCIES=\$\{${this.dir}_H_PATH\} \$\{${this.dir}_TEST_H_PATH\} \$\{${this.dir}_TEST_DRIVER_H_PATH\}`+ this.dependenciesH + `\n`}
    developerTestODependencies(){return `DEVELOPER${this.dir}_TEST_O_DEPENDENCIES=\$\{${this.dir}_O_PATH\} \$\{${this.dir}_TEST_O_PATH\} \$\{${this.dir}_TEST_DRIVER_O_PATH\}`+ this.dependenciesO + `\n`}
    developerTestCFiles(){ return `DEVELOPER_${this.dir}_TEST_C_FILES=\$\{${this.dir}_C_PATH\} \$\{${this.dir}_TEST_C_PATH\} \$\{${this.dir}_TEST_DRIVER_C_PATH\} `+ this.dependenciesC + `\n`}
    developerTestHFiles(){ return `DEVELOPER_${this.dir}_TEST_H_FILES=\$\{${this.dir}_H_PATH\} \$\{${this.dir}_TEST_H_PATH\} \$\{${this.dir}_TEST_DRIVER_H_PATH\} `+ this.dependenciesH + `\n`}
    developerTestOFiles(){ return `DEVELOPER_${this.dir}_TEST_O_FILES=\$\{${this.dir}_O_PATH\} \$\{${this.dir}_TEST_O_PATH\} \$\{${this.dir}_TEST_DRIVER_O_PATH\} `+ this.dependenciesO + `\n`}
    productionTestCFiles(){ return `PRODUCTION${this.dir}_TEST_C_FILES=\$\{${this.dir}_C_PATH\} \$\{${this.dir}_TEST_C_PATH\} `+ this.dependenciesC + `\n`}
    productionTestHFiles(){ return `PRODUCTION${this.dir}_TEST_H_FILES=\$\{${this.dir}_H_PATH\} \$\{${this.dir}_TEST_H_PATH\} `+ this.dependenciesH + `\n`}
    productionTestOFiles(){ return `PRODUCTION${this.dir}_TEST_O_FILES=\$\{${this.dir}_O_PATH\} \$\{${this.dir}_TEST_O_PATH\} `+ this.dependenciesO + `\n`}
    developerTestFiles(){ return `${this.dir}_TEST_DEVELOPER_FILES= \$\{DEVELOPER_${this.dir}_TEST_C_FILES\} \$\{DEVELOPER_${this.dir}_TEST_H_FILES\} \$\{DEVELOPER_${this.dir}_TEST_O_FILES\} \n\n\n`}
    developerBuild(){ 
        return `Developer${this.name}: \$\{DEVELOPER_${this.dir}_TEST_C_DEPENDENCIES\} \$\{DEVELOPER_${this.dir}_TEST_H_DEPENDENCIES\}\n` +
        `\tcd \$\{${this.dir}_DIR\}; gcc -c \$\{${this.dir}_C\}\n` +
        `\tcd \$\{${this.dir}_TEST_DIR\}; gcc -c \$\{${this.dir}_TEST_C\} \$\{${this.dir}_TEST_DRIVER_C\}\n\n`
    }
    productionBuild(){
        return `Production${this.name}: \$\{PRODUCTION_${this.dir}_TEST_C_DEPENDENCIES\} \$\{PRODUCTION_${this.dir}_TEST_H_DEPENDENCIES\}\n`+
        `\tcd \$\{${this.dir}_DIR\}; gcc -c \$\{${this.dir}_C\}\n`+
        `\tcd \$\{${this.dir}_TEST_DIR\}; gcc -c \$\{${this.dir}_TEST_C\}\n\n`
    }
    developerBuildClean(){
        return `Developer${this.name}Clean: \$\{DEVELOPER_${this.dir}_TEST_O_DEPENDENCIES\}\n`+
        `\tcd \$\{${this.dir}_DIR\}; rm -f \$\{${this.dir}_O\}\n`+
        `\tcd \$\{${this.dir}_TEST_DIR\}; rm -f \$\{${this.dir}_TEST_O\} \$\{${this.dir}_TEST_DRIVER_O\}\n\n`
    }
    productionBuildClean(){
        return `Production${this.name}Clean: \$\{PRODUCTION_${this.dir}_TEST_O_DEPENDENCIES\}\n`+
        `\tcd \$\{${this.dir}_DIR\}; rm -f \$\{${this.dir}_O\}\n`+
        `\tcd \$\{${this.dir}_TEST_DIR\}; rm -f \$\{${this.dir}_TEST_O\}\n\n`
    }
    developerBuildLink(){
        return `Developer${this.name}Link: \$\{DEVELOPER_${this.dir}_TEST_O_DEPENDENCIES\}\n`+
        `\t(gcc -o developerTest \$\{${this.dir}_O_PATH\} \$\{${this.dir}_TEST_O_PATH\} \$\{${this.dir}_TEST_DRIVER_O_PATH\})\n\n`
    }
    productionBuildLink(){
        return `Production${this.name}Link: \$\{PRODUCTION_${this.dir}_TEST_O_DEPENDENCIES\}\n`+
        `\t(gcc -o productionTest \$\{${this.dir}_O_PATH\} \$\{${this.dir}_TEST_O_PATH\})\n\n`
    }
    developerBuildRun(){
        return `Developer${this.name}Run: \$\{DEVELOPER_${this.dir}_TEST_O_DEPENDENCIES\} \$\{DEVELOPER_${this.dir}_TEST_C_DEPENDENCIES\} \$\{DEVELOPER_${this.dir}_TEST_H_DEPENDENCIES\}\n`+
        `\tmake Developer${this.name}Clean\n`+
        `\tmake Developer${this.name}\n`+
        `\tmake Developer${this.name}Link\n`+
        `\t./developerTest\n\n`
    }
    endOfModule(){
        return  `########################################################################################################################################\n\n\n\n\n\n`
    }
}