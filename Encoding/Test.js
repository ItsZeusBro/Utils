import {Encoding} from "./Encoding.js"
import {Rand} from "../Rand/Rand.js"
import assert from "node:assert"
export class EncodingTest{

    constructor(verbose){
        //WARNING, DOES NOT WORK FOR BIG NUM_ERS _ECAUSE SCIENTIFIC NOTATION KICKS IN AND JAVASCRIPT
        //DOES NOT REPRESENT ALL OF ITS PRECISION


        this.verbose=verbose
        this.byts2BytsBuff()
        this.byts2HexBuff()
        this.hexBuff2Str()
        char2Hex
        hexRng_E

        // this.frmtByts_E()
        // this.frmtByts_e()
        // this.frmtHex_E()
        // this.frmtHex_e()

        // this.dec2Char()
        // this.dec2Byts_E()
        // this.dec2Byts_e()
        // this.dec2Hex_E()
        // this.dec2Hex_e()

        // this.byts2Dec_E()
        // this.byts2Dec_e()
        // this.byts2Hex_E()
        // this.byts2Hex_e()
        // this.byts2Str_E()
        // this.byts2Str_e()
        // this.bytBuff2Str_E()
        // this.bytBuff2Str_e()

        // this.hex2Byts_E()
        // this.hex2Byts_e()
        // this.hexRng_E()
        // this.hexRng_e()
        // this.hex2Dec_E()
        // this.hex2Dec_e()
        // this.hex2Str_E()
        // this.hex2Str_e()

       
        // this.str2HexBuff_E()
        // this.str2HexBuff_e()
        // this.str2BytsBuff_E()
        // this.str2BytsBuff_e()
        // this.str2Byts_E()
        // this.str2Byts_e()


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


        this.chainTest_E()
        this.chainTest_e()
    }

    frmtByts_E(){
        console.log('frmtByts_E()')
        var e = new Encoding()
        for(var i = 0; i<10000; i++){
            if(this.verbose){
                console.log('frmtByts_E()1', e.frmtByts_E(e.dec2Byts_E(i)), i)
            }
            assert.equal(e.byts2Dec_E(e.frmtByts_E(e.dec2Byts_E(i))), i)
        }
        for(var i = Number.MAX_SAFE_INTEGER-10000; i<=Number.MAX_SAFE_INTEGER; i++){
            if(this.verbose){
                console.log('frmtByts_E()2', e.frmtByts_E(e.dec2Byts_E(i)), i)
            }
            assert.equal(e.byts2Dec_E(e.frmtByts_E(e.dec2Byts_E(i))), i)
        }

    }

    frmtByts_e(){
        console.log('frmtByts_e()')
        var e = new Encoding()
        for(var i = 0; i<10000; i++){
            if(this.verbose){
                console.log('frmtByts_e()1',e.frmtByts_e(e.dec2Byts_e(i)), i)
            }
            assert.equal(e.byts2Dec_e(e.frmtByts_e(e.dec2Byts_e(i))), i)
        }
        for(var i = Number.MAX_SAFE_INTEGER-10000; i<=Number.MAX_SAFE_INTEGER; i++){
            if(this.verbose){
                console.log('frmtByts_e()2', e.frmtByts_e(e.dec2Byts_e(i)), i)
            }
            assert.equal(e.byts2Dec_e(e.frmtByts_e(e.dec2Byts_e(i))), i)
        }
    }

    frmtHex_E(){
        console.log('frmtHex_E()')
        var e = new Encoding()
        var r = new Rand()
        for(var i = 0; i<=100000; i++){
            var hex = r.hexRng_E(i, i)
            hex = e.frmtHex_E(hex)
            assert.equal(hex.length%2==0, true)
            if(this.verbose){
                console.log('frmtHex_E()1', hex, e.hex2Dec_E(hex))
            }
            assert.equal(e.hex2Dec_E(hex), i)
        }
        //send in 1 it should return length 2 hex, send in 3 and it should return length 4 etc...
        for(var i = Number.MAX_SAFE_INTEGER-10000; i<=Number.MAX_SAFE_INTEGER; i++){
            var hex = r.hexRng_E(i, i)
            hex = e.frmtHex_E(hex)
            assert.equal(hex.length%2==0, true)
            if(this.verbose){
                console.log('frmtHex_E()1', hex, e.hex2Dec_E(hex))
            }
            assert.equal(e.hex2Dec_E(hex), i)
        }
    }

    frmtHex_e(){
        console.log('frmtHex_e()')
        var e = new Encoding()
        var r = new Rand()

        for(var i = 0; i<=100000; i++){
            var hex = r.hexRng_e(i, i)
            hex = e.frmtHex_e(hex)
            assert.equal(hex.length%2==0, true)
            if(this.verbose){
                console.log('frmtHex_e()1', hex, e.hex2Dec_e(hex))
            }
            assert.equal(e.hex2Dec_e(hex), i)
        }
        //send in 1 it should return length 2 hex, send in 3 and it should return length 4 etc...
        for(var i = Number.MAX_SAFE_INTEGER-10000; i<=Number.MAX_SAFE_INTEGER; i++){
            var hex = r.hexRng_e(i, i)
            hex = e.frmtHex_e(hex)
            assert.equal(hex.length%2==0, true)
            if(this.verbose){
                console.log('frmtHex_e()1', hex, e.hex2Dec_e(hex))
            }
            assert.equal(e.hex2Dec_e(hex), i)
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

    dec2Byts_E(){
        console.log('dec2Byts_E()')
        var e  = new Encoding()
        for(var i = 0; i<=100000; i++){
            if(this.verbose){
                console.log('dec2Byts_E()1', e.dec2Byts_E(i), i)
            }
            assert.equal(
                e.byts2Dec_E(e.dec2Byts_E(i)), 
                i
            )
        }
        for(var i = Number.MAX_SAFE_INTEGER-100000; i<=Number.MAX_SAFE_INTEGER; i++){
            if(this.verbose){
                console.log('dec2Byts_E()1', e.dec2Byts_E(i), i)
            }
            assert.equal(
                e.byts2Dec_E(e.dec2Byts_E(i)), 
                i
            )
        }
    }

    dec2Byts_e(){
        console.log('dec2Byts_e()')
        var e  = new Encoding()
        for(var i = 0; i<=100000; i++){
            //javascript assumes parseInt is little endian
            if(this.verbose){
                console.log('dec2Byts_e()1', e.dec2Byts_e(i), i)
            }
            assert.equal(
                e.byts2Dec_e(e.dec2Byts_e(i)), 
                i
            )
        }
        for(var i = Number.MAX_SAFE_INTEGER-100000; i<=Number.MAX_SAFE_INTEGER; i++){
            //javascript assumes parseInt is little endian
            if(this.verbose){
                console.log('dec2Byts_e()1', e.dec2Byts_e(i), i)
            }
            assert.equal(
                e.byts2Dec_e(e.dec2Byts_e(i)), 
                i
            )
        }
    }

    dec2Hex_E(){
        console.log('dec2Hex_E()')
        var e  = new Encoding()
        for(var i = 0; i<=100000; i++){
            if(this.verbose){
                console.log('dec2Hex_E()1', hex, i)
            }
            var byts = e.dec2Byts_E(i)
            var hex = e.byts2Hex_E(byts)
            assert.equal(hex, e.dec2Hex_E(i))
        }
        for(var i = Number.MAX_SAFE_INTEGER-100000; i<=Number.MAX_SAFE_INTEGER; i++){
            if(this.verbose){
                console.log('dec2Hex_E()1', hex, i)
            }
            var byts = e.dec2Byts_E(i)
            var hex = e.byts2Hex_E(byts)
            assert.equal(hex, e.dec2Hex_E(i))
        }
    }

    dec2Hex_e(){
        console.log('dec2Hex_e()')
        var e  = new Encoding()
        for(var i = 0; i<=100000; i++){
            if(this.verbose){
                console.log('dec2Hex_e()1', hex, i)
            }
            var byts = e.dec2Byts_e(i)
            var hex = e.byts2Hex_e(byts)
            assert.equal(hex, e.dec2Hex_e(i))
        }
        for(var i = Number.MAX_SAFE_INTEGER-100000; i<=Number.MAX_SAFE_INTEGER; i++){
            if(this.verbose){
                console.log('dec2Hex_e()1', hex, i)
            }
            var byts = e.dec2Byts_e(i)
            var hex = e.byts2Hex_e(byts)
            assert.equal(hex, e.dec2Hex_e(i))
        }
    }

    byts2Dec_E(){

        console.log('byts2Dec_E()')
        var e=new Encoding()
        var byts=''
        for(var i = 0; i<5; i++){
            byts+=new Rand().bytsRng_E(i, i)
        }
        var dec = e.byts2Dec_E(byts)
        var byts = e.dec2Byts_E(dec)
        if(this.verbose){
            console.log('byts2Dec_E()1', byts, e.byts2Dec_E(byts))
        }
        assert.equal(
            dec, 
            e.byts2Dec_E(byts)
        )
        for(var i = 0; i<=100000; i++){
            var byts = new Encoding().dec2Byts_E(i)
            if(this.verbose){
                console.log('byts2Dec_E()2', byts, e.byts2Dec_E(byts))
            }
            assert.equal(
                new Encoding().dec2Byts_E(i), 
                new Encoding().dec2Byts_E(new Encoding().byts2Dec_E(byts))
            )
        }
        for(var i = Number.MAX_SAFE_INTEGER-100000; i<=Number.MAX_SAFE_INTEGER; i++){
            var byts = new Encoding().dec2Byts_E(i)
            if(this.verbose){
                console.log('byts2Dec_E()2', byts, e.byts2Dec_E(byts))
            }
            assert.equal(
                new Encoding().dec2Byts_E(i), 
                new Encoding().dec2Byts_E(new Encoding().byts2Dec_E(byts))
            )
        }
    }

    byts2Dec_e(){

        console.log('byts2Dec_e()')
        var e=new Encoding()
        var r=new Rand()
        var byts=''
        for(var i = 0; i<5; i++){
            byts+=r.bytsRng_e(i, i)
        }
        var dec = e.byts2Dec_e(byts)
        var byts = e.dec2Byts_e(dec)
        if(this.verbose){
            console.log('byts2Dec_e()1', byts, e.byts2Dec_e(byts))
        }
        assert.equal(
            dec, 
            e.byts2Dec_e(byts)
        )
        for(var i = 0; i<=100000; i++){
            var byts = e.dec2Byts_e(i)
            if(this.verbose){
                console.log('byts2Dec_e()2', byts, e.byts2Dec_e(byts))
            }
            assert.equal(
                e.dec2Byts_e(i), 
                e.dec2Byts_e(e.byts2Dec_e(byts))
            )
        }
        for(var i = Number.MAX_SAFE_INTEGER-100000; i<=Number.MAX_SAFE_INTEGER; i++){
            var byts = e.dec2Byts_e(i)
            if(this.verbose){
                console.log('byts2Dec_e()2', byts, e.byts2Dec_e(byts))
            }
            assert.equal(
                e.dec2Byts_e(i), 
                e.dec2Byts_e(e.byts2Dec_e(byts))
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