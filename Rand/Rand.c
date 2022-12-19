#include "Rand.h"
#include <stdio.h>
#include <stdlib.h>
#include <time.h> 

struct String * genStr(int size){
    
    struct String * str = (struct String *) malloc(sizeof(string));
    str->str = (char *) malloc(size*sizeof(char));

    srand((unsigned) time(NULL));
    for(int i = 0; i<size; i++){
        char charCode = (rand() % 127)+1;
        str->str[i]=charCode;
    }
    return str;
}