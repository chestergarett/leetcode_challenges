
const isPalindrome = (int) => {
    string = int.toString();
    reverseString = string.split('').reverse().join('')

    if(string==reverseString){
        return true
    }else{
        return false
    }
}

isPalindrome(-121)