#include <stdio.h>
#include "Test.h"
#include "Driver.h"

int main(int argc, char *argv[]){
    printf("CTOOLS_CRYPTO_TEST_DRIVER\n");

    CTOOLS_CRYPTO_TEST_TEST(argc, argv);
    
    return 0;
}