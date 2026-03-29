# Landing Page & Content Editor

A lightweight, customizable landing page with a built-in content editor. Edit your hero section in real time, toggle dark mode, and persist changes across sessions — all with zero external dependencies.

---

## Features

- **Customizable content** — Edit headline, subheadline, and description text.
- **Instant preview** — Changes are applied to the landing page immediately.
- **Responsive layout** — Optimized for desktop, tablet, and mobile devices.
- **Dark mode** — Toggleable dark theme for comfortable viewing.
- **Local persistence** — Content is saved in the browser via `localStorage`.
- **Lightweight** — Pure HTML, CSS, and vanilla JS; no frameworks or build tools required.

---

## Tech Stack

| Layer     | Technology         |
| --------- | ------------------ |
| Structure | HTML5              |
| Styling   | CSS3               |
| Logic     | Vanilla JavaScript |

---

## Project Structure

```
edit-landing-page/
├── html/
│   ├── index.html      # Public-facing landing page
│   └── editor.html     # Content editor interface
├── css/
│   ├── index.css       # Styles for the landing page
│   └── editor.css      # Styles for the editor view
└── js/
    ├── index.js        # Landing page rendering & theme toggling
    └── editor.js       # Editor logic & data synchronization
```

---

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, or Safari)
- No installation or build step required

### 1. Clone the repository

```bash
git clone https://github.com/yasirrajput4/edit-landing-page.git
cd edit-landing-page
```

### 2. Open the landing page

Open `html/index.html` directly in your browser.

```bash
# macOS
open html/index.html

# Linux
xdg-open html/index.html

# Windows
start html/index.html
```

### 3. Open the editor

Click the **"Edit Landing Page"** button on the main page, or open `html/editor.html` directly in your browser.

---

## Usage

1. Open the editor and update the **headline**, **subheadline**, or **description** fields.
2. Click **Save** — changes are persisted to `localStorage` and reflected on the landing page instantly.
3. Use the **dark mode toggle** on either page to switch themes.
4. To reset content, clear `localStorage` from your browser's developer tools (`Application → Storage → Local Storage`).

---

## Contributing

Contributions are welcome! To get started:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push to your branch: `git push origin feature/your-feature-name`
5. Open a Pull Request.

---

## License

This project is open-source and available under the [MIT License](LICENSE).
