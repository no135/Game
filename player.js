/**
 * Player Class: Manages the lifecycle, attributes, relationships, and legacy.
 */
class Player {
    constructor(name = "Random Citizen", age = 0, bank = 300000) {
        this.name = name;
        this.age = age;
        this.bank = bank;
        this.health = Math.floor(Math.random() * 40) + 60; // 60-100
        this.smarts = Math.floor(Math.random() * 100);     // 0-100
        this.happiness = 100;
        this.isRoyal = false;
        this.job = null;
        this.educationLevel = "None";
        this.familyWealth = this.generateFamilyBackground();
        this.hasScholarship = false;
        this.studentDebt = 0;

        // Relationships
        this.spouse = null;
        this.children = [];

        // Legacy
        this.parent = null;  // Track lineage
    }

    generateFamilyBackground() {
        const types = ['Poor', 'Middle Class', 'Wealthy'];
        const roll = Math.random();
        if (roll < 0.4) return types[0];
        if (roll < 0.8) return types[1];
        return types[2];
    }

    ageUp() {
        this.age++;
        // Health randomly fluctuates
        this.health -= Math.floor(Math.random() * 5);

        // Age 18+ Rules: finances
        if (this.age >= 18) {
            this.handleFinances();
        } else {
            this.bank = 0; // Parents cover early life
        }

        // Happiness slowly decreases naturally
        this.happiness = Math.max(0, this.happiness - 1);
    }

    handleFinances() {
        if (this.job) this.bank += this.job.salary;
        if (this.studentDebt > 0) {
            const payment = 5000;
            this.bank -= payment;
            this.studentDebt -= payment;
            if (this.studentDebt < 0) this.studentDebt = 0;
        }
        if (!this.isRoyal) this.bank -= 1200; // Living costs
    }

    improveSmarts() {
        this.smarts = Math.min(100, this.smarts + 10);
    }

    improveHealth() {
        this.health = Math.min(100, this.health + 30);
        this.happiness = Math.min(100, this.happiness + 50);
    }

    marry(partner) {
        if(this.spouse) return false;
        this.spouse = partner.name;
        partner.spouse = this.name;
        return true;
    }

    haveChild(childName) {À
        const child = new Player(childName);
        child.parent = this;
        this.children.push(child);
        return child;
    }
}
