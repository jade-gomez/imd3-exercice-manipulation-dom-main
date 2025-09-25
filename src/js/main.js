document.addEventListener("DOMContentLoaded", function () {
  const exercice1 = document.querySelector("#exercice-1");
  const exercice2 = document.querySelector("#exercice-2");
  const exercice3 = document.querySelector("#exercice-3");

  if (exercice1) {
    // Ecrire ici tout le code pour l'exercice 1: Sélecteurs JavaScript
    document.querySelector(".broccoli").remove();
    document.querySelector("#green-veggie").remove();
    document.querySelector('.broccoli[data-organic="true"]').remove();
    document.querySelector(".broccoli.steamed").remove();
    document.querySelector("#last-broccoli").remove();
  }

  if (exercice2) {
    // Ecrire ici tout le code pour l'exercice 2: Modification des classes
  }

  if (exercice3) {
    // Ecrire ici tout le code pour l'exercice 3: Ecouteurs d'événement
  }
});
