#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <limits.h>
#include <float.h>
#define TRUE  1
#define FALSE 0

int func() {
   return 0;
}
struct Books {
    char  title[50];
    char  author[50];
    char  subject[100];
    int   book_id;
};

//A union is a special data type available in C 
//that allows to store different data types in 
//the same memory location. You can define a 
//union with many members, but only one member 
//can contain a value at any given time. Unions 
//provide an efficient way of using the same 
//memory location for multiple-purpose.
union Data {
   int i;
   float f;
   char str[20];
};

void printBook( struct Books *book );

int main( int argc, char *argv[] )  {
    printf("With help from: https://www.tutorialspoint.com/\n\n");
    printf("-------------------------------------------------------------------------------------------------------\n\n");
    printf("C Type Limits\n\n");
    printf("CHAR_BIT    :   %d\n", CHAR_BIT);
    printf("CHAR_MAX    :   %d\n", CHAR_MAX);
    printf("CHAR_MIN    :   %d\n", CHAR_MIN);
    printf("INT_MAX     :   %d\n", INT_MAX);
    printf("INT_MIN     :   %d\n", INT_MIN);
    printf("LONG_MAX    :   %ld\n", (long) LONG_MAX);
    printf("LONG_MIN    :   %ld\n", (long) LONG_MIN);
    printf("SCHAR_MAX   :   %d\n", SCHAR_MAX);
    printf("SCHAR_MIN   :   %d\n", SCHAR_MIN);
    printf("SHRT_MAX    :   %d\n", SHRT_MAX);
    printf("SHRT_MIN    :   %d\n", SHRT_MIN);
    printf("UCHAR_MAX   :   %d\n", UCHAR_MAX);
    printf("UINT_MAX    :   %u\n", (unsigned int) UINT_MAX);
    printf("ULONG_MAX   :   %lu\n", (unsigned long) ULONG_MAX);
    printf("USHRT_MAX   :   %d\n", (unsigned short) USHRT_MAX);
    printf("-------------------------------------------------------------------------------------------------------\n\n");

    printf("C Storage Sizes for Float : %lu \n\n", sizeof(float));
    printf("FLT_MAX     :     %g\n", (float) FLT_MAX);
    printf("FLT_MIN     :     %g\n", (float) FLT_MIN);
    printf("-FLT_MAX    :     %g\n", (float) -FLT_MAX);
    printf("-FLT_MIN    :     %g\n", (float) -FLT_MIN);
    printf("DBL_MAX     :     %g\n", (double) DBL_MAX);
    printf("DBL_MIN     :     %g\n", (double) DBL_MIN);
    printf("-DBL_MAX    :     %g\n", (double) -DBL_MAX);
    printf("Precision value:  %d\n", FLT_DIG );
    printf("-------------------------------------------------------------------------------------------------------\n\n");

    printf("C Formatting Specifiers\n\n");
    printf("%%c                        Character\n");
    printf("%%d                        Signed integer\n");
    printf("%%e or %%E                  Scientific notation of floats\n");
    printf("%%f                        Float values\n");
    printf("%%g or %%G                  Similar as %%e or %%E\n");
    printf("%%hi                       Signed integer (short)\n");
    printf("%%hu                       Unsigned Integer (short)\n");
    printf("%%i                        Unsigned integer\n");
    printf("%%l or %%ld or %%li          Long\n");
    printf("%%lf                       Double\n");
    printf("%%Lf                       Long double\n");
    printf("%%lu                       Unsigned int or unsigned long\n");
    printf("%%lli or %%lld              Long long\n");
    printf("%%llu                      Unsigned long long\n");
    printf("%%o                        Octal representation\n");
    printf("%%p                        Pointer\n");
    printf("%%s                        String\n");
    printf("%%u                        Unsigned int\n");
    printf("%%x or %%X                  Hexadecimal representation\n");
    printf("%%n                        Prints nothing\n");
    printf("%%%%                        Prints %% character\n");
    printf("-------------------------------------------------------------------------------------------------------\n\n");

    struct Books Book1;        /* Declare Book1 of type Book */
    struct Books Book2;        /* Declare Book2 of type Book */

    printf("Type Sizes in Bytes\n\n");
    printf("char                1 byte            -128                 to 127                  or 0 to 255\n");
    printf("unsigned char       1 byte            0                    to 255\n");
    printf("signed char         1 byte            -128                 to 127\n");
    printf("int                 2 or 4 bytes      -32,768              to 32,767               or -2,147,483,648 to 2,147,483,647\n");
    printf("unsigned int        2 or 4 bytes      0                    to 65,535               or 0 to 4,294,967,295\n");
    printf("short               2 bytes           -32,768              to 32,767\n");
    printf("unsigned short      2 bytes           0                    to 65,535\n");
    printf("long                8 bytes           -9223372036854775808 to 9223372036854775807\n");
    printf("unsigned long       8 bytes           0                    to 18446744073709551615\n");
    printf("-------------------------------------------------------------------------------------------------------\n\n");
   
    printf("Macros\n\n");
    printf("    #define TRUE  1\n");
    printf("    #define FALSE 0\n");
    printf("    Value of TRUE : %d\n", TRUE);
    printf("    Value of FALSE : %d\n", FALSE);
    printf("-------------------------------------------------------------------------------------------------------\n\n");

    union Data data;
    printf("Union Structures\n\n");
    printf("    union Data {\n int i;\n float f;\n char str[20];\n};\n");
    printf("    union Data data;\n");
    printf("    Memory size occupied by data : %lu\n", sizeof(data));      
    printf("-------------------------------------------------------------------------------------------------------\n\n");
    printf("    strcpy\n");
    printf("    char someStr[100];\n");
    printf("    strcpy(someStr, 'someStr');\n");
    printf("-------------------------------------------------------------------------------------------------------\n\n");
    printf("Memory Allocation\n\n");
    printf("    char *description;\n");
    printf("    description = malloc( 200 * sizeof(char) );\n");
    printf("    if(description!=NULL){\n\tstrcpy( description, 'Whatever');\n\t}\n");
    printf("    When your program comes out, operating system automatically release all the memory allocated\n");
    printf("    by your program but as a good practice when you are not in need of memory anymore then you\n");
    printf("    should release that memory by calling the function free().\n");
    printf("    Alternatively, you can increase or decrease the size of an allocated memory block by calling\n");
    printf("    the function realloc().\n");

    printf("-------------------------------------------------------------------------------------------------------\n\n");

    printf("Type Definitions\n\n");
    printf("typedef unsigned char BYTE;\n");
    printf("BYTE  b1, b2;\n\n");
    printf("-------------------------------------------------------------------------------------------------------\n\n");



    printf("Writing to file\n\n");
    printf("    You can use the fopen( ) function to create a new file or to open an existing file.\n");
    printf("    This call will initialize an object of the type FILE, which contains all the\n");
    printf("    an object of the type FILE, which contains all the information necessary to control the stream.\n");
    printf("    The prototype of this function call is as follows\n\n");
    printf("r:  Opens an existing text file for reading purpose.\n\n");
    printf("w:  Opens a text file for writing. If it does not exist,\n");
    printf("    then a new file is created. Here your program will start\n");
    printf("    writing content from the beginning of the file.\n\n");
    printf("a:  Opens a text file for writing in appending mode.\n");
    printf("    If it does not exist, then a new file is created. \n");
    printf("    Here your program will start appending content in\n");
    printf("    the existing file content.\n\n");
    printf("r+: Opens a text file for both reading and writing.\n\n");

    printf("w+: Opens a text file for both reading and writing.\n");
    printf("    It first truncates the file to zero length if it\n");
    printf("    exists, otherwise creates a file if it does not exist.\n\n");

    printf("a+: Opens a text file for both reading and writing.\n");
    printf("    It creates the file if it does not exist.\n");
    printf("    The reading will start from the beginning but\n");
    printf("    writing can only be appended.\n\n");
    printf("----------------------------------\n\n");

    printf("Example\n\n");
    printf("    int fputc( int c, FILE *fp );\n");
    printf("    int fputs( const char *s, FILE *fp );\n");
    printf("    FILE *fopen( const char * filename, const char * mode );\n");
    printf("    int fclose( FILE *fp );\n\n");
    printf("    FILE *fp;\n");
    printf("    fp = fopen('./tmp/test.txt', 'w+');\n");
    printf("    fprintf(fp, 'This is testing for fprintf...');\n");
    printf("    fputs('This is testing for fputs...', fp);\n");
    printf("    fclose(fp);\n\n");
    printf("    int fgetc( FILE * fp );\n");
    printf("    char *fgets( char *buf, int n, FILE *fp );\n\n");
    printf("    char buff[255];\n");
    printf("    fp = fopen('/tmp/test.txt', 'r');\n\n");
    printf("    char buff[255];\n");
    printf("    fp = fopen('/tmp/test.txt', 'r');\n\n");
    printf("    fscanf(fp, '%%s', buff)\n");
    printf("    printf('1 : %%s ', buff )\n");
    printf("    fgets(buff, 255, (FILE*)fp)\n");
    printf("    printf('2: %%s ', buff );\n\n");
    printf("    fgets(buff, 255, (FILE*)fp);\n");
    printf("    printf('3: %%s ', buff );\n");
    printf("    fclose(fp);\n\n");
    printf("-------------------------------------------------------------------------------------------------------\n\n");

    printf("Binary I/O Functions\n\n");
    printf("    There are two functions, that can be used for binary input and output:\n");
    printf("    size_t fread(void *ptr, size_t size_of_elements, size_t number_of_elements, FILE *a_file);\n");
    printf("    size_t fwrite(const void *ptr, size_t size_of_elements, size_t number_of_elements, FILE *a_file);\n");
    printf("-------------------------------------------------------------------------------------------------------\n\n");

    printf("C Constants\n\n");
    printf("    printf('    File :%%s', __FILE__ )\n");
    printf("    printf('    Date :%%s', __DATE__ )\n");
    printf("    printf('    Time :%%s', __TIME__ )\n");
    printf("    printf('    Line :%%d', __LINE__ )\n");
    printf("    printf('    ANSI :%%d', __STDC__ )\n");


   return 0;

}