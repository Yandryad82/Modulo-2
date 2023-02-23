const fibonacci = limit => {
    // completa la función fibonacci
    const fib = [0, 1];
    let suma = 1;
    while(suma <= limit){
      fib.push(suma);
      suma = fib[fib.length-1] + fib[fib.length-2];
    }
    return fib;
  }
  
  //console.log(fibonacci(21));

  const array = [0, 1, 1, 2, 3, 5, 8, 13];
  let largo = array[array.length-2];

  console.log(largo);