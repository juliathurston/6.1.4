
/**
 The missing number problem
 Implement algorithm 1 here
*/


function missing1(A){
 let N = A.length + 1
 for(let i = 1; i <= N; i++){
   let found = false;
   let j = 0
   while(found===false && j < A.length){
     if(i ===A[j]){
       found=true
     }
     j++;
   }
   if(found===false) return i
 }
  
}

/**
The missing number problem
Implement algorithm 2 here
*/

function missing2(A){
  let N = A.length + 1
  let fullSum = N * (N+1)/2
  let sum = 0
  for(let i=0; i<A.length; i++){
    sum = sum + A[i]
  }
  return fullSum-sum
}


module.exports = {missing1, missing2}