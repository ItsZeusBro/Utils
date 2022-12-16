export class Rand{
    constructor(){
        this.rand=this
    }

	range(min, max){
		if(min==max){return min}
		min = Math.ceil(min);	//these are needed to make max and min inclusive
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1) + min)
	}

    str(min, max){return this.rand._str(this.rand.range(min, max))}

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

	hexRangeBE(min, max){
		//take in decimal numbers min and max, and return a random hexidecimal number between them
		var decimal = new Rand().range(min, max)
		var bin = new Encoding().decimal2BytesBE(decimal)
		return new Encoding().formatHexBE(new Encoding().bytes2HexBE(bin))
	}
	hexRangeLE(min, max){
		//take in decimal numbers min and max, and return a random hexidecimal number between them
		var decimal = new Rand().range(min, max)
		var bin = new Encoding().decimal2BytesLE(decimal)
		return new Encoding().formatHexLE(new Encoding().bytes2HexLE(bin))
	}

	bytesRangeBE(min, max){
		//take in decimal numbers min and max, and return a random hexidecimal number between them
		var decimal = new Rand().range(min, max)
		return new Encoding().formatBytesBE(new Encoding().decimal2BytesBE(decimal))
	}
	bytesRangeLE(min, max){
		//take in decimal numbers min and max, and return a random hexidecimal number between them
		var decimal = new Rand().range(min, max)
		return new Encoding().formatBytesLE(new Encoding().decimal2BytesLE(decimal))
	}

	codeMapRange(min, max){
		var unicode={}
		for(var i = min; i<=max; i++){
			unicode[String.fromCharCode(i)]={
				'codePoint':i,
				'bin':new Encoding().decimal2BytesBE(i),
				'hexBE':new Encoding().decimal2HexBE(i)
			}
		}
		return unicode
    }

    codePointMapRange(min, max){
        var unicode={}
		for(var i = min; i<=max; i++){
			unicode[i]={
				'code':String.fromCharCode(i),
				'bin':new Encoding().formatBytesBE(new Encoding().decimal2BytesBE(i)),
				'hexBE':new Encoding().decimal2HexBE(i)
			}
		}
		return unicode
    }

    int(n){return this.rand.range(0,n)}
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
