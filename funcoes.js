function getAge(birth_year) {
    return 2022 - birth_year;
}

module.exports.calculaIdade = getAge;

function getIMC(weight, height) {
    return (weight / height ** 2).toFixed(2)
}

module.exports.calculaIMC = getIMC;
