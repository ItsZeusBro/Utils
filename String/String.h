#ifndef STRING_FILE
#define STRING_FILE

struct{
    char* str;
    int size;
    char* next;
    char* prev;
}string;

string* slice(string*, int min, int max);

string* copy(string* _string);

string* removeAt(string* _string, int _at);

string* addAt(string* _string, int _at);

string* removeAll(string* _string, char _char);

int size(string* _string);

string* trim(string* _string);

string* trimRight(string* _string);

string* trimLeft(string* _string);

string* realloc(string* _string, int _size);

string* malloc(string* _string, int _size);

string* calloc(string* _string, int _size);

//get the index of _prev, the size of _byts that we multiply by to get next
string* next(string* _string);

string* prev(string* _string);

string* compare(string* _string);

string* size(string*);

string* substr(string* _string1, string* _string2);

#endif