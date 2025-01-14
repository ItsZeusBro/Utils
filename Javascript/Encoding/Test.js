import {Encoding} from "./Encoding.js"
import {Rand} from "../Rand/Rand.js"
import assert from "node:assert"
export class EncodingTest{

    constructor(verbose, standard_min, standard_max){
        //WARNING, DOES NOT WORK FOR BIG NUM_ERS _ECAUSE SCIENTIFIC NOTATION KICKS IN AND JAVASCRIPT
        //DOES NOT REPRESENT ALL OF ITS PRECISION

        this.verbose=verbose
        //THESE ALL WORK
        this.frmtByts(standard_min,standard_max)      
        this.frmtHex(standard_min,standard_max)                                     //this formats a hex string by adding or reducing hex numbers according to a standard
        this.dec2Char(8, 8)                                   //this takes a decimal number and produces a char charachter using an encoding flag
        this.dec2Byts(standard_min, standard_max)         //this takes a decimal number and produces a byte string that represents the number
        this.dec2Hex(standard_min, standard_max)          //this takes a decimal number, and produces a hex, if the decimal is a string, it can return big numbers
        this.byts2Dec(standard_min, standard_max)         //this takes a byte string and produces a single decimal number (returns a big number string if its a big number)
        this.byts2Hex(standard_min, standard_max)         //this takes a byte string with a formatting flag and produces a hex string on format boundaries
        this.byts2Str(8, 8)                              //this can have options (we can pass a flag representing the bytes standard)
        this.bytsBuff2Str(8, 8)                           //this does not require a standard, the byte string in the buffer is sufficient
        this.hex2Byts(standard_min, standard_max)         //a hex number can be interpreted in its entirety and translated to a byte string
        this.hexRng(standard_min, standard_max)           //returns a hex string based on a decimal number
        this.hex2Dec(standard_min, standard_max)          //interpretes the hex string as a single decimal number
        this.hex2Str(8, 8)                               //this uses a encoding standard that passed in with a flag
        this.hexBuff2Str(8, 8)                           //this does not require a standard, the hex string in the buffer is sufficient
        this.str2HexBuff(standard_min, standard_max)      //takes each char literal and puts it into a hex buff, which doesnt care how big the number is
        this.str2BytsBuff(standard_min, standard_max)     //takes each char literal and puts it into a byte buffer, which doesnt care how big the byte strings are that represent the char
        this.str2Byts(standard_min, standard_max)         //this losses information unless we pass a flag on the formatting
        this.str2Hex(standard_min, standard_max)          //this takes each char literal and produces a hex equivalent according to a standard and returns the entire hex string
        this.str2DecBuff(standard_min, standard_max)      //this takes each char literal and produces a decimal code point buffer
        this.decBuff2Str(8, 8)                            //this takes a decimal code point buffer and produces a char literal string with the encoding standard
        this.byts2BytsBuff(standard_min, standard_max)    //this takes a byte string and creates a byte buffer with the given standard, this can ruin information if the byte string is constructed without the standard
        this.byts2HexBuff(standard_min, standard_max)     //this takes a byte string and produces a hex buffer with the given standard
        this.bytsBuff2Hex(standard_min, standard_max)     //this takes a byte buffer and produces a hex string (you can add a standard on the hex side)
        this.next(standard_min, standard_max)             //this losses information, unless we format each buffer position to some standard
        this.bytsBuff2Byts(standard_min, standard_max)    
        this.char2Hex(standard_min, standard_max)
        this.chainTest(standard_min, standard_max)     
    }

    frmtByts(standard_min=8, standard_max=64){
        //this formats a byte string by adding or reducing bytes according to a standard
        var e  = new Encoding()
        var r = new Rand()
        for(var q = standard_min; q<=standard_max; q=q*2){
            var standard=q
            var mode='E'
            do{
                console.log('frmtByts(', mode,')')
                for(var i = 1; i<Math.pow(2, standard);i=i*2){
                    var byt = r.bytsRng(i, i, mode, standard)
                    if(this.verbose){ console.log(e.byts2Dec(e.frmtByts(byt, mode, standard), mode), i) }
                    assert.equal(e.byts2Dec(e.frmtByts(byt, mode, standard), mode), i)
                }
                mode = mode.charCodeAt(0)+32
                mode = String.fromCharCode(mode)
            }while(mode=='e'||mode=='E')
            
        }
    }

    frmtHex(standard_min=8, standard_max=64){
        var e  = new Encoding()
        var r = new Rand()
        for(var q = standard_min; q<=standard_max; q=q*2){
            var standard=q
            var mode='E'
            do{
                for(var i = 1; i<Math.pow(2, standard);i=i*2){
                    var hex = r.hexRng(i, i, mode, standard)
                    if(this.verbose){console.log('hex', hex, 'formatted', e.frmtHex(hex, mode, standard))}
                    assert.equal(e.frmtHex(hex, mode, standard).length, hex.length) 
                    assert.equal(e.frmtHex(hex, mode, standard), hex)
                    //when checking the length of hex, remember to remove the 0x
                    console.log(e._0xStr(e.frmtHex(hex, mode, standard*4)).length, standard)
                    assert.equal(e._0xStr(e.frmtHex(hex, mode, standard*4)).length, standard)
                    assert.equal(e._0xStr(e.frmtHex(e.frmtHex(hex, mode, standard*4), mode, standard)).length, e._0xStr(hex).length)
                    assert.equal(e.frmtHex(e.frmtHex(hex, mode, standard*4), mode, standard), hex)
                }
                mode = mode.charCodeAt(0)+32
                mode = String.fromCharCode(mode)
            }while(mode=='e'||mode=='E')
            
        }
    }

    dec2Char(){
        console.log('dec2Char()')
        var e  = new Encoding()
        for(var i = 0; i<=65535; i++){
            if(this.verbose){
                console.log('dec2Char()1', i, e.dec2Char(i))
            }
            assert.equal(String.fromCharCode(i), e.dec2Char(i))
        }
    }

    dec2Byts(standard_min, standard_max){
        var e  = new Encoding()
        var r = new Rand()
        for(var q = standard_min; q<=standard_max; q=q*2){
            var standard=q
            var mode='E'
            do{
                console.log('dec2Byts(', mode,')')
                for(var i = 1; i<Math.pow(2, standard); i=i*2){
                    if(this.verbose){
                        console.log(e.byts2Dec(e.dec2Byts(i, mode, standard), mode, standard), i)
                    }
                    assert.equal(
                        e.byts2Dec(e.dec2Byts(i, mode, standard), mode, standard), 
                        i
                    )
                }
                mode = mode.charCodeAt(0)+32
                mode = String.fromCharCode(mode)
            }while(mode=='e'||mode=='E')   
        }
    }

    dec2Hex(standard_min, standard_max){
        var e  = new Encoding()
        var r = new Rand()
        for(var q = standard_min; q<=standard_max; q=q*2){
            var standard=q
            var mode='E'
            do{
                console.log('dec2Hex(', mode,')')
                for(var i = 1; i<Math.pow(2, standard); i=i*2){
                    if(this.verbose){
                        console.log(hex, i)
                    }
                    var byts = e.dec2Byts(i, mode, standard)
                    var hex = e.byts2Hex(byts, mode, standard)
                    console.log(hex.length, e.dec2Hex(i, mode, standard).length)
                    assert.equal(hex, e.dec2Hex(i, mode, standard))
                }
                mode = mode.charCodeAt(0)+32
                mode = String.fromCharCode(mode)
            }while(mode=='e'||mode=='E')
        }
    }

    byts2Dec(standard_min, standard_max){
        var e  = new Encoding()
        var r = new Rand()
        for(var q = standard_min; q<=standard_max; q=q*2){
            var standard=q
            var mode='E'
            do{
                console.log('byts2Dec(', mode,')')
                var byts=''
                for(var i = 1; i<Math.pow(2, standard);i=i*2){
                    byts = new Encoding().dec2Byts(i, mode, standard)
                    if(this.verbose){
                        console.log(byts, e.byts2Dec(byts, mode))
                    }
                    assert.equal(
                        new Encoding().dec2Byts(i, mode, standard), 
                        new Encoding().dec2Byts(new Encoding().byts2Dec(byts, mode), mode, standard)
                    )
                }
                mode = mode.charCodeAt(0)+32
                mode = String.fromCharCode(mode)
            }while(mode=='e'||mode=='E')
        }
    }

    byts2Hex(standard_min, standard_max){
        var e  = new Encoding()
        var r = new Rand()
        for(var q = standard_min; q<=standard_max; q=q*2){
            var standard=q
            var mode='E'
            do{
                console.log('byts2Hex(', mode,')')
                for(var i = 1; i<Math.pow(2, standard);i=i*2){
                    var byts = e.dec2Byts(i, mode, standard)
                    var hex = e.byts2Hex(byts, mode, standard)
                    if(this.verbose){
                        console.log(byts, hex)
                    }
                    assert.equal(byts, e.hex2Byts(hex, mode, standard))
                }

                mode = mode.charCodeAt(0)+32
                mode = String.fromCharCode(mode)
            }while(mode=='e'||mode=='E')
        }
    }

    byts2Str(standard_min, standard_max){
        var e  = new Encoding()
        var r = new Rand()
        for(var q = standard_min; q<=standard_max; q=q*2){
            var standard=q
            var mode='E'
            do{
                console.log('byts2Str(', mode,')')
                for(var j = 0; j<100; j++){
                    var bytStr=''
                    var str=''
                    for(var i = 1; i<Math.pow(2, standard);i=i*2){
                        var byt=r.bytsRng(i, i, mode, standard)
                        bytStr+=byt
                        str+=e.bytsBuff2Str([byt], mode)
                    }
                    var str = e.byts2Str(bytStr, mode, standard)
                    if(this.verbose){console.log(str, bytStr)}
                    assert.equal(str, str)
                }
                mode = mode.charCodeAt(0)+32
                mode = String.fromCharCode(mode)
            }while(mode=='e'||mode=='E')
        }
    }

   
    hex2Byts(standard_min, standard_max){
        var e  = new Encoding()
        var r = new Rand()
        for(var q = standard_min; q<=standard_max; q=q*2){
            var standard=q
            var mode='E'
            do{
                console.log('hex2Byts(', mode,')')
                for(var i = 1; i<Math.pow(2, standard);i=i*2){
                    var hex = r.hexRng(i, i, mode, standard)
                    var bin = e.hex2Byts(hex, mode, standard)
                    if(this.verbose){ console.log(bin, hex) }
                    assert.equal(hex, e.byts2Hex(bin, mode, standard))
                }
                mode = mode.charCodeAt(0)+32
                mode = String.fromCharCode(mode)
            }while(mode=='e'||mode=='E')  
        }
    }

    hexRng(standard_min, standard_max){
        var e  = new Encoding()
        var r = new Rand()
        for(var q = standard_min; q<=standard_max; q=q*2){
            var standard=q
            var mode='E'
            do{
                console.log('hexRng(', mode,')')

                for(var i = 1; i<Math.pow(2, standard);i=i*2){
                    var hex = r.hexRng(i, i, mode, standard)
                    if(this.verbose){ console.log(e.hex2Byts(hex, mode, standard), hex, i) }
                    assert.equal(e.byts2Dec(e.hex2Byts(hex, mode, standard), mode, standard), i)
                }
                
                mode = mode.charCodeAt(0)+32
                mode = String.fromCharCode(mode)
            }while(mode=='e'||mode=='E')  
        }
    }

    hex2Dec(standard_min, standard_max){
        var e  = new Encoding()
        var r = new Rand()
        for(var q = standard_min; q<=standard_max; q=q*2){
            var standard=q
            var mode='E'
            do{
                console.log('hex2Dec(', mode,')')
                for(var i = 1; i<Math.pow(2, standard);i=i*2){
                    var hex=r.hexRng(i, i, mode, standard)
                    if(this.verbose){ console.log(hex, i, e.hex2Dec(hex, mode, standard)) }
                    console.log(hex)
                    assert.equal(i, e.hex2Dec(hex, mode, standard))
                }
                mode = mode.charCodeAt(0)+32
                mode = String.fromCharCode(mode)
            }while(mode=='e'||mode=='E')  
        }
    }

    hex2Str(standard_min, standard_max){
        var e  = new Encoding()
        var r = new Rand()
        for(var q = standard_min; q<=standard_max; q=q*2){
            var standard=q
            var mode='E'
            do{
                console.log('hex2Str(', mode,')')
                for(var j = 0; j<100; j++){
                    var hexStr=''
                    for(var i = 1; i<Math.pow(2, standard);i=i*2){
                        hexStr+=''+r.hexRng(i, i, mode, standard)
                    }
                    var str = e.hex2Str(hexStr, mode, standard)
                    if(this.verbose){ console.log(str, hexStr) }
                    assert.equal(hexStr, e.str2Hex(str, mode, standard))
                }
                mode = mode.charCodeAt(0)+32
                mode = String.fromCharCode(mode)
            }while(mode=='e'||mode=='E')  
        }
    }

    bytsBuff2Str(standard_min, standard_max){
        var e  = new Encoding()
        var r = new Rand()
        for(var q = standard_min; q<=standard_max; q=q*2){
            var standard=q
            var mode='E'
            do{
                console.log('bytsBuff2Str(', mode,')')
                for(var i = 1; i<Math.pow(2, standard);i=i*2){
                    var buffer = []
                    buffer.push(r.bytsRng(i, i, mode, standard))
                    var str = e.bytsBuff2Str(buffer, mode)
                    if(this.verbose){console.log(str, buffer)}
                    for(var j = 0; j<str.length; j++){
                        assert.equal(e.hex2Byts(e.char2Hex(str[j], mode, standard), mode, standard), buffer[j]) 
                    }
                }
                mode = mode.charCodeAt(0)+32
                mode = String.fromCharCode(mode)
            }while(mode=='e'||mode=='E') 
        }
    }

    hexBuff2Str(standard_min, standard_max){
        var e  = new Encoding()
        var r = new Rand()
        for(var q = standard_min; q<=standard_max; q=q*2){
            var standard=q
            var mode='E'
            do{
                console.log('hexBuff2Str(', mode,')')
                var buffer = []
                for(var i = 1; i<Math.pow(2, standard);i=i*2){
                    buffer.push(r.hexRng(i, i, mode, standard))
                }
                var str = e.hexBuff2Str(buffer, mode, standard)
                if(this.verbose){console.log(str, buffer)}
                for(var i = 0; i<str.length; i++){
                    assert.equal(e.char2Hex(str[i], mode, standard), buffer[i]) 
                }

                mode = mode.charCodeAt(0)+32
                mode = String.fromCharCode(mode)
            }while(mode=='e'||mode=='E') 
        }
    }

    str2HexBuff(standard_min, standard_max){
        var e  = new Encoding()
        var r = new Rand()
        for(var q = standard_min; q<=standard_max; q=q*2){
            var standard=q
            var mode='E'
            do{
                console.log('str2HexBuff(', mode,')')
                for(var i = 1; i<Math.pow(2, standard);i=i*2){
                    var str = r.str(i, i, mode)
                    var buffer = e.str2HexBuff(str, mode, standard)
                    if(this.verbose){console.log(str, buffer)}
                    assert.equal(str, e.hexBuff2Str(buffer, mode, standard))
                }
                mode = mode.charCodeAt(0)+32
                mode = String.fromCharCode(mode)
            }while(mode=='e'||mode=='E')
        }
	}

    str2BytsBuff(standard_min, standard_max){
        var e  = new Encoding()
        var r = new Rand()
        for(var q = standard_min; q<=standard_max; q=q*2){
            var standard=q
            var mode='E'
            do{
                console.log('str2BytsBuff(', mode,')')
                for(var i = 1; i<Math.pow(2, standard);i=i*2){
                    var str = r.str(i, i, mode)
                    if(this.verbose){console.log(str, e.str2BytsBuff(str, mode, standard))}
                    assert.equal(str, e.bytsBuff2Str(e.str2BytsBuff(str, mode, standard), mode))
                }
                mode = mode.charCodeAt(0)+32
                mode = String.fromCharCode(mode)
            }while(mode=='e'||mode=='E')
        }
	}

    decBuff2Str(standard_min, standard_max){
        console.log('decBuff2Str()')
        var str=''
        var buff=[]
        var e=new Encoding()
        for(var i = 1; i<Math.pow(2, standard_max);i=i*2){
            str+=e.dec2Char(i)
            buff.push(i)
        }
        var str2=e.decBuff2Str(buff)
        for(var i = 0; i<str.length; i++){
            assert.equal(str[i], str2[i])
        }
    }

    str2DecBuff(standard_min, standard_max){
        var e  = new Encoding()
        var r = new Rand()
        for(var q = standard_min; q<=standard_max; q=q*2){
            var standard=q
            var mode='E'
            do{
                console.log('str2DecBuff(', mode,')')
                for(var i = 1; i<Math.pow(2, standard);i=i*2){
                    var str = r.str(i, i, mode)
                    if(this.verbose){console.log(str, e.str2DecBuff(str, mode))}
                    assert.equal(str, e.decBuff2Str(e.str2DecBuff(str, mode), mode))
                }
                mode = mode.charCodeAt(0)+32
                mode = String.fromCharCode(mode)
            }while(mode=='e'||mode=='E')
        }
	}

    str2Byts(standard_min, standard_max){
        var e  = new Encoding()
        var r = new Rand()
        for(var q = standard_min; q<=standard_max; q=q*2){
            var standard=q
            var mode='E'
            do{
                console.log('str2Byts(', mode,')')
                for(var i = 1; i<Math.pow(2, standard);i=i*2){
                    var str = r.str(i, i, mode)
                    if(this.verbose){console.log(str, e.str2Byts(str, mode, standard))}
                    assert.equal(str, e.byts2Str(e.str2Byts(str, mode, standard), mode, standard))
                }
                mode = mode.charCodeAt(0)+32
                mode = String.fromCharCode(mode)
            }while(mode=='e'||mode=='E')
        }
    }

    str2Hex(standard_min, standard_max){
        var e  = new Encoding()
        var r = new Rand()
        for(var q = standard_min; q<=standard_max; q=q*2){
            var standard=q
            var mode='E'
            do{
                console.log('str2Hex(', mode,')')
                for(var i = 1; i<Math.pow(2, standard);i=i*2){
                    var str = r.str(i, i, mode)
                    if(this.verbose){console.log(str, e.str2Hex(str, mode, standard))}
                    assert.equal(str, e.hex2Str(e.str2Hex(str, mode, standard), mode, standard))
                }
                mode = mode.charCodeAt(0)+32
                mode = String.fromCharCode(mode)
            }while(mode=='e'||mode=='E')
        }
    }

    byts2BytsBuff(standard_min, standard_max){
        var e  = new Encoding()
        var r = new Rand()
        for(var q = standard_min; q<=standard_max; q=q*2){
            var standard=q
            var mode='E'
            do{
                console.log('byts2BytsBuff(', mode,')')
                var byts=''
                var bytsBuff=[]
                for(var i = 1; i<Math.pow(2, standard);i=i*2){
                    var _byts = new Rand().bytsRng(i, i, mode, standard)
                    byts+=_byts
                    bytsBuff.push(_byts)
                }
                var buffer= e.byts2BytsBuff(byts, mode, standard)
                for(var i = 0; i<buffer.length; i++){
                    assert.equal(buffer[i], bytsBuff[i])
                }
                mode = mode.charCodeAt(0)+32
                mode = String.fromCharCode(mode)
            }while(mode=='e'||mode=='E')
        }
    }

    bytsBuff2Hex(standard_min, standard_max){
        var e  = new Encoding()
        var r = new Rand()
        for(var q = standard_min; q<=standard_max; q=q*2){
            var standard=q
            var mode='E'
            do{
                console.log('bytsBuff2Hex(', mode,')')
                for(var i = 1; i<Math.pow(2, standard);i=i*2){
                    var bytsBuff = r.bytsBuff(i, i, i, mode, standard)
                    var hexStr=e._0xStr(e.bytsBuff2Hex(bytsBuff, mode, standard))
                    var token=0
                    assert.equal(bytsBuff.length*(standard/4), hexStr.length)
                    for(var j = 0; j<bytsBuff.length; j++){
                        var str = hexStr.slice(token, token+(standard/4))
                        token+=(standard/4)
                        if(this.verbose){console.log(e._0xStr(e.byts2Hex(bytsBuff[j], mode, standard)), str)}
                        assert.equal(e._0xStr(e.byts2Hex(bytsBuff[j], mode, standard)), str)
                    }
                }
                mode = mode.charCodeAt(0)+32
                mode = String.fromCharCode(mode)
            }while(mode=='e'||mode=='E')
        }
    }

    next(standard_min, standard_max){
        var e  = new Encoding()
        var r = new Rand()
        for(var q = standard_min; q<=standard_max; q=q*2){
            var standard=q
            var mode='E'
            do{
                console.log('next(', mode,')')
                for(var i = 1; i<Math.pow(2, standard);i=i*2){
                    var bytsBuff = r.bytsBuff(i, i, i, mode, standard)
                    var hexStr=e._0xStr(e.bytsBuff2Hex(bytsBuff, mode, standard))
                    assert.equal(bytsBuff.length*(standard/4), hexStr.length)
                    var j=0;
                    do{
                        var str = e.next(hexStr, 'hex', standard)
                        if(str){
                            if(this.verbose){console.log(e._0xStr(e.byts2Hex(bytsBuff[j], mode, standard)), str)}
                            assert.equal(e._0xStr(e.byts2Hex(bytsBuff[j], mode, standard)), str)
                            j++
                        }else{
                            assert(j==bytsBuff.length, true)
                        }
                    }while(str)
                }
                mode = mode.charCodeAt(0)+32
                mode = String.fromCharCode(mode)
            }while(mode=='e'||mode=='E')
        }
    }

    byts2HexBuff(standard_min, standard_max){
        var e  = new Encoding()
        var r = new Rand()
        for(var q = standard_min; q<=standard_max; q=q*2){
            var standard=q
            var mode='E'
            do{
                console.log('byts2HexBuff(', mode,')')

                var byts=''
                var hexBuff=[]

                for(var i = 1; i<Math.pow(2, standard);i=i*2){
                    var _byts = r.bytsRng(i, i, mode, standard)
                    byts+=_byts
                    hexBuff.push(e.byts2Hex(_byts, mode, standard))
                }

                var buffer= e.byts2HexBuff(byts, mode, standard)

                for(var i = 0; i<buffer.length; i++){
                    assert.equal(buffer[i], hexBuff[i])
                }
                mode = mode.charCodeAt(0)+32
                mode = String.fromCharCode(mode)
            }while(mode=='e'||mode=='E')
        }
    }

    bytsBuff2Byts(standard_min, standard_max){
        var e  = new Encoding()
        var r = new Rand()
        for(var q = standard_min; q<=standard_max; q=q*2){
            var standard=q
            var mode='E'
            do{
                console.log('bytsBuff2Byts(', mode,')')
                for(var i = 1; i<Math.pow(2, standard);i=i*2){
                    var bytsBuff = r.bytsBuff(i, i, i, mode, standard)
                    var bytStr=e.bytsBuff2Byts(bytsBuff, mode, standard)

                    assert.equal(bytsBuff.join('').length, bytStr.length)
                    var j=0;
                    do{
                        var str = e.next(bytStr, 'bin', standard)
                        if(str){
                            if(this.verbose){console.log(bytsBuff[j], str)}
                            assert.equal(bytsBuff[j], str)
                            j++
                        }else{
                            assert(j==bytsBuff.length, true)
                        }
                    }while(str)
                }
                mode = mode.charCodeAt(0)+32
                mode = String.fromCharCode(mode)
            }while(mode=='e'||mode=='E')
        }
    }

    char2Hex(standard_min, standard_max){
        var e  = new Encoding()
        var r = new Rand()
        for(var q = standard_min; q<=standard_max; q=q*2){
            var standard=q
            var mode='E'
            do{
            
                for(var i = 1; i<Math.pow(2, standard);i=i*2){
                    var char = r.str(1, 1)
                    assert.equal(char.length, 1)
                    var hex = e.char2Hex(char, mode, standard)
                    if(this.verbose){console.log(char, hex)}

                    assert.equal(char, e.hex2Char(hex, mode, standard))
                }

                mode = mode.charCodeAt(0)+32
                mode = String.fromCharCode(mode)
            }while(mode=='e'||mode=='E')
        }
    }

    chainTest(standard_min, standard_max){

        var e  = new Encoding()
        var r = new Rand()
        for(var q = standard_min; q<=standard_max; q=q*2){
            var standard=q
            var mode='E'
            do{
                console.log('chainTest(', mode,')')

                var byts=''
                for(var i = 1; i<Math.pow(2, standard);i=i*2){
                    byts=r.bytsRng(i, i, mode, standard)
                    assert.equal(
                        e.str2Byts(
                            e.bytsBuff2Str(
                                e.byts2BytsBuff(
                                    e.bytsBuff2Byts(
                                        e.str2BytsBuff(
                                            e.hexBuff2Str(
                                                e.str2HexBuff(
                                                    e.hex2Str(
                                                        e.byts2Hex(
                                                            e.hex2Byts(
                                                                e.dec2Hex(
                                                                    e.hex2Dec(
                                                                        e.byts2Hex(
                                                                            e.dec2Byts(
                                                                                e.byts2Dec(
                                                                                    byts,
                                                                                    mode,
                                                                                    standard
                                                                                ),mode, standard
                                                                            ),mode, standard
                                                                        ),mode, standard
                                                                    ),mode, standard
                                                                ),mode, standard
                                                            ),mode, standard
                                                        ), mode, standard
                                                    ), mode, standard                        
                                                ),mode, standard
                                            ),mode, standard
                                        ),mode, standard
                                    ),mode, standard
                                ),mode, standard
                            ),mode, standard
                        ),
                        byts
                    )
                
                }
                mode = mode.charCodeAt(0)+32
                mode = String.fromCharCode(mode)
            }while(mode=='e'||mode=='E')
        }
    }
} 

new EncodingTest(true, 8, 16)