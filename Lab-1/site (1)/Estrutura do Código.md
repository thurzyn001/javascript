## 1) Estrutura geral do HTML e como o JS se conecta

1. O arquivo `index.html` carrega o script com:
   ```html
   <script src="script.js"></script>
   ```
   Isso faz com que o navegador execute o código JavaScript após carregar o HTML.

2. O HTML tem elementos com `id` que o script usa para encontrar e manipular conteúdo:
   - `#entries` — onde as linhas de valores e pesos são colocadas.
   - `#addValueBtn` — botão que adiciona uma nova linha (valor + pesos).
   - `#calculateBtn` — botão que dispara o cálculo da média ponderada.
   - `#result` — onde o resultado do cálculo aparece.

---

## 2) O que o script faz (fluxo principal)

1. O script espera o carregamento completo do HTML com `DOMContentLoaded`.
2. Depois que a página está pronta, ele pega referências aos elementos HTML (por `getElementById`).
3. Define funções auxiliares para criar elementos dinâmicos (linha, peso) e para calcular a média.
4. Conecta eventos (`click`) nos botões para: adicionar linhas, adicionar pesos e calcular.
5. Permite remover pesos e valores usando um único listener combinado em `entries`.

---

## 3) O que cada parte do código faz (linha a linha, por processo)

### 3.1. `document.addEventListener("DOMContentLoaded", ...)`
1. **O que faz:** escuta o evento que indica que o HTML foi carregado.
2. **Por que é importante:** evita que o script tente acessar elementos que ainda não existem na página.
3. **Como funciona:** apenas após o HTML estar pronto o código dentro da função é executado.

### 3.2. Capturando elementos do HTML (variáveis iniciais)

```js
const entries = document.getElementById("entries");
const btnAddValue = document.getElementById("addValueBtn");
const btnCalculate = document.getElementById("calculateBtn");
const result = document.getElementById("result");
```

- **`const`**: palavra reservada para declarar uma variável cujo valor não será reatribuído. Mesmo assim, o conteúdo do objeto (como um elemento DOM) pode mudar.
- **`document.getElementById`**: função que retorna um elemento do HTML com o `id` informado.

### 3.3. Criar um campo de peso (`criarpeso`)

```js
function criarpeso() {
  const row = document.createElement("div");
  row.className = "peso-row";
  ...
  return row;
}
```

1. **`function`**: palavra reservada que define uma função.
2. **`document.createElement`**: cria um elemento HTML novo (aqui: `div`, `input`, `button`).
3. **`row.className`**: define a classe CSS do elemento (sem mudar o estilo, mas permitindo encontrá-lo depois).
4. A função retorna (`return`) o elemento montado.

### 3.4. Criar uma linha de valor (`criarLinha`)

1. Cria `div` que representa uma linha de cálculo.
2. Adiciona um `label` com o input de nota (`.valor`).
3. Adiciona um container de pesos (`.pesos`) que começa com 1 peso.
4. Cria botões para adicionar peso e remover a linha inteira.

### 3.5. Calcular a média ponderada (`calcularMedia`)

1. Seleciona todas as linhas criadas (`entries.querySelectorAll(".linha")`).
2. Para cada linha:
   - Lê o valor (nota) e converte com `parseFloat` (transforma texto em número).
   - Percorre todos os pesos dessa linha e soma.
   - Adiciona ao total ponderado: `valor * pesoTotal`.
   - Adiciona ao peso total geral.
3. Depois de percorrer tudo:
   - Se não houver peso total, exibe mensagem de erro.
   - Caso contrário, divide soma ponderada por soma dos pesos para obter a média.
4. Formata o resultado com `toFixed(2)` (duas casas) e mostra no elemento `#result`.

### 3.6. Eventos dos botões

#### Botão “Adicionar valor”
```js
btnAddValue.addEventListener("click", function () {
  entries.appendChild(criarLinha());
});
```
- **`addEventListener`**: adiciona um manipulador de evento (aqui, clique).
- **`appendChild`**: coloca o novo elemento dentro de `entries`.

#### Botão “Calcular média”
```js
btnCalculate.addEventListener("click", function () {
  calcularMedia();
});
```
- Chama a função de cálculo e atualiza o resultado.

#### Evento único para remoção/adicionar peso
```js
entries.addEventListener("click", function (event) {
  const target = event.target;
  if (target.matches(".btn-add-peso")) { ... }
  if (target.matches(".btn-remove-peso")) { ... }
  if (target.matches(".btn-remove-valor")) { ... }
});
```
- Este padrão permite "delegar" o evento para múltiplos botões sem precisar adicionar listener a cada um.
- **`event.target`** é o elemento que foi clicado.
- **`matches`** verifica se o elemento possui a classe escolhida.

---

## 4) Palavras reservadas usadas e o que significam

### `document`
Objeto global que representa a página HTML. Usado para criar elementos e buscar elementos existentes.

### `addEventListener` / `removeEventListener`
Métodos que adicionam/e retiram ouvintes (listeners) para eventos (como `click`).

### `function`
Declara uma função nomeada que pode ser chamada depois.

### `const`
Declara uma variável cujo identificador não pode ser reatribuído.

### `let` (não usado aqui, mas comum)
Semelhante a `const`, mas permite reatribuição.

### `return`
Faz a função parar e devolver um valor para quem chamou.

### `if`
Estrutura de decisão que executa um bloco de código apenas quando uma condição é verdadeira.

### `forEach`
Método de arrays que percorre cada elemento e chama uma função para cada item.

### `querySelector` / `querySelectorAll`
Buscam elementos dentro do HTML usando seletores CSS (classe, id, tipo, etc.).

### `parseFloat`
Converte uma string em número decimal.

### `Number.isNaN` / `Number.isNaN`
Verifica se um valor não é um número (`NaN`).

### `String(...)`
Converte um valor para string.

### `toFixed(2)`
Formata número com duas casas decimais.

---

## 5) Como estudar este código

1. Observe o HTML aberto no navegador e veja como os elementos são criados dinamicamente.
2. Use `console.log()` dentro das funções para ver o que o código está lendo (por exemplo, veja o valor de `valor` e de `pesoTotal`).
3. Tente remover ou modificar um botão e veja como o script se comporta.
