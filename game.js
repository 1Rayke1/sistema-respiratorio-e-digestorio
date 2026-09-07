"use strict";

/* =========================================================
   ANATOMIA EM JOGO
   SISTEMA RESPIRATÓRIO + SISTEMA DIGESTÓRIO
   ========================================================= */

let sistemaAtual = "respiratorio";
let modoAtual = "estudar";

let perguntasJogo = [];
let indicePergunta = 0;
let pontuacao = 0;
let respondida = false;


/* =========================================================
   SISTEMA RESPIRATÓRIO
   PÁGINAS 02–26 DO PDF
   ========================================================= */

const respiratorio = [

    {
        id: "r01",
        nome: "Raiz do nariz",
        pagina: 2,
        funcao: "É a porção superior do nariz externo, localizada na região de união do nariz com a face."
    },

    {
        id: "r02",
        nome: "Dorso do nariz",
        pagina: 2,
        funcao: "Forma a parte alongada do nariz externo entre a raiz e o ápice."
    },

    {
        id: "r03",
        nome: "Ápice do nariz",
        pagina: 2,
        funcao: "Corresponde à extremidade anterior do nariz externo."
    },

    {
        id: "r04",
        nome: "Nariz externo",
        pagina: 2,
        funcao: "Forma a porção externa inicial das vias respiratórias."
    },

    {
        id: "r05",
        nome: "Asas do nariz",
        pagina: 3,
        funcao: "Formam as porções laterais do nariz externo e ajudam a delimitar as narinas."
    },

    {
        id: "r06",
        nome: "Base do nariz",
        pagina: 3,
        funcao: "Forma a porção inferior do nariz externo e está relacionada às narinas."
    },

    {
        id: "r07",
        nome: "Narinas",
        pagina: 3,
        funcao: "São as aberturas externas pelas quais o ar entra e sai do nariz."
    },

    {
        id: "r08",
        nome: "Cavidade nasal",
        pagina: 4,
        funcao: "É uma passagem das vias respiratórias onde o ar é conduzido e condicionado."
    },

    {
        id: "r09",
        nome: "Abertura piriforme",
        pagina: 4,
        funcao: "É a abertura óssea anterior relacionada à cavidade nasal."
    },

    {
        id: "r10",
        nome: "Coanas",
        pagina: 4,
        funcao: "São as aberturas posteriores da cavidade nasal que fazem comunicação com a nasofaringe."
    },

    {
        id: "r11",
        nome: "Concha nasal superior",
        pagina: 5,
        funcao: "É uma projeção da cavidade nasal que aumenta a superfície de contato do ar com a mucosa."
    },

    {
        id: "r12",
        nome: "Concha nasal média",
        pagina: 5,
        funcao: "Participa do direcionamento do fluxo de ar e aumenta a superfície de contato com a mucosa."
    },

    {
        id: "r13",
        nome: "Concha nasal inferior",
        pagina: 5,
        funcao: "Participa do direcionamento do fluxo de ar e do condicionamento do ar inspirado."
    },

    {
        id: "r14",
        nome: "Meato nasal superior",
        pagina: 6,
        funcao: "É o espaço localizado inferiormente à concha nasal superior."
    },

    {
        id: "r15",
        nome: "Meato nasal médio",
        pagina: 6,
        funcao: "É uma passagem da cavidade nasal relacionada à drenagem de estruturas dos seios paranasais."
    },

    {
        id: "r16",
        nome: "Meato nasal inferior",
        pagina: 6,
        funcao: "É o espaço localizado inferiormente à concha nasal inferior e relacionado à abertura do ducto nasolacrimal."
    },

    {
        id: "r17",
        nome: "Epitélio olfatório",
        pagina: 7,
        funcao: "Contém células receptoras especializadas relacionadas à percepção dos estímulos olfatórios."
    },

    {
        id: "r18",
        nome: "Nervo olfatório",
        pagina: 7,
        funcao: "Conduz informações relacionadas ao olfato em direção ao sistema nervoso central."
    },

    {
        id: "r19",
        nome: "Ducto nasolacrimal",
        pagina: 7,
        funcao: "Conduz as lágrimas da região ocular para a cavidade nasal."
    },

    {
        id: "r20",
        nome: "Seio frontal",
        pagina: 9,
        funcao: "É uma cavidade pneumática localizada no osso frontal."
    },

    {
        id: "r21",
        nome: "Seio esfenoidal",
        pagina: 9,
        funcao: "É uma cavidade pneumática localizada no osso esfenoide."
    },

    {
        id: "r22",
        nome: "Seios etmoidais",
        pagina: 9,
        funcao: "São cavidades pneumáticas relacionadas ao osso etmoide."
    },

    {
        id: "r23",
        nome: "Seios maxilares",
        pagina: 9,
        funcao: "São cavidades pneumáticas localizadas nas maxilas."
    },

    {
        id: "r24",
        nome: "Tórus tubal",
        pagina: 10,
        funcao: "É uma elevação da mucosa da nasofaringe relacionada à abertura da tuba auditiva."
    },

    {
        id: "r25",
        nome: "Óstio faríngeo da tuba auditiva",
        pagina: 10,
        funcao: "É a abertura da tuba auditiva na faringe."
    },

    {
        id: "r26",
        nome: "Faringe",
        pagina: 10,
        funcao: "É uma região comum aos sistemas respiratório e digestório."
    },

    {
        id: "r27",
        nome: "Nasofaringe",
        pagina: 11,
        funcao: "É a porção superior da faringe situada posteriormente à cavidade nasal."
    },

    {
        id: "r28",
        nome: "Orofaringe",
        pagina: 11,
        funcao: "É a porção da faringe localizada posteriormente à cavidade oral."
    },

    {
        id: "r29",
        nome: "Laringofaringe",
        pagina: 11,
        funcao: "É a porção inferior da faringe, relacionada às passagens em direção à laringe e ao esôfago."
    },

    {
        id: "r30",
        nome: "Tonsilas faríngeas",
        pagina: 12,
        funcao: "São estruturas de tecido linfoide localizadas na região da nasofaringe."
    },

    {
        id: "r31",
        nome: "Epiglote",
        pagina: 13,
        funcao: "Participa da proteção das vias respiratórias durante a deglutição."
    },

    {
        id: "r32",
        nome: "Prega vestibular",
        pagina: 13,
        funcao: "É uma prega da laringe localizada superiormente à prega vocal."
    },

    {
        id: "r33",
        nome: "Prega vocal",
        pagina: 13,
        funcao: "Participa da produção da voz por meio de sua vibração."
    },

    {
        id: "r34",
        nome: "Laringe",
        pagina: 13,
        funcao: "Conduz o ar, participa da produção da voz e protege as vias respiratórias."
    },

    {
        id: "r35",
        nome: "Cartilagem epiglótica",
        pagina: 15,
        funcao: "É a cartilagem que dá sustentação à epiglote."
    },

    {
        id: "r36",
        nome: "Cartilagem da tireoide",
        pagina: 15,
        funcao: "É uma das principais cartilagens estruturais da laringe."
    },

    {
        id: "r37",
        nome: "Cartilagem cricóide",
        pagina: 15,
        funcao: "Forma uma estrutura cartilaginosa em anel na região inferior da laringe."
    },

    {
        id: "r38",
        nome: "Cartilagem corniculada",
        pagina: 16,
        funcao: "É uma pequena cartilagem localizada na região posterior da laringe."
    },

    {
        id: "r39",
        nome: "Cartilagem aritenóide",
        pagina: 16,
        funcao: "Participa do posicionamento e dos movimentos relacionados às pregas vocais."
    },

    {
        id: "r40",
        nome: "Anéis cartilaginosos",
        pagina: 17,
        funcao: "Ajudam a manter a traqueia aberta e evitam seu colabamento."
    },

    {
        id: "r41",
        nome: "Ligamentos anulares",
        pagina: 17,
        funcao: "Relacionam-se à união dos anéis cartilaginosos da traqueia."
    },

    {
        id: "r42",
        nome: "Parede posterior da traqueia",
        pagina: 17,
        funcao: "É a porção posterior da traqueia relacionada ao esôfago."
    },

    {
        id: "r43",
        nome: "Carina",
        pagina: 17,
        funcao: "É a região inferior da traqueia onde ocorre sua bifurcação nos brônquios principais."
    },

    {
        id: "r44",
        nome: "Traqueia",
        pagina: 17,
        funcao: "Conduz o ar entre a laringe e os brônquios principais."
    },

    {
        id: "r45",
        nome: "Brônquio principal esquerdo",
        pagina: 18,
        funcao: "Conduz o ar da traqueia para o pulmão esquerdo."
    },

    {
        id: "r46",
        nome: "Brônquio principal direito",
        pagina: 18,
        funcao: "Conduz o ar da traqueia para o pulmão direito."
    },

    {
        id: "r47",
        nome: "Brônquio lobar superior direito",
        pagina: 18,
        funcao: "Conduz o ar para o lobo superior do pulmão direito."
    },

    {
        id: "r48",
        nome: "Brônquio lobar médio direito",
        pagina: 18,
        funcao: "Conduz o ar para o lobo médio do pulmão direito."
    },

    {
        id: "r49",
        nome: "Brônquio lobar inferior direito",
        pagina: 18,
        funcao: "Conduz o ar para o lobo inferior do pulmão direito."
    },

    {
        id: "r50",
        nome: "Brônquio lobar superior esquerdo",
        pagina: 20,
        funcao: "Conduz o ar para o lobo superior do pulmão esquerdo."
    },

    {
        id: "r51",
        nome: "Brônquio lobar inferior esquerdo",
        pagina: 20,
        funcao: "Conduz o ar para o lobo inferior do pulmão esquerdo."
    },

    {
        id: "r52",
        nome: "Brônquios segmentares",
        pagina: 21,
        funcao: "Distribuem o ar para os segmentos broncopulmonares."
    },

    {
        id: "r53",
        nome: "Bronquíolos",
        pagina: 21,
        funcao: "São ramificações menores das vias respiratórias que conduzem o ar para regiões mais distais."
    },

    {
        id: "r54",
        nome: "Lobo superior esquerdo",
        pagina: 22,
        funcao: "É uma das divisões anatômicas do pulmão esquerdo."
    },

    {
        id: "r55",
        nome: "Lobo inferior esquerdo",
        pagina: 22,
        funcao: "É uma das divisões anatômicas do pulmão esquerdo."
    },

    {
        id: "r56",
        nome: "Fissura oblíqua",
        pagina: 22,
        funcao: "Separa os lobos superior e inferior do pulmão esquerdo."
    },

    {
        id: "r57",
        nome: "Lobo superior direito",
        pagina: 23,
        funcao: "É uma das divisões anatômicas do pulmão direito."
    },

    {
        id: "r58",
        nome: "Fissura horizontal",
        pagina: 23,
        funcao: "Separa o lobo superior do lobo médio do pulmão direito."
    },

    {
        id: "r59",
        nome: "Lobo médio",
        pagina: 23,
        funcao: "É o lobo pulmonar presente no pulmão direito."
    },

    {
        id: "r60",
        nome: "Fissura oblíqua",
        pagina: 23,
        funcao: "Participa da separação do lobo inferior em relação aos lobos superior e médio do pulmão direito."
    },

    {
        id: "r61",
        nome: "Lobo inferior direito",
        pagina: 23,
        funcao: "É a divisão inferior do pulmão direito."
    },

    {
        id: "r62",
        nome: "Base do pulmão",
        pagina: 24,
        funcao: "É a superfície inferior do pulmão relacionada ao diafragma."
    },

    {
        id: "r63",
        nome: "Ápice do pulmão",
        pagina: 24,
        funcao: "É a extremidade superior do pulmão."
    },

    {
        id: "r64",
        nome: "Face costal",
        pagina: 25,
        funcao: "É a superfície pulmonar relacionada à parede torácica e às costelas."
    },

    {
        id: "r65",
        nome: "Face diafragmática",
        pagina: 25,
        funcao: "É a superfície inferior do pulmão relacionada ao diafragma."
    },

    {
        id: "r66",
        nome: "Face medial",
        pagina: 25,
        funcao: "É a superfície do pulmão voltada para o mediastino."
    },

    {
        id: "r67",
        nome: "Hilo pulmonar",
        pagina: 26,
        funcao: "É a região por onde passam estruturas como brônquios, vasos, vasos linfáticos e nervos."
    }

];


/* =========================================================
   SISTEMA DIGESTÓRIO
   PÁGINAS 28–45 DO PDF
   ========================================================= */

const digestorio = [

    {
        id: "d01",
        nome: "Lábio superior",
        pagina: 28,
        funcao: "Participa do fechamento da boca e da formação da rima labial."
    },

    {
        id: "d02",
        nome: "Lábio inferior",
        pagina: 28,
        funcao: "Participa do fechamento da boca e da formação da rima labial."
    },

    {
        id: "d03",
        nome: "Vestíbulo bucal",
        pagina: 28,
        funcao: "É o espaço situado entre os lábios ou bochechas e as arcadas dentárias."
    },

    {
        id: "d04",
        nome: "Arcada dentária",
        pagina: 28,
        funcao: "Relaciona-se à presença dos dentes e participa da mastigação."
    },

    {
        id: "d05",
        nome: "Cavidade bucal",
        pagina: 28,
        funcao: "Recebe o alimento e participa da mastigação e da formação do bolo alimentar."
    },

    {
        id: "d06",
        nome: "Língua — musculatura intrínseca",
        pagina: 29,
        funcao: "Permite alterações no formato da língua, contribuindo para a manipulação do alimento."
    },

    {
        id: "d07",
        nome: "Língua — musculatura extrínseca",
        pagina: 29,
        funcao: "Permite movimentos da língua em relação às estruturas vizinhas."
    },

    {
        id: "d08",
        nome: "Palato duro",
        pagina: 29,
        funcao: "Forma a porção anterior rígida do teto da boca e separa as cavidades oral e nasal."
    },

    {
        id: "d09",
        nome: "Palato mole",
        pagina: 29,
        funcao: "É uma estrutura móvel que participa do fechamento da comunicação com a nasofaringe durante a deglutição."
    },

    {
        id: "d10",
        nome: "Úvula palatina",
        pagina: 29,
        funcao: "Participa dos movimentos do palato mole."
    },

    {
        id: "d11",
        nome: "Rima labial",
        pagina: 29,
        funcao: "É a abertura delimitada pelos lábios."
    },

    {
        id: "d12",
        nome: "Faringe",
        pagina: 30,
        funcao: "Participa da passagem do alimento e do ar."
    },

    {
        id: "d13",
        nome: "Nasofaringe",
        pagina: 30,
        funcao: "É a porção superior da faringe relacionada principalmente à passagem do ar."
    },

    {
        id: "d14",
        nome: "Orofaringe",
        pagina: 30,
        funcao: "É uma região da faringe que recebe conteúdo proveniente da cavidade oral."
    },

    {
        id: "d15",
        nome: "Laringofaringe",
        pagina: 30,
        funcao: "É a porção inferior da faringe relacionada à passagem do bolo alimentar para o esôfago."
    },

    {
        id: "d16",
        nome: "Esôfago",
        pagina: 31,
        funcao: "Conduz o bolo alimentar da faringe até o estômago."
    },

    {
        id: "d17",
        nome: "Pregas gástricas",
        pagina: 32,
        funcao: "Permitem que o estômago se distenda quando recebe alimento."
    },

    {
        id: "d18",
        nome: "Óstio cárdico",
        pagina: 32,
        funcao: "É a abertura pela qual o esôfago se comunica com o estômago."
    },

    {
        id: "d19",
        nome: "Óstio pilórico",
        pagina: 32,
        funcao: "É a abertura do estômago que se comunica com o duodeno."
    },

    {
        id: "d20",
        nome: "Região cárdia",
        pagina: 33,
        funcao: "É a região do estômago próxima à entrada do esôfago."
    },

    {
        id: "d21",
        nome: "Região pilórica",
        pagina: 33,
        funcao: "É a região distal do estômago relacionada à comunicação com o duodeno."
    },

    {
        id: "d22",
        nome: "Fundo do estômago",
        pagina: 34,
        funcao: "É a porção superior do estômago."
    },

    {
        id: "d23",
        nome: "Corpo do estômago",
        pagina: 34,
        funcao: "É a principal região central do estômago."
    },

    {
        id: "d24",
        nome: "Curvatura menor do estômago",
        pagina: 34,
        funcao: "É a margem côncava do estômago."
    },

    {
        id: "d25",
        nome: "Curvatura maior do estômago",
        pagina: 34,
        funcao: "É a margem convexa e mais extensa do estômago."
    },

    {
        id: "d26",
        nome: "Intestino delgado",
        pagina: 35,
        funcao: "É o segmento do tubo digestório em que ocorre grande parte da digestão e absorção de nutrientes."
    },

    {
        id: "d27",
        nome: "Duodeno",
        pagina: 35,
        funcao: "Recebe o conteúdo proveniente do estômago e participa da digestão."
    },

    {
        id: "d28",
        nome: "Ampola duodenal",
        pagina: 35,
        funcao: "É a porção inicial dilatada do duodeno."
    },

    {
        id: "d29",
        nome: "Pregas circulares do duodeno",
        pagina: 35,
        funcao: "Aumentam a superfície interna do intestino delgado."
    },

    {
        id: "d30",
        nome: "Flexura duodenojejunal",
        pagina: 35,
        funcao: "Marca a transição entre o duodeno e o jejuno."
    },

    {
        id: "d31",
        nome: "Jejuno",
        pagina: 36,
        funcao: "É uma porção do intestino delgado relacionada à digestão e absorção."
    },

    {
        id: "d32",
        nome: "Íleo",
        pagina: 36,
        funcao: "É a porção final do intestino delgado e comunica-se com o intestino grosso."
    },

    {
        id: "d33",
        nome: "Ceco",
        pagina: 37,
        funcao: "É a primeira porção do intestino grosso."
    },

    {
        id: "d34",
        nome: "Junção ileocecocólica",
        pagina: 37,
        funcao: "É a região de transição entre o íleo e o intestino grosso."
    },

    {
        id: "d35",
        nome: "Colo ascendente",
        pagina: 38,
        funcao: "É a porção do intestino grosso que sobe pelo lado direito do abdome."
    },

    {
        id: "d36",
        nome: "Colo transverso",
        pagina: 38,
        funcao: "É a porção do intestino grosso que atravessa transversalmente o abdome."
    },

    {
        id: "d37",
        nome: "Colo descendente",
        pagina: 38,
        funcao: "É a porção do intestino grosso que desce pelo lado esquerdo do abdome."
    },

    {
        id: "d38",
        nome: "Colo sigmoide",
        pagina: 38,
        funcao: "É a porção do intestino grosso que conduz o conteúdo em direção ao reto."
    },

    {
        id: "d39",
        nome: "Haustros",
        pagina: 39,
        funcao: "São saculações características da parede do intestino grosso."
    },

    {
        id: "d40",
        nome: "Intestino grosso",
        pagina: 39,
        funcao: "Participa da absorção de água e da formação das fezes."
    },

    {
        id: "d41",
        nome: "Apêndice vermiforme",
        pagina: 39,
        funcao: "É uma estrutura tubular ligada ao ceco."
    },

    {
        id: "d42",
        nome: "Canal retal",
        pagina: 39,
        funcao: "Participa da condução e armazenamento temporário do conteúdo fecal."
    },

    {
        id: "d43",
        nome: "Ânus",
        pagina: 39,
        funcao: "É a abertura terminal do tubo digestório."
    },

    {
        id: "d44",
        nome: "Tênias",
        pagina: 39,
        funcao: "São faixas longitudinais de músculo liso presentes no intestino grosso."
    },

    {
        id: "d45",
        nome: "Fígado",
        pagina: 40,
        funcao: "Produz bile e participa de diversas funções metabólicas."
    },

    {
        id: "d46",
        nome: "Lobo direito do fígado",
        pagina: 40,
        funcao: "É uma das principais divisões anatômicas do fígado."
    },

    {
        id: "d47",
        nome: "Lobo esquerdo do fígado",
        pagina: 40,
        funcao: "É uma divisão anatômica do fígado localizada à esquerda."
    },

    {
        id: "d48",
        nome: "Lobo caudado",
   
