#ifndef ARRAY_FILE
#define ARRAY_FILE
//This needs pointer arithmetic to utilize RAM addressing for constant time performance
struct Array{
    void * _arr;
    int size;
    char type[20];
};
#endif
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/

struct Array * array(int size, char* type);

//The at() method takes an integer value and returns the item at that index, allowing for positive 
//and negative integers. Negative integers count back from the last item in the array.
struct Array * at(struct Array * arr, int index);

//The concat() method is used to merge two or more arrays. This method does not change the existing 
//arrays, but instead returns a new array.
struct Array * concatArray(struct Array * arr,...);

//The Array.of() method creates a new Array instance from a variable number of arguments, regardless of 
//number or type of the arguments.
struct Array * of(struct Array * arr,...);

//The includes() method determines whether an array includes a certain value among its entries, returning true 
//or false as appropriate.
struct Array * includes(struct Array * arr, void * val);


//The indexOf() method returns the all indecies at which a given element can be found in the array, or -1 if it 
//is not present.
struct Array * allIndiciesOf(struct Array * arr, void * val);

//The join() method creates and returns a new string by concatenating all of the elements in an array 
//(or an array-like object), separated by commas or a specified separator string. If the array has only 
//one item, then that item will be returned without using the separator.
struct Array * join(struct Array * arr, char ch);


//The pop() method removes the last element from an array and returns that element. This method changes 
//the length of the array.
struct Array * pop(struct Array * arr);

//The push() method adds one or more elements to the end of an array and returns the new length of the array.
struct Array * push(struct Array * arr);

//The reverse() method reverses an array in place and returns the reference to the same array, the first array 
//element now becoming the last, and the last array element becoming the first. In other words, elements order 
//in the array will be turned towards the direction opposite to that previously stated.
struct Array * reverse(struct Array * arr);

//The shift() method removes the first element from an array and returns that removed element. This method 
//changes the length of the array.
struct Array * shift(struct Array * arr);

//The slice() method returns a shallow copy of a portion of an array into a new array object selected from start 
//to end (end not included) where start and end represent the index of items in that array. The original array 
//will not be modified.
struct Array * sliceArray(struct Array * arr, int index1, int index2);

struct Array * sort(struct Array * arr);

//The toString() method returns a string representing the specified array and its elements.
struct Array * toString(struct Array * arr);

//The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
struct Array * unshift(struct Array * arr, ...);