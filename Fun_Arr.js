// Función para elevar una base a una potencia
function power(base, exponent) {
    return Math.pow(base, exponent);
}

// Función para obtener el número mayor entre dos números
function getLargerInt(number1, number2) { 
    if (number1 > number2) {
        return number1;
    } else {
        return number2;
    }
}

// Función para generar una secuencia de Fibonacci
function fibonacciSequence(limit) { 
    let sequence = [0, 1];
    for (let i = 2; i < limit; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    return sequence;
}

// Función para calcular el promedio de un arreglo de números
function calculateAverage(numbers) { 
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}

// Llamar a las funciones con los datos ingresados por el usuario
let resultado1 = power(base, exponent);
let resultado2 = getLargerInt(number1, number2);
let resultado3 = fibonacciSequence(limit);
let resultado4 = calculateAverage(numbers);

// Imprimir los resultados
console.log(`El resultado de ${base} elevado a la potencia de ${exponent} es ${resultado1}`);
console.log(`El número mayor entre ${number1} y ${number2} es ${resultado2}`);
console.log(`Los primeros ${limit} números de la secuencia de Fibonacci son: ${resultado3}`);
console.log(`El promedio de los números ${numbers} es ${resultado4}`);
