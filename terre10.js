function estPremier() {
  // Récupérer le nombre à partir des arguments de la ligne de commande
  var nombre = process.argv[2];

  // Vérifier si le nombre est inférieur ou égal à 1
  if (nombre <= 1) {
    return "ce n'est pas un nombre premier";
  }

  // Vérifier les diviseurs potentiels jusqu'à la racine carrée du nombre
  for (let i = 2; i <= Math.sqrt(nombre); i++) {
    if (nombre % i === 0) {
      // Si le nombre est divisible par un autre nombre que 1 et lui-même, il n'est pas premier
      return "ce n'est pas un nombre premier";
    }
  }

  // Si aucun diviseur autre que 1 et le nombre lui-même n'est trouvé, le nombre est premier
  return "c'est un nombre premier";
}

console.log(estPremier());
