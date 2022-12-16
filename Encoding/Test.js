import {Encoding, Utils, Rand} from "./Utils.js"
import assert from "node:assert"
export class EncodingTest{

    constructor(verbose){
        //WARNING, DOES NOT WORK FOR BIG NUMBERS BECAUSE SCIENTIFIC NOTATION KICKS IN AND JAVASCRIPT
        //DOES NOT REPRESENT ALL OF ITS PRECISION
        this.verbose=verbose
        this.formatBytesBE()
        this.formatBytesLE()
        this.formatHexBE()
        this.formatHexLE()
        this.decimal2Char()
        this.decimal2BytesBE()
        this.decimal2BytesLE()
        this.decimal2HexBE()
        this.decimal2HexLE()
        this.bytes2DecimalBE()
        this.bytes2DecimalLE()
        this.bytes2HexBE()
        this.bytes2HexLE()
        this.hex2BytesBE()
        this.hex2BytesLE()
        this.hexRangeBE()
        this.hexRangeLE()
        this.hex2DecimalBE()
        this.hex2DecimalLE()
        this.hex2StringBE()
        this.hex2StringLE()
        this.bytes2StringBE()
        this.bytes2StringLE()
        this.byteBuffer2StringBE()
        this.byteBuffer2StringLE()
        this.hexBuffer2StringBE()
        this.hexBuffer2StringLE()
        this.string2HexBufferBE()
        this.string2HexBufferLE()
        this.string2BytesBufferBE()
        this.string2BytesBufferLE()
        this.bytes2BytesBuffer()
        this.bytes2HexBufferBE()
        this.string2BytesBE()
        this.string2BytesLE()
        this.chainTestBE()
        this.chainTestLE()
    }

    formatBytesBE(){
        console.log('formatBytesBE()')
        var e = new Encoding()
        for(var i = 0; i<10000; i++){
            if(this.verbose){
                console.log('formatBytesBE()1', e.formatBytesBE(e.decimal2BytesBE(i)), i)
            }
            assert.equal(e.bytes2DecimalBE(e.formatBytesBE(e.decimal2BytesBE(i))), i)
        }
        for(var i = Number.MAX_SAFE_INTEGER-10000; i<=Number.MAX_SAFE_INTEGER; i++){
            if(this.verbose){
                console.log('formatBytesBE()2', e.formatBytesBE(e.decimal2BytesBE(i)), i)
            }
            assert.equal(e.bytes2DecimalBE(e.formatBytesBE(e.decimal2BytesBE(i))), i)
        }

    }

    formatBytesLE(){
        console.log('formatBytesLE()')
        var e = new Encoding()
        for(var i = 0; i<10000; i++){
            if(this.verbose){
                console.log('formatBytesLE()1',e.formatBytesLE(e.decimal2BytesLE(i)), i)
            }
            assert.equal(e.bytes2DecimalLE(e.formatBytesLE(e.decimal2BytesLE(i))), i)
        }
        for(var i = Number.MAX_SAFE_INTEGER-10000; i<=Number.MAX_SAFE_INTEGER; i++){
            if(this.verbose){
                console.log('formatBytesLE()2', e.formatBytesLE(e.decimal2BytesLE(i)), i)
            }
            assert.equal(e.bytes2DecimalLE(e.formatBytesLE(e.decimal2BytesLE(i))), i)
        }
    }

    formatHexBE(){
        console.log('formatHexBE()')
        var e = new Encoding()
        var r = new Rand()

        for(var i = 0; i<=100000; i++){
            var hex = r.hexRangeBE(i, i)
            hex = e.formatHexBE(hex)
            assert.equal(hex.length%2==0, true)
            if(this.verbose){
                console.log('formatHexBE()1', hex, e.hex2DecimalBE(hex))
            }
            assert.equal(e.hex2DecimalBE(hex), i)
        }
        //send in 1 it should return length 2 hex, send in 3 and it should return length 4 etc...
        for(var i = Number.MAX_SAFE_INTEGER-10000; i<=Number.MAX_SAFE_INTEGER; i++){
            var hex = r.hexRangeBE(i, i)
            hex = e.formatHexBE(hex)
            assert.equal(hex.length%2==0, true)
            if(this.verbose){
                console.log('formatHexBE()1', hex, e.hex2DecimalBE(hex))
            }
            assert.equal(e.hex2DecimalBE(hex), i)
        }
    }

    formatHexLE(){
        console.log('formatHexLE()')
        var e = new Encoding()
        var r = new Rand()

        for(var i = 0; i<=100000; i++){
            var hex = r.hexRangeLE(i, i)
            hex = e.formatHexLE(hex)
            assert.equal(hex.length%2==0, true)
            if(this.verbose){
                console.log('formatHexLE()1', hex, e.hex2DecimalLE(hex))
            }
            assert.equal(e.hex2DecimalLE(hex), i)
        }
        //send in 1 it should return length 2 hex, send in 3 and it should return length 4 etc...
        for(var i = Number.MAX_SAFE_INTEGER-10000; i<=Number.MAX_SAFE_INTEGER; i++){
            var hex = r.hexRangeLE(i, i)
            hex = e.formatHexLE(hex)
            assert.equal(hex.length%2==0, true)
            if(this.verbose){
                console.log('formatHexLE()1', hex, e.hex2DecimalLE(hex))
            }
            assert.equal(e.hex2DecimalLE(hex), i)
        }
    }

    decimal2Char(){
        console.log('decimal2Char()')
        var e  = new Encoding()
        for(var i = 0; i<=65535; i++){
            if(this.verbose){
                console.log('decimal2Char()1', i, e.decimal2Char(i))
            }
            assert.equal(String.fromCharCode(i), e.decimal2Char(i))
        }
    }

    decimal2BytesBE(){
        console.log('decimal2BytesBE()')
        var e  = new Encoding()
        for(var i = 0; i<=100000; i++){
            if(this.verbose){
                console.log('decimal2BytesBE()1', e.decimal2BytesBE(i), i)
            }
            assert.equal(
                e.bytes2DecimalBE(e.decimal2BytesBE(i)), 
                i
            )
        }
        for(var i = Number.MAX_SAFE_INTEGER-100000; i<=Number.MAX_SAFE_INTEGER; i++){
            if(this.verbose){
                console.log('decimal2BytesBE()1', e.decimal2BytesBE(i), i)
            }
            assert.equal(
                e.bytes2DecimalBE(e.decimal2BytesBE(i)), 
                i
            )
        }
    }

    decimal2BytesLE(){
        console.log('decimal2BytesLE()')
        var e  = new Encoding()
        for(var i = 0; i<=100000; i++){
            //javascript assumes parseInt is little endian
            if(this.verbose){
                console.log('decimal2BytesLE()1', e.decimal2BytesLE(i), i)
            }
            assert.equal(
                e.bytes2DecimalLE(e.decimal2BytesLE(i)), 
                i
            )
        }
        for(var i = Number.MAX_SAFE_INTEGER-100000; i<=Number.MAX_SAFE_INTEGER; i++){
            //javascript assumes parseInt is little endian
            if(this.verbose){
                console.log('decimal2BytesLE()1', e.decimal2BytesLE(i), i)
            }
            assert.equal(
                e.bytes2DecimalLE(e.decimal2BytesLE(i)), 
                i
            )
        }
    }

    decimal2HexBE(){
        console.log('decimal2HexBE()')
        var e  = new Encoding()
        for(var i = 0; i<=100000; i++){
            if(this.verbose){
                console.log('decimal2HexBE()1', hex, i)
            }
            var bytes = e.decimal2BytesBE(i)
            var hex = e.bytes2HexBE(bytes)
            assert.equal(hex, e.decimal2HexBE(i))
        }
        for(var i = Number.MAX_SAFE_INTEGER-100000; i<=Number.MAX_SAFE_INTEGER; i++){
            if(this.verbose){
                console.log('decimal2HexBE()1', hex, i)
            }
            var bytes = e.decimal2BytesBE(i)
            var hex = e.bytes2HexBE(bytes)
            assert.equal(hex, e.decimal2HexBE(i))
        }
    }

    decimal2HexLE(){
        console.log('decimal2HexLE()')
        var e  = new Encoding()
        for(var i = 0; i<=100000; i++){
            if(this.verbose){
                console.log('decimal2HexLE()1', hex, i)
            }
            var bytes = e.decimal2BytesLE(i)
            var hex = e.bytes2HexLE(bytes)
            assert.equal(hex, e.decimal2HexLE(i))
        }
        for(var i = Number.MAX_SAFE_INTEGER-100000; i<=Number.MAX_SAFE_INTEGER; i++){
            if(this.verbose){
                console.log('decimal2HexLE()1', hex, i)
            }
            var bytes = e.decimal2BytesLE(i)
            var hex = e.bytes2HexLE(bytes)
            assert.equal(hex, e.decimal2HexLE(i))
        }
    }

    bytes2DecimalBE(){

        console.log('bytes2DecimalBE()')
        var e=new Encoding()
        var bytes=''
        for(var i = 0; i<5; i++){
            bytes+=new Rand().bytesRangeBE(i, i)
        }
        var decimal = e.bytes2DecimalBE(bytes)
        var bytes = e.decimal2BytesBE(decimal)
        if(this.verbose){
            console.log('bytes2DecimalBE()1', bytes, e.bytes2DecimalBE(bytes))
        }
        assert.equal(
            decimal, 
            e.bytes2DecimalBE(bytes)
        )
        for(var i = 0; i<=100000; i++){
            var bytes = new Encoding().decimal2BytesBE(i)
            if(this.verbose){
                console.log('bytes2DecimalBE()2', bytes, e.bytes2DecimalBE(bytes))
            }
            assert.equal(
                new Encoding().decimal2BytesBE(i), 
                new Encoding().decimal2BytesBE(new Encoding().bytes2DecimalBE(bytes))
            )
        }
        for(var i = Number.MAX_SAFE_INTEGER-100000; i<=Number.MAX_SAFE_INTEGER; i++){
            var bytes = new Encoding().decimal2BytesBE(i)
            if(this.verbose){
                console.log('bytes2DecimalBE()2', bytes, e.bytes2DecimalBE(bytes))
            }
            assert.equal(
                new Encoding().decimal2BytesBE(i), 
                new Encoding().decimal2BytesBE(new Encoding().bytes2DecimalBE(bytes))
            )
        }
    }

    bytes2DecimalLE(){

        console.log('bytes2DecimalLE()')
        var e=new Encoding()
        var r=new Rand()

        var bytes=''
        for(var i = 0; i<5; i++){
            bytes+=r.bytesRangeLE(i, i)
        }
        var decimal = e.bytes2DecimalLE(bytes)
        var bytes = e.decimal2BytesLE(decimal)
        if(this.verbose){
            console.log('bytes2DecimalLE()1', bytes, e.bytes2DecimalLE(bytes))
        }
        assert.equal(
            decimal, 
            e.bytes2DecimalLE(bytes)
        )
        for(var i = 0; i<=100000; i++){
            var bytes = e.decimal2BytesLE(i)
            if(this.verbose){
                console.log('bytes2DecimalLE()2', bytes, e.bytes2DecimalLE(bytes))
            }
            assert.equal(
                e.decimal2BytesLE(i), 
                e.decimal2BytesLE(e.bytes2DecimalLE(bytes))
            )
        }
        for(var i = Number.MAX_SAFE_INTEGER-100000; i<=Number.MAX_SAFE_INTEGER; i++){
            var bytes = e.decimal2BytesLE(i)
            if(this.verbose){
                console.log('bytes2DecimalLE()2', bytes, e.bytes2DecimalLE(bytes))
            }
            assert.equal(
                e.decimal2BytesLE(i), 
                e.decimal2BytesLE(e.bytes2DecimalLE(bytes))
            )
        }
    }

    bytes2HexBE(){
        console.log('bytes2HexBE()')
        var e=new Encoding()
        var r=new Rand()

        for(var i = 0; i<=100000; i++){
            var bytes = e.decimal2BytesBE(i)
            var hex = e.bytes2HexBE(bytes)
            if(this.verbose){
                console.log('bytes2HexBE()2', bytes, hex)
            }
            assert.equal(bytes, e.hex2BytesBE(hex))
        }
        for(var i = Number.MAX_SAFE_INTEGER-100000; i<=Number.MAX_SAFE_INTEGER; i++){
            var bytes = e.decimal2BytesBE(i)
            var hex = e.bytes2HexBE(bytes)
            if(this.verbose){
                console.log('bytes2HexBE()2', bytes, hex)
            }
            assert.equal(bytes, e.hex2BytesBE(hex))
        }
    }

    bytes2HexLE(){
        console.log('bytes2HexLE()')
        var e=new Encoding()
        var r=new Rand()

        for(var i = 0; i<=100000; i++){
            var bytes = e.decimal2BytesLE(i)
            var hex = e.bytes2HexLE(bytes)
            if(this.verbose){
                console.log('bytes2HexLE()2', bytes, hex)
            }
            assert.equal(bytes, e.hex2BytesLE(hex))
        }
        for(var i = Number.MAX_SAFE_INTEGER-100000; i<=Number.MAX_SAFE_INTEGER; i++){
            var bytes = e.decimal2BytesLE(i)
            var hex = e.bytes2HexLE(bytes)
            if(this.verbose){
                console.log('bytes2HexLE()2', bytes, hex)
            }
            assert.equal(bytes, e.hex2BytesLE(hex))
        }
    }

    hex2BytesBE(){
        console.log('hex2BinBE()')
        var e=new Encoding()
        var r=new Rand()

        for(var i = 0; i<=100000; i++){
            var hex = r.hexRangeBE(i, i)
            var bin = e.hex2BytesBE(hex)
            if(this.verbose){ console.log('hex2BytesBE()2', bin, hex) }
            assert.equal(hex, e.bytes2HexBE(bin))
        }
        for(var i = Number.MAX_SAFE_INTEGER-100000; i<=Number.MAX_SAFE_INTEGER; i++){
            var hex = r.hexRangeBE(i, i)
            var bin = e.hex2BytesBE(hex)
            if(this.verbose){ console.log('hex2BytesBE()2', bin, hex) }
            assert.equal(hex, e.bytes2HexBE(bin))
        }
    }

    hex2BytesLE(){
        console.log('hex2BytesLE()')
        var e=new Encoding()
        var r=new Rand()
        for(var i = 0; i<=100000; i++){
            var hex = r.hexRangeLE(i, i)
            var bin = e.hex2BytesLE(hex)
            if(this.verbose){ console.log('hex2BytesLE()2', bin, hex) }
            assert.equal(hex, e.bytes2HexLE(bin))
        }
        for(var i = Number.MAX_SAFE_INTEGER-100000; i<=Number.MAX_SAFE_INTEGER; i++){
            var hex = r.hexRangeLE(i, i)
            var bin = e.hex2BytesLE(hex)
            if(this.verbose){ console.log('hex2BytesLE()2', bin, hex) }
            assert.equal(hex, e.bytes2HexLE(bin))
        }

    }

    hexRangeBE(){
        console.log('hexRangeBE()')
        var e=new Encoding()
        var r=new Rand()
        for(var i = 0; i<=100000; i++){
            var hex = r.hexRangeBE(i, i)
            if(this.verbose){ console.log('hexRangeBE()1', e.hex2BytesBE(hex), hex, i) }
            assert.equal(e.bytes2DecimalBE(e.hex2BytesBE(hex)), i)
        }
        for(var i = Number.MAX_SAFE_INTEGER-100000; i<=Number.MAX_SAFE_INTEGER; i++){
            var hex = r.hexRangeBE(i, i)
            if(this.verbose){ console.log('hexRangeBE()2', e.hex2BytesBE(hex), hex, i) }
            assert.equal(e.bytes2DecimalBE(e.hex2BytesBE(hex)), i)
        }
    }

    hexRangeLE(){
        console.log('hexRangeLE()')
        var e=new Encoding()
        var r=new Rand()

        for(var i = 0; i<=100000; i++){
            var hex = r.hexRangeLE(i, i)
            if(this.verbose){ console.log('hexRangeLE()1', e.hex2BytesLE(hex), hex, i) }
            assert.equal(e.bytes2DecimalLE(e.hex2BytesLE(hex)), i)
        }

        for(var i = Number.MAX_SAFE_INTEGER-100000; i<=Number.MAX_SAFE_INTEGER; i++){
            var hex = r.hexRangeLE(i, i)
            if(this.verbose){ console.log('hexRangeLE()2', e.hex2BytesLE(hex), hex, i) }
            assert.equal(e.bytes2DecimalLE(e.hex2BytesLE(hex)), i)
        }
    }

    hex2DecimalBE(){
        console.log('hex2DecimalBE()')
        var e=new Encoding()
        var r=new Rand()

        for(var i = 1; i<100000; i++){
            var bytes = e.decimal2BytesBE(i)
            var hex = e.bytes2HexBE(bytes)
            if(this.verbose){ console.log('hex2DecimalBE()1', i, e.hex2DecimalBE(hex)) }
            assert.equal(i, e.hex2DecimalBE(hex))
        }

        for(var i = Number.MAX_SAFE_INTEGER-100000; i<=Number.MAX_SAFE_INTEGER; i++){
            var bytes = e.decimal2BytesBE(i)
            var hex = e.bytes2HexBE(bytes)
            if(this.verbose){ console.log('hex2DecimalBE()1', i, e.hex2DecimalBE(hex)) }
            assert.equal(i, e.hex2DecimalBE(hex))
        }
    }

    hex2DecimalLE(){
        console.log('hex2DecimalLE()')
        var e=new Encoding()
        var r=new Rand()
        for(var i = 1; i<100000; i++){
            var bytes = e.decimal2BytesLE(i)
            var hex = e.bytes2HexLE(bytes)
            if(this.verbose){ console.log('hex2DecimalLE()1', i, e.hex2DecimalLE(hex)) }
            assert.equal(i, e.hex2DecimalLE(hex))
        }

        for(var i = Number.MAX_SAFE_INTEGER-100000; i<=Number.MAX_SAFE_INTEGER; i++){
            var bytes = e.decimal2BytesLE(i)
            var hex = e.bytes2HexLE(bytes)
            if(this.verbose){ console.log('hex2DecimalLE()1', i, e.hex2DecimalLE(hex)) }
            assert.equal(i, e.hex2DecimalLE(hex))
        }
    }

    hex2StringBE(){
        console.log('hex2StringBE()')
        var e=new Encoding()
        var r=new Rand()
        for(var j = 0; j<100; j++){
            var hexStr=''
            for(var i = 0; i<100; i++){
                hexStr+=''+r.hexRangeBE(i, i)
            }

            var string = e.hex2StringBE(hexStr)
            if(this.verbose){ console.log('hex2StringBE()1', string, hexStr) }

            assert.equal(hexStr, e.string2HexBE(string))
        }
    }

    hex2StringLE(){
        console.log('hex2StringLE()')
        var e=new Encoding()
        var r=new Rand()
        for(var j = 0; j<100; j++){
            var hexStr=''
            for(var i = 0; i<100; i++){
                hexStr+=''+r.hexRangeLE(i, i)
            }
            var string = e.hex2StringLE(hexStr)
            if(this.verbose){ console.log('hex2StringLE()1', string, hexStr) }

            assert.equal(hexStr, e.string2HexLE(string))
        }
    }

    bytes2StringBE(){
        console.log('bytes2StringBE()')
        var e=new Encoding()
        var r=new Rand()
        for(var j = 0; j<100; j++){
            var byteStr=''
            var str=''
            for(var i = 0; i<100; i++){
                var byte=r.bytesRangeBE(i, i)
                byteStr+=byte
                str+=e.byteBuffer2StringBE([byte])
            }
            var string = e.bytes2StringBE(byteStr)
            if(this.verbose){console.log('bytes2StringBE()1', string, byteStr)}
            assert.equal(str, string)
        }
    }

    bytes2StringLE(){
        console.log('bytes2StringLE()')
        var e=new Encoding()
        var r=new Rand()
        for(var j = 0; j<100; j++){
            var byteStr=''
            var str=''
            for(var i = 0; i<100; i++){
                var byte=r.bytesRangeLE(i, i)
                byteStr+=byte
                str+=e.byteBuffer2StringLE([byte])
            }
            var string = e.bytes2StringLE(byteStr)
            if(this.verbose){console.log('bytes2StringLE()1', string, byteStr)}
            assert.equal(str, string)
        }
    }

    byteBuffer2StringBE(){
        console.log('byteBuffer2StringBE()')
        var e=new Encoding()
        var r=new Rand()
        for(var i = 0; i<=60000; i++){
            var buffer = []
            buffer.push(r.bytesRangeBE(i, i))
            var string = e.byteBuffer2StringBE(buffer)

            if(this.verbose){console.log('byteBuffer2StringBE()1', string, buffer)}

            for(var j = 0; j<string.length; j++){
                assert.equal(e.hex2BytesBE(e.char2HexBE(string[j])), buffer[j]) 
            }
        }
    }

    byteBuffer2StringLE(){
        console.log('byteBuffer2StringLE()')
        var e=new Encoding()
        var r=new Rand()

        for(var i = 0; i<=60000; i++){
            var buffer = []
            buffer.push(r.bytesRangeLE(i, i))
            var string = e.byteBuffer2StringLE(buffer)

            if(this.verbose){console.log('byteBuffer2StringLE()1', string, buffer)}

            for(var j = 0; j<string.length; j++){
                assert.equal(e.hex2BytesLE(e.char2HexLE(string[j])), buffer[j]) 
            }
        }
    }

    hexBuffer2StringBE(){
        var e=new Encoding()
        var r=new Rand()
        console.log('hexBuffer2StringBE()')
        var buffer = []
        for(var i = 0; i<=60000; i++){
           buffer.push(new Rand().hexRangeBE(i, i))
        }
        var string = new Encoding().hexBuffer2StringBE(buffer)
        if(this.verbose){console.log('hexBuffer2StringBE()1', string, buffer)}

        for(var i = 0; i<string.length; i++){
            assert.equal(new Encoding().char2HexBE(string[i]), buffer[i]) 
        }
    }

    hexBuffer2StringLE(){
        var e=new Encoding()
        var r=new Rand()
        console.log('hexBuffer2StringLE()')
        var buffer = []
        for(var i = 0; i<=60000; i++){
           buffer.push(new Rand().hexRangeLE(i, i))
        }
        var string = new Encoding().hexBuffer2StringLE(buffer, this.codePointMap)
        if(this.verbose){console.log('hexBuffer2StringLE()1', string, buffer)}

        for(var i = 0; i<string.length; i++){
            assert.equal(new Encoding().char2HexLE(string[i], this.codeMap), buffer[i]) 
        }
    }

    string2HexBufferBE(){
        console.log('string2HexBufferBE()')
        var e=new Encoding()
        var r=new Rand()

        for(var i=0; i<10000; i++){
            var str = r.str(i, i)
            var buffer = e.string2HexBufferBE(str)
            if(this.verbose){console.log('string2HexBufferBE()1', str, buffer)}
            assert.equal(str, e.hexBuffer2StringBE(buffer))
        }
	}

    string2HexBufferLE(){
        console.log('string2HexBufferLE()')
        var e=new Encoding()
        var r=new Rand()

        for(var i=0; i<10000; i++){
            var str = r.str(i, i)
            var buffer = e.string2HexBufferLE(str)
            if(this.verbose){console.log('string2HexBufferLE()1', str, buffer)}
            assert.equal(str, e.hexBuffer2StringLE(buffer))
        }
	}

    string2BytesBufferBE(){
        console.log('string2BytesBufferBE()')
        var e=new Encoding()
        var r=new Rand()
        for(var i=0; i<10000; i++){
            var str = new Rand().str(i, i)
            if(this.verbose){console.log(str, e.string2BytesBufferBE(str))}
            assert.equal(str, e.byteBuffer2StringBE(e.string2BytesBufferBE(str)))
        }
	}

    string2BytesBufferLE(){
        console.log('string2BytesBufferLE()')
        var e=new Encoding()
        var r=new Rand()
        for(var i=0; i<10000; i++){
            var str = new Rand().str(i, i)
            if(this.verbose){console.log(str, e.string2BytesBufferLE(str))}
            assert.equal(str, e.byteBuffer2StringLE(e.string2BytesBufferLE(str)))
        }
	}

    string2BytesBE(){
        console.log('string2BytesBE()')
        var e=new Encoding()
        var r=new Rand()
        for(var i=0; i<10000; i++){
            var str = new Rand().str(i, i)
            if(this.verbose){console.log(str, e.string2BytesBE(str))}
            assert.equal(str, e.bytes2StringBE(e.string2BytesBE(str)))
        }
    }

    string2BytesLE(){
        console.log('string2BytesLE()')
        var e=new Encoding()
        var r=new Rand()
        for(var i=0; i<10000; i++){
            var str = new Rand().str(i, i)
            if(this.verbose){console.log(str, e.string2BytesLE(str))}
            assert.equal(str, e.bytes2StringLE(e.string2BytesLE(str)))
        }
    }

    bytes2HexBufferBE(){
        console.log('bytes2BytesBuffer()')
        var e=new Encoding()
        var bytes=''
        var hexBuff=[]
        for(var i = 0; i<10000; i++){
            var _bytes = new Rand().bytesRangeBE(0, 255)
            bytes+=_bytes
            hexBuff.push(e.bytes2HexBE(_bytes))
        }
        var buffer= e.bytes2HexBufferBE(bytes)
        for(var i = 0; i<buffer.length; i++){
            assert.equal(buffer[i], hexBuff[i])
        }
    }

    bytes2BytesBuffer(){
        console.log('bytes2BytesBuffer()')
        var e=new Encoding()
        var bytes=''
        var byteBuff=[]
        for(var i = 0; i<10000; i++){
            var _bytes = new Rand().bytesRangeBE(0, 255)
            bytes+=_bytes
            byteBuff.push(_bytes)
        }
        var buffer= e.bytes2BytesBuffer(bytes)
        for(var i = 0; i<buffer.length; i++){
            assert.equal(buffer[i], byteBuff[i])
        }
    }

    chainTestBE(){
        console.log('chainTestBE()')
        var e=new Encoding()
        var bytes=''
            for(var i = 0; i<10000; i++){
                bytes=new Rand().bytesRangeBE(i, i)
                assert.equal(
                    e.hexBuffer2StringBE(
                        e.string2HexBufferBE(
                            e.byteBuffer2StringBE(
                                e.bytes2BytesBuffer(
                                    e.bytesBuffer2Bytes(
                                        e.string2BytesBufferBE(
                                            e.bytes2StringBE(
                                                e.string2BytesBE(
                                                    e.hex2StringBE(
                                                        e.bytes2HexBE(
                                                            e.hex2BytesBE(
                                                                e.decimal2HexBE(
                                                                    e.hex2DecimalBE(
                                                                        e.bytes2HexBE(
                                                                            e.decimal2BytesBE(
                                                                                e.bytes2DecimalBE(
                                                                                    e.decimal2BytesBE(
                                                                                        e.bytes2DecimalBE(
                                                                                            bytes
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
                    e.hexBuffer2StringBE(e.bytes2HexBufferBE(bytes))
                ) 
        }
    }
    
    chainTestLE(){
        console.log('chainTestLE()')
        var e=new Encoding()
        var bytes=''
            for(var i = 0; i<10000; i++){
                bytes=new Rand().bytesRangeLE(i, i)
                assert.equal(
                    e.hexBuffer2StringLE(
                        e.string2HexBufferLE(
                            e.byteBuffer2StringLE(
                                e.bytes2BytesBuffer(
                                    e.bytesBuffer2Bytes(
                                        e.string2BytesBufferLE(
                                            e.bytes2StringLE(
                                                e.string2BytesLE(
                                                    e.hex2StringLE(
                                                        e.bytes2HexLE(
                                                            e.hex2BytesLE(
                                                                e.decimal2HexLE(
                                                                    e.hex2DecimalLE(
                                                                        e.bytes2HexLE(
                                                                            e.decimal2BytesLE(
                                                                                e.bytes2DecimalLE(
                                                                                    e.decimal2BytesLE(
                                                                                        e.bytes2DecimalLE(
                                                                                            bytes
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
                    e.hexBuffer2StringLE(e.bytes2HexBufferLE(bytes))
                ) 
        }
    }
} 