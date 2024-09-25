function solution(strings, n) {
    var answer = [];

    for (i = 0; i < strings.length; i++) {
        strings[i] = strings[i][n] + strings[i]        
    };
    
    strings.sort();

    for (i = 0; i < strings.length; i++) {
        strings[i] = strings[i].substr(1)
    };

    answer = strings

    return answer;
}