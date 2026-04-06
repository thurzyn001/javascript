function calcularIMC() {
        const peso = document.getElementById('peso').value;
        const altura = document.getElementById('altura').value;
        const resultadoDiv = document.getElementById('resultado');

        if (peso !== '' && altura !== '') {
            const imc = (peso / (altura * altura)).toFixed(2);
            let classificacao = '';

            if (imc < 18.5) {
                classificacao = 'Abaixo do peso';
            } else if (imc < 25) {
                classificacao = 'Peso normal';
            } else if (imc < 30) {
                classificacao = 'Sobrepeso';
            } else {
                classificacao = 'Obesidade';
            }

            resultadoDiv.style.display = 'block';
            resultadoDiv.className = (imc >= 18.5 && imc < 25) ? 'sucesso' : 'alerta';
            resultadoDiv.innerHTML = `<strong>Seu IMC: ${imc}</strong><br>${classificacao}`;
            
        } else {
            alert('Por favor, preencha todos os campos!');
        }
    }