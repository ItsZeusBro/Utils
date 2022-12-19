#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <limits.h>
#include <float.h>
#include "String.h"
#include "../Rand/Rand.h"
#include "Test.h"
#include <assert.h>

void stringTest(int verbose){
    printf("String Test\n");
    
    for(int i = 0; i<1000; i++){
        struct String * str1 = genStr(i);
        if(verbose){
            // printf("lsdkjsdlkfj");
    //         printf("lkdfjslkdfjsldkgjsdlgbqou");
    //         printf("string:%s\nsize:%d\naddr:%c\n", str1->str, str1->size, *str1->next);
        }
    }
}


int assertEqual(struct String str1, struct String str2){

    assert(str1.size==str2.size);

    for(int i=0; i<str1.size; i++){
        assert(str1.next[i]==str2.next[i]);
        assert(str1.prev[i]==str2.prev[i]);
        assert(str1.str[i]==str2.str[i]);
    }
    return 0;
}
void copyTest(){
    struct String string;
        // strcpy(str2.str, str1.str);
    //     str1.size=strlen(str1.str);
    //     str2.size=strlen(str2.str);
    //     str1.next=str1.str;
    //     str1.prev=str1.str;
    //     str2.next=str2.str;
    //     str2.prev=str2.str;
}

void sliceTest(){
    struct String string;

}

void removeAtTest(){
    struct String string; 

}

void addAtTest(){
    struct String string; 

}

void removeAllTest(){
    struct String string; 

}

void sizeTest(){
    struct String string; 

}

void trimTest(){
    struct String string; 

}

void trimRightTest(){
    struct String string; 

}

void trimLeftTest(){
    struct String string; 

}

void reallocTest(){
    struct String string; 

}

void mallocTest(){
    struct String string; 

}

void callocTest(){
    struct String string; 

}

void nextTest(){
    struct String string; 

}

void prevTest(){
    struct String string; 

}

void compareTest(){
    struct String string; 

}


void substrTest(){
    struct String string; 

}


int main(){
    stringTest(1);
    // sliceTest();
    // copyTest();
    // removeAtTest();
    // addAtTest();
    // removeAllTest();
    // sizeTest();
    // trimTest();
    // trimRightTest();
    // trimLeftTest();
    // reallocTest();
    // mallocTest();
    // callocTest();
    // nextTest();
    // prevTest();
    // compareTest();
    // sizeTest();
    // substrTest();
    return 0;
}