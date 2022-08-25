
Array.prototype.myMap = function(callback){

    //since map produces a new array without changing the original array, we have to first define a new empty array that needs to be returned. 

    let newArray = [];

    //we have to check the length of the array so we defined the length by using the 'this' keyword
    let length = this.length;

    //we loop through the array up until its length and push the count, which takes each element(this[i]) and pushes them  into the new array

    for(let i = 0; i < length; i++){
      let count = callback(this[i])
      newArray.push(count)
    }
    return newArray
  }
  //example
  let that = [1, 2, 3]
  
  let add = that.myMap(a => a * 2)
  
  console.log(add)