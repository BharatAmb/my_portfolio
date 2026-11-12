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
      "A multi-company enterprise CRM with white-label environments, employee role permissions, sales, purchases, inventory, reporting, approvals, activity tracking and centralized Super Admin monitoring.",

    description:
      "A production CRM designed for multiple independent businesses rather than a single administrator. Each admin can operate a separate company environment, configure company-specific branding, manage employees and run day-to-day business operations through permission-controlled workflows. I handled frontend ownership across the product, including reusable architecture, operational modules, business forms, reports, document generation and continuous production improvements.",

    role: "Frontend Developer — Primary Frontend Ownership",

    tech: [
      "React.js",
      "TypeScript",
      "React Hook Form",
      "Tailwind CSS",
      "REST APIs",
    ],

    highlights: [
      "Handled frontend ownership across the complete CRM product.",
      "Built multi-company and multi-admin frontend workflows.",
      "Implemented white-label company experiences.",
      "Built permission-driven employee interfaces.",
      "Created parties, vendors, clients and stock management workflows.",
      "Developed sales and purchase workflows.",
      "Built quotation and proforma business document flows.",
      "Implemented approval and rejection based operational workflows.",
      "Built day-wise employee activity tracking interfaces.",
      "Added Excel exports and bulk upload workflows.",
      "Created PDF-ready quotation and sales document experiences.",
      "Built Super Admin visibility across different company environments.",
    ],

    challenge:
      "The CRM needed to support multiple independent companies, large operational datasets, employee permissions and connected financial and business workflows without making the frontend difficult to maintain.",

    solution:
      "I structured the frontend around reusable forms, tables, permission-aware components, shared validation, reusable business utilities and predictable API-driven workflows. This allowed multiple company environments and employee roles to reuse the same frontend architecture without duplicating entire modules.",

    impact:
      "The CRM gives businesses a centralized operational platform for managing customers, vendors, employees, inventory, sales, purchases, documents, reports and employee activity while providing Super Admins centralized visibility across company environments.",

    details: {
      eyebrow: "Enterprise CRM Case Study",

      heading:
        "A multi-company CRM built around business operations, permissions, security and accountability.",

      overview:
        "The Commercial Enterprise CRM is not designed around one fixed administrator or one company. Multiple admins can operate independent company environments, configure their company identity and manage their own employees through controlled access. Each organization can use the CRM for day-to-day operations including parties, vendors, clients, inventory, quotations, proforma documents, purchases, sales and reporting.",

      secondOverview:
        "Access control is a major part of the product. Employees do not receive unrestricted CRM access. Their visible modules and available actions depend on assigned roles and permissions. Important business actions can move through approval and rejection stages, while employee activity is tracked so administrators can review operational actions day by day.",

      architecturePoints: [
        {
          title: "Multi-Admin Environment",
          description:
            "Multiple businesses can operate independently on the same CRM product while maintaining their own employees, data and workflows.",
        },
        {
          title: "White-Label Companies",
          description:
            "Company environments can use organization-specific identity and branding instead of presenting every business with the same fixed experience.",
        },
        {
          title: "Controlled Login Access",
          description:
            "Company access uses controlled company-specific login experiences instead of depending only on a predictable generic login URL.",
        },
        {
          title: "Employee Role System",
          description:
            "Employees only receive modules, information and actions relevant to the permissions assigned to their role.",
        },
      ],

      capabilities: [
        {
          title: "Parties & Clients",
          description:
            "Manage parties, customers and client information through reusable master-data workflows.",
        },
        {
          title: "Vendor Management",
          description:
            "Maintain vendor records and connect them with purchasing and operational workflows.",
        },
        {
          title: "Stock & Inventory",
          description:
            "Manage stock-related information and connect inventory with sales and purchases.",
        },
        {
          title: "Sales",
          description:
            "Handle sales workflows using structured line items, status management and document generation.",
        },
        {
          title: "Purchases",
          description:
            "Manage purchasing workflows connected with vendors, inventory and other business records.",
        },
        {
          title: "Quotations",
          description:
            "Create detailed quotations and produce professional PDF-ready documents.",
        },
        {
          title: "Proforma Documents",
          description:
            "Support proforma-based business workflows before final transaction processing.",
        },
        {
          title: "Approval Workflows",
          description:
            "Important employee actions can move through approval and rejection states based on business rules.",
        },
        {
          title: "Bulk Upload",
          description:
            "Bulk upload workflows allow large datasets to be introduced without manually creating every record.",
        },
        {
          title: "Excel Reporting",
          description:
            "Operational reports can be exported to Excel for further business analysis.",
        },
        {
          title: "PDF Documents",
          description:
            "Structured documents such as quotations and sales records can be prepared as professional PDFs.",
        },
        {
          title: "Employee Tracking",
          description:
            "Admins can review employee activity day by day to understand actions performed inside the CRM.",
        },
      ],

      permissionPoints: [
        "Permission-driven module visibility",
        "Employee role-based actions",
        "Approval and rejection workflows",
        "Company-specific access control",
        "Admin and employee separation",
        "Day-wise employee activity tracking",
        "Restricted operational actions",
        "Super Admin level visibility",
      ],

      superAdminPoints: [
        "Monitor activity across multiple company admins.",
        "View operational information for different admin environments.",
        "Enter an admin CRM when administrative supervision is required.",
        "Maintain centralized visibility without removing company-level separation.",
        "Track important actions for security and accountability.",
      ],

      frontendOwnership: [
        "Frontend architecture and reusable component structure",
        "Complex business forms and validation",
        "Permission-aware UI rendering",
        "Role-based navigation and actions",
        "Reusable tables, filters and pagination",
        "API integration across operational modules",
        "Large dataset handling",
        "Excel import and export workflows",
        "Business document and PDF interfaces",
        "Responsive CRM screens",
        "Loading, error and empty states",
        "Continuous production delivery",
      ],

      reportingPoints: [
        "Operational reports",
        "Excel exports",
        "Bulk data upload",
        "Quotation PDFs",
        "Sales document PDFs",
        "Employee activity reports",
        "Approval status visibility",
        "Business transaction reporting",
      ],

      projectStory: {
        planning:
          "Before implementation, I broke the CRM into business domains, users, permissions and operational modules instead of starting directly from individual screens. I used AI as a planning and research assistant to explore possible structures, edge cases, module relationships and user flows, then validated those ideas against the actual company requirements before implementation.",

        difficulty:
          "The difficult part was not creating individual forms. It was understanding how customers, vendors, stock, employees, permissions, quotations, purchases, sales, reports and approvals should work together without making every module tightly coupled.",

        learning:
          "This project significantly improved my understanding of enterprise frontend architecture. I learned to think beyond UI screens and understand the business process behind every action, how permissions change the same interface for different users and how reusable architecture becomes important as a product grows.",

        humanSide:
          "Working on the CRM made me think more about how people actually use software during their workday. A technically correct interface is not enough if employees repeatedly perform the same action or managers cannot quickly understand important information. This pushed me toward reducing unnecessary steps, improving information hierarchy and keeping frequent workflows predictable.",

        aiSupport:
          "I used AI mainly during research and planning: mapping modules, questioning missing flows, considering edge cases, structuring feature requirements and comparing possible frontend approaches. It helped me explore faster, while final product decisions were based on actual business requirements and production behavior.",

        growth:
          "The project changed how I approach large applications. Instead of immediately thinking about components, I now first understand actors, permissions, data relationships, business states and the complete user journey.",
      },
    },

    screenshots: [
      "/CRM-Img/login.png",
      "/CRM-Img/access-denied.png",
      "/CRM-Img/Dashboard.png",
      "/CRM-Img/quotation.png",
      "/CRM-Img/quotation-2.png",
      "/CRM-Img/quotation-3.png",
    ],

    liveUrl: null,
  },

  // =========================================================
  // 02. EDUHR
  // =========================================================
  {
    slug: "eduhr-platform",
    title: "EduHR — Employee Management Platform",
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
      "An internal employee-management platform covering attendance, login/logout monitoring, leaves, EOD updates, meetings, tasks, expenses, grievances, permissions and management reporting.",

    description:
      "EduHR is an internal company employee-management product designed to centralize everyday employee operations and management visibility. Employees use the platform for attendance, login and logout records, leaves, EOD updates, meetings, tasks, expenses and grievances, while managers use structured reports to understand work activity and operational data. Access across the product is controlled through employee roles and permissions.",

    role: "Frontend Developer — Primary Frontend Ownership",

    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Custom Hooks",
      "REST APIs",
      "RBAC",
    ],

    highlights: [
      "Built login, logout and attendance monitoring interfaces.",
      "Worked on employee leave-management workflows.",
      "Developed EOD reporting and daily work-update interfaces.",
      "Built meeting-related workflows.",
      "Created employee task-management experiences.",
      "Worked on expense submission and tracking.",
      "Built grievance submission and management interfaces.",
      "Implemented permission-based module visibility.",
      "Built management-oriented reporting experiences.",
      "Created reusable components used across employee modules.",
      "Maintained responsive behavior across employee and management interfaces.",
    ],

    challenge:
      "Different employee roles required different modules, actions and visibility while managers still needed a centralized view of employee activity and operational data.",

    solution:
      "I organized the frontend around reusable employee modules, shared components and centralized permission-aware patterns so role differences could be handled without building separate applications for each employee type.",

    impact:
      "EduHR centralizes employee operations and provides managers a clearer way to monitor attendance, daily work, requests and other operational data through structured permission-based workflows.",

    details: {
      eyebrow: "Employee Operations Case Study",

      heading:
        "A centralized internal platform for employee operations, monitoring and permission-based access.",

      overview:
        "EduHR was created to bring daily company employee operations into one structured system. Instead of managing attendance, work updates, leaves, meetings, tasks, expenses and employee requests across disconnected tools, employees can use one platform for their regular internal workflows.",

      secondOverview:
        "Managers can review relevant employee activity and reports while employees only see the modules and actions authorized for their role. This makes permissions a core part of the product rather than an additional feature.",

      architecturePoints: [
        {
          title: "Employee Operations",
          description:
            "Daily employee workflows including attendance, tasks, meetings, leaves and EOD updates are available through one internal platform.",
        },
        {
          title: "Manager Monitoring",
          description:
            "Management can review relevant employee activity and operational information without depending on separate tools.",
        },
        {
          title: "Permission-Based Access",
          description:
            "Employees only receive modules, actions and information allowed for their assigned role.",
        },
        {
          title: "Operational Reporting",
          description:
            "Structured reports provide management visibility into attendance, activities and employee-related operational data.",
        },
      ],

      capabilities: [
        {
          title: "Login & Logout",
          description:
            "Track employee login and logout activity as part of daily work monitoring.",
        },
        {
          title: "Attendance",
          description:
            "Manage employee attendance and daily attendance-related information.",
        },
        {
          title: "Leave Management",
          description:
            "Employees can create and manage leave-related requests through structured workflows.",
        },
        {
          title: "EOD Updates",
          description:
            "Employees can submit end-of-day updates so management can understand daily work progress.",
        },
        {
          title: "Meetings",
          description:
            "Manage meeting-related information and employee participation.",
        },
        {
          title: "Tasks",
          description:
            "Track employee tasks and work-related activity.",
        },
        {
          title: "Expenses",
          description:
            "Employees can submit work-related expenses for organizational tracking.",
        },
        {
          title: "Grievances",
          description:
            "Employees can raise grievances through a structured internal workflow.",
        },
        {
          title: "Reports",
          description:
            "Management can use reports to understand employee attendance, activity and related operational information.",
        },
      ],

      permissionPoints: [
        "Role-based module visibility",
        "Permission-based employee actions",
        "Manager-level monitoring access",
        "Restricted employee information",
        "Controlled HR workflows",
        "Permission-aware navigation",
        "Employee-specific access",
        "Management reporting access",
      ],

      reportingPoints: [
        "Attendance information",
        "Login and logout activity",
        "Employee activity visibility",
        "EOD updates",
        "Task information",
        "Leave information",
        "Expense information",
        "Management reports",
      ],

      frontendOwnership: [
        "Reusable frontend architecture",
        "Employee workflow interfaces",
        "Permission-aware UI rendering",
        "Attendance interfaces",
        "Leave workflows",
        "EOD submission experiences",
        "Task-management UI",
        "Meeting workflows",
        "Expense interfaces",
        "Grievance interfaces",
        "Management reports",
        "Responsive production UI",
      ],

      projectStory: {
        planning:
          "I first broke the HR platform into employee activities, management activities, permissions and reporting needs. AI helped me organize initial flows, identify relationships between modules and think through different employee scenarios before implementation.",

        difficulty:
          "The challenge was that the same application behaves differently depending on the employee. One employee may be allowed to perform an action while another should not even see that option. Maintaining that behavior consistently across many modules required disciplined permission handling.",

        learning:
          "EduHR improved my understanding of role-based application design and internal company workflows. I learned how much employee-facing products depend on clarity, predictable actions and information visibility rather than only visual design.",

        humanSide:
          "Employee software is used repeatedly every day, so even small usability problems can become frustrating. This project taught me to pay attention to repetitive actions, understandable status indicators and simple flows for activities employees perform frequently.",

        aiSupport:
          "I used AI during planning to organize modules, explore employee and manager flows, review edge cases and think through permission scenarios. It was especially useful for challenging whether a workflow was missing a state or user action before I started implementing it.",

        growth:
          "Compared with earlier projects, I became more systematic about thinking through users and permissions before writing components. That reduced unnecessary rework when new employee roles or requirements appeared.",
      },
    },

    screenshots: [
      "/EduHR-Img/login.png",
    ],

    liveUrl: null,
  },

  // =========================================================
  // 03. ANS TRACKNOLOGY — SHOPIFY
  // =========================================================
  {
    slug: "ans-tracknology-shopify",
    title: "ANS Tracknology — Custom Shopify Storefront",
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
      "A custom Shopify e-commerce storefront for GPS tracking products, built by moving beyond standard free themes and creating a custom Liquid theme with payments, ratings and reviews.",

    description:
      "ANS Tracknology needed an e-commerce store for selling GPS tracking products. I initially explored Shopify's free themes, but they did not provide the visual quality or flexibility I wanted for the product. After researching Shopify theme development, I learned how custom themes could be created through code and converted into Shopify Liquid structures. I built a custom theme named Glamorous Moment and integrated commerce features including payments, ratings and reviews.",

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
      "Set up the e-commerce storefront for a GPS tracking company.",
      "Started by exploring Shopify free themes and identified their design limitations.",
      "Researched custom Shopify theme development instead of depending on paid themes.",
      "Built the custom Glamorous Moment Shopify theme.",
      "Converted custom frontend ideas into Shopify Liquid sections and templates.",
      "Built product and collection experiences.",
      "Created responsive storefront sections.",
      "Implemented cart-related interactions.",
      "Integrated Razorpay-based payment requirements.",
      "Integrated rating and review functionality available within the Shopify ecosystem.",
      "Optimized storefront interactions and responsive behavior.",
      "Delivered a live production storefront.",
    ],

    challenge:
      "This project pushed me outside my usual React-focused environment. Shopify introduced Liquid, theme architecture, platform conventions and an ecosystem that worked very differently from the frontend applications I had previously built.",

    solution:
      "Instead of accepting the limitations of available free themes or immediately depending on an expensive paid theme, I researched Shopify custom theme development and built the storefront through custom Liquid sections, templates and frontend code.",

    impact:
      "Delivered a custom live e-commerce storefront while expanding my experience beyond React into Shopify, Liquid, commerce integrations and platform-specific frontend development.",

    details: {
      eyebrow: "Shopify Learning & Commerce Case Study",

      heading:
        "Turning an unfamiliar platform into a custom e-commerce experience through research and experimentation.",

      overview:
        "The requirement was to create an e-commerce storefront for ANS Tracknology, a company selling GPS tracking products. Shopify was selected as the commerce platform, which meant I had to work in an ecosystem that was different from the React applications I was already comfortable building.",

      secondOverview:
        "I initially tried available free themes but found them visually limited for the type of storefront I wanted. Premium themes were available, but instead of stopping there I researched whether Shopify allowed custom-coded themes. That exploration introduced me to Liquid and led to the creation of my own custom theme, Glamorous Moment.",

      architecturePoints: [
        {
          title: "Platform Exploration",
          description:
            "I first understood Shopify's theme system, template structure and how data is exposed to Liquid.",
        },
        {
          title: "Custom Theme",
          description:
            "Rather than remaining dependent on a standard free theme, I created a custom storefront theme named Glamorous Moment.",
        },
        {
          title: "Commerce Integrations",
          description:
            "Payments, product ratings and reviews were integrated using capabilities and applications available in the Shopify ecosystem.",
        },
        {
          title: "Responsive Storefront",
          description:
            "The storefront was designed to work consistently across product, collection and responsive shopping experiences.",
        },
      ],

      capabilities: [
        {
          title: "Custom Theme",
          description:
            "A custom Shopify theme built through Liquid, HTML, CSS and JavaScript.",
        },
        {
          title: "Product Pages",
          description:
            "Dedicated product presentation experiences for GPS tracking products.",
        },
        {
          title: "Collections",
          description:
            "Structured collection experiences for browsing related products.",
        },
        {
          title: "Cart Experience",
          description:
            "Shopping interactions connected with Shopify's cart and checkout workflow.",
        },
        {
          title: "Payments",
          description:
            "Payment requirements integrated into the commerce experience.",
        },
        {
          title: "Ratings",
          description:
            "Product rating functionality introduced through Shopify-compatible integrations.",
        },
        {
          title: "Reviews",
          description:
            "Customer review experiences added using tools available inside the Shopify ecosystem.",
        },
        {
          title: "Responsive Design",
          description:
            "Storefront layouts adapted for mobile, tablet and desktop shopping.",
        },
      ],

      learningJourney: [
        "Started with Shopify free themes",
        "Identified visual and flexibility limitations",
        "Explored available premium themes",
        "Researched custom Shopify theme development",
        "Learned Liquid and Shopify theme structure",
        "Created Glamorous Moment",
        "Integrated commerce functionality",
        "Optimized and shipped the live storefront",
      ],

      frontendOwnership: [
        "Storefront planning",
        "Shopify theme research",
        "Custom theme development",
        "Liquid templates and sections",
        "Responsive layouts",
        "Product presentation",
        "Collection experiences",
        "Cart interactions",
        "Payment integration support",
        "Rating integration",
        "Review integration",
        "Production storefront improvements",
      ],

      projectStory: {
        planning:
          "Because Shopify was new to me, I did not begin by immediately modifying theme code. I first used documentation, research and AI to understand Shopify concepts, Liquid structure, sections, templates and the typical e-commerce flow before deciding how to build the custom storefront.",

        difficulty:
          "The biggest difficulty was moving away from the mental model I used in React. I had to understand what Shopify already controls, what Liquid renders on the server side and where JavaScript should be introduced without fighting the platform.",

        learning:
          "This was one of my most valuable learning projects because it proved that my frontend skills were not limited to one framework. I learned Shopify, Liquid, theme development and how a commerce platform connects product data, payments, reviews and customer-facing experiences.",

        humanSide:
          "E-commerce made me think differently about user behavior. Visitors need to understand a product quickly, trust the store and reach important actions without confusion. That influenced how I thought about product presentation, trust sections, ratings, reviews and checkout-related interactions.",

        aiSupport:
          "AI helped me understand unfamiliar Shopify concepts faster, compare implementation options and create learning plans for Liquid and theme architecture. I treated it as a research assistant rather than blindly copying code, because platform-specific behavior still required testing inside Shopify.",

        growth:
          "The project strengthened my confidence in entering unfamiliar technologies. Instead of saying a project was outside my stack, I learned to research the platform, understand its rules and connect my existing frontend knowledge to a completely different ecosystem.",
      },
    },

    screenshots: [
      "/AnsTrack-Img/home.png",
    ],

    liveUrl: "https://buy.anstracknology.com/",
  },

  // =========================================================
  // 04. CODING LAB
  // =========================================================
  {
    slug: "coding-lab",
    title: "Coding Lab — Interactive Coding Learning Platform",
    shortTitle: "Coding Lab",

    category: "Company Production",
    company: "Educerns Technologies Pvt Ltd",
    period: "Production",

    featured: true,
    priority: 4,

    ownership: "primary",
    ownershipLabel: "Frontend Owned",

    privateProject: true,

    image: "/CodingLab-Img/home.png",

    summary:
      "An interactive coding-learning product where students progress from structured courses to practice, games, challenges, projects, simulated work experience and certification while their progress and learning behavior are tracked.",

    description:
      "Coding Lab was designed for students who want to genuinely learn programming instead of only consuming notes and videos. The platform combines structured courses with practice, games, challenges, projects and simulated work experience. Students progress from basic concepts toward practical development while the product tracks activity, course progress and stronger or weaker learning areas.",

    role: "Frontend Developer — Primary Frontend Ownership",

    tech: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "REST APIs",
      "Responsive UI",
    ],

    highlights: [
      "Built frontend experiences for multiple coding courses.",
      "Supported learning paths from beginner to advanced levels.",
      "Worked on HTML, CSS, Java, Python, Full Stack and Web Development learning experiences.",
      "Developed interactive practice experiences.",
      "Worked on coding-game learning sections.",
      "Built challenge-oriented learning experiences.",
      "Created project-based learning workflows.",
      "Built simulated work-experience interfaces.",
      "Supported student progress tracking.",
      "Worked on activity and performance visibility.",
      "Supported strong and weak learning-area tracking.",
      "Built course completion and certification experiences.",
    ],

    challenge:
      "Traditional learning platforms often stop at notes and videos, which is not enough for students who need repeated practice and practical exposure to genuinely learn programming.",

    solution:
      "The product combines conceptual learning with practice, games, challenges, projects and simulated work experience so students repeatedly apply what they learn instead of only consuming content.",

    impact:
      "Coding Lab provides students a structured journey from foundational learning to practical coding experience while continuously tracking progress, activity and performance throughout the course.",

    details: {
      eyebrow: "Interactive Learning Case Study",

      heading:
        "A coding-learning platform built around learning by doing, not only watching.",

      overview:
        "Coding Lab provides structured learning experiences across technologies and development paths including HTML, CSS, Java, Python, Full Stack Development and Web Development. Students move from foundational concepts toward more advanced practical work.",

      secondOverview:
        "The platform goes beyond notes and recorded videos. Students practice concepts, interact with learning games, complete challenges and build projects before entering a work-experience section designed to make project execution feel closer to real company development. Completing the required learning journey can lead to course certification.",

      architecturePoints: [
        {
          title: "Structured Learning",
          description:
            "Courses guide learners from foundational concepts toward progressively more advanced programming topics.",
        },
        {
          title: "Learning by Practice",
          description:
            "Students repeatedly apply concepts through practice instead of depending only on passive learning material.",
        },
        {
          title: "Project-Based Learning",
          description:
            "Challenges and projects allow students to use concepts in more practical development scenarios.",
        },
        {
          title: "Progress Intelligence",
          description:
            "Student progress and activity provide visibility into completion, engagement and stronger or weaker learning areas.",
        },
      ],

      capabilities: [
        {
          title: "Coding Courses",
          description:
            "Structured learning paths across different programming languages and development areas.",
        },
        {
          title: "Notes",
          description:
            "Learning material helps students understand concepts before practical application.",
        },
        {
          title: "Video Learning",
          description:
            "Video-based learning complements written course material.",
        },
        {
          title: "Practice",
          description:
            "Practical coding exercises reinforce concepts through repeated application.",
        },
        {
          title: "Coding Games",
          description:
            "Game-oriented learning creates a more engaging way to reinforce programming concepts.",
        },
        {
          title: "Challenges",
          description:
            "Students complete challenges that test understanding beyond standard lessons.",
        },
        {
          title: "Projects",
          description:
            "Project-based learning turns individual concepts into practical development work.",
        },
        {
          title: "Work Experience",
          description:
            "Students complete projects through a workflow designed to feel closer to development inside a company.",
        },
        {
          title: "Progress Tracking",
          description:
            "Course progress is tracked throughout the learning journey.",
        },
        {
          title: "Activity Tracking",
          description:
            "Student activity provides insight into engagement with different learning areas.",
        },
        {
          title: "Strength & Weakness",
          description:
            "Learning behavior can help identify areas where a student performs strongly or needs additional practice.",
        },
        {
          title: "Certification",
          description:
            "Students completing required course activities can receive a course-completion certificate.",
        },
      ],

      learningJourney: [
        "Learn foundational concepts",
        "Study notes and videos",
        "Practice coding",
        "Use game-based learning",
        "Complete challenges",
        "Build practical projects",
        "Enter simulated work experience",
        "Track progress and performance",
        "Complete course requirements",
        "Receive certification",
      ],

      studentTracking: [
        "Course progress",
        "Student activity",
        "Practice participation",
        "Challenge completion",
        "Project completion",
        "Strong learning areas",
        "Weak learning areas",
        "Overall completion",
      ],

      frontendOwnership: [
        "Frontend architecture",
        "Course-learning interfaces",
        "Practice experiences",
        "Game-based learning UI",
        "Challenge interfaces",
        "Project workflows",
        "Student progress UI",
        "Activity tracking experiences",
        "Work-experience interfaces",
        "Course-completion flow",
        "Certification experiences",
        "Responsive production UI",
      ],

      projectStory: {
        planning:
          "Before building individual learning screens, I first mapped the complete student journey: what a beginner sees, how a learner practices, when difficulty should increase, where projects appear and how course completion should be measured. I used AI to help organize the learning flow and challenge assumptions before implementation.",

        difficulty:
          "The hardest part was making the platform feel like a learning journey instead of a collection of disconnected modules. Games, practice, challenges, projects and work experience needed to feel connected to student progress.",

        learning:
          "This project improved my understanding of engagement-driven products. I learned that educational software needs more than technically correct features; students need visible progress, small achievements, practice opportunities and enough variation to stay engaged.",

        humanSide:
          "While working on Coding Lab I thought much more about student motivation. Someone learning programming can easily become frustrated when difficulty increases too quickly. Practice, games, challenges, projects and progress visibility help create smaller wins and encourage the learner to continue.",

        aiSupport:
          "I used AI for brainstorming learning sequences, project structures, possible challenge ideas, module organization and edge cases. It helped me explore different educational flows quickly, while the final structure remained aligned with actual product requirements.",

        growth:
          "Coding Lab strengthened my ability to think about product psychology. I started thinking not only about whether a feature works, but whether it motivates the user to return, continue and feel progression.",
      },
    },

    screenshots: [
      "/CodingLab-Img/home.png",
    ],

    liveUrl: null,
  },

  // =========================================================
  // 05. CODE TRAINERS
  // =========================================================
  {
    slug: "code-trainers",
    title: "Code Trainers — Trainer & Organization Marketplace",
    shortTitle: "Code Trainers",

    category: "Company Production",
    company: "Educerns Technologies Pvt Ltd",
    period: "Production",

    featured: true,
    priority: 5,

    ownership: "primary",
    ownershipLabel: "Frontend Owned",

    privateProject: true,

    image: "/workspace-placeholder.svg",

    summary:
      "A connected marketplace where trainers, organizations and clients can discover each other, organize free or paid training sessions and offer rentable spaces such as halls or auditoriums for events.",

    description:
      "Code Trainers was designed as a marketplace connecting trainers, organizations and clients. Trainers can register their expertise and discover organizations or clients looking for sessions, while organizations can search for trainers in relevant fields. Sessions may be free or paid depending on the trainer or organization, and venue providers can list spaces such as halls, classrooms or auditoriums for training events.",

    role: "Frontend Developer — Primary Frontend Ownership",

    tech: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "REST APIs",
      "Responsive UI",
    ],

    highlights: [
      "Built trainer registration and profile experiences.",
      "Worked on organization registration workflows.",
      "Created trainer-discovery experiences based on professional fields.",
      "Supported trainer-side organization and client discovery.",
      "Worked on session and seminar workflows.",
      "Supported both free and paid session models.",
      "Built venue and rental-space listing experiences.",
      "Connected trainers, organizations, clients and venue requirements inside one product.",
      "Created reusable listing and discovery interfaces.",
      "Maintained responsive product behavior across workflows.",
    ],

    challenge:
      "The product was not a simple directory. Trainers, organizations, clients, sessions and rentable spaces are connected entities, and each user type enters the platform with a different objective.",

    solution:
      "I approached the frontend by separating the platform into user roles and marketplace flows, then connecting discovery, sessions and venue requirements through reusable listing and interaction patterns.",

    impact:
      "The platform creates a structured environment where trainers can discover opportunities, organizations can discover trainers and sessions can also be supported by available rental spaces.",

    details: {
      eyebrow: "Marketplace Platform Case Study",

      heading:
        "A connected ecosystem for trainers, organizations, training sessions and venue availability.",

      overview:
        "Code Trainers connects professional trainers with organizations and clients looking for training sessions. Trainers can register themselves and present their relevant expertise, while organizations can search for trainers in the fields required for their teams or events.",

      secondOverview:
        "The relationship works in both directions. Trainers can also discover organizations or clients looking for sessions. Sessions can be offered as free seminars or paid engagements depending on the trainer and organization. Venue owners or organizations can additionally offer halls, auditoriums and other suitable spaces for training events.",

      architecturePoints: [
        {
          title: "Trainer Marketplace",
          description:
            "Trainers can create a professional presence and become discoverable based on relevant fields.",
        },
        {
          title: "Organization Discovery",
          description:
            "Organizations can search for trainers matching their required training topics.",
        },
        {
          title: "Session Marketplace",
          description:
            "Training sessions can be structured as free or paid opportunities depending on the provider.",
        },
        {
          title: "Venue Connection",
          description:
            "Available spaces such as halls or auditoriums can support physical training and seminar requirements.",
        },
      ],

      capabilities: [
        {
          title: "Trainer Registration",
          description:
            "Trainers can register and present information relevant to their professional training field.",
        },
        {
          title: "Organization Registration",
          description:
            "Organizations can create a presence for discovering trainers and managing training requirements.",
        },
        {
          title: "Trainer Search",
          description:
            "Organizations can discover trainers according to the fields relevant to their requirements.",
        },
        {
          title: "Opportunity Discovery",
          description:
            "Trainers can discover organizations or clients looking for training sessions.",
        },
        {
          title: "Free Sessions",
          description:
            "Some seminars or sessions can be offered without payment.",
        },
        {
          title: "Paid Sessions",
          description:
            "Training opportunities can also operate as paid professional engagements.",
        },
        {
          title: "Venue Listing",
          description:
            "Organizations or venue providers can list suitable training spaces.",
        },
        {
          title: "Hall & Auditorium Rental",
          description:
            "Physical spaces such as halls and auditoriums can be connected with session requirements.",
        },
      ],

      marketplaceFlow: [
        "Trainer or organization registers",
        "Professional profile or requirement is created",
        "Relevant trainers or organizations become discoverable",
        "A training opportunity or seminar is identified",
        "Free or paid session conditions are established",
        "Venue requirements can be connected if required",
        "Trainer, organization and venue needs converge around the session",
      ],

      frontendOwnership: [
        "Marketplace planning",
        "Trainer interfaces",
        "Organization interfaces",
        "Profile workflows",
        "Discovery experiences",
        "Search and listing UI",
        "Session workflows",
        "Free and paid session presentation",
        "Venue-listing experiences",
        "Role-specific interfaces",
        "API integration",
        "Responsive product UI",
      ],

      projectStory: {
        planning:
          "This project required thinking about several user types before thinking about screens. I first mapped trainers, organizations, clients and venue providers, then used AI to help challenge the marketplace flow and understand where these users intersect.",

        difficulty:
          "The difficult part was connecting different needs inside one product. A trainer is looking for opportunities, an organization is looking for expertise and a venue provider is solving a physical-space requirement. The frontend had to keep these journeys understandable without making the product feel fragmented.",

        learning:
          "Code Trainers improved my understanding of marketplace products. I learned that marketplace design is heavily dependent on discovery, trust, relevant information and making both sides of a transaction understand what the other side offers.",

        humanSide:
          "Different users enter marketplaces with different motivations. Trainers want opportunities, organizations want reliable expertise and venue owners want utilization of their spaces. Thinking about those motivations helped me understand why the same information should be presented differently depending on who is viewing it.",

        aiSupport:
          "I used AI to map roles, brainstorm module relationships, think through free versus paid session flows and check whether the marketplace journey was missing important states. This helped me create a clearer structure before moving into implementation.",

        growth:
          "This project strengthened my ability to design around connected user ecosystems rather than a single linear user journey.",
      },
    },

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
    title: "AllCoaching — Multi-Instructor Learning Platform",
    shortTitle: "AllCoaching",

    category: "Freelance Product",
    company: "AllCoaching",
    period: "Jan 2024 — Present",

    featured: true,
    priority: 6,

    ownership: "primary",
    ownershipLabel: "Frontend Owned",

    privateProject: true,

    image: "/projects/eduplatform.svg",

    summary:
      "A freelance education platform where teachers can register, publish multiple courses and manage notes, PDFs, videos, sessions, tests, exams and quizzes while students receive permission-controlled access to enrolled course content.",

    description:
      "AllCoaching is a freelance education platform where I was responsible for building a structured admin and learning experience. Teachers can register themselves, create multiple courses and publish different types of learning content including notes, PDFs, videos, sessions, tests, exam papers and quizzes. Students can log in, view enrolled courses and access only the content they are authorized to use.",

    role: "Frontend Developer — Primary Frontend Ownership",

    tech: [
      "React.js",
      "TypeScript",
      "REST APIs",
      "RBAC",
      "Tailwind CSS",
    ],

    highlights: [
      "Built teacher registration experiences.",
      "Created multi-course management workflows.",
      "Developed course content-management interfaces.",
      "Supported notes and PDF content.",
      "Built video-learning experiences.",
      "Supported session-related workflows.",
      "Built tests, quizzes and exam-paper interfaces.",
      "Created enrolled-course student experiences.",
      "Implemented permission-controlled content access.",
      "Built reusable interfaces for different learning content types.",
      "Worked directly with freelance product requirements.",
      "Maintained continuous feature delivery.",
    ],

    challenge:
      "The platform needed to support different teachers, multiple courses, several types of learning content and student authorization without turning every content type into an isolated system.",

    solution:
      "I structured the frontend around reusable course, content and authorization patterns so teachers could manage different learning resources while students received only the content allowed by their enrollment and permissions.",

    impact:
      "AllCoaching provides teachers a structured environment for managing courses and learning resources while students receive organized access to authorized course material through one learning platform.",

    details: {
      eyebrow: "Freelance EdTech Case Study",

      heading:
        "A multi-instructor education platform connecting course creation, learning content and permission-controlled student access.",

      overview:
        "AllCoaching allows different teachers to register and manage their own courses through a structured administration experience. A teacher can create multiple courses and provide different learning resources depending on how they want to teach their students.",

      secondOverview:
        "Course content can include notes, PDFs, videos, sessions, tests, examination papers and quizzes. Students log in to their accounts, see the courses in which they are enrolled and receive access only to the learning resources authorized for them.",

      architecturePoints: [
        {
          title: "Multi-Instructor",
          description:
            "Different teachers can register and independently manage their courses and learning resources.",
        },
        {
          title: "Multi-Course",
          description:
            "Teachers can manage multiple courses rather than being limited to a single learning program.",
        },
        {
          title: "Flexible Content",
          description:
            "Courses can combine notes, PDFs, videos, sessions, tests, examination papers and quizzes.",
        },
        {
          title: "Authorized Learning",
          description:
            "Students only access courses and learning resources allowed through their enrollment and permissions.",
        },
      ],

      capabilities: [
        {
          title: "Teacher Registration",
          description:
            "Teachers can register and access course-management functionality.",
        },
        {
          title: "Course Creation",
          description:
            "Teachers can create and manage multiple courses.",
        },
        {
          title: "Notes",
          description:
            "Written learning material can be organized inside individual courses.",
        },
        {
          title: "PDF Resources",
          description:
            "Teachers can provide downloadable or viewable PDF learning material.",
        },
        {
          title: "Video Content",
          description:
            "Courses can contain video-based educational content.",
        },
        {
          title: "Sessions",
          description:
            "Teachers can manage learning sessions associated with their courses.",
        },
        {
          title: "Tests",
          description:
            "Courses can contain structured tests for student evaluation.",
        },
        {
          title: "Exam Papers",
          description:
            "Teachers can make examination-related material available to relevant students.",
        },
        {
          title: "Quizzes",
          description:
            "Quiz-based learning and evaluation can be included inside courses.",
        },
        {
          title: "Enrollment",
          description:
            "Students see courses according to their enrollment.",
        },
        {
          title: "Permission-Based Content",
          description:
            "Access to learning material is controlled so students only receive authorized resources.",
        },
      ],

      permissionPoints: [
        "Teacher-specific course management",
        "Student enrollment control",
        "Course-based authorization",
        "Content-level access rules",
        "Role-aware navigation",
        "Restricted learning resources",
        "Student-specific course visibility",
        "Permission-aware content rendering",
      ],

      frontendOwnership: [
        "Frontend architecture",
        "Teacher-facing interfaces",
        "Course-management UI",
        "Student learning interfaces",
        "Notes and PDF experiences",
        "Video-content interfaces",
        "Session workflows",
        "Test interfaces",
        "Exam-paper interfaces",
        "Quiz experiences",
        "Permission-aware content access",
        "Responsive application UI",
      ],

      projectStory: {
        planning:
          "As a freelance project, I needed to translate the requirement into a workable product structure myself. I first mapped teachers, students, courses, enrollment and content types, then used AI to help organize modules, identify missing flows and build a complete implementation plan before development.",

        difficulty:
          "The main difficulty was handling many different content types while keeping the course experience consistent. Notes, PDFs, videos, tests, quizzes and sessions behave differently, but the student should still experience them as parts of one course.",

        learning:
          "AllCoaching gave me valuable experience in taking more responsibility for requirement interpretation. In company projects there are often more people involved in product discussions, while freelance work requires stronger communication, requirement clarification and independent decision-making.",

        humanSide:
          "Teachers and students think about the same product differently. Teachers care about organizing and distributing learning resources, while students want a clear path to the content they need. Designing both sides improved my understanding of role-specific information hierarchy.",

        aiSupport:
          "I used AI during the early planning stage to organize the course architecture, teacher/student roles, content modules and authorization flow. It helped me turn a broad requirement into smaller modules that could be implemented and tested systematically.",

        growth:
          "This project improved my confidence in handling a product independently from requirement understanding through frontend structure and ongoing feature delivery.",
      },
    },

    screenshots: [
      "/projects/eduplatform.svg",
      "/projects/eduplatform-detail.svg",
    ],

    liveUrl: null,
  },

  // =========================================================
  // 07. EDUSKILL
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
      "Contributed to production frontend improvements.",
    ],

    challenge:
      "The product serves different learning roles with different permissions while receiving frequent feature updates.",

    solution:
      "I used reusable components and permission-aware patterns so new functionality could be introduced without maintaining unnecessary parallel interfaces.",

    impact:
      "Improved consistency and maintainability across learning and certification workflows.",

    liveUrl: null,
  },

  // =========================================================
  // 08. EDUTAX
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
      "A GST learning and simulation product where I contributed to API workflows, submissions and performance-sensitive frontend behavior.",

    description:
      "I contributed to frontend API workflows and simulation-oriented experiences requiring reliable server-state handling, predictable loading behavior and accurate submissions.",

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
      "Simulation workflows contain sequential steps and API-dependent states where duplicated or stale requests can create inconsistent behavior.",

    solution:
      "I reorganized server-state handling with TanStack Query and made invalidation, loading and error states more explicit.",

    impact:
      "Cleaner request flows, fewer unnecessary network calls and more reliable user submissions.",

    liveUrl: null,
  },

  // =========================================================
  // 09. TYPING MITRA
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
      "Real-time practice experiences need fast visual feedback and stable component behavior while users are actively typing.",

    solution:
      "I focused on predictable state updates, component cleanup and responsive consistency.",

    impact:
      "Improved usability and interface consistency across active practice flows.",

    liveUrl: null,
  },

  // =========================================================
  // 10. TALLY SIMULATION
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
      "Simulation products need frontend behavior that closely mirrors real workflows while remaining stable in the browser.",

    solution:
      "I worked on component behavior and interface consistency so individual simulation steps stayed predictable and easy to follow.",

    impact:
      "Improved frontend stability and consistency across simulation workflows.",

    liveUrl: null,
  },
];

// =========================================================
// PRIMARY / OWNED PRODUCTS
// =========================================================

export const primaryProjects = projects
  .filter((project) => project.ownership === "primary")
  .sort((a, b) => (a.priority || 999) - (b.priority || 999));

// =========================================================
// PRODUCT CONTRIBUTIONS
// =========================================================

export const contributionProjects = projects
  .filter((project) => project.ownership === "contribution")
  .sort((a, b) => (a.priority || 999) - (b.priority || 999));

// =========================================================
// SHOWCASE PROJECTS
// =========================================================

export const showcaseProjects = projects
  .filter((project) => project.ownership === "showcase")
  .sort((a, b) => (a.priority || 999) - (b.priority || 999));

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
  return projects.find((project) => project.slug === slug);
}