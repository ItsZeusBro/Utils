import path from "node:path"
import {createHash} from 'node:crypto'
import {Combinatorics} from "./Combinatorics/Combinatorics.js"
import {Coordinates} from "./Matrix/Coordinates/Coordinates.js"

export class Utils{

	
	hash(anything){
		return createHash('sha256').update(anything).digest('hex');
	}

	nOrderedNeighborhoods(uniqueChars, dimension){
		var n = uniqueChars
		var nNeighborhoods=0
		for(var r = dimension; r<=2*dimension; r++){
			nNeighborhoods+= new Combinatorics()._CwithR(n, r)
		}
		return nNeighborhoods
	}

	objectComparator(...keys){
		return (a, b) => {
			var item1 = a
			var item2 = b
			for(var i=0; i<keys.length; i++){
				item1 = item1[keys[i]]
				item2 = item2[keys[i]]
			}
			if (item1 < item2) {
			  return -1;
			}
			if (item1 > item2) {
			  return 1;
			}
			return 0;
		}
	}
}