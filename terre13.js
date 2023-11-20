//créer la condition pour désigné la suisse
function trouvélasuisse(a, b, c) {
  if ((a < b && b < c) || (c < b && b < a)) {
    return b;
  } else if ((b < a && a < c) || (c < a && a < b)) {
    return a;
  } else {
    return c;
  }
}

// entré les arguments dans le terminal
const nombre1 = parseInt(process.argv[2], 10);
const nombre2 = parseInt(process.argv[3], 10);
const nombre3 = parseInt(process.argv[4], 10);

// Condition pour voir si les nombre sont designé
if (!isNaN(nombre1) && !isNaN(nombre2) && !isNaN(nombre3)) {
  const resultat = trouvélasuisse(nombre1, nombre2, nombre3);
  console.log("La valeur du milieu est :", resultat);
} else {
  console.log("Veuillez fournir trois entiers en arguments.");
}
