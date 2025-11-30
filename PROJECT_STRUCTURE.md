# Project Structure

This document describes the project structure following React best practices.

## Directory Structure

```
resume/
├── .github/
│   └── workflows/          # GitHub Actions workflows
│       ├── deploy.yml      # GitHub Pages deployment
│       └── deploy-aws.yml  # AWS S3 deployment
├── public/                 # Static assets (images, favicons, etc.)
├── scripts/                # Deployment and utility scripts
│   ├── deploy-aws.ps1      # AWS S3 deployment (PowerShell)
│   ├── deploy-aws.sh       # AWS S3 deployment (Bash)
│   ├── start-dev.ps1       # Development server helper
│   └── start-preview.ps1  # Preview server helper
├── src/
│   ├── components/         # React components (feature-based organization)
│   │   ├── About/
│   │   │   ├── About.jsx
│   │   │   └── index.js    # Barrel export
│   │   ├── Certificates/
│   │   │   ├── Certificates.jsx
│   │   │   ├── Certificates.css
│   │   │   └── index.js
│   │   ├── Education/
│   │   │   ├── Education.jsx
│   │   │   ├── Education.css
│   │   │   └── index.js
│   │   ├── Experience/
│   │   │   ├── Experience.jsx
│   │   │   ├── Experience.css
│   │   │   └── index.js
│   │   ├── Header/
│   │   │   ├── Header.jsx
│   │   │   ├── Header.css
│   │   │   └── index.js
│   │   └── Skills/
│   │       ├── Skills.jsx
│   │       ├── Skills.css
│   │       └── index.js
│   ├── data/               # Data and constants
│   │   └── resumeData.js   # All resume data (personal info, experiences, etc.)
│   ├── styles/             # Global and shared styles
│   │   ├── global.css      # Global resets and base styles
│   │   ├── shared.css      # Shared component styles (sections)
│   │   └── App.css         # App-level layout styles
│   ├── App.jsx             # Main app component
│   └── main.jsx            # Application entry point
├── .gitignore
├── bucket-policy.json      # AWS S3 bucket policy template
├── DEPLOYMENT.md            # Deployment instructions
├── index.html              # HTML template
├── package.json
├── README.md
├── vite.config.js          # Vite configuration
└── PROJECT_STRUCTURE.md    # This file
```

## Best Practices Implemented

### 1. **Component Organization**
- Each component has its own folder
- Component files, styles, and tests are co-located
- Barrel exports (`index.js`) for cleaner imports

### 2. **Data Separation**
- All resume data extracted to `src/data/resumeData.js`
- Easy to update without touching component logic
- Can be easily replaced with API calls later

### 3. **Style Organization**
- Global styles separated from component styles
- Shared styles in dedicated file
- Component-specific styles co-located with components

### 4. **Scripts Organization**
- All utility scripts in `scripts/` directory
- Clear separation of concerns

### 5. **Static Assets**
- `public/` folder for static assets
- Follows Vite conventions

## Import Examples

### Before (Old Structure)
```jsx
import Header from './components/Header'
import './components/Header.css'
```

### After (New Structure)
```jsx
import Header from './components/Header'  // Cleaner, uses index.js
// Styles are imported within component files
```

## Benefits

1. **Scalability**: Easy to add new components
2. **Maintainability**: Clear organization makes code easier to find
3. **Reusability**: Components are self-contained
4. **Data Management**: Centralized data makes updates simple
5. **Team Collaboration**: Standard structure everyone can follow

## Adding New Components

1. Create folder: `src/components/NewComponent/`
2. Add files:
   - `NewComponent.jsx`
   - `NewComponent.css` (if needed)
   - `index.js` (export default)
3. Import in App.jsx: `import NewComponent from './components/NewComponent'`

## Updating Resume Data

Edit `src/data/resumeData.js` - all components automatically use the updated data.

