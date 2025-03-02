
export interface Category {
  id: string;
  name: string;
  description: string;
}

export interface Book {
  id: string;
  testament: 'old' | 'new';
  name: string;
  shortName: string;
  categories: string[];
  description: string;
  christPointers: ChristPointer[];
}

export interface ChristPointer {
  category: string;
  description: string;
  verses: string[];
}

export const categories: Category[] = [
  {
    id: "redemptive-historical",
    name: "Progressão Histórico-Redentiva",
    description: "Traça como uma passagem se encaixa no amplo desdobramento do plano redentor de Deus ao longo da história, levando a Cristo."
  },
  {
    id: "promise-fulfillment",
    name: "Promessa-Cumprimento",
    description: "Identifica promessas feitas no Antigo Testamento que encontram seu cumprimento em Cristo."
  },
  {
    id: "typology",
    name: "Tipologia",
    description: "Reconhece pessoas, eventos ou instituições do Antigo Testamento como 'tipos' que prefiguram aspectos de Cristo ou Sua obra."
  },
  {
    id: "analogy",
    name: "Analogia",
    description: "Traça paralelos entre as ações de Deus no Antigo Testamento e Suas ações através de Cristo."
  },
  {
    id: "longitudinal-themes",
    name: "Temas Longitudinais",
    description: "Segue temas bíblicos principais à medida que se desenvolvem através das Escrituras e encontram sua culminação em Cristo."
  },
  {
    id: "new-testament-references",
    name: "Referências do Novo Testamento",
    description: "Utiliza citações do Novo Testamento referentes a passagens do Antigo Testamento para mostrar conexões com Cristo."
  },
  {
    id: "contrast",
    name: "Contraste",
    description: "Destaca como Cristo é maior ou diferente das figuras ou instituições do Antigo Testamento."
  }
];

export const books: Book[] = [
  // Antigo Testamento - Pentateuco
  {
    id: "genesis",
    testament: "old",
    name: "Gênesis",
    shortName: "Gên",
    categories: ["typology", "promise-fulfillment", "redemptive-historical"],
    description: "O livro dos princípios que estabelece o plano redentor de Deus.",
    christPointers: [
      {
        category: "promise-fulfillment",
        description: "A promessa da semente da mulher que esmagará a cabeça da serpente (Gênesis 3:15) aponta para a vitória de Cristo sobre Satanás.",
        verses: ["Gênesis 3:15"]
      },
      {
        category: "typology",
        description: "A oferta de Isaque por Abraão prefigura o sacrifício de Deus de Seu Filho.",
        verses: ["Gênesis 22:1-14"]
      },
      {
        category: "typology",
        description: "José como um tipo de Cristo: traído pelos irmãos, aparentemente derrotado mas elevado à glória, e se tornando o salvador de muitos.",
        verses: ["Gênesis 37-50"]
      },
      {
        category: "longitudinal-themes",
        description: "O tema da criação e seu cabeça, Adão, encontra cumprimento no último Adão, Cristo, que inaugura uma nova criação.",
        verses: ["Gênesis 1-2"]
      },
      {
        category: "promise-fulfillment",
        description: "A promessa a Abraão de que em sua descendência todas as famílias da terra seriam abençoadas encontra cumprimento em Cristo.",
        verses: ["Gênesis 12:1-3", "Gênesis 22:18"]
      }
    ]
  },
  {
    id: "exodus",
    testament: "old",
    name: "Êxodo",
    shortName: "Êxo",
    categories: ["typology", "redemptive-historical", "longitudinal-themes"],
    description: "A história da libertação do povo de Deus da escravidão no Egito.",
    christPointers: [
      {
        category: "typology",
        description: "O cordeiro da Páscoa prefigura Cristo como o Cordeiro de Deus cujo sangue protege do juízo.",
        verses: ["Êxodo 12:1-28"]
      },
      {
        category: "typology",
        description: "Moisés como libertador e mediador prefigura a maior libertação e mediação de Cristo.",
        verses: ["Êxodo 3:10", "Êxodo 20:19-21"]
      },
      {
        category: "longitudinal-themes",
        description: "O tema da redenção da escravidão aponta para a redenção de Cristo do pecado.",
        verses: ["Êxodo 6:6-8"]
      },
      {
        category: "typology",
        description: "O maná no deserto prefigura Cristo como o pão da vida.",
        verses: ["Êxodo 16:1-36"]
      },
      {
        category: "typology",
        description: "O tabernáculo aponta para Cristo como a habitação de Deus entre o povo.",
        verses: ["Êxodo 25-40"]
      }
    ]
  },
  {
    id: "leviticus",
    testament: "old",
    name: "Levítico",
    shortName: "Lev",
    categories: ["typology", "contrast"],
    description: "Instruções para adoração e santidade que apontam para o sacrifício perfeito e santidade de Cristo.",
    christPointers: [
      {
        category: "typology",
        description: "O sistema sacrificial prefigura o sacrifício único de Cristo.",
        verses: ["Levítico 16:1-34"]
      },
      {
        category: "contrast",
        description: "A natureza repetitiva dos sacrifícios levíticos contrasta com o sacrifício perfeito de Cristo, oferecido uma vez por todas.",
        verses: ["Levítico 1-7"]
      },
      {
        category: "typology",
        description: "O Dia da Expiação prefigura a obra expiatória de Cristo na cruz.",
        verses: ["Levítico 16"]
      },
      {
        category: "longitudinal-themes",
        description: "O tema da santidade encontra sua perfeita expressão em Cristo, que é completamente santo e torna santo o seu povo.",
        verses: ["Levítico 11:44-45", "Levítico 19:2"]
      }
    ]
  },
  {
    id: "numbers",
    testament: "old",
    name: "Números",
    shortName: "Núm",
    categories: ["typology", "longitudinal-themes"],
    description: "A jornada de Israel pelo deserto, revelando a fidelidade de Deus apesar da infidelidade do povo.",
    christPointers: [
      {
        category: "typology",
        description: "A serpente de bronze levantada no deserto prefigura Cristo levantado na cruz para cura e salvação.",
        verses: ["Números 21:4-9"]
      },
      {
        category: "typology",
        description: "A rocha que proveu água prefigura Cristo como a fonte da água viva.",
        verses: ["Números 20:1-13"]
      },
      {
        category: "longitudinal-themes",
        description: "O tema da provisão de Deus no deserto aponta para a provisão completa em Cristo.",
        verses: ["Números 11:1-35"]
      },
      {
        category: "redemptive-historical",
        description: "As bênçãos sacerdotais prefiguram as bênçãos espirituais em Cristo.",
        verses: ["Números 6:22-27"]
      }
    ]
  },
  {
    id: "deuteronomy",
    testament: "old",
    name: "Deuteronômio",
    shortName: "Deut",
    categories: ["promise-fulfillment", "typology", "longitudinal-themes"],
    description: "A renovação da aliança e as instruções finais de Moisés antes de entrar na Terra Prometida.",
    christPointers: [
      {
        category: "promise-fulfillment",
        description: "A promessa de um profeta como Moisés encontra seu cumprimento em Cristo.",
        verses: ["Deuteronômio 18:15-19"]
      },
      {
        category: "typology",
        description: "A entrada na Terra Prometida prefigura o descanso espiritual encontrado em Cristo.",
        verses: ["Deuteronômio 3:18-20"]
      },
      {
        category: "longitudinal-themes",
        description: "O tema da obediência à lei encontra seu cumprimento em Cristo, que obedeceu perfeitamente à lei de Deus.",
        verses: ["Deuteronômio 6:4-9", "Deuteronômio 30:11-14"]
      },
      {
        category: "redemptive-historical",
        description: "As bênçãos e maldições da aliança encontram resolução em Cristo, que levou a maldição para dar-nos a bênção.",
        verses: ["Deuteronômio 28-30"]
      }
    ]
  },
  
  // Livros Históricos
  {
    id: "joshua",
    testament: "old",
    name: "Josué",
    shortName: "Jos",
    categories: ["typology", "redemptive-historical"],
    description: "A conquista da Terra Prometida sob a liderança de Josué.",
    christPointers: [
      {
        category: "typology",
        description: "Josué como líder que conduz o povo à terra prometida prefigura Cristo que conduz seu povo ao descanso eterno.",
        verses: ["Josué 1:1-9"]
      },
      {
        category: "redemptive-historical",
        description: "A conquista da terra representa o progresso do reino de Deus que será completado em Cristo.",
        verses: ["Josué 21:43-45"]
      },
      {
        category: "typology",
        description: "Raabe e o cordão escarlate prefiguram a salvação através do sangue de Cristo.",
        verses: ["Josué 2:1-21", "Josué 6:22-25"]
      }
    ]
  },
  {
    id: "judges",
    testament: "old",
    name: "Juízes",
    shortName: "Juí",
    categories: ["typology", "contrast", "redemptive-historical"],
    description: "O ciclo de apostasia, opressão, clamor e libertação através de juízes.",
    christPointers: [
      {
        category: "typology",
        description: "Os juízes como libertadores temporários prefiguram Cristo como o libertador definitivo.",
        verses: ["Juízes 2:16-19"]
      },
      {
        category: "contrast",
        description: "A incapacidade dos juízes de trazer libertação permanente contrasta com a libertação completa em Cristo.",
        verses: ["Juízes 3-16"]
      },
      {
        category: "redemptive-historical",
        description: "O caos e a necessidade de um rei apontam para o reinado perfeito de Cristo.",
        verses: ["Juízes 17:6", "Juízes 21:25"]
      }
    ]
  },
  {
    id: "ruth",
    testament: "old",
    name: "Rute",
    shortName: "Rute",
    categories: ["redemptive-historical", "typology"],
    description: "A história de redenção de Rute através de seu parente-resgatador Boaz.",
    christPointers: [
      {
        category: "typology",
        description: "Boaz como resgatador (goel) prefigura Cristo como nosso Resgatador.",
        verses: ["Rute 4:1-12"]
      },
      {
        category: "redemptive-historical",
        description: "A inclusão de Rute, uma moabita, na linhagem de Davi aponta para a inclusão dos gentios no reino de Cristo.",
        verses: ["Rute 4:13-22"]
      },
      {
        category: "longitudinal-themes",
        description: "O tema da redenção através do parente-resgatador aponta para a redenção em Cristo.",
        verses: ["Rute 3:9", "Rute 4:1-12"]
      }
    ]
  },
  {
    id: "1samuel",
    testament: "old",
    name: "1 Samuel",
    shortName: "1 Sam",
    categories: ["typology", "redemptive-historical"],
    description: "A transição de Israel dos juízes para a monarquia, com ênfase em Samuel, Saul e Davi.",
    christPointers: [
      {
        category: "typology",
        description: "Davi como rei ungido mas rejeitado prefigura Cristo.",
        verses: ["1 Samuel 16:1-13"]
      },
      {
        category: "redemptive-historical",
        description: "O estabelecimento do reino através de Davi aponta para o reino eterno de Cristo.",
        verses: ["1 Samuel 13:14", "1 Samuel 16:1-13"]
      },
      {
        category: "typology",
        description: "A vitória de Davi sobre Golias prefigura a vitória de Cristo sobre os inimigos do povo de Deus.",
        verses: ["1 Samuel 17"]
      }
    ]
  },
  {
    id: "2samuel",
    testament: "old",
    name: "2 Samuel",
    shortName: "2 Sam",
    categories: ["promise-fulfillment", "typology"],
    description: "O reinado de Davi e a aliança davídica.",
    christPointers: [
      {
        category: "promise-fulfillment",
        description: "A aliança davídica promete um descendente que reinará para sempre, cumprido em Cristo.",
        verses: ["2 Samuel 7:12-16"]
      },
      {
        category: "typology",
        description: "Davi como rei segundo o coração de Deus prefigura Cristo como o Rei perfeito.",
        verses: ["2 Samuel 5:1-5", "2 Samuel 7:1-17"]
      },
      {
        category: "redemptive-historical",
        description: "O reino de Davi como prenúncio do reino de Cristo.",
        verses: ["2 Samuel 5-10"]
      }
    ]
  },
  {
    id: "1kings",
    testament: "old",
    name: "1 Reis",
    shortName: "1 Reis",
    categories: ["typology", "contrast", "redemptive-historical"],
    description: "O reinado de Salomão e a divisão do reino.",
    christPointers: [
      {
        category: "typology",
        description: "O templo construído por Salomão prefigura Cristo como o verdadeiro templo.",
        verses: ["1 Reis 6-8"]
      },
      {
        category: "contrast",
        description: "O fracasso de Salomão e os reis subsequentes contrasta com o reinado perfeito de Cristo.",
        verses: ["1 Reis 11:1-13"]
      },
      {
        category: "typology",
        description: "A sabedoria de Salomão prefigura a sabedoria superior de Cristo.",
        verses: ["1 Reis 3:3-28", "1 Reis 4:29-34"]
      }
    ]
  },
  {
    id: "2kings",
    testament: "old",
    name: "2 Reis",
    shortName: "2 Reis",
    categories: ["contrast", "redemptive-historical"],
    description: "O declínio dos reinos divididos e o exílio.",
    christPointers: [
      {
        category: "contrast",
        description: "O fracasso dos reis de Israel e Judá contrasta com a fidelidade de Cristo como Rei.",
        verses: ["2 Reis 17:7-23", "2 Reis 24-25"]
      },
      {
        category: "typology",
        description: "O ministério de Eliseu com seus milagres de cura e ressurreição prefigura o ministério de Cristo.",
        verses: ["2 Reis 4-5"]
      },
      {
        category: "redemptive-historical",
        description: "O exílio e a esperança de restauração apontam para a restauração definitiva em Cristo.",
        verses: ["2 Reis 25:27-30"]
      }
    ]
  },
  {
    id: "1chronicles",
    testament: "old",
    name: "1 Crônicas",
    shortName: "1 Crôn",
    categories: ["redemptive-historical", "typology"],
    description: "Genealogias e história de Israel com ênfase em Davi e no templo.",
    christPointers: [
      {
        category: "redemptive-historical",
        description: "As genealogias traçam a linhagem do Messias.",
        verses: ["1 Crônicas 1-9"]
      },
      {
        category: "typology",
        description: "Davi como rei e o estabelecimento da adoração prefiguram o reinado e a verdadeira adoração em Cristo.",
        verses: ["1 Crônicas 15-16"]
      },
      {
        category: "promise-fulfillment",
        description: "A aliança com Davi promete um descendente que reinará para sempre.",
        verses: ["1 Crônicas 17:11-14"]
      }
    ]
  },
  {
    id: "2chronicles",
    testament: "old",
    name: "2 Crônicas",
    shortName: "2 Crôn",
    categories: ["longitudinal-themes", "redemptive-historical"],
    description: "A história dos reis de Judá com ênfase na fidelidade à aliança.",
    christPointers: [
      {
        category: "longitudinal-themes",
        description: "O tema do templo como lugar da presença de Deus encontra cumprimento em Cristo.",
        verses: ["2 Crônicas 2-7"]
      },
      {
        category: "redemptive-historical",
        description: "Os períodos de reforma seguidos de apostasia apontam para a necessidade de uma reforma definitiva em Cristo.",
        verses: ["2 Crônicas 29-31", "2 Crônicas 34-35"]
      },
      {
        category: "redemptive-historical",
        description: "O decreto de Ciro para retornar e reconstruir aponta para a restauração espiritual em Cristo.",
        verses: ["2 Crônicas 36:22-23"]
      }
    ]
  },
  {
    id: "ezra",
    testament: "old",
    name: "Esdras",
    shortName: "Esd",
    categories: ["redemptive-historical", "typology"],
    description: "O retorno do exílio e a reconstrução do templo.",
    christPointers: [
      {
        category: "redemptive-historical",
        description: "O retorno do exílio como etapa na história redentiva que conduz a Cristo.",
        verses: ["Esdras 1:1-4"]
      },
      {
        category: "typology",
        description: "A reconstrução do templo prefigura Cristo como o verdadeiro templo.",
        verses: ["Esdras 3:8-13", "Esdras 6:13-18"]
      },
      {
        category: "longitudinal-themes",
        description: "O tema da restauração do povo da aliança encontra sua plenitude em Cristo.",
        verses: ["Esdras 9-10"]
      }
    ]
  },
  {
    id: "nehemiah",
    testament: "old",
    name: "Neemias",
    shortName: "Nee",
    categories: ["redemptive-historical", "typology"],
    description: "A reconstrução dos muros de Jerusalém e a reforma da comunidade.",
    christPointers: [
      {
        category: "redemptive-historical",
        description: "A restauração de Jerusalém como parte do plano que prepara para a vinda de Cristo.",
        verses: ["Neemias 2:1-20"]
      },
      {
        category: "typology",
        description: "A liderança sacrificial de Neemias prefigura aspectos do sacrifício de Cristo por seu povo.",
        verses: ["Neemias 5:14-19"]
      },
      {
        category: "longitudinal-themes",
        description: "A renovação da aliança aponta para a nova aliança em Cristo.",
        verses: ["Neemias 8-10"]
      }
    ]
  },
  {
    id: "esther",
    testament: "old",
    name: "Ester",
    shortName: "Est",
    categories: ["typology", "redemptive-historical"],
    description: "A providência de Deus na preservação do seu povo através de Ester.",
    christPointers: [
      {
        category: "typology",
        description: "Ester arriscando sua vida pelo seu povo prefigura o sacrifício de Cristo.",
        verses: ["Ester 4:14-16"]
      },
      {
        category: "redemptive-historical",
        description: "A preservação do povo judeu em face da ameaça de extinção é crucial para o plano redentor que culmina em Cristo.",
        verses: ["Ester 7:1-10", "Ester 9:20-22"]
      },
      {
        category: "longitudinal-themes",
        description: "O tema da providência divina por trás dos eventos históricos encontra sua expressão máxima na vinda de Cristo no 'cumprimento do tempo'.",
        verses: ["Ester 4:14"]
      }
    ]
  },
  
  // Livros Poéticos e de Sabedoria
  {
    id: "job",
    testament: "old",
    name: "Jó",
    shortName: "Jó",
    categories: ["typology", "longitudinal-themes", "contrast"],
    description: "A história do sofrimento de Jó e a soberania de Deus.",
    christPointers: [
      {
        category: "typology",
        description: "Jó como justo sofredor prefigura Cristo, o sofredor inocente.",
        verses: ["Jó 1-2", "Jó 16:18-21"]
      },
      {
        category: "longitudinal-themes",
        description: "O tema da redenção e restauração de Jó aponta para a redenção final em Cristo.",
        verses: ["Jó 19:25-27", "Jó 42:7-17"]
      },
      {
        category: "contrast",
        description: "Jó como mediador limitado contrasta com Cristo, o perfeito mediador.",
        verses: ["Jó 9:32-33", "Jó 16:19-21"]
      }
    ]
  },
  {
    id: "psalms",
    testament: "old",
    name: "Salmos",
    shortName: "Sal",
    categories: ["typology", "promise-fulfillment", "new-testament-references"],
    description: "Coleção de canções, orações e poesia usadas na adoração.",
    christPointers: [
      {
        category: "typology",
        description: "Os salmos messiânicos descrevem diretamente Cristo como Rei, Sacerdote e Sofredor.",
        verses: ["Salmos 2", "Salmos 22", "Salmos 110"]
      },
      {
        category: "promise-fulfillment",
        description: "Promessas sobre o Messias que são cumpridas em Cristo.",
        verses: ["Salmos 16:8-11", "Salmos 118:22-23"]
      },
      {
        category: "new-testament-references",
        description: "Salmos frequentemente citados no Novo Testamento em referência a Cristo.",
        verses: ["Salmos 8:4-6", "Salmos 40:6-8", "Salmos 69:9", "Salmos 118:22-23"]
      },
      {
        category: "typology",
        description: "Davi como rei e autor de muitos Salmos prefigura Cristo, o Rei definitivo.",
        verses: ["Salmos 2", "Salmos 18", "Salmos 45", "Salmos 72"]
      }
    ]
  },
  {
    id: "proverbs",
    testament: "old",
    name: "Provérbios",
    shortName: "Prov",
    categories: ["typology", "longitudinal-themes"],
    description: "Coleção de provérbios e ditados que ensinam sabedoria prática.",
    christPointers: [
      {
        category: "typology",
        description: "A personificação da Sabedoria aponta para Cristo como a Sabedoria de Deus encarnada.",
        verses: ["Provérbios 8:22-31"]
      },
      {
        category: "longitudinal-themes",
        description: "O tema da sabedoria encontra sua expressão plena em Cristo, 'em quem estão escondidos todos os tesouros da sabedoria e do conhecimento'.",
        verses: ["Provérbios 1:1-7", "Provérbios 9:1-6"]
      },
      {
        category: "contrast",
        description: "A busca pela sabedoria em Provérbios encontra resposta definitiva em Cristo, que se tornou para nós sabedoria da parte de Deus.",
        verses: ["Provérbios 2:1-15", "Provérbios 4:5-9"]
      }
    ]
  },
  {
    id: "ecclesiastes",
    testament: "old",
    name: "Eclesiastes",
    shortName: "Ecl",
    categories: ["contrast", "longitudinal-themes"],
    description: "Reflexão sobre o significado da vida 'debaixo do sol'.",
    christPointers: [
      {
        category: "contrast",
        description: "A vaidade e insatisfação da vida terrena contrasta com o propósito e a plenitude encontrados em Cristo.",
        verses: ["Eclesiastes 1:2-11", "Eclesiastes 2:1-11"]
      },
      {
        category: "longitudinal-themes",
        description: "A busca pelo significado encontra sua resposta em Cristo, que dá sentido à existência humana.",
        verses: ["Eclesiastes 3:1-15", "Eclesiastes 12:13-14"]
      },
      {
        category: "redemptive-historical",
        description: "As limitações da sabedoria humana apontam para a necessidade da sabedoria divina revelada plenamente em Cristo.",
        verses: ["Eclesiastes 8:16-17"]
      }
    ]
  },
  {
    id: "songofsolomon",
    testament: "old",
    name: "Cântico dos Cânticos",
    shortName: "Cant",
    categories: ["typology", "analogy"],
    description: "Poema sobre o amor conjugal e celebração do amor humano.",
    christPointers: [
      {
        category: "typology",
        description: "O amor entre o noivo e a noiva simboliza o amor entre Cristo e sua Igreja.",
        verses: ["Cânticos 2:8-17", "Cânticos 8:6-7"]
      },
      {
        category: "analogy",
        description: "A intimidade e o deleite do amor humano refletem analogicamente o relacionamento de Cristo com seu povo.",
        verses: ["Cânticos 2:16", "Cânticos 6:3"]
      },
      {
        category: "longitudinal-themes",
        description: "O tema do amor comprometido e fiel encontra sua expressão mais plena no amor de Cristo pela Igreja.",
        verses: ["Cânticos 8:6-7"]
      }
    ]
  },
  
  // Profetas Maiores
  {
    id: "isaiah",
    testament: "old",
    name: "Isaías",
    shortName: "Isa",
    categories: ["promise-fulfillment", "typology", "new-testament-references"],
    description: "Profecias sobre o julgamento, exílio, restauração e o Messias.",
    christPointers: [
      {
        category: "promise-fulfillment",
        description: "Profecias diretas sobre o nascimento, ministério e sofrimento do Messias cumpridas em Cristo.",
        verses: ["Isaías 7:14", "Isaías 9:1-7", "Isaías 11:1-10", "Isaías 53"]
      },
      {
        category: "typology",
        description: "O servo sofredor prefigura o sofrimento substitutivo de Cristo.",
        verses: ["Isaías 42:1-4", "Isaías 49:1-6", "Isaías 50:4-9", "Isaías 52:13-53:12"]
      },
      {
        category: "new-testament-references",
        description: "Textos de Isaías frequentemente citados no Novo Testamento em referência a Cristo.",
        verses: ["Isaías 6:9-10", "Isaías 61:1-2"]
      },
      {
        category: "redemptive-historical",
        description: "A promessa de um novo céu e nova terra aponta para a restauração definitiva em Cristo.",
        verses: ["Isaías 65:17-25"]
      }
    ]
  },
  {
    id: "jeremiah",
    testament: "old",
    name: "Jeremias",
    shortName: "Jer",
    categories: ["promise-fulfillment", "typology", "redemptive-historical"],
    description: "Profecias sobre o julgamento de Judá e a promessa de uma nova aliança.",
    christPointers: [
      {
        category: "promise-fulfillment",
        description: "A promessa de uma nova aliança cumprida em Cristo.",
        verses: ["Jeremias 31:31-34"]
      },
      {
        category: "typology",
        description: "Jeremias como profeta rejeitado e sofredor prefigura Cristo.",
        verses: ["Jeremias 11:18-20", "Jeremias 15:15-21", "Jeremias 20:7-18"]
      },
      {
        category: "redemptive-historical",
        description: "O juízo sobre Judá como parte do plano redentor de Deus que culmina em Cristo.",
        verses: ["Jeremias 25:1-14", "Jeremias 29:10-14"]
      },
      {
        category: "promise-fulfillment",
        description: "A promessa de um 'Renovo justo' da linhagem de Davi cumprida em Cristo.",
        verses: ["Jeremias 23:5-6", "Jeremias 33:14-16"]
      }
    ]
  },
  {
    id: "lamentations",
    testament: "old",
    name: "Lamentações",
    shortName: "Lam",
    categories: ["typology", "redemptive-historical"],
    description: "Poemas de lamento sobre a destruição de Jerusalém.",
    christPointers: [
      {
        category: "typology",
        description: "O sofrimento e as lamentações do profeta prefiguram o sofrimento de Cristo pela sua cidade.",
        verses: ["Lamentações 1:12", "Lamentações 3:1-20"]
      },
      {
        category: "redemptive-historical",
        description: "A destruição de Jerusalém como parte do plano redentor de Deus que conduz a Cristo.",
        verses: ["Lamentações 4:21-22"]
      },
      {
        category: "longitudinal-themes",
        description: "O tema da fidelidade e das misericórdias de Deus em meio ao julgamento encontra sua expressão plena em Cristo.",
        verses: ["Lamentações 3:21-33"]
      }
    ]
  },
  {
    id: "ezekiel",
    testament: "old",
    name: "Ezequiel",
    shortName: "Eze",
    categories: ["typology", "promise-fulfillment", "redemptive-historical"],
    description: "Visões e profecias durante o exílio babilônico.",
    christPointers: [
      {
        category: "typology",
        description: "Ezequiel como sacerdote-profeta, vigilante e pastor prefigura Cristo em seus papéis.",
        verses: ["Ezequiel 3:16-21", "Ezequiel 34:11-16"]
      },
      {
        category: "promise-fulfillment",
        description: "A promessa de um coração novo e espírito novo cumprida através de Cristo.",
        verses: ["Ezequiel 36:24-32"]
      },
      {
        category: "typology",
        description: "A visão do templo aponta para Cristo como o verdadeiro templo.",
        verses: ["Ezequiel 40-48"]
      },
      {
        category: "promise-fulfillment",
        description: "A promessa de Davi como pastor do povo de Deus cumprida em Cristo.",
        verses: ["Ezequiel 34:23-24", "Ezequiel 37:24-28"]
      }
    ]
  },
  {
    id: "daniel",
    testament: "old",
    name: "Daniel",
    shortName: "Dan",
    categories: ["typology", "promise-fulfillment", "redemptive-historical"],
    description: "Narrativas e visões apocalípticas durante o exílio.",
    christPointers: [
      {
        category: "promise-fulfillment",
        description: "A visão do Filho do Homem vindo com as nuvens do céu cumprida em Cristo.",
        verses: ["Daniel 7:13-14"]
      },
      {
        category: "typology",
        description: "Daniel como homem fiel e justo em terra estrangeira prefigura Cristo.",
        verses: ["Daniel 6"]
      },
      {
        category: "promise-fulfillment",
        description: "A profecia das setenta semanas que aponta para a vinda de Cristo.",
        verses: ["Daniel 9:24-27"]
      },
      {
        category: "redemptive-historical",
        description: "As visões dos reinos mundiais que culminam no reino eterno de Deus estabelecido por Cristo.",
        verses: ["Daniel 2:31-45", "Daniel 7:1-14"]
      }
    ]
  },
  
  // Profetas Menores
  {
    id: "hosea",
    testament: "old",
    name: "Oséias",
    shortName: "Osé",
    categories: ["typology", "analogy", "new-testament-references"],
    description: "O amor fiel de Deus por Israel apesar de sua infidelidade.",
    christPointers: [
      {
        category: "typology",
        description: "O casamento de Oséias com Gômer prefigura o amor fiel de Cristo pela sua noiva infiel, a Igreja.",
        verses: ["Oséias 1-3"]
      },
      {
        category: "analogy",
        description: "O amor redentor de Deus por Israel é análogo ao amor redentor de Cristo.",
        verses: ["Oséias 11:1", "Oséias 14:4-7"]
      },
      {
        category: "new-testament-references",
        description: "A citação 'Do Egito chamei o meu filho' aplicada a Cristo.",
        verses: ["Oséias 11:1"]
      },
      {
        category: "promise-fulfillment",
        description: "A promessa de restauração e reconciliação cumprida em Cristo.",
        verses: ["Oséias 13:14", "Oséias 14:1-9"]
      }
    ]
  },
  {
    id: "joel",
    testament: "old",
    name: "Joel",
    shortName: "Joel",
    categories: ["promise-fulfillment", "new-testament-references", "redemptive-historical"],
    description: "Profecias sobre o Dia do Senhor e o derramamento do Espírito.",
    christPointers: [
      {
        category: "promise-fulfillment",
        description: "A profecia do derramamento do Espírito cumprida em Pentecostes após a ascensão de Cristo.",
        verses: ["Joel 2:28-32"]
      },
      {
        category: "new-testament-references",
        description: "A citação de Joel 2:32 por Pedro aplicada à salvação em Cristo.",
        verses: ["Joel 2:32"]
      },
      {
        category: "redemptive-historical",
        description: "O Dia do Senhor como prelúdio do julgamento e salvação finais em Cristo.",
        verses: ["Joel 2:1-11", "Joel 3:1-16"]
      }
    ]
  },
  {
    id: "amos",
    testament: "old",
    name: "Amós",
    shortName: "Amós",
    categories: ["promise-fulfillment", "redemptive-historical", "contrast"],
    description: "Julgamento sobre Israel e as nações, com promessa de restauração.",
    christPointers: [
      {
        category: "promise-fulfillment",
        description: "A promessa de restaurar o 'tabernáculo caído de Davi' cumprida em Cristo.",
        verses: ["Amós 9:11-15"]
      },
      {
        category: "redemptive-historical",
        description: "O julgamento sobre Israel como parte do plano redentor que culmina em Cristo.",
        verses: ["Amós 3:1-15", "Amós 9:8-10"]
      },
      {
        category: "contrast",
        description: "A exigência de justiça verdadeira que se encontra plenamente em Cristo.",
        verses: ["Amós 5:21-24"]
      }
    ]
  },
  {
    id: "obadiah",
    testament: "old",
    name: "Obadias",
    shortName: "Obad",
    categories: ["redemptive-historical", "longitudinal-themes"],
    description: "Profecia contra Edom e a promessa da vitória final de Israel.",
    christPointers: [
      {
        category: "redemptive-historical",
        description: "O julgamento de Edom como parte do plano redentor de Deus que culmina em Cristo.",
        verses: ["Obadias 1:15-16"]
      },
      {
        category: "longitudinal-themes",
        description: "O tema do reino de Deus triunfando sobre seus inimigos encontra cumprimento em Cristo.",
        verses: ["Obadias 1:17-21"]
      },
      {
        category: "typology",
        description: "A inimizade histórica entre Edom (Esaú) e Israel (Jacó) prefigura o conflito entre a semente da serpente e a semente da mulher que culmina na vitória de Cristo.",
        verses: ["Obadias 1:10-14"]
      }
    ]
  },
  {
    id: "jonah",
    testament: "old",
    name: "Jonas",
    shortName: "Jon",
    categories: ["typology", "new-testament-references", "redemptive-historical"],
    description: "A história de Jonas e o chamado ao arrependimento de Nínive.",
    christPointers: [
      {
        category: "typology",
        description: "Os três dias de Jonas no grande peixe prefiguram a morte e ressurreição de Cristo.",
        verses: ["Jonas 1:17-2:10"]
      },
      {
        category: "new-testament-references",
        description: "Jesus cita o 'sinal de Jonas' como tipo de sua morte e ressurreição.",
        verses: ["Jonas 1:17"]
      },
      {
        category: "redemptive-historical",
        description: "A misericórdia de Deus para com os gentios em Nínive aponta para a inclusão dos gentios em Cristo.",
        verses: ["Jonas 3:1-10", "Jonas 4:1-11"]
      }
    ]
  },
  {
    id: "micah",
    testament: "old",
    name: "Miquéias",
    shortName: "Miq",
    categories: ["promise-fulfillment", "new-testament-references", "redemptive-historical"],
    description: "Julgamento, promessa de restauração e a vinda do Messias.",
    christPointers: [
      {
        category: "promise-fulfillment",
        description: "A profecia sobre o nascimento do Messias em Belém cumprida em Cristo.",
        verses: ["Miquéias 5:2"]
      },
      {
        category: "new-testament-references",
        description: "A citação de Miquéias 5:2 aplicada ao nascimento de Jesus em Belém.",
        verses: ["Miquéias 5:2"]
      },
      {
        category: "redemptive-historical",
        description: "A promessa de um governante que pastorearia seu povo em nome do Senhor cumprida em Cristo.",
        verses: ["Miquéias 5:4-5"]
      },
      {
        category: "analogy",
        description: "O perdão incomparável de Deus que lança os pecados nas profundezas do mar se manifesta plenamente em Cristo.",
        verses: ["Miquéias 7:18-20"]
      }
    ]
  },
  {
    id: "nahum",
    testament: "old",
    name: "Naum",
    shortName: "Nau",
    categories: ["redemptive-historical", "analogy"],
    description: "Profecia sobre a destruição de Nínive.",
    christPointers: [
      {
        category: "redemptive-historical",
        description: "O julgamento de Nínive como parte do plano redentor de Deus que conduz a Cristo.",
        verses: ["Naum 1:1-8", "Naum 3:1-19"]
      },
      {
        category: "analogy",
        description: "O caráter de Deus como justo juiz e refúgio para os que nele confiam se manifesta plenamente em Cristo.",
        verses: ["Naum 1:7-8"]
      },
      {
        category: "longitudinal-themes",
        description: "O tema do julgamento divino sobre os opressores do povo de Deus encontra sua culminação em Cristo.",
        verses: ["Naum 1:2-6"]
      }
    ]
  },
  {
    id: "habakkuk",
    testament: "old",
    name: "Habacuque",
    shortName: "Hab",
    categories: ["new-testament-references", "redemptive-historical", "longitudinal-themes"],
    description: "Diálogo entre o profeta e Deus sobre injustiça e fé.",
    christPointers: [
      {
        category: "new-testament-references",
        description: "A declaração 'o justo viverá pela fé' citada no Novo Testamento em relação à justificação pela fé em Cristo.",
        verses: ["Habacuque 2:4"]
      },
      {
        category: "redemptive-historical",
        description: "A tensão entre justiça e julgamento resolvida em Cristo.",
        verses: ["Habacuque 1:1-17"]
      },
      {
        category: "longitudinal-themes",
        description: "O tema da fé e confiança em Deus em tempos difíceis encontra sua plena expressão em Cristo.",
        verses: ["Habacuque 3:16-19"]
      }
    ]
  },
  {
    id: "zephaniah",
    testament: "old",
    name: "Sofonias",
    shortName: "Sof",
    categories: ["redemptive-historical", "promise-fulfillment"],
    description: "Profecia sobre o Dia do Senhor, julgamento e restauração.",
    christPointers: [
      {
        category: "redemptive-historical",
        description: "O Dia do Senhor como julgamento e salvação prefigura o papel dual de Cristo como juiz e salvador.",
        verses: ["Sofonias 1:7-18", "Sofonias 3:8-13"]
      },
      {
        category: "promise-fulfillment",
        description: "A promessa de restauração e regozijo encontra seu cumprimento em Cristo.",
        verses: ["Sofonias 3:14-20"]
      },
      {
        category: "typology",
        description: "O 'restante de Israel' que confia no nome do Senhor prefigura o remanescente fiel que confia em Cristo.",
        verses: ["Sofonias 3:12-13"]
      }
    ]
  },
  {
    id: "haggai",
    testament: "old",
    name: "Ageu",
    shortName: "Ag",
    categories: ["typology", "promise-fulfillment", "redemptive-historical"],
    description: "Mensagem para reconstruir o templo após o retorno do exílio.",
    christPointers: [
      {
        category: "typology",
        description: "A reconstrução do templo prefigura Cristo como o verdadeiro templo.",
        verses: ["Ageu 2:1-9"]
      },
      {
        category: "promise-fulfillment",
        description: "A promessa de que a glória futura do templo seria maior que a anterior cumprida em Cristo.",
        verses: ["Ageu 2:6-9"]
      },
      {
        category: "redemptive-historical",
        description: "A escolha de Zorobabel como 'anel de selar' aponta para seu descendente Cristo.",
        verses: ["Ageu 2:20-23"]
      }
    ]
  },
  {
    id: "zechariah",
    testament: "old",
    name: "Zacarias",
    shortName: "Zac",
    categories: ["typology", "promise-fulfillment", "new-testament-references"],
    description: "Visões e profecias sobre a restauração de Israel e a vinda do Messias.",
    christPointers: [
      {
        category: "typology",
        description: "Josué, o sumo sacerdote, e Zorobabel prefiguram os papéis sacerdotal e real de Cristo.",
        verses: ["Zacarias 3:1-10", "Zacarias 4:1-14", "Zacarias 6:9-15"]
      },
      {
        category: "promise-fulfillment",
        description: "Profecias diretas sobre o Messias cumpridas em Cristo.",
        verses: ["Zacarias 9:9-10", "Zacarias 12:10", "Zacarias 13:1", "Zacarias 13:7"]
      },
      {
        category: "new-testament-references",
        description: "Profecias citadas no Novo Testamento em referência a Cristo.",
        verses: ["Zacarias 9:9", "Zacarias 11:12-13", "Zacarias 12:10", "Zacarias 13:7"]
      },
      {
        category: "typology",
        description: "A fonte aberta para purificação prefigura o sangue purificador de Cristo.",
        verses: ["Zacarias 13:1"]
      }
    ]
  },
  {
    id: "malachi",
    testament: "old",
    name: "Malaquias",
    shortName: "Mal",
    categories: ["promise-fulfillment", "new-testament-references", "redemptive-historical"],
    description: "Repreensões, avisos e a promessa da vinda do mensageiro do Senhor.",
    christPointers: [
      {
        category: "promise-fulfillment",
        description: "A profecia sobre o mensageiro que prepararia o caminho cumprida em João Batista antes de Cristo.",
        verses: ["Malaquias 3:1", "Malaquias 4:5-6"]
      },
      {
        category: "new-testament-references",
        description: "A referência ao 'sol da justiça' aplicada a Cristo como a luz do mundo.",
        verses: ["Malaquias 4:2"]
      },
      {
        category: "redemptive-historical",
        description: "O prenúncio do 'dia do Senhor' aponta para a primeira e segunda vindas de Cristo.",
        verses: ["Malaquias 3:1-5", "Malaquias 4:1-6"]
      },
      {
        category: "contrast",
        description: "O contraste entre o sacerdócio corrupto e o 'mensageiro da aliança' puro que viria purificar.",
        verses: ["Malaquias 1:6-14", "Malaquias 2:1-9", "Malaquias 3:1-4"]
      }
    ]
  },
  
  // Novo Testamento - Evangelhos
  {
    id: "matthew",
    testament: "new",
    name: "Mateus",
    shortName: "Mat",
    categories: ["new-testament-references", "promise-fulfillment"],
    description: "Apresenta Jesus como o prometido Messias e Rei dos judeus.",
    christPointers: [
      {
        category: "promise-fulfillment",
        description: "Mateus frequentemente nota como Jesus cumpriu as profecias do Antigo Testamento.",
        verses: ["Mateus 1:22-23", "Mateus 2:15", "Mateus 8:17"]
      },
      {
        category: "new-testament-references",
        description: "Conecta explicitamente Jesus às profecias do Antigo Testamento sobre o Messias.",
        verses: ["Mateus 5:17-18"]
      },
      {
        category: "redemptive-historical",
        description: "Apresenta a genealogia de Jesus como cumprimento das promessas a Abraão e Davi.",
        verses: ["Mateus 1:1-17"]
      },
      {
        category: "longitudinal-themes",
        description: "Apresenta Jesus como o novo Moisés que dá a nova lei no Sermão do Monte.",
        verses: ["Mateus 5-7"]
      }
    ]
  },
  {
    id: "mark",
    testament: "new",
    name: "Marcos",
    shortName: "Mar",
    categories: ["typology", "redemptive-historical"],
    description: "Retrata Jesus como o Servo sofredor e poderoso Filho de Deus.",
    christPointers: [
      {
        category: "typology",
        description: "Apresenta Jesus como o Servo do Senhor, conectando-o aos Cânticos do Servo em Isaías.",
        verses: ["Marcos 10:45"]
      },
      {
        category: "redemptive-historical",
        description: "Enfatiza o reino de Deus que irrompe na história através de Jesus.",
        verses: ["Marcos 1:14-15"]
      },
      {
        category: "new-testament-references",
        description: "Cita o Antigo Testamento para mostrar Jesus como cumprimento das Escrituras.",
        verses: ["Marcos 1:2-3", "Marcos 7:6-7"]
      }
    ]
  },
  {
    id: "luke",
    testament: "new",
    name: "Lucas",
    shortName: "Luc",
    categories: ["redemptive-historical", "promise-fulfillment", "longitudinal-themes"],
    description: "Apresenta Jesus como o Salvador para todas as pessoas.",
    christPointers: [
      {
        category: "redemptive-historical",
        description: "Situa a vida de Jesus no contexto da história mundial e do plano redentor de Deus.",
        verses: ["Lucas 2:1-7", "Lucas 3:1-6"]
      },
      {
        category: "promise-fulfillment",
        description: "Mostra como Jesus cumpre as promessas a Israel e traz salvação para todas as nações.",
        verses: ["Lucas 1:46-55", "Lucas 2:29-32"]
      },
      {
        category: "longitudinal-themes",
        description: "Desenvolve o tema do Espírito Santo que unge Jesus e posteriormente a Igreja.",
        verses: ["Lucas 3:21-22", "Lucas 4:18-19"]
      },
      {
        category: "typology",
        description: "Apresenta Jesus como o novo Adão através de sua genealogia.",
        verses: ["Lucas 3:23-38"]
      }
    ]
  },
  {
    id: "john",
    testament: "new",
    name: "João",
    shortName: "João",
    categories: ["typology", "longitudinal-themes", "new-testament-references"],
    description: "Revela Jesus como o Verbo eterno de Deus e o Cristo, o Filho de Deus.",
    christPointers: [
      {
        category: "typology",
        description: "Usa imagens do Antigo Testamento como água, pão, pastor e luz para revelar a identidade de Jesus.",
        verses: ["João 4:10-14", "João 6:35-51", "João 8:12", "João 10:1-18"]
      },
      {
        category: "longitudinal-themes",
        description: "Apresenta Jesus como a plena revelação de Deus, o clímax da auto-revelação progressiva de Deus.",
        verses: ["João 1:1-18", "João 14:6-11"]
      },
      {
        category: "new-testament-references",
        description: "Mostra como Jesus cumpre as festas e instituições judaicas.",
        verses: ["João 1:29", "João 2:19-22", "João 7:37-39"]
      },
      {
        category: "promise-fulfillment",
        description: "Conecta Jesus às profecias e expectativas messiânicas.",
        verses: ["João 1:45", "João 5:46"]
      }
    ]
  },
  {
    id: "acts",
    testament: "new",
    name: "Atos",
    shortName: "Atos",
    categories: ["redemptive-historical", "promise-fulfillment", "new-testament-references"],
    description: "Registra a continuação da obra de Jesus através do Espírito Santo na expansão da Igreja.",
    christPointers: [
      {
        category: "redemptive-historical",
        description: "Mostra como o evangelho se expande de Jerusalém para os confins da terra, cumprindo o plano de Deus.",
        verses: ["Atos 1:8", "Atos 2:1-41"]
      },
      {
        category: "promise-fulfillment",
        description: "Mostra o derramamento do Espírito como cumprimento da promessa de Jesus e das profecias do Antigo Testamento.",
        verses: ["Atos 2:14-41"]
      },
      {
        category: "new-testament-references",
        description: "Os sermões frequentemente interpretam o Antigo Testamento à luz de Cristo.",
        verses: ["Atos 2:25-36", "Atos 3:17-26", "Atos 7:1-53"]
      },
      {
        category: "longitudinal-themes",
        description: "Desenvolve o tema do reino de Deus que continua a se expandir após a ascensão de Cristo.",
        verses: ["Atos 1:3", "Atos 8:12", "Atos 28:23-31"]
      }
    ]
  },
  
  // Epístolas Paulinas
  {
    id: "romans",
    testament: "new",
    name: "Romanos",
    shortName: "Rom",
    categories: ["redemptive-historical", "promise-fulfillment", "analogy"],
    description: "A obra-prima teológica de Paulo explicando o evangelho de Cristo.",
    christPointers: [
      {
        category: "redemptive-historical",
        description: "Traça o plano redentor de Deus de Adão a Cristo.",
        verses: ["Romanos 5:12-21"]
      },
      {
        category: "promise-fulfillment",
        description: "Mostra como Cristo cumpre as promessas de Deus a Israel.",
        verses: ["Romanos 9-11"]
      },
      {
        category: "analogy",
        description: "Apresenta Cristo como o segundo Adão que reverte os efeitos do primeiro Adão.",
        verses: ["Romanos 5:12-21"]
      },
      {
        category: "new-testament-references",
        description: "Interpreta extensivamente as Escrituras do Antigo Testamento à luz de Cristo.",
        verses: ["Romanos 3:9-20", "Romanos 4:1-25", "Romanos 10:5-21"]
      }
    ]
  },
  {
    id: "1corinthians",
    testament: "new",
    name: "1 Coríntios",
    shortName: "1 Cor",
    categories: ["typology", "analogy", "redemptive-historical"],
    description: "Aborda problemas na igreja de Corinto e ensina sobre a sabedoria de Deus em Cristo.",
    christPointers: [
      {
        category: "typology",
        description: "Usa eventos do Antigo Testamento como tipos que apontam para realidades em Cristo.",
        verses: ["1 Coríntios 10:1-13"]
      },
      {
        category: "analogy",
        description: "Apresenta Cristo como a verdadeira páscoa e primícias da ressurreição.",
        verses: ["1 Coríntios 5:7", "1 Coríntios 15:20-23"]
      },
      {
        category: "redemptive-historical",
        description: "Situa Cristo como o clímax da história redentora e o fundamento da nova criação.",
        verses: ["1 Coríntios 15:20-28", "1 Coríntios 15:45-49"]
      },
      {
        category: "contrast",
        description: "Contrasta a sabedoria do mundo com a verdadeira sabedoria de Deus revelada em Cristo.",
        verses: ["1 Coríntios 1:18-2:16"]
      }
    ]
  },
  {
    id: "2corinthians",
    testament: "new",
    name: "2 Coríntios",
    shortName: "2 Cor",
    categories: ["contrast", "longitudinal-themes", "promise-fulfillment"],
    description: "Defesa do apostolado de Paulo e ensinamentos sobre ministério e generosidade.",
    christPointers: [
      {
        category: "contrast",
        description: "Contrasta o ministério da morte na antiga aliança com o ministério do Espírito na nova aliança em Cristo.",
        verses: ["2 Coríntios 3:4-18"]
      },
      {
        category: "longitudinal-themes",
        description: "Desenvolve o tema da nova criação inaugurada em Cristo.",
        verses: ["2 Coríntios 5:17"]
      },
      {
        category: "promise-fulfillment",
        description: "Apresenta Cristo como o 'sim' a todas as promessas de Deus.",
        verses: ["2 Coríntios 1:19-20"]
      },
      {
        category: "typology",
        description: "Usa o véu de Moisés como tipo que encontra seu antitipo em Cristo.",
        verses: ["2 Coríntios 3:12-18"]
      }
    ]
  },
  {
    id: "galatians",
    testament: "new",
    name: "Gálatas",
    shortName: "Gál",
    categories: ["promise-fulfillment", "redemptive-historical", "analogy"],
    description: "Defesa da justificação pela fé contra o legalismo.",
    christPointers: [
      {
        category: "promise-fulfillment",
        description: "Mostra como Cristo é o cumprimento da promessa a Abraão.",
        verses: ["Gálatas 3:8-14", "Gálatas 3:15-29"]
      },
      {
        category: "redemptive-historical",
        description: "Apresenta a lei como tutor temporário até a vinda de Cristo.",
        verses: ["Gálatas 3:19-25", "Gálatas 4:1-7"]
      },
      {
        category: "analogy",
        description: "Usa a alegoria de Sara e Agar para contrastar as alianças.",
        verses: ["Gálatas 4:21-31"]
      },
      {
        category: "contrast",
        description: "Contrasta a escravidão sob a lei com a liberdade em Cristo.",
        verses: ["Gálatas 2:15-21", "Gálatas 5:1-6"]
      }
    ]
  },
  {
    id: "ephesians",
    testament: "new",
    name: "Efésios",
    shortName: "Efé",
    categories: ["redemptive-historical", "longitudinal-themes", "contrast"],
    description: "A unidade da Igreja em Cristo e a vida na nova comunidade.",
    christPointers: [
      {
        category: "redemptive-historical",
        description: "Apresenta o plano eterno de Deus que culmina em Cristo unindo todas as coisas.",
        verses: ["Efésios 1:3-14", "Efésios 3:1-13"]
      },
      {
        category: "longitudinal-themes",
        description: "Desenvolve o tema do novo templo em Cristo, onde judeus e gentios são unidos.",
        verses: ["Efésios 2:11-22"]
      },
      {
        category: "contrast",
        description: "Contrasta o velho homem com o novo homem em Cristo.",
        verses: ["Efésios 4:17-24"]
      },
      {
        category: "typology",
        description: "Usa o casamento humano como tipo do relacionamento entre Cristo e a Igreja.",
        verses: ["Efésios 5:22-33"]
      }
    ]
  },
  {
    id: "philippians",
    testament: "new",
    name: "Filipenses",
    shortName: "Fil",
    categories: ["typology", "contrast", "longitudinal-themes"],
    description: "Exortação à alegria e humildade em Cristo em meio às dificuldades.",
    christPointers: [
      {
        category: "typology",
        description: "Apresenta Paulo como modelo da vida cruciforme que segue o padrão de Cristo.",
        verses: ["Filipenses 3:4-14"]
      },
      {
        category: "contrast",
        description: "Contrasta a justiça baseada na lei com a justiça baseada na fé em Cristo.",
        verses: ["Filipenses 3:2-11"]
      },
      {
        category: "longitudinal-themes",
        description: "Desenvolve o tema da cidadania celestial em contraste com a terrena.",
        verses: ["Filipenses 3:17-21"]
      },
      {
        category: "typology",
        description: "Apresenta Cristo como o modelo supremo de humildade e serviço.",
        verses: ["Filipenses 2:5-11"]
      }
    ]
  },
  {
    id: "colossians",
    testament: "new",
    name: "Colossenses",
    shortName: "Col",
    categories: ["analogy", "contrast", "longitudinal-themes"],
    description: "A supremacia de Cristo sobre tudo e a vida em união com Ele.",
    christPointers: [
      {
        category: "analogy",
        description: "Apresenta Cristo como a imagem visível do Deus invisível, análogo mas superior a qualquer representação anterior.",
        verses: ["Colossenses 1:15-20"]
      },
      {
        category: "contrast",
        description: "Contrasta a suficiência de Cristo com as filosofias e práticas religiosas humanas.",
        verses: ["Colossenses 2:8-15", "Colossenses 2:16-23"]
      },
      {
        category: "longitudinal-themes",
        description: "Desenvolve o tema da sabedoria encontrada plenamente em Cristo.",
        verses: ["Colossenses 2:1-5"]
      },
      {
        category: "typology",
        description: "Apresenta a circuncisão física como tipo da circuncisão espiritual em Cristo.",
        verses: ["Colossenses 2:11-12"]
      }
    ]
  },
  {
    id: "1thessalonians",
    testament: "new",
    name: "1 Tessalonicenses",
    shortName: "1 Tes",
    categories: ["redemptive-historical", "longitudinal-themes"],
    description: "Encorajamento à igreja perseguida e ensinamentos sobre a volta de Cristo.",
    christPointers: [
      {
        category: "redemptive-historical",
        description: "Apresenta a segunda vinda de Cristo como o clímax da história redentora.",
        verses: ["1 Tessalonicenses 4:13-5:11"]
      },
      {
        category: "longitudinal-themes",
        description: "Desenvolve o tema da santificação como obra contínua de Cristo no crente.",
        verses: ["1 Tessalonicenses 4:1-12", "1 Tessalonicenses 5:23-24"]
      },
      {
        category: "analogy",
        description: "Usa a linguagem do Dia do Senhor do Antigo Testamento e a aplica à volta de Cristo.",
        verses: ["1 Tessalonicenses 5:1-11"]
      }
    ]
  },
  {
    id: "2thessalonians",
    testament: "new",
    name: "2 Tessalonicenses",
    shortName: "2 Tes",
    categories: ["longitudinal-themes", "contrast"],
    description: "Mais ensinamentos sobre a segunda vinda de Cristo e a apostasia.",
    christPointers: [
      {
        category: "longitudinal-themes",
        description: "Continua o tema escatológico da vinda de Cristo como juiz e redentor.",
        verses: ["2 Tessalonicenses 1:5-12"]
      },
      {
        category: "contrast",
        description: "Contrasta Cristo com o 'homem da iniquidade'.",
        verses: ["2 Tessalonicenses 2:1-12"]
      },
      {
        category: "redemptive-historical",
        description: "Situa a segunda vinda de Cristo como o evento que trará a plena revelação da justiça de Deus.",
        verses: ["2 Tessalonicenses 1:5-10"]
      }
    ]
  },
  {
    id: "1timothy",
    testament: "new",
    name: "1 Timóteo",
    shortName: "1 Tim",
    categories: ["longitudinal-themes", "analogy"],
    description: "Instruções para Timóteo sobre a liderança da igreja e o combate às falsas doutrinas.",
    christPointers: [
      {
        category: "longitudinal-themes",
        description: "Desenvolve o tema da igreja como 'casa de Deus', onde Cristo é a verdade central.",
        verses: ["1 Timóteo 3:14-16"]
      },
      {
        category: "analogy",
        description: "Apresenta Cristo como o único mediador entre Deus e os homens, analogamente mas superior aos mediadores do Antigo Testamento.",
        verses: ["1 Timóteo 2:5-6"]
      },
      {
        category: "redemptive-historical",
        description: "Apresenta o evangelho como a culminação do plano redentor de Deus.",
        verses: ["1 Timóteo 1:12-17"]
      }
    ]
  },
  {
    id: "2timothy",
    testament: "new",
    name: "2 Timóteo",
    shortName: "2 Tim",
    categories: ["typology", "longitudinal-themes", "redemptive-historical"],
    description: "Exortações finais de Paulo a Timóteo antes de sua morte.",
    christPointers: [
      {
        category: "typology",
        description: "Apresenta Paulo como modelo para Timóteo, assim como Cristo é modelo para todos os crentes.",
        verses: ["2 Timóteo 3:10-14"]
      },
      {
        category: "longitudinal-themes",
        description: "Desenvolve o tema da perseverança fiel até o fim, seguindo o exemplo de Cristo.",
        verses: ["2 Timóteo 2:1-13"]
      },
      {
        category: "redemptive-historical",
        description: "Situa a morte e ressurreição de Cristo como o fundamento do evangelho a ser preservado.",
        verses: ["2 Timóteo 2:8-13", "2 Timóteo 1:8-12"]
      }
    ]
  },
  {
    id: "titus",
    testament: "new",
    name: "Tito",
    shortName: "Tit",
    categories: ["promise-fulfillment", "longitudinal-themes"],
    description: "Instruções para Tito sobre estabelecer líderes e ensinar a sã doutrina em Creta.",
    christPointers: [
      {
        category: "promise-fulfillment",
        description: "Apresenta a manifestação de Cristo como o cumprimento da esperança prometida por Deus.",
        verses: ["Tito 2:11-14", "Tito 3:4-7"]
      },
      {
        category: "longitudinal-themes",
        description: "Desenvolve o tema da graça que ensina a viver de maneira piedosa.",
        verses: ["Tito 2:11-14"]
      },
      {
        category: "contrast",
        description: "Contrasta as boas obras que fluem da graça com a tentativa de justificação pelas obras da lei.",
        verses: ["Tito 3:4-8"]
      }
    ]
  },
  {
    id: "philemon",
    testament: "new",
    name: "Filemom",
    shortName: "Fil",
    categories: ["analogy", "typology"],
    description: "Carta pessoal pedindo a Filemom que receba de volta seu escravo Onésimo como irmão.",
    christPointers: [
      {
        category: "analogy",
        description: "Paulo como intercessor por Onésimo é análogo a Cristo como nosso intercessor.",
        verses: ["Filemom 1:8-20"]
      },
      {
        category: "typology",
        description: "A reconciliação entre Filemom e Onésimo é tipo da reconciliação entre Deus e os crentes através de Cristo.",
        verses: ["Filemom 1:15-16"]
      },
      {
        category: "longitudinal-themes",
        description: "O tema da transformação de relacionamentos pela graça de Cristo.",
        verses: ["Filemom 1:15-16"]
      }
    ]
  },
  {
    id: "hebrews",
    testament: "new",
    name: "Hebreus",
    shortName: "Heb",
    categories: ["typology", "contrast", "new-testament-references"],
    description: "Demonstra a superioridade de Cristo sobre as instituições e figuras do Antigo Testamento.",
    christPointers: [
      {
        category: "contrast",
        description: "Cristo é superior aos anjos, a Moisés, ao sacerdócio levítico e à antiga aliança.",
        verses: ["Hebreus 1:4-14", "Hebreus 3:1-6", "Hebreus 7-10"]
      },
      {
        category: "typology",
        description: "Melquisedeque como tipo do sacerdócio eterno de Cristo.",
        verses: ["Hebreus 7:1-28"]
      },
      {
        category: "new-testament-references",
        description: "Interpreta extensivamente as Escrituras do Antigo Testamento à luz de Cristo.",
        verses: ["Hebreus 1:5-14", "Hebreus 2:5-18", "Hebreus 10:1-18"]
      },
      {
        category: "typology",
        description: "O sistema sacrificial e o tabernáculo como tipos que apontam para a obra de Cristo.",
        verses: ["Hebreus 9:1-28", "Hebreus 10:1-18"]
      }
    ]
  },
  {
    id: "james",
    testament: "new",
    name: "Tiago",
    shortName: "Tia",
    categories: ["longitudinal-themes", "analogy"],
    description: "Exortações práticas sobre a fé que se manifesta em obras.",
    christPointers: [
      {
        category: "longitudinal-themes",
        description: "Desenvolve o tema da lei cumprida e aplicada à luz dos ensinamentos de Cristo.",
        verses: ["Tiago 1:22-25", "Tiago 2:8-13"]
      },
      {
        category: "analogy",
        description: "Usa exemplos do Antigo Testamento de maneira análoga à vida cristã.",
        verses: ["Tiago 2:21-25", "Tiago 5:10-11", "Tiago 5:17-18"]
      },
      {
        category: "new-testament-references",
        description: "Faz alusões aos ensinamentos de Jesus, especialmente do Sermão do Monte.",
        verses: ["Tiago 1:2-4", "Tiago 4:11-12", "Tiago 5:12"]
      }
    ]
  },
  {
    id: "1peter",
    testament: "new",
    name: "1 Pedro",
    shortName: "1 Pe",
    categories: ["typology", "new-testament-references", "longitudinal-themes"],
    description: "Encorajamento aos cristãos que enfrentam perseguição.",
    christPointers: [
      {
        category: "typology",
        description: "Usa imagens do êxodo e do templo aplicadas à igreja como povo de Deus em Cristo.",
        verses: ["1 Pedro 1:13-21", "1 Pedro 2:4-10"]
      },
      {
        category: "new-testament-references",
        description: "Interpreta as profecias do Antigo Testamento à luz de Cristo.",
        verses: ["1 Pedro 1:10-12", "1 Pedro 2:21-25"]
      },
      {
        category: "longitudinal-themes",
        description: "Desenvolve o tema do sofrimento seguido de glória baseado no padrão de Cristo.",
        verses: ["1 Pedro 1:3-12", "1 Pedro 4:12-19", "1 Pedro 5:1-11"]
      },
      {
        category: "typology",
        description: "Apresenta o dilúvio no tempo de Noé como tipo do batismo.",
        verses: ["1 Pedro 3:18-22"]
      }
    ]
  },
  {
    id: "2peter",
    testament: "new",
    name: "2 Pedro",
    shortName: "2 Pe",
    categories: ["redemptive-historical", "longitudinal-themes"],
    description: "Advertências contra falsos mestres e lembrete da volta de Cristo.",
    christPointers: [
      {
        category: "redemptive-historical",
        description: "Situa a segunda vinda de Cristo como o clímax da história redentora e início da nova criação.",
        verses: ["2 Pedro 3:1-13"]
      },
      {
        category: "longitudinal-themes",
        description: "Desenvolve o tema do crescimento no conhecimento de Cristo.",
        verses: ["2 Pedro 1:3-11", "2 Pedro 3:18"]
      },
      {
        category: "contrast",
        description: "Contrasta o conhecimento verdadeiro de Cristo com os falsos ensinamentos.",
        verses: ["2 Pedro 2:1-22"]
      }
    ]
  },
  {
    id: "1john",
    testament: "new",
    name: "1 João",
    shortName: "1 João",
    categories: ["contrast", "longitudinal-themes"],
    description: "Testes da vida cristã autêntica: crer em Cristo e amar uns aos outros.",
    christPointers: [
      {
        category: "contrast",
        description: "Contrasta a verdade sobre Cristo com as falsas doutrinas.",
        verses: ["1 João 2:18-27", "1 João 4:1-6"]
      },
      {
        category: "longitudinal-themes",
        description: "Desenvolve o tema do amor como expressão da nova vida em Cristo.",
        verses: ["1 João 3:11-24", "1 João 4:7-21"]
      },
      {
        category: "longitudinal-themes",
        description: "Desenvolve o tema da comunhão com Deus através de Cristo.",
        verses: ["1 João 1:1-4", "1 João 5:11-13"]
      }
    ]
  },
  {
    id: "2john",
    testament: "new",
    name: "2 João",
    shortName: "2 João",
    categories: ["contrast", "longitudinal-themes"],
    description: "Breve carta exortando a permanecer na verdade e amor, e a rejeitar falsos mestres.",
    christPointers: [
      {
        category: "contrast",
        description: "Contrasta a verdade sobre Cristo encarnado com as falsas doutrinas.",
        verses: ["2 João 1:7-11"]
      },
      {
        category: "longitudinal-themes",
        description: "Desenvolve o tema de andar na verdade e no amor como mandamento de Cristo.",
        verses: ["2 João 1:4-6"]
      }
    ]
  },
  {
    id: "3john",
    testament: "new",
    name: "3 João",
    shortName: "3 João",
    categories: ["typology", "longitudinal-themes"],
    description: "Breve carta elogiando Gaio por sua hospitalidade e advertindo contra Diótrefes.",
    christPointers: [
      {
        category: "typology",
        description: "Gaio como exemplo de hospitalidade cristã que reflete a generosidade de Cristo.",
        verses: ["3 João 1:5-8"]
      },
      {
        category: "longitudinal-themes",
        description: "Desenvolve o tema de cooperar com a verdade como aplicação da vida em Cristo.",
        verses: ["3 João 1:3-4", "3 João 1:11-12"]
      }
    ]
  },
  {
    id: "jude",
    testament: "new",
    name: "Judas",
    shortName: "Jud",
    categories: ["typology", "redemptive-historical"],
    description: "Exortação a lutar pela fé contra falsos mestres.",
    christPointers: [
      {
        category: "typology",
        description: "Usa exemplos do Antigo Testamento como tipos de juízo que prefiguram o juízo final de Cristo.",
        verses: ["Judas 1:5-7", "Judas 1:11"]
      },
      {
        category: "redemptive-historical",
        description: "Situa a preservação dos crentes como obra de Cristo até sua vinda gloriosa.",
        verses: ["Judas 1:14-15", "Judas 1:24-25"]
      },
      {
        category: "longitudinal-themes",
        description: "Desenvolve o tema da apostasia em contraste com a fidelidade à fé em Cristo.",
        verses: ["Judas 1:3-4", "Judas 1:17-23"]
      }
    ]
  },
  {
    id: "revelation",
    testament: "new",
    name: "Apocalipse",
    shortName: "Apoc",
    categories: ["typology", "redemptive-historical", "longitudinal-themes"],
    description: "Visão apocalíptica da vitória final de Cristo e a consumação de todas as coisas.",
    christPointers: [
      {
        category: "typology",
        description: "Usa imagens do Antigo Testamento (templo, Babilônia, êxodo, etc.) como tipos que encontram seu cumprimento em Cristo.",
        verses: ["Apocalipse 1:12-20", "Apocalipse 5:1-14", "Apocalipse 21:1-22:5"]
      },
      {
        category: "redemptive-historical",
        description: "Apresenta a história redentora culminando na vitória final de Cristo e na nova criação.",
        verses: ["Apocalipse 19:11-21", "Apocalipse 21:1-8"]
      },
      {
        category: "longitudinal-themes",
        description: "Desenvolve os temas da redenção, juízo, reinado e adoração, todos centrados em Cristo.",
        verses: ["Apocalipse 5:9-14", "Apocalipse 7:9-17", "Apocalipse 11:15-19"]
      },
      {
        category: "contrast",
        description: "Contrasta o reino de Cristo com os reinos deste mundo.",
        verses: ["Apocalipse 13:1-18", "Apocalipse 17:1-18:24", "Apocalipse 19:11-21"]
      }
    ]
  }
];

