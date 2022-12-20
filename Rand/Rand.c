#include "Rand.h"
#include <stdio.h>
#include <stdlib.h>
#include <time.h> 
#include "Rand.h"

struct Number * genNumber(long long int min, long long int max){
    int number = (min + rand() % (max+1 - min));      //https://stackoverflow.com/questions/29381843/generate-random-number-in-range-min-max
}

struct LinkList * genLinkList(long long int min, long long int max, char * type){

}

struct Struct * genStruct(char ** types, long long int min, long long int max){

    
}

struct String * genStr(long long int min, long long int max){
    struct String * str = (struct String *) malloc(sizeof(string));
}

struct Number * genNumber(long long int min, long long int max){

}
struct Array * genArray(char ** types, long long int min, long long int max){
    //[       "123",      "456",      "789"       ]
  //0x1      0x2         0x3         0x4
    //^        ^           ^           ^
    //^
    //pointer to pointer can do pointer arithmetic on array like structures
    //https://stackoverflow.com/questions/5935933/dynamically-create-an-array-of-strings-with-malloc
    // char **orderedIds;

    // orderedIds = malloc(variableNumberOfElements * sizeof(char*));
    // for (int i = 0; i < variableNumberOfElements; i++)
    //     orderedIds[i] = malloc((ID_LEN+1) * sizeof(char)); 
}



struct Struct * genStruct(char ** types, long long int min, long long int max,);
struct String * genStr(long long int min, long long int max);
struct Array * genArray(char ** types, long long int min, long long int max);
struct Float * genFloat(long long float min, long long float max);