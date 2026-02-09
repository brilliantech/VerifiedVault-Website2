# VaultVerified Website - Final Development Prompt

## BUSINESS CONTEXT
VaultVerified is a B2B enterprise security platform that prevents Business Email Compromise (BEC) fraud by removing banking changes from email systems entirely. Core philosophy: "Email should never be a system of record for money."

**Target Audience:** Finance teams, AP teams, Security leaders, Compliance officers at enterprise organizations.

## DESIGN PHILOSOPHY - NON-NEGOTIABLE
**Visual Identity:** Conservative financial institution (Bank of America style) - NOT startup SaaS
**References:** 
- Bank of America checking/loans pages
- Better Money Habits by Bank of America
- https://divide-quest-43186657.figma.site

**ABSOLUTE DON'TS:**
❌ No futuristic UI or AI-styled design
❌ No hype, fear tactics, or marketing buzzwords
❌ No oversized hero sections or flashy animations
❌ No gradient-heavy or neon colors
❌ No "AI-powered", "next-gen", "revolutionary" language

**MUST FEEL:**
✅ Calm, authoritative, structured
✅ Familiar to enterprise finance users
✅ Trustworthy and audit-safe
✅ Text-first layouts with dense but readable content
✅ Minimal scrolling per page

## TECHNICAL STACK
- Next.js 15 with App Router
- TypeScript throughout
- Tailwind CSS (conservative color palette)
- Responsive design (mobile-first)
- SEO optimized
- WCAG accessibility compliant
- Fast loading performance

## SITE ARCHITECTURE
```
Primary Navigation:
├── Home
├── Solutions
│   ├── Vault (Secure Banking Updates)
│   ├── NACHA Compliance & Audit
│   └── VAAS (Outsourced Verification)
├── Resources
├── Company
└── Contact

Persistent CTAs: "Request a Demo" + "Sign Up" (subtle, non-salesy)
```

## PAGE-BY-PAGE REQUIREMENTS

### HOME PAGE
**Section 1: Hero (Compact)**
- Headline: "Secure payment changes. Verified identity. Built-in compliance."
- Subtext: "VaultVerified prevents ACH and wire fraud by removing banking changes from email, verifying real identities, and creating auditable, compliant workflows."
- CTAs: Request a Demo | Get Started

**Section 2: Why Fraud Happens**
- Headline: "Fraud doesn't start with a bad actor — it starts with a trusted email."
- Educational content about BEC, email takeover, hidden rules, payment redirection
- Tone: Educational, factual, non-alarmist

**Section 3: Core Failure**
- Headline: "Email was never meant to be a financial system."
- Points: Email can't verify identity, approvals lack audit proof, compliance expectations increasing

**Section 4: How VaultVerified Works**
Three pillars:
1. Secure Banking Vault - Real-time banking updates outside email
2. NACHA-Compliant Verification - Documented identity verification and audit trails
3. Outsourced Verification (VAAS) - Dedicated verification operations

### SOLUTIONS PAGES

**Vault Page (5 W's Structure):**
- What is the Vault?
- Who is it for? (AP teams, Finance teams, Security leaders)
- Why it exists (BEC prevention)
- Where data is stored (secure infrastructure)
- When information is available (real-time)

**NACHA Compliance Page:**
- March 2026 NACHA updates
- Stronger identity verification requirements
- Audit expectations and documentation
- How VaultVerified meets standards
- Exportable reporting and time-stamped trails

**VAAS Page:**
- What VAAS is (Verification-as-a-Service)
- What it handles (banking changes, identity validation, oversight)
- Why organizations use it (risk reduction, scalability)

### SUPPORTING PAGES
- **Resources:** Blog, articles, case studies, how-to guides
- **Company:** Mission, philosophy ("Fraud prevention built into systems")
- **Contact:** Form, demo requests, support, sign-up

## CONTENT TONE & MESSAGING
- Educational approach (not fear-based)
- System documentation style, not marketing
- Conservative financial services language
- Focus on prevention over reaction
- Authority through expertise, not claims

## SUCCESS CRITERIA
When shown to CFO, AP Manager, Compliance Officer, or Risk Leader, they should say: "This feels legitimate, clear, and built for audit scrutiny."

## IMPLEMENTATION APPROACH
1. Set up clean project structure with TypeScript
2. Create conservative design system with Tailwind
3. Build responsive navigation with dropdown
4. Implement all pages with exact content structure
5. Ensure accessibility and performance optimization
6. Test across devices and browsers