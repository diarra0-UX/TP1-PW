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
     *
     */
    constructor(question, reponses, solution, valeur) {
        this._question = question;
        this._reponses = reponses;
        this._solution = solution;
        this._valeur = valeur;


        //Pour l'expension du programme
        this._essais = 0;
        this._pointsObtenus = 0;
    }

// --- Getters ---
    get question() {
        return this._question;
    }

    get reponses() {
        return this._reponses;
    }

    get solution() {
        return this._solution;
    }

    get valeur() {
        return this._valeur;
    }


    get essais() {
        return this._essais;
    }

    get pointsObtenus() {
        return this._pointsObtenus;
    }


    // get indexSolution() {
    //     return this._reponses.indexOf(this._solution);
    // }

    melangerReponses() {
        //  Créer un tableau de couple reponse valeur
        let coupleRepVal = [];

        for (let i = 0; i < this._reponses.length; i++) {
            let unPaquet = {
                reponse: this._reponses[i],
                points: this._solution[i]
            };
            coupleRepVal.push(unPaquet);
        }


        // Mélanger les paquets (algorithme Fisher-Yates)
        for (let i = coupleRepVal.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1)); // index aléatoire entre 0 et i
            // échange coupleRepVal[i] <--> coupleRepVal[j]
            let temp = coupleRepVal[i];   // garder l’ancien élément i
            coupleRepVal[i] = coupleRepVal[j];  // mettre j à la place de i
            coupleRepVal[j] = temp;
        }
        //  Remettre dans _reponses et _solution
        for (let i = 0; i < coupleRepVal.length; i++) {
            this._reponses[i] = coupleRepVal[i].reponse;
            this._solution[i] = coupleRepVal[i].points;

        }
    }


    /**
     * Évalue le score pour la réponse recue. Le score est conservé dans l'objet. REtourne un tableau indiquant chaque réponse (bonne, mauvaise ou autre))
     * @param choix un tableau contenant les index des réponses
     * @returns {*} un tableau contenant des  objets;
     * l'objet possède une validation :'red' pour les mauvaises'; et 'black' pour les autres
     * et une le nombre de points obtenus ou perdus
     */
    evaluerReponse(choix) {
        let tab = [];
        for (let i = 0; i < this._reponses.length; i++) {
            let estCochee = choix.includes(i);
            let estBonneReponse = this._solution[i] > 0;  // ← Voici la vérification !

            if (estCochee && estBonneReponse) {
                tab.push({
                    validation: "green",
                    points: this._solution[i]
                })
            } else if (!estCochee && estBonneReponse) {
                tab.push({
                    validation: "red",
                    points: this._solution[i]
                })

            } else if (estCochee && !estBonneReponse) {
                tab.push({
                        validation: "orange",
                        points: this._solution[i]
                    }
                )
            } else if (!estCochee && !estBonneReponse) {
                tab.push({
                    validation: "black",
                    points: this._solution[i]
                })
            }
        }

        let pointsTotal = 0;

        for (let i = 0; i < this._solution.length; i++) {
            if (choix.includes(i)) {
                pointsTotal += this._solution[i];
            }
        }
        this._pointsObtenus = pointsTotal / 100 * this._valeur;
        this._essais++;
        return tab;
    }


}