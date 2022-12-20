
class RandTest{
    constructor(){
        this.tests()
    }

    // tests(){
    //     this.codeMapRange()
    //     this.codePointMapRange()
    //     this.str()
    //     this.range()
    //     this.bytesRangeBE()
    //     this.bytesRangeLE()
    //     this.hexRangeBE()
    //     this.hexRangeLE()
    // }

    str(){
        console.log('str()')
        for(var i = 0; i<10; i++){
            var inclusive=false
            var j = 100;
            while(inclusive==false){
                j++
                var str = new Rand().str(i, j)
                assert.equal(str.length<=j, true)
                assert.equal(str.length>=i, true)
                if(str.length==j||str.length==i){
                    inclusive=true
                    break
                }
            }
            assert.equal(inclusive, true)
        }
    }

    range(){
        console.log('range()')
        for(var i = 0; i<10; i++){
            var inclusive=false
            var j = 100;
            while(inclusive==false){
                j++
                var number = new Rand().range(i, j)
                assert.equal(number<=j, true)
                assert.equal(number>=i, true)
                if(number==j||number==i){
                    inclusive=true
                    break
                }
            }
            assert.equal(inclusive, true)
        }
    }

    bytesRangeBE(){
        for(var i = 0; i<100000; i++){
            var inclusive=false
            var j = i+1;
            while(inclusive==false){
                j++
                var byte = new Rand().bytesRangeBE(i, j)
                assert.equal(new Encoding().bytes2DecimalBE(byte)<=j, true)
                assert.equal(new Encoding().bytes2DecimalBE(byte)>=i, true)
                if(new Encoding().bytes2DecimalBE(byte)==j||new Encoding().bytes2DecimalBE(byte)==i){
                    inclusive=true
                    break
                }
            }
            assert.equal(inclusive, true)
        }
    }

    bytesRangeLE(){
        for(var i = 0; i<100000; i++){
            var inclusive=false
            var j = i+1;
            while(inclusive==false){
                j++
                var byte = new Rand().bytesRangeLE(i, j)
                assert.equal(new Encoding().bytes2DecimalLE(byte)<=j, true)
                assert.equal(new Encoding().bytes2DecimalLE(byte)>=i, true)
                if(new Encoding().bytes2DecimalLE(byte)==j||new Encoding().bytes2DecimalLE(byte)==i){
                    inclusive=true
                    break
                }
            }
            assert.equal(inclusive, true)
        }
    }
    codeMapRange(){
        console.log('codeMapRange()')
        for(var i = 0; i<60000; i++){
            var codeMap = new Rand().codeMapRange(i, i)
            var keys = Object.keys(codeMap)
            for(var j=0; j<keys.length; j++){
                assert.equal(codeMap[keys[j]]['bin'], new Encoding().decimal2BytesBE(codeMap[keys[j]]['codePoint']))
                assert.equal(codeMap[keys[j]]['hexBE'], new Encoding().decimal2HexBE(codeMap[keys[j]]['codePoint']))
            }
        }
    }

    codePointMapRange(){
        console.log('codePointMapRange()')
        for(var i = 0; i<60000; i++){
            var codePointMap = new Rand().codePointMapRange(i, i)
            var keys = Object.keys(codePointMap)
            for(var j=0; j<keys.length; j++){
                assert.equal(codePointMap[keys[j]]['bin'], new Encoding().decimal2BytesBE(i))
                assert.equal(codePointMap[keys[j]]['hexBE'], new Encoding().decimal2HexBE(i))
            }
        }
    }




	randArr(n){
		var arr = new RandGen().randArr(n)
		console.log("randArr", arr)
		assert.equal(Array.isArray(arr), true)
		assert.equal(arr.length<=n, true)

		var arrOfArr = new RandGen().randArr(n, true)
		console.log("randArr array", arrOfArr)
		assert.equal(Array.isArray(arrOfArr), true)
		for(var i=0; i<arrOfArr.length; i++){
			assert.equal(Array.isArray(arrOfArr[i]), true)
			assert.equal(arrOfArr.length<=n, true)
		}
	}

	randObj(n){
		var obj = new RandGen().randObj(n)
		console.log('randObj', obj)
		assert.equal(typeof obj === 'object', true)
		this._randObj(n, obj)

		var objArr = new RandGen().randObj(n, true)
		console.log("randObj array", objArr)
		assert.equal(Array.isArray(objArr), true)
		for(var i=0; i<objArr.length; i++){
			assert.equal(typeof objArr[i] === 'object', true)
			this._randObj(n, objArr[i])
		}

	}
	_randObj(n, obj){
		for(var i=0; i<n-1; i++){
			var key = Object.keys(obj)[i]
			assert.equal(typeof key === 'string', true)
			assert.equal(obj[key]!=undefined, true)
			this._randObj(n-1, obj[key])
		}
	}

}