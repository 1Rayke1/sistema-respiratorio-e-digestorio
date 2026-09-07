/* =========================================================
   ANATOMIA EM JOGO
   SISTEMA RESPIRATÓRIO + SISTEMA DIGESTÓRIO

   Banco amplo de questões baseado no PDF enviado.
   Imagens: pagina-02.jpg até pagina-45.jpg

   NÃO são adicionadas setas ou marcações às imagens.
========================================================= */

"use strict";

/* =========================================================
   CONFIGURAÇÃO
========================================================= */

let sistemaAtual = null;
let modoAtual = null;
let perguntasPartida = [];
let indiceAtual = 0;
let pontuacao = 0;
let respondida = false;
let historicoErros = [];

const quantidadePorModo = {
    estudar: 15,
    treinar: 30,
    simulado: 40
};

/* =========================================================
   ESTRUTURAS DO PDF
========================================================= */

const respiratorio = [
    ["Raiz do nariz",2,"Nariz externo"],
    ["Dorso do nariz",2,"Nariz externo"],
    ["Ápice do nariz",2,"Nariz externo"],
    ["Nariz externo",2,"Nariz externo"],
    ["Asas do nariz",3,"Nariz externo"],
    ["Base do nariz",3,"Nariz externo"],
    ["Narinas",3,"Nariz externo"],

    ["Cavidade nasal",4,"Cavidade nasal"],
    ["Abertura piriforme",4,"Cavidade nasal"],
    ["Coanas",4,"Cavidade nasal"],

    ["Concha nasal superior",5,"Conchas nasais"],
    ["Concha nasal média",5,"Conchas nasais"],
    ["Concha nasal inferior",5,"Conchas nasais"],

    ["Meato nasal superior",6,"Meatos nasais"],
    ["Meato nasal médio",6,"Meatos nasais"],
    ["Meato nasal inferior",6,"Meatos nasais"],

    ["Epitélio olfatório",7,"Estruturas relacionadas ao olfato"],
    ["Nervo olfatório",7,"Estruturas relacionadas ao olfato"],
    ["Ducto nasolacrimal",7,"Estruturas da cavidade nasal"],

    ["Seio frontal",9,"Seios paranasais"],
    ["Seio esfenoidal",9,"Seios paranasais"],
    ["Seios etmoidais",9,"Seios paranasais"],
    ["Seios maxilares",9,"Seios paranasais"],

    ["Tórus tubal",10,"Faringe"],
    ["Óstio faríngeo da tuba auditiva",10,"Faringe"],
    ["Faringe",10,"Faringe"],

    ["Nasofaringe",11,"Regiões da faringe"],
    ["Orofaringe",11,"Regiões da faringe"],
    ["Laringofaringe",11,"Regiões da faringe"],

    ["Tonsilas faríngeas",12,"Faringe"],

    ["Epiglote",13,"Laringe"],
    ["Prega vestibular",13,"Laringe"],
    ["Prega vocal",13,"Laringe"],
    ["Laringe",13,"Laringe"],

    ["Cartilagem epiglótica",15,"Cartilagens da laringe"],
    ["Cartilagem da tireoide",15,"Cartilagens da laringe"],
    ["Cartilagem cricóide",15,"Cartilagens da laringe"],

    ["Cartilagem corniculada",16,"Cartilagens da laringe"],
    ["Cartilagem aritenóide",16,"Cartilagens da laringe"],

    ["Anéis cartilaginosos",17,"Traqueia"],
    ["Ligamentos anulares",17,"Traqueia"],
    ["Parede posterior da traqueia",17,"Traqueia"],
    ["Carina",17,"Traqueia"],
    ["Traqueia",17,"Traqueia"],

    ["Brônquio principal esquerdo",18,"Brônquios"],
    ["Brônquio principal direito",18,"Brônquios"],
    ["Brônquio lobar superior direito",18,"Brônquios lobares direitos"],
    ["Brônquio lobar médio direito",18,"Brônquios lobares direitos"],
    ["Brônquio lobar inferior direito",18,"Brônquios lobares direitos"],

    ["Brônquio lobar superior esquerdo",20,"Brônquios lobares esquerdos"],
    ["Brônquio lobar inferior esquerdo",20,"Brônquios lobares esquerdos"],

    ["Brônquios segmentares",21,"Árvore brônquica"],
    ["Bronquíolos",21,"Árvore brônquica"],

    ["Lobo superior esquerdo",22,"Pulmão esquerdo"],
    ["Lobo inferior esquerdo",22,"Pulmão esquerdo"],
    ["Fissura oblíqua esquerda",22,"Pulmão esquerdo"],

    ["Lobo superior direito",23,"Pulmão direito"],
    ["Fissura horizontal",23,"Pulmão direito"],
    ["Lobo médio",23,"Pulmão direito"],
    ["Fissura oblíqua direita",23,"Pulmão direito"],
    ["Lobo inferior direito",23,"Pulmão direito"],

    ["Base do pulmão",24,"Pulmões"],
    ["Ápice do pulmão",24,"Pulmões"],

    ["Face costal",25,"Faces do pulmão"],
    ["Face diafragmática",25,"Faces do pulmão"],
    ["Face medial",25,"Faces do pulmão"],

    ["Hilo pulmonar",26,"Pulmões"]
];

const digestorio = [
    ["Lábio superior",28,"Cavidade bucal"],
    ["Lábio inferior",28,"Cavidade bucal"],
    ["Vestíbulo bucal",28,"Cavidade bucal"],
    ["Arcada dentária",28,"Cavidade bucal"],
    ["Cavidade bucal",28,"Cavidade bucal"],

    ["Língua — musculatura intrínseca",29,"Língua"],
    ["Língua — musculatura extrínseca",29,"Língua"],
    ["Palato duro",29,"Cavidade bucal"],
    ["Palato mole",29,"Cavidade bucal"],
    ["Úvula palatina",29,"Cavidade bucal"],
    ["Rima labial",29,"Cavidade bucal"],

    ["Faringe",30,"Faringe"],
    ["Nasofaringe",30,"Regiões da faringe"],
    ["Orofaringe",30,"Regiões da faringe"],
    ["Laringofaringe",30,"Regiões da faringe"],

    ["Esôfago",31,"Esôfago"],

    ["Pregas gástricas",32,"Estômago"],
    ["Óstio cárdico",32,"Estômago"],
    ["Óstio pilórico",32,"Estômago"],

    ["Região cárdia",33,"Regiões do estômago"],
    ["Região pilórica",33,"Regiões do estômago"],

    ["Fundo do estômago",34,"Estômago"],
    ["Corpo do estômago",34,"Estômago"],
    ["Curvatura menor do estômago",34,"Estômago"],
    ["Curvatura maior do estômago",34,"Estômago"],

    ["Intestino delgado",35,"Intestino delgado"],
    ["Duodeno",35,"Intestino delgado"],
    ["Ampola duodenal",35,"Duodeno"],
    ["Pregas circulares do duodeno",35,"Duodeno"],
    ["Flexura duodenojejunal",35,"Duodeno"],

    ["Jejuno",36,"Intestino delgado"],
    ["Íleo",36,"Intestino delgado"],

    ["Ceco",37,"Intestino grosso"],
    ["Junção ileocecocólica",37,"Intestino grosso"],

    ["Colo ascendente",38,"Intestino grosso"],
    ["Colo transverso",38,"Intestino grosso"],
    ["Colo descendente",38,"Intestino grosso"],
    ["Colo sigmoide",38,"Intestino grosso"],

    ["Haustros",39,"Intestino grosso"],
    ["Intestino grosso",39,"Intestino grosso"],
    ["Apêndice vermiforme",39,"Intestino grosso"],
    ["Canal retal",39,"Intestino grosso"],
    ["Ânus",39,"Intestino grosso"],
    ["Tênias",39,"Intestino grosso"],

    ["Fígado",40,"Fígado"],
    ["Lobo direito do fígado",40,"Fígado"],
    ["Lobo esquerdo do fígado",40,"Fígado"],
    ["Lobo caudado",40,"Fígado"],
    ["Lobo quadrado",40,"Fígado"],

    ["Veia porta hepática",41,"Estruturas do fígado"],
    ["Ligamento falciforme",41,"Estruturas do fígado"],
    ["Artéria hepática própria",41,"Estruturas do fígado"],
    ["Vesícula biliar",41,"Estruturas biliares"],

    ["Ductos biliares",42,"Ductos biliares"],
    ["Ducto cístico",42,"Ductos biliares"],
    ["Ducto hepático direito",42,"Ductos biliares"],
    ["Ducto hepático esquerdo",42,"Ductos biliares"],
    ["Ducto hepático comum",42,"Ductos biliares"],
    ["Ducto colédoco",42,"Ductos biliares"],
    ["Ducto hepatopancreático",42,"Ductos biliares"],

    ["Pâncreas",43,"Pâncreas"],
    ["Cabeça do pâncreas",43,"Pâncreas"],
    ["Corpo do pâncreas",43,"Pâncreas"],
    ["Cauda do pâncreas",43,"Pâncreas"],
    ["Ducto pancreático principal",43,"Ductos pancreáticos"],
    ["Ducto pancreático acessório",43,"Ductos pancreáticos"],
    ["Ducto pancreático",43,"Ductos pancreáticos"],

    ["Glândulas salivares",44,"Glândulas salivares"],
    ["Parótida",44,"Glândulas salivares"],
    ["Ducto da parótida",44,"Glândulas salivares"],

    ["Sublingual",45,"Glândulas salivares"],
    ["Submandibular",45,"Glândulas salivares"]
];

/* =========================================================
   BANCO DE QUESTÕES CONCEITUAIS
========================================================= */

const questoesExtras = [

/* ---------- RESPIRATÓRIO ---------- */

{
 sistema:"respiratorio", nivel:"fácil",
 pergunta:"Qual estrutura está relacionada à percepção dos estímulos responsáveis pelo olfato?",
 correta:"Epitélio olfatório",
 alternativas:["Epitélio olfatório","Ducto nasolacrimal","Concha nasal inferior","Óstio faríngeo da tuba auditiva"], pagina:7
},
{
 sistema:"respiratorio", nivel:"médio",
 pergunta:"Qual estrutura está diretamente associada ao olfato e aparece junto ao epitélio olfatório no material?",
 correta:"Nervo olfatório",
 alternativas:["Nervo olfatório","Ducto nasolacrimal","Tórus tubal","Prega vestibular"], pagina:7
},
{
 sistema:"respiratorio", nivel:"difícil",
 pergunta:"Qual alternativa apresenta somente estruturas classificadas no material como seios paranasais?",
 correta:"Seio frontal, seio esfenoidal, seios etmoidais e seios maxilares",
 alternativas:[
    "Seio frontal, seio esfenoidal, seios etmoidais e seios maxilares",
    "Nasofaringe, orofaringe, laringofaringe e coanas",
    "Concha superior, meato médio, carina e traqueia",
    "Prega vocal, prega vestibular, epiglote e bronquíolos"
 ], pagina:9
},
{
 sistema:"respiratorio", nivel:"médio",
 pergunta:"Qual das opções NÃO pertence às regiões da faringe apresentadas no material?",
 correta:"Traqueia",
 alternativas:["Nasofaringe","Orofaringe","Laringofaringe","Traqueia"], pagina:11
},
{
 sistema:"respiratorio", nivel:"difícil",
 pergunta:"Qual sequência apresenta as três regiões da faringe mostradas no material?",
 correta:"Nasofaringe → orofaringe → laringofaringe",
 alternativas:[
    "Nasofaringe → orofaringe → laringofaringe",
    "Orofaringe → nasofaringe → traqueia",
    "Laringofaringe → nasofaringe → brônquio",
    "Nasofaringe → laringe → esôfago"
 ], pagina:11
},
{
 sistema:"respiratorio", nivel:"médio",
 pergunta:"Qual conjunto pertence às cartilagens da laringe apresentadas nas páginas 15 e 16?",
 correta:"Cartilagem epiglótica, cartilagem da tireoide, cartilagem cricóide, cartilagem corniculada e cartilagem aritenóide",
 alternativas:[
    "Cartilagem epiglótica, cartilagem da tireoide, cartilagem cricóide, cartilagem corniculada e cartilagem aritenóide",
    "Carina, bronquíolos, coanas, tênias e haustros",
    "Concha superior, concha média, concha inferior, ducto cístico e pâncreas",
    "Pregas gástricas, pregas circulares, ligamentos anulares e tênias"
 ], pagina:15
},
{
 sistema:"respiratorio", nivel:"difícil",
 pergunta:"Qual estrutura marca a região de divisão da traqueia em brônquios principais no material?",
 correta:"Carina",
 alternativas:["Carina","Hilo pulmonar","Ápice do pulmão","Prega vocal"], pagina:17
},
{
 sistema:"respiratorio", nivel:"médio",
 pergunta:"Qual alternativa apresenta os dois brônquios principais?",
 correta:"Brônquio principal direito e brônquio principal esquerdo",
 alternativas:[
    "Brônquio principal direito e brônquio principal esquerdo",
    "Brônquio lobar médio direito e bronquíolos",
    "Brônquios segmentares e carina",
    "Bronquíolos e traqueia"
 ], pagina:18
},
{
 sistema:"respiratorio", nivel:"difícil",
 pergunta:"Qual alternativa contém apenas estruturas que o material apresenta como pertencentes ao pulmão direito?",
 correta:"Lobo superior direito, fissura horizontal, lobo médio, fissura oblíqua direita e lobo inferior direito",
 alternativas:[
    "Lobo superior direito, fissura horizontal, lobo médio, fissura oblíqua direita e lobo inferior direito",
    "Lobo superior esquerdo, lobo inferior esquerdo e fissura oblíqua esquerda",
    "Base, ápice e face medial",
    "Hilo pulmonar, carina e brônquio principal esquerdo"
 ], pagina:23
},
{
 sistema:"respiratorio", nivel:"difícil",
 pergunta:"Qual alternativa contém apenas estruturas apresentadas para o pulmão esquerdo?",
 correta:"Lobo superior esquerdo, lobo inferior esquerdo e fissura oblíqua esquerda",
 alternativas:[
    "Lobo superior esquerdo, lobo inferior esquerdo e fissura oblíqua esquerda",
    "Lobo superior direito, lobo médio e fissura horizontal",
    "Lobo inferior direito, fissura horizontal e lobo médio",
    "Base, ápice e fissura horizontal"
 ], pagina:22
},
{
 sistema:"respiratorio", nivel:"médio",
 pergunta:"Qual estrutura pertence às faces do pulmão apresentadas no material?",
 correta:"Face diafragmática",
 alternativas:["Face diafragmática","Fissura horizontal","Carina","Base do nariz"], pagina:25
},
{
 sistema:"respiratorio", nivel:"difícil",
 pergunta:"Qual alternativa reúne somente estruturas classificadas no material como faces dos pulmões?",
 correta:"Face costal, face diafragmática e face medial",
 alternativas:[
    "Face costal, face diafragmática e face medial",
    "Base, ápice e hilo pulmonar",
    "Fissura oblíqua, fissura horizontal e carina",
    "Lobo superior, lobo médio e lobo inferior"
 ], pagina:25
},
{
 sistema:"respiratorio", nivel:"médio",
 pergunta:"Qual estrutura é apresentada especificamente como hilo do pulmão?",
 correta:"Hilo pulmonar",
 alternativas:["Hilo pulmonar","Carina","Face medial","Ápice do pulmão"], pagina:26
},
{
 sistema:"respiratorio", nivel:"difícil",
 pergunta:"Qual alternativa NÃO pertence ao conjunto de estruturas apresentado na traqueia?",
 correta:"Hilo pulmonar",
 alternativas:["Anéis cartilaginosos","Ligamentos anulares","Carina","Hilo pulmonar"], pagina:17
},
{
 sistema:"respiratorio", nivel:"médio",
 pergunta:"Qual grupo corresponde aos três meatos nasais apresentados?",
 correta:"Meato nasal superior, meato nasal médio e meato nasal inferior",
 alternativas:[
    "Meato nasal superior, meato nasal médio e meato nasal inferior",
    "Concha nasal superior, concha nasal média e concha nasal inferior",
    "Nasofaringe, orofaringe e laringofaringe",
    "Seio frontal, seio esfenoidal e seio maxilar"
 ], pagina:6
},
{
 sistema:"respiratorio", nivel:"difícil",
 pergunta:"Qual grupo corresponde às três conchas nasais mostradas no material?",
 correta:"Concha nasal superior, concha nasal média e concha nasal inferior",
 alternativas:[
    "Concha nasal superior, concha nasal média e concha nasal inferior",
    "Meato nasal superior, meato nasal médio e meato nasal inferior",
    "Lobo superior, lobo médio e lobo inferior",
    "Brônquio superior, médio e inferior"
 ], pagina:5
},
{
 sistema:"respiratorio", nivel:"médio",
 pergunta:"Qual alternativa apresenta estruturas localizadas no nariz externo segundo a organização do material?",
 correta:"Raiz do nariz, dorso do nariz e ápice do nariz",
 alternativas:[
    "Raiz do nariz, dorso do nariz e ápice do nariz",
    "Nasofaringe, orofaringe e laringofaringe",
    "Traqueia, carina e bronquíolos",
    "Face costal, face medial e face diafragmática"
 ], pagina:2
},
{
 sistema:"respiratorio", nivel:"fácil",
 pergunta:"Qual estrutura é apresentada como uma abertura da cavidade nasal?",
 correta:"Coanas",
 alternativas:["Coanas","Carina","Hilo pulmonar","Prega vocal"], pagina:4
},
{
 sistema:"respiratorio", nivel:"médio",
 pergunta:"Qual estrutura do material está associada à comunicação com a via lacrimal?",
 correta:"Ducto nasolacrimal",
 alternativas:["Ducto nasolacrimal","Nervo olfatório","Seio esfenoidal","Tórus tubal"], pagina:7
},
{
 sistema:"respiratorio", nivel:"difícil",
 pergunta:"Qual alternativa apresenta somente estruturas da laringe?",
 correta:"Epiglote, prega vestibular, prega vocal e laringe",
 alternativas:[
    "Epiglote, prega vestibular, prega vocal e laringe",
    "Carina, traqueia, bronquíolos e hilo pulmonar",
    "Nasofaringe, orofaringe, esôfago e duodeno",
    "Seio frontal, seio maxilar, fígado e pâncreas"
 ], pagina:13
},

/* ---------- DIGESTÓRIO ---------- */

{
 sistema:"digestorio", nivel:"fácil",
 pergunta:"Qual estrutura pertence à cavidade bucal e é apresentada no material como uma região de entrada do sistema digestório?",
 correta:"Cavidade bucal",
 alternativas:["Cavidade bucal","Esôfago","Duodeno","Ceco"], pagina:28
},
{
 sistema:"digestorio", nivel:"médio",
 pergunta:"Qual alternativa apresenta estruturas mostradas na cavidade bucal?",
 correta:"Lábio superior, lábio inferior, vestíbulo bucal e arcada dentária",
 alternativas:[
    "Lábio superior, lábio inferior, vestíbulo bucal e arcada dentária",
    "Cárdia, piloro, duodeno e jejuno",
    "Ceco, íleo, colo ascendente e colo descendente",
    "Parótida, fígado, pâncreas e vesícula biliar"
 ], pagina:28
},
{
 sistema:"digestorio", nivel:"difícil",
 pergunta:"Qual alternativa apresenta corretamente as duas formas de musculatura da língua mostradas no material?",
 correta:"Musculatura intrínseca e musculatura extrínseca",
 alternativas:[
    "Musculatura intrínseca e musculatura extrínseca",
    "Musculatura superior e musculatura inferior",
    "Musculatura cardíaca e musculatura lisa",
    "Musculatura circular e musculatura longitudinal"
 ], pagina:29
},
{
 sistema:"digestorio", nivel:"médio",
 pergunta:"Qual conjunto pertence à região da cavidade bucal apresentada na página 29?",
 correta:"Palato duro, palato mole e úvula palatina",
 alternativas:[
    "Palato duro, palato mole e úvula palatina",
    "Óstio cárdico, óstio pilórico e pregas gástricas",
    "Duodeno, jejuno e íleo",
    "Ceco, canal retal e ânus"
 ], pagina:29
},
{
 sistema:"digestorio", nivel:"difícil",
 pergunta:"Qual alternativa apresenta as três regiões da faringe mostradas no sistema digestório?",
 correta:"Nasofaringe, orofaringe e laringofaringe",
 alternativas:[
    "Nasofaringe, orofaringe e laringofaringe",
    "Nasofaringe, esôfago e duodeno",
    "Orofaringe, estômago e jejuno",
    "Laringofaringe, ceco e cólon"
 ], pagina:30
},
{
 sistema:"digestorio", nivel:"médio",
 pergunta:"Qual estrutura é apresentada isoladamente como parte do tubo digestório na página 31?",
 correta:"Esôfago",
 alternativas:["Esôfago","Duodeno","Ceco","Canal retal"], pagina:31
},
{
 sistema:"digestorio", nivel:"difícil",
 pergunta:"Qual alternativa apresenta os dois óstios do estômago mostrados no material?",
 correta:"Óstio cárdico e óstio pilórico",
 alternativas:[
    "Óstio cárdico e óstio pilórico",
    "Óstio hepático e óstio pancreático",
    "Óstio duodenal e óstio ileal",
    "Óstio nasal e óstio faríngeo"
 ], pagina:32
},
{
 sistema:"digestorio", nivel:"médio",
 pergunta:"Qual estrutura do estômago é apresentada como uma região próxima ao óstio cárdico?",
 correta:"Região cárdia",
 alternativas:["Região cárdia","Região pilórica","Curvatura maior","Fundo do estômago"], pagina:33
},
{
 sistema:"digestorio", nivel:"médio",
 pergunta:"Qual estrutura do estômago é apresentada como uma região pilórica?",
 correta:"Região pilórica",
 alternativas:["Região pilórica","Região cárdia","Fundo do estômago","Curvatura menor"], pagina:33
},
{
 sistema:"digestorio", nivel:"difícil",
 pergunta:"Qual alternativa apresenta somente estruturas externas do estômago mostradas na página 34?",
 correta:"Fundo, corpo, curvatura menor e curvatura maior",
 alternativas:[
    "Fundo, corpo, curvatura menor e curvatura maior",
    "Cárdia, piloro, jejuno e íleo",
    "Duodeno, ampola, ceco e colo transverso",
    "Parótida, sublingual, submandibular e pâncreas"
 ], pagina:34
},
{
 sistema:"digestorio", nivel:"médio",
 pergunta:"Qual alternativa apresenta estruturas pertencentes ao intestino delgado?",
 correta:"Duodeno, jejuno e íleo",
 alternativas:[
    "Duodeno, jejuno e íleo",
    "Ceco, colo ascendente e colo transverso",
    "Fígado, pâncreas e vesícula biliar",
    "Ânus, canal retal e tênias"
 ], pagina:35
},
{
 sistema:"digestorio", nivel:"difícil",
 pergunta:"Qual estrutura está associada especificamente ao duodeno no material?",
 correta:"Ampola duodenal",
 alternativas:["Ampola duodenal","Haustros","Apêndice vermiforme","Curvatura maior do estômago"], pagina:35
},
{
 sistema:"digestorio", nivel:"difícil",
 pergunta:"Qual alternativa reúne estruturas apresentadas especificamente na região do duodeno?",
 correta:"Ampola duodenal, pregas circulares do duodeno e flexura duodenojejunal",
 alternativas:[
    "Ampola duodenal, pregas circulares do duodeno e flexura duodenojejunal",
    "Haustros, tênias e apêndice vermiforme",
    "Cárdia, fundo e curvatura maior",
    "Ceco, colo sigmoide e ânus"
 ], pagina:35
},
{
 sistema:"digestorio", nivel:"médio",
 pergunta:"Qual sequência corresponde às três partes do intestino delgado presentes no material?",
 correta:"Duodeno → jejuno → íleo",
 alternativas:[
    "Duodeno → jejuno → íleo",
    "Íleo → duodeno → jejuno",
    "Jejuno → ceco → íleo",
    "Duodeno → ceco → colo transverso"
 ], pagina:36
},
{
 sistema:"digestorio", nivel:"difícil",
 pergunta:"Qual estrutura NÃO pertence ao intestino grosso apresentado no material?",
 correta:"Íleo",
 alternativas:["Ceco","Colo transverso","Colo descendente","Íleo"], pagina:39
},
{
 sistema:"digestorio", nivel:"médio",
 pergunta:"Qual conjunto apresenta partes do colo do intestino grosso mostradas no material?",
 correta:"Colo ascendente, colo transverso, colo descendente e colo sigmoide",
 alternativas:[
    "Colo ascendente, colo transverso, colo descendente e colo sigmoide",
    "Duodeno, jejuno, íleo e ceco",
    "Cárdia, piloro, fundo e corpo",
    "Cabeça, corpo, cauda e ducto pancreático"
 ], pagina:38
},
{
 sistema:"digestorio", nivel:"difícil",
 pergunta:"Qual alternativa contém estruturas associadas ao intestino grosso na página 39?",
 correta:"Haustros, apêndice vermiforme, canal retal, ânus e tênias",
 alternativas:[
    "Haustros, apêndice vermiforme, canal retal, ânus e tênias",
    "Pregas gástricas, cárdia, piloro e fundo",
    "Ampola duodenal, jejuno, íleo e flexura duodenojejunal",
    "Parótida, ducto da parótida, sublingual e submandibular"
 ], pagina:39
},
{
 sistema:"digestorio", nivel:"médio",
 pergunta:"Qual estrutura é apresentada como uma projeção associada ao ceco?",
 correta:"Apêndice vermiforme",
 alternativas:["Apêndice vermiforme","Colo sigmoide","Íleo","Canal retal"], pagina:39
},
{
 sistema:"digestorio", nivel:"difícil",
 pergunta:"Qual alternativa apresenta somente estruturas do fígado mostradas no material?",
 correta:"Lobo direito, lobo esquerdo, lobo caudado e lobo quadrado",
 alternativas:[
    "Lobo direito, lobo esquerdo, lobo caudado e lobo quadrado",
    "Cabeça, corpo, cauda e ducto pancreático",
    "Cárdia, piloro, fundo e corpo",
    "Duodeno, jejuno, íleo e ceco"
 ], pagina:40
},
{
 sistema:"digestorio", nivel:"médio",
 pergunta:"Qual estrutura é apresentada junto às estruturas do fígado na página 41?",
 correta:"Veia porta hepática",
 alternativas:["Veia porta hepática","Ducto pancreático","Ducto da parótida","Flexura duodenojejunal"], pagina:41
},
{
 sistema:"digestorio", nivel:"difícil",
 pergunta:"Qual alternativa apresenta estruturas mostradas na página 41?",
 correta:"Veia porta hepática, ligamento falciforme, artéria hepática própria e vesícula biliar",
 alternativas:[
    "Veia porta hepática, ligamento falciforme, artéria hepática própria e vesícula biliar",
    "Ducto cístico, ducto colédoco, ducto pancreático e parótida",
    "Duodeno, jejuno, íleo e ceco",
    "Fundo, corpo, cárdia e piloro"
 ], pagina:41
},
{
 sistema:"digestorio", nivel:"difícil",
 pergunta:"Qual alternativa apresenta somente ductos biliares mostrados na página 42?",
 correta:"Ducto cístico, ducto hepático direito, ducto hepático esquerdo, ducto hepático comum, ducto colédoco e ducto hepatopancreático",
 alternativas:[
    "Ducto cístico, ducto hepático direito, ducto hepático esquerdo, ducto hepático comum, ducto colédoco e ducto hepatopancreático",
    "Ducto pancreático principal, ducto pancreático acessório, ducto da parótida e ducto nasolacrimal",
    "Veia porta hepática, artéria hepática própria, ligamento falciforme e vesícula biliar",
    "Duodeno, ampola duodenal, jejuno e íleo"
 ], pagina:42
},
{
 sistema:"digestorio", nivel:"médio",
 pergunta:"Qual estrutura está incluída no conjunto de ductos biliares apresentado no material?",
 correta:"Ducto cístico",
 alternativas:["Ducto cístico","Ducto pancreático principal","Ducto da parótida","Ducto nasolacrimal"], pagina:42
},
{
 sistema:"digestorio", nivel:"difícil",
 pergunta:"Qual alternativa apresenta as três partes do pâncreas mostradas no material?",
 correta:"Cabeça, corpo e cauda",
 alternativas:[
    "Cabeça, corpo e cauda",
    "Cárdia, corpo e piloro",
    "Direito, esquerdo e caudado",
    "Superior, médio e inferior"
 ], pagina:43
},
{
 sistema:"digestorio", nivel:"médio",
 pergunta:"Qual alternativa apresenta os ductos pancreáticos mostrados no material?",
 correta:"Ducto pancreático principal e ducto pancreático acessório",
 alternativas:[
    "Ducto pancreático principal e ducto pancreático acessório",
    "Ducto cístico e ducto colédoco",
    "Ducto hepático direito e ducto hepático esquerdo",
    "Ducto da parótida e ducto nasolacrimal"
 ], pagina:43
},
{
 sistema:"digestorio", nivel:"fácil",
 pergunta:"Qual glândula salivar é apresentada na página 44 junto ao seu ducto?",
 correta:"Parótida",
 alternativas:["Parótida","Sublingual","Submandibular","Vesícula biliar"], pagina:44
},
{
 sistema:"digestorio", nivel:"difícil",
 pergunta:"Qual alternativa apresenta as glândulas salivares mostradas no material?",
 correta:"Parótida, sublingual e submandibular",
 alternativas:[
    "Parótida, sublingual e submandibular",
    "Parótida, vesícula biliar e pâncreas",
    "Sublingual, fígado e pâncreas",
    "Submandibular, fígado e estômago"
 ], pagina:45
},
{
 sistema:"digestorio", nivel:"médio",
 pergunta:"Qual estrutura é apresentada como ducto associado à parótida?",
 correta:"Ducto da parótida",
 alternativas:["Ducto da parótida","Ducto cístico","Ducto colédoco","Ducto pancreático"], pagina:44
}

];

/* =========================================================
   QUESTÕES GERADAS A PARTIR DAS ESTRUTURAS DO PDF
========================================================= */

const todosOsDados = [
    ...respiratorio.map(x => ({
        sistema:"respiratorio",
        nome:x[0],
        pagina:x[1],
        grupo:x[2]
    })),
    ...digestorio.map(x => ({
        sistema:"digestorio",
        nome:x[0],
        pagina:x[1],
        grupo:x[2]
    }))
];

/* =========================================================
   UTILITÁRIOS
========================================================= */

function embaralhar(array) {
    const copia = [...array];

    for (let i = copia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copia[i], copia[j]] = [copia[j], copia[i]];
    }

    return copia;
}

function pegarDiferentes(lista, quantidade, excluir = []) {
    const filtrada = lista.filter(x => !excluir.includes(x));
    return embaralhar(filtrada).slice(0, quantidade);
}

function imagemDaPagina(pagina) {
    return `pagina-${String(pagina).padStart(2, "0")}.jpg`;
}

function sistemaNome(sistema) {
    return sistema === "respiratorio"
        ? "Sistema Respiratório"
        : "Sistema Digestório";
}

function nivelPeso(nivel) {
    if (nivel === "fácil") return 1;
    if (nivel === "médio") return 2;
    return 3;
}

/* =========================================================
   GERAÇÃO DE QUESTÕES COERENTES
========================================================= */

function gerarQuestoesEstruturais() {

    const resultado = [];

    const gruposResp = [...new Set(
        respiratorio.map(x => x[2])
    )];

    const gruposDig = [...new Set(
        digestorio.map(x => x[2])
    )];

    function gerarParaSistema(lista, sistema, grupos) {

        lista.forEach(item => {

            const nome = item[0];
            const pagina = item[1];
            const grupo = item[2];

            const mesmoGrupo = lista
                .filter(x => x[2] === grupo && x[0] !== nome)
                .map(x => x[0]);

            const outrosGrupos = grupos
                .filter(g => g !== grupo);

            /* QUESTÃO 1:
               classificação/conjunto */

            if (mesmoGrupo.length >= 3) {

                const alternativas = embaralhar([
                    grupo,
                    ...pegarDiferentes(outrosGrupos, 3)
                ]);

                resultado.push({
                    sistema,
                    nivel:"médio",
                    pergunta:`A estrutura "${nome}" está relacionada a qual conjunto anatômico apresentado no material?`,
                    correta:grupo,
                    alternativas,
                    pagina
                });
            }

            /* QUESTÃO 2:
               reconhecimento por conjunto */

            if (mesmoGrupo.length >= 3) {

                const correta = embaralhar(mesmoGrupo)[0];

                const outros = lista
                    .filter(x =>
                        x[0] !== nome &&
                        x[2] !== grupo
                    )
                    .map(x => x[0]);

                const alternativas = embaralhar([
                    correta,
                    ...pegarDiferentes(outros, 3, [correta])
                ]);

                resultado.push({
                    sistema,
                    nivel:"difícil",
                    pergunta:`Qual das alternativas apresenta outra estrutura pertencente ao mesmo conjunto anatômico que "${nome}" no material?`,
                    correta,
                    alternativas,
                    pagina
                });
            }

            /* QUESTÃO 3:
               exclusão */

            if (mesmoGrupo.length >= 2) {

                const correta = embaralhar(
                    lista
                        .filter(x => x[2] !== grupo)
                        .map(x => x[0])
                )[0];

                const alternativas = embaralhar([
                    correta,
                    ...pegarDiferentes(
                        mesmoGrupo,
                        3,
                        [correta]
                    )
                ]);

                resultado.push({
                    sistema,
                    nivel:"difícil",
                    pergunta:`Qual estrutura NÃO pertence ao mesmo conjunto anatômico que "${nome}"?`,
                    correta,
                    alternativas,
                    pagina
                });
            }
        });
    }

    gerarParaSistema(respiratorio, "respiratorio", gruposResp);
    gerarParaSistema(digestorio, "digestorio", gruposDig);

    return resultado;
}

/* =========================================================
   BANCO FINAL
========================================================= */

let bancoQuestoes = [
    ...questoesExtras,
    ...gerarQuestoesEstruturais()
];

/* =========================================================
   CORRIGE POSSÍVEIS DUPLICADAS
========================================================= */

function chaveQuestao(q) {
    return `${q.sistema}|${q.pergunta}|${q.correta}`;
}

function removerDuplicadas(lista) {

    const vistas = new Set();

    return lista.filter(q => {
        const chave = chaveQuestao(q);

        if (vistas.has(chave)) {
            return false;
        }

        vistas.add(chave);
        return true;
    });
}

bancoQuestoes = removerDuplicadas(bancoQuestoes);

/* =========================================================
   PREPARAR QUESTÕES DA PARTIDA
========================================================= */

function selecionarQuestoes(sistema, modo) {

    let disponiveis;

    if (modo === "simulado") {

        /* Simulado mistura os dois sistemas */

        disponiveis = bancoQuestoes;

    } else {

        disponiveis = bancoQuestoes.filter(
            q => q.sistema === sistema
        );
    }

    let quantidade = quantidadePorModo[modo] || 15;

    if (quantidade > disponiveis.length) {
        quantidade = disponiveis.length;
    }

    /* 
       Distribuição de dificuldade.
       Evita que o jogo fique cheio de perguntas fáceis.
    */

    let faceis = embaralhar(
        disponiveis.filter(q => q.nivel === "fácil")
    );

    let medias = embaralhar(
        disponiveis.filter(q => q.nivel === "médio")
    );

    let dificeis = embaralhar(
        disponiveis.filter(q => q.nivel === "difícil")
    );

    let selecionadas = [];

    if (modo === "estudar") {

        const qtdFacil = Math.round(quantidade * 0.40);
        const qtdMedio = Math.round(quantidade * 0.40);
        const qtdDificil = quantidade - qtdFacil - qtdMedio;

        selecionadas.push(...faceis.slice(0, qtdFacil));
        selecionadas.push(...medias.slice(0, qtdMedio));
        selecionadas.push(...dificeis.slice(0, qtdDificil));

    } else if (modo === "treinar") {

        const qtdFacil = Math.round(quantidade * 0.25);
        const qtdMedio = Math.round(quantidade * 0.45);
        const qtdDificil = quantidade - qtdFacil - qtdMedio;

        selecionadas.push(...faceis.slice(0, qtdFacil));
        selecionadas.push(...medias.slice(0, qtdMedio));
        selecionadas.push(...dificeis.slice(0, qtdDificil));

    } else {

        const qtdFacil = Math.round(quantidade * 0.15);
        const qtdMedio = Math.round(quantidade * 0.45);
        const qtdDificil = quantidade - qtdFacil - qtdMedio;

        selecionadas.push(...faceis.slice(0, qtdFacil));
        selecionadas.push(...medias.slice(0, qtdMedio));
        selecionadas.push(...dificeis.slice(0, qtdDificil));
    }

    /* Caso alguma categoria não tenha quantidade suficiente */

    if (selecionadas.length < quantidade) {

        const usadas = new Set(
            selecionadas.map(q => chaveQuestao(q))
        );

        const restantes = embaralhar(
            disponiveis.filter(
                q => !usadas.has(chaveQuestao(q))
            )
        );

        selecionadas.push(
            ...restantes.slice(
                0,
                quantidade - selecionadas.length
            )
        );
    }

    return embaralhar(selecionadas).slice(0, quantidade);
}

/* =========================================================
   SELEÇÃO DO SISTEMA
========================================================= */

function selecionarSistema(sistema) {

    sistemaAtual = sistema;

    const titulo = document.getElementById("tituloSistema");

    if (titulo) {
        titulo.textContent = sistemaNome(sistema);
    }

    const selecao = document.getElementById("selecaoSistemas");
    const configuracao = document.getElementById("configuracao");

    if (selecao) {
        selecao.classList.remove("ativa");
    }

    if (configuracao) {
        configuracao.classList.add("ativa");
    }

    /* Compatibilidade com versões antigas do HTML */

    const antigo = document.getElementById("sistemaSelecionado");

    if (antigo) {
        antigo.textContent = sistemaNome(sistema);
    }
}

/* =========================================================
   INICIAR JOGO
========================================================= */

function iniciarJogo(modo) {

    if (!sistemaAtual) {
        sistemaAtual = "respiratorio";
    }

    modoAtual = modo;
    indiceAtual = 0;
    pontuacao = 0;
    respondida = false;
    historicoErros = [];

    perguntasPartida = selecionarQuestoes(
        sistemaAtual,
        modoAtual
    );

    if (!perguntasPartida.length) {
        alert("Não foi possível carregar as questões.");
        return;
    }

    mostrarTela("jogo");

    atualizarCabecalho();

    carregarPergunta();
}

/* =========================================================
   TROCA DE TELA
========================================================= */

function mostrarTela(id) {

    document.querySelectorAll(".tela").forEach(tela => {
        tela.classList.remove("ativa");
    });

    const alvo = document.getElementById(id);

    if (alvo) {
        alvo.classList.add("ativa");
    }
}

/* =========================================================
   CABEÇALHO
========================================================= */

function atualizarCabecalho() {

    const contador = document.getElementById("contador");
    const pontuacaoEl = document.getElementById("pontuacao");

    if (contador) {
        contador.textContent =
            `${indiceAtual + 1}/${perguntasPartida.length}`;
    }

    if (pontuacaoEl) {
        pontuacaoEl.textContent =
            `Pontuação: ${pontuacao}`;
    }
}

/* =========================================================
   CARREGAR QUESTÃO
========================================================= */

function carregarPergunta() {

    if (indiceAtual >= perguntasPartida.length) {
        mostrarResultado();
        return;
    }

    respondida = false;

    const q = perguntasPartida[indiceAtual];

    const perguntaEl = document.getElementById("pergunta");
    const imagem = document.getElementById("imagemAnatomica");
    const semImagem = document.getElementById("semImagem");
    const alternativasEl = document.getElementById("alternativas");
    const feedback = document.getElementById("feedback");
    const botaoProxima = document.getElementById("proxima");

    if (perguntaEl) {
        perguntaEl.textContent = q.pergunta;
    }

    if (imagem) {

        imagem.src = imagemDaPagina(q.pagina);

        imagem.alt =
            `Imagem anatômica do material - página ${q.pagina}`;

        imagem.style.display = "block";

        imagem.onerror = function() {

            imagem.style.display = "none";

            if (semImagem) {
                semImagem.style.display = "block";
                semImagem.textContent =
                    `Imagem da página ${q.pagina} não encontrada.`;
            }
        };

        imagem.onload = function() {

            imagem.style.display = "block";

            if (semImagem) {
                semImagem.style.display = "none";
            }
        };
    }

    if (feedback) {
        feedback.textContent = "";
        feedback.className = "feedback";
    }

    if (botaoProxima) {
        botaoProxima.style.display = "none";
    }

    criarAlternativas(q);

    atualizarProgresso();
    atualizarCabecalho();
}

/* =========================================================
   ALTERNATIVAS
========================================================= */

function criarAlternativas(q) {

    const container =
        document.getElementById("alternativas");

    if (!container) return;

    container.innerHTML = "";

    const alternativas = embaralhar(q.alternativas);

    alternativas.forEach((texto, index) => {

        const botao = document.createElement("button");

        botao.className = "alternativa";

        botao.type = "button";

        botao.textContent =
            `${String.fromCharCode(65 + index)}) ${texto}`;

        botao.addEventListener(
            "click",
            () => verificarResposta(texto, botao)
        );

        container.appendChild(botao);
    });
}

/* =========================================================
   VERIFICAR RESPOSTA
========================================================= */

function verificarResposta(resposta, botaoClicado) {

    if (respondida) return;

    respondida = true;

    const q = perguntasPartida[indiceAtual];

    const botoes =
        document.querySelectorAll(".alternativa");

    botoes.forEach(botao => {
        botao.disabled = true;

        const texto = botao.textContent
            .replace(/^[A-D]\)\s*/, "")
            .trim();

        if (texto === q.correta) {
            botao.classList.add("correta");
        }
    });

    const feedback =
        document.getElementById("feedback");

    const botaoProxima =
        document.getElementById("proxima");

    if (resposta === q.correta) {

        pontuacao++;

        botaoClicado.classList.add("correta");

        if (feedback) {
            feedback.textContent =
                `✅ Correto! Nível: ${q.nivel}.`;
            feedback.className =
                "feedback correta";
        }

    } else {

        botaoClicado.classList.add("errada");

        historicoErros.push(q);

        if (feedback) {
            feedback.innerHTML =
                `❌ Você errou.<br><strong>Resposta correta:</strong> ${q.correta}<br><small>Página ${q.pagina} do material.</small>`;

            feedback.className =
                "feedback errada";
        }
    }

    atualizarCabecalho();

    if (botaoProxima) {
        botaoProxima.style.display = "block";
    }
}

/* =========================================================
   PRÓXIMA QUESTÃO
========================================================= */

function proximaQuestao() {

    if (!respondida) return;

    indiceAtual++;

    carregarPergunta();
}

/* Compatibilidade */
const proximaPergunta = proximaQuestao;

/* =========================================================
   BARRA DE PROGRESSO
========================================================= */

function atualizarProgresso() {

    const progresso =
        document.getElementById("progresso");

    if (!progresso) return;

    const percentual =
        (indiceAtual / perguntasPartida.length) * 100;

    progresso.style.width =
        `${percentual}%`;
}

/* =========================================================
   RESULTADO
========================================================= */

function mostrarResultado() {

    mostrarTela("resultado");

    const total =
        perguntasPartida.length;

    const porcentagem =
        Math.round((pontuacao / total) * 100);

    const porcentagemEl =
        document.getElementById("porcentagem");

    const mensagemEl =
        document.getElementById("mensagemResultado");

    if (porcentagemEl) {
        porcentagemEl.textContent =
            `${porcentagem}%`;
    }

    let mensagem = "";

    if (porcentagem >= 90) {
        mensagem =
            "🔥 Excelente! Você demonstrou um domínio muito bom do conteúdo.";
    } else if (porcentagem >= 75) {
        mensagem =
            "👏 Muito bom! Seu conhecimento está avançando bastante.";
    } else if (porcentagem >= 60) {
        mensagem =
            "📚 Bom resultado, mas ainda existem pontos para revisar.";
    } else if (porcentagem >= 40) {
        mensagem =
            "⚠️ Você precisa revisar alguns conteúdos antes da prova.";
    } else {
        mensagem =
            "💪 Não desanime. Use as questões erradas para direcionar seus estudos.";
    }

    const facil = perguntasPartida.filter(
        q => q.nivel === "fácil"
    );

    const medio = perguntasPartida.filter(
        q => q.nivel === "médio"
    );

    const dificil = perguntasPartida.filter(
        q => q.nivel === "difícil"
    );

    const erros = historicoErros.length;

    mensagem += `
        <br><br>
        <strong>${pontuacao}/${total}</strong> questões corretas.
        <br>
        Questões erradas: <strong>${erros}</strong>.
        <br><br>
        🟢 Fáceis: ${facil.length}
        <br>
        🟡 Médias: ${medio.length}
        <br>
        🔴 Difíceis: ${dificil.length}
    `;

    if (modoAtual === "simulado") {

        const respTotal =
            perguntasPartida.filter(
                q => q.sistema === "respiratorio"
            ).length;

        const digTotal =
            perguntasPartida.filter(
                q => q.sistema === "digestorio"
            ).length;

        const respAcertos =
            perguntasPartida
                .slice(0, perguntasPartida.length)
                .filter(
                    q =>
                        q.sistema === "respiratorio" &&
                        !historicoErros.includes(q)
                ).length;

        const digAcertos =
            perguntasPartida
                .filter(
                    q =>
                        q.sistema === "digestorio" &&
                        !historicoErros.includes(q)
                ).length;

        mensagem += `
            <br><br>
            🫁 Respiratório: ${respAcertos}/${respTotal}
            <br>
            🥩 Digestório: ${digAcertos}/${digTotal}
        `;
    }

    if (mensagemEl) {
        mensagemEl.innerHTML = mensagem;
    }
}

/* =========================================================
   SAIR DO JOGO
========================================================= */

function sairJogo() {

    const confirmar =
        confirm("Deseja sair desta partida?");

    if (!confirmar) return;

    indiceAtual = 0;
    pontuacao = 0;
    perguntasPartida = [];
    historicoErros = [];

    voltarMenu();
}

/* =========================================================
   VOLTAR AO MENU
========================================================= */

function voltarMenu() {

    mostrarTela("selecaoSistemas");

    const configuracao =
        document.getElementById("configuracao");

    if (configuracao) {
        configuracao.classList.remove("ativa");
    }

    const selecao =
        document.getElementById("selecaoSistemas");

    if (selecao) {
        selecao.classList.add("ativa");
    }
}

/* =========================================================
   JOGAR NOVAMENTE
========================================================= */

function jogarNovamente() {

    if (!sistemaAtual) {
        sistemaAtual = "respiratorio";
    }

    iniciarJogo(modoAtual || "treinar");
}

/* =========================================================
   EXPOR FUNÇÕES PARA O HTML
========================================================= */

window.selecionarSistema = selecionarSistema;
window.iniciarJogo = iniciarJogo;
window.proximaQuestao = proximaQuestao;
window.proximaPergunta = proximaPergunta;
window.verificarResposta = verificarResposta;
window.sairJogo = sairJogo;
window.jogarNovamente = jogarNovamente;
window.voltarMenu = voltarMenu;

/* =========================================================
   INICIALIZAÇÃO
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* Garante que o menu inicial apareça */

    document.querySelectorAll(".tela").forEach(
        tela => tela.classList.remove("ativa")
    );

    const inicio =
        document.getElementById("selecaoSistemas");

    if (inicio) {
        inicio.classList.add("ativa");
    }

    console.log(
        `Anatomia em Jogo carregado com ${bancoQuestoes.length} questões.`
    );
});
