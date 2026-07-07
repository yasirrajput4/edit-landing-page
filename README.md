# Nexova — Landing Page & Content Editor

A professional, multi-section landing page with a built-in sidebar content editor. Every section is fully editable via the browser — no code, no build tools, no frameworks. Changes persist across sessions using `localStorage`.

---

## Features

- **6 fully editable sections** — Navbar, Hero, Features (3 cards), Stats, CTA Banner, Footer.
- **Sidebar editor** — Tab-based panel navigation to edit each section independently.
- **Instant persistence** — All edits saved to `localStorage` and reflected on the landing page immediately.
- **Fully responsive** — Mobile-first layout with breakpoints for phones, tablets, and desktops.
- **Mobile hamburger menus** — Collapsible navigation on the landing page; slide-in sidebar drawer on the editor.
- **Scroll reveal** — Feature and stat cards animate in as the user scrolls.
- **Reset to defaults** — One-click restore of all default content from the editor.
- **Clean codebase** — Semantic class names, descriptive CSS custom properties, and clearly named JS variables throughout.
- **Zero dependencies** — Pure HTML5, CSS3, and Vanilla JavaScript. No npm, no build step.

---

## Tech Stack

| Layer     | Technology                                         |
| --------- | -------------------------------------------------- |
| Structure | HTML5 (semantic elements)                          |
| Styling   | CSS3 (custom properties, grid, flexbox, keyframes) |
| Logic     | Vanilla JavaScript (ES6+)                          |
| Storage   | Browser `localStorage`                             |
| Fonts     | Google Fonts — Playfair Display & DM Sans          |

---

## Project Structure

```text
edit-landing-page/
├── index.html        # Public-facing landing page (6 sections) [Root Level]
├── editor.html       # Visual content editor with sidebar navigation [Root Level]
├── css/
│   ├── index.css     # Styles for the landing page
│   └── editor.css    # Styles for the editor (sidebar, topbar, form fields)
├── js/
│   ├── index.js      # Landing page: loads content, hamburger menu, scroll reveal
│   └── editor.js     # Editor: sidebar panels, form population, save & reset
├── LICENSE
└── README.md         # This file
```

> All HTML files reference `./css/` and `./js/` relative paths.
> The folder structure **must remain intact** for the paths to resolve correctly.

---

## Getting Started

### Prerequisites

- Any modern browser (Chrome, Firefox, Edge, Safari 16+)
- No installation, no `npm install`, no build step

### 1. Clone the repository

```bash
git clone https://github.com/yasirrajput4/edit-landing-page.git
cd edit-landing-page
```

### 2. Open the landing page

Open `index.html` directly in your browser.

```bash
# macOS
open index.html

# Linux
xdg-open index.html

# Windows
start index.html
```

### 3. Open the editor

Click **"Get Started"** or **"Customize Page"** on the landing page, or open `./editor.html` directly.

---

## Usage

### Editing Content

1. Open `./editor.html`.
2. Use the **left sidebar** to switch between sections — Navbar, Hero, Features, Stats, CTA Banner, Footer.
3. Edit any field (text, emoji icons, stat values, etc.).
4. Click **Save Changes** — content is persisted to `localStorage`.
5. Open `./index.html` to see all changes applied live.

### Editable Fields by Section

| Section    | Editable Fields                                                         |
| ---------- | ----------------------------------------------------------------------- |
| Navbar     | Brand name, 3 nav link labels, CTA button label                         |
| Hero       | Badge text, headline, subheadline, description, primary button text     |
| Features   | Section title & subtitle; per card: emoji icon, title, description (×3) |
| Stats      | Value and label for each of 3 stat blocks                               |
| CTA Banner | Heading, description, button text                                       |
| Footer     | Brand name, tagline, copyright text                                     |

### Resetting Content

In the editor, click **Reset All** → confirm the prompt to restore all default placeholder content. This clears `localStorage`.

---

## Contributing

Contributions are welcome. To get started:

1. Fork the repository.
2. Create a branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m "feat: describe your change"`
4. Push and open a Pull Request.

---

## License

Open-source under the [MIT License](LICENSE).
