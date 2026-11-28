📌 Table of Contents

Overview

Key Features

Tech Stack & Architecture

Project Directory Structure

Getting Started

Prerequisites

Local Installation & Development

Data Structure & Configuration

Deployment (GitHub Pages)

Contributing

License

Contact

📖 Overview

This repository contains the source code for Ayesha's Personal Portfolio Website. Designed with a modern Glassmorphism UI, this single-page web application showcases professional experience, volunteer leadership roles, technical certifications, academic background, and web development projects.

The website features data-driven rendering via vanilla JavaScript, ensuring that updating experience items or certificates only requires modifying a centralized data structure (PORTFOLIO_DATA) without touching raw HTML components.

🚀 Key Features

💎 Glassmorphic Design: Modern visual layout featuring frosted-glass components, subtle backdrop blurs, glow accents, and responsive typography.

🌓 Dark / Light Theme Switcher: Fully customizable theme toggler using CSS custom properties with persistent user preference stored in localStorage.

⚡ Data-Driven Architecture: Timeline items, project cards, and credentials are rendered dynamically from a structured JavaScript object (PORTFOLIO_DATA).

📜 Interactive Certificate Preview Modal: Embedded modal dialog that opens hi-res previews of internship offer letters and course certificates, complete with Escape key listeners, backdrop dismissals, and broken-image fallbacks.

📱 Fully Responsive Layout: Optimized for all viewport sizes (Mobile, Tablet, Laptop, and Desktop) using CSS Grid, Flexbox, and fluid media queries.

♿ Accessibility & SEO Friendly: Semantic HTML5 elements (<header>, <main>, <section>, <article>, <footer>) with explicit aria-* attributes and keyboard navigation support.

🛠️ Tech Stack & Architecture

Frontend Core: HTML5, CSS3, Vanilla JavaScript (ES6+)

Styling Architecture: Modern CSS (Variables, CSS Grid, Flexbox, Glassmorphism Backdrop Filters, CSS Transitions)

Icons & Graphics: Inline SVG icons & Unicode symbols

Asset Management: Optimized local image assets for user avatar and credential proofs

📁 Project Directory Structure

PORTFOLIO/
│
├── index.html              # Main HTML entry point & structural markup
├── style.css               # Global glassmorphism styles, animations & themes
├── script.js                # Data layer, DOM renderer, modal logic & theme handler
├── README.md               # Project documentation & setup instructions
│
├── assets/                 # Profile images & branding media
│   └── profile.jpg         # Primary portrait avatar
│
└── certs/                  # Verified certificate preview images & offer letters
    ├── AI-for-pak-challenge-zest ai-hub.jpg
    ├── ai-internship-cert-zest-ai-hub.jpg
    ├── arch-technology-cert.jpeg
    ├── arch-technology-recom-letter.jpeg
    ├── aspire-cert.jpeg
    ├── bano-qabil-cert-python-prog-fast-api.jpeg
    ├── bano-qabil-certs.jpeg
    ├── bano-qabil-cit-cert.jpeg
    ├── graphic-design-certs.jpeg
    ├── med-sparkle-sep-cert.jpg
    ├── medsparkle-top-20-june-cert.jpeg
    ├── progree-offer-letter.jpg
    ├── relief-mission-foundation-cert.jpg
    ├── relief-mission-foundation-offer-letter.jpeg
    ├── safex-sol-web-dev-cert.jpg
    ├── skillent-cert-gfx-designer.jpg
    ├── skillent-offer-letter_2.jpeg
    ├── zest-ai-hub-voluteer-certs.jpeg
    ├── zest-ai-hub-voluteer.jpg
    └── zest-ai-hub.jpg


💻 Getting Started

Prerequisites

To run and preview this project locally, you only need a modern web browser (e.g., Chrome, Edge, Firefox, Safari).

Local Installation & Development

Clone the repository:

git clone https://github.com/Hafiza-Ayesha7/PORTFOLIO.git
cd PORTFOLIO


Run via a local HTTP server:
(Avoid opening index.html via file:// directly to enable full asset loading and modal behavior.)

Using Python 3:

python -m http.server 5500


Using VS Code:
Right-click index.html and select "Open with Live Server".

View in Browser:
Open your browser and navigate to http://localhost:5500.

⚙️ Data Structure & Configuration

All portfolio content is maintained centrally in script.js inside the PORTFOLIO_DATA constant.

To add a new experience item, volunteer role, or certificate, update script.js directly:

// Example: Adding a new certificate item
PORTFOLIO_DATA.certificates.push({
  type: "COURSE CERTIFICATE",
  title: "Advanced Web Engineering",
  desc: "Completed advanced modern web development course.",
  tags: ["JavaScript", "Web Architecture"],
  buttons: [
    { 
      label: "Preview ↗", 
      img: "./certs/example-cert.jpg", 
      modalTitle: "Advanced Web Engineering Certificate" 
    }
  ]
});


🌐 Deployment (GitHub Pages)

This static website is ready for zero-configuration hosting on GitHub Pages.

Push your code to GitHub:

git add .
git commit -m "Build: Prepare site for deployment"
git push origin main


Configure GitHub Pages:

Navigate to your repository on GitHub.

Go to Settings → Pages.

Under Build and deployment:

Source: Select Deploy from a branch.

Branch: Select main branch and / (root) folder.

Click Save.

Live Site: Your site will be published at https://Hafiza-Ayesha7.github.io/PORTFOLIO/.

🤝 Contributing

Contributions, feedback, and suggestions are always welcome!

Fork the Project

Create your Feature Branch (git checkout -b feature/AmazingFeature)

Commit your Changes (git commit -m 'Add some AmazingFeature')

Push to the Branch (git push origin feature/AmazingFeature)

Open a Pull Request

📄 License

Distributed under the MIT License. See LICENSE for more information.

📬 Contact

Ayesha — Software Engineering Technology Student & Web Developer

📧 Email: hafizaayesha725@gmail.com

🐙 GitHub: @Hafiza-Ayesha7

💼 LinkedIn: Ayesha Iqbal