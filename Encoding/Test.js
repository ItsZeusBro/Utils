import {Encoding} from "./Encoding.js"
import {Rand} from "../Rand/Rand.js"
import assert from "node:assert"
export class EncodingTest{

    constructor(verbose){
        //WARNING, DOES NOT WORK FOR BIG NUM_ERS _ECAUSE SCIENTIFIC NOTATION KICKS IN AND JAVASCRIPT
        //DOES NOT REPRESENT ALL OF ITS PRECISION


        this.verbose=verbose


        // this.frmtByts()
        // this.frmtHex()

        // this.dec2Char()
        // this.dec2Byts()
        // this.dec2Hex()

        // this.byts2Dec()
        // this.byts2Hex()
        // this.byts2Str()
        // this.bytBuff2Str()

        // this.hex2Byts()
        // this.hexRng()
        // this.hex2Dec()
        // this.hex2Str()
        // this.hexBuff2Str()


        // this.str2HexBuff()
        // this.str2BytsBuff()        
        
        // this.str2Byts()
        
        // this.byts2BytsBuff()
        // this.byts2HexBuff()

        this.chainTest()

        // this.hexBuff2Str()



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
        var e  = new Encoding()
        var r = new Rand()
        var mode='E'
        do{
            console.log('frmtByts(', mode,')')
            for(var i = 0; i<10000; i++){
                if(this.verbose){
                    console.log(e.frmtByts(e.dec2Byts(i, mode), mode), i)
                }
                assert.equal(e.byts2Dec(e.frmtByts(e.dec2Byts(i, mode), mode), mode), i)
            }
    
            for(var i = Number.MAX_SAFE_INTEGER-10000; i<=Number.MAX_SAFE_INTEGER; i++){
                if(this.verbose){
                    console.log(e.frmtByts(e.dec2Byts(i, mode), mode), i)
                }
                assert.equal(e.byts2Dec(e.frmtByts(e.dec2Byts(i, mode), mode), mode), i)
            }

            mode = mode.charCodeAt(0)+32
            mode = String.fromCharCode(mode)

        }while(mode=='e'||mode=='E')
    }

    frmtHex(){
        var e  = new Encoding()
        var r = new Rand()
        var mode='E'
        do{
            console.log('frmtHex(', mode,')')
            for(var i = 0; i<=100000; i++){
                var hex = r.hexRng(i, i, mode)
                hex = e.frmtHex(hex, mode)
                assert.equal(hex.length%2==0, true)
                if(this.verbose){
                    console.log(hex, e.hex2Dec(hex, mode))
                }
                assert.equal(e.hex2Dec(hex, mode), i)
            }
            for(var i = Number.MAX_SAFE_INTEGER-10000; i<=Number.MAX_SAFE_INTEGER; i++){
                var hex = r.hexRng(i, i, mode)
                hex = e.frmtHex(hex, mode)
                assert.equal(hex.length%2==0, true)
                if(this.verbose){
                    console.log(hex, e.hex2Dec(hex, mode))
                }
                assert.equal(e.hex2Dec(hex, mode), i)
            }

            mode = mode.charCodeAt(0)+32
            mode = String.fromCharCode(mode)
        }while(mode=='e'||mode=='E')
        
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
        var e  = new Encoding()
        var r = new Rand()
        var mode='E'
        do{
            console.log('dec2Byts(', mode,')')
            for(var i = 0; i<=100000; i++){
                if(this.verbose){
                    console.log(e.dec2Byts(i, mode), i)
                }
                assert.equal(
                    e.byts2Dec(e.dec2Byts(i, mode), mode), 
                    i
                )
            }
            for(var i = Number.MAX_SAFE_INTEGER-100000; i<=Number.MAX_SAFE_INTEGER; i++){
                if(this.verbose){
                    console.log(e.dec2Byts(i, mode), i)
                }
                assert.equal(
                    e.byts2Dec(e.dec2Byts(i, mode),mode), 
                    i
                )
            }

            //e
            for(var i = 0; i<=100000; i++){
                if(this.verbose){
                    console.log(e.dec2Byts(i, mode), i)
                }
                assert.equal(
                    e.byts2Dec(e.dec2Byts(i, mode), mode), 
                    i
                )
            }
            for(var i = Number.MAX_SAFE_INTEGER-100000; i<=Number.MAX_SAFE_INTEGER; i++){
                if(this.verbose){
                    console.log(e.dec2Byts(i, mode), i)
                }
                assert.equal(
                    e.byts2Dec(e.dec2Byts(i, mode), mode), 
                    i
                )
            }
            mode = mode.charCodeAt(0)+32
            mode = String.fromCharCode(mode)
        }while(mode=='e'||mode=='E')
    }

    dec2Hex(){
        var e  = new Encoding()
        var r = new Rand()
        var mode='E'
        do{
            console.log('dec2Hex(', mode,')')
            for(var i = 0; i<=100000; i++){
                if(this.verbose){
                    console.log(hex, i)
                }
                var byts = e.dec2Byts(i, mode)
                var hex = e.byts2Hex(byts, mode)
                assert.equal(hex, e.dec2Hex(i, mode))
            }

            for(var i = Number.MAX_SAFE_INTEGER-100000; i<=Number.MAX_SAFE_INTEGER; i++){
                if(this.verbose){
                    console.log(hex, i)
                }
                var byts = e.dec2Byts(i, mode)
                var hex = e.byts2Hex(byts, mode)
                assert.equal(hex, e.dec2Hex(i, mode))
            }

            mode = mode.charCodeAt(0)+32
            mode = String.fromCharCode(mode)
        }while(mode=='e'||mode=='E')
    }

    byts2Dec(){
        var e  = new Encoding()
        var r = new Rand()
        //e
        var mode='E'
        do{
            console.log('byts2Dec(', mode,')')
            var byts=''
            for(var i = 0; i<5; i++){
                byts+=new Rand().bytsRng(i, i, mode)
            }
            var dec = e.byts2Dec(byts, mode)
            byts = e.dec2Byts(dec, mode)
            if(this.verbose){
                console.log(byts, e.byts2Dec(byts, mode))
            }
            assert.equal(
                dec, 
                e.byts2Dec(byts, mode)
            )
            for(var i = 0; i<=100000; i++){
                byts = new Encoding().dec2Byts(i, mode)
                if(this.verbose){
                    console.log(byts, e.byts2Dec(byts, mode))
                }
                assert.equal(
                    new Encoding().dec2Byts(i, mode), 
                    new Encoding().dec2Byts(new Encoding().byts2Dec(byts, mode),mode)
                )
            }
            for(var i = Number.MAX_SAFE_INTEGER-100000; i<=Number.MAX_SAFE_INTEGER; i++){
                byts = new Encoding().dec2Byts(i, mode)
                if(this.verbose){
                    console.log(byts, e.byts2Dec(byts, mode))
                }
                assert.equal(
                    new Encoding().dec2Byts(i, mode), 
                    new Encoding().dec2Byts(new Encoding().byts2Dec(byts, mode), mode)
                )
            }

        mode = mode.charCodeAt(0)+32
        mode = String.fromCharCode(mode)
        }while(mode=='e'||mode=='E')
    }


    byts2Hex(){
        var e=new Encoding()
        var r=new Rand()
        var mode='E'
        do{
            console.log('byts2Hex(', mode,')')

            for(var i = 0; i<=100000; i++){
                var byts = e.dec2Byts(i, mode)
                var hex = e.byts2Hex(byts, mode)
                if(this.verbose){
                    console.log(byts, hex)
                }
                assert.equal(byts, e.hex2Byts(hex, mode))
            }

            for(var i = Number.MAX_SAFE_INTEGER-100000; i<=Number.MAX_SAFE_INTEGER; i++){
                var byts = e.dec2Byts(i, mode)
                var hex = e.byts2Hex(byts, mode)
                if(this.verbose){
                    console.log(byts, hex)
                }
                assert.equal(byts, e.hex2Byts(hex, mode))
            }
            mode = mode.charCodeAt(0)+32
            mode = String.fromCharCode(mode)
        }while(mode=='e'||mode=='E')
    }


    byts2Str(){
        var e=new Encoding()
        var r=new Rand()
        var mode='E'
        do{
            console.log('byts2Str(', mode,')')
            for(var j = 0; j<100; j++){
                var bytStr=''
                var str=''
                for(var i = 0; i<100; i++){
                    var byt=r.bytsRng(i, i, mode)
                    bytStr+=byt
                    str+=e.bytBuff2Str([byt], mode)
                }
                var str = e.byts2Str(bytStr, mode)
                if(this.verbose){console.log(str, bytStr)}
                assert.equal(str, str)
            }
            mode = mode.charCodeAt(0)+32
            mode = String.fromCharCode(mode)

        }while(mode=='e'||mode=='E')
    }

   
    hex2Byts(){
        var e=new Encoding()
        var r=new Rand()
        var mode='E'
        do{
            console.log('hex2Byts(', mode,')')
            for(var i = 0; i<=100000; i++){
                var hex = r.hexRng(i, i, mode)
                var bin = e.hex2Byts(hex, mode)
                if(this.verbose){ console.log(bin, hex) }
                assert.equal(hex, e.byts2Hex(bin, mode))
            }
            for(var i = Number.MAX_SAFE_INTEGER-100000; i<=Number.MAX_SAFE_INTEGER; i++){
                var hex = r.hexRng(i, i, mode)
                var bin = e.hex2Byts(hex, mode)
                if(this.verbose){ console.log(bin, hex) }
                assert.equal(hex, e.byts2Hex(bin, mode))
            }
            mode = mode.charCodeAt(0)+32
            mode = String.fromCharCode(mode)
        }while(mode=='e'||mode=='E')  
    }



    hexRng(){
        var e=new Encoding()
        var r=new Rand()
        var mode='E'

        do{
            console.log('hexRng(', mode,')')

            for(var i = 0; i<=100000; i++){
                var hex = r.hexRng(i, i, mode)
                if(this.verbose){ console.log(e.hex2Byts(hex, mode), hex, i) }
                assert.equal(e.byts2Dec(e.hex2Byts(hex, mode), mode), i)
            }
            for(var i = Number.MAX_SAFE_INTEGER-100000; i<=Number.MAX_SAFE_INTEGER; i++){
                var hex = r.hexRng(i, i, mode)
                if(this.verbose){ console.log(e.hex2Byts(hex, mode), hex, i) }
                assert.equal(e.byts2Dec(e.hex2Byts(hex, mode), mode), i)
            }

            mode = mode.charCodeAt(0)+32
            mode = String.fromCharCode(mode)
        }while(mode=='e'||mode=='E')  
    }



    hex2Dec(){
        var e=new Encoding()
        var r=new Rand()
        var mode='E'

        do{
            console.log('hex2Dec(', mode,')')
            for(var i = 1; i<100000; i++){
                var byts = e.dec2Byts(i, mode)
                var hex = e.byts2Hex(byts, mode)
                if(this.verbose){ console.log(i, e.hex2Dec(hex, mode)) }
                assert.equal(i, e.hex2Dec(hex, mode))
            }
            for(var i = Number.MAX_SAFE_INTEGER-100000; i<=Number.MAX_SAFE_INTEGER; i++){
                var byts = e.dec2Byts(i, mode)
                var hex = e.byts2Hex(byts, mode)
                if(this.verbose){ console.log(i, e.hex2Dec(hex, mode)) }
                assert.equal(i, e.hex2Dec(hex, mode))
            }
            mode = mode.charCodeAt(0)+32
            mode = String.fromCharCode(mode)
        }while(mode=='e'||mode=='E')  
    }



    hex2Str(){
        var e=new Encoding()
        var r=new Rand()
        var mode='E'
        do{
            console.log('hex2Str(', mode,')')
            for(var j = 0; j<100; j++){
                var hexStr=''
                for(var i = 0; i<100; i++){
                    hexStr+=''+r.hexRng(i, i, mode)
                }
                var str = e.hex2Str(hexStr, mode)
                if(this.verbose){ console.log(str, hexStr) }
                assert.equal(hexStr, e.str2Hex(str, mode))
            }
            mode = mode.charCodeAt(0)+32
            mode = String.fromCharCode(mode)
        }while(mode=='e'||mode=='E')  
    }



    bytBuff2Str(){
        var e=new Encoding()
        var r=new Rand()
        var mode='E'
        do{
            console.log('bytBuff2Str(', mode,')')
            for(var i = 0; i<=60000; i++){
                var buffer = []
                buffer.push(r.bytsRng(i, i, mode))
                var str = e.bytBuff2Str(buffer, mode)
                if(this.verbose){console.log(str, buffer)}
                for(var j = 0; j<str.length; j++){
                    assert.equal(e.hex2Byts(e.char2Hex(str[j], mode), mode), buffer[j]) 
                }
            }
            mode = mode.charCodeAt(0)+32
            mode = String.fromCharCode(mode)
        }while(mode=='e'||mode=='E') 
    }



    hexBuff2Str(){
        var e=new Encoding()
        var r=new Rand()
        var mode='E'

        do{
            console.log('hexBuff2Str(', mode,')')
            var buffer = []
            for(var i = 0; i<=60000; i++){
                buffer.push(r.hexRng(i, i, mode))
            }
            var str = e.hexBuff2Str(buffer, mode)
            if(this.verbose){console.log(str, buffer)}
            for(var i = 0; i<str.length; i++){
                assert.equal(e.char2Hex(str[i], mode), buffer[i]) 
            }

            mode = mode.charCodeAt(0)+32
            mode = String.fromCharCode(mode)
        }while(mode=='e'||mode=='E') 
    
    }



    str2HexBuff(){
        var e=new Encoding()
        var r=new Rand()
        var mode='E'

        do{
            console.log('str2HexBuff(', mode,')')
            for(var i=0; i<10000; i++){
                var str = r.str(i, i, mode)
                var buffer = e.str2HexBuff(str, mode)
                if(this.verbose){console.log(str, buffer)}
                assert.equal(str, e.hexBuff2Str(buffer, mode))
            }
            mode = mode.charCodeAt(0)+32
            mode = String.fromCharCode(mode)
        }while(mode=='e'||mode=='E')

	}


    str2BytsBuff(){
        var e=new Encoding()
        var r=new Rand()
        var mode='E'
        do{
            console.log('str2BytsBuff(', mode,')')
            for(var i=0; i<10000; i++){
                var str = r.str(i, i, mode)
                if(this.verbose){console.log(str, e.str2BytsBuff(str, mode))}
                assert.equal(str, e.bytBuff2Str(e.str2BytsBuff(str, mode), mode))
            }
            mode = mode.charCodeAt(0)+32
            mode = String.fromCharCode(mode)
        }while(mode=='e'||mode=='E')
	}

    str2Byts(){
        var e=new Encoding()
        var r=new Rand()
        var mode='E'

        do{
            console.log('str2Byts(', mode,')')
            for(var i=0; i<10000; i++){
                var str = r.str(i, i, mode)
                if(this.verbose){console.log(str, e.str2Byts(str, mode))}
                assert.equal(str, e.byts2Str(e.str2Byts(str, mode), mode))
            }
            mode = mode.charCodeAt(0)+32
            mode = String.fromCharCode(mode)
        }while(mode=='e'||mode=='E')
    }

    byts2BytsBuff(){
        var e=new Encoding()
        var r=new Rand()
        var mode='E'

        do{
            console.log('byts2BytsBuff(', mode,')')
            var byts=''
            var bytBuff=[]
            for(var i = 0; i<10000; i++){
                var _byts = new Rand().bytsRng(0, 255, mode)
                byts+=_byts
                bytBuff.push(_byts)
            }
            var buffer= e.byts2BytsBuff(byts, mode)
            for(var i = 0; i<buffer.length; i++){
                assert.equal(buffer[i], bytBuff[i])
            }
            mode = mode.charCodeAt(0)+32
            mode = String.fromCharCode(mode)
        }while(mode=='e'||mode=='E')

    }


    byts2HexBuff(){
        var e=new Encoding()
        var r=new Rand()
        var mode='E'

        do{
            console.log('byts2HexBuff(', mode,')')

            var byts=''
            var hexBuff=[]

            for(var i = 0; i<10000; i++){
                var _byts = r.bytsRng(0, 255, mode)
                byts+=_byts
                hexBuff.push(e.byts2Hex(_byts, mode))
            }

            var buffer= e.byts2HexBuff(byts, mode)

            for(var i = 0; i<buffer.length; i++){
                assert.equal(buffer[i], hexBuff[i])
            }

            mode = mode.charCodeAt(0)+32
            mode = String.fromCharCode(mode)
        }while(mode=='e'||mode=='E')
    }



    chainTest(){

        var e=new Encoding()
        var r=new Rand()
        var mode='E'

        do{
            console.log('chainTest(', mode,')')

            var byts=''
            for(var i = 0; i<10000; i++)
            {
                byts=r.bytsRng(i, i, mode)

                assert.equal(
                    e.hex2Str(
                        e.byts2Hex(
                            e.hex2Byts(
                                e.dec2Hex(
                                    e.hex2Dec(
                                        e.byts2Hex(
                                            e.dec2Byts(
                                                e.byts2Dec(
                                                    byts,
                                                    mode
                                                ),mode
                                            ),mode
                                        ),mode
                                    ),mode
                                ),mode
                            ),mode
                        ), mode
                    ),
                    e.byts2Str(byts, mode)
                )
                

                // assert.equal(
                //     e.hexBuff2Str(
                //         e.str2HexBuff(
                //             e.bytBuff2Str(
                //                 e.byts2BytsBuff(
                //                     e.bytsBuff2Byts(
                //                         e.str2BytsBuff(
                //                             e.byts2Str(
                //                                 e.str2Byts(
                //                                     e.hex2Str(
                //                                         e.byts2Hex(

                //                                         ),mode
                //                                     ),mode
                //                                 ),mode
                //                             ),mode
                //                         ),mode
                //                     ),mode
                //                 ),mode
                //             ),mode
                //         ),mode
                //     )
                //     ,
                //     e.hexBuff2Str(e.byts2HexBuff(byts, mode))
                // ) 
            }

            mode = mode.charCodeAt(0)+32
            mode = String.fromCharCode(mode)
        }while(mode=='e'||mode=='E')
    }
} 

new EncodingTest()