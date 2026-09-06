// ======================================================
// ANATOMIA EM JOGO
// Desenvolvedor: Rayke Jovino de Souza
// Sistemas: Respiratório e Digestório
// ======================================================

const estruturas = [
  // =========================
  // SISTEMA RESPIRATÓRIO
  // =========================
  {
    id: "nariz-respiratorio",
    sistema: "respiratorio",
    nome: "Nariz",
    imagem: "assets/respiratorio/nariz.jpg",
    descricao: "Participa da entrada, filtração, umidificação e aquecimento do ar."
  },
  {
    id: "faringe-respiratorio",
    sistema: "respiratorio",
    nome: "Faringe",
    imagem: "assets/respiratorio/faringe.jpg",
    descricao: "É um canal que participa da passagem do ar em direção à laringe."
  },
  {
    id: "laringe",
    sistema: "respiratorio",
    nome: "Laringe",
    imagem: "assets/respiratorio/laringe.jpg",
    descricao: "Conduz o ar e participa da produção da voz."
  },
  {
    id: "traqueia",
    sistema: "respiratorio",
    nome: "Traqueia",
    imagem: "assets/respiratorio/traqueia.jpg",
    descricao: "Conduz o ar da laringe em direção aos brônquios."
  },
  {
    id: "bronquios",
    sistema: "respiratorio",
    nome: "Brônquios",
    imagem: "assets/respiratorio/bronquios.jpg",
    descricao: "São ramificações que conduzem o ar para os pulmões."
  },
  {
    id: "pulmoes",
    sistema: "respiratorio",
    nome: "Pulmões",
    imagem: "assets/respiratorio/pulmoes.jpg",
    descricao: "Órgãos responsáveis pelas trocas gasosas entre o ar e o sangue."
  },
  {
    id: "diafragma",
    sistema: "respiratorio",
    nome: "Diafragma",
    imagem: "assets/respiratorio/diafragma.jpg",
    descricao: "Músculo importante para os movimentos respiratórios."
  },

  // =========================
  // SISTEMA DIGESTÓRIO
  // =========================
  {
    id: "boca",
    sistema: "digestorio",
    nome: "Boca",
    imagem: "assets/digestorio/boca.jpg",
    descricao: "É a entrada do sistema digestório e participa da mastigação e da digestão."
  },
  {
    id: "faringe-digestorio",
    sistema: "digestorio",
    nome: "Faringe",
    imagem: "assets/digestorio/faringe.jpg",
    descricao: "Participa da passagem do alimento da boca para o esôfago."
  },
  {
    id: "esofago",
    sistema: "digestorio",
    nome: "Esôfago",
    imagem: "assets/digestorio/esofago.jpg",
    descricao: "Conduz o alimento da faringe até o estômago."
  },
  {
    id: "estomago",
    sistema: "digestorio",
    nome: "Estômago",
    imagem: "assets/digestorio/estomago.jpg",
    descricao: "Órgão que participa da digestão mecânica e química dos alimentos."
  },
  {
    id: "figado",
    sistema: "digestorio",
    nome: "Fígado",
    imagem: "assets/digestorio/figado.jpg",
    descricao: "Produz a bile e desempenha diversas funções metabólicas."
  },
  {
    id: "pancreas",
    sistema: "digestorio",
    nome: "Pâncreas",
    imagem: "assets/digestorio/pancreas.jpg",
    descricao: "Produz substâncias importantes para a digestão."
  },
  {
    id: "intestino-delgado",
    sistema: "digestorio",
    nome: "Intestino delgado",
    imagem: "assets/digestorio/intestino-delgado.jpg",
    descricao: "Local importante da digestão e da absorção de nutrientes."
  },
  {
    id: "intestino-grosso",
    sistema: "digestorio",
    nome: "Intestino grosso",
    imagem: "assets/digestorio/intestino-grosso.jpg",
    descricao: "Participa principalmente da absorção de água e da formação das fezes."
  }
];


// ======================================================
// ESTADO DO JOGO
// ======================================================

let sistemaAtual = null;
let modoAtual = null;
let perguntas = [];
let indiceAtual = 0;
let pontuacao = 0;
let respondeu = false;


// ======================================================
// FUNÇÕES AUXILIARES
// ======================================================

function embaralhar(lista) {
  const copia = [...lista];

  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [copia[i], copia[j]] = [copia[j], copia[i]];
  }

  return copia;
}


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


// ======================================================
// SELEÇÃO DO SISTEMA
// ======================================================

function selecionarSistema(sistema) {
  sistemaAtual = sistema;

  const titulo = document.getElementById("tituloSistema");

  if (titulo) {
    if (sistema === "respiratorio") {
      titulo.textContent = "Sistema Respiratório";
    } else {
      titulo.textContent = "Sistema Digestório";
    }
  }

  mostrarTela("configuracao");
}


// ======================================================
// VOLTAR AO MENU
// ======================================================

function voltarMenu() {
  sistemaAtual = null;
  modoAtual = null;

  mostrarTela("menu");
}


// ======================================================
// INICIAR JOGO
// ======================================================

function iniciarJogo(modo) {
  if (!sistemaAtual) {
    return;
  }

  modoAtual = modo;

  let pool;

  if (sistemaAtual === "respiratorio") {
    pool = estruturas.filter(item => item.sistema === "respiratorio");
  } else {
    pool = estruturas.filter(item => item.sistema === "digestorio");
  }

  if (pool.length === 0) {
    return;
  }

  // Embaralha para evitar que as perguntas apareçam sempre
  // na mesma ordem.
  perguntas = embaralhar(pool);

  indiceAtual = 0;
  pontuacao = 0;
  respondeu = false;

  mostrarTela("jogo");

  carregarQuestao();
}


// ======================================================
// CARREGAR QUESTÃO
// ======================================================

function carregarQuestao() {
  if (indiceAtual >= perguntas.length) {
    mostrarResultado();
    return;
  }

  respondeu = false;

  const estrutura = perguntas[indiceAtual];

  const pergunta = document.getElementById("pergunta");
  const imagem = document.getElementById("imagemAnatomica");
  const semImagem = document.getElementById("semImagem");
  const marcador = document.getElementById("marcador");
  const alternativas = document.getElementById("alternativas");
  const feedback = document.getElementById("feedback");
  const proxima = document.getElementById("proxima");

  // Contador
  const contador = document.getElementById("contador");

  if (contador) {
    contador.textContent =
      `Questão ${indiceAtual + 1} de ${perguntas.length}`;
  }

  // Pontuação
  const pontos = document.getElementById("pontuacao");

  if (pontos) {
    pontos.textContent = `Pontos: ${pontuacao}`;
  }

  // Barra de progresso
  const progresso = document.getElementById("progresso");

  if (progresso) {
    const porcentagem =
      (indiceAtual / perguntas.length) * 100;

    progresso.style.width = `${porcentagem}%`;
  }

  // Pergunta
  if (pergunta) {
    if (modoAtual === "estudar") {
      pergunta.textContent =
        `Estude: qual estrutura anatômica está representada?`;
    } else {
      pergunta.textContent =
        `Qual é a estrutura anatômica indicada?`;
    }
  }

  // Imagem
  if (imagem) {
    imagem.style.display = "none";
    imagem.removeAttribute("src");

    imagem.onload = function () {
      imagem.style.display = "block";

      if (semImagem) {
        semImagem.style.display = "none";
      }
    };

    imagem.onerror = function () {
      imagem.style.display = "none";

      if (semImagem) {
        semImagem.style.display = "block";
        semImagem.textContent =
          "Imagem ainda não adicionada. Vamos inserir as imagens anatômicas reais nesta etapa.";
      }
    };

    imagem.src = estrutura.imagem;
  }

  // O marcador fica escondido por enquanto.
  // Ele será configurado individualmente para cada imagem real.
  if (marcador) {
    marcador.style.display = "none";
  }

  // Limpa feedback
  if (feedback) {
    feedback.textContent = "";
    feedback.className = "feedback";
  }

  // Botão próxima
  if (proxima) {
    proxima.style.display = "none";
  }

  // Alternativas
  criarAlternativas(estrutura);
}


// ======================================================
// CRIAR ALTERNATIVAS
// ======================================================

function criarAlternativas(correta) {
  const container = document.getElementById("alternativas");

  if (!container) {
    return;
  }

  container.innerHTML = "";

  // Modo estudar
  if (modoAtual === "estudar") {
    const botao = document.createElement("button");

    botao.textContent = correta.nome;

    botao.addEventListener("click", () => {
      mostrarRespostaEstudo(correta);
    });

    container.appendChild(botao);

    return;
  }

  // Pega estruturas do mesmo sistema
  const mesmoSistema = estruturas.filter(
    item =>
      item.sistema === correta.sistema &&
      item.id !== correta.id
  );

  const alternativasErradas =
    embaralhar(mesmoSistema).slice(0, 3);

  const opcoes = embaralhar([
    correta,
    ...alternativasErradas
  ]);

  opcoes.forEach(opcao => {
    const botao = document.createElement("button");

    botao.textContent = opcao.nome;

    botao.dataset.id = opcao.id;

    botao.addEventListener("click", () => {
      responder(opcao.id, correta.id, botao);
    });

    container.appendChild(botao);
  });
}


// ======================================================
// RESPONDER
// ======================================================

function responder(idEscolhido, idCorreto, botaoEscolhido) {
  if (respondeu) {
    return;
  }

  respondeu = true;

  const feedback = document.getElementById("feedback");
  const botoes =
    document.querySelectorAll("#alternativas button");

  botoes.forEach(botao => {
    botao.disabled = true;

    if (botao.dataset.id === idCorreto) {
      botao.classList.add("correta");
    }
  });

  if (idEscolhido === idCorreto) {
    pontuacao++;

    botaoEscolhido.classList.add("correta");

    if (feedback) {
      feedback.textContent = "✅ Resposta correta!";
      feedback.className = "feedback correto";
    }
  } else {
    botaoEscolhido.classList.add("errada");

    if (feedback) {
      const estrutura =
        estruturas.find(item => item.id === idCorreto);

      feedback.textContent =
        `❌ Resposta incorreta. A resposta correta é: ${estrutura.nome}.`;

      feedback.className = "feedback errado";
    }
  }

  atualizarPontuacao();

  const proxima = document.getElementById("proxima");

  if (proxima) {
    proxima.style.display = "inline-block";
  }
}


// ======================================================
// MODO ESTUDAR
// ======================================================

function mostrarRespostaEstudo(estrutura) {
  const feedback = document.getElementById("feedback");

  if (feedback) {
    feedback.textContent =
      `📚 ${estrutura.nome}: ${estrutura.descricao}`;

    feedback.className = "feedback correto";
  }

  const botoes =
    document.querySelectorAll("#alternativas button");

  botoes.forEach(botao => {
    botao.disabled = true;
  });

  respondeu = true;

  const proxima = document.getElementById("proxima");

  if (proxima) {
    proxima.style.display = "inline-block";
  }
}


// ======================================================
// PRÓXIMA QUESTÃO
// ======================================================

function proximaQuestao() {
  indiceAtual++;

  carregarQuestao();
}


// ======================================================
// ATUALIZAR PONTUAÇÃO
// ======================================================

function atualizarPontuacao() {
  const pontos = document.getElementById("pontuacao");

  if (pontos) {
    pontos.textContent = `Pontos: ${pontuacao}`;
  }
}


// ======================================================
// RESULTADO
// ======================================================

function mostrarResultado() {
  mostrarTela("resultado");

  const porcentagem =
    Math.round((pontuacao / perguntas.length) * 100);

  const campoPorcentagem =
    document.getElementById("porcentagem");

  const mensagem =
    document.getElementById("mensagemResultado");

  if (campoPorcentagem) {
    campoPorcentagem.textContent =
      `${porcentagem}%`;
  }

  if (mensagem) {
    if (porcentagem >= 90) {
      mensagem.textContent =
        "Excelente! Você está dominando esse conteúdo.";
    } else if (porcentagem >= 70) {
      mensagem.textContent =
        "Muito bom! Continue estudando para melhorar ainda mais.";
    } else if (porcentagem >= 50) {
      mensagem.textContent =
        "Bom trabalho! Algumas estruturas ainda precisam de revisão.";
    } else {
      mensagem.textContent =
        "Você precisa revisar o conteúdo e tentar novamente.";
    }
  }

  const progresso = document.getElementById("progresso");

  if (progresso) {
    progresso.style.width = "100%";
  }
}


// ======================================================
// SAIR DO JOGO
// ======================================================

function sairJogo() {
  modoAtual = null;
  perguntas = [];
  indiceAtual = 0;
  pontuacao = 0;
  respondeu = false;

  mostrarTela("configuracao");
}


// ======================================================
// JOGAR NOVAMENTE
// ======================================================

function jogarNovamente() {
  if (!sistemaAtual || !modoAtual) {
    voltarMenu();
    return;
  }

  iniciarJogo(modoAtual);
}


// ======================================================
// INICIALIZAÇÃO
// ======================================================

document.addEventListener("DOMContentLoaded", () => {
  mostrarTela("menu");
});
