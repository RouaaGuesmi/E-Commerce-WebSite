function validerFormulaire() {
	var nom = document.forms["inscription"]["nom"].value;
	var prenom = document.forms["inscription"]["prenom"].value;
	var email = document.forms["inscription"]["email"].value;
	var motDePasse = document.forms["inscription"]["motDePasse"].value;
	var pass = document.getElementById('motDePasse').value;
            var confirm_pass = document.getElementById('cmotDePasse').value;
            if (pass != confirm_pass) {
                alert('☒ Use same password');}
            else {
               
                    alert('🗹 Password Matched');
              
            }
	if (nom == "" || prenom == "" || email == "" || motDePasse == "") {
		alert("Veuillez remplir tous les champs!");
		return false;
	}
	return true;
}




function valider () {
var nom = document.forms["loginForm"]["username"].value;
var motDePasse = document.forms["loginForm"]["password"].value;

  if (username.value == "" || password.value == "") {
    alert("Ensure you input a value in both fields!");
  } else {
   
    alert("This form has been successfully submitted!");
    
  }
};