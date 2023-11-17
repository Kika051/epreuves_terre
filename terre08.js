// Vérifier si le nombre d'arguments est correct
if (process.argv.length !== 4) {
  console.log(
    "Erreur : Veuillez fournir deux arguments, la base et l'exposant."
  );
} else {
  // Récupérer les arguments depuis la ligne de commande
  var base = parseFloat(process.argv[2]);
  var exposant = parseInt(process.argv[3]);

  // Vérifier si les arguments sont valides
  if (isNaN(base) || isNaN(exposant) || exposant < 0) {
    console.log(
      "Erreur : Veuillez fournir une base numérique et un exposant non négatif."
    );
  } else {
    // Calculer la puissance en utilisant une boucle
    var resultat = 1;
    for (var i = 0; i < exposant; i++) {
      resultat *= base;
    }

    // Afficher le résultat du calcul de puissance
    console.log(resultat);
  }
}
