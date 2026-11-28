const PORTFOLIO_DATA = {
  experience: [
    {
      date: "Nov 2026 – Dec 2026",
      role: "Full Stack Development Intern",
      org: "Progree · Remote",
      desc: "Full-Stack Development & Git.",
      certs: [
        { label: "View Offer Letter ↗", img: "./certs/progree-offer-letter.jpg", title: "Progree — Offer Letter" }
      ]
    },
    {
      date: "Aug 2026 – Oct 2026",
      role: "Web Development Intern",
      org: "SafeX Solutions · Remote",
      desc: "Built responsive web interfaces and collaborated on agile development tasks.",
      certs: [
        { label: "View Certificate ↗", img: "./certs/safex-sol-web-dev-cert.jpg", title: "SafeX Solutions — Internship Certificate" }
      ]
    },
    {
      date: "Jul 2026 – Sep 2026",
      role: "GFX Designer Intern",
      org: "Skilient & TechShiner",
      desc: "Created graphic designs and visual assets aligned with project requirements.",
      certs: [
        { label: "View Certificate ↗", img: "./certs/skillent-cert-gfx-designer.jpg", title: "Skilient — GFX Designer Certificate" },
        { label: "View Offer Letter ↗", img: "./certs/skillent-offer-letter_2.jpeg", title: "TechShiner — Offer Letter" }
      ]
    },
    {
      date: "Jul 2026 – Nov 2026",
      role: "Graphic Designer Intern",
      org: "Relief Mission Foundation",
      desc: "Designed promotional and awareness graphics for social welfare campaigns.",
      certs: [
        { label: "View Offer Letter ↗", img: "./certs/relief-mission-foundation-offer-letter.jpeg", title: "Relief Mission Foundation — Offer Letter" },
        { label: "View Certificate ↗", img: "./certs/relief-mission-foundation-cert.jpg", title: "Relief Mission Foundation — Certificate" }
      ]
    },
    {
      date: "Sep 2026",
      role: "AI Research Intern",
      org: "ZEST AI Hub",
      desc: "Completed the AI Research Internship with Distinction.",
      certs: [
        { label: "View Certificate ↗", img: "./certs/ai-internship-cert-zest-ai-hub.jpg", title: "ZEST AI Hub — AI Research Internship Certificate" }
      ]
    },
    {
      date: "Apr 2026 – Jul 2026",
      role: "Fellow",
      org: "Aspire Leaders Program (Aspire Institute)",
      desc: "Completed 40 hours of leadership, communication, and critical thinking coursework.",
      certs: [
        { label: "View Certificate ↗", img: "./certs/aspire-cert.jpeg", title: "Aspire Institute — 2026 Aspire Leaders Program" }
      ]
    },
    {
      date: "Feb 2026 – Mar 2026",
      role: "Web Development Intern",
      org: "Arch Technologies · Remote",
      desc: "Built responsive web pages and UI components using HTML, CSS, and JavaScript.",
      certs: [
        { label: "View Certificate ↗", img: "./certs/arch-technology-cert.jpeg", title: "Arch Technologies — Certificate" },
        { label: "View LOR ↗", img: "./certs/arch-technology-recom-letter.jpeg", title: "Arch Technologies — Letter of Recommendation" }
      ]
    },
    {
      date: "Sep 2025 – Present",
      role: "Cambridge Teacher (Part-time)",
      org: "Cambridge Scholar Center · Karachi",
      desc: "",
      certs: []
    }
  ],

  volunteer: [
    {
      date: "2026 – Present",
      role: "Ambassador, Graphic Designer, Host & SMM",
      org: "Med Sparkles & Medsparkles Academy",
      certs: [
        { label: "June Cert ↗", img: "./certs/medsparkle-top-20-june-cert.jpeg", title: "Medsparkles — Honor Roll (June 2026)" },
        { label: "Sep Cert ↗", img: "./certs/med-sparkle-sep-cert.jpg", title: "Medsparkles — Honor Roll (Sep 2026)" }
      ]
    },
    {
      date: "2026 – Present",
      role: "Volunteer & Challenge Winner",
      org: "ZEST AI Hub",
      certs: [
        { label: "1st Position ↗", img: "./certs/AI-for-pak-challenge-zest ai-hub.jpg", title: "ZEST AI Hub — 1st Position Winner" },
        { label: "Volunteer Cert ↗", img: "./certs/zest-ai-hub-voluteer.jpg", title: "ZEST AI Hub — Special Appreciation" }
      ]
    },
    {
      date: "2026 – Present",
      role: "Ambassador, Moderator & Coordinator",
      org: "Bano Qabil, Learning Node, Saafify & AWS SBU SSUET",
      certs: []
    }
  ],

  education: [
    {
      date: "Feb 2026 – Dec 2030",
      role: "B.E Tech (Software), Software Engineering Technology",
      org: "Sir Syed University of Engineering & Technology (SSUET)"
    },
    {
      date: "Jul 2022 – Jul 2024",
      role: "Intermediate (Grade A)",
      org: "Khatoon e Pakistan College"
    },
    {
      date: "May 2022",
      role: "Matric (Grade A-1)",
      org: "FF Public School"
    },
    {
      date: "2025",
      role: "Graphic Designing & UI/UX, CIT & Python",
      org: "NED Academy (PITP) & Bano Qabil"
    }
  ],

  certificates: [
    {
      type: "COURSE CERTIFICATE",
      title: "Graphic Designing & UI/UX Design",
      desc: "NED Academy PITP (Sep 22 – Nov 14, 2025).",
      tags: ["UI/UX", "Graphic Design"],
      buttons: [
        { label: "Preview ↗", img: "./certs/graphic-design-certs.jpeg", modalTitle: "NED Academy — Graphic Designing & UI/UX" }
      ]
    },
    {
      type: "COURSE CERTIFICATES",
      title: "CIT & Python (Basics to FastAPI)",
      desc: "Bano Qabil courses in Computer Information Technology and Python/FastAPI (2025).",
      tags: ["CIT", "Python", "FastAPI"],
      buttons: [
        { label: "CIT Cert ↗", img: "./certs/bano-qabil-cit-cert.jpeg", modalTitle: "Bano Qabil — CIT Provisional Cert" },
        { label: "Python Cert ↗", img: "./certs/bano-qabil-cert-python-prog-fast-api.jpeg", modalTitle: "Bano Qabil — Python & FastAPI Cert" }
      ]
    },
    {
      type: "FELLOWSHIP",
      title: "2026 Aspire Leaders Program",
      desc: "Completed 40 hours of leadership coursework with Aspire Institute (July 2026).",
      tags: ["Leadership", "Communication"],
      buttons: [
        { label: "Preview ↗", img: "./certs/aspire-cert.jpeg", modalTitle: "Aspire Institute — 2026 Aspire Leaders Program" }
      ]
    },
    {
      type: "AI & CHALLENGE",
      title: "ZEST AI Hub Certificates",
      desc: "AI Research Internship (With Distinction), AI for Pakistan Challenge 2026 (1st Position & Completion), and Volunteer certificates.",
      tags: ["AI", "1st Position", "Volunteer"],
      buttons: [
        { label: "Research ↗", img: "./certs/ai-internship-cert-zest-ai-hub.jpg", modalTitle: "ZEST AI Hub — AI Research Internship" },
        { label: "1st Position ↗", img: "./certs/AI-for-pak-challenge-zest ai-hub.jpg", modalTitle: "ZEST AI Hub — 1st Position Winner" },
        { label: "Completion ↗", img: "./certs/zest-ai-hub.jpg", modalTitle: "ZEST AI Hub — Challenge Completion" },
        { label: "Volunteer ↗", img: "./certs/zest-ai-hub-voluteer-certs.jpeg", modalTitle: "ZEST AI Hub — Volunteer Appreciation" }
      ]
    },
    {
      type: "HONOR ROLL",
      title: "Medsparkles Top 20 Achievers",
      desc: "Honor Roll of Excellence recognition for June 2026 and September 2026.",
      tags: ["Honor Roll", "Medsparkles"],
      buttons: [
        { label: "June 2026 ↗", img: "./certs/medsparkle-top-20-june-cert.jpeg", modalTitle: "Medsparkles — Honor Roll (June 2026)" },
        { label: "Sep 2026 ↗", img: "./certs/med-sparkle-sep-cert.jpg", modalTitle: "Medsparkles — Honor Roll (Sep 2026)" }
      ]
    },
    {
      type: "INTERNSHIPS & OFFERS",
      title: "Web & Graphic Design Credentials",
      desc: "Arch Technologies, SafeX Solutions, Skilient, TechShiner, Relief Mission Foundation, and Progree.",
      tags: ["Web Dev", "GFX", "Offer Letters"],
      buttons: [
        { label: "Arch Cert ↗", img: "./certs/arch-technology-cert.jpeg", modalTitle: "Arch Technologies — Certificate" },
        { label: "SafeX Cert ↗", img: "./certs/safex-sol-web-dev-cert.jpg", modalTitle: "SafeX Solutions — Certificate" },
        { label: "Skilient ↗", img: "./certs/skillent-cert-gfx-designer.jpg", modalTitle: "Skilient — GFX Certificate" },
        { label: "Progree ↗", img: "./certs/progree-offer-letter.jpg", modalTitle: "Progree — Offer Letter" }
      ]
    }
  ],

  skills: [
    { num: "01", name: "HTML", desc: "Semantic web structure." },
    { num: "02", name: "CSS", desc: "Responsive layouts & styling." },
    { num: "03", name: "JavaScript", desc: "Interactive web features." },
    { num: "04", name: "Python", desc: "Programming & backend logic." },
    { num: "05", name: "Flask", desc: "Python backend web apps." },
    { num: "06", name: "Git & GitHub", desc: "Version control & hosting." },
    { num: "07", name: "Figma", desc: "UI & wireframe design." },
    { num: "08", name: "Illustrator", desc: "Vector & brand graphics." }
  ],

  projects: [
    {
      type: "FEATURED PROJECT",
      title: "Bicycle Admin Dashboard",
      desc: "Admin dashboard for managing bike rental/sales records, metrics, and application status.",
      tags: ["HTML", "CSS", "JavaScript", "GitHub"],
      link: { label: "GitHub Repo ↗", href: "https://github.com/Hafiza-Ayesha7/bicycle-admin-dashboard" }
    },
    {
      type: "FEATURED PROJECT",
      title: "KarigarHub",
      desc: "Platform concept connecting users with skilled local service workers.",
      tags: ["HTML", "CSS", "JavaScript", "Flask"],
      link: { label: "Drive Folder ↗", href: "https://drive.google.com/drive/folders/1jb36gs6jUSm7V73_RazUQgEb2BeL34fg" }
    },
    {
      type: "WEB APPLICATION",
      title: "Personal Portfolio",
      desc: "Responsive portfolio showcasing skills, experience, certificates, and projects.",
      tags: ["HTML", "CSS", "JavaScript"],
      link: { label: "View File Link ↗", href: "https://drive.google.com/file/d/1PMGq7yra2qVhz8rLb0x9mH0VV2AAA_GG/view?usp=drivesdk&usp=embed_facebook" }
    },
    {
      type: "CREATIVE DESIGN",
      title: "Social Media Designs",
      desc: "Educational, campaign, and social media graphics created for organizations.",
      tags: ["Illustrator", "Figma", "Canva"],
      link: null
    }
  ]
};

function createCertButton(label, img, title) {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "cert-btn";
  btn.dataset.certImg = img;
  btn.dataset.certTitle = title;
  btn.textContent = label;
  return btn;
}

function renderTimelineSection(selector, items, includeDesc = true) {
  const container = document.querySelector(selector);
  if (!container) return;
  container.innerHTML = "";

  items.forEach((item) => {
    const article = document.createElement("article");
    article.className = "timeline-item";

    const dateEl = document.createElement("span");
    dateEl.className = "timeline-date";
    dateEl.textContent = item.date;

    const roleEl = document.createElement("h3");
    roleEl.textContent = item.role;

    const orgEl = document.createElement("h4");
    orgEl.className = "company-name";
    orgEl.textContent = item.org;

    article.append(dateEl, roleEl, orgEl);

    if (includeDesc && item.desc) {
      const descEl = document.createElement("p");
      descEl.textContent = item.desc;
      article.appendChild(descEl);
    }

    if (Array.isArray(item.certs) && item.certs.length > 0) {
      item.certs.forEach((c) => {
        article.appendChild(createCertButton(c.label, c.img, c.title));
      });
    }

    container.appendChild(article);
  });
}

function renderCertificates() {
  const grid = document.querySelector("#certificates .projects-grid");
  if (!grid) return;
  grid.innerHTML = "";

  PORTFOLIO_DATA.certificates.forEach((cert) => {
    const card = document.createElement("article");
    card.className = "project-card";

    const typeEl = document.createElement("span");
    typeEl.className = "project-type";
    typeEl.textContent = cert.type;

    const titleEl = document.createElement("h3");
    titleEl.textContent = cert.title;

    const descEl = document.createElement("p");
    descEl.textContent = cert.desc;

    const tagsEl = document.createElement("div");
    tagsEl.className = "tags";
    cert.tags.forEach((tag) => {
      const span = document.createElement("span");
      span.textContent = tag;
      tagsEl.appendChild(span);
    });

    const linksEl = document.createElement("div");
    linksEl.className = "project-links";
    cert.buttons.forEach((b) => {
      linksEl.appendChild(createCertButton(b.label, b.img, b.modalTitle));
    });

    card.append(typeEl, titleEl, descEl, tagsEl, linksEl);
    grid.appendChild(card);
  });
}

function renderSkills() {
  const grid = document.querySelector("#skills .skills-grid");
  if (!grid) return;
  grid.innerHTML = "";

  PORTFOLIO_DATA.skills.forEach((skill) => {
    const card = document.createElement("div");
    card.className = "skill-card";
    card.innerHTML = `
      <span class="card-num">${skill.num}</span>
      <h3>${skill.name}</h3>
      <p>${skill.desc}</p>
    `;
    grid.appendChild(card);
  });
}

function renderProjects() {
  const grid = document.querySelector("#projects .projects-grid");
  if (!grid) return;
  grid.innerHTML = "";

  PORTFOLIO_DATA.projects.forEach((proj) => {
    const card = document.createElement("article");
    card.className = "project-card";

    const tagsHtml = proj.tags.map((t) => `<span>${t}</span>`).join("");
    const linkHtml = proj.link
      ? `<div class="project-links"><a href="${proj.link.href}" target="_blank" rel="noopener noreferrer" class="project-btn">${proj.link.label}</a></div>`
      : "";

    card.innerHTML = `
      <span class="project-type">${proj.type}</span>
      <h3>${proj.title}</h3>
      <p>${proj.desc}</p>
      <div class="tags">${tagsHtml}</div>
      ${linkHtml}
    `;
    grid.appendChild(card);
  });
}

function initProfileAvatar() {
  const photo = document.getElementById("profilePhoto");
  const fallback = document.getElementById("profileFallback");
  if (!photo || !fallback) return;

  photo.addEventListener("error", () => {
    photo.hidden = true;
    fallback.hidden = false;
  });
}

function initThemeToggle() {
  const btn = document.getElementById("themeToggle");
  const icon = document.getElementById("themeIcon");
  const label = document.getElementById("themeLabel");
  if (!btn) return;

  const savedTheme = localStorage.getItem("theme");
  const applyTheme = (isLight) => {
    document.body.classList.toggle("light-theme", isLight);
    btn.setAttribute("aria-pressed", String(isLight));
    if (icon) icon.innerHTML = isLight ? "&#9790;" : "&#9728;";
    if (label) label.textContent = isLight ? "Dark" : "Light";
    localStorage.setItem("theme", isLight ? "light" : "dark");
  };

  applyTheme(savedTheme === "light");

  btn.addEventListener("click", () => {
    applyTheme(!document.body.classList.contains("light-theme"));
  });
}

function initNavigation() {
  const toggle = document.getElementById("menuToggle");
  const menu = document.getElementById("navMenu");
  if (!toggle || !menu) return;

  const setMenuState = (open) => {
    menu.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
  };

  toggle.addEventListener("click", () => {
    setMenuState(!menu.classList.contains("open"));
  });

  menu.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => setMenuState(false));
  });
}

function initCertModal() {
  const modal = document.getElementById("certModal");
  const closeBtn = document.getElementById("certModalClose");
  const titleEl = document.getElementById("certModalTitle");
  const imgEl = document.getElementById("certModalImg");
  const fallbackEl = document.getElementById("certModalFallback");
  if (!modal || !imgEl) return;

  const closeModal = () => {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    imgEl.removeAttribute("src");
    if (fallbackEl) fallbackEl.textContent = "";
  };

  document.addEventListener("click", (e) => {
    const trigger = e.target.closest("[data-cert-img]");
    if (!trigger) return;

    const src = trigger.dataset.certImg;
    const title = trigger.dataset.certTitle || "Certificate Preview";

    if (titleEl) titleEl.textContent = title;
    if (fallbackEl) fallbackEl.textContent = "";
    imgEl.hidden = false;
    imgEl.alt = title;
    imgEl.src = src;

    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
  });

  imgEl.addEventListener("error", () => {
    imgEl.hidden = true;
    if (fallbackEl) {
      fallbackEl.textContent = `Could not load image (${imgEl.getAttribute("src")}). Check the file inside ./certs/.`;
    }
  });

  if (closeBtn) closeBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) {
      closeModal();
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderTimelineSection("#experience .timeline", PORTFOLIO_DATA.experience, true);
  renderTimelineSection("#volunteer .timeline", PORTFOLIO_DATA.volunteer, false);
  renderTimelineSection("#education .timeline", PORTFOLIO_DATA.education, false);
  renderCertificates();
  renderSkills();
  renderProjects();

  initProfileAvatar();
  initThemeToggle();
  initNavigation();
  initCertModal();
});