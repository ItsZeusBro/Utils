#ifndef NUMBER_FILE
#define NUMBER_FILE

struct Number{
    char * dec;
    char * hex;
    char * b64;
    char * bin;
    char * byt8;
    char * byt16;
    char * byt32;
    char * byt64;
};

struct Number * number(char * number, char * type);

//DECIMAL CONVERSIONS
char * dec2hex(char * dec);
char * dec2b64(char * dec);
char * dec2bin(char * dec);
char * dec2byt8(char * dec);
char * dec2byt16(char * dec);
char * dec2byt32(char * dec);
char * dec2byt64(char * dec);

//HEXIDECIMAL CONVERSIONS
char * hex2dec(char * hex);
char * hex2b64(char * dec);
char * hex2bin(char * dec);
char * hex2byt8(char * dec);
char * hex2byt16(char * dec);
char * hex2byt32(char * dec);
char * hex2byt64(char * dec);

//B64 CONVERSIONS
char * b642dec(char * hex);
char * b642hex(char * dec);
char * b642bin(char * dec);
char * b642byt8(char * dec);
char * b642byt16(char * dec);
char * b642byt32(char * dec);
char * b642byt64(char * dec);

//BINARY CONVERSIONS
char * bin2dec(char * hex);
char * bin2hex(char * dec);
char * bin2b64(char * dec);
char * bin2byt8(char * dec);
char * bin2byt16(char * dec);
char * bin2byt32(char * dec);
char * bin2byt64(char * dec);

//BYT8 CONVERSIONS
char * byt82dec(char * hex);
char * byt82hex(char * dec);
char * byt82bin(char * dec);
char * byt82b64(char * dec);
char * byt82byt16(char * dec);
char * byt82byt32(char * dec);
char * byt82byt64(char * dec);

//BYT16 CONVERSIONS
char * byt162dec(char * byt16);
char * byt162hex(char * byt16);
char * byt162bin(char * byt16)
char * byt162b64(char * byt16);
char * byt162byt8(char * byt16);
char * byt162byt32(char * byt16);
char * byt162byt64(char * byt16);

//BYT32 CONVERSIONS
char * byt322dec(char * byt32);
char * byt322hex(char * byt32);
char * byt322bin(char * byt32)
char * byt322b64(char * byt32);
char * byt322byt8(char * byt32);
char * byt322byt32(char * byt32);
char * byt322byt64(char * byt32);

//BYT64 CONVERSIONS
char * byt642dec(char * byt64);
char * byt642hex(char * byt64);
char * byt642bin(char * byt64);
char * byt642b64(char * byt64);
char * byt642byt8(char * byt64);
char * byt642byt32(char * byt64);

#endif