#include "String.h"
#ifndef STRING_TEST_FILE
#define STRING_TEST_FILE

int assertEqual(struct String, struct String);
void stringTest(int verbose);


// struct String{
//     char *str;
//     int size;
// };


int addAt(int index, struct String *str, char ch){

}

int slice(struct String *str, int index1, int index2){

}

int splice(struct String *str, int index1, int index2){

}

int copy(struct String *str){

}

int removeAt(int index, struct String *str){

}

int removeAll(struct String *str, char ch){

}

int trim(struct String *str){

}

int trimRight(struct String *str){

}

int trimLeft(struct String *str){

}

int _realloc(struct String *str, int sizeInBytes){

}

int _malloc(struct String *str, int sizeInBytes){

}

int _calloc(struct String *str, int sizeInBytes){

}

int compare(struct String *str1, struct String *str2){

}

int concat(struct String *str1, struct String *str2){

}

int size(struct String *str){

}

int substr(struct String *str, struct String *str){

}




#endif