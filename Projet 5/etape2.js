const generators = [
  /* FirstGen */
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
  /* SecondGen */
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

/* Récupération du bouton de soumission */
const button = document.getElementById("submitButton");

/* Ecouteur d'évenement clic */
button.addEventListener("click", (e) => {
  const emplacementCitation = document.getElementById("emplacement-citation");

/* Vider les anciennes citations */
  emplacementCitation.innerHTML = "";

/* On supprime le comportement par défaut du bouton de soumission */
  e.preventDefault();

/* constantes utilisateur */
  const nombreCitations = document.getElementById("nombreCitations").value;
  const choixGenerateur = document.getElementsByName('choixGenerateur');
  let choixGenerateur_value;

/* On récupère la valeur du bouton radio */
  for(let i = 0; i < choixGenerateur.length; i++){
    if(choixGenerateur[i].checked){
      choixGenerateur_value = parseInt(choixGenerateur[i].value);
    }
  }

/* Validation de l'entrée utilisateur */
  if ((choixGenerateur_value !== 0 && choixGenerateur_value !== 1)
      || (nombreCitations === NaN || nombreCitations < 1 || nombreCitations > 5)) {
    throw new Error('Invalid input');
  }

/* Stockage des tailles */
  const subjectsLength = generators[choixGenerateur_value].subjects.length;
  const verbsLength = generators[choixGenerateur_value].verbs.length;
  const complementsLength = generators[choixGenerateur_value].complements.length;

/* Récupération de la citation */
  for (i = 0; i < nombreCitations; i++) {
    const subject = generators[choixGenerateur_value].subjects[Math.floor(Math.random() * (subjectsLength - 1)) + 1];
    const verb = generators[choixGenerateur_value].verbs[Math.floor(Math.random() * (verbsLength - 1)) + 1];
    const complement = generators[choixGenerateur_value].complements[Math.floor(Math.random() * (complementsLength - 1)) + 1];
    const citation = "<p>"+`${subject} ${verb} ${complement}`+"</p>";

/* Affichage de la citation sur le bloc HTML ciblé */
    emplacementCitation.innerHTML += citation;
  }
});