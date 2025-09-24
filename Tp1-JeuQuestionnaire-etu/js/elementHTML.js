"use strict";

/*
Vieille librairie de fonctions de création de balises HTML.
Il y a mieux dans le fichier "html.js" du formatif 5.
 */

const contenu = document.getElementById("contenu");

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
function createPourLire(tagName){
    const para = document.createElement(tagName);
    para.innerHTML = "Je vous invite à participer à un petit jeu-questionnaire " +
        "qui comporte 5 questions choisies au hasard dans un ensenble de questions." +
        " Chaque bonne réponse vous donne un certain nombre de points." +
        " À la fin de ce jeu-questionnaire, vous aurez votre résultat final. <br><br>"+
        " En souhaitant que cela vous plaise! <br><br>"+
        " Bonne chance ! <br><br>";
    document.getElementById("contenu").appendChild(para);
}



createPourLire("p");
// Append to another element:

//contenu.innerText = creerLabel("test","test", "numeroun");
//creerInput("test","checked","numeroun","nanos");
