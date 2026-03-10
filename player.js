/**
 * Player Class: Manages the lifecycle and attributes of the character.
 */
class Player {
    constructor() {
        this.name = "Random Citizen";
        this.age = 0;
        this.bank = 0;
        this.health = Math.floor(Math.random() * 40) + 60; // Start 60-100
        this.smarts = Math.floor(Math.random() * 100);    // Completely random
        this.happiness = 100;
        this.isRoyal = false;
        this.job = null;
        this.educationLevel = "None"; // None, University, Graduate
        
        // Family Background Logic
        this.familyWealth = this.generateFamilyBackground();
        this.hasScholarship = false;
        this.studentDebt = 0;
    }

    /**
     * Generates a random starting situation.
     * Rules: Accept whatever the game generates.
     */
    generateFamilyBackground() {
        const types = ['Poor', 'Middle Class', 'Wealthy'];
        const roll = Math.random();
        if (roll < 0.4) return types[0]; // 40% Poor
        if (roll < 0.8) return types[1]; // 40% Middle
        return types[2];                 // 20% Wealthy
    }

    /**
     * Handles aging logic and financial rules.
     */
    ageUp() {
        this.age++;
        
        // Health naturally fluctuates
        this.health -= Math.floor(Math.random() * 5);
        
        // Age 18+ Rules: You must support yourself.
        if (this.age >= 18) {
            this.handleFinances();
        } else {
            // Early Life: Parents cover costs, but you can't save money.
            this.bank = 0;
        }
    }

    handleFinances() {
        // Apply Job Salary
        if (this.job) {
            this.bank += this.job.salary;
        }

        // Apply Student Debt payments
        if (this.studentDebt > 0) {
            const payment = 5000; 
            this.bank -= payment;
            this.studentDebt -= payment;
            if (this.studentDebt < 0) this.studentDebt = 0;
        }
        
        // Basic living expenses if not royal
        if (!this.isRoyal) {
            this.bank -= 12000; // Average cost of living
        }
    }

    improveSmarts() {
        this.smarts = Math.min(100, this.smarts + 5);
    }

    improveHealth() {
        this.health = Math.min(100, this.health + 10);
    }
}
