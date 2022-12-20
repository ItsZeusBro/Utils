import {Coordinates, Comparator} from "./Coordinates.js"
import assert from "node:assert"
import {Combinatorics} from "../../Combinatorics/Combinatorics.js"

export class CoordinatesTest{
    constructor(){
        this.tests()
    }
    tests(){
        this.coordinates()
        this.isLess()
        this.isLessEqual()
        this.isGreater()
        this.isGreaterEqual()
        this.next()
        this.incVal()
        this.in()
        this.diff()
        this.isEqual()
        this.range()
    }

    coordinates(){
        console.log('coordinates() test')
        var c1=[0,0,0]
        var c2=[5,5,5]
        var _coordinates = new Coordinates(c1, c2)
        var coordinates = _coordinates.coordinates()
        var comparator = new Comparator(c1.length)
        for(var n = 0; n<coordinates.length-1; n++){
            try{
                assert.equal(comparator.isLess(coordinates[n], coordinates[n+1]), true)
                assert.equal(comparator.isGreater(coordinates[n+1], coordinates[n]), true)
            }catch{
                console.log(
                    'mtx:', coordinates,
                    'assertion1:', comparator.isLess(coordinates[n], coordinates[n+1]),"==",true,
                    'assertion2:', comparator.isGreater(coordinates[n+1], coordinates[n]),"==",true,
                )
                throw Error()
            }
        }
    }

    next(){
        console.log('next() test')
        var c1=[0,0,0]
        var c2=[5, 5, 5]
        var _coordinates = new Coordinates(c1, c2)
        var coordinates = _coordinates.coordinates()
        var comparator = new Comparator(c1.length)
        _coordinates.next()
        for(var n = 0; n<coordinates.length-1; n++){
            var next = _coordinates.next() 
            var prev = _coordinates.prev
            try{
                assert.equal(comparator.isEqual(next, prev), false)
            }catch{
                console.log(
                    'mtx:', coordinates,
                    'assertion1:', comparator.isEqual(next, prev),"==",false
                )
                throw Error()
            }
        }
    }

    incVal(){
        console.log('incVal() test')
        var c1=[0,0,0]
        var c2=[5, 5, 5]
        var _coordinates = new Coordinates(c1, c2)
        var coordinates = _coordinates.coordinates()
        var comparator = new Comparator(c1.length)
        for(var n = 0; n<coordinates.length-1; n++){
            var next=_coordinates.next()
            for(var i = next.length-1; i>=0; i--){
                try{
                    if(_coordinates.incVal(next, i)){
                        assert.equal(_coordinates.incVal(next, i)-next[i]==1, true)
                    }else{
                        assert.equal((next[i]+1)>_coordinates.max()[i], true)
                    }
                }catch{
                    console.log(
                        'mtx:', coordinates,
                        'assertion1:', _coordinates.incVal(next, i)-next[i],"==",1,
                        'assertion2:',(next[i]+1)>_coordinates.max()[i], true
                    )
                    throw Error()
                }
            }
        }
    }

    in(){
        console.log('in() test')
        var c1=[0,0,0]
        var c2=[5, 5, 5]
        var _coordinates = new Coordinates(c1, c2)
        var coordinates = _coordinates.coordinates()
        var prev = _coordinates.next()
        _coordinates.next()
        var next = _coordinates.next()
        var current = _coordinates.prev()
        for(var n = 0; n<coordinates.length-3; n++){
            try{
                assert.equal(_coordinates.in(current,prev, next), true)
            }catch{
                console.log(
                    'mtx:', coordinates,
                    'assertion1:', _coordinates.in(current,prev, next),"==",true
                )
                throw Error()
            }
            prev=current
            current=next
            next = _coordinates.next() 
        }
    }

    diff(){
        console.log('diff() test')
        var c1=[0,0,0]
        var c2=[10,10,10]
        var _coordinates = new Coordinates(c1, c2)
        var coordinates = _coordinates.coordinates()
        for(var i = 0; i<coordinates.length-1; i++){
            var diff = _coordinates.comparator.diff(coordinates[i+1], coordinates[i])
            try{
                assert.equal(_coordinates.comparator.isGreaterEqual(coordinates[i+1], diff), true)
            }catch{
                console.log(
                    'mtx:', coordinates,
                    'assertion1:', _coordinates.comparator.isGreaterEqual(coordinates[i+1], diff),"==",true
                )
                throw Error()
            }
        }
    }

    range(){
        console.log('range() test')
        var c1=[3,2,0]
        var c2=[1, 10, 4]
        var _coordinates = new Coordinates(c1, c2)
        var coordinates = _coordinates.coordinates()
        try{
            assert.equal(_coordinates.range(c1, c2),10, true)
        }catch{
            console.log(
                'mtx:', coordinates,
                'assertion1:', _coordinates.range(c1, c2),"==",10
            )
            throw Error()
        }
    }

    isEqual(){
        console.log('isEqual() test')
        var c1=[0,0,0]
        var c2=[10, 10, 10]
        var _coordinates = new Coordinates(c1, c2)
        var coordinates = _coordinates.coordinates()
        for(var i = 0; i<coordinates.length-1; i++){
            try{
                assert.equal(_coordinates.comparator.isEqual(coordinates[i], coordinates[i]), true)
            }catch{
                console.log(
                    'mtx:', coordinates,
                    'assertion1:', _coordinates.comparator.isEqual(coordinates[i], coordinates[i]),"==",true
                )
                throw Error()
            }
        }
    }

    isGreater(){
        console.log('isGreater() test')
        var c1=[-5,-5,-5]
        var c2=[5, 5, 5]
        var _coordinates = new Coordinates(c1, c2)
        var coordinates = _coordinates.coordinates()
        var comparator = new Comparator(c1.length)
        for(var n = 0; n<coordinates.length-1; n++){
            //test its coordinate system
            try{
                assert.equal(comparator.isGreater(coordinates[n+1], coordinates[n]), true)
            }catch{
                console.log(
                    'mtx:', coordinates,
                    'assertion1:', comparator.isGreater(coordinates[n+1], coordinates[n]),"==",true
                )
                throw Error()
            }
        }
    }

    isGreaterEqual(){
        console.log('isGreaterEqual() test')
        var c1=[-1,-1,-1]
        var c2=[1, 1, 1]
        var _coordinates1 = new Coordinates(c1, c2)
        var _coordinates2 = new Coordinates(c1, c2)
        var coordinates1 = _coordinates1.coordinates()
        var coordinates2 = _coordinates2.coordinates()
        var comparator = new Comparator(c1.length)
        for(var n = 0; n<coordinates1.length-1; n++){
            try{
                assert.equal(comparator.isGreaterEqual(coordinates1[n], coordinates2[n]), true)
                assert.equal(comparator.isGreaterEqual(coordinates1[n+1], coordinates1[n]), true)
            }catch{
                console.log(
                    'mtx:', coordinates1, coordinates2,
                    'assertion1:', comparator.isGreaterEqual(coordinates1[n], coordinates2[n]),"==",true,
                    'assertion2:', comparator.isGreaterEqual(coordinates1[n+1], coordinates1[n]),"==",true
                )
                throw Error()
            }
        }
    }
    isLess(){
        console.log('isLess() test')
        var c1=[-5,-5,-5]
        var c2=[5, 5, 5]
        var _coordinates = new Coordinates(c1, c2)
        var coordinates = _coordinates.coordinates()
        var comparator = new Comparator(c1.length)
        for(var n = 0; n<coordinates.length-1; n++){
            try{
                assert.equal(comparator.isLess(coordinates[n], coordinates[n+1]), true)
            }catch{
                console.log(
                    'mtx:', coordinates1,coordinates2,
                    'assertion1:', comparator.isLess(coordinates[n], coordinates[n+1]),"==",true
                )
                throw Error()
            }
        }
    }
    isLessEqual(){
        console.log('isLessEqual() test')
        var c1=[-1,-1,-1]
        var c2=[1, 1, 1]
        var _coordinates1 = new Coordinates(c1, c2)
        var _coordinates2 = new Coordinates(c1, c2)
        var coordinates1 = _coordinates1.coordinates()
        var coordinates2 = _coordinates2.coordinates()
        var comparator = new Comparator(c1.length)
        for(var n = 0; n<coordinates1.length-1; n++){

            try{
                assert.equal(comparator.isLessEqual(coordinates1[n], coordinates2[n]), true)
                assert.equal(comparator.isLessEqual(coordinates1[n], coordinates1[n+1]), true)
            }catch{
                console.log(
                    'mtx:', coordinates1,coordinates2,
                    'assertion1:', comparator.isLessEqual(coordinates1[n], coordinates2[n]),"==",true,
                    'assertion2:', comparator.isLessEqual(coordinates1[n], coordinates1[n+1]),"==",true

                )
                throw Error()
            }
        }
    }
}