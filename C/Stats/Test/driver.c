#include <stdio.h>
#include "Test.h"

int main(int argc, char *argv[]){
    printf("C_STATS_TEST_DRIVER\n");

    C_STATS_TEST_TEST(argc, argv);
    
    return 0;
}