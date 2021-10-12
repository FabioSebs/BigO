# :sparkles: :metal: Linear VS Binary :metal: :sparkles:

```javascript
//Writing array to file
const fs = require('fs')
let file = fs.createWriteStream('array.txt')
file.on('error', ()=>{console.log("error")})


let arr = []

let arrayGenerator = (amount) => {
    for (i=0; i<=amount; i++){
        arr.push(Math.floor(Math.random()*99))
    }
}
// Linear Search
let linearSearch = (arr, target, i) => {
    i = i || 0
    if (arr[i] == target) { return true }
    if (arr.length === 1) { return false }
    return linearSearch(arr.slice(1),target)
}
// Binary Search
const binarySearch = (arr, target, start, end) => {
    let mid = Math.floor((start+end)/2)
    if (start>end) {return false}
    if (arr[mid] == target) { return true }
    if (arr[mid] > target) { return binarySearch(arr, target, start, mid-1) } //searches left
    else { return binarySearch(arr, target, mid+1, end) } // searches right
}

//Creating Array
arrayGenerator(100)



//Searching Array Linearly
console.log(linearSearch(arr,80))
console.log(binarySearch(arr.sort((a,b)=>a-b), 80, 0, arr.length-1))

//Writing Array
arr.forEach((text)=>{ file.write(text + '\n') })
file.end()

//Testing Time
let testLinear = (label, arr, target) => {
	return new Promise((res,rej)=>{
		if (linearSearch(arr,target) === true) {
			console.time(label)
			res(label)
		}
		else {
			rej(": Number wasnt in the array")
		}
	})
}
let testBinary = (label, arr, target, start, mid) => {
	return new Promise((res,rej)=>{
		if (binarySearch(arr.sort((a,b)=>a-b),target,start,mid) === true) {
			console.time(label)
			res(label)
		}
		else {
			rej("Not in the array")
		}
	})
}

testLinear("Linear", arr, 80)
    .then((label)=>{console.timeEnd(label)})
    .catch((msg)=>{console.log("Linear" + msg)})

testBinary("Binary", arr, 80, 0, arr.length-1)
    .then((label)=>{console.timeEnd(label)})
    .catch((msg)=>{console.log("Binary: " + msg)})


```

# Explanation

### Writing
```javascript
//Writing array to file
const fs = require('fs')
let file = fs.createWriteStream('array.txt')
file.on('error', ()=>{console.log("error")})

//Use this line of code after you created your array
arr.forEach((text)=>{ file.write(text + '\n') })
file.end()
```

First we created a way to display the array being shown by using 
the fs *(filesystem module)* in javascript. 

### Arrays
```javascript
let arr = []

let arrayGenerator = (amount) => {
    for (i=0; i<=amount; i++){
        arr.push(Math.floor(Math.random()*99))
    }
}
```
Next up we made an empty array for later on so we can fill it with values. We also make a function that does exactly that.

### Linear Search
```javascript
// Linear Search
let linearSearch = (arr, target, i) => {
    i = i || 0
    if (arr[i] == target) { return true }
    if (arr.length === 1) { return false }
    return linearSearch(arr.slice(1),target)
}
```
Next we made our linear search recursively.
>Even though its recursive it doesnt mean it's O(logn)!

#### Binary Search
```javascript
// Binary Search
const binarySearch = (arr, target, start, end) => {
    let mid = Math.floor((start+end)/2)
    if (start>end) {return false}
    if (arr[mid] == target) { return true }
    if (arr[mid] > target) { return binarySearch(arr, target, start, mid-1) } //searches left
    else { return binarySearch(arr, target, mid+1, end) } // searches right
}
```
Then we made our binary search recursively.
>For Binary Search to work array has to be sorted!

### Test the algos
```javascript
//Creating Array
arrayGenerator(100)

//Searching Array Linearly
console.log(linearSearch(arr,80))
console.log(binarySearch(arr.sort((a,b)=>a-b), 80, 0, arr.length-1))

```
Next we create our array and show the boolean results with a console.log.


### Timing
```javascript
//Testing Time
let testLinear = (label, arr, target) => {
	return new Promise((res,rej)=>{
		if (linearSearch(arr,target) === true) {
			console.time(label)
			res(label)
		}
		else {
			rej(": Number wasnt in the array")
		}
	})
}
let testBinary = (label, arr, target, start, mid) => {
	return new Promise((res,rej)=>{
		if (binarySearch(arr.sort((a,b)=>a-b),target,start,mid) === true) {
			console.time(label)
			res(label)
		}
		else {
			rej("Not in the array")
		}
	})
}

testLinear("Linear", arr, 80)
    .then((label)=>{console.timeEnd(label)})
    .catch((msg)=>{console.log("Linear" + msg)})

testBinary("Binary", arr, 80, 0, arr.length-1)
    .then((label)=>{console.timeEnd(label)})
    .catch((msg)=>{console.log("Binary: " + msg)})

```
Using javascript we can time these functions asynchronously for more accurate timing. We do this by making two functions that return a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). They resolve the label for our console timer if the alorithm returns true. Later on we can call these promises and *.then* end the timer. 


# Last Weeks HW

# Problem 1
## Calculate and EXPLAIN the complexity of algorithm below:

\* 
F(n) = { 
count = 0      
FOR i = 1 to n DO
IF n MODULO i = 0 THEN
count = count + 1
END IF
END FOR
IF count = 2 THEN
RETURN PRIME
ELSE
RETURN NOT-PRIME
END IF
} 
\*

> Answer: The Complexity is O(n) because the complexity increases as n increases linearly

# Problem 2
## Calculate and EXPLAIN the complexity of algorithm below:

\* 
F(n) = F(n/3) +1
  with F(0) is 0
\*

> Answer: The Complexity is O(log base 3 of n) because this function is calling itself and is considered recursion. Most recursion functions are complexity of log base 2(n). The reason why the base is 3 is because n is being divided by 3. When you do binary search the complexity is log base 2 becuase n is being split in half or divided by TWO. So in this case it is 3 because of n being divided by THREE.

# Problem 3
## Calculate and EXPLAIN the complexity of function that calculate the n-th  Fibonacci number.
\*
F(n) = F(n-1) + F(n-2)
\*

> Answer: The Complexity is O(1.6180339887^n). The easy part is n because thats the number you give into the algorithm. The golden ratio is hard to explain because if we look at the call stack it resembles the fibonacci sequence itself. 

