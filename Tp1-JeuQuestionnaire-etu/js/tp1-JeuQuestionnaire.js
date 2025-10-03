"use strict"
let poolQuestions=[];
let  quizzCourant ;

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
    /* ---------Affichage des questions----------*/
    let monDiv = document.getElementById("contenu");
    let divQuest = document.createElement("div");
    let divResp = document.createElement("div");
    let h2 = document.createElement('h2');
    let score = document.createElement('p');
    divQuest.id = "displayquest";
    divResp.id = "respon";
    score.id = "score";
    score.textContent = quizzCourant.scoreTotal + " / 10";
    h2.textContent = 'Question ' + numeroQuestion + ' sur ' + NBR_QUESTION_QUIZ + ' (' + questionCourante.valeur + ' points)';
    let paragraph = document.createElement('p');
    paragraph.textContent = questionCourante.question;
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
function recupererChoix() {
    let checkboxes = document.querySelectorAll('input[name="reponseQuestions"]:checked');

    let choixUtilisateur = [];

    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {  // Si elle est cochée
            choixUtilisateur.push(parseInt(checkboxes[i].value));
        }
    }
    console.log("Choix de l'utilisateur:", choixUtilisateur);
    return choixUtilisateur;
}


/**
 * Préparer, afficher et gérer la vérification de la réponse à la question courante.
 * Modifie le DOM en conséquence pour présenter la correction.
 */
function verifierReponses() {

    let checkboxes = document.getElementsByName("reponseQuestions");

    let choixUsers = recupererChoix();

    let resultat;
    let questionCourante = quizzCourant.questionCourante;
    let pointsQuestion = 0;
    if(choixUsers.length === 0){
        alert("Vous devez Choisir au  moins une réponse");
    }else {
        resultat = questionCourante.evaluerReponse(choixUsers);

        for (let i = 0; i < resultat.length; i++) {
            let couleur = resultat[i].validation;
            let point = resultat[i].points;

            let label = document.querySelector('label[for="reponse' + i + '"]');

            label.style.color = couleur;

            let spanPoints = document.createElement("span");
            spanPoints.textContent = " → " + point+ " pts";
            spanPoints.style.fontWeight = "bold";
            label.appendChild(spanPoints);
            pointsQuestion += point;
            quizzCourant.ajouterPoints(pointsQuestion);
            checkboxes[i].disabled = true;
        }



        const button = document.getElementById("boutonValider");
        button.style.display = "none";
        const buttonContinue = document.getElementById("boutonContinuer");
        buttonContinue.style.display = "inline";
        quizzCourant.questionSuivante();
    }



}




//Afficchage et gestion de l'application





/**
 *
 * Construire, afficher et gérer l'intro
 */
function afficherIntroduction() {
    // Faire l'affichage de la page d'introduction

    createPourLire("hid","p");
    const button = createButton("button1","Commencer","button","butt");
    const hidden = document.getElementById("hid");

    button.addEventListener("click", (event) => {
        hidden.style.display = "none"; // on cache l'intro
        afficherQuestions();          // on lance la première question
    });
    console.log("hey");
}




function connecterGestionnaires() {
    const valid = document.getElementById("boutonValider");
    const continuer = document.getElementById("boutonContinuer");
    const annuler = document.getElementById("boutonAnnuler");

    valid.addEventListener("click", function () {
    verifierReponses();
       // alert('Ça marche !');
    });
    if( !quizzCourant.estDerniereQuestion()){

    continuer.addEventListener("click", function (){
            afficherQuestions();

    })



    }//else{
    //         continuer.style.display= "none";
    //         annuler.style.display = "none";
    //     }

    annuler.addEventListener("click",  () => {
        document.getElementById("displayquest").style.display = "none";
        valid.style.display = "none";
        annuler.style.display = "none";
        document.getElementById("respon").style.display = "none";
        afficherIntroduction();
    })
        console.log(quizzCourant.indexCourant);

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
        objetQuestion.melangerReponses();
        poolQuestions.push(objetQuestion);
    }
    console.log(`${poolQuestions.length} questions chargées dans le pool`);

    console.log("Première question:", poolQuestions[0].question);
    console.log("Ses réponses:", poolQuestions[0].reponses);
     quizzCourant = new Quiz(poolQuestions, NBR_QUESTION_QUIZ); // maintenant seulement

    verroulle("verrouiller");
}

// Connecter les gestionnaires d'événements
init();

connecterGestionnaires();


//Point d'entrée
afficherIntroduction();

