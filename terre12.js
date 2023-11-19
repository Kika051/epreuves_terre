function convertirHeure(heure12h) {
  const parties = heure12h.split(":");
  const heures = parseInt(parties[0], 10);
  const minutes = parties[1].slice(0, 2);

  // condition pour transformer l'heure am/pm en format 24h
  if (heure12h.includes("PM") && heures < 12) {
    return `${heures + 12}:${minutes}`;
  } else if (heure12h.includes("AM") && heures === 12) {
    return `00:${minutes}`;
  } else {
    return `${heures}:${minutes}`;
  }
}

// Récupérer l'argument
const heure12h = process.argv[2];

// Vérifier si l'argument est fourni
if (heure12h) {
  const heure24h = convertirHeure(heure12h);
  console.log(heure24h);
} else {
  console.log("Veuillez fournir une heure au format 12h en argument.");
}
