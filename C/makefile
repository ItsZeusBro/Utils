AUTOMATA_DIR=Automata/
AUTOMATA_c=${AUTOMATA_DIR}Automata.c
AUTOMATA_o=${AUTOMATA_DIR}Automata.o
AUTOMATA_T_c=${AUTOMATA_DIR}Test.c
AUTOMATA_T_o=${AUTOMATA_DIR}Test.o
AUTOMATA=${AUTOMATA_c} ${AUTOMATA_o} ${AUTOMATA_T_c} ${AUTOMATA_T_o}

COMBINATORICS_DIR=Combinatorics/
COMBINATORICS_c=${COMBINATORICS_DIR}Combinatorics.c
COMBINATORICS_o=${COMBINATORICS_DIR}Combinatorics.o
COMBINATORICS_T_c=${COMBINATORICS_DIR}Test.c
COMBINATORICS_T_o=${COMBINATORICS_DIR}Test.o
COMBINATORICS=${COMBINATORICS_c} ${COMBINATORICS_o} ${COMBINATORICS_T_c} ${COMBINATORICS_T_o}

CRYPTO_DIR=Crypto/
CRYPTO_c=${CRYPTO_DIR}Crypto.c
CRYPTO_o=${CRYPTO_DIR}Crypto.o
CRYPTO_T_c=${CRYPTO_DIR}Test.c
CRYPTO_T_o=${CRYPTO_DIR}Test.o
CRYPTO=${CRYPTO_c} ${CRYPTO_o} ${CRYPTO_T_c} ${CRYPTO_T_o}

MATRIX_DIR=Matrix/
MATRIX_c=${MATRIX_DIR}Combinatorics.c
MATRIX_o=${MATRIX_DIR}Combinatorics.o
MATRIX_T_c=${MATRIX_DIR}Test.c
MATRIX_T_o=${MATRIX_DIR}Test.o
MATRIX=${MATRIX_c} ${MATRIX_o} ${MATRIX_T_c} ${MATRIX_T_o}

STATISTICS_DIR=Statistics/
STATISTICS_c=${STATISTICS_DIR}Statistics.c
STATISTICS_o=${STATISTICS_DIR}Statistics.o
STATISTICS_T_c=${STATISTICS_DIR}Test.c
STATISTICS_T_o=${STATISTICS_DIR}Test.o
STATISTICS=${STATISTICS_c} ${STATISTICS_o} ${STATISTICS_T_c} ${STATISTICS_T_o}

UTILS_DIR=Utils/
UTILS_c=${UTILS_DIR}Utils.c
UTILS_o=${UTILS_DIR}Utils.o
UTILS_T_c=${UTILS_DIR}Test.c
UTILS_T_o=${UTILS_DIR}Test.o
UTILS_D=${UTILS_c} ${UTILS_o} ${UTILS_T_c} ${UTILS_T_o}

UTILS_ASSERTIONS_DIR=${UTILS_DIR}Assertions/
UTILS_ASSERTIONS_c=${UTILS_ASSERTIONS_DIR}Assertions.c
UTILS_ASSERTIONS_o=${UTILS_ASSERTIONS_DIR}Assertions.o
UTILS_ASSERTIONS_T_c=${UTILS_ASSERTIONS_DIR}Test.c
UTILS_ASSERTIONS_T_o=${UTILS_ASSERTIONS_DIR}Test.o
UTILS_ASSERTIONS=${UTILS_ASSERTIONS_c} ${UTILS_ASSERTIONS_o} ${UTILS_ASSERTIONS_T_c} ${UTILS_ASSERTIONS_T_o}

UTILS_DICTIONARY_DIR=${UTILS_DIR}Dictionary/
UTILS_DICTIONARY_c=${UTILS_DICTIONARY_DIR}Dictionary.c
UTILS_DICTIONARY_o=${UTILS_DICTIONARY_DIR}Dictionary.o
UTILS_DICTIONARY_T_c=${UTILS_DICTIONARY_DIR}Test.c
UTILS_DICTIONARY_T_o=${UTILS_DICTIONARY_DIR}Test.o
UTILS_DICTIONARY=${UTILS_DICTIONARY_c} ${UTILS_DICTIONARY_o} ${UTILS_DICTIONARY_T_c} ${UTILS_DICTIONARY_T_o}

UTILS_RAND_DIR=${UTILS_DIR}Rand/
UTILS_RAND_c=${UTILS_RAND_DIR}Assertions.c
UTILS_RAND_o=${UTILS_RAND_DIR}Assertions.o
UTILS_RAND_T_c=${UTILS_RAND_DIR}Test.c
UTILS_RAND_T_o=${UTILS_RAND_DIR}Test.o
UTILS_RAND=${UTILS_RAND_c} ${UTILS_RAND_o} ${UTILS_RAND_T_c} ${UTILS_RAND_T_o}


UTILS= ${UTILS_D} ${UTILS_ASSERTIONS} ${UTILS_DICTIONARY}

testAll: ${AUTOMATA} ${COMBINATORICS} ${CRYPTO} ${MATRIX} ${STATISTICS} ${UTILS}
	echo "Global Test All"
	(cd Automata; make testAll)
	(cd Combinatorics; make testAll)
	(cd Crypto; make testAll)
	(cd Matrix; make testAll)
	(cd Statistics; make testAll)
	(cd Utils; make testAll)
	(gcc -o TestAll Test.c)

testCleanAll: ${AUTOMATA_D} ${COMBINATORICS_D}
	echo "Global Clean All"
	(cd Automata; make testCleanAll)
	(cd Combinatorics; make testCleanAll)
	(cd Crypto; make testCleanAll)
	(cd Matrix; make testCleanAll)
	(cd Statistics; make testCleanAll)
	(cd Utils; make testCleanAll)
	(rm ./Test.o)

#AUTOMATA
testAutomata: Automata/Automata.c Automata/Test.c
	(cd Automata; make testAll)
testCleanAutomata: Automata/Automata.o Automata/Test.o
	(cd Automata; make testCleanAll)


#COMBINATORICS
testCombinatorics: Combinatorics/Combinatorics.c Combinatorics/Test.c
	(cd Combinatorics; make testAll)
testCleanCombinatorics: Combinatorics/Combinatorics.o Combinatorics/Test.o
	(cd Combinatorics; make testCleanAll)


#CRYPTO
testCrypto: Crypto/Crypto.c Crypto/Test.c
	(cd Crypto; make testAll)
testCleanCrypto: Crypto/Crypto.o Crypto/Test.o
	(cd Crypto; make testCleanAll)


#MATRIX
testMatrix: Matrix/Matrix.c Matrix/Test.c
	(cd Matrix; make testAll)
testCleanMatrix: Matrix/Matrix.o Matrix/Test.o
	(cd Matrix; make testCleanAll)


#STATISTICS
testStatistics: Statistics/Statistics.c Statistics/Test.c
	(cd Statistics; make testAll)
testCleanStatistics: Statistics/Statistics.o Statistics/Test.o
	(cd Statistics; make testCleanAll)


#UTILS
testUtils: Utils/Utils.c Utils/Test.c
	(cd Utils; make testAll)
testCleanUtils: Utils/Utils.o Utils/Test.o
	(cd Utils; make testCleanAll)


#UTILS/ASSERTIONS
testUtilsAssertions: Utils/Assertions/Assertions.c Utils/Assertions/Test.c
	(cd Utils; cd Assertions; make testAll)
testCleanUtilsAssertions: Utils/Assertions/Assertions.o Utils/Assertions/Test.o
	(cd Utils; cd Assertions; make testCleanAll)


#UTILS/DICTIONARY
testUtilsDictionary: Utils/Dictionary/Dictionary.c Utils/Dictionary/Test.c
	(cd Utils; cd Dictionary; make testAll)
testCleanUtilsDictionary: Utils/Dictionary/Dictionary.o Utils/Dictionary/Test.o
	(cd Utils; cd Dictionary; make testCleanAll)


#UTILS/RAND
testUtilsRand: Utils/Rand/Rand.c Utils/Rand/Test.c
	(cd Utils; cd Rand; make testAll)
testCleanUtilsRand: Utils/Rand/Rand.o Utils/Rand/Test.o
	(cd Utils; cd Rand; make testCleanAll)


#UTILS/REFERENCE
testUtilsReference: Utils/Reference/Reference.c Utils/Reference/Test.c
	(cd Utils; cd Reference; make testAll)
testCleanUtilsReference: Utils/Reference/Reference.o Utils/Reference/Test.o
	(cd Utils; cd Reference; make testCleanAll)


#UTILS/TYPES
testUtilsTypes: Utils/Types/Types.c Utils/Types/Test.c
	(cd Utils; cd Types; make testAll)
testCleanUtilsTypes: Utils/Types/Types.o Utils/Types/Test.o
	(cd Utils; cd Types; make testCleanAll)


#UTILS/TYPES/ARRAY
testUtilsTypesArray: Utils/Types/Array/Array.c Utils/Types/Array/Test.c
	(cd Utils; cd Types; cd Array; make testAll)
testCleanUtilsTypesArray: Utils/Types/Array/Array.o Utils/Types/Array/Test.o
	(cd Utils; cd Types; cd Array; make testCleanAll)


#UTILS/TYPES/FLOAT
testUtilsTypesFloat: Utils/Types/Float/Float.c Utils/Types/Float/Test.c
	(cd Utils; cd Types; cd Float; make testAll)
testCleanUtilsTypesFloat: Utils/Types/Float/Float.o Utils/Types/Float/Test.o
	(cd Utils; cd Types; cd Float; make testCleanAll)


#UTILS/TYPES/LINKLIST
testUtilsTypesLinkList: Utils/Types/LinkedList/LinkedList.c Utils/Types/LinkedList/Test.c
	(cd Utils; cd Types; cd LinkList; make testAll)
testCleanUtilsTypesLinkList: Utils/Types/LinkedList/LinkedList.o Utils/Types/LinkedList/Test.o
	(cd Utils; cd Types; cd LinkList; make testCleanAll)


#UTILS/TYPES/NUMBER
testUtilsTypesNumber: Utils/Types/Number/Number.c Utils/Types/Number/Test.c
	(cd Utils; cd Types; cd Number; make testAll)
testCleanUtilsTypesNumber: Utils/Types/Number/Number.o Utils/Types/Number/Test.o
	(cd Utils; cd Types; cd Number; make testCleanAll)


#UTILS/TYPES/STRING
testUtilsTypesString: Utils/Types/String/String.c Utils/Types/String/Test.c
	(cd Utils; cd Types; cd String; make testAll)
testCleanUtilsTypesString: Utils/Types/String/String.o Utils/Types/String/Test.o
	(cd Utils; cd Types; cd String; make testCleanAll)


#UTILS/TYPES/UNICODE
testUtilsTypesUnicode: Utils/Types/Unicode/Unicode.c Utils/Types/Unicode/Test.c
	(cd Utils; cd Types; cd Unicode; make testAll)
testCleanUtilsTypesUnicode: Utils/Types/Unicode/Unicode.o Utils/Types/Unicode/Test.o
	(cd Utils; cd Types; cd Unicode; make testCleanAll)


