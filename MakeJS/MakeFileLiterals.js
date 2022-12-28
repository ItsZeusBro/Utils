

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

        _devTestCDeps(dir, projVars){projVars['devTestCDeps'].push(`\$\{DEV_${dir}_TEST_C_DEPS\} `)}
        _devTestHDeps(dir, projVars){projVars['devTestHDeps'].push(`\$\{DEV_${dir}_TEST_H_DEPS\} `)}
        _devTestODeps(dir, projVars){projVars['devTestODeps'].push(`\$\{DEV_${dir}_TEST_O_DEPS\} `)}
        _prodTestCDeps(dir, projVars){projVars['prodTestCDeps'].push(`\$\{PROD_${dir}_TEST_C_DEPS\} `)}
        _prodTestHDeps(dir, projVars){projVars['prodTestHDeps'].push(`\$\{PROD_${dir}_TEST_H_DEPS\} `)}
        _prodTestODeps(dir, projVars){projVars['prodTestODeps'].push(`\$\{PROD_${dir}_TEST_O_DEPS\} `)}
        _devTestCFiles(dir, projVars){projVars['devTestCFiles'].push(`\$\{DEV_${dir}_TEST_C_FILES\} `)}
        _devTestHFiles(dir, projVars){projVars['devTestHFiles'].push(`\$\{DEV_${dir}_TEST_H_FILES\} `)}
        _devTestOFiles(dir, projVars){projVars['devTestOFiles'].push(`\$\{DEV_${dir}_TEST_O_FILES\} `)}
        _prodTestCFiles(dir, projVars){projVars['prodTestCFiles'].push(`\$\{PROD_${dir}_TEST_C_FILES\} `)}
        _prodTestHFiles(dir, projVars){projVars['prodTestHFiles'].push(`\$\{PROD_${dir}_TEST_H_FILES\} `)}
        _prodTestOFiles(dir, projVars){projVars['prodTestOFiles'].push(`\$\{PROD_${dir}_TEST_O_FILES\} `)}

        update(dir, projVars){
            this._devTestCDeps(dir, projVars);
            this._devTestHDeps(dir, projVars);
            this._devTestODeps(dir, projVars);
            this._prodTestCDeps(dir, projVars);
            this._prodTestHDeps(dir, projVars);
            this._prodTestODeps(dir, projVars);
            this._devTestCFiles(dir, projVars);
            this._devTestHFiles(dir, projVars);
            this._devTestOFiles(dir, projVars);
            this._prodTestCFiles(dir, projVars);
            this._prodTestHFiles(dir, projVars);
            this._prodTestOFiles(dir, projVars);

        }
        endOfSection(){ return `########################################################################################################################################\n\n\n\n\n\n`}
    }

    export class ProjectLevelMake{
        prodTests(projVars){ return `ProdTests: ${projVars['prodTestCDeps']} ${projVars['prodTestHDeps']}\n`+ `\t${projVars['prodTests'].join('\t')}\n\n`}
        prodTestsLink(projVars){ return `ProdTestsLink: ${projVars['prodTestODeps']}\n`+`\tgcc -o Prod ${projVars['prodTestOFiles']}\n\n`}
        prodTestsClean(projVars){ return `ProdTestsClean: ${projVars['prodTestODeps']}\n`+`\t${projVars['prodTestsClean'].join('\t')}\n\n`}
        prodTestsRun(projVars){
            return `ProdTestsRun: ${projVars['prodTestCDeps']} ${projVars['prodTestHDeps']}\n`+
            `\tmake ProdTestsClean\n`+
            `\tmake ProdTests\n`+
            `\tmake ProdTestsLink\n`+
            `\t./Prod\n\n`
        }

        _prodTests(dir, projVars){projVars['prodTests'].push(`make Prod${dir.split('/').slice(1).slice(0,-1).join('')}\n`)}
        _prodTestsClean(dir, projVars){projVars['prodTestsClean'].push(`make Prod${dir.split('/').slice(1).slice(0,-1).join('')}Clean\n`)}
        

        update(dir, projVars){
            this._prodTests(dir, projVars);
            this._prodTestsClean(dir, projVars);
        }

        endOfSection(){ return `########################################################################################################################################\n\n\n\n\n\n`}
    }    
    
    export class ModuleLevelMake{

        devBuild(dir, name){ 
            return `Dev${name.split('/').slice(1).join('')}: \$\{DEV_${dir}_TEST_C_DEPS\} \$\{DEV_${dir}_TEST_H_DEPS\}\n` +
            `\tcd \$\{${dir}_DIR\}; gcc -c \$\{${dir}_C\}\n` +
            `\tcd \$\{${dir}_TEST_DIR\}; gcc -c \$\{${dir}_TEST_C\} \$\{${dir}_TEST_DRVR_C\}\n\n`
        }
        prodBuild(dir, name){
            return `Prod${name.split('/').slice(1).join('')}: \$\{PROD_${dir}_TEST_C_DEPS\} \$\{PROD_${dir}_TEST_H_DEPS\}\n`+
            `\tcd \$\{${dir}_DIR\}; gcc -c \$\{${dir}_C\}\n`+
            `\tcd \$\{${dir}_TEST_DIR\}; gcc -c \$\{${dir}_TEST_C\}\n\n`
        }
        devBuildClean(dir, name){
            return `Dev${name.split('/').slice(1).join('')}Clean: \$\{DEV_${dir}_TEST_O_DEPS\}\n`+
            `\tcd \$\{${dir}_DIR\}; rm -f \$\{${dir}_O\}\n`+
            `\tcd \$\{${dir}_TEST_DIR\}; rm -f \$\{${dir}_TEST_O\} \$\{${dir}_TEST_DRVR_O\}\n\n`
        }
        prodBuildClean(dir, name){
            return `Prod${name.split('/').slice(1).join('')}Clean: \$\{PROD_${dir}_TEST_O_DEPS\}\n`+
            `\tcd \$\{${dir}_DIR\}; rm -f \$\{${dir}_O\}\n`+
            `\tcd \$\{${dir}_TEST_DIR\}; rm -f \$\{${dir}_TEST_O\}\n\n`
        }
        devBuildLink(dir, name){
            return `Dev${name.split('/').slice(1).join('')}Link: \$\{DEV_${dir}_TEST_O_DEPS\}\n`+
            `\t(gcc -o devTest \$\{${dir}_O_PATH\} \$\{${dir}_TEST_O_PATH\} \$\{${dir}_TEST_DRVR_O_PATH\})\n\n`
        }
        prodBuildLink(dir, name){
            return `Prod${name.split('/').slice(1).join('')}Link: \$\{PROD_${dir}_TEST_O_DEPS\}\n`+
            `\t(gcc -o prodTest \$\{${dir}_O_PATH\} \$\{${dir}_TEST_O_PATH\})\n\n`
        }
        devBuildRun(dir, name){
            return `Dev${name.split('/').slice(1).join('')}Run: \$\{DEV_${dir}_TEST_O_DEPS\} \$\{DEV_${dir}_TEST_C_DEPS\} \$\{DEV_${dir}_TEST_H_DEPS\}\n`+
            `\tmake Dev${name.split('/').slice(1).join('')}Clean\n`+
            `\tmake Dev${name.split('/').slice(1).join('')}\n`+
            `\tmake Dev${name.split('/').slice(1).join('')}Link\n`+
            `\t./devTest\n\n`
        }
        endOfSection(){ return `########################################################################################################################################\n\n\n\n\n\n`}
    }

    export class ModuleLevelVars{
        path(dir, name){ return`${dir}_DIR=${name}\n` }
        testPath(dir){ return `${dir}_TEST_DIR=\$\{${dir}_DIR\}Test/\n`}
        cFile(dir, fileName){ return `${dir}_C=${fileName}.c\n`}
        hFile(dir, fileName){ return `${dir}_H=${fileName}.h\n`}
        oFile(dir, fileName){ return `${dir}_O=${fileName}.o\n`}
        testCFile(dir){ return `${dir}_TEST_C=Test.c\n`}
        testHFile(dir){ return `${dir}_TEST_H=Test.h\n`}
        testOFile(dir){ return `${dir}_TEST_O=Test.o\n`}
        testDrvrCFile(dir){ return `${dir}_TEST_DRVR_C=Drvr.c\n`}
        testDrvrHFile(dir){ return `${dir}_TEST_DRVR_H=Drvr.h\n`}
        testDrvrOFile(dir){ return `${dir}_TEST_DRVR_O=Drvr.o\n`}
        cFilePath(dir){ return `${dir}_C_PATH=\$\{${dir}_DIR\}\$\{${dir}_C\}\n`}
        hFilePath(dir){ return `${dir}_H_PATH=\$\{${dir}_DIR\}\$\{${dir}_H\}\n`}
        oFilePath(dir){ return `${dir}_O_PATH=\$\{${dir}_DIR\}\$\{${dir}_O\}\n`}
        testCFilePath(dir){ return `${dir}_TEST_C_PATH=\$\{${dir}_TEST_DIR\}\$\{${dir}_TEST_C\}\n`}
        testHFilePath(dir){ return `${dir}_TEST_H_PATH=\$\{${dir}_TEST_DIR\}\$\{${dir}_TEST_H\}\n`}
        testOFilePath(dir){ return `${dir}_TEST_O_PATH=\$\{${dir}_TEST_DIR\}\$\{${dir}_TEST_O\}\n`}
        testDrvrCFilePath(dir){ return `${dir}_TEST_DRVR_C_PATH=\$\{${dir}_TEST_DIR\}\$\{${dir}_TEST_DRVR_C\}\n`}
        testDrvrHFilePath(dir){ return `${dir}_TEST_DRVR_H_PATH=\$\{${dir}_TEST_DIR\}\$\{${dir}_TEST_DRVR_H\}\n`}
        testDrvrOFilePath(dir){ return `${dir}_TEST_DRVR_O_PATH=\$\{${dir}_TEST_DIR\}\$\{${dir}_TEST_DRVR_O\}\n`}
        testDrvrCFilePath(dir){ return `${dir}_TEST_DRVR_C_PATH=\$\{${dir}_TEST_DIR\}\$\{${dir}_TEST_DRVR_C\}\n`}
        testDrvrHFilePath(dir){ return `${dir}_TEST_DRVR_H_PATH=\$\{${dir}_TEST_DIR\}\$\{${dir}_TEST_DRVR_H\}\n`}
        testDrvrOFilePath(dir){ return `${dir}_TEST_DRVR_O_PATH=\$\{${dir}_TEST_DIR\}\$\{${dir}_TEST_DRVR_O\}\n`}
        prodTestCDeps(dir, depsC){ return `PROD_${dir}_TEST_C_DEPS=\$\{${dir}_C_PATH\} \$\{${dir}_TEST_C_PATH\} `+ depsC + `\n`}
        prodTestHDeps(dir, depsH){ return `PROD_${dir}_TEST_H_DEPS=\$\{${dir}_H_PATH\} \$\{${dir}_TEST_H_PATH\} `+ depsH + `\n`}
        prodTestODeps(dir, depsO){ return `PROD_${dir}_TEST_O_DEPS=\$\{${dir}_O_PATH\} \$\{${dir}_TEST_O_PATH\} `+ depsO + `\n`}
        devTestCDeps(dir, depsC){ return `DEV_${dir}_TEST_C_DEPS=\$\{${dir}_C_PATH\} \$\{${dir}_TEST_C_PATH\} \$\{${dir}_TEST_DRVR_C_PATH\} `+ depsC + `\n`}
        devTestHDeps(dir, depsH){ return `DEV_${dir}_TEST_H_DEPS=\$\{${dir}_H_PATH\} \$\{${dir}_TEST_H_PATH\} \$\{${dir}_TEST_DRVR_H_PATH\} `+ depsH + `\n`}
        devTestODeps(dir, depsO){ return `DEV_${dir}_TEST_O_DEPS=\$\{${dir}_O_PATH\} \$\{${dir}_TEST_O_PATH\} \$\{${dir}_TEST_DRVR_O_PATH\} `+ depsO + `\n`}
        devTestCFiles(dir, depsC){ return `DEV_${dir}_TEST_C_FILES=\$\{${dir}_C_PATH\} \$\{${dir}_TEST_C_PATH\} \$\{${dir}_TEST_DRVR_C_PATH\} `+ depsC + `\n`}
        devTestHFiles(dir, depsH){ return `DEV_${dir}_TEST_H_FILES=\$\{${dir}_H_PATH\} \$\{${dir}_TEST_H_PATH\} \$\{${dir}_TEST_DRVR_H_PATH\} `+ depsH + `\n`}
        devTestOFiles(dir, depsO){ return `DEV_${dir}_TEST_O_FILES=\$\{${dir}_O_PATH\} \$\{${dir}_TEST_O_PATH\} \$\{${dir}_TEST_DRVR_O_PATH\} `+ depsO + `\n`}
        prodTestCFiles(dir, depsC){ return `PROD_${dir}_TEST_C_FILES=\$\{${dir}_C_PATH\} \$\{${dir}_TEST_C_PATH\} `+ depsC + `\n`}
        prodTestHFiles(dir, depsH){ return `PROD_${dir}_TEST_H_FILES=\$\{${dir}_H_PATH\} \$\{${dir}_TEST_H_PATH\} `+ depsH + `\n`}
        prodTestOFiles(dir, depsO){ return `PROD_${dir}_TEST_O_FILES=\$\{${dir}_O_PATH\} \$\{${dir}_TEST_O_PATH\} `+ depsO + `\n`}
        devTestFiles(dir){ return `${dir}_TEST_DEV_FILES= \$\{DEV_${dir}_TEST_C_FILES\} \$\{DEV_${dir}_TEST_H_FILES\} \$\{DEV_${dir}_TEST_O_FILES\} \n\n\n`}
        endOfSection(){ return  `########################################################################################################################################\n\n\n\n\n\n`}
    }
   