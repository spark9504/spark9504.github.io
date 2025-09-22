# spark9504.github.io

Static portfolio for Sungjae Park that showcases projects, experience, and contact information. The site runs entirely on GitHub Pages and relies on vanilla HTML, CSS, and jQuery.

[View the live site](https://spark9504.github.io/)

## Features
- Single-page layout with hero, about, services, portfolio, experience timeline, blog/news, and contact sections.
- Animated cursor, smooth scrolling navigation, and subtle entrance animations powered by the bundled plugin scripts.
- Responsive design tailored for desktop, tablet, and mobile breakpoints.
- Lightbox galleries and carousels via Magnific Popup and Owl Carousel.
- Contact form wired to FormSubmit for collecting inquiries without a backend.

## Tech stack
- HTML5 and semantic markup in `index.html`.
- CSS3 with custom styling in `css/style.css` and shared plugin rules in `css/plugins.css`.
- jQuery 3.x plus helper plugins (`js/plugins.js`) and initialization logic in `js/init.js`.
- Static assets (images, SVGs, icons) under `img/` with Fontello icons in `css/font/`.

## Getting started
### Local preview
1. Clone the repository.
2. Serve the root directory with any static file server.
   - VS Code Live Server, or
   - `python -m http.server 8000`
3. Open `http://localhost:8000` in your browser.

### Project structure
```
index.html
css/
  plugins.css
  style.css
  font/fontello.*
js/
  jquery.js
  plugins.js
  init.js
  ie8.js
  modernizr.custom.js
img/
modal/contact.php
```

## Customization notes
- Update meta tags, name, and description in `index.html` to reflect your personal branding.
- Replace text for each section (About, Services, Portfolio, Experience, News) directly inside `index.html`.
- Swap imagery inside `img/` with photos that match your story; keep sizes similar to preserve layout.
- Adjust colors, spacing, and typography in `css/style.css`. Global helper classes live in `css/plugins.css`.
- If you use the contact form, set the `action` attribute in `index.html` to your own FormSubmit endpoint. GitHub Pages does not execute PHP, so `modal/contact.php` remains for reference only.

## Deployment
Push changes to the `main` branch and GitHub Pages will publish automatically. For a custom domain, add a `CNAME` file at the repository root and configure DNS records with GitHub''s IP addresses.

## Credits
Original template adapted from Marketify''s Elisc portfolio theme. All images and copy should be replaced with assets you have permission to use.
