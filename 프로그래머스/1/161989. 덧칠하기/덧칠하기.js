function solution(n, m, section) {
    let result = 0;
    
    // section[i] 보다 크고 section[i]+m 보다 작은 수를 section에서 slice한 뒤에
    // section[i]가 없으면 break하고    
    
    for (i = 0;i <= Math.floor(n/m);i++) {
        if (!section[0]) {
            break;
        }
        let endroll = section[0] + m - 1
        let count = 0
        for (j = 0;j < m;j++) {
            if (section[j] <= endroll) {
                count++               
            } else {
                break;
            }
        }
        section = section.slice(count)
        result++
    }
    
    return result;
}