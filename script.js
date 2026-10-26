
/* ==========================================
   LEILA DALEON — PORTFOLIO CONFIGURATION
   Update your information in this file.
========================================== */

const SITE_CONFIG = {
  name: "Leila Therese Daleon",
  title: "Marketing & E-Commerce Specialist",
  tagline: "Making ideas work, look good, and grow.",

  // Paste your direct image URL here.
  // Example: https://your-domain.com/favicon.png
  favicon: "https://i.imgur.com/QKiFGbS.png",

  // Portrait path relative to the website root.
  portrait: "https://i.imgur.com/yCt1rTo.png",

  email: "leila.t.daleon@gmail.com",
  linkedin: "",
  resume: "",

  colors: {
    primary: "#350C5C",
    secondary: "#6E4A8A",
    background: "#FAF8FB"
  }
};

/* ==========================================
   PROJECT DATABASE
   Add or edit projects here.
   Use a direct image URL for each screenshot,
   or leave image empty to use a styled preview.
========================================== */

const PROJECTS = [
  {
    number: "01",
    category: "Digital commerce",
    title: "Online Store & Campaign Operations",
    description:
      "Storefront updates, product listings, campaign preparation, and live-selling support across online marketplaces.",
    tags: ["E-commerce", "Operations"],
    theme: "lavender",
    image: "",
    link: "#contact",
    linkText: "Discuss this project"
  },
  {
    number: "02",
    category: "Brand experience",
    title: "Product Branding & Visual Direction",
    description:
      "Visual concepts for product labels, packaging, promotional materials, and consistent brand communication.",
    tags: ["Branding", "Packaging"],
    theme: "peach-bg",
    image: "",
    link: "#contact",
    linkText: "Discuss this project"
  },
  {
    number: "03",
    category: "Digital presence",
    title: "Website Structure & Content",
    description:
      "Website page planning, brand storytelling, and responsive design for a clear browsing experience.",
    tags: ["Web Design", "Content"],
    theme: "sage-bg",
    image: "",
    link: "#contact",
    linkText: "Discuss this project"
  },
  {
    number: "04",
    category: "Workflow tools",
    title: "Business Workflow & Inventory Tools",
    description:
      "Spreadsheet-based tools and workflow planning to organize information and simplify routine processes.",
    tags: ["Google Sheets", "Automation"],
    theme: "blue-bg",
    image: "",
    link: "#contact",
    linkText: "Discuss this project"
  }
];

/* ==========================================
   WEBSITE INITIALIZATION
========================================== */

document.addEventListener("DOMContentLoaded", () => {
  // Page title
  document.title = `${SITE_CONFIG.name} | Portfolio`;

  // Favicon
  if (
    SITE_CONFIG.favicon &&
    !SITE_CONFIG.favicon.includes("PASTE_YOUR_")
  ) {
    const favicon = document.getElementById("site-favicon");
    if (favicon) {
      favicon.href = SITE_CONFIG.favicon;
    }
  }

  // Theme colors
  const root = document.documentElement;

  root.style.setProperty("--purple", SITE_CONFIG.colors.primary);
  root.style.setProperty("--purple-light", SITE_CONFIG.colors.secondary);
  root.style.setProperty("--paper", SITE_CONFIG.colors.background);

  // Personal details
  document.querySelectorAll("[data-site-name]").forEach(element => {
    element.textContent = SITE_CONFIG.name;
  });

  document.querySelectorAll("[data-site-title]").forEach(element => {
    element.textContent = SITE_CONFIG.title;
  });

  document.querySelectorAll("[data-site-tagline]").forEach(element => {
    element.textContent = SITE_CONFIG.tagline;
  });

  // Portrait
  document.querySelectorAll("[data-site-portrait]").forEach(image => {
    image.src = SITE_CONFIG.portrait;
    image.alt = `Professional portrait of ${SITE_CONFIG.name}`;
  });

  // Email
  document.querySelectorAll("[data-site-email]").forEach(link => {
    link.href = `mailto:${SITE_CONFIG.email}`;
  });

  // LinkedIn
  document.querySelectorAll("[data-site-linkedin]").forEach(link => {
    if (SITE_CONFIG.linkedin.startsWith("https://")) {
      link.href = SITE_CONFIG.linkedin;
      link.hidden = false;
    } else {
      link.hidden = true;
    }
  });

  // Résumé
  document.querySelectorAll("[data-site-resume]").forEach(link => {
    if (SITE_CONFIG.resume.startsWith("https://")) {
      link.href = SITE_CONFIG.resume;
      link.hidden = false;
    } else {
      link.hidden = true;
    }
  });

  // Copyright year
  const year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // Render project cards
  renderProjects();

  // Mobile menu
  initializeMobileMenu();
});

/* ==========================================
   PROJECT RENDERER
========================================== */

function renderProjects() {
  const grid = document.getElementById("projectGrid");
  if (!grid) return;

  grid.replaceChildren();

  PROJECTS.forEach(project => {
    const card = document.createElement("article");
    card.className = "project-card";

    const visual = document.createElement("div");
    visual.className = `project-visual ${project.theme || "lavender"}`;

    if (project.image) {
      const image = document.createElement("img");
      image.className = "project-preview-image";
      image.src = project.image;
      image.alt = `${project.title} project preview`;
      image.loading = "lazy";

      image.addEventListener("error", () => {
        image.remove();
        visual.appendChild(createMockPreview());
      });

      visual.appendChild(image);
    } else {
      visual.appendChild(createMockPreview());
    }

    const label = document.createElement("span");
    label.textContent = `${project.number} / ${project.category}`;
    visual.appendChild(label);

    const info = document.createElement("div");
    info.className = "project-info";

    const tags = document.createElement("div");
    tags.className = "tags";

    project.tags.forEach(tagText => {
      const tag = document.createElement("span");
      tag.textContent = tagText;
      tags.appendChild(tag);
    });

    const title = document.createElement("h3");
    title.textContent = project.title;

    const description = document.createElement("p");
    description.textContent = project.description;

    const link = document.createElement("a");
    link.className = "project-link";
    link.href = project.link || "#contact";
    link.textContent = `${project.linkText || "View project"} ↗`;

    // External project links open safely in a new tab.
    if (link.href.startsWith("https://")) {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }

    info.append(tags, title, description, link);
    card.append(visual, info);
    grid.appendChild(card);
  });
}

/* Decorative placeholder for projects without screenshots */

function createMockPreview() {
  const windowBox = document.createElement("div");
  windowBox.className = "mock-window";

  const bar = document.createElement("div");
  bar.className = "mock-bar";

  for (let i = 0; i < 3; i++) {
    bar.appendChild(document.createElement("i"));
  }

  const content = document.createElement("div");
  content.className = "mock-content";

  const image = document.createElement("div");
  image.className = "mock-image";

  const lines = document.createElement("div");
  lines.className = "mock-lines";

  for (let i = 0; i < 3; i++) {
    lines.appendChild(document.createElement("i"));
  }

  content.append(image, lines);
  windowBox.append(bar, content);

  return windowBox;
}

/* ==========================================
   MOBILE NAVIGATION
========================================== */

function initializeMobileMenu() {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (!menuToggle || !navLinks) return;

  menuToggle.addEventListener("click", () => {
    const opened = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(opened));
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}
