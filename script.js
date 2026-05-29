/**
 * Lista de previsões estilo almanaque dos anos 80.
 * Usamos um Array (lista de itens) para guardar as frases.
 */
const previsoes = [
  "As estrelas avisam: 1986 reserva surpresas para os corajosos!",
  "Cuidado com despesas desnecessárias no mês de Outubro.",
  "O coração fala mais alto — ouça-o com sabedoria!",
  "Uma viagem inesperada trará alegrias duradouras.",
  "O Cometa Halley ilumina seu caminho rumo ao sucesso.",
  "Novos amigos surgirão com a chegada do outono.",
  "Evite decisões precipitadas durante a lua cheia.",
  "A saúde pede atenção — tome seu Biotônico Fontoura!",
  "Tempos de prosperidade se aproximam para os pacientes.",
  "Um segredo guardado logo será revelado — esteja preparado!",
  "As plantas te ouvem: fale com elas e colha bons frutos.",
  "O amor bate à porta — não deixe-o esperando!"
];


/**
 * Função: mostrarPrevisao()
 * 
 * Escolhe uma previsão aleatória do array e exibe
 * no elemento com id="previsao-texto".
 * 
 * Conceitos usados:
 * - Math.random(): gera número aleatório entre 0 e 1
 * - Math.floor(): arredonda para baixo (número inteiro)
 * - document.getElementById(): busca elemento no HTML
 */
function mostrarPrevisao() {

  // Gera um índice aleatório entre 0 e o tamanho do array
  const indiceAleatorio = Math.floor(Math.random() * previsoes.length);

  // Pega a previsão correspondente ao índice gerado
  const previsaoEscolhida = previsoes[indiceAleatorio];

  // Busca o elemento HTML onde o texto vai aparecer
  const elementoPrevisao = document.getElementById("previsao-texto");

  // Insere o texto no elemento encontrado
  elementoPrevisao.textContent = "✦ " + previsaoEscolhida + " ✦";
}


document.querySelectorAll(".signo-item").forEach(function(signo) {

  // Para cada elemento de signo, adiciona evento de clique
  signo.addEventListener("click", function() {

    // Remove a classe "selecionado" de todos os signos
    // (garante que apenas um fique destacado por vez)
    document.querySelectorAll(".signo-item").forEach(function(outro) {
      outro.classList.remove("signo-selecionado");
    });

    // Adiciona a classe "selecionado" no signo clicado
    this.classList.add("signo-selecionado");

    // Mostra uma previsão automaticamente ao selecionar um signo
    mostrarPrevisao();
  });
});


// console.log() exibe mensagens no console do navegador
// Para ver: F12 > aba "Console"
console.log("🌿 Bem-vindo ao Almanaque Biotônico Fontoura 1986!");
console.log("📖 Desenvolvido por Junior — Atividade AV2");
console.log("💡 Dica: Clique nos signos do horóscopo para interagir!");