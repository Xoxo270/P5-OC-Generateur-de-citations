/* déclaration des variables/constantes de citations */

const morceau1 = ["Le grand chat","Le gros chien","La girafe","L'élephant","Le jaguar"];

const morceau2 = ["a mangé","mangera","mange","aime manger"];

const morceau3 = ["de l'herbe.","d'autres animaux.","des insectes.","sa progéniture.","des êtres humains."];


/* Appel du programme Javascript */

document.getElementById("bouton").onclick = function(){
    const item1 = morceau1[Math.floor(Math.random() * morceau1.length)];

    const item2 = morceau2[Math.floor(Math.random() * morceau2.length)];

    const item3 = morceau3[Math.floor(Math.random() * morceau3.length)];
    
    console.log(`${item1} ${item2} ${item3}`)};

 
