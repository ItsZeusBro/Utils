export class Encoding{

	bytes2BytesBuffer(bytes){
		var buffer=[]
		var string=''
		for(var i=1; i<=bytes.length; i++){
			string = string.concat(bytes[i-1])
			if(i%8==0){
				buffer.push(string.slice())
				string=''
			}
		}
		return buffer
	}

	bytes2HexBufferBE(bytes){
		var buffer=[]
		var string=''
		for(var i=1; i<=bytes.length; i++){
			string = string.concat(bytes[i-1])
			if(i%8==0){
				buffer.push(this.bytes2HexBE(string.slice()))
				string=''
			}
		}
		return buffer
	}

	bytes2HexBufferLE(bytes){
		var buffer=[]
		var string=''
		for(var i=1; i<=bytes.length; i++){
			string = string.concat(bytes[i-1])
			if(i%8==0){
				buffer.push(this.bytes2HexLE(string.slice()))
				string=''
			}
		}
		return buffer
	}

	hexBuffer2StringBE(buffer){
		//assume the buffer is an array of big endian hexidecimal codes
		var string=''
		for(var i=0; i<buffer.length; i++){
			string+=this.hex2CharBE(buffer[i])
		}
		return string
	}

	hexBuffer2StringLE(buffer){
		//assume the buffer is an array of big endian hexidecimal codes
		var string=''
		for(var i=0; i<buffer.length; i++){
			string+=this.hex2CharLE(buffer[i])
		}
		return string
	}

	hex2CharBE(hex){
		//a hex should be 2 hex chars to represent a byte, if its not, format it

		var decimal = this.hex2DecimalBE(this.formatHexBE(hex))
		return String.fromCharCode(decimal)
	}

	hex2CharLE(hex){
		var decimal = this.hex2DecimalLE(hex)
		return String.fromCharCode(decimal)
	}

	char2HexBE(char){
		var decimal = char.charCodeAt(0)
		
		return this.decimal2HexBE(decimal)
	}

	char2HexLE(char){
		var decimal = char.charCodeAt(0)
		return this.decimal2HexLE(decimal)
	}

	decimal2HexBE(decimal){
		var bytes = this.decimal2BytesBE(decimal)
		return this.bytes2HexBE(bytes)
	}

	decimal2BytesBE(decimal){
		var bin=''
		var decimal2=decimal
		if(decimal==0){return '00000000'}
		while(decimal!=0){
			if(this.isInt(decimal/2)){
				bin = '0'.concat(bin)
			}else{
				bin = '1'.concat(bin)
			}
			decimal=Math.floor(decimal/2)
		}
		return this.formatBytesBE(bin)
	}

	bytes2DecimalBE(bin){
		bin=this.stripBytesBE(bin)
		var decimal=0
		var j = bin.length-1
		for(var i = 0; i<bin.length; i++){
			if(bin[i]=='1'){
				decimal+=Math.pow(2, j)
			}
			j--
		}		

		return decimal
	}

	bytes2DecimalLE(bin){
		bin =this.stripBytesLE(bin)
		var i = 0
		var decimal=0
		while(i<bin.length){
			if(bin[i]=='1'){
				decimal+=Math.pow(2, i)
			}
			i++
		}
		return decimal
	}

	decimal2BytesLE(decimal){
		var bin=''
		if(decimal==0){return '00000000'}
		while(decimal!=0){
			if(this.isInt(decimal/2)){
				bin = '0'.concat(bin)
			}else{
				bin = '1'.concat(bin)
			}
			decimal=Math.floor(decimal/2)
		}
		return this.formatBytesLE(bin.split('').reverse().join(''))
	}
	
	decimal2HexLE(decimal){
		var bytes = this.decimal2BytesLE(decimal)
		return this.bytes2HexLE(bytes)
	}

	decimal2Char(decimal){
        return String.fromCodePoint(decimal)
    }

	hex2BytesBE(hex){
		//https://stackoverflow.com/questions/45053624/convert-hex-to-binary-in-javascript
		hex = this.formatHexBE(hex)
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

	hex2DecimalBE(hex){
		var bytes = this.hex2BytesBE(hex)
		return this.bytes2DecimalBE(bytes)
	}

	hex2StringBE(hex){
		if(hex.length%2!==0){
			throw Error('hex2StringBE cannot use a hex string that is not byte divisible')
		}
		var hexBuffer=[]
		for(var i = 2; i<=hex.length; i++){
			if(i%2==0){
				hexBuffer.push(hex[i-2]+hex[i-1])
			}
		}
		return this.hexBuffer2StringBE(hexBuffer)
	}

	hex2StringLE(hex){
		if(hex.length%2!==0){
			throw Error('hex2StringLE cannot use a hex string that is not byte divisible')
		}
		var hexBuffer=[]
		for(var i = 2; i<=hex.length; i++){
			if(i%2==0){
				hexBuffer.push(hex[i-2]+hex[i-1])
			}
		}
		return this.hexBuffer2StringLE(hexBuffer)
	}

	string2HexBE(string){
		var buffer = this.string2HexBufferBE(string)
		return buffer.join('')
	}

	string2HexLE(string){
		var buffer = this.string2HexBufferLE(string)
		return buffer.join('')
	}

	hex2BytesLE(hex){
		hex = this.formatHexLE(hex)
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

	
	hex2DecimalLE(hex){
		var bytes = this.hex2BytesLE(hex)
		return this.bytes2DecimalLE(bytes)
	}


	bytes2HexBE(bin){
		bin = this.formatBytesBE(bin)
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

	bytes2HexLE(bin){
		bin = this.formatBytesLE(bin)
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

	bytes2StringBE(bytes){
		if(bytes.length%8!==0){
			throw Error('hex2StringBE cannot use a hex string that is not byte divisible')
		}
		var byteBuffer=[]
		for(var i = 8; i<=bytes.length; i++){
			var bytesStr=''
			if(i%8==0){
				for(var j = i-8; j<i; j++){
					bytesStr+=bytes[j]
				}
				byteBuffer.push(bytesStr)
			}
		}

		return this.byteBuffer2StringBE(byteBuffer)
	}

	bytes2StringLE(bytes){
		if(bytes.length%8!==0){
			throw Error('hex2StringLE cannot use a hex string that is not byte divisible')
		}
		var byteBuffer=[]
		for(var i = 8; i<=bytes.length; i++){
			var bytesStr=''
			if(i%8==0){
				for(var j = i-8; j<i; j++){
					bytesStr+=bytes[j]
				}
				byteBuffer.push(bytesStr)
			}
		}
		return this.byteBuffer2StringLE(byteBuffer)
	}

	string2BytesBE(string){
		var buffer = this.string2BytesBufferBE(string)
		return buffer.join('')
	}

	string2BytesLE(string){
		var buffer = this.string2BytesBufferLE(string)
		return buffer.join('')
	}


    byteBuffer2StringBE(buffer){
		var str=''
		for(var i = 0; i<buffer.length; i++){
			var byte = buffer[i]
			str+= this.decimal2Char(this.bytes2DecimalBE(byte))
		}
		return str
    }

	byteBuffer2StringLE(buffer){
		var str=''
		for(var i = 0; i<buffer.length; i++){
			var byte = buffer[i]
			str+= this.decimal2Char(this.bytes2DecimalLE(byte))
		}
		return str
    }

	bytesBuffer2Bytes(buffer){
		var bytes=''
		for(var i = 0; i<buffer.length; i++){
			bytes+=buffer[i]
		}
		return bytes
	}

	string2BytesBufferBE(string){
		var buffer=[]
		for(var i = 0; i<string.length; i++){
			buffer.push(this.hex2BytesBE(this.char2HexBE(string[i])))
		}
		return buffer
	}

	string2BytesBufferLE(string){
		var buffer=[]
		for(var i = 0; i<string.length; i++){
			buffer.push(this.hex2BytesLE(this.char2HexLE(string[i])))
		}
		return buffer
	}	

	string2HexBufferBE(string){
		var buffer=[]
		for(var i = 0; i<string.length; i++){
			buffer.push(this.char2HexBE(string[i]))
		}
		return buffer
	}

	string2HexBufferLE(string){
		var buffer=[]
		for(var i = 0; i<string.length; i++){
			buffer.push(this.char2HexLE(string[i]))
		}
		return buffer
	}	

	stripBytesBE(bytes){
		var bytes2=bytes
		for(var i=0; i<bytes.length; i++){
			if(bytes[i]=='1'){
				return bytes2
			}else{
				bytes2=bytes2.slice(1)
			}
		}
		if(bytes2==''){return '0'}
		return bytes2
	}

	stripBytesLE(bytes){
		var bytes2=bytes
		for(var i=bytes.length-1; i>=0; i--){
			if(bytes[i]=='1'){
				return bytes2
			}else{
				bytes2=bytes2.slice(0, -1)
			}
		}
		if(bytes2==''){return '0'}
		return bytes2
	}

	formatBytesBE(bin){
		bin = this.stripBytesBE(bin)

		while(true){
			if(bin.length%8==0){
				break
			}else{
				bin='0'.concat(bin)
			}
		}
		return bin
	}
	
	formatBytesLE(bin){
		bin = this.stripBytesLE(bin)
		while(true){
			if(bin.length%8==0){
				break
			}else{
				bin=bin.concat('0')
			}
		}
		return bin
	}

	formatHexBE(hex){
		if(hex.length%2!=0){
			hex = '0'.concat(hex)
		}
		return hex
	}
	
	formatHexLE(hex){
		if(hex.length%2!=0){
			hex = hex.concat('0')
		}
		return hex
	}

}