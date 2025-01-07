function Sum(...nums){
    let res = 0;
    for(let i=0;i<nums.length;i++){
        res+=nums[i]
    }
    return res
}
console.log(Sum(1,2,3,4,5))