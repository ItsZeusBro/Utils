#ifndef LINK_LIST_FILE
#define LINK_LIST_FILE

struct LinkList{
    struct Node * linkList;
};
struct Node{
    void * Data;
    struct Node * next;
};


#endif