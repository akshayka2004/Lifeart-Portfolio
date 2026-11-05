export const COMPANY = {
  legalName: 'Lifeart Business Services Pvt. Ltd.',
  brandName: 'Lifeart Group',
  tagline: 'Driving Business Excellence Through Digital & Enterprise Solutions.',
  heroStatement: 'Transforming Enterprise Operations Through Intelligent Digital & Management Systems.',
  heroSupport: 'Lifeart Group delivers 12 specialized enterprise ERP & management systems, software & service consultancy, resource augmentation, and telesales growth support from Trivandrum, Kerala.',
  overview: 'Lifeart Business Services Pvt. Ltd. (Lifeart Group) is an established business consultancy and enterprise technology provider headquartered in Trivandrum, Kerala, India. We empower organizations across healthcare, manufacturing, education, retail, hospitality, insurance, and contracting sectors with tailored ERP platforms and dedicated business services.',
  approachIntro: 'From diagnostic workflow mapping to full-scale enterprise software deployment, resource augmentation, and continuous SLA support, our methodology guarantees measurable operational progress.',
  establishedYear: '2019',
  corporateAddress: 'Trivandrum, Kerala, India - 695001',
  contactEmail: 'saju@lifeartgroup.in',
  enquiryEmail: 'saju@lifeartgroup.in',
  contactPhone: '+91 85902 12345',
  websiteUrl: 'https://lifeartgroup.in',
  workingHours: 'Monday – Saturday: 09:30 – 18:30 IST'
};

export const HERO_SLIDES = [
  {
    index: '01',
    eyebrow: 'LIFEART GROUP • 12 SPECIALIZED ERP SYSTEMS',
    headlinePrefix: 'Business Services That Drive',
    headlineHighlight: 'Real Progress.',
    description: 'Purpose-built ERP and management platforms for hospitals, clinics, schools, manufacturing plants, boutiques, salons, hotels, restaurants, and retail shops.',
    metricLabel: 'DEPLOYED VERTICAL ERPs',
    metricValue: '12 Platforms',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    caption: 'ENTERPRISE ERP SUITE • TRIVANDRUM, KERALA',
    primaryCta: { label: 'Explore 12 ERP Systems', route: 'services' }
  },
  {
    index: '02',
    eyebrow: 'STRATEGIC ADVISORY • DIGITAL TRANSFORMATION',
    headlinePrefix: 'Software & Service Consultancy for',
    headlineHighlight: 'Modern Enterprises.',
    description: 'We audit operational bottlenecks, design custom software architectures, and implement automated workflows that maximize productivity and compliance.',
    metricLabel: 'WORKFLOW EFFICIENCY GAIN',
    metricValue: 'Up to 38%',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    caption: 'SOFTWARE & SERVICE CONSULTANCY DESK',
    primaryCta: { label: 'View Consultancy Pillars', route: 'insights' }
  },
  {
    index: '03',
    eyebrow: 'SCALABLE TALENT & REVENUE ACCELERATION',
    headlinePrefix: 'Resource Augmentation &',
    headlineHighlight: 'TeleSales Growth.',
    description: 'Scale your organization rapidly with on-demand technical specialists and dedicated outbound/inbound TeleSales support teams engineered for measurable ROI.',
    metricLabel: 'CLIENT SLA RELIABILITY',
    metricValue: '99.4% Uptime',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    caption: 'RESOURCE AUGMENTATION & TELESALES SUPPORT',
    primaryCta: { label: 'Discuss Your Requirement', route: 'contact' }
  }
];

export const MARQUEE_ITEMS = [
  'BOUTIQUE MANAGEMENT SYSTEM',
  'SALON & SPA MANAGEMENT',
  'HOSPITAL MANAGEMENT SYSTEM',
  'PRODUCTION MANAGEMENT ERP',
  'CONTRACTING & PROJECT MANAGEMENT',
  'SCHOOL MANAGEMENT SOLUTION',
  'SERVICE CENTRE MANAGEMENT',
  'HOTEL & RESORT MANAGEMENT',
  'INSURANCE MANAGEMENT SYSTEM',
  'CUSTOM ERP FOR SHOPS',
  'RESTAURANT MANAGEMENT SYSTEM',
  'CLINIC MANAGEMENT SYSTEM',
  'SOFTWARE & SERVICE CONSULTANCY',
  'RESOURCE AUGMENTATION',
  'TELESALES GROWTH SUPPORT'
];

export const ERP_SYSTEMS = [
  {
    slug: 'boutique-management-system',
    number: '01',
    title: 'Boutique Management System',
    category: 'Retail & Lifestyle',
    featured: true,
    shortDescription: 'A comprehensive software solution designed to streamline and enhance the daily operations of fashion and accessory boutiques—from inventory to sales and CRM.',
    audience: 'Fashion boutiques, designer studios, apparel stores, and multi-branch accessory retailers.',
    challenge: 'Tracking size/color variants, bespoke tailoring orders, seasonal stockouts, and customer purchase preferences manually leads to lost sales and dead stock.',
    deliverables: [
      'Variant-Level Barcode & SKU Inventory Control',
      'Custom Alteration & Order Tracking Workflow',
      'High-Speed Cloud POS Billing & GST Invoicing',
      'VIP Clienteling, Loyalty Points & WhatsApp Receipts'
    ],
    metrics: { speed: '2.8x Faster Checkout', accuracy: '99.6% Stock Accuracy' },
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80'
  },
  {
    slug: 'salon-spa-management-system',
    number: '02',
    title: 'Salon & Spa Management System',
    category: 'Retail & Lifestyle',
    featured: true,
    shortDescription: 'An all-in-one software solution tailored to the needs of beauty and wellness businesses—streamlining appointments, staff commissions, and client retention.',
    audience: 'Luxury salons, wellness spas, aesthetic clinics, and grooming franchises.',
    challenge: 'Appointment double-bookings, unrecorded consumable usage, and complex stylist commission calculations erode margins and guest satisfaction.',
    deliverables: [
      'Interactive Stylist Calendar & Online Booking Engine',
      'Automated SMS / WhatsApp Appointment Reminders',
      'Membership Packages, Gift Vouchers & Prepaid Wallets',
      'Staff Commission & Consumable Stock Deduction'
    ],
    metrics: { speed: '42% Fewer No-Shows', accuracy: '100% Commission Clarity' },
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80'
  },
  {
    slug: 'hospital-management-system',
    number: '03',
    title: 'Hospital Management System',
    category: 'Healthcare & Medical',
    featured: true,
    shortDescription: 'A comprehensive solution designed to optimize hospital administration, streamline OPD/IPD operations, and elevate patient care and resource utilization.',
    audience: 'Multi-specialty hospitals, surgical centers, nursing homes, and healthcare networks.',
    challenge: 'Disconnected OPD, IPD, pharmacy, and lab departments create long patient discharge queues, billing leakage, and compliance risks.',
    deliverables: [
      'Unified Patient Registration, OPD & IPD Admission',
      'Electronic Medical Records (EMR) & Doctor Workbench',
      'Integrated Pharmacy Inventory & Diagnostic Lab Billing',
      'Ward Bed Occupancy, OT Scheduling & Insurance TPA Desk'
    ],
    metrics: { speed: '8-Min Fast Discharge', accuracy: '100% Audit Traceability' },
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=80'
  },
  {
    slug: 'production-management-system',
    number: '04',
    title: 'Production Management System',
    category: 'Manufacturing & Projects',
    featured: true,
    shortDescription: 'Designed to streamline manufacturing operations, optimize resource utilization, manage multi-level BOMs, and ensure high product quality from raw material to dispatch.',
    audience: 'Manufacturing plants, fabrication units, food processing, and industrial assembly lines.',
    challenge: 'Unplanned machine downtime, raw material wastage, and paper job cards make real-time batch costing and delivery forecasting impossible.',
    deliverables: [
      'Multi-Level Bill of Materials (BOM) & MRP Engine',
      'Shop-Floor Work Orders & Stage-Wise WIP Tracking',
      'Batch Quality Control (QC) & Scrap Analysis',
      'Real-Time Costing, Machine Utilization & Dispatch'
    ],
    metrics: { speed: '34% Faster Lead Time', accuracy: '22% Scrap Reduction' },
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80'
  },
  {
    slug: 'contracting-project-management-system',
    number: '05',
    title: 'Contracting & Project Management System',
    category: 'Manufacturing & Projects',
    featured: false,
    shortDescription: 'Streamlines and optimizes the entire lifecycle of contracting projects—from BOQ estimation and scheduling to site execution and subcontractor cost control.',
    audience: 'Civil contractors, MEP engineering firms, interior fit-out companies, and EPC developers.',
    challenge: 'Site material pilferage, delayed subcontractor measurement books, and unmonitored budget overruns severely compress project margins.',
    deliverables: [
      'BOQ Estimation, Tendering & Project Budgeting',
      'Site Material Requisition, Purchase & Indent Tracking',
      'Subcontractor Work Orders, RA Bills & Labor Attendance',
      'Live Site-Wise Profitability & Cash-Flow Telemetry'
    ],
    metrics: { speed: '18% Cost Savings', accuracy: 'Live BOQ vs Actuals' },
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80'
  },
  {
    slug: 'school-management-solution',
    number: '06',
    title: 'School Management Solution',
    category: 'Education & Services',
    featured: false,
    shortDescription: 'Streamlines administrative and academic tasks, enhances parent-teacher communication, and ensures smooth operation across the entire school lifecycle.',
    audience: 'K-12 schools, international academies, colleges, and multi-campus educational trusts.',
    challenge: 'Manual fee reconciliation, report card compilation, and fragmented parent communication consume hundreds of faculty hours every term.',
    deliverables: [
      'Online Admissions & Student Information System (SIS)',
      'Automated Fee Collection, Receipts & Defaulter Alerts',
      'Timetable, Attendance, Exam Grading & Report Cards',
      'Parent-Teacher Mobile Portal & School Bus GPS Tracking'
    ],
    metrics: { speed: '70% Less Admin Paperwork', accuracy: 'Instant Fee Reconciliation' },
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=80'
  },
  {
    slug: 'service-centre-management-system',
    number: '07',
    title: 'Service Centre Management System',
    category: 'Education & Services',
    featured: false,
    shortDescription: 'Streamlines operations, enhances customer service, and improves efficiency across customer registration, job card scheduling, spare parts, and repair billing.',
    audience: 'Authorized electronics, home appliance, automobile, IT hardware, and mobile service centers.',
    challenge: 'Lost repair job cards, warranty claim delays, and untracked spare parts inventory frustrate customers and slow down technician turnaround.',
    deliverables: [
      'Job Card Creation, Serial/IMEI & Warranty Verification',
      'Technician Assignment & SLA Turnaround Tracking',
      'Spare Parts Inventory, Reorder & Consumption Logs',
      'Automated Customer SMS Status Updates & GST Billing'
    ],
    metrics: { speed: '2.1x Faster Turnaround', accuracy: 'Zero Lost Job Cards' },
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80'
  },
  {
    slug: 'hotel-resort-management-system',
    number: '08',
    title: 'Hotel / Resort Management System',
    category: 'Hospitality & Dining',
    featured: false,
    shortDescription: 'Streamlines operations, enhances guest satisfaction, and improves efficiency across online/offline reservations, front desk, housekeeping, and banquet billing.',
    audience: 'Hotels, luxury resorts, boutique homestays, serviced apartments, and clubs.',
    challenge: 'OTA overbookings, delayed room readiness updates between housekeeping and reception, and unbilled minibar/room-service orders hurt RevPAR.',
    deliverables: [
      'Front-Desk Reservation, Check-In/Out & Room Rack View',
      'OTA Channel Manager Sync & Group Booking Engine',
      'Housekeeping Status, Laundry & Room Service POS Sync',
      'Night Audit, Folio Split Billing & Occupancy Analytics'
    ],
    metrics: { speed: '3-Min Express Check-In', accuracy: 'Zero OTA Overbookings' },
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80'
  },
  {
    slug: 'insurance-management-system',
    number: '09',
    title: 'Insurance Management System',
    category: 'Education & Services',
    featured: false,
    shortDescription: 'Streamlines policy management, accelerates claims processing, automates renewal reminders, and ensures regulatory compliance for insurance agencies and brokers.',
    audience: 'Insurance brokers, corporate agencies, micro-insurance networks, and financial advisories.',
    challenge: 'Missed policy renewals, scattered KYC documents, and manual sub-agent commission tracking reduce renewal retention and compliance readiness.',
    deliverables: [
      'Multi-Insurer Policy Issuance & Endorsement Registry',
      'Automated 60/30/7-Day Renewal Alerts via SMS & Email',
      'Claims Intimation, Surveyor & Settlement Tracking',
      'Advisor / Sub-Agent Brokerage & Commission Ledger'
    ],
    metrics: { speed: '31% Higher Renewals', accuracy: '100% KYC Compliance' },
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80'
  },
  {
    slug: 'custom-erp-for-shops',
    number: '10',
    title: 'Custom ERP for Shops',
    category: 'Retail & Lifestyle',
    featured: false,
    shortDescription: 'Streamlines retail operations, manages inventory with automated reordering, accelerates counter billing, and unifies customer relationships and retail finances.',
    audience: 'Supermarkets, hypermarkets, hardware stores, wholesale traders, and multi-counter retail shops.',
    challenge: 'Slow checkout queues during peak hours, expiry/batch leakage, and supplier credit mismatches eat into retail working capital.',
    deliverables: [
      'Multi-Counter High-Speed Barcode POS & Weigh-Scale Sync',
      'Automated Min-Max Stock Reordering & Supplier POs',
      'Batch, MRP, Expiry & Rack-Location Inventory Control',
      'Integrated GST Filing, Daybook & P&L Financial Accounting'
    ],
    metrics: { speed: '3x Counter Throughput', accuracy: 'Real-Time Stock Ledger' },
    image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=900&q=80'
  },
  {
    slug: 'restaurant-management-system',
    number: '11',
    title: 'Restaurant Management System',
    category: 'Hospitality & Dining',
    featured: false,
    shortDescription: 'Streamlines restaurant operations from table reservation and captain order pads to Kitchen Display Systems (KDS), recipe costing, and split billing.',
    audience: 'Fine-dining restaurants, QSR chains, cafes, cloud kitchens, and food courts.',
    challenge: 'Delayed kitchen order tickets (KOT), unaccounted raw ingredient pilferage, and fragmented delivery aggregator orders erode food margins.',
    deliverables: [
      'Interactive Table Layout, Captain App & Instant KOT',
      'Kitchen Display System (KDS) & Course-Wise Prep Alerts',
      'Recipe BOM Ingredient Deduction & Food Cost Control',
      'Dine-In, Takeaway & Delivery Billing with Split Payments'
    ],
    metrics: { speed: '25% Faster Table Turn', accuracy: 'Exact Recipe Costing' },
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80'
  },
  {
    slug: 'clinic-management-system',
    number: '12',
    title: 'Clinic Management System',
    category: 'Healthcare & Medical',
    featured: false,
    shortDescription: 'Streamlines clinic operations, improves patient care, and ensures regulatory compliance from token queue registration to e-prescriptions and follow-ups.',
    audience: 'Outpatient clinics, dental practices, polyclinics, pediatricians, and specialist consultants.',
    challenge: 'Crowded waiting rooms, illegible paper prescriptions, and lost patient history files slow down daily consultations.',
    deliverables: [
      'Smart Token Queue Display & Walk-In / Online Booking',
      '1-Click Digital Prescription Pad & Clinical Case History',
      'Lab Test Ordering, Vaccination & Follow-Up SMS Alerts',
      'Daily Consultation Fee, Procedure & Pharmacy Billing'
    ],
    metrics: { speed: '40% Shorter Wait Times', accuracy: 'Instant Patient History' },
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=80'
  }
];

export const SERVICES = ERP_SYSTEMS;

export const CONSULTANCY_PILLARS = [
  {
    slug: 'software-and-service-consultancy',
    number: '01',
    category: 'BUSINESS & IT CONSULTANCY',
    title: 'The Benefits of Software and Service Consultancy for Your Business',
    readTime: '4 Min Executive Brief',
    summary: 'In today’s fast-paced business environment, staying ahead of the competition requires more than just hard work—it demands smart strategies, efficient processes, and the right technology.',
    highlights: [
      'Tailored Solutions for Unique Business Needs: Custom ERP & workflow design aligned with your exact operational goals.',
      'Access to Specialized Expertise: Senior technology architects and domain specialists without full-time overhead.',
      'Improved Efficiency & Productivity: Eliminating redundant manual tasks and disconnected departmental spreadsheets.',
      'Cost-Effective Technology Investment: Avoiding expensive software misfires through structured requirement blueprinting.'
    ],
    fullContent: [
      'Every organization operates with distinct workflows, regulatory obligations, and customer expectations. Off-the-shelf software often forces teams to bend their processes around rigid templates. Lifeart Group’s Software and Service Consultancy bridges this gap by diagnosing your ground-level operations first.',
      'Our consultants work alongside your department heads to map bottlenecks in inventory, billing, patient care, or shop-floor scheduling. We then architect and configure modular systems that integrate seamlessly with your existing hardware and accounting standards.',
      'Beyond initial deployment, our consultancy desk provides continuous SLA governance, cybersecurity hygiene, and quarterly workflow audits—ensuring your technology stack evolves as your enterprise expands.'
    ],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80'
  },
  {
    slug: 'resource-augmentation-scaling-business',
    number: '02',
    category: 'TALENT & CAPACITY SCALING',
    title: 'Resource Augmentation: Scaling Your Business with Flexibility and Expertise',
    readTime: '4 Min Executive Brief',
    summary: 'Bridge critical skill gaps and respond to shifting market demands rapidly by integrating vetted technical, operational, and domain specialists directly into your teams.',
    highlights: [
      'Rapid Deployment of Vetted Talent: Bypass multi-month recruitment cycles with ready-to-deploy specialists.',
      'Elastic Cost Structure: Scale engineering, ERP administration, or operations capacity up or down based on project phases.',
      'Zero Administrative Overhead: Lifeart manages payroll, compliance, onboarding, and performance tracking.',
      'Seamless Team Integration: Professionals trained to adopt your internal tools, KPIs, and reporting cadence.'
    ],
    fullContent: [
      'In a rapidly changing economic landscape, fixed staffing models can either bottleneck growth during peak demand or create heavy fixed-cost burdens between project cycles. Resource augmentation offers executives a disciplined middle path.',
      'Lifeart Group provides skilled software engineers, ERP implementation specialists, database administrators, and business process analysts on flexible engagement terms. Whether you are rolling out a multi-branch ERP migration or building a custom digital portal, our specialists embed directly within your delivery structure.',
      'With transparent monthly governance and dedicated account supervision from our Trivandrum headquarters, your leadership retains full project control while we handle talent readiness and continuity.'
    ],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80'
  },
  {
    slug: 'telesales-support-business-growth',
    number: '03',
    category: 'REVENUE & CUSTOMER ENGAGEMENT',
    title: 'The Power of TeleSales Support: Key Benefits for Your Business Growth',
    readTime: '3 Min Executive Brief',
    summary: 'Accelerate lead conversion, nurture existing customer relationships, and expand market reach through structured, CRM-driven TeleSales operations.',
    highlights: [
      'Proactive Lead Qualification & Conversion: Turning cold inquiries and digital leads into scheduled demos and closed orders.',
      'Customer Retention & Renewal Campaigns: Systematic follow-ups for AMC renewals, insurance policies, and repeat retail orders.',
      'Real-Time CRM Telemetry: Every call, disposition, and pipeline milestone logged for transparent sales forecasting.',
      'Scalable Multilingual Outreach: Dedicated voice professionals trained in consultative selling and brand etiquette.'
    ],
    fullContent: [
      'Even the strongest product or service suite requires consistent, consultative human outreach to build trust and close high-value engagements. Many growing enterprises struggle when technical or store staff are forced to juggle inbound inquiries alongside core operations.',
      'Lifeart Group’s TeleSales Support practice acts as a dedicated revenue engine for your organization. Equipped with structured call scripts, objection-handling playbooks, and live CRM dashboards, our telesales specialists handle lead qualification, appointment setting, payment follow-ups, and customer satisfaction surveys.',
      'By combining our industry-specific ERP platforms with proactive TeleSales support, businesses achieve higher conversion rates, lower customer acquisition costs, and predictable recurring revenue.'
    ],
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=80'
  }
];

export const CAPABILITY_METRICS = [
  {
    label: 'Custom ERP & Vertical Management Systems',
    percentage: 96,
    detail: '12 specialized platforms across Healthcare, Retail, Manufacturing, Hospitality & Education'
  },
  {
    label: 'Software & Operational Process Consultancy',
    percentage: 92,
    detail: 'End-to-end workflow blueprinting, legacy data migration & compliance auditing'
  },
  {
    label: 'Resource Augmentation & Technical Staffing',
    percentage: 89,
    detail: 'Flexible on-demand deployment of software engineers and ERP implementation teams'
  },
  {
    label: 'TeleSales Support & Revenue Acceleration',
    percentage: 94,
    detail: 'Dedicated outbound/inbound lead conversion, renewal tracking & CRM pipeline management'
  }
];

export const FAQ_ITEMS = [
  {
    id: 'faq-01',
    question: 'Can Lifeart Group customize an ERP system to match our exact workflow?',
    answer: 'Yes. While we maintain 12 proven industry cores—spanning Hospitals, Schools, Production Plants, Boutiques, Hotels, and Retail Shops—every deployment begins with a diagnostic blueprint. We customize modules, approval hierarchies, invoice templates, and hardware integrations (barcode scanners, POS printers, biometric devices) around your exact operational rules.'
  },
  {
    id: 'faq-02',
    question: 'How long does it take to migrate our legacy data and train our staff?',
    answer: 'Standard single-site implementations (such as Boutique, Clinic, Salon, or Retail Shop ERP) go live within 7 to 14 business days, including master data import and hands-on staff training. Multi-department Hospital, School, or Manufacturing Production ERP rollouts typically follow a phased 3 to 6 week parallel-run schedule to guarantee zero operational downtime.'
  },
  {
    id: 'faq-03',
    question: 'How does your Resource Augmentation model work for growing businesses?',
    answer: 'Our Resource Augmentation service allows you to onboard vetted software developers, ERP administrators, and business analysts on flexible monthly or project-based contracts. You gain immediate execution capacity without recruitment delays or long-term payroll liabilities.'
  },
  {
    id: 'faq-04',
    question: 'Can we combine TeleSales Support with our CRM or ERP software?',
    answer: 'Absolutely. Our TeleSales Support desk integrates directly with your lead pipeline, clinic/salon appointment book, or insurance renewal registry—handling outbound lead qualification, appointment confirmations, and renewal follow-ups with full call-disposition reporting.'
  },
  {
    id: 'faq-05',
    question: 'What kind of post-deployment support and SLA coverage do you provide?',
    answer: 'Every Lifeart Group software deployment and consultancy engagement is backed by our Trivandrum technical desk (Monday – Saturday, 09:30 – 18:30 IST, with 24/7 critical server monitoring), covering routine backups, statutory GST/compliance updates, and staff refresher training.'
  }
];

export const PROJECTS = [
  {
    slug: 'apex-industrial-production-erp',
    number: '01',
    title: 'Manufacturing ERP & Real-Time Shopfloor Digitization',
    clientLabel: 'Precision Manufacturing & Engineering Corp',
    category: 'Production Management System',
    summary: 'Turnkey deployment of an end-to-end Production Management System covering 6 manufacturing lines, multi-level BOM, and live raw material tracking.',
    challenge: 'Paper job cards and delayed inventory reconciliations led to frequent production halts, high scrap rates, and 9-day billing turnaround.',
    approach: 'Implemented Lifeart Production Management System with automated work orders, QR-code material tracking, and machine utilization dashboards.',
    deliverables: [
      'Real-Time Shop-Floor Production Dashboard',
      'QR Code Raw Material Inventory Engine',
      'Automated Inspection & Quality Rejection Logging',
      'Executive P&L and Margin Telemetry'
    ],
    outcome: 'Eliminated production bottlenecks, reducing manufacturing lead time by 34% and cutting scrap rate by 22%.',
    published: true,
    coverImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80'
  },
  {
    slug: 'medicare-hospital-administration-suite',
    number: '02',
    title: 'Multi-Specialty Hospital & Clinic Management Overhaul',
    clientLabel: '200-Bed Multi-Specialty Hospital Network',
    category: 'Hospital Management System',
    summary: 'Consolidation of OPD, IPD, diagnostic lab billing, and pharmacy management into a synchronized cloud administration platform.',
    challenge: 'Disconnected legacy software caused 45-minute patient discharge delays, lost pharmacy billing, and fragmented doctor consult schedules.',
    approach: 'Deployed Lifeart Hospital Management System with unified patient IDs, barcode medication verification, and direct insurance claims tracking.',
    deliverables: [
      'Electronic Patient Records & Admission Management',
      'Integrated In-House Pharmacy POS & Reorder Engine',
      'Diagnostic Laboratory Automation Module',
      'Statutory Healthcare Compliance & Doctor Schedules'
    ],
    outcome: 'Reduced patient discharge time from 45 minutes to under 8 minutes with 100% medication reconciliation accuracy.',
    published: true,
    coverImage: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80'
  },
  {
    slug: 'elite-chain-retail-boutique-pos',
    number: '03',
    title: 'Omnichannel Boutique, Salon & Retail ERP Sync',
    clientLabel: 'Luxury Retail & Salon Chain (12 Branches)',
    category: 'Boutique & Salon ERP',
    summary: 'Cloud POS deployment synchronizing appointment booking, multi-store variant inventory, and membership loyalty across 12 outlets.',
    challenge: 'Manual appointment booking led to double-bookings, while lack of inter-branch inventory visibility prevented timely stock transfers.',
    approach: 'Rolled out Lifeart Boutique & Salon Management System with live appointment calendar sync, smart reordering, and unified customer profiles.',
    deliverables: [
      'Multi-Outlet Cloud Point-of-Sale (POS)',
      'Automated Appointment Booking & SMS Reminders',
      'Centralized Warehouse & Branch Stock Rebalancing',
      'Customer VIP Loyalty & Lifetime Value Analytics'
    ],
    outcome: 'Grew repeat customer visits by 41% while zeroing booking scheduling conflicts across all 12 locations.',
    published: true,
    coverImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80'
  }
];

export const APPROACH_STEPS = [
  {
    step: '01',
    title: 'Diagnostic & Requirement Blueprinting',
    description: 'We analyze your current business workflows, document operational bottlenecks, and blueprint customized ERP software architecture tailored to your industry.'
  },
  {
    step: '02',
    title: 'Tailored Software Configuration',
    description: 'Configuring custom modules, master data schemas, user authorization roles, and hardware integrations (POS printers, barcode scanners, lab equipment).'
  },
  {
    step: '03',
    title: 'Live Implementation & Staff Training',
    description: 'Onsite & remote deployment with hands-on staff onboarding, legacy data migration, and zero-downtime parallel testing to ensure smooth transition.'
  },
  {
    step: '04',
    title: 'Continuous Optimization & SLA Support',
    description: 'Dedicated technical desk providing 24/7 server uptime monitoring, scheduled security updates, resource augmentation, and continuous business support.'
  }
];

export const DIFFERENTIATORS = [
  {
    num: '01',
    heading: '12 Domain-Specialized ERP Cores',
    text: 'Purpose-built systems for schools, hospitals, clinics, manufacturing, boutiques, salons, hotels, restaurants, insurance, contracting, service centres, and shops.'
  },
  {
    num: '02',
    heading: 'End-to-End Delivery & Support',
    text: 'From software configuration and legacy data migration to staff training and continuous SLA support, our Trivandrum desk manages everything.'
  },
  {
    num: '03',
    heading: 'Consultancy, Talent & TeleSales',
    text: 'Beyond software, we provide Software & Service Consultancy, flexible Resource Augmentation, and dedicated TeleSales Support to drive top-line growth.'
  },
  {
    num: '04',
    heading: 'Modular & Highly Scalable',
    text: 'Start with core billing, appointment, or inventory modules and seamlessly expand to multi-branch enterprise ERP as your organization scales.'
  }
];
