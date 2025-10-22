# 💻 Multi-Page Frontend Project — Profile Card | Contact Me | About Me

A modern, accessible, and responsive **multi-page web application** built entirely with native web technologies (**HTML**, **CSS**, and **JavaScript**).

This project extends the **Profile Card Component** by introducing two new pages — a **Contact Me** form with live validation and an **About Me** reflection page — all unified under a clean, dark, and high-contrast UI theme optimized for accessibility.

---

### 🌐 Live Preview

Explore the live site hosted on Netlify:  
**[https://brainwave-pc.netlify.app/](https://brainwave-pc.netlify.app/)**

---

## ⚡ Overview

| Page | Description |
| :--- | :--- |
| **Profile Card** | A dynamic, interactive card that displays user information, live Unix timestamp, and supports custom avatar uploads. |
| **Contact Me** | A fully validated, accessible contact form with real-time feedback, ARIA-linked error messages, and a success confirmation state. |
| **About Me** | A reflective personal page structured semantically with distinct sections like bio, goals, and notes to future self. |

---

## ✨ Key Features

| Feature | Description | Technical Implementation |
| :--- | :--- | :--- |
| **Accessibility & Focus** | Every page and interactive element (social links, form inputs, buttons) is keyboard-navigable with clear focus states. | Semantic HTML elements and custom `:focus` outlines for visibility. |
| **Dynamic Responsiveness** | Layouts seamlessly adapt across mobile, tablet, and desktop breakpoints. | Modern Flexbox, Grid, and CSS media queries. |
| **Real-Time Timestamp (Profile)** | Continuously updates Unix timestamp (milliseconds) in real-time. | `Date.now()` with `setInterval()`. |
| **Dynamic Avatar Upload (Profile)** | Instantly updates profile photo when a user selects a local image file. | JavaScript `URL.createObjectURL()` logic. |
| **Form Validation (Contact Me)** | Inline validation ensures all fields are filled, email format is correct, and messages are 10+ characters before submission. | Vanilla JS form validation with accessible error messages via `aria-describedby`. |
| **Semantic Structure (About Me)** | Organized using `<main>`, `<section>`, `<header>`, and `<article>` for SEO and screen-reader support. | Clean, accessible HTML5 structure. |

---

## 🧭 Page Details

### 🪪 **Profile Card**
A dynamic user identity card built with a clean dark UI, real-time clock, and an avatar section.

**Data Test Hooks:**
`test-user-name`, `test-user-title`, `test-user-avatar`, `test-user-social-*`, etc.

---

### 💌 **Contact Me Page**
A simple yet professional **contact form** for users to reach out.

**Form Fields (each required):**
- Full Name — `data-testid="test-contact-name"`  
- Email — `data-testid="test-contact-email"`  
- Subject — `data-testid="test-contact-subject"`  
- Message — `data-testid="test-contact-message"`

**Validation & Accessibility:**
- Email must match `name@example.com` format.  
- Message must be **≥ 10 characters**.  
- Inline error messages use ARIA associations (`aria-describedby`).  
- Success message appears only after valid submission (`data-testid="test-contact-success"`).  
- Fully keyboard-accessible navigation and focus flow.

---

### 🧠 **About Me Page**
A reflective page where you share thoughts, goals, and personal insights.

**Sections (each with a unique `data-testid`):**
| Section | Test ID |
| :--- | :--- |
| Bio | `test-about-bio` |
| Goals in this program | `test-about-goals` |
| Areas of low confidence | `test-about-confidence` |
| Note to future self | `test-about-future-note` |
| Extra thoughts | `test-about-extra` |

**Structure & Accessibility:**
- Wrapped with `<main data-testid="test-about-page">`.  
- Each area represented as a semantic `<section>`.  
- Uses `<h2>` headings for clarity and screen-reader friendliness.  
- Responsive grid layout and consistent dark theme styling.

---

## 🧩 Accessibility & Semantic Highlights

- All images include descriptive `alt` attributes.
- All inputs have `<label>`s correctly linked via `for` and `id`.
- Dynamic error messages announced via `aria-live="polite"`.
- No reliance on frameworks — **pure HTML, CSS, and JS**.
- Fully keyboard navigable with visible focus states.

---

## 🧱 Project Structure
├── index.html #Profile Card Component
├── contactUs.html #Contact Me Page
├── aboutUs.html #About Me Page
├── assets/ # Images, icons, and decorative SVGs
├── index.css #Global styling (dark theme + responsive)
├── index.js #Core interactivity and validation logic
└── README.md #Documentation


---

## 🚀 Running the Project Locally

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/codexpro-dev/Profile-Card.git


Navigate to the Directory:

cd Profile-Card


Launch the Component:
Open index.html in your preferred browser (or use Live Server).

⚙️ Technical Notes for Testing

Each page includes unique data-testid attributes for robust and predictable end-to-end testing.

Profile: test-user-*

Contact: test-contact-*

About: test-about-*

These ensure consistent DOM hooks even if class names or styles evolve.

🖤 Crafted by CødeXpro

Built with a love for clean code, accessibility, and modern design principles.

{ CødeXpro }


---

✅ You can copy this entire Markdown block directly into your `README.md`.  
It’s formatted for GitHub and Netlify, includes all three pages, accessibility details, and testing hooks — ready for submission or public showcase.
