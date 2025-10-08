"use strict"
let poolQuestions = [];
let quizzCourant;

//Constantes et variables globales
const NBR_QUESTION_QUIZ = 5;


/**
 * Préparer, afficher et gérer les résultats du questionnaire.
 * Prends en compte l'abandon grace à un paramètre évènement ou booléan.
 *
 * @param {Event|boolean}
 */
function afficherResultats() {
// afficher le résulat final.
    let monDiv = document.getElementById("contenu");
    const ret = document.createElement("p");
    ret.innerHTML = "test";
    monDiv.appendChild(ret);

}


//Afficchage et gestion de l'application

/**
 * Préparer, afficher et gérer l'affichage d'une question (nouvelle question courante
 * selon l'objet QuestionnaireQuiz) dans la zone de donnée du DOM
 *
 * IMPORTANT : l'appelant doit vérifier s'il y a encore une question à poser
 */
function afficherQuestions() {

    // Faire l'affichage de la question courante'
    let questionCourante = quizzCourant.questionCourante;
    let numeroQuestion = quizzCourant.numeroQuestionCourante;

    viderContenue();

    /* ---------creation des elements dom ----------*/
    let monDiv = document.getElementById("contenu");
    let divQuest = document.createElement("div");
    let divResp = document.createElement("div");
    let h2 = document.createElement('h2');
    let paragraph = document.createElement('p');
    let score = document.createElement('p');

    /* ---------Ajout des id  ----------*/
    divQuest.id = "displayquest";
    divResp.id = "respon";
    score.id = "score";

    /* ---------contenu des elements ----------*/
    score.textContent = quizzCourant.scoreTotal.toFixed(2) + " / " + calculerScoreMax();
    h2.textContent = 'Question ' + numeroQuestion + ' sur ' + NBR_QUESTION_QUIZ + ' (' + questionCourante.valeur + ' points)';
    paragraph.textContent = questionCourante.question;

    /* ---------Ajout des éléments dans leur div ----------*/
    monDiv.appendChild(divQuest);
    monDiv.appendChild(divResp);
    divQuest.appendChild(h2);
    divQuest.appendChild(score);
    divQuest.appendChild(paragraph);

    for (let i = 0; i < questionCourante.reponses.length; i++) {
        let textReponse = questionCourante.reponses[i];
        let divReponse = creerCheckbox(i, textReponse, "reponseQuestions");
        divResp.appendChild(divReponse);

    }

    gererAffichageBoutons({
        boutonValider: true,
        boutonAnnuler: true,
        boutonContinuer: false,
        boutonTerminer: false
    });

}


/**
 * Préparer, afficher et gérer la vérification de la réponse à la question courante.
 * Modifie le DOM en conséquence pour présenter la correction.
 */
function verifierReponses() {

    let checkboxes = document.getElementsByName("reponseQuestions");

    let choixUsers = recupererChoix();

    if (choixUsers.length === 0) {
        alert("Vous devez Choisir au  moins une réponse");
        return;
    }

    let questionCourante = quizzCourant.questionCourante;
    let resultat = questionCourante.evaluerReponse(choixUsers);

    for (let i = 0; i < resultat.length; i++) {
        let couleur = resultat[i].validation;
        let point = resultat[i].points;

        let label = document.querySelector('label[for="reponse' + i + '"]');

        label.style.color = couleur;

        let spanPoints = document.createElement("span");
        spanPoints.textContent = " → " + point + " pts";
        spanPoints.style.fontWeight = "bold";
        label.appendChild(spanPoints);
        checkboxes[i].disabled = true;
    }

    quizzCourant.ajouterPoints(questionCourante.pointsObtenus);

    // Mettre à jour le score affiché
    document.getElementById("score").textContent = quizzCourant.scoreTotal.toFixed(2) + " / " + calculerScoreMax();
    console.log(calculerScoreMax());
    if (quizzCourant.estDerniereQuestion()) {
        gererAffichageBoutons({
            boutonValider: false,
            boutonAnnuler: false,
            boutonContinuer: false,
            boutonTerminer: true

        })

    } else {
        gererAffichageBoutons({
            boutonValider: false,
            boutonAnnuler: true,
            boutonContinuer: true,
            boutonTerminer: false
        });
    }


}


/**
 *
 * Construire, afficher et gérer l'intro
 */
function afficherIntroduction() {
    // Faire l'affichage de la page d'introduction

    createPourLire("hid", "p");
    const button = createButton("button1", "Commencer", "button", "butt");
    const hidden = document.getElementById("hid");

    button.addEventListener("click", (event) => {
        afficherQuestions();          // on lance la première question
    });
}


function connecterGestionnaires() {
    const valid = document.getElementById("boutonValider");
    const continuer = document.getElementById("boutonContinuer");
    const annuler = document.getElementById("boutonAnnuler");
    const terminer = document.getElementById("boutonTerminer");

    valid.addEventListener("click", verifierReponses);

    continuer.addEventListener("click", function () {
        quizzCourant.questionSuivante();
        afficherQuestions();
    });

    annuler.addEventListener("click", () => {
        viderContenue();
        // Cacher tous les boutons du quiz
        gererAffichageBoutons({
            boutonValider: false,
            boutonAnnuler: false,
            boutonContinuer: false,
            boutonTerminer: false
        });

        // Réinitialiser le quiz
        quizzCourant = new Quiz(poolQuestions, NBR_QUESTION_QUIZ);

        afficherIntroduction();
    });

    terminer.addEventListener("click", () => {
        viderContenue();
        afficherResultats();
    });
}

/*----------------------------Autre functions utiles-----------------------------*/
/**
 * Récupère les indices des réponses cochées par l'utilisateur.
 * Parcourt toutes les checkboxes du groupe "reponseQuestions" qui sont cochées
 * et retourne un tableau contenant leurs valeurs (indices) sous forme d'entiers.
 *
 * @returns {number[]} Tableau contenant les indices des réponses sélectionnées (ex: [0, 2, 4])
 */

function recupererChoix() {
    let checkboxes = document.querySelectorAll('input[name="reponseQuestions"]:checked');
    let choixUtilisateur = [];

    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {  // Si elle est cochée
            choixUtilisateur.push(parseInt(checkboxes[i].value));
        }
    }
    return choixUtilisateur;
}

/**
 * Calcule le score maximum possible pour le quiz courant.
 * Additionne la valeur (nombre de points) de toutes les questions sélectionnées
 * dans le questionnaire en cours.
 *
 * @returns {number} Le score maximum atteignable pour ce quiz
 */
function calculerScoreMax() {
    let total = 0;
    for (let q of quizzCourant.questionsSelectionnees) {
        total += q.valeur;
    }
    return total;
}


function init() {
    // Le code qui ne doit être exécuté qu'une seule fois.

    // Le code qui ne doit être exécuté qu'une seule fois.
    for (let cle in tabAssQuestions) {
        let questionJson = tabAssQuestions[cle];
        let objetQuestion = new Question(
            questionJson.question,
            questionJson.reponses,
            questionJson.solution,
            questionJson.valeur
        )
        objetQuestion.melangerReponses();
        poolQuestions.push(objetQuestion);
    }
    quizzCourant = new Quiz(poolQuestions, NBR_QUESTION_QUIZ); // maintenant seulement

    verroulle("verrouiller");
}

// Connecter les gestionnaires d'événements
init();
connecterGestionnaires();

//Point d'entrée
afficherIntroduction();

