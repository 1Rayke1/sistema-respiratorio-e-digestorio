// ============================================================
// ANATOMIA EM JOGO
// SISTEMA RESPIRATÓRIO E SISTEMA DIGESTÓRIO
// Desenvolvedor: Rayke Jovino de Souza
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
// ESTRUTURAS DO SISTEMA RESPIRATÓRIO
// PÁGINAS 2 A 26 DO PDF
// ============================================================

const estruturasRespiratorio = [

  { id:"resp-01", nome:"Raiz", sistema:"respiratorio", pagina:2 },
  { id:"resp-02", nome:"Dorso", sistema:"respiratorio", pagina:2 },
  { id:"resp-03", nome:"Ápice", sistema:"respiratorio", pagina:2 },

  { id:"resp-04", nome:"Asas", sistema:"respiratorio", pagina:3 },
  { id:"resp-05", nome:"Base", sistema:"respiratorio", pagina:3 },
  { id:"resp-06", nome:"Narina", sistema:"respiratorio", pagina:3 },

  { id:"resp-07", nome:"Cavidade nasal", sistema:"respiratorio", pagina:4 },
  { id:"resp-08", nome:"Abertura piriforme", sistema:"respiratorio", pagina:4 },
  { id:"resp-09", nome:"Coanas", sistema:"respiratorio", pagina:4 },

  { id:"resp-10", nome:"Concha nasal superior", sistema:"respiratorio", pagina:5 },
  { id:"resp-11", nome:"Concha nasal média", sistema:"respiratorio", pagina:5 },
  { id:"resp-12", nome:"Concha nasal inferior", sistema:"respiratorio", pagina:5 },

  { id:"resp-13", nome:"Meato nasal superior", sistema:"respiratorio", pagina:6 },
  { id:"resp-14", nome:"Meato nasal médio", sistema:"respiratorio", pagina:6 },
  { id:"resp-15", nome:"Meato nasal inferior", sistema:"respiratorio", pagina:6 },

  { id:"resp-16", nome:"Cavidade nasal", sistema:"respiratorio", pagina:7 },
  { id:"resp-17", nome:"Epitélio olfatório", sistema:"respiratorio", pagina:7 },
  { id:"resp-18", nome:"Nervo olfatório", sistema:"respiratorio", pagina:7 },
  { id:"resp-19", nome:"Ducto nasolacrimal", sistema:"respiratorio", pagina:7 },

  { id:"resp-20", nome:"Ducto nasolacrimal", sistema:"respiratorio", pagina:8 },
  { id:"resp-21", nome:"Cavidade nasal", sistema:"respiratorio", pagina:8 },

  { id:"resp-22", nome:"Seio frontal", sistema:"respiratorio", pagina:9 },
  { id:"resp-23", nome:"Seio esfenoidal", sistema:"respiratorio", pagina:9 },
  { id:"resp-24", nome:"Seios etmoidais", sistema:"respiratorio", pagina:9 },
  { id:"resp-25", nome:"Seios maxilares", sistema:"respiratorio", pagina:9 },

  { id:"resp-26", nome:"Tórus tubal", sistema:"respiratorio", pagina:10 },
  { id:"resp-27", nome:"Óstio faríngeo da tuba auditiva", sistema:"respiratorio", pagina:10 },
  { id:"resp-28", nome:"Faringe", sistema:"respiratorio", pagina:10 },

  { id:"resp-29", nome:"Faringe", sistema:"respiratorio", pagina:11 },
  { id:"resp-30", nome:"Nasofaringe", sistema:"respiratorio", pagina:11 },
  { id:"resp-31", nome:"Orofaringe", sistema:"respiratorio", pagina:11 },
  { id:"resp-32", nome:"Laringofaringe", sistema:"respiratorio", pagina:11 },

  { id:"resp-33", nome:"Faringe", sistema:"respiratorio", pagina:12 },
  { id:"resp-34", nome:"Tórus tubal", sistema:"respiratorio", pagina:12 },
  { id:"resp-35", nome:"Óstio faríngeo da tuba auditiva", sistema:"respiratorio", pagina:12 },
  { id:"resp-36", nome:"Tonsilas faríngeas", sistema:"respiratorio", pagina:12 },

  { id:"resp-37", nome:"Epiglote", sistema:"respiratorio", pagina:13 },
  { id:"resp-38", nome:"Prega vestibular", sistema:"respiratorio", pagina:13 },
  { id:"resp-39", nome:"Prega vocal", sistema:"respiratorio", pagina:13 },
  { id:"resp-40", nome:"Laringe", sistema:"respiratorio", pagina:13 },

  { id:"resp-41", nome:"Epiglote", sistema:"respiratorio", pagina:14 },
  { id:"resp-42", nome:"Prega vestibular", sistema:"respiratorio", pagina:14 },
  { id:"resp-43", nome:"Prega vocal", sistema:"respiratorio", pagina:14 },
  { id:"resp-44", nome:"Laringe", sistema:"respiratorio", pagina:14 },

  { id:"resp-45", nome:"Cartilagem epiglótica", sistema:"respiratorio", pagina:15 },
  { id:"resp-46", nome:"Cartilagem da tireóide", sistema:"respiratorio", pagina:15 },
  { id:"resp-47", nome:"Cartilagem cricóide", sistema:"respiratorio", pagina:15 },

  { id:"resp-48", nome:"Cartilagem corniculada", sistema:"respiratorio", pagina:16 },
  { id:"resp-49", nome:"Cartilagem aritenóide", sistema:"respiratorio", pagina:16 },
  { id:"resp-50", nome:"Cartilagem cricóide", sistema:"respiratorio", pagina:16 },

  { id:"resp-51", nome:"Anéis cartilaginosos", sistema:"respiratorio", pagina:17 },
  { id:"resp-52", nome:"Ligamentos anulares", sistema:"respiratorio", pagina:17 },
  { id:"resp-53", nome:"Parede posterior da traquéia", sistema:"respiratorio", pagina:17 },
  { id:"resp-54", nome:"Carina", sistema:"respiratorio", pagina:17 },
  { id:"resp-55", nome:"Traquéia", sistema:"respiratorio", pagina:17 },

  { id:"resp-56", nome:"Principal esquerdo", sistema:"respiratorio", pagina:18 },
  { id:"resp-57", nome:"Principal direito", sistema:"respiratorio", pagina:18 },
  { id:"resp-58", nome:"Bronquio lobar superior direito", sistema:"respiratorio", pagina:18 },
  { id:"resp-59", nome:"Bronquio lobar médio direito", sistema:"respiratorio", pagina:18 },
  { id:"resp-60", nome:"Bronquio lobar inferior direito", sistema:"respiratorio", pagina:18 },

  { id:"resp-61", nome:"Principal direito", sistema:"respiratorio", pagina:19 },
  { id:"resp-62", nome:"Bronquio lobar superior direito", sistema:"respiratorio", pagina:19 },
  { id:"resp-63", nome:"Bronquio lobar médio direito", sistema:"respiratorio", pagina:19 },
  { id:"resp-64", nome:"Bronquio lobar inferior direito", sistema:"respiratorio", pagina:19 },

  { id:"resp-65", nome:"Bronquio lobar superior esquerdo", sistema:"respiratorio", pagina:20 },
  { id:"resp-66", nome:"Bronquio lobar inferior esquerdo", sistema:"respiratorio", pagina:20 },
  { id:"resp-67", nome:"Bronquio principal esquerdo", sistema:"respiratorio", pagina:20 },

  { id:"resp-68", nome:"Bronquios segmentares", sistema:"respiratorio", pagina:21 },
  { id:"resp-69", nome:"Bronquíolos", sistema:"respiratorio", pagina:21 },

  { id:"resp-70", nome:"Lobo superior esq.", sistema:"respiratorio", pagina:22 },
  { id:"resp-71", nome:"Lobo inferior esq.", sistema:"respiratorio", pagina:22 },
  { id:"resp-72", nome:"Fissura oblíqua", sistema:"respiratorio", pagina:22 },

  { id:"resp-73", nome:"Lobo superior dir.", sistema:"respiratorio", pagina:23 },
  { id:"resp-74", nome:"Fissura horizontal", sistema:"respiratorio", pagina:23 },
  { id:"resp-75", nome:"Lobo médio", sistema:"respiratorio", pagina:23 },
  { id:"resp-76", nome:"Fissura oblíqua", sistema:"respiratorio", pagina:23 },
  { id:"resp-77", nome:"Lobo inferior dir.", sistema:"respiratorio", pagina:23 },

  { id:"resp-78", nome:"Base", sistema:"respiratorio", pagina:24 },
  { id:"resp-79", nome:"Ápice", sistema:"respiratorio", pagina:24 },

  { id:"resp-80", nome:"Faces costal", sistema:"respiratorio", pagina:25 },
  { id:"resp-81", nome:"Face diafragmática", sistema:"respiratorio", pagina:25 },
  { id:"resp-82", nome:"Face medial", sistema:"respiratorio", pagina:25 },

  { id:"resp-83", nome:"Hilo pulmonar", sistema:"respiratorio", pagina:26 }

];


// ============================================================
// ESTRUTURAS DO SISTEMA DIGESTÓRIO
// PÁGINAS 28 A 45 DO PDF
// ============================================================

const estruturasDigestorio = [

  { id:"dig-01", nome:"Lábio superior", sistema:"digestorio", pagina:28 },
  { id:"dig-02", nome:"Lábio inferior", sistema:"digestorio", pagina:28 },
  { id:"dig-03", nome:"Vestíbulo bucal", sistema:"digestorio", pagina:28 },
  { id:"dig-04", nome:"Arcáda dentária", sistema:"digestorio", pagina:28 },

  { id:"dig-05", nome:"Língua (musculatura intrínseca)", sistema:"digestorio", pagina:29 },
  { id:"dig-06", nome:"Língua (musculatura extrínseca)", sistema:"digestorio", pagina:29 },
  { id:"dig-07", nome:"Palato duro", sistema:"digestorio", pagina:29 },
  { id:"dig-08", nome:"Palato mole", sistema:"digestorio", pagina:29 },
  { id:"dig-09", nome:"Úvula palatina", sistema:"digestorio", pagina:29 },
  { id:"dig-10", nome:"Rima labial", sistema:"digestorio", pagina:29 },

  { id:"dig-11", nome:"Faringe", sistema:"digestorio", pagina:30 },
  { id:"dig-12", nome:"Nasofaringe", sistema:"digestorio", pagina:30 },
  { id:"dig-13", nome:"Orofaringe", sistema:"digestorio", pagina:30 },
  { id:"dig-14", nome:"Laringofaringe", sistema:"digestorio", pagina:30 },

  { id:"dig-15", nome:"Esôfago", sistema:"digestorio", pagina:31 },

  { id:"dig-16", nome:"Pregas gástricas", sistema:"digestorio", pagina:32 },
  { id:"dig-17", nome:"Óstio cárdico", sistema:"digestorio", pagina:32 },
  { id:"dig-18", nome:"Óstio pilórico", sistema:"digestorio", pagina:32 },

  { id:"dig-19", nome:"Região cardia", sistema:"digestorio", pagina:33 },
  { id:"dig-20", nome:"Região pilórica", sistema:"digestorio", pagina:33 },

  { id:"dig-21", nome:"Fundo do estômago", sistema:"digestorio", pagina:34 },
  { id:"dig-22", nome:"Corpo do estômago", sistema:"digestorio", pagina:34 },
  { id:"dig-23", nome:"Curvatura menor do estômago", sistema:"digestorio", pagina:34 },
  { id:"dig-24", nome:"Curvatura maior do estômago", sistema:"digestorio", pagina:34 },

  { id:"dig-25", nome:"Duodeno", sistema:"digestorio", pagina:35 },
  { id:"dig-26", nome:"Ampola duodenal", sistema:"digestorio", pagina:35 },
  { id:"dig-27", nome:"Pregas circulares do duodeno", sistema:"digestorio", pagina:35 },
  { id:"dig-28", nome:"Flexura duodeno jejunal", sistema:"digestorio", pagina:35 },

  { id:"dig-29", nome:"Jejuno", sistema:"digestorio", pagina:36 },
  { id:"dig-30", nome:"Íleo", sistema:"digestorio", pagina:36 },

  { id:"dig-31", nome:"Cecum", sistema:"digestorio", pagina:37 },
  { id:"dig-32", nome:"Junção ileo-cecum-cólica", sistema:"digestorio", pagina:37 },

  { id:"dig-33", nome:"Colo sigmóide", sistema:"digestorio", pagina:38 },
  { id:"dig-34", nome:"Intestino grosso", sistema:"digestorio", pagina:38 },
  { id:"dig-35", nome:"Colo ascendente", sistema:"digestorio", pagina:38 },
  { id:"dig-36", nome:"Colo transverso", sistema:"digestorio", pagina:38 },
  { id:"dig-37", nome:"Colo descendente", sistema:"digestorio", pagina:38 },

  { id:"dig-38", nome:"Haustros", sistema:"digestorio", pagina:39 },
  { id:"dig-39", nome:"Intestino grosso", sistema:"digestorio", pagina:39 },
  { id:"dig-40", nome:"Apêndice vermiforme", sistema:"digestorio", pagina:39 },
  { id:"dig-41", nome:"Canal retal", sistema:"digestorio", pagina:39 },
  { id:"dig-42", nome:"Ânus", sistema:"digestorio", pagina:39 },
  { id:"dig-43", nome:"Tênia", sistema:"digestorio", pagina:39 },

  { id:"dig-44", nome:"Lobo direito", sistema:"digestorio", pagina:40 },
  { id:"dig-45", nome:"Lobo esquerdo", sistema:"digestorio", pagina:40 },
  { id:"dig-46", nome:"Lobo caudado", sistema:"digestorio", pagina:40 },
  { id:"dig-47", nome:"Lobo quadrado", sistema:"digestorio", pagina:40 },

  { id:"dig-48", nome:"Veia porta hepática", sistema:"digestorio", pagina:41 },
  { id:"dig-49", nome:"Ligamento falciforme", sistema:"digestorio", pagina:41 },
  { id:"dig-50", nome:"Artéria hepática própria", sistema:"digestorio", pagina:41 },
  { id:"dig-51", nome:"Vesícula biliar", sistema:"digestorio", pagina:41 },

  { id:"dig-52", nome:"Ducto cístico", sistema:"digestorio", pagina:42 },
  { id:"dig-53", nome:"Ducto hepático direito", sistema:"digestorio", pagina:42 },
  { id:"dig-54", nome:"Ducto hepático esquerdo", sistema:"digestorio", pagina:42 },
  { id:"dig-55", nome:"Ducto hepático comum", sistema:"digestorio", pagina:42 },
  { id:"dig-56", nome:"Ducto colédoco", sistema:"digestorio", pagina:42 },
  { id:"dig-57", nome:"Ducto hepato pancreático", sistema:"digestorio", pagina:42 },

  { id:"dig-58", nome:"Cabeça", sistema:"digestorio", pagina:43 },
  { id:"dig-59", nome:"Corpo", sistema:"digestorio", pagina:43 },
  { id:"dig-60", nome:"Cauda", sistema:"digestorio", pagina:43 },
  { id:"dig-61", nome:"Ducto pancreático principal", sistema:"digestorio", pagina:43 },
  { id:"dig-62", nome:"Ducto pancreático acessório", sistema:"digestorio", pagina:43 },
  { id:"dig-63", nome:"Ducto pancreático", sistema:"digestorio", pagina:43 },

  { id:"dig-64", nome:"Parótida", sistema:"digestorio", pagina:44 },
  { id:"dig-65", nome:"Ducto da parótida", sistema:"digestorio", pagina:44 },

  { id:"dig-66", nome:"Sublingual", sistema:"digestorio", pagina:45 },
  { id:"dig-67", nome:"Submandibular", sistema:"digestorio", pagina:45 }

];


const estruturas = [
  ...estruturasRespiratorio,
  ...estruturasDigestorio
];


// ============================================================
// PERGUNTAS
// ============================================================

const perguntasConhecimento = {

  "resp-01": "Qual parte do nariz externo corresponde à região de implantação superior do nariz?",
  "resp-02": "Qual parte do nariz externo corresponde à sua porção longitudinal entre a raiz e o ápice?",
  "resp-03": "Qual parte do nariz externo corresponde à extremidade anterior?",
  "resp-04": "Qual estrutura forma as porções laterais do nariz externo?",
  "resp-05": "Qual estrutura corresponde à porção inferior do nariz externo?",
  "resp-06": "Qual estrutura corresponde à abertura externa da cavidade nasal?",

  "resp-07": "Qual espaço interno do nariz participa da passagem do ar?",
  "resp-08": "Qual abertura óssea apresenta formato semelhante a uma pera?",
  "resp-09": "Quais aberturas posteriores comunicam a cavidade nasal com a faringe?",

  "resp-10": "Qual concha nasal ocupa a posição mais superior entre as conchas apresentadas?",
  "resp-11": "Qual concha nasal ocupa a posição intermediária?",
  "resp-12": "Qual concha nasal ocupa a posição mais inferior?",

  "resp-13": "Qual meato nasal está localizado abaixo da concha nasal superior?",
  "resp-14": "Qual meato nasal está localizado abaixo da concha nasal média?",
  "resp-15": "Qual meato nasal está localizado abaixo da concha nasal inferior?",

  "resp-16": "Qual espaço interno do nariz contém estruturas relacionadas à passagem e condicionamento do ar?",
  "resp-17": "Qual estrutura está relacionada diretamente à recepção dos estímulos olfatórios?",
  "resp-18": "Qual estrutura está relacionada à condução dos estímulos olfatórios?",
  "resp-19": "Qual ducto está relacionado à drenagem das lágrimas para a cavidade nasal?",

  "resp-20": "Qual estrutura conduz a drenagem das lágrimas em direção à cavidade nasal?",
  "resp-21": "Qual cavidade ocupa o interior do nariz?",

  "resp-22": "Qual seio paranasal está localizado na região do osso frontal?",
  "resp-23": "Qual seio paranasal está relacionado ao osso esfenoide?",
  "resp-24": "Quais seios paranasais estão relacionados às células do osso etmoide?",
  "resp-25": "Quais seios paranasais estão relacionados às maxilas?",

  "resp-26": "Qual estrutura da nasofaringe forma uma elevação relacionada à abertura da tuba auditiva?",
  "resp-27": "Qual abertura comunica a faringe com a tuba auditiva?",
  "resp-28": "Qual estrutura muscular da região da garganta participa da passagem do ar e do alimento?",

  "resp-29": "Qual estrutura da garganta está dividida em nasofaringe, orofaringe e laringofaringe?",
  "resp-30": "Qual parte da faringe está localizada posteriormente à cavidade nasal?",
  "resp-31": "Qual parte da faringe está relacionada à região posterior da cavidade oral?",
  "resp-32": "Qual parte da faringe é a porção inferior da faringe?",

  "resp-33": "Qual estrutura apresenta as regiões nasofaringe, orofaringe e laringofaringe?",
  "resp-34": "Qual elevação da nasofaringe está relacionada à tuba auditiva?",
  "resp-35": "Qual abertura está relacionada à comunicação com a tuba auditiva?",
  "resp-36": "Qual estrutura está localizada na região da nasofaringe e é representada como tonsila?",

  "resp-37": "Qual estrutura atua como uma espécie de proteção da entrada da laringe durante a deglutição?",
  "resp-38": "Qual prega da laringe está localizada superiormente à prega vocal?",
  "resp-39": "Qual prega da laringe está diretamente relacionada à produção da voz?",
  "resp-40": "Qual órgão está localizado entre a faringe e a traqueia?",

  "resp-41": "Qual estrutura da laringe participa da proteção das vias respiratórias durante a deglutição?",
  "resp-42": "Qual estrutura está acima da prega vocal na laringe?",
  "resp-43": "Qual estrutura está relacionada à produção da voz?",
  "resp-44": "Qual órgão contém as pregas vestibulares e vocais?",

  "resp-45": "Qual cartilagem da laringe corresponde à cartilagem relacionada à epiglote?",
  "resp-46": "Qual cartilagem da laringe é chamada de cartilagem da tireoide?",
  "resp-47": "Qual cartilagem forma um anel na parte inferior da laringe?",

  "resp-48": "Qual cartilagem da laringe está relacionada às cartilagens corniculadas?",
  "resp-49": "Qual cartilagem da laringe está relacionada às cartilagens aritenoides?",
  "resp-50": "Qual cartilagem da laringe apresenta formato de anel?",

  "resp-51": "Quais estruturas reforçam a parede da traqueia?",
  "resp-52": "Quais estruturas estão associadas aos anéis cartilaginosos da traqueia?",
  "resp-53": "Qual estrutura corresponde à parede posterior da traqueia?",
  "resp-54": "Qual região marca a bifurcação da traqueia?",
  "resp-55": "Qual órgão conduz o ar da laringe em direção aos brônquios?",

  "resp-56": "Qual brônquio principal está relacionado ao pulmão esquerdo?",
  "resp-57": "Qual brônquio principal está relacionado ao pulmão direito?",
  "resp-58": "Qual brônquio corresponde ao lobo superior do pulmão direito?",
  "resp-59": "Qual brônquio corresponde ao lobo médio do pulmão direito?",
  "resp-60": "Qual brônquio corresponde ao lobo inferior do pulmão direito?",

  "resp-61": "Qual brônquio principal está relacionado ao pulmão direito?",
  "resp-62": "Qual brônquio conduz o ar para o lobo superior direito?",
  "resp-63": "Qual brônquio conduz o ar para o lobo médio direito?",
  "resp-64": "Qual brônquio conduz o ar para o lobo inferior direito?",

  "resp-65": "Qual brônquio lobar conduz o ar para o lobo superior esquerdo?",
  "resp-66": "Qual brônquio lobar conduz o ar para o lobo inferior esquerdo?",
  "resp-67": "Qual brônquio principal está relacionado ao pulmão esquerdo?",

  "resp-68": "Como são chamados os brônquios que se distribuem em segmentos pulmonares?",
  "resp-69": "Quais pequenas vias aéreas aparecem depois dos brônquios?",

  "resp-70": "Qual lobo pertence ao pulmão esquerdo e ocupa a posição superior?",
  "resp-71": "Qual lobo pertence ao pulmão esquerdo e ocupa a posição inferior?",
  "resp-72": "Qual fissura separa os lobos superior e inferior do pulmão esquerdo?",

  "resp-73": "Qual lobo ocupa a posição superior no pulmão direito?",
  "resp-74": "Qual fissura separa o lobo superior do lobo médio no pulmão direito?",
  "resp-75": "Qual lobo está localizado entre as fissuras horizontal e oblíqua do pulmão direito?",
  "resp-76": "Qual fissura separa o lobo inferior dos lobos superiores do pulmão direito?",
  "resp-77": "Qual lobo ocupa a posição inferior no pulmão direito?",

  "resp-78": "Qual parte do pulmão está apoiada sobre o diafragma?",
  "resp-79": "Qual extremidade superior do pulmão se projeta acima da base?",
  "resp-80": "Qual face do pulmão está voltada principalmente para as costelas?",
  "resp-81": "Qual face do pulmão está relacionada ao diafragma?",
  "resp-82": "Qual face do pulmão corresponde à face voltada medialmente?",
  "resp-83": "Qual região do pulmão é o local de entrada e saída de estruturas pulmonares?",


  // ==========================================================
  // DIGESTÓRIO
  // ==========================================================

  "dig-01": "Qual estrutura corresponde à porção superior dos lábios?",
  "dig-02": "Qual estrutura corresponde à porção inferior dos lábios?",
  "dig-03": "Qual espaço está localizado entre os lábios, bochechas e arcada dentária?",
  "dig-04": "Qual estrutura está relacionada ao conjunto formado pelos dentes?",

  "dig-05": "Qual musculatura da língua altera sua forma?",
  "dig-06": "Qual musculatura da língua está relacionada aos movimentos da língua?",
  "dig-07": "Qual parte do palato apresenta consistência óssea?",
  "dig-08": "Qual parte do palato é posterior e apresenta maior mobilidade?",
  "dig-09": "Qual estrutura está localizada na extremidade posterior do palato mole?",
  "dig-10": "Qual estrutura corresponde à abertura entre os lábios?",

  "dig-11": "Qual estrutura da garganta participa tanto do sistema digestório quanto do respiratório?",
  "dig-12": "Qual parte da faringe está localizada posteriormente à cavidade nasal?",
  "dig-13": "Qual parte da faringe está localizada posteriormente à cavidade oral?",
  "dig-14": "Qual parte inferior da faringe está representada no material?",

  "dig-15": "Qual órgão conduz o alimento da faringe em direção ao estômago?",

  "dig-16": "Qual estrutura forma pregas no interior do estômago?",
  "dig-17": "Qual abertura do estômago está relacionada à entrada do alimento vindo do esôfago?",
  "dig-18": "Qual abertura do estômago está relacionada à saída em direção ao duodeno?",

  "dig-19": "Qual região do estômago está próxima à entrada do esôfago?",
  "dig-20": "Qual região do estômago está próxima ao piloro?",

  "dig-21": "Qual região superior do estômago forma uma porção semelhante a uma cúpula?",
  "dig-22": "Qual grande região central do estômago está entre o fundo e a região pilórica?",
  "dig-23": "Qual curvatura do estômago é a menor?",
  "dig-24": "Qual curvatura do estômago é a maior?",

  "dig-25": "Qual primeira porção do intestino delgado recebe o conteúdo vindo do estômago?",
  "dig-26": "Qual dilatação está relacionada ao início do duodeno?",
  "dig-27": "Qual estrutura forma pregas no interior do duodeno?",
  "dig-28": "Qual estrutura marca a transição entre o duodeno e o jejuno?",

  "dig-29": "Qual porção do intestino delgado está localizada entre o duodeno e o íleo?",
  "dig-30": "Qual porção do intestino delgado vem depois do jejuno?",

  "dig-31": "Qual primeira porção do intestino grosso aparece após o íleo?",
  "dig-32": "Qual região corresponde à junção entre íleo, ceco e cólon?",

  "dig-33": "Qual segmento do cólon apresenta formato semelhante a um S?",
  "dig-34": "Qual estrutura corresponde ao conjunto que inclui os colos ascendente, transverso e descendente?",
  "dig-35": "Qual segmento do cólon sobe pelo lado direito do abdome?",
  "dig-36": "Qual segmento do cólon atravessa transversalmente o abdome?",
  "dig-37": "Qual segmento do cólon desce pelo lado esquerdo do abdome?",

  "dig-38": "Como são chamadas as saculações observadas na parede do intestino grosso?",
  "dig-39": "Qual estrutura inclui o cólon e outras partes do intestino grosso?",
  "dig-40": "Qual pequena estrutura tubular está ligada ao ceco?",
  "dig-41": "Qual estrutura corresponde à porção final do intestino antes do ânus?",
  "dig-42": "Qual abertura corresponde à extremidade final do tubo digestório?",
  "dig-43": "Qual estrutura longitudinal aparece associada à parede do intestino grosso?",

  "dig-44": "Qual é o maior lobo do fígado?",
  "dig-45": "Qual lobo do fígado está localizado no lado esquerdo?",
  "dig-46": "Qual lobo do fígado está localizado posteriormente e é chamado de caudado?",
  "dig-47": "Qual lobo do fígado está localizado inferiormente e é chamado de quadrado?",

  "dig-48": "Qual vaso conduz sangue proveniente do sistema digestório em direção ao fígado?",
  "dig-49": "Qual ligamento separa externamente os lobos direito e esquerdo do fígado?",
  "dig-50": "Qual artéria fornece sangue ao fígado?",
  "dig-51": "Qual órgão armazena a bile?",

  "dig-52": "Qual ducto está relacionado diretamente à vesícula biliar?",
  "dig-53": "Qual ducto conduz a bile proveniente do lado direito do fígado?",
  "dig-54": "Qual ducto conduz a bile proveniente do lado esquerdo do fígado?",
  "dig-55": "Qual ducto resulta da união dos ductos hepáticos direito e esquerdo?",
  "dig-56": "Qual ducto conduz a bile em direção ao duodeno?",
  "dig-57": "Qual estrutura está relacionada à união dos sistemas de ductos hepático e pancreático?",

  "dig-58": "Qual parte do pâncreas está localizada junto ao duodeno?",
  "dig-59": "Qual parte do pâncreas corresponde à sua porção central?",
  "dig-60": "Qual parte do pâncreas corresponde à sua extremidade?",
  "dig-61": "Qual ducto pancreático é o principal?",
  "dig-62": "Qual ducto pancreático é denominado acessório?",
  "dig-63": "Qual estrutura corresponde ao ducto relacionado ao pâncreas?",

  "dig-64": "Qual glândula salivar está localizada na região próxima à orelha?",
  "dig-65": "Qual ducto conduz a secreção da parótida?",
  "dig-66": "Qual glândula salivar está localizada abaixo da língua?",
  "dig-67": "Qual glândula salivar está localizada inferiormente à mandíbula?"

};


// ============================================================
// TELA
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
      titulo.textContent =
        "Sistema Respiratório e Digestório";
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

  let pool;

  if (sistemaAtual === "ambos") {
    pool = [...estruturas];
  }

  else {
    pool = estruturas.filter(
      item => item.sistema === sistemaAtual
    );
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

    pergunta.textContent =
      perguntasConhecimento[estrutura.id] ||
      "Qual alternativa identifica corretamente a estrutura relacionada à imagem?";
  }


  // IMAGEM

  if (imagem) {

    const numeroPagina =
      String(estrutura.pagina).padStart(2, "0");

    imagem.src =
      `pagina-${numeroPagina}.jpg`;

    imagem.alt =
      `Imagem anatômica da página ${estrutura.pagina}`;

    imagem.style.display =
      "block";
  }


  // SEM IMAGEM

  if (semImagem) {
    semImagem.style.display = "none";
  }


  // SEM MARCADOR

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


  // SOMENTE ESTRUTURAS DO MESMO SISTEMA

  let outras =
    estruturas.filter(
      item =>
        item.sistema === correta.sistema &&
        item.id !== correta.id
    );


  // PRIORIZAR OUTRAS PÁGINAS

  const outrasPaginas =
    outras.filter(
      item =>
        item.pagina !== correta.pagina
    );


  if (outrasPaginas.length >= 3) {
    outras = outrasPaginas;
  }


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

    container.appendChild(botao);

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


  // CORRETA

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


  // INCORRETA

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
// MODO ESTUDAR
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
    document.getElementById(
      "resultadoPontuacao"
    );


  if (resultado) {

    resultado.textContent =
      `Você acertou ${pontuacao} de ${perguntas.length} questões.`;
  }


  const progresso =
    document.getElementById(
      "progresso"
    );


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
// INICIALIZAÇÃO
// ============================================================

document.addEventListener(
  "DOMContentLoaded",
  function () {

    mostrarTela("menu");

  }
);
