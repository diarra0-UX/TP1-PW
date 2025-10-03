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

    document.getElementById("contenu").appendChild(input);
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

    document.getElementById("contenu").appendChild(lable);
    return lable;
}
/**
 * Vider complètement le contenu de la div
 */
function viderContenue(){
    const contenu = document.getElementById("contenu");
    contenu.innerHTML = "";
}
/**
 * Créer une checkbox avec son label associé dans une div
 * @param index - Index de la réponse (0-4)
 * @param texteRepone
 * @param nomGroupe - Nom commun pour grouper les checkboxes
 * @returns {HTMLElement} - Div contenant la checkbox et le label
 */
function creerCheckbox(index, texteRepone, nomGroupe){
    const monDiv = document.createElement("div");
    // creeons la checkbox
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "reponse"+ index;
    checkbox.name = nomGroupe;
    checkbox.value = index;

    //creeons le label
    let label = document.createElement("label");
    label.htmlFor = "reponse"+ index;
    label.textContent= texteRepone;

    //ajout au Dom
    monDiv.appendChild(checkbox);
    monDiv.appendChild(label);

    let br = document.createElement("br");
    monDiv.appendChild(br);
    return monDiv;
}

// ajoutez le code de création d'autres éléments  que vous avez besoin de créer dynamiquement.
function createPourLire(id,tagName){
    const para = document.createElement(tagName);
    para.innerHTML = "Je vous invite à participer à un petit jeu-questionnaire " +
        "qui comporte 5 questions choisies au hasard dans un ensenble de questions." +
        " Chaque bonne réponse vous donne un certain nombre de points." +
        " À la fin de ce jeu-questionnaire, vous aurez votre résultat final. <br><br>"+
        " En souhaitant que cela vous plaise! <br><br>"+
        " Bonne chance ! <br><br>";
    if (id !== "") {
        para.id = id;
    }
    document.getElementById("contenu").appendChild(para);
    return para;
}

function affichageQuestions(id,tagName){
    const para = document.createElement(tagName);
    para.innerHTML = "Question 1:  " +
        "qui comporte 5 questions choisies au hasard dans un ensenble de questions." +
        " Chaque bonne réponse vous donne un certain nombre de points." +
        " À la fin de ce jeu-questionnaire, vous aurez votre résultat final. <br><br>"+
        " En souhaitant que cela vous plaise! <br><br>";
    if (id !== "") {
        para.id = id;
    }
    document.getElementById("contenu").appendChild(para);
    return para;
}

function createButton(id, name, type, classe){
    let button = document.createElement("id");
    button.innerText = name;
    button.classList.add(classe);
    button.type = type;
    button.style.backgroundColor = "#f2b118";

    if (id !== "") {
        button.id = id;
    }
    document.getElementById("contenu").appendChild(button);
    return button;
}
/**
 * Afficher ou masquer des boutons
 * @param boutons - Objet avec les IDs des boutons et leur état (true = afficher, false = cacher)
 */
function gererAffichageBoutons(boutons) {
    for (let id in boutons) {
        let bouton = document.getElementById(id);
        if (bouton) {
            bouton.style.display = boutons[id] ? "inline" : "none";
        }
    }
}

function formQuestion(){}
function verroulle(id){
    let input = document.createElement("input");
    let label = creerLabel("test","verrouiller", "Interface verrouillé");
    input.type = "checkbox";
    input.name = "verrouille";
    input.value = "verrouillage";


    if (id !== "") {
        input.id = id;
    }


    document.getElementById('zoneDeDonnees').appendChild(input);
    document.getElementById('zoneDeDonnees').appendChild(label);
}



// Append to another element:

//contenu.innerText = creerLabel("test","test", "numeroun");
//creerInput("test","checkbox","numeroun","nanos");
