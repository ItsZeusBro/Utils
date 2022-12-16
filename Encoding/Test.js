import {Encoding} from "./Encoding.js"
import {Rand} from "../Rand/Rand.js"
import assert from "node:assert"
export class EncodingTest{

    constructor(verbose){
        //WARNING, DOES NOT WORK FOR BIG NUM_ERS _ECAUSE SCIENTIFIC NOTATION KICKS IN AND JAVASCRIPT
        //DOES NOT REPRESENT ALL OF ITS PRECISION


        this.verbose=verbose
        // this.byts2BytsBuff()
        // this.byts2HexBuff()
        // this.hexBuff2Str()

        this.frmtByts()
        this.frmtHex()

        this.dec2Char()
        this.dec2Byts()
        this.dec2Hex()

        this.byts2Dec()
        // this.byts2Hex()
        // this.byts2Str()
        // this.bytBuff2Str()

        // this.hex2Byts()
        // this.hexRng()
        // this.hex2Dec()
        // this.hex2Str()

       
        // this.str2HexBuff()
        // this.str2BytsBuff()
        // this.str2Byts()

        // this.chainTest()
        // this.chainTest()

        //These need to be done 
        // this.str2Hex_E()
        // this.str2Hex_e()
        //this.str2DecBuff()
        //this.str2DecBuff()
        // this.bytBuff2Hex_E()
        // this.bytBuff2Hex_e()
        // this.bytBuff2Byts_E()
        // this.bytBuff2Byts_e()
        //this.dec2BytBuff_E()
        //this.dec2BytBuff_e()
        //this.dec2HexBuff_E()
        //this.dec2HexBuff_e()



    }

    frmtByts(){
        console.log('frmtByts()')
        var e = new Encoding()
        //E
        for(var i = 0; i<10000; i++){
            if(this.verbose){
                console.log('frmtByts(E) 1', e.frmtByts(e.dec2Byts(i, 'E'), 'E'), i)
            }
            assert.equal(e.byts2Dec(e.frmtByts(e.dec2Byts(i, 'E'), 'E'), 'E'), i)
        }

        for(var i = Number.MAX_SAFE_INTEGER-10000; i<=Number.MAX_SAFE_INTEGER; i++){
            if(this.verbose){
                console.log('frmtByts(E) 2', e.frmtByts(e.dec2Byts(i, 'E'), 'E'), i)
            }
            assert.equal(e.byts2Dec(e.frmtByts(e.dec2Byts(i, 'E'), 'E'), 'E'), i)
        }

        //e
        for(var i = 0; i<10000; i++){
            if(this.verbose){
                console.log('frmtByts(e) 1', e.frmtByts(e.dec2Byts(i, 'e'), 'e'), i)
            }
            assert.equal(e.byts2Dec(e.frmtByts(e.dec2Byts(i, 'e'), 'e'), 'e'), i)
        }

        for(var i = Number.MAX_SAFE_INTEGER-10000; i<=Number.MAX_SAFE_INTEGER; i++){
            if(this.verbose){
                console.log('frmtByts(e) 2', e.frmtByts(e.dec2Byts(i, 'e'), 'e'), i)
            }
            assert.equal(e.byts2Dec(e.frmtByts(e.dec2Byts(i, 'e'), 'e'), 'e'), i)
        }
    }


    frmtHex(){
        console.log('frmtHex()')
        var e = new Encoding()
        var r = new Rand()

        for(var i = 0; i<=100000; i++){
            var hex = r.hexRng(i, i, 'E')
            hex = e.frmtHex(hex, 'E')
            assert.equal(hex.length%2==0, true)
            if(this.verbose){
                console.log('frmtHex(E) 1', hex, e.hex2Dec(hex, 'E'))
            }
            assert.equal(e.hex2Dec(hex, 'E'), i)
        }

        //send in 1 it should return length 2 hex, send in 3 and it should return length 4 etc...
        for(var i = Number.MAX_SAFE_INTEGER-10000; i<=Number.MAX_SAFE_INTEGER; i++){
            var hex = r.hexRng(i, i, 'E')
            hex = e.frmtHex(hex, 'E')
            assert.equal(hex.length%2==0, true)
            if(this.verbose){
                console.log('frmtHex(E) 2', hex, e.hex2Dec(hex, 'E'))
            }
            assert.equal(e.hex2Dec(hex, 'E'), i)
        }

        //e
        for(var i = 0; i<=100000; i++){
            var hex = r.hexRng(i, i, 'e')
            hex = e.frmtHex(hex, 'e')
            assert.equal(hex.length%2==0, true)
            if(this.verbose){
                console.log('frmtHex(e) 1', hex, e.hex2Dec(hex, 'e'))
            }
            assert.equal(e.hex2Dec(hex, 'e'), i)
        }

        //send in 1 it should return length 2 hex, send in 3 and it should return length 4 etc...
        for(var i = Number.MAX_SAFE_INTEGER-10000; i<=Number.MAX_SAFE_INTEGER; i++){
            var hex = r.hexRng(i, i, 'e')
            hex = e.frmtHex(hex, 'e')
            assert.equal(hex.length%2==0, true)
            if(this.verbose){
                console.log('frmtHex(e) 2', hex, e.hex2Dec(hex, 'e'))
            }
            assert.equal(e.hex2Dec(hex, 'e'), i)
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

    dec2Byts(){
        console.log('dec2Byts()')
        var e  = new Encoding()
        //E
        for(var i = 0; i<=100000; i++){
            if(this.verbose){
                console.log('dec2Byts(E) 1', e.dec2Byts(i, 'E'), i)
            }
            assert.equal(
                e.byts2Dec(e.dec2Byts(i, 'E'), 'E'), 
                i
            )
        }
        for(var i = Number.MAX_SAFE_INTEGER-100000; i<=Number.MAX_SAFE_INTEGER; i++){
            if(this.verbose){
                console.log('dec2Byts(E) 1', e.dec2Byts(i, 'E'), i)
            }
            assert.equal(
                e.byts2Dec(e.dec2Byts(i, 'E'), 'E'), 
                i
            )
        }

        //e
        for(var i = 0; i<=100000; i++){
            if(this.verbose){
                console.log('dec2Byts(e) 1', e.dec2Byts(i, 'e'), i)
            }
            assert.equal(
                e.byts2Dec(e.dec2Byts(i, 'e'), 'e'), 
                i
            )
        }
        for(var i = Number.MAX_SAFE_INTEGER-100000; i<=Number.MAX_SAFE_INTEGER; i++){
            if(this.verbose){
                console.log('dec2Byts(E) 1', e.dec2Byts(i, 'e'), i)
            }
            assert.equal(
                e.byts2Dec(e.dec2Byts(i, 'e'), 'e'), 
                i
            )
        }
    }

    dec2Hex(){
        console.log('dec2Hex()')
        var e  = new Encoding()
        //e
        for(var i = 0; i<=100000; i++){
            if(this.verbose){
                console.log('dec2Hex(E) 1', hex, i)
            }
            var byts = e.dec2Byts(i, 'E')
            var hex = e.byts2Hex(byts, 'E')
            assert.equal(hex, e.dec2Hex(i, 'E'))
        }
        for(var i = Number.MAX_SAFE_INTEGER-100000; i<=Number.MAX_SAFE_INTEGER; i++){
            if(this.verbose){
                console.log('dec2Hex(E) 1', hex, i)
            }
            var byts = e.dec2Byts(i, 'E')
            var hex = e.byts2Hex(byts, 'E')
            assert.equal(hex, e.dec2Hex(i, 'E'))
        }


        //E
        for(var i = 0; i<=100000; i++){
            if(this.verbose){
                console.log('dec2Hex(e) 1', hex, i)
            }
            var byts = e.dec2Byts(i, 'e')
            var hex = e.byts2Hex(byts, 'e')
            assert.equal(hex, e.dec2Hex(i, 'e'))
        }
        for(var i = Number.MAX_SAFE_INTEGER-100000; i<=Number.MAX_SAFE_INTEGER; i++){
            if(this.verbose){
                console.log('dec2Hex(e) 1', hex, i)
            }
            var byts = e.dec2Byts(i, 'e')
            var hex = e.byts2Hex(byts, 'e')
            assert.equal(hex, e.dec2Hex(i, 'e'))
        }
    }


    byts2Dec(){

        console.log('byts2Dec()')
        var e=new Encoding()
        var byts=''
        for(var i = 0; i<5; i++){
            byts+=new Rand().bytsRng(i, i, 'E')
        }
        var dec = e.byts2Dec(byts, 'E')
        byts = e.dec2Byts(dec, 'E')
        if(this.verbose){
            console.log('byts2Dec(E) 1', byts, e.byts2Dec(byts, 'E'))
        }
        assert.equal(
            dec, 
            e.byts2Dec(byts, 'E')
        )
        for(var i = 0; i<=100000; i++){
            byts = new Encoding().dec2Byts(i, 'E')
            if(this.verbose){
                console.log('byts2Dec(E) 2', byts, e.byts2Dec(byts, 'E'))
            }
            assert.equal(
                new Encoding().dec2Byts(i, 'E'), 
                new Encoding().dec2Byts(new Encoding().byts2Dec(byts, 'E'),'E')
            )
        }
        for(var i = Number.MAX_SAFE_INTEGER-100000; i<=Number.MAX_SAFE_INTEGER; i++){
            byts = new Encoding().dec2Byts(i, 'E')
            if(this.verbose){
                console.log('byts2Dec(E) 2', byts, e.byts2Dec(byts, 'E'))
            }
            assert.equal(
                new Encoding().dec2Byts(i, 'E'), 
                new Encoding().dec2Byts(new Encoding().byts2Dec(byts, 'E'), 'E')
            )
        }

        //e

        byts=''
        for(var i = 0; i<5; i++){
            byts+=new Rand().bytsRng(i, i, 'e')
        }
        dec = e.byts2Dec(byts, 'e')
        byts = e.dec2Byts(dec, 'e')
        if(this.verbose){
            console.log('byts2Dec(e) 1', byts, e.byts2Dec(byts, 'e'))
        }
        assert.equal(
            dec, 
            e.byts2Dec(byts, 'e')
        )
        for(var i = 0; i<=100000; i++){
            byts = new Encoding().dec2Byts(i, 'e')
            if(this.verbose){
                console.log('byts2Dec(e) 2', byts, e.byts2Dec(byts, 'e'))
            }
            assert.equal(
                new Encoding().dec2Byts(i, 'e'), 
                new Encoding().dec2Byts(new Encoding().byts2Dec(byts, 'e'),'e')
            )
        }
        for(var i = Number.MAX_SAFE_INTEGER-100000; i<=Number.MAX_SAFE_INTEGER; i++){
            byts = new Encoding().dec2Byts(i, 'e')
            if(this.verbose){
                console.log('byts2Dec(e) 2', byts, e.byts2Dec(byts, 'e'))
            }
            assert.equal(
                new Encoding().dec2Byts(i, 'e'), 
                new Encoding().dec2Byts(new Encoding().byts2Dec(byts, 'e'), 'e')
            )
        }

    }


    

    byts2Hex_E(){
        console.log('byts2Hex_E()')
        var e=new Encoding()
        var r=new Rand()

        for(var i = 0; i<=100000; i++){
            var byts = e.dec2Byts_E(i)
            var hex = e.byts2Hex_E(byts)
            if(this.verbose){
                console.log('byts2Hex_E()2', byts, hex)
            }
            assert.equal(byts, e.hex2Byts_E(hex))
        }
        for(var i = Number.MAX_SAFE_INTEGER-100000; i<=Number.MAX_SAFE_INTEGER; i++){
            var byts = e.dec2Byts_E(i)
            var hex = e.byts2Hex_E(byts)
            if(this.verbose){
                console.log('byts2Hex_E()2', byts, hex)
            }
            assert.equal(byts, e.hex2Byts_E(hex))
        }
    }

    byts2Hex_e(){
        console.log('byts2Hex_e()')
        var e=new Encoding()
        var r=new Rand()
        for(var i = 0; i<=100000; i++){
            var byts = e.dec2Byts_e(i)
            var hex = e.byts2Hex_e(byts)
            if(this.verbose){
                console.log('byts2Hex_e()2', byts, hex)
            }
            assert.equal(byts, e.hex2Byts_e(hex))
        }
        for(var i = Number.MAX_SAFE_INTEGER-100000; i<=Number.MAX_SAFE_INTEGER; i++){
            var byts = e.dec2Byts_e(i)
            var hex = e.byts2Hex_e(byts)
            if(this.verbose){
                console.log('byts2Hex_e()2', byts, hex)
            }
            assert.equal(byts, e.hex2Byts_e(hex))
        }
    }

    hex2Byts_E(){
        console.log('hex2Bin_E()')
        var e=new Encoding()
        var r=new Rand()
        for(var i = 0; i<=100000; i++){
            var hex = r.hexRng_E(i, i)
            var bin = e.hex2Byts_E(hex)
            if(this.verbose){ console.log('hex2Byts_E()2', bin, hex) }
            assert.equal(hex, e.byts2Hex_E(bin))
        }
        for(var i = Number.MAX_SAFE_INTEGER-100000; i<=Number.MAX_SAFE_INTEGER; i++){
            var hex = r.hexRng_E(i, i)
            var bin = e.hex2Byts_E(hex)
            if(this.verbose){ console.log('hex2Byts_E()2', bin, hex) }
            assert.equal(hex, e.byts2Hex_E(bin))
        }
    }

    hex2Byts_e(){
        console.log('hex2Byts_e()')
        var e=new Encoding()
        var r=new Rand()
        for(var i = 0; i<=100000; i++){
            var hex = r.hexRng_e(i, i)
            var bin = e.hex2Byts_e(hex)
            if(this.verbose){ console.log('hex2Byts_e()2', bin, hex) }
            assert.equal(hex, e.byts2Hex_e(bin))
        }
        for(var i = Number.MAX_SAFE_INTEGER-100000; i<=Number.MAX_SAFE_INTEGER; i++){
            var hex = r.hexRng_e(i, i)
            var bin = e.hex2Byts_e(hex)
            if(this.verbose){ console.log('hex2Byts_e()2', bin, hex) }
            assert.equal(hex, e.byts2Hex_e(bin))
        }

    }

    hexRng_E(){
        console.log('hexRng_E()')
        var e=new Encoding()
        var r=new Rand()
        for(var i = 0; i<=100000; i++){
            var hex = r.hexRng_E(i, i)
            if(this.verbose){ console.log('hexRng_E()1', e.hex2Byts_E(hex), hex, i) }
            assert.equal(e.byts2Dec_E(e.hex2Byts_E(hex)), i)
        }
        for(var i = Number.MAX_SAFE_INTEGER-100000; i<=Number.MAX_SAFE_INTEGER; i++){
            var hex = r.hexRng_E(i, i)
            if(this.verbose){ console.log('hexRng_E()2', e.hex2Byts_E(hex), hex, i) }
            assert.equal(e.byts2Dec_E(e.hex2Byts_E(hex)), i)
        }
    }

    hexRng_e(){
        console.log('hexRng_e()')
        var e=new Encoding()
        var r=new Rand()
        for(var i = 0; i<=100000; i++){
            var hex = r.hexRng_e(i, i)
            if(this.verbose){ console.log('hexRng_e()1', e.hex2Byts_e(hex), hex, i) }
            assert.equal(e.byts2Dec_e(e.hex2Byts_e(hex)), i)
        }
        for(var i = Number.MAX_SAFE_INTEGER-100000; i<=Number.MAX_SAFE_INTEGER; i++){
            var hex = r.hexRng_e(i, i)
            if(this.verbose){ console.log('hexRng_e()2', e.hex2Byts_e(hex), hex, i) }
            assert.equal(e.byts2Dec_e(e.hex2Byts_e(hex)), i)
        }
    }

    hex2Dec_E(){
        console.log('hex2Dec_E()')
        var e=new Encoding()
        var r=new Rand()
        for(var i = 1; i<100000; i++){
            var byts = e.dec2Byts_E(i)
            var hex = e.byts2Hex_E(byts)
            if(this.verbose){ console.log('hex2Dec_E()1', i, e.hex2Dec_E(hex)) }
            assert.equal(i, e.hex2Dec_E(hex))
        }
        for(var i = Number.MAX_SAFE_INTEGER-100000; i<=Number.MAX_SAFE_INTEGER; i++){
            var byts = e.dec2Byts_E(i)
            var hex = e.byts2Hex_E(byts)
            if(this.verbose){ console.log('hex2Dec_E()1', i, e.hex2Dec_E(hex)) }
            assert.equal(i, e.hex2Dec_E(hex))
        }
    }

    hex2Dec_e(){
        console.log('hex2Dec_e()')
        var e=new Encoding()
        var r=new Rand()
        for(var i = 1; i<100000; i++){
            var byts = e.dec2Byts_e(i)
            var hex = e.byts2Hex_e(byts)
            if(this.verbose){ console.log('hex2Dec_e()1', i, e.hex2Dec_e(hex)) }
            assert.equal(i, e.hex2Dec_e(hex))
        }
        for(var i = Number.MAX_SAFE_INTEGER-100000; i<=Number.MAX_SAFE_INTEGER; i++){
            var byts = e.dec2Byts_e(i)
            var hex = e.byts2Hex_e(byts)
            if(this.verbose){ console.log('hex2Dec_e()1', i, e.hex2Dec_e(hex)) }
            assert.equal(i, e.hex2Dec_e(hex))
        }
    }

    hex2Str_E(){
        console.log('hex2Str_E()')
        var e=new Encoding()
        var r=new Rand()
        for(var j = 0; j<100; j++){
            var hexStr=''
            for(var i = 0; i<100; i++){
                hexStr+=''+r.hexRng_E(i, i)
            }
            var str = e.hex2Str_E(hexStr)
            if(this.verbose){ console.log('hex2Str_E()1', str, hexStr) }
            assert.equal(hexStr, e.str2Hex_E(str))
        }
    }

    hex2Str_e(){
        console.log('hex2Str_e()')
        var e=new Encoding()
        var r=new Rand()
        for(var j = 0; j<100; j++){
            var hexStr=''
            for(var i = 0; i<100; i++){
                hexStr+=''+r.hexRng_e(i, i)
            }
            var str = e.hex2Str_e(hexStr)
            if(this.verbose){ console.log('hex2Str_e()1', str, hexStr) }
            assert.equal(hexStr, e.str2Hex_e(str))
        }
    }

    byts2Str_E(){
        console.log('byts2Str_E()')
        var e=new Encoding()
        var r=new Rand()
        for(var j = 0; j<100; j++){
            var bytStr=''
            var str=''
            for(var i = 0; i<100; i++){
                var byt=r.bytsRng_E(i, i)
                bytStr+=byt
                str+=e.bytBuff2Str_E([byt])
            }
            var str = e.byts2Str_E(bytStr)
            if(this.verbose){console.log('byts2Str_E()1', str, bytStr)}
            assert.equal(str, str)
        }
    }

    byts2Str_e(){
        console.log('byts2Str_e()')
        var e=new Encoding()
        var r=new Rand()
        for(var j = 0; j<100; j++){
            var bytStr=''
            var str=''
            for(var i = 0; i<100; i++){
                var byt=r.bytsRng_e(i, i)
                bytStr+=byt
                str+=e.bytBuff2Str_e([byt])
            }
            var str = e.byts2Str_e(bytStr)
            if(this.verbose){console.log('byts2Str_e()1', str, bytStr)}
            assert.equal(str, str)
        }
    }

    bytBuff2Str_E(){
        console.log('bytBuff2Str_E()')
        var e=new Encoding()
        var r=new Rand()
        for(var i = 0; i<=60000; i++){
            var buffer = []
            buffer.push(r.bytsRng_E(i, i))
            var str = e.bytBuff2Str_E(buffer)
            if(this.verbose){console.log('bytBuff2Str_E()1', str, buffer)}
            for(var j = 0; j<str.length; j++){
                assert.equal(e.hex2Byts_E(e.char2Hex_E(str[j])), buffer[j]) 
            }
        }
    }

    bytBuff2Str_e(){
        console.log('bytBuff2Str_e()')
        var e=new Encoding()
        var r=new Rand()
        for(var i = 0; i<=60000; i++){
            var buffer = []
            buffer.push(r.bytsRng_e(i, i))
            var str = e.bytBuff2Str_e(buffer)
            if(this.verbose){console.log('bytBuff2Str_e()1', str, buffer)}
            for(var j = 0; j<str.length; j++){
                assert.equal(e.hex2Byts_e(e.char2Hex_e(str[j])), buffer[j]) 
            }
        }
    }

    hexBuff2Str(){
        var e=new Encoding()
        var r=new Rand()
        console.log('hexBuff2Str(E)')
        var buffer = []
        for(var i = 0; i<=60000; i++){
           buffer.push(new Rand().hexRng(i, i, 'E'))
        }
        var str = new Encoding().hexBuff2Str(buffer, 'E')
        if(this.verbose){console.log(str, buffer)}
        for(var i = 0; i<str.length; i++){
            assert.equal(new Encoding().char2Hex(str[i], 'E'), buffer[i]) 
        }

        console.log('hexBuff2Str(e)')
        buffer = []
        for(var i = 0; i<=60000; i++){
           buffer.push(new Rand().hexRng(i, i, 'e'))
        }
        str = new Encoding().hexBuff2Str(buffer, 'e')
        if(this.verbose){console.log(str, buffer)}
        for(var i = 0; i<str.length; i++){
            assert.equal(new Encoding().char2Hex(str[i], 'e'), buffer[i]) 
        }

    }



    str2HexBuff_E(){
        console.log('str2HexBuff_E()')
        var e=new Encoding()
        var r=new Rand()

        for(var i=0; i<10000; i++){
            var str = r.str(i, i)
            var buffer = e.str2HexBuff_E(str)
            if(this.verbose){console.log('str2HexBuff_E()1', str, buffer)}
            assert.equal(str, e.hexBuff2Str_E(buffer))
        }
	}

    str2HexBuff_e(){
        console.log('str2HexBuff_e()')
        var e=new Encoding()
        var r=new Rand()

        for(var i=0; i<10000; i++){
            var str = r.str(i, i)
            var buffer = e.str2HexBuff_e(str)
            if(this.verbose){console.log('str2HexBuff_e()1', str, buffer)}
            assert.equal(str, e.hexBuff2Str_e(buffer))
        }
	}

    str2BytsBuff_E(){
        console.log('str2BytsBuff_E()')
        var e=new Encoding()
        var r=new Rand()
        for(var i=0; i<10000; i++){
            var str = new Rand().str(i, i)
            if(this.verbose){console.log(str, e.str2BytsBuff_E(str))}
            assert.equal(str, e.bytBuff2Str_E(e.str2BytsBuff_E(str)))
        }
	}

    str2BytsBuff_e(){
        console.log('str2BytsBuff_e()')
        var e=new Encoding()
        var r=new Rand()
        for(var i=0; i<10000; i++){
            var str = new Rand().str(i, i)
            if(this.verbose){console.log(str, e.str2BytsBuff_e(str))}
            assert.equal(str, e.bytBuff2Str_e(e.str2BytsBuff_e(str)))
        }
	}

    str2Byts_E(){
        console.log('str2Byts_E()')
        var e=new Encoding()
        var r=new Rand()
        for(var i=0; i<10000; i++){
            var str = new Rand().str(i, i)
            if(this.verbose){console.log(str, e.str2Byts_E(str))}
            assert.equal(str, e.byts2Str_E(e.str2Byts_E(str)))
        }
    }

    str2Byts_e(){
        console.log('str2Byts_e()')
        var e=new Encoding()
        var r=new Rand()
        for(var i=0; i<10000; i++){
            var str = new Rand().str(i, i)
            if(this.verbose){console.log(str, e.str2Byts_e(str))}
            assert.equal(str, e.byts2Str_e(e.str2Byts_e(str)))
        }
    }

    byts2HexBuff_E(){
        console.log('byts2BytsBuff()')
        var e=new Encoding()
        var byts=''
        var hexBuff=[]
        for(var i = 0; i<10000; i++){
            var _byts = new Rand().bytsRng_E(0, 255)
            byts+=_byts
            hexBuff.push(e.byts2Hex_E(_byts))
        }
        var buffer= e.byts2HexBuff_E(byts)
        for(var i = 0; i<buffer.length; i++){
            assert.equal(buffer[i], hexBuff[i])
        }
    }

    byts2BytsBuff(){
        console.log('byts2BytsBuff()')
        var e=new Encoding()
        var byts=''
        var bytBuff=[]
        for(var i = 0; i<10000; i++){
            var _byts = new Rand().bytsRng_E(0, 255)
            byts+=_byts
            bytBuff.push(_byts)
        }
        var buffer= e.byts2BytsBuff(byts)
        for(var i = 0; i<buffer.length; i++){
            assert.equal(buffer[i], bytBuff[i])
        }
    }

    chainTest_E(){
        console.log('chainTest_E()')
        var e=new Encoding()
        var byts=''
            for(var i = 0; i<10000; i++){
                byts=new Rand().bytsRng_E(i, i)
                assert.equal(
                    e.hexBuff2Str_E(
                        e.str2HexBuff_E(
                            e.bytBuff2Str_E(
                                e.byts2BytsBuff(
                                    e.bytsBuff2Byts(
                                        e.str2BytsBuff_E(
                                            e.byts2Str_E(
                                                e.str2Byts_E(
                                                    e.hex2Str_E(
                                                        e.byts2Hex_E(
                                                            e.hex2Byts_E(
                                                                e.dec2Hex_E(
                                                                    e.hex2Dec_E(
                                                                        e.byts2Hex_E(
                                                                            e.dec2Byts_E(
                                                                                e.byts2Dec_E(
                                                                                    e.dec2Byts_E(
                                                                                        e.byts2Dec_E(
                                                                                            byts
                                                                                        )
                                                                                    )
                                                                                )
                                                                            )
                                                                        )
                                                                    )
                                                                )
                                                            )
                                                        )
                                                    )
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                    ,
                    e.hexBuff2Str_E(e.byts2HexBuff_E(byts))
                ) 
        }
    }
    
    chainTest_e(){
        console.log('chainTest_e()')
        var e=new Encoding()
        var byts=''
            for(var i = 0; i<10000; i++){
                byts=new Rand().bytsRng_e(i, i)
                assert.equal(
                    e.hexBuff2Str_e(
                        e.str2HexBuff_e(
                            e.bytBuff2Str_e(
                                e.byts2BytsBuff(
                                    e.bytsBuff2Byts(
                                        e.str2BytsBuff_e(
                                            e.byts2Str_e(
                                                e.str2Byts_e(
                                                    e.hex2Str_e(
                                                        e.byts2Hex_e(
                                                            e.hex2Byts_e(
                                                                e.dec2Hex_e(
                                                                    e.hex2Dec_e(
                                                                        e.byts2Hex_e(
                                                                            e.dec2Byts_e(
                                                                                e.byts2Dec_e(
                                                                                    e.dec2Byts_e(
                                                                                        e.byts2Dec_e(
                                                                                            byts
                                                                                        )
                                                                                    )
                                                                                )
                                                                            )
                                                                        )
                                                                    )
                                                                )
                                                            )
                                                        )
                                                    )
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                    ,
                    e.hexBuff2Str_e(e.byts2HexBuff_e(byts))
                ) 
        }
    }
} 

new EncodingTest()