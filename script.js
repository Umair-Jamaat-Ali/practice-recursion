function add(num,num1){
    let adds = num + num1
    console.log(adds);
};

add(4,8);

add(76,90);

// function return

function multi(num2,num3){
    return num2 * num3
}

let product = multi(6,6);
console.log(product);
let multi1 =+ product * 2;
console.log(multi1);

let subs = multi1 - product;
console.log(subs);

/// Recoursion

function factorial(number) {
    if(number >1){
        return number * factorial(number - 1);
    }
    return 1
}


console.log(factorial(6));


/// an other example of factorial

function writeData(data, time) {
    document.write(data);
    if(time>0){
        writeData(data, time - 1);
    }
}
writeData("Hello World", 7);

/// Fibonacci sequence  
/// Fibonacci sequence ka matlab hai ke kisi number ko uske pehle do numbers ka sum banakar sequence banaya jaye, 
///jiske starting numbers 0 aur 1 hote hain. Aise numbers ka sequence hai 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89,

function fibonacci(n) {
    console.log(n);
    if(n<=1){
        return n
    }
    return fibonacci(n - 1) + fibonacci (n - 2);
        
};

fibonacci(3);
//// Computing power of a number

function powerOfNumber(base,exponent) {
let result = 1;
for ( index = 0 ; index < exponent; index++){
    result *= base
}
console.log(result);
};

powerOfNumber(2, 9);























