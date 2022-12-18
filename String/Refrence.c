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

    printf("Storage size for float : %d \n", sizeof(float));
    printf("FLT_MAX     :   %g\n", (float) FLT_MAX);
    printf("FLT_MIN     :   %g\n", (float) FLT_MIN);
    printf("-FLT_MAX    :   %g\n", (float) -FLT_MAX);
    printf("-FLT_MIN    :   %g\n", (float) -FLT_MIN);
    printf("DBL_MAX     :   %g\n", (double) DBL_MAX);
    printf("DBL_MIN     :   %g\n", (double) DBL_MIN);
    printf("-DBL_MAX     :  %g\n", (double) -DBL_MAX);
    printf("Precision value: %d\n", FLT_DIG );
    
  

    struct Books Book1;        /* Declare Book1 of type Book */
    struct Books Book2;        /* Declare Book2 of type Book */
    // char	            1 byte	        -128                 to 127                  or 0 to 255
    // unsigned char	1 byte	        0                    to 255
    // signed char	    1 byte	        -128                 to 127
    // int	            2 or 4 bytes	-32,768              to 32,767               or -2,147,483,648 to 2,147,483,647
    // unsigned int	    2 or 4 bytes	0                    to 65,535               or 0 to 4,294,967,295
    // short	        2 bytes	        -32,768              to 32,767
    // unsigned short	2 bytes	        0                    to 65,535
    // long	            8 bytes	        -9223372036854775808 to 9223372036854775807
    // unsigned long	8 bytes	        0                    to 18446744073709551615


    //    char name[100];
    //    strcpy(name, "Salaman");



    char *description;
    description = malloc( 200 * sizeof(char) );

    if( description == NULL ) {

      fprintf(stderr, "Error - unable to allocate required memory\n");

    } else {

      strcpy( description, "C Limit Table");

    }

    printf("Description: %s\n", description );

    union Data data;        

    printf( "Memory size occupied by data : %d\n", sizeof(data));


   typedef unsigned char BYTE;
   BYTE  b1, b2;

   printf( "Value of TRUE : %d\n", TRUE);
   printf( "Value of FALSE : %d\n", FALSE);










   //Writing to file
   //You can use the fopen( ) function to create a new file 
   //or to open an existing file. This call will initialize 
   //an object of the type FILE, which contains all the 
   //information necessary to control the stream. The prototype 
   //of this function call is as follows

   //r: Opens an existing text file for reading purpose.
   //w: Opens a text file for writing. If it does not exist, 
   //   then a new file is created. Here your program will start 
   //   writing content from the beginning of the file.

   //a: Opens a text file for writing in appending mode. 
   //   If it does not exist, then a new file is created. 
   //   Here your program will start appending content in 
   //   the existing file content.

   //r+: Opens a text file for both reading and writing.

   //w+: Opens a text file for both reading and writing. 
   //    It first truncates the file to zero length if it 
   //   exists, otherwise creates a file if it does not exist.

   //a+ Opens a text file for both reading and writing. 
   //   It creates the file if it does not exist. 
   //   The reading will start from the beginning but 
   //   writing can only be appended.
   //


   //int fputc( int c, FILE *fp );
   //int fputs( const char *s, FILE *fp );
   FILE *fopen( const char * filename, const char * mode );
   int fclose( FILE *fp );

   FILE *fp;

   fp = fopen("./tmp/test.txt", "w+");
   fprintf(fp, "This is testing for fprintf...\n");
   fputs("This is testing for fputs...\n", fp);
   fclose(fp);

   int fgetc( FILE * fp );
   char *fgets( char *buf, int n, FILE *fp );

   char buff[255];

   fp = fopen("/tmp/test.txt", "r");
   fscanf(fp, "%s", buff);
   printf("1 : %s\n", buff );

   fgets(buff, 255, (FILE*)fp);
   printf("2: %s\n", buff );
   
   fgets(buff, 255, (FILE*)fp);
   printf("3: %s\n", buff );
   fclose(fp);


    // Binary I/O Functions
    // There are two functions, that can be used for binary input and output −
   size_t fread(void *ptr, size_t size_of_elements, size_t number_of_elements, FILE *a_file);
              
   size_t fwrite(const void *ptr, size_t size_of_elements, size_t number_of_elements, FILE *a_file);
   
   printf("File :%s\n", __FILE__ );
   printf("Date :%s\n", __DATE__ );
   printf("Time :%s\n", __TIME__ );
   printf("Line :%d\n", __LINE__ );
   printf("ANSI :%d\n", __STDC__ );

   //When your program comes out, operating system automatically release all the memory allocated 
   //by your program but as a good practice when you are not in need of memory anymore then you 
   //should release that memory by calling the function free().

  //Alternatively, you can increase or decrease the size of an allocated memory block by calling 
  //the function realloc(). Let us check the above program once again and make use of realloc() 
  //and free() functions −
   return 0;

}

void printBook( struct Books *book ) {

   printf( "Book title : %s\n", book->title);
   printf( "Book author : %s\n", book->author);
   printf( "Book subject : %s\n", book->subject);
   printf( "Book book_id : %d\n", book->book_id);
}