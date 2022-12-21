
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include "./Assertions.h"


int hexEqual(struct HEX * hex1, struct HEX * hex2){return 0;}
int b64Equal(struct B64 * b1, struct B64 * b2){return 0;}
int binEqual(struct BIN * bin1, struct B64 * bin2){return 0;}
int byt8Equal(struct BYT8 * byt1, struct BYT8 * byt2){return 0;}
int byt16Equal(struct BYT16 * byt1, struct BYT16 * byt2){return 0;}
int byt32Equal(struct BYT32 * byt1, struct BYT32 * byt2){return 0;}
int byt64Equal(struct BYT64 * b1, struct BYT64 * b2){return 0;}
int numberEqual(struct Number * num1, struct Number * num2){return 0;}
int floatEqual(struct Float * flt1, struct Float * flt2){return 0;}
int stringsEqual(struct String *str1, struct String *str2){return 0;}
int arrayEqual(struct Array * arr1, struct Array * arr2){return 0;}

int isHex(void * obj){return 0;}
int isb64(void * obj){return 0;}
int isbin(void * obj){return 0;}
int isByt8(void * obj){return 0;}
int isByt16(void * obj){return 0;}
int isByt32(void * obj){return 0;}
int isByt64(void * obj){return 0;}
int isAscii(void * obj){return 0;}
int isUnicode(void * obj){return 0;}
int isFloat(void * obj){return 0;}
int isNumber(void * obj){return 0;}
int isString(void * obj){return 0;}
int isArray(void * obj){return 0;}