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
                                         //and there garbage functions to do so

int recycle()                            //Long term expiriment: Every type should have a creation time and should be freed if it is not used for a long time
                                         //by maintaining a recycling table. Depending on the type, we can analyze statistically how programs perform, and use
                                         //this function to help our programs run longer before crashing due to memory leaks. This is good for massively parallel
                                         //problems where there is less importance for any given process
#endif