# 3D Interactive Portfolio

An interactive 3D portfolio website themed after **The Legend of Zelda: Link's Awakening**. Explore a charming 3D world to discover my professional experience, projects, and technical skills.

## Features

- **Explorable 3D World**: Navigate through a low-poly Zelda-inspired environment
- **Interactive Sections**: Projects, experience, tech stack, and more
- **Character Controls**: 8-directional movement with keyboard controls
- **Responsive Design**: Optimized for desktop with mobile support
- **Performance First**: Maintains 60fps with optimized asset loading

## Tech Stack

- **React 19** + **TypeScript**
- **Three.js** via **React Three Fiber** (@react-three/fiber)
- **Drei** (@react-three/drei) for 3D helpers and utilities
- **Vite** for fast development and optimized builds

## Prerequisites

- **Node.js**: 24+
- **Package Manager**: pnpm (10.23.0+)

## Getting Started

### Installation

```bash
# Install dependencies
pnpm install
```

### Development

```bash
# Start development server
pnpm dev
```

The development server will start at `http://localhost:5173`

### Build

```bash
# Build for production
pnpm build
```

### Preview

```bash
# Preview production build locally
pnpm preview
```

### Code Quality

```bash
# Run linter and formatter
pnpm check

# Lint only
pnpm lint

# Format only
pnpm format
```

## Controls

- **Arrow Keys**: Move character in 8 directions
- **Space**: Attack/Interact
- **X**: Jump
- **~**: Toggle FPS counter
- **F2**: Toggle wireframe mode
- **F3**: Toggle bounding boxes

## Aesthetic

The visual style is inspired by **The Legend of Zelda: Link's Awakening**, featuring:

- Low-poly, flat-shaded 3D models
- Distinctive Game Boy Color palette (greens, blues, yellows)
- Grid-based world layout
- Retro UI elements with pixel-perfect design
- Chiptune-style sound effects

## Project Structure

```
src/
├── components/
│   ├── 3d/              # Three.js components (models, terrain, etc.)
│   ├── ui/              # React UI overlays (HUD, menus, etc.)
│   └── sections/        # Portfolio sections (About, Projects, etc.)
├── hooks/               # Custom React hooks
├── stores/              # State management
├── utils/               # Utility functions
└── assets/
    ├── models/          # 3D models (.glb, .gltf)
    ├── textures/        # Texture images
    ├── sounds/          # Audio files
    └── images/          # 2D images
```

## Contact

**Iago Rodrigues**

- Website: [iagorodrigues.dev](https://iagorodrigues.dev)
- GitHub: [@oiagorodrigues](https://github.com/oiagorodrigues)
- LinkedIn: [iagorodrigues](https://www.linkedin.com/in/iagorodrigues/)
- Email: [yagomello@gmail.com](mailto:yagomello@gmail.com)
- Location: Belém, PA, Brazil

## License

ISC

---

Inspired by [Bruno Simon's portfolio](https://bruno-simon.com/)
