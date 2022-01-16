function validation() {
  var nom = document.getElementById("nom").value;
  var prenom = document.getElementById("prenom").value;
  var dateDeNaissance = document.getElementById("dateDeNaissance").value;
  var adress = document.getElementById("adress").value;
  var mail = document.getElementById("mail").value;
  //console.log('nom', nom);
    

  document.getElementById("error").innerHTML = ""; 
  document.getElementById("error").style.display = 'none'
  document.getElementById("result").style.display = 'none'

      
    if (nom.length == "") {
        document.getElementById("error").innerHTML += "la saisie du nom est obligatoire <br>";
    }
    if (prenom.length== "") {
        document.getElementById("error").innerHTML += "la saisie du prénom est obligatoire<br>";
    }
    if (dateDeNaissance.length == "") {
        document.getElementById("error").innerHTML += "la saisie de la date est obligatoire<br>";
    }
    if (mail.length == "") {
        document.getElementById("error").innerHTML += "la saisie du mail est obligatoire <br>";
    }
    if (adress.length == "") {
        document.getElementById("error").innerHTML += "la saisie de l'adresse est obligatoire <br>";
    }

  if (nom.length < 5) {
      document.getElementById("error").innerHTML += "le champs nom  doit contenir au moins 5 caracteres<br>";
  }
   if (prenom.length < 5) {
       document.getElementById("error").innerHTML += "le champs prénom doit contenir au moins 5 caracteres<br>";
   }
  if (dateDeNaissance.length < 5) {
      document.getElementById("error").innerHTML += "La saisie de la date de naissance est obligatoire <br>";
  }
    
  if (mail.length < 5) {
    document.getElementById("error").innerHTML += "le champs mail doit contenir au moins 5 caracteres <br>";
}
  if (adress.length < 5) {
      document.getElementById("error").innerHTML += "le champs adresse doit contenir au moins 5 caracteres <br>";
  }



    if (document.getElementById("error").innerHTML == "") { 
        document.getElementById("result").style.display = 'block'
        document.getElementById("result").innerHTML = "WELCOME " + document.querySelector("#prenom").value;
     }else{
        document.getElementById("error").style.display = 'block'

     }

    }
    

    