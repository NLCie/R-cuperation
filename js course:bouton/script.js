// le form annule toute l'actualisation
let form = document.querySelector("form");
// Enlever l'actualisation par defaut de submit (bouton)
// les evenements qui surveille si on a tapé ds le champ de texte
  form.addEventListener("submit", (event) => {
    //cet event annule le comportement par defaut
    event.preventDefault()
    let text = document.getElementById("text")
    console.log(text.value)
    if(text.value === ""){
        console.log("vide")
    }else{
        console.log("non vide")
    }
})
// ici on peut utiliser l' evenement change et input 
text.addEventListener("input", (event) => {
    
    const texteSuivi = event.target.value
    if(texteSuivi === ""){
        console.log("vide")
    }else{
        console.log("non vide")
    }
})

// verification si il y a ce que l'on veut ds un champ
// ex si les expressions regulieres marchent
 let chaine = "MulAn"
 let regex = new RegExp("^[a-z]+$");
 let resultat = regex.test(chaine);
 console.log(resultat)
 /*********************************************************************************************************
  * 
  *           **LES  RegExp**                cad   la limitation de ce que on peut mettre ds un input 
  *  
  **********************************************************************************************************/

 // faire a ce que on envoie la reponse que si l'email est correcte

 let baliseEmail = document.getElementById("email")
 function verifierChamp(balise) {
    if(balise.value === ""){
        balise.classList.add("error")
    }else {
        balise.classList.remove("error")
    }
 }

 function verifierEmail(balise) {
    let emailRegExp = new RegExp("[a-z._-]+@[a-z_-]+\\.[a-z._-]+")
    if(emailRegExp.test(balise)){
        balise.classList.remove("error")
    }else {
        balise.classList.add("error")
    }
 }
 baliseEmail.addEventListener("change", () => {
    verifierEmail(baliseEmail)
 })
 /*********************************************************************************************************
  * 
  * RECUPERATION DES ERREURS
  * 
  **********************************************************************************************************/
// recuperation des erreur par les if
 let idInexistant = document.getElementById("idInexistant")
if(idInexistant === null){
    console.log("l'elt n'existe pas")
}else{
    idInexistant.createElement("div")
}

// recuperation des erreurs par try et catch

try{
    let inexistant = document.getElementById("inexistant")
    inexistant.createElement("div")
}catch{
    console.log("erreur du try")
}
// l'utulisation de throw

/*function verifierChamp(champ){
    // si le champ est vide on lance une exception
    if(champ.value === ""){
        throw new (`Le champ ${champ.id} est vide`);
    }
}*/
function verifierNom(chaine) {
    if (chaine.length < 2){
        throw new Error(`la chaine ${chaine} est trop petite`);
    }
}

try{
    verifierNom("Beau")
} catch (erreur) {
    console.log(erreur)
}
/*
form.addEventListener("submit", () => {
    try{
        let baliseNom = document.getElementById("nom")
        verifierChamp(baliseNom)

        let balisePrenom = document.getElementById("prenom")
        verifierChamp(balisePrenom)

        let baliseSurNom = document.getElementById("surnom")
        verifierChamp(baliseSurNom)

        let baliseEmail = document.getElementById("email")
        verifierChamp(baliseEmail)
        // traitement du formulaire
    } catch (erreur) {
        console.log(erreur)
    }
})
*/