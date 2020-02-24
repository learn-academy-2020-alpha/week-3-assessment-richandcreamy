// ASSESSMENT 3: Coding Practical Questions


// --------------------1) Create a function that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

const fibTen = (n) => {
    if (n === 1) {
        return [0] 
    } else if (n === 2){
        return [1, 1]
    } else {
        var ansArr = fibTen(n - 1)
         ansArr.push(ansArr[ansArr.length -1] + ansArr[ansArr.length-2])
         return ansArr 
    }
}
console.log(fibTen(10))

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]
var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

const masterSort = (arr) => {
    let firstSort = arr.filter(x => typeof x === "number")
    let secondSort = firstSort.filter(num => num % 2 !== 0)
    let sortArr2 = secondSort.sort((a,b) => a-b)    
    return sortArr2
}
console.log(masterSort(fullArr1));
console.log(masterSort(fullArr2));

// --------------------3) Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

var middleLetters1 = "hello"
// Expected output: “l”
var middleLetters2 = "rhinoceros"
// Expected output: “oc”

const middle = (str) =>  {

let position
let length

    if(str.length % 2 == 1) {
        position = str.length / 2;
        length = 1;
    } else {
        position = str.length / 2 - 1;
        length = 2;
    }

return str.substring(position, position + length)
    
}

console.log(middle(middleLetters1))
console.log(middle(middleLetters2))

// --------------------4) Create a class to get the area of a sphere. Create three spheres with different radi as test cases. Area of a sphere =  4πr^2 (four pi r squared)

// describe ("sphereArea", () => {
//     test ("sphereArea will calculate the area of a sphere", () => {
//         expect(sphereArea(2)).toEqual((50.26548245743669))
//         expect(sphereArea(4)).toEqual((201.06192982974676))
//         expect(sphereArea(6)).toEqual((452.3893421169302))
// })
// })
// I totally over thought this question but I tested it using my week 1 jest install and it passed!

const sphereArea = (r) => {
    let power = Math.pow(r, 2)
    let formula = 4 * Math.PI * power
    return formula
}

console.log(sphereArea(2))
console.log(sphereArea(4))
console.log(sphereArea(6))

// --------------------5) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]
var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]
var numbersToAdd3 = []
// Expected output: []

// temp variable outside of the loop
// arugments.length?

const movingSum = (arr) =>{
    let start = 0
    let startArr = []
    for(let i = 0; i<arr.length; i++){
        start = arr[i]+ start 
        startArr.push(start)
    }
    return startArr
}

console.log(movingSum(numbersToAdd1))
console.log(movingSum(numbersToAdd2))
console.log(movingSum(numbersToAdd3))