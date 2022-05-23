function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let min = 0;
    let max = 0;

    sortedArray = A.sort()
    
    min = sortedArray[0]
    max = sortedArray.slice(-1)

    let rangedArray = []

    for(let i=min; i<=max; i++){
        rangedArray.push(i)
    }

    let negativeInts = []
    A.forEach(x => {
        if(x<0){
            negativeInts.push(x)
        }
    });

    const result = rangedArray.filter(x => !sortedArray.includes(x))[0];
    
    if(negativeInts.length!==0){
        return 1
    }
    
    if(!result){
        return parseInt(max)+1
    }

    return result;

}

console.log(solution([-1,-3]))