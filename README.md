# SOUNDBOOK

A collaborative music encyclopedia where every beat has a story.

## Features

- Modern, responsive landing page design
- Dark theme with beautiful gradient effects
- Search functionality
- Community-driven music encyclopedia
- Real-time music trends tracking

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Tech Stack

- React 18
- React Router DOM v6
- Vite
- Tailwind CSS
- Modern CSS animations and effects

## Project Structure

```
soundbook/
├── src/
│   ├── components/
│   │   ├── layout/          # Layout components (Header, Footer)
│   │   │   ├── Header.jsx
│   │   │   └── Footer.jsx
│   │   └── home/             # Home page specific components
│   │       ├── Hero.jsx
│   │       ├── WhatIsSoundbook.jsx
│   │       ├── WhatYouCanFind.jsx
│   │       ├── CoreFeatures.jsx
│   │       └── BeatOfTheMoment.jsx
│   ├── layouts/              # Layout wrappers
│   │   └── MainLayout.jsx
│   ├── pages/                # Page components
│   │   └── Home.jsx
│   ├── routes/               # Route configuration
│   │   └── index.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## Architecture

The project follows a clean, scalable architecture:

- **Pages**: Top-level page components that compose sections
- **Layouts**: Reusable layout wrappers with shared components (Header, Footer)
- **Components**: Organized by feature/context (layout, home, etc.)
- **Routes**: Centralized routing configuration using React Router

## Design

Based on the Figma design with:
- Dark blue/purple color scheme
- White text with outline effects
- Light blue accent colors
- Smooth animations and transitions
- Responsive layout for all devices
