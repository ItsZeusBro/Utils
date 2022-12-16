import {Types} from "../Types/Types.js"
export class Encoding{

	frmtByts(bin, endian, type){
		if(endian=='E'){
			bin = this.stripByts(bin, endian, type)
			while(true){
				if(bin.length%8==0){
					break
				}else{
					bin='0'.concat(bin)
				}
			}
			return bin
		}else{
			bin = this.stripByts(bin, endian, type)
			while(true){
				if(bin.length%8==0){
					break
				}else{
					bin=bin.concat('0')
				}
			}
			return bin
		}
	}

	frmtHex(hex, endian, type){
		if(endian=='E'){
			if(hex.length%2!=0){
				hex = '0'.concat(hex)
			}
			return hex
		}else{
			if(hex.length%2!=0){
				hex = hex.concat('0')
			}
			return hex
		}
	}

	char2Hex(char, endian, type){
		var dec = char.charCodeAt(0)
		return this.dec2Hex(dec, endian, type)
	}

	hex2Char(hex, endian, type){
		//a hex should be 2 hex chars to represent a byt, if its not, frmt it
		var dec = this.hex2Dec(this.frmtHex(hex, endian, type), endian, type)
		return String.fromCharCode(dec)
	}

	dec2Char(dec){
        return String.fromCodePoint(dec)
    }

    bytBuff2Str(buff, endian, type){
		var str=''
		for(var i = 0; i<buff.length; i++){
			var byt = buff[i]
			str+= this.dec2Char(this.byts2Dec(byt, endian, type))
		}
		return str
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

	byts2Hex(bin, endian, type){
		//WARNING! E and e use different switch boards!
		if(endian=='E'){
			bin = this.frmtByts(bin, endian, type)
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
			return out
		}else if(endian=='e'){
			bin = this.frmtByts(bin, endian, type)
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
			return out
		}
	}

	byts2Str(byts, endian, type){
		if(byts.length%8!==0){
			throw Error('byts2Str cannot use a byt string that is not byt divisible')
		}
		var bytBuff=[]
		for(var i = 8; i<=byts.length; i++){
			var bytsStr=''
			if(i%8==0){
				for(var j = i-8; j<i; j++){
					bytsStr+=byts[j]
				}
				bytBuff.push(bytsStr)
			}
		}
		return this.bytBuff2Str(bytBuff, endian, type)
	}

	bytsBuff2Byts(buff){
		var byts=''
		for(var i = 0; i<buff.length; i++){
			byts+=buff[i]
		}
		return byts
	}

	byts2Dec(bin, endian, type){
		if(endian=='E'){
			bin=this.stripByts(bin, endian, type)
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
			bin =this.stripByts(bin, endian, type)
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

	hex2Byts(hex, endian, type){
		//BE CAREFUL!!!! BIG E AND SMALL e ARE DIFFERENT SWITCH CASES!
		if(endian=='E'){
			//https://stackoverflow.com/questions/45053624/convert-hex-to-binary-in-javascript
			hex = this.frmtHex(hex, endian, type)
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
			return out
		}else{
			hex = this.frmtHex(hex, endian, type)
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
			return out
		}
	}

	hex2Dec(hex, endian, type){
		var byts = this.hex2Byts(hex, endian, type)
		return this.byts2Dec(byts, endian, type)
	}

	hex2Str(hex, endian, type){
		if(hex.length%2!==0){
			throw Error('hex2Str cannot use a hex string that is not byt divisible')
		}
		var hexBuff=[]
		for(var i = 2; i<=hex.length; i++){
			if(i%2==0){
				hexBuff.push(hex[i-2]+hex[i-1])
			}
		}
		return this.hexBuff2Str(hexBuff, endian, type)
	}

	dec2Hex(dec, endian, type){
		var byts = this.dec2Byts(dec, endian, type)
		return this.byts2Hex(byts, endian, type)
	}

	dec2Byts(dec, endian, type){
		var bin=''
		if(dec==0){return '00000000'}
		while(dec!=0){
			if(new Types().isInt(dec/2)){
				bin = '0'.concat(bin)
			}else{
				bin = '1'.concat(bin)
			}
			dec=Math.floor(dec/2)
		}
		if(endian=='E'){
			return this.frmtByts(bin, endian, type)
		}else if(endian=='e'){
			return this.frmtByts(bin.split('').reverse().join(''), endian, type)
		}
	}

	str2Hex(string, endian, type){
		var buff = this.str2HexBuff(string, endian, type)
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
	
	str2HexBuff(string, endian, type){
		var buff=[]
		for(var i = 0; i<string.length; i++){
			buff.push(this.char2Hex(string[i], endian, type))
		}
		return buff
	}

	stripByts(byts, endian, type){
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
}