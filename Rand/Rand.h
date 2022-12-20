#ifndef RAND_FILE
#define RAND_FILE

#include "../Types/String/String.h"
#include "../Types/Number/Number.h"
#include "../Types/Float/Float.h"
#include "../Types/LinkList/LinkList.h"
#include "../Types/Struct/Struct.h"
#include "../Types/Array/Array.h"



struct Number * genNumber(long long int min, long long int max);
struct LinkList * genLinkList(long long int min, long long int max, char * type);

//[  "123", "456", "789"  ]

struct Struct * genStruct(char ** types, long long int min, long long int max,);
struct String * genStr(long long int min, long long int max);
struct Array * genArray(char ** types, long long int min, long long int max);
struct Float * genFloat(long long float min, long long float max);


#endif