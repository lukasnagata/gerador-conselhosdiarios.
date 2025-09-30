const conselhos = [
    "Acredite em você mesmo.",
    "O primeiro passo é o mais importante.",
    "A persistência realiza o impossível.",
    "Aprenda algo novo hoje.",
    "Seja gentil com todos que encontrar."
];

console.log("Arquivo de script carregado. Array de conselhos pronto.");

// Seleciona os elementos do HTML
const conselhoTexto = document.getElementById("conselhoTexto");
const novoConselhoBtn = document.getElementById("novoConselhoBtn");

// Função para gerar conselho aleatório
function gerarConselho() {
    const indice = Math.floor(Math.random() * conselhos.length);
    conselhoTexto.textContent = conselhos[indice];
}

// Adiciona evento ao botão
novoConselhoBtn.addEventListener("click", gerarConselho);
