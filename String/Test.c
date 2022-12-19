#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <limits.h>
#include <float.h>
#include "String.h"
#include "Test.h"
#include <assert.h>


void stringTest(int verbose){
    printf("String Test\n");
    for(var i = 0; i<1000; i++){
        struct String string1;
        struct String string2;
        string1.str = (char *) malloc(100*sizeof(char));
        string2.str = (char *) malloc(100*sizeof(char));
        if(verbose){
            printf("string:%s\nsize:%d\naddr:%c\n", string.str, string.size, *string.next);
        }
        strcpy(string1.str, genStr(100));
        strcpy(string2.str, genStr(100));
        string1.size=strlen(string1.str);
        string2.size=strlen(string2.str);
        string1.next=string1.str;
        string1.prev=string1.str;
        string2.next=string2.str;
        string2.prev=string2.str;
        assertEqual(string1, string2);
    }
    


    
}
int assertEqual(struct String str1, struct String str2){

    assert(str1.size==str2.size);

    for(int i=0; i<str1.size; i++){
        printf("%c\n", str1.str[i]);
        assert(str1.next[i]==str2.next[i]);
        assert(str1.prev[i]==str2.prev[i]);
        assert(str1.str[i]==str2.str[i]);
    }
    return 0;
}
void copyTest(){
    struct String string;

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
    stringTest();
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
}