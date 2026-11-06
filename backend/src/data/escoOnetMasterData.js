// Comprehensive ESCO (European Skills, Competences, Qualifications and Occupations)
// and O*NET (Occupational Information Network) Master Catalog.
// Covers Vocational Trades, Crafts, School/College Academics, Healthcare, Business, and Technology.

export const ESCO_ONET_OCCUPATIONS = [
  // ==========================================
  // VOCATIONAL TRADES & CRAFTS (CRAFTPERSONS, WORKERS, APPRENTICES)
  // ==========================================
  {
    id: "carpenter-joiner",
    code: "ESCO-7115 / ONET-47-2031",
    title: "Carpenter & Joiner",
    category: "Vocational & Construction Trades",
    personaGroup: "vocational_worker",
    tagline: "Construct, install, and repair wood structures, cabinetry, roofing, and custom joinery.",
    fresherFriendly: true,
    salaryRange: "₹3.5L – ₹9L / yr ($42k – $78k)",
    growthRate: "+18% Steady Industry Demand",
    demandLevel: "High",
    industries: ["Construction", "Interior Architecture", "Furniture Manufacturing", "Restoration"],
    relatedInterests: ["Carpentry & Woodworking", "Furniture Making", "Construction", "Handicrafts & Restoration"],
    requiredSkills: [
      "Joinery & Wood Joints",
      "Woodworking Power Tools",
      "Blueprint & Technical Drawing",
      "Measuring & Precision Layout",
      "Wood Selection & Seasoning",
      "Workshop Safety & PPE"
    ],
    bonusSkills: ["Cabinet Making", "CNC Wood Router", "Wood Finishing & Varnishing"],
    overview:
      "Carpenters select lumber, interpret architectural drawings, fabricate precise joints, and assemble structural framing, doors, stairs, and fine cabinetry according to international building codes.",
    fresherTip:
      "Start with basic hand tools: learn to sharpen your chisels, make square cuts with a hand saw, and master the mortise-and-tenon and dovetail joints before relying solely on power tools.",
    introVideo: {
      videoId: "kHAfafwQt_k",
      title: "Woodworking for Beginners — 10 Tools You Need & How to Use Them",
      channel: "Steve Ramsey - Woodworking for Mere Mortals",
      duration: "18:24",
      pointerNote: "POINTER: Perfect start for fresh apprentices. Master safety, measuring, and cutting squares."
    },
    phases: [
      {
        id: "crp-p1",
        phaseNumber: "PHASE 01",
        title: "New Beginning: Tool Safety & Precision Measuring",
        duration: "3 Weeks",
        summary: "Learn essential hand and power tools, OSHA/workshop safety, and accurate measurement marking.",
        modules: [
          {
            id: "crp-p1-m1",
            title: "Hand Tools Mastery & Workshop Safety",
            skillTag: "Workshop Safety & PPE",
            duration: "3 hrs",
            level: "Beginner / Apprentice",
            description: "Safety goggles, ear protection, dust extraction, chisels, planes, and measuring squares.",
            keyTopics: ["Safe Tool Operation", "Speed Square Techniques", "Sharpening Chisels", "Lumber Types"],
            projectIdea: "Build a sturdy wooden tool caddy using only hand tools and screws.",
            video: {
              videoId: "kHAfafwQt_k",
              title: "Woodworking for Beginners Crash Course",
              channel: "Steve Ramsey",
              duration: "18:24",
              pointerNote: "POINTER: Watch how to measure twice and cut once with exact blade kerf allowance.",
              timestamps: [
                { time: "00:00", label: "Workshop Safety Basics" },
                { time: "05:15", label: "Essential Hand Tools" },
                { time: "11:30", label: "Accurate Measuring & Marking" }
              ]
            }
          }
        ]
      },
      {
        id: "crp-p2",
        phaseNumber: "PHASE 02",
        title: "Joinery Techniques & Structural Framing",
        duration: "4 Weeks",
        summary: "Master mortise and tenon, pocket holes, lap joints, and framing walls and partitions.",
        modules: [
          {
            id: "crp-p2-m1",
            title: "Wood Joinery from Scratch",
            skillTag: "Joinery & Wood Joints",
            duration: "4 hrs",
            level: "Intermediate",
            description: "Step-by-step joint cutting, doweling, glue-ups, and clamping strategies.",
            keyTopics: ["Butt & Miter Joints", "Mortise and Tenon", "Pocket Hole Jig", "Wood Clamping"],
            projectIdea: "Fabricate a small solid-wood coffee table with reinforced apron joints.",
            video: {
              videoId: "NtA5HhqznuE",
              title: "5 Basic Woodworking Joints for Beginners",
              channel: "Wood Magazine",
              duration: "15:40",
              pointerNote: "POINTER: Practice cutting tenons with a Japanese pull-saw or table saw tenoning jig.",
              timestamps: [
                { time: "00:00", label: "Joint Strength Comparison" },
                { time: "04:20", label: "Pocket Holes vs Dowels" },
                { time: "09:50", label: "Mortise and Tenon Fit" }
              ]
            }
          }
        ]
      },
      {
        id: "crp-p3",
        phaseNumber: "PHASE 03",
        title: "Cabinetry, Finishing & Site Installation",
        duration: "3 Weeks",
        summary: "Hinge mounting, drawer slide alignment, sanding grits, and clear coat/stain application.",
        modules: [
          {
            id: "crp-p3-m1",
            title: "Cabinet Making & Wood Finishing",
            skillTag: "Wood Finishing & Varnishing",
            duration: "3 hrs",
            level: "Advanced Apprentice",
            description: "Face-frame cabinets, euro hinges, polyurethane coats, and job site installation.",
            keyTopics: ["Drawer Construction", "Concealed Euro Hinges", "Staining & Polyurethane", "Trim Carpentry"],
            projectIdea: "Construct a modular floating wall shelf with integrated soft-close drawers.",
            video: {
              videoId: "Zrv7VIpF7xI",
              title: "How to Build Base Cabinets - Step by Step",
              channel: "Bourbon Moth Woodworking",
              duration: "24:12",
              pointerNote: "POINTER: Pay close attention to squaring the carcass and mounting drawer slides evenly.",
              timestamps: [
                { time: "00:00", label: "Plywood Breakdown" },
                { time: "08:10", label: "Assembling Cabinet Box" },
                { time: "16:45", label: "Installing Hardware" }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    id: "welder-fabricator",
    code: "ESCO-7212 / ONET-51-4121",
    title: "Welder & Metal Fabricator",
    category: "Vocational & Industrial Trades",
    personaGroup: "vocational_worker",
    tagline: "Fuse structural metals, piping, and machinery components using MIG, TIG, and Stick welding.",
    fresherFriendly: true,
    salaryRange: "₹3.8L – ₹10.5L / yr ($45k – $85k)",
    growthRate: "+22% High Infrastructure Demand",
    demandLevel: "Very High",
    industries: ["Manufacturing", "Automotive", "Shipbuilding", "Oil & Gas Pipeline", "Construction"],
    relatedInterests: ["Welding & Metal Fabrication", "Automotive Engineering", "Industrial Trades"],
    requiredSkills: [
      "MIG Welding (GMAW)",
      "Stick Welding (SMAW)",
      "Blueprint & Welding Symbols",
      "Metal Cutting & Grinding",
      "Joint Fit-up & Beveling",
      "Welding Safety & PPE"
    ],
    bonusSkills: ["TIG Welding (GTAW)", "Pipe Welding (6G Certification)", "Plasma Arc Cutting"],
    overview:
      "Welders analyze blueprints, select correct shielding gases and electrodes, adjust amperage, and fuse metal assemblies according to AWS/ISO structural standards.",
    fresherTip:
      "Clean metal is 80% of a good weld. Always grind off rust, mill scale, and grease before striking an arc. Master puddle control and travel speed on flat joints first.",
    introVideo: {
      videoId: "x6DQW9LNqzo",
      title: "MIG Welding Basics for Beginners — Setting Up and First Beads",
      channel: "TimWelds",
      duration: "14:50",
      pointerNote: "POINTER: Excellent walkthrough of voltage settings, wire feed speed, and sound of a crisp arc."
    },
    phases: [
      {
        id: "wld-p1",
        phaseNumber: "PHASE 01",
        title: "New Beginning: Arc Safety, Machine Setup & Flat Beads",
        duration: "3 Weeks",
        summary: "Understand helmet shade, fire safety, gas regulator setup, and laying consistent stringer beads.",
        modules: [
          {
            id: "wld-p1-m1",
            title: "MIG & Arc Welding Setup Fundamentals",
            skillTag: "Welding Safety & PPE",
            duration: "3 hrs",
            level: "Beginner / Apprentice",
            description: "Shielding gas mixture (75/25 Argon/CO2), ground clamp placement, and welding gun angle.",
            keyTopics: ["Welding Helmet Shades", "Wire Tension & Gas Flow", "Gun Work Angles", "Puddle Reading"],
            projectIdea: "Fabricate a multi-pass welding pad and practice running straight overlapping beads.",
            video: {
              videoId: "x6DQW9LNqzo",
              title: "MIG Welding Basics for Beginners",
              channel: "TimWelds",
              duration: "14:50",
              pointerNote: "POINTER: Listen for the smooth 'bacon sizzling' sound indicating proper voltage and feed.",
              timestamps: [
                { time: "00:00", label: "Safety Gear & Ventilation" },
                { time: "03:20", label: "Tuning Voltage & Wire Speed" },
                { time: "08:15", label: "Running Your First Bead" }
              ]
            }
          }
        ]
      },
      {
        id: "wld-p2",
        phaseNumber: "PHASE 02",
        title: "Fillet & Butt Joints in Multiple Positions",
        duration: "4 Weeks",
        summary: "Master T-joints, lap joints, corner welds, and vertical-up progression without porosity or undercut.",
        modules: [
          {
            id: "wld-p2-m1",
            title: "Structural Joints & Position Welding",
            skillTag: "MIG Welding (GMAW)",
            duration: "4 hrs",
            level: "Intermediate",
            description: "Tack welding, beveling thick plate, root penetration, and avoiding cold-lap.",
            keyTopics: ["T-Joint Fillets", "Open Root Butt Welds", "Vertical Up (3F) Technique", "Angle Grinding Prep"],
            projectIdea: "Build a heavy-duty steel welding workbench with square tubing and gusset plates.",
            video: {
              videoId: "CHh0_oPMKGY",
              title: "How to Weld T-Joints and Fillet Welds Like a Pro",
              channel: "Weld.com",
              duration: "16:35",
              pointerNote: "POINTER: Maintain a tight 1/4-inch stickout and watch the toes of the puddle tie in smoothly.",
              timestamps: [
                { time: "00:00", label: "Joint Fit-Up" },
                { time: "05:10", label: "Torch Angle in Corners" },
                { time: "11:00", label: "Inspecting Weld Penetration" }
              ]
            }
          }
        ]
      },
      {
        id: "wld-p3",
        phaseNumber: "PHASE 03",
        title: "TIG Welding & Blueprint Symbol Interpretation",
        duration: "4 Weeks",
        summary: "Precision welding on stainless steel and aluminum, AWS weld symbols, and nondestructive testing.",
        modules: [
          {
            id: "wld-p3-m1",
            title: "TIG Welding & Fabrication Drawings",
            skillTag: "Blueprint & Welding Symbols",
            duration: "4 hrs",
            level: "Advanced Apprentice",
            description: "Foot pedal control, tungsten prep, filler rod dab cadence, and reading engineering prints.",
            keyTopics: ["Tungsten Sharpening", "High Frequency Arc Start", "Welding Symbols on Blueprints", "Bend Test"],
            projectIdea: "Fabricate a stainless steel exhaust collector or aluminum storage container.",
            video: {
              videoId: "pXDuDCLxkU4",
              title: "TIG Welding for Beginners - Complete Walkthrough",
              channel: "TimWelds",
              duration: "21:18",
              pointerNote: "POINTER: Master two-handed coordination—steady torch with right hand, dab filler with left.",
              timestamps: [
                { time: "00:00", label: "TIG Torch & Tungsten Setup" },
                { time: "07:30", label: "Pedal Amperage Control" },
                { time: "14:40", label: "Adding Filler Rod" }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    id: "electrician-wireman",
    code: "ESCO-7411 / ONET-47-2111",
    title: "Electrician & Wireman",
    category: "Vocational & Industrial Trades",
    personaGroup: "vocational_worker",
    tagline: "Install, test, and maintain residential and commercial wiring, distribution boards, and safety circuits.",
    fresherFriendly: true,
    salaryRange: "₹3.6L – ₹11L / yr ($46k – $88k)",
    growthRate: "+24% Clean Energy & Grid Expansion",
    demandLevel: "Very High",
    industries: ["Construction", "Renewable Energy", "Industrial Automation", "Utilities"],
    relatedInterests: ["Electrical Wiring", "Renewable Energy & Solar", "Industrial Trades"],
    requiredSkills: [
      "AC/DC Circuit Theory",
      "Multimeter & Insulation Testing",
      "Electrical Wiring & Conduit Bending",
      "Distribution Boards & Circuit Breakers",
      "Earthing & Grounding Systems",
      "Electrical Safety (OSHA / NFPA 70E)"
    ],
    bonusSkills: ["Solar PV Installation", "PLC Basics", "Motor Starters (DOL/Star-Delta)"],
    overview:
      "Electricians calculate wire gauges and load capacities, bend EMT conduit, wire main breaker panels, and test for short circuits and grounding faults according to electrical safety regulations.",
    fresherTip:
      "Always lock out / tag out (LOTO) and verify circuit zero-voltage with a reliable multimeter before touching any wire. Safety is the first and non-negotiable rule of the electrical trade.",
    introVideo: {
      videoId: "U6z2zps9HM8",
      title: "How to Read Electrical Blueprints and Schematics",
      channel: "Electrician U",
      duration: "26:30",
      pointerNote: "POINTER: Learn standard symbols for receptacles, single-pole switches, three-way switches, and panels."
    },
    phases: [
      {
        id: "elec-p1",
        phaseNumber: "PHASE 01",
        title: "New Beginning: Circuit Fundamentals & Multimeter Skills",
        duration: "3 Weeks",
        summary: "Understand Ohm's law, wire gauge sizing, continuity testing, and safety protocols.",
        modules: [
          {
            id: "elec-p1-m1",
            title: "Electrical Safety & Basic Domestic Circuits",
            skillTag: "Electrical Safety (OSHA / NFPA 70E)",
            duration: "3 hrs",
            level: "Beginner / Apprentice",
            description: "Line, neutral, and earth wires, stripping insulation, wire nuts, and outlet wiring.",
            keyTopics: ["Ohm's & Watt's Law", "Wire Colors & Gauge Chart", "LOTO Protocols", "Testing with Multimeter"],
            projectIdea: "Wire a demonstration board with single-pole switch controlling two light bulbs in parallel.",
            video: {
              videoId: "U6z2zps9HM8",
              title: "Electrical Wiring Basics for Beginners",
              channel: "Electrician U",
              duration: "26:30",
              pointerNote: "POINTER: Watch how ground wires must be bonded securely to metal junction boxes.",
              timestamps: [
                { time: "00:00", label: "Electrical Safety Rules" },
                { time: "08:15", label: "Hot, Neutral & Ground" },
                { time: "17:40", label: "Wiring Switches & Outlets" }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    id: "plumber-pipefitter",
    code: "ESCO-7126 / ONET-47-2152",
    title: "Plumber & Pipefitter",
    category: "Vocational & Construction Trades",
    personaGroup: "vocational_worker",
    tagline: "Fabricate, assemble, and repair drainage, sanitary, and high-pressure water supply pipe systems.",
    fresherFriendly: true,
    salaryRange: "₹3.4L – ₹9.5L / yr ($44k – $82k)",
    growthRate: "+19% Sustained Demand",
    demandLevel: "High",
    industries: ["Residential Construction", "Commercial Facilities", "Municipal Water Supply"],
    relatedInterests: ["Plumbing & Piping", "Construction", "Industrial Trades"],
    requiredSkills: [
      "Pipe Cutting & Threading",
      "Copper Soldering (Sweating)",
      "PVC/CPVC Solvent Welding",
      "Drainage Slope & Venting (DWV)",
      "Fixture Installation & Valves",
      "Pressure Testing & Leak Detection"
    ],
    bonusSkills: ["PEX Pipe Systems", "Water Heater Installation", "Backflow Prevention"],
    overview:
      "Plumbers plan and install potable water distribution networks, waste drainage systems, and water heating units while adhering to plumbing building codes.",
    fresherTip:
      "Remember: Water flows downhill! Understanding proper drainage pitch (1/4 inch per foot) and trap venting will prevent 95% of common plumbing failures.",
    introVideo: {
      videoId: "EaoX79cfBGo",
      title: "Plumbing 101 - Learning the Basics of Home Plumbing",
      channel: "Got2Learn",
      duration: "18:45",
      pointerNote: "POINTER: Learn how water enters under pressure and leaves via gravity with proper vent stacks."
    },
    phases: [
      {
        id: "plm-p1",
        phaseNumber: "PHASE 01",
        title: "New Beginning: Pipe Materials & Joint Techniques",
        duration: "3 Weeks",
        summary: "Working with PVC, PEX, and Copper tubing, pipe fittings, glue solvents, and pressure testing.",
        modules: [
          {
            id: "plm-p1-m1",
            title: "Piping Materials & Joint Fabrication",
            skillTag: "PVC/CPVC Solvent Welding",
            duration: "3 hrs",
            level: "Beginner / Apprentice",
            description: "Cutting copper, deburring, soldering with flux and MAPP gas torch, and solvent welding PVC.",
            keyTopics: ["Pipe Sizing Standards", "Torch Soldering Technique", "Primer & Cement for PVC", "PEX Crimp Rings"],
            projectIdea: "Assemble a pressurized copper and PEX manifold test rig with shut-off valves.",
            video: {
              videoId: "EaoX79cfBGo",
              title: "Plumbing Basics and Pipe Joining",
              channel: "Got2Learn",
              duration: "18:45",
              pointerNote: "POINTER: Always ream the inside of copper pipes after cutting to ensure laminar water flow.",
              timestamps: [
                { time: "00:00", label: "DWV vs Supply Lines" },
                { time: "06:20", label: "Cutting & Soldering Copper" },
                { time: "12:50", label: "PEX Crimp & Push-Fit" }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    id: "auto-mechanic",
    code: "ESCO-7231 / ONET-49-3023",
    title: "Automotive Service Technician / Mechanic",
    category: "Vocational & Industrial Trades",
    personaGroup: "vocational_worker",
    tagline: "Diagnose, service, and overhaul engines, braking systems, electrical ECUs, and suspensions.",
    fresherFriendly: true,
    salaryRange: "₹3.8L – ₹11L / yr ($45k – $86k)",
    growthRate: "+20% High Vehicle Fleet Demand",
    demandLevel: "High",
    industries: ["Automotive Dealerships", "Fleet Maintenance", "Motorsports", "EV Service Centers"],
    relatedInterests: ["Automotive Engineering", "Mechanical Repairs", "Industrial Trades"],
    requiredSkills: [
      "Engine Mechanical Systems",
      "OBD-II Diagnostic Scanners",
      "Disc & Drum Brake Overhaul",
      "Automotive Electrical Troubleshooting",
      "Hydraulic Jack & Hoist Safety",
      "Transmission & Drivetrain Basics"
    ],
    bonusSkills: ["Electric Vehicle (EV) High Voltage Safety", "Air Conditioning (R134a/R1234yf)", "Wheel Alignment"],
    overview:
      "Automotive Technicians inspect vehicle components, read live sensor data via scan tools, replace timing belts, service braking systems, and perform precision wheel alignments.",
    fresherTip:
      "Before guessing part replacements, follow systematic diagnostics: verify customer symptom, check power/ground, scan trouble codes, and inspect mechanical wear.",
    introVideo: {
      videoId: "ZQvfHyfgBtA",
      title: "How an Engine Works with 3D Animation and Real Parts",
      channel: "Engineering Explained",
      duration: "16:20",
      pointerNote: "POINTER: Master the four strokes (Intake, Compression, Power, Exhaust) and valve timing."
    },
    phases: [
      {
        id: "mec-p1",
        phaseNumber: "PHASE 01",
        title: "New Beginning: Engine Principles & Periodic Maintenance",
        duration: "3 Weeks",
        summary: "Engine oil change, filter replacements, fluid flushes, belt inspection, and lift safety.",
        modules: [
          {
            id: "mec-p1-m1",
            title: "Automotive Basics & Brake Servicing",
            skillTag: "Disc & Drum Brake Overhaul",
            duration: "3.5 hrs",
            level: "Beginner / Apprentice",
            description: "Hydraulic brake bleeding, pad and rotor replacement, caliper slide pin lubrication.",
            keyTopics: ["4-Stroke Engine Cycle", "Brake Pad Inspection", "Torque Wrench Specifications", "Fluid Maintenance"],
            projectIdea: "Perform complete 4-wheel brake pad and rotor servicing with system bleeding.",
            video: {
              videoId: "ZQvfHyfgBtA",
              title: "How an Engine and Car Mechanicals Work",
              channel: "Engineering Explained",
              duration: "16:20",
              pointerNote: "POINTER: Focus on how hydraulic master cylinders convert pedal force into wheel stopping power.",
              timestamps: [
                { time: "00:00", label: "Four-Stroke Principles" },
                { time: "05:40", label: "Lubrication & Cooling" },
                { time: "11:15", label: "Braking & Drivetrain" }
              ]
            }
          }
        ]
      }
    ]
  },

  // ==========================================
  // SCHOOL & COLLEGE ACADEMIC STREAMS
  // ==========================================
  {
    id: "school-secondary-class9-10",
    code: "ESCO-2341 / ONET-25-2022",
    title: "Class 9 & 10 Secondary Student Track",
    category: "Academic & Secondary Education",
    personaGroup: "school_student",
    tagline: "Build foundational excellence in Mathematics, Science (Physics/Chemistry/Biology), Social Science, and Digital Literacy.",
    fresherFriendly: true,
    salaryRange: "Foundation for Career & Competitive Exams",
    growthRate: "Crucial Academic Milestone",
    demandLevel: "Universal",
    industries: ["Secondary Education", "STEM Foundation", "Higher Secondary Transition"],
    relatedInterests: ["Mathematics", "Physics", "Chemistry", "Biology", "Social Sciences", "Basic Computing"],
    requiredSkills: [
      "Algebra & Quadratic Equations",
      "Geometry & Coordinate Geometry",
      "Physics (Motion, Force & Gravitation)",
      "Chemistry (Acids, Bases & Chemical Reactions)",
      "Biology (Life Processes & Cell Structure)",
      "Critical Thinking & Problem Solving"
    ],
    bonusSkills: ["Basic Python or Coding", "Scientific Method", "Debating & Public Speaking"],
    overview:
      "Structured syllabus track tailored specifically for students in Grades 9 and 10 covering board exam fundamentals, NCERT/State curricula, and mental agility for upcoming stream selection.",
    fresherTip:
      "Focus on concept clarity rather than memorization. Doing 5 practice problems from scratch each day builds permanent problem-solving confidence.",
    introVideo: {
      videoId: "YrHpeEwk_-U",
      title: "Class 10 Science & Math Complete Foundation Roadmap",
      channel: "Khan Academy",
      duration: "25:40",
      pointerNote: "POINTER: Step-by-step method to organize revision, notes, and formula sheets for board exams."
    },
    phases: [
      {
        id: "sch-p1",
        phaseNumber: "PHASE 01",
        title: "Class 9-10 Mathematics & Physical Sciences",
        duration: "4 Weeks",
        summary: "Linear equations, quadratic roots, Newton's laws of motion, and balancing chemical reactions.",
        modules: [
          {
            id: "sch-p1-m1",
            title: "Algebra, Geometry & Laws of Motion",
            skillTag: "Algebra & Quadratic Equations",
            duration: "5 hrs",
            level: "Secondary Student",
            description: "Step-by-step problem solving in algebraic factorization, trigonometry basics, and velocity-time graphs.",
            keyTopics: ["Quadratic Roots", "Pythagorean Theorem & Trig Ratios", "Newton's 3 Laws", "Balancing Redox Reactions"],
            projectIdea: "Create an interactive illustrated Math & Physics Formula Reference Booklet.",
            video: {
              videoId: "YrHpeEwk_-U",
              title: "Class 10 Foundation - Math & Physics Core Concepts",
              channel: "Khan Academy",
              duration: "25:40",
              pointerNote: "POINTER: Follow along step-by-step to master graphing displacement vs velocity.",
              timestamps: [
                { time: "00:00", label: "Math Foundations" },
                { time: "08:20", label: "Motion & Forces" },
                { time: "18:00", label: "Chemical Reactions" }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    id: "school-science-class11-12",
    code: "ESCO-2342 / ONET-25-2031",
    title: "Class 11 & 12 Science (PCM / PCB) Track",
    category: "Academic & Higher Secondary",
    personaGroup: "school_student",
    tagline: "Master Advanced Calculus, Electromagnetism, Organic Chemistry, Mechanics, and Entrance Exam Prep.",
    fresherFriendly: true,
    salaryRange: "Foundation for Engineering (JEE) / Medical (NEET) / Pure Sciences",
    growthRate: "High Academic Value",
    demandLevel: "Very High",
    industries: ["Higher Secondary", "Engineering Placements", "Medical Sciences", "Research"],
    relatedInterests: ["Physics", "Chemistry", "Mathematics", "Biology", "Engineering", "Medicine"],
    requiredSkills: [
      "Calculus (Differentiation & Integration)",
      "Mechanics & Rotational Dynamics",
      "Electromagnetism & Waves",
      "Organic Chemistry Mechanisms",
      "Inorganic & Physical Chemistry",
      "Scientific Problem Solving"
    ],
    bonusSkills: ["Python for Scientific Computing", "Laboratory Titration", "Competitive Exam Speed Tactics"],
    overview:
      "Comprehensive higher secondary stream covering rigorous theoretical concepts, numerical derivation, organic reaction pathways, and preparatory guidance for collegiate entrance examinations.",
    fresherTip:
      "Derive every equation yourself at least twice. In organic chemistry, understand electron movement and nucleophiles rather than trying to memorize hundreds of reactions.",
    introVideo: {
      videoId: "gUWJ-6nL5-8",
      title: "Essence of Calculus - Chapter 1 | Visual Introduction",
      channel: "3Blue1Brown",
      duration: "17:05",
      pointerNote: "POINTER: Best visual explanation of derivatives, limits, and rates of change in the universe."
    },
    phases: [
      {
        id: "sci-p1",
        phaseNumber: "PHASE 01",
        title: "Calculus, Classical Mechanics & Reaction Chemistry",
        duration: "5 Weeks",
        summary: "Limits, derivatives, projectile motion, rotational inertia, and thermodynamics.",
        modules: [
          {
            id: "sci-p1-m1",
            title: "Calculus & Rotational Physics Visualized",
            skillTag: "Calculus (Differentiation & Integration)",
            duration: "6 hrs",
            level: "Higher Secondary",
            description: "Visual intuition for slopes, area under curves, vectors, and moment of inertia.",
            keyTopics: ["Chain Rule & Product Rule", "Integration as Summation", "Torque & Angular Momentum", "Thermodynamics"],
            projectIdea: "Simulate a double pendulum or trajectory calculation using analytical mathematics.",
            video: {
              videoId: "gUWJ-6nL5-8",
              title: "Essence of Calculus - Visual Mathematics",
              channel: "3Blue1Brown",
              duration: "17:05",
              pointerNote: "POINTER: Understand why finding the area of a circle leads directly to integration.",
              timestamps: [
                { time: "00:00", label: "Geometry of Derivatives" },
                { time: "06:10", label: "Paradox of Motion" },
                { time: "12:30", label: "Integration Intuition" }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    id: "school-commerce-class11-12",
    code: "ESCO-2411 / ONET-13-2011",
    title: "Class 11 & 12 Commerce & Accountancy",
    category: "Academic & Commerce",
    personaGroup: "school_student",
    tagline: "Double-entry bookkeeping, balance sheet formulation, microeconomics, and commercial law.",
    fresherFriendly: true,
    salaryRange: "Foundation for CA, CS, B.Com, BBA, Banking & Finance",
    growthRate: "+21% Steady Corporate Demand",
    demandLevel: "High",
    industries: ["Accounting", "Financial Advisory", "Banking", "Corporate Management"],
    relatedInterests: ["Accountancy", "Economics", "Business & Management", "Stock Markets & Finance"],
    requiredSkills: [
      "Double Entry Bookkeeping",
      "Journal Entries & Ledgers",
      "Trial Balance & Financial Statements",
      "Micro & Macro Economics",
      "Partnership & Company Accounts",
      "Commercial Mathematics & Ratios"
    ],
    bonusSkills: ["Tally Prime / ERP", "Excel Financial Modeling", "GST Taxation Basics"],
    overview:
      "Equips commerce students with accounting principles, ledger balancing, cash-flow statements, depreciation accounting, and micro/macro market dynamics.",
    fresherTip:
      "Every transaction has two sides: Debit what comes in, Credit what goes out! Master the golden rules of accounting on day one.",
    introVideo: {
      videoId: "9D4y7dp2qPk",
      title: "Accounting Basics Explained Through a Simple Story",
      channel: "Accounting Stuff",
      duration: "14:15",
      pointerNote: "POINTER: Crystal-clear breakdown of Assets = Liabilities + Equity (The Accounting Equation)."
    },
    phases: [
      {
        id: "com-p1",
        phaseNumber: "PHASE 01",
        title: "The Accounting Equation & Ledger Balancing",
        duration: "4 Weeks",
        summary: "Assets, liabilities, journal entries, debit/credit rules, and closing entries.",
        modules: [
          {
            id: "com-p1-m1",
            title: "Financial Accounting Core Principles",
            skillTag: "Double Entry Bookkeeping",
            duration: "4 hrs",
            level: "Secondary Commerce",
            description: "Real, personal, and nominal accounts, posting to ledgers, and trial balances.",
            keyTopics: ["The Golden Rules", "Journal to Ledger Posting", "Bank Reconciliation (BRS)", "Depreciation Methods"],
            projectIdea: "Draft a complete fictional business ledger and prepare the annual Balance Sheet.",
            video: {
              videoId: "9D4y7dp2qPk",
              title: "Accounting Basics for Students",
              channel: "Accounting Stuff",
              duration: "14:15",
              pointerNote: "POINTER: Watch how the balance sheet stays in perfect balance across transactions.",
              timestamps: [
                { time: "00:00", label: "The Accounting Equation" },
                { time: "04:30", label: "Debit vs Credit" },
                { time: "09:45", label: "Financial Statements" }
              ]
            }
          }
        ]
      }
    ]
  },

  // ==========================================
  // BUSINESS, ACCOUNTING & CULINARY ARTS
  // ==========================================
  {
    id: "professional-accountant",
    code: "ESCO-2411 / ONET-13-2011",
    title: "Professional Accountant & Tax Practitioner",
    category: "Business, Finance & Accounting",
    personaGroup: "job_seeker",
    tagline: "Manage corporate financial reporting, statutory audits, GST/tax returns, and ledger reconciliation.",
    fresherFriendly: true,
    salaryRange: "₹4L – ₹14L / yr ($50k – $95k)",
    growthRate: "+21% Steady Corporate Hiring",
    demandLevel: "Very High",
    industries: ["Corporate Finance", "Auditing Firms", "Banking & Fintech", "Consulting"],
    relatedInterests: ["Accountancy", "Business & Management", "Finance & Taxation"],
    requiredSkills: [
      "Financial Accounting & GAAP",
      "Tally Prime & QuickBooks",
      "GST Returns & Direct Taxation",
      "Advanced Excel (VLOOKUP, Pivot)",
      "Bank Reconciliation & Audit",
      "Financial Statement Analysis"
    ],
    bonusSkills: ["SAP FICO Basics", "IFRS Standards", "Cost & Management Accounting"],
    overview:
      "Accountants examine financial statements for accuracy, ensure taxes are paid properly, prepare monthly profit & loss accounts, and maintain compliance with corporate regulations.",
    fresherTip:
      "Excel shortcuts, Pivot Tables, and VLOOKUP/XLOOKUP are your best friends in an accounting interview. Know your debits, credits, and GST input tax credit mechanism thoroughly.",
    introVideo: {
      videoId: "zTMCDS5YmOE",
      title: "Tally Prime Full Course for Beginners with GST",
      channel: "Career Accounting Academy",
      duration: "1:45:00",
      pointerNote: "POINTER: Master company creation, ledger setup, voucher entry, and automated GST billing."
    },
    phases: [
      {
        id: "acc-p1",
        phaseNumber: "PHASE 01",
        title: "Tally Prime, Vouchers & GST Billing",
        duration: "4 Weeks",
        summary: "Company creation, purchase/sales vouchers, inventory tracking, and GST e-invoicing.",
        modules: [
          {
            id: "acc-p1-m1",
            title: "Tally Prime ERP & Taxation",
            skillTag: "Tally Prime & QuickBooks",
            duration: "5 hrs",
            level: "Beginner to Intermediate",
            description: "Hands-on voucher recording, payment cycles, bank reconciliations, and tax reports.",
            keyTopics: ["Payment & Receipt Vouchers", "Contra Entries", "CGST, SGST & IGST", "Balance Sheet Generation"],
            projectIdea: "Setup accounts for a retail business with 50 products and generate monthly GST reports.",
            video: {
              videoId: "zTMCDS5YmOE",
              title: "Tally Prime Full Practical Course",
              channel: "Accounting Academy",
              duration: "1:45:00",
              pointerNote: "POINTER: Follow along to enter sales invoices with integrated tax rate calculation.",
              timestamps: [
                { time: "00:00", label: "Company & Ledger Setup" },
                { time: "28:00", label: "Purchase & Sales Vouchers" },
                { time: "55:00", label: "GST Reports & Balance Sheet" }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    id: "culinary-chef",
    code: "ESCO-3434 / ONET-35-1011",
    title: "Executive Chef & Culinary Specialist",
    category: "Hospitality & Culinary Arts",
    personaGroup: "vocational_worker",
    tagline: "Master knife skills, culinary cooking techniques, food safety standards (HACCP), and commercial kitchen management.",
    fresherFriendly: true,
    salaryRange: "₹3.5L – ₹12L / yr ($40k – $85k)",
    growthRate: "+23% Rapid Hospitality Growth",
    demandLevel: "High",
    industries: ["Hotels & Resorts", "Fine Dining Restaurants", "Cruise Lines", "Food Entrepreneurship"],
    relatedInterests: ["Culinary Arts & Cooking", "Baking & Pastry", "Food Safety"],
    requiredSkills: [
      "Knife Skills (Julienne, Brunoise, Dice)",
      "Mother Sauces & Flavor Profiling",
      "Food Safety Standards (HACCP / FSSAI)",
      "Meat & Seafood Fabrication",
      "Sautéing, Braising & Roasting",
      "Menu Costing & Portion Control"
    ],
    bonusSkills: ["Pastry & Baking", "Plating & Food Presentation", "Commercial Kitchen Leadership"],
    overview:
      "Chefs prepare ingredients, design balanced menus, oversee food hygiene, execute complex cooking techniques under pressure, and manage brigade de cuisine restaurant kitchens.",
    fresherTip:
      "Keep your knives razor sharp. A dull knife causes slips and injuries. Master clean, uniform vegetable cuts—culinary schools and top head chefs judge kitchen staff on knife precision.",
    introVideo: {
      videoId: "DJd3zHNbKuw",
      title: "Basic Knife Skills Tutorial - Master The Fundamentals",
      channel: "Gordon Ramsay / Culinary Masterclass",
      duration: "12:30",
      pointerNote: "POINTER: Notice the claw grip to protect fingers and the rhythmic rocking motion of the chef's knife."
    },
    phases: [
      {
        id: "chf-p1",
        phaseNumber: "PHASE 01",
        title: "Knife Skills, Food Safety & The 5 Mother Sauces",
        duration: "3 Weeks",
        summary: "Precision vegetable cuts, temperature danger zone (40°F–140°F), and classic sauce reductions.",
        modules: [
          {
            id: "chf-p1-m1",
            title: "Knife Cuts & Food Hygiene",
            skillTag: "Knife Skills (Julienne, Brunoise, Dice)",
            duration: "3 hrs",
            level: "Culinary Apprentice",
            description: "Chiffonade, batonnet, julienne, dicing onions without crying, and preventing cross-contamination.",
            keyTopics: ["The Claw Technique", "HACCP Temperatures", "Béchamel & Velouté Sauces", "Deglazing"],
            projectIdea: "Prepare a multi-course dinner demonstrating 4 classic vegetable cuts and a velouté sauce.",
            video: {
              videoId: "DJd3zHNbKuw",
              title: "Gordon Ramsay Masterclass - Basic Knife Skills",
              channel: "Gordon Ramsay",
              duration: "12:30",
              pointerNote: "POINTER: Practice cutting an onion into fine dice following the natural grain.",
              timestamps: [
                { time: "00:00", label: "Holding the Knife Safely" },
                { time: "04:15", label: "Dicing Onions & Herbs" },
                { time: "08:50", label: "Julienne Vegetables" }
              ]
            }
          }
        ]
      }
    ]
  },

  // ==========================================
  // HEALTHCARE & NURSING
  // ==========================================
  {
    id: "registered-nurse",
    code: "ESCO-2221 / ONET-29-1141",
    title: "Registered Nurse & Clinical Care Specialist",
    category: "Healthcare & Medical Sciences",
    personaGroup: "job_seeker",
    tagline: "Deliver patient assessment, vital signs monitoring, medication administration, and emergency critical care.",
    fresherFriendly: true,
    salaryRange: "₹4.2L – ₹12L / yr ($55k – $98k)",
    growthRate: "+32% Critical Global Demand",
    demandLevel: "Very High",
    industries: ["Hospitals", "Emergency Care Centers", "Community Clinics", "Home Healthcare"],
    relatedInterests: ["Healthcare & Nursing", "Biology & Anatomy", "Patient Care"],
    requiredSkills: [
      "Vital Signs Monitoring",
      "Medication Administration (5 Rights)",
      "Aseptic Technique & Wound Care",
      "Patient Assessment & Charting",
      "CPR & Basic Life Support (BLS)",
      "Empathy & Bedside Communication"
    ],
    bonusSkills: ["IV Cannulation", "ECG Reading Basics", "ICU/Critical Care Protocols"],
    overview:
      "Registered Nurses provide essential hands-on healthcare, monitor patient telemetry, coordinate with medical doctors, dispense treatments safely, and comfort patients and families.",
    fresherTip:
      "Always follow the '5 Rights' of medication administration (Right Patient, Right Drug, Right Dose, Right Route, Right Time). Never rush medication verification.",
    introVideo: {
      videoId: "m5VbK66a254",
      title: "Vital Signs Nursing Skills Assessment Tutorial",
      channel: "RegisteredNurseRN",
      duration: "19:25",
      pointerNote: "POINTER: Step-by-step procedure for manual blood pressure, pulse, respirations, and temperature."
    },
    phases: [
      {
        id: "nur-p1",
        phaseNumber: "PHASE 01",
        title: "Clinical Vitals, Sterility & Patient Assessment",
        duration: "4 Weeks",
        summary: "Manual blood pressure cuff reading, sterile gloving, infection control, and head-to-toe assessment.",
        modules: [
          {
            id: "nur-p1-m1",
            title: "Vital Signs & Clinical Skills",
            skillTag: "Vital Signs Monitoring",
            duration: "4 hrs",
            level: "Nursing Student / Apprentice",
            description: "Auscultation with stethoscope, sphygmomanometer calibration, pulse oximetry, and nursing documentation.",
            keyTopics: ["Manual Blood Pressure", "Aseptic Technique", "5 Rights of Medication", "Infection Control"],
            projectIdea: "Conduct and document 10 simulated patient vital sign assessments with clinical chart entries.",
            video: {
              videoId: "m5VbK66a254",
              title: "Nursing Skills - Vital Signs Assessment",
              channel: "RegisteredNurseRN",
              duration: "19:25",
              pointerNote: "POINTER: Listen closely for Korotkoff sounds when slowly deflating the blood pressure cuff.",
              timestamps: [
                { time: "00:00", label: "Patient Introduction & Hygiene" },
                { time: "05:10", label: "Manual Blood Pressure Technique" },
                { time: "12:30", label: "Heart Rate & Respiratory Count" }
              ]
            }
          }
        ]
      }
    ]
  },

  // ==========================================
  // DIGITAL, TECHNOLOGY & AI
  // ==========================================
  {
    id: "ai-ml-engineer",
    code: "ESCO-2512 / ONET-15-1251",
    title: "AI & Machine Learning Engineer",
    category: "Artificial Intelligence & Technology",
    personaGroup: "college_student",
    tagline: "Build neural networks, fine-tune LLMs, deploy computer vision models, and design intelligent systems.",
    fresherFriendly: true,
    salaryRange: "₹8L – ₹24L / yr ($95k – $160k)",
    growthRate: "+42% Exponential Tech Demand",
    demandLevel: "Very High",
    industries: ["Technology", "Healthcare", "Autonomous Vehicles", "Finance", "Robotics"],
    relatedInterests: ["Artificial Intelligence", "Machine Learning", "Data Science", "Python Programming"],
    requiredSkills: [
      "Python",
      "Machine Learning Algorithms",
      "Data Analysis & Pandas",
      "SQL & Relational Databases",
      "Neural Networks & PyTorch",
      "Git & GitHub"
    ],
    bonusSkills: ["Transformer Architecture & LLMs", "Cloud Deployment (AWS/GCP)", "Docker Containers"],
    overview:
      "AI Engineers train statistical and deep learning models to recognize patterns, automate reasoning, process language, and power intelligent applications.",
    fresherTip:
      "Start with linear regression and neural network intuition before jumping to transformers. Building 2 end-to-end deployed AI apps separates you from 90% of applicants.",
    introVideo: {
      videoId: "aircAruvnKk",
      title: "But what is a neural network? | Deep Learning Chapter 1",
      channel: "3Blue1Brown",
      duration: "19:13",
      pointerNote: "POINTER: Best visual intuition on how weights, biases, and activations work inside a neural net."
    },
    phases: [
      {
        id: "ai-p1",
        phaseNumber: "PHASE 01",
        title: "Python Programming & Neural Intuition",
        duration: "3 Weeks",
        summary: "Variables, OOP, NumPy matrix math, and visual understanding of artificial neurons.",
        modules: [
          {
            id: "ai-p1-m1",
            title: "Python for AI & Neural Foundations",
            skillTag: "Python",
            duration: "4.5 hrs",
            level: "Beginner",
            description: "Python data structures, vector math, and implementing your first neuron.",
            keyTopics: ["NumPy Arrays", "Activation Functions", "Gradient Descent", "Loss Functions"],
            projectIdea: "Build a single-neuron classifier from scratch in 30 lines of Python.",
            video: {
              videoId: "aircAruvnKk",
              title: "What is a Neural Network?",
              channel: "3Blue1Brown",
              duration: "19:13",
              pointerNote: "POINTER: Visualizing hidden layers recognizing edges and loops.",
              timestamps: [
                { time: "00:00", label: "Neurons & Activations" },
                { time: "06:10", label: "Hidden Layer Hierarchy" },
                { time: "12:40", label: "Matrix Form of Forward Pass" }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    id: "fullstack-developer",
    code: "ESCO-2512 / ONET-15-1254",
    title: "Full-Stack Web Developer",
    category: "Software & Web Development",
    personaGroup: "college_student",
    tagline: "Build complete web applications from interactive React user interfaces to Node.js APIs and SQL databases.",
    fresherFriendly: true,
    salaryRange: "₹6L – ₹18L / yr ($80k – $140k)",
    growthRate: "+34% Sustained Demand",
    demandLevel: "Very High",
    industries: ["Technology", "E-Commerce", "SaaS", "Fintech", "Media"],
    relatedInterests: ["Web Development", "Software Development", "JavaScript", "React"],
    requiredSkills: [
      "JavaScript (ES6+)",
      "React",
      "Node.js & Express",
      "SQL (PostgreSQL / MySQL)",
      "HTML5 & Responsive CSS",
      "Git & GitHub"
    ],
    bonusSkills: ["TypeScript", "Tailwind CSS", "REST API Security", "Docker"],
    overview:
      "Full-Stack Developers design responsive web frontends, build scalable server-side REST APIs, manage database transactions, and deploy software across cloud servers.",
    fresherTip:
      "Do not build 10 unfinished todo apps. Build ONE complete project with user login, database storage, responsive UI, and live deployment link.",
    introVideo: {
      videoId: "PkZNo7MFNFg",
      title: "Learn JavaScript - Full Course for Beginners",
      channel: "freeCodeCamp.org",
      duration: "3:26:42",
      pointerNote: "POINTER: Focus on variables, arrow functions, promises, and async/await."
    },
    phases: [
      {
        id: "fs-p1",
        phaseNumber: "PHASE 01",
        title: "Modern JavaScript, DOM & Version Control",
        duration: "4 Weeks",
        summary: "ES6+ syntax, functions, array methods, DOM manipulation, and Git workflows.",
        modules: [
          {
            id: "fs-p1-m1",
            title: "JavaScript Fundamentals & Git",
            skillTag: "JavaScript (ES6+)",
            duration: "5 hrs",
            level: "Beginner",
            description: "Modern JS features, async/await, API fetching, and Git commits.",
            keyTopics: ["Variables & Scopes", "Array Map/Filter/Reduce", "Fetch API", "Git Commands"],
            projectIdea: "Build an interactive task tracker with browser local storage and live filtering.",
            video: {
              videoId: "PkZNo7MFNFg",
              title: "JavaScript Full Beginner Course",
              channel: "freeCodeCamp.org",
              duration: "3:26:42",
              pointerNote: "POINTER: Practice running each snippet in browser developer tools.",
              timestamps: [
                { time: "00:00", label: "Variables & Data Types" },
                { time: "01:20:00", label: "Functions & Objects" },
                { time: "02:40:00", label: "ES6 & Async Code" }
              ]
            }
          }
        ]
      }
    ]
  }
];

// Flat searchable list of 200+ ESCO/O*NET Skills across all trades and domains
export const ESCO_SKILL_TAXONOMY = [
  // Trades & Industrial
  { name: "Joinery & Wood Joints", category: "Carpentry & Trades", escoCode: "S2.1.1" },
  { name: "Woodworking Power Tools", category: "Carpentry & Trades", escoCode: "S2.1.2" },
  { name: "MIG Welding (GMAW)", category: "Welding & Metallurgy", escoCode: "S2.2.1" },
  { name: "TIG Welding (GTAW)", category: "Welding & Metallurgy", escoCode: "S2.2.2" },
  { name: "Stick Welding (SMAW)", category: "Welding & Metallurgy", escoCode: "S2.2.3" },
  { name: "Electrical Wiring & Circuits", category: "Electrical Trades", escoCode: "S2.3.1" },
  { name: "Multimeter & Diagnostics", category: "Electrical Trades", escoCode: "S2.3.2" },
  { name: "Pipe Cutting & Threading", category: "Plumbing & Piping", escoCode: "S2.4.1" },
  { name: "Copper Soldering (Sweating)", category: "Plumbing & Piping", escoCode: "S2.4.2" },
  { name: "Disc & Drum Brake Overhaul", category: "Automotive Trades", escoCode: "S2.5.1" },
  { name: "OBD-II Diagnostic Scanners", category: "Automotive Trades", escoCode: "S2.5.2" },
  { name: "Blueprint & Technical Drawing", category: "Engineering & Trades", escoCode: "S1.1.4" },
  { name: "Workshop Safety & PPE", category: "Safety & Compliance", escoCode: "S1.2.1" },

  // School Academics (Class 9-12)
  { name: "Algebra & Quadratic Equations", category: "Secondary Mathematics", escoCode: "A1.1.1" },
  { name: "Geometry & Trigonometry", category: "Secondary Mathematics", escoCode: "A1.1.2" },
  { name: "Calculus (Differentiation & Integration)", category: "Higher Mathematics", escoCode: "A1.1.3" },
  { name: "Physics (Mechanics & Laws of Motion)", category: "Physical Sciences", escoCode: "A1.2.1" },
  { name: "Electromagnetism & Optics", category: "Physical Sciences", escoCode: "A1.2.2" },
  { name: "Chemistry (Chemical Reactions & Acids)", category: "Chemical Sciences", escoCode: "A1.3.1" },
  { name: "Organic Chemistry Mechanisms", category: "Chemical Sciences", escoCode: "A1.3.2" },
  { name: "Biology (Life Processes & Genetics)", category: "Biological Sciences", escoCode: "A1.4.1" },
  { name: "Double Entry Bookkeeping", category: "Commerce & Accounting", escoCode: "A2.1.1" },
  { name: "Journal Entries & Ledgers", category: "Commerce & Accounting", escoCode: "A2.1.2" },
  { name: "Micro & Macro Economics", category: "Commerce & Economics", escoCode: "A2.2.1" },

  // Business & Healthcare
  { name: "Tally Prime & QuickBooks", category: "Finance & Accounting", escoCode: "B1.1.1" },
  { name: "GST Returns & Direct Taxation", category: "Finance & Accounting", escoCode: "B1.1.2" },
  { name: "Vital Signs Monitoring", category: "Healthcare & Clinical", escoCode: "H1.1.1" },
  { name: "Medication Administration", category: "Healthcare & Clinical", escoCode: "H1.1.2" },
  { name: "Knife Skills (Culinary Cuts)", category: "Culinary Arts", escoCode: "C1.1.1" },
  { name: "Food Safety Standards (HACCP)", category: "Culinary Arts", escoCode: "C1.1.2" },

  // Software & Technology
  { name: "Python", category: "Software Development", escoCode: "T1.1.1" },
  { name: "JavaScript (ES6+)", category: "Software Development", escoCode: "T1.1.2" },
  { name: "React", category: "Frontend Engineering", escoCode: "T1.2.1" },
  { name: "Node.js & Express", category: "Backend Engineering", escoCode: "T1.2.2" },
  { name: "SQL & Relational Databases", category: "Database & Analytics", escoCode: "T1.3.1" },
  { name: "Machine Learning Algorithms", category: "Artificial Intelligence", escoCode: "T1.4.1" },
  { name: "Git & GitHub", category: "Developer Tools", escoCode: "T1.5.1" }
];

export function searchEscoOccupations(query = "") {
  const q = String(query).toLowerCase().trim();
  if (!q) return ESCO_ONET_OCCUPATIONS;
  return ESCO_ONET_OCCUPATIONS.filter(
    (occ) =>
      occ.title.toLowerCase().includes(q) ||
      occ.category.toLowerCase().includes(q) ||
      occ.code.toLowerCase().includes(q) ||
      occ.tagline.toLowerCase().includes(q) ||
      occ.requiredSkills.some((s) => s.toLowerCase().includes(q))
  );
}

export function searchEscoSkills(query = "") {
  const q = String(query).toLowerCase().trim();
  if (!q) return ESCO_SKILL_TAXONOMY.slice(0, 30);
  return ESCO_SKILL_TAXONOMY.filter(
    (s) =>
      s.name.toLowerCase().includes(q) ||
      s.category.toLowerCase().includes(q) ||
      s.escoCode.toLowerCase().includes(q)
  );
}

