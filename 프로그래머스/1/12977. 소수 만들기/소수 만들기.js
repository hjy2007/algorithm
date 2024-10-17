function solution(nums) {
    let count = 0;
    
    function isPrime(num) {
  
  if(num === 2) {
    return true;
  }
  
  for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++){
    if(num % i === 0){
      // 한 번이라도 나누어 졌으니 소수가 아니므로 return false
      return false; 
    }
  }
  // 나눠진 수가 없다면 해당 수는 소수이므로 return true
  return true; 
}
    
    for (i = 0;i<nums.length-2;i++) {
        for (j = i+1;j<nums.length-1;j++) {
            for (k = j+1;k<nums.length;k++) {
                let sum = nums[i] + nums[j] + nums[k]
                if (isPrime(sum)) {
                    count++
                }
            }
        }
    }
    
    // 세 숫자를 합해서 그게 소수면 count++
    
    return count;
}