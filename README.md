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

## Project Structure

```
src/
  components/          # React components (organized by feature)
    Header/
    About/
    Experience/
    Education/
    Skills/
    Certificates/
  data/               # Resume data and constants
    resumeData.js
  styles/             # Global and shared styles
    global.css
    shared.css
    App.css
  App.jsx
  main.jsx
public/               # Static assets
scripts/              # Deployment and utility scripts
```

## Customizing Your Resume

**Update your data in `src/data/resumeData.js`:**
- `personalInfo` - Name, title, email, phone
- `about` - Professional summary
- `experiences` - Work experience array
- `education` - Education array
- `skillCategories` - Skills organized by category
- `certificates` - Certificates array

**Component files are in `src/components/[ComponentName]/`:**
- Each component has its own folder with component file, styles, and index.js
- Components automatically use data from `resumeData.js`

## Styling

- **Global styles**: `src/styles/global.css`
- **Shared styles**: `src/styles/shared.css` (section styles)
- **Component styles**: Each component has its own CSS file in its folder
- **App styles**: `src/styles/App.css` (layout and container)

The color scheme uses a purple gradient theme (#667eea). Customize colors in the respective CSS files.

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

# Or use scripts directly:
./scripts/deploy-aws.ps1 -BucketName "your-bucket-name"
```

