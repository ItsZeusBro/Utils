    export class ProjectLiterals{

        projectMake(){
            return ``+
            this.devTestCDeps() +
            this.devTestHDeps() +
            this.devTestODeps() +
            this.prodTestCDeps() +
            this.prodTestHDeps() +
            this.prodTestODeps() +
            this.devTestCFiles() +
            this.devTestHFiles() +
            this.devTestOFiles() +
            this.prodTestCFiles() +
            this.prodTestHFiles() +
            this.prodTestOFiles() +
            this.endOfSection() +       
            this.prodTests() +
            this.prodTestsLink() +
            this.prodTestsClean() +
            this.prodTestsRun()+
            this.endOfSection()        
        }

        devTestCDeps(devTestCDeps){
            return `DEV_TEST_C_DEPS=${devTestCDeps}\n`
        }
        devTestHDeps(devTestHDeps){
            return  `DEV_TEST_H_DEPS=${devTestHDeps}\n`
        }
        devTestODeps(devTestODeps){
            return `DEV_TEST_O_DEPS=${devTestODeps}\n`
        }
        prodTestCDeps(prodTestCDeps){
            return `PROD_TEST_C_DEPS=${prodTestCDeps}\n`
        }
        prodTestHDeps(prodTestHDeps){
            return `PROD_TEST_H_DEPS=${prodTestHDeps}\n`
        }
        prodTestODeps(prodTestODeps){
            return `PROD_TEST_O_DEPS=${prodTestODeps}\n`
        }
        devTestCFiles(devTestCFiles){
            return `DEV_TEST_C_FILES=${devTestCFiles}\n`
        }
        devTestHFiles(devTestHFiles){
            return `DEV_TEST_H_FILES=${devTestHFiles}\n`
        }
        devTestOFiles(devTestOFiles){
            return `DEV_TEST_O_FILES=${devTestOFiles}\n`
        }
        prodTestCFiles(prodTestCFiles){
            return `PROD_TEST_C_FILES=${prodTestCFiles}\n`
        }
        prodTestHFiles(prodTestHFiles){
            return `PROD_TEST_H_FILES=${prodTestHFiles}\n`
        }
        prodTestOFiles(prodTestOFiles){
            return `PROD_TEST_O_FILES=${prodTestOFiles}\n\n\n`
        }
        prodTests(prodTestCDeps, prodTestHDeps){
            return `ProdTests: ${prodTestCDeps} ${prodTestHDeps}\n`+
            `${ProdTests}\n\n`
        }
        prodTestsLink(prodTestODeps, prodTestOFiles){
            return `ProdTestsLink: ${prodTestODeps}\n`+
            `\tgcc -o Prod ${prodTestOFiles}\n\n`
        }
        prodTestsClean(prodTestODeps){
            return `ProdTestsClean: ${prodTestODeps}\n`+
            `${ProdTestsClean}\n\n`
        }
        prodTestsRun(prodTestCDeps, prodTestHDeps){
            return `ProdTestsRun: ${prodTestCDeps} ${prodTestHDeps}\n`+
            `\tmake ProdTestsClean\n`+
            `\tmake ProdTests\n`+
            `\tmake ProdTestsLink\n`+
            `\t./Prod\n\n`
        }       
        endOfSection(){
            return  `########################################################################################################################################\n\n\n\n\n\n`
        }
    }    


    
    export class Literals{
        moduleMake(name, filename, dir, deps){
            var depsH=``
            var depsC=``
            var depsO=``
           for(var i = 0; i<deps.length; i++){
                depsH+=deps[i].slice(0,-1)+`h `
                depsC+=deps[i].slice(0,-1)+`c `
                depsO+=deps[i].slice(0,-1)+`o `
           }

           return ``+
            this.Path()+
            this.TestPath()+
            this.CFile()+
            this.HFile()+
            this.OFile()+
            this.TestCFile()+
            this.TestHFile()+
            this.TestOFile()+
            this.TestDrvrCFile()+
            this.TestDrvrHFile()+
            this.TestDrvrOFile()+
            this.CFilePath()+
            this.HFilePath()+
            this.OFilePath()+
            this.TestCFilePath()+
            this.TestHFilePath()+
            this.TestOFilePath()+
            this.TestDrvrCFilePath()+
            this.TestDrvrHFilePath()+
            this.TestDrvrOFilePath()+
            this.TestDrvrCFilePath()+
            this.TestDrvrHFilePath()+
            this.TestDrvrOFilePath()+
            this.prodTestCDeps()+
            this.prodTestHDeps()+
            this.prodTestODeps()+
            this.devTestCDeps()+
            this.devTestHDeps()+
            this.devTestODeps()+
            this.devTestCFiles()+
            this.devTestHFiles()+
            this.devTestOFiles()+
            this.prodTestCFiles()+
            this.prodTestHFiles()+
            this.prodTestOFiles()+
            this.devTestFiles()+
            this.devBuild()+
            this.prodBuild()+
            this.devBuildClean()+
            this.prodBuildClean()+
            this.devBuildLink()+
            this.prodBuildLink()+
            this.devBuildRun()+
            this.endOfSection()
        }
        
        path(dir, name){ return`${dir}_DIR=${name}\n` }
        testPath(dir){return `${dir}_TEST_DIR=\$\{${dir}_DIR\}Test/\n`}
        cFile(dir, fileName){ return `${dir}_C=${fileName}.c\n`}
        hFile(dir, fileName){ return `${dir}_H=${fileName}.h\n`}
        oFile(dir, fileName){ return `${dir}_O=${fileName}.o\n`}
        testCFile(dir){return `${dir}_TEST_C=Test.c\n`}
        testHFile(dir){return `${dir}_TEST_H=Test.h\n`}
        testOFile(dir){return `${dir}_TEST_O=Test.o\n`}
        testDrvrCFile(dir){return `${dir}_TEST_DRVR_C=Drvr.c\n`}
        testDrvrHFile(dir){return `${dir}_TEST_DRVR_H=Drvr.h\n`}
        testDrvrOFile(dir){return `${dir}_TEST_DRVR_O=Drvr.o\n`}
        cFilePath(dir){return `${dir}_C_PATH=\$\{${dir}_DIR\}\$\{${dir}_C\}\n`}
        hFilePath(dir){return `${dir}_H_PATH=\$\{${dir}_DIR\}\$\{${dir}_H\}\n`}
        oFilePath(dir){return `${dir}_O_PATH=\$\{${dir}_DIR\}\$\{${dir}_O\}\n`}
        testCFilePath(dir){return `${dir}_TEST_C_PATH=\$\{${dir}_TEST_DIR\}\$\{${dir}_TEST_C\}\n`}
        testHFilePath(dir){return `${dir}_TEST_H_PATH=\$\{${dir}_TEST_DIR\}\$\{${dir}_TEST_H\}\n`}
        testOFilePath(dir){return `${dir}_TEST_O_PATH=\$\{${dir}_TEST_DIR\}\$\{${dir}_TEST_O\}\n`}
        testDrvrCFilePath(dir){return `${dir}_TEST_DRVR_C_PATH=\$\{${dir}_TEST_DIR\}\$\{${dir}_TEST_DRVR_C\}\n`}
        testDrvrHFilePath(dir){return `${dir}_TEST_DRVR_H_PATH=\$\{${dir}_TEST_DIR\}\$\{${dir}_TEST_DRVR_H\}\n`}
        testDrvrOFilePath(dir){return `${dir}_TEST_DRVR_O_PATH=\$\{${dir}_TEST_DIR\}\$\{${dir}_TEST_DRVR_O\}\n`}
        testDrvrCFilePath(dir){return `${dir}_TEST_DRVR_C_PATH=\$\{${dir}_TEST_DIR\}\$\{${dir}_TEST_DRVR_C\}\n`}
        testDrvrHFilePath(dir){return `${dir}_TEST_DRVR_H_PATH=\$\{${dir}_TEST_DIR\}\$\{${dir}_TEST_DRVR_H\}\n`}
        testDrvrOFilePath(dir){return `${dir}_TEST_DRVR_O_PATH=\$\{${dir}_TEST_DIR\}\$\{${dir}_TEST_DRVR_O\}\n`}
        prodTestCDeps(dir, depsC){return `PROD_${dir}_TEST_C_DEPS=\$\{${dir}_C_PATH\} \$\{${dir}_TEST_C_PATH\} `+ depsC + `\n`}
        prodTestHDeps(dir, depsH){return `PROD_${dir}_TEST_H_DEPS=\$\{${dir}_H_PATH\} \$\{${dir}_TEST_H_PATH\} `+ depsH + `\n`}
        prodTestODeps(dir, depsO){return `PROD_${dir}_TEST_O_DEPS=\$\{${dir}_O_PATH\} \$\{${dir}_TEST_O_PATH\} `+ depsO + `\n`}
        devTestCDeps(dir, depsC){return `DEV_${dir}_TEST_C_DEPS=\$\{${dir}_C_PATH\} \$\{${dir}_TEST_C_PATH\} \$\{${dir}_TEST_DRVR_C_PATH\} `+ depsC + `\n`}
        devTestHDeps(dir, depsH){return `DEV_${dir}_TEST_H_DEPS=\$\{${dir}_H_PATH\} \$\{${dir}_TEST_H_PATH\} \$\{${dir}_TEST_DRVR_H_PATH\} `+ depsH + `\n`}
        devTestODeps(dir, depsO){return `DEV_${dir}_TEST_O_DEPS=\$\{${dir}_O_PATH\} \$\{${dir}_TEST_O_PATH\} \$\{${dir}_TEST_DRVR_O_PATH\} `+ depsO + `\n`}
        devTestCFiles(dir, depsC){ return `DEV_${dir}_TEST_C_FILES=\$\{${dir}_C_PATH\} \$\{${dir}_TEST_C_PATH\} \$\{${dir}_TEST_DRVR_C_PATH\} `+ depsC + `\n`}
        devTestHFiles(dir, depsH){ return `DEV_${dir}_TEST_H_FILES=\$\{${dir}_H_PATH\} \$\{${dir}_TEST_H_PATH\} \$\{${dir}_TEST_DRVR_H_PATH\} `+ depsH + `\n`}
        devTestOFiles(dir, depsO){ return `DEV_${dir}_TEST_O_FILES=\$\{${dir}_O_PATH\} \$\{${dir}_TEST_O_PATH\} \$\{${dir}_TEST_DRVR_O_PATH\} `+ depsO + `\n`}
        prodTestCFiles(dir, depsC){ return `PROD_${dir}_TEST_C_FILES=\$\{${dir}_C_PATH\} \$\{${dir}_TEST_C_PATH\} `+ depsC + `\n`}
        prodTestHFiles(dir, depsH){ return `PROD_${dir}_TEST_H_FILES=\$\{${dir}_H_PATH\} \$\{${dir}_TEST_H_PATH\} `+ depsH + `\n`}
        prodTestOFiles(dir, depsO){ return `PROD_${dir}_TEST_O_FILES=\$\{${dir}_O_PATH\} \$\{${dir}_TEST_O_PATH\} `+ depsO + `\n`}
        devTestFiles(dir){ return `${dir}_TEST_DEV_FILES= \$\{DEV_${dir}_TEST_C_FILES\} \$\{DEV_${dir}_TEST_H_FILES\} \$\{DEV_${dir}_TEST_O_FILES\} \n\n\n`}
        

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
        endOfSection(){
            return  `########################################################################################################################################\n\n\n\n\n\n`
        }

        devTestCDeps(dir){return `\$\{DEV_${dir}_TEST_C_DEPS\} `}
        devTestHDeps(dir){return `\$\{DEV_${dir}_TEST_H_DEPS\} `}
        devTestODeps(dir){return `\$\{DEV_${dir}_TEST_O_DEPS\} `}
        prodTestCDeps(dir){return `\$\{PROD_${dir}_TEST_C_DEPS\} `}
        prodTestHDeps(dir){return `\$\{PROD_${dir}_TEST_H_DEPS\} `}
        prodTestODeps(dir){return `\$\{PROD_${dir}_TEST_O_DEPS\} `}
        devTestCFiles(dir){return `\$\{DEV_${dir}_TEST_C_FILES\} `}
        devTestHFiles(dir){return `\$\{DEV_${dir}_TEST_H_FILES\} `}
        devTestOFiles(dir){return `\$\{DEV_${dir}_TEST_O_FILES\} `}
        prodTestCFiles(dir){return `\$\{PROD_${dir}_TEST_C_FILES\} `}
        prodTestHFiles(dir){return `\$\{PROD_${dir}_TEST_H_FILES\} `}
        prodTestOFiles(dir){return `\$\{PROD_${dir}_TEST_O_FILES\} `}
    }
   