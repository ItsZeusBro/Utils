import {Types} from "../Types/Types.js"
export class Encoding{

	//this formats a byte string by adding or reducing bytes according to a standard
	frmtByts(bin, endian, standard=32){
		if(endian=='E'){
			bin = this.stripByts(bin, endian, standard)	//this doesnt need a standard because its just stripping based on endianness
			while(bin.length!=standard){
				bin='0'.concat(bin)
			}
		}else if(endian=='e'){
			bin = this.stripByts(bin, endian, standard)
			while(bin.length!=standard){
				bin=bin.concat('0')
			}
		}
		return bin
	}

	frmtHex(hex, endian, standard){
		if(endian=='E'){
			hex = this.stripHex(hex, endian)	//this doesnt need a standard because its just stripping based on endianness
			while(hex.length!=standard/4){
				hex='0'.concat(hex)
			}
		}else if(endian=='e'){
			hex = this.stripHex(hex, endian)
			while(hex.length!=standard/4){
				hex=hex.concat('0')
			}
		}
		return hex
	}

	stripHex(hex, endian){
		if(endian=='E'){
			var hex2=hex
			for(var i=0; i<hex.length; i++){
				if(hex[i]!='0'){
					return hex2
				}else{
					hex2=hex2.slice(1)
				}
			}
			if(hex2==''){return '0'}
			return hex2
		}else{
			var hex2=hex
			for(var i=hex.length-1; i>=0; i--){
				if(hex[i]!='0'){
					return hex2
				}else{
					hex2=hex2.slice(0, -1)
				}
			}
			if(hex2==''){return '0'}
			return hex2
		}
	}

	stripByts(byts, endian){
		if(endian=='E'){
			var byts2=byts
			for(var i=0; i<byts.length; i++){
				if(byts[i]=='1'){
					return byts2
				}else{
					byts2=byts2.slice(1)
				}
			}
			if(byts2==''){return '0'}
			return byts2
		}else{
			var byts2=byts
			for(var i=byts.length-1; i>=0; i--){
				if(byts[i]=='1'){
					return byts2
				}else{
					byts2=byts2.slice(0, -1)
				}
			}
			if(byts2==''){return '0'}
			return byts2
		}
	}

	char2Hex(char, endian, standard){
		var dec = char.charCodeAt(0)
		return this.dec2Hex(dec, endian, standard)
	}

	hex2Char(hex, endian, standard){
		//a hex should be 2 hex chars to represent a byt, if its not, frmt it
		var dec = this.hex2Dec(hex, endian, standard)
		return String.fromCharCode(dec)
	}

	dec2Char(dec){
        return String.fromCodePoint(dec)
    }

    bytBuff2Str(buff, endian){
		var str=''
		for(var i = 0; i<buff.length; i++){
			var byt = buff[i]
			str+= this.dec2Char(this.byts2Dec(byt, endian))
		}
		return str
    }
	

	decBuff2Str(buff, endian, type){
		var str=''
		for(var i = 0; i<buff.length; i++){

			str+= this.dec2Char(buff[i])
		}
		return str
	}
	str2DecBuff(str){
		var buff=[]
		for(var i = 0; i<str.length; i++){
			buff.push(str[i].charCodeAt(0))
		}
		return buff
	}


	byts2BytsBuff(byts){
		var buff=[]
		var string=''
		for(var i=1; i<=byts.length; i++){
			string = string.concat(byts[i-1])
			if(i%8==0){
				buff.push(string.slice())
				string=''
			}
		}
		return buff
	}

	byts2HexBuff(byts, endian, type){
		var buff=[]
		var string=''
		for(var i=1; i<=byts.length; i++){
			string = string.concat(byts[i-1])
			if(i%8==0){
				buff.push(this.byts2Hex(string.slice(), endian, type))
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
		var byts=''
		for(var i = 0; i<buff.length; i++){
			byts+=buff[i]
		}
		return byts
	}

	//formatting doesnt matter here, except for floating point precision
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

	hexBuff2Str(buff, endian, type){
		var string=''
		for(var i=0; i<buff.length; i++){
			string+=this.hex2Char(buff[i], endian, type)
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

	hex2Dec(hex, endian, standard){
		var byts = this.hex2Byts(hex, endian, standard)
		return this.byts2Dec(byts, endian, standard)
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
				console.log(hexStr)
				str+=this.hex2Char(hexStr, endian, standard)
			}
		}
		return str
	}

	//this should have its own implementation one day to be more optimal
	dec2Hex(dec, endian, standard){
		var byts = this.dec2Byts(dec, endian, standard)
		return this.byts2Hex(byts, endian, standard)
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

	str2Hex(string, endian, standard){
		var buff = this.str2HexBuff(string, endian, standard)
		return buff.join('')
	}

	str2Byts(string, endian, type){
		var buff = this.str2BytsBuff(string, endian, type)
		return buff.join('')
	}

	str2BytsBuff(string, endian, type){
		var buff=[]
		for(var i = 0; i<string.length; i++){
			buff.push(this.hex2Byts(this.char2Hex(string[i], endian, type), endian, type))
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


}