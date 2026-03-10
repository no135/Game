let player = new Player();

document.addEventListener('DOMContentLoaded', () => {
    const name = prompt("Enter your name for the game:");
    if(name) player.name = name;

    updateUI();
    logEvent(`Born in a ${player.familyWealth} family.`);
    logEvent("Goal: Become a Billionaire or a Royal by age 60!");
});

// Age Button
document.getElementById('btn-age').addEventListener('click', () => {
    if (player.age >= 100 || player.health <= 0) {
        logEvent("Game Over. You lived a long life.");
        return;
    }
    player.ageUp();

    // Random Events
    if (Math.random() > 0.7) {
        const event = RANDOM_EVENTS[Math.floor(Math.random() * RANDOM_EVENTS.length)];
        event.effect(player);
        logEvent(event.text);
    }

    checkWinConditions();
    updateUI();
});

// Hospital Button
document.getElementById('btn-hospital').addEventListener('click', () => {
    player.improveHealth();
    logEvent("🏥 You visited the hospital and improved your health!");
    updateUI();
});

// Job Button
document.getElementById('btn-job').addEventListener('click', () => {
    const availableJobs = JOBS.filter(j => player.age >= j.minAge && player.smarts >= j.minSmarts);
    if (availableJobs.length > 0) {
        player.job = availableJobs[Math.floor(Math.random() * availableJobs.length)];
        logEvent(`Started a new career as a ${player.job.title}!`);
    } else logEvent("No jobs available. Improve your smarts or age up.");
    updateUI();
});

// Education Button
document.getElementById('btn-education').addEventListener('click', () => {
    const uni = EDUCATION.UNIVERSITY;
    if (player.smarts < uni.smartsReq) {
        logEvent("Your smarts are too low for University.");
        return;
    }
    if (player.bank >= uni.cost) {
        player.bank -= uni.cost;
        player.educationLevel = "University";
        logEvent("🎓 You enrolled in University.");
    } else {
        player.studentDebt += uni.cost;
        player.educationLevel = "University";
        logEvent("🎓 You took student loans and enrolled in University.");
    }
    updateUI();
});

// Royalty Button
document.getElementById('btn-royal').addEventListener('click', () => {
    if (player.isRoyal) return;
    if (Math.random() < 0.1) {
        player.isRoyal = true;
        player.bank += 10000000;
        logEvent("👑 You married into Royalty! You are now a Consort.");
    } else logEvent("You went to a gala but didn't meet any royals.");
    updateUI();
});

// Dating Button
document.getElementById('btn-date').addEventListener('click', () => {
    if(player.spouse){
        logEvent("You are already married.");
        return;
    }
    const potential = ["Alex","Jordan","Taylor","Morgan","Casey","Riley"];
    const partnerName = potential[Math.floor(Math.random()*potential.length)];
    logEvent(`💖 You went on a date with ${partnerName}.`);
});

// Marry Button
document.getElementById('btn-marry').addEventListener('click', () => {
    if(player.spouse){
        logEvent("You are already married.");
        return;
    }
    const spouseName = prompt("Enter your spouse's name:");
    if(spouseName){
        player.spouse = spouseName;
        logEvent(`💍 You married ${spouseName}!`);
    }
    updateUI();
});

// Have Child Button
document.getElementById('btn-have-child').addEventListener('click', () => {
    if(!player.spouse){
        logEvent("You need a spouse to have children.");
        return;
    }
    const childName = prompt("Enter your child's name:");
    if(childName){
        const child = player.haveChild(childName);
        logEvent(`👶 You had a child named ${child.name}!`);
    }
    updateUI();
});

// --- UI Updates ---
function updateUI(){
    document.getElementById('stat-age').innerText = player.age;
    document.getElementById('stat-bank').innerText = player.bank.toLocaleString();
    document.getElementById('stat-name').innerText = player.name;
    document.getElementById('stat-spouse').innerText = player.spouse || "-";
    document.getElementById('stat-children').innerText = player.children.length;

    document.getElementById('bar-health').style.width = `${player.health}%`;
    document.getElementById('bar-smarts').style.width = `${player.smarts}%`;
    document.getElementById('bar-happiness').style.width = `${player.happiness}%`;

    document.getElementById('bar-health').className = player.health < 30 ? "progress-bar bg-danger" : "progress-bar bg-success";
}

function logEvent(message){
    const log = document.getElementById('life-log');
    const entry = document.createElement('div');
    entry.className = 'log-entry';
    entry.innerText = `[Age ${player.age}] ${message}`;
    log.prepend(entry);
    if(log.children.length>50) log.removeChild(log.lastChild);
}

function checkWinConditions(){
    if(player.bank >= 1000000000 && player.age <= 60) alert("🏆 CHALLENGE COMPLETE: You are a Self-Made Billionaire!");
    if(player.isRoyal && player.age <= 60) logEvent("🏆 CHALLENGE COMPLETE: Long live the Monarch!");
    if(player.health<=0) alert("💀 You died due to poor health.");
}
