// Création de la fonction avec les différentes condition
function divisionEtReste(dividende, diviseur) {
  if (diviseur !== 0) {
    var resultat = dividende / diviseur;
    var reste = dividende % diviseur;

    console.log("Le résultat de la division est : " + resultat);
    console.log("Le reste de la division est : " + reste);
  } else {
    console.log("Erreur : Division par zéro");
  }
}

// Récupération des arguments de la ligne de commande
var dividende = parseFloat(process.argv[2]);
var diviseur = parseFloat(process.argv[3]);

// Appel de la fonction avec les deux nombres en entrée
divisionEtReste(dividende, diviseur);
