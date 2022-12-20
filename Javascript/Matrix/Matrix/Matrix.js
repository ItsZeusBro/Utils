import util from 'node:util'
import { Comparator, Coordinates } from '../Coordinates/Coordinates.js'

class Cell{
	constructor(data=null, coordinate){
		this.data=data
		this.coordinate=coordinate
	}
}

export class Matrix {
	constructor(coordinate1, coordinate2, data, mtx, coordinates){
		this.mtx;
		this.coordinate1;
		this.coordinate2;
		this.coordinates;
		if(coordinates){
			this.coordinates = coordinates
			this.coordinate1=this.coordinates.min()
			this.coordinate2=this.coordinates.max()
		}else{ 
			this.coordinates=new Coordinates(coordinate1, coordinate2) 
			this.coordinate1=coordinate1
			this.coordinate2=coordinate2
		}
		this.m=this.coordinates.range()+1
		this.d=this.coordinate1.length
		this.comparator = this.coordinates.comparator
		if(mtx){ this.mtx=mtx }else{ this._mtx(data) }
	}
	
	max(d){
		var max1 = Math.max(this.coordinate1[d])
		var max2 = Math.max(this.coordinate2[d])
		if(max1<=max2){return max1}
		else{return max2}
	}

	min(d){
		var min1 = Math.min(this.coordinate1[d])
		var min2 = Math.min(this.coordinate2[d])
		if(min1<=min2){return min1}
		else{return min2}
	}

	_mtx(data){
		var coordinates = this.coordinates.coordinates()
		var mtx=[]
		for(var i = 0; i<coordinates.length; i++){
			if(Array.isArray(data)){
				mtx.push(new Cell(data[i], coordinates[i]))
			}else if(typeof data === 'object'){
				mtx.push(new Cell(data, coordinates[i]))
			}else{
				mtx.push(new Cell({}, coordinates[i]))
			}
		}
		this.mtx=mtx
		return mtx
	}
	
	shape(){
		return this.coordinates.shape(this.coordinate2, this.coordinate1)
	}

	count(){ return this.mtx.length }

	at(coordinate, data, key){
		this.mtx[this.skip(coordinate)].data[key]=data
	}

	get(coordinate){ 
		return this.mtx[this.skip(coordinate)] 
	}

	skip(coordinate){
		return this.binarySearch(coordinate)
	}

	binarySearch(coordinate){
		var mid = Math.floor((this.mtx.length-1)/2)
		var begining=0
		var end = this.mtx.length-1
		while(true){
			if(this.mtx[mid]&&this.comparator.isEqual(this.mtx[mid].coordinate, coordinate)){
				return mid
			}else if(this.mtx[mid]&&this.comparator.isGreater(coordinate, this.mtx[mid].coordinate)){
				begining=mid
				mid=Math.ceil((end-begining)/2)+mid
				if(this.mtx[mid+1]&&this.comparator.isEqual(this.mtx[mid+1].coordinate, coordinate)){
					return mid+1
				}else if(this.mtx[mid-1]&&(mid-1>=0)&&this.comparator.isEqual(this.mtx[mid-1].coordinate, coordinate)){
					return mid-1
				}
			}else{
				end=mid
				mid=Math.floor(end/2)
				if(this.mtx[mid+1]&&this.comparator.isEqual(this.mtx[mid+1].coordinate, coordinate)){
					return mid+1
				}else if(this.mtx[mid-1]&&this.comparator.isEqual(this.mtx[mid-1].coordinate, coordinate)){
					return mid-1
				}
			}
		}
	}

	window(coordinate1, coordinate2){
		//THIS WILL CREATE A NEW MATRIX WITH THE SAME MTX IN MEMORY
		var mtx = this._window(this.skip(coordinate1), this.skip(coordinate2))
		return new Matrix(coordinate1, coordinate2, null, mtx)
	}

	copy(){
		//this optimizes copying a matrix, by reducing combinatoric complexity
		//also reduces load times for data
		return new Matrix(null, null, null, this.mtx.slice(), this.coordinates)
	}

	_window(index1, index2){
		var mtx=[]
		for(var i =index1; i<=index2; i++){
			mtx.push(new Cell(this.mtx[i].data, this.mtx[i].coordinate))
		}
		return mtx
	}


	print(){
		for(var i = 0; i<this.mtx.length; i++){
			process.stdout.write(this.mtx[i]['data']['mode'])
		}
		process.stdout.write('\n')
	}

	log(mtx){
		if(mtx){
			console.log(util.inspect(mtx, {showHidden: false, depth: null, colors: true}))
		}else{
			console.log(util.inspect(this.mtx, {showHidden: false, depth: null, colors: true}))
		}
	}
}