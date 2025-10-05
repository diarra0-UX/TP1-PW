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
    //if(numeroQuestion > NBR_QUESTION_QUIZ){
  //      document.getElementById("displayquest").style.display = "none";
   //     document.getElementById("boutonValider").style.display = "none";
  //      document.getElementById("boutonAnnuler").style.display = "none";
   //     document.getElementById("respon").style.display = "none";
  //      afficherResultats();
  //  }


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

    if(choixUsers.length === 0){
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
            spanPoints.textContent = " → " + point+ " pts";
            spanPoints.style.fontWeight = "bold";
            label.appendChild(spanPoints);
            checkboxes[i].disabled = true;
        }

        quizzCourant.ajouterPoints(questionCourante.pointsObtenus);

    // Mettre à jour le score affiché
    document.getElementById("score").textContent = quizzCourant.scoreTotal.toFixed(1) + " / " + calculerScoreMax();

if(quizzCourant.estDerniereQuestion()){
    gererAffichageBoutons({
        boutonValider: false,
        boutonAnnuler: false,
        boutonContinuer: false,
        boutonTerminer: true

    })

}else{
    gererAffichageBoutons({
        boutonValider: false,
        boutonAnnuler: true,
        boutonContinuer: true,
        boutonTerminer: false
    });
}


    }

function calculerScoreMax() {
    let total = 0;
    for (let q of quizzCourant._questionsSelectionnees) {
        total += q.valeur;
    }
    return total;
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

    button.addEventListener("click", (event) => {
        hidden.style.display = "none"; // on cache l'intro
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

    annuler.addEventListener("click",  () => {
        document.getElementById("displayquest").style.display = "none";
        valid.style.display = "none";
        annuler.style.display = "none";
        document.getElementById("respon").style.display = "none";
        afficherIntroduction();
    });

    terminer.addEventListener("click", () =>{
        viderContenue();
        afficherResultats();
    });
}
function init() {
    // Le code qui ne doit être exécuté qu'une seule fois.

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
     quizzCourant = new Quiz(poolQuestions, NBR_QUESTION_QUIZ); // maintenant seulement

    verroulle("verrouiller");
}

// Connecter les gestionnaires d'événements
init();
connecterGestionnaires();

//Point d'entrée
afficherIntroduction();

