/* =========================================================
   ANATOMIA EM JOGO
   Sistema Respiratório e Sistema Digestório

   Desenvolvedor: Rayke Jovino de Souza

   IMPORTANTE:
   - As imagens vêm das páginas do PDF.
   - Não são adicionadas setas ou marcações.
   - As alternativas respondem à PERGUNTA.
   - A imagem funciona como apoio visual.
   ========================================================= */


/* =========================================================
   VARIÁVEIS DO JOGO
   ========================================================= */

let sistemaAtual = null;
let modoAtual = "estudar";

let questoes = [];
let questaoAtual = 0;
let pontuacao = 0;
let respostaSelecionada = false;


/* =========================================================
   BANCO DO SISTEMA RESPIRATÓRIO
   As estruturas correspondem ao PDF.
   ========================================================= */

const respiratorio = [

    {
        nome: "Raiz do nariz",
        pagina: 2,
        pergunta: "Qual região do nariz externo corresponde à sua porção superior, onde ele se relaciona com a face?",
        correta: "Raiz do nariz",
        alternativas: [
            "Raiz do nariz",
            "Ápice do nariz",
            "Narinas",
            "Asas do nariz"
        ]
    },

    {
        nome: "Dorso do nariz",
        pagina: 2,
        pergunta: "Qual parte do nariz externo corresponde à região alongada situada entre a raiz e o ápice?",
        correta: "Dorso do nariz",
        alternativas: [
            "Dorso do nariz",
            "Base do nariz",
            "Narinas",
            "Raiz do nariz"
        ]
    },

    {
        nome: "Ápice do nariz",
        pagina: 2,
        pergunta: "Qual estrutura corresponde à extremidade anterior do nariz externo?",
        correta: "Ápice do nariz",
        alternativas: [
            "Ápice do nariz",
            "Raiz do nariz",
            "Dorso do nariz",
            "Cavidade nasal"
        ]
    },

    {
        nome: "Nariz externo",
        pagina: 2,
        pergunta: "Qual conjunto corresponde à porção externa e visível do nariz?",
        correta: "Nariz externo",
        alternativas: [
            "Nariz externo",
            "Cavidade nasal",
            "Faringe",
            "Seios paranasais"
        ]
    },

    {
        nome: "Asas do nariz",
        pagina: 3,
        pergunta: "Quais estruturas formam as porções laterais móveis da região das narinas?",
        correta: "Asas do nariz",
        alternativas: [
            "Asas do nariz",
            "Coanas",
            "Conchas nasais",
            "Seios etmoidais"
        ]
    },

    {
        nome: "Base do nariz",
        pagina: 3,
        pergunta: "Qual estrutura corresponde à porção inferior do nariz externo, onde se encontram as narinas?",
        correta: "Base do nariz",
        alternativas: [
            "Base do nariz",
            "Raiz do nariz",
            "Dorso do nariz",
            "Ápice do nariz"
        ]
    },

    {
        nome: "Narinas",
        pagina: 3,
        pergunta: "Por quais aberturas o ar entra e sai diretamente do nariz?",
        correta: "Narinas",
        alternativas: [
            "Narinas",
            "Coanas",
            "Óstios faríngeos",
            "Meatos nasais"
        ]
    },

    {
        nome: "Cavidade nasal",
        pagina: 4,
        pergunta: "Qual espaço interno do nariz participa da passagem e do condicionamento do ar inspirado?",
        correta: "Cavidade nasal",
        alternativas: [
            "Cavidade nasal",
            "Cavidade bucal",
            "Esôfago",
            "Laringofaringe"
        ]
    },

    {
        nome: "Abertura piriforme",
        pagina: 4,
        pergunta: "Qual abertura óssea corresponde à entrada anterior da cavidade nasal?",
        correta: "Abertura piriforme",
        alternativas: [
            "Abertura piriforme",
            "Coanas",
            "Narina",
            "Óstio faríngeo"
        ]
    },

    {
        nome: "Coanas",
        pagina: 4,
        pergunta: "Quais aberturas estabelecem a comunicação posterior entre a cavidade nasal e a nasofaringe?",
        correta: "Coanas",
        alternativas: [
            "Coanas",
            "Narinas",
            "Meatos nasais",
            "Aberturas piriformes"
        ]
    },

    {
        nome: "Concha nasal superior",
        pagina: 5,
        pergunta: "Qual estrutura é uma das conchas localizadas na parede lateral da cavidade nasal e está situada superiormente?",
        correta: "Concha nasal superior",
        alternativas: [
            "Concha nasal superior",
            "Concha nasal inferior",
            "Meato nasal superior",
            "Palato mole"
        ]
    },

    {
        nome: "Concha nasal média",
        pagina: 5,
        pergunta: "Qual concha nasal ocupa uma posição intermediária entre as conchas superior e inferior?",
        correta: "Concha nasal média",
        alternativas: [
            "Concha nasal média",
            "Concha nasal superior",
            "Concha nasal inferior",
            "Úvula palatina"
        ]
    },

    {
        nome: "Concha nasal inferior",
        pagina: 5,
        pergunta: "Qual concha nasal está localizada mais inferiormente na parede lateral da cavidade nasal?",
        correta: "Concha nasal inferior",
        alternativas: [
            "Concha nasal inferior",
            "Concha nasal média",
            "Concha nasal superior",
            "Seio frontal"
        ]
    },

    {
        nome: "Meato nasal superior",
        pagina: 6,
        pergunta: "Qual meato está localizado inferiormente à concha nasal superior?",
        correta: "Meato nasal superior",
        alternativas: [
            "Meato nasal superior",
            "Meato nasal médio",
            "Meato nasal inferior",
            "Coana"
        ]
    },

    {
        nome: "Meato nasal médio",
        pagina: 6,
        pergunta: "Qual meato nasal está situado abaixo da concha nasal média?",
        correta: "Meato nasal médio",
        alternativas: [
            "Meato nasal médio",
            "Meato nasal superior",
            "Meato nasal inferior",
            "Vestíbulo nasal"
        ]
    },

    {
        nome: "Meato nasal inferior",
        pagina: 6,
        pergunta: "Qual meato nasal está situado abaixo da concha nasal inferior?",
        correta: "Meato nasal inferior",
        alternativas: [
            "Meato nasal inferior",
            "Meato nasal superior",
            "Meato nasal médio",
            "Coana"
        ]
    },

    {
        nome: "Epitélio olfatório",
        pagina: 7,
        pergunta: "Qual estrutura está relacionada à percepção dos estímulos responsáveis pelo olfato?",
        correta: "Epitélio olfatório",
        alternativas: [
            "Epitélio olfatório",
            "Ducto nasolacrimal",
            "Concha nasal inferior",
            "Parede posterior da traqueia"
        ]
    },

    {
        nome: "Nervo olfatório",
        pagina: 7,
        pergunta: "Qual estrutura está relacionada à condução das informações sensoriais do olfato?",
        correta: "Nervo olfatório",
        alternativas: [
            "Nervo olfatório",
            "Nervo óptico",
            "Ducto nasolacrimal",
            "Nervo vago"
        ]
    },

    {
        nome: "Ducto nasolacrimal",
        pagina: 7,
        pergunta: "Qual estrutura conduz a drenagem das lágrimas em direção à cavidade nasal?",
        correta: "Ducto nasolacrimal",
        alternativas: [
            "Ducto nasolacrimal",
            "Nervo olfatório",
            "Coana",
            "Meato nasal superior"
        ]
    },

    {
        nome: "Seio frontal",
        pagina: 9,
        pergunta: "Qual dos seios paranasais está localizado na região do osso frontal?",
        correta: "Seio frontal",
        alternativas: [
            "Seio frontal",
            "Seio esfenoidal",
            "Seio maxilar",
            "Seio etmoidal"
        ]
    },

    {
        nome: "Seio esfenoidal",
        pagina: 9,
        pergunta: "Qual seio paranasal está associado ao osso esfenoide?",
        correta: "Seio esfenoidal",
        alternativas: [
            "Seio esfenoidal",
            "Seio frontal",
            "Seio maxilar",
            "Seios etmoidais"
        ]
    },

    {
        nome: "Seios etmoidais",
        pagina: 9,
        pergunta: "Qual conjunto de seios paranasais está relacionado ao osso etmoide?",
        correta: "Seios etmoidais",
        alternativas: [
            "Seios etmoidais",
            "Seio frontal",
            "Seio esfenoidal",
            "Seios maxilares"
        ]
    },

    {
        nome: "Seios maxilares",
        pagina: 9,
        pergunta: "Quais são os maiores seios paranasais e estão associados aos ossos maxilares?",
        correta: "Seios maxilares",
        alternativas: [
            "Seios maxilares",
            "Seios etmoidais",
            "Seio frontal",
            "Seio esfenoidal"
        ]
    },

    {
        nome: "Tórus tubal",
        pagina: 10,
        pergunta: "Qual estrutura corresponde à elevação da mucosa localizada na região da abertura da tuba auditiva na nasofaringe?",
        correta: "Tórus tubal",
        alternativas: [
            "Tórus tubal",
            "Tonsila faríngea",
            "Úvula palatina",
            "Epiglote"
        ]
    },

    {
        nome: "Óstio faríngeo da tuba auditiva",
        pagina: 10,
        pergunta: "Qual estrutura corresponde à abertura da tuba auditiva na faringe?",
        correta: "Óstio faríngeo da tuba auditiva",
        alternativas: [
            "Óstio faríngeo da tuba auditiva",
            "Coana",
            "Narinas",
            "Óstio pilórico"
        ]
    },

    {
        nome: "Faringe",
        pagina: 10,
        pergunta: "Qual estrutura muscular serve como passagem comum para regiões dos sistemas respiratório e digestório?",
        correta: "Faringe",
        alternativas: [
            "Faringe",
            "Traqueia",
            "Esôfago",
            "Laringe"
        ]
    },

    {
        nome: "Nasofaringe",
        pagina: 11,
        pergunta: "Qual parte da faringe está localizada posteriormente à cavidade nasal?",
        correta: "Nasofaringe",
        alternativas: [
            "Nasofaringe",
            "Orofaringe",
            "Laringofaringe",
            "Esôfago"
        ]
    },

    {
        nome: "Orofaringe",
        pagina: 11,
        pergunta: "Qual região da faringe está localizada posteriormente à cavidade oral?",
        correta: "Orofaringe",
        alternativas: [
            "Orofaringe",
            "Nasofaringe",
            "Laringofaringe",
            "Traqueia"
        ]
    },

    {
        nome: "Laringofaringe",
        pagina: 11,
        pergunta: "Qual parte inferior da faringe se relaciona posteriormente com a entrada do esôfago e anteriormente com a laringe?",
        correta: "Laringofaringe",
        alternativas: [
            "Laringofaringe",
            "Nasofaringe",
            "Orofaringe",
            "Cavidade nasal"
        ]
    },

    {
        nome: "Tonsilas faríngeas",
        pagina: 12,
        pergunta: "Qual estrutura do tecido linfático está localizada na região da nasofaringe?",
        correta: "Tonsilas faríngeas",
        alternativas: [
            "Tonsilas faríngeas",
            "Tonsilas palatinas",
            "Conchas nasais",
            "Pregas vocais"
        ]
    },

    {
        nome: "Epiglote",
        pagina: 13,
        pergunta: "Qual estrutura participa do fechamento da entrada da laringe durante a deglutição?",
        correta: "Epiglote",
        alternativas: [
            "Epiglote",
            "Prega vocal",
            "Carina",
            "Úvula palatina"
        ]
    },

    {
        nome: "Prega vestibular",
        pagina: 13,
        pergunta: "Qual estrutura da laringe está localizada superiormente às pregas vocais?",
        correta: "Prega vestibular",
        alternativas: [
            "Prega vestibular",
            "Prega vocal",
            "Epiglote",
            "Carina"
        ]
    },

    {
        nome: "Prega vocal",
        pagina: 13,
        pergunta: "Qual estrutura da laringe participa diretamente da produção da voz?",
        correta: "Prega vocal",
        alternativas: [
            "Prega vocal",
            "Prega vestibular",
            "Cartilagem cricóide",
            "Carina"
        ]
    },

    {
        nome: "Laringe",
        pagina: 13,
        pergunta: "Qual órgão do sistema respiratório contém as pregas vocais e estabelece comunicação com a traqueia?",
        correta: "Laringe",
        alternativas: [
            "Laringe",
            "Faringe",
            "Esôfago",
            "Brônquio"
        ]
    },

    {
        nome: "Cartilagem epiglótica",
        pagina: 15,
        pergunta: "Qual cartilagem forma a base estrutural da epiglote?",
        correta: "Cartilagem epiglótica",
        alternativas: [
            "Cartilagem epiglótica",
            "Cartilagem cricóide",
            "Cartilagem aritenóide",
            "Cartilagem da tireoide"
        ]
    },

    {
        nome: "Cartilagem da tireoide",
        pagina: 15,
        pergunta: "Qual é a maior cartilagem da laringe?",
        correta: "Cartilagem da tireoide",
        alternativas: [
            "Cartilagem da tireoide",
            "Cartilagem cricóide",
            "Cartilagem corniculada",
            "Cartilagem epiglótica"
        ]
    },

    {
        nome: "Cartilagem cricóide",
        pagina: 15,
        pergunta: "Qual cartilagem forma um anel completo na região inferior da laringe?",
        correta: "Cartilagem cricóide",
        alternativas: [
            "Cartilagem cricóide",
            "Cartilagem da tireoide",
            "Cartilagem epiglótica",
            "Cartilagem corniculada"
        ]
    },

    {
        nome: "Cartilagem corniculada",
        pagina: 16,
        pergunta: "Qual cartilagem da laringe está associada à região superior das cartilagens aritenóides?",
        correta: "Cartilagem corniculada",
        alternativas: [
            "Cartilagem corniculada",
            "Cartilagem cricóide",
            "Cartilagem da tireoide",
            "Cartilagem epiglótica"
        ]
    },

    {
        nome: "Cartilagem aritenóide",
        pagina: 16,
        pergunta: "Quais cartilagens da laringe estão relacionadas à fixação das pregas vocais?",
        correta: "Cartilagens aritenóides",
        alternativas: [
            "Cartilagens aritenóides",
            "Cartilagens cricóides",
            "Cartilagens epiglóticas",
            "Cartilagens corniculadas"
        ]
    },

    {
        nome: "Anéis cartilaginosos",
        pagina: 17,
        pergunta: "Qual elemento da traqueia ajuda a manter sua luz aberta?",
        correta: "Anéis cartilaginosos",
        alternativas: [
            "Anéis cartilaginosos",
            "Pregas vocais",
            "Tênias",
            "Haustros"
        ]
    },

    {
        nome: "Ligamentos anulares",
        pagina: 17,
        pergunta: "Quais estruturas unem os anéis cartilaginosos da traqueia?",
        correta: "Ligamentos anulares",
        alternativas: [
            "Ligamentos anulares",
            "Pregas circulares",
            "Ligamentos falciformes",
            "Tênias"
        ]
    },

    {
        nome: "Parede posterior da traqueia",
        pagina: 17,
        pergunta: "Qual região da traqueia não apresenta os anéis cartilaginosos completos?",
        correta: "Parede posterior da traqueia",
        alternativas: [
            "Parede posterior da traqueia",
            "Carina",
            "Parede anterior da traqueia",
            "Brônquio principal"
        ]
    },

    {
        nome: "Carina",
        pagina: 17,
        pergunta: "Qual estrutura marca a região de bifurcação da traqueia nos brônquios principais?",
        correta: "Carina",
        alternativas: [
            "Carina",
            "Epiglote",
            "Hilo pulmonar",
            "Fissura oblíqua"
        ]
    },

    {
        nome: "Traqueia",
        pagina: 17,
        pergunta: "Qual estrutura conduz o ar da laringe em direção aos brônquios principais?",
        correta: "Traqueia",
        alternativas: [
            "Traqueia",
            "Esôfago",
            "Faringe",
            "Laringe"
        ]
    },

    {
        nome: "Brônquio principal esquerdo",
        pagina: 18,
        pergunta: "Qual brônquio principal conduz o ar em direção ao pulmão esquerdo?",
        correta: "Brônquio principal esquerdo",
        alternativas: [
            "Brônquio principal esquerdo",
            "Brônquio principal direito",
            "Brônquio lobar superior direito",
            "Bronquíolo"
        ]
    },

    {
        nome: "Brônquio principal direito",
        pagina: 18,
        pergunta: "Qual brônquio principal conduz o ar em direção ao pulmão direito?",
        correta: "Brônquio principal direito",
        alternativas: [
            "Brônquio principal direito",
            "Brônquio principal esquerdo",
            "Brônquio lobar inferior esquerdo",
            "Bronquíolo"
        ]
    },

    {
        nome: "Brônquio lobar superior direito",
        pagina: 18,
        pergunta: "Qual brônquio conduz o ar para o lobo superior do pulmão direito?",
        correta: "Brônquio lobar superior direito",
        alternativas: [
            "Brônquio lobar superior direito",
            "Brônquio lobar médio direito",
            "Brônquio lobar inferior direito",
            "Brônquio lobar superior esquerdo"
        ]
    },

    {
        nome: "Brônquio lobar médio direito",
        pagina: 18,
        pergunta: "Qual brônquio conduz o ar para o lobo médio do pulmão direito?",
        correta: "Brônquio lobar médio direito",
        alternativas: [
            "Brônquio lobar médio direito",
            "Brônquio lobar superior direito",
            "Brônquio lobar inferior direito",
            "Brônquio principal esquerdo"
        ]
    },

    {
        nome: "Brônquio lobar inferior direito",
        pagina: 18,
        pergunta: "Qual brônquio conduz o ar para o lobo inferior do pulmão direito?",
        correta: "Brônquio lobar inferior direito",
        alternativas: [
            "Brônquio lobar inferior direito",
            "Brônquio lobar médio direito",
            "Brônquio lobar superior esquerdo",
            "Brônquio principal esquerdo"
        ]
    },

    {
        nome: "Brônquio lobar superior esquerdo",
        pagina: 20,
        pergunta: "Qual brônquio conduz o ar para o lobo superior do pulmão esquerdo?",
        correta: "Brônquio lobar superior esquerdo",
        alternativas: [
            "Brônquio lobar superior esquerdo",
            "Brônquio lobar inferior esquerdo",
            "Brônquio lobar superior direito",
            "Brônquio lobar médio direito"
        ]
    },

    {
        nome: "Brônquio lobar inferior esquerdo",
        pagina: 20,
        pergunta: "Qual brônquio conduz o ar para o lobo inferior do pulmão esquerdo?",
        correta: "Brônquio lobar inferior esquerdo",
        alternativas: [
            "Brônquio lobar inferior esquerdo",
            "Brônquio lobar superior esquerdo",
            "Brônquio lobar inferior direito",
            "Brônquio lobar médio direito"
        ]
    },

    {
        nome: "Brônquios segmentares",
        pagina: 21,
        pergunta: "Em que nível da árvore brônquica os brônquios passam a conduzir o ar para segmentos específicos dos pulmões?",
        correta: "Brônquios segmentares",
        alternativas: [
            "Brônquios segmentares",
            "Brônquios principais",
            "Traqueia",
            "Bronquíolos"
        ]
    },

    {
        nome: "Bronquíolos",
        pagina: 21,
        pergunta: "Quais pequenas vias aéreas resultam da ramificação progressiva dos brônquios?",
        correta: "Bronquíolos",
        alternativas: [
            "Bronquíolos",
            "Brônquios principais",
            "Coanas",
            "Alvéolos"
        ]
    },

    {
        nome: "Lobo superior esquerdo",
        pagina: 22,
        pergunta: "Qual lobo pertence à porção superior do pulmão esquerdo?",
        correta: "Lobo superior esquerdo",
        alternativas: [
            "Lobo superior esquerdo",
            "Lobo médio",
            "Lobo inferior direito",
            "Lobo inferior esquerdo"
        ]
    },

    {
        nome: "Lobo inferior esquerdo",
        pagina: 22,
        pergunta: "Qual lobo ocupa a porção inferior do pulmão esquerdo?",
        correta: "Lobo inferior esquerdo",
        alternativas: [
            "Lobo inferior esquerdo",
            "Lobo superior esquerdo",
            "Lobo médio",
            "Lobo superior direito"
        ]
    },

    {
        nome: "Fissura oblíqua esquerda",
        pagina: 22,
        pergunta: "Qual fissura separa os lobos superior e inferior do pulmão esquerdo?",
        correta: "Fissura oblíqua esquerda",
        alternativas: [
            "Fissura oblíqua esquerda",
            "Fissura horizontal",
            "Fissura oblíqua direita",
            "Fissura vertical"
        ]
    },

    {
        nome: "Lobo superior direito",
        pagina: 23,
        pergunta: "Qual é o lobo localizado superiormente no pulmão direito?",
        correta: "Lobo superior direito",
        alternativas: [
            "Lobo superior direito",
            "Lobo médio",
            "Lobo inferior direito",
            "Lobo superior esquerdo"
        ]
    },

    {
        nome: "Fissura horizontal",
        pagina: 23,
        pergunta: "Qual fissura do pulmão direito separa o lobo superior do lobo médio?",
        correta: "Fissura horizontal",
        alternativas: [
            "Fissura horizontal",
            "Fissura oblíqua esquerda",
            "Fissura oblíqua direita",
            "Fissura vertical"
        ]
    },

    {
        nome: "Lobo médio",
        pagina: 23,
        pergunta: "Qual lobo está presente exclusivamente no pulmão direito?",
        correta: "Lobo médio",
        alternativas: [
            "Lobo médio",
            "Lobo superior esquerdo",
            "Lobo inferior esquerdo",
            "Lobo superior direito"
        ]
    },

    {
        nome: "Fissura oblíqua direita",
        pagina: 23,
        pergunta: "Qual fissura do pulmão direito contribui para separar o lobo inferior dos lobos superiores?",
        correta: "Fissura oblíqua direita",
        alternativas: [
            "Fissura oblíqua direita",
            "Fissura horizontal",
            "Fissura oblíqua esquerda",
            "Fissura medial"
        ]
    },

    {
        nome: "Lobo inferior direito",
        pagina: 23,
        pergunta: "Qual lobo ocupa a região inferior do pulmão direito?",
        correta: "Lobo inferior direito",
        alternativas: [
            "Lobo inferior direito",
            "Lobo médio",
            "Lobo superior direito",
            "Lobo inferior esquerdo"
        ]
    },

    {
        nome: "Base do pulmão",
        pagina: 24,
        pergunta: "Qual região do pulmão está relacionada inferiormente ao diafragma?",
        correta: "Base do pulmão",
        alternativas: [
            "Base do pulmão",
            "Ápice do pulmão",
            "Hilo pulmonar",
            "Face medial"
        ]
    },

    {
        nome: "Ápice do pulmão",
        pagina: 24,
        pergunta: "Qual é a extremidade superior do pulmão?",
        correta: "Ápice do pulmão",
        alternativas: [
            "Ápice do pulmão",
            "Base do pulmão",
            "Hilo pulmonar",
            "Face diafragmática"
        ]
    },

    {
        nome: "Face costal",
        pagina: 25,
        pergunta: "Qual face do pulmão está relacionada principalmente com a parede torácica e as costelas?",
        correta: "Face costal",
        alternativas: [
            "Face costal",
            "Face medial",
            "Face diafragmática",
            "Face visceral"
        ]
    },

    {
        nome: "Face diafragmática",
        pagina: 25,
        pergunta: "Qual face do pulmão está diretamente relacionada com o diafragma?",
        correta: "Face diafragmática",
        alternativas: [
            "Face diafragmática",
            "Face costal",
            "Face medial",
            "Face superior"
        ]
    },

    {
        nome: "Face medial",
        pagina: 25,
        pergunta: "Qual face do pulmão está voltada para o mediastino?",
        correta: "Face medial",
        alternativas: [
            "Face medial",
            "Face costal",
            "Face diafragmática",
            "Face lateral"
        ]
    },

    {
        nome: "Hilo pulmonar",
        pagina: 26,
        pergunta: "Qual região do pulmão é a área de passagem dos brônquios, vasos e outras estruturas que entram ou saem do órgão?",
        correta: "Hilo pulmonar",
        alternativas: [
            "Hilo pulmonar",
            "Ápice do pulmão",
            "Base do pulmão",
            "Fissura oblíqua"
        ]
    }

];


/* =========================================================
   BANCO DO SISTEMA DIGESTÓRIO
   ========================================================= */

const digestorio = [

    {
        nome: "Lábio superior",
        pagina: 28,
        pergunta: "Qual estrutura corresponde ao limite superior da abertura da boca?",
        correta: "Lábio superior",
        alternativas: [
            "Lábio superior",
            "Lábio inferior",
            "Úvula palatina",
            "Palato duro"
        ]
    },

    {
        nome: "Lábio inferior",
        pagina: 28,
        pergunta: "Qual estrutura corresponde ao limite inferior da abertura da boca?",
        correta: "Lábio inferior",
        alternativas: [
            "Lábio inferior",
            "Lábio superior",
            "Palato mole",
            "Língua"
        ]
    },

    {
        nome: "Vestíbulo bucal",
        pagina: 28,
        pergunta: "Qual espaço está localizado entre os lábios ou bochechas e as arcadas dentárias?",
        correta: "Vestíbulo bucal",
        alternativas: [
            "Vestíbulo bucal",
            "Cavidade nasal",
            "Orofaringe",
            "Esôfago"
        ]
    },

    {
        nome: "Arcada dentária",
        pagina: 28,
        pergunta: "Qual estrutura é formada pelo conjunto organizado dos dentes em cada arco da boca?",
        correta: "Arcada dentária",
        alternativas: [
            "Arcada dentária",
            "Vestíbulo bucal",
            "Palato mole",
            "Úvula palatina"
        ]
    },

    {
        nome: "Cavidade bucal",
        pagina: 28,
        pergunta: "Qual região inicia o trajeto do alimento no sistema digestório?",
        correta: "Cavidade bucal",
        alternativas: [
            "Cavidade bucal",
            "Esôfago",
            "Estômago",
            "Duodeno"
        ]
    },

    {
        nome: "Língua — musculatura intrínseca",
        pagina: 29,
        pergunta: "Qual musculatura da língua está relacionada principalmente à alteração da forma da própria língua?",
        correta: "Musculatura intrínseca da língua",
        alternativas: [
            "Musculatura intrínseca da língua",
            "Musculatura extrínseca da língua",
            "Musculatura do esôfago",
            "Musculatura da faringe"
        ]
    },

    {
        nome: "Língua — musculatura extrínseca",
        pagina: 29,
        pergunta: "Qual musculatura da língua está relacionada aos movimentos da língua em relação às estruturas vizinhas?",
        correta: "Musculatura extrínseca da língua",
        alternativas: [
            "Musculatura extrínseca da língua",
            "Musculatura intrínseca da língua",
            "Musculatura gástrica",
            "Musculatura intestinal"
        ]
    },

    {
        nome: "Palato duro",
        pagina: 29,
        pergunta: "Qual estrutura forma a porção anterior e rígida do teto da cavidade bucal?",
        correta: "Palato duro",
        alternativas: [
            "Palato duro",
            "Palato mole",
            "Úvula palatina",
            "Língua"
        ]
    },

    {
        nome: "Palato mole",
        pagina: 29,
        pergunta: "Qual estrutura forma a porção posterior e móvel do teto da cavidade bucal?",
        correta: "Palato mole",
        alternativas: [
            "Palato mole",
            "Palato duro",
            "Arcada dentária",
            "Rima labial"
        ]
    },

    {
        nome: "Úvula palatina",
        pagina: 29,
        pergunta: "Qual estrutura fica pendente na região posterior do palato mole?",
        correta: "Úvula palatina",
        alternativas: [
            "Úvula palatina",
            "Epiglote",
            "Prega vestibular",
            "Língua"
        ]
    },

    {
        nome: "Rima labial",
        pagina: 29,
        pergunta: "Qual estrutura corresponde à abertura delimitada pelos lábios?",
        correta: "Rima labial",
        alternativas: [
            "Rima labial",
            "Vestíbulo bucal",
            "Cavidade nasal",
            "Coanas"
        ]
    },

    {
        nome: "Faringe",
        pagina: 30,
        pergunta: "Qual estrutura participa do trajeto do alimento após a cavidade bucal?",
        correta: "Faringe",
        alternativas: [
            "Faringe",
            "Traqueia",
            "Brônquio",
            "Laringe"
        ]
    },

    {
        nome: "Nasofaringe",
        pagina: 30,
        pergunta: "Qual parte da faringe está relacionada principalmente com a cavidade nasal?",
        correta: "Nasofaringe",
        alternativas: [
            "Nasofaringe",
            "Orofaringe",
            "Laringofaringe",
            "Esôfago"
        ]
    },

    {
        nome: "Orofaringe",
        pagina: 30,
        pergunta: "Qual região da faringe está localizada posteriormente à cavidade oral?",
        correta: "Orofaringe",
        alternativas: [
            "Orofaringe",
            "Nasofaringe",
            "Laringofaringe",
            "Esôfago"
        ]
    },

    {
        nome: "Laringofaringe",
        pagina: 30,
        pergunta: "Qual região da faringe ocupa sua porção inferior?",
        correta: "Laringofaringe",
        alternativas: [
            "Laringofaringe",
            "Nasofaringe",
            "Orofaringe",
            "Cavidade bucal"
        ]
    },

    {
        nome: "Esôfago",
        pagina: 31,
        pergunta: "Qual estrutura conduz o alimento da faringe até o estômago?",
        correta: "Esôfago",
        alternativas: [
            "Esôfago",
            "Traqueia",
            "Laringe",
            "Duodeno"
        ]
    },

    {
        nome: "Pregas gástricas",
        pagina: 32,
        pergunta: "Como são chamadas as pregas presentes no revestimento interno do estômago?",
        correta: "Pregas gástricas",
        alternativas: [
            "Pregas gástricas",
            "Pregas circulares do duodeno",
            "Haustros",
            "Tênias"
        ]
    },

    {
        nome: "Óstio cárdico",
        pagina: 32,
        pergunta: "Qual abertura do estômago recebe o alimento proveniente do esôfago?",
        correta: "Óstio cárdico",
        alternativas: [
            "Óstio cárdico",
            "Óstio pilórico",
            "Ampola duodenal",
            "Flexura duodenojejunal"
        ]
    },

    {
        nome: "Óstio pilórico",
        pagina: 32,
        pergunta: "Qual abertura do estômago estabelece comunicação com o duodeno?",
        correta: "Óstio pilórico",
        alternativas: [
            "Óstio pilórico",
            "Óstio cárdico",
            "Óstio faríngeo",
            "Óstio esofágico"
        ]
    },

    {
        nome: "Região cárdia",
        pagina: 33,
        pergunta: "Qual região do estômago está próxima à entrada do esôfago?",
        correta: "Região cárdia",
        alternativas: [
            "Região cárdia",
            "Região pilórica",
            "Fundo do estômago",
            "Cauda do pâncreas"
        ]
    },

    {
        nome: "Região pilórica",
        pagina: 33,
        pergunta: "Qual região do estômago está próxima à saída para o duodeno?",
        correta: "Região pilórica",
        alternativas: [
            "Região pilórica",
            "Região cárdia",
            "Fundo do estômago",
            "Curvatura maior"
        ]
    },

    {
        nome: "Fundo do estômago",
        pagina: 34,
        pergunta: "Qual região do estômago está localizada superiormente ao corpo gástrico?",
        correta: "Fundo do estômago",
        alternativas: [
            "Fundo do estômago",
            "Região pilórica",
            "Região cárdia",
            "Curvatura menor"
        ]
    },

    {
        nome: "Corpo do estômago",
        pagina: 34,
        pergunta: "Qual é a principal região central e mais extensa do estômago?",
        correta: "Corpo do estômago",
        alternativas: [
            "Corpo do estômago",
            "Fundo do estômago",
            "Região pilórica",
            "Óstio cárdico"
        ]
    },

    {
        nome: "Curvatura menor do estômago",
        pagina: 34,
        pergunta: "Qual curvatura do estômago está localizada em sua margem medial e é menor?",
        correta: "Curvatura menor do estômago",
        alternativas: [
            "Curvatura menor do estômago",
            "Curvatura maior do estômago",
            "Curvatura pilórica",
            "Curvatura duodenal"
        ]
    },

    {
        nome: "Curvatura maior do estômago",
        pagina: 34,
        pergunta: "Qual curvatura corresponde à margem lateral e mais extensa do estômago?",
        correta: "Curvatura maior do estômago",
        alternativas: [
            "Curvatura maior do estômago",
            "Curvatura menor do estômago",
            "Curvatura pilórica",
            "Curvatura esofágica"
        ]
    },

    {
        nome: "Intestino delgado",
        pagina: 35,
        pergunta: "Qual órgão é dividido em duodeno, jejuno e íleo?",
        correta: "Intestino delgado",
        alternativas: [
            "Intestino delgado",
            "Intestino grosso",
            "Estômago",
            "Esôfago"
        ]
    },

    {
        nome: "Duodeno",
        pagina: 35,
        pergunta: "Qual é a primeira porção do intestino delgado após o estômago?",
        correta: "Duodeno",
        alternativas: [
            "Duodeno",
            "Jejuno",
            "Íleo",
            "Ceco"
        ]
    },

    {
        nome: "Ampola duodenal",
        pagina: 35,
        pergunta: "Qual região corresponde à porção inicial dilatada do duodeno?",
        correta: "Ampola duodenal",
        alternativas: [
            "Ampola duodenal",
            "Flexura duodenojejunal",
            "Íleo",
            "Ceco"
        ]
    },

    {
        nome: "Pregas circulares do duodeno",
        pagina: 35,
        pergunta: "Qual estrutura forma pregas transversais da mucosa e submucosa no intestino delgado?",
        correta: "Pregas circulares do duodeno",
        alternativas: [
            "Pregas circulares do duodeno",
            "Pregas gástricas",
            "Haustros",
            "Tênias"
        ]
    },

    {
        nome: "Flexura duodenojejunal",
        pagina: 35,
        pergunta: "Qual estrutura marca a transição entre o duodeno e o jejuno?",
        correta: "Flexura duodenojejunal",
        alternativas: [
            "Flexura duodenojejunal",
            "Junção ileocecocólica",
            "Óstio pilórico",
            "Colo sigmoide"
        ]
    },

    {
        nome: "Jejuno",
        pagina: 36,
        pergunta: "Qual porção do intestino delgado está localizada entre o duodeno e o íleo?",
        correta: "Jejuno",
        alternativas: [
            "Jejuno",
            "Duodeno",
            "Íleo",
            "Ceco"
        ]
    },

    {
        nome: "Íleo",
        pagina: 36,
        pergunta: "Qual porção do intestino delgado é a mais distal e se conecta ao ceco?",
        correta: "Íleo",
        alternativas: [
            "Íleo",
            "Jejuno",
            "Duodeno",
            "Colo ascendente"
        ]
    },

    {
        nome: "Ceco",
        pagina: 37,
        pergunta: "Qual porção inicial do intestino grosso recebe o conteúdo proveniente do íleo?",
        correta: "Ceco",
        alternativas: [
            "Ceco",
            "Colo ascendente",
            "Colo sigmoide",
            "Íleo"
        ]
    },

    {
        nome: "Junção ileocecocólica",
        pagina: 37,
        pergunta: "Qual estrutura corresponde à região de transição entre o íleo, o ceco e o colo?",
        correta: "Junção ileocecocólica",
        alternativas: [
            "Junção ileocecocólica",
            "Flexura duodenojejunal",
            "Óstio pilórico",
            "Colo sigmoide"
        ]
    },

    {
        nome: "Colo ascendente",
        pagina: 38,
        pergunta: "Qual parte do intestino grosso sobe pelo lado direito do abdome?",
        correta: "Colo ascendente",
        alternativas: [
            "Colo ascendente",
            "Colo descendente",
            "Colo transverso",
            "Colo sigmoide"
        ]
    },

    {
        nome: "Colo transverso",
        pagina: 38,
        pergunta: "Qual segmento do intestino grosso atravessa transversalmente o abdome?",
        correta: "Colo transverso",
        alternativas: [
            "Colo transverso",
            "Colo ascendente",
            "Colo descendente",
            "Colo sigmoide"
        ]
    },

    {
        nome: "Colo descendente",
        pagina: 38,
        pergunta: "Qual parte do intestino grosso desce pelo lado esquerdo do abdome?",
        correta: "Colo descendente",
        alternativas: [
            "Colo descendente",
            "Colo ascendente",
            "Colo transverso",
            "Colo sigmoide"
        ]
    },

    {
        nome: "Colo sigmoide",
        pagina: 38,
        pergunta: "Qual segmento do intestino grosso apresenta formato semelhante à letra S e antecede o reto?",
        correta: "Colo sigmoide",
        alternativas: [
            "Colo sigmoide",
            "Colo transverso",
            "Colo ascendente",
            "Colo descendente"
        ]
    },

    {
        nome: "Haustros",
        pagina: 39,
        pergunta: "Como são chamadas as saculações características da parede do intestino grosso?",
        correta: "Haustros",
        alternativas: [
            "Haustros",
            "Pregas gástricas",
            "Pregas circulares",
            "Tênias"
        ]
    },

    {
        nome: "Intestino grosso",
        pagina: 39,
        pergunta: "Qual segmento do sistema digestório inclui o ceco, os colos, o canal retal e o ânus?",
        correta: "Intestino grosso",
        alternativas: [
            "Intestino grosso",
            "Intestino delgado",
            "Estômago",
            "Esôfago"
        ]
    },

    {
        nome: "Apêndice vermiforme",
        pagina: 39,
        pergunta: "Qual estrutura tubular e estreita está associada ao ceco?",
        correta: "Apêndice vermiforme",
        alternativas: [
            "Apêndice vermiforme",
            "Ducto cístico",
            "Ducto pancreático",
            "Canal retal"
        ]
    },

    {
        nome: "Canal retal",
        pagina: 39,
        pergunta: "Qual estrutura corresponde à porção terminal do intestino grosso antes do ânus?",
        correta: "Canal retal",
        alternativas: [
            "Canal retal",
            "Ceco",
            "Colo transverso",
            "Duodeno"
        ]
    },

    {
        nome: "Ânus",
        pagina: 39,
        pergunta: "Qual estrutura corresponde à abertura terminal do tubo digestório?",
        correta: "Ânus",
        alternativas: [
            "Ânus",
            "Canal retal",
            "Ceco",
            "Colo sigmoide"
        ]
    },

    {
        nome: "Tênias",
        pagina: 39,
        pergunta: "Quais estruturas são faixas longitudinais características da musculatura externa do intestino grosso?",
        correta: "Tênias",
        alternativas: [
            "Tênias",
            "Haustros",
            "Pregas gástricas",
            "Pregas circulares"
        ]
    },

    {
        nome: "Fígado",
        pagina: 40,
        pergunta: "Qual grande órgão acessório do sistema digestório produz bile?",
        correta: "Fígado",
        alternativas: [
            "Fígado",
            "Pâncreas",
            "Vesícula biliar",
            "Baço"
        ]
    },

    {
        nome: "Lobo direito do fígado",
        pagina: 40,
        pergunta: "Qual é o maior lobo anatômico do fígado?",
        correta: "Lobo direito do fígado",
        alternativas: [
            "Lobo direito do fígado",
            "Lobo esquerdo do fígado",
            "Lobo caudado",
            "Lobo quadrado"
        ]
    },

    {
        nome: "Lobo esquerdo do fígado",
        pagina: 40,
        pergunta: "Qual lobo ocupa a porção esquerda do fígado?",
        correta: "Lobo esquerdo do fígado",
        alternativas: [
            "Lobo esquerdo do fígado",
            "Lobo direito do fígado",
            "Lobo caudado",
            "Lobo quadrado"
        ]
    },

    {
        nome: "Lobo caudado",
        pagina: 40,
        pergunta: "Qual lobo do fígado está localizado posteriormente, próximo à região da veia cava inferior?",
        correta: "Lobo caudado",
        alternativas: [
            "Lobo caudado",
            "Lobo quadrado",
            "Lobo esquerdo",
            "Lobo direito"
        ]
    },

    {
        nome: "Lobo quadrado",
        pagina: 40,
        pergunta: "Qual lobo do fígado está localizado na região inferior, próximo à vesícula biliar?",
        correta: "Lobo quadrado",
        alternativas: [
            "Lobo quadrado",
            "Lobo caudado",
            "Lobo esquerdo",
            "Lobo direito"
        ]
    },

    {
        nome: "Veia porta hepática",
        pagina: 41,
        pergunta: "Qual vaso conduz ao fígado sangue proveniente principalmente do sistema digestório?",
        correta: "Veia porta hepática",
        alternativas: [
            "Veia porta hepática",
            "Artéria hepática própria",
            "Ducto cístico",
            "Ducto colédoco"
        ]
    },

    {
        nome: "Ligamento falciforme",
        pagina: 41,
        pergunta: "Qual estrutura está relacionada à fixação do fígado e à divisão anatômica entre os lobos direito e esquerdo em sua face anterior?",
        correta: "Ligamento falciforme",
        alternativas: [
            "Ligamento falciforme",
            "Ligamento anular",
            "Ducto hepático comum",
            "Veia porta hepática"
        ]
    },

    {
        nome: "Artéria hepática própria",
        pagina: 41,
        pergunta: "Qual vaso fornece sangue arterial ao fígado?",
        correta: "Artéria hepática própria",
        alternativas: [
            "Artéria hepática própria",
            "Veia porta hepática",
            "Ducto hepático comum",
            "Ducto cístico"
        ]
    },

    {
        nome: "Vesícula biliar",
        pagina: 41,
        pergunta: "Qual órgão armazena e concentra a bile produzida pelo fígado?",
        correta: "Vesícula biliar",
        alternativas: [
            "Vesícula biliar",
            "Pâncreas",
            "Duodeno",
            "Fígado"
        ]
    },

    {
        nome: "Ductos biliares",
        pagina: 42,
        pergunta: "Qual conjunto de estruturas conduz a bile produzida pelo fígado e armazenada na vesícula?",
        correta: "Ductos biliares",
        alternativas: [
            "Ductos biliares",
            "Ductos pancreáticos",
            "Brônquios",
            "Pregas gástricas"
        ]
    },

    {
        nome: "Ducto cístico",
        pagina: 42,
        pergunta: "Qual ducto estabelece comunicação entre a vesícula biliar e as vias biliares?",
        correta: "Ducto cístico",
        alternativas: [
            "Ducto cístico",
            "Ducto hepático direito",
            "Ducto pancreático",
            "Ducto hepatopancreático"
        ]
    },

    {
        nome: "Ducto hepático direito",
        pagina: 42,
        pergunta: "Qual ducto conduz bile proveniente do lado direito do fígado?",
        correta: "Ducto hepático direito",
        alternativas: [
            "Ducto hepático direito",
            "Ducto hepático esquerdo",
            "Ducto cístico",
            "Ducto pancreático"
        ]
    },

    {
        nome: "Ducto hepático esquerdo",
        pagina: 42,
        pergunta: "Qual ducto conduz bile proveniente do lado esquerdo do fígado?",
        correta: "Ducto hepático esquerdo",
        alternativas: [
            "Ducto hepático esquerdo",
            "Ducto hepático direito",
            "Ducto cístico",
            "Ducto pancreático"
        ]
    },

    {
        nome: "Ducto hepático comum",
        pagina: 42,
        pergunta: "Qual ducto resulta da união dos ductos hepáticos direito e esquerdo?",
        correta: "Ducto hepático comum",
        alternativas: [
            "Ducto hepático comum",
            "Ducto cístico",
            "Ducto pancreático principal",
            "Ducto colédoco"
        ]
    },

    {
        nome: "Ducto colédoco",
        pagina: 42,
        pergunta: "Qual ducto conduz a bile em direção ao duodeno?",
        correta: "Ducto colédoco",
        alternativas: [
            "Ducto colédoco",
            "Ducto cístico",
            "Ducto hepático direito",
            "Ducto pancreático acessório"
        ]
    },

    {
        nome: "Ducto hepatopancreático",
        pagina: 42,
        pergunta: "Qual estrutura está relacionada à união das vias de drenagem biliar e pancreática antes de sua abertura no duodeno?",
        correta: "Ducto hepatopancreático",
        alternativas: [
            "Ducto hepatopancreático",
            "Ducto cístico",
            "Ducto hepático direito",
            "Ducto pancreático acessório"
        ]
    },

    {
        nome: "Pâncreas",
        pagina: 43,
        pergunta: "Qual órgão acessório do sistema digestório produz secreções que participam da digestão?",
        correta: "Pâncreas",
        alternativas: [
            "Pâncreas",
            "Fígado",
            "Vesícula biliar",
            "Parótida"
        ]
    },

    {
        nome: "Cabeça do pâncreas",
        pagina: 43,
        pergunta: "Qual parte do pâncreas está localizada junto ao duodeno?",
        correta: "Cabeça do pâncreas",
        alternativas: [
            "Cabeça do pâncreas",
            "Corpo do pâncreas",
            "Cauda do pâncreas",
            "Fundo do estômago"
        ]
    },

    {
        nome: "Corpo do pâncreas",
        pagina: 43,
        pergunta: "Qual região corresponde à porção intermediária do pâncreas?",
        correta: "Corpo do pâncreas",
        alternativas: [
            "Corpo do pâncreas",
            "Cabeça do pâncreas",
            "Cauda do pâncreas",
            "Ducto pancreático"
        ]
    },

    {
        nome: "Cauda do pâncreas",
        pagina: 43,
        pergunta: "Qual parte do pâncreas corresponde à sua extremidade mais lateral?",
        correta: "Cauda do pâncreas",
        alternativas: [
            "Cauda do pâncreas",
            "Cabeça do pâncreas",
            "Corpo do pâncreas",
            "Ducto pancreático"
        ]
    },

    {
        nome: "Ducto pancreático principal",
        pagina: 43,
        pergunta: "Qual ducto conduz a secreção pancreática através do pâncreas em direção ao duodeno?",
        correta: "Ducto pancreático principal",
        alternativas: [
            "Ducto pancreático principal",
            "Ducto cístico",
            "Ducto hepático comum",
            "Ducto da parótida"
        ]
    },

    {
        nome: "Ducto pancreático acessório",
        pagina: 43,
        pergunta: "Qual ducto corresponde a uma via acessória de drenagem das secreções pancreáticas?",
        correta: "Ducto pancreático acessório",
        alternativas: [
            "Ducto pancreático acessório",
            "Ducto cístico",
            "Ducto colédoco",
            "Ducto hepático direito"
        ]
    },

    {
        nome: "Ducto pancreático",
        pagina: 43,
        pergunta: "Qual estrutura pertence ao sistema de ductos responsável por conduzir a secreção produzida pelo pâncreas?",
        correta: "Ducto pancreático",
        alternativas: [
            "Ducto pancreático",
            "Ducto cístico",
            "Ducto hepático",
            "Ducto da parótida"
        ]
    },

    {
        nome: "Glândulas salivares",
        pagina: 44,
        pergunta: "Qual conjunto de glândulas produz saliva e participa da digestão inicial dos alimentos?",
        correta: "Glândulas salivares",
        alternativas: [
            "Glândulas salivares",
            "Glândulas gástricas",
            "Glândulas hepáticas",
            "Glândulas pancreáticas"
        ]
    },

    {
        nome: "Parótida",
        pagina: 44,
        pergunta: "Qual é uma das principais glândulas salivares localizada na região próxima à orelha?",
        correta: "Parótida",
        alternativas: [
            "Parótida",
            "Sublingual",
            "Submandibular",
            "Vesícula biliar"
        ]
    },

    {
        nome: "Ducto da parótida",
        pagina: 44,
        pergunta: "Qual ducto conduz a saliva produzida pela glândula parótida?",
        correta: "Ducto da parótida",
        alternativas: [
            "Ducto da parótida",
            "Ducto cístico",
            "Ducto pancreático",
            "Ducto colédoco"
        ]
    },

    {
        nome: "Sublingual",
        pagina: 45,
        pergunta: "Qual glândula salivar está localizada abaixo da língua?",
        correta: "Sublingual",
        alternativas: [
            "Sublingual",
            "Parótida",
            "Submandibular",
            "Vesícula biliar"
        ]
    },

    {
        nome: "Submandibular",
        pagina: 45,
        pergunta: "Qual glândula salivar está localizada inferiormente à mandíbula?",
        correta: "Submandibular",
        alternativas: [
            "Submandibular",
            "Sublingual",
            "Parótida",
            "Pâncreas"
        ]
    }

];


/* =========================================================
   FUNÇÃO PARA ESCOLHER O SISTEMA
   ========================================================= */

function selecionarSistema(sistema) {

    sistemaAtual = sistema;

    const menu = document.getElementById("menu");
    const configuracao = document.getElementById("configuracao");

    if (menu) {
        menu.classList.remove("ativa");
    }

    if (configuracao) {
        configuracao.classList.add("ativa");
    }

    const titulo = document.getElementById("tituloSistema");

    if (titulo) {

        if (sistema === "respiratorio") {
            titulo.textContent = "Sistema Respiratório";
        } else {
            titulo.textContent = "Sistema Digestório";
        }

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

    const banco =
        sistemaAtual === "respiratorio"
            ? respiratorio
            : digestorio;

    /* Copia o banco para não modificar o original */
    let bancoEmbaralhado = [...banco];

    /* Embaralha */
    bancoEmbaralhado.sort(() => Math.random() - 0.5);

    /*
       ESTUDAR:
       Mostra 10 questões.

       TREINAR:
       Mostra 20 questões.

       SIMULADO:
       Mostra 20 questões.
    */

    let quantidade = 10;

    if (modo === "treinar") {
        quantidade = Math.min(20, bancoEmbaralhado.length);
    }

    if (modo === "simulado") {
        quantidade = Math.min(20, bancoEmbaralhado.length);
    }

    questoes = bancoEmbaralhado.slice(0, quantidade);

    questaoAtual = 0;
    pontuacao = 0;
    respostaSelecionada = false;

    const configuracao = document.getElementById("configuracao");
    const jogo = document.getElementById("jogo");

    if (configuracao) {
        configuracao.classList.remove("ativa");
    }

    if (jogo) {
        jogo.classList.add("ativa");
    }

    atualizarCabecalho();

    carregarPergunta();
}


/* =========================================================
   ATUALIZAR CABEÇALHO
   ========================================================= */

function atualizarCabecalho() {

    const contador = document.getElementById("contador");
    const pontuacaoElemento = document.getElementById("pontuacao");

    if (contador) {
        contador.textContent =
            `Questão ${questaoAtual + 1} de ${questoes.length}`;
    }

    if (pontuacaoElemento) {
        pontuacaoElemento.textContent =
            `Pontuação: ${pontuacao}`;
    }

}


/* =========================================================
   CARREGAR QUESTÃO
   ========================================================= */

function carregarPergunta() {

    respostaSelecionada = false;

    const estrutura = questoes[questaoAtual];

    if (!estrutura) {
        mostrarResultado();
        return;
    }

    const pergunta = document.getElementById("pergunta");

    if (pergunta) {
        pergunta.textContent = estrutura.pergunta;
    }


    /* =====================================================
       IMAGEM DO PDF
       ===================================================== */

    const imagem = document.getElementById("imagemAnatomica");
    const semImagem = document.getElementById("semImagem");

    if (imagem) {

        const numeroPagina =
            String(estrutura.pagina).padStart(2, "0");

        imagem.src =
            `pagina-${numeroPagina}.jpg`;

        imagem.alt =
            `Imagem anatômica - página ${estrutura.pagina} do PDF`;

        imagem.style.display = "block";

        imagem.onerror = function () {

            imagem.style.display = "none";

            if (semImagem) {
                semImagem.style.display = "block";
                semImagem.textContent =
                    "Imagem desta página não encontrada.";
            }

        };

        imagem.onload = function () {

            imagem.style.display = "block";

            if (semImagem) {
                semImagem.style.display = "none";
            }

        };
    }


    /* =====================================================
       CRIAR ALTERNATIVAS
       ===================================================== */

    criarAlternativas(estrutura);

    atualizarCabecalho();

    atualizarProgresso();

    const feedback = document.getElementById("feedback");

    if (feedback) {
        feedback.textContent = "";
        feedback.className = "feedback";
    }

    const botaoProxima = document.getElementById("proxima");

    if (botaoProxima) {
        botaoProxima.style.display = "none";
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================================
   CRIAR ALTERNATIVAS
   ========================================================= */

function criarAlternativas(estrutura) {

    const container =
        document.getElementById("alternativas");

    if (!container) {
        return;
    }

    container.innerHTML = "";

    /*
       IMPORTANTE:

       As alternativas vêm da própria pergunta.

       NÃO usamos mais:
       - estrutura.nome de outras imagens
       - estruturas aleatórias da página
       - nomes aleatórios do PDF

       Portanto, a pessoa precisa responder
       o que foi perguntado.
    */

    let alternativas = [...estrutura.alternativas];

    alternativas.sort(() => Math.random() - 0.5);

    alternativas.forEach((alternativa, indice) => {

        const botao =
            document.createElement("button");

        botao.className = "alternativa";

        botao.type = "button";

        botao.textContent =
            `${String.fromCharCode(65 + indice)}) ${alternativa}`;

        botao.dataset.resposta =
            alternativa;

        botao.addEventListener(
            "click",
            function () {

                verificarResposta(
                    alternativa,
                    botao,
                    estrutura
                );

            }
        );

        container.appendChild(botao);

    });
}


/* =========================================================
   VERIFICAR RESPOSTA
   ========================================================= */

function verificarResposta(
    resposta,
    botaoClicado,
    estrutura
) {

    if (respostaSelecionada) {
        return;
    }

    respostaSelecionada = true;

    const botoes =
        document.querySelectorAll(".alternativa");

    botoes.forEach(botao => {
        botao.disabled = true;
    });


    const feedback =
        document.getElementById("feedback");


    if (resposta === estrutura.correta) {

        pontuacao++;

        botaoClicado.classList.add("correta");

        if (feedback) {

            feedback.className =
                "feedback correto";

            feedback.innerHTML =
                `<strong>✓ Correto!</strong><br>
                 A resposta é: <strong>${estrutura.correta}</strong>.`;

        }

    } else {

        botaoClicado.classList.add("errada");


        botoes.forEach(botao => {

            if (
                botao.dataset.resposta ===
                estrutura.correta
            ) {

                botao.classList.add("correta");

            }

        });


        if (feedback) {

            feedback.className =
                "feedback incorreto";

            feedback.innerHTML =
                `<strong>✗ Incorreto.</strong><br>
                 A resposta correta é:
                 <strong>${estrutura.correta}</strong>.`;

        }

    }


    atualizarCabecalho();

    const botaoProxima =
        document.getElementById("proxima");

    if (botaoProxima) {

        botaoProxima.style.display =
            "block";

    }
}


/* =========================================================
   PRÓXIMA QUESTÃO
   ========================================================= */

function proximaQuestao() {

    if (!respostaSelecionada) {
        return;
    }

    questaoAtual++;

    if (questaoAtual >= questoes.length) {

        mostrarResultado();

    } else {

        carregarPergunta();

    }

}


/* =========================================================
   PROGRESSO
   ========================================================= */

function atualizarProgresso() {

    const progresso =
        document.getElementById("progresso");

    if (!progresso || questoes.length === 0) {
        return;
    }

    const porcentagem =
        ((questaoAtual) / questoes.length) * 100;

    progresso.style.width =
        `${porcentagem}%`;
}


/* =========================================================
   MOSTRAR RESULTADO
   ========================================================= */

function mostrarResultado() {

    const jogo =
        document.getElementById("jogo");

    const resultado =
        document.getElementById("resultado");

    if (jogo) {
        jogo.classList.remove("ativa");
    }

    if (resultado) {
        resultado.classList.add("ativa");
    }


    const porcentagem =
        Math.round(
            (pontuacao / questoes.length) * 100
        );


    const elementoPorcentagem =
        document.getElementById("porcentagem");

    const mensagem =
        document.getElementById("mensagemResultado");


    if (elementoPorcentagem) {

        elementoPorcentagem.textContent =
            `${porcentagem}%`;

    }


    if (mensagem) {

        if (porcentagem >= 90) {

            mensagem.textContent =
                "Excelente! Você está dominando o conteúdo.";

        } else if (porcentagem >= 70) {

            mensagem.textContent =
                "Muito bom! Continue revisando os detalhes.";

        } else if (porcentagem >= 50) {

            mensagem.textContent =
                "Bom começo! Revise os conteúdos em que teve dificuldade.";

        } else {

            mensagem.textContent =
                "Continue estudando. A prática vai ajudar bastante.";

        }

    }

}


/* =========================================================
   SAIR DO JOGO
   ========================================================= */

function sairJogo() {

    const jogo =
        document.getElementById("jogo");

    const menu =
        document.getElementById("menu");

    if (jogo) {
        jogo.classList.remove("ativa");
    }

    if (menu) {
        menu.classList.add("ativa");
    }

    sistemaAtual = null;

    questoes = [];
    questaoAtual = 0;
    pontuacao = 0;

}


/* =========================================================
   JOGAR NOVAMENTE
   ========================================================= */

function jogarNovamente() {

    const resultado =
        document.getElementById("resultado");

    if (resultado) {
        resultado.classList.remove("ativa");
    }

    iniciarJogo(modoAtual);

}


/* =========================================================
   VOLTAR AO MENU
   ========================================================= */

function voltarMenu() {

    const resultado =
        document.getElementById("resultado");

    const configuracao =
        document.getElementById("configuracao");

    if (resultado) {
        resultado.classList.remove("ativa");
    }

    if (configuracao) {
        configuracao.classList.remove("ativa");
    }

    const menu =
        document.getElementById("menu");

    if (menu) {
        menu.classList.add("ativa");
    }

    sistemaAtual = null;
    questoes = [];
    questaoAtual = 0;
    pontuacao = 0;

}


/* =========================================================
   DISPONIBILIZAR AS FUNÇÕES PARA O HTML
   ========================================================= */

window.selecionarSistema =
    selecionarSistema;

window.iniciarJogo =
    iniciarJogo;

window.proximaQuestao =
    proximaQuestao;

window.sairJogo =
    sairJogo;

window.jogarNovamente =
    jogarNovamente;

window.voltarMenu =
    voltarMenu;


/* =========================================================
   INICIALIZAÇÃO
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const telas =
            document.querySelectorAll(".tela");

        /*
           Garante que somente a primeira tela
           fique ativa ao abrir o jogo.
        */

        if (telas.length > 0) {

            telas.forEach((tela, indice) => {

                if (indice === 0) {
                    tela.classList.add("ativa");
                }

            });

        }

    }
);
