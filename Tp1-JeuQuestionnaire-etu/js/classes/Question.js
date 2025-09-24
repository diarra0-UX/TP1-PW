"use strict";

/**
 * Classe immuable permettant de contenir les informations à propres d'une question.
 */
class Question {

    /**
     *
     * @param question {string}
     * @param reponses {string[]}
     * @param solution {string}
     * @param valeur {number}
     * @param reprise {number}
     */
    constructor(question, reponses, solution, valeur, reprise) {
        this._question = question;
        this._reponses = reponses;
        this._solution = solution;
        this._valeur = valeur;
        this._reprise = reprise;

        //Pour l'expension du programme
        this._essais = 0;
        this._pointsObtenus=0;
    }




    // get indexSolution() {
    //     return this._reponses.indexOf(this._solution);
    // }

    melangerReponses() {

    }



    /**
     * Évalue le score pour la réponse recue. Le score est conservé dans l'objet. REtourne un tableau indiquant chaque réponse (bonne, mauvaise ou autre))
     * @param choix un tableau contenant les index des réponses
     * @returns {*} un tableau contenant des  objets;
     * l'objet possède une validation :'red' pour les mauvaises'; et 'black' pour les autres
     * et une le nombre de points obtenus ou perdus
     */
    evaluerReponse(choix) {


    }


}