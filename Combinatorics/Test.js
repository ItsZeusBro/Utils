import {Combinatorics} from "./Combinatorics.js"
import assert from "node:assert"
export class CombinatoricsTest{
    constructor(r=4){
        this.tests(r)
    }
    
    tests(r){
        var symbols=[]
        var r_s=[]
        for(var i = 0; i<=r; i++){
            symbols.push(i)
            r_s.push(i+1)
        }
        for(var i = 0; i<r_s.length; i++){
            this.PwithR(symbols.slice(), r_s[i])
            this.PwithoutR(symbols.slice(), r_s[i])
            this.CwithR(symbols.slice(), r_s[i])
            this.CwithoutR(symbols.slice(), r_s[i])
        }
    }

    PwithR(symbols, r){
        var result = new Combinatorics().PwithR(symbols, r)
        this.uniquePwithR(result)
        this.inRange(symbols, r, result)
        console.log('PwithR(', symbols.length, ',',r,')', this.lengthCheckPwithR(symbols, r, result))

        
    }

    lengthCheckPwithR(symbols, r, result){
        assert.equal(result.length==new Combinatorics()._PwithR(symbols.length, r), true)
        return new Combinatorics()._PwithR(symbols.length, r)
    }

    uniquePwithR(result){
        var set = new Set()
        for(var i =0; i<result.length; i++){
            var str = result[i].join("")
            set.add(str)
        }
        
    }

    
    PwithoutR(symbols, r){
        var result = new Combinatorics().PwithoutR(symbols, r)
        this.uniquePwithoutR(result)
        this.inRange(symbols, r, result)
        console.log('PwithoutR(', symbols.length,',',r,')', this.lengthCheckPwithoutR(symbols, r, result))
    }

    uniquePwithoutR(result){
        var set = new Set()
        for(var i=0; i<result.length; i++){
            var str = result[i].join("")
            set.add(str)
        }
    }

    lengthCheckPwithoutR(symbols, r, result){
        assert.equal(result.length==new Combinatorics()._PwithoutR(symbols.length, r), true)
        return new Combinatorics()._PwithoutR(symbols.length, r)
    }

    CwithR(symbols, r){
        var result = new Combinatorics().CwithR(symbols, r)
        this.uniqueCwithR(result)
        this.inRange(symbols, r, result)
        console.log('CwithR(', symbols.length, ',', r,')', this.lengthCheckCwithR(symbols, r, result))
    }

    lengthCheckCwithR(symbols, r, result){
        assert.equal(result.length==new Combinatorics()._CwithR(symbols.length, r), true)
        return new Combinatorics()._CwithR(symbols.length, r)
    }

    uniqueCwithR(result){
        var set = new Set()
        for(var i =0; i<result.length; i++){
            var str = result[i].join("")
            set.add(str)
        }
    }


    CwithoutR(symbols, r){
        var result = new Combinatorics().CwithoutR(symbols, r)
        this.uniqueCwithoutR(result)
        this.inRange(symbols, r, result)
        console.log('CwithoutR(', symbols.length, ',', r,')',this.lengthCheckCwithoutR(symbols, r, result))
    }

    lengthCheckCwithoutR(symbols, r, result){
        assert.equal(result.length==new Combinatorics()._CwithoutR(symbols.length, r), true)
        return new Combinatorics()._CwithoutR(symbols.length, r)
    }

    uniqueCwithoutR(result){
        var set = new Set()
        for(var i =0; i<result.length; i++){
            var str = result[i].join("")
            set.add(str)
        }
    }

    inRange(symbols, r, result){
        for(var i = 0; i<result.length; i++){
            for(var j = 0; j<result.length; j++){
                symbols.includes(result[i][j])
            }
        }
    }
}

