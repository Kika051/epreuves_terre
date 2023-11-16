// Vérifier s'il y a un argument
if (process.argv.length !== 3) {
  console.log("Veuillez fournir un entier en argument.");
} else {
  //transformé l'argument en nombre
  const nombre = parseInt(process.argv[2]);
  // Vérifier si l'argument est un nombre entier
  if (!isNaN(nombre) && Number.isInteger(nombre)) {
    // Vérifier si l'entier est pair ou impair
    if (nombre % 2 === 0) {
      console.log(`${nombre} est un entier pair.`);
    } else {
      console.log(`${nombre} est un entier impair.`);
    }
  } else {
    console.log("Veuillez fournir un nombre entier");
  }
}
