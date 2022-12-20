#ifndef RAND_FILE
#define RAND_FILE

#include "../Types/String/String.h"
#include "../Types/Number/Number.h"
#include "../Types/Float/Float.h"
#include "../Types/LinkList/LinkList.h"
#include "../Types/Struct/Struct.h"
#include "../Types/Array/Array.h"


struct randStr{
    char *str;
    long long int min;
    long long int max;
};

struct randNumber{
    long long int min;
    long long int max;
};

struct randLinkList{
    long long int min;
    long long int max;
    char type[20];
};

struct randArr{
    char *_randArr;
    long long int min;
    long long int max;
};

struct randStruct{
    void *_randStruct;
    char * types;   //a comma separated list of available Struct types
    long long int min;
    long long int max;
};

struct randFloat{
    long long float _float;
    long long float min;
    long long float max;
}

struct Number * genNumber(struct randNumber * _randNumber);
struct LinkList * genNumber(struct randLinkList * _randLinkList);
struct Struct * genStruct(struct randStruct * _randStruct);
struct String * genStr(struct randStr * _randStr);
struct Array * genArray(struct randArr * _randArr);
struct Float * genFloat(struct randFloat * _randFloat);


#endif