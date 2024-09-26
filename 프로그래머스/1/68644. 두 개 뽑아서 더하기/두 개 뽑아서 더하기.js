function solution(numbers) {
    let answer = []
    
    for (i = 0;i < numbers.length-1;i++) {
        for(j = i+1;j < numbers.length;j++) {
            let sum = numbers[i] + numbers[j]
            answer.push(sum)
        }
    }
    
    let setArr = new Set(answer)
    let answerarr = Array.from(setArr)
    
    return answerarr.sort((a,b) => a - b)
}