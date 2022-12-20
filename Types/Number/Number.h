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

struct BIN{
    char * type;
    char * bin;
};

struct HEX{
    char * type;
    char * hex;
};

struct B64{
    char * type;
    char * b64;
};

struct DEC{
    char * type;
    char * dec;
};

struct BYT8{
    char * type;
    char * byt8;
};

struct BYT16{
    char * type;
    char * byt16;
};

struct BYT32{
    char * type;
    char * byt32;
};

struct BYT64{
    char * type;
    char * byt64;
};

struct Number * number(char * number, char * fromType, char * toType, char * fromEndian, char * toEndian);

struct DEC * DEC(char * dec);
struct BIN * BIN(char * bin, char * fromEndian, char * toEndian);
struct HEX * HEX(char * hex, char * fromEndian, char * toEndian);
struct B64 * B64(char * b64, char * fromEndian, char * toEndian);
struct BYT8 * BYT8(char * byt8, char * fromEndian, char * toEndian);
struct BYT16 * BYT16(char * byt16, char * fromEndian, char * toEndian);
struct BYT32 * BYT32(char * byt32, char * fromEndian, char * toEndian);
struct BYT64 * BYT64(char * byt64, char * fromEndian, char * toEndian);

//DECIMAL CONVERSIONS
struct HEX * dec2hex(struct DEC * dec, char * toEndian);
struct B64 * dec2b64(struct DEC * dec, char * toEndian);
struct BIN * dec2bin(struct DEC * dec, char * toEndian);
struct BYT8 * dec2byt8(struct DEC * dec, char * toEndian);
struct BYT16 * dec2byt16(struct DEC * dec, char * toEndian);
char * dec2byt32(struct DEC * dec, char * toEndian);
char * dec2byt64(struct DEC * dec, char * toEndian);

//HEXIDECIMAL CONVERSIONS
struct DEC * hex2dec(struct HEX * hex, char * fromEndian);
struct B64 * hex2b64(struct HEX * hex, char * fromEndian);
struct BIN * hex2bin(struct HEX * hex, char * fromEndian);
struct BYT8 * hex2byt8(struct HEX * hex, char * fromEndian);
struct BYT16 * hex2byt16(struct HEX * hex, char * fromEndian);
char * hex2byt32(struct HEX * hex, char * fromEndian);
char * hex2byt64(struct HEX * hex, char * fromEndian);

//B64 CONVERSIONS
struct DEC * b642dec(struct B64 * b64, char * fromEndian);
struct HEX * b642hex(struct B64 * b64, char * fromEndian, char * toEndian);
struct BIN * b642bin(struct B64 * b64, char * fromEndian, char * toEndian);
struct BYT8 * b642byt8(struct B64 * b64, char * fromEndian, char * toEndian);
struct BYT16 * b642byt16(struct B64 * b64, char * fromEndian, char * toEndian);
char * b642byt32(struct B64 * b64, char * fromEndian, char * toEndian);
char * b642byt64(struct B64 * b64, char * fromEndian, char * toEndian);

//BINARY CONVERSIONS
struct DEC * bin2dec(struct BIN * bin, char * fromEndian);
struct HEX * bin2hex(struct BIN * bin, char * fromEndian, char * toEndian);
struct B64 * bin2b64(struct BIN * bin, char * fromEndian, char * toEndian);
struct BYT8 * bin2byt8(struct BIN * bin, char * fromEndian, char * toEndians);
struct BYT16 * bin2byt16(struct BIN * bin, char * fromEndian, char * toEndian);
struct BYT32 * bin2byt32(struct BIN * bin, char * fromEndian, char * toEndians);
struct BYT64 * bin2byt64(struct BIN * bin, char * fromEndian, char * toEndian);

//BYT8 CONVERSIONS
struct DEC * byt82dec(struct BYT8 * byt8, char * fromEndian);
struct HEX * byt82hex(struct BYT8 * byt8, char * fromEndian, char * toEndian);
struct BIN * byt82bin(struct BYT8 * byt8, char * fromEndian, char * toEndian);
struct B64 * byt82b64(struct BYT8 * byt8, char * fromEndian, char * toEndian);
struct BYT16 * byt82byt16(struct BYT8 * byt8, char * fromEndian, char * toEndian);
struct BYT32 * byt82byt32(struct BYT8 * byt8, char * fromEndian, char * toEndian);
struct BYT64 * byt82byt64(struct BYT8 * byt8, char * fromEndian, char * toEndian);

//BYT16 CONVERSIONS
struct DEC * byt162dec(struct BYT16 * byt16, char * fromEndian);
struct HEX * byt162hex(struct BYT16 * byt16, char * fromEndian, char * toEndian);
struct BIN * byt162bin(struct BYT16 * byt16, char * fromEndian, char * toEndian)
struct B64 * byt162b64(struct BYT16 * byt16, char * fromEndian, char * toEndian);
struct BYT8 * byt162byt8(struct BYT16 * byt16, char * fromEndian, char * toEndian);
struct BYT32 * byt162byt32(struct BYT16 * byt16, char * fromEndian, char * toEndian);
struct BYT64 * byt162byt64(struct BYT16 * byt16, char * fromEndian, char * toEndian);

//BYT32 CONVERSIONS
struct DEC * byt322dec(struct BYT32 * byt32, char * fromEndian);
struct HEX * byt322hex(struct BYT32 * byt32, char * fromEndian, char * toEndian);
struct BIN * byt322bin(struct BYT32 * byt32, char * fromEndian, char * toEndian)
struct B64 * byt322b64(struct BYT32 * byt32, char * fromEndian, char * toEndian);
struct BYT8 * byt322byt8(struct BYT32 * byt32, char * fromEndian, char * toEndian);
struct BYT16 * byt322byt16(struct BYT32 * byt32, char * fromEndian, char * toEndian);
struct BYT64 * byt322byt64(struct BYT32 * byt32, char * fromEndian, char * toEndian);

//BYT64 CONVERSIONS
struct DEC * byt642dec(struct BYT64 * byt64, char * fromEndian);
struct HEX * byt642hex(struct BYT64 * byt64, char * fromEndian, char * toEndian);
struct BIN * byt642bin(struct BYT64 * byt64, char * fromEndian, char * toEndian);
struct B64 * byt642b64(struct BYT64 * byt64, char * fromEndian, char * toEndian);
struct BYT8 * byt642byt8(struct BYT64 * byt64, char * fromEndian, char * toEndian);
struct BYT16 * byt642byt16(struct BYT64 * byt64, char * fromEndian, char * toEndian);
struct BYT32 * byt642byt32(struct BYT64 * byt64, char * fromEndian, char * toEndian);


#endif