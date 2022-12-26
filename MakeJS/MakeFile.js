class MakeFile{
    constructor(dir, dependencies){
        dir=dir.split('/')
        dir.pop()
        dir.shift()
        this.fileName=dir.slice().pop()
        this.name = dir.join("")
        this.dir=dir.join('_').toUpperCase()
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

    developerTestCDependencies(){return `DEVELOPER_${this.dir}_TEST_C_DEPENDENCIES=\$\{${this.dir}_C_PATH\} \$\{${this.dir}_TEST_C_PATH\} `+ this.dependenciesC + `\n`}
    developerTestHDependencies(){return `DEVELOPER_${this.dir}_TEST_H_DEPENDENCIES=\$\{${this.dir}_H_PATH\} \$\{${this.dir}_TEST_H_PATH\} `+ this.dependenciesH + `\n`}
    developerTestODependencies(){return `DEVELOPER_${this.dir}_TEST_O_DEPENDENCIES=\$\{${this.dir}_O_PATH\} \$\{${this.dir}_TEST_O_PATH\} `+ this.dependenciesO + `\n`}

    productionTestCDependencies(){return `PRODUCTION_${this.dir}_TEST_C_DEPENDENCIES=\$\{${this.dir}_C_PATH\} \$\{${this.dir}_TEST_C_PATH\} `+ this.dependenciesC + `\n`}
    productionTestHDependencies(){return `PRODUCTION_${this.dir}_TEST_H_DEPENDENCIES=\$\{${this.dir}_H_PATH\} \$\{${this.dir}_TEST_H_PATH\} `+ this.dependenciesH + `\n`}
    productionTestODependencies(){return `PRODUCTION_${this.dir}_TEST_O_DEPENDENCIES=\$\{${this.dir}_O_PATH\} \$\{${this.dir}_TEST_O_PATH\} `+ this.dependenciesO + `\n`}

    developerTestCDependencies(){return `DEVELOPER_${this.dir}_TEST_C_DEPENDENCIES=\$\{${this.dir}_C_PATH\} \$\{${this.dir}_TEST_C_PATH\} \$\{${this.dir}_TEST_DRIVER_C_PATH\}`+ this.dependenciesC + `\n`}
    developerTestHDependencies(){return `DEVELOPER_${this.dir}_TEST_H_DEPENDENCIES=\$\{${this.dir}_H_PATH\} \$\{${this.dir}_TEST_H_PATH\} \$\{${this.dir}_TEST_DRIVER_H_PATH\}`+ this.dependenciesH + `\n`}
    developerTestODependencies(){return `DEVELOPER_${this.dir}_TEST_O_DEPENDENCIES=\$\{${this.dir}_O_PATH\} \$\{${this.dir}_TEST_O_PATH\} \$\{${this.dir}_TEST_DRIVER_O_PATH\}`+ this.dependenciesO + `\n`}

    productionTestCDependencies(){return `PRODUCTION_${this.dir}_TEST_C_DEPENDENCIES=\$\{${this.dir}_C_PATH\} \$\{${this.dir}_TEST_C_PATH\} \$\{${this.dir}_TEST_DRIVER_C_PATH\}`+ this.dependenciesC + `\n`}
    productionTestHDependencies(){return `PRODUCTION_${this.dir}_TEST_H_DEPENDENCIES=\$\{${this.dir}_H_PATH\} \$\{${this.dir}_TEST_H_PATH\} \$\{${this.dir}_TEST_DRIVER_H_PATH\}`+ this.dependenciesH + `\n`}
    productionTestODependencies(){return `PRODUCTION_${this.dir}_TEST_O_DEPENDENCIES=\$\{${this.dir}_O_PATH\} \$\{${this.dir}_TEST_O_PATH\} \$\{${this.dir}_TEST_DRIVER_O_PATH\}`+ this.dependenciesO + `\n`}
    
    
    
    //    `DEVELOPER_${dir}_TEST_C_FILES=\$\{${dir}_C_PATH\} \$\{${dir}_TEST_C_PATH\} \$\{${dir}_TEST_DRIVER_C_PATH\} `+ dependenciesC + `\n`+
    //    `DEVELOPER_${dir}_TEST_H_FILES=\$\{${dir}_H_PATH\} \$\{${dir}_TEST_H_PATH\} \$\{${dir}_TEST_DRIVER_H_PATH\} `+ dependenciesH + `\n`+
    //    `DEVELOPER_${dir}_TEST_O_FILES=\$\{${dir}_O_PATH\} \$\{${dir}_TEST_O_PATH\} \$\{${dir}_TEST_DRIVER_O_PATH\} `+ dependenciesO + `\n`+
    //    `PRODUCTION_${dir}_TEST_C_FILES=\$\{${dir}_C_PATH\} \$\{${dir}_TEST_C_PATH\} `+ dependenciesC + `\n`+
    //    `PRODUCTION_${dir}_TEST_H_FILES=\$\{${dir}_H_PATH\} \$\{${dir}_TEST_H_PATH\} `+ dependenciesH + `\n`+
    //    `PRODUCTION_${dir}_TEST_O_FILES=\$\{${dir}_O_PATH\} \$\{${dir}_TEST_O_PATH\} `+ dependenciesO + `\n`+
    //    `${dir}_TEST_DEVELOPER_FILES= \$\{DEVELOPER_${dir}_TEST_C_FILES\} \$\{DEVELOPER_${dir}_TEST_H_FILES\} \$\{DEVELOPER_${dir}_TEST_O_FILES\} \n\n\n`+
    //    `Developer${name}: \$\{DEVELOPER_${dir}_TEST_C_DEPENDENCIES\} \$\{DEVELOPER_${dir}_TEST_H_DEPENDENCIES\}\n`+
    //    `\tcd \$\{${dir}_DIR\}; gcc -c \$\{${dir}_C\}\n`+
    //    `\tcd \$\{${dir}_TEST_DIR\}; gcc -c \$\{${dir}_TEST_C\} \$\{${dir}_TEST_DRIVER_C\}\n\n`+
    //    `Production${name}: \$\{PRODUCTION_${dir}_TEST_C_DEPENDENCIES\} \$\{PRODUCTION_${dir}_TEST_H_DEPENDENCIES\}\n`+
    //    `\tcd \$\{${dir}_DIR\}; gcc -c \$\{${dir}_C\}\n`+
    //    `\tcd \$\{${dir}_TEST_DIR\}; gcc -c \$\{${dir}_TEST_C\}\n\n`+
    //     `Developer${name}Clean: \$\{DEVELOPER_${dir}_TEST_O_DEPENDENCIES\}\n`+
    //     `\tcd \$\{${dir}_DIR\}; rm -f \$\{${dir}_O\}\n`+
    //     `\tcd \$\{${dir}_TEST_DIR\}; rm -f \$\{${dir}_TEST_O\} \$\{${dir}_TEST_DRIVER_O\}\n\n` +
    //     `Production${name}Clean: \$\{PRODUCTION_${dir}_TEST_O_DEPENDENCIES\}\n`+
    //     `\tcd \$\{${dir}_DIR\}; rm -f \$\{${dir}_O\}\n`+
    //     `\tcd \$\{${dir}_TEST_DIR\}; rm -f \$\{${dir}_TEST_O\}\n\n` +
    //     `Developer${name}Link: \$\{DEVELOPER_${dir}_TEST_O_DEPENDENCIES\}\n`+
	//     `\t(gcc -o developerTest \$\{${dir}_O_PATH\} \$\{${dir}_TEST_O_PATH\} \$\{${dir}_TEST_DRIVER_O_PATH\})\n\n`+
    //     `Production${name}Link: \$\{PRODUCTION_${dir}_TEST_O_DEPENDENCIES\}\n`+
	//     `\t(gcc -o productionTest \$\{${dir}_O_PATH\} \$\{${dir}_TEST_O_PATH\})\n\n`+
    //     `Developer${name}Run: \$\{DEVELOPER_${dir}_TEST_O_DEPENDENCIES\} \$\{DEVELOPER_${dir}_TEST_C_DEPENDENCIES\} \$\{DEVELOPER_${dir}_TEST_H_DEPENDENCIES\}\n`+
    //     `\tmake Developer${name}Clean\n`+
    //     `\tmake Developer${name}\n`+
    //     `\tmake Developer${name}Link\n`+
    //     `\t./developerTest\n\n`+

    //     `########################################################################################################################################\n\n\n\n\n\n`

}