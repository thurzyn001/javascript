function calcular(n1, p1, n2, p2) {
    try {
        var resultado = ((n1 * p1) + (n2 * p2)) / (p1 + p2);
        alert("A média ponderada é: " + resultado.toFixed(2));
    } catch (err) {
        alert("Erro ao calcular: " + err.message);
    }
}

function handleSubmit(event) {
    event.preventDefault();

    var inputs = document.querySelectorAll(".myInput");

    var nota1 = parseFloat(inputs[0].value);
    var peso1 = parseFloat(inputs[1].value);
    var nota2 = parseFloat(inputs[2].value);
    var peso2 = parseFloat(inputs[3].value);

    calcular(nota1, peso1, nota2, peso2);
}

document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("calcForm");
    form.addEventListener("submit", handleSubmit);
});