/**
 * Game Logic Controller: Connects the UI to the Player data.
 */

let player = new Player();

// Initialize the Game
document.addEventListener('DOMContentLoaded', () => {
    updateUI();
    logEvent(`Born in a ${player.familyWealth} family.`);
    logEvent("Goal: Become a Billionaire or a Royal by age 60!");
});

// --- Core Game Loop ---
document.getElementById('btn-age').addEventListener('click', () => {
    if (player.age >= 100 || player.health <= 0) {
        logEvent("Game Over. You lived a long life.");
        return;
    }

    player.ageUp();
    
    // Random Life Events
    if (Math.random() > 0.7) {
        const randomMsg = RANDOM_EVENTS[Math.floor(Math.random() * RANDOM_EVENTS.length)];
        logEvent(randomMsg);
    }

    checkWinConditions();
    updateUI();
});

// --- Actions ---
document.getElementById('btn-job').addEventListener('click', () => {
    const availableJobs = JOBS.filter(j => 
        player.age >= j.minAge && 
        player.smarts >= j.minSmarts
    );

    if (availableJobs.length > 0) {
        player.job = availableJobs[availableJobs.length - 1]; // Get best available
        logEvent(`Started a new career as a ${player.job.title}!`);
    } else {
        logEvent("No jobs available. Improve your smarts or age up.");
    }
    updateUI();
});

document.getElementById('btn-royal').addEventListener('click', () => {
    if (player.isRoyal) return;
    
    const roll = Math.random();
    if (roll < 0.01) { // 1% chance to meet royalty
        player.isRoyal = true;
        player.bank += 10000000; // Royal dowry
        logEvent("👑 MIRACLE: You married into Royalty! You are now a Consort.");
    } else {
        logEvent("You went to a gala but didn't meet any royals.");
    }
    updateUI();
});

// --- Helper Functions ---
function updateUI() {
    document.getElementById('stat-age').innerText = player.age;
    document.getElementById('stat-bank').innerText = player.bank.toLocaleString();
    document.getElementById('stat-name').innerText = player.name;
    
    // Update Bars
    document.getElementById('bar-health').style.width = `${player.health}%`;
    document.getElementById('bar-smarts').style.width = `${player.smarts}%`;
    
    // Change health bar color if low
    document.getElementById('bar-health').className = 
        player.health < 30 ? "progress-bar bg-danger" : "progress-bar bg-success";
}

function logEvent(message) {
    const log = document.getElementById('life-log');
    const entry = document.createElement('div');
    entry.className = 'log-entry';
    entry.innerText = `[Age ${player.age}] ${message}`;
    log.prepend(entry);
}

function checkWinConditions() {
    if (player.bank >= 1000000000 && player.age <= 60) {
        alert("🏆 CHALLENGE COMPLETE: You are a Self-Made Billionaire!");
    }
    if (player.isRoyal && player.age <= 60) {
        logEvent("🏆 CHALLENGE COMPLETE: Long live the Monarch!");
    }
}
