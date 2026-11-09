export const projects = [
  // =========================================================
  // 01. COMMERCIAL ENTERPRISE CRM
  // =========================================================
  {
    slug: "commercial-enterprise-crm",

    title: "Commercial Enterprise CRM",
    shortTitle: "Enterprise CRM",

    category: "Company Production",
    company: "Educerns Technologies Pvt Ltd",
    period: "2025 — Present",

    featured: true,

    priority: 1,

    ownership: "primary",
    ownershipLabel: "Frontend Owned",

    privateProject: true,

    image: "/CRM-Img/login.png",

    summary:
      "A large-scale production CRM covering master data, leads, GST, quotations, sales workflows, inventory and business reporting.",

    description:
      "I handled the frontend across the CRM as a complete product rather than working on one isolated feature. My responsibility covered reusable architecture, data-heavy forms, business workflows, API integrations, validation, GST calculations, reports and continuous production improvements.",

    role: "Frontend Developer — Primary Frontend Ownership",

    tech: [
      "React.js",
      "TypeScript",
      "Redux Toolkit",
      "React Hook Form",
      "Tailwind CSS",
      "REST APIs",
      "SheetJS",
    ],

    highlights: [
      "Owned master-data interfaces for stock, vendors, customers and ledgers.",
      "Built lead pipeline tracking, activity logs and follow-up workflows.",
      "Delivered quotation and sales-order flows with dynamic line items.",
      "Implemented frontend GST workflows for CGST, SGST and IGST scenarios.",
      "Added print-ready PDF experiences and Excel export for operational reports.",
      "Improved data-heavy list rendering with server-side pagination and filtering.",
    ],

    challenge:
      "The CRM combines large datasets, financial workflows and highly reusable operational modules while continuing to evolve as a production product.",

    solution:
      "I structured the frontend around reusable forms, shared tables, validation utilities and predictable API-driven workflows so new requirements could be shipped without destabilizing existing modules.",

    impact:
      "Reduced manual calculation and reporting effort, improved operational visibility and reduced rendering lag on data-heavy screens by about 25%.",

    screenshots: [
      "/projects/crm.svg",
      "/projects/crm-detail.svg",
    ],

    liveUrl: null,
  },

  // =========================================================
  // 02. EDUHR
  // =========================================================
  {
    slug: "eduhr-platform",

    title: "EduHR — HR & Employee Platform",
    shortTitle: "EduHR",

    category: "Company Production",
    company: "Educerns Technologies Pvt Ltd",
    period: "2025 — Present",

    featured: true,

    priority: 2,

    ownership: "primary",
    ownershipLabel: "Frontend Owned",

    privateProject: true,

    image: "/EduHR-Img/login.png",

    summary:
      "An HR and employee management product covering onboarding, attendance, dashboards, permissions and daily HR operations.",

    description:
      "I handled major frontend responsibility across EduHR, including onboarding workflows, attendance, dashboards, reusable UI components and permission-aware interfaces. The product required scalable architecture because several employee roles interact with different parts of the system.",

    role: "Frontend Developer — Primary Frontend Ownership",

    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Custom Hooks",
      "RBAC",
      "SSR/SSG",
    ],

    highlights: [
      "Built employee onboarding and attendance modules.",
      "Implemented custom-hook-based role and permission handling.",
      "Created shared UI components to keep product patterns consistent.",
      "Worked on SSR/SSG migration and frontend performance improvements.",
      "Built permission-aware interfaces for different employee roles.",
    ],

    challenge:
      "Different user roles needed different navigation, actions and visibility rules without duplicating the frontend architecture.",

    solution:
      "I centralized permission checks inside reusable hooks and composed screens from shared components so role-specific changes could be handled without maintaining separate interfaces.",

    impact:
      "Improved initial loading and SEO while helping reduce task-completion time by roughly 30% for important workflows.",

    screenshots: [
      "/projects/eduhr.svg",
      "/projects/eduhr-detail.svg",
    ],

    liveUrl: null,
  },

  // =========================================================
  // 03. ANS TRACKNOLOGY
  // =========================================================
  {
    slug: "ans-tracknology-shopify",

    title: "ANS Tracknology — E-Commerce Storefront",
    shortTitle: "ANS Tracknology",

    category: "Live E-Commerce",
    company: "ANS Tracknology",
    period: "Production",

    featured: true,

    priority: 3,

    ownership: "primary",
    ownershipLabel: "Frontend Owned",

    privateProject: false,

    image: "/AnsTrack-Img/home.png",

    summary:
      "A fully custom Shopify storefront for GPS tracking products, designed and developed without using a third-party marketplace theme.",

    description:
      "I handled the storefront frontend from the ground up, including custom Shopify Liquid sections, product and collection templates, responsive layouts, cart behaviour and performance optimization.",

    role: "Frontend / Shopify Developer — End-to-End Storefront",

    tech: [
      "Shopify",
      "Liquid",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Responsive Design",
    ],

    highlights: [
      "Built a custom Shopify theme from scratch.",
      "Created custom product and collection templates.",
      "Implemented a dynamic cart drawer.",
      "Built checkout-ready storefront experiences.",
      "Created hero video, featured product, testimonial and trust sections.",
      "Optimized Liquid and JavaScript for performance and Core Web Vitals.",
    ],

    challenge:
      "The storefront needed its own visual identity and commerce experience without depending on an existing Shopify marketplace theme.",

    solution:
      "I created reusable Liquid sections and responsive storefront components while keeping interactions lightweight and tailored to the product catalog.",

    impact:
      "Delivered a live custom storefront with responsive commerce experiences and optimized frontend performance.",

    screenshots: [
      "/projects/shopify.svg",
      "/projects/shopify-detail.svg",
    ],

    liveUrl: "https://buy.anstracknology.com/",
  },

  // =========================================================
  // 04. CODING LAB
  // =========================================================
  {
    slug: "coding-lab",

    title: "Coding Lab",
    shortTitle: "Coding Lab",

    category: "Company Production",
    company: "Educerns Technologies Pvt Ltd",
    period: "Production",

    featured: true,

    priority: 4,

    ownership: "primary",
    ownershipLabel: "Frontend Owned",

    privateProject: true,

    // Replace later with:
    // /projects/codinglab.png
    image: "/workspace-placeholder.svg",

    summary:
      "A production product where I independently handled frontend development while simultaneously working across other active products.",

    description:
      "Coding Lab is one of the products where I handled frontend responsibility directly. The work was managed alongside other production priorities, requiring continuous context switching while keeping delivery and interface quality consistent.",

    role: "Frontend Developer — Primary Frontend Ownership",

    tech: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "REST APIs",
      "Responsive UI",
    ],

    highlights: [
      "Handled the frontend implementation and ongoing product work.",
      "Managed the product while parallel development priorities were active.",
      "Maintained responsive and reusable frontend patterns.",
      "Worked directly on production requirements and iterative improvements.",
    ],

    challenge:
      "The main challenge was maintaining product delivery while simultaneously handling other active frontend responsibilities in a fast-moving startup environment.",

    solution:
      "I kept components reusable and workflows structured so product changes could be delivered quickly without unnecessarily increasing frontend complexity.",

    impact:
      "Maintained continuous frontend delivery while managing multiple product responsibilities in parallel.",

    screenshots: [
      "/workspace-placeholder.svg",
    ],

    liveUrl: null,
  },

  // =========================================================
  // 05. CODE TRAINERS
  // =========================================================
  {
    slug: "code-trainers",

    title: "Code Trainers",
    shortTitle: "Code Trainers",

    category: "Company Production",
    company: "Educerns Technologies Pvt Ltd",
    period: "Production",

    featured: true,

    priority: 5,

    ownership: "primary",
    ownershipLabel: "Frontend Owned",

    privateProject: true,

    // Replace later with:
    // /projects/codetrainers.png
    image: "/workspace-placeholder.svg",

    summary:
      "A production platform where I handled frontend development while continuing to support other active products and releases.",

    description:
      "I handled frontend responsibility for Code Trainers as part of a multi-product startup environment. Instead of focusing on only one application, I regularly moved between active products depending on delivery priorities.",

    role: "Frontend Developer — Primary Frontend Ownership",

    tech: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "REST APIs",
      "Responsive UI",
    ],

    highlights: [
      "Handled frontend implementation and production changes.",
      "Managed frontend responsibilities alongside other active products.",
      "Maintained reusable interface patterns.",
      "Worked on continuous UI improvements based on product requirements.",
    ],

    challenge:
      "The product needed ongoing development while several other applications were also moving through active development cycles.",

    solution:
      "I maintained reusable frontend patterns and prioritized implementation based on production requirements, allowing me to move between products efficiently.",

    impact:
      "Enabled consistent product delivery while working across multiple frontend responsibilities at the same time.",

    screenshots: [
      "/workspace-placeholder.svg",
    ],

    liveUrl: null,
  },

  // =========================================================
  // 06. ALLCOACHING
  // =========================================================
  {
    slug: "allcoaching",

    title: "AllCoaching — Multi-Institute Education Platform",
    shortTitle: "AllCoaching",

    category: "Commercial Product",
    company: "AllCoaching",
    period: "Jan 2024 — Present",

    featured: true,

    priority: 6,

    ownership: "primary",
    ownershipLabel: "Frontend Owned",

    privateProject: true,

    image: "/projects/eduplatform.svg",

    summary:
      "A multi-institute education platform supporting courses, teacher content, notes distribution and role-based learning experiences.",

    description:
      "I have handled frontend development for AllCoaching while continuously delivering features for active institutes, teachers and students. The platform supports multiple institutes and several user roles through shared frontend modules.",

    role: "Frontend Developer — Primary Frontend Ownership",

    tech: [
      "React.js",
      "TypeScript",
      "REST APIs",
      "RBAC",
      "Tailwind CSS",
    ],

    highlights: [
      "Built course and content management workflows.",
      "Created teacher-facing content and notes distribution interfaces.",
      "Implemented multi-tier role-based UI access.",
      "Maintained continuous feature delivery for active institutes.",
      "Built reusable modules that could work across multiple institutes.",
    ],

    challenge:
      "The platform supports multiple institutes and user roles while continuously evolving for active students and teachers.",

    solution:
      "I structured shared frontend modules around reusable features and role-aware interfaces so the same product architecture could scale across multiple institutes.",

    impact:
      "The platform supports active usage across multiple institutes while continuing to receive production updates and new features.",

    screenshots: [
      "/projects/eduplatform.svg",
      "/projects/eduplatform-detail.svg",
    ],

    liveUrl: null,
  },

  // =========================================================
  // ADDITIONAL PRODUCT CONTRIBUTIONS
  // =========================================================

  // =========================================================
  // EDUSKILL
  // =========================================================
  {
    slug: "eduskill-certify",

    title: "EduSkill — Certification Platform",
    shortTitle: "EduSkill",

    category: "Company Production",
    company: "Educerns Technologies Pvt Ltd",
    period: "2025 — Present",

    featured: false,

    priority: 20,

    ownership: "contribution",
    ownershipLabel: "Product Contribution",

    privateProject: true,

    image: "/projects/eduskill.svg",

    summary:
      "Certification and learning workflows with permission-gated content, student/faculty portals and production UI improvements.",

    description:
      "I contribute to EduSkill whenever frontend requirements need additional development support, including learning experiences, permission-aware modules and production UI workflows.",

    role: "Frontend Developer — Product Contributor",

    tech: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "REST APIs",
    ],

    highlights: [
      "Built permission-gated video streaming UI.",
      "Worked on student and faculty portal experiences.",
      "Improved responsive behavior and shared interface patterns.",
      "Shipped production changes with zero layout regressions in key releases.",
    ],

    challenge:
      "The product serves different learning roles with different permissions while receiving frequent feature updates.",

    solution:
      "I used reusable components and permission-aware patterns so new functionality could be added without creating unnecessary parallel interfaces.",

    impact:
      "Improved consistency and maintainability across learning and certification workflows.",

    screenshots: [
      "/projects/eduskill.svg",
    ],

    liveUrl: null,
  },

  // =========================================================
  // EDUTAX
  // =========================================================
  {
    slug: "edutax-gst-simulation",

    title: "EduTax — GST Simulation Platform",
    shortTitle: "EduTax",

    category: "Company Production",
    company: "Educerns Technologies Pvt Ltd",
    period: "2025 — Present",

    featured: false,

    priority: 21,

    ownership: "contribution",
    ownershipLabel: "Product Contribution",

    privateProject: true,

    image: "/projects/edutax.svg",

    summary:
      "A GST learning and simulation product where I contributed to API workflows, submissions and performance-sensitive frontend behaviour.",

    description:
      "I contributed to frontend API workflows and simulation-oriented flows requiring reliable server-state handling, predictable loading behaviour and accurate submissions.",

    role: "Frontend Developer — Product Contributor",

    tech: [
      "React.js",
      "TanStack Query",
      "Tailwind CSS",
      "REST APIs",
    ],

    highlights: [
      "Reworked API workflows around TanStack Query.",
      "Reduced redundant network calls.",
      "Improved submission accuracy.",
      "Improved loading and error states.",
      "Contributed to frontend performance improvements.",
    ],

    challenge:
      "Simulation workflows contain sequential steps and API-dependent states where duplicated or stale requests can create inconsistent behaviour.",

    solution:
      "I reorganized server-state handling with TanStack Query and made invalidation, loading and error states more explicit.",

    impact:
      "Cleaner request flows, fewer unnecessary network calls and more reliable user submissions.",

    screenshots: [
      "/projects/edutax.svg",
    ],

    liveUrl: null,
  },

  // =========================================================
  // TYPING MITRA
  // =========================================================
  {
    slug: "typing-mitra",

    title: "Typing Mitra",
    shortTitle: "Typing Mitra",

    category: "Collaboration",
    company: "Collaborative Product",
    period: "Aug 2024 — Present",

    featured: false,

    priority: 22,

    ownership: "contribution",
    ownershipLabel: "Product Contribution",

    privateProject: true,

    image: "/projects/typing.svg",

    summary:
      "Browser-based learning and practice tooling with real-time input tracking and dynamic interface updates.",

    description:
      "I contributed frontend development and component-level improvements to a browser-based practice platform whenever additional development support was required.",

    role: "Frontend Developer — Product Contributor",

    tech: [
      "React.js",
      "TypeScript",
      "Responsive UI",
    ],

    highlights: [
      "Worked on real-time input tracking interfaces.",
      "Resolved component-level bugs.",
      "Improved responsive layout consistency.",
    ],

    challenge:
      "Real-time practice experiences need fast visual feedback and stable component behaviour while users are actively typing.",

    solution:
      "I focused on predictable state updates, component cleanup and responsive consistency.",

    impact:
      "Improved usability and interface consistency across active practice flows.",

    screenshots: [
      "/projects/typing.svg",
    ],

    liveUrl: null,
  },

  // =========================================================
  // TALLY SIMULATION
  // =========================================================
  {
    slug: "tally-simulation",

    title: "Tally Simulation Platform",
    shortTitle: "Tally Simulation",

    category: "Collaboration",
    company: "Collaborative Product",
    period: "Aug 2024 — Present",

    featured: false,

    priority: 23,

    ownership: "contribution",
    ownershipLabel: "Product Contribution",

    privateProject: true,

    image: "/projects/tally.svg",

    summary:
      "A browser-based simulation product with dynamic data mapping and workflow-oriented frontend interfaces.",

    description:
      "I contributed frontend modules, bug fixes and interface improvements to the simulation platform whenever product requirements needed additional frontend support.",

    role: "Frontend Developer — Product Contributor",

    tech: [
      "React.js",
      "TypeScript",
      "REST APIs",
    ],

    highlights: [
      "Contributed to dynamic data-mapping flows.",
      "Resolved frontend and component-level issues.",
      "Improved responsive layout consistency.",
    ],

    challenge:
      "Simulation products need frontend behaviour that closely mirrors real workflows while remaining stable in the browser.",

    solution:
      "I worked on component behaviour and interface consistency so individual simulation steps stayed predictable and easy to follow.",

    impact:
      "Improved frontend stability and consistency across simulation workflows.",

    screenshots: [
      "/projects/tally.svg",
    ],

    liveUrl: null,
  },


];


// =========================================================
// PRIMARY / OWNED PRODUCTS
// =========================================================

export const primaryProjects = projects
  .filter((project) => project.ownership === "primary")
  .sort(
    (a, b) =>
      (a.priority || 999) - (b.priority || 999)
  );


// =========================================================
// PRODUCT CONTRIBUTIONS
// =========================================================

export const contributionProjects = projects
  .filter((project) => project.ownership === "contribution")
  .sort(
    (a, b) =>
      (a.priority || 999) - (b.priority || 999)
  );


// =========================================================
// SHOWCASE PROJECTS
// =========================================================

export const showcaseProjects = projects
  .filter((project) => project.ownership === "showcase")
  .sort(
    (a, b) =>
      (a.priority || 999) - (b.priority || 999)
  );


// =========================================================
// HOME PAGE FEATURED PROJECTS
// =========================================================

export const featuredProjects = primaryProjects.filter(
  (project) => project.featured
);


// =========================================================
// GET SINGLE PROJECT
// =========================================================

export function getProjectBySlug(slug) {
  return projects.find(
    (project) => project.slug === slug
  );
}