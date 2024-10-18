/
const arr1 = ["Cecile", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const combinedArr = arr1.concat(arr2);
console.log(combinedArr); 


const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
console.log(fruits); 


const array1 = [1, 2, 3];
array1.unshift(4, 5);
console.log(array1);


fruits.pop();
console.log(fruits); 

const array2 = [1, 2, 3];
array2.shift();
console.log(array2); 


fruits.sort();
console.log(fruits); 


const slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits); 

const months = ["January", "February", "March", "April"];
months.splice(2, 1, "June"); 
console.log(months);