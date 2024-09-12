function solution(n, m) {
    let answer = [];
    
    // n < m 조건이 없네
    // 최대공약수
    // for 문돌려서 %0 이 되는 숫자 입력하다가 제일 높은 수 하면 되고
    for (i = 1;i <= n;i++) {
        if (n%i === 0 && m%i === 0) {
            answer[0] = i
        }
    }
    
    // 공배수 n*m /
    // 둘중 큰 수부터 for 문 돌려서 가장 빠르게 %0되는 값 찾아도 되기는 하는데
    // 공식이 있을거 같은데~
    answer[1] = n*m/answer[0]
    
    return answer;
}