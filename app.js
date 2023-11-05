function nouveau(){
    let prenom = document.getElementById("first-name");
    let nom = document.getElementById("last-name");
    let message = document.getElementById("message");
    let nomPrenom = document.getElementById("nomPrenom");
    if(prenom.value==""){
        alert("Aucun prénom renseigné - Tous les champs doivent être remplis");
        return false;
    }
    if(nom.value==""){
        alert("Aucun nom renseigné - Tous les champs doivent être remplis");
        return false;
    }
    if(message.value==""){
        alert("Aucun commentaire renseigné - Tous les champs doivent être remplis");
        return false;
    }
    let nomPrenomContent = document.createTextNode(prenom.value + " " + nom.value);
    nomPrenom.appendChild(nomPrenomContent);    
    let divParagraphe = document.getElementById("divParagraphe");
    let paragraphe = document.createElement("p");
    let paragrapheContent = document.createTextNode(message.value);
    paragraphe.appendChild(paragrapheContent);
    divParagraphe.appendChild(paragraphe);
       
}

formulaire.onsubmit = () => {
    formulaire.reset();
    return false;
}

