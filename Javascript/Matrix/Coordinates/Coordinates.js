import {Combinatorics} from '../../Combinatorics/Combinatorics.js'
export class Coordinates{
	constructor(coordinate1, coordinate2){
		this.coordinate1=coordinate1
		this.coordinate2=coordinate2
		this.comparator = new Comparator(coordinate1.length)
		this._coordinates=null
		this.previous=null
	}

	min(){ return this.coordinate1.slice() }

	max(){ return this.coordinate2.slice() }

	coordinates(){
		var symbols = this.coordinate1.slice()
		symbols = symbols.concat(this.coordinate2.slice())
		symbols = new Set(symbols)
		symbols = Array.from(symbols)
		var min = Math.min(...symbols)
		var max = Math.max(...symbols)
		var _symbols=[]
		for(var i = min; i<=max; i++){ _symbols.push(i) }
		//console.log(_symbols, this.coordinate1.length)

		this._coordinates = new Combinatorics().PwithR(
			_symbols, 
			this.coordinate1.length, 
			[],
			[],
			this.coordinate1, 
			this.coordinate2
		)
		return this._coordinates
	}

	range(){ return this.comparator.range(this.coordinate1, this.coordinate2) }

	next(){		
		if(this.previous==null){
			this.previous=this.min()
			return this.previous
		}
		var current=this.previous
		for(var i = 0; i<this.previous.length; i++){
			if(this.incVal(current, i)==undefined){
				current[i]=this.min()[i];
			}else{
				current[i]=	this.incVal(current, i)
				break	
			}
		}
		this.previous=current
		return current
	}

	prev(){		
		return this.previous
	}

	incVal(coordinate, i){
		if((coordinate[i]+1)>this.max()[i]){
			return
		}else{
			return coordinate[i]+1
		}
	}

	shape(coordinate1, coordinate2){
		var shape=[]
		for(var i =0; i<coordinate1.length; i++){
			shape.push(Math.abs(coordinate1[i]-coordinate2[i]))
		}
		return shape
	}

	in(coordinate, coordinate1, coordinate2){
		if(
			new Comparator().isGreaterEqual(coordinate, coordinate1) 
			&& 
			new Comparator().isLessEqual(coordinate, coordinate2)
		){
			return true
		}else{
			return false
		}
	}
}

export class Comparator{
	//													  d= 0  1  2               2, 1, 0
	// IMPORTANT!!! COORDINATE NOTATION IS REVERSE NOTATION [1, 0, 0] is actually [0, 0, 1]

	constructor(d){
		this.d=d
	}

	diff(coordinate1, coordinate2){
		var diff = []
		for(var i = 0; i<coordinate1.length; i++){
			diff.push(coordinate1[i]-coordinate2[i])
		}
		return diff
	}

	range(coordinate1, coordinate2){
		var min = Math.min(...coordinate1)
		var max = Math.max(...coordinate2)
		return max-min
	}

	isEqual(coordinate1, coordinate2){
		for(var i = 0; i<coordinate1.length; i++){
			if(coordinate1[i] != coordinate2[i]){
				return false
			}
		}
		return true
	}

	isGreater(coordinate1, coordinate2){
		var diff = this.diff(coordinate1, coordinate2)

		for(var i = 0; i<coordinate1.length; i++){
			if(diff[i]>0){
				return true
			}else if(diff[i]<0){
				return false
			}
		}
		return false
	}

	isGreaterEqual(coordinate1, coordinate2){
		if(this.isEqual(coordinate1, coordinate2)||this.isGreater(coordinate1, coordinate2)){
			return true
		}else{
			return false
		}
	}
	isLess(coordinate1, coordinate2){
		var diff = this.diff(coordinate1, coordinate2)

		for(var i = 0; i<coordinate1.length; i++){
			if(diff[i]>0){
				return false
			}else if(diff[i]<0){
				return true
			}
		}
		return false
	}

	isLessEqual(coordinate1, coordinate2){
		if(this.isEqual(coordinate1, coordinate2)||this.isLess(coordinate1, coordinate2)){
			return true
		}else{
			return false
		}
	}
}
