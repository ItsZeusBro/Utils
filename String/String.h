#ifndef STRING_FILE
#define STRING_FILE

struct String{
    char *str;
    int size;
    char *next;
    char *prev;
};

struct String* slice(struct String*, int, int);

struct String* copy(struct String*);

struct String* removeAt(struct String*, int);

struct String* addAt(struct String*, int);

struct String* removeAll(struct String*, char);

struct String* trim(struct String*);

struct String* trimRight(struct String*);

struct String* trimLeft(struct String*);

struct String* _realloc(struct String*, int);

struct String* _malloc(struct String*, int);

struct String* _calloc(struct String*, int);

//get the index of _prev, the size of _byts that we multiply by to get next
struct String* next(struct String*);

struct String* prev(struct String*);

struct String* compare(struct String*);

int size(struct String*);

struct String* substr(struct String*, struct String*);



#endif