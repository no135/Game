/**
 * Game Constants - Expanded Version (~140 lines)
 */

// --- JOBS ---
const JOBS = [
    { title: "Part-time Cashier", salary: 150000, minSmarts: 0, minAge: 16, type: "Part-time" },
    { title: "Retail Sales Associate", salary: 22000, minSmarts: 10, minAge: 18, type: "Entry-level" },
    { title: "Customer Support Agent", salary: 32000, minSmarts: 20, minAge: 18, type: "Entry-level" },
    { title: "Junior Developer", salary: 65000, minSmarts: 60, minAge: 22, type: "Full-time" },
    { title: "Teacher", salary: 60000, minSmarts: 65, minAge: 24, type: "Professional" },
    { title: "Software Engineer", salary: 120000, minSmarts: 75, minAge: 23, type: "Technology" },
    { title: "Investment Banker", salary: 350000, minSmarts: 88, minAge: 28, type: "Finance" },
    { title: "Medical Doctor", salary: 250000, minSmarts: 85, minAge: 30, type: "Professional" },
    { title: "Police Officer", salary: 55000, minSmarts: 40, minAge: 21, type: "Public Service" },
    { title: "Professional Athlete", salary: 900000, minSmarts: 30, minAge: 20, type: "Sports" },
    { title: "Famous Actor", salary: 1500000, minSmarts: 40, minAge: 21, type: "Entertainment" },
    { title: "CEO", salary: 1200000, minSmarts: 90, minAge: 40, type: "Executive" },
    { title: "Hedge Fund Manager", salary: 5000000, minSmarts: 95, minAge: 35, type: "Finance" },
    { title: "Startup Founder", salary: 0, minSmarts: 70, minAge: 25, type: "Entrepreneurship" },
    { title: "Freelance Artist", salary: 30000, minSmarts: 30, minAge: 18, type: "Creative" },
    { title: "Journalist", salary: 50000, minSmarts: 50, minAge: 22, type: "Media" },
    { title: "Politician", salary: 120000, minSmarts: 70, minAge: 30, type: "Government" },
    { title: "Chef", salary: 40000, minSmarts: 35, minAge: 18, type: "Hospitality" },
    { title: "Architect", salary: 90000, minSmarts: 75, minAge: 25, type: "Professional" },
    { title: "Lawyer", salary: 150000, minSmarts: 80, minAge: 26, type: "Professional" }
];

// --- EDUCATION PATHS ---
const EDUCATION = {
    NONE: { cost: 0, smartsReq: 0, name: "None" },
    COMMUNITY_COLLEGE: { cost: 10000, smartsReq: 30, name: "Community College" },
    UNIVERSITY: { cost: 40000, smartsReq: 50, name: "University" },
    GRADUATE: { cost: 80000, smartsReq: 75, name: "Graduate School" },
    BUSINESS_SCHOOL: { cost: 100000, smartsReq: 80, name: "Business School (MBA)" },
    MEDICAL_SCHOOL: { cost: 150000, smartsReq: 85, name: "Medical School" },
    LAW_SCHOOL: { cost: 120000, smartsReq: 80, name: "Law School" },
    TRADE_SCHOOL: { cost: 20000, smartsReq: 25, name: "Trade School" },
    ART_SCHOOL: { cost: 30000, smartsReq: 40, name: "Art School" },
    CODING_BOOTCAMP: { cost: 20000, smartsReq: 50, name: "Coding Bootcamp" }
};

// --- ROYALTY TITLES ---
const ROYALTY = [
    { title: "Baron/Baroness", chance: 0.05 },
    { title: "Count/Countess", chance: 0.03 },
    { title: "Duke/Duchess", chance: 0.02 },
    { title: "Marquess/Marchioness", chance: 0.015 },
    { title: "Prince/Princess", chance: 0.005 },
    { title: "King/Queen", chance: 0.001 }
];

// --- RANDOM LIFE EVENTS ---
const RANDOM_EVENTS = [
    { text: "You found a lost wallet.", effect: (p)=>{p.happiness+=5;} },
    { text: "You caught a cold.", effect: (p)=>{p.health-=10;} },
    { text: "You read a difficult book.", effect: (p)=>{p.smarts+=50;} },
    { text: "You won a small lottery prize!", effect: (p)=>{p.bank+=1000000;} },
    { text: "You got into a minor car accident.", effect: (p)=>{p.bank-=2000; p.health-=5;} },
    { text: "A mentor helped improve your skills.", effect: (p)=>{p.smarts+=10;} },
    { text: "You started a side hustle earning extra money.", effect: (p)=>{p.bank+=5000;} },
    { text: "You traveled abroad and felt happier.", effect: (p)=>{p.happiness+=10;} },
    { text: "You got food poisoning.", effect: (p)=>{p.health-=15;} },
    { text: "You were promoted at work!", effect: (p)=>{p.bank+=10000; p.happiness+=5;} },
    { text: "You received a scholarship opportunity!", effect: (p)=>{p.educationLevel="University";} },
    { text: "You were bullied at school.", effect: (p)=>{p.happiness-=5;} },
    { text: "You met someone from a royal family at an event.", effect: (p)=>{if(Math.random()<0.1){p.isRoyal=true; p.bank+=10000000;}} },
    { text: "You volunteered at a local charity.", effect: (p)=>{p.happiness+=7; p.smarts+=2;} },
    { text: "You invested early in a startup.", effect: (p)=>{if(Math.random()<0.3){p.bank+=50000;}} },
    { text: "You adopted a pet.", effect: (p)=>{p.happiness+=5;} },
    { text: "You got a minor injury while playing sports.", effect: (p)=>{p.health-=10;} },
    { text: "You discovered a new hobby.", effect: (p)=>{p.happiness+=5; p.smarts+=3;} },
    { text: "You got into an argument with a colleague.", effect: (p)=>{p.happiness-=5;} },
    { text: "You found a hidden treasure!", effect: (p)=>{p.bank+=20000;} },
    { text: "You were late for work and missed a promotion.", effect: (p)=>{p.happiness-=5;} },
    { text: "You donated to a charity.", effect: (p)=>{p.happiness+=5; p.bank-=1000;} },
    { text: "You attended a networking event.", effect: (p)=>{p.smarts+=3; p.happiness+=2;} },
    { text: "You caught a serious illness.", effect: (p)=>{p.health-=25;} },
    { text: "You saved someone's life.", effect: (p)=>{p.happiness+=10;} },
    { text: "You experienced a natural disaster.", effect: (p)=>{p.happiness-=10; p.bank-=5000;} },
    { text: "You got a minor inheritance.", effect: (p)=>{p.bank+=15000;} },
    { text: "You bought a car.", effect: (p)=>{p.bank-=20000; p.happiness+=5;} },
    { text: "You joined a sports team.", effect: (p)=>{p.health+=5; p.happiness+=5;} },
    { text: "You attended a prestigious seminar.", effect: (p)=>{p.smarts+=5;} },
    { text: "You got a speeding ticket.", effect: (p)=>{p.bank-=500;} },
    { text: "You found a hidden talent.", effect: (p)=>{p.smarts+=5; p.happiness+=5;} },
    { text: "You wrote a book.", effect: (p)=>{p.bank+=20000; p.smarts+=5;} },
    { text: "You had a minor accident at home.", effect: (p)=>{p.health-=5;} },
    { text: "You were praised at work.", effect: (p)=>{p.happiness+=5;} },
    { text: "You joined a community club.", effect: (p)=>{p.happiness+=3;} },
    { text: "You had a romantic date.", effect: (p)=>{p.happiness+=5;} }
];

// --- ADDITIONAL JOBS FOR COMPLETENESS ---
JOBS.push(
    { title: "Event Planner", salary: 50000, minSmarts: 45, minAge: 22, type: "Creative" },
    { title: "Flight Attendant", salary: 40000, minSmarts: 35, minAge: 21, type: "Service" },
    { title: "Social Media Influencer", salary: 100000, minSmarts: 50, minAge: 18, type: "Media" },
    { title: "Research Scientist", salary: 120000, minSmarts: 80, minAge: 25, type: "Professional" },
    { title: "Film Director", salary: 150000, minSmarts: 70, minAge: 25, type: "Entertainment" },
    { title: "Musician", salary: 70000, minSmarts: 40, minAge: 18, type: "Entertainment" },
    { title: "Fashion Designer", salary: 60000, minSmarts: 50, minAge: 20, type: "Creative" }
);

// --- ADDITIONAL EDUCATION FOR VARIETY ---
EDUCATION.CULINARY_SCHOOL = { cost: 25000, smartsReq: 35, name: "Culinary School" };
EDUCATION.MUSIC_SCHOOL = { cost: 30000, smartsReq: 40, name: "Music School" };
EDUCATION.DRAMA_SCHOOL = { cost: 35000, smartsReq: 45, name: "Drama School" };
EDUCATION.ENGINEERING_SCHOOL = { cost: 80000, smartsReq: 70, name: "Engineering School" };
EDUCATION.FASHION_SCHOOL = { cost: 40000, smartsReq: 50, name: "Fashion School" };
EDUCATION.DESIGN_SCHOOL = { cost: 30000, smartsReq: 45, name: "Design School" };
EDUCATION.CODING_BOOTCAMP_ADVANCED = { cost: 40000, smartsReq: 60, name: "Advanced Coding Bootcamp" };





