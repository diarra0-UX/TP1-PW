"use strict";

/*
Vieille librairie de fonctions de création de balises HTML.
Il y a mieux dans le fichier "html.js" du formatif 5.
 */



/**
 * Créer une balise HTML input
 *
 * @param type
 * @param name
 * @param id
 * @param value
 * @returns {HTMLInputElement}
 */
function creerInput(id, type, name, value = "") {
    let input = document.createElement("input");
    input.type = type;
    input.name = name;
    input.value = value;

    if (id !== "") {
        input.id = id;
    }

    return input;
}

/**
 * Créer une balise HTML label
 *
 * @param htmlFor
 * @param value
 * @returns {HTMLLabelElement}
 */
function creerLabel(id, paraFor, value) {
    let lable = document.createElement("label");
    lable.htmlFor = paraFor;
    lable.innerHTML = value;

    if (id !== "") {
        lable.id = id;
    }

    return lable;
}

// ajoutez le code de création d'autres éléments  que vous avez besoin de créer dynamiquement.
