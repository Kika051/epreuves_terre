// Importer le module path
let path = require("path");

// Obtenir le nom du fichier en cours d'exécution avec la fonction basename
let filename = path.basename(__filename);

// Afficher le nom du fichier à la console
console.log(filename);
