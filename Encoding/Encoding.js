import {Types} from "../Types/Types.js"
export class Encoding{
	constructor(){
		this.token=0;
	}

	//if we have a 32 bit standard and a 8 bit binary number
	//we can just add 0's until we get to 32 bits

	//if we have 8 bit standard and a 32 bit binary number, we remove them

	frmtByts(bin, endian, standard){
		if(endian=='E'){
			if(bin.length>standard){
				//strip to standard
				bin = this.stripByts(bin, endian, standard)
			}else if(bin.length<standard){
				while(bin.length!=standard){
					bin='0'.concat(bin)
				}
			}			
		}else if(endian=='e'){
			if(bin.length>standard){
				//strip to standard
				bin = this.stripByts(bin, endian, standard)
			}else if(bin.length<standard){
				while(bin.length!=standard){
					bin=bin.concat('0')
				}
			}
		}
		return bin
	}

	stripByts(byts, endian, standard){
		if(byts==''){return '0'}
		if(endian=='E'){
			//strip to standard
			while(byts.length<=standard){
				byts=byts.slice(1)
			}
		}else if (endian=='e'){
				while(byts.length<=standard){
					byts=byts.slice(0, -1)
				}
		}else{
			throw Error('endianness must be specified in stripByts()')
		}
		return byts
	}

	frmtHex(hex, endian, standard){
		if(endian=='E'){
			if(hex.length>standard/4){
				//strip to standard
				hex = this.stripHex(hex, endian, standard)
			}else if(hex.length<standard/4){
				while(hex.length!=standard/4){
					hex='0'.concat(hex)
				}
			}			
		}else if(endian=='e'){
			if(hex.length>standard/4){
				//strip to standard
				hex = this.stripHex(hex, endian, standard)
			}else if(hex.length<standard/4){
				while(hex.length!=standard/4){
					hex=hex.concat('0')
				}
			}
		}
		return hex
	}

	stripHex(hex, endian, standard){
		if(hex==''){return '0'}
		if(endian!='E'&&endian!='e'){
			throw Error('endianness must be specified in stripHex()')
		}
		if(endian=='E'&&hex.length>standard/4){
			//strip to standard
			while(hex.length!=standard/4){
				hex=hex.slice(1)
			}
		}else if (endian=='e'&&hex.length>standard/4){
			while(hex.length!=standard/4){
				hex=hex.slice(0, -1)
			}
		}
		return hex
	}


	hex2Char(hex, endian, standard){
		//a hex should be 2 hex chars to represent a byt, if its not, frmt it
		var dec = this.hex2Dec(hex, endian, standard)
		return String.fromCharCode(dec)
	}

	hexBuff2Str(buff, endian, standard){
		var string=''
		for(var i=0; i<buff.length; i++){
			string+=this.hex2Char(buff[i], endian, standard)
		}
		return string
	}

	hex2Byts(hex, endian, standard){
		//BE CAREFUL!!!! BIG E AND SMALL e ARE DIFFERENT SWITCH CASES!
		if(endian=='E'){
			//https://stackoverflow.com/questions/45053624/convert-hex-to-binary-in-javascript
			var out = "";
			for(var c of hex) {
				switch(c) {
					case '0': out += "0000"; break;
					case '1': out += "0001"; break;
					case '2': out += "0010"; break;
					case '3': out += "0011"; break;
					case '4': out += "0100"; break;
					case '5': out += "0101"; break;
					case '6': out += "0110"; break;
					case '7': out += "0111"; break;
					case '8': out += "1000"; break;
					case '9': out += "1001"; break;
					case 'a': out += "1010"; break;
					case 'b': out += "1011"; break;
					case 'c': out += "1100"; break;
					case 'd': out += "1101"; break;
					case 'e': out += "1110"; break;
					case 'f': out += "1111"; break;
					default: return "";
				}
			}

			return this.frmtByts(out, endian, standard)
		}else{
			var out = "";
			for(var c of hex) {
				switch(c) {
					case '0': out += "0000"; break;
					case '1': out += "1000"; break;
					case '2': out += "0100"; break;
					case '3': out += "1100"; break;
					case '4': out += "0010"; break;
					case '5': out += "1010"; break;
					case '6': out += "0110"; break;
					case '7': out += "1110"; break;
					case '8': out += "0001"; break;
					case '9': out += "1001"; break;
					case 'a': out += "0101"; break;
					case 'b': out += "1101"; break;
					case 'c': out += "0011"; break;
					case 'd': out += "1011"; break;
					case 'e': out += "0111"; break;
					case 'f': out += "1111"; break;
					default: return "";
				}
			}
			return this.frmtByts(out, endian, standard)
		}
	}

	//This needs a primitive function
	hex2Dec(hex, endian, standard){
		if(endian=='E'){
			hex=this.stripHex(hex, endian, standard)
			var dec=0
			var j = hex.length-1
			for(var i = 0; i<hex.length; i++){
				if(hex[i]!='0'){
					switch(hex[i]) {
						case "1": dec += 1*Math.pow(16, j); break;
						case "2": dec += 2*Math.pow(16, j); break;
						case "3": dec += 3*Math.pow(16, j); break;
						case "4": dec += 4*Math.pow(16, j); break;
						case "5": dec += 5*Math.pow(16, j); break;
						case "6": dec += 6*Math.pow(16, j); break;
						case "7": dec += 7*Math.pow(16, j); break;
						case "8": dec += 8*Math.pow(16, j); break;
						case "9": dec += 9*Math.pow(16, j); break;
						case "a": dec += 10*Math.pow(16, j); break;
						case "b": dec += 11*Math.pow(16, j); break;
						case "c": dec += 12*Math.pow(16, j); break;
						case "d": dec += 13*Math.pow(16, j); break;
						case "e": dec += 14*Math.pow(16, j); break;
						case "f": dec += 15*Math.pow(16, j); break;
						default: return "";
					}				
				}
				j--
			}		
		}else if(endian=='e'){
			hex=this.stripHex(hex, endian, standard)
			var i = 0
			var dec=0
			while(i<hex.length){
				if(hex[i]!='0'){
					switch(hex[i]) {
						case "1": dec += 1*Math.pow(16, i); break;
						case "2": dec += 2*Math.pow(16, i); break;
						case "3": dec += 3*Math.pow(16, i); break;
						case "4": dec += 4*Math.pow(16, i); break;
						case "5": dec += 5*Math.pow(16, i); break;
						case "6": dec += 6*Math.pow(16, i); break;
						case "7": dec += 7*Math.pow(16, i); break;
						case "8": dec += 8*Math.pow(16, i); break;
						case "9": dec += 9*Math.pow(16, i); break;
						case "a": dec += 10*Math.pow(16, i); break;
						case "b": dec += 11*Math.pow(16, i); break;
						case "c": dec += 12*Math.pow(16, i); break;
						case "d": dec += 13*Math.pow(16, i); break;
						case "e": dec += 14*Math.pow(16, i); break;
						case "f": dec += 15*Math.pow(16, i); break;
						default: return "";
					}				
				}
				i++
			}
		}
		return dec
	}

	hex2Str(hex, endian, standard){
		if(hex.length%(standard/4)!==0){
			throw Error('hex2Str cannot use a byt string that is not standard divisible')
		}
		var str=''
		for(var i = (standard/4); i<=hex.length; i++){
			var hexStr=''
			if(i%(standard/4)==0){
				for(var j = i-(standard/4); j<i; j++){
					hexStr+=hex[j]
				}
				str+=this.hex2Char(hexStr, endian, standard)
			}
		}
		return str
	}


	byts2BytsBuff(byts, mode, standard){
		byts = byts.slice()
		var buff=[]
		var string=''
		for(var i=1; i<=byts.length; i++){
			string = string.concat(byts[i-1])
			if(i%standard==0){
				buff.push(string.slice())
				string=''
			}
		}
		return buff
	}

	byts2HexBuff(byts, endian, standard){
		var buff=[]
		var string=''
		for(var i=1; i<=byts.length; i++){
			string = string.concat(byts[i-1])
			if(i%standard==0){
				buff.push(this.byts2Hex(string.slice(), endian, standard))
				string=''
			}
		}
		return buff
	}

	byts2Hex(bin, endian, standard){
		//WARNING! E and e use different switch boards!
		if(endian=='E'){
			var out = "";
			var accumulator=''
			for(var c = 1; c<=bin.length; c++) {
				accumulator+=bin[c-1]
				if(c%4==0){
					switch(accumulator) {
						case "0000": out += '0'; break;
						case "0001": out += '1'; break;
						case "0010": out += '2'; break;
						case "0011": out += '3'; break;
						case "0100": out += '4'; break;
						case "0101": out += '5'; break;
						case "0110": out += '6'; break;
						case "0111": out += '7'; break;
						case "1000": out += '8'; break;
						case "1001": out += '9'; break;
						case "1010": out += 'a'; break;
						case "1011": out += 'b'; break;
						case "1100": out += 'c'; break;
						case "1101": out += 'd'; break;
						case "1110": out += 'e'; break;
						case "1111": out += 'f'; break;
						default: return "";
					}
					accumulator=""
				}
			}
			return this.frmtHex(out, endian, standard)
		}else if(endian=='e'){
			var out = "";
			var accumulator=''
			for(var c = 1; c<=bin.length; c++) {
				accumulator+=bin[c-1]
				if(c%4==0){
					switch(accumulator) {
						case "0000": out += '0'; break;
						case "1000": out += '1'; break;
						case "0100": out += '2'; break;
						case "1100": out += '3'; break;
						case "0010": out += '4'; break;
						case "1010": out += '5'; break;
						case "0110": out += '6'; break;
						case "1110": out += '7'; break;
						case "0001": out += '8'; break;
						case "1001": out += '9'; break;
						case "0101": out += 'a'; break;
						case "1101": out += 'b'; break;
						case "0011": out += 'c'; break;
						case "1011": out += 'd'; break;
						case "0111": out += 'e'; break;
						case "1111": out += 'f'; break;
						default: return "";
					}
					accumulator=""
				}
			}
			return this.frmtHex(out, endian, standard)
		}
	}

	byts2Str(byts, endian, standard){
		if(byts.length%standard!==0){
			throw Error('byts2Str cannot use a byt string that is not standard divisible')
		}
		var str=''
		for(var i = standard; i<=byts.length; i++){
			var bytsStr=''
			if(i%standard==0){
				for(var j = i-standard; j<i; j++){
					bytsStr+=byts[j]
				}
				str+=this.dec2Char(this.byts2Dec(bytsStr, endian))
			}
		}
		return str
	}

	bytsBuff2Byts(buff){
		buff = buff.slice()
		var byts=''
		for(var i = 0; i<buff.length; i++){
			byts=byts.concat(buff[i])
		}
		return byts
	}

	byts2Dec(bin, endian){
		if(endian=='E'){
			bin=this.stripByts(bin, endian)
			var dec=0
			var j = bin.length-1
			for(var i = 0; i<bin.length; i++){
				if(bin[i]=='1'){
					dec+=Math.pow(2, j)
				}
				j--
			}		
			return dec
		}else if(endian=='e'){
			bin =this.stripByts(bin, endian)
			var i = 0
			var dec=0
			while(i<bin.length){
				if(bin[i]=='1'){
					dec+=Math.pow(2, i)
				}
				i++
			}
			return dec
		}
	}

	bytsBuff2Str(buff, endian){
		var str=''
		for(var i = 0; i<buff.length; i++){
			var byt = buff[i]
			str+= this.dec2Char(this.byts2Dec(byt, endian))
		}
		return str
    }

	bytsBuff2Hex(buff, endian, standard){
		var hexStr=""
		for(var i =0; i<buff.length; i++){
			hexStr+=this.byts2Hex(buff[i], endian, standard)
		}
		return hexStr
	}

	//this can be optimized by 
	str2Hex(string, endian, standard){
		var hexStr=''
		for(var i=0; i<string.length; i++){
			hexStr+=this.char2Hex(string[i], endian, standard)
		}
		return hexStr
	}

	str2Byts(string, endian, standard){
		var bytStr=''
		for(var i=0; i<string.length; i++){
			bytStr+=this.char2Byt(string[i], endian, standard)
		}
		return bytStr
	}

	str2BytsBuff(string, endian, standard){
		var buff=[]
		for(var i = 0; i<string.length; i++){
			buff.push(this.char2Byt(string[i], endian, standard))
		}
		return buff
	}
	
	str2HexBuff(string, endian, standard){
		var buff=[]
		for(var i = 0; i<string.length; i++){
			buff.push(this.char2Hex(string[i], endian, standard))
		}
		return buff
	}

	str2DecBuff(str){
		var buff=[]
		for(var i = 0; i<str.length; i++){
			buff.push(str[i].charCodeAt(0))
		}
		return buff
	}

	next(codeStr, type, standard){
		var str=''
		if(this.token==undefined){
			this.token=0
			return undefined
		}else{
			if(type=='hex'){
				str = codeStr.slice(this.token, this.token+(standard/4))
				this.token+=(standard/4)
				if(this.token>=codeStr.length){this.token=undefined}

			}else if(type=='bin'){
				str = codeStr.slice(this.token, this.token+standard)
				this.token+=standard
				if(this.token>=codeStr.length){this.token=undefined}
			}
		}
		return str
	}

	_dec2Hex(dec){
		switch(dec){
			case 0: return '0';
			case 1: return '1';
			case 2: return '2';
			case 3: return '3';
			case 4: return '4';
			case 5: return '5';
			case 6: return '6';
			case 7: return '7';
			case 8: return '8';
			case 9: return '9';
			case 10: return 'a';
			case 11: return 'b';
			case 12: return 'c';
			case 13: return 'd';
			case 14: return 'e';
			case 15: return 'f';
			default: return
		}
	}
	dec2Hex(dec, endian, standard){
		var hex=""
		if(endian=='E'){
			while(dec!=0){
				var remainder = (dec/16)-Math.floor((dec/16))
				dec=parseInt(dec/16)
				hex+=this._dec2Hex(16*remainder)
			}				
				
		}		
		else if(endian=='e'){
			while(dec!=0){
				var remainder = (dec/16)-Math.floor((dec/16))
				dec=parseInt(dec/16)
				hex=this._dec2Hex(16*remainder)+hex
			}	
		}
		return this.frmtHex(hex, endian, standard)
	}

	dec2Byts(dec, endian, standard){
		var bin=''
		while(dec!=0){
			if(new Types().isInt(dec/2)){
				bin = '0'.concat(bin)
			}else{
				bin = '1'.concat(bin)
			}
			dec=Math.floor(dec/2)
		}
		if(endian=='E'){
			return this.frmtByts(bin, endian, standard)
		}else if(endian=='e'){
			return this.frmtByts(bin.split('').reverse().join(''), endian, standard)
		}
	}

	decBuff2Str(buff){
		var str=''
		for(var i = 0; i<buff.length; i++){

			str+= this.dec2Char(buff[i])
		}
		return str
	}

	dec2Char(dec){
        return String.fromCodePoint(dec)
    }
	
	char2Hex(char, endian, standard){
		var dec = char.charCodeAt(0)
		return this.dec2Hex(dec, endian, standard)
	}
	char2Byt(char, endian, standard){
		var dec = char.charCodeAt(0)
		return this.dec2Byts(dec, endian, standard)
	}
}