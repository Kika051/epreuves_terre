//Utilisation d'un split pour inverser les chaine de caractere
function chaineInverser(chaine) {
  var chaineInverse = chaine.split("").reverse().join("");

  console.log(chaineInverse);
}

var argument = process.argv[2];

chaineInverser(argument);
