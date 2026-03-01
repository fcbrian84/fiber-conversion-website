# Fiber Conversion Inc. — Website

Company website for **Fiber Conversion Inc.**, a textile recycling and fiber processing company based in New York, operating since 1909.

Built with [Eleventy](https://www.11ty.dev/) and [Decap CMS](https://decapcms.org/) for easy content editing. Deployed on [Netlify](https://www.netlify.com/).

---

## Tech Stack

| Layer        | Tool                          |
| ------------ | ----------------------------- |
| Static Site  | Eleventy (11ty) v2            |
| Templating   | Nunjucks                      |
| CMS          | Decap CMS (via Git Gateway)   |
| Hosting      | Netlify (free tier)           |
| Styling      | Custom CSS (no framework)     |
| Fonts        | Inter (Google Fonts)          |

---

## Project Structure

```
├── .eleventy.js          # Eleventy configuration
├── netlify.toml          # Netlify build & deploy settings
├── package.json          # Dependencies and scripts
│
├── src/                  # Source files (Eleventy input)
│   ├── _data/            # JSON data files (CMS-editable content)
│   │   ├── site.json         # Global settings (name, phone, email, etc.)
│   │   ├── homepage.json     # Homepage sections
│   │   ├── about.json        # About page content
│   │   ├── services.json     # Services page content
│   │   ├── industries.json   # Industries page content
│   │   ├── contact.json      # Contact page content
│   │   ├── timeline.json     # Company history milestones
│   │   └── faq.json          # Frequently asked questions
│   │
│   ├── _includes/        # Shared layout templates
│   │   ├── base.njk          # HTML shell (head, scripts, meta tags)
│   │   ├── header.njk        # Site header & navigation
│   │   └── footer.njk        # Site footer
│   │
│   ├── admin/            # Decap CMS admin panel
│   │   ├── index.html        # CMS entry point
│   │   └── config.yml        # CMS field definitions
│   │
│   ├── css/styles.css    # Stylesheet
│   ├── js/main.js        # Client-side JavaScript
│   ├── assets/images/    # Image uploads (managed by CMS)
│   │
│   ├── index.njk         # Homepage
│   ├── about.njk         # About page
│   ├── services.njk      # Services page
│   ├── industries.njk    # Industries page
│   └── contact.njk       # Contact page
│
└── _site/                # Built output (generated, do not edit)
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Starts a local dev server at `http://localhost:8080` with hot reload. Eleventy watches for file changes and rebuilds automatically.

### Production Build

```bash
npm run build
```

Outputs the static site to `_site/`.

---

## Content Editing

All page content lives in JSON data files under `src/_data/`. You can edit these directly, or use the CMS admin panel.

### Using the CMS (Decap CMS)

Once deployed to Netlify with Identity and Git Gateway enabled, content editors can log in at:

```
https://your-site.netlify.app/admin
```

The CMS provides a user-friendly UI for editing:

- **Site Settings** — Company name, phone, email, address, hours
- **Homepage** — Hero, services cards, about preview, values, industries, CTAs
- **About Page** — Heritage, mission & values, timeline milestones, stats
- **Services Page** — Overview cards, process steps, service detail sections
- **Industries Page** — Industry descriptions, applications lists
- **Contact Page** — Sidebar info, form labels, FAQ
- **Timeline** — Add/edit/remove company history milestones
- **FAQ** — Add/edit/remove frequently asked questions

### Editing Data Files Directly

Each JSON file maps to a page or section. For example, to update the company phone number, edit `src/_data/site.json`:

```json
{
  "phone": "(518) 883-3431",
  "email": "brianm@fiberconversion.net"
}
```

Rebuild the site after saving changes.

---

## Deployment (Netlify)

### First-Time Setup

1. Push the project to a GitHub repository
2. Log in to [Netlify](https://app.netlify.com/) and click **"Add new site" → "Import an existing project"**
3. Connect your GitHub repo — Netlify reads `netlify.toml` automatically
4. Deploy the site

### Enable CMS Access

After the site is deployed:

1. Go to **Site Settings → Identity** and click **Enable Identity**
2. Under **Registration**, set to **Invite only**
3. Go to **Services → Git Gateway** and click **Enable Git Gateway**
4. Go to **Identity → Invite users** and send an invite to the content editor's email

The invited user can then log in at `https://your-site.netlify.app/admin` to manage content.

---

## Pages

| Page         | URL              | Description                                      |
| ------------ | ---------------- | ------------------------------------------------ |
| Home         | `/`              | Hero, services overview, about preview, industries, CTAs |
| About        | `/about.html`    | Company heritage, values, timeline, stats         |
| Services     | `/services.html` | Service cards, process steps, detailed sections   |
| Industries   | `/industries.html` | Six industry sectors with applications          |
| Contact      | `/contact.html`  | Contact form, phone/email/location, FAQ           |
| CMS Admin    | `/admin`         | Content management panel (requires login)         |

---

## Architecture Notes

- **Data-driven templates** — All editable text is in `src/_data/*.json`, keeping templates clean and CMS configuration straightforward.
- **Shared layouts** — Header, footer, and base HTML are in `_includes/`, eliminating duplication across pages.
- **SVG icons** — Stored as Nunjucks `{% set %}` arrays within templates (not in data files), since they're design elements rather than content.
- **Passthrough copy** — CSS, JS, images, and the admin panel are copied directly to the output without processing.
- **No frameworks** — Custom CSS with CSS custom properties. No Tailwind, Bootstrap, or JS frameworks.

---

## License

Private. All rights reserved by Fiber Conversion Inc.



