function solution(s) {       
    // 공백으로 split하고
    // split 된 각 문자열의 짝수번째 문자를 toUpperCase()
    // 이후 다시 join    
    let arr = s.split(' ')
    for (i = 0;i < arr.length;i++) {
        let str = ''
        for (j = 0;j < arr[i].length;j++) {            
            if (j%2 === 0) {            
                str += arr[i][j].toUpperCase()                  
            } else {
                str += arr[i][j].toLowerCase()
            }           
        }
        arr[i] = str
    }
    arr.join(' ')
    return arr.join(' ')
}