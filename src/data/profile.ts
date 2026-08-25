// ---------------------------------------------------------------------------
// Single source of truth for all portfolio content.
// Facts sourced from CV (Jul 2026), GitHub (@taweshaldev99), HackerRank.
// ---------------------------------------------------------------------------

export const person = {
  name: "Taweshal Dev Thakur",
  role: "Python Developer · Data Engineering Enthusiast",
  location: "Kathmandu, Nepal",
  email: "dev2sl.py@gmail.com",
  phone: "+977 9823348580",
  phoneHref: "+9779823348580",
  resumePath: "/Taweshal_Dev_Thakur_CV.pdf",
  tagline:
    "I test software for a living and build data pipelines to grow — turning raw, messy data into structured, queryable systems with Python and SQL.",
} as const;

export const socials = [
  { label: "GitHub", href: "https://github.com/taweshaldev99", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/taweshal-dev-thakur-656a8a273/", icon: "linkedin" },
  { label: "HackerRank", href: "https://www.hackerrank.com/profile/tweshaldev543", icon: "hackerrank" },
  { label: "Instagram", href: "https://www.instagram.com/itsdev.py/", icon: "instagram" },
  { label: "Email", href: "mailto:dev2sl.py@gmail.com", icon: "mail" },
] as const;

export const about = {
  paragraphs: [
    "My first programs were C and C++ — contact management systems and data-structure drills in the first semesters of my BIT at Purbanchal University. That's where I learned that software either works or it doesn't, and the compiler doesn't care how you feel about it.",
    "In 2025 I picked up Python, and it stuck. It became the tool I reach for to automate, analyze and build: data analysis training at KIST, a data engineering fellowship at DLytica, and my first real pipeline — pulling every bus stop in Kathmandu out of OpenStreetMap, cleaning it with Pandas, and loading it into a relational database.",
    "In March 2026 I joined Yoddha Lab as an intern and earned a full-time QA engineering role in 90 days, working on the Nepal HRMS platform. QA taught me something most beginners skip: correctness is a feature. Every release lives or dies on whether the data underneath it can be trusted.",
    "That's exactly why data engineering pulls me in. I'm deliberately stacking the pieces — SQL and PostgreSQL, ETL patterns, Snowflake — because I want to be the person who builds the data systems other people can rely on.",
  ],
  facts: [
    { label: "Based in", value: "Kathmandu, Nepal" },
    { label: "Current role", value: "Associate QA Engineer @ Yoddha Lab" },
    { label: "Education", value: "BIT, Purbanchal University (2022 — expected 2026)" },
    { label: "Writing Python since", value: "2025" },
  ],
} as const;

export type JourneyStatus = "solid" | "building" | "next";
export const journey: { title: string; status: JourneyStatus; note: string }[] = [
  { title: "C / C++ foundations", status: "solid", note: "OOP, DSA, first projects (2022–2024)" },
  { title: "Python", status: "solid", note: "Core language since 2025 — scripting, automation, data work" },
  { title: "Data processing", status: "solid", note: "Pandas · NumPy · EDA — KIST training + real datasets" },
  { title: "SQL & PostgreSQL", status: "building", note: "Schema design, analytics queries, daily practice" },
  { title: "ETL pipelines", status: "building", note: "First pipeline shipped — Kathmandu Bus Stops ETL" },
  { title: "Snowflake & warehouses", status: "next", note: "Working through warehouse concepts and hands-on material" },
  { title: "Data Engineering", status: "next", note: "The destination: reliable, scalable data systems" },
];

export const experience = [
  {
    company: "Yoddha Lab Pvt. Ltd.",
    role: "Associate QA Engineer",
    period: "Jul 2026 — Present",
    location: "Kathmandu, Nepal",
    summary:
      "Promoted from intern to full-time after a 90-day program, recognized for contribution to the Nepal HRMS product.",
    points: [
      "Own functional, regression and usability testing for the Nepal HRMS platform; validate fixes and confirm release readiness before every deployment.",
      "Partner with developers and product owners across sprint ceremonies to triage, prioritize and track defects to closure in Jira.",
      "Drive improvements to test processes, documentation and quality standards across the product team.",
    ],
    tech: ["Manual Testing", "Regression", "Jira", "HRMS", "Release Validation"],
  },
  {
    company: "Yoddha Lab Pvt. Ltd.",
    role: "Associate Project Manager Intern → QA Intern",
    period: "Mar 2026 — Jul 2026",
    location: "Kathmandu, Nepal",
    summary:
      "90-day internship program spanning project coordination and QA on the Nepal HRMS launch — ended with a full-time offer.",
    points: [
      "Coordinated planning, tracking and execution across a cross-functional team of up to 10 spanning development, product and operations.",
      "Managed tasks, sprints and deliverables in Jira; contributed to sprint planning, daily standups and retrospectives, surfacing blockers early.",
      "Transitioned into QA for the HRMS launch: authored test scenarios from requirements, executed functional and regression testing, tracked bugs to resolution.",
    ],
    tech: ["Agile / Scrum", "Jira", "CRM", "Test Design", "Documentation"],
  },
] as const;

export const skillGroups = [
  {
    title: "Programming",
    skills: ["Python", "C / C++", "JavaScript", "PHP"],
  },
  {
    title: "Data",
    skills: ["SQL", "Pandas", "NumPy", "Exploratory Data Analysis", "ETL Pipelines"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "SQLite", "Schema Design", "DBMS Fundamentals"],
  },
  {
    title: "Web",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript / React (project work)"],
  },
  {
    title: "Quality Assurance",
    skills: ["Manual Testing", "Regression Testing", "Test Case Design", "Defect Tracking", "Jira"],
  },
  {
    title: "Tools",
    skills: ["Git / GitHub", "VS Code", "Jupyter", "Docker (basics)"],
  },
] as const;

export const learning = [
  { title: "Snowflake", note: "Cloud data warehousing — hands-on learning material and practice" },
  { title: "Advanced SQL", note: "Window functions, optimization, analytics patterns on PostgreSQL" },
  { title: "ETL / ELT design", note: "Pipeline architecture, idempotency, scheduling concepts" },
  { title: "Data modeling", note: "Normalized + dimensional schemas for real datasets" },
] as const;

export const pythonUses = [
  { title: "ETL & pipelines", desc: "Extract from APIs, transform with Pandas, load into SQL databases." },
  { title: "Data analysis", desc: "EDA with Pandas, NumPy and Matplotlib on real datasets." },
  { title: "Automation & scripting", desc: "Small tools that remove repetitive work." },
  { title: "Problem solving", desc: "DSA practice — HackerRank badges in Python, SQL and Problem Solving." },
] as const;

export interface Project {
  name: string;
  featured?: boolean;
  problem: string;
  solution: string;
  tech: string[];
  learned?: string;
  github: string;
  arch?: { label: string; sub: string }[];
}

export const projects: Project[] = [
  {
    name: "Kathmandu Bus Stops ETL",
    featured: true,
    problem:
      "Kathmandu's public bus stop data exists only as scattered, inconsistent OpenStreetMap tags — no clean, queryable dataset for the city's transport network.",
    solution:
      "A four-stage Python pipeline: extract every bus stop via the Overpass API, clean and normalize the raw records with Pandas (missing names, coordinate validation), load them into a relational schema through SQLAlchemy, and expose a query layer for analytics. Built for the DLytica fellowship; schema extends from SQLite to PostgreSQL.",
    tech: ["Python", "Pandas", "Requests", "SQLAlchemy", "SQLite", "PostgreSQL", "OpenStreetMap"],
    learned:
      "Staged pipeline design, defensive data cleaning, and why a normalized schema beats a CSV the moment someone asks a second question.",
    github: "https://github.com/taweshaldev99/kathmandu-Bus-Stops-ETL",
    arch: [
      { label: "OpenStreetMap", sub: "Overpass API" },
      { label: "Extract", sub: "Python · Requests" },
      { label: "Transform", sub: "Pandas cleaning" },
      { label: "Load", sub: "SQLAlchemy → SQL" },
      { label: "Query", sub: "Analytics layer" },
    ],
  },
  {
    name: "AURUM — Men's Parlour Website",
    problem: "A premium grooming studio needed a full web presence with online booking — not a brochure page.",
    solution:
      "Production-grade Next.js 15 site: 16 pages, a 5-step booking wizard with live availability, an admin console with revenue charts, and complete SEO (JSON-LD, sitemap, OG). Dark-luxury design system with Framer Motion + GSAP.",
    tech: ["Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP"],
    learned: "Full product lifecycle — design system, data layer, admin tooling and deployment-ready SEO in one codebase.",
    github: "https://github.com/taweshaldev99/Men-s_Parlour_Website",
  },
  {
    name: "Data Engineering @ DLytica",
    problem: "Learning data engineering from scattered tutorials doesn't stick.",
    solution:
      "A working repository of every notebook, note and exercise from the DLytica Inc. data engineering program — my structured record of the concepts I'm building on.",
    tech: ["Python", "Jupyter", "SQL", "Data Engineering"],
    github: "https://github.com/taweshaldev99/Data-Engineering-on-DLytica",
  },
  {
    name: "Data Analysis — KIST",
    problem: "Theory-only data analysis training fades fast.",
    solution:
      "Hands-on EDA notebooks from the KIST Data Analysis with Python program — Pandas, NumPy and visualization applied to real datasets.",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Jupyter"],
    github: "https://github.com/taweshaldev99/Data_Analysis_by_KIST",
  },
  {
    name: "Contact Management System",
    problem: "First-year proof that I could build something complete, start to finish.",
    solution:
      "A file-based CRUD contact manager written in C/C++ — my first full project, and the reason I understand what higher-level languages are doing for me.",
    tech: ["C", "C++", "File I/O", "Data Structures"],
    github: "https://github.com/taweshaldev99/Contact-Management-System",
  },
];

export const credentials = {
  certifications: [
    { title: "Internship Completion & Employment Certificate", org: "Yoddha Lab Pvt. Ltd.", year: "2026" },
    { title: "Data Analysis with Python", org: "KIST", year: "" },
    { title: "Python for Beginners", org: "Udemy", year: "" },
  ],
  badges: [
    { title: "Problem Solving", org: "HackerRank" },
    { title: "Python", org: "HackerRank" },
    { title: "SQL", org: "HackerRank" },
  ],
  achievements: [
    "Earned a full-time offer at the end of a 90-day internship, awarded on performance.",
    "KIST Hackathon 2025 — delivered a working software solution with a team under a fixed time constraint.",
  ],
  education: {
    degree: "Bachelor of Information Technology (BIT)",
    school: "Purbanchal University, Kathmandu",
    period: "2022 — expected 2026",
  },
} as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;
