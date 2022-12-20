#ifndef UNICODE_FILE
#define UNICODE_FILE

struct Unicode{
    int _char;
    int nBytes;
};

struct Unicode * _mallocUnicode(int nBytes);

struct Unicode * _callocUnicode(int nBytes);

struct Unicode * unicode(int unicode);

void printUnicode(int charCode);



#endif



