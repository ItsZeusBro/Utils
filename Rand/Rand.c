#include "Rand.h"
#include <stdio.h>
#include <stdlib.h>
#include <time.h> 
#include "Rand.h"

struct Number * genNumber(struct randNumber * _randNumber){
    int number = (min + rand() % (max+1 - min));      //https://stackoverflow.com/questions/29381843/generate-random-number-in-range-min-max
}

struct LinkList * genLinkList(struct randLinkList * _randLinkList){

}

struct Struct * genStruct(struct randStruct * _randStruct){

}

struct String * genStr(struct randStr * _randStr){
    struct String * str = (struct String *) malloc(sizeof(string));

}

struct Array * genArray(struct randArr * _randArr){

}

struct Float * genFloat(struct randFloat * _randFloat){

}