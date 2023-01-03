

export class ProjectLevelVars{
    constructor(){
        this.projVars={
            'devTestCDeps':[],
            'devTestHDeps':[],
            'devTestODeps':[],
            'devTestCFiles':[],
            'devTestHFiles':[],
            'devTestOFiles':[],
            'prodTestCDeps':[],
            'prodTestHDeps':[],
            'prodTestODeps':[],
            'prodTestCFiles':[],
            'prodTestHFiles':[],
            'prodTestOFiles':[],
            'prodTests':[],
            'prodTestsLink':[],
            'prodTestsClean':[],
            'prodTestsRun':[],
        }
    }
    devTestCDeps(projVars){ return `DEV_TEST_C_DEPS=${projVars['devTestCDeps'].join('')}\n` }
    devTestHDeps(projVars){ return  `DEV_TEST_H_DEPS=${projVars['devTestHDeps'].join('')}\n` }
    devTestODeps(projVars){ return `DEV_TEST_O_DEPS=${projVars['devTestODeps'].join('')}\n` }
    prodTestCDeps(projVars){ return `PROD_TEST_C_DEPS=${projVars['prodTestCDeps'].join('')}\n` }
    prodTestHDeps(projVars){ return `PROD_TEST_H_DEPS=${projVars['prodTestHDeps'].join('')}\n` }
    prodTestODeps(projVars){ return `PROD_TEST_O_DEPS=${projVars['prodTestODeps'].join('')}\n` }
    devTestCFiles(projVars){ return `DEV_TEST_C_FILES=${projVars['devTestCFiles'].join('')}\n` }
    devTestHFiles(projVars){ return `DEV_TEST_H_FILES=${projVars['devTestHFiles'].join('')}\n` }
    devTestOFiles(projVars){ return `DEV_TEST_O_FILES=${projVars['devTestOFiles'].join('')}\n` }
    prodTestCFiles(projVars){ return `PROD_TEST_C_FILES=${projVars['prodTestCFiles'].join('')}\n` }
    prodTestHFiles(projVars){ return `PROD_TEST_H_FILES=${projVars['prodTestHFiles'].join('')}\n` }
    prodTestOFiles(projVars){ return `PROD_TEST_O_FILES=${projVars['prodTestOFiles'].join('')}\n\n\n` }

    _devTestCDeps(literal, projVars){projVars['devTestCDeps'].push(`\$\{DEV_${literal}_TEST_C_DEPS\} `)}
    _devTestHDeps(literal, projVars){projVars['devTestHDeps'].push(`\$\{DEV_${literal}_TEST_H_DEPS\} `)}
    _devTestODeps(literal, projVars){projVars['devTestODeps'].push(`\$\{DEV_${literal}_TEST_O_DEPS\} `)}
    _prodTestCDeps(literal, projVars){projVars['prodTestCDeps'].push(`\$\{PROD_${literal}_TEST_C_DEPS\} `)}
    _prodTestHDeps(literal, projVars){projVars['prodTestHDeps'].push(`\$\{PROD_${literal}_TEST_H_DEPS\} `)}
    _prodTestODeps(literal, projVars){projVars['prodTestODeps'].push(`\$\{PROD_${literal}_TEST_O_DEPS\} `)}
    _devTestCFiles(literal, projVars){projVars['devTestCFiles'].push(`\$\{DEV_${literal}_TEST_C_FILES\} `)}
    _devTestHFiles(literal, projVars){projVars['devTestHFiles'].push(`\$\{DEV_${literal}_TEST_H_FILES\} `)}
    _devTestOFiles(literal, projVars){projVars['devTestOFiles'].push(`\$\{DEV_${literal}_TEST_O_FILES\} `)}
    _prodTestCFiles(literal, projVars){projVars['prodTestCFiles'].push(`\$\{PROD_${literal}_TEST_C_FILES\} `)}
    _prodTestHFiles(literal, projVars){projVars['prodTestHFiles'].push(`\$\{PROD_${literal}_TEST_H_FILES\} `)}
    _prodTestOFiles(literal, projVars){projVars['prodTestOFiles'].push(`\$\{PROD_${literal}_TEST_O_FILES\} `)}

    update(literal, projVars){
        this._devTestCDeps(literal, projVars);
        this._devTestHDeps(literal, projVars);
        this._devTestODeps(literal, projVars);
        this._prodTestCDeps(literal, projVars);
        this._prodTestHDeps(literal, projVars);
        this._prodTestODeps(literal, projVars);
        this._devTestCFiles(literal, projVars);
        this._devTestHFiles(literal, projVars);
        this._devTestOFiles(literal, projVars);
        this._prodTestCFiles(literal, projVars);
        this._prodTestHFiles(literal, projVars);
        this._prodTestOFiles(literal, projVars);

    }
    endOfSection(){ return `########################################################################################################################################\n\n\n\n\n\n`}
}

export class ProjectLevelMake{
    prodTests(projVars){ return `ProdTests: ${projVars['prodTestCDeps'].join(' ')} ${projVars['prodTestHDeps'].join(' ')}\n`+ `\t${projVars['prodTests'].join('\t')}\n\n`}
    prodTestsLink(projVars){ return `ProdTestsLink: ${projVars['prodTestODeps'].join(' ')}\n`+`\tgcc -o Prod ${projVars['prodTestOFiles'].join(' ')}\n\n`}
    prodTestsClean(projVars){ return `ProdTestsClean: ${projVars['prodTestODeps'].join(' ')}\n`+`\t${projVars['prodTestsClean'].join('\t')}\n\n`}
    prodTestsRun(projVars){
        return `ProdTestsRun: ${projVars['prodTestCDeps'].join(' ')} ${projVars['prodTestHDeps'].join(' ')}\n`+
        `\tmake ProdTestsClean\n`+
        `\tmake ProdTests\n`+
        `\tmake ProdTestsLink\n`+
        `\t./Prod\n\n`
    }

    _prodTests(name, projVars){projVars['prodTests'].push(`make Prod${name}\n`)}
    _prodTestsClean(name, projVars){projVars['prodTestsClean'].push(`make Prod${name}Clean\n`)}
    

    update(name, projVars){
        this._prodTests(name, projVars);
        this._prodTestsClean(name, projVars);
    }

    endOfSection(){ return `########################################################################################################################################\n\n\n\n\n\n`}
}    

export class ModuleLevelMake{

    devBuild(literal, name){ 
        return `Dev${name}: \$\{DEV_${literal}_TEST_C_DEPS\} \$\{DEV_${literal}_TEST_H_DEPS\}\n` +
        `\tcd \$\{${literal}_DIR\}; gcc -c \$\{${literal}_C\}\n` +
        `\tcd \$\{${literal}_TEST_DIR\}; gcc -c \$\{${literal}_TEST_C\} \$\{${literal}_TEST_DRVR_C\}\n\n`
    }
    prodBuild(literal, name){
        return `Prod${name}: \$\{PROD_${literal}_TEST_C_DEPS\} \$\{PROD_${literal}_TEST_H_DEPS\}\n`+
        `\tcd \$\{${literal}_DIR\}; gcc -c \$\{${literal}_C\}\n`+
        `\tcd \$\{${literal}_TEST_DIR\}; gcc -c \$\{${literal}_TEST_C\}\n\n`
    }
    devBuildClean(literal, name){
        return `Dev${name}Clean: \$\{DEV_${literal}_TEST_O_DEPS\}\n`+
        `\tcd \$\{${literal}_DIR\}; rm -f \$\{${literal}_O\}\n`+
        `\tcd \$\{${literal}_TEST_DIR\}; rm -f \$\{${literal}_TEST_O\} \$\{${literal}_TEST_DRVR_O\}\n\n`
    }
    prodBuildClean(literal, name){
        return `Prod${name}Clean: \$\{PROD_${literal}_TEST_O_DEPS\}\n`+
        `\tcd \$\{${literal}_DIR\}; rm -f \$\{${literal}_O\}\n`+
        `\tcd \$\{${literal}_TEST_DIR\}; rm -f \$\{${literal}_TEST_O\}\n\n`
    }
    devBuildLink(literal, name){
        return `Dev${name}Link: \$\{DEV_${literal}_TEST_O_DEPS\}\n`+
        `\t(gcc -o devTest \$\{${literal}_O_PATH\} \$\{${literal}_TEST_O_PATH\} \$\{${literal}_TEST_DRVR_O_PATH\})\n\n`
    }
    prodBuildLink(literal, name){
        return `Prod${name}Link: \$\{PROD_${literal}_TEST_O_DEPS\}\n`+
        `\t(gcc -o prodTest \$\{${literal}_O_PATH\} \$\{${literal}_TEST_O_PATH\})\n\n`
    }
    devBuildRun(literal, name){
        return `Dev${name}Run: \$\{DEV_${literal}_TEST_O_DEPS\} \$\{DEV_${literal}_TEST_C_DEPS\} \$\{DEV_${literal}_TEST_H_DEPS\}\n`+
        `\tmake Dev${name}Clean\n`+
        `\tmake Dev${name}\n`+
        `\tmake Dev${name}Link\n`+
        `\t./devTest\n\n`
    }
    endOfSection(){ return `########################################################################################################################################\n\n\n\n\n\n`}
}

export class ModuleLevelVars{
    path(literal, dir){ return`${literal}_DIR=${dir}\n` }
    testPath(literal){ return `${literal}_TEST_DIR=\$\{${literal}_DIR\}Test/\n`}
    cFile(literal, fileName){ return `${literal}_C=${fileName}.c\n`}
    hFile(literal, fileName){ return `${literal}_H=${fileName}.h\n`}
    oFile(literal, fileName){ return `${literal}_O=${fileName}.o\n`}
    testCFile(literal){ return `${literal}_TEST_C=Test.c\n`}
    testHFile(literal){ return `${literal}_TEST_H=Test.h\n`}
    testOFile(literal){ return `${literal}_TEST_O=Test.o\n`}
    testDrvrCFile(literal){ return `${literal}_TEST_DRVR_C=Drvr.c\n`}
    testDrvrHFile(literal){ return `${literal}_TEST_DRVR_H=Drvr.h\n`}
    testDrvrOFile(literal){ return `${literal}_TEST_DRVR_O=Drvr.o\n`}
    cFilePath(literal){ return `${literal}_C_PATH=\$\{${literal}_DIR\}\$\{${literal}_C\}\n`}
    hFilePath(literal){ return `${literal}_H_PATH=\$\{${literal}_DIR\}\$\{${literal}_H\}\n`}
    oFilePath(literal){ return `${literal}_O_PATH=\$\{${literal}_DIR\}\$\{${literal}_O\}\n`}
    testCFilePath(literal){ return `${literal}_TEST_C_PATH=\$\{${literal}_TEST_DIR\}\$\{${literal}_TEST_C\}\n`}
    testHFilePath(literal){ return `${literal}_TEST_H_PATH=\$\{${literal}_TEST_DIR\}\$\{${literal}_TEST_H\}\n`}
    testOFilePath(literal){ return `${literal}_TEST_O_PATH=\$\{${literal}_TEST_DIR\}\$\{${literal}_TEST_O\}\n`}
    testDrvrCFilePath(literal){ return `${literal}_TEST_DRVR_C_PATH=\$\{${literal}_TEST_DIR\}\$\{${literal}_TEST_DRVR_C\}\n`}
    testDrvrHFilePath(literal){ return `${literal}_TEST_DRVR_H_PATH=\$\{${literal}_TEST_DIR\}\$\{${literal}_TEST_DRVR_H\}\n`}
    testDrvrOFilePath(literal){ return `${literal}_TEST_DRVR_O_PATH=\$\{${literal}_TEST_DIR\}\$\{${literal}_TEST_DRVR_O\}\n`}
    testDrvrCFilePath(literal){ return `${literal}_TEST_DRVR_C_PATH=\$\{${literal}_TEST_DIR\}\$\{${literal}_TEST_DRVR_C\}\n`}
    testDrvrHFilePath(literal){ return `${literal}_TEST_DRVR_H_PATH=\$\{${literal}_TEST_DIR\}\$\{${literal}_TEST_DRVR_H\}\n`}
    testDrvrOFilePath(literal){ return `${literal}_TEST_DRVR_O_PATH=\$\{${literal}_TEST_DIR\}\$\{${literal}_TEST_DRVR_O\}\n`}
    prodTestCDeps(literal, depsC){ return `PROD_${literal}_TEST_C_DEPS=\$\{${literal}_C_PATH\} \$\{${literal}_TEST_C_PATH\} `+ depsC + `\n`}
    prodTestHDeps(literal, depsH){ return `PROD_${literal}_TEST_H_DEPS=\$\{${literal}_H_PATH\} \$\{${literal}_TEST_H_PATH\} `+ depsH + `\n`}
    prodTestODeps(literal, depsO){ return `PROD_${literal}_TEST_O_DEPS=\$\{${literal}_O_PATH\} \$\{${literal}_TEST_O_PATH\} `+ depsO + `\n`}
    devTestCDeps(literal, depsC){ return `DEV_${literal}_TEST_C_DEPS=\$\{${literal}_C_PATH\} \$\{${literal}_TEST_C_PATH\} \$\{${literal}_TEST_DRVR_C_PATH\} `+ depsC + `\n`}
    devTestHDeps(literal, depsH){ return `DEV_${literal}_TEST_H_DEPS=\$\{${literal}_H_PATH\} \$\{${literal}_TEST_H_PATH\} \$\{${literal}_TEST_DRVR_H_PATH\} `+ depsH + `\n`}
    devTestODeps(literal, depsO){ return `DEV_${literal}_TEST_O_DEPS=\$\{${literal}_O_PATH\} \$\{${literal}_TEST_O_PATH\} \$\{${literal}_TEST_DRVR_O_PATH\} `+ depsO + `\n`}
    devTestCFiles(literal, depsC){ return `DEV_${literal}_TEST_C_FILES=\$\{${literal}_C_PATH\} \$\{${literal}_TEST_C_PATH\} \$\{${literal}_TEST_DRVR_C_PATH\} `+ depsC + `\n`}
    devTestHFiles(literal, depsH){ return `DEV_${literal}_TEST_H_FILES=\$\{${literal}_H_PATH\} \$\{${literal}_TEST_H_PATH\} \$\{${literal}_TEST_DRVR_H_PATH\} `+ depsH + `\n`}
    devTestOFiles(literal, depsO){ return `DEV_${literal}_TEST_O_FILES=\$\{${literal}_O_PATH\} \$\{${literal}_TEST_O_PATH\} \$\{${literal}_TEST_DRVR_O_PATH\} `+ depsO + `\n`}
    prodTestCFiles(literal, depsC){ return `PROD_${literal}_TEST_C_FILES=\$\{${literal}_C_PATH\} \$\{${literal}_TEST_C_PATH\} `+ depsC + `\n`}
    prodTestHFiles(literal, depsH){ return `PROD_${literal}_TEST_H_FILES=\$\{${literal}_H_PATH\} \$\{${literal}_TEST_H_PATH\} `+ depsH + `\n`}
    prodTestOFiles(literal, depsO){ return `PROD_${literal}_TEST_O_FILES=\$\{${literal}_O_PATH\} \$\{${literal}_TEST_O_PATH\} `+ depsO + `\n`}
    devTestFiles(literal){ return `${literal}_TEST_DEV_FILES= \$\{DEV_${literal}_TEST_C_FILES\} \$\{DEV_${literal}_TEST_H_FILES\} \$\{DEV_${literal}_TEST_O_FILES\} \n\n\n`}
    endOfSection(){ return  `########################################################################################################################################\n\n\n\n\n\n`}
}
