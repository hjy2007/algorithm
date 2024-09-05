function solution(absolutes, signs) {
    var answer = 0; 
    
    for (i = 0; i < absolutes.length; i++) {
        let a = absolutes[i]
        let b = signs[i]

        if (b === true) {
            answer += absolutes[i]
        } else {
            answer -= absolutes[i]
        }
    }

    return answer;
}