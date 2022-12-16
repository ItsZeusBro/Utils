export class Comparators{
		constructor(){
	
		}
		isEqualObj(obj1, obj2, equal=[true]){
			if(
					(!equal[0])
				||
					(typeof obj1 !=='object')
				||
					(typeof obj2 !=='object')
			){
				equal[0]=false
				return equal[0]
			}else{
				if(this.isEqualArr(Object.keys(obj1), Object.keys(obj2), equal)){
					for(var i=0; i<Object.keys(obj1).length; i++){
						if(!this.isEqual(obj1[Object.keys(obj1)[i]], obj2[Object.keys(obj2)[i]], equal)){
							equal[0]=false
							return equal[0]
						}
					}
					return equal[0]
				}else{
					equal[0]=false
					return equal[0]
				}
			}
		}
	
	
	
		isEqualStr(str1, str2, equal=[true]){
			if(
					(!equal[0])
				||
					(typeof str1 !=='string')
				||
					(typeof str2 !=='string')
			){
				equal[0]=false
				return equal[0]
			}
			else if(
					(
							str1.length==1
						&&
							str2.length==1
						&&
							str1[0]==str2[0]
					)
				||
					(
							str1.length==0
						&&
							str2.length==0
					)
			){
				return equal[0]
			}
			else if(str1[0]==str2[0]){
				return this.isEqualStr(str1.slice(1), str2.slice(1), equal)
			}else{
				equal[0]=false
				return equal[0]
			}
		}
	
		isEqualNumber(num1, num2, equal=[true]){
			if(
					(!equal[0])
				||
					(typeof num1 !=='number')
				||
					(typeof num2 !=='number')
			){
				equal[0]=false
				return equal[0]
			}else if(num1==num2){
				return equal[0]
			}else{
				equal[0]=false
				return equal[0]
			}
		}
	
		isEqualArr(arr1, arr2, equal=[true]){
			if(
					(!equal[0])
				||
					(arr1.length!=arr2.length))
			{
				equal[0]=false
				return equal[0]
			}else if((Array.isArray(arr1)&& Array.isArray(arr2))){
				for(var i = 0; i< arr2.length; i++){
					if(typeof arr1[i]!== typeof arr2[i]){
						equal[0]=false
						return equal[0]
					}else{
						this.isEqual(arr1[i], arr2[i], equal)
					}
				}
				return equal[0]
			}else{
				equal[0]=false
				return equal[0]
			}
		}
	
		isEqual(thing1, thing2, equal=[true]){
			if(!equal[0]){
				return equal[0]
			}else if(typeof thing1 !== typeof thing2){
				equal[0]=false
				return equal[0]
			}else{
				if(Array.isArray(thing1)){
					return this.isEqualArr(thing1, thing2, equal)
				}else if(typeof thing1 === 'number'){
					return this.isEqualNumber(thing1, thing2, equal)
				}else if(typeof thing1 === 'string'){
					return this.isEqualStr(thing1, thing2, equal)
				}else if(typeof thing1 === 'object'){
					return this.isEqualObj(thing1, thing2, equal)
				}else if(!thing1 && !thing2){
					return equal[0]
				}
				else{
					//other types for the future
				}
			}
			console.log("should never run")
		}
		//The problem with equality recursive functions:
		//if everything is assumed true and proven false, you may have edge cases that turn out to be true when they are not
		//if everything is assumed false and proven true, and you use the same reference variable for reporting true, 
		//then if one deep thing is true, it might slip through and be generalized upon
		//if you dont use a reference variable, you cant report on the whole state across recursive functions and levels of recursivity
		//but if you dont use a reference variable, its safer to assume false and prove true, but your recursion has to be perfect all the time
		//we choose to assume true, because its easy to short circuit a recursive function upon its falsehood as the first
		//statement of all equality recursive functions
}
