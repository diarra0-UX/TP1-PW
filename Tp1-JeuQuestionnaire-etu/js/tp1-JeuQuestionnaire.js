"use strict"

//Constantes et variables globales
const NBR_QUESTION_QUIZ = 5;






/**
 * Préparer, afficher et gérer la vérification de la réponse à la question courante.
 * Modifie le DOM en conséquence pour présenter la correction.
 */
function verifierReponses() {


}

/**
 * Préparer, afficher et gérer les résultats du questionnaire.
 * Prends en compte l'abandon grace à un paramètre évènement ou booléan.
 *
 * @param {Event|boolean}
 */
function afficherResultats() {
// afficher le résulat final.


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


}

/**
 *
 * Construire, afficher et gérer l'intro
 */
function afficherIntroduction() {
    // Faire l'affichage de la page d'introduction

    createPourLire("p");
    createButton("button1","Commencer","button","butt");

}



function connecterGestionnaires() {
        // Connextez les boutons nécessaires avec les gestionnaires d'événements ici.



}

function init() {
    // Le code qui ne doit être exécuté qu'une seule fois.
}

// Connecter les gestionnaires d'événements
init();
connecterGestionnaires();

//Point d'entrée
afficherIntroduction();

