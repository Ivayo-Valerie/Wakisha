export interface ServiceItem {
  id: string;
  title: string;
  category: 'engineering' | 'management' | 'automation' | 'renewable';
  shortDesc: string;
  fullDesc: string;
  icon: string;
  deliverables: string[];
  standards?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  location: string;
  category: 'Solar Energy' | 'Security Systems' | 'Commercial & Retail' | 'Hospitality' | 'Smart Automation';
  image: string;
  description: string;
  highlights: string[];
  year?: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  client: string;
  role: string;
  project: string;
}

export const siteConfig = {
  name: "Wakisha Electrical Engineering & Sales Services",
  shortName: "Wakisha Electrical",
  tagline: "Committed to providing the best possible engineering expertise & service to ensure effective, efficient and successful projects at affordable price.",
  subTagline: "Let's maximize your system's power transmission and load capacity together.",
  foundedYear: 2017,
  email: "wakisha4@gmail.com",
  phone: "+254 721270075",
  phoneClean: "+254721270075",
  whatsappUrl: "https://wa.me/254721270075?text=Hello%20Wakisha%20Electrical,%20I%20would%20like%20to%20inquire%20about%20your%20engineering%20services.",
  website: "www.wakishaelectricalengineering.com",
  url: "https://www.wakishaelectricalengineering.com",
  location: {
    headquarters: "Nairobi, Kenya",
    regions: ["Coast", "Western", "Central", "Eastern"],
    coverage: "Nationwide urban and rural coverage across Kenya",
  },
  mission: "To deliver cutting edge engineering services and be the leading engineering companies in Kenya.",
  vision: "To provide sustainable and appropriate technical solutions with Professionalism, thus ensuring value for all stakeholders.",
  coreValues: [
    { title: "Professionalism", desc: "Rigorous engineering standards, certified audits, and dependable execution." },
    { title: "Sustainability", desc: "Clean renewable solar solutions and energy-efficient load balancing." },
    { title: "Client Value", desc: "Cost optimization, zero power waste, and transparent milestone tracking." },
    { title: "Reliability & Safety", desc: "Strict BauKG health & safety planning and FIDIC-grade supervision." }
  ],
  pillars: [
    {
      id: "reliability",
      title: "Reliability",
      question: "How do you guarantee the system won't fail?",
      answer: "Through rigorous testing and proven follow-through procedures.",
      icon: "ShieldCheck",
      detail: "Every installation undergoes comprehensive multi-stage testing before commissioning, preventing failures before they happen."
    },
    {
      id: "efficiency",
      title: "Efficiency",
      question: "Will this save or make me money?",
      answer: "By optimizing circuits to eliminate signal loss and power waste.",
      icon: "Zap",
      detail: "Our precision circuit design and load balancing dramatically reduce electricity tariffs and prevent costly equipment strain."
    },
    {
      id: "communication",
      title: "Communication",
      question: "Will I be left in the dark?",
      answer: "We operate with transparent, milestone-based communication.",
      icon: "MessageSquare",
      detail: "Regular visual progress reports, direct engineer access, and scheduled site updates keep stakeholders fully informed."
    },
    {
      id: "scalability",
      title: "Scalability",
      question: "Can this design grow with my business?",
      answer: "We design modular, forward-compatible system architectures.",
      icon: "TrendingUp",
      detail: "Your power grid, solar array, or security installation is engineered ready for future capacity expansions without tearing down existing infrastructure."
    }
  ]
};

export const servicesData: ServiceItem[] = [
  {
    id: "project-management",
    title: "Project Management & Owner's Representative Services",
    category: "management",
    shortDesc: "Comprehensive oversight acting as the client's trusted representative to guarantee technical excellence, budget control, and scheduled completion.",
    fullDesc: "Wakisha acts as the direct technical advocate for project owners and investors. We coordinate contractors, resolve complex engineering hurdles on-site, audit compliance, and guarantee your vision is delivered without costly delays or contractor variances.",
    icon: "Briefcase",
    deliverables: [
      "Client advocacy & contractor coordination",
      "Milestone and schedule enforcement",
      "Scope management & change order control",
      "Quality assurance audits and final sign-off"
    ]
  },
  {
    id: "site-supervision-control",
    title: "Project Control & Site Supervision",
    category: "management",
    shortDesc: "Hands-on daily on-site supervision and technical control to ensure works adhere strictly to design drawings and engineering codes.",
    fullDesc: "Our qualified inspection engineers maintain on-ground vigilance at every phase of electrical, structural, and electro-mechanical installations. We ensure materials, cabling, grounding, and switchgear comply with statutory engineering standards.",
    icon: "Eye",
    deliverables: [
      "Daily and weekly site surveillance logs",
      "Material quality & certification verification",
      "Grounding, conduit, and trunking inspections",
      "Snag list identification and proactive resolution"
    ]
  },
  {
    id: "monitoring-bank-audits",
    title: "Project, Construction & Bank Monitoring",
    category: "management",
    shortDesc: "Independent third-party technical verifications and financial disbursement auditing for financial institutions and investors.",
    fullDesc: "We provide banks, micro-financiers, and equity investors with independent technical audits before loan disbursements. We assess actual physical construction percentage, verify asset procurement, and evaluate project risk.",
    icon: "Landmark",
    deliverables: [
      "Bank drawdown technical certificates",
      "Real-world percentage-of-completion audits",
      "Risk assessment and contingency evaluation",
      "Valuation of installed electrical assets"
    ]
  },
  {
    id: "solar-renewable",
    title: "Solar Energy & PV System Engineering",
    category: "renewable",
    shortDesc: "Commercial, industrial, and residential solar photovoltaic design, inverter sizing, battery storage, and hybrid systems.",
    fullDesc: "From our proven installations like the Utawala Solar Projects to large-scale mini-grids in rural Kenya, Wakisha designs customized renewable systems that slash operational energy costs and ensure zero blackout disruption.",
    icon: "Sun",
    deliverables: [
      "Solar irradiance & load profile modeling",
      "Tier-1 monocrystalline PV array engineering",
      "Lithium battery storage & hybrid inverter integration",
      "Net-metering & grid-tie regulatory clearance"
    ]
  },
  {
    id: "electric-fence-security",
    title: "High-Security Electric Fencing & Perimeter Defense",
    category: "engineering",
    shortDesc: "Commercial, perimeter, and agricultural high-voltage electric fence systems engineered for maximum intruder deterrence and zone monitoring.",
    fullDesc: "Proven in challenging terrains including our flagship Wajir Electric Fence installation, we engineer robust perimeter security systems with multi-zone energizers, tamper alarms, GSM remote alerts, and backup solar powering.",
    icon: "ShieldAlert",
    deliverables: [
      "Multi-strand high-tensile galvanised fencing",
      "High-power pulse energizers with smart zones",
      "GSM and IP perimeter monitoring interfaces",
      "Integrated solar backup for continuous defense"
    ]
  },
  {
    id: "home-automation",
    title: "Smart Home & Building Automation",
    category: "automation",
    shortDesc: "Intelligent lighting controls, energy management, climate integration, and centralized smart touchpanels for modern properties.",
    fullDesc: "Modernize your living and commercial spaces with cutting-edge automation. Control ambient illumination, power sockets, automated curtains, and security sensors from unified smartphone apps or voice-controlled interfaces.",
    icon: "Sliders",
    deliverables: [
      "Smart scene lighting & dimming ecosystems",
      "Automated load shedding and energy tracking",
      "Remote mobile application access & wall keypads",
      "Multi-system integration (HVAC, gates, audio)"
    ]
  },
  {
    id: "commercial-lighting",
    title: "Architectural & Commercial Lighting Design",
    category: "engineering",
    shortDesc: "Specialized lighting engineering for luxury retail, hospitality, corporate offices, and architectural showcases.",
    fullDesc: "As demonstrated in our Westgate Erita Jewellery and Hayat Hotel projects, we engineer lighting schemes that enhance aesthetic beauty, highlight luxury retail products, and optimize lumen-per-watt efficiency.",
    icon: "Lightbulb",
    deliverables: [
      "Dialux photometric calculations & lighting layouts",
      "CRI 90+ retail track and spotlight systems",
      "Hotel suite, staircase, and corridor mood lighting",
      "LED architectural cove & exterior facade illumination"
    ]
  },
  {
    id: "master-planning-scheduling",
    title: "Master Planning, Cost Planning & Progress Control",
    category: "management",
    shortDesc: "Strategic critical-path scheduling, detailed Bill of Quantities (BOQ), cost optimization, and project lifecycle management.",
    fullDesc: "We prevent cost overruns and delays before they occur. Our master planning integrates MEP engineering with civil works, synchronizing milestones to maintain rapid progress without sacrificing build quality.",
    icon: "Calendar",
    deliverables: [
      "Critical Path Method (CPM) project schedules",
      "Itemized electrical & engineering BOQs",
      "Variance analysis and cash flow forecasting",
      "Subcontractor alignment and logistics pacing"
    ]
  },
  {
    id: "due-diligence-audits",
    title: "Technical Due Diligence & Project Audits",
    category: "management",
    shortDesc: "Comprehensive forensic technical audits, circuit safety testing, and pre-purchase engineering evaluations for commercial properties.",
    fullDesc: "Avoid hidden electrical defects and fire hazards. We perform thermographic scans, harmonic distortion testing, grounding resistance audits, and code compliance checks for property buyers, tenants, and facilities managers.",
    icon: "FileCheck2",
    deliverables: [
      "Infrared thermographic switchboard audits",
      "Grounding/earthing resistance certification",
      "Power factor & harmonic distortion analysis",
      "Statutory compliance and defect rectification plans"
    ]
  },
  {
    id: "fidic-baukg-compliance",
    title: "FIDIC Engineering & BauKG Health & Safety",
    category: "management",
    shortDesc: "International contract administration (FIDIC Red, Yellow, Silver) and health & safety planning per Austrian BauKG coordination standards.",
    fullDesc: "Wakisha adheres to rigorous international benchmarks. We provide formal FIDIC Engineer services for contractual impartiality, as well as systematic health and safety coordination modeled on the Austrian Construction Work Coordination Act (BauKG).",
    icon: "Award",
    deliverables: [
      "FIDIC contract administration & claim evaluation",
      "BauKG-standard Health & Safety plans",
      "Hazard identification & risk mitigation protocols",
      "Independent inspection engineer statutory sign-offs"
    ]
  },
  {
    id: "construction-economics",
    title: "Expert Opinions & Construction Economics",
    category: "management",
    shortDesc: "Independent dispute resolution opinions, value engineering assessments, and development of organizational structures for projects.",
    fullDesc: "We provide authoritative expert opinions on electrical engineering disputes, evaluate insurance claims, and design operational workflows and management structures for large-scale construction enterprises.",
    icon: "TrendingDown",
    deliverables: [
      "Expert witness and dispute advisory reports",
      "Value engineering to reduce capital expenditure",
      "Standard operating procedure (SOP) design",
      "Organizational framework for engineering teams"
    ]
  }
];

export const projectsData: ProjectItem[] = [
  {
    id: "utawala-solar",
    title: "Utawala Solar Projects",
    client: "Commercial & Residential Clients",
    location: "Utawala, Nairobi",
    category: "Solar Energy",
    image: "/assets/project-utawala-solar.jpg",
    description: "Engineering, procurement, and installation of high-efficiency rooftop photovoltaic array systems with hybrid inverter integration and battery storage backup, eliminating power interruptions and reducing reliance on the national grid.",
    highlights: [
      "High-output Tier-1 solar panel configuration",
      "Seamless hybrid inverter switchover during grid drops",
      "Over 65% reduction in grid electricity costs",
      "Engineered mounting structures withstand high wind loads"
    ],
    year: "Completed Project"
  },
  {
    id: "wajir-electric-fence",
    title: "Wajir High-Security Electric Fence",
    client: "Institutional & Security Sector",
    location: "Wajir County, North-Eastern Kenya",
    category: "Security Systems",
    image: "/assets/project-wajir-fence-1.jpg",
    description: "Engineered high-tensile perimeter defense system built for extreme climate durability in Wajir. Features dual-energizer redundancy, zone-based intrusion alarms, solar-powered battery reserves, and heavy-duty tamper detection.",
    highlights: [
      "Multi-kilometer high-tensile security fence",
      "Resilient solar-powered off-grid energizer system",
      "Instantaneous zone-segmented tamper alarms",
      "Engineered for arid, high-temperature environmental durability"
    ],
    year: "Completed Project"
  },
  {
    id: "hayat-hotel-erita",
    title: "Hayat Hotel Erita",
    client: "Hayat Hotel & Hospitality Group",
    location: "Nairobi, Kenya",
    category: "Hospitality",
    image: "/assets/project-hayat-hotel-room.png",
    description: "Complete electro-mechanical and architectural lighting engineering for luxury guest suites, corridors, and iconic architectural staircase. Engineered warm, dimmable mood lighting scenes while maintaining strict energy-saving ratings.",
    highlights: [
      "Bespoke architectural step and tread illumination",
      "Multi-scene guestroom ambient lighting controls",
      "Energy-efficient LED drivers with zero perceptible flicker",
      "Heavy-duty power distribution and dedicated back-up circuits"
    ],
    year: "Completed Project"
  },
  {
    id: "erita-jewellery-westgate",
    title: "Erita Jewellery West Gate Wakisha",
    client: "Erita Fine Jewellery",
    location: "Westgate Mall, Westlands, Nairobi",
    category: "Commercial & Retail",
    image: "/assets/project-erita-jewellery.jpg",
    description: "Turnkey luxury retail lighting engineering and precision electrical fitting at Westgate Shopping Mall. Specified high Color Rendering Index (CRI >95) track spot systems to showcase precious gemstones and fine gold with true color brilliance.",
    highlights: [
      "High CRI 95+ track illumination to highlight fine jewelry",
      "Hidden precision display-case LED linear profiles",
      "Surge-protected dedicated power circuitry for security display safes",
      "Modern clean architectural ceiling integration"
    ],
    year: "Completed Project"
  },
  {
    id: "smart-kitchen-interior",
    title: "Smart Kitchen & Interior Automation",
    client: "Private Residential Estate",
    location: "Nairobi, Kenya",
    category: "Smart Automation",
    image: "/assets/project-kitchen-automation.jpg",
    description: "Integrated residential electrical design featuring concealed under-cabinet architectural task lighting, appliance load balancing, and smart automated circuit controls for a high-end contemporary residence.",
    highlights: [
      "Concealed LED profile illumination with diffuse optics",
      "Dedicated heavy appliance branch circuits",
      "Smart switch integration with automated occupancy scenes",
      "Child-safe tamper-resistant power outlets"
    ],
    year: "Completed Project"
  }
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: "testimonial-1",
    quote: "They saved our project. Their team redesigned our circuit board to eliminate signal interference, and their constant communication kept us completely assured throughout the process.",
    client: "Industrial Systems Engineering Lead",
    role: "Project Director",
    project: "Circuit Optimization & Interference Resolution"
  },
  {
    id: "testimonial-2",
    quote: "We felt completely confident from start to finish. They explained complex technical layouts in plain English and delivered a highly efficient, reliable power system right on schedule.",
    client: "Commercial Property Developer",
    role: "Managing Partner",
    project: "Commercial Substation & Power Distribution"
  },
  {
    id: "testimonial-3",
    quote: "Highly professional and dependable. They successfully bridged the gap between our initial concepts and a fully scalable physical product while keeping our business goals the top priority.",
    client: "Hospitality & Retail Group",
    role: "Operations Director",
    project: "Turnkey Architectural Lighting & Electrical Execution"
  }
];
