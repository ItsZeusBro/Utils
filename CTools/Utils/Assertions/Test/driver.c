#include <stdio.h>
#include "Test.h"
#include "Driver.h"

int main(int argc, char *argv[]){
    printf("CTOOLS_UTILS_ASSERTIONS_TEST_DRIVER\n");

    CTOOLS_UTILS_ASSERTIONS_TEST_TEST(argc, argv);
    
    return 0;
}