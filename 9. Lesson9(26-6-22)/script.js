function fib(n){
    if(n == 1 || n == 2)
        return 1;
    return fib(n-1) + fib(n-2);
}

function foo(n){
    if(n == 1)
        return "hellow";
    else
        return foo(1) + "world";
}

function sum(n){
    if (n == 1) return 1;
    return sum(n-1) + n;
}

function aTimes(n){
    if(n == 1) 
        return "a";
    return aTimes(n-1) + "a";
}

let x = 7;


alert(sum(15));