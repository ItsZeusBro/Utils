#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <limits.h>
#include <float.h>
#include "String.h"



void stringTest(){
    struct String string;
    string.str = (char *) malloc(200*sizeof(char));
    string.size=0;
    strcpy(string.str, "hello world\n");
    string.next=string.str;
    string.prev=string.str;
    printf("%s %d", string.str, string.size);
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


int main(int argc, char *argv[]){
    stringTest();
    sliceTest();
    copyTest();
    removeAtTest();
    addAtTest();
    removeAllTest();
    sizeTest();
    trimTest();
    trimRightTest();
    trimLeftTest();
    reallocTest();
    mallocTest();
    callocTest();
    nextTest();
    prevTest();
    compareTest();
    sizeTest();
    substrTest();
}