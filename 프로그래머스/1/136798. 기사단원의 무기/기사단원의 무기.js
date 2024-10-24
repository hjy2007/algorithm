function solution(number, limit, power) {
    let result = 0;
    const knight = [];
    
    for (i = 1;i <= number;i++) {
        let count = 0;
        for (j = 1;j <= Math.floor(Math.sqrt(i));j++) {
            if (i%j === 0) {
                if (j*j === i) {
                    count++
                } else {
                    count = count + 2
                }
            }
        }
        if (count <= limit) {
            knight.push(count)
        } else {
            knight.push(power)
        }        
    }
    
    knight.forEach((a) => result += a)
    
    return result;
}