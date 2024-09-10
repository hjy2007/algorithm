function solution(price, money, count) {    
    let totalprice = 0;
    for (i = 1;i <= count;i++) {
        totalprice += i * price
    }
    if (money - totalprice >= 0) {
        return 0
    } else {
        return totalprice - money
    }        
}