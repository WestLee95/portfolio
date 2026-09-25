# Eugene Westley Mwambacha — Portfolio Platform

An interactive, high-performance portfolio application built with **Next.js 15 (App Router)**, **React**, **Tailwind CSS**, and **Resend**. Designed to showcase dual expertise in **Frontend Architecture & Web Development** alongside **Voice-Over & Media Production**.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat-square&logo=tailwind-css)
![Resend](https://img.shields.io/badge/Resend-Email_API-black?style=flat-square&logo=resend)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0-black?style=flat-square&logo=framer)

---

## 🌟 Key Features

- **Dynamic Role Mode Switcher:** Toggle smoothly between **Combined**, **Frontend Dev**, and **Voice & Podcast** views powered by Framer Motion layout animations.
- **Interactive Audio Visualizer Sandbox:** Real-time HTML5 Canvas visualizer with scrubbing capabilities to preview voiceover audio clips and podcast snippets.
- **Code Preview Inspector:** Embedded code component viewer showcasing production-ready TypeScript/React code snippets.
- **Seamless Server Actions & Validation:** Server-side contact form with validation powered by Next.js `useActionState` and Server Actions.
- **Transactional Emails:** Built-in email delivery engine via [Resend](https://resend.com) with custom HTML templates designed using `@react-email/components`.
- **Responsive & Accessible Design:** Dark-mode optimized theme styled using Tailwind CSS with fluid typography and smooth micro-interactions.

---

## 🛠️ Tech Stack

### Core Framework & UI
- **Framework:** [Next.js](https://nextjs.org/) (App Router & React Server Components)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/) & [GSAP](https://gsap.com/)

### Email & Server
- **Email Delivery:** [Resend SDK](https://resend.com/)
- **Email Templating:** [@react-email/components](https://react.email/)
- **Server Mechanics:** React Server Actions & Next.js API Routes

---

## 📁 Project Structure

```text
├── app/
│   ├── actions/
│   │   └── sendEmail.ts         # Server Action with regex validation & Resend handler
│   ├── components/
│   │   └── ContactFormModal.tsx # Client-side contact modal component
│   ├── emails/
│   │   └── ContactFormEmail.tsx # React Email component template
│   ├── api/
│   │   └── contact/
│   │       └── route.ts         # Optional REST API route handler
│   ├── page.tsx                 # Main Interactive Portfolio Landing Page
│   └── layout.tsx               # Root Layout
├── public/                      # Static assets & audio previews
├── .env.local                   # Environment Variables
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js:** `v18.x` or higher
- **Package Manager:** `npm`, `pnpm`, or `yarn`

### 1. Clone the Repository

```bash
git clone https://github.com/WestLee95/eugene-portfolio.git
cd eugene-portfolio
```

### 2. Install Dependencies

```bash
npm install
# or
pnpm install
```

### 3. Environment Setup

Create a `.env.local` file in the root directory and configure your Resend API Key:

```env
RESEND_API_KEY=re_123456789_your_resend_api_key_here
```

> **Note:** To send emails to arbitrary recipients in production, verify your domain inside your [Resend Dashboard](https://resend.com/domains). During development with unverified domains, send to your account email (`onboarding@resend.dev`).

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 📧 Form Submission Architecture

The contact form utilizes **React Server Actions** and **React Email** for lightweight, dependency-free processing:

1. **Client Form Submission:** Client components call `useActionState(sendContactEmail, initialState)`.
2. **Server-Side Validation:** `sendEmail.ts` verifies input sanitization and standard email regex formats (`/^[^\s@]+@[^\s@]+\.[^\s@]+$/`).
3. **Template Rendering:** `@react-email/components` renders standard HTML e-mail layouts dynamically.
4. **Resend Dispatch:** The message is transmitted via Resend's API, and feedback state is surfaced directly to the user UI without standard page reloads.

---

## 👤 Author

**Eugene Westley Mwambacha**
- **Location:** Kenya 🇰🇪
- **GitHub:** [@WestLee95](https://github.com/WestLee95)
- **Twitter / X:** [@West_6795](https://x.com/West_6795)
- **LinkedIn:** [Eugene Westley](https://www.linkedin.com/in/eugene-westley-28a493248/)
- **Instagram:** [@westleymwambacha](https://www.instagram.com/westleymwambacha/)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
