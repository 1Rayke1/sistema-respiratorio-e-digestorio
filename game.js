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
   ESTRUTURAS DO SISTEMA RESPIRATÓRIO
   PÁGINAS 2–26 DO PDF
   ============================================================ */

const respiratorio = [

  /* PÁGINA 2 */
  { id:"resp-01", nome:"Raiz do nariz", pagina:2,
    funcao:"É a porção superior do nariz externo, situada próxima à região de união com a face e relacionada à sustentação e posição do nariz." },

  { id:"resp-02", nome:"Dorso do nariz", pagina:2,
    funcao:"Forma a parte alongada do nariz externo entre a raiz e o ápice, contribuindo para a configuração externa das vias aéreas superiores." },

  { id:"resp-03", nome:"Ápice do nariz", pagina:2,
    funcao:"Corresponde à extremidade anterior do nariz externo, participando da configuração da entrada das vias aéreas superiores." },

  { id:"resp-04", nome:"Nariz externo", pagina:2,
    funcao:"Constitui a porção externa inicial das vias respiratórias e participa da entrada e condicionamento inicial do ar." },

  /* PÁGINA 3 */
  { id:"resp-05", nome:"Asas do nariz", pagina:3,
    funcao:"Formam as porções laterais móveis do nariz e ajudam a delimitar as narinas." },

  { id:"resp-06", nome:"Base do nariz", pagina:3,
    funcao:"Forma a porção inferior do nariz externo e está relacionada diretamente às narinas." },

  { id:"resp-07", nome:"Narinas", pagina:3,
    funcao:"São as aberturas externas pelas quais o ar entra e sai do nariz." },

  /* PÁGINA 4 */
  { id:"resp-08", nome:"Cavidade nasal", pagina:4,
    funcao:"Conduz o ar e participa de seu aquecimento, umidificação e filtragem antes que ele avance pelas vias respiratórias." },

  { id:"resp-09", nome:"Abertura piriforme", pagina:4,
    funcao:"É a abertura óssea anterior da cavidade nasal, delimitando a entrada estrutural da cavidade nasal." },

  { id:"resp-10", nome:"Coanas", pagina:4,
    funcao:"São as aberturas posteriores da cavidade nasal que estabelecem comunicação com a nasofaringe." },

  /* PÁGINA 5 */
  { id:"resp-11", nome:"Concha nasal superior", pagina:5,
    funcao:"Projeta-se na cavidade nasal e ajuda a aumentar a superfície de contato do ar com a mucosa." },

  { id:"resp-12", nome:"Concha nasal média", pagina:5,
    funcao:"Participa do direcionamento do fluxo de ar e aumenta a área de contato do ar com a mucosa nasal." },

  { id:"resp-13", nome:"Concha nasal inferior", pagina:5,
    funcao:"Contribui para o direcionamento do fluxo de ar e para o condicionamento do ar dentro da cavidade nasal." },

  /* PÁGINA 6 */
  { id:"resp-14", nome:"Meato nasal superior", pagina:6,
    funcao:"É um espaço situado inferiormente à concha nasal superior, funcionando como passagem dentro da cavidade nasal." },

  { id:"resp-15", nome:"Meato nasal médio", pagina:6,
    funcao:"É uma passagem da cavidade nasal associada à drenagem de estruturas dos seios paranasais." },

  { id:"resp-16", nome:"Meato nasal inferior", pagina:6,
    funcao:"É a passagem localizada inferiormente à concha nasal inferior e recebe a abertura do ducto nasolacrimal." },

  /* PÁGINA 7 */
  { id:"resp-17", nome:"Epitélio olfatório", pagina:7,
    funcao:"Contém células receptoras especializadas capazes de detectar estímulos químicos relacionados ao olfato." },

  { id:"resp-18", nome:"Nervo olfatório", pagina:7,
    funcao:"Conduz informações relacionadas ao olfato desde os receptores olfatórios em direção ao sistema nervoso central." },

  { id:"resp-19", nome:"Ducto nasolacrimal", pagina:7,
    funcao:"Conduz as lágrimas da região ocular para a cavidade nasal." },

  /* PÁGINA 9 */
  { id:"resp-20", nome:"Seio frontal", pagina:9,
    funcao:"É uma cavidade pneumática localizada no osso frontal e integra os seios paranasais." },

  { id:"resp-21", nome:"Seio esfenoidal", pagina:9,
    funcao:"É uma cavidade pneumática do osso esfenoide e integra os seios paranasais." },

  { id:"resp-22", nome:"Seios etmoidais", pagina:9,
    funcao:"São conjuntos de pequenas cavidades pneumáticas do etmóide que integram os seios paranasais." },

  { id:"resp-23", nome:"Seios maxilares", pagina:9,
    funcao:"São cavidades pneumáticas localizadas nas maxilas e fazem parte dos seios paranasais." },

  /* PÁGINA 10 */
  { id:"resp-24", nome:"Tórus tubal", pagina:10,
    funcao:"É uma elevação da mucosa da nasofaringe relacionada à região da abertura da tuba auditiva." },

  { id:"resp-25", nome:"Óstio faríngeo da tuba auditiva", pagina:10,
    funcao:"É a abertura da tuba auditiva na faringe e participa da comunicação entre a nasofaringe e a orelha média." },

  { id:"resp-26", nome:"Faringe", pagina:10,
    funcao:"É um tubo muscular comum aos sistemas respiratório e digestório, participando da condução do ar e do alimento." },

  /* PÁGINA 11 */
  { id:"resp-27", nome:"Nasofaringe", pagina:11,
    funcao:"É a porção superior da faringe, situada posteriormente à cavidade nasal, relacionada principalmente à passagem do ar." },

  { id:"resp-28", nome:"Orofaringe", pagina:11,
    funcao:"É a porção da faringe situada posteriormente à cavidade oral, participando da passagem de ar e alimento." },

  { id:"resp-29", nome:"Laringofaringe", pagina:11,
    funcao:"É a porção inferior da faringe que conduz o conteúdo em direção à laringe ou ao esôfago." },

  /* PÁGINA 12 */
  { id:"resp-30", nome:"Tonsilas faríngeas", pagina:12,
    funcao:"Participam da defesa imunológica das vias aéreas superiores por meio do tecido linfoide." },

  /* PÁGINA 13 */
  { id:"resp-31", nome:"Epiglote", pagina:13,
    funcao:"Atua como uma estrutura protetora das vias aéreas durante a deglutição, ajudando a evitar a entrada de alimento na laringe." },

  { id:"resp-32", nome:"Prega vestibular", pagina:13,
    funcao:"É uma prega da laringe localizada superiormente à prega vocal e participa da proteção das estruturas mais profundas da laringe." },

  { id:"resp-33", nome:"Prega vocal", pagina:13,
    funcao:"Participa diretamente da produção da voz por meio da vibração quando o ar passa pela laringe." },

  { id:"resp-34", nome:"Laringe", pagina:13,
    funcao:"Conduz o ar, participa da produção da voz e protege as vias respiratórias inferiores durante a deglutição." },

  /* PÁGINA 15 */
  { id:"resp-35", nome:"Cartilagem epiglótica", pagina:15,
    funcao:"Dá sustentação à epiglote e participa do mecanismo de proteção das vias aéreas durante a deglutição." },

  { id:"resp-36", nome:"Cartilagem da tireoide", pagina:15,
    funcao:"É uma importante cartilagem estrutural da laringe que protege e sustenta suas estruturas internas." },

  { id:"resp-37", nome:"Cartilagem cricóide", pagina:15,
    funcao:"Forma um anel cartilaginoso da laringe e mantém a sustentação da via aérea." },

  /* PÁGINA 16 */
  { id:"resp-38", nome:"Cartilagem corniculada", pagina:16,
    funcao:"É uma pequena cartilagem da laringe relacionada à sustentação das pregas e estruturas da região posterior da entrada laríngea." },

  { id:"resp-39", nome:"Cartilagem aritenóide", pagina:16,
    funcao:"Participa do movimento e posicionamento das pregas vocais, sendo importante para a fonação." },

  /* PÁGINA 17 */
  { id:"resp-40", nome:"Anéis cartilaginosos", pagina:17,
    funcao:"Mantêm a traqueia aberta e evitam seu colabamento durante a passagem do ar." },

  { id:"resp-41", nome:"Ligamentos anulares", pagina:17,
    funcao:"Unem os anéis cartilaginosos da traqueia e contribuem para sua flexibilidade." },

  { id:"resp-42", nome:"Parede posterior da traqueia", pagina:17,
    funcao:"É uma região posterior membranosa da traqueia relacionada ao esôfago e permite certa flexibilidade durante a passagem do alimento." },

  { id:"resp-43", nome:"Carina", pagina:17,
    funcao:"É a região de bifurcação inferior da traqueia onde ocorre a divisão em brônquios principais." },

  { id:"resp-44", nome:"Traqueia", pagina:17,
    funcao:"Conduz o ar entre a laringe e os brônquios e permanece aberta graças à sua sustentação cartilaginosa." },

  /* PÁGINA 18 */
  { id:"resp-45", nome:"Brônquio principal esquerdo", pagina:18,
    funcao:"Conduz o ar da traqueia para o pulmão esquerdo." },

  { id:"resp-46", nome:"Brônquio principal direito", pagina:18,
    funcao:"Conduz o ar da traqueia para o pulmão direito." },

  { id:"resp-47", nome:"Brônquio lobar superior direito", pagina:18,
    funcao:"Conduz o ar para o lobo superior do pulmão direito." },

  { id:"resp-48", nome:"Brônquio lobar médio direito", pagina:18,
    funcao:"Conduz o ar para o lobo médio do pulmão direito." },

  { id:"resp-49", nome:"Brônquio lobar inferior direito", pagina:18,
    funcao:"Conduz o ar para o lobo inferior do pulmão direito." },

  /* PÁGINA 20 */
  { id:"resp-50", nome:"Brônquio lobar superior esquerdo", pagina:20,
    funcao:"Conduz o ar para o lobo superior do pulmão esquerdo." },

  { id:"resp-51", nome:"Brônquio lobar inferior esquerdo", pagina:20,
    funcao:"Conduz o ar para o lobo inferior do pulmão esquerdo." },

  /* PÁGINA 21 */
  { id:"resp-52", nome:"Brônquios segmentares", pagina:21,
    funcao:"Distribuem o ar para os segmentos broncopulmonares." },

  { id:"resp-53", nome:"Bronquíolos", pagina:21,
    funcao:"São ramificações menores das vias respiratórias que conduzem o ar em direção às regiões respiratórias do pulmão." },

  /* PÁGINA 22 */
  { id:"resp-54", nome:"Lobo superior esquerdo", pagina:22,
    funcao:"É uma divisão anatômica do pulmão esquerdo que recebe ar pelo brônquio lobar superior esquerdo." },

  { id:"resp-55", nome:"Lobo inferior esquerdo", pagina:22,
    funcao:"É uma divisão anatômica do pulmão esquerdo que recebe ar pelo brônquio lobar inferior esquerdo." },

  { id:"resp-56", nome:"Fissura oblíqua esquerda", pagina:22,
    funcao:"É uma fissura que separa os lobos superior e inferior do pulmão esquerdo." },

  /* PÁGINA 23 */
  { id:"resp-57", nome:"Lobo superior direito", pagina:23,
    funcao:"É uma divisão do pulmão direito que recebe ar pelo brônquio lobar superior direito." },

  { id:"resp-58", nome:"Fissura horizontal", pagina:23,
    funcao:"É uma fissura do pulmão direito que separa o lobo superior do lobo médio." },

  { id:"resp-59", nome:"Lobo médio", pagina:23,
    funcao:"É o lobo exclusivo do pulmão direito, situado entre as fissuras horizontal e oblíqua." },

  { id:"resp-60", nome:"Fissura oblíqua direita", pagina:23,
    funcao:"Separa o lobo inferior dos lobos superior e médio no pulmão direito." },

  { id:"resp-61", nome:"Lobo inferior direito", pagina:23,
    funcao:"É a divisão inferior do pulmão direito e recebe ar pelo brônquio lobar inferior direito." },

  /* PÁGINA 24 */
  { id:"resp-62", nome:"Base do pulmão", pagina:24,
    funcao:"É a superfície inferior do pulmão, relacionada ao diafragma." },

  { id:"resp-63", nome:"Ápice do pulmão", pagina:24,
    funcao:"É a extremidade superior do pulmão, projetando-se superiormente em direção à região da abertura superior do tórax." },

  /* PÁGINA 25 */
  { id:"resp-64", nome:"Face costal", pagina:25,
    funcao:"É a superfície pulmonar convexa relacionada principalmente às costelas e à parede torácica." },

  { id:"resp-65", nome:"Face diafragmática", pagina:25,
    funcao:"É a superfície inferior do pulmão que repousa sobre o diafragma." },

  { id:"resp-66", nome:"Face medial", pagina:25,
    funcao:"É a superfície pulmonar voltada para o mediastino e que apresenta estruturas relacionadas à entrada e saída de vasos e brônquios." },

  /* PÁGINA 26 */
  { id:"resp-67", nome:"Hilo pulmonar", pagina:26,
    funcao:"É a região da face medial por onde passam estruturas como brônquios, vasos sanguíneos, vasos linfáticos e nervos." }
];


/* ============================================================
   ESTRUTURAS DO SISTEMA DIGESTÓRIO
   PÁGINAS 28–45 DO PDF
   ============================================================ */

const digestorio = [

  /* PÁGINA 28 */
  { id:"dig-01", nome:"Lábio superior", pagina:28,
    funcao:"Participa do fechamento da boca, da apreensão do alimento e da formação da rima labial." },

  { id:"dig-02", nome:"Lábio inferior", pagina:28,
    funcao:"Participa do fechamento da boca, da apreensão do alimento e da formação da rima labial." },

  { id:"dig-03", nome:"Vestíbulo bucal", pagina:28,
    funcao:"É o espaço entre os lábios ou bochechas e as arcadas dentárias." },

  { id:"dig-04", nome:"Arcada dentária", pagina:28,
    funcao:"Os dentes participam da apreensão e fragmentação mecânica dos alimentos durante a mastigação." },

  { id:"dig-05", nome:"Cavidade bucal", pagina:28,
    funcao:"Recebe o alimento e participa da mastigação, mistura com saliva, formação do bolo alimentar e início da digestão." },

  /* PÁGINA 29 */
  { id:"dig-06", nome:"Língua — musculatura intrínseca", pagina:29,
    funcao:"Permite alterações no formato da língua, sendo importante para manipulação do alimento e articulação da fala." },

  { id:"dig-07", nome:"Língua — musculatura extrínseca", pagina:29,
    funcao:"Movimenta a língua em relação às estruturas vizinhas, participando da manipulação do alimento e da deglutição." },

  { id:"dig-08", nome:"Palato duro", pagina:29,
    funcao:"Forma a porção anterior rígida do teto da boca e separa a cavidade oral da cavidade nasal." },

  { id:"dig-09", nome:"Palato mole", pagina:29,
    funcao:"É uma estrutura muscular móvel que participa do fechamento da comunicação com a nasofaringe durante a deglutição." },

  { id:"dig-10", nome:"Úvula palatina", pagina:29,
    funcao:"Participa dos movimentos do palato mole e auxilia no fechamento da comunicação com a nasofaringe durante a deglutição." },

  { id:"dig-11", nome:"Rima labial", pagina:29,
    funcao:"É a abertura delimitada pelos lábios, permitindo comunicação entre o exterior e a cavidade bucal." },

  /* PÁGINA 30 */
  { id:"dig-12", nome:"Faringe", pagina:30,
    funcao:"Participa da passagem do alimento e do ar, funcionando como região comum aos sistemas digestório e respiratório." },

  { id:"dig-13", nome:"Nasofaringe", pagina:30,
    funcao:"É a porção superior da faringe relacionada principalmente à passagem do ar." },

  { id:"dig-14", nome:"Orofaringe", pagina:30,
    funcao:"Recebe conteúdo proveniente da cavidade oral e participa da condução do bolo alimentar." },

  { id:"dig-15", nome:"Laringofaringe", pagina:30,
    funcao:"É a porção inferior da faringe que participa da condução do bolo alimentar em direção ao esôfago." },

  /* PÁGINA 31 */
  { id:"dig-16", nome:"Esôfago", pagina:31,
    funcao:"Conduz o bolo alimentar da faringe até o estômago por meio de movimentos peristálticos." },

  /* PÁGINA 32 */
  { id:"dig-17", nome:"Pregas gástricas", pagina:32,
    funcao:"Permitem que o estômago se distenda quando recebe alimento e estão associadas à superfície interna da mucosa gástrica." },

  { id:"dig-18", nome:"Óstio cárdico", pagina:32,
    funcao:"É a abertura pela qual o esôfago se comunica com o estômago." },

  { id:"dig-19", nome:"Óstio pilórico", pagina:32,
    funcao:"É a abertura distal do estômago que estabelece comunicação com o duodeno." },

  /* PÁGINA 33 */
  { id:"dig-20", nome:"Região cárdia", pagina:33,
    funcao:"É a região do estômago próxima à entrada do esôfago." },

  { id:"dig-21", nome:"Região pilórica", pagina:33,
    funcao:"É a região distal do estômago relacionada à passagem do conteúdo gástrico para o duodeno." },

  /* PÁGINA 34 */
  { id:"dig-22", nome:"Fundo do estômago", pagina:34,
    funcao:"É a porção superior do estômago, localizada acima da região de entrada do esôfago." },

  { id:"dig-23", nome:"Corpo do estômago", pagina:34,
    funcao:"É a principal região central do estômago, onde ocorre grande parte da atividade digestiva gástrica." },

  { id:"dig-24", nome:"Curvatura menor do estômago", pagina:34,
    funcao:"É a margem côncava medial do estômago." },

  { id:"dig-25", nome:"Curvatura maior do estômago", pagina:34,
    funcao:"É a margem convexa e mais extensa do estômago." },

  /* PÁGINA 35 */
  { id:"dig-26", nome:"Intestino delgado", pagina:35,
    funcao:"É o principal local de digestão química e absorção de nutrientes." },

  { id:"dig-27", nome:"Duodeno", pagina:35,
    funcao:"Recebe o conteúdo proveniente do estômago e participa intensamente da digestão, recebendo secreções digestivas." },

  { id:"dig-28", nome:"Ampola duodenal", pagina:35,
    funcao:"É a porção inicial dilatada do duodeno, próxima à passagem do conteúdo proveniente do estômago." },

  { id:"dig-29", nome:"Pregas circulares do duodeno", pagina:35,
    funcao:"Aumentam a superfície interna do intestino delgado, favorecendo a absorção." },

  { id:"dig-30", nome:"Flexura duodenojejunal", pagina:35,
    funcao:"Marca a transição entre o duodeno e o jejuno." },

  /* PÁGINA 36 */
  { id:"dig-31", nome:"Jejuno", pagina:36,
    funcao:"É uma porção do intestino delgado especializada na continuidade da digestão e absorção de nutrientes." },

  { id:"dig-32", nome:"Íleo", pagina:36,
    funcao:"É a porção final do intestino delgado, responsável pela continuidade da absorção e comunicação com o intestino grosso." },

  /* PÁGINA 37 */
  { id:"dig-33", nome:"Ceco", pagina:37,
    funcao:"É a primeira porção do intestino grosso, recebendo o conteúdo proveniente do íleo." },

  { id:"dig-34", nome:"Junção ileocecocólica", pagina:37,
    funcao:"É a região de transição entre o íleo e o intestino grosso." },

  /* PÁGINA 38 */
  { id:"dig-35", nome:"Colo ascendente", pagina:38,
    funcao:"Conduz o conteúdo intestinal no sentido superior pelo lado direito do abdome." },

  { id:"dig-36", nome:"Colo transverso", pagina:38,
    funcao:"Conduz o conteúdo intestinal transversalmente pelo abdome." },

  { id:"dig-37", nome:"Colo descendente", pagina:38,
    funcao:"Conduz o conteúdo intestinal inferiormente pelo lado esquerdo do abdome." },

  { id:"dig-38", nome:"Colo sigmoide", pagina:38,
    funcao:"É a porção do intestino grosso que conduz o conteúdo em direção ao reto." },

  /* PÁGINA 39 */
  { id:"dig-39", nome:"Haustros", pagina:39,
    funcao:"São saculações características da parede do intestino grosso." },

  { id:"dig-40", nome:"Intestino grosso", pagina:39,
    funcao:"Participa principalmente da absorção de água e eletrólitos e da formação e armazenamento das fezes." },

  { id:"dig-41", nome:"Apêndice vermiforme", pagina:39,
    funcao:"É uma estrutura tubular ligada ao ceco, contendo tecido linfoide e relacionada ao sistema imunológico intestinal." },

  { id:"dig-42", nome:"Canal retal", pagina:39,
    funcao:"Participa da condução e armazenamento temporário do conteúdo fecal antes da eliminação." },

  { id:"dig-43", nome:"Ânus", pagina:39,
    funcao:"É a abertura terminal do tubo digestório responsável pela eliminação das fezes." },

  { id:"dig-44", nome:"Tênias", pagina:39,
    funcao:"São faixas longitudinais de músculo liso presentes no intestino grosso e relacionadas à sua conformação." },

  /* PÁGINA 40 */
  { id:"dig-45", nome:"Fígado", pagina:40,
    funcao:"Produz bile, participa do metabolismo de nutrientes, armazenamento de substâncias e processamento de diversas moléculas absorvidas." },

  { id:"dig-46", nome:"Lobo direito do fígado", pagina:40,
    funcao:"É uma das principais divisões anatômicas do fígado, localizada à direita." },

  { id:"dig-47", nome:"Lobo esquerdo do fígado", pagina:40,
    funcao:"É uma divisão anatômica do fígado localizada à esquerda." },

  { id:"dig-48", nome:"Lobo caudado", pagina:40,
    funcao:"É uma divisão anatômica do fígado localizada na face visceral." },

  { id:"dig-49", nome:"Lobo quadrado", pagina:40,
    funcao:"É uma divisão anatômica do fígado localizada na face visceral." },

  /* PÁGINA 41 */
  { id:"dig-50", nome:"Veia porta hepática", pagina:41,
    funcao:"Conduz ao fígado sangue proveniente principalmente do trato gastrointestinal, rico em substâncias absorvidas." },

  { id:"dig-51", nome:"Ligamento falciforme", pagina:41,
    funcao:"É uma prega peritoneal que ajuda a fixar o fígado e marca externamente a separação entre os lobos direito e esquerdo." },

  { id:"dig-52", nome:"Artéria hepática própria", pagina:41,
    funcao:"Leva sangue arterial ao fígado, fornecendo oxigênio ao tecido hepático." },

  { id:"dig-53", nome:"Vesícula biliar", pagina:41,
    funcao:"Armazena e concentra a bile produzida pelo fígado." },

  /* PÁGINA 42 */
  { id:"dig-54", nome:"Ductos biliares", pagina:42,
    funcao:"Formam o sistema de condução da bile produzida pelo fígado até as regiões onde ela será utilizada ou armazenada." },

  { id:"dig-55", nome:"Ducto cístico", pagina:42,
    funcao:"Conecta a vesícula biliar ao sistema de ductos biliares, permitindo a passagem da bile." },

  { id:"dig-56", nome:"Ducto hepático direito", pagina:42,
    funcao:"Drena bile proveniente dos ductos do lado direito do fígado." },

  { id:"dig-57", nome:"Ducto hepático esquerdo", pagina:42,
    funcao:"Drena bile proveniente dos ductos do lado esquerdo do fígado." },

  { id:"dig-58", nome:"Ducto hepático comum", pagina:42,
    funcao:"É formado pela união dos ductos hepáticos direito e esquerdo e conduz a bile para o restante da árvore biliar." },

  { id:"dig-59", nome:"Ducto colédoco", pagina:42,
    funcao:"Conduz a bile em direção ao duodeno." },

  { id:"dig-60", nome:"Ducto hepatopancreático", pagina:42,
    funcao:"Relaciona-se à chegada das secreções biliar e pancreática ao duodeno." },

  /* PÁGINA 43 */
  { id:"dig-61", nome:"Pâncreas", pagina:43,
    funcao:"Produz enzimas digestivas e secreções hormonais importantes para o metabolismo." },

  { id:"dig-62", nome:"Cabeça do pâncreas", pagina:43,
    funcao:"É a porção do pâncreas localizada junto ao duodeno." },

  { id:"dig-63", nome:"Corpo do pâncreas", pagina:43,
    funcao:"É a porção central do pâncreas situada entre a cabeça e a cauda." },

  { id:"dig-64", nome:"Cauda do pâncreas", pagina:43,
    funcao:"É a extremidade esquerda do pâncreas, próxima ao baço." },

  { id:"dig-65", nome:"Ducto pancreático principal", pagina:43,
    funcao:"Conduz a secreção pancreática produzida pelo pâncreas em direção ao duodeno." },

  { id:"dig-66", nome:"Ducto pancreático acessório", pagina:43,
    funcao:"É uma via adicional de drenagem da secreção pancreática para o duodeno." },

  { id:"dig-67", nome:"Ducto pancreático", pagina:43,
    funcao:"Participa da condução das secreções produzidas pelo pâncreas em direção ao duodeno." },

  /* PÁGINA 44 */
  { id:"dig-68", nome:"Glândulas salivares", pagina:44,
    funcao:"Produzem saliva, que umidifica o alimento, facilita a formação do bolo alimentar e inicia processos digestivos." },

  { id:"dig-69", nome:"Parótida", pagina:44,
    funcao:"É uma grande glândula salivar que produz saliva e a libera por meio de seu ducto." },

  { id:"dig-70", nome:"Ducto da parótida", pagina:44,
    funcao:"Conduz a saliva produzida pela parótida até a cavidade bucal." },

  /* PÁGINA 45 */
  { id:"dig-71", nome:"Sublingual", pagina:45,
    funcao:"É uma glândula salivar localizada no assoalho da boca, contribuindo para a produção de saliva." },

  { id:"dig-72", nome:"Submandibular", pagina:45,
    funcao:"É uma glândula salivar localizada inferiormente à mandíbula e responsável por parte importante da produção de saliva." }
];


/* ============================================================
   BANCO COMPLEMENTAR DE RELAÇÕES ANATÔMICAS
   ============================================================ */

const relacoes = {

  "resp-01":"Está localizada na porção superior do nariz externo.",
  "resp-02":"Está entre a raiz e o ápice do nariz externo.",
  "resp-03":"É a extremidade anterior do nariz externo.",
  "resp-04":"É a porção externa inicial das vias respiratórias.",
  "resp-05":"Delimita lateralmente as narinas.",
  "resp-06":"Corresponde à porção inferior do nariz externo.",
  "resp-07":"É uma abertura externa do sistema respiratório.",
  "resp-08":"É dividida internamente em regiões que direcionam o fluxo de ar.",
  "resp-09":"É uma abertura anterior relacionada à cavidade nasal.",
  "resp-10":"Faz a comunicação posterior da cavidade nasal com a faringe.",
  "resp-11":"Está acima das demais conchas nasais.",
  "resp-12":"Ocupa posição intermediária entre as conchas superior e inferior.",
  "resp-13":"É a concha nasal situada mais inferiormente.",
  "resp-14":"Está abaixo da concha nasal superior.",
  "resp-15":"Está relacionado às estruturas de drenagem dos seios paranasais.",
  "resp-16":"Relaciona-se diretamente ao ducto nasolacrimal.",
  "resp-17":"Está associado à percepção dos odores.",
  "resp-18":"É uma via neural relacionada ao olfato.",
  "resp-19":"Liga a região ocular à cavidade nasal.",
  "resp-20":"Está localizado no osso frontal.",
  "resp-21":"Está localizado no osso esfenoide.",
  "resp-22":"Está relacionado ao osso etmóide.",
  "resp-23":"Está localizado na maxila.",
  "resp-24":"Está na parede lateral da nasofaringe.",
  "resp-25":"É uma abertura localizada na nasofaringe.",
  "resp-26":"É comum aos sistemas respiratório e digestório.",
  "resp-27":"Está relacionada à cavidade nasal.",
  "resp-28":"Está relacionada à cavidade oral.",
  "resp-29":"É a porção inferior da faringe.",
  "resp-30":"É uma estrutura linfoide da faringe.",
  "resp-31":"Relaciona-se diretamente à proteção da via aérea na deglutição.",
  "resp-32":"Está acima da prega vocal.",
  "resp-33":"Participa da produção da voz.",
  "resp-34":"É a região que contém as pregas vocais.",
  "resp-35":"É a cartilagem que sustenta a epiglote.",
  "resp-36":"É uma das principais cartilagens da laringe.",
  "resp-37":"Forma um anel cartilaginoso na laringe.",
  "resp-38":"É uma pequena cartilagem localizada na região posterior da laringe.",
  "resp-39":"Participa do movimento das pregas vocais.",
  "resp-40":"Mantêm a traqueia aberta.",
  "resp-41":"Ligam os anéis cartilaginosos.",
  "resp-42":"É a parede posterior membranosa da traqueia.",
  "resp-43":"É o ponto de divisão da traqueia.",
  "resp-44":"Liga a laringe aos brônquios.",
  "resp-45":"Leva ar ao pulmão esquerdo.",
  "resp-46":"Leva ar ao pulmão direito.",
  "resp-47":"Leva ar ao lobo superior direito.",
  "resp-48":"Leva ar ao lobo médio direito.",
  "resp-49":"Leva ar ao lobo inferior direito.",
  "resp-50":"Leva ar ao lobo superior esquerdo.",
  "resp-51":"Leva ar ao lobo inferior esquerdo.",
  "resp-52":"Levam ar para segmentos broncopulmonares.",
  "resp-53":"São menores que os brônquios e conduzem o ar mais distalmente.",
  "resp-54":"É um lobo do pulmão esquerdo.",
  "resp-55":"É o lobo inferior do pulmão esquerdo.",
  "resp-56":"Separa os lobos superior e inferior esquerdos.",
  "resp-57":"É um dos três lobos do pulmão direito.",
  "resp-58":"Separa os lobos superior e médio direitos.",
  "resp-59":"É exclusivo do pulmão direito.",
  "resp-60":"Relaciona-se à separação do lobo inferior direito.",
  "resp-61":"É o lobo inferior do pulmão direito.",
  "resp-62":"Está em contato com o diafragma.",
  "resp-63":"É a extremidade superior do pulmão.",
  "resp-64":"Relaciona-se à parede torácica.",
  "resp-65":"Relaciona-se ao diafragma.",
  "resp-66":"Está voltada para o mediastino.",
  "resp-67":"É a porta de entrada e saída de estruturas pulmonares.",

  "dig-01":"É uma das estruturas que delimitam a abertura da boca.",
  "dig-02":"É uma das estruturas que delimitam a abertura da boca.",
  "dig-03":"Está entre os lábios/bochechas e os dentes.",
  "dig-04":"Está diretamente envolvida na mastigação.",
  "dig-05":"É o local inicial da entrada e processamento do alimento.",
  "dig-06":"Altera o formato da língua.",
  "dig-07":"Move a língua como um todo.",
  "dig-08":"É rígido e está na porção anterior do teto da boca.",
  "dig-09":"É móvel e está posteriormente ao palato duro.",
  "dig-10":"É uma projeção do palato mole.",
  "dig-11":"É a abertura entre os lábios.",
  "dig-12":"É uma região compartilhada pelos sistemas respiratório e digestório.",
  "dig-13":"Relaciona-se à cavidade nasal.",
  "dig-14":"Relaciona-se à cavidade oral.",
  "dig-15":"Está entre a orofaringe e o esôfago.",
  "dig-16":"Liga a faringe ao estômago.",
  "dig-17":"São pregas da mucosa do estômago.",
  "dig-18":"É a entrada do estômago.",
  "dig-19":"É a saída do estômago em direção ao duodeno.",
  "dig-20":"Está próxima à entrada do esôfago.",
  "dig-21":"Está próxima à saída do estômago.",
  "dig-22":"É a porção superior do estômago.",
  "dig-23":"É a maior região central do estômago.",
  "dig-24":"É a margem côncava do estômago.",
  "dig-25":"É a margem convexa do estômago.",
  "dig-26":"É o principal local de absorção de nutrientes.",
  "dig-27":"É a primeira porção do intestino delgado.",
  "dig-28":"É uma dilatação inicial do duodeno.",
  "dig-29":"Aumentam a superfície interna do intestino delgado.",
  "dig-30":"Marca a transição entre duodeno e jejuno.",
  "dig-31":"É a porção intermediária do intestino delgado.",
  "dig-32":"É a porção final do intestino delgado.",
  "dig-33":"É a primeira porção do intestino grosso.",
  "dig-34":"Marca a transição entre intestino delgado e grosso.",
  "dig-35":"Ascende pelo lado direito do abdome.",
  "dig-36":"Atravessa transversalmente o abdome.",
  "dig-37":"Desce pelo lado esquerdo do abdome.",
  "dig-38":"Tem formato de S e precede o reto.",
  "dig-39":"São saculações do intestino grosso.",
  "dig-40":"É responsável por grande parte da absorção de água no intestino.",
  "dig-41":"Está ligado ao ceco.",
  "dig-42":"Relaciona-se ao armazenamento e condução das fezes.",
  "dig-43":"É a abertura terminal do tubo digestório.",
  "dig-44":"São faixas longitudinais musculares do intestino grosso.",
  "dig-45":"É o maior órgão glandular associado ao sistema digestório.",
  "dig-46":"É o maior lobo hepático.",
  "dig-47":"É o lobo localizado à esquerda.",
  "dig-48":"Está na face visceral do fígado.",
  "dig-49":"Está na face visceral do fígado.",
  "dig-50":"Recebe sangue proveniente do trato gastrointestinal.",
  "dig-51":"É uma prega peritoneal relacionada à fixação do fígado.",
  "dig-52":"Fornece sangue arterial ao fígado.",
  "dig-53":"Armazena bile.",
  "dig-54":"Formam a rede responsável pelo transporte da bile.",
  "dig-55":"Comunica a vesícula biliar com os ductos biliares.",
  "dig-56":"Drena o lado direito do fígado.",
  "dig-57":"Drena o lado esquerdo do fígado.",
  "dig-58":"Resulta da união dos ductos hepáticos direito e esquerdo.",
  "dig-59":"Conduz bile em direção ao duodeno.",
  "dig-60":"Relaciona-se à passagem conjunta das secreções biliar e pancreática.",
  "dig-61":"É uma glândula com funções digestivas e endócrinas.",
  "dig-62":"Está em contato com o duodeno.",
  "dig-63":"É a porção central do pâncreas.",
  "dig-64":"É a extremidade do pâncreas próxima ao baço.",
  "dig-65":"É a principal via de drenagem da secreção pancreática.",
  "dig-66":"É uma via adicional de drenagem pancreática.",
  "dig-67":"Conduz secreções pancreáticas.",
  "dig-68":"Produzem saliva.",
  "dig-69":"É uma das maiores glândulas salivares.",
  "dig-70":"Leva saliva da parótida à cavidade oral.",
  "dig-71":"Está localizada no assoalho da boca.",
  "dig-72":"Está relacionada à mandíbula e produz saliva."
};


/* ============================================================
   PERGUNTAS DIFÍCEIS
   ============================================================ */

/*
   As perguntas não perguntam:
   "Qual é a estrutura indicada?"

   Elas obrigam o jogador a raciocinar.
*/

function criarPergunta(estrutura, todasEstruturas) {

  const f = estrutura.funcao;
  const r = relacoes[estrutura.id] || "";
  const nome = estrutura.nome;

  const tipos = [

    {
      pergunta:
        `Qual estrutura da imagem exerce a seguinte função: ${f}`,
      resposta:nome
    },

    {
      pergunta:
        `Considerando sua posição anatômica e sua função, qual estrutura está sendo descrita? ${f}`,
      resposta:nome
    },

    {
      pergunta:
        `Se essa estrutura sofresse uma alteração importante, qual função seria diretamente prejudicada?`,
      resposta:nome
    },

    {
      pergunta:
        `Qual estrutura está relacionada à seguinte característica anatômica: ${r}`,
      resposta:nome
    },

    {
      pergunta:
        `Qual das estruturas apresentadas está diretamente associada a esta função: ${f}`,
      resposta:nome
    }
  ];

  /*
    Para perguntas de consequência, usamos a função como pista
    sem entregar o nome.
  */

  let modelo = tipos[Math.floor(Math.random() * tipos.length)];

  if (modelo.pergunta.includes("sofresse uma alteração")) {
    modelo.pergunta =
      `Uma lesão nessa estrutura poderia comprometer diretamente qual função?`;
  }

  return {
    texto:modelo.pergunta,
    resposta:modelo.resposta
  };
}


/* ============================================================
   CRIAÇÃO DAS QUESTÕES
   ============================================================ */

function embaralhar(array) {
  const copia = [...array];

  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [copia[i], copia[j]] = [copia[j], copia[i]];
  }

  return copia;
}


function escolherAlternativas(resposta, todasEstruturas) {

  const candidatos = todasEstruturas.filter(
    item => item.nome !== resposta
  );

  const alternativasErradas = embaralhar(candidatos)
    .slice(0, TOTAL_ALTERNATIVAS - 1)
    .map(item => item.nome);

  return embaralhar([
    resposta,
    ...alternativasErradas
  ]);
}


function criarBancoPerguntas() {

  const todas = sistemaAtual === "respiratorio"
    ? respiratorio
    : digestorio;

  let perguntas = [];

  todas.forEach(estrutura => {

    /*
      Criamos várias versões para que a mesma estrutura
      possa ser cobrada de maneiras diferentes.
    */

    for (let i = 0; i < 4; i++) {

      const pergunta = criarPergunta(
        estrutura,
        todas
      );

      perguntas.push({
        id:estrutura.id,
        estrutura:estrutura.nome,
        pagina:estrutura.pagina,
        imagem:`pagina-${String(estrutura.pagina).padStart(2,"0")}.jpg`,
        pergunta:pergunta.texto,
        resposta:pergunta.resposta,
        funcao:estrutura.funcao,
        alternativas:escolherAlternativas(
          estrutura.nome,
          todas
        )
      });
    }
  });

  return embaralhar(perguntas);
}


/* ============================================================
   ELEMENTOS DA INTERFACE
   ============================================================ */

function elemento(id) {
  return document.getElementById(id);
}


/* ============================================================
   INICIAR JOGO
   ============================================================ */

function iniciarJogo(modo, sistema = "respiratorio") {

  modoAtual = modo;
  sistemaAtual = sistema;

  indicePergunta = 0;
  pontuacao = 0;
  respondida = false;
  historicoPerguntas = [];

  perguntasJogo = criarBancoPerguntas();

  /*
    No modo simulado usamos uma quantidade limitada,
    mas suficientemente grande para testar conhecimento.
  */

  if (modo === "simulado") {
    perguntasJogo = perguntasJogo.slice(0, 40);
  }

  mostrarTela("jogo");

  mostrarPergunta();
}


/* ============================================================
   TROCA DE TELAS
   ============================================================ */

function mostrarTela(nome) {

  const telas = [
    "menu",
    "configuracao",
    "jogo",
    "resultado"
  ];

  telas.forEach(tela => {

    const el = elemento(tela);

    if (el) {
      el.style.display =
        tela === nome ? "block" : "none";
    }

  });
}


/* ============================================================
   MOSTRAR PERGUNTA
   ============================================================ */

function mostrarPergunta() {

  if (indicePergunta >= perguntasJogo.length) {
    finalizarJogo();
    return;
  }

  respondida = false;

  const questao = perguntasJogo[indicePergunta];

  historicoPerguntas.push(questao.id);

  const imagem = elemento("imagemAnatomica");
  const semImagem = elemento("semImagem");

  if (imagem) {

    imagem.src = questao.imagem;

    imagem.alt =
      `Prancha anatômica da página ${questao.pagina} do PDF`;

    imagem.style.display = "block";
  }

  if (semImagem) {
    semImagem.style.display = "none";
  }

  /*
    IMPORTANTE:
    O marcador antigo NÃO é usado.
    As setas já estão nas imagens originais do PDF.
  */

  const marcador = elemento("marcador");

  if (marcador) {
    marcador.style.display = "none";
  }

  const perguntaEl = elemento("pergunta");

  if (perguntaEl) {
    perguntaEl.textContent = questao.pergunta;
  }

  const alternativas = elemento("alternativas");

  if (alternativas) {

    alternativas.innerHTML = "";

    questao.alternativas.forEach((alternativa, index) => {

      const botao = document.createElement("button");

      botao.type = "button";
      botao.className = "alternativa";

      botao.textContent =
        `${String.fromCharCode(65 + index)}) ${alternativa}`;

      botao.addEventListener(
        "click",
        () => verificarResposta(alternativa)
      );

      alternativas.appendChild(botao);
    });
  }

  const feedback = elemento("feedback");

  if (feedback) {
    feedback.textContent = "";
    feedback.className = "feedback";
  }

  const proxima = elemento("proxima");

  if (proxima) {
    proxima.style.display = "none";
  }

  atualizarProgresso();
}


/* ============================================================
   PROGRESSO
   ============================================================ */

function atualizarProgresso() {

  const progresso =
    elemento("progresso");

  if (progresso) {

    progresso.textContent =
      `Questão ${indicePergunta + 1} de ${perguntasJogo.length}`;
  }

  const pontuacaoEl =
    elemento("pontuacao");

  if (pontuacaoEl) {

    pontuacaoEl.textContent =
      `Pontuação: ${pontuacao}`;
  }
}


/* ============================================================
   VERIFICAR RESPOSTA
   ============================================================ */

function verificarResposta(respostaSelecionada) {

  if (respondida) {
    return;
  }

  respondida = true;

  const questao =
    perguntasJogo[indicePergunta];

  const correta =
    respostaSelecionada === questao.resposta;

  if (correta) {
    pontuacao++;
  }

  const botoes =
    document.querySelectorAll(
      "#alternativas button"
    );

  botoes.forEach(botao => {

    botao.disabled = true;

    const texto =
      botao.textContent
        .replace(/^[A-D]\)\s*/, "");

    if (texto === questao.resposta) {
      botao.classList.add("correta");
    }

    if (
      texto === respostaSelecionada &&
      !correta
    ) {
      botao.classList.add("incorreta");
    }
  });


  mostrarFeedback(
    correta,
    questao
  );

  const proxima =
    elemento("proxima");

  if (proxima) {
    proxima.style.display = "block";
  }

  atualizarProgresso();
}


/* ============================================================
   FEEDBACK
   ============================================================ */

function mostrarFeedback(correta, questao) {

  const feedback =
    elemento("feedback");

  if (!feedback) {
    return;
  }

  feedback.className =
    correta
      ? "feedback correto"
      : "feedback incorreto";

  if (correta) {

    feedback.innerHTML = `
      <strong>✅ CORRETO!</strong>
      <br><br>
      <strong>${questao.resposta}</strong>
      <br><br>
      ${questao.funcao}
      <br><br>
      <small>
        🧠 Tente explicar essa função com suas próprias palavras.
        Isso ajuda na fixação.
      </small>
    `;

  } else {

    feedback.innerHTML = `
      <strong>❌ INCORRETO!</strong>
      <br><br>
      A resposta correta é:
      <strong>${questao.resposta}</strong>
      <br><br>
      ${questao.funcao}
      <br><br>
      <small>
        🔁 Não passe simplesmente para a próxima.
        Leia novamente a função e tente relacioná-la
        com a posição da estrutura na imagem.
      </small>
    `;
  }
}


/* ============================================================
   PRÓXIMA QUESTÃO
   ============================================================ */

function proximaPergunta() {

  if (!respondida) {
    return;
  }

  indicePergunta++;

  mostrarPergunta();
}


/* ============================================================
   FINALIZAR
   ============================================================ */

function finalizarJogo() {

  mostrarTela("resultado");

  const resultado =
    elemento("resultado");

  if (resultado) {

    const total =
      perguntasJogo.length;

    const percentual =
      total > 0
        ? Math.round((pontuacao / total) * 100)
        : 0;

    let mensagem = "";

    if (percentual >= 90) {

      mensagem =
        "🔥 Excelente! Você está dominando as estruturas.";

    } else if (percentual >= 75) {

      mensagem =
        "👏 Muito bom! Continue revisando as estruturas que errou.";

    } else if (percentual >= 60) {

      mensagem =
        "📚 Bom trabalho! Ainda vale reforçar funções e relações anatômicas.";

    } else {

      mensagem =
        "🧠 Continue estudando. O objetivo é transformar o raciocínio em memória.";

    }

    resultado.innerHTML = `
      <h2>Resultado</h2>

      <p>
        Você acertou
        <strong>${pontuacao}</strong>
        de
        <strong>${total}</strong>
        questões.
      </p>

      <p>
        Aproveitamento:
        <strong>${percentual}%</strong>
      </p>

      <p>
        ${mensagem}
      </p>
    `;
  }
}


/* ============================================================
   VOLTAR AO MENU
   ============================================================ */

function voltarMenu() {

  mostrarTela("menu");

  perguntasJogo = [];
  indicePergunta = 0;
  pontuacao = 0;
  respondida = false;
}


/* ============================================================
   CONFIGURAÇÃO
   ============================================================ */

function abrirConfiguracao() {

  mostrarTela("configuracao");
}


function selecionarSistema(sistema) {

  sistemaAtual = sistema;

  const nome =
    elemento("sistemaSelecionado");

  if (nome) {

    nome.textContent =
      sistema === "respiratorio"
        ? "Sistema Respiratório"
        : "Sistema Digestório";
  }
}


/* ============================================================
   FUNÇÕES DE COMPATIBILIDADE
   ============================================================ */

/*
   Alguns botões do HTML podem chamar funções antigas.
   Mantemos essas funções para evitar que o jogo pare de funcionar.
*/

function iniciarRespiratorio(modo = "treinar") {

  iniciarJogo(
    modo,
    "respiratorio"
  );
}


function iniciarDigestorio(modo = "treinar") {

  iniciarJogo(
    modo,
    "digestorio"
  );
}


function estudarRespiratorio() {

  iniciarJogo(
    "estudar",
    "respiratorio"
  );
}


function estudarDigestorio() {

  iniciarJogo(
    "estudar",
    "digestorio"
  );
}


function treinarRespiratorio() {

  iniciarJogo(
    "treinar",
    "respiratorio"
  );
}


function treinarDigestorio() {

  iniciarJogo(
    "treinar",
    "digestorio"
  );
}


function simuladoRespiratorio() {

  iniciarJogo(
    "simulado",
    "respiratorio"
  );
}


function simuladoDigestorio() {

  iniciarJogo(
    "simulado",
    "digestorio"
  );
}


/* ============================================================
   EVENTOS
   ============================================================ */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    /*
      Botão "Próxima"
    */

    const proxima =
      elemento("proxima");

    if (proxima) {

      proxima.addEventListener(
        "click",
        proximaPergunta
      );
    }


    /*
      Botões de voltar, caso existam.
    */

    const voltar =
      elemento("voltar");

    if (voltar) {

      voltar.addEventListener(
        "click",
        voltarMenu
      );
    }


    /*
      Se o HTML já estiver mostrando o menu,
      não fazemos nada.
    */

    mostrarTela("menu");
  }
);


/* ============================================================
   EXPORTAÇÃO GLOBAL
   ============================================================ */

/*
   Necessário caso o index.html utilize onclick="..."
*/

window.iniciarJogo = iniciarJogo;
window.iniciarRespiratorio = iniciarRespiratorio;
window.iniciarDigestorio = iniciarDigestorio;

window.estudarRespiratorio = estudarRespiratorio;
window.estudarDigestorio = estudarDigestorio;

window.treinarRespiratorio = treinarRespiratorio;
window.treinarDigestorio = treinarDigestorio;

window.simuladoRespiratorio = simuladoRespiratorio;
window.simuladoDigestorio = simuladoDigestorio;

window.proximaPergunta = proximaPergunta;
window.voltarMenu = voltarMenu;
window.abrirConfiguracao = abrirConfiguracao;
window.selecionarSistema = selecionarSistema;


/* ============================================================
   FIM DO GAME.JS
   ============================================================ */
