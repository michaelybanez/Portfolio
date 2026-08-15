// ===================== DATA =====================
// All content sourced from website-content.md

const DB = {

  caseStudies: [
    {
      id: 'littleGrove',
      title: 'Little Grove — Building a warmer identity for modern early learning',
      tagline: 'A warm, flexible identity built to grow with a modern early-learning brand.',
      pills: ['Brand Identity', 'Visual Language', 'Art Direction'],
      role: 'Senior Graphic Designer',
      industry: 'Early Education',
      image: './images/cs-01.png',
      figmaLink: 'https://www.figma.com/design/pnb9idYozUTqJFT3ZCK2Xz/Nevo---Fintech-Onboarding-UI?node-id=0-1&t=OFp67kbcNXU6K1Rij-',
      overview: 'Little Grove is a modern early-learning brand built around the idea that children learn through curiosity, exploration, and connection. The project focused on creating an identity that felt warm and approachable without relying on the overly playful visual language commonly associated with children\'s brands. The result needed to work consistently across marketing, print, social media, and digital applications while giving the brand a recognizable visual language beyond the logo.',
      problem: {
        intro: 'The existing visual direction felt functional but lacked a distinctive system that could consistently connect its different communication materials.',
        issues: [
          'Create a recognizable identity without relying on typical childcare clichés.',
          'Balance warmth and playfulness with professionalism.',
          'Establish a visual system that could work across print and digital.',
          'Create enough flexibility for future campaigns and communications.',
          'Make the brand recognizable even when the logo wasn\'t immediately visible.',
        ]
      },
      constraints: [
        'KYC steps were non-negotiable — compliance requirements defined which data points had to be collected',
        'Mobile-only. No web fallback. Every decision had to work within the constraints of a small screen, thumb-reach zones, and native input behaviors',
        'Some flow restructuring required coordination with engineering — not everything could be resequenced without backend changes',
      ],
      process: [
        { step: '01', label: 'Establish the visual territory', desc: 'The visual direction explored organic forms, movement, and interaction to communicate growth and curiosity. The goal was to create a playful character without relying on conventional childcare imagery or making the identity feel overly childish.' },
        { step: '02', label: 'Build the visual language', desc: 'Typography, color, imagery, and graphic elements were developed as connected parts of the identity. A rounded display typeface brings personality, while a restrained supporting typeface maintains clarity and flexibility across different applications.' },
        { step: '03', label: 'Create a flexible system', desc: 'The identity was developed around repeatable visual behaviors rather than fixed compositions. Organic shapes, typography, imagery, and graphic elements could be adapted into different layouts and applications while maintaining a consistent visual character.' },
        { step: '04', label: 'Test the system', desc: 'The visual language was applied across different communication touchpoints to evaluate how well the system translated beyond the initial identity. The goal was to ensure that each application could feel distinct while still being immediately recognizable as part of the same brand.' },
      ],
      outcome: [
        'Established a distinctive visual identity beyond the logo.',
        'Created a flexible visual system for future brand communications.',
        'Built consistent visual behavior across print and digital applications.',
        'Balanced warmth, curiosity, and professionalism within one identity.',
      ],
      reflection: "The strongest outcome of the project wasn't the logo itself. It was the system surrounding it. A logo can establish recognition, but typography, color, imagery, composition, and visual behavior are what allow an identity to remain recognizable as it moves across different contexts. That approach continues to influence how I design: build the system behind the asset, not just the asset itself."
    },
    {
      id: 'brightstar',
      title: 'Brightstar — Turning an enrollment goal into a campaign system',
      tagline: 'A campaign system turning an enrollment message into engaging, consistent creative.',
      pills: ['Campaign Creative', 'Art Direction', 'Digital Marketing'],
      role: 'Senior Graphic Designer',
      tools: 'Figma · Hotjar · Material Design 3 · ClickUp',
      industry: 'Early Education',
      image: './images/cs-02.png',
      figmaLink: 'https://www.figma.com/design/JDE6McxTU9Yd7EmDfWPhzM/Curastock---E-commerce-Checkout-UX?node-id=0-1&t=YGjixvOEaKQvhsb8-1',
      overview: 'BrightStart needed a campaign to support its upcoming enrollment period. Rather than treating the project as a collection of promotional graphics, the campaign was approached as a communication system designed around the concerns of parents evaluating early-learning options. The creative needed to balance emotional connection with clear enrollment messaging while remaining consistent across social media, digital advertising, landing pages, and print.',
      problem: {
        intro: 'The campaign needed to compete for attention in a crowded digital environment while communicating a message that was both emotional and actionable.',
        issues: [
          'Make enrollment messaging immediately understandable.',
          'Build emotional connection without losing clarity.',
          'Create a campaign concept that could work across multiple formats.',
          'Maintain a consistent visual language across different channels.',
          'Give the audience a clear next step.',
        ]
      },
      constraints: [
        'Payment gateway was fixed — the UI had to work within its capabilities',
        'Guest checkout required making the case using abandonment data; the PO approved it with the condition that account creation was offered post-purchase',
        'Two user types, one flow — building separate flows was out of scope',
      ],
      process: [
        { step: '01', label: 'Define the Communication', desc: 'The campaign started with the audience and the decision behind the enrollment message. Rather than focusing only on availability, the creative needed to communicate the qualities parents were looking for: trust, care, learning, and a positive environment for their child.' },
        { step: '02', label: 'Develop the Campaign Idea', desc: 'The central idea, "A place to begin," positioned early education as the beginning of a child\'s larger journey. This provided a flexible foundation that could support awareness, learning, trust, and direct enrollment messaging without losing the central campaign idea.' },
        { step: '03', label: 'Build the Creative System', desc: 'The visual system combined human-centered photography, strong typography, consistent graphic framing, and clear calls to action. Rather than making every asset identical, the system established visual rules that allowed each format to respond to its own communication requirements.' },
        { step: '04', label: 'Adapt Across Channels', desc: 'The campaign was translated across social media, digital advertising, landing page creative, and print. Each format was designed around its specific context while maintaining the same core visual language, allowing the campaign to feel cohesive wherever the audience encountered it.' },
      ],
      outcome: [
        'Created a unified visual system for the enrollment campaign.',
        'Established a consistent connection between campaign touchpoints.',
        'Adapted one creative direction across multiple formats and channels.',
        'Balanced emotional storytelling with clear marketing communication.',
      ],
      reflection: "The project reinforced that effective marketing design starts before the design file. Understanding the business objective and the audience's underlying concern made the creative direction more intentional and helped determine what the design needed to communicate. The design wasn't there simply to make the message look better; it was there to make the message work."
    },
    {
      id: 'northline',
      title: 'Northline — Extending a brand from the canvas into the interface',
      tagline: 'A digital brand system bringing consistency from visual identity to interface.',
      pills: ['Design System', 'B2B SaaS', 'Design Lead'],
      role: 'Senior Graphic Designer / Digital Designer',
      tools: 'Figma · Tailwind CSS · Material-Tailwind UI · ClickUp',
      industry: 'Professional Services',
      image: './images/cs-03.png',
      figmaLink: 'https://www.figma.com/design/vyQcKy4jjKX7BM73ZXGyvr/Corelix---Design-System-v1.0?node-id=0-1&t=IUxfMkHPh0b4wM5N-1',
      overview: 'Northline had an established visual identity that worked across presentations, print, and marketing materials, but its digital presence had evolved independently. Different pages used inconsistent typography, spacing, components, and visual treatments. The project focused on translating the existing brand into a digital system that could remain recognizable, usable, and consistent across screen sizes while providing a practical foundation for implementation.',
      problem: {
        intro: 'The goal wasn\'t to replace the existing brand with a completely new digital aesthetic, but to determine how its visual language should behave within an interactive environment.',
        issues: [
          'Translate existing brand characteristics into interface patterns.',
          'Create consistent visual hierarchy across pages.',
          'Establish reusable components without making the system restrictive.',
          'Design for desktop, tablet, and mobile.',
          'Create a system that could realistically move from Figma into development.',
        ]
      },
      constraints: [
        'Stack was pre-decided — engineering had adopted Tailwind CSS and Material-Tailwind UI was chosen as the component framework',
        'No existing design documentation to build from',
        'Tight scope — priority was shipping a functional system, not a perfect one',
      ],
      process: [
        { step: '01', label: 'Identify the Brand Foundations', desc: 'The existing identity was distilled into its core visual characteristics, including typography, structured layouts, generous whitespace, confident imagery, restrained color, and clear hierarchy. These became the foundations for translating the brand into a digital environment.' },
        { step: '02', label: 'Translate the Visual Language', desc: 'The brand\'s typography and color palette were reorganized into functional digital roles. Type was structured into a responsive hierarchy, while color was assigned to backgrounds, surfaces, text, actions, and interactive states so the visual language could remain consistent while becoming practical for interface design.' },
        { step: '03', label: 'Build the System', desc: 'The interface was organized around reusable foundations, components, and patterns rather than individual page designs. Typography, color, spacing, grids, buttons, navigation, cards, content sections, and calls to action were structured to make future design decisions faster and more consistent.' },
        { step: '04', label: 'Design for Real Screens', desc: 'The system was tested across desktop, tablet, and mobile layouts, reconsidering each composition based on available space and content priority rather than simply shrinking desktop designs. Responsive behavior, hierarchy, and component relationships were considered as part of the design itself.' },
      ],
      outcome: [
        'Extended the existing brand into a consistent digital experience.',
        'Established reusable components and visual patterns.',
        'Created responsive behavior across desktop, tablet, and mobile.',
        'Provided a clearer foundation for future digital design and development.',
        'Connected brand, interface, and implementation within one visual system.',
      ],
      reflection: "Working across graphic design, UI/UX, and frontend development has broadened how I approach digital design. A visual system shouldn't only work inside a design file; it needs to survive the transition into a browser, across different screen sizes, and eventually into code. That broader perspective allows me to consider both the visual communication and the system required to make it work in practice."
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
