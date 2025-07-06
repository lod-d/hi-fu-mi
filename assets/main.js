
const papier = document.getElementById("papier");
const pierre = document.getElementById("pierre");
const ciseaux = document.getElementById("ciseaux");
const resultModal = document.getElementById("result");
let choixJoueur;


// le jeu du bot aleatoire
const choixBot = () => {
    // création d'un nombre aleatoire de 0 a 2
    const number = Math.floor(Math.random() * 3);
    if (number === 0) {
        return("papier");
    } else if (number === 1) {
        return("pierre");
    } else if (number === 2) {
        return("ciseaux");
    }
}


// fonction fléchée qui prend en parametre le choix du 
// joueur et le choix du bot et renvoie le gagnant
const gagnant = (joueur, bot) => {
    if (joueur === bot) {
        return ("égalité");
    } else if (joueur === "ciseaux" && bot === "papier") {
        return ("Bravo ! Vous avez gagné");
    } else if (joueur === "papier" && bot === "pierre") {
        return ("Bravo ! Vous avez gagné");
    } else if (joueur === "pierre" && bot === "ciseaux") {
        return ("Bravo ! Vous avez gagné");
    } else {
        return ("bot a gagné");
    }
}

// ecouteur d'evenement sur les images du joueur 
// et appel de la fonction resultat avec le choix du joueur
papier.addEventListener("click", () => {
    choixJoueur = ("papier");
    resultat(choixJoueur);
});
pierre.addEventListener("click", () => {
    choixJoueur = ("pierre");
    resultat(choixJoueur);
});
ciseaux.addEventListener("click", () => {
    choixJoueur = ("ciseaux");
    resultat(choixJoueur);
});


// fonction qui affiche le resultat de la partie 
// dans le modal et qui prend en parametre 
// le choix du joueur 
const resultat = (choixJoueur) => {    
    const bot = choixBot();

    // affichage du resultat dans le modal, on ecrit le html du modal 
    // on met le choix du joueur et du bot ainsi que le resultat de la partie 
    // on affiche le resultat dans le p avec l'id result
    resultModal.innerHTML = `
    <div class='modal'>
        <p>Joueur a choisi <span>${choixJoueur}</span> et le bot a choisi <span>${bot}</span></p>
        <p id='result'>${gagnant(choixJoueur, bot)}</p>
        <a href="">Une autre ? </a>
    </div>
    `
}


/* PARTIE REFACTORISE */

/*

//  partie refactorée avec un tableau pour le choix 
const choix = ['pierre', 'papier', 'ciseaux'];

// écoute d'evenement sur les images du joueur
papier.addEventListener('click', () => jouer('papier'));
pierre.addEventListener('click', () => jouer('pierre'));
ciseaux.addEventListener('click', () => jouer('ciseaux'));

//  fonction qui affiche le resultat de la partie 
//  dans le modal et qui prend en parametre 
//  le choix du joueur et le choix du bot
const resultat = ([choixJoueur, choixBot, gagnant]) => {
    resultModal.innerHTML = `
    <div class='modal'>
        <p>Joueur a choisi <span>${choixJoueur}</span> et le bot a choisi <span>${choixBot}</span></p>
        <p id='result'>${gagnant}</p>
        <a href="">Une autre ? </a>
    </div>
    `
}

// fonction qui prend en parametre le choix du joueur
const jouer = (choixdujoueur) => {
    //  creation d'un nombre aleatoire de 0 a 2 dans le tableau
    const choixbot = choix[Math.floor(Math.random() * 3)];
    // si les deux joueurs font le meme choix c'est une egalite
    if (choixdujoueur === choixbot) {
        return (resultat([choixdujoueur, choixbot, "égalité"]));
    } 
    // si le joueur gagne
    else if (
        (choixdujoueur === "ciseaux" && choixbot === "papier") ||
        (choixdujoueur === "papier" && choixbot === "pierre") ||
        (choixdujoueur === "pierre" && choixbot === "ciseaux")
    ) {
        return (resultat([choixdujoueur, choixbot, "Bravo ! Vous avez gagné"]));
    } 
    // si le bot gagne
    else {
        return (resultat([choixdujoueur, choixbot, "bot a gagné"]));
    }
}

*/