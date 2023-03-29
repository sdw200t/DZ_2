function primeNumbers(n) {
    var arr = new Array();
    for (let i = 2; i <= n; i++) { 
        var prime = true;
        for (let j = 2; j < i; j++) { 
            if (i % j == 0) prime = false;
        }
        if (prime == true) {
            arr.push(i);
        }
    }
    return arr;
}

console.log(primeNumbers(process.argv[2]));
