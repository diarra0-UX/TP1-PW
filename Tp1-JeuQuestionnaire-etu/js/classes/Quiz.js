"use strict";


/**
 * Classe permettant de contenir les questions du quiz et d'offrir certains services (délégation)
 * en lien avec la gestion du questionnaire, du pointage et des messages d'encouragement.
 *
 * NOTE : L'implémentation est similaire à celle d'un itérateur sur un tableau.
 * Voir : https://fr.wikibooks.org/wiki/Patrons_de_conception/It%C3%A9rateur
 */
class Quiz {


    constructor(arrayQuestions, nbrQuestion) {
        this._arrayQuestions = arrayQuestions;
        this._nbrQuestion = nbrQuestion;


    }






    /**
     * Déterminer un message d'encouragement selon un pourcentage obtenu.
     *
     * @returns {string}
     */
    determinerEncouragement(score) {
        if(score == 100){
            return "A++";
        }else if(score >= 90){
            return "A";
        }else if(score >= 80){
            return "B";
        }else if(score >= 70){
            return "C";
        }else if(score >= 60){
            return "D";
        }else{
            return "F";
        }

    }
}