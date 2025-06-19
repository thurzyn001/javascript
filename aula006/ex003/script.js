var number1 = Number(prompt("Digite o primeiro número:"))
var number2 = Number(prompt("Digite o segundo número:"))
var add = number1 + number2
document.writeln(`A soma entre ${number1.toFixed(2).replace('.', ',')} e ${number2.toFixed(2).replace('.', ',')} é ${add.toFixed(2).replace('.', ',')}.`)