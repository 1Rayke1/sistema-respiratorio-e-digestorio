// ============================================================
// ANATOMIA EM JOGO
// Base de estruturas retirada do PDF
// SISTEMA RESPIRATÓRIO + SISTEMA DIGESTÓRIO
// Desenvolvedor: Rayke Jovino de Souza
// ============================================================

const estruturas = [

  // ==========================================================
  // SISTEMA RESPIRATÓRIO
  // ==========================================================

  { id:"resp-01", sistema:"respiratorio", nome:"Nariz externo", pagina:2 },
  { id:"resp-02", sistema:"respiratorio", nome:"Raiz", pagina:2 },
  { id:"resp-03", sistema:"respiratorio", nome:"Dorso", pagina:2 },
  { id:"resp-04", sistema:"respiratorio", nome:"Ápice", pagina:2 },

  { id:"resp-05", sistema:"respiratorio", nome:"Asas", pagina:3 },
  { id:"resp-06", sistema:"respiratorio", nome:"Base", pagina:3 },
  { id:"resp-07", sistema:"respiratorio", nome:"Narina", pagina:3 },
  { id:"resp-08", sistema:"respiratorio", nome:"Cavidade nasal", pagina:4 },

  { id:"resp-09", sistema:"respiratorio", nome:"Abertura piriforme", pagina:4 },
  { id:"resp-10", sistema:"respiratorio", nome:"Coanas", pagina:4 },

  { id:"resp-11", sistema:"respiratorio", nome:"Concha nasal superior", pagina:5 },
  { id:"resp-12", sistema:"respiratorio", nome:"Concha nasal média", pagina:5 },
  { id:"resp-13", sistema:"respiratorio", nome:"Concha nasal inferior", pagina:5 },

  { id:"resp-14", sistema:"respiratorio", nome:"Meato nasal superior", pagina:6 },
  { id:"resp-15", sistema:"respiratorio", nome:"Meato nasal médio", pagina:6 },
  { id:"resp-16", sistema:"respiratorio", nome:"Meato nasal inferior", pagina:6 },

  { id:"resp-17", sistema:"respiratorio", nome:"Epitélio olfatório", pagina:7 },
  { id:"resp-18", sistema:"respiratorio", nome:"Nervo olfatório", pagina:7 },
  { id:"resp-19", sistema:"respiratorio", nome:"Ducto nasolacrimal", pagina:7 },

  { id:"resp-20", sistema:"respiratorio", nome:"Seio frontal", pagina:9 },
  { id:"resp-21", sistema:"respiratorio", nome:"Seio esfenoidal", pagina:9 },
  { id:"resp-22", sistema:"respiratorio", nome:"Seios etmoidais", pagina:9 },
  { id:"resp-23", sistema:"respiratorio", nome:"Seios maxilares", pagina:9 },

  { id:"resp-24", sistema:"respiratorio", nome:"Tórus tubal", pagina:10 },
  { id:"resp-25", sistema:"respiratorio", nome:"Óstio faríngeo da tuba auditiva", pagina:10 },
  { id:"resp-26", sistema:"respiratorio", nome:"Faringe", pagina:10 },

  { id:"resp-27", sistema:"respiratorio", nome:"Nasofaringe", pagina:11 },
  { id:"resp-28", sistema:"respiratorio", nome:"Orofaringe", pagina:11 },
  { id:"resp-29", sistema:"respiratorio", nome:"Laringofaringe", pagina:11 },

  { id:"resp-30", sistema:"respiratorio", nome:"Tonsilas faríngeas", pagina:12 },

  { id:"resp-31", sistema:"respiratorio", nome:"Epiglote", pagina:13 },
  { id:"resp-32", sistema:"respiratorio", nome:"Prega vestibular", pagina:13 },
  { id:"resp-33", sistema:"respiratorio", nome:"Prega vocal", pagina:13 },
  { id:"resp-34", sistema:"respiratorio", nome:"Laringe", pagina:13 },

  { id:"resp-35", sistema:"respiratorio", nome:"Cartilagem epiglótica", pagina:15 },
  { id:"resp-36", sistema:"respiratorio", nome:"Cartilagem da tireóide", pagina:15 },
  { id:"resp-37", sistema:"respiratorio", nome:"Cartilagem cricóide", pagina:15 },

  { id:"resp-38", sistema:"respiratorio", nome:"Cartilagem corniculada", pagina:16 },
  { id:"resp-39", sistema:"respiratorio", nome:"Cartilagem aritenóide", pagina:16 },

  { id:"resp-40", sistema:"respiratorio", nome:"Anéis cartilaginosos", pagina:17 },
  { id:"resp-41", sistema:"respiratorio", nome:"Ligamentos anulares", pagina:17 },
  { id:"resp-42", sistema:"respiratorio", nome:"Parede posterior da traquéia", pagina:17 },
  { id:"resp-43", sistema:"respiratorio", nome:"Carina", pagina:17 },
  { id:"resp-44", sistema:"respiratorio", nome:"Traquéia", pagina:17 },

  { id:"resp-45", sistema:"respiratorio", nome:"Brônquio principal esquerdo", pagina:18 },
  { id:"resp-46", sistema:"respiratorio", nome:"Brônquio principal direito", pagina:18 },
  { id:"resp-47", sistema:"respiratorio", nome:"Brônquio lobar superior direito", pagina:18 },
  { id:"resp-48", sistema:"respiratorio", nome:"Brônquio lobar médio direito", pagina:18 },
  { id:"resp-49", sistema:"respiratorio", nome:"Brônquio lobar inferior direito", pagina:18 },

  { id:"resp-50", sistema:"respiratorio", nome:"Brônquio lobar superior esquerdo", pagina:20 },
  { id:"resp-51", sistema:"respiratorio", nome:"Brônquio lobar inferior esquerdo", pagina:20 },

  { id:"resp-52", sistema:"respiratorio", nome:"Brônquios segmentares", pagina:21 },
  { id:"resp-53", sistema:"respiratorio", nome:"Bronquíolos", pagina:21 },

  { id:"resp-54", sistema:"respiratorio", nome:"Lobo superior esquerdo", pagina:22 },
  { id:"resp-55", sistema:"respiratorio", nome:"Lobo inferior esquerdo", pagina:22 },
  { id:"resp-56", sistema:"respiratorio", nome:"Fissura oblíqua", pagina:22 },

  { id:"resp-57", sistema:"respiratorio", nome:"Lobo superior direito", pagina:23 },
  { id:"resp-58", sistema:"respiratorio", nome:"Fissura horizontal", pagina:23 },
  { id:"resp-59", sistema:"respiratorio", nome:"Lobo médio", pagina:23 },
  { id:"resp-60", sistema:"respiratorio", nome:"Lobo inferior direito", pagina:23 },

  { id:"resp-61", sistema:"respiratorio", nome:"Base", pagina:24 },
  { id:"resp-62", sistema:"respiratorio", nome:"Ápice", pagina:24 },

  { id:"resp-63", sistema:"respiratorio", nome:"Face costal", pagina:25 },
  { id:"resp-64", sistema:"respiratorio", nome:"Face diafragmática", pagina:25 },
  { id:"resp-65", sistema:"respiratorio", nome:"Face medial", pagina:25 },

  { id:"resp-66", sistema:"respiratorio", nome:"Hilo pulmonar", pagina:26 },


  // ==========================================================
  // SISTEMA DIGESTÓRIO
  // ==========================================================

  { id:"dig-01", sistema:"digestorio", nome:"Cavidade bucal", pagina:28 },
  { id:"dig-02", sistema:"digestorio", nome:"Lábio superior", pagina:28 },
  { id:"dig-03", sistema:"digestorio", nome:"Lábio inferior", pagina:28 },
  { id:"dig-04", sistema:"digestorio", nome:"Vestíbulo bucal", pagina:28 },
  { id:"dig-05", sistema:"digestorio", nome:"Arcada dentária", pagina:28 },

  { id:"dig-06", sistema:"digestorio", nome:"Língua (musculatura intrínseca)", pagina:29 },
  { id:"dig-07", sistema:"digestorio", nome:"Língua (musculatura extrínseca)", pagina:29 },
  { id:"dig-08", sistema:"digestorio", nome:"Palato duro", pagina:29 },
  { id:"dig-09", sistema:"digestorio", nome:"Palato mole", pagina:29 },
  { id:"dig-10", sistema:"digestorio", nome:"Úvula palatina", pagina:29 },
  { id:"dig-11", sistema:"digestorio", nome:"Rima labial", pagina:29 },

  { id:"dig-12", sistema:"digestorio", nome:"Faringe", pagina:30 },
  { id:"dig-13", sistema:"digestorio", nome:"Nasofaringe", pagina:30 },
  { id:"dig-14", sistema:"digestorio", nome:"Orofaringe", pagina:30 },
  { id:"dig-15", sistema:"digestorio", nome:"Laringofaringe", pagina:30 },

  { id:"dig-16", sistema:"digestorio", nome:"Esôfago", pagina:31 },

  { id:"dig-17", sistema:"digestorio", nome:"Estômago", pagina:32 },
  { id:"dig-18", sistema:"digestorio", nome:"Pregas gástricas", pagina:32 },
  { id:"dig-19", sistema:"digestorio", nome:"Óstio cárdico", pagina:32 },
  { id:"dig-20", sistema:"digestorio", nome:"Óstio pilórico", pagina:32 },

  { id:"dig-21", sistema:"digestorio", nome:"Região cárdia", pagina:33 },
  { id:"dig-22", sistema:"digestorio", nome:"Região pilórica", pagina:33 },

  { id:"dig-23", sistema:"digestorio", nome:"Fundo do estômago", pagina:34 },
  { id:"dig-24", sistema:"digestorio", nome:"Corpo do estômago", pagina:34 },
  { id:"dig-25", sistema:"digestorio", nome:"Curvatura menor do estômago", pagina:34 },
  { id:"dig-26", sistema:"digestorio", nome:"Curvatura maior do estômago", pagina:34 },

  { id:"dig-27", sistema:"digestorio", nome:"Intestino delgado", pagina:35 },
  { id:"dig-28", sistema:"digestorio", nome:"Duodeno", pagina:35 },
  { id:"dig-29", sistema:"digestorio", nome:"Ampola duodenal", pagina:35 },
  { id:"dig-30", sistema:"digestorio", nome:"Pregas circulares do duodeno", pagina:35 },
  { id:"dig-31", sistema:"digestorio", nome:"Flexura duodenojejunal", pagina:35 },

  { id:"dig-32", sistema:"digestorio", nome:"Jejuno", pagina:36 },
  { id:"dig-33", sistema:"digestorio", nome:"Íleo", pagina:36 },

  { id:"dig-34", sistema:"digestorio", nome:"Ceco", pagina:37 },
  { id:"dig-35", sistema:"digestorio", nome:"Junção ileo-ceco-cólica", pagina:37 },

  { id:"dig-36", sistema:"digestorio", nome:"Colo sigmóide", pagina:38 },
  { id:"dig-37", sistema:"digestorio", nome:"Intestino grosso", pagina:38 },
  { id:"dig-38", sistema:"digestorio", nome:"Colo ascendente", pagina:38 },
  { id:"dig-39", sistema:"digestorio", nome:"Colo transverso", pagina:38 },
  { id:"dig-40", sistema:"digestorio", nome:"Colo descendente", pagina:38 },

  { id:"dig-41", sistema:"digestorio", nome:"Haustros", pagina:39 },
  { id:"dig-42", sistema:"digestorio", nome:"Apêndice vermiforme", pagina:39 },
  { id:"dig-43", sistema:"digestorio", nome:"Canal retal", pagina:39 },
  { id:"dig-44", sistema:"digestorio", nome:"Ânus", pagina:39 },
  { id:"dig-45", sistema:"digestorio", nome:"Tênia", pagina:39 },

  { id:"dig-46", sistema:"digestorio", nome:"Fígado", pagina:40 },
  { id:"dig-47", sistema:"digestorio", nome:"Lobo direito", pagina:40 },
  { id:"dig-48", sistema:"digestorio", nome:"Lobo esquerdo", pagina:40 },
  { id:"dig-49", sistema:"digestorio", nome:"Lobo caudado", pagina:40 },
  { id:"dig-50", sistema:"digestorio", nome:"Lobo quadrado", pagina:40 },

  { id:"dig-51", sistema:"digestorio", nome:"Veia porta hepática", pagina:41 },
  { id:"dig-52", sistema:"digestorio", nome:"Ligamento falciforme", pagina:41 },
  { id:"dig-53", sistema:"digestorio", nome:"Artéria hepática própria", pagina:41 },
  { id:"dig-54", sistema:"digestorio", nome:"Vesícula biliar", pagina:41 },

  { id:"dig-55", sistema:"digestorio", nome:"Ductos biliares", pagina:42 },
  { id:"dig-56", sistema:"digestorio", nome:"Ducto cístico", pagina:42 },
  { id:"dig-57", sistema:"digestorio", nome:"Ducto hepático direito", pagina:42 },
  { id:"dig-58", sistema:"digestorio", nome:"Ducto hepático esquerdo", pagina:42 },
  { id:"dig-59", sistema:"digestorio", nome:"Ducto hepático comum", pagina:42 },
  { id:"dig-60", sistema:"digestorio", nome:"Ducto colédoco", pagina:42 },
  { id:"dig-61", sistema:"digestorio", nome:"Ducto hepatopancreático", pagina:42 },

  { id:"dig-62", sistema:"digestorio", nome:"Pâncreas", pagina:43 },
  { id:"dig-63", sistema:"digestorio", nome:"Cabeça do pâncreas", pagina:43 },
  { id:"dig-64", sistema:"digestorio", nome:"Corpo do pâncreas", pagina:43 },
  { id:"dig-65", sistema:"digestorio", nome:"Cauda do pâncreas", pagina:43 },
  { id:"dig-66", sistema:"digestorio", nome:"Ducto pancreático principal", pagina:43 },
  { id:"dig-67", sistema:"digestorio", nome:"Ducto pancreático acessório", pagina:43 },
  { id:"dig-68", sistema:"digestorio", nome:"Ducto pancreático", pagina:43 },

  { id:"dig-69", sistema:"digestorio", nome:"Glândulas salivares", pagina:44 },
  { id:"dig-70", sistema:"digestorio", nome:"Parótida", pagina:44 },
  { id:"dig-71", sistema:"digestorio", nome:"Ducto da parótida", pagina:44 },

  { id:"dig-72", sistema:"digestorio", nome:"Sublingual", pagina:45 },
  { id:"dig-73", sistema:"digestorio", nome:"Submandibular", pagina:45 }
];


// ============================================================
// ESTADO
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
// MOSTRAR TELA
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
  sistemaAtual = sistema;

  const titulo = document.getElementById("tituloSistema");

  if (titulo) {
    titulo.textContent =
      sistema === "respiratorio"
        ? "Sistema Respiratório"
        : "Sistema Digestório";
  }

  mostrarTela("configuracao");
}


// ============================================================
// VOLTAR AO MENU
// ============================================================

function voltarMenu() {
  sistemaAtual = null;
  modoAtual = null;

  mostrarTela("menu");
}


// ============================================================
// INICIAR JOGO
// ============================================================

function iniciarJogo(modo) {

  if (!sistemaAtual) {
    return;
  }

  modoAtual = modo;

  const pool = estruturas.filter(
    item => item.sistema === sistemaAtual
  );

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


  // Contador

  if (contador) {
    contador.textContent =
      `Questão ${indiceAtual + 1} de ${perguntas.length}`;
  }


  // Pontuação

  if (pontos) {
    pontos.textContent =
      `Pontos: ${pontuacao}`;
  }


  // Progresso

  if (progresso) {

    const porcentagem =
      (indiceAtual / perguntas.length) * 100;

    progresso.style.width =
      `${porcentagem}%`;
  }


  // Pergunta

  if (pergunta) {

    if (modoAtual === "estudar") {

      pergunta.textContent =
        "Estude a estrutura apresentada no material.";

    } else {

      pergunta.textContent =
        "Qual é a estrutura anatômica indicada?";
    }
  }


// ============================================================
// IMAGEM DO PDF
// ============================================================

if (imagem) {

  const numeroPagina = String(estrutura.pagina).padStart(2, "0");

  imagem.src = `pagina-${numeroPagina}.jpg`;
  imagem.alt = `Imagem anatômica - página ${estrutura.pagina} do PDF`;
  imagem.style.display = "block";

}

if (semImagem) {

  semImagem.style.display = "none";

}

  // Marcador

  if (marcador) {
    marcador.style.display = "none";
  }


  // Feedback

  if (feedback) {

    feedback.textContent = "";

    feedback.className = "feedback";
  }


  // Próxima

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


  // MODO ESTUDAR

  if (modoAtual === "estudar") {

    const botao =
      document.createElement("button");

    botao.textContent =
      correta.nome;

    botao.addEventListener(
      "click",
      () => mostrarRespostaEstudo(correta)
    );

    container.appendChild(botao);

    return;
  }


  // Alternativas do mesmo sistema

  const outras =
    estruturas.filter(
      item =>
        item.sistema === correta.sistema &&
        item.id !== correta.id
    );


  const erradas =
    embaralhar(outras).slice(0, 3);


  const opcoes =
    embaralhar([
      correta,
      ...erradas
    ]);


  opcoes.forEach(opcao => {

    const botao =
      document.createElement("button");

    botao.textContent =
      opcao.nome;

    botao.dataset.id =
      opcao.id;

    botao.addEventListener(
      "click",
      () =>
        responder(
          opcao.id,
          correta.id,
          botao
        )
    );

    container.appendChild(botao);
  });
}


// ============================================================
// RESPONDER
// ============================================================

function responder(
  idEscolhido,
  idCorreto,
  botaoEscolhido
) {

  if (respondeu) {
    return;
  }

  respondeu = true;


  const feedback =
    document.getElementById("feedback");


  const botoes =
    document.querySelectorAll(
      "#alternativas button"
    );


  botoes.forEach(botao => {

    botao.disabled = true;

    if (botao.dataset.id === idCorreto) {
      botao.classList.add("correta");
    }
  });


  if (idEscolhido === idCorreto) {

    pontuacao++;

    botaoEscolhido.classList.add(
      "correta"
    );

    if (feedback) {

      feedback.textContent =
        "✅ Resposta correta!";

      feedback.className =
        "feedback correto";
    }

  } else {

    botaoEscolhido.classList.add(
      "errada"
    );

    const estrutura =
      estruturas.find(
        item => item.id === idCorreto
      );

    if (feedback) {

      feedback.textContent =
        `❌ Resposta incorreta. A resposta correta é: ${estrutura.nome}.`;

      feedback.className =
        "feedback errado";
    }
  }


  atualizarPontuacao();


  const proxima =
    document.getElementById("proxima");

  if (proxima) {
    proxima.style.display =
      "inline-block";
  }
}


// ============================================================
// MODO ESTUDAR
// ============================================================

function mostrarRespostaEstudo(
  estrutura
) {

  const feedback =
    document.getElementById("feedback");

  if (feedback) {

    feedback.textContent =
      `📚 Estrutura: ${estrutura.nome} | Página do material: ${estrutura.pagina}`;

    feedback.className =
      "feedback correto";
  }


  const botoes =
    document.querySelectorAll(
      "#alternativas button"
    );


  botoes.forEach(
    botao => botao.disabled = true
  );


  respondeu = true;


  const proxima =
    document.getElementById("proxima");

  if (proxima) {
    proxima.style.display =
      "inline-block";
  }
}


// ============================================================
// PRÓXIMA QUESTÃO
// ============================================================

function proximaQuestao() {

  indiceAtual++;

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


  const porcentagem =
    perguntas.length > 0
      ? Math.round(
          (pontuacao / perguntas.length) * 100
        )
      : 0;


  const campo =
    document.getElementById("porcentagem");


  const mensagem =
    document.getElementById(
      "mensagemResultado"
    );


  if (campo) {
    campo.textContent =
      `${porcentagem}%`;
  }


  if (mensagem) {

    if (porcentagem >= 90) {

      mensagem.textContent =
        "Excelente! Você está dominando o conteúdo.";

    } else if (porcentagem >= 70) {

      mensagem.textContent =
        "Muito bom! Continue estudando.";

    } else if (porcentagem >= 50) {

      mensagem.textContent =
        "Bom trabalho! Revise algumas estruturas.";

    } else {

      mensagem.textContent =
        "É importante revisar o conteúdo e tentar novamente.";
    }
  }


  const progresso =
    document.getElementById("progresso");

  if (progresso) {
    progresso.style.width =
      "100%";
  }
}


// ============================================================
// SAIR
// ============================================================

function sairJogo() {

  modoAtual = null;
  perguntas = [];
  indiceAtual = 0;
  pontuacao = 0;
  respondeu = false;

  mostrarTela("configuracao");
}


// ============================================================
// JOGAR NOVAMENTE
// ============================================================

function jogarNovamente() {

  if (!sistemaAtual || !modoAtual) {

    voltarMenu();

    return;
  }

  iniciarJogo(modoAtual);
}


// ============================================================
// INICIALIZAÇÃO
// ============================================================

document.addEventListener(
  "DOMContentLoaded",
  () => {

    mostrarTela("menu");

  }
);
