// scripts.js

// Événements pour masquer le message lors de la saisie
document.getElementById("username").addEventListener("focus", function() {
    document.getElementById("message").style.display = "none";
});

document.getElementById("password").addEventListener("focus", function() {
    document.getElementById("message").style.display = "none";
});

document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Empêche la soumission par défaut du formulaire
    
    // Ici, vous pouvez ajouter une vérification des identifiants si nécessaire.
    // Pour l'exemple, nous allons rediriger immédiatement.
    
    // Redirection vers la page principale
    window.location.href = "index.html"; // Redirection vers la page principale
});
