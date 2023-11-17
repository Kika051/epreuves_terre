// Vérifier si le nombre d'arguments est correct
if (process.argv.length !== 3) {
  console.log("Erreur : Veuillez fournir un seul argument, un entier positif.");
} else {
  // Récupérer les arguments depuis la ligne de commande
  var nombre = parseInt(process.argv[2]);

  // Vérifier si l'argument est valide
  if (isNaN(nombre) || nombre < 0) {
    console.log("Erreur : Veuillez fournir un entier positif.");
  } else {
    // Calculer la racine carrée en utilisant une méthode d'itération simple
    var resultat = 0;
    while (resultat * resultat <= nombre) {
      resultat++;
    }

    // Le résultat est maintenant la racine carrée
    console.log(resultat - 1);
  }
}
