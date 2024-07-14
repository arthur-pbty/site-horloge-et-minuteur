const clock = document.getElementById('clock');
const timerInput = document.getElementById('timerInput');
const startTimer = document.getElementById('startTimer');
const timerDisplay = document.getElementById('timer');

// Fonction pour mettre à jour l'horloge chaque seconde
function updateClock() {
    const now = new Date();
    clock.textContent = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock(); // Mise à jour immédiate de l'horloge

// Gestion du minuteur
let timerId;
startTimer.addEventListener('click', () => {
    if (timerId) clearInterval(timerId); // Arrêter le minuteur précédent s'il est en cours

    let duration = parseInt(timerInput.value) * 60; // Convertir les minutes en secondes
    if (isNaN(duration)) return;

    timerId = setInterval(() => {
        if (duration <= 0) {
            clearInterval(timerId);
            timerDisplay.textContent = "Terminé!";
            return;
        }
        duration--;
        const minutes = Math.floor(duration / 60);
        const seconds = duration % 60;
        timerDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }, 1000);
});