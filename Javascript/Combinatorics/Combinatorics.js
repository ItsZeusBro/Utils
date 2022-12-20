import {Coordinates} from '../Matrix/Coordinates/Coordinates.js'
export class Combinatorics{
     //PERMUTATION WITHOUT REPETITION
    PwithoutR(symbols, n, permutation=[], permutations=[], min=[], max=[]){
        if(n==0){

            permutations.push(permutation)
            
            return
        }
        for(var i = 0; i<symbols.length; i++){
            this.PwithoutR(
                symbols.slice(0, i).concat(symbols.slice(i+1)), 
                n-1, 
                permutation.slice().concat(symbols[i]), 
                permutations
            )
        }
        return permutations
    }

    CwithoutR(symbols, n, combination = new Set(), out=[]){
        if(n==0){
            //if there are no zero difference combinations with combination
            //then add it
            var exists=false
            for (const elem of out) {
                if(this.difference(combination, elem).size==0){
                    exists=true
                }
            }
            if(!exists){
                out.push(Array.from(combination))
            }
        }
        for(var i = 0; i<symbols.length; i++){
            this.CwithoutR(
                symbols.slice(0, i).concat(symbols.slice(i+1)),
                n-1, 
                new Set(
                    JSON.parse(JSON.stringify(Array.from(combination)))
                ).add(symbols[i]),
                out
            )
        }
        
        return out
    }

    difference(setA, setB) {
        const _difference = new Set(setA);
        for (const elem of setB) {
          _difference.delete(elem);
        }
        return _difference;
    }

    //PERMUTATION WITH REPETITION
    PwithR(symbols, n, permutation=[], permutations=[], min=[], max=[]){
        if(n==0){
            if(min.length&&max.length){
                var comparator = new Coordinates(min, max).comparator
                if(comparator.isGreaterEqual(permutation, min)&&comparator.isLessEqual(permutation, max)){
                    permutations.push(permutation)
                }
            }else{
                permutations.push(permutation)
            }
            return
        }
        for(var i = 0; i<symbols.length; i++){
            this.PwithR(
                symbols, 
                n-1, 
                permutation.slice().concat(symbols[i]), 
                permutations,
                min, 
                max
            )
        }
        return permutations
    }

    //COMBINATION WITH REPETITION
    CwithR(symbols, n, out=[]){
        while(true){
            if(out.length==0){
                var next=[]
                for(var k = 0; k<n; k++){next.push(symbols[symbols.length-1])}
                out.unshift(next)
            }
            if(out[0][0]==symbols[0]){return out}
            var next=out[0].slice()
            for(var j =n-1; j>=0; j--){
                if(next[j]!=symbols[0]){
                    next[j]=symbols[symbols.indexOf(next[j])-1]
                    next = this._reset(symbols, symbols[symbols.indexOf(next[j])], next, j)
                    out.unshift(next)
                    break
                }
            }
        }
    }

    //where n is the number of symbols, 
    //and r is the number of symbols chosen 
    _PwithoutR(n, r){
        if((this.factorial((n)))/(this.factorial(n-r))%1<=.49999999){
            return Math.floor((this.factorial((n)))/(this.factorial(n-r)))
        }else{
            return Math.ceil((this.factorial((n)))/(this.factorial(n-r)))
        }
    }

    _PwithR(n, r){
        return Math.pow(n, r)
    }

    _CwithR(n, r){
        if((this.factorial((n+r-1)))/(this.factorial(n-1)*this.factorial(r))%1<=.49999999){
            return Math.floor((this.factorial((n+r-1)))/(this.factorial(n-1)*this.factorial(r)))
        }else{
            return Math.ceil((this.factorial((n+r-1)))/(this.factorial(n-1)*this.factorial(r)))
        }
    }

    _CwithoutR(n, r){
        if((this.factorial((n)))/(this.factorial(n-r)*this.factorial(r))%1<=.49999999){
            return Math.floor((this.factorial((n)))/((this.factorial(n-r)*this.factorial(r))))
        }else{
            return Math.ceil((this.factorial((n)))/((this.factorial(n-r)*this.factorial(r))))
        }
    }

    factorial (n) {
        //https://stackoverflow.com/questions/3959211/what-is-the-fastest-factorial-function-in-javascript
        if (n === 0)
        { return 1; }
        else
        { return n * this.factorial( n - 1 ); }
    }


    symbols(symbols){
        var symbol = symbols.shift()
        symbols.push(symbol)
        return symbols
    }
   
    _reset(symbols, val, arr, i){
        //reseting from the significant index for arr to val
        for(var j = i; j<arr.length; j++){
            arr[j]=val
        }
        return arr
    }

    shiftLeft(list){
        var symbol = list.shift()
        list.push(symbol)
        return list
    }
    shiftRight(list){
        var symbol = list.pop()
        list.unshift(symbol)
        return list
    }
    swap(i, j, list){
        list=list.slice()
        var b = list[i];
        list[i] = list[j];
        list[j] = b;
        return list
    }
}