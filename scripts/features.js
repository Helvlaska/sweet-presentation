document.addEventListener("DOMContentLoaded", function () {
  console.log("✅ DOM prêt, script exécuté");

  const featureButtons = document.querySelectorAll(".features__tags .tag");
  const featureImage = document.getElementById("feature-image");
  const featureDescription = document.getElementById("feature-description");

  console.log("🎯 Nombre de boutons trouvés :", featureButtons.length);
  console.log("🖼️ Élément image trouvé :", featureImage);
  console.log("📝 Élément description trouvé :", featureDescription);

  featureButtons.forEach((button) => {
    console.log("🟣 Bouton initialisé :", button.textContent.trim());

    button.addEventListener("click", () => {
      console.log("👉 Clic sur :", button.textContent.trim());

      const newImage = button.getAttribute("data-image");
      const newText = button.getAttribute("data-text");

      console.log("🖼️ Nouvelle image :", newImage);
      console.log("📝 Nouveau texte :", newText);

      // Changement d'image
      featureImage.src = newImage;

      // Changement de texte
      featureDescription.textContent = newText;

      // Gérer l'état actif
      featureButtons.forEach((btn) => btn.classList.remove("tag--active"));
      button.classList.add("tag--active");
    });
  });
});
