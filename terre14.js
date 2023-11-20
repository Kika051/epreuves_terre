function trier(liste) {
  if (liste.every(Number.isInteger)) {
    for (let i = 0; i < liste.length - 1; i++) {
      if (liste[i] > liste[i + 1]) {
        return "Pas triée";
      }
    }
    return "Triée";
  } else {
    return "Erreur";
  }
}

// Récuperer les argument dans le terminal
const nombre = process.argv.slice(2).map(Number);

// Voir si les nombres sont donné
if (nombre.length > 0) {
  console.log(trier(nombre));
} else {
  console.log("Fournir des nombres.");
}
