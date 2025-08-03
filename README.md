# WhitzScott Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Material-UI, showcasing my skills, experience, and projects as a web developer from the Philippines.

## 🚀 Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Responsive Layout**: Optimized for all device sizes (mobile, tablet, desktop)
- **Interactive Elements**: 
  - Custom blue cursor animation
  - Typewriter effect for dynamic text
  - Smooth scroll navigation
  - Framer Motion animations
- **Sections**:
  - Hero section with animated greeting
  - About Me with tech stack showcase
  - My Creations (portfolio projects)
  - Experience timeline
  - Contact links (GitHub, Discord)

## 🛠️ Tech Stack

### Frontend
- **React** (via Preact) - UI library
- **TypeScript** - Type safety and better development experience
- **Material-UI (MUI)** - Component library and theming
- **Vite** - Fast build tool and development server

### Styling & Animation
- **Emotion** - CSS-in-JS styling
- **Framer Motion** - Advanced animations and transitions
- **Material-UI Theme System** - Custom theming and component overrides

### Additional Libraries
- **Typewriter Effect** - Dynamic text animations
- **React Icons** - Icon library
- **Lodash Debounce** - Performance optimization
- **React Color** - Color picker functionality

## 🏗️ Project Structure

```
src/
├── component/
│   ├── hooks/                 # Custom React hooks
│   │   ├── seBlueCursor.ts   # Blue cursor functionality
│   │   └── useIntersectionObserver.ts # Scroll animations
│   ├── layout/               # Main layout components
│   │   ├── about/           # About Me section
│   │   ├── creations/       # Portfolio projects
│   │   ├── experience/      # Experience timeline
│   │   ├── headers/         # Navigation header
│   │   └── hero/            # Hero/landing section
│   └── ui/                  # Reusable UI components
│       └── cursor/          # Custom cursor component
├── routes/                  # Page routing
├── theme/                   # Material-UI theme configuration
│   ├── components/          # Custom styled components
│   ├── overrides/           # Theme overrides
│   ├── provider/            # Theme provider setup
│   └── themes/              # Theme definitions
└── assets/                  # Static assets
```

## 🚦 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🎨 Customization

### Theme Configuration
The project uses a custom Material-UI theme located in `src/theme/`. You can modify:
- Colors and typography in `src/theme/themes/LightTheme.ts`
- Component overrides in `src/theme/overrides/componentOverrides.ts`
- Custom components in `src/theme/components/`

### Content Updates
- **Personal Information**: Update `src/component/layout/hero/Hero.tsx`
- **About Section**: Modify `src/component/layout/about/AboutMe.tsx`
- **Tech Stack**: Update the `techStack` array in the About component
- **Social Links**: Update GitHub and Discord links in the Hero component

## 🌟 Key Features Explained

### Custom Blue Cursor
Interactive cursor that follows mouse movement with smooth animations, enhancing user experience.

### Intersection Observer Hook
Custom hook for triggering animations when elements come into view, creating engaging scroll-based interactions.

### Responsive Design
Mobile-first approach with breakpoints optimized for various screen sizes using Material-UI's responsive system.

### Performance Optimizations
- Vite for fast development and optimized builds
- Debounced scroll events
- Lazy loading and code splitting ready

## 🔗 Live Demo

Visit the live portfolio: [WhitzScott Portfolio](https://your-portfolio-url.com)

## 📱 Connect With Me

- **GitHub**: [Whitzzscott](https://github.com/Whitzzscott/)
- **Discord**: [Join my Discord](https://discord.gg/zTcyP4WB8h)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

While this is a personal portfolio, suggestions and feedback are welcome! Feel free to open an issue or submit a pull request.

---

Built with ❤️ by WhitzScott from the Philippines 🇵🇭
