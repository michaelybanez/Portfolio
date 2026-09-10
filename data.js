// ===================== DATA =====================
// All content sourced from website-content.md

const DB = {

  caseStudies: [
    {
      id: 'littleGrove',
      title: 'Little Grove — Building a Brand and Marketing System for Modern Early Learning',
      tagline: 'A brand system turning early learning into warm, engaging, and consistent communication',
      pills: ['Brand Strategy', 'Marketing System', 'Campaign Design'],
      role: 'Senior Graphic Designer / Art Direction',
      industry: 'Early Education & Childcare',
      image: './images/littlegrove.webp',
      figmaLink: 'https://www.figma.com/design/3jt8lsuLeY7WoBKTMchNKs/Untitled?node-id=0-1&t=NHMWkpfvG82esHVc-1',
      overview: 'LITTLE GROVE is a brand and marketing project for a modern early learning center. The project explored how a childcare business could build a warm, distinctive identity while creating a flexible marketing system designed to connect with parents across digital and physical touchpoints.',
      problem: {
        intro: 'Choosing a childcare provider is both an emotional and practical decision. Parents need to feel confident in the environment where their child will learn and grow. The challenge was to create a visual identity that communicated warmth and personality while maintaining the trust, clarity, and professionalism needed to support parent decision-making.',
        issues: [
          'Create emotional connection with parents',
          'Build trust and credibility',
          'Clearly communicate the value of early learning',
          'Differentiate from generic childcare branding',
          'Create a flexible system for ongoing marketing',
        ]
      },
      constraints: [
        'KYC steps were non-negotiable — compliance requirements defined which data points had to be collected',
        'Mobile-only. No web fallback. Every decision had to work within the constraints of a small screen, thumb-reach zones, and native input behaviors',
        'Some flow restructuring required coordination with engineering — not everything could be resequenced without backend changes',
      ],
      process: [
        { step: '01', label: 'Establish the Brand Territory', desc: 'Created a visual direction that felt warm, modern, and distinctive without relying on overly generic childcare aesthetics.' },
        { step: '02', label: 'Build the Visual Language', desc: 'Developed a cohesive system of typography, colour, imagery, and graphic elements designed to create recognition and consistency.' },
        { step: '03', label: 'Extend the Brand Into Marketing', desc: 'Applied the system across parent-focused campaigns, enrollment messaging, social content, and promotional materials to demonstrate how the identity could support ongoing business communication.' },
      ],
      outcome: [
        'Built a cohesive brand and marketing system for long-term growth.',
        'Turned the identity into a flexible, scalable visual system.',
        'Balanced warmth, trust, and professionalism across communications.',
        'Applied the brand across campaigns, social, and promotional touchpoints.',
        'Created a system that helps connect with and convert prospective families.'
      ],
      reflection: "This project reinforced the importance of designing brand systems around real communication needs. For service businesses like childcare providers, a strong identity needs to do more than look distinctive—it needs to build trust, communicate value, and provide a flexible foundation for ongoing marketing."
    },
    {
      id: 'FOLLICA',
      title: 'FOLLICA — Designing a Performance Creative System for Paid Social',
      tagline: 'A campaign system turning an enrollment message into engaging, consistent creative.',
      pills: ['Performance Marketing', 'Art Direction', 'Meta Ads'],
      role: 'Senior Graphic Designer',
      tools: 'Figma · Hotjar · Material Design 3 · ClickUp',
      industry: 'Beauty & Personal Care',
      image: './images/follica.webp',
      figmaLink: 'https://www.figma.com/design/3jt8lsuLeY7WoBKTMchNKs/Untitled?node-id=2-2&t=NHMWkpfvG82esHVc-1',
      overview: 'FOLLICA is a performance marketing project for a hair-care product designed for paid social. The project explored how different creative angles could communicate the same product benefit while maintaining strong brand consistency, product clarity, and conversion-focused visual hierarchy.',
      problem: {
        intro: 'Paid social creatives have only seconds to earn attention. The challenge was to develop advertising concepts that could quickly communicate what the product does while testing different motivations, from transformation and product benefits to problem-solving and direct-response messaging.',
        issues: [
          'Stop the scroll quickly',
          'Communicate the product clearly',
          'Create multiple messaging angles',
          'Maintain consistent brand recognition',
          'Design for fast consumption',
          'Build clear CTA hierarchy',
        ]
      },
      constraints: [
        'Payment gateway was fixed — the UI had to work within its capabilities',
        'Guest checkout required making the case using abandonment data; the PO approved it with the condition that account creation was offered post-purchase',
        'Two user types, one flow — building separate flows was out of scope',
      ],
      process: [
        { step: '01', label: 'Define the Creative Territory', desc: 'Established a bold visual direction designed for fast-moving social feeds, combining premium beauty imagery with direct-response advertising principles.' },
        { step: '02', label: ' Build Multiple Creative Angles', desc: 'Developed distinct messaging concepts around - Outcome, Problem, Product Demonstration, Benefits, Routine, and Direct Response' },
        { step: '03', label: 'Create a Flexible System', desc: 'Designed a repeatable visual system that could support multiple ad variations without losing brand recognition.' },
      ],
      outcome: [
        'Built a performance-focused creative system for paid social.',
        'Developed multiple messaging angles around a single product.',
        'Created flexible ad variations for ongoing creative testing.',
        'Balanced brand consistency with performance-driven experimentation.',
        'Established a scalable foundation for iteration and optimization.',
      ],
      reflection: "This project reinforced the importance of treating paid advertising creative as a system rather than a single finished asset. Strong performance design requires a balance between brand consistency and experimentation—giving different messages and creative ideas room to compete while maintaining a recognizable visual identity."
    },
    {
      id: 'FROM BRIEF TO DELIVERY',
      title: 'Turning a Marketing Brief Into a Complete Creative Campaign',
      tagline: 'A repeatable process turning briefs into strategic, production-ready creative',
      pills: ['Marketing Design', 'Campaign Strategy', 'Creative Execution'],
      role: 'Senior Graphic Designer',
      tools: 'Figma · Tailwind CSS · Material-Tailwind UI · ClickUp',
      industry: 'Multi-Industry Marketing',
      image: './images/aera.webp',
      figmaLink: 'https://www.figma.com/design/3jt8lsuLeY7WoBKTMchNKs/Untitled?node-id=3-250&t=NHMWkpfvG82esHVc-1',
      overview: 'FROM BRIEF TO DELIVERY demonstrates how I approach marketing projects from the initial brief through strategy, creative development, refinement, and final delivery.',
      problem: {
        intro: 'Marketing projects often involve multiple objectives, stakeholders, deadlines, and deliverables. The challenge was to create a process that keeps creative work strategically aligned while moving efficiently from brief to final execution.',
        issues: [
          'Understand the objective and audience',
          'Define a clear communication strategy',
          'Explore the strongest creative direction',
          'Maintain consistency across deliverables',
          'Deliver work ready for real-world use',
        ]
      },
      constraints: [
        'Stack was pre-decided — engineering had adopted Tailwind CSS and Material-Tailwind UI was chosen as the component framework',
        'No existing design documentation to build from',
        'Tight scope — priority was shipping a functional system, not a perfect one',
      ],
      process: [
        { step: '01', label: 'Understand the Brief', desc: 'The existing identity was distilled into its core visual characteristics, including typography, structured layouts, generous whitespace, confident imagery, restrained color, and clear hierarchy. These became the foundations for translating the brand into a digital environment.' },
        { step: '02', label: 'Define the Strategy', desc: 'Translate the brief into a focused communication strategy by identifying audience insights, defining the creative angle, and establishing a clear direction for execution.'},
        { step: '03', label: 'Explore the Concept', desc: 'Explore different creative directions, messaging approaches, and visual solutions to identify the strongest concept aligned with the marketing objective.'},
        { step: '04', label: 'Build the Creative', desc: 'Develop the selected direction into a cohesive visual system, applying brand principles across the required formats while maintaining clear hierarchy and messaging.'},
        { step: '05', label: 'Refine and Optimize', desc: 'Review the work against the original objective, incorporating feedback and refining the creative for clarity, consistency, and effectiveness.'},
        { step: '06', label: 'Deliver', desc: 'Prepare final assets and variations according to production specifications, ensuring everything is organized, polished, and ready for launch.'},
      ],
      outcome: [
        'Built a repeatable workflow from brief to final delivery.',
        'Connected marketing strategy with creative execution.',
        'Created a structured process for exploration, refinement, and iteration.',
        'Maintained clarity and consistency across campaign deliverables.',
        'Delivered production-ready creative aligned with the original objective.',
      ],
      reflection: "Strong marketing creative starts with understanding the problem. A structured process creates room for strategy, exploration, refinement, and efficient execution without losing sight of the original objective."
    }
  ],

  process: [
    {
      step: '01 — Understand',
      title: 'Start with the why',
      desc: ' clarify the objective, audience, message, and context before defining a visual direction',
    },
    {
      step: '02 — Define',
      title: 'Find the visual direction',
      desc: 'I explore concepts, references, and visual territories to establish an idea with a clear purpose.',
    },
    {
      step: '03 — Design',
      title: 'Turn the direction into a system',
      desc: 'I develop the chosen direction into cohesive visual communication, refining hierarchy, typography, composition, imagery, and consistency.',
    },
    {
      step: '04 — Deliver',
      title: 'Make it work in the real world',
      desc: 'I prepare the work for its intended medium and ensure the final output is clear, practical, and ready to be used or extended.',
    },
  ],

  visualWorks: [
    { id: 1, title: 'Chinese New Year Campaign', category: 'Visual Assets', span: 'md:row-span-2 lg:row-span-2', url: './images/ci-01.webp' },
    { id: 2, title: 'Logo Mockup — Jade Cotton & Hook', category: 'Brand Identity', span: '', url: './images/brandidentity-logomockup-01.webp' },
    { id: 3, title: 'Feed Post', category: 'Social Media', span: '', url: './images/socialmedia-feedpost-04.webp' },
    { id: 4, title: 'Email Marketing — Mother\'s Day', category: 'Digital Marketing', span: '', url: './images/digitalmarketing-emailmarketing-02.webp' },
    { id: 5, title: 'Logo Mockup — Smadar Events', category: 'Brand Identity', span: 'md:col-span-2 lg:col-span-2', url: './images/brandidentity-businesscard-02.webp' },
    { id: 6, title: 'Email Marketing — Holidays', category: 'Visual Assets', span: 'md:row-span-2 lg:row-span-2', url: './images/em-01.webp' },
    { id: 7, title: 'Brochure — Guilasons Furniture', category: 'Print Collateral', span: 'md:col-span-2 lg:col-span-2', url: './images/printcollateral-brochure-01.webp' },
    { id: 8, title: 'Logo Mockup — Stitch BKLYN', category: 'Brand Identity', span: '', url: './images/brandidentity-logomockup-03.webp' },
    // Hidden initially (load more)
    { id: 49, title: 'AERA Air Fryer', category: 'Social Media', span: '', url: './images/3.png', hidden: true },
    { id: 50, title: 'Little Grove', category: 'Social Media', span: '', url: './images/1.png', hidden: true },
    { id: 50, title: 'Follica', category: 'Social Media', span: '', url: './images/2.png', hidden: true },
    { id: 50, title: 'Acrylic Signage', category: 'Visual Assets', span: '', url: './images/4.jpg', hidden: true },
    { id: 50, title: 'Feed Post', category: 'Social Media', span: '', url: './images/6.jpg', hidden: true },
    { id: 50, title: 'Invitation', category: 'Visual Assets', span: '', url: './images/7.jpg', hidden: true },
    { id: 9, title: 'Packiging Mockup', category: 'Print Collateral', span: '', url: './images/printcollateral-packaging-01.webp', hidden: true },
    { id: 10, title: 'Feed Post', category: 'Social Media', span: '', url: './images/socialmedia-feedpost-02.webp', hidden: true },
    { id: 12, title: 'Letterhead', category: 'Brand Identity', span: 'md:row-span-2 lg:row-span-2', url: './images/lh-02.webp', hidden: true },
    { id: 13, title: 'Logo — Guilasons Furniture', category: 'Brand Identity', span: '', url: './images/brandidentity-logo-04.webp', hidden: true },
    { id: 14, title: 'Product Image', category: 'Ecommerce', span: '', url: './images/ecommerce-productimage-01.webp', hidden: true },
    { id: 15, title: 'Product Image', category: 'Ecommerce', span: '', url: './images/ecommerce-productimage-02.webp', hidden: true },
    { id: 16, title: 'Product Image', category: 'Ecommerce', span: '', url: './images/ecommerce-productimage-03.webp', hidden: true },
    { id: 17, title: 'Product Image', category: 'Ecommerce', span: '', url: './images/ecommerce-productimage-04.webp', hidden: true },
    { id: 18, title: 'Product Image', category: 'Ecommerce', span: '', url: './images/ecommerce-productimage-05.webp', hidden: true },
    { id: 19, title: 'Product Image', category: 'Ecommerce', span: '', url: './images/ecommerce-productimage-06.webp', hidden: true },
    { id: 20, title: 'Product Image', category: 'Ecommerce', span: '', url: './images/ecommerce-productimage-07.webp', hidden: true },
    { id: 21, title: 'Product Image', category: 'Ecommerce', span: '', url: './images/ecommerce-productimage-08.webp', hidden: true },
    { id: 22, title: 'Product Image', category: 'Ecommerce', span: '', url: './images/ecommerce-productimage-09.webp', hidden: true },
    { id: 23, title: 'Product Image', category: 'Ecommerce', span: '', url: './images/ecommerce-productimage-10.webp', hidden: true },
    { id: 24, title: 'Product Image', category: 'Ecommerce', span: '', url: './images/ecommerce-productimage-11.webp', hidden: true },
    { id: 25, title: 'Product Image', category: 'Ecommerce', span: '', url: './images/ecommerce-productimage-12.webp', hidden: true },
    { id: 26, title: 'Feed Post', category: 'Social Media', span: 'md:col-span-2 lg:col-span-2', url: './images/socialmedia-feedpost-03.webp', hidden: true },
    { id: 27, title: 'Logo Mockup — Guilasons Furniture', category: 'Brand Identity', span: '', url: './images/brandidentity-logomockup-02.webp', hidden: true },
    { id: 28, title: 'Logo — Stitch BKLYN', category: 'Brand Identity', span: '', url: './images/brandidentity-logo-02.webp', hidden: true },
    { id: 29, title: 'Logo — Stitch BKLYN variant', category: 'Brand Identity', span: '', url: './images/brandidentity-logo-01.webp', hidden: true },
    { id: 30, title: 'Product Image Cover', category: 'Visual Assets', span: '', url: './images/visualassets-productimagecover-02.webp', hidden: true },
    { id: 31, title: 'Brochure', category: 'Print Collateral', span: 'md:row-span-2 lg:row-span-2', url: './images/printcollateral-brochure-03.webp', hidden: true },
    { id: 32, title: 'Logo Mockup — Smadar Events', category: 'Brand Identity', span: 'md:col-span-2 lg:col-span-2', url: './images/brandidentity-logomockup-04.webp', hidden: true },
    { id: 33, title: 'Feed Post', category: 'Social Media', span: '', url: './images/socialmedia-feedpost-01.webp', hidden: true },
    { id: 34, title: 'Product Image Cover', category: 'Visual Assets', span: '', url: './images/visualassets-productimagecover-01.webp', hidden: true },
    { id: 35, title: 'Flyer', category: 'Print Collateral', span: 'md:row-span-2 lg:row-span-2', url: './images/printcollateral-flyer-01.webp', hidden: true },
    { id: 36, title: 'Business Card Mockup — Stitch BKLYN', category: 'Brand Identity', span: 'md:col-span-2 lg:col-span-2', url: './images/brandidentity-businesscard-01.webp', hidden: true },
    { id: 50, title: 'Acrylic Signage', category: 'Visual Assets', span: '', url: './images/8.jpg', hidden: true },
    { id: 37, title: 'Capability Statement Cover Image', category: 'Digital Marketing', span: '', url: './images/digitalmarketing-capabilitystatement-02.webp', hidden: true },
    { id: 38, title: 'Capability Statement', category: 'Digital Marketing', span: '', url: './images/digitalmarketing-capabilitystatement-01.webp', hidden: true },
    { id: 40, title: 'Letterhead — Guilasons Furniture', category: 'Brand Identity', span: 'md:row-span-2 lg:row-span-2', url: './images/brandidentity-letterhead-01.webp', hidden: true },
    { id: 41, title: 'Brochure', category: 'Print Collateral', span: '', url: './images/printcollateral-brochure-04.webp', hidden: true },
    { id: 42, title: 'Brochure', category: 'Print Collateral', span: '', url: './images/printcollateral-brochure-05.webp', hidden: true },
    { id: 43, title: 'Brochure', category: 'Print Collateral', span: '', url: './images/printcollateral-brochure-06.webp', hidden: true },
    { id: 39, title: 'Packaging', category: 'Print Collateral', span: 'md:col-span-2 lg:col-span-2', url: './images/printcollateral-packaging-03.webp', hidden: true },
    { id: 46, title: 'Packaging', category: 'Print Collateral', span: 'md:col-span-2 lg:col-span-2', url: './images/printcollateral-packaging-02.webp', hidden: true },
    { id: 44, title: 'Marketing Material', category: 'Visual Assets', span: '', url: './images/visualassets-marketingcover-02.webp', hidden: true },
    { id: 45, title: 'Brochure', category: 'Print Collateral', span: 'md:col-span-2 lg:col-span-2', url: './images/printcollateral-brochure-02.webp', hidden: true },
    { id: 47, title: 'EBC', category: 'Ecommerce', span: '', url: './images/ecommerce-ebc-01.webp', hidden: true },
    { id: 48, title: 'EBC', category: 'Ecommerce', span: '', url: './images/ecommerce-ebc-02.webp', hidden: true },
  ]

};
