#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <limits.h>
#include <float.h>
#include <assert.h>

#include "String.h"
#include "../Rand/Rand.h"
#include "Test.h"

void stringTest(int verbose){
    printf("String Test\n");
    struct String * str = genStr(10);
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



int addAt(){

}

int slice(){

}

int splice(){

}

int copy(){

}

int removeAt(){

}

int removeAll(){

}

int trim(){

}

int trimRight(){

}

int trimLeft(){

}

int _realloc(){

}

int _malloc(){

}

int _calloc(){

}

int compare(){

}

int concat(){

}

int size(){

}

int substr(){

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