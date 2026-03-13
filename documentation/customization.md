# 🎨 Customization Guide

Espresso Elite is designed to be easily customized to fit your brand identity. Follow these steps to tailor the template to your needs.

## 1. Changing Colors
Colors are managed via CSS variables in [assets/css/style.css](file:///c:/Users/Eswar/Desktop/html%20templates/Coffee%20Roasters%20Template/coffee-roaster-template/assets/css/style.css).

- Locate the `:root` block at the top of the file.
- Update the hex codes for:
  - `--primary`: Your main brand color (default: `#6F4E37`).
  - `--secondary`: Your secondary accent color.
  - `--accent`: Subtle highlight color.
- The change will reflect project-wide instantly.

## 2. Typography
Fonts are loaded from **Google Fonts**.

- **To Change Fonts**: 
  - Update the `@import` link in `style.css` (line 1-2).
  - Update the `fontFamily` in the `tailwind.config` script found in the `<head>` of each HTML file.
  - Default fonts: `Inter` (Body) and `Playfair Display` (Heading).

## 3. Replacing Images
- **Assets**: Most images are stored in `assets/images/`.
- **Performance**: We recommend using `.webp` format for high-quality, lightweight images.
- **Backgrounds**: Hero backgrounds and section textures can be updated in the HTML or `style.css`.

## 4. Logo Customization
- Replace `logo.webp` in `assets/images/ui/`.
- Alternatively, you can use a text-based logo by editing the navigation section in each HTML file.

## 5. Global Search for TODOs
Search the entire project directory for the term `TODO` to find pre-marked points of customization for:
- Logos
- Contact Information
- API Endpoints (e.g., Formspree)
- Interactive Maps
- Social Media Links
