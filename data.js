// ===================== DATA =====================
// All content sourced from website-content.md

const DB = {

  caseStudies: [
    {
      id: 'nevo',
      title: 'Nevo — Mobile Onboarding Redesign',
      tagline: 'How do you stop users from abandoning before they ever see the product?',
      pills: ['Fintech', 'Mobile', 'UX Design'],
      role: 'Design Lead',
      tools: 'Figma · Material Design 3 · Maze · ClickUp',
      industry: 'Fintech',
      image: './images/cs-01.png',
      overview: 'Nevo is a mobile-first digital banking app targeting young professionals who want an alternative to traditional banking — instant account setup, budgeting tools, and zero maintaining balance. Despite strong app store traffic, a significant portion of new users were abandoning the onboarding flow before completing account creation. I was brought in as Design Lead to diagnose the drop-off problem and redesign the onboarding experience.',
      problem: {
        intro: 'The onboarding flow had a steep drop-off. Most users were abandoning before completing identity verification — the midpoint of the flow. The existing design was treating onboarding as a form-filling exercise rather than a first experience with the product.',
        issues: [
          'Users were front-loaded with too much information and too many fields upfront',
          'No visible progress — users had no sense of how far along they were or how much was left',
          'KYC steps were introduced abruptly with no framing around why the information was needed',
          'Error states were punishing — one validation failure would clear the entire field',
          'The flow had no exit and resume — abandoning meant starting over',
        ]
      },
      constraints: [
        'KYC steps were non-negotiable — compliance requirements defined which data points had to be collected',
        'Mobile-only. No web fallback. Every decision had to work within the constraints of a small screen, thumb-reach zones, and native input behaviors',
        'Some flow restructuring required coordination with engineering — not everything could be resequenced without backend changes',
      ],
      process: [
        { step: '01', label: 'Flow Audit', desc: 'Mapped the existing onboarding flow end-to-end — every input, decision point, error state, and transition. 14 screens with no chunking and no narrative thread.' },
        { step: '02', label: 'Drop-off Mapping', desc: 'Worked with analytics to map abandonment. Clearest drop-off: after the first screen, at ID upload, and at the selfie/liveness check. All three caused by the same root problem — the flow demanded trust before it earned it.' },
        { step: '03', label: 'Redesign Principles', desc: 'Progressive disclosure, one primary action per screen, earn trust before asking for it, forgiving inputs with inline validation on blur.' },
        { step: '04', label: 'Flow Restructuring', desc: '14 undifferentiated screens restructured into three phased stages: Account Setup (3 screens), Identity Verification (5 screens), Financial Setup (3 screens).' },
        { step: '05', label: 'Key UX Decisions', desc: 'Segmented progress bar with named phases, exit and resume capability, microcopy rewrite across all fields, live frame guide for ID capture, and liveness check explainer screen.' },
      ],
      outcome: [
        'Streamlined a 14-screen flow into a phased, 11-screen experience with clear narrative structure',
        'Reduced perceived complexity through progressive disclosure and phase framing',
        'Eliminated full-form error states across all input screens',
        'Exit and resume introduced for the first time in the product',
        'Handed off with annotated flow documentation, microcopy spec, and component-level interaction notes',
      ],
      reflection: "I'd push earlier for a qualitative session — even five moderated walkthroughs — before finalizing the flow restructure. The analytics told me where users dropped off. They didn't tell me why users felt what they felt at the ID upload step."
    },
    {
      id: 'curastock',
      title: 'Curastock — Checkout Flow Redesign',
      tagline: 'A checkout built around system logic — not the user\'s mental model of buying.',
      pills: ['Ecommerce', 'Web', 'UX Design'],
      role: 'Design Lead',
      tools: 'Figma · Hotjar · Material Design 3 · ClickUp',
      industry: 'Ecommerce / Medical Supplies',
      image: './images/cs-02.png',
      overview: 'Curastock is an ecommerce platform supplying OTC medical products to individual buyers and small clinic practitioners. The client had an existing website with a functioning checkout but a high cart abandonment rate and frequent support tickets around order confusion, payment failures, and shipping selection. I was brought in to redesign the checkout flow end-to-end — from cart review to order confirmation.',
      problem: {
        intro: 'The checkout had two distinct user types with conflicting needs — individual buyers making small one-time purchases, and clinic staff placing bulk repeat orders. The existing flow treated both identically, which served neither well.',
        issues: [
          'Cart page was cluttered — promotions, upsells, and policy text competing for attention with the primary CTA',
          'No guest checkout — all users were forced to create an account before purchasing',
          'Shipping selection was presented before address input, breaking the expected sequence',
          'Payment step had no trust signals — no security badges, no accepted payment icons, no visible order summary',
          'Order confirmation was a plain success message with no summary and no next steps',
          'Bulk buyers had no quantity update shortcut — adjusting a 50-unit order required individual increment taps',
        ]
      },
      constraints: [
        'Payment gateway was fixed — the UI had to work within its capabilities',
        'Guest checkout required making the case using abandonment data; the PO approved it with the condition that account creation was offered post-purchase',
        'Two user types, one flow — building separate flows was out of scope',
      ],
      process: [
        { step: '01', label: 'Checkout Audit', desc: 'Walked the existing checkout as both user types — individual buyer and bulk clinic purchaser — documenting every step, input, friction point, and decision.' },
        { step: '02', label: 'Abandonment Mapping', desc: 'Identified the sharpest abandonment points: at forced account creation, at shipping before address input, and at payment where no order summary or trust signals were visible.' },
        { step: '03', label: 'Flow Restructuring', desc: 'Restructured to a linear four-step flow: Cart Review → Contact & Shipping → Payment → Order Confirmation. Persistent order summary sidebar on desktop, collapsible on mobile.' },
        { step: '04', label: 'Key UX Decisions', desc: 'Guest checkout with post-purchase account prompt, direct quantity input field, persistent order summary, shipping cost transparency before payment, and trust signals at the payment step.' },
      ],
      outcome: [
        'Reduced checkout from six undifferentiated steps to four clearly structured steps',
        'Introduced guest checkout, removing the forced account creation barrier',
        'Corrected the shipping-before-address sequence to match user mental models',
        'Added persistent order summary across all checkout steps',
        'Bulk order quantity input redesigned to support direct entry',
        'Post-purchase account creation prompt introduced as a conversion-friendly alternative to forced registration',
        'Full annotated flow, interaction specs, and microcopy documentation handed off to dev',
      ],
      reflection: "I'd push for a split test on the order summary placement on mobile — collapsible was the safe call given screen real estate, but there's an argument for a sticky mini-summary at the top of each step rather than a collapse toggle."
    },
    {
      id: 'corelix',
      title: 'Corelix — Design System',
      tagline: 'No source of truth, inconsistent UI, slow handoffs — the system had to be built from scratch.',
      pills: ['Design System', 'B2B SaaS', 'Design Lead'],
      role: 'Design Lead',
      tools: 'Figma · Tailwind CSS · Material-Tailwind UI · ClickUp',
      industry: 'B2B SaaS',
      image: './images/cs-03.png',
      overview: 'Corelix is a B2B SaaS platform that helps operations teams manage workflows, track tasks, and monitor performance across departments. As the product scaled, the lack of a unified design language created friction between design and development — inconsistent UI, duplicated components, and slow handoffs were slowing the team down. I was brought in to build the design system from the ground up.',
      problem: {
        intro: 'The product had grown fast. Multiple developers were building UI independently, pulling from inconsistent sources.',
        issues: [
          'No single source of truth for UI components',
          'Color, spacing, and typography applied inconsistently across screens',
          'Design-to-dev handoffs were slow and revision-heavy',
          'New team members had no reference to onboard from',
        ]
      },
      constraints: [
        'Stack was pre-decided — engineering had adopted Tailwind CSS and Material-Tailwind UI was chosen as the component framework',
        'No existing design documentation to build from',
        'Tight scope — priority was shipping a functional system, not a perfect one',
      ],
      process: [
        { step: '01', label: 'UI Audit', desc: 'Screenshotted live screens, catalogued every color, type style, spacing value, and component pattern in use. This surfaced the full scope of inconsistency and gave the baseline for token decisions.' },
        { step: '02', label: 'Design Tokens First', desc: 'Defined core primitives before touching a single component: color scales, type scale, 4px spacing grid, elevation model, border radius, and motion values.' },
        { step: '03', label: 'Component Architecture', desc: 'Atomic design methodology: Atoms → Molecules → Organisms. 50+ components across all three levels, each with all states covered: default, hover, focus, active, disabled, error, and loading.' },
        { step: '04', label: 'Material Design Principles', desc: 'Affordance and feedback, hierarchy through elevation, consistent density at B2B use (slightly higher density than consumer defaults), and 44px minimum touch targets for AA compliance.' },
        { step: '05', label: 'Documentation & Dev Handoff', desc: 'Every component documented with usage guidelines, anatomy, specs, do\'s and don\'ts, and accessibility notes. Figma component library with token mapping + Tailwind equivalents reference sheet.' },
      ],
      outcome: [
        'Reduced design-to-dev handoff time by eliminating repeated spec clarifications',
        'Established a single source of truth across design and engineering',
        'New team members — designers and developers — could onboard to the UI language significantly faster',
        '50+ components documented and production-ready at handoff',
      ],
      reflection: "I'd push for a tokenization review with engineering earlier in the process. Some token names required renaming after handoff because they conflicted with Tailwind's existing utility class naming — a naming convention alignment session upfront would have prevented that."
    }
  ],

  process: [
    {
      step: 'Step 01',
      title: 'Brief Before Assumptions',
      desc: 'Every project starts with understanding what the business actually needs — not what the first request says. A logo brief is rarely just a logo brief.',
    },
    {
      step: 'Step 02',
      title: 'Concept Grounded in Context',
      desc: 'Visual direction follows research into the brand, the audience, and the competitive space. Aesthetics without context is decoration.',
    },
    {
      step: 'Step 03',
      title: 'Craft at Every Scale',
      desc: 'Whether it\'s a brand system or a single social asset, the same level of attention applies. Visual quality isn\'t selective.',
    },
    {
      step: 'Step 04',
      title: 'Designed to Survive Production',
      desc: 'Print specs, digital formats, responsive breakpoints — deliverables are built for where they actually live, not just how they look in the mockup.',
    },
    {
      step: 'Step 05',
      title: 'Handoff That Actually Works',
      desc: 'Files organized, formats ready, specs documented. A design that confuses the printer or developer isn\'t finished.',
    },
  ],

  visualWorks: [
    { id: 1, title: 'Chinese New Year Campaign', category: 'Visual Assets', span: 'row-span-2', url: './images/ci-01.webp' },
    { id: 2, title: 'Logo Mockup — Jade Cotton & Hook', category: 'Brand Identity', span: '', url: './images/brandidentity-logomockup-01.webp' },
    { id: 3, title: 'Feed Post', category: 'Social Media', span: '', url: './images/socialmedia-feedpost-04.webp' },
    { id: 4, title: 'Email Marketing — Mother\'s Day', category: 'Digital Marketing', span: '', url: './images/digitalmarketing-emailmarketing-02.webp' },
    { id: 5, title: 'Logo Mockup — Smadar Events', category: 'Brand Identity', span: 'col-span-2', url: './images/brandidentity-businesscard-02.webp' },
    { id: 6, title: 'Email Marketing — Holidays', category: 'Visual Assets', span: 'row-span-2', url: './images/em-01.webp' },
    { id: 7, title: 'Brochure — Guilasons Furniture', category: 'Print Collateral', span: 'col-span-2', url: './images/printcollateral-brochure-01.webp' },
    { id: 8, title: 'Logo Mockup — Stitch BKLYN', category: 'Brand Identity', span: '', url: './images/brandidentity-logomockup-03.webp' },
    // Hidden initially (load more)
    { id: 9, title: 'Letterhead', category: 'Print Collateral', span: '', url: './images/printcollateral-packaging-01.webp', hidden: true },
    { id: 10, title: 'Feed Post', category: 'Social Media', span: '', url: './images/socialmedia-feedpost-02.webp', hidden: true },
    { id: 12, title: 'Letterhead', category: 'Brand Identity', span: 'row-span-2', url: './images/lh-02.webp', hidden: true },
    { id: 13, title: 'Logo — Guilasons Furniture', category: 'Brand Identity', span: '', url: './images/brandidentity-logo-04.webp', hidden: true },
    { id: 14, title: 'Feed Post', category: 'Social Media', span: 'col-span-2', url: './images/socialmedia-feedpost-03.webp', hidden: true },
    { id: 15, title: 'Logo Mockup — Guilasons Furniture', category: 'Brand Identity', span: '', url: './images/brandidentity-logomockup-02.webp', hidden: true },
    { id: 13, title: 'Logo — Stitch BKLYN', category: 'Brand Identity', span: '', url: './images/brandidentity-logo-02.webp', hidden: true },
    { id: 13, title: 'Logo — Stitch BKLYN variant', category: 'Brand Identity', span: '', url: './images/brandidentity-logo-01.webp', hidden: true },
    { id: 17, title: 'Product Image Cover', category: 'Visual Assets', span: '', url: './images/visualassets-productimagecover-02.webp', hidden: true },
    { id: 18, title: 'Brochure', category: 'Print Collateral', span: 'row-span-2', url: './images/printcollateral-brochure-03.webp', hidden: true },
    { id: 19, title: 'Logo Mockup — Smadar Events', category: 'Brand Identity', span: 'col-span-2', url: './images/brandidentity-logomockup-04.webp', hidden: true },
    { id: 20, title: 'Feed Post', category: 'Social Media', span: '', url: './images/socialmedia-feedpost-01.webp', hidden: true },
    { id: 21, title: 'Product Image Cover', category: 'Visual Assets', span: '', url: './images/visualassets-productimagecover-01.webp', hidden: true },
    { id: 22, title: 'Flyer', category: 'Print Collateral', span: 'row-span-2', url: './images/printcollateral-flyer-01.webp', hidden: true },
    { id: 23, title: 'Business Card Mockup — Stitch BKLYN', category: 'Brand Identity', span: 'col-span-2', url: './images/brandidentity-businesscard-01.webp', hidden: true },
    { id: 24, title: 'Capability Statement Cover Image', category: 'Digital Marketing', span: '', url: './images/digitalmarketing-capabilitystatement-02.webp', hidden: true },
    { id: 25, title: 'Capability Statement', category: 'Digital Marketing', span: '', url: './images/digitalmarketing-capabilitystatement-01.webp', hidden: true },
    { id: 26, title: 'Product Image Cover', category: 'Visual Assets', span: '', url: './images/visualassets-productimagecover-01.webp', hidden: true },
    { id: 27, title: 'Letterhead — Guilasons Furniture', category: 'Brand Identity', span: 'row-span-2', url: './images/brandidentity-letterhead-01.webp', hidden: true },
    { id: 28, title: 'Brochure', category: 'Print Collateral', span: '', url: './images/printcollateral-brochure-04.webp', hidden: true },
    { id: 29, title: 'Brochure', category: 'Print Collateral', span: '', url: './images/printcollateral-brochure-05.webp', hidden: true },
    { id: 30, title: 'Brochure', category: 'Print Collateral', span: '', url: './images/printcollateral-brochure-06.webp', hidden: true },
    { id: 31, title: 'Marketing Material', category: 'Visual Assets', span: '', url: './images/visualassets-marketingcover-02.webp', hidden: true },
    { id: 32, title: 'Brochure', category: 'Print Collateral', span: 'col-span-2', url: './images/printcollateral-brochure-02.webp', hidden: true },
  ]

};
