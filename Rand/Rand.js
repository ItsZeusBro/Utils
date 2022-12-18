import { assert } from "console";
import { Encoding } from "../Encoding/Encoding.js";
export class Rand{
    constructor(){
        this.rand=this
    }

	rng(min, max){
		if(min==max){return min}
		min = Math.ceil(min);	//these are needed to make max and min inclusive
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1) + min)
	}

    str(min, max){
		var n = this.rng(min, max)
		return this.rand._str(n)
	}

    _str(len, chars=this.latin().join('')){
        //programiz.com
        var str='';
        for (var i = 0; i<len; i++){str+=chars.charAt(Math.floor(Math.random()*chars.length))}
        return str;
    }

	latin(){
		var latin =[] 
		for(var i = 32; i<=126; i++){
			latin.push(String.fromCharCode(i+''))
		}
		return latin
	}

	hexRng(min, max, endian, standard){
		//take in dec numbers min and max, and return a random hexidec number between them
		var dec = new Rand().rng(min, max)
		var hex = new Encoding().dec2Hex(dec, endian, standard)
		return new Encoding().frmtHex(hex, endian, standard)
	}

	bytsRng(min, max, endian, standard){
		var dec = new Rand().rng(min, max)
		var byts=new Encoding().dec2Byts(dec, endian, standard)
		return new Encoding().frmtByts(byts, endian, standard)
	}

	bytsBuff(min, max, size, endian, standard){
		var buff=[]
		for(var i=0; i<size; i++){
			buff.push(this.bytsRng(min, max, endian, standard))
		}
		return buff
	}

	codeMapRng(min, max, endian, type){
		var unicode={}
		for(var i = min; i<=max; i++){
			unicode[String.fromCharCode(i)]={
				'codePoint':i,
				'bin':new Encoding().dec2Byts(i, endian, type),
				'hex':new Encoding().dec2Hex(i, endian, type)
			}
		}
		return unicode
    }

    codePointMapRng(min, max, endian, type){
        var unicode={}
		for(var i = min; i<=max; i++){
			unicode[i]={
				'code':String.fromCharCode(i),
				'bin':new Encoding().frmtByts(new Encoding().dec2Byts(i, endian, type), endian, type),
				'hex':new Encoding().dec2Hex(i, endian, type)
			}
		}
		return unicode
    }

    int(n){return this.rand.rng(0,n)}
    arr(n){var arr=[]; for(var i=0;i<n;i++){arr.push(this.rand.thing())}; return arr}
    thing(){
        return[
            this.rand.intArr, this.rand.str, this.rand.int, this.rand.enc, this.rand.encArr, this.rand.strArr,
            this.rand.obj, this.rand.objArr
        ].sample()()
    }
    intArr(n=this.rand.int()){var arr=[]; for(var i=0;i<n;i++){arr.push(this.rand.int())}; return arr}

    strArr(n=this.rand.int()){var arr=[]; for(var i=0;i<n;i++){arr.push(this.rand.str())}; return arr}
    obj(n=this.rand.int()){if(n){return {[this.rand.str()]:this.rand.obj(n-1)}}else{return {}}};
    objArr(n=this.rand.int()){var arr=[]; for(var i=0;i<n;i++){arr.push(this.rand.obj())}; return arr}
    selection(bag){
        return bag[Math.floor(Math.random() * bag.length)];
    }


    mod10(){
        return Math.floor(Math.random()*(100-0+1)+0)%2
    }

	arabic(){
		var arabic =[] 
		for(var i = 1536; i<=1791; i++){
			arabic.push(String.fromCharCode(i+''))
		}
		return arabic
	
	}

	cjk(){
		var cjk =[] 
		for(var i = 19968; i<=20168; i++){
			'\u{1F603}'
			cjk.push(String.fromCharCode(i+''))
		}
		return cjk
	}
	algebra(){

	}
	calculus(){

	}
	physics(){

	}
}
