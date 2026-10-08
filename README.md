# 🏋️ JV Fitness & Wellness Club

A modern, premium fitness and wellness website built with Next.js 16, featuring stunning animations, responsive design, and a storytelling-first approach.

![Next.js](https://img.shields.io/badge/Next.js-16.1.3-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-Animations-FF0055?style=for-the-badge&logo=framer)

---

## ✨ Features

### 🎨 Premium Design
- **Storytelling-first approach** - Emotional, human-centered design
- **Green & White theme** - Fresh, energetic, modern health & wellness palette
- **Glassmorphism effects** - Contemporary glass-like UI elements
- **Professional typography** - Inter font for optimal readability

### 🎬 Advanced Animations
- **Framer Motion animations** - Smooth scroll reveals and transitions
- **Magnetic buttons** - Interactive hover effects
- **Animated gradient text** - Eye-catching headlines
- **Floating badges** - Dynamic coach profile display
- **Marquee testimonials** - Auto-scrolling social proof

### 📱 Sections
| Section | Description |
|---------|-------------|
| **Hero** | Coach photo with floating badges & animated effects |
| **StoryIntro** | Empathetic messaging addressing user pain points |
| **Programs** | Bento-style grid with program cards |
| **TransformationJourney** | Before/During/After visual journey |
| **TransformationProcess** | Step-by-step coaching timeline |
| **FreeHealthCheckup** | Book Free Health Checkup via WhatsApp + Services list |
| **Testimonials** | Auto-scrolling marquee with reviews |
| **FAQ** | Accordion-style collapsible answers |
| **CTA** | Final conversion section with gradient |
| **Contact** | Form + Google Maps + WhatsApp integration |

### 📞 Integrations
- **WhatsApp** - Click-to-chat with pre-filled message
- **Click-to-Call** - Direct phone dialing
- **Email** - mailto: integration
- **Google Maps** - Embedded location map

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ or Bun
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/RaviSorathiya03/jvFitness.git
cd jvFitness/jvfitness

# Install dependencies
bun install
# or
npm install

# Run development server
bun run dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Build for Production

```bash
bun run build
# or
npm run build
```

---

## 📁 Project Structure

```
jvfitness/
├── app/
│   ├── (marketing)/        # Marketing route group
│   │   ├── layout.tsx      # Marketing layout with navbar/footer
│   │   └── page.tsx        # Homepage with all sections
│   ├── globals.css         # Global styles & animations
│   └── layout.tsx          # Root layout
├── components/
│   ├── layout/             # Navbar, Footer
│   ├── sections/           # All page sections
│   ├── shared/             # Reusable components
│   └── ui/                 # UI primitives (buttons, cards, etc.)
├── data/                   # Static data (programs, pricing, FAQs)
├── lib/                    # Utilities, site config, SEO
└── public/images/          # Static images
```

---

## 🎨 Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Font:** Inter (Google Fonts)

---

## 📝 Configuration

### Site Settings
Edit `lib/site.ts` to update:
- Business name & tagline
- Contact details (phone, email, address)
- WhatsApp number
- Business hours
- Social media links

### Programs & Pricing
Edit files in `data/` folder:
- `programs.ts` - Coaching programs
- `pricing.ts` - Pricing tiers
- `faqs.ts` - FAQ content
- `testimonials.ts` - Client reviews

---

## 🚢 Deployment

### Deploy on Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/RaviSorathiya03/jvFitness)

### Other Platforms
The app can be deployed on any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

---

## 📄 Compliance Note

> **Disclaimer:** This website is for an independent Herbalife Nutrition associate/member. It promotes coaching services only, not product sales. Results may vary based on individual effort.

---

## 📞 Contact

- **Website:** [jvfitness.in](https://jvfitness.in)
- **Phone:** +91 97270 54846
- **Email:** rsorathiya16@gmail.com
- **Location:** Adipur, Gujarat, India

---

## 📜 License

This project is private and proprietary.

---

<p align="center">
  Made with 💜 by <a href="https://github.com/RaviSorathiya03">Ravi Sorathiya</a>
</p>
