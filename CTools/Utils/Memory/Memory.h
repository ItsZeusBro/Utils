#ifndef CTOOLS_UTILS_MEMORY_MEMORY
#define CTOOLS_UTILS_MEMORY_MEMORY

struct Heap{
    int sizeInBytes;    //this doesnt gaurantee that we wont have over allocations because heapSize is not always contiguous
};
void * safeMalloc();
void * safeAlloc();
void * safeReAlloc();
void * safeAllignedAlloc();
void * safeCalloc();
void * safeReCalloc();  //free's existing buffer and resizes and intializes in one step
void * safeReMalloc();  //free's existing buffer and resizes and does not initialize in one step
void * safeReAllocArray();
void * safeMallocArray();
void * safeCallocArray();
void * safeMemAllign();
void * heapSize();  //gets the available heap size
int garbageCan(void * ptr, char * type); //Every type should have a function that frees its memory, and garbage can calls on these types
#endif