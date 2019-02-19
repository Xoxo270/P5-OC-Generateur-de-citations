/* déclaration des variables/constantes de citations */

/* 1er générateur de citations */
const morceau1 = ["Le grand chat","Le gros chien","La girafe","L'élephant","Le jaguar"];
const morceau2 = ["a mangé","mangera","mange","aime manger"];
const morceau3 = ["de l'herbe.","d'autres animaux.","des insectes.","sa progéniture.","des êtres humains."];

/* 2ème générateur de citations */
const morceau4 = ["Je deviendrais","Tu deviendras","Il deviendra"];
const morceau5 = ["le roi","le meilleur","le plus fort"];
const morceau6 = ["des pirates","des ninjas","des gladiateurs"];

/* Prompt générateur */


let choixGenerateur = "";
let nombreCitations = "";
// console.log(choixGenerateur);
// console.log(nombreCitations);
    for (i = 0; i < nombreCitations; i++){
        if (choixGenerateur == 1) {
            const item1 = morceau1[Math.floor(Math.random() * morceau1.length)];
        
            const item2 = morceau2[Math.floor(Math.random() * morceau2.length)];
        
            const item3 = morceau3[Math.floor(Math.random() * morceau3.length)];
            
            // console.log(`${item1} ${item2} ${item3}`)
            `${item1} ${item2} ${item3}`
    }
    else{
            const item4 = morceau4[Math.floor(Math.random() * morceau4.length)];
        
            const item5 = morceau5[Math.floor(Math.random() * morceau5.length)];
        
            const item6 = morceau6[Math.floor(Math.random() * morceau6.length)];
            
            // console.log(`${item4} ${item5} ${item6}`)
                `${item4} ${item5} ${item6}`}

    }


    /* A rajouter au programme */

/*
*
*
*
*
*
*/