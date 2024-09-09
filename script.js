 function reverseString(str) {
    return str.split('').reverse().join('');
   }
  
   console.log(reverseString("hello"));






//M1:
 function countCharacters(str) {
     return str.length;
   }
  
   console.log(countCharacters("hello ")); 






//M2:
 function countCharacters(str){
    let count=0;
    let i=0;
    while(str[i]){
     count++;
     i++;
    }
    return count;

 }
 console.log(countCharacters("hello"));





      function findMax(arr) {
         return Math.max(...arr);
    }
  
    function findMin(arr) {
      return Math.min(...arr);
    }
  
    const numbers = [1, 3, 7, 2, 9];
    console.log(findMax(numbers)); 
    console.log(findMin(numbers)); 





        const array=[1,2,3,4,5]
         function sum(array){
             let sum=0;

         for(i=0 ; i<array.length ; i++){
             sum+=array[i];

         }
        return sum;
         }
         console.log(sum(array));





        
        function filterArray(arr, condition) {
            return arr.filter(condition);
          }
          
          
          
          console.log(filterArray(numbers, num => num > 3)); 





          
function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}


console.log(isPrime(5)); 
console.log(isPrime(8)); 





function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
  }
  
  console.log(factorial(10)); 






  function fibonacci(n) {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, n);
  }
  
  console.log(fibonacci(7));
  





  

          
        






  

    