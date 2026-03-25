
document.addEventListener("DOMContentLoaded", function () {
  const entries = document.getElementById("entries");
  const btnAddValue = document.getElementById("addValueBtn");
  const btnCalculate = document.getElementById("calculateBtn");
  const result = document.getElementById("result");

  function criarpeso() {
    const row = document.createElement("div");
    row.className = "peso-row";

    const input = document.createElement("input");
    input.type = "number";
    input.step = "any";
    input.placeholder = "Peso";
    input.className = "peso";

    const btnRemove = document.createElement("button");
    btnRemove.type = "button";
    btnRemove.textContent = "Remover peso";
    btnRemove.className = "btn-remove-peso";

    row.appendChild(input);
    row.appendChild(btnRemove);
    return row;
  }

  function criarLinha() {
    const linha = document.createElement("div");
    linha.className = "linha";

    const label = document.createElement("label");
    label.textContent = "Valor: ";

    const inputValor = document.createElement("input");
    inputValor.type = "number";
    inputValor.step = "any";
    inputValor.placeholder = "Nota";
    inputValor.className = "valor";

    label.appendChild(inputValor);

    const pesos = document.createElement("div");
    pesos.className = "pesos";
    pesos.appendChild(criarpeso());

    const btnAddPeso = document.createElement("button");
    btnAddPeso.type = "button";
    btnAddPeso.textContent = "Adicionar peso";
    btnAddPeso.className = "btn-add-peso";

    const btnRemoveValor = document.createElement("button");
    btnRemoveValor.type = "button";
    btnRemoveValor.textContent = "Remover valor";
    btnRemoveValor.className = "btn-remove-valor";

    linha.appendChild(label);
    linha.appendChild(pesos);
    linha.appendChild(btnAddPeso);
    linha.appendChild(btnRemoveValor);

    return linha;
  }

  function calcularMedia() {
    const linhas = entries.querySelectorAll(".linha");
    let somaPesoTotal = 0;
    let somaPonderada = 0;

    linhas.forEach((linha) => {
      const valorInput = linha.querySelector(".valor");
      const valor = parseFloat(valorInput.value.replace(",", "."));
      if (Number.isNaN(valor)) return;

      const pesos = linha.querySelectorAll(".peso");
      let pesoTotal = 0;
      pesos.forEach((p) => {
        const peso = parseFloat(p.value.replace(",", "."));
        if (!Number.isNaN(peso)) {
          pesoTotal += peso;
        }
      });

      if (pesoTotal > 0) {
        somaPesoTotal += pesoTotal;
        somaPonderada += valor * pesoTotal;
      }
    });

    if (somaPesoTotal === 0) {
      result.textContent = "Informe pelo menos um valor e um peso (peso total deve ser maior que 0).";
      return;
    }

    const media = somaPonderada / somaPesoTotal;
    const mediaFormatada = String(media.toFixed(2)).replace(".", ",");
    const pesoFormatado = String(somaPesoTotal.toFixed(2)).replace(".", ",");

    result.textContent = `Média ponderada: ${mediaFormatada} (peso total: ${pesoFormatado})`;
  }

  btnAddValue.addEventListener("click", function () {
    entries.appendChild(criarLinha());
  });

  btnCalculate.addEventListener("click", function () {
    calcularMedia();
  });

  entries.addEventListener("click", function (event) {
    const target = event.target;

    if (target.matches(".btn-add-peso")) {
      const linha = target.closest(".linha");
      const pesos = linha.querySelector(".pesos");
      pesos.appendChild(criarpeso());
    }

    if (target.matches(".btn-remove-peso")) {
      const pesoRow = target.closest(".peso-row");
      pesoRow?.remove();
    }

    if (target.matches(".btn-remove-valor")) {
      const linha = target.closest(".linha");
      linha?.remove();
    }
  });

  // cria uma linha inicial
  entries.appendChild(criarLinha());

  const btnCalcularTeste = document.getElementById("calcularTeste");
  if (btnCalcularTeste) {
    btnCalcularTeste.addEventListener("click", function () {
      alert("pegar valor");
    });
  }
});
