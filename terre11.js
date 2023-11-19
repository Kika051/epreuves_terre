function convertirHeure(heure24h) {
  const [heures, minutes] = heure24h.split(":");
  let heures12h, indicatif;
  // Créer une condition pour voir si l'heure est en am ou pm
  if (heures == 0) {
    heures12h = 12;
    indicatif = "AM";
  } else if (heures == 12) {
    heures12h = 12;
    indicatif = "PM";
  } else if (heures > 12) {
    heures12h = heures - 12;
    indicatif = "PM";
  } else {
    heures12h = parseInt(heures, 10);
    indicatif = "AM";
  }
  return `${heures12h}:${minutes}${indicatif}`;
}

// Récupérer l'heure en ligne de commande
const heure24h = process.argv[2];

// Vérifier si l'argument est fourni
if (heure24h) {
  const heure12h = convertirHeure(heure24h);
  console.log(heure12h);
} else {
  console.log("Veuillez fournir une heure au format 24h en argument.");
}
