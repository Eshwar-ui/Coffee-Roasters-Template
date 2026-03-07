# Espresso Elite - Premium Coffee Roaster HTML Template

A modern Specialty Coffee Roaster website template inspired by premium coffee capsule product designs. Built entirely with static **HTML5**, **CSS3 variables**, **Vanilla JS**, and **TailwindCSS** (CDN-mode, per user request). It requires zero build tools to launch.

## Quick Start
No npm or Webpack configuration is required.
1. Open the `folder` on your machine.
2. Double-click `index.html` (or `pages/index.html`) to open it directly in a browser.
3. *Optional*: Start a simple local server if preferred (`python -m http.server 8000`).

## Core Features & Compliance
- **Two Unique Homepages:** Design focusing heavily on either Products (Capsules) or Brand Storytelling.
- **20+ Unique Pre-Built Pages:** Includes comprehensive Shop pages, multi-variate Checkout flow, Journals, and Services.
- **Two Unique Dashboards:** Distinct layouts and sidebar logic for the User/Customer Dashboard and the Admin Management Dashboard.
- **RTL Support Globally:** Fully mirrored grid systems and icon behaviors via `dir="rtl"` functionality.
- **Global Dark Mode:** LocalStorage-synced CSS custom attributes invert the Tailwind utility scopes cleanly.
- **Fully SEO & Accessibility Optimized:** Includes OpenGraph tags, JSON-LD Schema (Organization), standard semantic tags, alt-text scoping, and `aria-label` implementations across UI toggle events.

## File Structure Architecture
```
coffee-roaster-template/
├── index.html                  # Root Index (Alias for Home 1)
├── documentation/              # Detailed visual template documentation
│   └── index.html              # Start Here!
├── pages/                      # All template HTML routes
│   ├── index-2.html            # Theme alternative homepage
│   ├── about.html              # Story and mission
│   ├── shop.html               # Product catalog and filtering grid
│   ├── product-single.html     # Deep product details (beans/capsules)
│   ├── cart.html               # Shopping cart logic
│   ├── checkout.html           # Multi-step checkout UI
│   ├── dashboard-user.html     # Customer facing portal
│   ├── dashboard-admin.html    # Staff operations portal
│   ├── services.html           # B2B & Wholesale services breakdown
│   ├── blog.html               # Journal/Blog index
│   └── blog-single.html        # Individual brewing guidepost
└── assets/
    ├── css/
    │   ├── style.css           # Contains base variables & Tailwind overrides
    │   ├── dark-mode.css       # Dark mode scoping classes
    │   └── rtl.css             # Left-To-Right inversions
    ├── js/
    │   └── main.js             # Global logic (Nav, Dark Mode, RTL, Sliders)
    └── images/                 # All optimized local imagery (.webp formats)
```

## Customizing The Design System
To modify the site-wide coloring, do not look in the HTML directly. Simply open `assets/css/style.css` and redefine your CSS root variables. The CDN-Tailwind script automatically inherits these token variables site-wide.
```css
:root {
  --primary: #6F4E37;      /* Coffee Brown - Main brand color */
  --secondary: #C4A484;    /* Light Latte - Background accents */
  /* etc */
}
```

## Tech Stack Dependencies
- [Tailwind CSS (CDN API)](https://tailwindcss.com/)
- [Lucide Icons (JS SVG Render API)](https://lucide.dev/)
- [AOS (Animate on Scroll)](https://michalsnik.github.io/aos/)
- [GSAP (GreenSock Animation Platform)](https://greensock.com/gsap/)
- [SwiperJS v10](https://swiperjs.com/)

---
For more detailed information, please view the **`documentation/index.html`** file in your browser.
