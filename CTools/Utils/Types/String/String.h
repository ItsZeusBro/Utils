#ifndef STRING_FILE
#define STRING_FILE

struct String{
    char *str;
    int size;
};


struct String * addAtString(int index, struct String *str, char ch);

struct String * sliceString(struct String *str, int index1, int index2);

struct String * copyString(struct String *str);

struct String * removeAtString(int index, struct String *str);

struct String * removeAllString(struct String *str, char ch);

struct String * trimString(struct String *str);

struct String * trimRightString(struct String *str);

struct String * trimLeftString(struct String *str);

struct String * reallocString(struct String *str, int sizeInBytes);

struct String * mallocString(struct String *str, int sizeInBytes);

struct String * callocString(struct String *str, int sizeInBytes);

struct String * compareString(struct String *str1, struct String *str2);

struct String * concatString(struct String *str1, struct String *str2);

int sizeString(struct String *str);

struct String * substrString(struct String *str1, struct String *str2);


#endif