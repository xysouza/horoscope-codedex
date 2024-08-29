let mesNascimento = "Agosto";

const previsoes = [
    "Hoje é um ótimo dia para novas oportunidades!",
    "Prepare-se para um desafio inesperado.",
    "Você encontrará inspiração em lugares improváveis.",
    "Uma boa notícia está a caminho.",
    "Confie em seus instintos hoje.",
];

function gerarPrevisao() {
    return previsoes[Math.floor(Math.random() * previsoes.length)];
}

let signo;
if (mesNascimento === "Janeiro") {
    signo = "♑ Capricórnio";
} else if (mesNascimento === "Fevereiro") {
    signo = "♒ Aquário";
} else if (mesNascimento === "Março") {
    signo = "♓ Peixes";
} else if (mesNascimento === "Abril") {
    signo = "♈ Áries";
} else if (mesNascimento === "Maio") {
    signo = "♉ Touro";
} else if (mesNascimento === "Junho") {
    signo = "♊ Gêmeos";
} else if (mesNascimento === "Julho") {
    signo = "♋ Câncer";
} else if (mesNascimento === "Agosto") {
    signo = "♌ Leão";
} else if (mesNascimento === "Setembro") {
    signo = "♍ Virgem";
} else if (mesNascimento === "Outubro") {
    signo = "♎ Libra";
} else if (mesNascimento === "Novembro") {
    signo = "♏ Escorpião";
} else if (mesNascimento === "Dezembro") {
    signo = "♐ Sagitário";
} else {
    console.log("Mês inválido. Por favor, insira um mês válido.");
    signo = null; 
}

if (signo) {
    console.log("Signo: " + signo);
    for (let i = 0; i < 3; i++) {
        console.log("Previsão " + (i + 1) + ": " + gerarPrevisao());
    }
}
