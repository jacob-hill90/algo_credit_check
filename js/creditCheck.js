exports.creditCheck = function(str) {
    let doubledNum = [], addedDoubles = []
    let strArr = str.split('')
    let finalCheck = 0
    for(let i = 0; i < strArr.length; i++){
        if(i % 2 === 0){
            doubledNum.push((strArr[i]*2).toString())
        }else doubledNum.push(strArr[i])
    }for(let j = 0; j < doubledNum.length; j++){
        if(doubledNum[j].length === 2){
            addedDoubles.push(+doubledNum[j][0] + +doubledNum[j][1])
        }else{addedDoubles.push(+doubledNum[j])}
    }for(let k of addedDoubles){
        finalCheck += k
    }
   if(finalCheck % 10 === 0){
       return "The number is valid!"
   }
   else return "The number is invalid!"
}