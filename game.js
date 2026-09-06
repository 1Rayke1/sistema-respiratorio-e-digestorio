// ============================================================
// ANATOMIA EM JOGO
// SISTEMA RESPIRATÓRIO E SISTEMA DIGESTÓRIO
// Desenvolvedor: Rayke Jovino de Souza
// ============================================================


// ============================================================
// VARIÁVEIS
// ============================================================

let sistemaAtual = null;
let modoAtual = null;
let perguntas = [];
let indiceAtual = 0;
let pontuacao = 0;
let respondeu = false;


// ============================================================
// EMBARALHAR
// ============================================================

function embaralhar(lista) {
  const copia = [...lista];

  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }

  return copia;
}


// ============================================================
// SISTEMA RESPIRATÓRIO
// CONTEÚDO DAS PÁGINAS 2 A 26
// ============================================================

const estruturasRespiratorio = [

  { id: "resp-01", nome: "Raiz", sistema: "respiratorio", pagina: 2 },
  { id: "resp-02", nome: "Dorso", sistema: "respiratorio", pagina: 2 },
  { id: "resp-03", nome: "Ápice", sistema: "respiratorio", pagina: 2 },

  { id: "resp-04", nome: "Asas", sistema: "respiratorio", pagina: 3 },
  { id: "resp-05", nome: "Base", sistema: "respiratorio", pagina: 3 },
  { id: "resp-06", nome: "Narina", sistema: "respiratorio", pagina: 3 },

  { id: "resp-07", nome: "Cavidade nasal", sistema: "respiratorio", pagina: 4 },
  { id: "resp-08", nome: "Abertura piriforme", sistema: "respiratorio", pagina: 4 },
  { id: "resp-09", nome: "Coanas", sistema: "respiratorio", pagina: 4 },

  { id: "resp-10", nome: "Concha nasal superior", sistema: "respiratorio", pagina: 5 },
  { id: "resp-11", nome: "Concha nasal média", sistema: "respiratorio", pagina: 5 },
  { id: "resp-12", nome: "Concha nasal inferior", sistema: "respiratorio", pagina: 5 },

  { id: "resp-13", nome: "Meato nasal superior", sistema: "respiratorio", pagina: 6 },
  { id: "resp-14", nome: "Meato nasal médio", sistema: "respiratorio", pagina: 6 },
  { id: "resp-15", nome: "Meato nasal inferior", sistema: "respiratorio", pagina: 6 },

  { id: "resp-16", nome: "Cavidade nasal", sistema: "respiratorio", pagina: 7 },
  { id: "resp-17", nome: "Epitélio olfatório", sistema: "respiratorio", pagina: 7 },
  { id: "resp-18", nome: "Nervo olfatório", sistema: "respiratorio", pagina: 7 },
  { id: "resp-19", nome: "Ducto nasolacrimal", sistema: "respiratorio", pagina: 7 },

  { id: "resp-20", nome: "Ducto nasolacrimal", sistema: "respiratorio", pagina: 8 },
  { id: "resp-21", nome: "Cavidade nasal", sistema: "respiratorio", pagina: 8 },

  { id: "resp-22", nome: "Seio frontal", sistema: "respiratorio", pagina: 9 },
  { id: "resp-23", nome: "Seio esfenoidal", sistema: "respiratorio", pagina: 9 },
  { id: "resp-24", nome: "Seios etmoidais", sistema: "respiratorio", pagina: 9 },
  { id: "resp-25", nome: "Seios maxilares", sistema: "respiratorio", pagina: 9 },

  { id: "resp-26", nome: "Tórus tubal", sistema: "respiratorio", pagina: 10 },
  { id: "resp-27", nome: "Óstio faríngeo da tuba auditiva", sistema: "respiratorio", pagina: 10 },
  { id: "resp-28", nome: "Faringe", sistema: "respiratorio", pagina: 10 },

  { id: "resp-29", nome: "Faringe", sistema: "respiratorio", pagina: 11 },
  { id: "resp-30", nome: "Nasofaringe", sistema: "respiratorio", pagina: 11 },
  { id: "resp-31", nome: "Orofaringe", sistema: "respiratorio", pagina: 11 },
  { id: "resp-32", nome: "Laringofaringe", sistema: "respiratorio", pagina: 11 },

  { id: "resp-33", nome: "Faringe", sistema: "respiratorio", pagina: 12 },
  { id: "resp-34", nome: "Tórus tubal", sistema: "respiratorio", pagina: 12 },
  { id: "resp-35", nome: "Óstio faríngeo da tuba auditiva", sistema: "respiratorio", pagina: 12 },
  { id: "resp-36", nome: "Tonsilas faríngeas", sistema: "respiratorio", pagina: 12 },

  { id: "resp-37", nome: "Epiglote", sistema: "respiratorio", pagina: 13 },
  { id: "resp-38", nome: "Prega vestibular", sistema: "respiratorio", pagina: 13 },
  { id: "resp-39", nome: "Prega vocal", sistema: "respiratorio", pagina: 13 },
  { id: "resp-40", nome: "Laringe", sistema: "respiratorio", pagina: 13 },

  { id: "resp-41", nome: "Epiglote", sistema: "respiratorio", pagina: 14 },
  { id: "resp-42", nome: "Prega vestibular", sistema: "respiratorio", pagina: 14 },
  { id: "resp-43", nome: "Prega vocal", sistema: "respiratorio", pagina: 14 },
  { id: "resp-44", nome: "Laringe", sistema: "respiratorio", pagina: 14 },

  { id: "resp-45", nome: "Cartilagem epiglótica", sistema: "respiratorio", pagina: 15 },
  { id: "resp-46", nome: "Cartilagem da tireóide", sistema: "respiratorio", pagina: 15 },
  { id: "resp-47", nome: "Cartilagem cricóide", sistema: "respiratorio", pagina: 15 },

  { id: "resp-48", nome: "Cartilagem corniculada", sistema: "respiratorio", pagina: 16 },
  { id: "resp-49", nome: "Cartilagem aritenóide", sistema: "respiratorio", pagina: 16 },
  { id: "resp-50", nome: "Cartilagem cricóide", sistema: "respiratorio", pagina: 16 },

  { id: "resp-51", nome: "Anéis cartilaginosos", sistema: "respiratorio", pagina: 17 },
  { id: "resp-52", nome: "Ligamentos anulares", sistema: "respiratorio", pagina: 17 },
  { id: "resp-53", nome: "Parede posterior da traquéia", sistema: "respiratorio", pagina: 17 },
  { id: "resp-54", nome: "Carina", sistema: "respiratorio", pagina: 17 },
  { id: "resp-55", nome: "Traquéia", sistema: "respiratorio", pagina: 17 },

  { id: "resp-56", nome: "Principal esquerdo", sistema: "respiratorio", pagina: 18 },
  { id: "resp-57", nome: "Principal direito", sistema: "respiratorio", pagina: 18 },
  { id: "resp-58", nome: "Bronquio lobar superior direito", sistema: "respiratorio", pagina: 18 },
  { id: "resp-59", nome: "Bronquio lobar médio direito", sistema: "respiratorio", pagina: 18 },
  { id: "resp-60", nome: "Bronquio lobar inferior direito", sistema: "respiratorio", pagina: 18 },

  { id: "resp-61", nome: "Principal direito", sistema: "respiratorio", pagina: 19 },
  { id: "resp-62", nome: "Bronquio lobar superior direito", sistema: "respiratorio", pagina: 19 },
  { id: "resp-63", nome: "Bronquio lobar médio direito", sistema: "respiratorio", pagina: 19 },
  { id: "resp-64", nome: "Bronquio lobar inferior direito", sistema: "respiratorio", pagina: 19 },

  { id: "resp-65", nome: "Bronquio lobar superior esquerdo", sistema: "respiratorio", pagina: 20 },
  { id: "resp-66", nome: "Bronquio lobar inferior esquerdo", sistema: "respiratorio", pagina: 20 },
  { id: "resp-67", nome: "Bronquio principal esquerdo", sistema: "respiratorio", pagina: 20 },

  { id: "resp-68", nome: "Bronquios segmentares", sistema: "respiratorio", pagina: 21 },
  { id: "resp-69", nome: "Bronquíolos", sistema: "respiratorio", pagina: 21 },

  { id: "resp-70", nome: "Lobo superior esq.", sistema: "respiratorio", pagina: 22 },
  { id: "resp-71", nome: "Lobo inferior esq.", sistema: "respiratorio", pagina: 22 },
  { id: "resp-72", nome: "Fissura oblíqua", sistema: "respiratorio", pagina: 22 },

  { id: "resp-73", nome: "Lobo superior dir.", sistema: "respiratorio", pagina: 23 },
  { id: "resp-74", nome: "Fissura horizontal", sistema: "respiratorio", pagina: 23 },
  { id: "resp-75", nome: "Lobo médio", sistema: "respiratorio", pagina: 23 },
  { id: "resp-76", nome: "Fissura oblíqua", sistema: "respiratorio", pagina: 23 },
  { id: "resp-77", nome: "Lobo inferior dir.", sistema: "respiratorio", pagina: 23 },

  { id: "resp-78", nome: "Base", sistema: "respiratorio", pagina: 24 },
  { id: "resp-79", nome: "Ápice", sistema: "respiratorio", pagina: 24 },

  { id: "resp-80", nome: "Faces costal", sistema: "respiratorio", pagina: 25 },
  { id: "resp-81", nome: "Face diafragmática", sistema: "respiratorio", pagina: 25 },
  { id: "resp-82", nome: "Face medial", sistema: "respiratorio", pagina: 25 },

  { id: "resp-83", nome: "Hilo pulmonar", sistema: "respiratorio", pagina: 26 }

];


// ============================================================
// SISTEMA DIGESTÓRIO
// CONTEÚDO DAS PÁGINAS 28 A 45
// ============================================================

const estruturasDigestorio = [

  { id: "dig-01", nome: "Lábio superior", sistema: "digestorio", pagina: 28 },
  { id: "dig-02", nome: "Lábio inferior", sistema: "digestorio", pagina: 28 },
  { id: "dig-03", nome: "Vestíbulo bucal", sistema: "digestorio", pagina: 28 },
  { id: "dig-04", nome: "Arcáda dentária", sistema: "digestorio", pagina: 28 },

  { id: "dig-05", nome: "Língua (musculatura intrínseca)", sistema: "digestorio", pagina: 29 },
  { id: "dig-06", nome: "Língua (musculatura extrínseca)", sistema: "digestorio", pagina: 29 },
  { id: "dig-07", nome: "Palato duro", sistema: "digestorio", pagina: 29 },
  { id: "dig-08", nome: "Palato mole", sistema: "digestorio", pagina: 29 },
  { id: "dig-09", nome: "Úvula palatina", sistema: "digestorio", pagina: 29 },
  { id: "dig-10", nome: "Rima labial", sistema: "digestorio", pagina: 29 },

  { id: "dig-11", nome: "Faringe", sistema: "digestorio", pagina: 30 },
  { id: "dig-12", nome: "Nasofaringe", sistema: "digestorio", pagina: 30 },
  { id: "dig-13", nome: "Orofaringe", sistema: "digestorio", pagina: 30 },
  { id: "dig-14", nome: "Laringofaringe", sistema: "digestorio", pagina: 30 },

  { id: "dig-15", nome: "Esôfago", sistema: "digestorio", pagina: 31 },

  { id: "dig-16", nome: "Pregas gástricas", sistema: "digestorio", pagina: 32 },
  { id: "dig-17", nome: "Óstio cárdico", sistema: "digestorio", pagina: 32 },
  { id: "dig-18", nome: "Óstio pilórico", sistema: "digestorio", pagina: 32 },

  { id: "dig-19", nome: "Região cardia", sistema: "digestorio", pagina: 33 },
  { id: "dig-20", nome: "Região pilórica", sistema: "digestorio", pagina: 33 },

  { id: "dig-21", nome: "Fundo do estômago", sistema: "digestorio", pagina: 34 },
  { id: "dig-22", nome: "Corpo do estômago", sistema: "digestorio", pagina: 34 },
  { id: "dig-23", nome: "Curvatura menor do estômago", sistema: "digestorio", pagina: 34 },
  { id: "dig-24", nome: "Curvatura maior do estômago", sistema: "digestorio", pagina: 34 },

  { id: "dig-25", nome: "Duodeno", sistema: "digestorio", pagina: 35 },
  { id: "dig-26", nome: "Ampola duodenal", sistema: "digestorio", pagina: 35 },
  { id: "dig-27", nome: "Pregas circulares do duodeno", sistema: "digestorio", pagina: 35 },
  { id: "dig-28", nome: "Flexura duodeno jejunal", sistema: "digestorio", pagina: 35 },

  { id: "dig-29", nome: "Jejuno", sistema: "digestorio", pagina: 36 },
  { id: "dig-30", nome: "Íleo", sistema: "digestorio", pagina: 36 },

  { id: "dig-31", nome: "Cecum", sistema: "digestorio", pagina: 37 },
  { id: "dig-32", nome: "Junção ileo-cecum-cólica", sistema: "digestorio", pagina: 37 },

  { id: "dig-33", nome: "Colo sigmóide", sistema: "digestorio", pagina: 38 },
  { id: "dig-34", nome: "Intestino grosso", sistema: "digestorio", pagina: 38 },
  { id: "dig-35", nome: "Colo ascendente", sistema: "digestorio", pagina: 38 },
  { id: "dig-36", nome: "Colo transverso", sistema: "digestorio", pagina: 38 },
  { id: "dig-37", nome: "Colo descendente", sistema: "digestorio", pagina: 38 },

  { id: "dig-38", nome: "Haustros", sistema: "digestorio", pagina: 39 },
  { id: "dig-39", nome: "Intestino grosso", sistema: "digestorio", pagina: 39 },
  { id: "dig-40", nome: "Apêndice vermiforme", sistema: "digestorio", pagina: 39 },
  { id: "dig-41", nome: "Canal retal", sistema: "digestorio", pagina: 39 },
  { id: "dig-42", nome: "Ânus", sistema: "digestorio", pagina: 39 },
  { id: "dig-43", nome: "Tênia", sistema: "digestorio", pagina: 39 },

  { id: "dig-44", nome: "Lobo direito", sistema: "digestorio", pagina: 40 },
  { id: "dig-45", nome: "Lobo esquerdo", sistema: "digestorio", pagina: 40 },
  { id: "dig-46", nome: "Lobo caudado", sistema: "digestorio", pagina: 40 },
  { id: "dig-47", nome: "Lobo quadrado", sistema: "digestorio", pagina: 40 },

  { id: "dig-48", nome: "Veia porta hepática", sistema: "digestorio", pagina: 41 },
  { id: "dig-49", nome: "Ligamento falciforme", sistema: "digestorio", pagina: 41 },
  { id: "dig-50", nome: "Artéria hepática própria", sistema: "digestorio", pagina: 41 },
  { id: "dig-51", nome: "Vesícula biliar", sistema: "digestorio", pagina: 41 },

  { id: "dig-52", nome: "Ducto cístico", sistema: "digestorio", pagina: 42 },
  { id: "dig-53", nome: "Ducto hepático direito", sistema: "digestorio", pagina: 42 },
  { id: "dig-54", nome: "Ducto hepático esquerdo", sistema: "digestorio", pagina: 42 },
  { id: "dig-55", nome: "Ducto hepático comum", sistema: "digestorio", pagina: 42 },
  { id: "dig-56", nome: "Ducto colédoco", sistema: "digestorio", pagina: 42 },
  { id: "dig-57", nome: "Ducto hepato pancreático", sistema: "digestorio", pagina: 42 },

  { id: "dig-58", nome: "Cabeça", sistema: "digestorio", pagina: 43 },
  { id: "dig-59", nome: "Corpo", sistema: "digestorio", pagina: 43 },
  { id: "dig-60", nome: "Cauda", sistema: "digestorio", pagina: 43 },
  { id: "dig-61", nome: "Ducto pancreático principal", sistema: "digestorio", pagina: 43 },
  { id: "dig-62", nome: "Ducto pancreático acessório", sistema: "digestorio", pagina: 43 },
  { id: "dig-63", nome: "Ducto pancreático", sistema: "digestorio", pagina: 43 },

  { id: "dig-64", nome: "Parótida", sistema: "digestorio", pagina: 44 },
  { id: "dig-65", nome: "Ducto da parótida", sistema: "digestorio", pagina: 44 },

  { id: "dig-66", nome: "Sublingual", sistema: "digestorio", pagina: 45 },
  { id: "dig-67", nome: "Submandibular", sistema: "digestorio", pagina: 45 }

];


// ============================================================
// TODAS AS ESTRUTURAS
// ============================================================

const estruturas = [
  ...estruturasRespiratorio,
  ...estruturasDigestorio
];


// ============================================================
// TROCAR DE TELA
// ============================================================

function mostrarTela(id) {

  document.querySelectorAll(".tela").forEach(tela => {
    tela.classList.remove("ativa");
  });

  const tela = document.getElementById(id);

  if (tela) {
    tela.classList.add("ativa");
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


// ============================================================
// SELECIONAR SISTEMA
// ============================================================

function selecionarSistema(sistema) {

  if (
    sistema !== "respiratorio" &&
    sistema !== "digestorio" &&
    sistema !== "ambos"
  ) {
    console.error("Sistema inválido:", sistema);
    return;
  }

  sistemaAtual = sistema;

  const titulo = document.getElementById("tituloSistema");

  if (titulo) {

    if (sistema === "respiratorio") {
      titulo.textContent = "Sistema Respiratório";
    }

    else if (sistema === "digestorio") {
      titulo.textContent = "Sistema Digestório";
    }

    else {
      titulo.textContent = "Sistema Respiratório e Digestório";
    }
  }

  mostrarTela("configuracao");
}


// ============================================================
// VOLTAR AO MENU
// ============================================================

function voltarMenu() {

  sistemaAtual = null;
  modoAtual = null;
  perguntas = [];
  indiceAtual = 0;
  pontuacao = 0;
  respondeu = false;

  mostrarTela("menu");
}


// ============================================================
// INICIAR JOGO
// ============================================================

function iniciarJogo(modo) {

  modoAtual = modo;

  if (!sistemaAtual) {
    sistemaAtual = "ambos";
  }

  let pool = [];

  if (sistemaAtual === "ambos") {

    pool = [...estruturas];

  }

  else {

    pool = estruturas.filter(
      item => item.sistema === sistemaAtual
    );
  }


  if (pool.length === 0) {

    console.error(
      "Nenhuma estrutura encontrada para:",
      sistemaAtual
    );

    return;
  }


  perguntas = embaralhar(pool);

  indiceAtual = 0;
  pontuacao = 0;
  respondeu = false;

  mostrarTela("jogo");

  carregarQuestao();
}


// ============================================================
// CARREGAR QUESTÃO
// ============================================================

function carregarQuestao() {

  if (indiceAtual >= perguntas.length) {
    mostrarResultado();
    return;
  }


  respondeu = false;

  const estrutura = perguntas[indiceAtual];


  const pergunta =
    document.getElementById("pergunta");

  const imagem =
    document.getElementById("imagemAnatomica");

  const semImagem =
    document.getElementById("semImagem");

  const marcador =
    document.getElementById("marcador");

  const feedback =
    document.getElementById("feedback");

  const proxima =
    document.getElementById("proxima");

  const contador =
    document.getElementById("contador");

  const pontos =
    document.getElementById("pontuacao");

  const progresso =
    document.getElementById("progresso");


  // CONTADOR

  if (contador) {

    contador.textContent =
      `Questão ${indiceAtual + 1} de ${perguntas.length}`;
  }


  // PONTUAÇÃO

  if (pontos) {

    pontos.textContent =
      `Pontos: ${pontuacao}`;
  }


  // PROGRESSO

  if (progresso) {

    const porcentagem =
      (indiceAtual / perguntas.length) * 100;

    progresso.style.width =
      `${porcentagem}%`;
  }


  // PERGUNTA

  if (pergunta) {

    const perguntasVariadas = [

      "Qual é a estrutura anatômica apresentada?",

      "Qual alternativa identifica corretamente a estrutura apresentada?",

      "Identifique a estrutura anatômica correspondente à imagem.",

      "Qual é o nome da estrutura apresentada no material?",

      "Que estrutura anatômica está sendo estudada nesta questão?"

    ];


    const perguntaEscolhida =
      perguntasVariadas[
        Math.floor(
          Math.random() *
          perguntasVariadas.length
        )
      ];


    pergunta.textContent =
      perguntaEscolhida;
  }


  // IMAGEM DO PDF

  if (imagem) {

    const numeroPagina =
      String(estrutura.pagina).padStart(2, "0");


    imagem.src =
      `pagina-${numeroPagina}.jpg`;


    imagem.alt =
      `Imagem anatômica da página ${estrutura.pagina} do PDF`;


    imagem.style.display =
      "block";
  }


  // SEM IMAGEM

  if (semImagem) {
    semImagem.style.display = "none";
  }


  // SEM SETA/MARCADOR ARTIFICIAL

  if (marcador) {
    marcador.style.display = "none";
  }


  // LIMPAR FEEDBACK

  if (feedback) {

    feedback.textContent = "";

    feedback.className =
      "feedback";
  }


  // ESCONDER PRÓXIMA

  if (proxima) {
    proxima.style.display = "none";
  }


  criarAlternativas(estrutura);
}


// ============================================================
// CRIAR ALTERNATIVAS
// ============================================================

function criarAlternativas(correta) {

  const container =
    document.getElementById("alternativas");


  if (!container) {
    return;
  }


  container.innerHTML = "";


  // OUTRAS ESTRUTURAS DO MESMO SISTEMA

  let outrasEstruturas =
    estruturas.filter(
      item =>
        item.sistema === correta.sistema &&
        item.id !== correta.id
    );


  // PRIORIZA ESTRUTURAS DE OUTRAS PÁGINAS

  const outrasPaginas =
    outrasEstruturas.filter(
      item =>
        item.pagina !== correta.pagina
    );


  if (outrasPaginas.length >= 3) {
    outrasEstruturas = outrasPaginas;
  }


  const erradas =
    embaralhar(outrasEstruturas)
      .slice(0, 3);


  const opcoes =
    embaralhar([
      correta,
      ...erradas
    ]);


  opcoes.forEach(opcao => {

    const botao =
      document.createElement("button");


    botao.type =
      "button";


    botao.textContent =
      opcao.nome;


    botao.dataset.id =
      opcao.id;


    botao.addEventListener(
      "click",
      function () {

        responder(
          opcao.id,
          correta.id,
          botao
        );

      }
    );


    container.appendChild(
      botao
    );

  });
}


// ============================================================
// RESPONDER
// ============================================================

function responder(
  idEscolhido,
  idCorreto,
  botao
) {

  if (respondeu) {
    return;
  }


  respondeu = true;


  const feedback =
    document.getElementById("feedback");

  const proxima =
    document.getElementById("proxima");


  const botoes =
    document.querySelectorAll(
      "#alternativas button"
    );


  botoes.forEach(
    botaoAtual => {
      botaoAtual.disabled = true;
    }
  );


  const correta =
    estruturas.find(
      item =>
        item.id === idCorreto
    );


  // ACERTOU

  if (idEscolhido === idCorreto) {

    pontuacao++;


    if (feedback) {

      feedback.textContent =
        "✅ Resposta correta!";

      feedback.className =
        "feedback correta";
    }


    if (botao) {

      botao.classList.add(
        "correta"
      );
    }

  }


  // ERROU

  else {

    if (feedback) {

      feedback.textContent =
        `❌ Resposta incorreta. A resposta correta é: ${correta.nome}`;

      feedback.className =
        "feedback incorreta";
    }


    if (botao) {

      botao.classList.add(
        "incorreta"
      );
    }


    botoes.forEach(
      botaoAtual => {

        if (
          botaoAtual.dataset.id ===
          idCorreto
        ) {

          botaoAtual.classList.add(
            "correta"
          );
        }

      }
    );
  }


  atualizarPontuacao();


  if (proxima) {

    proxima.style.display =
      "block";
  }
}


// ============================================================
// MOSTRAR RESPOSTA NO MODO ESTUDO
// ============================================================

function mostrarRespostaEstudo(correta) {

  if (respondeu) {
    return;
  }


  respondeu = true;


  const feedback =
    document.getElementById("feedback");

  const proxima =
    document.getElementById("proxima");


  if (feedback) {

    feedback.textContent =
      `Resposta: ${correta.nome}`;

    feedback.className =
      "feedback correta";
  }


  if (proxima) {

    proxima.style.display =
      "block";
  }
}


// ============================================================
// PRÓXIMA QUESTÃO
// ============================================================

function proximaQuestao() {

  indiceAtual++;

  respondeu = false;

  carregarQuestao();
}


// ============================================================
// ATUALIZAR PONTUAÇÃO
// ============================================================

function atualizarPontuacao() {

  const pontos =
    document.getElementById("pontuacao");


  if (pontos) {

    pontos.textContent =
      `Pontos: ${pontuacao}`;
  }
}


// ============================================================
// RESULTADO
// ============================================================

function mostrarResultado() {

  mostrarTela("resultado");


  const resultado =
    document.getElementById("resultadoPontuacao");


  if (resultado) {

    resultado.textContent =
      `Você acertou ${pontuacao} de ${perguntas.length} questões.`;
  }


  const progresso =
    document.getElementById("progresso");


  if (progresso) {

    progresso.style.width =
      "100%";
  }
}


// ============================================================
// SAIR DO JOGO
// ============================================================

function sairJogo() {

  sistemaAtual = null;
  modoAtual = null;
  perguntas = [];
  indiceAtual = 0;
  pontuacao = 0;
  respondeu = false;

  mostrarTela("menu");
}


// ============================================================
// JOGAR NOVAMENTE
// ============================================================

function jogarNovamente() {

  indiceAtual = 0;
  pontuacao = 0;
  respondeu = false;

  if (!sistemaAtual) {
    sistemaAtual = "ambos";
  }

  mostrarTela("configuracao");
}


// ============================================================
// INICIAR NO MENU
// ============================================================

document.addEventListener(
  "DOMContentLoaded",
  function () {

    mostrarTela("menu");

  }
);
