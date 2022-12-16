import {Matrix} from "./Matrix.js"
import {Coordinates} from "../Coordinates/Coordinates.js"
import assert from "node:assert"
import {Combinatorics} from "../../Combinatorics/Combinatorics.js"

export class MatrixTest{
    constructor(){
        this.tests()
    }
    
    tests(){
        this._mtx()
        this.shape()
        this.count()
        this.at()
        this.get()
        this.skip()
        this.window()
        this.copy()
    }

    _mtx(){
        console.log('_mtx() test')
        var mtx = new Matrix([0,0,0], [2, 2, 2])
        var coordinates = new Coordinates([0,0,0], [2,2,2]).coordinates()
        for(var i=0; i<coordinates.length; i++){
            for(var j=0; j<coordinates[i].length; j++){
                try{
                    assert.equal(mtx.mtx[i].coordinate[j]==coordinates[i][j], true)
                }catch{
                    console.log(
                        'mtx:', mtx.coordinate1, mtx.coordinate2, mtx.get(coordinates[i]),
                        'm:', mtx.m, 
                        'assertion:', mtx.mtx[i].coordinate[j],"==",coordinates[i][j]
                    )
                    throw Error()
                }
            }
        }

        var data = []
        for(var i = 0; i<coordinates.length; i++){
            data.push(i)
        }
        
        mtx._mtx(data)
        for(var i=0; i<coordinates.length; i++){
            try{
                assert.equal(mtx.mtx[i].data==data[i], true)
            }catch{
                console.log(
                    'mtx:', mtx.coordinate1, mtx.coordinate2, mtx.get(coordinates[i]),
                    'm:', mtx.m, 
                    'assertion:', mtx.mtx[i].data,"==",data[i]
                )

                throw Error()
            }
        }
        mtx._mtx()
        for(var i=0; i<coordinates.length; i++){
            assert.equal(typeof mtx.mtx[i].data=='object', true)
        }
    }

    shape(){
        console.log('shape() test')
        var _1= [-1,-1,-1]
        var _2=[2, 2, 2]
        var mtx = new Matrix(_1, _2)
        var shape = mtx.shape()
        for(var i = 0; i<_1.length; i++){
            try{
                assert.equal(shape[i]==(_2[i]-_1[i]), true)
            }catch{
                console.log(
                    'mtx:', mtx.coordinate1, mtx.coordinate2, mtx.get(coordinates2[i]),
                    'm:', mtx.m, 
                    'assertion:', shape[i], '==', (_2[i]-_1[i])
                )

                throw Error()
            }
        }
    }

    window(){
        console.log('window() test')
        var mtx = new Matrix([0,0,0], [5,5,5])
        var mtx2= mtx.window([1, 0, 0].reverse(), [2,3,3].reverse())
        var coordinates = new Coordinates([1, 0, 0].reverse(), [2,3,3].reverse()).coordinates()
        for(var i=0; i<coordinates.length; i++){
            mtx.at(coordinates[i], coordinates[i], 'someKey')
            var count=0
            for(var j=0; j<coordinates[i].length; j++){
                if(mtx2.get(coordinates[i]).data['someKey']&&mtx.get(coordinates[i]).data['someKey']){
                    if(
                        mtx2.get(coordinates[i]).data['someKey'][j]
                        ==
                        mtx.get(coordinates[i]).data['someKey'][j]
                    ){
                        count+=1
                    }
                }
            }
            try{
                assert.equal(count==coordinates[i].length, true)
            }catch{
                console.log(
                    'mtx:', mtx.coordinate1, mtx.coordinate2, mtx.get(coordinates[i]),
                    'm:', mtx.m, 
                    'assertion:', count, '==', coordinates[i].length
                )
                console.log(
                    'mtx2:', mtx2.coordinate1, mtx2.coordinate2, mtx2.get(coordinates[i]), 
                    'm:', mtx2.m,  
                    'assertion:', count, '==', coordinates[i].length
                )
                throw Error()
            }
        }
    }

    copy(){
        console.log('copy() test')
        var mtx = new Matrix([0,0,0], [5,5,5])
        var mtx2= mtx.copy()
        var coordinates=mtx.coordinates
        for(var i=0; i<coordinates.length; i++){
            mtx.at(coordinates[i], coordinates[i], 'someKey')
            mtx2.at(coordinates[i], coordinates[i+1], 'someKey')
            var count=0
            for(var j =0; j<coordinates[i].length; j++){
                if(mtx2.get(coordinates[i]).data['someKey'][j]==mtx.get(coordinates[i]).data['someKey'][j]){
                    count+=1
                }
            }

            try{
                assert.equal(count!=coordinates[i].length, true)
            }catch{
                console.log(
                    'mtx:', mtx.coordinate1, mtx.coordinate2, mtx.get(coordinates[i]),
                    'm:', mtx.m, 
                    'assertion:', count, '==', coordinates[i].length
                )
                console.log(
                    'mtx2:', mtx2.coordinate1, mtx2.coordinate2, mtx2.get(coordinates[i]),
                    'm:', mtx.m, 
                    'assertion:', count, '==', coordinates[i].length
                )
                throw Error()
            }
        }
    }

    count(){
        console.log('count() test')
        var _1 = [-1,-1,-1]
        var _2 = [2, 2, 2]
        var mtx = new Matrix(_1, _2)
        try{
            assert.equal(mtx.count(), mtx.mtx.length)
        }catch{
            console.log(
                'mtx:', mtx.coordinate1, mtx.coordinate2,
                'm:', mtx.m, 
                'assertion:', mtx.count(), '==', mtx.mtx.length
            )
            throw Error()
        }
    }

    at(){
        console.log('at() test')
        var _1 = [-1,-1,-1]
        var _2 = [2, 2, 2]
        var data={'someKey':null}
        var mtx = new Matrix(_1, _2, data)
        var coordinates = mtx.coordinates._coordinates
        for(var i=0; i<coordinates.length; i++){
            mtx.at(coordinates[i], 'someData', 'someKey')
            try{
                assert.equal(mtx.get(coordinates[i]).data['someKey'], 'someData')
            }catch{
                console.log(
                    'mtx:', mtx.coordinate1, mtx.coordinate2, mtx.get(coordinates[i]),
                    'm:', mtx.m, 
                    'assertion:', mtx.get(coordinates[i]).data['someKey'], '==', 'someData'
                )
                throw Error()
            }
        }
    }

    skip(){
        console.log('skip() test')
        for(var j=-10; j<0; j++){
            for(var n = 0; n<10; n++){
                var mtx = new Matrix([j,j,j], [n, n, n])
                var mtx2= new Matrix([j-1,j-1,j-1], [n+1, n+1, n+1])
                var coordinates1 = mtx.coordinates._coordinates
                var coordinates2 = mtx2.coordinates._coordinates
                for(var i = 0; i<coordinates1.length; i++){
                    mtx.at(coordinates1[i], i, 'someKey')
                    mtx2.at(coordinates1[i], i, 'someKey')
                    try{
                        assert.equal(i==mtx.skip(coordinates1[i]), true)
                        assert.equal(i!=mtx2.skip(coordinates1[i]), true)
                        assert.equal(mtx.mtx[mtx.skip(coordinates1[i])].data['someKey']==i, true)
                        assert.equal(mtx2.mtx[mtx2.skip(coordinates1[i])].data['someKey']==i, true)
                    }catch{
                        console.log(
                            'mtx:', mtx.coordinate1, mtx.coordinate2, mtx.get(coordinates[i]),
                            'm:', mtx.m, 
                            'assertion1:', i, '==', mtx.skip(coordinates1[i]),
                            'assertion2:', i, '!=', mtx2.skip(coordinates1[i]),
                            'assertion3:', mtx.mtx[mtx.skip(coordinates1[i])].data['someKey'], '==', i,
                            'assertion4:', mtx2.mtx[mtx2.skip(coordinates1[i])].data['someKey'], '==', i
                        )
                        throw Error()
                    }
                }
            }   
        }
    }

    get(){
        console.log('get() test')
        var _1 = [-1,-1,-1]
        var _2 = [2, 2, 2]
        var data={'someKey':null}
        var mtx = new Matrix(_1, _2, data)
        var coordinates = mtx.coordinates._coordinates
        for(var i=0; i<coordinates.length; i++){
            mtx.at(coordinates[i], i, 'someKey')
            try{
                assert.equal(mtx.get(coordinates[i]).data['someKey'], i)
            }catch{
                console.log(
                    'mtx:', mtx.coordinate1, mtx.coordinate2, mtx.get(coordinates[i]),
                    'm:', mtx.m, 
                    'assertion:', mtx.get(coordinates[i]).data['someKey'], '==', i
                )
                throw Error()
            }
        }
    }
}