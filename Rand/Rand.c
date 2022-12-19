#include "Rand.h"
#include <stdio.h>
#include <stdlib.h>

struct String * genStr(int size){
    string * str = (string *) malloc(sizeof(string));
    str.str = (char *) malloc(size*sizeof(char));
    srand((unsigned) time(&t));
    for(int i = 0; i<size; i++){
        char charCode = (rand() % 127)+1;
        str.str[i]=charCode;
    }
    return str&
}