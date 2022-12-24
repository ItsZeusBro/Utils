#include "Unicode.h"


//we need to return a pointer to Unicode struct because
//malloc returns a pointer. The pointer contains an 
//address that contains a byte that is contiguously related
//to n bytes following the byte that the pointer references
// struct Unicode * _mallocUnicode(int nBytes){

//     //malloc() doesn’t initialize the allocated memory.
//     struct Unicode * unicode = (struct Unicode *) malloc(sizeof(Unicode));
//     unicode->nBytes=nBytes
//     unicode->_char = malloc(unicode->nBytes*sizeof(char));

//     return unicode//
// }

// struct Unicode * _callocUnicode(int nBytes){
//     //calloc() initializes the allocated memory to 0.
//     //calloc returns a pointer to NULL (as opposed to an address that points to memory)

// }

// struct Unicode * unicode(int unicode){
//     //takes the unicode number and returns a Unicode struct pointer
// }

// void printUnicode(int charCode){

// }

