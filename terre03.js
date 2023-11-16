// Vérifier s'il y a un argument
if (process.argv.length !== 3) {
  console.log("Veuillez fournir une lettre en argument.");
} else {
  // Récupérer la lettre en argument
  const lettreDeDepart = process.argv[2].toLowerCase();

  // Vérifier si l'argument est une lettre minuscule
  if (lettreDeDepart >= "a" && lettreDeDepart <= "z") {
    // Afficher l'alphabet à partir de la lettre donnée
    for (
      let lettre = lettreDeDepart;
      lettre <= "z";
      lettre = String.fromCharCode(lettre.charCodeAt(0) + 1)
    ) {
      process.stdout.write(lettre);
    }
  } else {
    console.log("Veuillez fournir une lettre minuscule en argument.");
  }
}
