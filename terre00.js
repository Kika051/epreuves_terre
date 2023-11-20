// Utilisation d'une boucle for pour itérer sur les valeurs ASCII des lettres minuscules de 'a' à 'z'
for (let i = 97; i <= 122; i++) {
  // Utilisation de String.fromCharCode pour obtenir le caractère correspondant
  let char = String.fromCharCode(i);
  // Affichage des caractère dans le terminal
  console.log(char);
}
