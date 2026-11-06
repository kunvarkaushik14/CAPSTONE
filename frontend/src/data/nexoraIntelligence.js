import { ESCO_ONET_OCCUPATIONS } from "../data/escoOnetMasterData.js";

// NEXORA AI Model v3.0 — Neural Career & Skill Intelligence Engine
// Designed for Students, Freshers, Skilled Tradespersons, and Career Explorers

const ORIGINAL_TECH_TRACKS = [
  {
    id: "ai-ml-engineer",
    title: "AI & Machine Learning Engineer",
    category: "Artificial Intelligence",
    tagline: "Design intelligent systems, neural networks, and generative AI applications.",
    fresherFriendly: true,
    salaryRange: "₹8L – ₹22L / yr ($95k – $160k)",
    growthRate: "+42% YoY Demand",
    demandLevel: "Very High",
    industries: ["Technology", "Research", "Healthcare", "Finance", "E-commerce"],
    relatedInterests: [
      "Artificial Intelligence",
      "Machine Learning",
      "Data Science",
      "Software Development",
      "Research & Development",
      "Robotics"
    ],
    requiredSkills: [
      "Python",
      "Machine Learning",
      "Data Analysis",
      "SQL",
      "Problem Solving",
      "Git & GitHub"
    ],
    bonusSkills: ["C++", "Cloud Computing", "Communication"],
    overview:
      "AI & Machine Learning Engineers build models that learn from data and power intelligent products—from recommendation engines and computer vision to Large Language Models (LLMs) and autonomous agents.",
    fresherTip:
      "Start with strong Python fundamentals and linear algebra intuition before jumping into deep learning frameworks. Building 2 end-to-end deployed ML apps sets you apart from 90% of freshers.",
    introVideo: {
      videoId: "aircAruvnKk",
      title: "But what is a neural network? | Deep Learning Chapter 1",
      channel: "3Blue1Brown",
      duration: "19:13",
      pointerNote: "Best visual foundation for understanding how AI models actually learn."
    },
    phases: [
      {
        id: "ai-p1",
        phaseNumber: "PHASE 01",
        title: "New Beginning: Python & Mathematical Intuition",
        duration: "3–4 Weeks",
        summary: "Master Python programming, NumPy/Pandas data manipulation, and core math behind ML.",
        modules: [
          {
            id: "ai-p1-m1",
            title: "Python Programming for AI & Data Science",
            skillTag: "Python",
            duration: "6 hrs",
            level: "Beginner / Fresher",
            description:
              "Learn variables, functions, OOP, list comprehensions, and data structures in Python from scratch.",
            keyTopics: ["Python Syntax & OOP", "Lists, Dicts & Sets", "File Handling & Virtual Envs", "NumPy Arrays"],
            projectIdea: "Build a command-line Student Grade & Skill Analyzer using pure Python.",
            video: {
              videoId: "rfscVS0vtbw",
              title: "Learn Python — Full Course for Beginners [Tutorial]",
              channel: "freeCodeCamp.org",
              duration: "4:26:52",
              pointerNote: "POINTER: Start at 00:00 if new to coding, or jump to 02:15:00 for Data Structures & Functions.",
              timestamps: [
                { time: "00:00", label: "Setup & Basics" },
                { time: "01:15:00", label: "Lists & Loops" },
                { time: "02:35:00", label: "Functions & Modules" },
                { time: "03:45:00", label: "Classes & OOP" }
              ]
            }
          },
          {
            id: "ai-p1-m2",
            title: "Neural Networks & Linear Algebra Intuition",
            skillTag: "Machine Learning",
            duration: "3 hrs",
            level: "Beginner",
            description:
              "Understand vectors, matrices, weights, biases, and gradient descent visually without getting lost in heavy notation.",
            keyTopics: ["Weights & Biases", "Activation Functions", "Gradient Descent", "Backpropagation"],
            projectIdea: "Implement a single neuron (Perceptron) from scratch in 30 lines of Python.",
            video: {
              videoId: "aircAruvnKk",
              title: "But what is a neural network? | Deep Learning",
              channel: "3Blue1Brown",
              duration: "19:13",
              pointerNote: "POINTER: Essential visual walkthrough of layers, activations, and digit recognition.",
              timestamps: [
                { time: "00:00", label: "Visualizing Neurons" },
                { time: "05:30", label: "Hidden Layers" },
                { time: "11:20", label: "Weights & Sigmoid" }
              ]
            }
          }
        ]
      },
      {
        id: "ai-p2",
        phaseNumber: "PHASE 02",
        title: "Core Machine Learning & Data Analysis",
        duration: "4–5 Weeks",
        summary: "Learn Exploratory Data Analysis (EDA), Scikit-Learn algorithms, and supervised/unsupervised ML.",
        modules: [
          {
            id: "ai-p2-m1",
            title: "Data Analysis with Pandas, NumPy & Matplotlib",
            skillTag: "Data Analysis",
            duration: "5 hrs",
            level: "Intermediate",
            description:
              "Clean messy datasets, handle missing values, engineer features, and create insightful charts.",
            keyTopics: ["Pandas DataFrames", "Data Cleaning", "Feature Engineering", "Matplotlib & Seaborn"],
            projectIdea: "Analyze a real dataset of 10,000 tech salaries and visualize skill-to-salary trends.",
            video: {
              videoId: "r-uOLxNrNk8",
              title: "Data Analysis with Python — Full Course for Beginners",
              channel: "freeCodeCamp.org",
              duration: "4:22:13",
              pointerNote: "POINTER: Watch the Pandas & Data Cleaning section to master real-world datasets.",
              timestamps: [
                { time: "00:00", label: "Intro to Data Analysis" },
                { time: "00:52:00", label: "NumPy Operations" },
                { time: "01:45:00", label: "Pandas DataFrames" }
              ]
            }
          },
          {
            id: "ai-p2-m2",
            title: "Machine Learning Algorithms with Scikit-Learn",
            skillTag: "Machine Learning",
            duration: "8 hrs",
            level: "Intermediate",
            description:
              "Master Regression, Classification, Decision Trees, Random Forests, SVMs, and Model Evaluation.",
            keyTopics: ["Linear & Logistic Regression", "Random Forests & XGBoost", "Cross-Validation", "Precision & Recall"],
            projectIdea: "Build a Career & Salary Predictor ML model using Scikit-Learn.",
            video: {
              videoId: "i_LwzRVP7bg",
              title: "Machine Learning for Everybody – Full Course",
              channel: "freeCodeCamp.org",
              duration: "3:53:53",
              pointerNote: "POINTER: Hands-on Google Colab coding starts at 18:00 — follow along live!",
              timestamps: [
                { time: "00:00", label: "ML Concepts" },
                { time: "00:45:00", label: "Classification Models" },
                { time: "02:10:00", label: "Linear Regression & Neural Nets" }
              ]
            }
          }
        ]
      },
      {
        id: "ai-p3",
        phaseNumber: "PHASE 03",
        title: "Deep Learning, LLMs & Modern AI Engineering",
        duration: "4–6 Weeks",
        summary: "Build modern neural networks, Transformers, and Generative AI apps.",
        modules: [
          {
            id: "ai-p3-m1",
            title: "Build a GPT / Transformer from Scratch",
            skillTag: "Artificial Intelligence",
            duration: "6 hrs",
            level: "Advanced",
            description:
              "Understand self-attention, tokenization, and how modern Large Language Models work under the hood.",
            keyTopics: ["Self-Attention Mechanism", "PyTorch Tensors", "Transformer Architecture", "Fine-Tuning & RAG"],
            projectIdea: "Build a domain-specific AI Study Assistant with custom document retrieval.",
            video: {
              videoId: "kCc8FmEb1nY",
              title: "Let's build GPT: from scratch, in code, spelled out.",
              channel: "Andrej Karpathy",
              duration: "1:56:20",
              pointerNote: "POINTER: The gold-standard tutorial by Andrej Karpathy on building Transformers step-by-step.",
              timestamps: [
                { time: "00:00", label: "Dataset & Tokenization" },
                { time: "00:42:00", label: "Self-Attention Block" },
                { time: "01:25:00", label: "Scaling the Transformer" }
              ]
            }
          }
        ]
      },
      {
        id: "ai-p4",
        phaseNumber: "PHASE 04",
        title: "Deployment, Git Portfolio & Fresher Placement",
        duration: "2–3 Weeks",
        summary: "Package your AI models into web APIs, push clean code to GitHub, and ace technical interviews.",
        modules: [
          {
            id: "ai-p4-m1",
            title: "Git, GitHub & Open-Source Portfolio Mastery",
            skillTag: "Git & GitHub",
            duration: "2 hrs",
            level: "Beginner",
            description:
              "Structure your AI repositories with clean READMEs, architecture diagrams, and live demo links.",
            keyTopics: ["Git Branching & Commits", "Pull Requests", "GitHub Actions", "Portfolio READMEs"],
            projectIdea: "Publish 3 pinned AI projects on GitHub with interactive Streamlit/FastAPI demos.",
            video: {
              videoId: "RGOj5yH7evk",
              title: "Git and GitHub for Beginners - Crash Course",
              channel: "freeCodeCamp.org",
              duration: "1:08:29",
              pointerNote: "POINTER: Essential for every fresher to showcase projects to recruiters.",
              timestamps: [
                { time: "00:00", label: "What is Git?" },
                { time: "18:00", label: "Repositories & Commits" },
                { time: "38:00", label: "Branching & Merging" }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    id: "fullstack-developer",
    title: "Full-Stack Web Developer",
    category: "Web Development",
    tagline: "Build complete, scalable web applications from modern React UIs to Node.js & SQL backends.",
    fresherFriendly: true,
    salaryRange: "₹6L – ₹18L / yr ($80k – $140k)",
    growthRate: "+34% YoY Demand",
    demandLevel: "Very High",
    industries: ["Technology", "E-commerce", "Finance", "Media & Entertainment", "Education"],
    relatedInterests: [
      "Web Development",
      "Software Development",
      "UI/UX Design",
      "Entrepreneurship",
      "Cloud Computing"
    ],
    requiredSkills: [
      "JavaScript",
      "React",
      "Node.js",
      "SQL",
      "Git & GitHub",
      "Problem Solving"
    ],
    bonusSkills: ["UI/UX Design", "Python", "Cloud Computing", "Communication"],
    overview:
      "Full-Stack Developers craft both the user-facing frontend experience and the server-side APIs and databases. It is one of the fastest, highest-hiring career paths for students and freshers.",
    fresherTip:
      "Focus on mastering JavaScript fundamentals before React. Build one complete full-stack app with authentication, database CRUD, and responsive UI rather than 10 unfinished clones.",
    introVideo: {
      videoId: "nu_pCVPKzTk",
      title: "Full Stack Web Development for Beginners (Full Course)",
      channel: "freeCodeCamp.org",
      duration: "7:29:14",
      pointerNote: "Complete end-to-end roadmap overview for becoming a Full-Stack Web Developer."
    },
    phases: [
      {
        id: "fs-p1",
        phaseNumber: "PHASE 01",
        title: "New Beginning: HTML5, CSS3 & Modern JavaScript (ES6+)",
        duration: "3–4 Weeks",
        summary: "Build responsive layouts and master asynchronous JavaScript, DOM manipulation, and APIs.",
        modules: [
          {
            id: "fs-p1-m1",
            title: "Modern JavaScript From Zero to Hero",
            skillTag: "JavaScript",
            duration: "6 hrs",
            level: "Beginner / Fresher",
            description:
              "Master closures, promises, async/await, array methods (map/filter/reduce), and ES6+ syntax.",
            keyTopics: ["Variables & Scope", "Arrow Functions & Destructuring", "Async/Await & Fetch API", "DOM Events"],
            projectIdea: "Create an Interactive Career & Task Tracker using Vanilla JS and LocalStorage.",
            video: {
              videoId: "PkZNo7MFNFg",
              title: "Learn JavaScript - Full Course for Beginners",
              channel: "freeCodeCamp.org",
              duration: "3:26:42",
              pointerNote: "POINTER: Watch 01:40:00 onwards for ES6 arrow functions, destructuring, and array methods.",
              timestamps: [
                { time: "00:00", label: "JS Basics & Variables" },
                { time: "01:10:00", label: "Objects & Arrays" },
                { time: "02:30:00", label: "ES6+ Modern Features" }
              ]
            }
          },
          {
            id: "fs-p1-m2",
            title: "Git & GitHub Workflow for Developers",
            skillTag: "Git & GitHub",
            duration: "2 hrs",
            level: "Beginner",
            description:
              "Learn version control, branching, pull requests, and deploying static websites.",
            keyTopics: ["Git Init, Add, Commit", "GitHub Remote Push", "Branching & Conflict Resolution"],
            projectIdea: "Host your developer portfolio live on GitHub Pages / Vercel.",
            video: {
              videoId: "RGOj5yH7evk",
              title: "Git and GitHub for Beginners - Crash Course",
              channel: "freeCodeCamp.org",
              duration: "1:08:29",
              pointerNote: "POINTER: Practice every Git command in your terminal while watching.",
              timestamps: [
                { time: "00:00", label: "Version Control Basics" },
                { time: "22:00", label: "Pushing to GitHub" },
                { time: "40:00", label: "Branches & PRs" }
              ]
            }
          }
        ]
      },
      {
        id: "fs-p2",
        phaseNumber: "PHASE 02",
        title: "Frontend Engineering with React & Modern UI",
        duration: "4 Weeks",
        summary: "Build component-driven single-page applications with React hooks, state management, and routing.",
        modules: [
          {
            id: "fs-p2-m1",
            title: "React 19 & Hooks Complete Course",
            skillTag: "React",
            duration: "8 hrs",
            level: "Intermediate",
            description:
              "Master JSX, Props, useState, useEffect, custom hooks, React Router, and API integration.",
            keyTopics: ["Components & Props", "useState & useEffect", "React Router v7", "Context API & State"],
            projectIdea: "Build a Skill & Video Learning Dashboard in React with search and filters.",
            video: {
              videoId: "bMknfKXIFA8",
              title: "React Course - Beginner's Tutorial for React JavaScript Library",
              channel: "freeCodeCamp.org",
              duration: "11:55:27",
              pointerNote: "POINTER: Hands-on project-based React course. Build each mini-project along with the instructor.",
              timestamps: [
                { time: "00:00", label: "JSX & Components" },
                { time: "02:30:00", label: "Props & Dynamic Data" },
                { time: "05:05:00", label: "useState & Interactive State" },
                { time: "08:15:00", label: "useEffect & API Calls" }
              ]
            }
          }
        ]
      },
      {
        id: "fs-p3",
        phaseNumber: "PHASE 03",
        title: "Backend APIs with Node.js, Express & SQL Databases",
        duration: "4 Weeks",
        summary: "Create secure REST APIs, JWT authentication, and relational database schemas.",
        modules: [
          {
            id: "fs-p3-m1",
            title: "Node.js & Express.js Backend Mastery",
            skillTag: "Node.js",
            duration: "6 hrs",
            level: "Intermediate",
            description:
              "Build RESTful APIs, middleware, JWT authentication, and error handling with Node and Express.",
            keyTopics: ["Node Event Loop", "Express Routing & Middleware", "JWT Auth & Bcrypt", "REST API Design"],
            projectIdea: "Build a secure Authentication & User Profile REST API with Express.",
            video: {
              videoId: "Oe421EPjeBE",
              title: "Node.js and Express.js - Full Course",
              channel: "freeCodeCamp.org",
              duration: "8:16:47",
              pointerNote: "POINTER: Covers both Node fundamentals and building real Express REST APIs.",
              timestamps: [
                { time: "00:00", label: "Node.js Core Modules" },
                { time: "03:15:00", label: "Express Fundamentals" },
                { time: "05:40:00", label: "REST API Project" }
              ]
            }
          },
          {
            id: "fs-p3-m2",
            title: "SQL & Relational Databases (PostgreSQL)",
            skillTag: "SQL",
            duration: "4 hrs",
            level: "Beginner / Intermediate",
            description:
              "Design normalized tables, write complex JOINs, aggregations, and connect PostgreSQL to Node.js.",
            keyTopics: ["SELECT, WHERE, GROUP BY", "INNER & LEFT JOINs", "Database Indexing", "Schema Design"],
            projectIdea: "Design a complete relational database schema for an EdTech platform.",
            video: {
              videoId: "HXV3zeQKqGY",
              title: "SQL Tutorial - Full Database Course for Beginners",
              channel: "freeCodeCamp.org",
              duration: "4:20:38",
              pointerNote: "POINTER: Essential SQL queries asked in almost every fresher technical interview.",
              timestamps: [
                { time: "00:00", label: "Tables & Keys" },
                { time: "01:20:00", label: "Queries & Filtering" },
                { time: "02:45:00", label: "Joins & Unions" }
              ]
            }
          }
        ]
      },
      {
        id: "fs-p4",
        phaseNumber: "PHASE 04",
        title: "Capstone Deployment & Technical Interview Prep",
        duration: "2 Weeks",
        summary: "Deploy your full-stack app to the cloud and prepare for frontend/backend interviews.",
        modules: [
          {
            id: "fs-p4-m1",
            title: "Problem Solving & Coding Interview Preparation",
            skillTag: "Problem Solving",
            duration: "5 hrs",
            level: "Intermediate",
            description:
              "Master arrays, hash maps, two pointers, recursion, and system design basics for freshers.",
            keyTopics: ["Time & Space Complexity", "Arrays & HashMaps", "Trees & Graphs Basics", "API System Design"],
            projectIdea: "Deploy your Full-Stack Capstone Project with live URL and architecture documentation.",
            video: {
              videoId: "8hly31xKli0",
              title: "Algorithms and Data Structures Tutorial - Full Course for Beginners",
              channel: "freeCodeCamp.org",
              duration: "5:22:08",
              pointerNote: "POINTER: Great visual breakdown of Big-O, searching, sorting, and data structures.",
              timestamps: [
                { time: "00:00", label: "Big-O & Binary Search" },
                { time: "01:55:00", label: "Arrays & Linked Lists" },
                { time: "03:40:00", label: "Merge Sort & Recursion" }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    id: "data-scientist",
    title: "Data Scientist & Business Intelligence Analyst",
    category: "Data Science",
    tagline: "Turn raw data into strategic decisions, predictive models, and compelling visual stories.",
    fresherFriendly: true,
    salaryRange: "₹6.5L – ₹19L / yr ($85k – $145k)",
    growthRate: "+36% YoY Demand",
    demandLevel: "High",
    industries: ["Finance", "Healthcare", "E-commerce", "Consulting", "Technology"],
    relatedInterests: [
      "Data Science",
      "Machine Learning",
      "Business & Management",
      "Artificial Intelligence",
      "Research & Development"
    ],
    requiredSkills: [
      "Python",
      "SQL",
      "Data Analysis",
      "Machine Learning",
      "Communication",
      "Problem Solving"
    ],
    bonusSkills: ["Leadership", "Cloud Computing", "Git & GitHub"],
    overview:
      "Data Scientists combine statistical thinking, SQL querying, Python analytics, and business storytelling to uncover patterns and predict outcomes.",
    fresherTip:
      "Recruiters love SQL + Business Case Studies! Always explain the business impact of your analysis in your project READMEs.",
    introVideo: {
      videoId: "ua-CiDNNj30",
      title: "Learn Data Science Tutorial - Full Course for Beginners",
      channel: "freeCodeCamp.org",
      duration: "5:52:05",
      pointerNote: "Comprehensive introduction to the Data Science lifecycle and tools."
    },
    phases: [
      {
        id: "ds-p1",
        phaseNumber: "PHASE 01",
        title: "New Beginning: SQL Mastery & Statistical Thinking",
        duration: "3 Weeks",
        summary: "Query databases like a pro and understand probability, distributions, and hypothesis testing.",
        modules: [
          {
            id: "ds-p1-m1",
            title: "SQL for Data Science & Analytics",
            skillTag: "SQL",
            duration: "4 hrs",
            level: "Beginner / Fresher",
            description: "Write analytical SQL queries using aggregations, window functions, and complex joins.",
            keyTopics: ["GROUP BY & HAVING", "Window Functions (RANK, OVER)", "CTEs & Subqueries"],
            projectIdea: "Analyze an E-commerce database to find top customer cohorts and churn patterns.",
            video: {
              videoId: "HXV3zeQKqGY",
              title: "SQL Tutorial - Full Database Course for Beginners",
              channel: "freeCodeCamp.org",
              duration: "4:20:38",
              pointerNote: "POINTER: Focus on aggregations, joins, and nested queries for analytics interviews.",
              timestamps: [
                { time: "00:00", label: "Database Fundamentals" },
                { time: "01:45:00", label: "Aggregations & Wildcards" },
                { time: "02:50:00", label: "Joins & Nested Queries" }
              ]
            }
          }
        ]
      },
      {
        id: "ds-p2",
        phaseNumber: "PHASE 02",
        title: "Python Data Analysis & Exploratory Visualization",
        duration: "4 Weeks",
        summary: "Use Python, Pandas, and Seaborn to clean and visualize complex datasets.",
        modules: [
          {
            id: "ds-p2-m1",
            title: "Python Data Analysis & Visualization Bootcamp",
            skillTag: "Data Analysis",
            duration: "4.5 hrs",
            level: "Intermediate",
            description: "End-to-end data wrangling with NumPy, Pandas, and Matplotlib.",
            keyTopics: ["Data Wrangling", "Outlier Detection", "Statistical Plots", "Correlation Matrices"],
            projectIdea: "Build an interactive Healthcare & Lifestyle Insights report in Jupyter Notebook.",
            video: {
              videoId: "r-uOLxNrNk8",
              title: "Data Analysis with Python - Full Course for Beginners",
              channel: "freeCodeCamp.org",
              duration: "4:22:13",
              pointerNote: "POINTER: Includes real-world Jupyter notebook exercises.",
              timestamps: [
                { time: "00:00", label: "Data Analysis Workflow" },
                { time: "01:45:00", label: "Pandas Deep Dive" },
                { time: "03:10:00", label: "Data Cleaning & Visualization" }
              ]
            }
          }
        ]
      },
      {
        id: "ds-p3",
        phaseNumber: "PHASE 03",
        title: "Predictive Modeling & Machine Learning",
        duration: "4 Weeks",
        summary: "Train forecasting and classification models and evaluate statistical significance.",
        modules: [
          {
            id: "ds-p3-m1",
            title: "Applied Machine Learning for Data Scientists",
            skillTag: "Machine Learning",
            duration: "4 hrs",
            level: "Intermediate",
            description: "Build predictive pipelines using regression, clustering, and ensemble trees.",
            keyTopics: ["Feature Selection", "Customer Segmentation (K-Means)", "Time-Series Forecasting"],
            projectIdea: "Create a Customer Churn Prediction model with an executive dashboard.",
            video: {
              videoId: "i_LwzRVP7bg",
              title: "Machine Learning for Everybody – Full Course",
              channel: "freeCodeCamp.org",
              duration: "3:53:53",
              pointerNote: "POINTER: Great practical breakdown of supervised and unsupervised learning.",
              timestamps: [
                { time: "00:00", label: "Features & Labels" },
                { time: "01:20:00", label: "Naive Bayes & SVM" },
                { time: "03:00:00", label: "Clustering & PCA" }
              ]
            }
          }
        ]
      },
      {
        id: "ds-p4",
        phaseNumber: "PHASE 04",
        title: "Data Storytelling & Stakeholder Communication",
        duration: "2 Weeks",
        summary: "Present analytical findings clearly to business leaders and ace case-study interviews.",
        modules: [
          {
            id: "ds-p4-m1",
            title: "Data Science Case Studies & Storytelling",
            skillTag: "Communication",
            duration: "3 hrs",
            level: "All Levels",
            description: "Translate numbers into clear executive recommendations.",
            keyTopics: ["Executive Summaries", "KPI Selection", "A/B Testing Interpretation"],
            projectIdea: "Record a 3-minute walkthrough video of your flagship Data Science project.",
            video: {
              videoId: "ua-CiDNNj30",
              title: "Learn Data Science Tutorial - Full Course for Beginners",
              channel: "freeCodeCamp.org",
              duration: "5:52:05",
              pointerNote: "POINTER: Watch the Data Storytelling and Ethics segments for interview readiness.",
              timestamps: [
                { time: "00:00", label: "Data Science Foundations" },
                { time: "02:30:00", label: "Data Visualization Principles" },
                { time: "04:15:00", label: "Communicating Insights" }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    id: "cybersecurity-specialist",
    title: "Cybersecurity & Ethical Hacking Specialist",
    category: "Cybersecurity",
    tagline: "Protect cloud infrastructure, audit application security, and defend against modern cyber threats.",
    fresherFriendly: true,
    salaryRange: "₹6L – ₹17L / yr ($85k – $140k)",
    growthRate: "+33% YoY Demand",
    demandLevel: "High",
    industries: ["Technology", "Finance", "Government", "Defense", "Healthcare"],
    relatedInterests: ["Cybersecurity", "Cloud Computing", "Software Development"],
    requiredSkills: ["Python", "Cloud Computing", "Problem Solving", "Git & GitHub", "SQL"],
    bonusSkills: ["C++", "JavaScript", "Communication"],
    overview:
      "Cybersecurity Specialists secure networks, web applications, and cloud servers through vulnerability assessments, penetration testing, and zero-trust architecture.",
    fresherTip:
      "Understand computer networking (TCP/IP, DNS, HTTP/HTTPS) and Linux fundamentals first—they are the bedrock of every cybersecurity role.",
    introVideo: {
      videoId: "3Kq1MIfTWCE",
      title: "Full Ethical Hacking Course - Network Penetration Testing for Beginners",
      channel: "freeCodeCamp.org",
      duration: "14:51:06",
      pointerNote: "Complete beginner-to-intermediate Ethical Hacking & Network Security course."
    },
    phases: [
      {
        id: "cy-p1",
        phaseNumber: "PHASE 01",
        title: "New Beginning: Networking, Linux & Security Fundamentals",
        duration: "3 Weeks",
        summary: "Learn how the internet works, OSI model, Linux CLI, and core security principles (CIA Triad).",
        modules: [
          {
            id: "cy-p1-m1",
            title: "Cybersecurity & Ethical Hacking Foundations",
            skillTag: "Cybersecurity",
            duration: "6 hrs",
            level: "Beginner / Fresher",
            description: "Master networking protocols, Linux commands, reconnaissance, and security basics.",
            keyTopics: ["TCP/IP & OSI Model", "Linux Command Line", "CIA Triad & Cryptography", "OWASP Top 10"],
            projectIdea: "Set up a virtual security lab and audit a sample web app for OWASP vulnerabilities.",
            video: {
              videoId: "3Kq1MIfTWCE",
              title: "Full Ethical Hacking Course - Network Penetration Testing",
              channel: "freeCodeCamp.org",
              duration: "14:51:06",
              pointerNote: "POINTER: Start with Networking Basics (00:15:00) and Linux Basics (01:20:00).",
              timestamps: [
                { time: "00:15:00", label: "Networking Refresher" },
                { time: "01:20:00", label: "Linux for Security" },
                { time: "04:10:00", label: "Vulnerability Scanning" }
              ]
            }
          }
        ]
      },
      {
        id: "cy-p2",
        phaseNumber: "PHASE 02",
        title: "Python for Security Automation & SQL Injection Defense",
        duration: "3 Weeks",
        summary: "Write security automation scripts in Python and secure databases against injection attacks.",
        modules: [
          {
            id: "cy-p2-m1",
            title: "Python Scripting for Cybersecurity",
            skillTag: "Python",
            duration: "4 hrs",
            level: "Intermediate",
            description: "Automate log analysis, port scanning, and security checks using Python.",
            keyTopics: ["Socket Programming", "HTTP Requests Analysis", "Log Parsing", "Parameterized SQL"],
            projectIdea: "Build a Python Network Port & Security Header Scanner.",
            video: {
              videoId: "rfscVS0vtbw",
              title: "Learn Python - Full Course for Beginners",
              channel: "freeCodeCamp.org",
              duration: "4:26:52",
              pointerNote: "POINTER: Focus on strings, files, and modules to write clean security scripts.",
              timestamps: [
                { time: "00:00", label: "Python Foundations" },
                { time: "02:30:00", label: "Modules & Files" }
              ]
            }
          }
        ]
      },
      {
        id: "cy-p3",
        phaseNumber: "PHASE 03",
        title: "Cloud Security & DevSecOps",
        duration: "3 Weeks",
        summary: "Secure AWS/Cloud environments, IAM policies, and container pipelines.",
        modules: [
          {
            id: "cy-p3-m1",
            title: "Cloud Computing & AWS Security Essentials",
            skillTag: "Cloud Computing",
            duration: "5 hrs",
            level: "Intermediate",
            description: "Learn IAM least-privilege, VPC firewalls, encryption at rest, and cloud monitoring.",
            keyTopics: ["IAM Roles & Policies", "VPC & Security Groups", "CloudTrail & Monitoring"],
            projectIdea: "Configure a hardened cloud deployment architecture with automated alerts.",
            video: {
              videoId: "SOTamWNgDKc",
              title: "AWS Certified Cloud Practitioner Certification Course",
              channel: "freeCodeCamp.org",
              duration: "13:25:58",
              pointerNote: "POINTER: Jump to the AWS Shared Responsibility Model & IAM Security section.",
              timestamps: [
                { time: "00:00", label: "Cloud Concepts" },
                { time: "02:15:00", label: "IAM & Cloud Security" },
                { time: "05:30:00", label: "VPC & Networking" }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    id: "ui-ux-designer",
    title: "UI/UX & Product Designer",
    category: "UI/UX Design",
    tagline: "Craft intuitive digital products, design systems, interactive prototypes, and user-centered experiences.",
    fresherFriendly: true,
    salaryRange: "₹5.5L – ₹16L / yr ($75k – $130k)",
    growthRate: "+28% YoY Demand",
    demandLevel: "High",
    industries: ["Technology", "E-commerce", "Media & Entertainment", "Education", "Healthcare"],
    relatedInterests: ["UI/UX Design", "Web Development", "Business & Management", "Entrepreneurship"],
    requiredSkills: ["UI/UX Design", "Communication", "Problem Solving", "JavaScript", "React"],
    bonusSkills: ["Leadership", "Git & GitHub"],
    overview:
      "Product & UI/UX Designers bridge human psychology and technology—conducting user research, wireframing user flows, building Figma design systems, and collaborating with frontend engineers.",
    fresherTip:
      "A strong portfolio with 2 deep UX case studies (showing your problem discovery, wireframes, usability testing, and final UI) matters far more than certificates!",
    introVideo: {
      videoId: "c9Wg6Cb_YlU",
      title: "UI / UX Design Tutorial – Wireframe, Mockup & Design in Figma",
      channel: "freeCodeCamp.org",
      duration: "1:37:19",
      pointerNote: "Hands-on Figma & UI/UX crash course to start designing immediately."
    },
    phases: [
      {
        id: "ux-p1",
        phaseNumber: "PHASE 01",
        title: "New Beginning: Design Thinking, Typography & Color Systems",
        duration: "3 Weeks",
        summary: "Learn visual hierarchy, spacing, typography scales, accessibility (WCAG), and user empathy.",
        modules: [
          {
            id: "ux-p1-m1",
            title: "UI/UX Design & Figma Complete Walkthrough",
            skillTag: "UI/UX Design",
            duration: "3 hrs",
            level: "Beginner / Fresher",
            description: "Master auto-layout, components, variants, wireframing, and interactive prototyping in Figma.",
            keyTopics: ["Visual Hierarchy & Grids", "Typography & Color Contrast", "Figma Auto-Layout", "Interactive Prototypes"],
            projectIdea: "Redesign a student campus app with a complete Figma component library.",
            video: {
              videoId: "c9Wg6Cb_YlU",
              title: "UI / UX Design Tutorial – Wireframe, Mockup & Design in Figma",
              channel: "freeCodeCamp.org",
              duration: "1:37:19",
              pointerNote: "POINTER: Follow along in Figma (free) to build both wireframes and high-fidelity mockups.",
              timestamps: [
                { time: "00:00", label: "Wireframing Basics" },
                { time: "28:00", label: "Typography & Colors" },
                { time: "55:00", label: "High-Fidelity Prototyping" }
              ]
            }
          }
        ]
      },
      {
        id: "ux-p2",
        phaseNumber: "PHASE 02",
        title: "Design-to-Code: Interactive Frontend for Designers",
        duration: "3 Weeks",
        summary: "Bring your designs to life with HTML, CSS, JavaScript, and React components.",
        modules: [
          {
            id: "ux-p2-m1",
            title: "React & Component Design for UI Engineers",
            skillTag: "React",
            duration: "4 hrs",
            level: "Intermediate",
            description: "Understand how Figma components map directly to reusable React props and states.",
            keyTopics: ["Design Tokens in CSS", "Reusable UI Components", "Micro-interactions"],
            projectIdea: "Build a live coded version of your Figma portfolio case study.",
            video: {
              videoId: "bMknfKXIFA8",
              title: "React Course - Beginner's Tutorial",
              channel: "freeCodeCamp.org",
              duration: "11:55:27",
              pointerNote: "POINTER: Watch the first 3 hours to master building clean UI components.",
              timestamps: [
                { time: "00:00", label: "Component Architecture" },
                { time: "01:30:00", label: "Styling & Layouts" }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    id: "cloud-devops-engineer",
    title: "Cloud Solutions & DevOps Engineer",
    category: "Cloud Computing",
    tagline: "Architect resilient cloud infrastructure, CI/CD pipelines, Docker containers, and Kubernetes clusters.",
    fresherFriendly: true,
    salaryRange: "₹7L – ₹20L / yr ($90k – $150k)",
    growthRate: "+38% YoY Demand",
    demandLevel: "Very High",
    industries: ["Technology", "Finance", "E-commerce", "Consulting", "Healthcare"],
    relatedInterests: ["Cloud Computing", "Software Development", "Cybersecurity", "Web Development"],
    requiredSkills: ["Cloud Computing", "Python", "Git & GitHub", "SQL", "Problem Solving"],
    bonusSkills: ["Node.js", "Java", "C++"],
    overview:
      "Cloud & DevOps Engineers automate software delivery, manage cloud infrastructure on AWS/GCP/Azure, and ensure applications scale reliably for millions of users.",
    fresherTip:
      "Learn Linux commands, Git, and Docker first, then deploy a real Node.js or Python app on AWS Free Tier.",
    introVideo: {
      videoId: "SOTamWNgDKc",
      title: "AWS Certified Cloud Practitioner Certification Course",
      channel: "freeCodeCamp.org",
      duration: "13:25:58",
      pointerNote: "Step-by-step cloud engineering foundation for beginners."
    },
    phases: [
      {
        id: "cl-p1",
        phaseNumber: "PHASE 01",
        title: "New Beginning: Git, Linux & Cloud Fundamentals",
        duration: "3 Weeks",
        summary: "Understand cloud computing models (IaaS, PaaS, SaaS), Git workflows, and Linux servers.",
        modules: [
          {
            id: "cl-p1-m1",
            title: "AWS Cloud Practitioner Full Bootcamp",
            skillTag: "Cloud Computing",
            duration: "6 hrs",
            level: "Beginner / Fresher",
            description: "Learn EC2, S3, RDS, Lambda, VPC, and cloud architecture best practices.",
            keyTopics: ["EC2 & Serverless Lambda", "S3 Object Storage", "VPC Networking", "Cloud Cost & Security"],
            projectIdea: "Deploy a scalable multi-tier web application on AWS Free Tier.",
            video: {
              videoId: "SOTamWNgDKc",
              title: "AWS Certified Cloud Practitioner Certification Course",
              channel: "freeCodeCamp.org",
              duration: "13:25:58",
              pointerNote: "POINTER: Hands-on AWS console demos included throughout the course.",
              timestamps: [
                { time: "00:00", label: "Cloud Computing Intro" },
                { time: "03:10:00", label: "EC2 Virtual Servers" },
                { time: "04:40:00", label: "S3 & Databases" }
              ]
            }
          }
        ]
      },
      {
        id: "cl-p2",
        phaseNumber: "PHASE 02",
        title: "Containers, Docker & Automated CI/CD Pipelines",
        duration: "3 Weeks",
        summary: "Containerize applications with Docker and automate testing & deployment with GitHub Actions.",
        modules: [
          {
            id: "cl-p2-m1",
            title: "Docker & Containerization for Beginners",
            skillTag: "Cloud Computing",
            duration: "3 hrs",
            level: "Intermediate",
            description: "Package any application with its dependencies into lightweight Docker containers.",
            keyTopics: ["Dockerfiles & Images", "Docker Compose", "Container Networking", "CI/CD Pipelines"],
            projectIdea: "Dockerize a full-stack React + Node + Postgres app with a single docker-compose command.",
            video: {
              videoId: "fqMOX6JJhGo",
              title: "Docker Tutorial for Beginners - A Full DevOps Course",
              channel: "freeCodeCamp.org",
              duration: "2:10:18",
              pointerNote: "POINTER: Clear visual animations explaining containers vs virtual machines.",
              timestamps: [
                { time: "00:00", label: "Why Containers?" },
                { time: "35:00", label: "Writing a Dockerfile" },
                { time: "01:15:00", label: "Docker Compose Multi-Container" }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    id: "software-dsa-engineer",
    title: "Software Development Engineer (SDE — Java / C++)",
    category: "Software Development",
    tagline: "Master Data Structures, Algorithms, Object-Oriented Design, and high-performance backend systems.",
    fresherFriendly: true,
    salaryRange: "₹7L – ₹24L / yr ($90k – $155k)",
    growthRate: "+31% YoY Demand",
    demandLevel: "Very High",
    industries: ["Technology", "Finance", "E-commerce", "Manufacturing"],
    relatedInterests: ["Software Development", "Artificial Intelligence", "Web Development", "Cloud Computing"],
    requiredSkills: ["Java", "C++", "Problem Solving", "SQL", "Git & GitHub"],
    bonusSkills: ["Python", "JavaScript", "Communication"],
    overview:
      "Software Development Engineers (SDEs) build core platform services, distributed systems, and high-throughput backends at product and enterprise tech companies.",
    fresherTip:
      "Campus placements and product company interviews heavily test Data Structures & Algorithms (DSA) alongside core CS fundamentals (OS, DBMS, OOP).",
    introVideo: {
      videoId: "8hly31xKli0",
      title: "Algorithms and Data Structures Tutorial - Full Course for Beginners",
      channel: "freeCodeCamp.org",
      duration: "5:22:08",
      pointerNote: "Essential foundation for fresher SDE placements and coding rounds."
    },
    phases: [
      {
        id: "sde-p1",
        phaseNumber: "PHASE 01",
        title: "New Beginning: Core Language Mastery (Java / C++) & OOP",
        duration: "3 Weeks",
        summary: "Master Object-Oriented Programming, memory management, and standard template/collections libraries.",
        modules: [
          {
            id: "sde-p1-m1",
            title: "Java Programming & OOP Complete Course",
            skillTag: "Java",
            duration: "4 hrs",
            level: "Beginner / Fresher",
            description: "Learn classes, inheritance, polymorphism, interfaces, collections, and exception handling.",
            keyTopics: ["OOP 4 Pillars", "Java Collections Framework", "Generics & Streams", "Multithreading"],
            projectIdea: "Build a Library & Course Management System using clean OOP design patterns.",
            video: {
              videoId: "A74TOX803D0",
              title: "Java Programming for Beginners – Full Course",
              channel: "freeCodeCamp.org",
              duration: "4:11:00",
              pointerNote: "POINTER: Ideal for students preparing for Java-based technical interviews.",
              timestamps: [
                { time: "00:00", label: "Java Syntax & Types" },
                { time: "01:45:00", label: "Arrays & Collections" },
                { time: "02:50:00", label: "Object-Oriented Programming" }
              ]
            }
          },
          {
            id: "sde-p1-m2",
            title: "C++ Programming & STL for High Performance",
            skillTag: "C++",
            duration: "4 hrs",
            level: "Beginner / Fresher",
            description: "Master pointers, references, OOP in C++, and the Standard Template Library (STL).",
            keyTopics: ["Pointers & Memory", "Vectors, Maps & Sets", "Classes & Templates"],
            projectIdea: "Build a fast file-compression or graph route finder CLI in C++.",
            video: {
              videoId: "vLnPwxZdW4Y",
              title: "C++ Tutorial for Beginners - Full Course",
              channel: "freeCodeCamp.org",
              duration: "4:01:19",
              pointerNote: "POINTER: Covers everything from basic syntax to pointers and classes.",
              timestamps: [
                { time: "00:00", label: "C++ Setup & Basics" },
                { time: "02:15:00", label: "Pointers & Memory" },
                { time: "03:10:00", label: "Classes & Inheritance" }
              ]
            }
          }
        ]
      },
      {
        id: "sde-p2",
        phaseNumber: "PHASE 02",
        title: "Data Structures, Algorithms & Placement Readiness",
        duration: "5 Weeks",
        summary: "Crack coding rounds with mastery over Trees, Graphs, Dynamic Programming, and SQL.",
        modules: [
          {
            id: "sde-p2-m1",
            title: "Data Structures & Algorithms Full Visual Course",
            skillTag: "Problem Solving",
            duration: "5 hrs",
            level: "Intermediate",
            description: "Deep dive into time complexity, arrays, linked lists, trees, sorting, and recursion.",
            keyTopics: ["Big-O Complexity", "Linked Lists & Trees", "Sorting & Searching", "Recursion"],
            projectIdea: "Solve 75 curated placement DSA problems and document optimal solutions on GitHub.",
            video: {
              videoId: "8hly31xKli0",
              title: "Algorithms and Data Structures Tutorial - Full Course",
              channel: "freeCodeCamp.org",
              duration: "5:22:08",
              pointerNote: "POINTER: Watch before starting your LeetCode / placement coding practice.",
              timestamps: [
                { time: "00:00", label: "Algorithmic Thinking" },
                { time: "01:55:00", label: "Data Structures" },
                { time: "03:40:00", label: "Sorting & Divide-and-Conquer" }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    id: "product-management-tech",
    title: "Associate Product Manager (APM) & Tech Founder",
    category: "Business & Management",
    tagline: "Lead product strategy, user discovery, agile roadmaps, and cross-functional engineering teams.",
    fresherFriendly: true,
    salaryRange: "₹8L – ₹20L / yr ($90k – $145k)",
    growthRate: "+29% YoY Demand",
    demandLevel: "High",
    industries: ["Technology", "E-commerce", "Finance", "Consulting", "Education"],
    relatedInterests: ["Business & Management", "Entrepreneurship", "UI/UX Design", "Data Science"],
    requiredSkills: ["Communication", "Leadership", "Problem Solving", "Data Analysis", "UI/UX Design"],
    bonusSkills: ["SQL", "Python"],
    overview:
      "Associate Product Managers (APMs) sit at the intersection of business, UX design, and engineering—defining what to build, why it matters to users, and how to measure success.",
    fresherTip:
      "Build a Product Teardown portfolio! Pick 3 products you love, analyze their user onboarding & metrics, and wireframe a high-impact feature improvement.",
    introVideo: {
      videoId: "c9Wg6Cb_YlU",
      title: "Product Design, Wireframing & User Experience Fundamentals",
      channel: "freeCodeCamp.org",
      duration: "1:37:19",
      pointerNote: "Learn how to translate product ideas into wireframes and user flows."
    },
    phases: [
      {
        id: "pm-p1",
        phaseNumber: "PHASE 01",
        title: "New Beginning: Product Thinking, UX & Metrics",
        duration: "3 Weeks",
        summary: "Understand user personas, PRDs (Product Requirement Docs), North Star metrics, and wireframing.",
        modules: [
          {
            id: "pm-p1-m1",
            title: "Wireframing & Product Prototyping in Figma",
            skillTag: "UI/UX Design",
            duration: "2 hrs",
            level: "Beginner / Fresher",
            description: "Communicate product specs visually with wireframes and interactive user flows.",
            keyTopics: ["User Stories & Personas", "Wireframing Flows", "Prioritization Frameworks (RICE)"],
            projectIdea: "Write a complete PRD and interactive wireframe for an AI Student Mentorship feature.",
            video: {
              videoId: "c9Wg6Cb_YlU",
              title: "UI / UX Design Tutorial – Wireframe, Mockup & Design in Figma",
              channel: "freeCodeCamp.org",
              duration: "1:37:19",
              pointerNote: "POINTER: Focus on the wireframing and user flow mapping sections.",
              timestamps: [
                { time: "00:00", label: "Product Wireframes" },
                { time: "45:00", label: "Interactive Flows" }
              ]
            }
          }
        ]
      }
    ]
  }
];

const EXCLUDED_MANUAL_TRADES = [
  "carpenter", "joiner", "welder", "welding", "plumber", "plumbing", "mason",
  "bricklayer", "electrician", "wireman", "mechanic", "automotive", "locksmith",
  "blacksmith", "painter", "plasterer", "roofer", "glazier", "pipefitter", "tailor",
  "butcher", "baker", "carpentry", "woodwork"
];

export const CAREER_TRACKS = [
  ...ORIGINAL_TECH_TRACKS,
  ...ESCO_ONET_OCCUPATIONS.filter((e) => {
    if (ORIGINAL_TECH_TRACKS.some((t) => t.id === e.id)) return false;
    const titleLower = (e.title || "").toLowerCase();
    const idLower = (e.id || "").toLowerCase();
    const catLower = (e.category || "").toLowerCase();
    return !EXCLUDED_MANUAL_TRADES.some(
      (kw) => titleLower.includes(kw) || idLower.includes(kw) || catLower.includes(kw)
    );
  })
];

export const SKILL_VIDEO_CATALOG = [
  {
    skill: "Python",
    category: "Software & AI",
    level: "Beginner to Intermediate",
    estimatedTime: "6 Hours",
    videoId: "rfscVS0vtbw",
    title: "Python for Beginners — Full Course [Programming Tutorial]",
    channel: "Programming with Mosh",
    whyLearn: "The #1 programming language for school students, AI, data science, and web development.",
    pointerTip: "Start with variables, conditions, and lists before building mini games.",
    topics: ["Variables & Types", "Control Flow", "Functions", "Lists & Dictionaries"]
  },
  {
    skill: "Artificial Intelligence",
    category: "Artificial Intelligence",
    level: "Beginner",
    estimatedTime: "20 Mins",
    videoId: "aircAruvnKk",
    title: "But what is a neural network? | Deep Learning Chapter 1",
    channel: "3Blue1Brown",
    whyLearn: "Best visual intuition for understanding neural networks and modern AI.",
    pointerTip: "Watch the visual weight activations from 00:00 to 11:20.",
    topics: ["Neural Weights", "Activation Functions", "Gradient Descent", "Loss Optimization"]
  },
  {
    skill: "React",
    category: "Frontend Engineering",
    level: "Intermediate",
    estimatedTime: "11 Hours",
    videoId: "bMknfKXIFA8",
    title: "React Course — Beginner's Tutorial for React JavaScript Library",
    channel: "freeCodeCamp.org",
    whyLearn: "The most in-demand frontend library used by startups and enterprises worldwide.",
    pointerTip: "Build the hands-on projects to solidify Components, Props, and Hooks.",
    topics: ["JSX & Components", "useState & useEffect", "Custom Hooks", "State Management"]
  },
  {
    skill: "Java",
    category: "Software Engineering",
    level: "Beginner to Intermediate",
    estimatedTime: "4 Hours",
    videoId: "A74TOX803D0",
    title: "Java Programming for Beginners — Full Course",
    channel: "freeCodeCamp.org",
    whyLearn: "Backbone of enterprise backend engineering, Android apps, and campus placement coding rounds.",
    pointerTip: "Master the Object-Oriented Programming and Collections sections for SDE interviews.",
    topics: ["Core Syntax", "OOP Pillars", "Collections Framework", "Exception Handling"]
  },
  {
    skill: "Spring Boot",
    category: "Backend Engineering",
    level: "Intermediate",
    estimatedTime: "8 Hours",
    videoId: "Oe421EPjeBE",
    title: "Spring Boot 3 & Microservices Full Backend Course",
    channel: "freeCodeCamp.org",
    whyLearn: "Build production enterprise REST APIs, microservices, and secure web services.",
    pointerTip: "Jump to REST Controllers and Spring Data JPA integration.",
    topics: ["Dependency Injection", "Spring Data JPA", "REST Controllers", "Spring Security"]
  },
  {
    skill: "Web Development",
    category: "Web Development",
    level: "Beginner",
    estimatedTime: "3 Hours",
    videoId: "mU6anWqZJcc",
    title: "Build Your First Website with HTML, CSS & Responsive Design",
    channel: "freeCodeCamp.org",
    whyLearn: "Build personal portfolio websites, school projects, and interactive web pages.",
    pointerTip: "Learn flexbox and CSS grid layout models.",
    topics: ["HTML Semantics", "CSS Flexbox", "Responsive Design", "Web Hosting"]
  },
  {
    skill: "Data Structures & Algorithms",
    category: "Computer Science",
    level: "Intermediate",
    estimatedTime: "5 Hours",
    videoId: "8hly31xKli0",
    title: "Algorithms and Data Structures Tutorial — Full Course",
    channel: "freeCodeCamp.org",
    whyLearn: "Sharpens your analytical thinking and prepares you for technical coding interviews at top companies.",
    pointerTip: "Start with Big-O notation and Binary Search to build algorithmic intuition.",
    topics: ["Big-O Complexity", "Binary Search", "Linked Lists & Trees", "Sorting & Recursion"]
  },
  {
    skill: "Python for School Students",
    category: "School & Coding Basics",
    level: "Beginner (Class 8–12)",
    estimatedTime: "3.5 Hours",
    videoId: "rfscVS0vtbw",
    title: "Python Programming for School Beginners — Variables, Loops & Mini Games",
    channel: "Programming with Mosh",
    whyLearn: "Start learning computer programming early in school with easy-to-read Python logic.",
    pointerTip: "Write your first Python program step-by-step and experiment with interactive turtle graphics.",
    topics: ["Variables & Print", "If-Else Logic", "Loops & Counting", "Simple Text Games"]
  },
  {
    skill: "AI & Prompt Engineering Basics",
    category: "Modern AI & Tech",
    level: "Beginner (All Levels)",
    estimatedTime: "1.5 Hours",
    videoId: "aircAruvnKk",
    title: "Understanding How AI & Neural Networks Work — Complete Beginner Guide",
    channel: "3Blue1Brown",
    whyLearn: "Understand how artificial intelligence models process text, images, and smart queries.",
    pointerTip: "Watch the visual neural network weights and activations for immediate conceptual clarity.",
    topics: ["Neural Neurons", "Activation Functions", "Prompt Formatting", "Ethics & AI Safety"]
  },
  {
    skill: "Build My First Website (HTML/CSS)",
    category: "Web & Creative Tech",
    level: "Beginner (School & First Steps)",
    estimatedTime: "2 Hours",
    videoId: "mU6anWqZJcc",
    title: "HTML & CSS Complete Crash Course for Building Your First Web Page",
    channel: "freeCodeCamp.org",
    whyLearn: "Create personal projects, school club pages, and portfolio showcases on the internet.",
    pointerTip: "Type along and save your file as index.html to view directly in your web browser.",
    topics: ["HTML Tags & Headings", "CSS Colors & Fonts", "Layouts & Flexbox", "Publishing Live"]
  },
  {
    skill: "Java & Spring Boot REST APIs",
    category: "College & Backend Engineering",
    level: "Intermediate (B.Tech / MCA)",
    estimatedTime: "4.5 Hours",
    videoId: "Oe421EPjeBE",
    title: "Spring Boot 3 Backend Mastery — Build Production REST APIs and Services",
    channel: "freeCodeCamp.org",
    whyLearn: "The most popular enterprise backend framework used by product companies and campus recruiters.",
    pointerTip: "Pay close attention to dependency injection, JPA entities, and REST controller mapping.",
    topics: ["Spring Boot Starters", "REST Controllers", "JPA & Hibernate", "Postman API Testing"]
  },
  {
    skill: "React 19 & Modern Web Apps",
    category: "Frontend Engineering",
    level: "Intermediate (College & Freshers)",
    estimatedTime: "6 Hours",
    videoId: "bMknfKXIFA8",
    title: "React 19 Complete Hands-On Course — Hooks, Router & State Management",
    channel: "freeCodeCamp.org",
    whyLearn: "The top frontend skill demanded in IT job openings and tech product startups.",
    pointerTip: "Build reusable components and master useState and useEffect for dynamic web apps.",
    topics: ["Components & JSX", "useState & useEffect", "Custom Hooks", "Connecting to REST APIs"]
  },
  {
    skill: "Data Structures & Placement Coding",
    category: "Campus Placements & SDE",
    level: "Intermediate / Advanced",
    estimatedTime: "5 Hours",
    videoId: "8hly31xKli0",
    title: "Data Structures & Algorithms Course for Software Engineering Placements",
    channel: "freeCodeCamp.org",
    whyLearn: "Essential for clearing coding assessment rounds at top software and tech firms.",
    pointerTip: "Master Arrays, HashMaps, Two Pointers, and Binary Trees for coding tests.",
    topics: ["Big-O Analysis", "Arrays & HashMaps", "Binary Search & Recursion", "Trees & Graphs"]
  },
  {
    skill: "ATS Resume & Tech Interview Prep",
    category: "Fresher Career Launch",
    level: "Graduate & Entry-Level",
    estimatedTime: "2 Hours",
    videoId: "8hly31xKli0",
    title: "Fresher Software Engineer Interview Preparation & ATS Resume Blueprint",
    channel: "freeCodeCamp.org",
    whyLearn: "Ensure your resume passes ATS screeners and ace technical and behavioral interview questions.",
    pointerTip: "Quantify your project achievements with metrics and align keywords to target job descriptions.",
    topics: ["ATS Keyword Matching", "STAR Method Answers", "Live Coding Confidence", "Salary Negotiation"]
  },
  {
    skill: "Calculus (Differentiation & Integration)",
    category: "Secondary & Higher Sciences",
    level: "Class 11, 12 & Engineering",
    estimatedTime: "3 Hours",
    videoId: "gUWJ-6nL5-8",
    title: "Essence of Calculus — Visual Intuition by 3Blue1Brown",
    channel: "3Blue1Brown",
    whyLearn: "The mathematical language of physics, engineering, graphics, motion, and machine learning.",
    pointerTip: "Visualize derivatives as slopes of secant lines shrinking to a point of tangency.",
    topics: ["Limits & Tangents", "Product & Chain Rule", "Integration as Area", "Exponential Growth"]
  },
  {
    skill: "Python",
    category: "Programming & AI",
    level: "Beginner to Intermediate",
    estimatedTime: "4.5 Hours",
    videoId: "rfscVS0vtbw",
    title: "Learn Python — Full Course for Beginners",
    channel: "freeCodeCamp.org",
    whyLearn: "The #1 most versatile language for AI, Machine Learning, Data Science, Automation, and Backend APIs.",
    pointerTip: "Start at 00:00 if you are a complete fresher, or jump to 02:15:00 for data structures and functions.",
    topics: ["Variables & Data Types", "Loops & Conditionals", "Functions & Modules", "Object-Oriented Python"]
  },
  {
    skill: "JavaScript",
    category: "Web Development",
    level: "Beginner to Intermediate",
    estimatedTime: "3.5 Hours",
    videoId: "PkZNo7MFNFg",
    title: "Learn JavaScript — Full Course for Beginners",
    channel: "freeCodeCamp.org",
    whyLearn: "Powers 98% of the web. Essential for Frontend, React, Node.js, and Full-Stack Web Development.",
    pointerTip: "Practice every code snippet in your browser console while watching.",
    topics: ["ES6+ Syntax", "Arrays & Objects", "DOM Manipulation", "Async/Await & Fetch API"]
  },
  {
    skill: "React",
    category: "Frontend Engineering",
    level: "Intermediate",
    estimatedTime: "11 Hours (Project-Based)",
    videoId: "bMknfKXIFA8",
    title: "React Course — Beginner's Tutorial for React JavaScript Library",
    channel: "freeCodeCamp.org",
    whyLearn: "The most in-demand frontend library used by startups and Fortune 500 companies worldwide.",
    pointerTip: "Build the 4 hands-on projects inside this video to solidify Components, Props, and Hooks.",
    topics: ["JSX & Components", "useState & useEffect", "Custom Hooks", "State Management"]
  },
  {
    skill: "Node.js",
    category: "Backend Engineering",
    level: "Intermediate",
    estimatedTime: "8 Hours",
    videoId: "Oe421EPjeBE",
    title: "Node.js and Express.js — Full Backend Course",
    channel: "freeCodeCamp.org",
    whyLearn: "Lets you build fast, scalable REST APIs, microservices, and real-time servers using JavaScript.",
    pointerTip: "Jump to 03:15:00 once you know Node basics to build Express REST APIs.",
    topics: ["Event Loop & Async", "Express Routing", "Middleware & JWT Auth", "REST API Architecture"]
  },
  {
    skill: "SQL",
    category: "Databases & Data",
    level: "Beginner to Intermediate",
    estimatedTime: "4 Hours",
    videoId: "HXV3zeQKqGY",
    title: "SQL Tutorial — Full Database Course for Beginners",
    channel: "freeCodeCamp.org",
    whyLearn: "Every software engineer, data scientist, and analyst needs SQL to query and model relational data.",
    pointerTip: "Pay special attention to JOINs and GROUP BY—they appear in 90% of fresher interviews.",
    topics: ["Schema & Keys", "SELECT, WHERE, ORDER BY", "INNER/LEFT JOINs", "Aggregations & Subqueries"]
  },
  {
    skill: "Machine Learning",
    category: "Artificial Intelligence",
    level: "Beginner to Intermediate",
    estimatedTime: "4 Hours",
    videoId: "i_LwzRVP7bg",
    title: "Machine Learning for Everybody — Full Course",
    channel: "freeCodeCamp.org",
    whyLearn: "Understand how predictive models, classifiers, and neural networks work with hands-on Python code.",
    pointerTip: "Open Google Colab alongside the video to run the Scikit-Learn & TensorFlow notebooks live.",
    topics: ["Supervised vs Unsupervised", "Classification & Regression", "Neural Networks", "Model Evaluation"]
  },
  {
    skill: "Data Analysis",
    category: "Data Science",
    level: "Beginner to Intermediate",
    estimatedTime: "4.5 Hours",
    videoId: "r-uOLxNrNk8",
    title: "Data Analysis with Python — Full Course for Beginners",
    channel: "freeCodeCamp.org",
    whyLearn: "Turn raw CSVs and databases into clean datasets and compelling visual insights using Pandas.",
    pointerTip: "Focus on Pandas DataFrames (01:45:00) and data cleaning workflows.",
    topics: ["NumPy Arrays", "Pandas DataFrames", "Handling Missing Data", "Matplotlib & Seaborn"]
  },
  {
    skill: "Java",
    category: "Software Engineering",
    level: "Beginner to Intermediate",
    estimatedTime: "4 Hours",
    videoId: "A74TOX803D0",
    title: "Java Programming for Beginners — Full Course",
    channel: "freeCodeCamp.org",
    whyLearn: "Backbone of enterprise backend engineering, Android apps, and campus placement coding rounds.",
    pointerTip: "Master the Object-Oriented Programming and Collections sections for SDE interviews.",
    topics: ["Core Syntax", "OOP Pillars", "Collections Framework", "Exception Handling"]
  },
  {
    skill: "C++",
    category: "Systems & Competitive Coding",
    level: "Beginner to Intermediate",
    estimatedTime: "4 Hours",
    videoId: "vLnPwxZdW4Y",
    title: "C++ Tutorial for Beginners — Full Course",
    channel: "freeCodeCamp.org",
    whyLearn: "Unmatched speed for competitive programming, game engines, robotics, and high-frequency systems.",
    pointerTip: "Watch the Pointers & Memory Management section carefully to stand out in interviews.",
    topics: ["Syntax & Functions", "Pointers & References", "OOP in C++", "STL Containers"]
  },
  {
    skill: "Git & GitHub",
    category: "Developer Tools",
    level: "Beginner",
    estimatedTime: "1 Hour",
    videoId: "RGOj5yH7evk",
    title: "Git and GitHub for Beginners — Crash Course",
    channel: "freeCodeCamp.org",
    whyLearn: "Mandatory skill for every tech role—collaborate on code and showcase your project portfolio.",
    pointerTip: "Create a GitHub account and push your first repository while watching this 1-hour crash course.",
    topics: ["Commits & History", "Branches & Merging", "Pull Requests", "GitHub Portfolio"]
  },
  {
    skill: "UI/UX Design",
    category: "Design & Product",
    level: "Beginner",
    estimatedTime: "1.5 Hours",
    videoId: "c9Wg6Cb_YlU",
    title: "UI / UX Design Tutorial — Wireframe, Mockup & Design in Figma",
    channel: "freeCodeCamp.org",
    whyLearn: "Design intuitive interfaces and interactive prototypes before writing a single line of code.",
    pointerTip: "Great for both aspiring UI/UX designers and developers who want their apps to look world-class.",
    topics: ["Wireframing", "Typography & Color", "Figma Auto-Layout", "Interactive Prototyping"]
  },
  {
    skill: "Cloud Computing",
    category: "Cloud & DevOps",
    level: "Beginner to Intermediate",
    estimatedTime: "4 Hours",
    videoId: "SOTamWNgDKc",
    title: "AWS Cloud Practitioner & Cloud Computing Essentials",
    channel: "freeCodeCamp.org",
    whyLearn: "Modern applications run on the cloud. Learn how servers, storage, and serverless functions scale.",
    pointerTip: "Focus on core services: EC2, S3, RDS, IAM, and VPC.",
    topics: ["Cloud Architecture", "AWS Core Services", "IAM Security", "Serverless & Docker"]
  },
  {
    skill: "Problem Solving",
    category: "Algorithms & DSA",
    level: "Beginner to Intermediate",
    estimatedTime: "5 Hours",
    videoId: "8hly31xKli0",
    title: "Algorithms and Data Structures Tutorial — Full Course",
    channel: "freeCodeCamp.org",
    whyLearn: "Sharpens your analytical thinking and prepares you for technical coding interviews at top companies.",
    pointerTip: "Start with Big-O notation and Binary Search to build algorithmic intuition.",
    topics: ["Big-O Complexity", "Binary Search", "Linked Lists & Trees", "Sorting & Recursion"]
  },
  {
    skill: "Communication",
    category: "Career & Soft Skills",
    level: "All Levels",
    estimatedTime: "1.5 Hours",
    videoId: "HG68Ymazo18",
    title: "How to Ace Your Job Interview & Communicate with Confidence",
    channel: "Career & Leadership Lab",
    whyLearn: "Strong communication turns technical ability into job offers, leadership, and rapid career growth.",
    pointerTip: "Practice the STAR method (Situation, Task, Action, Result) for fresher behavioral interviews.",
    topics: ["STAR Interview Method", "Explaining Technical Projects", "Team Collaboration", "Executive Presence"]
  },
  {
    skill: "Leadership",
    category: "Management & Strategy",
    level: "All Levels",
    estimatedTime: "1.5 Hours",
    videoId: "ua-CiDNNj30",
    title: "Project Leadership, Agile Teams & Data-Driven Decision Making",
    channel: "Tech & Product Academy",
    whyLearn: "Lead hackathons, student teams, startups, and cross-functional engineering initiatives.",
    pointerTip: "Apply agile sprint planning to your college or personal capstone projects.",
    topics: ["Agile & Scrum", "Prioritization", "Stakeholder Alignment", "Mentorship"]
  }
];

function normalize(str) {
  return String(str || "").trim().toLowerCase();
}

/**
 * NEXORA AI Career Scoring & Recommendation Engine
 */
export function runNexoraCareerIntelligence(profile = {}, progress = {}) {
  const userInterests = Array.isArray(profile.interests) ? profile.interests : [];
  const userSkills = Array.isArray(profile.skills) ? profile.skills : [];
  const userGoals = Array.isArray(profile.careerGoals) ? profile.careerGoals : [];
  const userIndustries = Array.isArray(profile.preferredIndustries) ? profile.preferredIndustries : [];
  const targetRole = normalize(profile.targetRole);
  const tradeOrStream = normalize(profile.tradeOrStream || profile.trade_or_stream);
  const classOrGrade = normalize(profile.classOrGrade || profile.class_or_grade);
  const personaType = normalize(profile.personaType || profile.persona_type);
  const experienceLevel = profile.experienceLevel || "Beginner / Fresher";
  const currentStatus = profile.currentStatus || "Student / Fresher";

  const completedSteps = Array.isArray(progress.completedSteps) ? progress.completedSteps : [];
  const watchedVideos = Array.isArray(progress.watchedVideos) ? progress.watchedVideos : [];

  const scoredCareers = CAREER_TRACKS.map((career, idx) => {
    // 0. Persona & Direct Match
    let directAffinityBonus = 0;
    const titleNorm = normalize(career.title);
    const catNorm = normalize(career.category);
    const idNorm = normalize(career.id);

    // Suppress vocational manual trades (carpentry, welding, etc.) for student, college, and fresher
    const isManualTrade = idNorm.includes("carpenter") || idNorm.includes("welder") || idNorm.includes("electrician") || idNorm.includes("plumber");
    if (isManualTrade) {
      directAffinityBonus -= 150;
    }

    if (personaType === "student" || personaType === "school_student") {
      if (idNorm.includes("school") || idNorm === "ai-ml-engineer" || idNorm === "fullstack-developer") {
        directAffinityBonus += 60;
      }
    } else if (personaType === "college" || personaType === "college_student") {
      if (idNorm === "fullstack-developer" || idNorm === "ai-ml-engineer" || idNorm.includes("devops") || idNorm.includes("data")) {
        directAffinityBonus += 60;
      }
    } else if (personaType === "fresher" || personaType === "job_seeker") {
      if (career.fresherFriendly || idNorm === "fullstack-developer" || idNorm === "ai-ml-engineer") {
        directAffinityBonus += 60;
      }
    }

    if (tradeOrStream && (titleNorm.includes(tradeOrStream) || catNorm.includes(tradeOrStream) || tradeOrStream.includes(idNorm) || idNorm.includes(tradeOrStream))) {
      directAffinityBonus += 30;
    }
    if (classOrGrade && (titleNorm.includes(classOrGrade) || catNorm.includes(classOrGrade))) {
      directAffinityBonus += 30;
    }
    if (personaType && career.personaGroup === personaType) {
      directAffinityBonus += 15;
    }

    // 1. Interest Affinity
    const matchedInterests = career.relatedInterests.filter((interest) =>
      userInterests.some((ui) => normalize(ui) === normalize(interest))
    );
    const hasDirectCategoryInterest = userInterests.some(
      (ui) => normalize(ui) === normalize(career.category)
    );
    const interestPoints =
      userInterests.length === 0
        ? 15
        : Math.min(32, matchedInterests.length * 10 + (hasDirectCategoryInterest ? 14 : 0));

    // 2. Skill Overlap & Gap Analysis
    const matchedSkills = career.requiredSkills.filter((skill) =>
      userSkills.some((us) => normalize(us) === normalize(skill))
    );
    const missingSkills = career.requiredSkills.filter(
      (skill) => !userSkills.some((us) => normalize(us) === normalize(skill))
    );
    const skillRatio =
      career.requiredSkills.length > 0 ? matchedSkills.length / career.requiredSkills.length : 0.2;
    const skillPoints =
      userSkills.length === 0
        ? 10
        : Math.min(26, matchedSkills.length * 8 + Math.round(skillRatio * 10));

    // 3. Target Role & Industry Alignment
    let roleBonus = 0;
    if (targetRole) {
      if (titleNorm.includes(targetRole) || targetRole.includes(catNorm) || catNorm.includes(targetRole)) {
        roleBonus = 25;
      } else {
        const words = targetRole.split(/\s+/).filter((w) => w.length > 2);
        if (words.some((w) => titleNorm.includes(w) || catNorm.includes(w))) {
          roleBonus = 15;
        }
      }
    }

    const matchedIndustries = career.industries.filter((ind) =>
      userIndustries.some((ui) => normalize(ui) === normalize(ind))
    );
    const industryBonus = Math.min(8, matchedIndustries.length * 4);

    const rawScore = 35 + directAffinityBonus + interestPoints + skillPoints + roleBonus + industryBonus;
    const matchScore = Math.max(50, Math.min(99, rawScore));

    // Calculate roadmap completion for this career
    const allModules = career.phases.flatMap((p) => p.modules);
    const completedInCareer = allModules.filter(
      (m) =>
        completedSteps.includes(m.id) ||
        watchedVideos.includes(m.video?.videoId)
    );
    const readinessScore = Math.min(
      100,
      Math.round(
        skillRatio * 55 +
          (allModules.length > 0 ? (completedInCareer.length / allModules.length) * 45 : 0)
      )
    );

    // Enrich phases & modules with dynamic student-specific pointers
    let pointerAssigned = false;
    const enrichedPhases = career.phases.map((phase) => {
      const enrichedModules = phase.modules.map((mod) => {
        const isCompleted = completedSteps.includes(mod.id);
        const isVideoWatched = watchedVideos.includes(mod.video?.videoId);
        const alreadyHasSkill = userSkills.some(
          (s) => normalize(s) === normalize(mod.skillTag)
        );
        let isNextPointer = false;
        if (!pointerAssigned && !isCompleted) {
          isNextPointer = true;
          pointerAssigned = true;
        }
        return {
          ...mod,
          isCompleted,
          isVideoWatched,
          alreadyHasSkill,
          isNextPointer,
          youtubeWatchUrl: `https://www.youtube.com/watch?v=${mod.video.videoId}`,
          youtubeEmbedUrl: `https://www.youtube.com/embed/${mod.video.videoId}`,
          youtubeThumbnail: `https://img.youtube.com/vi/${mod.video.videoId}/hqdefault.jpg`
        };
      });

      return {
        ...phase,
        modules: enrichedModules
      };
    });

    // Generate NEXORA AI personalized insight for this career
    const aiInsight =
      matchedSkills.length > 0
        ? `Directly matches your trade & skills in ${matchedSkills.slice(0, 2).join(" & ")}. Next priority: master ${missingSkills.slice(0, 2).join(" & ") || "advanced trade inspection"}.`
        : `Recommended path for ${profile.personaType || "your background"}. Start with Phase 01 to build strong foundation and certifications.`;

    return {
      ...career,
      matchScore,
      readinessScore,
      matchedInterests,
      matchedSkills,
      missingSkills,
      aiInsight,
      phases: enrichedPhases,
      totalModules: allModules.length,
      completedModules: completedInCareer.length
    };
  });

  scoredCareers.sort((a, b) => b.matchScore - a.matchScore);

  const activeCareer =
    scoredCareers.find((c) => c.id === progress.activeCareerId) || scoredCareers[0];

  // Build personalized skill recommendations with YouTube pointers
  const prioritySkillsToLearn = activeCareer.missingSkills.length > 0
    ? activeCareer.missingSkills
    : ["Python", "JavaScript", "React", "SQL", "Machine Learning"].filter(
        (s) => !userSkills.includes(s)
      );

  const recommendedSkillVideos = SKILL_VIDEO_CATALOG.map((item) => {
    const alreadyKnown = userSkills.some((s) => normalize(s) === normalize(item.skill));
    const isPriorityGap = prioritySkillsToLearn.some(
      (s) => normalize(s) === normalize(item.skill)
    );
    const isWatched = watchedVideos.includes(item.videoId);

    return {
      ...item,
      alreadyKnown,
      isPriorityGap,
      isWatched,
      youtubeWatchUrl: `https://www.youtube.com/watch?v=${item.videoId}`,
      youtubeEmbedUrl: `https://www.youtube.com/embed/${item.videoId}`,
      youtubeThumbnail: `https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg`
    };
  }).sort((a, b) => {
    if (a.isPriorityGap !== b.isPriorityGap) return a.isPriorityGap ? -1 : 1;
    if (a.alreadyKnown !== b.alreadyKnown) return a.alreadyKnown ? 1 : -1;
    return 0;
  });

  return {
    modelVersion: "NexoraAI-v3.0-NeuralCareerEngine",
    generatedAt: new Date().toISOString(),
    studentSummary: {
      status: currentStatus,
      experienceLevel,
      targetRole: profile.targetRole || activeCareer.title,
      totalSkillsCount: userSkills.length,
      totalInterestsCount: userInterests.length,
      topMatchCareer: activeCareer.title,
      topMatchScore: activeCareer.matchScore,
      overallReadiness: activeCareer.readinessScore,
      aiHeadline:
        userSkills.length === 0
          ? `Welcome to your New Beginning! NEXORA AI has designed a step-by-step zero-to-job-ready roadmap for ${activeCareer.title}.`
          : `Based on your ${userSkills.length} skills and interest in ${userInterests.slice(0, 2).join(" & ") || activeCareer.category}, you have a ${activeCareer.matchScore}% affinity with ${activeCareer.title}.`
    },
    activeCareer,
    careers: scoredCareers,
    skillVideoLibrary: recommendedSkillVideos
  };
}

/**
 * Dynamically generates a custom 4-phase Roadmap with YouTube pointers for ANY skill or role query
 */
export function generateCustomSkillRoadmap(query = "", profile = {}) {
  const cleanQuery = String(query || "Full-Stack & AI Engineering").trim();
  const qNorm = normalize(cleanQuery);

  // Check if it closely matches one of our deep tracks first
  const matchedTrack = CAREER_TRACKS.find(
    (c) =>
      normalize(c.title).includes(qNorm) ||
      normalize(c.category).includes(qNorm) ||
      c.id.includes(qNorm)
  );

  // Find relevant videos from SKILL_VIDEO_CATALOG
  const matchingVideos = SKILL_VIDEO_CATALOG.filter(
    (v) =>
      normalize(v.skill).includes(qNorm) ||
      qNorm.includes(normalize(v.skill)) ||
      normalize(v.category).includes(qNorm) ||
      normalize(v.title).includes(qNorm)
  );

  const primaryVideo =
    matchingVideos[0] ||
    (qNorm.includes("ai") || qNorm.includes("ml") || qNorm.includes("python")
      ? SKILL_VIDEO_CATALOG[0]
      : qNorm.includes("data") || qNorm.includes("sql")
      ? SKILL_VIDEO_CATALOG[4]
      : SKILL_VIDEO_CATALOG[1]);

  const secondaryVideo =
    matchingVideos[1] ||
    (primaryVideo.skill === "Python" ? SKILL_VIDEO_CATALOG[5] : SKILL_VIDEO_CATALOG[2]);

  const gitVideo = SKILL_VIDEO_CATALOG.find((v) => v.skill === "Git & GitHub") || SKILL_VIDEO_CATALOG[9];
  const dsaVideo = SKILL_VIDEO_CATALOG.find((v) => v.skill === "Problem Solving") || SKILL_VIDEO_CATALOG[12];

  if (matchedTrack) {
    return {
      isCustom: false,
      roadmap: matchedTrack
    };
  }

  return {
    isCustom: true,
    roadmap: {
      id: `custom-${Date.now()}`,
      title: `${cleanQuery} — Complete Fresher Roadmap`,
      category: cleanQuery,
      tagline: `NEXORA AI custom-synthesized roadmap to master ${cleanQuery} from scratch with direct YouTube video lectures.`,
      fresherFriendly: true,
      salaryRange: "₹6L – ₹20L / yr",
      growthRate: "+35% High Demand",
      requiredSkills: [primaryVideo.skill, secondaryVideo.skill, "Git & GitHub", "Problem Solving"],
      phases: [
        {
          id: "cust-p1",
          phaseNumber: "PHASE 01",
          title: `New Beginning: ${cleanQuery} Core Foundations`,
          duration: "2–3 Weeks",
          summary: `Start from zero and master the fundamental syntax, mental models, and setup for ${cleanQuery}.`,
          modules: [
            {
              id: `cust-m1-${Date.now()}`,
              title: `${primaryVideo.title}`,
              skillTag: primaryVideo.skill,
              duration: primaryVideo.estimatedTime,
              level: "Beginner / Fresher",
              description: primaryVideo.whyLearn,
              keyTopics: primaryVideo.topics,
              projectIdea: `Build a beginner mini-project applying ${cleanQuery} core concepts.`,
              isNextPointer: true,
              youtubeWatchUrl: `https://www.youtube.com/watch?v=${primaryVideo.videoId}`,
              youtubeEmbedUrl: `https://www.youtube.com/embed/${primaryVideo.videoId}`,
              youtubeThumbnail: `https://img.youtube.com/vi/${primaryVideo.videoId}/hqdefault.jpg`,
              video: {
                videoId: primaryVideo.videoId,
                title: primaryVideo.title,
                channel: primaryVideo.channel,
                duration: primaryVideo.estimatedTime,
                pointerNote: `POINTER: ${primaryVideo.pointerTip}`,
                timestamps: [
                  { time: "00:00", label: "Introduction & Setup" },
                  { time: "45:00", label: "Core Concepts & Syntax" },
                  { time: "02:00:00", label: "Hands-On Practice" }
                ]
              }
            }
          ]
        },
        {
          id: "cust-p2",
          phaseNumber: "PHASE 02",
          title: `Applied Frameworks & Real-World ${cleanQuery}`,
          duration: "3–4 Weeks",
          summary: `Move from basics to building real applications and workflows in ${cleanQuery}.`,
          modules: [
            {
              id: `cust-m2-${Date.now()}`,
              title: `${secondaryVideo.title}`,
              skillTag: secondaryVideo.skill,
              duration: secondaryVideo.estimatedTime,
              level: "Intermediate",
              description: secondaryVideo.whyLearn,
              keyTopics: secondaryVideo.topics,
              projectIdea: `Create a full-featured ${cleanQuery} dashboard or API service.`,
              isNextPointer: false,
              youtubeWatchUrl: `https://www.youtube.com/watch?v=${secondaryVideo.videoId}`,
              youtubeEmbedUrl: `https://www.youtube.com/embed/${secondaryVideo.videoId}`,
              youtubeThumbnail: `https://img.youtube.com/vi/${secondaryVideo.videoId}/hqdefault.jpg`,
              video: {
                videoId: secondaryVideo.videoId,
                title: secondaryVideo.title,
                channel: secondaryVideo.channel,
                duration: secondaryVideo.estimatedTime,
                pointerNote: `POINTER: ${secondaryVideo.pointerTip}`,
                timestamps: [
                  { time: "00:00", label: "Architecture Overview" },
                  { time: "01:15:00", label: "Building Real Modules" }
                ]
              }
            }
          ]
        },
        {
          id: "cust-p3",
          phaseNumber: "PHASE 03",
          title: "Portfolio Projects, Git & Industry Readiness",
          duration: "2–3 Weeks",
          summary: "Publish your work on GitHub, prepare for technical interviews, and showcase your skills.",
          modules: [
            {
              id: `cust-m3-${Date.now()}`,
              title: gitVideo.title,
              skillTag: "Git & GitHub",
              duration: gitVideo.estimatedTime,
              level: "Beginner",
              description: gitVideo.whyLearn,
              keyTopics: gitVideo.topics,
              projectIdea: `Publish your ${cleanQuery} capstone project on GitHub with a live demo.`,
              isNextPointer: false,
              youtubeWatchUrl: `https://www.youtube.com/watch?v=${gitVideo.videoId}`,
              youtubeEmbedUrl: `https://www.youtube.com/embed/${gitVideo.videoId}`,
              youtubeThumbnail: `https://img.youtube.com/vi/${gitVideo.videoId}/hqdefault.jpg`,
              video: {
                videoId: gitVideo.videoId,
                title: gitVideo.title,
                channel: gitVideo.channel,
                duration: gitVideo.estimatedTime,
                pointerNote: `POINTER: ${gitVideo.pointerTip}`,
                timestamps: [
                  { time: "00:00", label: "Git Basics" },
                  { time: "25:00", label: "GitHub Portfolio Setup" }
                ]
              }
            },
            {
              id: `cust-m4-${Date.now()}`,
              title: dsaVideo.title,
              skillTag: "Problem Solving",
              duration: dsaVideo.estimatedTime,
              level: "Intermediate",
              description: dsaVideo.whyLearn,
              keyTopics: dsaVideo.topics,
              projectIdea: "Complete 30 interview coding problems & mock technical interview.",
              isNextPointer: false,
              youtubeWatchUrl: `https://www.youtube.com/watch?v=${dsaVideo.videoId}`,
              youtubeEmbedUrl: `https://www.youtube.com/embed/${dsaVideo.videoId}`,
              youtubeThumbnail: `https://img.youtube.com/vi/${dsaVideo.videoId}/hqdefault.jpg`,
              video: {
                videoId: dsaVideo.videoId,
                title: dsaVideo.title,
                channel: dsaVideo.channel,
                duration: dsaVideo.estimatedTime,
                pointerNote: `POINTER: ${dsaVideo.pointerTip}`,
                timestamps: [
                  { time: "00:00", label: "Problem Solving Framework" },
                  { time: "01:55:00", label: "Core Data Structures" }
                ]
              }
            }
          ]
        }
      ]
    }
  };
}

/**
 * NEXORA AI Conversational Mentor & Action Engine
 */
export function runNexoraAiChat({ message = "", profile = {}, progress = {} }) {
  const intel = runNexoraCareerIntelligence(profile, progress);
  const topCareer = intel.activeCareer;
  const msgNorm = normalize(message);

  const userSkills = Array.isArray(profile.skills) && profile.skills.length > 0
    ? profile.skills
    : ["Beginner Foundation"];
  const userInterests = Array.isArray(profile.interests) && profile.interests.length > 0
    ? profile.interests
    : [topCareer.category];

  // Detect if user is asking for a specific skill or video
  const mentionedSkills = SKILL_VIDEO_CATALOG.filter(
    (item) =>
      msgNorm.includes(normalize(item.skill)) ||
      (item.skill === "Artificial Intelligence" && msgNorm.includes("ai")) ||
      (item.skill === "Machine Learning" && (msgNorm.includes("ml") || msgNorm.includes("machine learning"))) ||
      (item.skill === "JavaScript" && (msgNorm.includes("js") || msgNorm.includes("javascript") || msgNorm.includes("web"))) ||
      (item.skill === "Problem Solving" && (msgNorm.includes("dsa") || msgNorm.includes("algorithm") || msgNorm.includes("interview")))
  );

  const recommendedVideos = (
    mentionedSkills.length > 0
      ? mentionedSkills
      : intel.skillVideoLibrary.slice(0, 3)
  ).slice(0, 3);

  // Intent 1: Roadmap / New Beginning / Learn from scratch
  if (
    msgNorm.includes("roadmap") ||
    msgNorm.includes("start") ||
    msgNorm.includes("begin") ||
    msgNorm.includes("fresher") ||
    msgNorm.includes("learn") ||
    msgNorm.includes("path")
  ) {
    const targetTopic =
      mentionedSkills[0]?.skill ||
      (msgNorm.includes("web") || msgNorm.includes("fullstack") || msgNorm.includes("full stack")
        ? "Full-Stack Web Development"
        : msgNorm.includes("data")
        ? "Data Science & Analytics"
        : msgNorm.includes("cyber")
        ? "Cybersecurity"
        : msgNorm.includes("ui") || msgNorm.includes("ux") || msgNorm.includes("design")
        ? "UI/UX Design"
        : topCareer.title);

    const customRoadmapResult = generateCustomSkillRoadmap(targetTopic, profile);

    return {
      sender: "NEXORA AI",
      model: "NexoraAI-v3.0",
      intent: "ROADMAP_SYNTHESIS",
      reply: `### Your Personalized ${targetTopic} Roadmap (Fresher / New Beginning Edition)\n\nI analyzed your current profile (**Skills:** ${userSkills.join(", ")} | **Interests:** ${userInterests.join(", ")}) and structured a **4-Phase Action Plan** for **${targetTopic}**:\n\n1. **Phase 01 — Foundation & Core Concepts (Weeks 1–3):** Start with the fundamentals and build muscle memory through daily hands-on coding.\n2. **Phase 02 — Core Tools & Frameworks (Weeks 4–7):** Bridge your skill gaps (${topCareer.missingSkills.slice(0, 3).join(", ") || "Applied Frameworks"}) with guided video lectures.\n3. **Phase 03 — Real-World Capstone Project (Weeks 8–10):** Build an end-to-end project and push it to GitHub.\n4. **Phase 04 — Placement & Interview Readiness (Weeks 11–12):** Polish your resume, portfolio, and problem-solving speed.\n\n👇 **Direct YouTube Learning Pointers:** Click **"Watch in App"** on any video card below to start learning immediately without leaving NEXORA!`,
      recommendedVideos,
      generatedRoadmap: customRoadmapResult.roadmap,
      suggestedPrompts: [
        `What are my biggest skill gaps for ${topCareer.title}?`,
        "Give me 3 beginner project ideas for my resume",
        "Show me the best Python & AI YouTube tutorials",
        "How should a fresher prepare for technical interviews?"
      ]
    };
  }

  // Intent 2: Skill Gap Analysis
  if (msgNorm.includes("skill") || msgNorm.includes("gap") || msgNorm.includes("missing") || msgNorm.includes("strength")) {
    return {
      sender: "NEXORA AI",
      model: "NexoraAI-v3.0",
      intent: "SKILL_GAP_ANALYSIS",
      reply: `### NEXORA AI Skill Intelligence Report\n\nFor your top-matched role **${topCareer.title}** (**${topCareer.matchScore}% Match**):\n\n- **✅ Skills You Already Have (${topCareer.matchedSkills.length}):** ${topCareer.matchedSkills.join(", ") || "Ready to add your first skill!"}\n- **🎯 Priority Skills to Learn Next (${topCareer.missingSkills.length}):** ${topCareer.missingSkills.join(", ") || "Advanced System Design & Cloud Deployment"}\n- **📊 Current Career Readiness:** **${topCareer.readinessScore}%**\n\n**NEXORA AI Pointer:** Focus on **${topCareer.missingSkills[0] || recommendedVideos[0]?.skill || "Python"}** first—completing the tutorial below will boost your career readiness score by **+18%**!`,
      recommendedVideos,
      suggestedPrompts: [
        `Build a roadmap to learn ${topCareer.missingSkills[0] || "Python"}`,
        "Show me YouTube courses for my missing skills",
        "How do I showcase these skills on my fresher resume?"
      ]
    };
  }

  // Intent 3: Interview / Resume / First Job / Internship
  if (
    msgNorm.includes("interview") ||
    msgNorm.includes("job") ||
    msgNorm.includes("internship") ||
    msgNorm.includes("resume") ||
    msgNorm.includes("placement")
  ) {
    return {
      sender: "NEXORA AI",
      model: "NexoraAI-v3.0",
      intent: "CAREER_COACHING",
      reply: `### Fresher Placement & First-Job Blueprint for ${topCareer.title}\n\nHere is how you can stand out as a student or fresher applying for **${topCareer.title}** roles:\n\n1. **The 3-Project Rule:** Instead of listing 10 basic tutorials, feature **2–3 deployed projects** on your GitHub with live links, architecture diagrams, and clear problem statements.\n2. **Master the Core Tech Stack:** Recruiters screen for **${topCareer.requiredSkills.slice(0, 4).join(", ")}**. Make sure each of these appears in both your skills section and project bullet points.\n3. **Top 3 Fresher Interview Questions for ${topCareer.title}:**\n   - *"Walk me through the architecture of your most complex project and a bug you solved."*\n   - *"How do you optimize performance and handle edge cases in ${topCareer.requiredSkills[0] || "your code"}?"*\n   - *"Explain a core concept in ${topCareer.category} as if teaching a beginner."*\n\nWatch the curated interview & problem-solving pointers below directly inside NEXORA:`,
      recommendedVideos,
      suggestedPrompts: [
        `Generate a step-by-step roadmap for ${topCareer.title}`,
        "What project should I build this weekend?",
        "Show me DSA & Problem Solving YouTube lectures"
      ]
    };
  }

  // Default comprehensive AI Mentor response
  return {
    sender: "NEXORA AI",
    model: "NexoraAI-v3.0",
    intent: "CAREER_MENTOR",
    reply: `### NEXORA AI Career Intelligence — Personal Guidance\n\nHello! Based on your profile (**${intel.studentSummary.status}** interested in **${userInterests.slice(0, 2).join(" & ")}**), your highest-affinity career path is **${topCareer.title}** (**${topCareer.matchScore}% Match**).\n\nHere is what I recommend for your immediate next move:\n- **📍 Active Roadmap Pointer:** Start with **${topCareer.phases[0]?.modules[0]?.title}** (${topCareer.phases[0]?.modules[0]?.duration}).\n- **⚡ Next Skill to Unlock:** **${topCareer.missingSkills[0] || topCareer.requiredSkills[0]}** — essential for internships and fresher roles in ${topCareer.category}.\n- **🎬 Direct Video Learning:** I've attached top-rated YouTube courses below. Click **Watch in App** to stream them right here with your study notes!`,
    recommendedVideos,
    suggestedPrompts: [
      `Create a complete roadmap for ${topCareer.title}`,
      "Analyze my current skills and tell me what to learn next",
      "I am a complete beginner — where should I start?",
      "Recommend YouTube videos for Python and Web Development"
    ]
  };
}
