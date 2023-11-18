const readline = require('readline');

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

// Función para preguntar al usuario qué función desea ejecutar
function askUser() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("¿Qué función desea ejecutar? (power, getLargerInt, fibonacciSequence, calculateAverage)", function(selectedFunction) {
        switch (selectedFunction) {
            case "power":
                rl.question("Ingrese la base:", function(base) {
                    rl.question("Ingrese el exponente:", function(exponent) {
                        let resultado1 = power(parseInt(base), parseInt(exponent));
                        console.log(`El resultado de ${base} elevado a la potencia de ${exponent} es ${resultado1}`);
                        rl.close();
                    });
                });
                break;
            case "getLargerInt":
                rl.question("Ingrese el primer número:", function(number1) {
                    rl.question("Ingrese el segundo número:", function(number2) {
                        let resultado2 = getLargerInt(parseInt(number1), parseInt(number2));
                        console.log(`El número mayor entre ${number1} y ${number2} es ${resultado2}`);
                        rl.close();
                    });
                });
                break;
            case "fibonacciSequence":
                rl.question("Ingrese el límite de la secuencia de Fibonacci:", function(limit) {
                    let resultado3 = fibonacciSequence(parseInt(limit));
                    console.log(`Los primeros ${limit} números de la secuencia de Fibonacci son: ${resultado3}`);
                    rl.close();
                });
                break;
            case "calculateAverage":
                rl.question("Ingrese los números separados por comas:", function(numbers) {
                    let resultado4 = calculateAverage(numbers.split(",").map(Number));
                    console.log(`El promedio de los números ${numbers} es ${resultado4}`);
                    rl.close();
                });
                break;
            default:
                console.log("Función no válida.");
                rl.close();
                break;
        }
    });
}

// Llamar a la función para preguntar al usuario qué función desea ejecutar
askUser();

