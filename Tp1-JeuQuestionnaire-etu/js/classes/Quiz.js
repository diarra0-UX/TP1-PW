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
        this._indexCourant = 0;
        this._scoreTotal = 0;
        this._questionsSelectionnees = this.selectionnerQuestions();

    }

        /* -------getters---------*/
    get numeroQuestionCourante() {
        return this._indexCourant + 1; // +1 car index commence à 0
    }

    get nombreTotalQuestions() {
        return this._nbrQuestion;
    }
    get questionsSelectionnees() {
        return this._questionsSelectionnees;
    }
    get scoreTotal() {
        return this._scoreTotal;
    }
    get indexCourant(){
        return this._indexCourant;
    }
    get questionCourante() {
        return this._questionsSelectionnees[this._indexCourant];
    }


    selectionnerQuestions() {
        let questionsChoisies = [];
        let disponibles = [...this._arrayQuestions];

        for (let i = 0; i < this._nbrQuestion; i++) {
            let indexAleatoire = Math.floor(Math.random() * disponibles.length);
            questionsChoisies.push(disponibles[indexAleatoire]);
            disponibles.splice(indexAleatoire, 1);
        }

        return questionsChoisies;
    }

    questionSuivante() {
        if (this._indexCourant < this._nbrQuestion - 1) {
            this._indexCourant++;
            return true;
        }
        return false; // Plus de questions
    }

    estDerniereQuestion() {
        return this._indexCourant === this._nbrQuestion - 1;
    }

    ajouterPoints(points) {
        this._scoreTotal += points;
    }



    /**
     * Déterminer un message d'encouragement selon un pourcentage obtenu.
     *
     * @returns {string}
     */
    determinerEncouragement(score) {
        if(score >= 95 && score === 100){
            return "Félicitation!!!";
        }else if(score >= 85 &&  score <= 94.99){
            return "C'est très bien, continuez sur cette lancée.";
        }else if(score >= 70 &&  score <= 84.99){
            return "C'est bien, bien que il y a des détails à corriger.";
        }else if(score >= 60 && score <= 69.99){
            return "Vous êtez juste, ça manque de consistance malgré de bonne base en Javascript.";
        }else if(score >= 30 && score <= 59){
            return "C'est faible, vous pouvez faire mieux j'en suis sûr!";
        }else{
            return "C'est très faible, vous devez revoir vos cours en plus de suivre des cours particulier de javascript!";
        }

    }
}