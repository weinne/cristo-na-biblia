
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
    name: "Redemptive-Historical Progression",
    description: "Traces how a passage fits within the broader unfolding of God's redemptive plan throughout history, leading to Christ."
  },
  {
    id: "promise-fulfillment",
    name: "Promise-Fulfillment",
    description: "Identifies promises made in the Old Testament that find their fulfillment in Christ."
  },
  {
    id: "typology",
    name: "Typology",
    description: "Recognizes Old Testament persons, events, or institutions as 'types' that prefigure aspects of Christ or His work."
  },
  {
    id: "analogy",
    name: "Analogy",
    description: "Draws parallels between God's actions in the Old Testament and His actions through Christ."
  },
  {
    id: "longitudinal-themes",
    name: "Longitudinal Themes",
    description: "Follows major biblical themes as they develop across Scripture and find their culmination in Christ."
  },
  {
    id: "new-testament-references",
    name: "New Testament References",
    description: "Uses New Testament citations of Old Testament passages to show connections to Christ."
  },
  {
    id: "contrast",
    name: "Contrast",
    description: "Highlights how Christ is greater than or different from Old Testament figures or institutions."
  }
];

export const books: Book[] = [
  {
    id: "genesis",
    testament: "old",
    name: "Genesis",
    shortName: "Gen",
    categories: ["typology", "promise-fulfillment", "redemptive-historical"],
    description: "The book of beginnings that establishes God's redemptive plan.",
    christPointers: [
      {
        category: "promise-fulfillment",
        description: "The promise of the seed of the woman who will crush the serpent's head (Genesis 3:15) points to Christ's victory over Satan.",
        verses: ["Genesis 3:15"]
      },
      {
        category: "typology",
        description: "Abraham's offering of Isaac prefigures God's sacrifice of His Son.",
        verses: ["Genesis 22:1-14"]
      },
      {
        category: "typology",
        description: "Joseph as a type of Christ: betrayed by his brothers, seemingly defeated but raised to glory, and becoming the savior of many.",
        verses: ["Genesis 37-50"]
      }
    ]
  },
  {
    id: "exodus",
    testament: "old",
    name: "Exodus",
    shortName: "Exo",
    categories: ["typology", "redemptive-historical", "longitudinal-themes"],
    description: "The story of God's deliverance of His people from bondage in Egypt.",
    christPointers: [
      {
        category: "typology",
        description: "The Passover lamb prefigures Christ as the Lamb of God whose blood protects from judgment.",
        verses: ["Exodus 12:1-28"]
      },
      {
        category: "typology",
        description: "Moses as deliverer and mediator foreshadows Christ's greater deliverance and mediation.",
        verses: ["Exodus 3:10", "Exodus 20:19-21"]
      },
      {
        category: "longitudinal-themes",
        description: "The theme of redemption from slavery points to Christ's redemption from sin.",
        verses: ["Exodus 6:6-8"]
      }
    ]
  },
  {
    id: "leviticus",
    testament: "old",
    name: "Leviticus",
    shortName: "Lev",
    categories: ["typology", "contrast"],
    description: "Instructions for worship and holiness that point to Christ's perfect sacrifice and holiness.",
    christPointers: [
      {
        category: "typology",
        description: "The sacrificial system foreshadows Christ's once-for-all sacrifice.",
        verses: ["Leviticus 16:1-34"]
      },
      {
        category: "contrast",
        description: "The repetitive nature of Levitical sacrifices contrasts with Christ's perfect, once-for-all sacrifice.",
        verses: ["Leviticus 1-7"]
      }
    ]
  },
  {
    id: "matthew",
    testament: "new",
    name: "Matthew",
    shortName: "Matt",
    categories: ["new-testament-references", "promise-fulfillment"],
    description: "Presents Jesus as the promised Messiah and King of the Jews.",
    christPointers: [
      {
        category: "promise-fulfillment",
        description: "Matthew frequently notes how Jesus fulfilled Old Testament prophecies.",
        verses: ["Matthew 1:22-23", "Matthew 2:15", "Matthew 8:17"]
      },
      {
        category: "new-testament-references",
        description: "Explicitly connects Jesus to Old Testament prophecies about the Messiah.",
        verses: ["Matthew 5:17-18"]
      }
    ]
  },
  {
    id: "romans",
    testament: "new",
    name: "Romans",
    shortName: "Rom",
    categories: ["redemptive-historical", "promise-fulfillment", "analogy"],
    description: "Paul's theological masterpiece explaining the gospel of Christ.",
    christPointers: [
      {
        category: "redemptive-historical",
        description: "Traces God's redemptive plan from Adam to Christ.",
        verses: ["Romans 5:12-21"]
      },
      {
        category: "promise-fulfillment",
        description: "Shows how Christ fulfills God's promises to Israel.",
        verses: ["Romans 9-11"]
      }
    ]
  },
  {
    id: "hebrews",
    testament: "new",
    name: "Hebrews",
    shortName: "Heb",
    categories: ["typology", "contrast", "new-testament-references"],
    description: "Demonstrates Christ's superiority over Old Testament institutions and figures.",
    christPointers: [
      {
        category: "contrast",
        description: "Christ is superior to angels, Moses, the Levitical priesthood, and the old covenant.",
        verses: ["Hebrews 1:4-14", "Hebrews 3:1-6", "Hebrews 7-10"]
      },
      {
        category: "typology",
        description: "Melchizedek as a type of Christ's eternal priesthood.",
        verses: ["Hebrews 7:1-28"]
      }
    ]
  }
];
