import {Types} from "../Types/Types.js"
export class Encoding{

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

	byts2HexBuff_E(byts){
		var buff=[]
		var string=''
		for(var i=1; i<=byts.length; i++){
			string = string.concat(byts[i-1])
			if(i%8==0){
				buff.push(this.byts2Hex_E(string.slice()))
				string=''
			}
		}
		return buff
	}

	byts2HexBuff_e(byts){
		var buff=[]
		var string=''
		for(var i=1; i<=byts.length; i++){
			string = string.concat(byts[i-1])
			if(i%8==0){
				buff.push(this.byts2Hex_e(string.slice()))
				string=''
			}
		}
		return buff
	}

	hexBuff2Str_E(buff){
		//assume the buff is an array of big endian hex codes
		var string=''
		for(var i=0; i<buff.length; i++){
			string+=this.hex2Char_E(buff[i])
		}
		return string
	}

	hexBuff2Str_e(buff){
		//assume the buff is an array of big endian hexidec codes
		var string=''
		for(var i=0; i<buff.length; i++){
			string+=this.hex2Char_e(buff[i])
		}
		return string
	}

	hex2Char_E(hex){
		//a hex should be 2 hex chars to represent a byt, if its not, frmt it
		var dec = this.hex2Dec_E(this.frmtHex_E(hex))
		return String.fromCharCode(dec)
	}

	hex2Char_e(hex){
		var dec = this.hex2Dec_e(hex)
		return String.fromCharCode(dec)
	}

	char2Hex_E(char){
		var dec = char.charCodeAt(0)
		
		return this.dec2Hex_E(dec)
	}

	char2Hex_e(char){
		var dec = char.charCodeAt(0)
		return this.dec2Hex_e(dec)
	}

	dec2Hex_E(dec){
		var byts = this.dec2Byts_E(dec)
		return this.byts2Hex_E(byts)
	}

	dec2Byts_E(dec){
		var bin=''
		var dec2=dec
		if(dec==0){return '00000000'}
		while(dec!=0){
			if(new Types().isInt(dec/2)){
				bin = '0'.concat(bin)
			}else{
				bin = '1'.concat(bin)
			}
			dec=Math.floor(dec/2)
		}
		return this.frmtByts_E(bin)
	}

	byts2Dec_E(bin){
		bin=this.stripByts_E(bin)
		var dec=0
		var j = bin.length-1
		for(var i = 0; i<bin.length; i++){
			if(bin[i]=='1'){
				dec+=Math.pow(2, j)
			}
			j--
		}		

		return dec
	}

	byts2Dec_e(bin){
		bin =this.stripByts_e(bin)
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

	dec2Byts_e(dec){
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
		return this.frmtByts_e(bin.split('').reverse().join(''))
	}
	
	dec2Hex_e(dec){
		var byts = this.dec2Byts_e(dec)
		return this.byts2Hex_e(byts)
	}

	dec2Char(dec){
        return String.fromCodePoint(dec)
    }

	hex2Byts_E(hex){
		//https://stackoverflow.com/questions/45053624/convert-hex-to-binary-in-javascript
		hex = this.frmtHex_E(hex)
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
	}

	hex2Dec_E(hex){
		var byts = this.hex2Byts_E(hex)
		return this.byts2Dec_E(byts)
	}

	hex2Str_E(hex){
		if(hex.length%2!==0){
			throw Error('hex2StrB cannot use a hex string that is not byt divisible')
		}
		var hexBuff=[]
		for(var i = 2; i<=hex.length; i++){
			if(i%2==0){
				hexBuff.push(hex[i-2]+hex[i-1])
			}
		}
		return this.hexBuff2Str_E(hexBuff)
	}

	hex2Str_e(hex){
		if(hex.length%2!==0){
			throw Error('hex2StrL cannot use a hex string that is not byt divisible')
		}
		var hexBuff=[]
		for(var i = 2; i<=hex.length; i++){
			if(i%2==0){
				hexBuff.push(hex[i-2]+hex[i-1])
			}
		}
		return this.hexBuff2Str_e(hexBuff)
	}

	str2Hex_E(string){
		var buff = this.str2HexBuff_E(string)
		return buff.join('')
	}

	str2Hex_e(string){
		var buff = this.str2HexBuff_e(string)
		return buff.join('')
	}

	hex2Byts_e(hex){
		hex = this.frmtHex_e(hex)
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

	
	hex2Dec_e(hex){
		var byts = this.hex2Byts_e(hex)
		return this.byts2Dec_e(byts)
	}

	byts2Hex_E(bin){
		bin = this.frmtByts_E(bin)
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
	}

	byts2Hex_e(bin){
		bin = this.frmtByts_e(bin)
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

	byts2Str_E(byts){
		if(byts.length%8!==0){
			throw Error('hex2StrB cannot use a hex string that is not byt divisible')
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

		return this.bytBuff2Str_E(bytBuff)
	}

	byts2Str_e(byts){
		if(byts.length%8!==0){
			throw Error('hex2StrL cannot use a hex string that is not byt divisible')
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
		return this.bytBuff2Str_e(bytBuff)
	}

	str2Byts_E(string){
		var buff = this.str2BytsBuff_E(string)
		return buff.join('')
	}

	str2Byts_e(string){
		var buff = this.str2BytsBuff_e(string)
		return buff.join('')
	}

    bytBuff2Str_E(buff){
		var str=''
		for(var i = 0; i<buff.length; i++){
			var byt = buff[i]
			str+= this.dec2Char(this.byts2Dec_E(byt))
		}
		return str
    }

	bytBuff2Str_e(buff){
		var str=''
		for(var i = 0; i<buff.length; i++){
			var byt = buff[i]
			str+= this.dec2Char(this.byts2Dec_e(byt))
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

	str2BytsBuff_E(string){
		var buff=[]
		for(var i = 0; i<string.length; i++){
			buff.push(this.hex2Byts_E(this.char2Hex_E(string[i])))
		}
		return buff
	}

	str2BytsBuff_e(string){
		var buff=[]
		for(var i = 0; i<string.length; i++){
			buff.push(this.hex2Byts_e(this.char2Hex_e(string[i])))
		}
		return buff
	}	

	str2HexBuff_E(string){
		var buff=[]
		for(var i = 0; i<string.length; i++){
			buff.push(this.char2Hex_E(string[i]))
		}
		return buff
	}

	str2HexBuff_e(string){
		var buff=[]
		for(var i = 0; i<string.length; i++){
			buff.push(this.char2Hex_e(string[i]))
		}
		return buff
	}	

	stripByts_E(byts){
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
	}

	stripByts_e(byts){
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

	frmtByts_E(bin){
		bin = this.stripByts_E(bin)

		while(true){
			if(bin.length%8==0){
				break
			}else{
				bin='0'.concat(bin)
			}
		}
		return bin
	}
	
	frmtByts_e(bin){
		bin = this.stripByts_e(bin)
		while(true){
			if(bin.length%8==0){
				break
			}else{
				bin=bin.concat('0')
			}
		}
		return bin
	}

	frmtHex_E(hex){
		if(hex.length%2!=0){
			hex = '0'.concat(hex)
		}
		return hex
	}
	
	frmtHex_e(hex){
		if(hex.length%2!=0){
			hex = hex.concat('0')
		}
		return hex
	}
}