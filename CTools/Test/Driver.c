#include <stdio.h>
#include "Test.h"

int main(int argc, char *argv[]){
    printf("CTOOLS_TEST_DRIVER\n");

    CTOOLS_TEST_TEST(argc, argv);
    
    return 0;
}