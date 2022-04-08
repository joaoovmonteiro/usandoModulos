/* celsius-to-fahrenheit.js */
function celsiusToFahrenheit(celsius) {
    return celsius * (9/5) + 32;
    }
    const celsiusInput = process.argv[2]; // Pega a 3ª entrada de uma
    const fahrenheitValue = celsiusToFahrenheit(celsiusInput);
    console.log(`${celsiusInput} degrees Celsius = ${fahrenheitValue} degrees Fahrenheit`);