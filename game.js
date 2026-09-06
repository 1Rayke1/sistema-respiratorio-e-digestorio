/* ============================================================
   ANATOMIA EM JOGO
   Sistema Respiratório + Sistema Digestório
   Base anatômica: pranchas do PDF fornecido
   Desenvolvedor: Rayke Jovino de Souza
   ============================================================ */

"use strict";

/* ============================================================
   CONFIGURAÇÕES
   ============================================================ */

const TOTAL_ALTERNATIVAS = 4;

let sistemaAtual = "respiratorio";
let modoAtual = "estudar";
let perguntasJogo = [];
let indicePergunta = 0;
let pontuacao = 0;
let respondida = false;
let historicoPerguntas = [];


/* ============================================================
   SISTEMA RESPIRATÓRIO
   PÁGINAS 2–26
   ============================================================ */

const respiratorio = [

  {
    id:"resp-01",
    nome:"Raiz do nariz",
    pagina:2,
    funcao:"É a porção superior do nariz externo, situada próxima à região de união com a face e relacionada à sustentação e posição do nariz."
  },

  {
    id:"resp-02",
    nome:"Dorso do nariz",
    pagina:2,
    funcao:"Forma a parte alongada do nariz externo entre a raiz e o ápice."
  },

  {
    id:"resp-03",
    nome:"Ápice do nariz",
    pagina:2,
    funcao:"Corresponde à extremidade anterior do nariz externo."
  },

  {
    id:"resp-04",
    nome:"Nariz externo",
    pagina:2,
    funcao:"Constitui a porção externa inicial das vias respiratórias."
  },

  {
    id:"resp-05",
    nome:"Asas do nariz",
    pagina:3,
    funcao:"Formam as porções laterais móveis do nariz e ajudam a delimitar as narinas."
  },

  {
    id:"resp-06",
    nome:"Base do nariz",
    pagina:3,
    funcao:"Forma a porção inferior do nariz externo e está relacionada diretamente às narinas."
  },

  {
    id:"resp-07",
    nome:"Narinas",
    pagina:3,
    funcao:"São as aberturas externas pelas quais o ar entra e sai do nariz."
  },

  {
    id:"resp-08",
    nome:"Cavidade nasal",
    pagina:4,
    funcao:"Conduz o ar e participa de seu aquecimento, umidificação e filtragem."
  },

  {
    id:"resp-09",
    nome:"Abertura piriforme",
    pagina:4,
    funcao:"É a abertura óssea anterior da cavidade nasal."
  },

  {
    id:"resp-10",
    nome:"Coanas",
    pagina:4,
    funcao:"São as aberturas posteriores da cavidade nasal que estabelecem comunicação com a nasofaringe."
  },

  {
    id:"resp-11",
    nome:"Concha nasal superior",
    pagina:5,
    funcao:"Projeta-se na cavidade nasal e ajuda a aumentar a superfície de contato do ar com a mucosa."
  },

  {
    id:"resp-12",
    nome:"Concha nasal média",
    pagina:5,
    funcao:"Participa do direcionamento do fluxo de ar e aumenta a área de contato com a mucosa nasal."
  },

  {
    id:"resp-13",
    nome:"Concha nasal inferior",
    pagina:5,
    funcao:"Contribui para o direcionamento do fluxo de ar e para o condicionamento do ar."
  },

  {
    id:"resp-14",
    nome:"Meato nasal superior",
    pagina:6,
    funcao:"É um espaço situado inferiormente à concha nasal superior."
  },

  {
    id:"resp-15",
    nome:"Meato nasal médio",
    pagina:6,
    funcao:"É uma passagem da cavidade nasal associada à drenagem de estruturas dos seios paranasais."
  },

  {
    id:"resp-16",
    nome:"Meato nasal inferior",
    pagina:6,
    funcao:"É a passagem localizada inferiormente à concha nasal inferior e recebe a abertura do ducto nasolacrimal."
  },

  {
    id:"resp-17",
    nome:"Epitélio olfatório",
    pagina:7,
    funcao:"Contém células receptoras especializadas capazes de detectar estímulos químicos relacionados ao olfato."
  },

  {
    id:"resp-18",
    nome:"Nervo olfatório",
    pagina:7,
    funcao:"Conduz informações relacionadas ao olfato desde os receptores olfatórios em direção ao sistema nervoso central."
  },

  {
    id:"resp-19",
    nome:"Ducto nasolacrimal",
    pagina:7,
    funcao:"Conduz as lágrimas da região ocular para a cavidade nasal."
  },

  {
    id:"resp-20",
    nome:"Seio frontal",
    pagina:9,
    funcao:"É uma cavidade pneumática localizada no osso frontal e integra os seios paranasais."
  },

  {
    id:"resp-21",
    nome:"Seio esfenoidal",
    pagina:9,
    funcao:"É uma cavidade pneumática do osso esfenoide e integra os seios paranasais."
  },

  {
    id:"resp-22",
    nome:"Seios etmoidais",
    pagina:9,
    funcao:"São conjuntos de pequenas cavidades pneumáticas do etmóide."
  },

  {
    id:"resp-23",
    nome:"Seios maxilares",
    pagina:9,
    funcao:"São cavidades pneumáticas localizadas nas maxilas."
  },

  {
    id:"resp-24",
    nome:"Tórus tubal",
    pagina:10,
    funcao:"É uma elevação da mucosa da nasofaringe relacionada à região da abertura da tuba auditiva."
  },

  {
    id:"resp-25",
    nome:"Óstio faríngeo da tuba auditiva",
    pagina:10,
    funcao:"É a abertura da tuba auditiva na faringe."
  },

  {
    id:"resp-26",
    nome:"Faringe",
    pagina:10,
    funcao:"É um tubo muscular comum aos sistemas respiratório e digestório."
  },

  {
    id:"resp-27",
    nome:"Nasofaringe",
    pagina:11,
    funcao:"É a porção superior da faringe, situada posteriormente à cavidade nasal."
  },

  {
    id:"resp-28",
    nome:"Orofaringe",
    pagina:11,
    funcao:"É a porção da faringe situada posteriormente à cavidade oral."
  },

  {
    id:"resp-29",
    nome:"Laringofaringe",
    pagina:11,
    funcao:"É a porção inferior da faringe que conduz o conteúdo em direção à laringe ou ao esôfago."
  },

  {
    id:"resp-30",
    nome:"Tonsilas faríngeas",
    pagina:12,
    funcao:"Participam da defesa imunológica das vias aéreas superiores."
  },

  {
    id:"resp-31",
    nome:"Epiglote",
    pagina:13,
    funcao:"Atua na proteção das vias aéreas durante a deglutição."
  },

  {
    id:"resp-32",
    nome:"Prega vestibular",
    pagina:13,
    funcao:"É uma prega da laringe localizada superiormente à prega vocal."
  },

  {
    id:"resp-33",
    nome:"Prega vocal",
    pagina:13,
    funcao:"Participa diretamente da produção da voz por meio da vibração."
  },

  {
    id:"resp-34",
    nome:"Laringe",
    pagina:13,
    funcao:"Conduz o ar, participa da produção da voz e protege as vias respiratórias inferiores."
  },

  {
    id:"resp-35",
    nome:"Cartilagem epiglótica",
    pagina:15,
    funcao:"Dá sustentação à epiglote."
  },

  {
    id:"resp-36",
    nome:"Cartilagem da tireoide",
    pagina:15,
    funcao:"É uma importante cartilagem estrutural da laringe."
  },

  {
    id:"resp-37",
    nome:"Cartilagem cricóide",
    pagina:15,
    funcao:"Forma um anel cartilaginoso da laringe e mantém a sustentação da via aérea."
  },

  {
    id:"resp-38",
    nome:"Cartilagem corniculada",
    pagina:16,
    funcao:"É uma pequena cartilagem da laringe relacionada à região posterior da entrada laríngea."
  },

  {
    id:"resp-39",
    nome:"Cartilagem aritenóide",
    pagina:16,
    funcao:"Participa do movimento e posicionamento das pregas vocais."
  },

  {
    id:"resp-40",
    nome:"Anéis cartilaginosos",
    pagina:17,
    funcao:"Mantêm a traqueia aberta e evitam seu colabamento."
  },

  {
    id:"resp-41",
    nome:"Ligamentos anulares",
    pagina:17,
    funcao:"Unem os anéis cartilaginosos da traqueia e contribuem para sua flexibilidade."
  },

  {
    id:"resp-42",
    nome:"Parede posterior da traqueia",
    pagina:17,
    funcao:"É uma região posterior membranosa da traqueia relacionada ao esôfago."
  },

  {
    id:"resp-43",
    nome:"Carina",
    pagina:17,
    funcao:"É a região de bifurcação inferior da traqueia onde ocorre a divisão em brônquios principais."
  },

  {
    id:"resp-44",
    nome:"Traqueia",
    pagina:17,
    funcao:"Conduz o ar entre a laringe e os brônquios."
  },

  {
    id:"resp-45",
    nome:"Brônquio principal esquerdo",
    pagina:18,
    funcao:"Conduz o ar da traqueia para o pulmão esquerdo."
  },

  {
    id:"resp-46",
    nome:"Brônquio principal direito",
    pagina:18,
    funcao:"Conduz o ar da traqueia para o pulmão direito."
  },

  {
    id:"resp-47",
    nome:"Brônquio lobar superior direito",
    pagina:18,
    funcao:"Conduz o ar para o lobo superior do pulmão direito."
  },

  {
    id:"resp-48",
    nome:"Brônquio lobar médio direito",
    pagina:18,
    funcao:"Conduz o ar para o lobo médio do pulmão direito."
  },

  {
    id:"resp-49",
    nome:"Brônquio lobar inferior direito",
    pagina:18,
    funcao:"Conduz o ar para o lobo inferior do pulmão direito."
  },

  {
    id:"resp-50",
    nome:"Brônquio lobar superior esquerdo",
    pagina:20,
    funcao:"Conduz o ar para o lobo superior do pulmão esquerdo."
  },

  {
    id:"resp-51",
    nome:"Brônquio lobar inferior esquerdo",
    pagina:20,
    funcao:"Conduz o ar para o lobo inferior do pulmão esquerdo."
  },

  {
    id:"resp-52",
    nome:"Brônquios segmentares",
    pagina:21,
    funcao:"Distribuem o ar para os segmentos broncopulmonares."
  },

  {
    id:"resp-53",
    nome:"Bronquíolos",
    pagina:21,
    funcao:"São ramificações menores das vias respiratórias que conduzem o ar em direção às regiões respiratórias."
  },

  {
    id:"resp-54",
    nome:"Lobo superior esquerdo",
    pagina:22,
    funcao:"É uma divisão anatômica do pulmão esquerdo que recebe ar pelo brônquio lobar superior esquerdo."
  },

  {
    id:"resp-55",
    nome:"Lobo inferior esquerdo",
    pagina:22,
    funcao:"É uma divisão anatômica do pulmão esquerdo que recebe ar pelo brônquio lobar inferior esquerdo."
  },

  {
    id:"resp-56",
    nome:"Fissura oblíqua esquerda",
    pagina:22,
    funcao:"Separa os lobos superior e inferior do pulmão esquerdo."
  },

  {
    id:"resp-57",
    nome:"Lobo superior direito",
    pagina:23,
    funcao:"É uma divisão do pulmão direito que recebe ar pelo brônquio lobar superior direito."
  },

  {
    id:"resp-58",
    nome:"Fissura horizontal",
    pagina:23,
    funcao:"Separa o lobo superior do lobo médio do pulmão direito."
  },

  {
    id:"resp-59",
    nome:"Lobo médio",
    pagina:23,
    funcao:"É o lobo exclusivo do pulmão direito."
  },

  {
    id:"resp-60",
    nome:"Fissura oblíqua direita",
    pagina:23,
    funcao:"Separa o lobo inferior dos lobos superior e médio no pulmão direito."
  },

  {
    id:"resp-61",
    nome:"Lobo inferior direito",
    pagina:23,
    funcao:"É a divisão inferior do pulmão direito."
  },

  {
    id:"resp-62",
    nome:"Base do pulmão",
    pagina:24,
    funcao:"É a superfície inferior do pulmão relacionada ao diafragma."
  },

  {
    id:"resp-63",
    nome:"Ápice do pulmão",
    pagina:24,
    funcao:"É a extremidade superior do pulmão."
  },

  {
    id:"resp-64",
    nome:"Face costal",
    pagina:25,
    funcao:"É a superfície pulmonar convexa relacionada às costelas e à parede torácica."
  },

  {
    id:"resp-65",
    nome:"Face diafragmática",
    pagina:25,
    funcao:"É a superfície inferior do pulmão que repousa sobre o diafragma."
  },

  {
    id:"resp-66",
    nome:"Face medial",
    pagina:25,
    funcao:"É a superfície pulmonar voltada para o mediastino."
  },

  {
    id:"resp-67",
    nome:"Hilo pulmonar",
    pagina:26,
    funcao:"É a região da face medial por onde passam brônquios, vasos sanguíneos, vasos linfáticos e nervos."
  }

];


/* ============================================================
   SISTEMA DIGESTÓRIO
   PÁGINAS 28–45
   ============================================================ */

const digestorio = [

  {
    id:"dig-01",
    nome:"Lábio superior",
    pagina:28,
    funcao:"Participa do fechamento da boca, da apreensão do alimento e da formação da rima labial."
  },

  {
    id:"dig-02",
    nome:"Lábio inferior",
    pagina:28,
    funcao:"Participa do fechamento da boca, da apreensão do alimento e da formação da rima labial."
  },

  {
    id:"dig-03",
    nome:"Vestíbulo bucal",
    pagina:28,
    funcao:"É o espaço entre os lábios ou bochechas e as arcadas dentárias."
  },

  {
    id:"dig-04",
    nome:"Arcada dentária",
    pagina:28,
    funcao:"Os dentes participam da apreensão e fragmentação mecânica dos alimentos durante a mastigação."
  },

  {
    id:"dig-05",
    nome:"Cavidade bucal",
    pagina:28,
    funcao:"Recebe o alimento e participa da mastigação, mistura com saliva e formação do bolo alimentar."
  },

  {
    id:"dig-06",
    nome:"Língua — musculatura intrínseca",
    pagina:29,
    funcao:"Permite alterações no formato da língua, sendo importante para manipulação do alimento."
  },

  {
    id:"dig-07",
    nome:"Língua — musculatura extrínseca",
    pagina:29,
    funcao:"Movimenta a língua em relação às estruturas vizinhas, participando da manipulação do alimento e da deglutição."
  },

  {
    id:"dig-08",
    nome:"Palato duro",
    pagina:29,
    funcao:"Forma a porção anterior rígida do teto da boca e separa a cavidade oral da cavidade nasal."
  },

  {
    id:"dig-09",
    nome:"Palato mole",
    pagina:29,
    funcao:"É uma estrutura muscular móvel que participa do fechamento da comunicação com a nasofaringe durante a deglutição."
  },

  {
    id:"dig-10",
    nome:"Úvula palatina",
    pagina:29,
    funcao:"Participa dos movimentos do palato mole e auxilia no fechamento da comunicação com a nasofaringe."
  },

  {
    id:"dig-11",
    nome:"Rima labial",
    pagina:29,
    funcao:"É a abertura delimitada pelos lábios."
  },

  {
    id:"dig-12",
    nome:"Faringe",
    pagina:30,
    funcao:"Participa da passagem do alimento e do ar."
  },

  {
    id:"dig-13",
    nome:"Nasofaringe",
    pagina:30,
    funcao:"É a porção superior da faringe relacionada principalmente à passagem do ar."
  },

  {
    id:"dig-14",
    nome:"Orofaringe",
    pagina:30,
    funcao:"Recebe conteúdo proveniente da cavidade oral e participa da condução do bolo alimentar."
  },

  {
    id:"dig-15",
    nome:"Laringofaringe",
    pagina:30,
    funcao:"É a porção inferior da faringe que participa da condução do bolo alimentar em direção ao esôfago."
  },

  {
    id:"dig-16",
    nome:"Esôfago",
    pagina:31,
    funcao:"Conduz o bolo alimentar da faringe até o estômago por meio de movimentos peristálticos."
  },

  {
    id:"dig-17",
    nome:"Pregas gástricas",
    pagina:32,
    funcao:"Permitem que o estômago se distenda quando recebe alimento."
  },

  {
    id:"dig-18",
    nome:"Óstio cárdico",
    pagina:32,
    funcao:"É a abertura pela qual o esôfago se comunica com o estômago."
  },

  {
    id:"dig-19",
    nome:"Óstio pilórico",
    pagina:32,
    funcao:"É a abertura distal do estômago que estabelece comunicação com o duodeno."
  },

  {
    id:"dig-20",
    nome:"Região cárdia",
    pagina:33,
    funcao:"É a região do estômago próxima à entrada do esôfago."
  },

  {
    id:"dig-21",
    nome:"Região pilórica",
    pagina:33,
    funcao:"É a região distal do estômago relacionada à passagem do conteúdo gástrico para o duodeno."
  },

  {
    id:"dig-22",
    nome:"Fundo do estômago",
    pagina:34,
    funcao:"É a porção superior do estômago."
  },

  {
    id:"dig-23",
    nome:"Corpo do estômago",
    pagina:34,
    funcao:"É a principal região central do estômago."
  },

  {
    id:"dig-24",
    nome:"Curvatura menor do estômago",
    pagina:34,
    funcao:"É a margem côncava medial do estômago."
  },

  {
    id:"dig-25",
    nome:"Curvatura maior do estômago",
    pagina:34,
    funcao:"É a margem convexa e mais extensa do estômago."
  },

  {
    id:"dig-26",
    nome:"Intestino delgado",
    pagina:35,
    funcao:"É o principal local de digestão química e absorção de nutrientes."
  },

  {
    id:"dig-27",
    nome:"Duodeno",
    pagina:35,
    funcao:"Recebe o conteúdo proveniente do estômago e participa intensamente da digestão."
  },

  {
    id:"dig-28",
    nome:"Ampola duodenal",
    pagina:35,
    funcao:"É a porção inicial dilatada do duodeno."
  },

  {
    id:"dig-29",
    nome:"Pregas circulares do duodeno",
    pagina:35,
    funcao:"Aumentam a superfície interna do intestino delgado, favorecendo a absorção."
  },

  {
    id:"dig-30",
    nome:"Flexura duodenojejunal",
    pagina:35,
    funcao:"Marca a transição entre o duodeno e o jejuno."
  },

  {
    id:"dig-31",
    nome:"Jejuno",
    pagina:36,
    funcao:"É uma porção do intestino delgado especializada na continuidade da digestão e absorção."
  },

  {
    id:"dig-32",
    nome:"Íleo",
    pagina:36,
    funcao:"É a porção final do intestino delgado e comunica-se com o intestino grosso."
  },

  {
    id:"dig-33",
    nome:"Ceco",
    pagina:37,
    funcao:"É a primeira porção do intestino grosso."
  },

  {
    id:"dig-34",
    nome:"Junção ileocecocólica",
    pagina:37,
    funcao:"É a região de transição entre o íleo e o intestino grosso."
  },

  {
    id:"dig-35",
    nome:"Colo ascendente",
    pagina:38,
    funcao:"Conduz o conteúdo intestinal no sentido superior pelo lado direito do abdome."
  },

  {
    id:"dig-36",
    nome:"Colo transverso",
    pagina:38,
    funcao:"Conduz o conteúdo intestinal transversalmente pelo abdome."
  },

  {
    id:"dig-37",
    nome:"Colo descendente",
    pagina:38,
    funcao:"Conduz o conteúdo intestinal inferiormente pelo lado esquerdo do abdome."
  },

  {
    id:"dig-38",
    nome:"Colo sigmoide",
    pagina:38,
    funcao:"É a porção do intestino grosso que conduz o conteúdo em direção ao reto."
  },

  {
    id:"dig-39",
    nome:"Haustros",
    pagina:39,
    funcao:"São saculações características da parede do intestino grosso."
  },

  {
    id:"dig-40",
    nome:"Intestino grosso",
    pagina:39,
    funcao:"Participa principalmente da absorção de água e eletrólitos e da formação das fezes."
  },

  {
    id:"dig-41",
    nome:"Apêndice vermiforme",
    pagina:39,
    funcao:"É uma estrutura tubular ligada ao ceco, contendo tecido linfoide."
  },

  {
    id:"dig-42",
    nome:"Canal retal",
    pagina:39,
    funcao:"Participa da condução e armazenamento temporário do conteúdo fecal."
  },

  {
    id:"dig-43",
    nome:"Ânus",
    pagina:39,
    funcao:"É a abertura terminal do tubo digestório responsável pela eliminação das fezes."
  },

  {
    id:"dig-44",
    nome:"Tênias",
    pagina:39,
    funcao:"São faixas longitudinais de músculo liso presentes no intestino grosso."
  },

  {
    id:"dig-45",
    nome:"Fígado",
    pagina:40,
    funcao:"Produz bile e participa do metabolismo de nutrientes e do processamento de diversas moléculas."
  },

  {
    id:"dig-46",
    nome:"Lobo direito do fígado",
    pagina:40,
    funcao:"É uma das principais divisões anatômicas do fígado."
  },

  {
    id:"dig-47",
    nome:"Lobo esquerdo do fígado",
    pagina:40,
    funcao:"É uma divisão anatômica do fígado localizada à esquerda."
  },

  {
    id:"dig-48",
    nome:"Lobo caudado",
    pagina:40,
    funcao:"É uma divisão anatômica do fígado localizada na face visceral."
  },

  {
    id:"dig-49",
    nome:"Lobo quadrado",
    pagina:40,
    funcao:"É uma divisão anatômica do fígado localizada na face visceral."
  },

  {
    id:"dig-50",
    nome:"Veia porta hepática",
    pagina:41,
    funcao:"Conduz ao fígado sangue proveniente principalmente do trato gastrointestinal."
  },

  {
    id:"dig-51",
    nome:"Ligamento falciforme",
    pagina:41,
    funcao:"É uma prega peritoneal que ajuda a fixar o fígado."
  },

  {
    id:"dig-52",
    nome:"Artéria hepática própria",
    pagina:41,
    funcao:"Leva sangue arterial ao fígado."
  },

  {
    id:"dig-53",
    nome:"Vesícula biliar",
    pagina:41,
    funcao:"Armazena e concentra a bile produzida pelo fígado."
  },

  {
    id:"dig-54",
    nome:"Ductos biliares",
    pagina:42,
    funcao:"Formam o sistema de condução da bile."
  },

  {
    id:"dig-55",
    nome:"Ducto cístico",
    pagina:42,
    funcao:"Conecta a vesícula biliar ao sistema de ductos biliares."
  },

  {
    id:"dig-56",
    nome:"Ducto hepático direito",
    pagina:42,
    funcao:"Drena bile proveniente dos ductos do lado direito do fígado."
  },

  {
    id:"dig-57",
    nome:"Ducto hepático esquerdo",
    pagina:4
