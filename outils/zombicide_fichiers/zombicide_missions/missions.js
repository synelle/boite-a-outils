/* ==========================================================================
   CATALOGUE DES MISSIONS
   Un navigateur ne sait pas lister un dossier : cette liste lui dit quoi lire.

   Chaque mission est un fichier .js qui s'annonce lui-même. La quête n'existe
   donc qu'à UN seul endroit — c'est ce qui évite qu'une copie finisse par
   dater. Et une balise de script est autorisée même en file://, là où la
   lecture d'un .json voisin ne l'est pas.

   Pour ajouter une mission : l'éditeur produit le .js avec « Enregistrer la
   mission », dépose-le ici, puis ajoute son nom ci-dessous.
   ========================================================================== */
window.ZBP_MISSION_FILES = [
  "q00-danse-macabre.js",
  "q01-chasse-au-gros-gibier.js"
];
