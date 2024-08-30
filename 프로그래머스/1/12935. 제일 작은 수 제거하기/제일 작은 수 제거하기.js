function solution(arr) {
    let answer = arr
    let min = 0;
    let mintime = 0;
    let i = 0
    if (arr.length > 1) {
         while (i<arr.length) {
            if (i === 0) {           
            min = arr[i]            
            mintime = i
            } else if (arr[i] < min) {
                min = arr[i]   
                mintime = i
            }            
            i++
        }     
    } else {
        return [-1]
    }
    answer.splice(mintime,1)
    
    return answer;
}