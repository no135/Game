/**
 * Game Constants and Lookups
 */
const JOBS = [
    { title: "Part-time Cashier", salary: 15000, minSmarts: 0, minAge: 16, type: "Part-time" },
    { title: "Junior Developer", salary: 65000, minSmarts: 60, minAge: 22, type: "Full-time" },
    { title: "Medical Doctor", salary: 250000, minSmarts: 85, minAge: 30, type: "Professional" },
    { title: "CEO", salary: 1200000, minSmarts: 90, minAge: 40, type: "Executive" },
    { title: "Hedge Fund Manager", salary: 5000000, minSmarts: 95, minAge: 35, type: "Finance" }
];

const EDUCATION = {
    UNIVERSITY: { cost: 40000, smartsReq: 50, name: "University" },
    GRADUATE: { cost: 80000, smartsReq: 75, name: "Graduate School" }
};

const ROYALTY = [
    { title: "Baron/Baroness", chance: 0.05 },
    { title: "Duke/Duchess", chance: 0.02 },
    { title: "Prince/Princess", chance: 0.005 }
];

const RANDOM_EVENTS = [
    "You found a lost wallet and returned it (+5 Happiness)",
    "You caught a cold (-10 Health)",
    "You read a difficult book (+5 Smarts)",
    "A local business offered you an internship!",
    "You were bullied at school (-5 Happiness)"
];


/**  
 * Additional Jobs  
 */  
JOBS.push(
    { title: "Retail Sales Associate", salary: 22000, minSmarts: 10, minAge: 18, type: "Entry-level" },
    { title: "Customer Support Agent", salary: 32000, minSmarts: 20, minAge: 18, type: "Entry-level" },
    { title: "Police Officer", salary: 55000, minSmarts: 40, minAge: 21, type: "Public Service" },
    { title: "Teacher", salary: 60000, minSmarts: 65, minAge: 24, type: "Professional" },
    { title: "Software Engineer", salary: 120000, minSmarts: 75, minAge: 23, type: "Technology" },
    { title: "Investment Banker", salary: 350000, minSmarts: 88, minAge: 28, type: "Finance" },
    { title: "Startup Founder", salary: 0, minSmarts: 70, minAge: 25, type: "Entrepreneurship" },
    { title: "Professional Athlete", salary: 900000, minSmarts: 30, minAge: 20, type: "Sports" },
    { title: "Famous Actor", salary: 1500000, minSmarts: 40, minAge: 21, type: "Entertainment" }
);


/**  
 * Additional Education Paths  
 */  
EDUCATION.COMMUNITY_COLLEGE = { cost: 10000, smartsReq: 30, name: "Community College" };
EDUCATION.BUSINESS_SCHOOL = { cost: 100000, smartsReq: 80, name: "Business School (MBA)" };
EDUCATION.MEDICAL_SCHOOL = { cost: 150000, smartsReq: 85, name: "Medical School" };
EDUCATION.LAW_SCHOOL = { cost: 120000, smartsReq: 80, name: "Law School" };
EDUCATION.TRADE_SCHOOL = { cost: 20000, smartsReq: 25, name: "Trade School" };


/**  
 * Additional Royal Titles  
 */  
ROYALTY.push(
    { title: "Count/Countess", chance: 0.03 },
    { title: "Marquess/Marchioness", chance: 0.015 },
    { title: "King/Queen", chance: 0.001 }
);


/**  
 * Additional Random Life Events  
 */  
RANDOM_EVENTS.push(
    "You won a small lottery prize! (+$10,000)",
    "You got into a minor car accident (-$2,000)",
    "A mentor helped improve your skills (+10 Smarts)",
    "You started a side hustle earning extra money!",
    "You traveled abroad and felt happier (+10 Happiness)",
    "You invested early in a startup (+$50,000 if successful)",
    "You got food poisoning (-15 Health)",
    "You met someone from a royal family at an event...",
    "You received a scholarship opportunity!",
    "You were promoted at work!"
);
