function fizzBuzz(num1){
    num1 = parseInt(prompt("Dime un numero"))
    if(isNaN(num1) === true){
        console.log("Escribe un numero")
    }
    for(var i = 1; i <= num1; i++){
        if(i % 3 === 0 && i % 5 ===0){
            console.log("FizzBuzz");
        }else if(i % 5 === 0){
            console.log("Buzz");
        }else if(i % 3 === 0){
            console.log("Fizz");
        }else{
            console.log(i);
        }
    }}

fizzBuzz()