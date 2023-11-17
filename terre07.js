// Initier un compteur à zéro
function compterCaracteres(chaine) {
  var compteur = 0;

  // créer une condition qui prendra notre argument voulu
  if (process.argv.length !== 3) {
    console.log("Erreur.");
  } else {
    // Parcourir chaque caractère de la chaîne de caractères
    for (var i = 0; i < chaine.split("").reverse().join("").length; i++) {
      compteur++;
    }
    // Retourner le nombre de caractères
    return compteur;
  }
}

// Désigner l'argument dans notre terminal nous voulons compter
var maChaine = process.argv[2];
var nombreDeCaracteres = compterCaracteres(maChaine);

console.log(nombreDeCaracteres);
