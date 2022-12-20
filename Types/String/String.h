#ifndef STRING_FILE
#define STRING_FILE

struct String{
    char *str;
    int size;
};


struct String * addAt(int index, struct String *str, char ch);

struct String * slice(struct String *str, int index1, int index2);

struct String * splice(struct String *str, int index1, int index2);

struct String * copy(struct String *str);

struct String * removeAt(int index, struct String *str);

struct String * removeAll(struct String *str, char ch);

struct String * trim(struct String *str);

struct String * trimRight(struct String *str);

struct String * trimLeft(struct String *str);

struct String * _realloc(struct String *str, int sizeInBytes);

struct String * _malloc(struct String *str, int sizeInBytes);

struct String * _calloc(struct String *str, int sizeInBytes);

struct String * compare(struct String *str1, struct String *str2);

struct String * concat(struct String *str1, struct String *str2);

int size(struct String *str);

struct String * substr(struct String *str, struct String *str);


#endif