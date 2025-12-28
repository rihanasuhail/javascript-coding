function reverseString(str) {
    let revString = ""
    for (let i=str.length - 1; i>=0; i--) {
        revString = revString + str[i]
    }
    return revString
}

function checkPalindrome(str) {
    let revString = ""
    for (let i=str.length - 1; i>=0; i--) {
        revString = revString + str[i]
    }
    if (revString === str){ return true }
    else { return false}
}

function largestNumberInArray(arr){
    let largest = arr[0]
    for (let i=1; i<arr.length; i++){
        if (arr[i]> largest) {
            largest = arr[i]
        } 
    }
    return largest
}

console.log(reverseString("hello"))
console.log(reverseString("Rihana"))
console.log(reverseString("a"))
console.log(reverseString(""))
console.log(reverseString("12345"))
console.log(reverseString("hello world"))
console.log(reverseString("!@#$$#@!"))


console.log(checkPalindrome("madam"))
console.log(checkPalindrome("racecar"))
console.log(checkPalindrome("abba"))
console.log(checkPalindrome("hello"))
console.log(checkPalindrome("a"))
console.log(checkPalindrome(""))
console.log(checkPalindrome("Madam"))
console.log(checkPalindrome("madam "))
console.log(checkPalindrome("12321"))

console.log(largestNumberInArray([1, 2, 3, 4, 5]))
console.log(largestNumberInArray([5, 4, 3, 2, 1]))
console.log(largestNumberInArray([7]))
console.log(largestNumberInArray([-1, -5, -3]))
console.log(largestNumberInArray([1, 5, 5, 3]))
console.log(largestNumberInArray([0, -1, 10, 3]))
console.log(largestNumberInArray([Number.MIN_SAFE_INTEGER, 0]))
console.log(largestNumberInArray([100, 200, 300]))

