function solution(k, m, score) {
    let totalscore = 0;
    let sortedscore = score.sort((a,b) => b-a)
    let box_count = Math.floor(score.length/m)
    
    for (i = 1;i <= box_count;i++) {
        let boxscore = sortedscore[m*i - 1] * m        
        totalscore += boxscore
    }
    
//     for (i = 0;i < box_count;i++) {
//         let box = sortedscore.slice(0,m)
//         let boxscore = box[m-1] * m
//         totalscore += boxscore
//         sortedscore = sortedscore.splice(m)
//     }
        
    return totalscore;
}