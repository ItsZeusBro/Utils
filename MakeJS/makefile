../CTools/_DIR=CTools
../CTools/_TEST_DIR=${../CTools/_DIR}Test/
../CTools/_C=CTools.c.c
../CTools/_H=CTools.h.h
../CTools/_O=CTools.o.o
../CTools/_TEST_C=Test.c
../CTools/_TEST_H=Test.h
../CTools/_TEST_O=Test.o
../CTools/_TEST_DRVR_C=Drvr.c
../CTools/_TEST_DRVR_H=Drvr.h
../CTools/_TEST_DRVR_O=Drvr.o
../CTools/_C_PATH=${../CTools/_DIR}${../CTools/_C}
../CTools/_H_PATH=${../CTools/_DIR}${../CTools/_H}
../CTools/_O_PATH=${../CTools/_DIR}${../CTools/_O}
../CTools/_TEST_C_PATH=${../CTools/_TEST_DIR}${../CTools/_TEST_C}
../CTools/_TEST_H_PATH=${../CTools/_TEST_DIR}${../CTools/_TEST_H}
../CTools/_TEST_O_PATH=${../CTools/_TEST_DIR}${../CTools/_TEST_O}
../CTools/_TEST_DRVR_C_PATH=${../CTools/_TEST_DIR}${../CTools/_TEST_DRVR_C}
../CTools/_TEST_DRVR_H_PATH=${../CTools/_TEST_DIR}${../CTools/_TEST_DRVR_H}
../CTools/_TEST_DRVR_O_PATH=${../CTools/_TEST_DIR}${../CTools/_TEST_DRVR_O}
../CTools/_TEST_DRVR_C_PATH=${../CTools/_TEST_DIR}${../CTools/_TEST_DRVR_C}
../CTools/_TEST_DRVR_H_PATH=${../CTools/_TEST_DIR}${../CTools/_TEST_DRVR_H}
../CTools/_TEST_DRVR_O_PATH=${../CTools/_TEST_DIR}${../CTools/_TEST_DRVR_O}
PROD_../CTools/_TEST_C_DEPS=${../CTools/_C_PATH} ${../CTools/_TEST_C_PATH} ../CTools/Automata/Automata.c ../CTools/Utils/Types/String/String.c 
PROD_../CTools/_TEST_H_DEPS=${../CTools/_H_PATH} ${../CTools/_TEST_H_PATH} ../CTools/Automata/Automata.h ../CTools/Utils/Types/String/String.h 
PROD_../CTools/_TEST_O_DEPS=${../CTools/_O_PATH} ${../CTools/_TEST_O_PATH} ../CTools/Automata/Automata.o ../CTools/Utils/Types/String/String.o 
DEV_../CTools/_TEST_C_DEPS=${../CTools/_C_PATH} ${../CTools/_TEST_C_PATH} ${../CTools/_TEST_DRVR_C_PATH} ../CTools/Automata/Automata.c ../CTools/Utils/Types/String/String.c 
DEV_../CTools/_TEST_H_DEPS=${../CTools/_H_PATH} ${../CTools/_TEST_H_PATH} ${../CTools/_TEST_DRVR_H_PATH} ../CTools/Automata/Automata.h ../CTools/Utils/Types/String/String.h 
DEV_../CTools/_TEST_O_DEPS=${../CTools/_O_PATH} ${../CTools/_TEST_O_PATH} ${../CTools/_TEST_DRVR_O_PATH} ../CTools/Automata/Automata.o ../CTools/Utils/Types/String/String.o 
DEV_../CTools/_TEST_C_FILES=${../CTools/_C_PATH} ${../CTools/_TEST_C_PATH} ${../CTools/_TEST_DRVR_C_PATH} ../CTools/Automata/Automata.c ../CTools/Utils/Types/String/String.c 
DEV_../CTools/_TEST_H_FILES=${../CTools/_H_PATH} ${../CTools/_TEST_H_PATH} ${../CTools/_TEST_DRVR_H_PATH} ../CTools/Automata/Automata.h ../CTools/Utils/Types/String/String.h 
DEV_../CTools/_TEST_O_FILES=${../CTools/_O_PATH} ${../CTools/_TEST_O_PATH} ${../CTools/_TEST_DRVR_O_PATH} ../CTools/Automata/Automata.o ../CTools/Utils/Types/String/String.o 
PROD_../CTools/_TEST_C_FILES=${../CTools/_C_PATH} ${../CTools/_TEST_C_PATH} ../CTools/Automata/Automata.c ../CTools/Utils/Types/String/String.c 
PROD_../CTools/_TEST_H_FILES=${../CTools/_H_PATH} ${../CTools/_TEST_H_PATH} ../CTools/Automata/Automata.h ../CTools/Utils/Types/String/String.h 
PROD_../CTools/_TEST_O_FILES=${../CTools/_O_PATH} ${../CTools/_TEST_O_PATH} ../CTools/Automata/Automata.o ../CTools/Utils/Types/String/String.o 
../CTools/_TEST_DEV_FILES= ${DEV_../CTools/_TEST_C_FILES} ${DEV_../CTools/_TEST_H_FILES} ${DEV_../CTools/_TEST_O_FILES} 


Dev: ${DEV_../CTools/_TEST_C_DEPS} ${DEV_../CTools/_TEST_H_DEPS}
	cd ${../CTools/_DIR}; gcc -c ${../CTools/_C}
	cd ${../CTools/_TEST_DIR}; gcc -c ${../CTools/_TEST_C} ${../CTools/_TEST_DRVR_C}

Prod: ${PROD_../CTools/_TEST_C_DEPS} ${PROD_../CTools/_TEST_H_DEPS}
	cd ${../CTools/_DIR}; gcc -c ${../CTools/_C}
	cd ${../CTools/_TEST_DIR}; gcc -c ${../CTools/_TEST_C}

DevClean: ${DEV_../CTools/_TEST_O_DEPS}
	cd ${../CTools/_DIR}; rm -f ${../CTools/_O}
	cd ${../CTools/_TEST_DIR}; rm -f ${../CTools/_TEST_O} ${../CTools/_TEST_DRVR_O}

ProdClean: ${PROD_../CTools/_TEST_O_DEPS}
	cd ${../CTools/_DIR}; rm -f ${../CTools/_O}
	cd ${../CTools/_TEST_DIR}; rm -f ${../CTools/_TEST_O}

DevLink: ${DEV_../CTools/_TEST_O_DEPS}
	(gcc -o devTest ${../CTools/_O_PATH} ${../CTools/_TEST_O_PATH} ${../CTools/_TEST_DRVR_O_PATH})

ProdLink: ${PROD_../CTools/_TEST_O_DEPS}
	(gcc -o prodTest ${../CTools/_O_PATH} ${../CTools/_TEST_O_PATH})

DevRun: ${DEV_../CTools/_TEST_O_DEPS} ${DEV_../CTools/_TEST_C_DEPS} ${DEV_../CTools/_TEST_H_DEPS}
	make DevClean
	make Dev
	make DevLink
	./devTest

########################################################################################################################################





../CTools/Automata/_DIR=Automata
../CTools/Automata/_TEST_DIR=${../CTools/Automata/_DIR}Test/
../CTools/Automata/_C=Automata.c.c
../CTools/Automata/_H=Automata.h.h
../CTools/Automata/_O=Automata.o.o
../CTools/Automata/_TEST_C=Test.c
../CTools/Automata/_TEST_H=Test.h
../CTools/Automata/_TEST_O=Test.o
../CTools/Automata/_TEST_DRVR_C=Drvr.c
../CTools/Automata/_TEST_DRVR_H=Drvr.h
../CTools/Automata/_TEST_DRVR_O=Drvr.o
../CTools/Automata/_C_PATH=${../CTools/Automata/_DIR}${../CTools/Automata/_C}
../CTools/Automata/_H_PATH=${../CTools/Automata/_DIR}${../CTools/Automata/_H}
../CTools/Automata/_O_PATH=${../CTools/Automata/_DIR}${../CTools/Automata/_O}
../CTools/Automata/_TEST_C_PATH=${../CTools/Automata/_TEST_DIR}${../CTools/Automata/_TEST_C}
../CTools/Automata/_TEST_H_PATH=${../CTools/Automata/_TEST_DIR}${../CTools/Automata/_TEST_H}
../CTools/Automata/_TEST_O_PATH=${../CTools/Automata/_TEST_DIR}${../CTools/Automata/_TEST_O}
../CTools/Automata/_TEST_DRVR_C_PATH=${../CTools/Automata/_TEST_DIR}${../CTools/Automata/_TEST_DRVR_C}
../CTools/Automata/_TEST_DRVR_H_PATH=${../CTools/Automata/_TEST_DIR}${../CTools/Automata/_TEST_DRVR_H}
../CTools/Automata/_TEST_DRVR_O_PATH=${../CTools/Automata/_TEST_DIR}${../CTools/Automata/_TEST_DRVR_O}
../CTools/Automata/_TEST_DRVR_C_PATH=${../CTools/Automata/_TEST_DIR}${../CTools/Automata/_TEST_DRVR_C}
../CTools/Automata/_TEST_DRVR_H_PATH=${../CTools/Automata/_TEST_DIR}${../CTools/Automata/_TEST_DRVR_H}
../CTools/Automata/_TEST_DRVR_O_PATH=${../CTools/Automata/_TEST_DIR}${../CTools/Automata/_TEST_DRVR_O}
PROD_../CTools/Automata/_TEST_C_DEPS=${../CTools/Automata/_C_PATH} ${../CTools/Automata/_TEST_C_PATH} ../CTools/Utils/Types/String/String.c 
PROD_../CTools/Automata/_TEST_H_DEPS=${../CTools/Automata/_H_PATH} ${../CTools/Automata/_TEST_H_PATH} ../CTools/Utils/Types/String/String.h 
PROD_../CTools/Automata/_TEST_O_DEPS=${../CTools/Automata/_O_PATH} ${../CTools/Automata/_TEST_O_PATH} ../CTools/Utils/Types/String/String.o 
DEV_../CTools/Automata/_TEST_C_DEPS=${../CTools/Automata/_C_PATH} ${../CTools/Automata/_TEST_C_PATH} ${../CTools/Automata/_TEST_DRVR_C_PATH} ../CTools/Utils/Types/String/String.c 
DEV_../CTools/Automata/_TEST_H_DEPS=${../CTools/Automata/_H_PATH} ${../CTools/Automata/_TEST_H_PATH} ${../CTools/Automata/_TEST_DRVR_H_PATH} ../CTools/Utils/Types/String/String.h 
DEV_../CTools/Automata/_TEST_O_DEPS=${../CTools/Automata/_O_PATH} ${../CTools/Automata/_TEST_O_PATH} ${../CTools/Automata/_TEST_DRVR_O_PATH} ../CTools/Utils/Types/String/String.o 
DEV_../CTools/Automata/_TEST_C_FILES=${../CTools/Automata/_C_PATH} ${../CTools/Automata/_TEST_C_PATH} ${../CTools/Automata/_TEST_DRVR_C_PATH} ../CTools/Utils/Types/String/String.c 
DEV_../CTools/Automata/_TEST_H_FILES=${../CTools/Automata/_H_PATH} ${../CTools/Automata/_TEST_H_PATH} ${../CTools/Automata/_TEST_DRVR_H_PATH} ../CTools/Utils/Types/String/String.h 
DEV_../CTools/Automata/_TEST_O_FILES=${../CTools/Automata/_O_PATH} ${../CTools/Automata/_TEST_O_PATH} ${../CTools/Automata/_TEST_DRVR_O_PATH} ../CTools/Utils/Types/String/String.o 
PROD_../CTools/Automata/_TEST_C_FILES=${../CTools/Automata/_C_PATH} ${../CTools/Automata/_TEST_C_PATH} ../CTools/Utils/Types/String/String.c 
PROD_../CTools/Automata/_TEST_H_FILES=${../CTools/Automata/_H_PATH} ${../CTools/Automata/_TEST_H_PATH} ../CTools/Utils/Types/String/String.h 
PROD_../CTools/Automata/_TEST_O_FILES=${../CTools/Automata/_O_PATH} ${../CTools/Automata/_TEST_O_PATH} ../CTools/Utils/Types/String/String.o 
../CTools/Automata/_TEST_DEV_FILES= ${DEV_../CTools/Automata/_TEST_C_FILES} ${DEV_../CTools/Automata/_TEST_H_FILES} ${DEV_../CTools/Automata/_TEST_O_FILES} 


Dev: ${DEV_../CTools/Automata/_TEST_C_DEPS} ${DEV_../CTools/Automata/_TEST_H_DEPS}
	cd ${../CTools/Automata/_DIR}; gcc -c ${../CTools/Automata/_C}
	cd ${../CTools/Automata/_TEST_DIR}; gcc -c ${../CTools/Automata/_TEST_C} ${../CTools/Automata/_TEST_DRVR_C}

Prod: ${PROD_../CTools/Automata/_TEST_C_DEPS} ${PROD_../CTools/Automata/_TEST_H_DEPS}
	cd ${../CTools/Automata/_DIR}; gcc -c ${../CTools/Automata/_C}
	cd ${../CTools/Automata/_TEST_DIR}; gcc -c ${../CTools/Automata/_TEST_C}

DevClean: ${DEV_../CTools/Automata/_TEST_O_DEPS}
	cd ${../CTools/Automata/_DIR}; rm -f ${../CTools/Automata/_O}
	cd ${../CTools/Automata/_TEST_DIR}; rm -f ${../CTools/Automata/_TEST_O} ${../CTools/Automata/_TEST_DRVR_O}

ProdClean: ${PROD_../CTools/Automata/_TEST_O_DEPS}
	cd ${../CTools/Automata/_DIR}; rm -f ${../CTools/Automata/_O}
	cd ${../CTools/Automata/_TEST_DIR}; rm -f ${../CTools/Automata/_TEST_O}

DevLink: ${DEV_../CTools/Automata/_TEST_O_DEPS}
	(gcc -o devTest ${../CTools/Automata/_O_PATH} ${../CTools/Automata/_TEST_O_PATH} ${../CTools/Automata/_TEST_DRVR_O_PATH})

ProdLink: ${PROD_../CTools/Automata/_TEST_O_DEPS}
	(gcc -o prodTest ${../CTools/Automata/_O_PATH} ${../CTools/Automata/_TEST_O_PATH})

DevRun: ${DEV_../CTools/Automata/_TEST_O_DEPS} ${DEV_../CTools/Automata/_TEST_C_DEPS} ${DEV_../CTools/Automata/_TEST_H_DEPS}
	make DevClean
	make Dev
	make DevLink
	./devTest

########################################################################################################################################





../CTools/Combinatorics/_DIR=Combinatorics
../CTools/Combinatorics/_TEST_DIR=${../CTools/Combinatorics/_DIR}Test/
../CTools/Combinatorics/_C=Combinatorics.c.c
../CTools/Combinatorics/_H=Combinatorics.h.h
../CTools/Combinatorics/_O=Combinatorics.o.o
../CTools/Combinatorics/_TEST_C=Test.c
../CTools/Combinatorics/_TEST_H=Test.h
../CTools/Combinatorics/_TEST_O=Test.o
../CTools/Combinatorics/_TEST_DRVR_C=Drvr.c
../CTools/Combinatorics/_TEST_DRVR_H=Drvr.h
../CTools/Combinatorics/_TEST_DRVR_O=Drvr.o
../CTools/Combinatorics/_C_PATH=${../CTools/Combinatorics/_DIR}${../CTools/Combinatorics/_C}
../CTools/Combinatorics/_H_PATH=${../CTools/Combinatorics/_DIR}${../CTools/Combinatorics/_H}
../CTools/Combinatorics/_O_PATH=${../CTools/Combinatorics/_DIR}${../CTools/Combinatorics/_O}
../CTools/Combinatorics/_TEST_C_PATH=${../CTools/Combinatorics/_TEST_DIR}${../CTools/Combinatorics/_TEST_C}
../CTools/Combinatorics/_TEST_H_PATH=${../CTools/Combinatorics/_TEST_DIR}${../CTools/Combinatorics/_TEST_H}
../CTools/Combinatorics/_TEST_O_PATH=${../CTools/Combinatorics/_TEST_DIR}${../CTools/Combinatorics/_TEST_O}
../CTools/Combinatorics/_TEST_DRVR_C_PATH=${../CTools/Combinatorics/_TEST_DIR}${../CTools/Combinatorics/_TEST_DRVR_C}
../CTools/Combinatorics/_TEST_DRVR_H_PATH=${../CTools/Combinatorics/_TEST_DIR}${../CTools/Combinatorics/_TEST_DRVR_H}
../CTools/Combinatorics/_TEST_DRVR_O_PATH=${../CTools/Combinatorics/_TEST_DIR}${../CTools/Combinatorics/_TEST_DRVR_O}
../CTools/Combinatorics/_TEST_DRVR_C_PATH=${../CTools/Combinatorics/_TEST_DIR}${../CTools/Combinatorics/_TEST_DRVR_C}
../CTools/Combinatorics/_TEST_DRVR_H_PATH=${../CTools/Combinatorics/_TEST_DIR}${../CTools/Combinatorics/_TEST_DRVR_H}
../CTools/Combinatorics/_TEST_DRVR_O_PATH=${../CTools/Combinatorics/_TEST_DIR}${../CTools/Combinatorics/_TEST_DRVR_O}
PROD_../CTools/Combinatorics/_TEST_C_DEPS=${../CTools/Combinatorics/_C_PATH} ${../CTools/Combinatorics/_TEST_C_PATH} 
PROD_../CTools/Combinatorics/_TEST_H_DEPS=${../CTools/Combinatorics/_H_PATH} ${../CTools/Combinatorics/_TEST_H_PATH} 
PROD_../CTools/Combinatorics/_TEST_O_DEPS=${../CTools/Combinatorics/_O_PATH} ${../CTools/Combinatorics/_TEST_O_PATH} 
DEV_../CTools/Combinatorics/_TEST_C_DEPS=${../CTools/Combinatorics/_C_PATH} ${../CTools/Combinatorics/_TEST_C_PATH} ${../CTools/Combinatorics/_TEST_DRVR_C_PATH} 
DEV_../CTools/Combinatorics/_TEST_H_DEPS=${../CTools/Combinatorics/_H_PATH} ${../CTools/Combinatorics/_TEST_H_PATH} ${../CTools/Combinatorics/_TEST_DRVR_H_PATH} 
DEV_../CTools/Combinatorics/_TEST_O_DEPS=${../CTools/Combinatorics/_O_PATH} ${../CTools/Combinatorics/_TEST_O_PATH} ${../CTools/Combinatorics/_TEST_DRVR_O_PATH} 
DEV_../CTools/Combinatorics/_TEST_C_FILES=${../CTools/Combinatorics/_C_PATH} ${../CTools/Combinatorics/_TEST_C_PATH} ${../CTools/Combinatorics/_TEST_DRVR_C_PATH} 
DEV_../CTools/Combinatorics/_TEST_H_FILES=${../CTools/Combinatorics/_H_PATH} ${../CTools/Combinatorics/_TEST_H_PATH} ${../CTools/Combinatorics/_TEST_DRVR_H_PATH} 
DEV_../CTools/Combinatorics/_TEST_O_FILES=${../CTools/Combinatorics/_O_PATH} ${../CTools/Combinatorics/_TEST_O_PATH} ${../CTools/Combinatorics/_TEST_DRVR_O_PATH} 
PROD_../CTools/Combinatorics/_TEST_C_FILES=${../CTools/Combinatorics/_C_PATH} ${../CTools/Combinatorics/_TEST_C_PATH} 
PROD_../CTools/Combinatorics/_TEST_H_FILES=${../CTools/Combinatorics/_H_PATH} ${../CTools/Combinatorics/_TEST_H_PATH} 
PROD_../CTools/Combinatorics/_TEST_O_FILES=${../CTools/Combinatorics/_O_PATH} ${../CTools/Combinatorics/_TEST_O_PATH} 
../CTools/Combinatorics/_TEST_DEV_FILES= ${DEV_../CTools/Combinatorics/_TEST_C_FILES} ${DEV_../CTools/Combinatorics/_TEST_H_FILES} ${DEV_../CTools/Combinatorics/_TEST_O_FILES} 


Dev: ${DEV_../CTools/Combinatorics/_TEST_C_DEPS} ${DEV_../CTools/Combinatorics/_TEST_H_DEPS}
	cd ${../CTools/Combinatorics/_DIR}; gcc -c ${../CTools/Combinatorics/_C}
	cd ${../CTools/Combinatorics/_TEST_DIR}; gcc -c ${../CTools/Combinatorics/_TEST_C} ${../CTools/Combinatorics/_TEST_DRVR_C}

Prod: ${PROD_../CTools/Combinatorics/_TEST_C_DEPS} ${PROD_../CTools/Combinatorics/_TEST_H_DEPS}
	cd ${../CTools/Combinatorics/_DIR}; gcc -c ${../CTools/Combinatorics/_C}
	cd ${../CTools/Combinatorics/_TEST_DIR}; gcc -c ${../CTools/Combinatorics/_TEST_C}

DevClean: ${DEV_../CTools/Combinatorics/_TEST_O_DEPS}
	cd ${../CTools/Combinatorics/_DIR}; rm -f ${../CTools/Combinatorics/_O}
	cd ${../CTools/Combinatorics/_TEST_DIR}; rm -f ${../CTools/Combinatorics/_TEST_O} ${../CTools/Combinatorics/_TEST_DRVR_O}

ProdClean: ${PROD_../CTools/Combinatorics/_TEST_O_DEPS}
	cd ${../CTools/Combinatorics/_DIR}; rm -f ${../CTools/Combinatorics/_O}
	cd ${../CTools/Combinatorics/_TEST_DIR}; rm -f ${../CTools/Combinatorics/_TEST_O}

DevLink: ${DEV_../CTools/Combinatorics/_TEST_O_DEPS}
	(gcc -o devTest ${../CTools/Combinatorics/_O_PATH} ${../CTools/Combinatorics/_TEST_O_PATH} ${../CTools/Combinatorics/_TEST_DRVR_O_PATH})

ProdLink: ${PROD_../CTools/Combinatorics/_TEST_O_DEPS}
	(gcc -o prodTest ${../CTools/Combinatorics/_O_PATH} ${../CTools/Combinatorics/_TEST_O_PATH})

DevRun: ${DEV_../CTools/Combinatorics/_TEST_O_DEPS} ${DEV_../CTools/Combinatorics/_TEST_C_DEPS} ${DEV_../CTools/Combinatorics/_TEST_H_DEPS}
	make DevClean
	make Dev
	make DevLink
	./devTest

########################################################################################################################################





../CTools/Crypto/_DIR=Crypto
../CTools/Crypto/_TEST_DIR=${../CTools/Crypto/_DIR}Test/
../CTools/Crypto/_C=Crypto.c.c
../CTools/Crypto/_H=Crypto.h.h
../CTools/Crypto/_O=Crypto.o.o
../CTools/Crypto/_TEST_C=Test.c
../CTools/Crypto/_TEST_H=Test.h
../CTools/Crypto/_TEST_O=Test.o
../CTools/Crypto/_TEST_DRVR_C=Drvr.c
../CTools/Crypto/_TEST_DRVR_H=Drvr.h
../CTools/Crypto/_TEST_DRVR_O=Drvr.o
../CTools/Crypto/_C_PATH=${../CTools/Crypto/_DIR}${../CTools/Crypto/_C}
../CTools/Crypto/_H_PATH=${../CTools/Crypto/_DIR}${../CTools/Crypto/_H}
../CTools/Crypto/_O_PATH=${../CTools/Crypto/_DIR}${../CTools/Crypto/_O}
../CTools/Crypto/_TEST_C_PATH=${../CTools/Crypto/_TEST_DIR}${../CTools/Crypto/_TEST_C}
../CTools/Crypto/_TEST_H_PATH=${../CTools/Crypto/_TEST_DIR}${../CTools/Crypto/_TEST_H}
../CTools/Crypto/_TEST_O_PATH=${../CTools/Crypto/_TEST_DIR}${../CTools/Crypto/_TEST_O}
../CTools/Crypto/_TEST_DRVR_C_PATH=${../CTools/Crypto/_TEST_DIR}${../CTools/Crypto/_TEST_DRVR_C}
../CTools/Crypto/_TEST_DRVR_H_PATH=${../CTools/Crypto/_TEST_DIR}${../CTools/Crypto/_TEST_DRVR_H}
../CTools/Crypto/_TEST_DRVR_O_PATH=${../CTools/Crypto/_TEST_DIR}${../CTools/Crypto/_TEST_DRVR_O}
../CTools/Crypto/_TEST_DRVR_C_PATH=${../CTools/Crypto/_TEST_DIR}${../CTools/Crypto/_TEST_DRVR_C}
../CTools/Crypto/_TEST_DRVR_H_PATH=${../CTools/Crypto/_TEST_DIR}${../CTools/Crypto/_TEST_DRVR_H}
../CTools/Crypto/_TEST_DRVR_O_PATH=${../CTools/Crypto/_TEST_DIR}${../CTools/Crypto/_TEST_DRVR_O}
PROD_../CTools/Crypto/_TEST_C_DEPS=${../CTools/Crypto/_C_PATH} ${../CTools/Crypto/_TEST_C_PATH} 
PROD_../CTools/Crypto/_TEST_H_DEPS=${../CTools/Crypto/_H_PATH} ${../CTools/Crypto/_TEST_H_PATH} 
PROD_../CTools/Crypto/_TEST_O_DEPS=${../CTools/Crypto/_O_PATH} ${../CTools/Crypto/_TEST_O_PATH} 
DEV_../CTools/Crypto/_TEST_C_DEPS=${../CTools/Crypto/_C_PATH} ${../CTools/Crypto/_TEST_C_PATH} ${../CTools/Crypto/_TEST_DRVR_C_PATH} 
DEV_../CTools/Crypto/_TEST_H_DEPS=${../CTools/Crypto/_H_PATH} ${../CTools/Crypto/_TEST_H_PATH} ${../CTools/Crypto/_TEST_DRVR_H_PATH} 
DEV_../CTools/Crypto/_TEST_O_DEPS=${../CTools/Crypto/_O_PATH} ${../CTools/Crypto/_TEST_O_PATH} ${../CTools/Crypto/_TEST_DRVR_O_PATH} 
DEV_../CTools/Crypto/_TEST_C_FILES=${../CTools/Crypto/_C_PATH} ${../CTools/Crypto/_TEST_C_PATH} ${../CTools/Crypto/_TEST_DRVR_C_PATH} 
DEV_../CTools/Crypto/_TEST_H_FILES=${../CTools/Crypto/_H_PATH} ${../CTools/Crypto/_TEST_H_PATH} ${../CTools/Crypto/_TEST_DRVR_H_PATH} 
DEV_../CTools/Crypto/_TEST_O_FILES=${../CTools/Crypto/_O_PATH} ${../CTools/Crypto/_TEST_O_PATH} ${../CTools/Crypto/_TEST_DRVR_O_PATH} 
PROD_../CTools/Crypto/_TEST_C_FILES=${../CTools/Crypto/_C_PATH} ${../CTools/Crypto/_TEST_C_PATH} 
PROD_../CTools/Crypto/_TEST_H_FILES=${../CTools/Crypto/_H_PATH} ${../CTools/Crypto/_TEST_H_PATH} 
PROD_../CTools/Crypto/_TEST_O_FILES=${../CTools/Crypto/_O_PATH} ${../CTools/Crypto/_TEST_O_PATH} 
../CTools/Crypto/_TEST_DEV_FILES= ${DEV_../CTools/Crypto/_TEST_C_FILES} ${DEV_../CTools/Crypto/_TEST_H_FILES} ${DEV_../CTools/Crypto/_TEST_O_FILES} 


Dev: ${DEV_../CTools/Crypto/_TEST_C_DEPS} ${DEV_../CTools/Crypto/_TEST_H_DEPS}
	cd ${../CTools/Crypto/_DIR}; gcc -c ${../CTools/Crypto/_C}
	cd ${../CTools/Crypto/_TEST_DIR}; gcc -c ${../CTools/Crypto/_TEST_C} ${../CTools/Crypto/_TEST_DRVR_C}

Prod: ${PROD_../CTools/Crypto/_TEST_C_DEPS} ${PROD_../CTools/Crypto/_TEST_H_DEPS}
	cd ${../CTools/Crypto/_DIR}; gcc -c ${../CTools/Crypto/_C}
	cd ${../CTools/Crypto/_TEST_DIR}; gcc -c ${../CTools/Crypto/_TEST_C}

DevClean: ${DEV_../CTools/Crypto/_TEST_O_DEPS}
	cd ${../CTools/Crypto/_DIR}; rm -f ${../CTools/Crypto/_O}
	cd ${../CTools/Crypto/_TEST_DIR}; rm -f ${../CTools/Crypto/_TEST_O} ${../CTools/Crypto/_TEST_DRVR_O}

ProdClean: ${PROD_../CTools/Crypto/_TEST_O_DEPS}
	cd ${../CTools/Crypto/_DIR}; rm -f ${../CTools/Crypto/_O}
	cd ${../CTools/Crypto/_TEST_DIR}; rm -f ${../CTools/Crypto/_TEST_O}

DevLink: ${DEV_../CTools/Crypto/_TEST_O_DEPS}
	(gcc -o devTest ${../CTools/Crypto/_O_PATH} ${../CTools/Crypto/_TEST_O_PATH} ${../CTools/Crypto/_TEST_DRVR_O_PATH})

ProdLink: ${PROD_../CTools/Crypto/_TEST_O_DEPS}
	(gcc -o prodTest ${../CTools/Crypto/_O_PATH} ${../CTools/Crypto/_TEST_O_PATH})

DevRun: ${DEV_../CTools/Crypto/_TEST_O_DEPS} ${DEV_../CTools/Crypto/_TEST_C_DEPS} ${DEV_../CTools/Crypto/_TEST_H_DEPS}
	make DevClean
	make Dev
	make DevLink
	./devTest

########################################################################################################################################





../CTools/Matrix/_DIR=Matrix
../CTools/Matrix/_TEST_DIR=${../CTools/Matrix/_DIR}Test/
../CTools/Matrix/_C=Matrix.c.c
../CTools/Matrix/_H=Matrix.h.h
../CTools/Matrix/_O=Matrix.o.o
../CTools/Matrix/_TEST_C=Test.c
../CTools/Matrix/_TEST_H=Test.h
../CTools/Matrix/_TEST_O=Test.o
../CTools/Matrix/_TEST_DRVR_C=Drvr.c
../CTools/Matrix/_TEST_DRVR_H=Drvr.h
../CTools/Matrix/_TEST_DRVR_O=Drvr.o
../CTools/Matrix/_C_PATH=${../CTools/Matrix/_DIR}${../CTools/Matrix/_C}
../CTools/Matrix/_H_PATH=${../CTools/Matrix/_DIR}${../CTools/Matrix/_H}
../CTools/Matrix/_O_PATH=${../CTools/Matrix/_DIR}${../CTools/Matrix/_O}
../CTools/Matrix/_TEST_C_PATH=${../CTools/Matrix/_TEST_DIR}${../CTools/Matrix/_TEST_C}
../CTools/Matrix/_TEST_H_PATH=${../CTools/Matrix/_TEST_DIR}${../CTools/Matrix/_TEST_H}
../CTools/Matrix/_TEST_O_PATH=${../CTools/Matrix/_TEST_DIR}${../CTools/Matrix/_TEST_O}
../CTools/Matrix/_TEST_DRVR_C_PATH=${../CTools/Matrix/_TEST_DIR}${../CTools/Matrix/_TEST_DRVR_C}
../CTools/Matrix/_TEST_DRVR_H_PATH=${../CTools/Matrix/_TEST_DIR}${../CTools/Matrix/_TEST_DRVR_H}
../CTools/Matrix/_TEST_DRVR_O_PATH=${../CTools/Matrix/_TEST_DIR}${../CTools/Matrix/_TEST_DRVR_O}
../CTools/Matrix/_TEST_DRVR_C_PATH=${../CTools/Matrix/_TEST_DIR}${../CTools/Matrix/_TEST_DRVR_C}
../CTools/Matrix/_TEST_DRVR_H_PATH=${../CTools/Matrix/_TEST_DIR}${../CTools/Matrix/_TEST_DRVR_H}
../CTools/Matrix/_TEST_DRVR_O_PATH=${../CTools/Matrix/_TEST_DIR}${../CTools/Matrix/_TEST_DRVR_O}
PROD_../CTools/Matrix/_TEST_C_DEPS=${../CTools/Matrix/_C_PATH} ${../CTools/Matrix/_TEST_C_PATH} 
PROD_../CTools/Matrix/_TEST_H_DEPS=${../CTools/Matrix/_H_PATH} ${../CTools/Matrix/_TEST_H_PATH} 
PROD_../CTools/Matrix/_TEST_O_DEPS=${../CTools/Matrix/_O_PATH} ${../CTools/Matrix/_TEST_O_PATH} 
DEV_../CTools/Matrix/_TEST_C_DEPS=${../CTools/Matrix/_C_PATH} ${../CTools/Matrix/_TEST_C_PATH} ${../CTools/Matrix/_TEST_DRVR_C_PATH} 
DEV_../CTools/Matrix/_TEST_H_DEPS=${../CTools/Matrix/_H_PATH} ${../CTools/Matrix/_TEST_H_PATH} ${../CTools/Matrix/_TEST_DRVR_H_PATH} 
DEV_../CTools/Matrix/_TEST_O_DEPS=${../CTools/Matrix/_O_PATH} ${../CTools/Matrix/_TEST_O_PATH} ${../CTools/Matrix/_TEST_DRVR_O_PATH} 
DEV_../CTools/Matrix/_TEST_C_FILES=${../CTools/Matrix/_C_PATH} ${../CTools/Matrix/_TEST_C_PATH} ${../CTools/Matrix/_TEST_DRVR_C_PATH} 
DEV_../CTools/Matrix/_TEST_H_FILES=${../CTools/Matrix/_H_PATH} ${../CTools/Matrix/_TEST_H_PATH} ${../CTools/Matrix/_TEST_DRVR_H_PATH} 
DEV_../CTools/Matrix/_TEST_O_FILES=${../CTools/Matrix/_O_PATH} ${../CTools/Matrix/_TEST_O_PATH} ${../CTools/Matrix/_TEST_DRVR_O_PATH} 
PROD_../CTools/Matrix/_TEST_C_FILES=${../CTools/Matrix/_C_PATH} ${../CTools/Matrix/_TEST_C_PATH} 
PROD_../CTools/Matrix/_TEST_H_FILES=${../CTools/Matrix/_H_PATH} ${../CTools/Matrix/_TEST_H_PATH} 
PROD_../CTools/Matrix/_TEST_O_FILES=${../CTools/Matrix/_O_PATH} ${../CTools/Matrix/_TEST_O_PATH} 
../CTools/Matrix/_TEST_DEV_FILES= ${DEV_../CTools/Matrix/_TEST_C_FILES} ${DEV_../CTools/Matrix/_TEST_H_FILES} ${DEV_../CTools/Matrix/_TEST_O_FILES} 


Dev: ${DEV_../CTools/Matrix/_TEST_C_DEPS} ${DEV_../CTools/Matrix/_TEST_H_DEPS}
	cd ${../CTools/Matrix/_DIR}; gcc -c ${../CTools/Matrix/_C}
	cd ${../CTools/Matrix/_TEST_DIR}; gcc -c ${../CTools/Matrix/_TEST_C} ${../CTools/Matrix/_TEST_DRVR_C}

Prod: ${PROD_../CTools/Matrix/_TEST_C_DEPS} ${PROD_../CTools/Matrix/_TEST_H_DEPS}
	cd ${../CTools/Matrix/_DIR}; gcc -c ${../CTools/Matrix/_C}
	cd ${../CTools/Matrix/_TEST_DIR}; gcc -c ${../CTools/Matrix/_TEST_C}

DevClean: ${DEV_../CTools/Matrix/_TEST_O_DEPS}
	cd ${../CTools/Matrix/_DIR}; rm -f ${../CTools/Matrix/_O}
	cd ${../CTools/Matrix/_TEST_DIR}; rm -f ${../CTools/Matrix/_TEST_O} ${../CTools/Matrix/_TEST_DRVR_O}

ProdClean: ${PROD_../CTools/Matrix/_TEST_O_DEPS}
	cd ${../CTools/Matrix/_DIR}; rm -f ${../CTools/Matrix/_O}
	cd ${../CTools/Matrix/_TEST_DIR}; rm -f ${../CTools/Matrix/_TEST_O}

DevLink: ${DEV_../CTools/Matrix/_TEST_O_DEPS}
	(gcc -o devTest ${../CTools/Matrix/_O_PATH} ${../CTools/Matrix/_TEST_O_PATH} ${../CTools/Matrix/_TEST_DRVR_O_PATH})

ProdLink: ${PROD_../CTools/Matrix/_TEST_O_DEPS}
	(gcc -o prodTest ${../CTools/Matrix/_O_PATH} ${../CTools/Matrix/_TEST_O_PATH})

DevRun: ${DEV_../CTools/Matrix/_TEST_O_DEPS} ${DEV_../CTools/Matrix/_TEST_C_DEPS} ${DEV_../CTools/Matrix/_TEST_H_DEPS}
	make DevClean
	make Dev
	make DevLink
	./devTest

########################################################################################################################################





../CTools/Stats/_DIR=Stats
../CTools/Stats/_TEST_DIR=${../CTools/Stats/_DIR}Test/
../CTools/Stats/_C=Stats.c.c
../CTools/Stats/_H=Stats.h.h
../CTools/Stats/_O=Stats.o.o
../CTools/Stats/_TEST_C=Test.c
../CTools/Stats/_TEST_H=Test.h
../CTools/Stats/_TEST_O=Test.o
../CTools/Stats/_TEST_DRVR_C=Drvr.c
../CTools/Stats/_TEST_DRVR_H=Drvr.h
../CTools/Stats/_TEST_DRVR_O=Drvr.o
../CTools/Stats/_C_PATH=${../CTools/Stats/_DIR}${../CTools/Stats/_C}
../CTools/Stats/_H_PATH=${../CTools/Stats/_DIR}${../CTools/Stats/_H}
../CTools/Stats/_O_PATH=${../CTools/Stats/_DIR}${../CTools/Stats/_O}
../CTools/Stats/_TEST_C_PATH=${../CTools/Stats/_TEST_DIR}${../CTools/Stats/_TEST_C}
../CTools/Stats/_TEST_H_PATH=${../CTools/Stats/_TEST_DIR}${../CTools/Stats/_TEST_H}
../CTools/Stats/_TEST_O_PATH=${../CTools/Stats/_TEST_DIR}${../CTools/Stats/_TEST_O}
../CTools/Stats/_TEST_DRVR_C_PATH=${../CTools/Stats/_TEST_DIR}${../CTools/Stats/_TEST_DRVR_C}
../CTools/Stats/_TEST_DRVR_H_PATH=${../CTools/Stats/_TEST_DIR}${../CTools/Stats/_TEST_DRVR_H}
../CTools/Stats/_TEST_DRVR_O_PATH=${../CTools/Stats/_TEST_DIR}${../CTools/Stats/_TEST_DRVR_O}
../CTools/Stats/_TEST_DRVR_C_PATH=${../CTools/Stats/_TEST_DIR}${../CTools/Stats/_TEST_DRVR_C}
../CTools/Stats/_TEST_DRVR_H_PATH=${../CTools/Stats/_TEST_DIR}${../CTools/Stats/_TEST_DRVR_H}
../CTools/Stats/_TEST_DRVR_O_PATH=${../CTools/Stats/_TEST_DIR}${../CTools/Stats/_TEST_DRVR_O}
PROD_../CTools/Stats/_TEST_C_DEPS=${../CTools/Stats/_C_PATH} ${../CTools/Stats/_TEST_C_PATH} 
PROD_../CTools/Stats/_TEST_H_DEPS=${../CTools/Stats/_H_PATH} ${../CTools/Stats/_TEST_H_PATH} 
PROD_../CTools/Stats/_TEST_O_DEPS=${../CTools/Stats/_O_PATH} ${../CTools/Stats/_TEST_O_PATH} 
DEV_../CTools/Stats/_TEST_C_DEPS=${../CTools/Stats/_C_PATH} ${../CTools/Stats/_TEST_C_PATH} ${../CTools/Stats/_TEST_DRVR_C_PATH} 
DEV_../CTools/Stats/_TEST_H_DEPS=${../CTools/Stats/_H_PATH} ${../CTools/Stats/_TEST_H_PATH} ${../CTools/Stats/_TEST_DRVR_H_PATH} 
DEV_../CTools/Stats/_TEST_O_DEPS=${../CTools/Stats/_O_PATH} ${../CTools/Stats/_TEST_O_PATH} ${../CTools/Stats/_TEST_DRVR_O_PATH} 
DEV_../CTools/Stats/_TEST_C_FILES=${../CTools/Stats/_C_PATH} ${../CTools/Stats/_TEST_C_PATH} ${../CTools/Stats/_TEST_DRVR_C_PATH} 
DEV_../CTools/Stats/_TEST_H_FILES=${../CTools/Stats/_H_PATH} ${../CTools/Stats/_TEST_H_PATH} ${../CTools/Stats/_TEST_DRVR_H_PATH} 
DEV_../CTools/Stats/_TEST_O_FILES=${../CTools/Stats/_O_PATH} ${../CTools/Stats/_TEST_O_PATH} ${../CTools/Stats/_TEST_DRVR_O_PATH} 
PROD_../CTools/Stats/_TEST_C_FILES=${../CTools/Stats/_C_PATH} ${../CTools/Stats/_TEST_C_PATH} 
PROD_../CTools/Stats/_TEST_H_FILES=${../CTools/Stats/_H_PATH} ${../CTools/Stats/_TEST_H_PATH} 
PROD_../CTools/Stats/_TEST_O_FILES=${../CTools/Stats/_O_PATH} ${../CTools/Stats/_TEST_O_PATH} 
../CTools/Stats/_TEST_DEV_FILES= ${DEV_../CTools/Stats/_TEST_C_FILES} ${DEV_../CTools/Stats/_TEST_H_FILES} ${DEV_../CTools/Stats/_TEST_O_FILES} 


Dev: ${DEV_../CTools/Stats/_TEST_C_DEPS} ${DEV_../CTools/Stats/_TEST_H_DEPS}
	cd ${../CTools/Stats/_DIR}; gcc -c ${../CTools/Stats/_C}
	cd ${../CTools/Stats/_TEST_DIR}; gcc -c ${../CTools/Stats/_TEST_C} ${../CTools/Stats/_TEST_DRVR_C}

Prod: ${PROD_../CTools/Stats/_TEST_C_DEPS} ${PROD_../CTools/Stats/_TEST_H_DEPS}
	cd ${../CTools/Stats/_DIR}; gcc -c ${../CTools/Stats/_C}
	cd ${../CTools/Stats/_TEST_DIR}; gcc -c ${../CTools/Stats/_TEST_C}

DevClean: ${DEV_../CTools/Stats/_TEST_O_DEPS}
	cd ${../CTools/Stats/_DIR}; rm -f ${../CTools/Stats/_O}
	cd ${../CTools/Stats/_TEST_DIR}; rm -f ${../CTools/Stats/_TEST_O} ${../CTools/Stats/_TEST_DRVR_O}

ProdClean: ${PROD_../CTools/Stats/_TEST_O_DEPS}
	cd ${../CTools/Stats/_DIR}; rm -f ${../CTools/Stats/_O}
	cd ${../CTools/Stats/_TEST_DIR}; rm -f ${../CTools/Stats/_TEST_O}

DevLink: ${DEV_../CTools/Stats/_TEST_O_DEPS}
	(gcc -o devTest ${../CTools/Stats/_O_PATH} ${../CTools/Stats/_TEST_O_PATH} ${../CTools/Stats/_TEST_DRVR_O_PATH})

ProdLink: ${PROD_../CTools/Stats/_TEST_O_DEPS}
	(gcc -o prodTest ${../CTools/Stats/_O_PATH} ${../CTools/Stats/_TEST_O_PATH})

DevRun: ${DEV_../CTools/Stats/_TEST_O_DEPS} ${DEV_../CTools/Stats/_TEST_C_DEPS} ${DEV_../CTools/Stats/_TEST_H_DEPS}
	make DevClean
	make Dev
	make DevLink
	./devTest

########################################################################################################################################





../CTools/Utils/_DIR=Utils
../CTools/Utils/_TEST_DIR=${../CTools/Utils/_DIR}Test/
../CTools/Utils/_C=Utils.c.c
../CTools/Utils/_H=Utils.h.h
../CTools/Utils/_O=Utils.o.o
../CTools/Utils/_TEST_C=Test.c
../CTools/Utils/_TEST_H=Test.h
../CTools/Utils/_TEST_O=Test.o
../CTools/Utils/_TEST_DRVR_C=Drvr.c
../CTools/Utils/_TEST_DRVR_H=Drvr.h
../CTools/Utils/_TEST_DRVR_O=Drvr.o
../CTools/Utils/_C_PATH=${../CTools/Utils/_DIR}${../CTools/Utils/_C}
../CTools/Utils/_H_PATH=${../CTools/Utils/_DIR}${../CTools/Utils/_H}
../CTools/Utils/_O_PATH=${../CTools/Utils/_DIR}${../CTools/Utils/_O}
../CTools/Utils/_TEST_C_PATH=${../CTools/Utils/_TEST_DIR}${../CTools/Utils/_TEST_C}
../CTools/Utils/_TEST_H_PATH=${../CTools/Utils/_TEST_DIR}${../CTools/Utils/_TEST_H}
../CTools/Utils/_TEST_O_PATH=${../CTools/Utils/_TEST_DIR}${../CTools/Utils/_TEST_O}
../CTools/Utils/_TEST_DRVR_C_PATH=${../CTools/Utils/_TEST_DIR}${../CTools/Utils/_TEST_DRVR_C}
../CTools/Utils/_TEST_DRVR_H_PATH=${../CTools/Utils/_TEST_DIR}${../CTools/Utils/_TEST_DRVR_H}
../CTools/Utils/_TEST_DRVR_O_PATH=${../CTools/Utils/_TEST_DIR}${../CTools/Utils/_TEST_DRVR_O}
../CTools/Utils/_TEST_DRVR_C_PATH=${../CTools/Utils/_TEST_DIR}${../CTools/Utils/_TEST_DRVR_C}
../CTools/Utils/_TEST_DRVR_H_PATH=${../CTools/Utils/_TEST_DIR}${../CTools/Utils/_TEST_DRVR_H}
../CTools/Utils/_TEST_DRVR_O_PATH=${../CTools/Utils/_TEST_DIR}${../CTools/Utils/_TEST_DRVR_O}
PROD_../CTools/Utils/_TEST_C_DEPS=${../CTools/Utils/_C_PATH} ${../CTools/Utils/_TEST_C_PATH} 
PROD_../CTools/Utils/_TEST_H_DEPS=${../CTools/Utils/_H_PATH} ${../CTools/Utils/_TEST_H_PATH} 
PROD_../CTools/Utils/_TEST_O_DEPS=${../CTools/Utils/_O_PATH} ${../CTools/Utils/_TEST_O_PATH} 
DEV_../CTools/Utils/_TEST_C_DEPS=${../CTools/Utils/_C_PATH} ${../CTools/Utils/_TEST_C_PATH} ${../CTools/Utils/_TEST_DRVR_C_PATH} 
DEV_../CTools/Utils/_TEST_H_DEPS=${../CTools/Utils/_H_PATH} ${../CTools/Utils/_TEST_H_PATH} ${../CTools/Utils/_TEST_DRVR_H_PATH} 
DEV_../CTools/Utils/_TEST_O_DEPS=${../CTools/Utils/_O_PATH} ${../CTools/Utils/_TEST_O_PATH} ${../CTools/Utils/_TEST_DRVR_O_PATH} 
DEV_../CTools/Utils/_TEST_C_FILES=${../CTools/Utils/_C_PATH} ${../CTools/Utils/_TEST_C_PATH} ${../CTools/Utils/_TEST_DRVR_C_PATH} 
DEV_../CTools/Utils/_TEST_H_FILES=${../CTools/Utils/_H_PATH} ${../CTools/Utils/_TEST_H_PATH} ${../CTools/Utils/_TEST_DRVR_H_PATH} 
DEV_../CTools/Utils/_TEST_O_FILES=${../CTools/Utils/_O_PATH} ${../CTools/Utils/_TEST_O_PATH} ${../CTools/Utils/_TEST_DRVR_O_PATH} 
PROD_../CTools/Utils/_TEST_C_FILES=${../CTools/Utils/_C_PATH} ${../CTools/Utils/_TEST_C_PATH} 
PROD_../CTools/Utils/_TEST_H_FILES=${../CTools/Utils/_H_PATH} ${../CTools/Utils/_TEST_H_PATH} 
PROD_../CTools/Utils/_TEST_O_FILES=${../CTools/Utils/_O_PATH} ${../CTools/Utils/_TEST_O_PATH} 
../CTools/Utils/_TEST_DEV_FILES= ${DEV_../CTools/Utils/_TEST_C_FILES} ${DEV_../CTools/Utils/_TEST_H_FILES} ${DEV_../CTools/Utils/_TEST_O_FILES} 


Dev: ${DEV_../CTools/Utils/_TEST_C_DEPS} ${DEV_../CTools/Utils/_TEST_H_DEPS}
	cd ${../CTools/Utils/_DIR}; gcc -c ${../CTools/Utils/_C}
	cd ${../CTools/Utils/_TEST_DIR}; gcc -c ${../CTools/Utils/_TEST_C} ${../CTools/Utils/_TEST_DRVR_C}

Prod: ${PROD_../CTools/Utils/_TEST_C_DEPS} ${PROD_../CTools/Utils/_TEST_H_DEPS}
	cd ${../CTools/Utils/_DIR}; gcc -c ${../CTools/Utils/_C}
	cd ${../CTools/Utils/_TEST_DIR}; gcc -c ${../CTools/Utils/_TEST_C}

DevClean: ${DEV_../CTools/Utils/_TEST_O_DEPS}
	cd ${../CTools/Utils/_DIR}; rm -f ${../CTools/Utils/_O}
	cd ${../CTools/Utils/_TEST_DIR}; rm -f ${../CTools/Utils/_TEST_O} ${../CTools/Utils/_TEST_DRVR_O}

ProdClean: ${PROD_../CTools/Utils/_TEST_O_DEPS}
	cd ${../CTools/Utils/_DIR}; rm -f ${../CTools/Utils/_O}
	cd ${../CTools/Utils/_TEST_DIR}; rm -f ${../CTools/Utils/_TEST_O}

DevLink: ${DEV_../CTools/Utils/_TEST_O_DEPS}
	(gcc -o devTest ${../CTools/Utils/_O_PATH} ${../CTools/Utils/_TEST_O_PATH} ${../CTools/Utils/_TEST_DRVR_O_PATH})

ProdLink: ${PROD_../CTools/Utils/_TEST_O_DEPS}
	(gcc -o prodTest ${../CTools/Utils/_O_PATH} ${../CTools/Utils/_TEST_O_PATH})

DevRun: ${DEV_../CTools/Utils/_TEST_O_DEPS} ${DEV_../CTools/Utils/_TEST_C_DEPS} ${DEV_../CTools/Utils/_TEST_H_DEPS}
	make DevClean
	make Dev
	make DevLink
	./devTest

########################################################################################################################################





../CTools/Utils/Assertions/_DIR=Assertions
../CTools/Utils/Assertions/_TEST_DIR=${../CTools/Utils/Assertions/_DIR}Test/
../CTools/Utils/Assertions/_C=Assertions.c.c
../CTools/Utils/Assertions/_H=Assertions.h.h
../CTools/Utils/Assertions/_O=Assertions.o.o
../CTools/Utils/Assertions/_TEST_C=Test.c
../CTools/Utils/Assertions/_TEST_H=Test.h
../CTools/Utils/Assertions/_TEST_O=Test.o
../CTools/Utils/Assertions/_TEST_DRVR_C=Drvr.c
../CTools/Utils/Assertions/_TEST_DRVR_H=Drvr.h
../CTools/Utils/Assertions/_TEST_DRVR_O=Drvr.o
../CTools/Utils/Assertions/_C_PATH=${../CTools/Utils/Assertions/_DIR}${../CTools/Utils/Assertions/_C}
../CTools/Utils/Assertions/_H_PATH=${../CTools/Utils/Assertions/_DIR}${../CTools/Utils/Assertions/_H}
../CTools/Utils/Assertions/_O_PATH=${../CTools/Utils/Assertions/_DIR}${../CTools/Utils/Assertions/_O}
../CTools/Utils/Assertions/_TEST_C_PATH=${../CTools/Utils/Assertions/_TEST_DIR}${../CTools/Utils/Assertions/_TEST_C}
../CTools/Utils/Assertions/_TEST_H_PATH=${../CTools/Utils/Assertions/_TEST_DIR}${../CTools/Utils/Assertions/_TEST_H}
../CTools/Utils/Assertions/_TEST_O_PATH=${../CTools/Utils/Assertions/_TEST_DIR}${../CTools/Utils/Assertions/_TEST_O}
../CTools/Utils/Assertions/_TEST_DRVR_C_PATH=${../CTools/Utils/Assertions/_TEST_DIR}${../CTools/Utils/Assertions/_TEST_DRVR_C}
../CTools/Utils/Assertions/_TEST_DRVR_H_PATH=${../CTools/Utils/Assertions/_TEST_DIR}${../CTools/Utils/Assertions/_TEST_DRVR_H}
../CTools/Utils/Assertions/_TEST_DRVR_O_PATH=${../CTools/Utils/Assertions/_TEST_DIR}${../CTools/Utils/Assertions/_TEST_DRVR_O}
../CTools/Utils/Assertions/_TEST_DRVR_C_PATH=${../CTools/Utils/Assertions/_TEST_DIR}${../CTools/Utils/Assertions/_TEST_DRVR_C}
../CTools/Utils/Assertions/_TEST_DRVR_H_PATH=${../CTools/Utils/Assertions/_TEST_DIR}${../CTools/Utils/Assertions/_TEST_DRVR_H}
../CTools/Utils/Assertions/_TEST_DRVR_O_PATH=${../CTools/Utils/Assertions/_TEST_DIR}${../CTools/Utils/Assertions/_TEST_DRVR_O}
PROD_../CTools/Utils/Assertions/_TEST_C_DEPS=${../CTools/Utils/Assertions/_C_PATH} ${../CTools/Utils/Assertions/_TEST_C_PATH} 
PROD_../CTools/Utils/Assertions/_TEST_H_DEPS=${../CTools/Utils/Assertions/_H_PATH} ${../CTools/Utils/Assertions/_TEST_H_PATH} 
PROD_../CTools/Utils/Assertions/_TEST_O_DEPS=${../CTools/Utils/Assertions/_O_PATH} ${../CTools/Utils/Assertions/_TEST_O_PATH} 
DEV_../CTools/Utils/Assertions/_TEST_C_DEPS=${../CTools/Utils/Assertions/_C_PATH} ${../CTools/Utils/Assertions/_TEST_C_PATH} ${../CTools/Utils/Assertions/_TEST_DRVR_C_PATH} 
DEV_../CTools/Utils/Assertions/_TEST_H_DEPS=${../CTools/Utils/Assertions/_H_PATH} ${../CTools/Utils/Assertions/_TEST_H_PATH} ${../CTools/Utils/Assertions/_TEST_DRVR_H_PATH} 
DEV_../CTools/Utils/Assertions/_TEST_O_DEPS=${../CTools/Utils/Assertions/_O_PATH} ${../CTools/Utils/Assertions/_TEST_O_PATH} ${../CTools/Utils/Assertions/_TEST_DRVR_O_PATH} 
DEV_../CTools/Utils/Assertions/_TEST_C_FILES=${../CTools/Utils/Assertions/_C_PATH} ${../CTools/Utils/Assertions/_TEST_C_PATH} ${../CTools/Utils/Assertions/_TEST_DRVR_C_PATH} 
DEV_../CTools/Utils/Assertions/_TEST_H_FILES=${../CTools/Utils/Assertions/_H_PATH} ${../CTools/Utils/Assertions/_TEST_H_PATH} ${../CTools/Utils/Assertions/_TEST_DRVR_H_PATH} 
DEV_../CTools/Utils/Assertions/_TEST_O_FILES=${../CTools/Utils/Assertions/_O_PATH} ${../CTools/Utils/Assertions/_TEST_O_PATH} ${../CTools/Utils/Assertions/_TEST_DRVR_O_PATH} 
PROD_../CTools/Utils/Assertions/_TEST_C_FILES=${../CTools/Utils/Assertions/_C_PATH} ${../CTools/Utils/Assertions/_TEST_C_PATH} 
PROD_../CTools/Utils/Assertions/_TEST_H_FILES=${../CTools/Utils/Assertions/_H_PATH} ${../CTools/Utils/Assertions/_TEST_H_PATH} 
PROD_../CTools/Utils/Assertions/_TEST_O_FILES=${../CTools/Utils/Assertions/_O_PATH} ${../CTools/Utils/Assertions/_TEST_O_PATH} 
../CTools/Utils/Assertions/_TEST_DEV_FILES= ${DEV_../CTools/Utils/Assertions/_TEST_C_FILES} ${DEV_../CTools/Utils/Assertions/_TEST_H_FILES} ${DEV_../CTools/Utils/Assertions/_TEST_O_FILES} 


Dev: ${DEV_../CTools/Utils/Assertions/_TEST_C_DEPS} ${DEV_../CTools/Utils/Assertions/_TEST_H_DEPS}
	cd ${../CTools/Utils/Assertions/_DIR}; gcc -c ${../CTools/Utils/Assertions/_C}
	cd ${../CTools/Utils/Assertions/_TEST_DIR}; gcc -c ${../CTools/Utils/Assertions/_TEST_C} ${../CTools/Utils/Assertions/_TEST_DRVR_C}

Prod: ${PROD_../CTools/Utils/Assertions/_TEST_C_DEPS} ${PROD_../CTools/Utils/Assertions/_TEST_H_DEPS}
	cd ${../CTools/Utils/Assertions/_DIR}; gcc -c ${../CTools/Utils/Assertions/_C}
	cd ${../CTools/Utils/Assertions/_TEST_DIR}; gcc -c ${../CTools/Utils/Assertions/_TEST_C}

DevClean: ${DEV_../CTools/Utils/Assertions/_TEST_O_DEPS}
	cd ${../CTools/Utils/Assertions/_DIR}; rm -f ${../CTools/Utils/Assertions/_O}
	cd ${../CTools/Utils/Assertions/_TEST_DIR}; rm -f ${../CTools/Utils/Assertions/_TEST_O} ${../CTools/Utils/Assertions/_TEST_DRVR_O}

ProdClean: ${PROD_../CTools/Utils/Assertions/_TEST_O_DEPS}
	cd ${../CTools/Utils/Assertions/_DIR}; rm -f ${../CTools/Utils/Assertions/_O}
	cd ${../CTools/Utils/Assertions/_TEST_DIR}; rm -f ${../CTools/Utils/Assertions/_TEST_O}

DevLink: ${DEV_../CTools/Utils/Assertions/_TEST_O_DEPS}
	(gcc -o devTest ${../CTools/Utils/Assertions/_O_PATH} ${../CTools/Utils/Assertions/_TEST_O_PATH} ${../CTools/Utils/Assertions/_TEST_DRVR_O_PATH})

ProdLink: ${PROD_../CTools/Utils/Assertions/_TEST_O_DEPS}
	(gcc -o prodTest ${../CTools/Utils/Assertions/_O_PATH} ${../CTools/Utils/Assertions/_TEST_O_PATH})

DevRun: ${DEV_../CTools/Utils/Assertions/_TEST_O_DEPS} ${DEV_../CTools/Utils/Assertions/_TEST_C_DEPS} ${DEV_../CTools/Utils/Assertions/_TEST_H_DEPS}
	make DevClean
	make Dev
	make DevLink
	./devTest

########################################################################################################################################





../CTools/Utils/Dictionary/_DIR=Dictionary
../CTools/Utils/Dictionary/_TEST_DIR=${../CTools/Utils/Dictionary/_DIR}Test/
../CTools/Utils/Dictionary/_C=Dictionary.c.c
../CTools/Utils/Dictionary/_H=Dictionary.h.h
../CTools/Utils/Dictionary/_O=Dictionary.o.o
../CTools/Utils/Dictionary/_TEST_C=Test.c
../CTools/Utils/Dictionary/_TEST_H=Test.h
../CTools/Utils/Dictionary/_TEST_O=Test.o
../CTools/Utils/Dictionary/_TEST_DRVR_C=Drvr.c
../CTools/Utils/Dictionary/_TEST_DRVR_H=Drvr.h
../CTools/Utils/Dictionary/_TEST_DRVR_O=Drvr.o
../CTools/Utils/Dictionary/_C_PATH=${../CTools/Utils/Dictionary/_DIR}${../CTools/Utils/Dictionary/_C}
../CTools/Utils/Dictionary/_H_PATH=${../CTools/Utils/Dictionary/_DIR}${../CTools/Utils/Dictionary/_H}
../CTools/Utils/Dictionary/_O_PATH=${../CTools/Utils/Dictionary/_DIR}${../CTools/Utils/Dictionary/_O}
../CTools/Utils/Dictionary/_TEST_C_PATH=${../CTools/Utils/Dictionary/_TEST_DIR}${../CTools/Utils/Dictionary/_TEST_C}
../CTools/Utils/Dictionary/_TEST_H_PATH=${../CTools/Utils/Dictionary/_TEST_DIR}${../CTools/Utils/Dictionary/_TEST_H}
../CTools/Utils/Dictionary/_TEST_O_PATH=${../CTools/Utils/Dictionary/_TEST_DIR}${../CTools/Utils/Dictionary/_TEST_O}
../CTools/Utils/Dictionary/_TEST_DRVR_C_PATH=${../CTools/Utils/Dictionary/_TEST_DIR}${../CTools/Utils/Dictionary/_TEST_DRVR_C}
../CTools/Utils/Dictionary/_TEST_DRVR_H_PATH=${../CTools/Utils/Dictionary/_TEST_DIR}${../CTools/Utils/Dictionary/_TEST_DRVR_H}
../CTools/Utils/Dictionary/_TEST_DRVR_O_PATH=${../CTools/Utils/Dictionary/_TEST_DIR}${../CTools/Utils/Dictionary/_TEST_DRVR_O}
../CTools/Utils/Dictionary/_TEST_DRVR_C_PATH=${../CTools/Utils/Dictionary/_TEST_DIR}${../CTools/Utils/Dictionary/_TEST_DRVR_C}
../CTools/Utils/Dictionary/_TEST_DRVR_H_PATH=${../CTools/Utils/Dictionary/_TEST_DIR}${../CTools/Utils/Dictionary/_TEST_DRVR_H}
../CTools/Utils/Dictionary/_TEST_DRVR_O_PATH=${../CTools/Utils/Dictionary/_TEST_DIR}${../CTools/Utils/Dictionary/_TEST_DRVR_O}
PROD_../CTools/Utils/Dictionary/_TEST_C_DEPS=${../CTools/Utils/Dictionary/_C_PATH} ${../CTools/Utils/Dictionary/_TEST_C_PATH} 
PROD_../CTools/Utils/Dictionary/_TEST_H_DEPS=${../CTools/Utils/Dictionary/_H_PATH} ${../CTools/Utils/Dictionary/_TEST_H_PATH} 
PROD_../CTools/Utils/Dictionary/_TEST_O_DEPS=${../CTools/Utils/Dictionary/_O_PATH} ${../CTools/Utils/Dictionary/_TEST_O_PATH} 
DEV_../CTools/Utils/Dictionary/_TEST_C_DEPS=${../CTools/Utils/Dictionary/_C_PATH} ${../CTools/Utils/Dictionary/_TEST_C_PATH} ${../CTools/Utils/Dictionary/_TEST_DRVR_C_PATH} 
DEV_../CTools/Utils/Dictionary/_TEST_H_DEPS=${../CTools/Utils/Dictionary/_H_PATH} ${../CTools/Utils/Dictionary/_TEST_H_PATH} ${../CTools/Utils/Dictionary/_TEST_DRVR_H_PATH} 
DEV_../CTools/Utils/Dictionary/_TEST_O_DEPS=${../CTools/Utils/Dictionary/_O_PATH} ${../CTools/Utils/Dictionary/_TEST_O_PATH} ${../CTools/Utils/Dictionary/_TEST_DRVR_O_PATH} 
DEV_../CTools/Utils/Dictionary/_TEST_C_FILES=${../CTools/Utils/Dictionary/_C_PATH} ${../CTools/Utils/Dictionary/_TEST_C_PATH} ${../CTools/Utils/Dictionary/_TEST_DRVR_C_PATH} 
DEV_../CTools/Utils/Dictionary/_TEST_H_FILES=${../CTools/Utils/Dictionary/_H_PATH} ${../CTools/Utils/Dictionary/_TEST_H_PATH} ${../CTools/Utils/Dictionary/_TEST_DRVR_H_PATH} 
DEV_../CTools/Utils/Dictionary/_TEST_O_FILES=${../CTools/Utils/Dictionary/_O_PATH} ${../CTools/Utils/Dictionary/_TEST_O_PATH} ${../CTools/Utils/Dictionary/_TEST_DRVR_O_PATH} 
PROD_../CTools/Utils/Dictionary/_TEST_C_FILES=${../CTools/Utils/Dictionary/_C_PATH} ${../CTools/Utils/Dictionary/_TEST_C_PATH} 
PROD_../CTools/Utils/Dictionary/_TEST_H_FILES=${../CTools/Utils/Dictionary/_H_PATH} ${../CTools/Utils/Dictionary/_TEST_H_PATH} 
PROD_../CTools/Utils/Dictionary/_TEST_O_FILES=${../CTools/Utils/Dictionary/_O_PATH} ${../CTools/Utils/Dictionary/_TEST_O_PATH} 
../CTools/Utils/Dictionary/_TEST_DEV_FILES= ${DEV_../CTools/Utils/Dictionary/_TEST_C_FILES} ${DEV_../CTools/Utils/Dictionary/_TEST_H_FILES} ${DEV_../CTools/Utils/Dictionary/_TEST_O_FILES} 


Dev: ${DEV_../CTools/Utils/Dictionary/_TEST_C_DEPS} ${DEV_../CTools/Utils/Dictionary/_TEST_H_DEPS}
	cd ${../CTools/Utils/Dictionary/_DIR}; gcc -c ${../CTools/Utils/Dictionary/_C}
	cd ${../CTools/Utils/Dictionary/_TEST_DIR}; gcc -c ${../CTools/Utils/Dictionary/_TEST_C} ${../CTools/Utils/Dictionary/_TEST_DRVR_C}

Prod: ${PROD_../CTools/Utils/Dictionary/_TEST_C_DEPS} ${PROD_../CTools/Utils/Dictionary/_TEST_H_DEPS}
	cd ${../CTools/Utils/Dictionary/_DIR}; gcc -c ${../CTools/Utils/Dictionary/_C}
	cd ${../CTools/Utils/Dictionary/_TEST_DIR}; gcc -c ${../CTools/Utils/Dictionary/_TEST_C}

DevClean: ${DEV_../CTools/Utils/Dictionary/_TEST_O_DEPS}
	cd ${../CTools/Utils/Dictionary/_DIR}; rm -f ${../CTools/Utils/Dictionary/_O}
	cd ${../CTools/Utils/Dictionary/_TEST_DIR}; rm -f ${../CTools/Utils/Dictionary/_TEST_O} ${../CTools/Utils/Dictionary/_TEST_DRVR_O}

ProdClean: ${PROD_../CTools/Utils/Dictionary/_TEST_O_DEPS}
	cd ${../CTools/Utils/Dictionary/_DIR}; rm -f ${../CTools/Utils/Dictionary/_O}
	cd ${../CTools/Utils/Dictionary/_TEST_DIR}; rm -f ${../CTools/Utils/Dictionary/_TEST_O}

DevLink: ${DEV_../CTools/Utils/Dictionary/_TEST_O_DEPS}
	(gcc -o devTest ${../CTools/Utils/Dictionary/_O_PATH} ${../CTools/Utils/Dictionary/_TEST_O_PATH} ${../CTools/Utils/Dictionary/_TEST_DRVR_O_PATH})

ProdLink: ${PROD_../CTools/Utils/Dictionary/_TEST_O_DEPS}
	(gcc -o prodTest ${../CTools/Utils/Dictionary/_O_PATH} ${../CTools/Utils/Dictionary/_TEST_O_PATH})

DevRun: ${DEV_../CTools/Utils/Dictionary/_TEST_O_DEPS} ${DEV_../CTools/Utils/Dictionary/_TEST_C_DEPS} ${DEV_../CTools/Utils/Dictionary/_TEST_H_DEPS}
	make DevClean
	make Dev
	make DevLink
	./devTest

########################################################################################################################################





../CTools/Utils/Rand/_DIR=Rand
../CTools/Utils/Rand/_TEST_DIR=${../CTools/Utils/Rand/_DIR}Test/
../CTools/Utils/Rand/_C=Rand.c.c
../CTools/Utils/Rand/_H=Rand.h.h
../CTools/Utils/Rand/_O=Rand.o.o
../CTools/Utils/Rand/_TEST_C=Test.c
../CTools/Utils/Rand/_TEST_H=Test.h
../CTools/Utils/Rand/_TEST_O=Test.o
../CTools/Utils/Rand/_TEST_DRVR_C=Drvr.c
../CTools/Utils/Rand/_TEST_DRVR_H=Drvr.h
../CTools/Utils/Rand/_TEST_DRVR_O=Drvr.o
../CTools/Utils/Rand/_C_PATH=${../CTools/Utils/Rand/_DIR}${../CTools/Utils/Rand/_C}
../CTools/Utils/Rand/_H_PATH=${../CTools/Utils/Rand/_DIR}${../CTools/Utils/Rand/_H}
../CTools/Utils/Rand/_O_PATH=${../CTools/Utils/Rand/_DIR}${../CTools/Utils/Rand/_O}
../CTools/Utils/Rand/_TEST_C_PATH=${../CTools/Utils/Rand/_TEST_DIR}${../CTools/Utils/Rand/_TEST_C}
../CTools/Utils/Rand/_TEST_H_PATH=${../CTools/Utils/Rand/_TEST_DIR}${../CTools/Utils/Rand/_TEST_H}
../CTools/Utils/Rand/_TEST_O_PATH=${../CTools/Utils/Rand/_TEST_DIR}${../CTools/Utils/Rand/_TEST_O}
../CTools/Utils/Rand/_TEST_DRVR_C_PATH=${../CTools/Utils/Rand/_TEST_DIR}${../CTools/Utils/Rand/_TEST_DRVR_C}
../CTools/Utils/Rand/_TEST_DRVR_H_PATH=${../CTools/Utils/Rand/_TEST_DIR}${../CTools/Utils/Rand/_TEST_DRVR_H}
../CTools/Utils/Rand/_TEST_DRVR_O_PATH=${../CTools/Utils/Rand/_TEST_DIR}${../CTools/Utils/Rand/_TEST_DRVR_O}
../CTools/Utils/Rand/_TEST_DRVR_C_PATH=${../CTools/Utils/Rand/_TEST_DIR}${../CTools/Utils/Rand/_TEST_DRVR_C}
../CTools/Utils/Rand/_TEST_DRVR_H_PATH=${../CTools/Utils/Rand/_TEST_DIR}${../CTools/Utils/Rand/_TEST_DRVR_H}
../CTools/Utils/Rand/_TEST_DRVR_O_PATH=${../CTools/Utils/Rand/_TEST_DIR}${../CTools/Utils/Rand/_TEST_DRVR_O}
PROD_../CTools/Utils/Rand/_TEST_C_DEPS=${../CTools/Utils/Rand/_C_PATH} ${../CTools/Utils/Rand/_TEST_C_PATH} 
PROD_../CTools/Utils/Rand/_TEST_H_DEPS=${../CTools/Utils/Rand/_H_PATH} ${../CTools/Utils/Rand/_TEST_H_PATH} 
PROD_../CTools/Utils/Rand/_TEST_O_DEPS=${../CTools/Utils/Rand/_O_PATH} ${../CTools/Utils/Rand/_TEST_O_PATH} 
DEV_../CTools/Utils/Rand/_TEST_C_DEPS=${../CTools/Utils/Rand/_C_PATH} ${../CTools/Utils/Rand/_TEST_C_PATH} ${../CTools/Utils/Rand/_TEST_DRVR_C_PATH} 
DEV_../CTools/Utils/Rand/_TEST_H_DEPS=${../CTools/Utils/Rand/_H_PATH} ${../CTools/Utils/Rand/_TEST_H_PATH} ${../CTools/Utils/Rand/_TEST_DRVR_H_PATH} 
DEV_../CTools/Utils/Rand/_TEST_O_DEPS=${../CTools/Utils/Rand/_O_PATH} ${../CTools/Utils/Rand/_TEST_O_PATH} ${../CTools/Utils/Rand/_TEST_DRVR_O_PATH} 
DEV_../CTools/Utils/Rand/_TEST_C_FILES=${../CTools/Utils/Rand/_C_PATH} ${../CTools/Utils/Rand/_TEST_C_PATH} ${../CTools/Utils/Rand/_TEST_DRVR_C_PATH} 
DEV_../CTools/Utils/Rand/_TEST_H_FILES=${../CTools/Utils/Rand/_H_PATH} ${../CTools/Utils/Rand/_TEST_H_PATH} ${../CTools/Utils/Rand/_TEST_DRVR_H_PATH} 
DEV_../CTools/Utils/Rand/_TEST_O_FILES=${../CTools/Utils/Rand/_O_PATH} ${../CTools/Utils/Rand/_TEST_O_PATH} ${../CTools/Utils/Rand/_TEST_DRVR_O_PATH} 
PROD_../CTools/Utils/Rand/_TEST_C_FILES=${../CTools/Utils/Rand/_C_PATH} ${../CTools/Utils/Rand/_TEST_C_PATH} 
PROD_../CTools/Utils/Rand/_TEST_H_FILES=${../CTools/Utils/Rand/_H_PATH} ${../CTools/Utils/Rand/_TEST_H_PATH} 
PROD_../CTools/Utils/Rand/_TEST_O_FILES=${../CTools/Utils/Rand/_O_PATH} ${../CTools/Utils/Rand/_TEST_O_PATH} 
../CTools/Utils/Rand/_TEST_DEV_FILES= ${DEV_../CTools/Utils/Rand/_TEST_C_FILES} ${DEV_../CTools/Utils/Rand/_TEST_H_FILES} ${DEV_../CTools/Utils/Rand/_TEST_O_FILES} 


Dev: ${DEV_../CTools/Utils/Rand/_TEST_C_DEPS} ${DEV_../CTools/Utils/Rand/_TEST_H_DEPS}
	cd ${../CTools/Utils/Rand/_DIR}; gcc -c ${../CTools/Utils/Rand/_C}
	cd ${../CTools/Utils/Rand/_TEST_DIR}; gcc -c ${../CTools/Utils/Rand/_TEST_C} ${../CTools/Utils/Rand/_TEST_DRVR_C}

Prod: ${PROD_../CTools/Utils/Rand/_TEST_C_DEPS} ${PROD_../CTools/Utils/Rand/_TEST_H_DEPS}
	cd ${../CTools/Utils/Rand/_DIR}; gcc -c ${../CTools/Utils/Rand/_C}
	cd ${../CTools/Utils/Rand/_TEST_DIR}; gcc -c ${../CTools/Utils/Rand/_TEST_C}

DevClean: ${DEV_../CTools/Utils/Rand/_TEST_O_DEPS}
	cd ${../CTools/Utils/Rand/_DIR}; rm -f ${../CTools/Utils/Rand/_O}
	cd ${../CTools/Utils/Rand/_TEST_DIR}; rm -f ${../CTools/Utils/Rand/_TEST_O} ${../CTools/Utils/Rand/_TEST_DRVR_O}

ProdClean: ${PROD_../CTools/Utils/Rand/_TEST_O_DEPS}
	cd ${../CTools/Utils/Rand/_DIR}; rm -f ${../CTools/Utils/Rand/_O}
	cd ${../CTools/Utils/Rand/_TEST_DIR}; rm -f ${../CTools/Utils/Rand/_TEST_O}

DevLink: ${DEV_../CTools/Utils/Rand/_TEST_O_DEPS}
	(gcc -o devTest ${../CTools/Utils/Rand/_O_PATH} ${../CTools/Utils/Rand/_TEST_O_PATH} ${../CTools/Utils/Rand/_TEST_DRVR_O_PATH})

ProdLink: ${PROD_../CTools/Utils/Rand/_TEST_O_DEPS}
	(gcc -o prodTest ${../CTools/Utils/Rand/_O_PATH} ${../CTools/Utils/Rand/_TEST_O_PATH})

DevRun: ${DEV_../CTools/Utils/Rand/_TEST_O_DEPS} ${DEV_../CTools/Utils/Rand/_TEST_C_DEPS} ${DEV_../CTools/Utils/Rand/_TEST_H_DEPS}
	make DevClean
	make Dev
	make DevLink
	./devTest

########################################################################################################################################





../CTools/Utils/Types/_DIR=Types
../CTools/Utils/Types/_TEST_DIR=${../CTools/Utils/Types/_DIR}Test/
../CTools/Utils/Types/_C=Types.c.c
../CTools/Utils/Types/_H=Types.h.h
../CTools/Utils/Types/_O=Types.o.o
../CTools/Utils/Types/_TEST_C=Test.c
../CTools/Utils/Types/_TEST_H=Test.h
../CTools/Utils/Types/_TEST_O=Test.o
../CTools/Utils/Types/_TEST_DRVR_C=Drvr.c
../CTools/Utils/Types/_TEST_DRVR_H=Drvr.h
../CTools/Utils/Types/_TEST_DRVR_O=Drvr.o
../CTools/Utils/Types/_C_PATH=${../CTools/Utils/Types/_DIR}${../CTools/Utils/Types/_C}
../CTools/Utils/Types/_H_PATH=${../CTools/Utils/Types/_DIR}${../CTools/Utils/Types/_H}
../CTools/Utils/Types/_O_PATH=${../CTools/Utils/Types/_DIR}${../CTools/Utils/Types/_O}
../CTools/Utils/Types/_TEST_C_PATH=${../CTools/Utils/Types/_TEST_DIR}${../CTools/Utils/Types/_TEST_C}
../CTools/Utils/Types/_TEST_H_PATH=${../CTools/Utils/Types/_TEST_DIR}${../CTools/Utils/Types/_TEST_H}
../CTools/Utils/Types/_TEST_O_PATH=${../CTools/Utils/Types/_TEST_DIR}${../CTools/Utils/Types/_TEST_O}
../CTools/Utils/Types/_TEST_DRVR_C_PATH=${../CTools/Utils/Types/_TEST_DIR}${../CTools/Utils/Types/_TEST_DRVR_C}
../CTools/Utils/Types/_TEST_DRVR_H_PATH=${../CTools/Utils/Types/_TEST_DIR}${../CTools/Utils/Types/_TEST_DRVR_H}
../CTools/Utils/Types/_TEST_DRVR_O_PATH=${../CTools/Utils/Types/_TEST_DIR}${../CTools/Utils/Types/_TEST_DRVR_O}
../CTools/Utils/Types/_TEST_DRVR_C_PATH=${../CTools/Utils/Types/_TEST_DIR}${../CTools/Utils/Types/_TEST_DRVR_C}
../CTools/Utils/Types/_TEST_DRVR_H_PATH=${../CTools/Utils/Types/_TEST_DIR}${../CTools/Utils/Types/_TEST_DRVR_H}
../CTools/Utils/Types/_TEST_DRVR_O_PATH=${../CTools/Utils/Types/_TEST_DIR}${../CTools/Utils/Types/_TEST_DRVR_O}
PROD_../CTools/Utils/Types/_TEST_C_DEPS=${../CTools/Utils/Types/_C_PATH} ${../CTools/Utils/Types/_TEST_C_PATH} 
PROD_../CTools/Utils/Types/_TEST_H_DEPS=${../CTools/Utils/Types/_H_PATH} ${../CTools/Utils/Types/_TEST_H_PATH} 
PROD_../CTools/Utils/Types/_TEST_O_DEPS=${../CTools/Utils/Types/_O_PATH} ${../CTools/Utils/Types/_TEST_O_PATH} 
DEV_../CTools/Utils/Types/_TEST_C_DEPS=${../CTools/Utils/Types/_C_PATH} ${../CTools/Utils/Types/_TEST_C_PATH} ${../CTools/Utils/Types/_TEST_DRVR_C_PATH} 
DEV_../CTools/Utils/Types/_TEST_H_DEPS=${../CTools/Utils/Types/_H_PATH} ${../CTools/Utils/Types/_TEST_H_PATH} ${../CTools/Utils/Types/_TEST_DRVR_H_PATH} 
DEV_../CTools/Utils/Types/_TEST_O_DEPS=${../CTools/Utils/Types/_O_PATH} ${../CTools/Utils/Types/_TEST_O_PATH} ${../CTools/Utils/Types/_TEST_DRVR_O_PATH} 
DEV_../CTools/Utils/Types/_TEST_C_FILES=${../CTools/Utils/Types/_C_PATH} ${../CTools/Utils/Types/_TEST_C_PATH} ${../CTools/Utils/Types/_TEST_DRVR_C_PATH} 
DEV_../CTools/Utils/Types/_TEST_H_FILES=${../CTools/Utils/Types/_H_PATH} ${../CTools/Utils/Types/_TEST_H_PATH} ${../CTools/Utils/Types/_TEST_DRVR_H_PATH} 
DEV_../CTools/Utils/Types/_TEST_O_FILES=${../CTools/Utils/Types/_O_PATH} ${../CTools/Utils/Types/_TEST_O_PATH} ${../CTools/Utils/Types/_TEST_DRVR_O_PATH} 
PROD_../CTools/Utils/Types/_TEST_C_FILES=${../CTools/Utils/Types/_C_PATH} ${../CTools/Utils/Types/_TEST_C_PATH} 
PROD_../CTools/Utils/Types/_TEST_H_FILES=${../CTools/Utils/Types/_H_PATH} ${../CTools/Utils/Types/_TEST_H_PATH} 
PROD_../CTools/Utils/Types/_TEST_O_FILES=${../CTools/Utils/Types/_O_PATH} ${../CTools/Utils/Types/_TEST_O_PATH} 
../CTools/Utils/Types/_TEST_DEV_FILES= ${DEV_../CTools/Utils/Types/_TEST_C_FILES} ${DEV_../CTools/Utils/Types/_TEST_H_FILES} ${DEV_../CTools/Utils/Types/_TEST_O_FILES} 


Dev: ${DEV_../CTools/Utils/Types/_TEST_C_DEPS} ${DEV_../CTools/Utils/Types/_TEST_H_DEPS}
	cd ${../CTools/Utils/Types/_DIR}; gcc -c ${../CTools/Utils/Types/_C}
	cd ${../CTools/Utils/Types/_TEST_DIR}; gcc -c ${../CTools/Utils/Types/_TEST_C} ${../CTools/Utils/Types/_TEST_DRVR_C}

Prod: ${PROD_../CTools/Utils/Types/_TEST_C_DEPS} ${PROD_../CTools/Utils/Types/_TEST_H_DEPS}
	cd ${../CTools/Utils/Types/_DIR}; gcc -c ${../CTools/Utils/Types/_C}
	cd ${../CTools/Utils/Types/_TEST_DIR}; gcc -c ${../CTools/Utils/Types/_TEST_C}

DevClean: ${DEV_../CTools/Utils/Types/_TEST_O_DEPS}
	cd ${../CTools/Utils/Types/_DIR}; rm -f ${../CTools/Utils/Types/_O}
	cd ${../CTools/Utils/Types/_TEST_DIR}; rm -f ${../CTools/Utils/Types/_TEST_O} ${../CTools/Utils/Types/_TEST_DRVR_O}

ProdClean: ${PROD_../CTools/Utils/Types/_TEST_O_DEPS}
	cd ${../CTools/Utils/Types/_DIR}; rm -f ${../CTools/Utils/Types/_O}
	cd ${../CTools/Utils/Types/_TEST_DIR}; rm -f ${../CTools/Utils/Types/_TEST_O}

DevLink: ${DEV_../CTools/Utils/Types/_TEST_O_DEPS}
	(gcc -o devTest ${../CTools/Utils/Types/_O_PATH} ${../CTools/Utils/Types/_TEST_O_PATH} ${../CTools/Utils/Types/_TEST_DRVR_O_PATH})

ProdLink: ${PROD_../CTools/Utils/Types/_TEST_O_DEPS}
	(gcc -o prodTest ${../CTools/Utils/Types/_O_PATH} ${../CTools/Utils/Types/_TEST_O_PATH})

DevRun: ${DEV_../CTools/Utils/Types/_TEST_O_DEPS} ${DEV_../CTools/Utils/Types/_TEST_C_DEPS} ${DEV_../CTools/Utils/Types/_TEST_H_DEPS}
	make DevClean
	make Dev
	make DevLink
	./devTest

########################################################################################################################################





../CTools/Utils/Types/Array/_DIR=Array
../CTools/Utils/Types/Array/_TEST_DIR=${../CTools/Utils/Types/Array/_DIR}Test/
../CTools/Utils/Types/Array/_C=Array.c.c
../CTools/Utils/Types/Array/_H=Array.h.h
../CTools/Utils/Types/Array/_O=Array.o.o
../CTools/Utils/Types/Array/_TEST_C=Test.c
../CTools/Utils/Types/Array/_TEST_H=Test.h
../CTools/Utils/Types/Array/_TEST_O=Test.o
../CTools/Utils/Types/Array/_TEST_DRVR_C=Drvr.c
../CTools/Utils/Types/Array/_TEST_DRVR_H=Drvr.h
../CTools/Utils/Types/Array/_TEST_DRVR_O=Drvr.o
../CTools/Utils/Types/Array/_C_PATH=${../CTools/Utils/Types/Array/_DIR}${../CTools/Utils/Types/Array/_C}
../CTools/Utils/Types/Array/_H_PATH=${../CTools/Utils/Types/Array/_DIR}${../CTools/Utils/Types/Array/_H}
../CTools/Utils/Types/Array/_O_PATH=${../CTools/Utils/Types/Array/_DIR}${../CTools/Utils/Types/Array/_O}
../CTools/Utils/Types/Array/_TEST_C_PATH=${../CTools/Utils/Types/Array/_TEST_DIR}${../CTools/Utils/Types/Array/_TEST_C}
../CTools/Utils/Types/Array/_TEST_H_PATH=${../CTools/Utils/Types/Array/_TEST_DIR}${../CTools/Utils/Types/Array/_TEST_H}
../CTools/Utils/Types/Array/_TEST_O_PATH=${../CTools/Utils/Types/Array/_TEST_DIR}${../CTools/Utils/Types/Array/_TEST_O}
../CTools/Utils/Types/Array/_TEST_DRVR_C_PATH=${../CTools/Utils/Types/Array/_TEST_DIR}${../CTools/Utils/Types/Array/_TEST_DRVR_C}
../CTools/Utils/Types/Array/_TEST_DRVR_H_PATH=${../CTools/Utils/Types/Array/_TEST_DIR}${../CTools/Utils/Types/Array/_TEST_DRVR_H}
../CTools/Utils/Types/Array/_TEST_DRVR_O_PATH=${../CTools/Utils/Types/Array/_TEST_DIR}${../CTools/Utils/Types/Array/_TEST_DRVR_O}
../CTools/Utils/Types/Array/_TEST_DRVR_C_PATH=${../CTools/Utils/Types/Array/_TEST_DIR}${../CTools/Utils/Types/Array/_TEST_DRVR_C}
../CTools/Utils/Types/Array/_TEST_DRVR_H_PATH=${../CTools/Utils/Types/Array/_TEST_DIR}${../CTools/Utils/Types/Array/_TEST_DRVR_H}
../CTools/Utils/Types/Array/_TEST_DRVR_O_PATH=${../CTools/Utils/Types/Array/_TEST_DIR}${../CTools/Utils/Types/Array/_TEST_DRVR_O}
PROD_../CTools/Utils/Types/Array/_TEST_C_DEPS=${../CTools/Utils/Types/Array/_C_PATH} ${../CTools/Utils/Types/Array/_TEST_C_PATH} 
PROD_../CTools/Utils/Types/Array/_TEST_H_DEPS=${../CTools/Utils/Types/Array/_H_PATH} ${../CTools/Utils/Types/Array/_TEST_H_PATH} 
PROD_../CTools/Utils/Types/Array/_TEST_O_DEPS=${../CTools/Utils/Types/Array/_O_PATH} ${../CTools/Utils/Types/Array/_TEST_O_PATH} 
DEV_../CTools/Utils/Types/Array/_TEST_C_DEPS=${../CTools/Utils/Types/Array/_C_PATH} ${../CTools/Utils/Types/Array/_TEST_C_PATH} ${../CTools/Utils/Types/Array/_TEST_DRVR_C_PATH} 
DEV_../CTools/Utils/Types/Array/_TEST_H_DEPS=${../CTools/Utils/Types/Array/_H_PATH} ${../CTools/Utils/Types/Array/_TEST_H_PATH} ${../CTools/Utils/Types/Array/_TEST_DRVR_H_PATH} 
DEV_../CTools/Utils/Types/Array/_TEST_O_DEPS=${../CTools/Utils/Types/Array/_O_PATH} ${../CTools/Utils/Types/Array/_TEST_O_PATH} ${../CTools/Utils/Types/Array/_TEST_DRVR_O_PATH} 
DEV_../CTools/Utils/Types/Array/_TEST_C_FILES=${../CTools/Utils/Types/Array/_C_PATH} ${../CTools/Utils/Types/Array/_TEST_C_PATH} ${../CTools/Utils/Types/Array/_TEST_DRVR_C_PATH} 
DEV_../CTools/Utils/Types/Array/_TEST_H_FILES=${../CTools/Utils/Types/Array/_H_PATH} ${../CTools/Utils/Types/Array/_TEST_H_PATH} ${../CTools/Utils/Types/Array/_TEST_DRVR_H_PATH} 
DEV_../CTools/Utils/Types/Array/_TEST_O_FILES=${../CTools/Utils/Types/Array/_O_PATH} ${../CTools/Utils/Types/Array/_TEST_O_PATH} ${../CTools/Utils/Types/Array/_TEST_DRVR_O_PATH} 
PROD_../CTools/Utils/Types/Array/_TEST_C_FILES=${../CTools/Utils/Types/Array/_C_PATH} ${../CTools/Utils/Types/Array/_TEST_C_PATH} 
PROD_../CTools/Utils/Types/Array/_TEST_H_FILES=${../CTools/Utils/Types/Array/_H_PATH} ${../CTools/Utils/Types/Array/_TEST_H_PATH} 
PROD_../CTools/Utils/Types/Array/_TEST_O_FILES=${../CTools/Utils/Types/Array/_O_PATH} ${../CTools/Utils/Types/Array/_TEST_O_PATH} 
../CTools/Utils/Types/Array/_TEST_DEV_FILES= ${DEV_../CTools/Utils/Types/Array/_TEST_C_FILES} ${DEV_../CTools/Utils/Types/Array/_TEST_H_FILES} ${DEV_../CTools/Utils/Types/Array/_TEST_O_FILES} 


Dev: ${DEV_../CTools/Utils/Types/Array/_TEST_C_DEPS} ${DEV_../CTools/Utils/Types/Array/_TEST_H_DEPS}
	cd ${../CTools/Utils/Types/Array/_DIR}; gcc -c ${../CTools/Utils/Types/Array/_C}
	cd ${../CTools/Utils/Types/Array/_TEST_DIR}; gcc -c ${../CTools/Utils/Types/Array/_TEST_C} ${../CTools/Utils/Types/Array/_TEST_DRVR_C}

Prod: ${PROD_../CTools/Utils/Types/Array/_TEST_C_DEPS} ${PROD_../CTools/Utils/Types/Array/_TEST_H_DEPS}
	cd ${../CTools/Utils/Types/Array/_DIR}; gcc -c ${../CTools/Utils/Types/Array/_C}
	cd ${../CTools/Utils/Types/Array/_TEST_DIR}; gcc -c ${../CTools/Utils/Types/Array/_TEST_C}

DevClean: ${DEV_../CTools/Utils/Types/Array/_TEST_O_DEPS}
	cd ${../CTools/Utils/Types/Array/_DIR}; rm -f ${../CTools/Utils/Types/Array/_O}
	cd ${../CTools/Utils/Types/Array/_TEST_DIR}; rm -f ${../CTools/Utils/Types/Array/_TEST_O} ${../CTools/Utils/Types/Array/_TEST_DRVR_O}

ProdClean: ${PROD_../CTools/Utils/Types/Array/_TEST_O_DEPS}
	cd ${../CTools/Utils/Types/Array/_DIR}; rm -f ${../CTools/Utils/Types/Array/_O}
	cd ${../CTools/Utils/Types/Array/_TEST_DIR}; rm -f ${../CTools/Utils/Types/Array/_TEST_O}

DevLink: ${DEV_../CTools/Utils/Types/Array/_TEST_O_DEPS}
	(gcc -o devTest ${../CTools/Utils/Types/Array/_O_PATH} ${../CTools/Utils/Types/Array/_TEST_O_PATH} ${../CTools/Utils/Types/Array/_TEST_DRVR_O_PATH})

ProdLink: ${PROD_../CTools/Utils/Types/Array/_TEST_O_DEPS}
	(gcc -o prodTest ${../CTools/Utils/Types/Array/_O_PATH} ${../CTools/Utils/Types/Array/_TEST_O_PATH})

DevRun: ${DEV_../CTools/Utils/Types/Array/_TEST_O_DEPS} ${DEV_../CTools/Utils/Types/Array/_TEST_C_DEPS} ${DEV_../CTools/Utils/Types/Array/_TEST_H_DEPS}
	make DevClean
	make Dev
	make DevLink
	./devTest

########################################################################################################################################





../CTools/Utils/Types/Float/_DIR=Float
../CTools/Utils/Types/Float/_TEST_DIR=${../CTools/Utils/Types/Float/_DIR}Test/
../CTools/Utils/Types/Float/_C=Float.c.c
../CTools/Utils/Types/Float/_H=Float.h.h
../CTools/Utils/Types/Float/_O=Float.o.o
../CTools/Utils/Types/Float/_TEST_C=Test.c
../CTools/Utils/Types/Float/_TEST_H=Test.h
../CTools/Utils/Types/Float/_TEST_O=Test.o
../CTools/Utils/Types/Float/_TEST_DRVR_C=Drvr.c
../CTools/Utils/Types/Float/_TEST_DRVR_H=Drvr.h
../CTools/Utils/Types/Float/_TEST_DRVR_O=Drvr.o
../CTools/Utils/Types/Float/_C_PATH=${../CTools/Utils/Types/Float/_DIR}${../CTools/Utils/Types/Float/_C}
../CTools/Utils/Types/Float/_H_PATH=${../CTools/Utils/Types/Float/_DIR}${../CTools/Utils/Types/Float/_H}
../CTools/Utils/Types/Float/_O_PATH=${../CTools/Utils/Types/Float/_DIR}${../CTools/Utils/Types/Float/_O}
../CTools/Utils/Types/Float/_TEST_C_PATH=${../CTools/Utils/Types/Float/_TEST_DIR}${../CTools/Utils/Types/Float/_TEST_C}
../CTools/Utils/Types/Float/_TEST_H_PATH=${../CTools/Utils/Types/Float/_TEST_DIR}${../CTools/Utils/Types/Float/_TEST_H}
../CTools/Utils/Types/Float/_TEST_O_PATH=${../CTools/Utils/Types/Float/_TEST_DIR}${../CTools/Utils/Types/Float/_TEST_O}
../CTools/Utils/Types/Float/_TEST_DRVR_C_PATH=${../CTools/Utils/Types/Float/_TEST_DIR}${../CTools/Utils/Types/Float/_TEST_DRVR_C}
../CTools/Utils/Types/Float/_TEST_DRVR_H_PATH=${../CTools/Utils/Types/Float/_TEST_DIR}${../CTools/Utils/Types/Float/_TEST_DRVR_H}
../CTools/Utils/Types/Float/_TEST_DRVR_O_PATH=${../CTools/Utils/Types/Float/_TEST_DIR}${../CTools/Utils/Types/Float/_TEST_DRVR_O}
../CTools/Utils/Types/Float/_TEST_DRVR_C_PATH=${../CTools/Utils/Types/Float/_TEST_DIR}${../CTools/Utils/Types/Float/_TEST_DRVR_C}
../CTools/Utils/Types/Float/_TEST_DRVR_H_PATH=${../CTools/Utils/Types/Float/_TEST_DIR}${../CTools/Utils/Types/Float/_TEST_DRVR_H}
../CTools/Utils/Types/Float/_TEST_DRVR_O_PATH=${../CTools/Utils/Types/Float/_TEST_DIR}${../CTools/Utils/Types/Float/_TEST_DRVR_O}
PROD_../CTools/Utils/Types/Float/_TEST_C_DEPS=${../CTools/Utils/Types/Float/_C_PATH} ${../CTools/Utils/Types/Float/_TEST_C_PATH} 
PROD_../CTools/Utils/Types/Float/_TEST_H_DEPS=${../CTools/Utils/Types/Float/_H_PATH} ${../CTools/Utils/Types/Float/_TEST_H_PATH} 
PROD_../CTools/Utils/Types/Float/_TEST_O_DEPS=${../CTools/Utils/Types/Float/_O_PATH} ${../CTools/Utils/Types/Float/_TEST_O_PATH} 
DEV_../CTools/Utils/Types/Float/_TEST_C_DEPS=${../CTools/Utils/Types/Float/_C_PATH} ${../CTools/Utils/Types/Float/_TEST_C_PATH} ${../CTools/Utils/Types/Float/_TEST_DRVR_C_PATH} 
DEV_../CTools/Utils/Types/Float/_TEST_H_DEPS=${../CTools/Utils/Types/Float/_H_PATH} ${../CTools/Utils/Types/Float/_TEST_H_PATH} ${../CTools/Utils/Types/Float/_TEST_DRVR_H_PATH} 
DEV_../CTools/Utils/Types/Float/_TEST_O_DEPS=${../CTools/Utils/Types/Float/_O_PATH} ${../CTools/Utils/Types/Float/_TEST_O_PATH} ${../CTools/Utils/Types/Float/_TEST_DRVR_O_PATH} 
DEV_../CTools/Utils/Types/Float/_TEST_C_FILES=${../CTools/Utils/Types/Float/_C_PATH} ${../CTools/Utils/Types/Float/_TEST_C_PATH} ${../CTools/Utils/Types/Float/_TEST_DRVR_C_PATH} 
DEV_../CTools/Utils/Types/Float/_TEST_H_FILES=${../CTools/Utils/Types/Float/_H_PATH} ${../CTools/Utils/Types/Float/_TEST_H_PATH} ${../CTools/Utils/Types/Float/_TEST_DRVR_H_PATH} 
DEV_../CTools/Utils/Types/Float/_TEST_O_FILES=${../CTools/Utils/Types/Float/_O_PATH} ${../CTools/Utils/Types/Float/_TEST_O_PATH} ${../CTools/Utils/Types/Float/_TEST_DRVR_O_PATH} 
PROD_../CTools/Utils/Types/Float/_TEST_C_FILES=${../CTools/Utils/Types/Float/_C_PATH} ${../CTools/Utils/Types/Float/_TEST_C_PATH} 
PROD_../CTools/Utils/Types/Float/_TEST_H_FILES=${../CTools/Utils/Types/Float/_H_PATH} ${../CTools/Utils/Types/Float/_TEST_H_PATH} 
PROD_../CTools/Utils/Types/Float/_TEST_O_FILES=${../CTools/Utils/Types/Float/_O_PATH} ${../CTools/Utils/Types/Float/_TEST_O_PATH} 
../CTools/Utils/Types/Float/_TEST_DEV_FILES= ${DEV_../CTools/Utils/Types/Float/_TEST_C_FILES} ${DEV_../CTools/Utils/Types/Float/_TEST_H_FILES} ${DEV_../CTools/Utils/Types/Float/_TEST_O_FILES} 


Dev: ${DEV_../CTools/Utils/Types/Float/_TEST_C_DEPS} ${DEV_../CTools/Utils/Types/Float/_TEST_H_DEPS}
	cd ${../CTools/Utils/Types/Float/_DIR}; gcc -c ${../CTools/Utils/Types/Float/_C}
	cd ${../CTools/Utils/Types/Float/_TEST_DIR}; gcc -c ${../CTools/Utils/Types/Float/_TEST_C} ${../CTools/Utils/Types/Float/_TEST_DRVR_C}

Prod: ${PROD_../CTools/Utils/Types/Float/_TEST_C_DEPS} ${PROD_../CTools/Utils/Types/Float/_TEST_H_DEPS}
	cd ${../CTools/Utils/Types/Float/_DIR}; gcc -c ${../CTools/Utils/Types/Float/_C}
	cd ${../CTools/Utils/Types/Float/_TEST_DIR}; gcc -c ${../CTools/Utils/Types/Float/_TEST_C}

DevClean: ${DEV_../CTools/Utils/Types/Float/_TEST_O_DEPS}
	cd ${../CTools/Utils/Types/Float/_DIR}; rm -f ${../CTools/Utils/Types/Float/_O}
	cd ${../CTools/Utils/Types/Float/_TEST_DIR}; rm -f ${../CTools/Utils/Types/Float/_TEST_O} ${../CTools/Utils/Types/Float/_TEST_DRVR_O}

ProdClean: ${PROD_../CTools/Utils/Types/Float/_TEST_O_DEPS}
	cd ${../CTools/Utils/Types/Float/_DIR}; rm -f ${../CTools/Utils/Types/Float/_O}
	cd ${../CTools/Utils/Types/Float/_TEST_DIR}; rm -f ${../CTools/Utils/Types/Float/_TEST_O}

DevLink: ${DEV_../CTools/Utils/Types/Float/_TEST_O_DEPS}
	(gcc -o devTest ${../CTools/Utils/Types/Float/_O_PATH} ${../CTools/Utils/Types/Float/_TEST_O_PATH} ${../CTools/Utils/Types/Float/_TEST_DRVR_O_PATH})

ProdLink: ${PROD_../CTools/Utils/Types/Float/_TEST_O_DEPS}
	(gcc -o prodTest ${../CTools/Utils/Types/Float/_O_PATH} ${../CTools/Utils/Types/Float/_TEST_O_PATH})

DevRun: ${DEV_../CTools/Utils/Types/Float/_TEST_O_DEPS} ${DEV_../CTools/Utils/Types/Float/_TEST_C_DEPS} ${DEV_../CTools/Utils/Types/Float/_TEST_H_DEPS}
	make DevClean
	make Dev
	make DevLink
	./devTest

########################################################################################################################################





../CTools/Utils/Types/LinkList/_DIR=LinkList
../CTools/Utils/Types/LinkList/_TEST_DIR=${../CTools/Utils/Types/LinkList/_DIR}Test/
../CTools/Utils/Types/LinkList/_C=LinkList.c.c
../CTools/Utils/Types/LinkList/_H=LinkList.h.h
../CTools/Utils/Types/LinkList/_O=LinkList.o.o
../CTools/Utils/Types/LinkList/_TEST_C=Test.c
../CTools/Utils/Types/LinkList/_TEST_H=Test.h
../CTools/Utils/Types/LinkList/_TEST_O=Test.o
../CTools/Utils/Types/LinkList/_TEST_DRVR_C=Drvr.c
../CTools/Utils/Types/LinkList/_TEST_DRVR_H=Drvr.h
../CTools/Utils/Types/LinkList/_TEST_DRVR_O=Drvr.o
../CTools/Utils/Types/LinkList/_C_PATH=${../CTools/Utils/Types/LinkList/_DIR}${../CTools/Utils/Types/LinkList/_C}
../CTools/Utils/Types/LinkList/_H_PATH=${../CTools/Utils/Types/LinkList/_DIR}${../CTools/Utils/Types/LinkList/_H}
../CTools/Utils/Types/LinkList/_O_PATH=${../CTools/Utils/Types/LinkList/_DIR}${../CTools/Utils/Types/LinkList/_O}
../CTools/Utils/Types/LinkList/_TEST_C_PATH=${../CTools/Utils/Types/LinkList/_TEST_DIR}${../CTools/Utils/Types/LinkList/_TEST_C}
../CTools/Utils/Types/LinkList/_TEST_H_PATH=${../CTools/Utils/Types/LinkList/_TEST_DIR}${../CTools/Utils/Types/LinkList/_TEST_H}
../CTools/Utils/Types/LinkList/_TEST_O_PATH=${../CTools/Utils/Types/LinkList/_TEST_DIR}${../CTools/Utils/Types/LinkList/_TEST_O}
../CTools/Utils/Types/LinkList/_TEST_DRVR_C_PATH=${../CTools/Utils/Types/LinkList/_TEST_DIR}${../CTools/Utils/Types/LinkList/_TEST_DRVR_C}
../CTools/Utils/Types/LinkList/_TEST_DRVR_H_PATH=${../CTools/Utils/Types/LinkList/_TEST_DIR}${../CTools/Utils/Types/LinkList/_TEST_DRVR_H}
../CTools/Utils/Types/LinkList/_TEST_DRVR_O_PATH=${../CTools/Utils/Types/LinkList/_TEST_DIR}${../CTools/Utils/Types/LinkList/_TEST_DRVR_O}
../CTools/Utils/Types/LinkList/_TEST_DRVR_C_PATH=${../CTools/Utils/Types/LinkList/_TEST_DIR}${../CTools/Utils/Types/LinkList/_TEST_DRVR_C}
../CTools/Utils/Types/LinkList/_TEST_DRVR_H_PATH=${../CTools/Utils/Types/LinkList/_TEST_DIR}${../CTools/Utils/Types/LinkList/_TEST_DRVR_H}
../CTools/Utils/Types/LinkList/_TEST_DRVR_O_PATH=${../CTools/Utils/Types/LinkList/_TEST_DIR}${../CTools/Utils/Types/LinkList/_TEST_DRVR_O}
PROD_../CTools/Utils/Types/LinkList/_TEST_C_DEPS=${../CTools/Utils/Types/LinkList/_C_PATH} ${../CTools/Utils/Types/LinkList/_TEST_C_PATH} ../CTools/Automata/Automata.c 
PROD_../CTools/Utils/Types/LinkList/_TEST_H_DEPS=${../CTools/Utils/Types/LinkList/_H_PATH} ${../CTools/Utils/Types/LinkList/_TEST_H_PATH} ../CTools/Automata/Automata.h 
PROD_../CTools/Utils/Types/LinkList/_TEST_O_DEPS=${../CTools/Utils/Types/LinkList/_O_PATH} ${../CTools/Utils/Types/LinkList/_TEST_O_PATH} ../CTools/Automata/Automata.o 
DEV_../CTools/Utils/Types/LinkList/_TEST_C_DEPS=${../CTools/Utils/Types/LinkList/_C_PATH} ${../CTools/Utils/Types/LinkList/_TEST_C_PATH} ${../CTools/Utils/Types/LinkList/_TEST_DRVR_C_PATH} ../CTools/Automata/Automata.c 
DEV_../CTools/Utils/Types/LinkList/_TEST_H_DEPS=${../CTools/Utils/Types/LinkList/_H_PATH} ${../CTools/Utils/Types/LinkList/_TEST_H_PATH} ${../CTools/Utils/Types/LinkList/_TEST_DRVR_H_PATH} ../CTools/Automata/Automata.h 
DEV_../CTools/Utils/Types/LinkList/_TEST_O_DEPS=${../CTools/Utils/Types/LinkList/_O_PATH} ${../CTools/Utils/Types/LinkList/_TEST_O_PATH} ${../CTools/Utils/Types/LinkList/_TEST_DRVR_O_PATH} ../CTools/Automata/Automata.o 
DEV_../CTools/Utils/Types/LinkList/_TEST_C_FILES=${../CTools/Utils/Types/LinkList/_C_PATH} ${../CTools/Utils/Types/LinkList/_TEST_C_PATH} ${../CTools/Utils/Types/LinkList/_TEST_DRVR_C_PATH} ../CTools/Automata/Automata.c 
DEV_../CTools/Utils/Types/LinkList/_TEST_H_FILES=${../CTools/Utils/Types/LinkList/_H_PATH} ${../CTools/Utils/Types/LinkList/_TEST_H_PATH} ${../CTools/Utils/Types/LinkList/_TEST_DRVR_H_PATH} ../CTools/Automata/Automata.h 
DEV_../CTools/Utils/Types/LinkList/_TEST_O_FILES=${../CTools/Utils/Types/LinkList/_O_PATH} ${../CTools/Utils/Types/LinkList/_TEST_O_PATH} ${../CTools/Utils/Types/LinkList/_TEST_DRVR_O_PATH} ../CTools/Automata/Automata.o 
PROD_../CTools/Utils/Types/LinkList/_TEST_C_FILES=${../CTools/Utils/Types/LinkList/_C_PATH} ${../CTools/Utils/Types/LinkList/_TEST_C_PATH} ../CTools/Automata/Automata.c 
PROD_../CTools/Utils/Types/LinkList/_TEST_H_FILES=${../CTools/Utils/Types/LinkList/_H_PATH} ${../CTools/Utils/Types/LinkList/_TEST_H_PATH} ../CTools/Automata/Automata.h 
PROD_../CTools/Utils/Types/LinkList/_TEST_O_FILES=${../CTools/Utils/Types/LinkList/_O_PATH} ${../CTools/Utils/Types/LinkList/_TEST_O_PATH} ../CTools/Automata/Automata.o 
../CTools/Utils/Types/LinkList/_TEST_DEV_FILES= ${DEV_../CTools/Utils/Types/LinkList/_TEST_C_FILES} ${DEV_../CTools/Utils/Types/LinkList/_TEST_H_FILES} ${DEV_../CTools/Utils/Types/LinkList/_TEST_O_FILES} 


Dev: ${DEV_../CTools/Utils/Types/LinkList/_TEST_C_DEPS} ${DEV_../CTools/Utils/Types/LinkList/_TEST_H_DEPS}
	cd ${../CTools/Utils/Types/LinkList/_DIR}; gcc -c ${../CTools/Utils/Types/LinkList/_C}
	cd ${../CTools/Utils/Types/LinkList/_TEST_DIR}; gcc -c ${../CTools/Utils/Types/LinkList/_TEST_C} ${../CTools/Utils/Types/LinkList/_TEST_DRVR_C}

Prod: ${PROD_../CTools/Utils/Types/LinkList/_TEST_C_DEPS} ${PROD_../CTools/Utils/Types/LinkList/_TEST_H_DEPS}
	cd ${../CTools/Utils/Types/LinkList/_DIR}; gcc -c ${../CTools/Utils/Types/LinkList/_C}
	cd ${../CTools/Utils/Types/LinkList/_TEST_DIR}; gcc -c ${../CTools/Utils/Types/LinkList/_TEST_C}

DevClean: ${DEV_../CTools/Utils/Types/LinkList/_TEST_O_DEPS}
	cd ${../CTools/Utils/Types/LinkList/_DIR}; rm -f ${../CTools/Utils/Types/LinkList/_O}
	cd ${../CTools/Utils/Types/LinkList/_TEST_DIR}; rm -f ${../CTools/Utils/Types/LinkList/_TEST_O} ${../CTools/Utils/Types/LinkList/_TEST_DRVR_O}

ProdClean: ${PROD_../CTools/Utils/Types/LinkList/_TEST_O_DEPS}
	cd ${../CTools/Utils/Types/LinkList/_DIR}; rm -f ${../CTools/Utils/Types/LinkList/_O}
	cd ${../CTools/Utils/Types/LinkList/_TEST_DIR}; rm -f ${../CTools/Utils/Types/LinkList/_TEST_O}

DevLink: ${DEV_../CTools/Utils/Types/LinkList/_TEST_O_DEPS}
	(gcc -o devTest ${../CTools/Utils/Types/LinkList/_O_PATH} ${../CTools/Utils/Types/LinkList/_TEST_O_PATH} ${../CTools/Utils/Types/LinkList/_TEST_DRVR_O_PATH})

ProdLink: ${PROD_../CTools/Utils/Types/LinkList/_TEST_O_DEPS}
	(gcc -o prodTest ${../CTools/Utils/Types/LinkList/_O_PATH} ${../CTools/Utils/Types/LinkList/_TEST_O_PATH})

DevRun: ${DEV_../CTools/Utils/Types/LinkList/_TEST_O_DEPS} ${DEV_../CTools/Utils/Types/LinkList/_TEST_C_DEPS} ${DEV_../CTools/Utils/Types/LinkList/_TEST_H_DEPS}
	make DevClean
	make Dev
	make DevLink
	./devTest

########################################################################################################################################





../CTools/Utils/Types/Number/_DIR=Number
../CTools/Utils/Types/Number/_TEST_DIR=${../CTools/Utils/Types/Number/_DIR}Test/
../CTools/Utils/Types/Number/_C=Number.c.c
../CTools/Utils/Types/Number/_H=Number.h.h
../CTools/Utils/Types/Number/_O=Number.o.o
../CTools/Utils/Types/Number/_TEST_C=Test.c
../CTools/Utils/Types/Number/_TEST_H=Test.h
../CTools/Utils/Types/Number/_TEST_O=Test.o
../CTools/Utils/Types/Number/_TEST_DRVR_C=Drvr.c
../CTools/Utils/Types/Number/_TEST_DRVR_H=Drvr.h
../CTools/Utils/Types/Number/_TEST_DRVR_O=Drvr.o
../CTools/Utils/Types/Number/_C_PATH=${../CTools/Utils/Types/Number/_DIR}${../CTools/Utils/Types/Number/_C}
../CTools/Utils/Types/Number/_H_PATH=${../CTools/Utils/Types/Number/_DIR}${../CTools/Utils/Types/Number/_H}
../CTools/Utils/Types/Number/_O_PATH=${../CTools/Utils/Types/Number/_DIR}${../CTools/Utils/Types/Number/_O}
../CTools/Utils/Types/Number/_TEST_C_PATH=${../CTools/Utils/Types/Number/_TEST_DIR}${../CTools/Utils/Types/Number/_TEST_C}
../CTools/Utils/Types/Number/_TEST_H_PATH=${../CTools/Utils/Types/Number/_TEST_DIR}${../CTools/Utils/Types/Number/_TEST_H}
../CTools/Utils/Types/Number/_TEST_O_PATH=${../CTools/Utils/Types/Number/_TEST_DIR}${../CTools/Utils/Types/Number/_TEST_O}
../CTools/Utils/Types/Number/_TEST_DRVR_C_PATH=${../CTools/Utils/Types/Number/_TEST_DIR}${../CTools/Utils/Types/Number/_TEST_DRVR_C}
../CTools/Utils/Types/Number/_TEST_DRVR_H_PATH=${../CTools/Utils/Types/Number/_TEST_DIR}${../CTools/Utils/Types/Number/_TEST_DRVR_H}
../CTools/Utils/Types/Number/_TEST_DRVR_O_PATH=${../CTools/Utils/Types/Number/_TEST_DIR}${../CTools/Utils/Types/Number/_TEST_DRVR_O}
../CTools/Utils/Types/Number/_TEST_DRVR_C_PATH=${../CTools/Utils/Types/Number/_TEST_DIR}${../CTools/Utils/Types/Number/_TEST_DRVR_C}
../CTools/Utils/Types/Number/_TEST_DRVR_H_PATH=${../CTools/Utils/Types/Number/_TEST_DIR}${../CTools/Utils/Types/Number/_TEST_DRVR_H}
../CTools/Utils/Types/Number/_TEST_DRVR_O_PATH=${../CTools/Utils/Types/Number/_TEST_DIR}${../CTools/Utils/Types/Number/_TEST_DRVR_O}
PROD_../CTools/Utils/Types/Number/_TEST_C_DEPS=${../CTools/Utils/Types/Number/_C_PATH} ${../CTools/Utils/Types/Number/_TEST_C_PATH} 
PROD_../CTools/Utils/Types/Number/_TEST_H_DEPS=${../CTools/Utils/Types/Number/_H_PATH} ${../CTools/Utils/Types/Number/_TEST_H_PATH} 
PROD_../CTools/Utils/Types/Number/_TEST_O_DEPS=${../CTools/Utils/Types/Number/_O_PATH} ${../CTools/Utils/Types/Number/_TEST_O_PATH} 
DEV_../CTools/Utils/Types/Number/_TEST_C_DEPS=${../CTools/Utils/Types/Number/_C_PATH} ${../CTools/Utils/Types/Number/_TEST_C_PATH} ${../CTools/Utils/Types/Number/_TEST_DRVR_C_PATH} 
DEV_../CTools/Utils/Types/Number/_TEST_H_DEPS=${../CTools/Utils/Types/Number/_H_PATH} ${../CTools/Utils/Types/Number/_TEST_H_PATH} ${../CTools/Utils/Types/Number/_TEST_DRVR_H_PATH} 
DEV_../CTools/Utils/Types/Number/_TEST_O_DEPS=${../CTools/Utils/Types/Number/_O_PATH} ${../CTools/Utils/Types/Number/_TEST_O_PATH} ${../CTools/Utils/Types/Number/_TEST_DRVR_O_PATH} 
DEV_../CTools/Utils/Types/Number/_TEST_C_FILES=${../CTools/Utils/Types/Number/_C_PATH} ${../CTools/Utils/Types/Number/_TEST_C_PATH} ${../CTools/Utils/Types/Number/_TEST_DRVR_C_PATH} 
DEV_../CTools/Utils/Types/Number/_TEST_H_FILES=${../CTools/Utils/Types/Number/_H_PATH} ${../CTools/Utils/Types/Number/_TEST_H_PATH} ${../CTools/Utils/Types/Number/_TEST_DRVR_H_PATH} 
DEV_../CTools/Utils/Types/Number/_TEST_O_FILES=${../CTools/Utils/Types/Number/_O_PATH} ${../CTools/Utils/Types/Number/_TEST_O_PATH} ${../CTools/Utils/Types/Number/_TEST_DRVR_O_PATH} 
PROD_../CTools/Utils/Types/Number/_TEST_C_FILES=${../CTools/Utils/Types/Number/_C_PATH} ${../CTools/Utils/Types/Number/_TEST_C_PATH} 
PROD_../CTools/Utils/Types/Number/_TEST_H_FILES=${../CTools/Utils/Types/Number/_H_PATH} ${../CTools/Utils/Types/Number/_TEST_H_PATH} 
PROD_../CTools/Utils/Types/Number/_TEST_O_FILES=${../CTools/Utils/Types/Number/_O_PATH} ${../CTools/Utils/Types/Number/_TEST_O_PATH} 
../CTools/Utils/Types/Number/_TEST_DEV_FILES= ${DEV_../CTools/Utils/Types/Number/_TEST_C_FILES} ${DEV_../CTools/Utils/Types/Number/_TEST_H_FILES} ${DEV_../CTools/Utils/Types/Number/_TEST_O_FILES} 


Dev: ${DEV_../CTools/Utils/Types/Number/_TEST_C_DEPS} ${DEV_../CTools/Utils/Types/Number/_TEST_H_DEPS}
	cd ${../CTools/Utils/Types/Number/_DIR}; gcc -c ${../CTools/Utils/Types/Number/_C}
	cd ${../CTools/Utils/Types/Number/_TEST_DIR}; gcc -c ${../CTools/Utils/Types/Number/_TEST_C} ${../CTools/Utils/Types/Number/_TEST_DRVR_C}

Prod: ${PROD_../CTools/Utils/Types/Number/_TEST_C_DEPS} ${PROD_../CTools/Utils/Types/Number/_TEST_H_DEPS}
	cd ${../CTools/Utils/Types/Number/_DIR}; gcc -c ${../CTools/Utils/Types/Number/_C}
	cd ${../CTools/Utils/Types/Number/_TEST_DIR}; gcc -c ${../CTools/Utils/Types/Number/_TEST_C}

DevClean: ${DEV_../CTools/Utils/Types/Number/_TEST_O_DEPS}
	cd ${../CTools/Utils/Types/Number/_DIR}; rm -f ${../CTools/Utils/Types/Number/_O}
	cd ${../CTools/Utils/Types/Number/_TEST_DIR}; rm -f ${../CTools/Utils/Types/Number/_TEST_O} ${../CTools/Utils/Types/Number/_TEST_DRVR_O}

ProdClean: ${PROD_../CTools/Utils/Types/Number/_TEST_O_DEPS}
	cd ${../CTools/Utils/Types/Number/_DIR}; rm -f ${../CTools/Utils/Types/Number/_O}
	cd ${../CTools/Utils/Types/Number/_TEST_DIR}; rm -f ${../CTools/Utils/Types/Number/_TEST_O}

DevLink: ${DEV_../CTools/Utils/Types/Number/_TEST_O_DEPS}
	(gcc -o devTest ${../CTools/Utils/Types/Number/_O_PATH} ${../CTools/Utils/Types/Number/_TEST_O_PATH} ${../CTools/Utils/Types/Number/_TEST_DRVR_O_PATH})

ProdLink: ${PROD_../CTools/Utils/Types/Number/_TEST_O_DEPS}
	(gcc -o prodTest ${../CTools/Utils/Types/Number/_O_PATH} ${../CTools/Utils/Types/Number/_TEST_O_PATH})

DevRun: ${DEV_../CTools/Utils/Types/Number/_TEST_O_DEPS} ${DEV_../CTools/Utils/Types/Number/_TEST_C_DEPS} ${DEV_../CTools/Utils/Types/Number/_TEST_H_DEPS}
	make DevClean
	make Dev
	make DevLink
	./devTest

########################################################################################################################################





../CTools/Utils/Types/String/_DIR=String
../CTools/Utils/Types/String/_TEST_DIR=${../CTools/Utils/Types/String/_DIR}Test/
../CTools/Utils/Types/String/_C=String.c.c
../CTools/Utils/Types/String/_H=String.h.h
../CTools/Utils/Types/String/_O=String.o.o
../CTools/Utils/Types/String/_TEST_C=Test.c
../CTools/Utils/Types/String/_TEST_H=Test.h
../CTools/Utils/Types/String/_TEST_O=Test.o
../CTools/Utils/Types/String/_TEST_DRVR_C=Drvr.c
../CTools/Utils/Types/String/_TEST_DRVR_H=Drvr.h
../CTools/Utils/Types/String/_TEST_DRVR_O=Drvr.o
../CTools/Utils/Types/String/_C_PATH=${../CTools/Utils/Types/String/_DIR}${../CTools/Utils/Types/String/_C}
../CTools/Utils/Types/String/_H_PATH=${../CTools/Utils/Types/String/_DIR}${../CTools/Utils/Types/String/_H}
../CTools/Utils/Types/String/_O_PATH=${../CTools/Utils/Types/String/_DIR}${../CTools/Utils/Types/String/_O}
../CTools/Utils/Types/String/_TEST_C_PATH=${../CTools/Utils/Types/String/_TEST_DIR}${../CTools/Utils/Types/String/_TEST_C}
../CTools/Utils/Types/String/_TEST_H_PATH=${../CTools/Utils/Types/String/_TEST_DIR}${../CTools/Utils/Types/String/_TEST_H}
../CTools/Utils/Types/String/_TEST_O_PATH=${../CTools/Utils/Types/String/_TEST_DIR}${../CTools/Utils/Types/String/_TEST_O}
../CTools/Utils/Types/String/_TEST_DRVR_C_PATH=${../CTools/Utils/Types/String/_TEST_DIR}${../CTools/Utils/Types/String/_TEST_DRVR_C}
../CTools/Utils/Types/String/_TEST_DRVR_H_PATH=${../CTools/Utils/Types/String/_TEST_DIR}${../CTools/Utils/Types/String/_TEST_DRVR_H}
../CTools/Utils/Types/String/_TEST_DRVR_O_PATH=${../CTools/Utils/Types/String/_TEST_DIR}${../CTools/Utils/Types/String/_TEST_DRVR_O}
../CTools/Utils/Types/String/_TEST_DRVR_C_PATH=${../CTools/Utils/Types/String/_TEST_DIR}${../CTools/Utils/Types/String/_TEST_DRVR_C}
../CTools/Utils/Types/String/_TEST_DRVR_H_PATH=${../CTools/Utils/Types/String/_TEST_DIR}${../CTools/Utils/Types/String/_TEST_DRVR_H}
../CTools/Utils/Types/String/_TEST_DRVR_O_PATH=${../CTools/Utils/Types/String/_TEST_DIR}${../CTools/Utils/Types/String/_TEST_DRVR_O}
PROD_../CTools/Utils/Types/String/_TEST_C_DEPS=${../CTools/Utils/Types/String/_C_PATH} ${../CTools/Utils/Types/String/_TEST_C_PATH} 
PROD_../CTools/Utils/Types/String/_TEST_H_DEPS=${../CTools/Utils/Types/String/_H_PATH} ${../CTools/Utils/Types/String/_TEST_H_PATH} 
PROD_../CTools/Utils/Types/String/_TEST_O_DEPS=${../CTools/Utils/Types/String/_O_PATH} ${../CTools/Utils/Types/String/_TEST_O_PATH} 
DEV_../CTools/Utils/Types/String/_TEST_C_DEPS=${../CTools/Utils/Types/String/_C_PATH} ${../CTools/Utils/Types/String/_TEST_C_PATH} ${../CTools/Utils/Types/String/_TEST_DRVR_C_PATH} 
DEV_../CTools/Utils/Types/String/_TEST_H_DEPS=${../CTools/Utils/Types/String/_H_PATH} ${../CTools/Utils/Types/String/_TEST_H_PATH} ${../CTools/Utils/Types/String/_TEST_DRVR_H_PATH} 
DEV_../CTools/Utils/Types/String/_TEST_O_DEPS=${../CTools/Utils/Types/String/_O_PATH} ${../CTools/Utils/Types/String/_TEST_O_PATH} ${../CTools/Utils/Types/String/_TEST_DRVR_O_PATH} 
DEV_../CTools/Utils/Types/String/_TEST_C_FILES=${../CTools/Utils/Types/String/_C_PATH} ${../CTools/Utils/Types/String/_TEST_C_PATH} ${../CTools/Utils/Types/String/_TEST_DRVR_C_PATH} 
DEV_../CTools/Utils/Types/String/_TEST_H_FILES=${../CTools/Utils/Types/String/_H_PATH} ${../CTools/Utils/Types/String/_TEST_H_PATH} ${../CTools/Utils/Types/String/_TEST_DRVR_H_PATH} 
DEV_../CTools/Utils/Types/String/_TEST_O_FILES=${../CTools/Utils/Types/String/_O_PATH} ${../CTools/Utils/Types/String/_TEST_O_PATH} ${../CTools/Utils/Types/String/_TEST_DRVR_O_PATH} 
PROD_../CTools/Utils/Types/String/_TEST_C_FILES=${../CTools/Utils/Types/String/_C_PATH} ${../CTools/Utils/Types/String/_TEST_C_PATH} 
PROD_../CTools/Utils/Types/String/_TEST_H_FILES=${../CTools/Utils/Types/String/_H_PATH} ${../CTools/Utils/Types/String/_TEST_H_PATH} 
PROD_../CTools/Utils/Types/String/_TEST_O_FILES=${../CTools/Utils/Types/String/_O_PATH} ${../CTools/Utils/Types/String/_TEST_O_PATH} 
../CTools/Utils/Types/String/_TEST_DEV_FILES= ${DEV_../CTools/Utils/Types/String/_TEST_C_FILES} ${DEV_../CTools/Utils/Types/String/_TEST_H_FILES} ${DEV_../CTools/Utils/Types/String/_TEST_O_FILES} 


Dev: ${DEV_../CTools/Utils/Types/String/_TEST_C_DEPS} ${DEV_../CTools/Utils/Types/String/_TEST_H_DEPS}
	cd ${../CTools/Utils/Types/String/_DIR}; gcc -c ${../CTools/Utils/Types/String/_C}
	cd ${../CTools/Utils/Types/String/_TEST_DIR}; gcc -c ${../CTools/Utils/Types/String/_TEST_C} ${../CTools/Utils/Types/String/_TEST_DRVR_C}

Prod: ${PROD_../CTools/Utils/Types/String/_TEST_C_DEPS} ${PROD_../CTools/Utils/Types/String/_TEST_H_DEPS}
	cd ${../CTools/Utils/Types/String/_DIR}; gcc -c ${../CTools/Utils/Types/String/_C}
	cd ${../CTools/Utils/Types/String/_TEST_DIR}; gcc -c ${../CTools/Utils/Types/String/_TEST_C}

DevClean: ${DEV_../CTools/Utils/Types/String/_TEST_O_DEPS}
	cd ${../CTools/Utils/Types/String/_DIR}; rm -f ${../CTools/Utils/Types/String/_O}
	cd ${../CTools/Utils/Types/String/_TEST_DIR}; rm -f ${../CTools/Utils/Types/String/_TEST_O} ${../CTools/Utils/Types/String/_TEST_DRVR_O}

ProdClean: ${PROD_../CTools/Utils/Types/String/_TEST_O_DEPS}
	cd ${../CTools/Utils/Types/String/_DIR}; rm -f ${../CTools/Utils/Types/String/_O}
	cd ${../CTools/Utils/Types/String/_TEST_DIR}; rm -f ${../CTools/Utils/Types/String/_TEST_O}

DevLink: ${DEV_../CTools/Utils/Types/String/_TEST_O_DEPS}
	(gcc -o devTest ${../CTools/Utils/Types/String/_O_PATH} ${../CTools/Utils/Types/String/_TEST_O_PATH} ${../CTools/Utils/Types/String/_TEST_DRVR_O_PATH})

ProdLink: ${PROD_../CTools/Utils/Types/String/_TEST_O_DEPS}
	(gcc -o prodTest ${../CTools/Utils/Types/String/_O_PATH} ${../CTools/Utils/Types/String/_TEST_O_PATH})

DevRun: ${DEV_../CTools/Utils/Types/String/_TEST_O_DEPS} ${DEV_../CTools/Utils/Types/String/_TEST_C_DEPS} ${DEV_../CTools/Utils/Types/String/_TEST_H_DEPS}
	make DevClean
	make Dev
	make DevLink
	./devTest

########################################################################################################################################





../CTools/Utils/Types/Unicode/_DIR=Unicode
../CTools/Utils/Types/Unicode/_TEST_DIR=${../CTools/Utils/Types/Unicode/_DIR}Test/
../CTools/Utils/Types/Unicode/_C=Unicode.c.c
../CTools/Utils/Types/Unicode/_H=Unicode.h.h
../CTools/Utils/Types/Unicode/_O=Unicode.o.o
../CTools/Utils/Types/Unicode/_TEST_C=Test.c
../CTools/Utils/Types/Unicode/_TEST_H=Test.h
../CTools/Utils/Types/Unicode/_TEST_O=Test.o
../CTools/Utils/Types/Unicode/_TEST_DRVR_C=Drvr.c
../CTools/Utils/Types/Unicode/_TEST_DRVR_H=Drvr.h
../CTools/Utils/Types/Unicode/_TEST_DRVR_O=Drvr.o
../CTools/Utils/Types/Unicode/_C_PATH=${../CTools/Utils/Types/Unicode/_DIR}${../CTools/Utils/Types/Unicode/_C}
../CTools/Utils/Types/Unicode/_H_PATH=${../CTools/Utils/Types/Unicode/_DIR}${../CTools/Utils/Types/Unicode/_H}
../CTools/Utils/Types/Unicode/_O_PATH=${../CTools/Utils/Types/Unicode/_DIR}${../CTools/Utils/Types/Unicode/_O}
../CTools/Utils/Types/Unicode/_TEST_C_PATH=${../CTools/Utils/Types/Unicode/_TEST_DIR}${../CTools/Utils/Types/Unicode/_TEST_C}
../CTools/Utils/Types/Unicode/_TEST_H_PATH=${../CTools/Utils/Types/Unicode/_TEST_DIR}${../CTools/Utils/Types/Unicode/_TEST_H}
../CTools/Utils/Types/Unicode/_TEST_O_PATH=${../CTools/Utils/Types/Unicode/_TEST_DIR}${../CTools/Utils/Types/Unicode/_TEST_O}
../CTools/Utils/Types/Unicode/_TEST_DRVR_C_PATH=${../CTools/Utils/Types/Unicode/_TEST_DIR}${../CTools/Utils/Types/Unicode/_TEST_DRVR_C}
../CTools/Utils/Types/Unicode/_TEST_DRVR_H_PATH=${../CTools/Utils/Types/Unicode/_TEST_DIR}${../CTools/Utils/Types/Unicode/_TEST_DRVR_H}
../CTools/Utils/Types/Unicode/_TEST_DRVR_O_PATH=${../CTools/Utils/Types/Unicode/_TEST_DIR}${../CTools/Utils/Types/Unicode/_TEST_DRVR_O}
../CTools/Utils/Types/Unicode/_TEST_DRVR_C_PATH=${../CTools/Utils/Types/Unicode/_TEST_DIR}${../CTools/Utils/Types/Unicode/_TEST_DRVR_C}
../CTools/Utils/Types/Unicode/_TEST_DRVR_H_PATH=${../CTools/Utils/Types/Unicode/_TEST_DIR}${../CTools/Utils/Types/Unicode/_TEST_DRVR_H}
../CTools/Utils/Types/Unicode/_TEST_DRVR_O_PATH=${../CTools/Utils/Types/Unicode/_TEST_DIR}${../CTools/Utils/Types/Unicode/_TEST_DRVR_O}
PROD_../CTools/Utils/Types/Unicode/_TEST_C_DEPS=${../CTools/Utils/Types/Unicode/_C_PATH} ${../CTools/Utils/Types/Unicode/_TEST_C_PATH} 
PROD_../CTools/Utils/Types/Unicode/_TEST_H_DEPS=${../CTools/Utils/Types/Unicode/_H_PATH} ${../CTools/Utils/Types/Unicode/_TEST_H_PATH} 
PROD_../CTools/Utils/Types/Unicode/_TEST_O_DEPS=${../CTools/Utils/Types/Unicode/_O_PATH} ${../CTools/Utils/Types/Unicode/_TEST_O_PATH} 
DEV_../CTools/Utils/Types/Unicode/_TEST_C_DEPS=${../CTools/Utils/Types/Unicode/_C_PATH} ${../CTools/Utils/Types/Unicode/_TEST_C_PATH} ${../CTools/Utils/Types/Unicode/_TEST_DRVR_C_PATH} 
DEV_../CTools/Utils/Types/Unicode/_TEST_H_DEPS=${../CTools/Utils/Types/Unicode/_H_PATH} ${../CTools/Utils/Types/Unicode/_TEST_H_PATH} ${../CTools/Utils/Types/Unicode/_TEST_DRVR_H_PATH} 
DEV_../CTools/Utils/Types/Unicode/_TEST_O_DEPS=${../CTools/Utils/Types/Unicode/_O_PATH} ${../CTools/Utils/Types/Unicode/_TEST_O_PATH} ${../CTools/Utils/Types/Unicode/_TEST_DRVR_O_PATH} 
DEV_../CTools/Utils/Types/Unicode/_TEST_C_FILES=${../CTools/Utils/Types/Unicode/_C_PATH} ${../CTools/Utils/Types/Unicode/_TEST_C_PATH} ${../CTools/Utils/Types/Unicode/_TEST_DRVR_C_PATH} 
DEV_../CTools/Utils/Types/Unicode/_TEST_H_FILES=${../CTools/Utils/Types/Unicode/_H_PATH} ${../CTools/Utils/Types/Unicode/_TEST_H_PATH} ${../CTools/Utils/Types/Unicode/_TEST_DRVR_H_PATH} 
DEV_../CTools/Utils/Types/Unicode/_TEST_O_FILES=${../CTools/Utils/Types/Unicode/_O_PATH} ${../CTools/Utils/Types/Unicode/_TEST_O_PATH} ${../CTools/Utils/Types/Unicode/_TEST_DRVR_O_PATH} 
PROD_../CTools/Utils/Types/Unicode/_TEST_C_FILES=${../CTools/Utils/Types/Unicode/_C_PATH} ${../CTools/Utils/Types/Unicode/_TEST_C_PATH} 
PROD_../CTools/Utils/Types/Unicode/_TEST_H_FILES=${../CTools/Utils/Types/Unicode/_H_PATH} ${../CTools/Utils/Types/Unicode/_TEST_H_PATH} 
PROD_../CTools/Utils/Types/Unicode/_TEST_O_FILES=${../CTools/Utils/Types/Unicode/_O_PATH} ${../CTools/Utils/Types/Unicode/_TEST_O_PATH} 
../CTools/Utils/Types/Unicode/_TEST_DEV_FILES= ${DEV_../CTools/Utils/Types/Unicode/_TEST_C_FILES} ${DEV_../CTools/Utils/Types/Unicode/_TEST_H_FILES} ${DEV_../CTools/Utils/Types/Unicode/_TEST_O_FILES} 


Dev: ${DEV_../CTools/Utils/Types/Unicode/_TEST_C_DEPS} ${DEV_../CTools/Utils/Types/Unicode/_TEST_H_DEPS}
	cd ${../CTools/Utils/Types/Unicode/_DIR}; gcc -c ${../CTools/Utils/Types/Unicode/_C}
	cd ${../CTools/Utils/Types/Unicode/_TEST_DIR}; gcc -c ${../CTools/Utils/Types/Unicode/_TEST_C} ${../CTools/Utils/Types/Unicode/_TEST_DRVR_C}

Prod: ${PROD_../CTools/Utils/Types/Unicode/_TEST_C_DEPS} ${PROD_../CTools/Utils/Types/Unicode/_TEST_H_DEPS}
	cd ${../CTools/Utils/Types/Unicode/_DIR}; gcc -c ${../CTools/Utils/Types/Unicode/_C}
	cd ${../CTools/Utils/Types/Unicode/_TEST_DIR}; gcc -c ${../CTools/Utils/Types/Unicode/_TEST_C}

DevClean: ${DEV_../CTools/Utils/Types/Unicode/_TEST_O_DEPS}
	cd ${../CTools/Utils/Types/Unicode/_DIR}; rm -f ${../CTools/Utils/Types/Unicode/_O}
	cd ${../CTools/Utils/Types/Unicode/_TEST_DIR}; rm -f ${../CTools/Utils/Types/Unicode/_TEST_O} ${../CTools/Utils/Types/Unicode/_TEST_DRVR_O}

ProdClean: ${PROD_../CTools/Utils/Types/Unicode/_TEST_O_DEPS}
	cd ${../CTools/Utils/Types/Unicode/_DIR}; rm -f ${../CTools/Utils/Types/Unicode/_O}
	cd ${../CTools/Utils/Types/Unicode/_TEST_DIR}; rm -f ${../CTools/Utils/Types/Unicode/_TEST_O}

DevLink: ${DEV_../CTools/Utils/Types/Unicode/_TEST_O_DEPS}
	(gcc -o devTest ${../CTools/Utils/Types/Unicode/_O_PATH} ${../CTools/Utils/Types/Unicode/_TEST_O_PATH} ${../CTools/Utils/Types/Unicode/_TEST_DRVR_O_PATH})

ProdLink: ${PROD_../CTools/Utils/Types/Unicode/_TEST_O_DEPS}
	(gcc -o prodTest ${../CTools/Utils/Types/Unicode/_O_PATH} ${../CTools/Utils/Types/Unicode/_TEST_O_PATH})

DevRun: ${DEV_../CTools/Utils/Types/Unicode/_TEST_O_DEPS} ${DEV_../CTools/Utils/Types/Unicode/_TEST_C_DEPS} ${DEV_../CTools/Utils/Types/Unicode/_TEST_H_DEPS}
	make DevClean
	make Dev
	make DevLink
	./devTest

########################################################################################################################################





DEV_TEST_C_DEPS=${DEV_../CTools/_TEST_C_DEPS} ${DEV_../CTools/Automata/_TEST_C_DEPS} ${DEV_../CTools/Combinatorics/_TEST_C_DEPS} ${DEV_../CTools/Crypto/_TEST_C_DEPS} ${DEV_../CTools/Matrix/_TEST_C_DEPS} ${DEV_../CTools/Stats/_TEST_C_DEPS} ${DEV_../CTools/Utils/_TEST_C_DEPS} ${DEV_../CTools/Utils/Assertions/_TEST_C_DEPS} ${DEV_../CTools/Utils/Dictionary/_TEST_C_DEPS} ${DEV_../CTools/Utils/Rand/_TEST_C_DEPS} ${DEV_../CTools/Utils/Types/_TEST_C_DEPS} ${DEV_../CTools/Utils/Types/Array/_TEST_C_DEPS} ${DEV_../CTools/Utils/Types/Float/_TEST_C_DEPS} ${DEV_../CTools/Utils/Types/LinkList/_TEST_C_DEPS} ${DEV_../CTools/Utils/Types/Number/_TEST_C_DEPS} ${DEV_../CTools/Utils/Types/String/_TEST_C_DEPS} ${DEV_../CTools/Utils/Types/Unicode/_TEST_C_DEPS} 
DEV_TEST_H_DEPS=${DEV_../CTools/_TEST_H_DEPS} ${DEV_../CTools/Automata/_TEST_H_DEPS} ${DEV_../CTools/Combinatorics/_TEST_H_DEPS} ${DEV_../CTools/Crypto/_TEST_H_DEPS} ${DEV_../CTools/Matrix/_TEST_H_DEPS} ${DEV_../CTools/Stats/_TEST_H_DEPS} ${DEV_../CTools/Utils/_TEST_H_DEPS} ${DEV_../CTools/Utils/Assertions/_TEST_H_DEPS} ${DEV_../CTools/Utils/Dictionary/_TEST_H_DEPS} ${DEV_../CTools/Utils/Rand/_TEST_H_DEPS} ${DEV_../CTools/Utils/Types/_TEST_H_DEPS} ${DEV_../CTools/Utils/Types/Array/_TEST_H_DEPS} ${DEV_../CTools/Utils/Types/Float/_TEST_H_DEPS} ${DEV_../CTools/Utils/Types/LinkList/_TEST_H_DEPS} ${DEV_../CTools/Utils/Types/Number/_TEST_H_DEPS} ${DEV_../CTools/Utils/Types/String/_TEST_H_DEPS} ${DEV_../CTools/Utils/Types/Unicode/_TEST_H_DEPS} 
DEV_TEST_O_DEPS=${DEV_../CTools/_TEST_O_DEPS} ${DEV_../CTools/Automata/_TEST_O_DEPS} ${DEV_../CTools/Combinatorics/_TEST_O_DEPS} ${DEV_../CTools/Crypto/_TEST_O_DEPS} ${DEV_../CTools/Matrix/_TEST_O_DEPS} ${DEV_../CTools/Stats/_TEST_O_DEPS} ${DEV_../CTools/Utils/_TEST_O_DEPS} ${DEV_../CTools/Utils/Assertions/_TEST_O_DEPS} ${DEV_../CTools/Utils/Dictionary/_TEST_O_DEPS} ${DEV_../CTools/Utils/Rand/_TEST_O_DEPS} ${DEV_../CTools/Utils/Types/_TEST_O_DEPS} ${DEV_../CTools/Utils/Types/Array/_TEST_O_DEPS} ${DEV_../CTools/Utils/Types/Float/_TEST_O_DEPS} ${DEV_../CTools/Utils/Types/LinkList/_TEST_O_DEPS} ${DEV_../CTools/Utils/Types/Number/_TEST_O_DEPS} ${DEV_../CTools/Utils/Types/String/_TEST_O_DEPS} ${DEV_../CTools/Utils/Types/Unicode/_TEST_O_DEPS} 
PROD_TEST_C_DEPS=${PROD_../CTools/_TEST_C_DEPS} ${PROD_../CTools/Automata/_TEST_C_DEPS} ${PROD_../CTools/Combinatorics/_TEST_C_DEPS} ${PROD_../CTools/Crypto/_TEST_C_DEPS} ${PROD_../CTools/Matrix/_TEST_C_DEPS} ${PROD_../CTools/Stats/_TEST_C_DEPS} ${PROD_../CTools/Utils/_TEST_C_DEPS} ${PROD_../CTools/Utils/Assertions/_TEST_C_DEPS} ${PROD_../CTools/Utils/Dictionary/_TEST_C_DEPS} ${PROD_../CTools/Utils/Rand/_TEST_C_DEPS} ${PROD_../CTools/Utils/Types/_TEST_C_DEPS} ${PROD_../CTools/Utils/Types/Array/_TEST_C_DEPS} ${PROD_../CTools/Utils/Types/Float/_TEST_C_DEPS} ${PROD_../CTools/Utils/Types/LinkList/_TEST_C_DEPS} ${PROD_../CTools/Utils/Types/Number/_TEST_C_DEPS} ${PROD_../CTools/Utils/Types/String/_TEST_C_DEPS} ${PROD_../CTools/Utils/Types/Unicode/_TEST_C_DEPS} 
PROD_TEST_H_DEPS=${PROD_../CTools/_TEST_H_DEPS} ${PROD_../CTools/Automata/_TEST_H_DEPS} ${PROD_../CTools/Combinatorics/_TEST_H_DEPS} ${PROD_../CTools/Crypto/_TEST_H_DEPS} ${PROD_../CTools/Matrix/_TEST_H_DEPS} ${PROD_../CTools/Stats/_TEST_H_DEPS} ${PROD_../CTools/Utils/_TEST_H_DEPS} ${PROD_../CTools/Utils/Assertions/_TEST_H_DEPS} ${PROD_../CTools/Utils/Dictionary/_TEST_H_DEPS} ${PROD_../CTools/Utils/Rand/_TEST_H_DEPS} ${PROD_../CTools/Utils/Types/_TEST_H_DEPS} ${PROD_../CTools/Utils/Types/Array/_TEST_H_DEPS} ${PROD_../CTools/Utils/Types/Float/_TEST_H_DEPS} ${PROD_../CTools/Utils/Types/LinkList/_TEST_H_DEPS} ${PROD_../CTools/Utils/Types/Number/_TEST_H_DEPS} ${PROD_../CTools/Utils/Types/String/_TEST_H_DEPS} ${PROD_../CTools/Utils/Types/Unicode/_TEST_H_DEPS} 
PROD_TEST_O_DEPS=${PROD_../CTools/_TEST_O_DEPS} ${PROD_../CTools/Automata/_TEST_O_DEPS} ${PROD_../CTools/Combinatorics/_TEST_O_DEPS} ${PROD_../CTools/Crypto/_TEST_O_DEPS} ${PROD_../CTools/Matrix/_TEST_O_DEPS} ${PROD_../CTools/Stats/_TEST_O_DEPS} ${PROD_../CTools/Utils/_TEST_O_DEPS} ${PROD_../CTools/Utils/Assertions/_TEST_O_DEPS} ${PROD_../CTools/Utils/Dictionary/_TEST_O_DEPS} ${PROD_../CTools/Utils/Rand/_TEST_O_DEPS} ${PROD_../CTools/Utils/Types/_TEST_O_DEPS} ${PROD_../CTools/Utils/Types/Array/_TEST_O_DEPS} ${PROD_../CTools/Utils/Types/Float/_TEST_O_DEPS} ${PROD_../CTools/Utils/Types/LinkList/_TEST_O_DEPS} ${PROD_../CTools/Utils/Types/Number/_TEST_O_DEPS} ${PROD_../CTools/Utils/Types/String/_TEST_O_DEPS} ${PROD_../CTools/Utils/Types/Unicode/_TEST_O_DEPS} 
DEV_TEST_C_FILES=${DEV_../CTools/_TEST_C_FILES} ${DEV_../CTools/Automata/_TEST_C_FILES} ${DEV_../CTools/Combinatorics/_TEST_C_FILES} ${DEV_../CTools/Crypto/_TEST_C_FILES} ${DEV_../CTools/Matrix/_TEST_C_FILES} ${DEV_../CTools/Stats/_TEST_C_FILES} ${DEV_../CTools/Utils/_TEST_C_FILES} ${DEV_../CTools/Utils/Assertions/_TEST_C_FILES} ${DEV_../CTools/Utils/Dictionary/_TEST_C_FILES} ${DEV_../CTools/Utils/Rand/_TEST_C_FILES} ${DEV_../CTools/Utils/Types/_TEST_C_FILES} ${DEV_../CTools/Utils/Types/Array/_TEST_C_FILES} ${DEV_../CTools/Utils/Types/Float/_TEST_C_FILES} ${DEV_../CTools/Utils/Types/LinkList/_TEST_C_FILES} ${DEV_../CTools/Utils/Types/Number/_TEST_C_FILES} ${DEV_../CTools/Utils/Types/String/_TEST_C_FILES} ${DEV_../CTools/Utils/Types/Unicode/_TEST_C_FILES} 
DEV_TEST_H_FILES=${DEV_../CTools/_TEST_H_FILES} ${DEV_../CTools/Automata/_TEST_H_FILES} ${DEV_../CTools/Combinatorics/_TEST_H_FILES} ${DEV_../CTools/Crypto/_TEST_H_FILES} ${DEV_../CTools/Matrix/_TEST_H_FILES} ${DEV_../CTools/Stats/_TEST_H_FILES} ${DEV_../CTools/Utils/_TEST_H_FILES} ${DEV_../CTools/Utils/Assertions/_TEST_H_FILES} ${DEV_../CTools/Utils/Dictionary/_TEST_H_FILES} ${DEV_../CTools/Utils/Rand/_TEST_H_FILES} ${DEV_../CTools/Utils/Types/_TEST_H_FILES} ${DEV_../CTools/Utils/Types/Array/_TEST_H_FILES} ${DEV_../CTools/Utils/Types/Float/_TEST_H_FILES} ${DEV_../CTools/Utils/Types/LinkList/_TEST_H_FILES} ${DEV_../CTools/Utils/Types/Number/_TEST_H_FILES} ${DEV_../CTools/Utils/Types/String/_TEST_H_FILES} ${DEV_../CTools/Utils/Types/Unicode/_TEST_H_FILES} 
DEV_TEST_O_FILES=${DEV_../CTools/_TEST_O_FILES} ${DEV_../CTools/Automata/_TEST_O_FILES} ${DEV_../CTools/Combinatorics/_TEST_O_FILES} ${DEV_../CTools/Crypto/_TEST_O_FILES} ${DEV_../CTools/Matrix/_TEST_O_FILES} ${DEV_../CTools/Stats/_TEST_O_FILES} ${DEV_../CTools/Utils/_TEST_O_FILES} ${DEV_../CTools/Utils/Assertions/_TEST_O_FILES} ${DEV_../CTools/Utils/Dictionary/_TEST_O_FILES} ${DEV_../CTools/Utils/Rand/_TEST_O_FILES} ${DEV_../CTools/Utils/Types/_TEST_O_FILES} ${DEV_../CTools/Utils/Types/Array/_TEST_O_FILES} ${DEV_../CTools/Utils/Types/Float/_TEST_O_FILES} ${DEV_../CTools/Utils/Types/LinkList/_TEST_O_FILES} ${DEV_../CTools/Utils/Types/Number/_TEST_O_FILES} ${DEV_../CTools/Utils/Types/String/_TEST_O_FILES} ${DEV_../CTools/Utils/Types/Unicode/_TEST_O_FILES} 
PROD_TEST_C_FILES=${PROD_../CTools/_TEST_C_FILES} ${PROD_../CTools/Automata/_TEST_C_FILES} ${PROD_../CTools/Combinatorics/_TEST_C_FILES} ${PROD_../CTools/Crypto/_TEST_C_FILES} ${PROD_../CTools/Matrix/_TEST_C_FILES} ${PROD_../CTools/Stats/_TEST_C_FILES} ${PROD_../CTools/Utils/_TEST_C_FILES} ${PROD_../CTools/Utils/Assertions/_TEST_C_FILES} ${PROD_../CTools/Utils/Dictionary/_TEST_C_FILES} ${PROD_../CTools/Utils/Rand/_TEST_C_FILES} ${PROD_../CTools/Utils/Types/_TEST_C_FILES} ${PROD_../CTools/Utils/Types/Array/_TEST_C_FILES} ${PROD_../CTools/Utils/Types/Float/_TEST_C_FILES} ${PROD_../CTools/Utils/Types/LinkList/_TEST_C_FILES} ${PROD_../CTools/Utils/Types/Number/_TEST_C_FILES} ${PROD_../CTools/Utils/Types/String/_TEST_C_FILES} ${PROD_../CTools/Utils/Types/Unicode/_TEST_C_FILES} 
PROD_TEST_H_FILES=${PROD_../CTools/_TEST_H_FILES} ${PROD_../CTools/Automata/_TEST_H_FILES} ${PROD_../CTools/Combinatorics/_TEST_H_FILES} ${PROD_../CTools/Crypto/_TEST_H_FILES} ${PROD_../CTools/Matrix/_TEST_H_FILES} ${PROD_../CTools/Stats/_TEST_H_FILES} ${PROD_../CTools/Utils/_TEST_H_FILES} ${PROD_../CTools/Utils/Assertions/_TEST_H_FILES} ${PROD_../CTools/Utils/Dictionary/_TEST_H_FILES} ${PROD_../CTools/Utils/Rand/_TEST_H_FILES} ${PROD_../CTools/Utils/Types/_TEST_H_FILES} ${PROD_../CTools/Utils/Types/Array/_TEST_H_FILES} ${PROD_../CTools/Utils/Types/Float/_TEST_H_FILES} ${PROD_../CTools/Utils/Types/LinkList/_TEST_H_FILES} ${PROD_../CTools/Utils/Types/Number/_TEST_H_FILES} ${PROD_../CTools/Utils/Types/String/_TEST_H_FILES} ${PROD_../CTools/Utils/Types/Unicode/_TEST_H_FILES} 
PROD_TEST_O_FILES=${PROD_../CTools/_TEST_O_FILES} ${PROD_../CTools/Automata/_TEST_O_FILES} ${PROD_../CTools/Combinatorics/_TEST_O_FILES} ${PROD_../CTools/Crypto/_TEST_O_FILES} ${PROD_../CTools/Matrix/_TEST_O_FILES} ${PROD_../CTools/Stats/_TEST_O_FILES} ${PROD_../CTools/Utils/_TEST_O_FILES} ${PROD_../CTools/Utils/Assertions/_TEST_O_FILES} ${PROD_../CTools/Utils/Dictionary/_TEST_O_FILES} ${PROD_../CTools/Utils/Rand/_TEST_O_FILES} ${PROD_../CTools/Utils/Types/_TEST_O_FILES} ${PROD_../CTools/Utils/Types/Array/_TEST_O_FILES} ${PROD_../CTools/Utils/Types/Float/_TEST_O_FILES} ${PROD_../CTools/Utils/Types/LinkList/_TEST_O_FILES} ${PROD_../CTools/Utils/Types/Number/_TEST_O_FILES} ${PROD_../CTools/Utils/Types/String/_TEST_O_FILES} ${PROD_../CTools/Utils/Types/Unicode/_TEST_O_FILES} 


########################################################################################################################################





ProdTests: ${PROD_../CTools/_TEST_C_DEPS} ,${PROD_../CTools/Automata/_TEST_C_DEPS} ,${PROD_../CTools/Combinatorics/_TEST_C_DEPS} ,${PROD_../CTools/Crypto/_TEST_C_DEPS} ,${PROD_../CTools/Matrix/_TEST_C_DEPS} ,${PROD_../CTools/Stats/_TEST_C_DEPS} ,${PROD_../CTools/Utils/_TEST_C_DEPS} ,${PROD_../CTools/Utils/Assertions/_TEST_C_DEPS} ,${PROD_../CTools/Utils/Dictionary/_TEST_C_DEPS} ,${PROD_../CTools/Utils/Rand/_TEST_C_DEPS} ,${PROD_../CTools/Utils/Types/_TEST_C_DEPS} ,${PROD_../CTools/Utils/Types/Array/_TEST_C_DEPS} ,${PROD_../CTools/Utils/Types/Float/_TEST_C_DEPS} ,${PROD_../CTools/Utils/Types/LinkList/_TEST_C_DEPS} ,${PROD_../CTools/Utils/Types/Number/_TEST_C_DEPS} ,${PROD_../CTools/Utils/Types/String/_TEST_C_DEPS} ,${PROD_../CTools/Utils/Types/Unicode/_TEST_C_DEPS}  ${PROD_../CTools/_TEST_H_DEPS} ,${PROD_../CTools/Automata/_TEST_H_DEPS} ,${PROD_../CTools/Combinatorics/_TEST_H_DEPS} ,${PROD_../CTools/Crypto/_TEST_H_DEPS} ,${PROD_../CTools/Matrix/_TEST_H_DEPS} ,${PROD_../CTools/Stats/_TEST_H_DEPS} ,${PROD_../CTools/Utils/_TEST_H_DEPS} ,${PROD_../CTools/Utils/Assertions/_TEST_H_DEPS} ,${PROD_../CTools/Utils/Dictionary/_TEST_H_DEPS} ,${PROD_../CTools/Utils/Rand/_TEST_H_DEPS} ,${PROD_../CTools/Utils/Types/_TEST_H_DEPS} ,${PROD_../CTools/Utils/Types/Array/_TEST_H_DEPS} ,${PROD_../CTools/Utils/Types/Float/_TEST_H_DEPS} ,${PROD_../CTools/Utils/Types/LinkList/_TEST_H_DEPS} ,${PROD_../CTools/Utils/Types/Number/_TEST_H_DEPS} ,${PROD_../CTools/Utils/Types/String/_TEST_H_DEPS} ,${PROD_../CTools/Utils/Types/Unicode/_TEST_H_DEPS} 
	make ProdCTools
	make ProdCToolsAutomata
	make ProdCToolsCombinatorics
	make ProdCToolsCrypto
	make ProdCToolsMatrix
	make ProdCToolsStats
	make ProdCToolsUtils
	make ProdCToolsUtilsAssertions
	make ProdCToolsUtilsDictionary
	make ProdCToolsUtilsRand
	make ProdCToolsUtilsTypes
	make ProdCToolsUtilsTypesArray
	make ProdCToolsUtilsTypesFloat
	make ProdCToolsUtilsTypesLinkList
	make ProdCToolsUtilsTypesNumber
	make ProdCToolsUtilsTypesString
	make ProdCToolsUtilsTypesUnicode


ProdTestsLink: ${PROD_../CTools/_TEST_O_DEPS} ,${PROD_../CTools/Automata/_TEST_O_DEPS} ,${PROD_../CTools/Combinatorics/_TEST_O_DEPS} ,${PROD_../CTools/Crypto/_TEST_O_DEPS} ,${PROD_../CTools/Matrix/_TEST_O_DEPS} ,${PROD_../CTools/Stats/_TEST_O_DEPS} ,${PROD_../CTools/Utils/_TEST_O_DEPS} ,${PROD_../CTools/Utils/Assertions/_TEST_O_DEPS} ,${PROD_../CTools/Utils/Dictionary/_TEST_O_DEPS} ,${PROD_../CTools/Utils/Rand/_TEST_O_DEPS} ,${PROD_../CTools/Utils/Types/_TEST_O_DEPS} ,${PROD_../CTools/Utils/Types/Array/_TEST_O_DEPS} ,${PROD_../CTools/Utils/Types/Float/_TEST_O_DEPS} ,${PROD_../CTools/Utils/Types/LinkList/_TEST_O_DEPS} ,${PROD_../CTools/Utils/Types/Number/_TEST_O_DEPS} ,${PROD_../CTools/Utils/Types/String/_TEST_O_DEPS} ,${PROD_../CTools/Utils/Types/Unicode/_TEST_O_DEPS} 
	gcc -o Prod ${PROD_../CTools/_TEST_O_FILES} ,${PROD_../CTools/Automata/_TEST_O_FILES} ,${PROD_../CTools/Combinatorics/_TEST_O_FILES} ,${PROD_../CTools/Crypto/_TEST_O_FILES} ,${PROD_../CTools/Matrix/_TEST_O_FILES} ,${PROD_../CTools/Stats/_TEST_O_FILES} ,${PROD_../CTools/Utils/_TEST_O_FILES} ,${PROD_../CTools/Utils/Assertions/_TEST_O_FILES} ,${PROD_../CTools/Utils/Dictionary/_TEST_O_FILES} ,${PROD_../CTools/Utils/Rand/_TEST_O_FILES} ,${PROD_../CTools/Utils/Types/_TEST_O_FILES} ,${PROD_../CTools/Utils/Types/Array/_TEST_O_FILES} ,${PROD_../CTools/Utils/Types/Float/_TEST_O_FILES} ,${PROD_../CTools/Utils/Types/LinkList/_TEST_O_FILES} ,${PROD_../CTools/Utils/Types/Number/_TEST_O_FILES} ,${PROD_../CTools/Utils/Types/String/_TEST_O_FILES} ,${PROD_../CTools/Utils/Types/Unicode/_TEST_O_FILES} 

ProdTestsClean: ${PROD_../CTools/_TEST_O_DEPS} ,${PROD_../CTools/Automata/_TEST_O_DEPS} ,${PROD_../CTools/Combinatorics/_TEST_O_DEPS} ,${PROD_../CTools/Crypto/_TEST_O_DEPS} ,${PROD_../CTools/Matrix/_TEST_O_DEPS} ,${PROD_../CTools/Stats/_TEST_O_DEPS} ,${PROD_../CTools/Utils/_TEST_O_DEPS} ,${PROD_../CTools/Utils/Assertions/_TEST_O_DEPS} ,${PROD_../CTools/Utils/Dictionary/_TEST_O_DEPS} ,${PROD_../CTools/Utils/Rand/_TEST_O_DEPS} ,${PROD_../CTools/Utils/Types/_TEST_O_DEPS} ,${PROD_../CTools/Utils/Types/Array/_TEST_O_DEPS} ,${PROD_../CTools/Utils/Types/Float/_TEST_O_DEPS} ,${PROD_../CTools/Utils/Types/LinkList/_TEST_O_DEPS} ,${PROD_../CTools/Utils/Types/Number/_TEST_O_DEPS} ,${PROD_../CTools/Utils/Types/String/_TEST_O_DEPS} ,${PROD_../CTools/Utils/Types/Unicode/_TEST_O_DEPS} 
	make ProdCToolsClean
	make ProdCToolsAutomataClean
	make ProdCToolsCombinatoricsClean
	make ProdCToolsCryptoClean
	make ProdCToolsMatrixClean
	make ProdCToolsStatsClean
	make ProdCToolsUtilsClean
	make ProdCToolsUtilsAssertionsClean
	make ProdCToolsUtilsDictionaryClean
	make ProdCToolsUtilsRandClean
	make ProdCToolsUtilsTypesClean
	make ProdCToolsUtilsTypesArrayClean
	make ProdCToolsUtilsTypesFloatClean
	make ProdCToolsUtilsTypesLinkListClean
	make ProdCToolsUtilsTypesNumberClean
	make ProdCToolsUtilsTypesStringClean
	make ProdCToolsUtilsTypesUnicodeClean


ProdTestsRun: ${PROD_../CTools/_TEST_C_DEPS} ,${PROD_../CTools/Automata/_TEST_C_DEPS} ,${PROD_../CTools/Combinatorics/_TEST_C_DEPS} ,${PROD_../CTools/Crypto/_TEST_C_DEPS} ,${PROD_../CTools/Matrix/_TEST_C_DEPS} ,${PROD_../CTools/Stats/_TEST_C_DEPS} ,${PROD_../CTools/Utils/_TEST_C_DEPS} ,${PROD_../CTools/Utils/Assertions/_TEST_C_DEPS} ,${PROD_../CTools/Utils/Dictionary/_TEST_C_DEPS} ,${PROD_../CTools/Utils/Rand/_TEST_C_DEPS} ,${PROD_../CTools/Utils/Types/_TEST_C_DEPS} ,${PROD_../CTools/Utils/Types/Array/_TEST_C_DEPS} ,${PROD_../CTools/Utils/Types/Float/_TEST_C_DEPS} ,${PROD_../CTools/Utils/Types/LinkList/_TEST_C_DEPS} ,${PROD_../CTools/Utils/Types/Number/_TEST_C_DEPS} ,${PROD_../CTools/Utils/Types/String/_TEST_C_DEPS} ,${PROD_../CTools/Utils/Types/Unicode/_TEST_C_DEPS}  ${PROD_../CTools/_TEST_H_DEPS} ,${PROD_../CTools/Automata/_TEST_H_DEPS} ,${PROD_../CTools/Combinatorics/_TEST_H_DEPS} ,${PROD_../CTools/Crypto/_TEST_H_DEPS} ,${PROD_../CTools/Matrix/_TEST_H_DEPS} ,${PROD_../CTools/Stats/_TEST_H_DEPS} ,${PROD_../CTools/Utils/_TEST_H_DEPS} ,${PROD_../CTools/Utils/Assertions/_TEST_H_DEPS} ,${PROD_../CTools/Utils/Dictionary/_TEST_H_DEPS} ,${PROD_../CTools/Utils/Rand/_TEST_H_DEPS} ,${PROD_../CTools/Utils/Types/_TEST_H_DEPS} ,${PROD_../CTools/Utils/Types/Array/_TEST_H_DEPS} ,${PROD_../CTools/Utils/Types/Float/_TEST_H_DEPS} ,${PROD_../CTools/Utils/Types/LinkList/_TEST_H_DEPS} ,${PROD_../CTools/Utils/Types/Number/_TEST_H_DEPS} ,${PROD_../CTools/Utils/Types/String/_TEST_H_DEPS} ,${PROD_../CTools/Utils/Types/Unicode/_TEST_H_DEPS} 
	make ProdTestsClean
	make ProdTests
	make ProdTestsLink
	./Prod

########################################################################################################################################





