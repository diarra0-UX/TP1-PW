"use strict"
let poolQuestions=[];
let  quizzCourant;
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
    console.log("✅ afficherQuestions appelée !");
    // Faire l'affichage de la question courante'
    let quizz = quizzCourant;

    let questionCourante = quizz.questionCourante;
    console.log(questionCourante);
    let numeroQuestion = quizz.numeroQuestionCourante;
    let nombreTotalQuestions = quizz.nombreTotalQuestions;
    let valeur = questionCourante.valeur;

    viderContenue();
    let monDiv = document.getElementById("contenu");
    let h2 = document.createElement('h2');
    h2.textContent = 'Question ' + numeroQuestion + ' sur ' + nombreTotalQuestions + ' (' + valeur + ' points)';
    let paragraph = document.createElement('p');
    paragraph.textContent = questionCourante.question;
    monDiv.appendChild(h2);
    monDiv.appendChild(paragraph);
    for (let i = 0; i < questionCourante.reponses.length; i++) {
        let textReponse = questionCourante.reponses[i];
        let divReponse = creerCheckbox(i, textReponse, "reponseQuestions" );
        monDiv.appendChild(divReponse);
    }
    console.log(monDiv);
    gererAffichageBoutons({
        boutonValider: true,
        boutonAnnuler: true,
        boutonContinuer: false,
        boutonTerminer: false
    });

}

/**
 *
 * Construire, afficher et gérer l'intro
 */
function afficherIntroduction() {
    // Faire l'affichage de la page d'introduction

    createPourLire("hid","p");
    const button = createButton("button1","Commencer","button","butt");
    const hidden = document.getElementById("hid");
    verroulle("verrouiller");
    button.addEventListener("click", (event) => {   hidden.style.display = "none"; // on cache l'intro
        afficherQuestions();          // 🔥 on lance la première question

    });
}




function connecterGestionnaires() {
    const valid = document.getElementById("boutonValider");


    valid.addEventListener("click", function () {

        alert('Vous devez répondre à la question ou abandonner');
    });

}
function init() {
    // Le code qui ne doit être exécuté qu'une seule fois.
    console.log("🔄 Chargement des questions...");

    // Le code qui ne doit être exécuté qu'une seule fois.
    for ( let cle in tabAssQuestions){
        let questionJson = tabAssQuestions[cle];
        let objetQuestion = new Question(
            questionJson.question,
            questionJson.reponses,
            questionJson.solution,
            questionJson.valeur

        )
        poolQuestions.push(objetQuestion);
    }
    console.log(`${poolQuestions.length} questions chargées dans le pool`);

    console.log("Première question:", poolQuestions[0].question);
    console.log("Ses réponses:", poolQuestions[0].reponses);
    quizzCourant = new Quiz(poolQuestions, 5); // maintenant seulement


}

// Connecter les gestionnaires d'événements
init();
connecterGestionnaires();



//Point d'entrée
afficherIntroduction();
