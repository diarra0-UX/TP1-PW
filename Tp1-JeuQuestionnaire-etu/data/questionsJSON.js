"use strict";

//IMPORTANT : Pour la syntaxe JSON voir ce lien : https://www.json.org/json-fr.html

let tabAssQuestions =
    {
        "question1": {
            "question": "Quel est l'âge de l'Univers ?",
            "reponses": [
                "6000 ans",
                "4,6 milliards d'années",
                "* 13,7 milliards d'années",
                "L'univers est éternelle et existe depuis toujours",
                "Il n'est pas possible d'évaluer son age",
            ],
            "solution": [-25,-25,100,-25,-25],
            "valeur": 2,
            "reprise": 0,
        },
        "question2": {
            "question": "Toutes les espèces vivantes sur Terre possèdent ... ?",
            "reponses": [
                "De l’ADN",
                "les mêmes gènes (le même génome)",
                "Un animal de compagnie",
                "Toutes ces réponses",
                "Un cerveau",
            ],
            "solution": [100,-25,-25,-25,-25],
            "valeur": 3,
            "reprise": 0,
        },
        "question3": {
            "question": "Le stock de neurones et leurs connexions dans le cerveau se mettent en place chez le foetus et ... ?",
            "reponses": [
                "Ne changent plus jusqu’à la mort",
                "Se dégradent peu à peu et ne se régénèrent pas",
                "Augmentent jusqu’à la fin de la puberté puis stagnent",
                "Se modifient constamment jusqu’à la mort",
                "Se modifient seulement jusqu’à l'age de 20 ans environ",
            ],
            "solution": [-25,-25,-25,100,-25],
            "valeur": 3,
            "reprise": 0,
        },
        "question4": {
            "question": "Combien de sites archéologiques y a-t-il au Québec ?",
            "reponses": [
                "Une trentaine",
                "Environ 350",
                "Plus de 9 000",
                "Aucun",
                "Moins de 5000",
            ],
            "solution": [-25,-25,100,-25,-25],
            "valeur": 2,
            "reprise": 0,
        },
        "question5": {
            "question": "Près de 422 millions de personnes étaient atteintes du diabète dans le monde en " +
                "2014 selon l'Organisation Mondiale de la Santé (OMS). Laquelle de ces propositions est FAUSSE ?",
            "reponses": [
                "Le diabète touche seulement les pays riches",
                "Le diabète entraîne peu de symptômes",
                "Le diabète pourrait être prévenu dans la majorité des cas",
                "Le diabète est un problème étroitement relié à la consommation d'alcool",
                "Le diabète touche seulement les pays pauvres",
            ],
            "solution": [ 100,-25,-25,-25,-25],
            "valeur": 1,
            "reprise": 0,
        },
        "question6": {
            "question": "Au Canada, des séismes dévastateurs (6 ou plus sur l’échelle de Richter) pourraient survenir ... ?",
            "reponses": [
                "À l’Ouest comme à l’Est",
                "Seulement à l’Ouest, aux environs de Vancouver",
                "Nulle part, il n’y a que des séismes de faible magnitude",
                "Nulle part, le Canada n’est pas une zone sismique",
                "Dans les provinces centrales",
            ],
            "solution": [100,-25,-25,-25,-25],
            "valeur": 1,
            "reprise": 0,
        },
        "question7": {
            "question": "Dans quel produit trouve-t-on l’ensemble de ces composés chimiques: éthanol, " +
                "acétone, formaldéhyde, diéthoxyéthane et éthylbutyrate ?",
            "reponses": [
                "Dans une cigarette",
                "Dans une pomme",
                "Dans de la peinture acrylique",
                "Dans l’eau du robinet",
                "Dans la crème solaire",
            ],
            "solution": [-25,100,-25,-25,-25],
            "valeur": 1,
            "reprise": 0,
        },
        "question8": {
            "question": "Qui a découvert la circulation du sang ?",
            "reponses": [
                "Hargobind Khorana",
                "Louis Pasteur",
                "Edward Jenner",
                "William Harvey",
                "Xavier Bichat",
            ],
            "solution": [-25,-25,-25,100,-25],
            "valeur": 2,
            "reprise": 0,
        },
        "question9": {
            "question": "Quel est le nom donné à la fusion des roches qui entre en éruption d'un volcan ?",
            "reponses": [
                "Cratère",
                "Lave",
                "Geyser",
                "Pierre de Feu",
                "Quarks",
            ],
            "solution": [0,100,0,0,0],
            "valeur": 2,
            "reprise": 0,
        },
        "question10": {
            "question": "L'atome est constitué de ?",
            "reponses": [
                "Neutrinos, Rayons Gamma et Positrons",
                "Positrons, Neutrons et Électrons",
                "Protons et Quarks",
                "Protons, Neutrons et Électrons",
                "Quarks, Neutrons et Électrons",
            ],
            "solution":[-25,-25,-25,100,-25],
            "valeur": 3,
            "reprise": 0,
        },
        "question11": {
            //https://www.notre-planete.info/actualites/987-systeme-solaire-nombre-planetes-9e-planete
            "question": "Combien de planètes y a-t-il dans notre système solaire ?",
            "reponses": [
                 "8",
                 "9",
                 "10",
                 "12",
                 "11",
            ],
            "solution": [100,-25,-25,-25,-25],
            "valeur": 1,
            "reprise": 0,
        },
        "question12": {
            "question": "Le Soleil est un(e) ?",
            "reponses": [
                "Satellite",
                "Étoile",
                "Comète",
                "Énorme planète",
                "Galaxie",
            ],
            "solution": [0,0,100,0,0],
            "valeur": 2,
            "reprise": 0,
        },
        "question13": {
            "question": "Choix multiples",
            "reponses": [
                "A",
                "B",
                "C",
                "D planète",
                "E",
            ],
            "solution": [30,-50,30,-50,40],
            "valeur": 2,
            "reprise": 0,
        },
    }