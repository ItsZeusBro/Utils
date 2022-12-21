
types: Types.c Test.c Array/Array.c Float/Float.c LinkList/LinkList.c Number/Number.c String/String.c Unicode/Unicode.c
	(gcc -fPIC -c Types.c Test.c)

clean:
	(cd Array; make testCleanAll)
	(cd Float; make testCleanAll)
	(cd LinkList; make testCleanAll)
	(cd Number; make testCleanAll)
	(cd String; make testCleanAll)
	(cd Unicode; make testCleanAll)
	rm ./Types.o ./Test.o