/* =========================================================
   ANATOMIA EM JOGO
   SISTEMA RESPIRATÓRIO + SISTEMA DIGESTÓRIO

   BASE:
   SISTEMAS_RESPIRATORIO_E_DIGESTORIO.pdf

   Imagens:
   pagina-02.jpg até pagina-45.jpg

   NÃO são adicionadas setas ou marcações.
========================================================= */

"use strict";

/* =========================================================
   ESTADO DO JOGO
========================================================= */

let sistemaAtual = null;
let modoAtual = null;

let perguntasPartida = [];
let indiceAtual = 0;
let pontuacao = 0;
let respondida = false;

let historicoErros = [];

/* =========================================================
   QUANTIDADE DE QUESTÕES
========================================================= */

const quantidadePorModo = {
    estudar: 50,
    treinar: 70,
    simulado: 100
};

/* =========================================================
   ESTRUTURAS DO SISTEMA RESPIRATÓRIO
   Baseadas no PDF
========================================================= */

const respiratorio = [

    ["Raiz do nariz", 2, "Nariz externo"],
    ["Dorso do nariz", 2, "Nariz externo"],
    ["Ápice do nariz", 2, "Nariz externo"],
    ["Nariz externo", 2, "Nariz externo"],

    ["Asas do nariz", 3, "Nariz externo"],
    ["Base do nariz", 3, "Nariz externo"],
    ["Narinas", 3, "Nariz externo"],

    ["Cavidade nasal", 4, "Cavidade nasal"],
    ["Abertura piriforme", 4, "Cavidade nasal"],
    ["Coanas", 4, "Cavidade nasal"],

    ["Concha nasal superior", 5, "Conchas nasais"],
    ["Concha nasal média", 5, "Conchas nasais"],
    ["Concha nasal inferior", 5, "Conchas nasais"],

    ["Meato nasal superior", 6, "Meatos nasais"],
    ["Meato nasal médio", 6, "Meatos nasais"],
    ["Meato nasal inferior", 6, "Meatos nasais"],

    ["Epitélio olfatório", 7, "Estruturas relacionadas ao olfato"],
    ["Nervo olfatório", 7, "Estruturas relacionadas ao olfato"],
    ["Ducto nasolacrimal", 7, "Estruturas da cavidade nasal"],

    ["Seio frontal", 9, "Seios paranasais"],
    ["Seio esfenoidal", 9, "Seios paranasais"],
    ["Seios etmoidais", 9, "Seios paranasais"],
    ["Seios maxilares", 9, "Seios paranasais"],

    ["Tórus tubal", 10, "Faringe"],
    ["Óstio faríngeo da tuba auditiva", 10, "Faringe"],
    ["Faringe", 10, "Faringe"],

    ["Nasofaringe", 11, "Regiões da faringe"],
    ["Orofaringe", 11, "Regiões da faringe"],
    ["Laringofaringe", 11, "Regiões da faringe"],

    ["Tonsilas faríngeas", 12, "Faringe"],

    ["Epiglote", 13, "Laringe"],
    ["Prega vestibular", 13, "Laringe"],
    ["Prega vocal", 13, "Laringe"],
    ["Laringe", 13, "Laringe"],

    ["Cartilagem epiglótica", 15, "Cartilagens da laringe"],
    ["Cartilagem da tireoide", 15, "Cartilagens da laringe"],
    ["Cartilagem cricóide", 15, "Cartilagens da laringe"],

    ["Cartilagem corniculada", 16, "Cartilagens da laringe"],
    ["Cartilagem aritenóide", 16, "Cartilagens da laringe"],

    ["Anéis cartilaginosos", 17, "Traqueia"],
    ["Ligamentos anulares", 17, "Traqueia"],
    ["Parede posterior da traqueia", 17, "Traqueia"],
    ["Carina", 17, "Traqueia"],
    ["Traqueia", 17, "Traqueia"],

    ["Brônquio principal esquerdo", 18, "Brônquios"],
    ["Brônquio principal direito", 18, "Brônquios"],
    ["Brônquio lobar superior direito", 18, "Brônquios lobares direitos"],
    ["Brônquio lobar médio direito", 18, "Brônquios lobares direitos"],
    ["Brônquio lobar inferior direito", 18, "Brônquios lobares direitos"],

    ["Brônquio lobar superior esquerdo", 20, "Brônquios lobares esquerdos"],
    ["Brônquio lobar inferior esquerdo", 20, "Brônquios lobares esquerdos"],

    ["Brônquios segmentares", 21, "Árvore brônquica"],
    ["Bronquíolos", 21, "Árvore brônquica"],

    ["Lobo superior esquerdo", 22, "Pulmão esquerdo"],
    ["Lobo inferior esquerdo", 22, "Pulmão esquerdo"],
    ["Fissura oblíqua esquerda", 22, "Pulmão esquerdo"],

    ["Lobo superior direito", 23, "Pulmão direito"],
    ["Fissura horizontal", 23, "Pulmão direito"],
    ["Lobo médio", 23, "Pulmão direito"],
    ["Fissura oblíqua direita", 23, "Pulmão direito"],
    ["Lobo inferior direito", 23, "Pulmão direito"],

    ["Base do pulmão", 24, "Pulmões"],
    ["Ápice do pulmão", 24, "Pulmões"],

    ["Face costal", 25, "Faces do pulmão"],
    ["Face diafragmática", 25, "Faces do pulmão"],
    ["Face medial", 25, "Faces do pulmão"],

    ["Hilo pulmonar", 26, "Pulmões"]
];

/* =========================================================
   ESTRUTURAS DO SISTEMA DIGESTÓRIO
   Baseadas no PDF
========================================================= */

const digestorio = [

    ["Lábio superior", 28, "Cavidade bucal"],
    ["Lábio inferior", 28, "Cavidade bucal"],
    ["Vestíbulo bucal", 28, "Cavidade bucal"],
    ["Arcada dentária", 28, "Cavidade bucal"],
    ["Cavidade bucal", 28, "Cavidade bucal"],

    ["Língua — musculatura intrínseca", 29, "Língua"],
    ["Língua — musculatura extrínseca", 29, "Língua"],
    ["Palato duro", 29, "Cavidade bucal"],
    ["Palato mole", 29, "Cavidade bucal"],
    ["Úvula palatina", 29, "Cavidade bucal"],
    ["Rima labial", 29, "Cavidade bucal"],

    ["Faringe", 30, "Faringe"],
    ["Nasofaringe", 30, "Regiões da faringe"],
    ["Orofaringe", 30, "Regiões da faringe"],
    ["Laringofaringe", 30, "Regiões da faringe"],

    ["Esôfago", 31, "Esôfago"],

    ["Pregas gástricas", 32, "Estômago"],
    ["Óstio cárdico", 32, "Estômago"],
    ["Óstio pilórico", 32, "Estômago"],

    ["Região cárdia", 33, "Regiões do estômago"],
    ["Região pilórica", 33, "Regiões do estômago"],

    ["Fundo do estômago", 34, "Estômago"],
    ["Corpo do estômago", 34, "Estômago"],
    ["Curvatura menor do estômago", 34, "Estômago"],
    ["Curvatura maior do estômago", 34, "Estômago"],

    ["Intestino delgado", 35, "Intestino delgado"],
    ["Duodeno", 35, "Intestino delgado"],
    ["Ampola duodenal", 35, "Duodeno"],
    ["Pregas circulares do duodeno", 35, "Duodeno"],
    ["Flexura duodenojejunal", 35, "Duodeno"],

    ["Jejuno", 36, "Intestino delgado"],
    ["Íleo", 36, "Intestino delgado"],

    ["Ceco", 37, "Intestino grosso"],
    ["Junção ileocecocólica", 37, "Intestino grosso"],

    ["Colo ascendente", 38, "Intestino grosso"],
    ["Colo transverso", 38, "Intestino grosso"],
    ["Colo descendente", 38, "Intestino grosso"],
    ["Colo sigmoide", 38, "Intestino grosso"],

    ["Haustros", 39, "Intestino grosso"],
    ["Intestino grosso", 39, "Intestino grosso"],
    ["Apêndice vermiforme", 39, "Intestino grosso"],
    ["Canal retal", 39, "Intestino grosso"],
    ["Ânus", 39, "Intestino grosso"],
    ["Tênias", 39, "Intestino grosso"],

    ["Fígado", 40, "Fígado"],
    ["Lobo direito do fígado", 40, "Fígado"],
    ["Lobo esquerdo do fígado", 40, "Fígado"],
    ["Lobo caudado", 40, "Fígado"],
    ["Lobo quadrado", 40, "Fígado"],

    ["Veia porta hepática", 41, "Estruturas do fígado"],
    ["Ligamento falciforme", 41, "Estruturas do fígado"],
    ["Artéria hepática própria", 41, "Estruturas do fígado"],
    ["Vesícula biliar", 41, "Estruturas biliares"],

    ["Ductos biliares", 42, "Ductos biliares"],
    ["Ducto cístico", 42, "Ductos biliares"],
    ["Ducto hepático direito", 42, "Ductos biliares"],
    ["Ducto hepático esquerdo", 42, "Ductos biliares"],
    ["Ducto hepático comum", 42, "Ductos biliares"],
    ["Ducto colédoco", 42, "Ductos biliares"],
    ["Ducto hepatopancreático", 42, "Ductos biliares"],

    ["Pâncreas", 43, "Pâncreas"],
    ["Cabeça do pâncreas", 43, "Pâncreas"],
    ["Corpo do pâncreas", 43, "Pâncreas"],
    ["Cauda do pâncreas", 43, "Pâncreas"],
    ["Ducto pancreático principal", 43, "Ductos pancreáticos"],
    ["Ducto pancreático acessório", 43, "Ductos pancreáticos"],
    ["Ducto pancreático", 43, "Ductos pancreáticos"],

    ["Glândulas salivares", 44, "Glândulas salivares"],
    ["Parótida", 44, "Glândulas salivares"],
    ["Ducto da parótida", 44, "Glândulas salivares"],

    ["Sublingual", 45, "Glândulas salivares"],
    ["Submandibular", 45, "Glândulas salivares"]
];

/* =========================================================
   CONVERTE AS ESTRUTURAS EM OBJETOS
========================================================= */

function prepararEstruturas(lista, sistema) {
    return lista.map((item, indice) => ({
        id: sistema + "_" + indice,
        nome: item[0],
        pagina: item[1],
        grupo: item[2],
        sistema: sistema
    }));
}

const estruturasRespiratorio =
    prepararEstruturas(respiratorio, "respiratorio");

const estruturasDigestorio =
    prepararEstruturas(digestorio, "digestorio");

const todasEstruturas = [
    ...estruturasRespiratorio,
    ...estruturasDigestorio
];

/* =========================================================
   FUNÇÕES AUXILIARES
========================================================= */

function embaralhar(array) {
    const copia = [...array];

    for (let i = copia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [copia[i], copia[j]] =
            [copia[j], copia[i]];
    }

    return copia;
}

function escolher(array) {
    if (!array || array.length === 0) {
        return null;
    }

    return array[
        Math.floor(Math.random() * array.length)
    ];
}

function normalizar(texto) {
    return String(texto)
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim();
}

function paginaImagem(pagina) {
    return `pagina-${String(pagina).padStart(2, "0")}.jpg`;
}

function alternativasUnicas(correta, opcoes) {
    const resultado = [];

    for (const opcao of opcoes) {
        if (
            opcao &&
            normalizar(opcao) !== normalizar(correta) &&
            !resultado.some(
                x => normalizar(x) === normalizar(opcao)
            )
        ) {
            resultado.push(opcao);
        }
    }

    return embaralhar(
        [correta, ...resultado]
    ).slice(0, 4);
}

/* =========================================================
   GERADORES DE QUESTÕES
========================================================= */

function gerarQuestoesPorGrupo(estruturas) {

    const questoes = [];

    const grupos = {};

    estruturas.forEach(e => {

        if (!grupos[e.grupo]) {
            grupos[e.grupo] = [];
        }

        grupos[e.grupo].push(e);
    });

    /* -----------------------------------------------------
       QUESTÃO 1:
       IDENTIFICAR O CONJUNTO
    ----------------------------------------------------- */

    estruturas.forEach(e => {

        const gruposDisponiveis =
            Object.keys(grupos)
                .filter(g => g !== e.grupo);

        if (gruposDisponiveis.length < 3) {
            return;
        }

        const alternativasGrupo =
            embaralhar(gruposDisponiveis)
                .slice(0, 3);

        questoes.push({
            sistema: e.sistema,
            nivel: "médio",
            pergunta:
                `No material, a estrutura "${e.nome}" está organizada junto a qual conjunto anatômico?`,
            correta: e.grupo,
            alternativas:
                alternativasUnicas(
                    e.grupo,
                    alternativasGrupo
                ),
            pagina: e.pagina,
            estrutura: e.nome
        });
    });

    /* -----------------------------------------------------
       QUESTÃO 2:
       MESMO GRUPO
    ----------------------------------------------------- */

    estruturas.forEach(e => {

        const colegas =
            grupos[e.grupo]
                .filter(x => x.id !== e.id);

        if (colegas.length < 3) {
            return;
        }

        const correta = escolher(colegas);

        const outras =
            estruturas.filter(x =>
                x.id !== e.id &&
                x.id !== correta.id &&
                x.grupo !== e.grupo
            );

        const distratores =
            embaralhar(outras)
                .slice(0, 3)
                .map(x => x.nome);

        questoes.push({
            sistema: e.sistema,
            nivel: "difícil",
            pergunta:
                `Qual das alternativas também pertence ao mesmo conjunto anatômico de "${e.nome}" no material?`,
            correta: correta.nome,
            alternativas:
                alternativasUnicas(
                    correta.nome,
                    distratores
                ),
            pagina: e.pagina,
            estrutura: e.nome
        });
    });

    /* -----------------------------------------------------
       QUESTÃO 3:
       NÃO PERTENCE
    ----------------------------------------------------- */

    estruturas.forEach(e => {

        const colegas =
            grupos[e.grupo]
                .filter(x => x.id !== e.id);

        if (colegas.length < 2) {
            return;
        }

        const corretas =
            embaralhar(colegas)
                .slice(0, 3)
                .map(x => x.nome);

        const grupoDiferente =
            estruturas.filter(x =>
                x.grupo !== e.grupo
            );

        const incorreta =
            escolher(grupoDiferente);

        if (!incorreta) {
            return;
        }

        questoes.push({
            sistema: e.sistema,
            nivel: "difícil",
            pergunta:
                `Qual estrutura NÃO pertence ao mesmo conjunto anatômico de "${e.nome}" conforme a organização do material?`,
            correta: incorreta.nome,
            alternativas:
                alternativasUnicas(
                    incorreta.nome,
                    corretas
                ),
            pagina: e.pagina,
            estrutura: e.nome
        });
    });

    /* -----------------------------------------------------
       QUESTÃO 4:
       PÁGINA
    ----------------------------------------------------- */

    const paginas = [
        ...new Set(
            estruturas.map(e => e.pagina)
        )
    ];

    estruturas.forEach(e => {

        const outrasPaginas =
            paginas.filter(
                p => p !== e.pagina
            );

        if (outrasPaginas.length < 3) {
            return;
        }

        const alternativasPagina =
            embaralhar(outrasPaginas)
                .slice(0, 3)
                .map(String);

        questoes.push({
            sistema: e.sistema,
            nivel: "médio",
            pergunta:
                `Em qual página do PDF a estrutura "${e.nome}" é apresentada?`,
            correta: String(e.pagina),
            alternativas:
                alternativasUnicas(
                    String(e.pagina),
                    alternativasPagina
                ),
            pagina: e.pagina,
            estrutura: e.nome,
            tipo: "pagina"
        });
    });

    /* -----------------------------------------------------
       QUESTÃO 5:
       MESMA PÁGINA
    ----------------------------------------------------- */

    estruturas.forEach(e => {

        const mesmaPagina =
            estruturas.filter(
                x =>
                    x.pagina === e.pagina &&
                    x.id !== e.id
            );

        if (mesmaPagina.length < 1) {
            return;
        }

        const correta =
            escolher(mesmaPagina);

        const outras =
            estruturas.filter(
                x =>
                    x.pagina !== e.pagina
            );

        const distratores =
            embaralhar(outras)
                .slice(0, 3)
                .map(x => x.nome);

        questoes.push({
            sistema: e.sistema,
            nivel: "médio",
            pergunta:
                `Qual estrutura também aparece na página ${e.pagina} do PDF, junto com "${e.nome}"?`,
            correta: correta.nome,
            alternativas:
                alternativasUnicas(
                    correta.nome,
                    distratores
                ),
            pagina: e.pagina,
            estrutura: e.nome,
            tipo: "pagina"
        });
    });

    return questoes;
}

/* =========================================================
   QUESTÕES CONCEITUAIS BASEADAS NA ORGANIZAÇÃO DO PDF
========================================================= */

function gerarQuestoesConceituais() {

    const questoes = [];

    /* -----------------------------------------------------
       RESPIRATÓRIO
    ----------------------------------------------------- */

    questoes.push(
        {
            sistema: "respiratorio",
            nivel: "fácil",
            pergunta:
                "Qual conjunto corresponde às três conchas nasais apresentadas na página 5?",
            correta:
                "Concha nasal superior, concha nasal média e concha nasal inferior",
            alternativas: [
                "Concha nasal superior, concha nasal média e concha nasal inferior",
                "Meato nasal superior, meato nasal médio e meato nasal inferior",
                "Nasofaringe, orofaringe e laringofaringe",
                "Seio frontal, seio esfenoidal e seios maxilares"
            ],
            pagina: 5
        },

        {
            sistema: "respiratorio",
            nivel: "médio",
            pergunta:
                "Qual conjunto corresponde aos três meatos nasais apresentados na página 6?",
            correta:
                "Meato nasal superior, meato nasal médio e meato nasal inferior",
            alternativas: [
                "Meato nasal superior, meato nasal médio e meato nasal inferior",
                "Concha nasal superior, concha nasal média e concha nasal inferior",
                "Lobo superior, lobo médio e lobo inferior",
                "Nasofaringe, orofaringe e laringofaringe"
            ],
            pagina: 6
        },

        {
            sistema: "respiratorio",
            nivel: "difícil",
            pergunta:
                "Qual alternativa reúne as estruturas relacionadas ao olfato apresentadas na página 7?",
            correta:
                "Epitélio olfatório e nervo olfatório",
            alternativas: [
                "Epitélio olfatório e nervo olfatório",
                "Ducto nasolacrimal e tórus tubal",
                "Concha nasal inferior e coanas",
                "Prega vocal e prega vestibular"
            ],
            pagina: 7
        },

        {
            sistema: "respiratorio",
            nivel: "médio",
            pergunta:
                "Qual alternativa apresenta somente os seios paranasais mostrados na página 9?",
            correta:
                "Seio frontal, seio esfenoidal, seios etmoidais e seios maxilares",
            alternativas: [
                "Seio frontal, seio esfenoidal, seios etmoidais e seios maxilares",
                "Nasofaringe, orofaringe e laringofaringe",
                "Concha nasal superior, média e inferior",
                "Lobo superior, médio e inferior"
            ],
            pagina: 9
        },

        {
            sistema: "respiratorio",
            nivel: "difícil",
            pergunta:
                "Qual sequência corresponde às regiões da faringe apresentadas na página 11?",
            correta:
                "Nasofaringe → orofaringe → laringofaringe",
            alternativas: [
                "Nasofaringe → orofaringe → laringofaringe",
                "Orofaringe → nasofaringe → traqueia",
                "Laringofaringe → laringe → bronquíolos",
                "Nasofaringe → esôfago → duodeno"
            ],
            pagina: 11
        },

        {
            sistema: "respiratorio",
            nivel: "difícil",
            pergunta:
                "Qual alternativa apresenta somente estruturas da laringe mostradas na página 13?",
            correta:
                "Epiglote, prega vestibular, prega vocal e laringe",
            alternativas: [
                "Epiglote, prega vestibular, prega vocal e laringe",
                "Carina, traqueia, bronquíolos e hilo pulmonar",
                "Nasofaringe, orofaringe, esôfago e duodeno",
                "Seio frontal, seio maxilar, fígado e pâncreas"
            ],
            pagina: 13
        },

        {
            sistema: "respiratorio",
            nivel: "médio",
            pergunta:
                "Qual alternativa apresenta as cartilagens da laringe mostradas nas páginas 15 e 16?",
            correta:
                "Cartilagem epiglótica, cartilagem da tireoide, cartilagem cricóide, cartilagem corniculada e cartilagem aritenóide",
            alternativas: [
                "Cartilagem epiglótica, cartilagem da tireoide, cartilagem cricóide, cartilagem corniculada e cartilagem aritenóide",
                "Carina, bronquíolos, coanas, tênias e haustros",
                "Concha nasal superior, concha nasal média, ducto cístico e pâncreas",
                "Pregas gástricas, pregas circulares, ligamentos anulares e tênias"
            ],
            pagina: 15
        },

        {
            sistema: "respiratorio",
            nivel: "difícil",
            pergunta:
                "Qual estrutura é apresentada junto aos anéis cartilaginosos, ligamentos anulares e parede posterior da traqueia?",
            correta:
                "Carina",
            alternativas: [
                "Carina",
                "Hilo pulmonar",
                "Face medial",
                "Prega vocal"
            ],
            pagina: 17
        },

        {
            sistema: "respiratorio",
            nivel: "médio",
            pergunta:
                "Qual alternativa apresenta os dois brônquios principais mostrados na página 18?",
            correta:
                "Brônquio principal direito e brônquio principal esquerdo",
            alternativas: [
                "Brônquio principal direito e brônquio principal esquerdo",
                "Brônquio lobar médio direito e bronquíolos",
                "Brônquios segmentares e carina",
                "Bronquíolos e traqueia"
            ],
            pagina: 18
        },

        {
            sistema: "respiratorio",
            nivel: "difícil",
            pergunta:
                "Qual alternativa reúne somente estruturas apresentadas para o pulmão direito na página 23?",
            correta:
                "Lobo superior direito, fissura horizontal, lobo médio, fissura oblíqua direita e lobo inferior direito",
            alternativas: [
                "Lobo superior direito, fissura horizontal, lobo médio, fissura oblíqua direita e lobo inferior direito",
                "Lobo superior esquerdo, lobo inferior esquerdo e fissura oblíqua esquerda",
                "Base, ápice e face medial",
                "Hilo pulmonar, carina e brônquio principal esquerdo"
            ],
            pagina: 23
        },

        {
            sistema: "respiratorio",
            nivel: "difícil",
            pergunta:
                "Qual alternativa reúne as estruturas apresentadas para o pulmão esquerdo na página 22?",
            correta:
                "Lobo superior esquerdo, lobo inferior esquerdo e fissura oblíqua esquerda",
            alternativas: [
                "Lobo superior esquerdo, lobo inferior esquerdo e fissura oblíqua esquerda",
                "Lobo superior direito, lobo médio e fissura horizontal",
                "Lobo inferior direito, fissura horizontal e lobo médio",
                "Base, ápice e fissura horizontal"
            ],
            pagina: 22
        },

        {
            sistema: "respiratorio",
            nivel: "médio",
            pergunta:
                "Qual alternativa reúne somente as faces do pulmão apresentadas na página 25?",
            correta:
                "Face costal, face diafragmática e face medial",
            alternativas: [
                "Face costal, face diafragmática e face medial",
                "Base, ápice e hilo pulmonar",
                "Fissura oblíqua, fissura horizontal e carina",
                "Lobo superior, lobo médio e lobo inferior"
            ],
            pagina: 25
        },

        {
            sistema: "respiratorio",
            nivel: "médio",
            pergunta:
                "Qual estrutura é apresentada especificamente na página 26?",
            correta:
                "Hilo pulmonar",
            alternativas: [
                "Hilo pulmonar",
                "Carina",
                "Face medial",
                "Ápice do pulmão"
            ],
            pagina: 26
        },

        /* -------------------------------------------------
           DIGESTÓRIO
        ------------------------------------------------- */

        {
            sistema: "digestorio",
            nivel: "fácil",
            pergunta:
                "Qual alternativa apresenta estruturas mostradas na cavidade bucal na página 28?",
            correta:
                "Lábio superior, lábio inferior, vestíbulo bucal e arcada dentária",
            alternativas: [
                "Lábio superior, lábio inferior, vestíbulo bucal e arcada dentária",
                "Cárdia, piloro, duodeno e jejuno",
                "Ceco, íleo, colo ascendente e colo descendente",
                "Parótida, fígado, pâncreas e vesícula biliar"
            ],
            pagina: 28
        },

        {
            sistema: "digestorio",
            nivel: "difícil",
            pergunta:
                "Qual alternativa apresenta corretamente as duas formas de musculatura da língua mostradas na página 29?",
            correta:
                "Musculatura intrínseca e musculatura extrínseca",
            alternativas: [
                "Musculatura intrínseca e musculatura extrínseca",
                "Musculatura superior e musculatura inferior",
                "Musculatura cardíaca e musculatura lisa",
                "Musculatura circular e musculatura longitudinal"
            ],
            pagina: 29
        },

        {
            sistema: "digestorio",
            nivel: "médio",
            pergunta:
                "Qual conjunto pertence à região da cavidade bucal apresentada na página 29?",
            correta:
                "Palato duro, palato mole e úvula palatina",
            alternativas: [
                "Palato duro, palato mole e úvula palatina",
                "Óstio cárdico, óstio pilórico e pregas gástricas",
                "Duodeno, jejuno e íleo",
                "Ceco, canal retal e ânus"
            ],
            pagina: 29
        },

        {
            sistema: "digestorio",
            nivel: "difícil",
            pergunta:
                "Qual sequência corresponde às regiões da faringe mostradas na página 30?",
            correta:
                "Nasofaringe → orofaringe → laringofaringe",
            alternativas: [
                "Nasofaringe → orofaringe → laringofaringe",
                "Nasofaringe → esôfago → duodeno",
                "Orofaringe → estômago → jejuno",
                "Laringofaringe → ceco → cólon"
            ],
            pagina: 30
        },

        {
            sistema: "digestorio",
            nivel: "médio",
            pergunta:
                "Qual estrutura é apresentada isoladamente na página 31?",
            correta:
                "Esôfago",
            alternativas: [
                "Esôfago",
                "Duodeno",
                "Ceco",
                "Canal retal"
            ],
            pagina: 31
        },

        {
            sistema: "digestorio",
            nivel: "difícil",
            pergunta:
                "Qual alternativa apresenta os dois óstios do estômago mostrados na página 32?",
            correta:
                "Óstio cárdico e óstio pilórico",
            alternativas: [
                "Óstio cárdico e óstio pilórico",
                "Óstio hepático e óstio pancreático",
                "Óstio duodenal e óstio ileal",
                "Óstio nasal e óstio faríngeo"
            ],
            pagina: 32
        },

        {
            sistema: "digestorio",
            nivel: "médio",
            pergunta:
                "Qual estrutura é apresentada como uma região do estômago na página 33?",
            correta:
                "Região cárdia",
            alternativas: [
                "Região cárdia",
                "Região pilórica",
                "Fundo do estômago",
                "Curvatura menor"
            ],
            pagina: 33
        },

        {
            sistema: "digestorio",
            nivel: "difícil",
            pergunta:
                "Qual alternativa apresenta somente estruturas mostradas na página 34?",
            correta:
                "Fundo do estômago, corpo do estômago, curvatura menor e curvatura maior",
            alternativas: [
                "Fundo do estômago, corpo do estômago, curvatura menor e curvatura maior",
                "Cárdia, piloro, jejuno e íleo",
                "Duodeno, ampola, ceco e colo transverso",
                "Parótida, sublingual, submandibular e pâncreas"
            ],
            pagina: 34
        },

        {
            sistema: "digestorio",
            nivel: "médio",
            pergunta:
                "Qual alternativa apresenta as três partes do intestino delgado presentes no material?",
            correta:
                "Duodeno, jejuno e íleo",
            alternativas: [
                "Duodeno, jejuno e íleo",
                "Ceco, colo ascendente e colo transverso",
                "Fígado, pâncreas e vesícula biliar",
                "Ânus, canal retal e tênias"
            ],
            pagina: 35
        },

        {
            sistema: "digestorio",
            nivel: "difícil",
            pergunta:
                "Qual conjunto é apresentado especificamente na região do duodeno na página 35?",
            correta:
                "Ampola duodenal, pregas circulares do duodeno e flexura duodenojejunal",
            alternativas: [
                "Ampola duodenal, pregas circulares do duodeno e flexura duodenojejunal",
                "Haustros, tênias e apêndice vermiforme",
                "Cárdia, fundo e curvatura maior",
                "Ceco, colo sigmoide e ânus"
            ],
            pagina: 35
        },

        {
            sistema: "digestorio",
            nivel: "médio",
            pergunta:
                "Quais estruturas são apresentadas na página 36?",
            correta:
                "Jejuno e íleo",
            alternativas: [
                "Jejuno e íleo",
                "Ceco e apêndice vermiforme",
                "Colo ascendente e colo transverso",
                "Fundo e corpo do estômago"
            ],
            pagina: 36
        },

        {
            sistema: "digestorio",
            nivel: "difícil",
            pergunta:
                "Qual alternativa reúne estruturas apresentadas no intestino grosso nas páginas 37 a 39?",
            correta:
                "Ceco, colo ascendente, colo transverso, colo descendente e colo sigmoide",
            alternativas: [
                "Ceco, colo ascendente, colo transverso, colo descendente e colo sigmoide",
                "Duodeno, jejuno, íleo e ampola duodenal",
                "Fundo, corpo, cárdia e piloro",
                "Fígado, pâncreas, parótida e vesícula biliar"
            ],
            pagina: 38
        },

        {
            sistema: "digestorio",
            nivel: "médio",
            pergunta:
                "Qual alternativa apresenta estruturas mostradas na página 39?",
            correta:
                "Haustros, apêndice vermiforme, canal retal, ânus e tênias",
            alternativas: [
                "Haustros, apêndice vermiforme, canal retal, ânus e tênias",
                "Duodeno, jejuno, íleo e ampola duodenal",
                "Cárdia, piloro e pregas gástricas",
                "Lobo direito, lobo esquerdo e vesícula biliar"
            ],
            pagina: 39
        },

        {
            sistema: "digestorio",
            nivel: "difícil",
            pergunta:
                "Qual alternativa apresenta os quatro lobos do fígado mostrados na página 40?",
            correta:
                "Lobo direito, lobo esquerdo, lobo caudado e lobo quadrado",
            alternativas: [
                "Lobo direito, lobo esquerdo, lobo caudado e lobo quadrado",
                "Lobo superior, lobo médio, lobo inferior e lobo caudado",
                "Cabeça, corpo, cauda e lobo médio",
                "Direito, esquerdo, superior e inferior"
            ],
            pagina: 40
        },

        {
            sistema: "digestorio",
            nivel: "difícil",
            pergunta:
                "Qual alternativa apresenta estruturas mostradas na página 41?",
            correta:
                "Veia porta hepática, ligamento falciforme, artéria hepática própria e vesícula biliar",
            alternativas: [
                "Veia porta hepática, ligamento falciforme, artéria hepática própria e vesícula biliar",
                "Ducto cístico, ducto pancreático e duodeno",
                "Parótida, sublingual e submandibular",
                "Ceco, ânus, canal retal e tênias"
            ],
            pagina: 41
        },

        {
            sistema: "digestorio",
            nivel: "difícil",
            pergunta:
                "Qual alternativa apresenta somente estruturas dos ductos biliares mostradas na página 42?",
            correta:
                "Ducto cístico, ducto hepático direito, ducto hepático esquerdo, ducto hepático comum e ducto colédoco",
            alternativas: [
                "Ducto cístico, ducto hepático direito, ducto hepático esquerdo, ducto hepático comum e ducto colédoco",
                "Ducto pancreático principal, ducto pancreático acessório e parótida",
                "Veia porta hepática, artéria hepática e ligamento falciforme",
                "Duodeno, jejuno, íleo e ceco"
            ],
            pagina: 42
        },

        {
            sistema: "digestorio",
            nivel: "médio",
            pergunta:
                "Qual alternativa apresenta as três partes do pâncreas mostradas na página 43?",
            correta:
                "Cabeça, corpo e cauda",
            alternativas: [
                "Cabeça, corpo e cauda",
                "Fundo, corpo e piloro",
                "Lobo direito, lobo esquerdo e lobo caudado",
                "Direito, esquerdo e médio"
            ],
            pagina: 43
        },

        {
            sistema: "digestorio",
            nivel: "difícil",
            pergunta:
                "Qual alternativa apresenta os ductos pancreáticos mostrados na página 43?",
            correta:
                "Ducto pancreático principal, ducto pancreático acessório e ducto pancreático",
            alternativas: [
                "Ducto pancreático principal, ducto pancreático acessório e ducto pancreático",
                "Ducto cístico, ducto hepático comum e ducto colédoco",
                "Ducto da parótida, ducto cístico e ducto hepático",
                "Ducto nasolacrimal, ducto cístico e ducto colédoco"
            ],
            pagina: 43
        },

        {
            sistema: "digestorio",
            nivel: "médio",
            pergunta:
                "Quais estruturas estão apresentadas na página 44?",
            correta:
                "Glândulas salivares, parótida e ducto da parótida",
            alternativas: [
                "Glândulas salivares, parótida e ducto da parótida",
                "Sublingual, submandibular e fígado",
                "Pâncreas, fígado e vesícula biliar",
                "Duodeno, jejuno e íleo"
            ],
            pagina: 44
        },

        {
            sistema: "digestorio",
            nivel: "médio",
            pergunta:
                "Quais estruturas estão apresentadas na página 45?",
            correta:
                "Sublingual e submandibular",
            alternativas: [
                "Sublingual e submandibular",
                "Parótida e ducto da parótida",
                "Fígado e vesícula biliar",
                "Pâncreas e ducto pancreático"
            ],
            pagina: 45
        }
    );

    return questoes;
}

/* =========================================================
   MONTA O BANCO COMPLETO
========================================================= */

function criarBancoDeQuestoes() {

    const bancoEstruturalResp =
        gerarQuestoesPorGrupo(
            estruturasRespiratorio
        );

    const bancoEstruturalDig =
        gerarQuestoesPorGrupo(
            estruturasDigestorio
        );

    const bancoConceitual =
        gerarQuestoesConceituais();

    return [
        ...bancoEstruturalResp,
        ...bancoEstruturalDig,
        ...bancoConceitual
    ];
}

const bancoQuestoes = criarBancoDeQuestoes();

/* =========================================================
   SELEÇÃO DAS QUESTÕES
========================================================= */

function selecionarQuestoes() {

    const quantidade =
        quantidadePorModo[modoAtual];

    let bancoDisponivel = [];

    if (modoAtual === "simulado") {

        bancoDisponivel =
            embaralhar([
                ...bancoQuestoes
            ]);

    } else {

        bancoDisponivel =
            embaralhar(
                bancoQuestoes.filter(
                    q =>
                        q.sistema === sistemaAtual
                )
            );
    }

    /* -----------------------------------------------------
       PRIORIDADE DE DIFICULDADE
    ----------------------------------------------------- */

    let faceis =
        bancoDisponivel.filter(
            q => q.nivel === "fácil"
        );

    let medios =
        bancoDisponivel.filter(
            q => q.nivel === "médio"
        );

    let dificeis =
        bancoDisponivel.filter(
            q => q.nivel === "difícil"
        );

    faceis = embaralhar(faceis);
    medios = embaralhar(medios);
    dificeis = embaralhar(dificeis);

    const selecionadas = [];

    /*
       Distribuição:

       Fácil      ≈ 25%
       Médio      ≈ 40%
       Difícil    ≈ 35%
    */

    const qtdFacil =
        Math.round(quantidade * 0.25);

    const qtdMedio =
        Math.round(quantidade * 0.40);

    const qtdDificil =
        quantidade -
        qtdFacil -
        qtdMedio;

    selecionadas.push(
        ...faceis.slice(
            0,
            Math.min(
                qtdFacil,
                faceis.length
            )
        )
    );

    selecionadas.push(
        ...medios.slice(
            0,
            Math.min(
                qtdMedio,
                medios.length
            )
        )
    );

    selecionadas.push(
        ...dificeis.slice(
            0,
            Math.min(
                qtdDificil,
                dificeis.length
            )
        )
    );

    /*
       Caso alguma categoria não tenha perguntas
       suficientes, completa usando o restante do banco.
    */

    if (selecionadas.length < quantidade) {

        const idsSelecionados =
            new Set(
                selecionadas.map(
                    q =>
                        q.sistema +
                        "|" +
                        q.pergunta
                )
            );

        const restantes =
            bancoDisponivel.filter(
                q =>
                    !idsSelecionados.has(
                        q.sistema +
                        "|" +
                        q.pergunta
                    )
            );

        selecionadas.push(
            ...restantes.slice(
                0,
                quantidade -
                selecionadas.length
            )
        );
    }

    /*
       Se o banco possuir mais questões que o necessário,
       embaralha novamente.
    */

    return embaralhar(
        selecionadas
    ).slice(
        0,
        Math.min(
            quantidade,
            selecionadas.length
        )
    );
}

/* =========================================================
   SELECIONAR SISTEMA
========================================================= */

function selecionarSistema(sistema) {

    sistemaAtual = sistema;

    const configuracao =
        document.getElementById(
            "configuracao"
        );

    const titulo =
        document.getElementById(
            "tituloSistema"
        );

    if (titulo) {

        titulo.textContent =
            sistema === "respiratorio"
                ? "Sistema Respiratório"
                : "Sistema Digestório";
    }

    if (configuracao) {

        configuracao.classList.add(
            "ativa"
        );
    }

    document.querySelectorAll(
        ".card-sistema"
    ).forEach(card => {

        card.classList.remove(
            "selecionado"
        );
    });
}

/* =========================================================
   INICIAR JOGO
========================================================= */

function iniciarJogo(modo) {

    if (!sistemaAtual) {

        alert(
            "Selecione um sistema primeiro."
        );

        return;
    }

    modoAtual = modo;

    perguntasPartida =
        selecionarQuestoes();

    /*
       SEGURANÇA:
       Nunca permitir que a partida fique
       limitada a 10 questões.
    */

    const quantidadeSolicitada =
        quantidadePorModo[modoAtual];

    if (
        perguntasPartida.length >
        quantidadeSolicitada
    ) {

        perguntasPartida =
            perguntasPartida.slice(
                0,
                quantidadeSolicitada
            );
    }

    indiceAtual = 0;
    pontuacao = 0;
    respondida = false;
    historicoErros = [];

    mostrarTela("jogo");

    mostrarPergunta();
}

/* =========================================================
   MOSTRAR PERGUNTA
========================================================= */

function mostrarPergunta() {

    if (
        indiceAtual >=
        perguntasPartida.length
    ) {

        finalizarJogo();

        return;
    }

    respondida = false;

    const questao =
        perguntasPartida[
            indiceAtual
        ];

    const pergunta =
        document.getElementById(
            "pergunta"
        );

    const imagem =
        document.getElementById(
            "imagemAnatomica"
        );

    const semImagem =
        document.getElementById(
            "semImagem"
        );

    const alternativas =
        document.getElementById(
            "alternativas"
        );

    const feedback =
        document.getElementById(
            "feedback"
        );

    const proxima =
        document.getElementById(
            "proxima"
        );

    /* Pergunta */

    if (pergunta) {

        pergunta.textContent =
            questao.pergunta;
    }

    /* Imagem */

    if (imagem) {

        imagem.src =
            paginaImagem(
                questao.pagina
            );

        imagem.alt =
            `Imagem anatômica - página ${questao.pagina}`;

        imagem.style.display =
            "block";

        imagem.onerror =
            function() {

                imagem.style.display =
                    "none";

                if (semImagem) {

                    semImagem.style.display =
                        "block";

                    semImagem.textContent =
                        "Imagem não encontrada.";
                }
            };
    }

    if (semImagem) {

        semImagem.style.display =
            "none";
    }

    /* Feedback */

    if (feedback) {

        feedback.textContent = "";

        feedback.className =
            "feedback";
    }

    /* Botão próxima */

    if (proxima) {

        proxima.style.display =
            "none";
    }

    /* Alternativas */

    if (alternativas) {

        alternativas.innerHTML = "";

        const opcoes =
            embaralhar(
                questao.alternativas
            );

        opcoes.forEach(
            alternativa => {

                const botao =
                    document.createElement(
                        "button"
                    );

                botao.type =
                    "button";

                botao.className =
                    "alternativa";

                botao.textContent =
                    alternativa;

                botao.addEventListener(
                    "click",
                    () =>
                        responder(
                            alternativa,
                            botao
                        )
                );

                alternativas.appendChild(
                    botao
                );
            }
        );
    }

    atualizarInterface();
}

/* =========================================================
   ATUALIZA INTERFACE
========================================================= */

function atualizarInterface() {

    const contador =
        document.getElementById(
            "contador"
        );

    const pontuacaoElemento =
        document.getElementById(
            "pontuacao"
        );

    const progresso =
        document.getElementById(
            "progresso"
        );

    const total =
        perguntasPartida.length;

    const numero =
        indiceAtual + 1;

    if (contador) {

        contador.textContent =
            `${numero} / ${total}`;
    }

    if (pontuacaoElemento) {

        pontuacaoElemento.textContent =
            `Pontuação: ${pontuacao}`;
    }

    if (progresso) {

        progresso.style.width =
            `${(indiceAtual / total) * 100}%`;
    }
}

/* =========================================================
   RESPONDER
========================================================= */

function responder(
    resposta,
    botaoSelecionado
) {

    if (respondida) {
        return;
    }

    respondida = true;

    const questao =
        perguntasPartida[
            indiceAtual
        ];

    const botoes =
        document.querySelectorAll(
            ".alternativa"
        );

    botoes.forEach(
        botao => {

            botao.disabled =
                true;

            if (
                normalizar(
                    botao.textContent
                ) ===
                normalizar(
                    questao.correta
                )
            ) {

                botao.classList.add(
                    "correta"
                );
            }
        }
    );

    const feedback =
        document.getElementById(
            "feedback"
        );

    if (
        normalizar(resposta) ===
        normalizar(questao.correta)
    ) {

        pontuacao++;

        if (botaoSelecionado) {

            botaoSelecionado.classList.add(
                "correta"
            );
        }

        if (feedback) {

            feedback.textContent =
                "✓ Correto!";

            feedback.className =
                "feedback correto";
        }

    } else {

        if (botaoSelecionado) {

            botaoSelecionado.classList.add(
                "errada"
            );
        }

        historicoErros.push({
            pergunta:
                questao.pergunta,
            correta:
                questao.correta
        });

        if (feedback) {

            feedback.textContent =
                `✗ Incorreto. Resposta correta: ${questao.correta}`;

            feedback.className =
                "feedback incorreto";
        }
    }

    const proxima =
        document.getElementById(
            "proxima"
        );

    if (proxima) {

        proxima.style.display =
            "block";
    }

    atualizarInterface();
}

/* =========================================================
   PRÓXIMA QUESTÃO
========================================================= */

function proximaQuestao() {

    if (!respondida) {
        return;
    }

    indiceAtual++;

    mostrarPergunta();
}

/* Compatibilidade */

function proximaPergunta() {
    proximaQuestao();
}

/* =========================================================
   FINALIZAR
========================================================= */

function finalizarJogo() {

    if (document.getElementById("progresso")) {

        document.getElementById(
            "progresso"
        ).style.width = "100%";
    }

    mostrarResultado();
}

/* =========================================================
   RESULTADO
========================================================= */

function mostrarResultado() {

    mostrarTela("resultado");

    const total =
        perguntasPartida.length;

    const porcentagem =
        total > 0
            ? Math.round(
                (pontuacao / total) * 100
            )
            : 0;

    const porcentagemElemento =
        document.getElementById(
            "porcentagem"
        );

    const mensagem =
        document.getElementById(
            "mensagemResultado"
        );

    if (porcentagemElemento) {

        porcentagemElemento.textContent =
            `${porcentagem}%`;
    }

    if (mensagem) {

        let texto = "";

        if (porcentagem >= 90) {

            texto =
                `Excelente! Você acertou ${pontuacao} de ${total} questões.`;

        } else if (porcentagem >= 70) {

            texto =
                `Muito bom! Você acertou ${pontuacao} de ${total} questões.`;

        } else if (porcentagem >= 50) {

            texto =
                `Bom trabalho! Você acertou ${pontuacao} de ${total} questões. Continue estudando.`;

        } else {

            texto =
                `Você acertou ${pontuacao} de ${total} questões. Revise o conteúdo e tente novamente.`;
        }

        texto +=
            `<br><br>Erros nesta partida: ${historicoErros.length}`;

        mensagem.innerHTML =
            texto;
    }
}

/* =========================================================
   VOLTAR AO MENU
========================================================= */

function voltarMenu() {

    sistemaAtual = null;
    modoAtual = null;

    perguntasPartida = [];
    indiceAtual = 0;
    pontuacao = 0;
    respondida = false;
    historicoErros = [];

    mostrarTela("inicio");

    const configuracao =
        document.getElementById(
            "configuracao"
        );

    if (configuracao) {

        configuracao.classList.remove(
            "ativa"
        );
    }
}

/* =========================================================
   SAIR DO JOGO
========================================================= */

function sairJogo() {

    if (
        confirm(
            "Deseja sair desta partida?"
        )
    ) {

        voltarMenu();
    }
}

/* =========================================================
   JOGAR NOVAMENTE
========================================================= */

function jogarNovamente() {

    if (!sistemaAtual || !modoAtual) {

        voltarMenu();

        return;
    }

    iniciarJogo(
        modoAtual
    );
}

/* =========================================================
   TROCAR DE TELA
========================================================= */

function mostrarTela(nome) {

    const telas =
        document.querySelectorAll(
            ".tela"
        );

    telas.forEach(
        tela => {

            tela.classList.remove(
                "ativa"
            );
        }
    );

    let alvo = null;

    if (nome === "inicio") {

        alvo =
            document.getElementById(
                "inicio"
            );
    }

    if (nome === "jogo") {

        alvo =
            document.getElementById(
                "jogo"
            );
    }

    if (nome === "resultado") {

        alvo =
            document.getElementById(
                "resultado"
            );
    }

    if (alvo) {

        alvo.classList.add(
            "ativa"
        );
    }
}

/* =========================================================
   INICIALIZAÇÃO
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        mostrarTela("inicio");

        console.log(
            "Anatomia em Jogo carregado."
        );

        console.log(
            "Banco de questões:",
            bancoQuestoes.length
        );

        console.log(
            "Quantidade por modo:",
            quantidadePorModo
        );
    }
);

/* =========================================================
   DISPONIBILIZA AS FUNÇÕES PARA O HTML
========================================================= */

window.selecionarSistema =
    selecionarSistema;

window.iniciarJogo =
    iniciarJogo;

window.proximaQuestao =
    proximaQuestao;

window.proximaPergunta =
    proximaPergunta;

window.sairJogo =
    sairJogo;

window.voltarMenu =
    voltarMenu;

window.jogarNovamente =
    jogarNovamente;
