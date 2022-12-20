#include "Array.h"

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/

//The at() method takes an integer value and returns the item at that index, allowing for positive 
//and negative integers. Negative integers count back from the last item in the array.
struct Arr * at(struct Arr * arr, int index){

}

//The concat() method is used to merge two or more arrays. This method does not change the existing 
//arrays, but instead returns a new array.
struct Arr * concat(struct Arr * arr,...){

}

//The Array.of() method creates a new Array instance from a variable number of arguments, regardless of 
//number or type of the arguments.
struct Arr * of(struct Arr * arr,...){

}

//The includes() method determines whether an array includes a certain value among its entries, returning true 
//or false as appropriate.
struct Arr * includes(struct Arr * arr, void * val){

}


//The indexOf() method returns the all indecies at which a given element can be found in the array, or -1 if it 
//is not present.
struct Arr * allIndiciesOf(struct Arr * arr, void * val){

}

//The join() method creates and returns a new string by concatenating all of the elements in an array 
//(or an array-like object), separated by commas or a specified separator string. If the array has only 
//one item, then that item will be returned without using the separator.
struct Arr * join(struct Arr * arr, char ch){

}


//The pop() method removes the last element from an array and returns that element. This method changes 
//the length of the array.
struct Arr * pop(struct Arr * arr){

}

//The push() method adds one or more elements to the end of an array and returns the new length of the array.
struct Arr * push(struct Arr * arr){

}

//The reverse() method reverses an array in place and returns the reference to the same array, the first array 
//element now becoming the last, and the last array element becoming the first. In other words, elements order 
//in the array will be turned towards the direction opposite to that previously stated.
struct Arr * reverse(struct Arr * arr){

}

//The shift() method removes the first element from an array and returns that removed element. This method 
//changes the length of the array.
struct Arr * shift(struct Arr * arr){

}

//The slice() method returns a shallow copy of a portion of an array into a new array object selected from start 
//to end (end not included) where start and end represent the index of items in that array. The original array 
//will not be modified.
struct Arr * slice(struct Arr * arr, int index1, int index2){

}

struct Arr * sort(struct Arr * arr){

}

//The toString() method returns a string representing the specified array and its elements.
struct Arr * toString(struct Arr * arr){

}

//The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
struct Arr * unshift(struct Arr * arr, ...){
    
}

