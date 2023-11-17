// Initier un compteur à zéro
function compterCaracteres(chaine) {
  var compteur = 0;
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

// Désigner quel mot dans notre terminal nous voulons compter
var maChaine = process.argv[2];
var nombreDeCaracteres = compterCaracteres(maChaine);

console.log(nombreDeCaracteres);
