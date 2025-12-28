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

console.log(reverseString("Hello there"))
console.log(checkPalindrome("Hello there"))
console.log(checkPalindrome("level"))
console.log(checkPalindrome("madam"))
