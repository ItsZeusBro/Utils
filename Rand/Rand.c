#include "Rand.h"
#include <stdio.h>
#include <stdlib.h>
#include <time.h> 

//A char in c is an 8 byte (256 ascii possibilities) memory buffer
//if we wanted to support other types of unicode charachters we need our own
//structs and files that support the memory management
struct String * genStr(int min, int max){
    
    struct String * str = (struct String *) malloc(sizeof(string));
    struct String * str2 = (struct String *) malloc(sizeof(string));

    //Casting to (char *) allows us to do pointer arithmetic like next++ or whatever
    //if we did not cast malloc's return pointer, we would only have byte pointer
    str->str = (char *) malloc(size*sizeof(char));
    str2->str = malloc(size*sizeof(char));
    printf("%d", sizeof(char));
    printf("str %p\n", str->str);
    str->str++;
    printf("str %p\n", str->str);
    printf("str2 %p\n", str2->str);
    str2->str+=(2*(sizeof(char)));
    printf("str2 %p\n", str2->str);

    // str->size=size;
    // str->prev=&str->str;
    // str->next=&str->str;
    // str->next++;

    // srand((unsigned) time(NULL));
    // for(int i = 0; i<size; i++){
    //     char charCode = (rand() % 127)+1;
    //     str->str
    // }

    return str;
}

int genInt(struct randInt * randIntStruct){
    //https://stackoverflow.com/questions/29381843/generate-random-number-in-range-min-max
    return (min + rand() % (max+1 - min));
}

void * genStruct(struct randStruct * randStructStruct){
    //takes a struct prototype and randomly fills it according to the types in the _struct
}


void * genArray(void * _struct){

}

float genFloat(float min, float max){
    
}