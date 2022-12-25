#ifndef CTOOLS_UTILS_MEMORY_MEMORY
#define CTOOLS_UTILS_MEMORY_MEMORY

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
#endif