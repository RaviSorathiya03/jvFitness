# JV Fitness & Wellness Club

A responsive Next.js website for the fitness and wellness club in Adipur, Gujarat. The design uses forest green, leaf green, and warm white, with local photography, clear typography, and restrained motion.

## Development

```sh
npm install
npm run dev
```

Open http://localhost:3000. For a production build:

```sh
npm run build
npm start
```

## Validation

```sh
npm run lint
npx tsc --noEmit
npm run build
```

The project uses Next.js 16, React 19, TypeScript, Tailwind CSS 4, Lucide icons, Radix Dialog, and Framer Motion. Use a Node.js version supported by the installed Next.js release.

## Page and interactions

- Introduction with local fitness photography, animated club emblem, and consultation links.
- Three featured programs, category filters, and an option to reveal all seven programs.
- Accessible program dialogs with keyboard dismissal, focus restoration, and a link that preselects the consultation goal.
- Coach introduction using the club’s original Jagruti Vaniya photo.
- Three-step coaching process, three existing member stories, and a compact FAQ.
- Consultation form with required fields, phone validation, editable details, and a prepared WhatsApp message.
- Click-to-call, directions, email, business hours, and the existing associate disclosure.
- Responsive phone, tablet, and desktop layouts; reduced-motion support; skip navigation; branded favicon and social preview.

## Booking behavior

The form prepares a message locally. Visitors must open WhatsApp and send it themselves. It does not save leads to a database, send messages automatically, or claim a booking is confirmed. The coach confirms the visit in the WhatsApp conversation.

## Content and appearance

- `lib/site.ts`: business contact information, hours, navigation, and disclosure.
- `data/programs.ts`: program descriptions and inclusions.
- `components/sections/Programs.tsx`: program presentation, categories, and photography.
- `data/testimonials.ts`: existing member reviews.
- `data/faqs.ts`: FAQ answers.
- `app/globals.css`: palette, typography, layouts, responsive rules, and motion.
- `public/images/`: local images; the coach photograph is the original club asset.

Fitness and food photography comes from Pexels photos [1552242](https://www.pexels.com/photo/1552242/), [841130](https://www.pexels.com/photo/841130/), [1640777](https://www.pexels.com/photo/1640777/), and [3757376](https://www.pexels.com/photo/3757376/). These are illustrative program images, not photographs of the club’s premises or members.
