const generators = [
    // FirstGen
    {
      subjects: [
        "Le grand chat",
        "Le gros chien",
        "La girafe",
        "L'élephant",
        "Le jaguar",
      ],
      verbs: [
        "a mangé",
        "mangera",
        "mange",
        "aime manger",
      ],
      complements: [
        "de l'herbe.",
        "d'autres animaux.",
        "des insectes.",
        "sa progéniture.",
        "des êtres humains.",
      ],
    },
    // SecondGen
    {
      subjects: [
        "Je deviendrais",
        "Tu deviendras",
        "Il deviendra",
      ],
      verbs: [
        "le roi",
        "le meilleur",
        "le plus fort",
      ],
      complements: [
        "des pirates",
        "des ninjas",
        "des gladiateurs",
      ],
    },
  ];



/* constantes utilisateur */

const choixGenerateur = parseInt(prompt("Voulez-vous utiliser le générateur de citation 1 ou 2 ?"), 10) - 1;
const nombreCitations = parseInt(prompt("Choisissez un nombre de citations compris entre 1 et 5 :"), 10);

/* Validation de l'entrée utilisateur */

if ((choixGenerateur !== 0 && choixGenerateur !== 1)
    || (nombreCitations === NaN || nombreCitations < 1 || nombreCitations > 5)) {
  throw new Error('Invalid input');
}

/* Stockage des tailles */

const subjectsLength = generators[choixGenerateur].subjects.length;
const verbsLength = generators[choixGenerateur].verbs.length;
const complementsLength = generators[choixGenerateur].complements.length;

/* Boucle */

for (i = 0; i < nombreCitations; i++) {
    const subject = generators[choixGenerateur].subjects[Math.floor(Math.random() * (subjectsLength - 1)) + 1];
    const verb = generators[choixGenerateur].verbs[Math.floor(Math.random() * (verbsLength - 1)) + 1];
    const complement = generators[choixGenerateur].complements[Math.floor(Math.random() * (complementsLength - 1)) + 1];
    console.log(`${subject} ${verb} ${complement}`);
  }