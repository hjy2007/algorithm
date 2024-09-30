function solution(k, score) {
    var answer = [];
    
    let honor = [];
    for (i = 0;i < score.length;i++) {
        honor.push(score[i])
        honor.sort((a,b)=>b-a)
        if(i < k) {
            answer.push(honor[i])
        } else {
            answer.push(honor[k-1])
        }
    }
    
    return answer;
}