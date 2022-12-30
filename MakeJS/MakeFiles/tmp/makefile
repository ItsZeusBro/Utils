CTOOLS_DIR=./CTools/
CTOOLS_TEST_DIR=./CTools/Test/
CTOOLS_C=CTools.c
CTOOLS_H=CTools.h
CTOOLS_O=CTools.o
CTOOLS_TEST_C=Test.c
CTOOLS_TEST_H=Test.h
CTOOLS_TEST_O=Test.o
CTOOLS_TEST_DRVR_C=Drvr.c
CTOOLS_TEST_DRVR_H=Drvr.h
CTOOLS_TEST_DRVR_O=Drvr.o
CTOOLS_C_PATH=./CTools/CTools.c
CTOOLS_H_PATH=./CTools/CTools.h
CTOOLS_O_PATH=./CTools/CTools.o
CTOOLS_TEST_C_PATH=./CTools/Test/Test.c
CTOOLS_TEST_H_PATH=./CTools/Test/Test.h
CTOOLS_TEST_O_PATH=./CTools/Test/Test.o
CTOOLS_TEST_DRVR_C_PATH=./CTools/Test/Drvr.c
CTOOLS_TEST_DRVR_H_PATH=./CTools/Test/Drvr.h
CTOOLS_TEST_DRVR_O_PATH=./CTools/Test/Drvr.o
CTOOLS_TEST_DRVR_C_PATH=./CTools/Test/Drvr.c
CTOOLS_TEST_DRVR_H_PATH=./CTools/Test/Drvr.h
CTOOLS_TEST_DRVR_O_PATH=./CTools/Test/Drvr.o
PROD_CTOOLS_TEST_C_DEPS=./CTools/CTools.c ./CTools/Test/Test.c 
PROD_CTOOLS_TEST_H_DEPS=./CTools/CTools.h ./CTools/Test/Test.h 
PROD_CTOOLS_TEST_O_DEPS=./CTools/CTools.o ./CTools/Test/Test.o 
DEV_CTOOLS_TEST_C_DEPS=./CTools/CTools.c ./CTools/Test/Test.c ./CTools/Test/Drvr.c 
DEV_CTOOLS_TEST_H_DEPS=./CTools/CTools.h ./CTools/Test/Test.h ./CTools/Test/Drvr.h 
DEV_CTOOLS_TEST_O_DEPS=./CTools/CTools.o ./CTools/Test/Test.o ./CTools/Test/Drvr.o 
DEV_CTOOLS_TEST_C_FILES=./CTools/CTools.c ./CTools/Test/Test.c ./CTools/Test/Drvr.c 
DEV_CTOOLS_TEST_H_FILES=./CTools/CTools.h ./CTools/Test/Test.h ./CTools/Test/Drvr.h 
DEV_CTOOLS_TEST_O_FILES=./CTools/CTools.o ./CTools/Test/Test.o ./CTools/Test/Drvr.o 
PROD_CTOOLS_TEST_C_FILES=./CTools/CTools.c ./CTools/Test/Test.c 
PROD_CTOOLS_TEST_H_FILES=./CTools/CTools.h ./CTools/Test/Test.h 
PROD_CTOOLS_TEST_O_FILES=./CTools/CTools.o ./CTools/Test/Test.o 
CTOOLS_TEST_DEV_FILES= ./CTools/CTools.c ./CTools/Test/Test.c ./CTools/Test/Drvr.c  ./CTools/CTools.h ./CTools/Test/Test.h ./CTools/Test/Drvr.h  ./CTools/CTools.o ./CTools/Test/Test.o ./CTools/Test/Drvr.o  


DevCTools: ./CTools/CTools.c ./CTools/Test/Test.c ./CTools/Test/Drvr.c  ./CTools/CTools.h ./CTools/Test/Test.h ./CTools/Test/Drvr.h 
	cd ./CTools/; gcc -c CTools.c
	cd ./CTools/Test/; gcc -c Test.c Drvr.c

ProdCTools: ./CTools/CTools.c ./CTools/Test/Test.c  ./CTools/CTools.h ./CTools/Test/Test.h 
	cd ./CTools/; gcc -c CTools.c
	cd ./CTools/Test/; gcc -c Test.c

DevCToolsClean: ./CTools/CTools.o ./CTools/Test/Test.o ./CTools/Test/Drvr.o 
	cd ./CTools/; rm -f CTools.o
	cd ./CTools/Test/; rm -f Test.o Drvr.o

ProdCToolsClean: ./CTools/CTools.o ./CTools/Test/Test.o 
	cd ./CTools/; rm -f CTools.o
	cd ./CTools/Test/; rm -f Test.o

DevCToolsLink: ./CTools/CTools.o ./CTools/Test/Test.o ./CTools/Test/Drvr.o 
	(gcc -o devTest ./CTools/CTools.o ./CTools/Test/Test.o ./CTools/Test/Drvr.o)

ProdCToolsLink: ./CTools/CTools.o ./CTools/Test/Test.o 
	(gcc -o prodTest ./CTools/CTools.o ./CTools/Test/Test.o)

DevCToolsRun: ./CTools/CTools.o ./CTools/Test/Test.o ./CTools/Test/Drvr.o  ./CTools/CTools.c ./CTools/Test/Test.c ./CTools/Test/Drvr.c  ./CTools/CTools.h ./CTools/Test/Test.h ./CTools/Test/Drvr.h 
	make DevCToolsClean
	make DevCTools
	make DevCToolsLink
	./devTest

########################################################################################################################################

DEV_TEST_C_DEPS=./CTools/CTools.c ./CTools/Test/Test.c ./CTools/Test/Drvr.c   
DEV_TEST_H_DEPS=./CTools/CTools.h ./CTools/Test/Test.h ./CTools/Test/Drvr.h   
DEV_TEST_O_DEPS=./CTools/CTools.o ./CTools/Test/Test.o ./CTools/Test/Drvr.o   
PROD_TEST_C_DEPS=./CTools/CTools.c ./CTools/Test/Test.c   
PROD_TEST_H_DEPS=./CTools/CTools.h ./CTools/Test/Test.h   
PROD_TEST_O_DEPS=./CTools/CTools.o ./CTools/Test/Test.o   
DEV_TEST_C_FILES=./CTools/CTools.c ./CTools/Test/Test.c ./CTools/Test/Drvr.c   
DEV_TEST_H_FILES=./CTools/CTools.h ./CTools/Test/Test.h ./CTools/Test/Drvr.h   
DEV_TEST_O_FILES=./CTools/CTools.o ./CTools/Test/Test.o ./CTools/Test/Drvr.o   
PROD_TEST_C_FILES=./CTools/CTools.c ./CTools/Test/Test.c   
PROD_TEST_H_FILES=./CTools/CTools.h ./CTools/Test/Test.h   
PROD_TEST_O_FILES=./CTools/CTools.o ./CTools/Test/Test.o   


########################################################################################################################################

ProdTests: ./CTools/CTools.c ./CTools/Test/Test.c     ./CTools/CTools.h ./CTools/Test/Test.h    
	make ProdCTools
	make ProdCToolsAutomata


ProdTestsLink: ./CTools/CTools.o ./CTools/Test/Test.o    
	gcc -o Prod ./CTools/CTools.o ./CTools/Test/Test.o    

ProdTestsClean: ./CTools/CTools.o ./CTools/Test/Test.o    
	make ProdCToolsClean
	make ProdCToolsAutomataClean


ProdTestsRun: ./CTools/CTools.c ./CTools/Test/Test.c     ./CTools/CTools.h ./CTools/Test/Test.h    
	make ProdTestsClean
	make ProdTests
	make ProdTestsLink
	./Prod

########################################################################################################################################


