#ifndef UTILS_ASSERTIONS
#define UTILS_ASSERTIONS

#include "../Types/String/String.h"
#include "../Types/Array/Array.h"
#include "../Types/Float/Float.h"
#include "../Types/LinkList/LinkList.h"
#include "../Types/Number/Number.h"


//these check for struct conformity in memory
//first we need to study the memory layout of each of our structs
//and we need to actually create some signature for our struct types
//basically if we try to dereference a void pointer that contains a something
//without a type variable, the C program will crash. But if we fork the process
//and see if it returns true, we can use a try function for type checking and 
//other things

int hexEqual(struct HEX * hex1, struct HEX * hex2);
int b64Equal(struct B64 * b1, struct B64 * b2);
int binEqual(struct BIN * bin1, struct B64 * bin2);
int byt8Equal(struct BYT8 * byt1, struct BYT8 * byt2);
int byt16Equal(struct BYT16 * byt1, struct BYT16 * byt2);
int byt32Equal(struct BYT32 * byt1, struct BYT32 * byt2);
int byt64Equal(struct BYT64 * b1, struct BYT64 * b2);
int numberEqual(struct Number * num1, struct Number * num2);
int floatEqual(struct Float * flt1, struct Float * flt2);
int stringsEqual(struct String *str1, struct String *str2);
int arrayEqual(struct Array * arr1, struct Array * arr2);

int isHex(void * obj);
int isb64(void * obj);
int isbin(void * obj);
int isByt8(void * obj);
int isByt16(void * obj);
int isByt32(void * obj);
int isByt64(void * obj);
int isAscii(void * obj);
int isUnicode(void * obj);
int isFloat(void * obj);
int isNumber(void * obj);
int isString(void * obj);
int isArray(void * obj);

#endif