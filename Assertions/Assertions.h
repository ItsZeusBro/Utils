#ifndef ASSERTIONS_FILE
#define ASSERTIONS_FILE

#include "../Types/String/String.h"
#include "../Types/Array/Array.h"

int stringsEqual(struct String *str1, struct String *str2);

int arraysEqual(struct Arr * arr1, struct Arr * arr2);

//these check for struct conformity in memory
//first we need to study the memory layout of each of our structs
//and we need to actually create some signature for our struct types
//basically if we try to dereference a void pointer that contains a something
//without a type variable, the C program will crash. But if we fork the process
//and see if it returns true, we can use a try function for type checking and 
//other things
int isString(void * obj);
int isArray(void * obj);  
int isInt(void * obj);
int isFloat(void * obj);


int hexEqual(struct Hex * hex1, struct Hex * hex2);
int b64Equal(struct B64 * b641, struct B64 * b642);
int binEqual(struct BIN * b641, struct B64 * b642);
int byt8Equal();
int byt16Equal();
int byt32Equal();
int byt64Equal();
int numberEqual();

int isHex();
int isb64();
int isbin();
int isByt8();
int isByt16();
int isByt32();
int isByt64();
int isAscii();
int isUnicode();


#endif