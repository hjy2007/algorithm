function solution(n) {
    let str = String(n)
    let arr = [...str]
    let m = arr.length    
    for (j=0;j<m;j++) {
        for (k=j+1;k<m;k++){            
            if (arr[k] > arr[j]) {                
                let temp = arr[j]
                arr[j] = arr[k]
                arr[k] = temp
            }
        }
    }
    let arr2 = arr.join('')
    arr2 = Number(arr2)
    return arr2
}