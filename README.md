# Resume App

A modern, responsive React resume application built with Vite.

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Customizing Your Resume

Edit the component files in `src/components/` to update your information:

- **Header.jsx** - Your name and contact information
- **About.jsx** - Your professional summary
- **Experience.jsx** - Your work experience (edit the `experiences` array)
- **Education.jsx** - Your education (edit the `education` array)
- **Skills.jsx** - Your skills (edit the `skillCategories` array)
- **Certificates.jsx** - Your certificates (edit the `certificates` array)

## Styling

All styles are in the `src/components/` directory. The color scheme uses a purple gradient theme (#667eea). You can customize colors in the CSS files.

## Print/PDF

The app includes print styles. Use your browser's print function (Ctrl+P / Cmd+P) to save as PDF.

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions on deploying to:
- **GitHub Pages** (free, automatic via GitHub Actions)
- **AWS S3** (with optional CloudFront CDN)

Quick deploy commands:
```bash
# GitHub Pages
npm run deploy:gh

# AWS S3 (update bucket name in package.json first)
npm run deploy:aws
```

