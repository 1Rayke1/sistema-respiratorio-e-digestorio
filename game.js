"use strict";

/* =========================================================
   ANATOMIA EM JOGO
   SISTEMA RESPIRATÓRIO + SISTEMA DIGESTÓRIO
   ========================================================= */

/* =========================================================
   VARIÁVEIS DO JOGO
   ========================================================= */

let sistemaAtual = "respiratorio";
let modoAtual = "estudar";

let perguntasJogo = [];
let indicePergunta = 0;
let pontuacao = 0;
let respondida = false;


/* =========================================================
   ESTRUTURAS DO SISTEMA RESPIRATÓRIO
   BASEADAS NAS PÁGINAS DO PDF
   ========================================================= */

const respiratorio = [

    { id:"r01", nome:"Raiz do nariz", pagina:2, funcao:"É a porção superior do nariz externo, localizada na região de união do nariz com a face." },

    { id:"r02", nome:"Dorso do nariz", pagina:2, funcao:"É a parte do nariz externo situada entre a raiz e o ápice." },

    { id:"r03", nome:"Ápice do nariz", pagina:2, funcao:"É a extremidade anterior do nariz externo." },

    { id:"r04", nome:"Nariz externo", pagina:2, funcao:"É a parte externa do nariz, responsável pela entrada inicial do ar nas vias respiratórias." },

    { id:"r05", nome:"Asas do nariz", pagina:3, funcao:"São as porções laterais móveis do nariz externo que delimitam as narinas." },

    { id:"r06", nome:"Base do nariz", pagina:3, funcao:"É a região inferior do nariz externo onde se encontram as narinas." },

    { id:"r07", nome:"Narinas", pagina:3, funcao:"São as aberturas externas que permitem a entrada e a saída de ar pelo nariz." },

    { id:"r08", nome:"Cavidade nasal", pagina:4, funcao:"É o espaço interno do nariz por onde o ar circula e onde ocorre condicionamento do ar inspirado." },

    { id:"r09", nome:"Abertura piriforme", pagina:4, funcao:"É a abertura óssea anterior que dá acesso à cavidade nasal." },

    { id:"r10", nome:"Coanas", pagina:4, funcao:"São as aberturas posteriores que comunicam a cavidade nasal com a nasofaringe." },

    { id:"r11", nome:"Concha nasal superior", pagina:5, funcao:"É uma estrutura da parede lateral da cavidade nasal que ajuda a aumentar a superfície de contato do ar." },

    { id:"r12", nome:"Concha nasal média", pagina:5, funcao:"É uma projeção da parede lateral da cavidade nasal que participa da organização do fluxo de ar." },

    { id:"r13", nome:"Concha nasal inferior", pagina:5, funcao:"É uma projeção óssea da parede lateral da cavidade nasal que auxilia no condicionamento do ar." },

    { id:"r14", nome:"Meato nasal superior", pagina:6, funcao:"É o espaço localizado inferiormente à concha nasal superior." },

    { id:"r15", nome:"Meato nasal médio", pagina:6, funcao:"É o espaço localizado inferiormente à concha nasal média." },

    { id:"r16", nome:"Meato nasal inferior", pagina:6, funcao:"É o espaço localizado inferiormente à concha nasal inferior." },

    { id:"r17", nome:"Epitélio olfatório", pagina:7, funcao:"É o epitélio especializado relacionado à percepção dos estímulos olfatórios." },

    { id:"r18", nome:"Nervo olfatório", pagina:7, funcao:"Está relacionado à condução das informações provenientes dos receptores olfatórios." },

    { id:"r19", nome:"Ducto nasolacrimal", pagina:7, funcao:"É o canal que conduz a drenagem das lágrimas para a cavidade nasal." },

    { id:"r20", nome:"Seio frontal", pagina:9, funcao:"É uma cavidade preenchida por ar localizada no osso frontal e pertencente aos seios paranasais." },

    { id:"r21", nome:"Seio esfenoidal", pagina:9, funcao:"É uma cavidade preenchida por ar localizada no osso esfenoide." },

    { id:"r22", nome:"Seios etmoidais", pagina:9, funcao:"São cavidades aéreas localizadas no osso etmoide." },

    { id:"r23", nome:"Seios maxilares", pagina:9, funcao:"São cavidades aéreas localizadas nos ossos maxilares." },

    { id:"r24", nome:"Tórus tubal", pagina:10, funcao:"É uma elevação da mucosa da nasofaringe relacionada à abertura da tuba auditiva." },

    { id:"r25", nome:"Óstio faríngeo da tuba auditiva", pagina:10, funcao:"É a abertura da tuba auditiva na parede lateral da nasofaringe." },

    { id:"r26", nome:"Faringe", pagina:10, funcao:"É um tubo muscular comum aos sistemas respiratório e digestório." },

    { id:"r27", nome:"Nasofaringe", pagina:11, funcao:"É a parte superior da faringe localizada posteriormente à cavidade nasal." },

    { id:"r28", nome:"Orofaringe", pagina:11, funcao:"É a parte da faringe situada posteriormente à cavidade oral." },

    { id:"r29", nome:"Laringofaringe", pagina:11, funcao:"É a parte inferior da faringe que se continua com a laringe e o esôfago." },

    { id:"r30", nome:"Tonsilas faríngeas", pagina:12, funcao:"São estruturas de tecido linfoide localizadas na região da nasofaringe." },

    { id:"r31", nome:"Epiglote", pagina:13, funcao:"É uma estrutura que participa da proteção da entrada da laringe durante a deglutição." },

    { id:"r32", nome:"Prega vestibular", pagina:13, funcao:"É uma prega da laringe localizada superiormente à prega vocal." },

    { id:"r33", nome:"Prega vocal", pagina:13, funcao:"É uma estrutura da laringe relacionada à produção da voz." },

    { id:"r34", nome:"Laringe", pagina:13, funcao:"É um órgão das vias respiratórias localizado entre a faringe e a traqueia." },

    { id:"r35", nome:"Cartilagem epiglótica", pagina:15, funcao:"É a cartilagem que forma a base estrutural da epiglote." },

    { id:"r36", nome:"Cartilagem da tireoide", pagina:15, funcao:"É uma das principais cartilagens da laringe e forma grande parte de sua parede anterior." },

    { id:"r37", nome:"Cartilagem cricóide", pagina:15, funcao:"É uma cartilagem da laringe localizada inferiormente à cartilagem da tireoide." },

    { id:"r38", nome:"Cartilagem corniculada", pagina:16, funcao:"É uma pequena cartilagem da laringe relacionada às cartilagens aritenoides." },

    { id:"r39", nome:"Cartilagem aritenóide", pagina:16, funcao:"É uma cartilagem da laringe relacionada à movimentação das pregas vocais." },

    { id:"r40", nome:"Anéis cartilaginosos", pagina:17, funcao:"São estruturas cartilaginosas que ajudam a manter a traqueia aberta." },

    { id:"r41", nome:"Ligamentos anulares", pagina:17, funcao:"São estruturas que conectam os anéis cartilaginosos da traqueia." },

    { id:"r42", nome:"Parede posterior da traqueia", pagina:17, funcao:"É a parede posterior da traqueia, relacionada ao esôfago." },

    { id:"r43", nome:"Carina", pagina:17, funcao:"É a região da bifurcação inferior da traqueia em brônquios principais." },

    { id:"r44", nome:"Traqueia", pagina:17, funcao:"É o tubo respiratório que conduz o ar da laringe até os brônquios principais." },

    { id:"r45", nome:"Brônquio principal esquerdo", pagina:18, funcao:"É o brônquio que conduz o ar da traqueia para o pulmão esquerdo." },

    { id:"r46", nome:"Brônquio principal direito", pagina:18, funcao:"É o brônquio que conduz o ar da traqueia para o pulmão direito." },

    { id:"r47", nome:"Brônquio lobar superior direito", pagina:18, funcao:"Conduz o ar para o lobo superior do pulmão direito." },

    { id:"r48", nome:"Brônquio lobar médio direito", pagina:18, funcao:"Conduz o ar para o lobo médio do pulmão direito." },

    { id:"r49", nome:"Brônquio lobar inferior direito", pagina:18, funcao:"Conduz o ar para o lobo inferior do pulmão direito." },

    { id:"r50", nome:"Brônquio lobar superior esquerdo", pagina:20, funcao:"Conduz o ar para o lobo superior do pulmão esquerdo." },

    { id:"r51", nome:"Brônquio lobar inferior esquerdo", pagina:20, funcao:"Conduz o ar para o lobo inferior do pulmão esquerdo." },

    { id:"r52", nome:"Brônquios segmentares", pagina:21, funcao:"São ramificações dos brônquios lobares que conduzem o ar para segmentos broncopulmonares." },

    { id:"r53", nome:"Bronquíolos", pagina:21, funcao:"São pequenas ramificações das vias respiratórias que conduzem o ar dentro dos pulmões." },

    { id:"r54", nome:"Lobo superior esquerdo", pagina:22, funcao:"É a divisão superior do pulmão esquerdo." },

    { id:"r55", nome:"Lobo inferior esquerdo", pagina:22, funcao:"É a divisão inferior do pulmão esquerdo." },

    { id:"r56", nome:"Fissura oblíqua esquerda", pagina:22, funcao:"É a fissura que separa os lobos superior e inferior do pulmão esquerdo." },

    { id:"r57", nome:"Lobo superior direito", pagina:23, funcao:"É a divisão superior do pulmão direito." },

    { id:"r58", nome:"Fissura horizontal", pagina:23, funcao:"É a fissura que separa o lobo superior do lobo médio do pulmão direito." },

    { id:"r59", nome:"Lobo médio", pagina:23, funcao:"É o lobo localizado entre os lobos superior e inferior do pulmão direito." },

    { id:"r60", nome:"Fissura oblíqua direita", pagina:23, funcao:"É a fissura que participa da separação dos lobos do pulmão direito." },

    { id:"r61", nome:"Lobo inferior direito", pagina:23, funcao:"É a divisão inferior do pulmão direito." },

    { id:"r62", nome:"Base do pulmão", pagina:24, funcao:"É a superfície inferior do pulmão relacionada ao diafragma." },

    { id:"r63", nome:"Ápice do pulmão", pagina:24, funcao:"É a extremidade superior do pulmão." },

    { id:"r64", nome:"Face costal", pagina:25, funcao:"É a superfície pulmonar relacionada principalmente às costelas e à parede torácica." },

    { id:"r65", nome:"Face diafragmática", pagina:25, funcao:"É a superfície inferior do pulmão que repousa sobre o diafragma." },

    { id:"r66", nome:"Face medial", pagina:25, funcao:"É a superfície do pulmão voltada para o mediastino." },

    { id:"r67", nome:"Hilo pulmonar", pagina:26, funcao:"É a região por onde entram e saem estruturas como brônquios, vasos, vasos linfáticos e nervos." }

];


/* =========================================================
   ESTRUTURAS DO SISTEMA DIGESTÓRIO
   BASEADAS NAS PÁGINAS DO PDF
   ========================================================= */

const digestorio = [

    { id:"d01", nome:"Lábio superior", pagina:28, funcao:"Participa do fechamento da boca e da formação da rima labial." },

    { id:"d02", nome:"Lábio inferior", pagina:28, funcao:"Participa do fechamento da boca e da formação da rima labial." },

    { id:"d03", nome:"Vestíbulo bucal", pagina:28, funcao:"É o espaço entre os lábios ou bochechas e as arcadas dentárias." },

    { id:"d04", nome:"Arcada dentária", pagina:28, funcao:"É formada pelo conjunto de dentes organizados na cavidade bucal." },

    { id:"d05", nome:"Cavidade bucal", pagina:28, funcao:"É a região inicial do sistema digestório onde o alimento entra e começa a ser processado." },

    { id:"d06", nome:"Língua — musculatura intrínseca", pagina:29, funcao:"Permite alterações na forma da língua e participa de movimentos importantes para a manipulação do alimento." },

    { id:"d07", nome:"Língua — musculatura extrínseca", pagina:29, funcao:"Participa dos movimentos da língua em relação às estruturas vizinhas." },

    { id:"d08", nome:"Palato duro", pagina:29, funcao:"Forma a parte anterior e óssea do teto da cavidade bucal." },

    { id:"d09", nome:"Palato mole", pagina:29, funcao:"Forma a parte posterior e móvel do teto da cavidade bucal." },

    { id:"d10", nome:"Úvula palatina", pagina:29, funcao:"É uma projeção do palato mole." },

    { id:"d11", nome:"Rima labial", pagina:29, funcao:"É a abertura delimitada pelos lábios." },

    { id:"d12", nome:"Faringe", pagina:30, funcao:"É uma região compartilhada pelos sistemas respiratório e digestório." },

    { id:"d13", nome:"Nasofaringe", pagina:30, funcao:"É a porção superior da faringe, relacionada principalmente à passagem do ar." },

    { id:"d14", nome:"Orofaringe", pagina:30, funcao:"É a porção da faringe localizada posteriormente à cavidade oral." },

    { id:"d15", nome:"Laringofaringe", pagina:30, funcao:"É a porção inferior da faringe que se continua com o esôfago." },

    { id:"d16", nome:"Esôfago", pagina:31, funcao:"É um tubo muscular que conduz o alimento da faringe até o estômago." },

    { id:"d17", nome:"Pregas gástricas", pagina:32, funcao:"São pregas da mucosa do estômago que permitem acomodação e distensão do órgão." },

    { id:"d18", nome:"Óstio cárdico", pagina:32, funcao:"É a abertura de comunicação entre o esôfago e o estômago." },

    { id:"d19", nome:"Óstio pilórico", pagina:32, funcao:"É a abertura que comunica o estômago com o duodeno." },

    { id:"d20", nome:"Região cárdia", pagina:33, funcao:"É a região do estômago próxima à entrada do esôfago." },

    { id:"d21", nome:"Região pilórica", pagina:33, funcao:"É a região inferior do estômago próxima ao óstio pilórico." },

    { id:"d22", nome:"Fundo do estômago", pagina:34, funcao:"É a porção superior do estômago localizada acima da região de entrada do esôfago." },

    { id:"d23", nome:"Corpo do estômago", pagina:34, funcao:"É a maior porção do estômago, situada entre o fundo e a região pilórica." },

    { id:"d24", nome:"Curvatura menor do estômago", pagina:34, funcao:"É a margem côncava do estômago." },

    { id:"d25", nome:"Curvatura maior do estômago", pagina:34, funcao:"É a margem convexa e maior do estômago." },

    { id:"d26", nome:"Intestino delgado", pagina:35, funcao:"É a porção do sistema digestório onde ocorre grande parte da digestão e absorção dos nutrientes." },

    { id:"d27", nome:"Duodeno", pagina:35, funcao:"É a primeira porção do intestino delgado, localizada após o estômago." },

    { id:"d28", nome:"Ampola duodenal", pagina:35, funcao:"É a porção inicial dilatada do duodeno." },

    { id:"d29", nome:"Pregas circulares do duodeno", pagina:35, funcao:"São pregas da mucosa e submucosa que aumentam a superfície interna do intestino delgado." },

    { id:"d30", nome:"Flexura duodenojejunal", pagina:35, funcao:"É a região de transição entre o duodeno e o jejuno." },

    { id:"d31", nome:"Jejuno", pagina:36, funcao:"É a porção intermediária do intestino delgado." },

    { id:"d32", nome:"Íleo", pagina:36, funcao:"É a porção final do intestino delgado, que se comunica com o ceco." },

    { id:"d33", nome:"Ceco", pagina:37, funcao:"É a primeira porção do intestino grosso, localizada após o íleo." },

    { id:"d34", nome:"Junção ileocecocólica", pagina:37, funcao:"É a região de transição relacionada ao final do íleo, ao ceco e ao colo." },

    { id:"d35", nome:"Colo ascendente", pagina:38, funcao:"É a porção do intestino grosso que ascende pelo lado direito do abdome." },

    { id:"d36", nome:"Colo transverso", pagina:38, funcao:"É a porção do intestino grosso que atravessa transversalmente o abdome." },

    { id:"d37", nome:"Colo descendente", pagina:38, funcao:"É a porção do intestino grosso que desce pelo lado esquerdo do abdome." },

    { id:"d38", nome:"Colo sigmoide", pagina:38, funcao:"É a porção do intestino grosso situada entre o colo descendente e o reto." },

    { id:"d39", nome:"Haustros", pagina:39, funcao:"São saculações características da parede do intestino grosso." },

    { id:"d40", nome:"Intestino grosso", pagina:39, funcao:"É a porção final do intestino, relacionada principalmente à absorção de água e à formação das fezes." },

    { id:"d41", nome:"Apêndice vermiforme", pagina:39, funcao:"É uma pequena projeção tubular ligada ao ceco." },

    { id:"d42", nome:"Canal retal", pagina:39, funcao:"É a porção terminal do intestino grosso relacionada à passagem das fezes." },

    { id:"d43", nome:"Ânus", pagina:39, funcao:"É a abertura terminal do tubo digestório." },

    { id:"d44", nome:"Tênias", pagina:39, funcao:"São faixas longitudinais de músculo associadas à parede do intestino grosso." },

    { id:"d45", nome:"Fígado", pagina:40, funcao:"É um grande órgão acessório do sistema digestório que produz a bile e participa de diversas funções metabólicas." },

    { id:"d46", nome:"Lobo direito do fígado", pagina:40, funcao:"É o maior dos lobos anatômicos do fígado." },

    { id:"d47", nome:"Lobo esquerdo do fígado", pagina:40, funcao:"É o lobo anatômico localizado no lado esquerdo do fígado." },

    { id:"d48", nome:"Lobo caudado", pagina:40, funcao:"É um dos lobos anatômicos do fígado, localizado em sua face visceral." },

    { id:"d49", nome:"Lobo quadrado", pagina:40, funcao:"É um dos lobos anatômicos do fígado, localizado na face visceral." },

    { id:"d50", nome:"Veia porta hepática", pagina:41, funcao:"Conduz sangue rico em substâncias absorvidas no sistema digestório em direção ao fígado." },

    { id:"d51", nome:"Ligamento falciforme", pagina:41, funcao:"É uma prega peritoneal relacionada à fixação do fígado." },

    { id:"d52", nome:"Artéria hepática própria", pagina:41, funcao:"Fornece sangue arterial ao fígado." },

    { id:"d53", nome:"Vesícula biliar", pagina:41, funcao:"Armazena e concentra a bile produzida pelo fígado." },

    { id:"d54", nome:"Ductos biliares", pagina:42, funcao:"Formam o sistema de canais responsável pela condução da bile." },

    { id:"d55", nome:"Ducto cístico", pagina:42, funcao:"É o ducto relacionado à comunicação da vesícula biliar com as vias biliares." },

    { id:"d56", nome:"Ducto hepático direito", pagina:42, funcao:"Drena a bile proveniente do lado direito do fígado." },

    { id:"d57", nome:"Ducto hepático esquerdo", pagina:42, funcao:"Drena a bile proveniente do lado esquerdo do fígado." },

    { id:"d58", nome:"Ducto hepático comum", pagina:42, funcao:"É formado pela união dos ductos hepáticos direito e esquerdo." },

    { id:"d59", nome:"Ducto colédoco", pagina:42, funcao:"É uma via biliar que conduz a bile em direção ao duodeno." },

    { id:"d60", nome:"Ducto hepatopancreático", pagina:42, funcao:"É a região relacionada à união dos sistemas de condução biliar e pancreático antes da chegada ao duodeno." },

    { id:"d61", nome:"Pâncreas", pagina:43, funcao:"É um órgão acessório do sistema digestório que participa da digestão por meio da produção de secreções pancreáticas." },

    { id:"d62", nome:"Cabeça do pâncreas", pagina:43, funcao:"É a porção mais larga do pâncreas, localizada junto ao duodeno." },

    { id:"d63", nome:"Corpo do pâncreas", pagina:43, funcao:"É a porção central do pâncreas situada entre a cabeça e a cauda." },

    { id:"d64", nome:"Cauda do pâncreas", pagina:43, funcao:"É a extremidade esquerda do pâncreas." },

    { id:"d65", nome:"Ducto pancreático principal", pagina:43, funcao:"Conduz a secreção pancreática através do pâncreas em direção ao duodeno." },

    { id:"d66", nome:"Ducto pancreático acessório", pagina:43, funcao:"É um ducto pancreático adicional relacionado à drenagem da secreção pancreática." },

    { id:"d67", nome:"Ducto pancreático", pagina:43, funcao:"É uma estrutura de condução das secreções produzidas pelo pâncreas." },

    { id:"d68", nome:"Glândulas salivares", pagina:44, funcao:"Produzem saliva, que participa da umidificação e do início da digestão dos alimentos." },

    { id:"d69", nome:"Parótida", pagina:44, funcao:"É uma das principais glândulas salivares." },

    { id:"d70", nome:"Ducto da parótida", pagina:44, funcao:"Conduz a saliva produzida pela glândula parótida." },

    { id:"d71", nome:"Sublingual", pagina:45, funcao:"É uma das principais glândulas salivares, localizada no assoalho da boca." },

    { id:"d72", nome:"Submandibular", pagina:45, funcao:"É uma das principais glândulas salivares, localizada na região inferior à mandíbula." }

];


/* =========================================================
   FUNÇÕES AUXILIARES
   ========================================================= */

function obterEstruturas() {
    return sistemaAtual === "respiratorio"
        ? respiratorio
        : digestorio;
}


function embaralhar(array) {

    const copia = [...array];

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
        behavior: "instant"
    });
}


/* =========================================================
   SELEÇÃO DO SISTEMA
   ========================================================= */

function selecionarSistema(sistema) {

    if (sistema !== "respiratorio" && sistema !== "digestorio") {
        return;
    }

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


/* =========================================================
   INICIAR JOGO
   ========================================================= */

function iniciarJogo(modo) {

    modoAtual = modo;

    const estruturas = obterEstruturas();

    let quantidade;

    if (modo === "estudar") {

        quantidade = estruturas.length;

    } else {

        quantidade = Math.min(20, estruturas.length);
    }

    perguntasJogo = embaralhar(estruturas).slice(0, quantidade);

    indicePergunta = 0;
    pontuacao = 0;
    respondida = false;

    mostrarTela("jogo");

    carregarPergunta();
}


/* =========================================================
   CARREGAR PERGUNTA
   ========================================================= */

function carregarPergunta() {

    if (indicePergunta >= perguntasJogo.length) {

        mostrarResultado();

        return;
    }

    respondida = false;

    const estrutura = perguntasJogo[indicePergunta];

    const pergunta = document.getElementById("pergunta");
    const imagem = document.getElementById("imagemAnatomica");
    const semImagem = document.getElementById("semImagem");
    const alternativas = document.getElementById("alternativas");
    const feedback = document.getElementById("feedback");
    const proxima = document.getElementById("proxima");

    if (!estrutura) {
        return;
    }


    /* CONTADOR */

    const contador = document.getElementById("contador");

    if (contador) {

        contador.textContent =
            `Questão ${indicePergunta + 1} de ${perguntasJogo.length}`;
    }


    /* PONTUAÇÃO */

    const pontuacaoElemento =
        document.getElementById("pontuacao");

    if (pontuacaoElemento) {

        pontuacaoElemento.textContent =
            `Pontuação: ${pontuacao}`;
    }


    /* PROGRESSO */

    const progresso =
        document.getElementById("progresso");

    if (progresso) {

        const porcentagem =
            (indicePergunta / perguntasJogo.length) * 100;

        progresso.style.width =
            `${porcentagem}%`;
    }


    /* PERGUNTA */

    if (pergunta) {

        pergunta.textContent =
            criarPergunta(estrutura);
    }


    /* IMAGEM */

    if (imagem) {

        imagem.style.display = "block";

        imagem.src =
            `pagina-${String(estrutura.pagina).padStart(2, "0")}.jpg`;

        imagem.alt =
            `Imagem anatômica da página ${estrutura.pagina} do material de estudo`;

        imagem.onerror = function() {

            imagem.style.display = "none";

            if (semImagem) {
                semImagem.style.display = "block";
            }
        };

        imagem.onload = function() {

            imagem.style.display = "block";

            if (semImagem) {
                semImagem.style.display = "none";
            }
        };
    }


    /* LIMPAR ALTERNATIVAS */

    if (alternativas) {

        alternativas.innerHTML = "";

        const opcoes =
            criarAlternativas(estrutura);

        opcoes.forEach((opcao) => {

            const botao =
                document.createElement("button");

            botao.type = "button";

            botao.className = "alternativa";

            botao.textContent =
                opcao.nome;

            botao.addEventListener(
                "click",
                () => verificarResposta(botao, opcao, estrutura)
            );

            alternativas.appendChild(botao);
        });
    }


    /* FEEDBACK */

    if (feedback) {

        feedback.textContent = "";

        feedback.className = "feedback";
    }


    /* BOTÃO PRÓXIMA */

    if (proxima) {

        proxima.style.display = "none";
    }
}


/* =========================================================
   CRIAÇÃO DAS PERGUNTAS
   ========================================================= */

function criarPergunta(estrutura) {

    const perguntas = [

        `Qual é a principal função ou característica relacionada à estrutura apresentada na imagem?`,

        `Em relação à anatomia humana, qual alternativa descreve corretamente a estrutura apresentada?`,

        `Qual afirmação está correta sobre a estrutura apresentada na imagem?`,

        `Considerando a localização anatômica mostrada, qual alternativa corresponde à estrutura apresentada?`

    ];

    return perguntas[
        Math.floor(Math.random() * perguntas.length)
    ];
}


/* =========================================================
   CRIAR ALTERNATIVAS
   ========================================================= */

function criarAlternativas(correta) {

    const estruturas = obterEstruturas();

    const outras =
        estruturas.filter(item => item.id !== correta.id);

    const selecionadas =
        embaralhar(outras).slice(0, 3);

    const opcoes = [
        correta,
        ...selecionadas
    ];

    return embaralhar(opcoes);
}


/* =========================================================
   VERIFICAR RESPOSTA
   ========================================================= */

function verificarResposta(botao, opcao, correta) {

    if (respondida) {
        return;
    }

    respondida = true;

    const botoes =
        document.querySelectorAll(".alternativa");

    botoes.forEach(item => {
        item.disabled = true;
    });


    const feedback =
        document.getElementById("feedback");


    if (opcao.id === correta.id) {

        pontuacao++;

        botao.classList.add("correta");

        if (feedback) {

            feedback.textContent =
                `✓ Correto! ${correta.nome}: ${correta.funcao}`;

            feedback.className =
                "feedback correto";
        }

    } else {

        botao.classList.add("errada");

        botoes.forEach(item => {

            if (item.textContent === correta.nome) {

                item.classList.add("correta");
            }
        });

        if (feedback) {

            feedback.textContent =
                `✗ Incorreto. A resposta correta é ${correta.nome}. ${correta.funcao}`;

            feedback.className =
                "feedback errado";
        }
    }


    /* ATUALIZAR PONTUAÇÃO */

    const pontuacaoElemento =
        document.getElementById("pontuacao");

    if (pontuacaoElemento) {

        pontuacaoElemento.textContent =
            `Pontuação: ${pontuacao}`;
    }


    /* MOSTRAR PRÓXIMA */

    const proxima =
        document.getElementById("proxima");

    if (proxima) {

        proxima.style.display = "block";

        if (
            indicePergunta ===
            perguntasJogo.length - 1
        ) {

            proxima.textContent =
                "Ver resultado";

        } else {

            proxima.textContent =
                "Próxima questão";
        }
    }
}


/* =========================================================
   PRÓXIMA QUESTÃO
   ========================================================= */

function proximaQuestao() {

    if (!respondida) {
        return;
    }

    indicePergunta++;

    carregarPergunta();
}


/* =========================================================
   RESULTADO
   ========================================================= */

function mostrarResultado() {

    const porcentagem =
        perguntasJogo.length > 0
            ? Math.round(
                (pontuacao / perguntasJogo.length) * 100
            )
            : 0;


    const porcentagemElemento =
        document.getElementById("porcentagem");

    if (porcentagemElemento) {

        porcentagemElemento.textContent =
            `${porcentagem}%`;
    }


    const mensagem =
        document.getElementById("mensagemResultado");


    if (mensagem) {

        if (porcentagem >= 90) {

            mensagem.textContent =
                "Excelente! Você domina muito bem esse conteúdo.";

        } else if (porcentagem >= 70) {

            mensagem.textContent =
                "Muito bom! Seu conhecimento está bem desenvolvido.";

        } else if (porcentagem >= 50) {

            mensagem.textContent =
                "Bom trabalho! Continue estudando para melhorar.";

        } else {

            mensagem.textContent =
                "Continue estudando. A prática vai ajudar bastante!";
        }
    }


    mostrarTela("resultado");
}


/* =========================================================
   SAIR DO JOGO
   ========================================================= */

function sairJogo() {

    mostrarTela("configuracao");
}


/* =========================================================
   JOGAR NOVAMENTE
   ========================================================= */

function jogarNovamente() {

    iniciarJogo(modoAtual);
}


/* =========================================================
   VOLTAR AO MENU
   ========================================================= */

function voltarMenu() {

    mostrarTela("menu");
}


/* =========================================================
   DISPONIBILIZAR FUNÇÕES PARA OS BOTÕES DO HTML
   ========================================================= */

window.selecionarSistema = selecionarSistema;
window.iniciarJogo = iniciarJogo;
window.proximaQuestao = proximaQuestao;
window.sairJogo = sairJogo;
window.jogarNovamente = jogarNovamente;
window.voltarMenu = voltarMenu;


/* =========================================================
   INICIALIZAÇÃO
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    mostrarTela("menu");

});
