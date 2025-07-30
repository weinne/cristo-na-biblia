
export interface Category {
  id: string;
  nameKey: string; // Translation key for the name
  descriptionKey: string; // Translation key for the description
}

export interface Book {
  id: string;
  testament: 'old' | 'new';
  nameKey: string; // Translation key for the name
  shortNameKey: string; // Translation key for the short name
  categories: string[];
  descriptionKey: string; // Translation key for the description
  christPointers: ChristPointer[];
}

export interface ChristPointer {
  category: string;
  descriptionKey: string; // Translation key for the description
  verses: string[];
}

export const categories: Category[] = [
  {
    id: "redemptive-historical",
    nameKey: "category-redemptive-historical",
    descriptionKey: "category-redemptive-historical-desc"
  },
  {
    id: "promise-fulfillment",
    nameKey: "category-promise-fulfillment",
    descriptionKey: "category-promise-fulfillment-desc"
  },
  {
    id: "typology",
    nameKey: "category-typology",
    descriptionKey: "category-typology-desc"
  },
  {
    id: "analogy",
    nameKey: "category-analogy",
    descriptionKey: "category-analogy-desc"
  },
  {
    id: "longitudinal-themes",
    nameKey: "category-longitudinal-themes",
    descriptionKey: "category-longitudinal-themes-desc"
  },
  {
    id: "new-testament-references",
    nameKey: "category-new-testament-references",
    descriptionKey: "category-new-testament-references-desc"
  },
  {
    id: "contrast",
    nameKey: "category-contrast",
    descriptionKey: "category-contrast-desc"
  }
];

export const books: Book[] = [
  // Antigo Testamento - Pentateuco
  {
    id: "genesis",
    testament: "old",
    nameKey: "book-genesis",
    shortNameKey: "abbr-genesis",
    categories: ["typology", "promise-fulfillment", "redemptive-historical"],
    descriptionKey: "christ-in-genesis",
    christPointers: [
      {
        category: "promise-fulfillment",
        descriptionKey: "genesis-promise-seed",
        verses: ["Gênesis 3:15"]
      },
      {
        category: "typology",
        descriptionKey: "genesis-isaac-sacrifice",
        verses: ["Gênesis 22:1-14"]
      },
      {
        category: "typology",
        descriptionKey: "genesis-joseph-type",
        verses: ["Gênesis 37-50"]
      },
      {
        category: "longitudinal-themes",
        descriptionKey: "genesis-creation-theme",
        verses: ["Gênesis 1-2"]
      },
      {
        category: "promise-fulfillment",
        descriptionKey: "genesis-abraham-promise",
        verses: ["Gênesis 12:1-3", "Gênesis 22:18"]
      }
    ]
  },
  {
    id: "exodus",
    testament: "old",
    nameKey: "book-exodus",
    shortNameKey: "abbr-exodus",
    categories: ["typology", "redemptive-historical", "longitudinal-themes"],
    descriptionKey: "christ-in-exodus",
    christPointers: [
      {
        category: "typology",
        descriptionKey: "exodus-passover-lamb",
        verses: ["Êxodo 12:1-28"]
      },
      {
        category: "typology",
        descriptionKey: "exodus-moses-mediator",
        verses: ["Êxodo 3:10", "Êxodo 20:19-21"]
      },
      {
        category: "longitudinal-themes",
        descriptionKey: "exodus-redemption-theme",
        verses: ["Êxodo 6:6-8"]
      },
      {
        category: "typology",
        descriptionKey: "exodus-manna-bread",
        verses: ["Êxodo 16:1-36"]
      },
      {
        category: "typology",
        descriptionKey: "exodus-tabernacle-dwelling",
        verses: ["Êxodo 25-40"]
      }
    ]
  },
  {
    id: "leviticus",
    testament: "old",
    nameKey: "book-leviticus",
    shortNameKey: "abbr-leviticus",
    categories: ["typology", "contrast"],
    descriptionKey: "christ-in-leviticus",
    christPointers: [
      {
        category: "typology",
        descriptionKey: "leviticus-sacrificial-system",
        verses: ["Levítico 16:1-34"]
      },
      {
        category: "contrast",
        descriptionKey: "leviticus-repetitive-contrast",
        verses: ["Levítico 1-7"]
      },
      {
        category: "typology",
        descriptionKey: "leviticus-day-atonement",
        verses: ["Levítico 16"]
      },
      {
        category: "longitudinal-themes",
        descriptionKey: "leviticus-holiness-theme",
        verses: ["Levítico 11:44-45", "Levítico 19:2"]
      }
    ]
  },
  {
    id: "numbers",
    testament: "old",
    nameKey: "book-numbers",
    shortNameKey: "abbr-numbers",
    categories: ["typology", "longitudinal-themes"],
    descriptionKey: "christ-in-numbers",
    christPointers: [
      {
        category: "typology",
        descriptionKey: "numbers-bronze-serpent",
        verses: ["Números 21:4-9"]
      },
      {
        category: "typology",
        descriptionKey: "numbers-rock-water",
        verses: ["Números 20:1-13"]
      },
      {
        category: "longitudinal-themes",
        descriptionKey: "numbers-provision-theme",
        verses: ["Números 11:1-35"]
      },
      {
        category: "redemptive-historical",
        descriptionKey: "numbers-priestly-blessing",
        verses: ["Números 6:22-27"]
      }
    ]
  },
  {
    id: "deuteronomy",
    testament: "old",
    nameKey: "book-deuteronomy",
    shortNameKey: "abbr-deuteronomy",
    categories: ["promise-fulfillment", "typology", "longitudinal-themes"],
    descriptionKey: "christ-in-deuteronomy",
    christPointers: [
      {
        category: "promise-fulfillment",
        descriptionKey: "deuteronomy-prophet-promise",
        verses: ["Deuteronômio 18:15-19"]
      },
      {
        category: "typology",
        descriptionKey: "deuteronomy-promised-land",
        verses: ["Deuteronômio 3:18-20"]
      },
      {
        category: "longitudinal-themes",
        descriptionKey: "deuteronomy-law-obedience",
        verses: ["Deuteronômio 6:4-9", "Deuteronômio 30:11-14"]
      },
      {
        category: "redemptive-historical",
        descriptionKey: "deuteronomy-blessings-curses",
        verses: ["Deuteronômio 28-30"]
      }
    ]
  },
  
  // Livros Históricos
  {
    id: "joshua",
    testament: "old",
    nameKey: "book-joshua",
    shortNameKey: "abbr-joshua",
    categories: ["typology", "redemptive-historical"],
    descriptionKey: "christ-in-joshua",
    christPointers: [
      {
        category: "typology",
        descriptionKey: "joshua-leader-type",
        verses: ["Josué 1:1-9"]
      },
      {
        category: "redemptive-historical",
        descriptionKey: "joshua-kingdom-progress",
        verses: ["Josué 21:43-45"]
      },
      {
        category: "typology",
        descriptionKey: "joshua-rahab-type",
        verses: ["Josué 2:1-21", "Josué 6:22-25"]
      }
    ]
  },
  {
    id: "judges",
    testament: "old",
    nameKey: "book-judges",
    shortNameKey: "abbr-judges",
    categories: ["typology", "contrast", "redemptive-historical"],
    descriptionKey: "christ-in-judges",
    christPointers: [
      {
        category: "typology",
        descriptionKey: "judges-liberators-type",
        verses: ["Juízes 2:16-19"]
      },
      {
        category: "contrast",
        descriptionKey: "judges-temporary-contrast",
        verses: ["Juízes 3-16"]
      },
      {
        category: "redemptive-historical",
        descriptionKey: "judges-need-king",
        verses: ["Juízes 17:6", "Juízes 21:25"]
      }
    ]
  },
  {
    id: "ruth",
    testament: "old",
    nameKey: "book-ruth",
    shortNameKey: "abbr-ruth",
    categories: ["redemptive-historical", "typology"],
    descriptionKey: "christ-in-ruth",
    christPointers: [
      {
        category: "typology",
        descriptionKey: "ruth-boaz-redeemer",
        verses: ["Rute 4:1-12"]
      },
      {
        category: "redemptive-historical",
        descriptionKey: "ruth-gentile-inclusion",
        verses: ["Rute 4:13-22"]
      },
      {
        category: "longitudinal-themes",
        descriptionKey: "ruth-redemption-theme",
        verses: ["Rute 3:9", "Rute 4:1-12"]
      }
    ]
  },
  {
    id: "1samuel",
    testament: "old",
    nameKey: "book-1-samuel",
    shortNameKey: "abbr-1-samuel",
    categories: ["typology", "redemptive-historical"],
    descriptionKey: "christ-in-1-samuel",
    christPointers: [
      {
        category: "typology",
        descriptionKey: "1samuel-david-anointed",
        verses: ["1 Samuel 16:1-13"]
      },
      {
        category: "redemptive-historical",
        descriptionKey: "1samuel-kingdom-established",
        verses: ["1 Samuel 13:14", "1 Samuel 16:1-13"]
      },
      {
        category: "typology",
        descriptionKey: "1samuel-david-goliath",
        verses: ["1 Samuel 17"]
      }
    ]
  },
  {
    id: "2samuel",
    testament: "old",
    nameKey: "book-2-samuel",
    shortNameKey: "abbr-2-samuel",
    categories: ["promise-fulfillment", "typology"],
    descriptionKey: "christ-in-2-samuel",
    christPointers: [
      {
        category: "promise-fulfillment",
        descriptionKey: "2samuel-davidic-covenant",
        verses: ["2 Samuel 7:12-16"]
      },
      {
        category: "typology",
        descriptionKey: "2samuel-david-perfect-king",
        verses: ["2 Samuel 5:1-5", "2 Samuel 7:1-17"]
      },
      {
        category: "redemptive-historical",
        descriptionKey: "2samuel-kingdom-foreshadow",
        verses: ["2 Samuel 5-10"]
      }
    ]
  },
  {
    id: "1kings",
    testament: "old",
    nameKey: "book-1-kings",
    shortNameKey: "abbr-1-kings",
    categories: ["typology", "contrast", "redemptive-historical"],
    descriptionKey: "christ-in-1-kings",
    christPointers: [
      {
        category: "typology",
        descriptionKey: "1kings-temple-type",
        verses: ["1 Reis 6-8"]
      },
      {
        category: "contrast",
        descriptionKey: "1kings-solomon-failure",
        verses: ["1 Reis 11:1-13"]
      },
      {
        category: "typology",
        descriptionKey: "1kings-solomon-wisdom",
        verses: ["1 Reis 3:3-28", "1 Reis 4:29-34"]
      }
    ]
  },
  {
    id: "2kings",
    testament: "old",
    nameKey: "book-2-kings",
    shortNameKey: "abbr-2-kings",
    categories: ["contrast", "redemptive-historical"],
    descriptionKey: "christ-in-2-kings",
    christPointers: [
      {
        category: "contrast",
        descriptionKey: "2kings-kings-failure",
        verses: ["2 Reis 17:7-23", "2 Reis 24-25"]
      },
      {
        category: "typology",
        descriptionKey: "2kings-elisha-ministry",
        verses: ["2 Reis 4-5"]
      },
      {
        category: "redemptive-historical",
        descriptionKey: "2kings-exile-restoration",
        verses: ["2 Reis 25:27-30"]
      }
    ]
  },
  {
    id: "1chronicles",
    testament: "old",
    nameKey: "book-1-chronicles",
    shortNameKey: "abbr-1-chronicles",
    categories: ["redemptive-historical", "typology"],
    descriptionKey: "christ-in-1-chronicles",
    christPointers: [
      {
        category: "redemptive-historical",
        descriptionKey: "1chronicles-genealogies-messiah",
        verses: ["1 Crônicas 1-9"]
      },
      {
        category: "typology",
        descriptionKey: "1chronicles-david-worship",
        verses: ["1 Crônicas 15-16"]
      },
      {
        category: "promise-fulfillment",
        descriptionKey: "1chronicles-davidic-promise",
        verses: ["1 Crônicas 17:11-14"]
      }
    ]
  },
  {
    id: "2chronicles",
    testament: "old",
    nameKey: "book-2-chronicles",
    shortNameKey: "abbr-2-chronicles",
    categories: ["longitudinal-themes", "redemptive-historical"],
    descriptionKey: "christ-in-2-chronicles",
    christPointers: [
      {
        category: "longitudinal-themes",
        descriptionKey: "2chronicles-temple-presence",
        verses: ["2 Crônicas 2-7"]
      },
      {
        category: "redemptive-historical",
        descriptionKey: "2chronicles-reform-apostasy",
        verses: ["2 Crônicas 29-31", "2 Crônicas 34-35"]
      },
      {
        category: "redemptive-historical",
        descriptionKey: "2chronicles-cyrus-decree",
        verses: ["2 Crônicas 36:22-23"]
      }
    ]
  },
  {
    id: "ezra",
    testament: "old",
    nameKey: "book-ezra",
    shortNameKey: "abbr-ezra",
    categories: ["redemptive-historical", "typology"],
    descriptionKey: "christ-in-ezra",
    christPointers: [
      {
        category: "redemptive-historical",
        descriptionKey: "ezra-return-from-exile",
        verses: ["Esdras 1:1-4"]
      },
      {
        category: "typology",
        descriptionKey: "ezra-temple-reconstruction",
        verses: ["Esdras 3:8-13", "Esdras 6:13-18"]
      },
      {
        category: "longitudinal-themes",
        descriptionKey: "ezra-covenant-restoration",
        verses: ["Esdras 9-10"]
      }
    ]
  },
  {
    id: "nehemiah",
    testament: "old",
    nameKey: "book-nehemiah",
    shortNameKey: "abbr-nehemiah",
    categories: ["redemptive-historical", "typology"],
    descriptionKey: "christ-in-nehemiah",
    christPointers: [
      {
        category: "redemptive-historical",
        descriptionKey: "nehemiah-jerusalem-restoration",
        verses: ["Neemias 2:1-20"]
      },
      {
        category: "typology",
        descriptionKey: "nehemiah-sacrificial-leadership",
        verses: ["Neemias 5:14-19"]
      },
      {
        category: "longitudinal-themes",
        descriptionKey: "nehemiah-covenant-renewal",
        verses: ["Neemias 8-10"]
      }
    ]
  },
  {
    id: "esther",
    testament: "old",
    nameKey: "book-esther",
    shortNameKey: "abbr-esther",
    categories: ["typology", "redemptive-historical"],
    descriptionKey: "christ-in-esther",
    christPointers: [
      {
        category: "typology",
        descriptionKey: "esther-self-sacrifice",
        verses: ["Ester 4:14-16"]
      },
      {
        category: "redemptive-historical",
        descriptionKey: "esther-people-preservation",
        verses: ["Ester 7:1-10", "Ester 9:20-22"]
      },
      {
        category: "longitudinal-themes",
        descriptionKey: "esther-divine-providence",
        verses: ["Ester 4:14"]
      }
    ]
  },
  
  // Livros Poéticos e de Sabedoria
  {
    id: "job",
    testament: "old",
    nameKey: "book-job",
    shortNameKey: "abbr-job",
    categories: ["typology", "longitudinal-themes", "contrast"],
    descriptionKey: "christ-in-job",
    christPointers: [
      {
        category: "typology",
        descriptionKey: "job-righteous-sufferer",
        verses: ["Jó 1-2", "Jó 16:18-21"]
      },
      {
        category: "longitudinal-themes",
        descriptionKey: "job-redemption-restoration",
        verses: ["Jó 19:25-27", "Jó 42:7-17"]
      },
      {
        category: "contrast",
        descriptionKey: "job-limited-mediator",
        verses: ["Jó 9:32-33", "Jó 16:19-21"]
      }
    ]
  },
  {
    id: "psalms",
    testament: "old",
    nameKey: "book-psalms",
    shortNameKey: "abbr-psalms",
    categories: ["typology", "promise-fulfillment", "new-testament-references"],
    descriptionKey: "christ-in-psalms",
    christPointers: [
      {
        category: "typology",
        descriptionKey: "psalms-messianic-psalms",
        verses: ["Salmos 2", "Salmos 22", "Salmos 110"]
      },
      {
        category: "promise-fulfillment",
        descriptionKey: "psalms-messianic-promises",
        verses: ["Salmos 16:8-11", "Salmos 118:22-23"]
      },
      {
        category: "new-testament-references",
        descriptionKey: "psalms-nt-references",
        verses: ["Salmos 8:4-6", "Salmos 40:6-8", "Salmos 69:9", "Salmos 118:22-23"]
      },
      {
        category: "typology",
        descriptionKey: "psalms-david-type",
        verses: ["Salmos 2", "Salmos 18", "Salmos 45", "Salmos 72"]
      }
    ]
  },
  {
    id: "proverbs",
    testament: "old",
    nameKey: "book-proverbs",
    shortNameKey: "abbr-proverbs",
    categories: ["typology", "longitudinal-themes"],
    descriptionKey: "christ-in-proverbs",
    christPointers: [
      {
        category: "typology",
        descriptionKey: "proverbs-wisdom-personified",
        verses: ["Provérbios 8:22-31"]
      },
      {
        category: "longitudinal-themes",
        descriptionKey: "proverbs-wisdom-theme",
        verses: ["Provérbios 1:1-7", "Provérbios 9:1-6"]
      },
      {
        category: "contrast",
        descriptionKey: "proverbs-wisdom-search",
        verses: ["Provérbios 2:1-15", "Provérbios 4:5-9"]
      }
    ]
  },
  {
    id: "ecclesiastes",
    testament: "old",
    nameKey: "book-ecclesiastes",
    shortNameKey: "abbr-ecclesiastes",
    categories: ["contrast", "longitudinal-themes"],
    descriptionKey: "christ-in-ecclesiastes",
    christPointers: [
      {
        category: "contrast",
        descriptionKey: "ecclesiastes-vanity-contrast",
        verses: ["Eclesiastes 1:2-11", "Eclesiastes 2:1-11"]
      },
      {
        category: "longitudinal-themes",
        descriptionKey: "ecclesiastes-meaning-search",
        verses: ["Eclesiastes 3:1-15", "Eclesiastes 12:13-14"]
      },
      {
        category: "redemptive-historical",
        descriptionKey: "ecclesiastes-wisdom-limitations",
        verses: ["Eclesiastes 8:16-17"]
      }
    ]
  },
  {
    id: "songofsolomon",
    testament: "old",
    nameKey: "book-song-of-solomon",
    shortNameKey: "abbr-song-of-solomon",
    categories: ["typology", "analogy"],
    descriptionKey: "christ-in-song-of-solomon",
    christPointers: [
      {
        category: "typology",
        descriptionKey: "song-bridegroom-bride",
        verses: ["Cânticos 2:8-17", "Cânticos 8:6-7"]
      },
      {
        category: "analogy",
        descriptionKey: "song-love-intimacy",
        verses: ["Cânticos 2:16", "Cânticos 6:3"]
      },
      {
        category: "longitudinal-themes",
        descriptionKey: "song-faithful-love",
        verses: ["Cânticos 8:6-7"]
      }
    ]
  },
  
  // Profetas Maiores
  {
    id: "isaiah",
    testament: "old",
    nameKey: "book-isaiah",
    shortNameKey: "abbr-isaiah",
    categories: ["promise-fulfillment", "typology", "new-testament-references"],
    descriptionKey: "christ-in-isaiah",
    christPointers: [
      {
        category: "promise-fulfillment",
        descriptionKey: "isaiah-messianic-prophecies",
        verses: ["Isaías 7:14", "Isaías 9:1-7", "Isaías 11:1-10", "Isaías 53"]
      },
      {
        category: "typology",
        descriptionKey: "isaiah-suffering-servant",
        verses: ["Isaías 42:1-4", "Isaías 49:1-6", "Isaías 50:4-9", "Isaías 52:13-53:12"]
      },
      {
        category: "new-testament-references",
        descriptionKey: "isaiah-nt-quotations",
        verses: ["Isaías 6:9-10", "Isaías 61:1-2"]
      },
      {
        category: "redemptive-historical",
        descriptionKey: "isaiah-new-creation",
        verses: ["Isaías 65:17-25"]
      }
    ]
  },
  {
    id: "jeremiah",
    testament: "old",
    nameKey: "book-jeremiah",
    shortNameKey: "abbr-jeremiah",
    categories: ["promise-fulfillment", "typology", "redemptive-historical"],
    descriptionKey: "christ-in-jeremiah",
    christPointers: [
      {
        category: "promise-fulfillment",
        descriptionKey: "jeremiah-new-covenant",
        verses: ["Jeremias 31:31-34"]
      },
      {
        category: "typology",
        descriptionKey: "jeremiah-rejected-prophet",
        verses: ["Jeremias 11:18-20", "Jeremias 15:15-21", "Jeremias 20:7-18"]
      },
      {
        category: "redemptive-historical",
        descriptionKey: "jeremiah-judgment-plan",
        verses: ["Jeremias 25:1-14", "Jeremias 29:10-14"]
      },
      {
        category: "promise-fulfillment",
        descriptionKey: "jeremiah-righteous-branch",
        verses: ["Jeremias 23:5-6", "Jeremias 33:14-16"]
      }
    ]
  },
  {
    id: "lamentations",
    testament: "old",
    nameKey: "book-lamentations",
    shortNameKey: "abbr-lamentations",
    categories: ["typology", "redemptive-historical"],
    descriptionKey: "christ-in-lamentations",
    christPointers: [
      {
        category: "typology",
        descriptionKey: "lamentations-prophet-suffering",
        verses: ["Lamentações 1:12", "Lamentações 3:1-20"]
      },
      {
        category: "redemptive-historical",
        descriptionKey: "lamentations-destruction-plan",
        verses: ["Lamentações 4:21-22"]
      },
      {
        category: "longitudinal-themes",
        descriptionKey: "lamentations-gods-faithfulness",
        verses: ["Lamentações 3:21-33"]
      }
    ]
  },
  {
    id: "ezekiel",
    testament: "old",
    nameKey: "book-ezekiel",
    shortNameKey: "abbr-ezekiel",
    categories: ["typology", "promise-fulfillment", "redemptive-historical"],
    descriptionKey: "christ-in-ezekiel",
    christPointers: [
      {
        category: "typology",
        descriptionKey: "ezekiel-priest-prophet-shepherd",
        verses: ["Ezequiel 3:16-21", "Ezequiel 34:11-16"]
      },
      {
        category: "promise-fulfillment",
        descriptionKey: "ezekiel-new-heart-spirit",
        verses: ["Ezequiel 36:24-32"]
      },
      {
        category: "typology",
        descriptionKey: "ezekiel-temple-vision",
        verses: ["Ezequiel 40-48"]
      },
      {
        category: "promise-fulfillment",
        descriptionKey: "ezekiel-david-shepherd",
        verses: ["Ezequiel 34:23-24", "Ezequiel 37:24-28"]
      }
    ]
  },
  {
    id: "daniel",
    testament: "old",
    nameKey: "book-daniel",
    shortNameKey: "abbr-daniel",
    categories: ["typology", "promise-fulfillment", "redemptive-historical"],
    descriptionKey: "christ-in-daniel",
    christPointers: [
      {
        category: "promise-fulfillment",
        descriptionKey: "daniel-son-of-man",
        verses: ["Daniel 7:13-14"]
      },
      {
        category: "typology",
        descriptionKey: "daniel-faithful-man",
        verses: ["Daniel 6"]
      },
      {
        category: "promise-fulfillment",
        descriptionKey: "daniel-seventy-weeks",
        verses: ["Daniel 9:24-27"]
      },
      {
        category: "redemptive-historical",
        descriptionKey: "daniel-eternal-kingdom",
        verses: ["Daniel 2:31-45", "Daniel 7:1-14"]
      }
    ]
  },
  
  // Profetas Menores
  {
    id: "hosea",
    testament: "old",
    nameKey: "book-hosea",
    shortNameKey: "abbr-hosea",
    categories: ["typology", "analogy", "new-testament-references"],
    descriptionKey: "christ-in-hosea",
    christPointers: [
      {
        category: "typology",
        descriptionKey: "hosea-marriage-typology",
        verses: ["Oséias 1-3"]
      },
      {
        category: "analogy",
        descriptionKey: "hosea-love-analogy",
        verses: ["Oséias 11:1", "Oséias 14:4-7"]
      },
      {
        category: "new-testament-references",
        descriptionKey: "hosea-egypt-son",
        verses: ["Oséias 11:1"]
      },
      {
        category: "promise-fulfillment",
        descriptionKey: "hosea-restoration-promise",
        verses: ["Oséias 13:14", "Oséias 14:1-9"]
      }
    ]
  },
  {
    id: "joel",
    testament: "old",
    nameKey: "book-joel",
    shortNameKey: "abbr-joel",
    categories: ["promise-fulfillment", "new-testament-references", "redemptive-historical"],
    descriptionKey: "christ-in-joel",
    christPointers: [
      {
        category: "promise-fulfillment",
        descriptionKey: "joel-spirit-outpouring",
        verses: ["Joel 2:28-32"]
      },
      {
        category: "new-testament-references",
        descriptionKey: "joel-salvation-call",
        verses: ["Joel 2:32"]
      },
      {
        category: "redemptive-historical",
        descriptionKey: "joel-day-lord",
        verses: ["Joel 2:1-11", "Joel 3:1-16"]
      }
    ]
  },
  {
    id: "amos",
    testament: "old",
    nameKey: "book-amos",
    shortNameKey: "abbr-amos",
    categories: ["promise-fulfillment", "redemptive-historical", "contrast"],
    descriptionKey: "christ-in-amos",
    christPointers: [
      {
        category: "promise-fulfillment",
        descriptionKey: "amos-tabernacle-david",
        verses: ["Amós 9:11-15"]
      },
      {
        category: "redemptive-historical",
        descriptionKey: "amos-judgment-redemptive",
        verses: ["Amós 3:1-15", "Amós 9:8-10"]
      },
      {
        category: "contrast",
        descriptionKey: "amos-justice-contrast",
        verses: ["Amós 5:21-24"]
      }
    ]
  },
  {
    id: "obadiah",
    testament: "old",
    nameKey: "book-obadiah",
    shortNameKey: "abbr-obadiah",
    categories: ["redemptive-historical", "longitudinal-themes"],
    descriptionKey: "christ-in-obadiah",
    christPointers: [
      {
        category: "redemptive-historical",
        descriptionKey: "obadiah-edom-judgment",
        verses: ["Obadias 1:15-16"]
      },
      {
        category: "longitudinal-themes",
        descriptionKey: "obadiah-kingdom-triumph",
        verses: ["Obadias 1:17-21"]
      },
      {
        category: "typology",
        descriptionKey: "obadiah-enmity-conflict",
        verses: ["Obadias 1:10-14"]
      }
    ]
  },
  {
    id: "jonah",
    testament: "old",
    nameKey: "book-jonah",
    shortNameKey: "abbr-jonah",
    categories: ["typology", "new-testament-references", "redemptive-historical"],
    descriptionKey: "christ-in-jonah",
    christPointers: [
      {
        category: "typology",
        descriptionKey: "jonah-three-days",
        verses: ["Jonas 1:17-2:10"]
      },
      {
        category: "new-testament-references",
        descriptionKey: "jonah-sign-reference",
        verses: ["Jonas 1:17"]
      },
      {
        category: "redemptive-historical",
        descriptionKey: "jonah-gentiles-mercy",
        verses: ["Jonas 3:1-10", "Jonas 4:1-11"]
      }
    ]
  },
  {
    id: "micah",
    testament: "old",
    nameKey: "book-micah",
    shortNameKey: "abbr-micah",
    categories: ["promise-fulfillment", "new-testament-references", "redemptive-historical"],
    descriptionKey: "christ-in-micah",
    christPointers: [
      {
        category: "promise-fulfillment",
        descriptionKey: "micah-bethlehem-birth",
        verses: ["Miquéias 5:2"]
      },
      {
        category: "new-testament-references",
        descriptionKey: "micah-bethlehem-citation",
        verses: ["Miquéias 5:2"]
      },
      {
        category: "redemptive-historical",
        descriptionKey: "micah-ruler-shepherd",
        verses: ["Miquéias 5:4-5"]
      },
      {
        category: "analogy",
        descriptionKey: "micah-forgiveness-seas",
        verses: ["Miquéias 7:18-20"]
      }
    ]
  },
  {
    id: "nahum",
    testament: "old",
    nameKey: "book-nahum",
    shortNameKey: "abbr-nahum",
    categories: ["redemptive-historical", "analogy"],
    descriptionKey: "christ-in-nahum",
    christPointers: [
      {
        category: "redemptive-historical",
        descriptionKey: "nahum-nineveh-judgment",
        verses: ["Naum 1:1-8", "Naum 3:1-19"]
      },
      {
        category: "analogy",
        descriptionKey: "nahum-god-character",
        verses: ["Naum 1:7-8"]
      },
      {
        category: "longitudinal-themes",
        descriptionKey: "nahum-divine-judgment",
        verses: ["Naum 1:2-6"]
      }
    ]
  },
  {
    id: "habakkuk",
    testament: "old",
    nameKey: "book-habakkuk",
    shortNameKey: "abbr-habakkuk",
    categories: ["new-testament-references", "redemptive-historical", "longitudinal-themes"],
    descriptionKey: "christ-in-habakkuk",
    christPointers: [
      {
        category: "new-testament-references",
        descriptionKey: "habakkuk-just-by-faith",
        verses: ["Habacuque 2:4"]
      },
      {
        category: "redemptive-historical",
        descriptionKey: "habakkuk-justice-tension",
        verses: ["Habacuque 1:1-17"]
      },
      {
        category: "longitudinal-themes",
        descriptionKey: "habakkuk-faith-trust",
        verses: ["Habacuque 3:16-19"]
      }
    ]
  },
  {
    id: "zephaniah",
    testament: "old",
    nameKey: "book-zephaniah",
    shortNameKey: "abbr-zephaniah",
    categories: ["redemptive-historical", "promise-fulfillment"],
    descriptionKey: "christ-in-zephaniah",
    christPointers: [
      {
        category: "redemptive-historical",
        descriptionKey: "zephaniah-day-lord-dual",
        verses: ["Sofonias 1:7-18", "Sofonias 3:8-13"]
      },
      {
        category: "promise-fulfillment",
        descriptionKey: "zephaniah-restoration-joy",
        verses: ["Sofonias 3:14-20"]
      },
      {
        category: "typology",
        descriptionKey: "zephaniah-remnant-faithful",
        verses: ["Sofonias 3:12-13"]
      }
    ]
  },
  {
    id: "haggai",
    testament: "old",
    nameKey: "book-haggai",
    shortNameKey: "abbr-haggai",
    categories: ["typology", "promise-fulfillment", "redemptive-historical"],
    descriptionKey: "christ-in-haggai",
    christPointers: [
      {
        category: "typology",
        descriptionKey: "haggai-temple-rebuild",
        verses: ["Ageu 2:1-9"]
      },
      {
        category: "promise-fulfillment",
        descriptionKey: "haggai-glory-greater",
        verses: ["Ageu 2:6-9"]
      },
      {
        category: "redemptive-historical",
        descriptionKey: "haggai-zerubbabel-signet",
        verses: ["Ageu 2:20-23"]
      }
    ]
  },
  {
    id: "zechariah",
    testament: "old",
    nameKey: "book-zechariah",
    shortNameKey: "abbr-zechariah",
    categories: ["typology", "promise-fulfillment", "new-testament-references"],
    descriptionKey: "christ-in-zechariah",
    christPointers: [
      {
        category: "typology",
        descriptionKey: "zechariah-priest-king-typology",
        verses: ["Zacarias 3:1-10", "Zacarias 4:1-14", "Zacarias 6:9-15"]
      },
      {
        category: "promise-fulfillment",
        descriptionKey: "zechariah-messianic-prophecies",
        verses: ["Zacarias 9:9-10", "Zacarias 12:10", "Zacarias 13:1", "Zacarias 13:7"]
      },
      {
        category: "new-testament-references",
        descriptionKey: "zechariah-nt-citations",
        verses: ["Zacarias 9:9", "Zacarias 11:12-13", "Zacarias 12:10", "Zacarias 13:7"]
      },
      {
        category: "typology",
        descriptionKey: "zechariah-cleansing-fountain",
        verses: ["Zacarias 13:1"]
      }
    ]
  },
  {
    id: "malachi",
    testament: "old",
    nameKey: "book-malachi",
    shortNameKey: "abbr-malachi",
    categories: ["promise-fulfillment", "new-testament-references", "redemptive-historical"],
    descriptionKey: "christ-in-malachi",
    christPointers: [
      {
        category: "promise-fulfillment",
        descriptionKey: "malachi-messenger-way",
        verses: ["Malaquias 3:1", "Malaquias 4:5-6"]
      },
      {
        category: "new-testament-references",
        descriptionKey: "malachi-sun-righteousness",
        verses: ["Malaquias 4:2"]
      },
      {
        category: "redemptive-historical",
        descriptionKey: "malachi-day-lord-coming",
        verses: ["Malaquias 3:1-5", "Malaquias 4:1-6"]
      },
      {
        category: "contrast",
        descriptionKey: "malachi-priesthood-contrast",
        verses: ["Malaquias 1:6-14", "Malaquias 2:1-9", "Malaquias 3:1-4"]
      }
    ]
  },
  
  // Novo Testamento - Evangelhos
  {
    id: "matthew",
    testament: "new",
    nameKey: "book-matthew",
    shortNameKey: "abbr-matthew",
    categories: ["new-testament-references", "promise-fulfillment"],
    descriptionKey: "christ-in-matthew",
    christPointers: [
      {
        category: "promise-fulfillment",
        descriptionKey: "matthew-promise-fulfillment",
        verses: ["Mateus 1:22-23", "Mateus 2:15", "Mateus 8:17"]
      },
      {
        category: "new-testament-references",
        descriptionKey: "matthew-nt-references",
        verses: ["Mateus 5:17-18"]
      },
      {
        category: "redemptive-historical",
        descriptionKey: "matthew-genealogy",
        verses: ["Mateus 1:1-17"]
      },
      {
        category: "longitudinal-themes",
        descriptionKey: "matthew-new-moses",
        verses: ["Mateus 5-7"]
      }
    ]
  },
  {
    id: "mark",
    testament: "new",
    nameKey: "book-mark",
    shortNameKey: "abbr-mark",
    categories: ["typology", "redemptive-historical"],
    descriptionKey: "christ-in-mark",
    christPointers: [
      {
        category: "typology",
        descriptionKey: "mark-servant-type",
        verses: ["Marcos 10:45"]
      },
      {
        category: "redemptive-historical",
        descriptionKey: "mark-kingdom-god",
        verses: ["Marcos 1:14-15"]
      },
      {
        category: "new-testament-references",
        descriptionKey: "mark-ot-fulfillment",
        verses: ["Marcos 1:2-3", "Marcos 7:6-7"]
      }
    ]
  },
  {
    id: "luke",
    testament: "new",
    nameKey: "book-luke",
    shortNameKey: "abbr-luke",
    categories: ["redemptive-historical", "promise-fulfillment", "longitudinal-themes"],
    descriptionKey: "christ-in-luke",
    christPointers: [
      {
        category: "redemptive-historical",
        descriptionKey: "luke-historical-context",
        verses: ["Lucas 2:1-7", "Lucas 3:1-6"]
      },
      {
        category: "promise-fulfillment",
        descriptionKey: "luke-universal-salvation",
        verses: ["Lucas 1:46-55", "Lucas 2:29-32"]
      },
      {
        category: "longitudinal-themes",
        descriptionKey: "luke-holy-spirit",
        verses: ["Lucas 3:21-22", "Lucas 4:18-19"]
      },
      {
        category: "typology",
        descriptionKey: "luke-salvation-theme",
        verses: ["Lucas 3:23-38"]
      }
    ]
  },
  {
    id: "john",
    testament: "new",
    nameKey: "book-john",
    shortNameKey: "abbr-john",
    categories: ["typology", "longitudinal-themes", "new-testament-references"],
    descriptionKey: "christ-in-john",
    christPointers: [
      {
        category: "typology",
        descriptionKey: "john-word-incarnate",
        verses: ["João 4:10-14", "João 6:35-51", "João 8:12", "João 10:1-18"]
      },
      {
        category: "longitudinal-themes",
        descriptionKey: "john-eternal-life",
        verses: ["João 1:1-18", "João 14:6-11"]
      },
      {
        category: "new-testament-references",
        descriptionKey: "john-light-darkness",
        verses: ["João 1:29", "João 2:19-22", "João 7:37-39"]
      },
      {
        category: "promise-fulfillment",
        descriptionKey: "john-signs-deity",
        verses: ["João 1:45", "João 5:46"]
      },
      {
        category: "typology",
        descriptionKey: "john-good-shepherd",
        verses: ["João 10:1-18"]
      }
    ]
  },
  {
    id: "acts",
    testament: "new",
    nameKey: "book-acts",
    shortNameKey: "abbr-acts",
    categories: ["redemptive-historical", "promise-fulfillment", "new-testament-references"],
    descriptionKey: "christ-in-acts",
    christPointers: [
      {
        category: "redemptive-historical",
        descriptionKey: "acts-gospel-expansion",
        verses: ["Atos 1:8", "Atos 2:1-41"]
      },
      {
        category: "promise-fulfillment",
        descriptionKey: "acts-spirit-promise",
        verses: ["Atos 2:14-41"]
      },
      {
        category: "new-testament-references",
        descriptionKey: "acts-ot-interpretation",
        verses: ["Atos 2:25-36", "Atos 3:17-26", "Atos 7:1-53"]
      },
      {
        category: "longitudinal-themes",
        descriptionKey: "acts-kingdom-theme",
        verses: ["Atos 1:3", "Atos 8:12", "Atos 28:23-31"]
      }
    ]
  },
  
  // Epístolas Paulinas
  {
    id: "romans",
    testament: "new",
    nameKey: "book-romans",
    shortNameKey: "abbr-romans",
    categories: ["redemptive-historical", "promise-fulfillment", "analogy"],
    descriptionKey: "christ-in-romans",
    christPointers: [
      {
        category: "redemptive-historical",
        descriptionKey: "romans-adam-christ",
        verses: ["Romanos 5:12-21"]
      },
      {
        category: "promise-fulfillment",
        descriptionKey: "romans-israel-promises",
        verses: ["Romanos 9-11"]
      },
      {
        category: "analogy",
        descriptionKey: "romans-justification",
        verses: ["Romanos 4:1-25"]
      },
      {
        category: "contrast",
        descriptionKey: "romans-sacrificial-system",
        verses: ["Romanos 3:9-20", "Romanos 10:5-21"]
      }
    ]
  },
  {
    id: "1corinthians",
    testament: "new",
    nameKey: "book-1-corinthians",
    shortNameKey: "abbr-1-corinthians",
    categories: ["typology", "analogy", "redemptive-historical"],
    descriptionKey: "christ-in-1-corinthians",
    christPointers: [
      {
        category: "typology",
        descriptionKey: "1corinthians-ot-types",
        verses: ["1 Coríntios 10:1-13"]
      },
      {
        category: "analogy",
        descriptionKey: "1corinthians-passover-firstfruits",
        verses: ["1 Coríntios 5:7", "1 Coríntios 15:20-23"]
      },
      {
        category: "redemptive-historical",
        descriptionKey: "1corinthians-new-creation",
        verses: ["1 Coríntios 15:20-28", "1 Coríntios 15:45-49"]
      },
      {
        category: "contrast",
        descriptionKey: "1corinthians-wisdom-contrast",
        verses: ["1 Coríntios 1:18-2:16"]
      }
    ]
  },
  {
    id: "2corinthians",
    testament: "new",
    nameKey: "book-2-corinthians",
    shortNameKey: "abbr-2-corinthians",
    categories: ["contrast", "longitudinal-themes", "promise-fulfillment"],
    descriptionKey: "christ-in-2-corinthians",
    christPointers: [
      {
        category: "contrast",
        descriptionKey: "2corinthians-old-new-covenant",
        verses: ["2 Coríntios 3:4-18"]
      },
      {
        category: "longitudinal-themes",
        descriptionKey: "2corinthians-reconciliation",
        verses: ["2 Coríntios 5:17"]
      },
      {
        category: "promise-fulfillment",
        descriptionKey: "2corinthians-promises-fulfilled",
        verses: ["2 Coríntios 1:19-20"]
      }
    ]
  },
  {
    id: "galatians",
    testament: "new",
    nameKey: "book-galatians",
    shortNameKey: "abbr-galatians",
    categories: ["promise-fulfillment", "redemptive-historical", "analogy"],
    descriptionKey: "christ-in-galatians",
    christPointers: [
      {
        category: "promise-fulfillment",
        descriptionKey: "galatians-abraham-promise",
        verses: ["Gálatas 3:8-14", "Gálatas 3:15-29"]
      },
      {
        category: "redemptive-historical",
        descriptionKey: "galatians-law-tutor",
        verses: ["Gálatas 3:19-25", "Gálatas 4:1-7"]
      },
      {
        category: "analogy",
        descriptionKey: "galatians-sarah-hagar",
        verses: ["Gálatas 4:21-31"]
      },
      {
        category: "contrast",
        descriptionKey: "galatians-freedom-christ",
        verses: ["Gálatas 2:15-21", "Gálatas 5:1-6"]
      }
    ]
  },
  {
    id: "ephesians",
    testament: "new",
    nameKey: "book-ephesians",
    shortNameKey: "abbr-ephesians",
    categories: ["redemptive-historical", "longitudinal-themes", "contrast"],
    descriptionKey: "christ-in-ephesians",
    christPointers: [
      {
        category: "redemptive-historical",
        descriptionKey: "ephesians-creation-theme",
        verses: ["Efésios 1:3-14", "Efésios 3:1-13"]
      },
      {
        category: "longitudinal-themes",
        descriptionKey: "ephesians-unity-christ",
        verses: ["Efésios 2:11-22"]
      },
      {
        category: "contrast",
        descriptionKey: "ephesians-church-body",
        verses: ["Efésios 4:17-24"]
      },
      {
        category: "typology",
        descriptionKey: "ephesians-spiritual-warfare",
        verses: ["Efésios 5:22-33"]
      }
    ]
  },
  {
    id: "philippians",
    testament: "new",
    nameKey: "book-philippians",
    shortNameKey: "abbr-philippians",
    categories: ["typology", "contrast", "longitudinal-themes"],
    descriptionKey: "christ-in-philippians",
    christPointers: [
      {
        category: "typology",
        descriptionKey: "philippians-suffering-glory",
        verses: ["Filipenses 3:4-14"]
      },
      {
        category: "contrast",
        descriptionKey: "philippians-joy-christ",
        verses: ["Filipenses 3:2-11"]
      },
      {
        category: "longitudinal-themes",
        descriptionKey: "philippians-humility-exaltation",
        verses: ["Filipenses 3:17-21"]
      }
    ]
  },
  {
    id: "colossians",
    testament: "new",
    nameKey: "book-colossians",
    shortNameKey: "abbr-colossians",
    categories: ["analogy", "contrast", "longitudinal-themes"],
    descriptionKey: "christ-in-colossians",
    christPointers: [
      {
        category: "analogy",
        descriptionKey: "colossians-image-god",
        verses: ["Colossenses 1:15-20"]
      },
      {
        category: "contrast",
        descriptionKey: "colossians-shadow-reality",
        verses: ["Colossenses 2:8-15", "Colossenses 2:16-23"]
      },
      {
        category: "longitudinal-themes",
        descriptionKey: "colossians-supremacy-christ",
        verses: ["Colossenses 2:1-5"]
      },
      {
        category: "typology",
        descriptionKey: "colossians-hidden-christ",
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

