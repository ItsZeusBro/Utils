export class Types{
	constructor(){

	}
	isInt(n) {
		return n % 1 === 0;
	}

    isInteger(n, n_min, n_max){
		//ng means assert that integer n is greater than ng
		//nl means assert that integer n is less than nl

		if(n && n_min && n_max){
			try{
				assert.equal(typeof n ==='number', true)
				assert.equal(n>=n_min, true)
				assert.equal(n<=n_max, true)
			}catch(err){
				return false
			}
		}else if(n && n_min){
			try{
				assert.equal(typeof n ==='number', true)
				assert.equal(n>=n_min, true)
			}catch(err){
				return false
			}
		}else if(n && n_max){
			try{
				assert.equal(typeof n ==='number', true)
				assert.equal(n<=n_max, true)
			}catch(err){
				return false
			}
		}else if(n){
			try{
				assert.equal(typeof n ==='number', true)
			}catch(err){
				return false
			}
		}else{
			return false
		}
		return true
	}

	isArray(arr, n_min, n_max){
		//n_min means assert that array arr.length is greater than n_min
		//n_max means assert that array arr.length is less than n_max
		if(arr && n_min && n_max){
			try{
				assert.equal(Array.isArray(arr), true)
				assert.equal(arr.length>=n_min, true)
				assert.equal(arr.length<=n_max, true)
			}catch(err){
				return false
			}
		}else if(arr && n_min){
			try{
				assert.equal(Array.isArray(arr), true)
				assert.equal(arr.length>=n_min, true)
			}catch(err){
				return false
			}
		}else if(arr && n_max){
			try{
				assert.equal(Array.isArray(arr), true)
				assert.equal(arr.length<=n_max, true)
			}catch(err){
				return false
			}
		}else if(arr){
			try{
				assert.equal(Array.isArray(arr), true)
			}catch(err){
				return false
			}
		}else{
			return false
		}
		return true
	}


	//w_min = assert that width is greater than w_min
	//w_max = assert that width is less than w_max
	//d_min = assert that depth is greater than d_min
	//d_max = assert that depth is less than d_max
	isObject(obj, w_min, w_max, d_min, d_max, n=0, maxdepth=[0], truth=[true]){
		if(!truth[0]){return false}
		if((d_max||d_min)&&(n>=maxdepth[0])){maxdepth[0]=n+1}

		if(typeof obj === 'object' && Object.keys(obj).length){
			if(w_min||w_max||d_max||d_min){
				var i;
				if(d_max||d_min){
					for(i = 0; i<Object.keys(obj).length; i++){
						
						this.isObject(obj[Object.keys(obj)[i]], w_min, w_max, d_min, d_max, n+1, maxdepth, truth)
					}
				}
				if(w_min){
					try{
						assert.equal((Object.keys(obj).length)>=w_min, true)
					}catch(err){
						console.log(err)
						truth[0]=false
						return truth[0]
					}
				}
				if(w_max){
					try{
						assert.equal((Object.keys(obj).length)<=w_max, true)
					}catch(err){
						console.log(err)
						truth[0]=false
						return truth[0]
					}
				}
			}else{
				return truth[0]
			}
		}else{
			return truth[0]
		}

		if(n==0){
			if(d_max){
				try{
					console.log(maxdepth[0], d_max)
					assert.equal(maxdepth[0]<=d_max, true)
				}catch(err){
					console.log(err)
					truth[0]=false;
					return truth[0];
				}
			}
			if(d_min){
				try{
					assert.equal(maxdepth[0]>=d_min, true)
				}catch(err){
					console.log(err)
					truth[0]=false
				}
			}
		}
		return truth[0]
	}

	isString(str, n_min, n_max){
		if(str && n_min && n_max){
			try{
				assert.equal(typeof str === 'string', true)
				assert.equal(str.length>=n_min, true)
				assert.equal(str.length<=n_max, true)
			}catch(err){
				return false
			}
		}else if(str && n_min){
			try{
				assert.equal(typeof str === 'string', true)
				assert.equal(str.length>=n_min, true)
			}catch(err){
				return false
			}
		}else if(str && n_max){
			try{
				assert.equal(typeof str === 'string', true)
				assert.equal(str.length<=n_max, true)
			}catch(err){
				return false
			}
		}else if(str){
			try{
				assert.equal(typeof str === 'string', true)
			}catch(err){
				return false
			}
		}else{
			return false
		}
		return true
	}

	isStrata(){
		
	}
}
