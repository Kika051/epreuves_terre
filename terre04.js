if (process.argv.length !== 3) {
  console.log("Veuillez fournir un entier en argument.");
} else {
  const nombre = parseInt(process.argv[2]);

  if (!isNaN(nombre) && Number.isInteger(nombre)) {
    if (nombre % 2 === 0) {
      console.log(`${nombre} est un entier pair.`);
    } else {
      console.log(`${nombre} est un entier impair.`);
    }
  } else {
    console.log("Veuillez fournir un nombre entier");
  }
}
