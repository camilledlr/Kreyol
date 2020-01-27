var collection = [
  {
    crExp: "Anba latè pa ni plézi ",
    litTrad: "Sous terre, il n'y a pas de plaisir.",
    frTrad: "Carpe Diem.",
    seqMots: ["anba","latè", "pa", "ni", "plézi"],
    mots: [{ mot: "Anba", indice: "Sous" },{ mot: "Latè", indice: "La terre" },{ mot: "Pa", indice: "Marque la négation" },{ mot: "Ni", indice: "Il y a" },{ mot: "Plézi", indice: "Plaisir" }]
  },
  {
    crExp: "Wi pa ni poutchi ",
    litTrad: "Un Oui n'a pas de pourquoi.",
    frTrad: "Un oui n'engage à rien.",
    seqMots: ["wi","pa", "ni", "poutchi"],
    mots: [{ mot: "Wi", indice: "Oui" },{ mot: "Pa", indice: "Marque la négation" },{ mot: "Ni", indice: "a (avoir)" },{ mot: "Poutchi", indice: "Pourquoi" }]
  },

  {
    crExp:"Ravèt pa ni rézon douvan poul ",
      litTrad: "Le cafard n'a pas raison face à la poule.",
      frTrad: "La raison du plus fort est toujours la meilleure.",
      seqMots: ["ravèt","pa","ni","rézon","douvan", "poul"],
      mots: [{mot: "Ravèt", indice: "Cafard"}, { mot: "Pa", indice: "Marque la négation" }, { mot: "Ni", indice: " a (avoir)" }, { mot: "Rézon", indice: "Raison" }, { mot: "Douvan", indice: "devant" }, { mot: "Poul", indice: "Poule"}]
    },
  {
    crExp: "Rand sèvis ka ba mal do ",
      litTrad: "Rendre service donne mal au dos.",
      frTrad: "Trop bon, trop con.",
      seqMots: ["rand","sèvis","ka","ba","mal", "do"],
      mots: [{mot: "Rand", indice: "Rendre"}, { mot: "Sèvis", indice: "Service" }, { mot: "Ka", indice: "Marque du présent indicatif" }, { mot: "Ba", indice: "Donne" }, { mot: "Mal", indice: "Mal" }, { mot: "Do", indice: "Dos"}]
    },

  {
    crExp: "Bèf douvan bwè dlo klè ",
      litTrad: "Les boeufs devant boivent de l'eau claire.",
      frTrad: "Premier arrivé, premier servi.",
      seqMots: ["bèf","douvan","bwè","dlo","klè"],
      mots: [{mot: "Bèf", indice: "Boeuf"}, { mot: "Douvan", indice: "Devant" }, { mot: "Bwè", indice: "Boire" }, { mot: "Dlo", indice: "Eau" }, { mot: "Klè", indice: "Claire" }]
    },

  // {
  //   crExp: "Kannari ka di chodiè bonday nwè ",
  //     litTrad: "C'est la casseriole qui dit à la chaudière que ses fesses sont noires.",
  //     frTrad: "C'est l'hôpital qui se fout de la charité",
  //     seqMots: ["kannari","ka","di","chodiè","bonda'y", "nwè"],
  //     mots: [{mot: "Kannari", indice: "Boeuf"}, { mot: "Ka", indice: "(marque présent indicatif)" }, { mot: "Di", indice: "Dit" }, { mot: "Chodiè", indice: "Chaudière" }, { mot: "Bonda'y", indice: "Ses fesses" }, { mot: "Nwè", indice: "Noir" } ]
  //   },
  ];

var collectionFacile = [
  {
    crExp: "A an lot soley ",
    litTrad: "À un autre soleil.",
    frTrad: "Au revoir.",
    seqMots: ["a","an", "lot", "soley"],
    mots: [{ mot: "A", indice: "À" },{ mot: "An", indice: "Un" },{ mot: "Lot", indice: "Autre" },{ mot: "Soley", indice: "Soleil"}]
  },
  {
    crExp: "Dèmen sé an kouyon ",
      litTrad: "Demain est un imbécile.",
      frTrad: "Carpe Diem.",
      seqMots: ["dèmen","sé","an","kouyon"],
      mots: [{mot: "Dèmen", indice: "Demain"}, { mot: "Sé", indice: "Est" }, { mot: "An", indice: "Un" }, { mot: "Kouyon", indice: "Imbécile" }]
    },
  {
    crExp: "Asiré pa pétèt ",
      litTrad: "Sûr, pas peut-être.",
      frTrad: "Bien sûr.",
      seqMots: ["asiré","pa","pétèt"],
      mots: [{mot: "Asiré", indice: "Sûr"}, { mot: "Pa", indice: "Pas" }, { mot: "Pétèt", indice: "Peut-être" }]
    },
  {
    crExp: "Bouch li pa ni dimanch ",
      litTrad: "Sa bouche n'a pas de dimanche.",
      frTrad: "C'est une piplette.",
      seqMots: ["bouch","li","pa", "ni", "dimanch"],
      mots: [{mot: "Bouch", indice: "Bouche"}, { mot: "Li", indice: "Sa/Son" }, { mot: "Pa", indice: "(marque la négation)" }, { mot: "Ni", indice: "a (avoir)" }, { mot: "Dimanch", indice: "Dimanche" }]
    },
  {
    crExp: "Débrouya pa péché ",
      litTrad: "La débrouillardise n'est pas un péché.",
      frTrad: "Dans la vie, il faut être débrouillard.",
      seqMots: ["débrouya","pa","péché"],
      mots: [{mot: "Débrouya", indice: "Débrouillardise"}, { mot: "Pa", indice: "Pas" }, { mot: "Péché", indice: "(un) Péché" }]
    },
    
  ];

var collectionDifficile = [
  {
    crExp: "La vi a sé pa an bòl toloman ",
    litTrad: "La vie n'est pas un bol de toloman.",
    frTrad: "La vie n'est pas un long fleuve tranquille.",
    seqMots: ["la","vi", "a", "sé", "pa", "an", "bòl", "toloman"],
    mots: [{ mot: "La",},{ mot: "Vi"},{ mot: "A"},{ mot: "Sé"},{ mot: "Pa"},{ mot: "An"},{ mot: "Bòl"},{ mot: "Toloman"}]
  },
  {
    crExp: "Pawòl an bouch pa chaj ",
    litTrad: "Les mots dits n'ont pas de poids.",
    frTrad: "Une parole n'engage à rien.",
    seqMots: ["pawòl","an", "bouch", "pa", "chaj"],
    mots: [{ mot: "Pawòl"},{ mot: "An"},{ mot: "Bouch"},{ mot: "Pa"},{ mot: "Chaj"}]
  },
  {
    crExp: "Tan fè tan tan kité tan ",
    litTrad: "Le temps a fait son temps, le temps a quitté son temps.",
    frTrad: "Le temps passe vite.",
    seqMots: ["tan","fè", "tan", "tan", "kité", "tan"],
    mots: [{ mot: "Tan"},{ mot: "Fè"},{ mot: "Tan"},{ mot: "Tan"},{ mot: "Kité"}, { mot: "Tan"}] // ici l'indice ne va pas fonctionner car il y a plusieurs fois le mot temps et tu utilises indexOf pour avoir la place des mots.
  },
  {
    crExp: "Ti grèn ka fè gro pié bwa ",
    litTrad: "Les petites graines font de gros arbres.",
    frTrad: "Petit à petit l'oiseau fait son nid.", // Équivalent à revoir
    seqMots: ["ti","grèn", "ka", "fè", "gro", "pié", "bwa"],
    mots: [{ mot: "Ti"},{ mot: "Grèn"},{ mot: "Ka"},{ mot: "Fè"},{ mot: "Gro"}, { mot: "Pié"}, { mot: "Bwa"}]
  },

  ];


// var collection = [
//     {crExp :,
//      frTrad : ,
//      enTrad : ,
//      seqMots : ["", "", ""], //split cr Exp
//      mots : [{mot : ,
//               indice : }] // mot = seqMots(i)
//     }
// ]

// class Expression {
//     constructor  () {
//         crExp : "";
//         frTrad : "";
//         enTrad : "";
//         seqMots : this.crExp.split(" ")
//     }
// }

// let Exp1 = {crExp : "Bèf douvan bwè dlo klè",
//      frTrad : "Premier arrivé, premier servi.",
//      enTrad : "",
//      seqMots : "Bèf douvan bwè dlo clè".split(" ")
//     }

// var collection = [
//   {
//     crExp: "Tro présé pa ka fè jou ouvè",
//     litTrad: "Être pressé ne fait pas le soleil se lever plus tôt.",
//     frTrad: "Rien ne sert d courir, il faut partir à point.",
//     enTrad: "",
//     seqMots: "",
//     mots: [{ mot: "", indice: "" }]
//   },

//   {
//     crExp: "Tout kouyon mò Sen-Pyè.",
//     litTrad: "Tous les imbéciles sont morts à Saint-Pierre.",

//     explication:
//       "Signifie qu'il faut parfois faire preuve d'observation pour réellement comprendre une situation. Ce proverbe évoque l'histoire de Saint-Pierre en 1902. Ainsi, selon cette maxime, lors de l'éruption de Montagne Pelée, seuls ceux qui n'avaient pas cru aux signes précurseurs donnés par le volcan sont morts.",

//     frTrad: "",
//     enTrad: "",
//     seqMots: "",
//     mots: [{ mot: "", indice: "" }]
//   },
//   {
//     crExp: "Ti poul suiv ti kanna mò néyé.",
//     litTrad: "Tous les imbéciles sont morts à Saint-Pierre.",

//     explication: "",

//     frTrad: "Les poussins ont suivi les canetons, ils sont morts noyés.",
//     enTrad: "",
//     seqMots: "",
//     mots: [{ mot: "", indice: "" }]
//   },

//   {
//     crExp: "Ti kòk ka fè sa i pé, gro kòk ka fè sa i lé.",
//     litTrad: "Le petit coq fait ce qu'il peut, le gros coq fait ce qu'il veut.",
//     explication: "",
//     frTrad: "La raison du plus fort est toujours la meilleure.",
//     enTrad: "",
//     seqMots: "",
//     mots: [{ mot: "", indice: "" }]
//   },

//   {
//     crExp:
//       "Ti kochon di manman'y poutchi djòl li long mé djòl li vini pli long ki ta manman'y",
//     litTrad:
//       "Le cochonnet a demandé à sa maman pourquoi sa gueule était longue, mais la sienne est devenue bien plus longue.",
//     explication: "",
//     frTrad: "Il ne faut jamais se moquer de ses ainés.",
//     enTrad: "",
//     seqMots: "",
//     mots: [{ mot: "", indice: "" }]
//   },



//   {
//     crExp: "Si ou pa dòmi an poulayé, ou pa sav si poul ka wonflé.",
//     litTrad:
//       "Si tu n'as pas dormi dans un poulailler, tu ne peux pas savoir si les poules ronflent.",
//     explication: "",
//     frTrad: "'il faut parler uniquement de ce que l'on connaît.",
//     enTrad: "",
//     seqMots: "",
//     mots: [{ mot: "", indice: "" }]
//   },
//   {
//     crExp: "Si ou pa dòmi an poulayé, ou pa sav si poul ka wonflé.",
//     litTrad:
//       "Si tu n'as pas dormi dans un poulailler, tu ne peux pas savoir si les poules ronflent.",
//     explication: "",
//     frTrad: "'il faut parler uniquement de ce que l'on connaît.",
//     enTrad: "",
//     seqMots: "",
//     mots: [{ mot: "", indice: "" }]
//   },

//   {
//     crExp: "Sé pa lè ou lé pisé ou pou sonjé pa ni bragjet.",
//     litTrad:
//       "Ce n'est pas au moment où tu as envie de pisser qu'il faut penser au fait que tu n'as pas de braguette.",
//     explication: "",
//     frTrad: "Dans lavie, il faut être prévoyent.",
//     enTrad: "",
//     seqMots: "",
//     mots: [{ mot: "", indice: "" }]
//   },

//   {
//     crExp: "Sé kòd yanm ki maré yanm.",
//     litTrad:
//       "Si tu n'as pas dormi dans un poulailler, tu ne peux pas savoir si les poules ronflent.",
//     explication: "",
//     frTrad: "On peut être pris à son propre piège.",
//     enTrad: "",
//     seqMots: "",
//     mots: [{ mot: "", indice: "" }]
//   },

//   {
//     crExp: "Sé San ayen ki'y pa bon.",
//     litTrad: "C'est sans rien que ce n'est pas bon.",
//     explication: "",
//     frTrad: "Il faut se contenter de peu.",
//     enTrad: "",
//     seqMots: "",
//     mots: [{ mot: "", indice: "" }]
//   },

//   {
//     crExp: "Sa zyé pa wè, tjè pa ka fè mal.",
//     litTrad: "Ce que les yeux ne voient pas ne fait pas mal au cœur.",
//     explication: "",
//     frTrad: "Loin des yeux, loin du coeur.",
//     enTrad: "",
//     seqMots: "",
//     mots: [{ mot: "", indice: "" }]
//   },

//   {
//     crExp: "Sa ki pou'w la riviè pa ka chayé'y.",
//     litTrad: "Ce qui est à toi ne peut pas être emporté par la rivière.",
//     explication: "",
//     frTrad: "Personne ne peut échapper à sa destinée.",
//     enTrad: "",
//     seqMots: "",
//     mots: [{ mot: "", indice: "" }]
//   },

//   {
//     crExp: "Sa ki pa bon pou zwa, pa bon pou kanna.",
//     litTrad:
//       "Ce qui n'est pas bon pour les oies n'est pas bon pour les canards.",
//     explication: "",
//     frTrad:
//       "Il ne faut pas faire à autrui ce que l'on aimerait pas que l'on nous fasse.",
//     enTrad: "",
//     seqMots: "",
//     mots: [{ mot: "", indice: "" }]
//   },



  // Lèd ou lèd, ou pa méchan.
  // Krapon viv lontan.
  // Kabrit ki pa malen, pa gra.
  // Kabrit kaka pilil, i konprann i sé dòktè.
  // Jansiv té la avan dan.
  // Fòk ou mantjé néyé pou aprann najé.
  // Débouya pa péché.
  // Chak bèt a fé ka kléré pou nanm’yo.
  // A fòs makak karésé ich li, i tjwé’y.
// ]

