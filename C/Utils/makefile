testAll: Utils.c Test.c Types/Types.c Reference/Reference.c Rand/Rand.c Dictionary/Dictionary.c Assertions/Assertions.c
	(gcc -fPIC -c Test.c Utils.c)

testCleanAll:
	(cd Assertions; make testCleanAll)
	(cd Dictionary; make testCleanAll)
	(cd Rand; make testCleanAll)
	(cd Types; make testCleanAll)
	rm ./Test.o ./Utils.o