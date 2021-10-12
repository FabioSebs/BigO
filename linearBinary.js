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
    if (arr[i] === target) { return true }
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
arr.forEach((text)=>{ file.write(text + '\n') })
file.end()


//Searching Array Linearly
console.log(linearSearch(arr,80))
console.log(binarySearch(arr, 80, 0, arr.length-1))

//Testing Time
let testLinear = (label, arr, target) => {
	return new Promise((res,rej)=>{
		if (linearSearch(arr,target) === true) {
			console.time(label)
			res(label)
		}
		else {
			rej("Number wasnt prime")
		}
	})
}
let testBinary = (label, arr, target, start, mid) => {
	return new Promise((res,rej)=>{
		if (binarySearch(arr,target,start,mid) === true) {
			console.time(label)
			res(label)
		}
		else {
			rej("Number wasnt prime")
		}
	})
}

testLinear("Linear", arr, 80)
    .then((label)=>{console.timeEnd(label)})
    .catch((msg)=>{console.log("Linear" + msg)})

testBinary("Binary", arr, 80, 0, arr.length-1)
    .then((label)=>{console.timeEnd(label)})
    .catch((msg)=>{console.log("Binary" + msg)})
