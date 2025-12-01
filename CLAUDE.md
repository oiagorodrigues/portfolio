# Iago's Portfolio - Project Instructions

## Project Overview

This is an interactive 3D portfolio website inspired by Bruno Simon's work, themed after The Legend of Zelda: Link's Awakening. The project uses Three.js (via React Three Fiber) to create an explorable 3D world showcasing professional experience, projects, and technical skills.

## Tech Stack

- **Framework**: React 19+ with TypeScript
- **Build Tool**: Vite
- **3D Rendering**: Three.js via React Three Fiber (@react-three/fiber)
- **3D Helpers**: Drei (@react-three/drei)
- **State Management**: Zustand
- **Animations**: Framer Motion (UI) + React Spring (3D)
- **Audio**: Howler.js
- **Styling**: Tailwind CSS (for UI overlays)
- **UI Framework**: Shadcn/UI
- **Node.js**: 24+
- **Package Manager**: Pnpm
- **Linter and Formatter**: @biomejs/biome

## Project Structure

```
src/
├── components/
│   ├── 3d/              # Three.js components (models, terrain, etc.)
│   ├── ui/              # React UI overlays (HUD, menus, etc.)
│   └── sections/        # Portfolio sections (About, Projects, etc.)
├── hooks/               # Custom React hooks
├── stores/              # Zustand state stores
├── utils/               # Utility functions
├── assets/
│   ├── models/          # 3D models (.glb, .gltf)
│   ├── textures/        # Texture images
│   ├── sounds/          # Audio files
│   └── images/          # 2D images
└── styles/              # Global styles
```

### Rolldown integration

Rolldown is a new bundler for Vite that is faster and more efficient than the default Vite bundler.

See [Rolldown Vite Guide](https://vite.dev/guide/rolldown.html) for more information.

## Development Guidelines

### Code Style

- Use TypeScript for all new files
- Prefer functional components with hooks
- Use named exports for components
- Keep components small and focused (< 200 lines)
- Use descriptive variable names (e.g., `characterPosition` not `pos`)
- Use the `@` alias for imports from the `src` directory
- Each react file should contain a single component

### Three.js / React Three Fiber Conventions

- Always use `@react-three/fiber` declarative syntax, not imperative Three.js
- Use `@react-three/drei` helpers when available (OrbitControls, useGLTF, etc.)
- Keep 3D logic in separate components under `components/3d/`
- Use `useFrame` for animation loops
- Dispose of geometries and materials properly to prevent memory leaks
- Keep the render loop performant (aim for 60fps)

### Character System (Iago/Link)

- Character controls: Arrow keys for movement, Space for attack, X for jump
- Use 8-directional movement (N, NE, E, SE, S, SW, W, NW)
- Implement smooth camera follow with damping
- Character state managed via Zustand store
- All character interactions should have sound feedback

### Zelda: Link's Awakening Aesthetic

**Color Palette** (Light Theme):
- Primary Green: `#88c070` (grass)
- Sky Blue: `#78c8e8`
- Brown: `#886840` (earth/wood)
- Light Yellow: `#f8f8d8` (highlights)
- Dark Green: `#306850` (shadows)

**Color Palette** (Dark Theme):
- Adapt to darker, muted versions while maintaining the Zelda vibe
- Use subtle gradients and avoid pure black

**Design Principles**:
- Low-poly aesthetic with flat shading
- Grid-based world layout
- Pixel-perfect UI elements when possible, use Shadcn/UI for the UI
- Zelda-style text boxes for information display
- Sound effects for all interactions

### Audio Guidelines

- All sounds should be 8-bit/chiptune style to match Zelda LA
- Implement global sound toggle (stored in localStorage)
- Use sound pooling for frequently played effects
- Preload all audio assets during loading screen
- Volume levels: Background music (30%), SFX (60%)

### Performance Requirements

- Initial load time: < 5 seconds on 3G
- Maintain 60fps on mid-range devices
- Use texture compression (basis/ktx2 format)
- Implement LOD (Level of Detail) for complex models
- Lazy load assets for each section
- Use instanced meshes for repeated objects

### Responsive Design

- Primary target: Desktop (1920x1080)
- Mobile: Provide touch controls overlay
- Tablet: Adjust camera distance and control sensitivity
- Always test on multiple viewport sizes

### State Management

Use Zustand stores for:
- Character state (position, animation, health)
- Game settings (sound on/off, theme, controls)
- Section progress/unlocks
- UI state (menus, dialogs)

### Asset Guidelines

**3D Models**:
- Format: .glb (compressed) or .gltf
- Max polygon count per model: 10k triangles
- Use Draco compression for larger models
- Source from: Sketchfab (CC0), Poly Pizza, or custom creation

**Textures**:
- Max resolution: 1024x1024 (use 512x512 when possible)
- Format: WebP for textures, PNG for UI elements
- Use texture atlases to reduce draw calls

**Audio**:
- Format: MP3 (for compatibility) or OGG (for size)
- Max file size: 500kb per sound effect, 2mb for music
- Sample rate: 44.1kHz

## Portfolio Sections

1. **Landing/Spawn Area**: Introduction with name and tagline
2. **Social Media Plaza**: Interactive 3D icons (GitHub, LinkedIn, Twitter, Email)
3. **Experience Timeline**: Professional history as explorable path
4. **Projects Gallery**: 3D showcase with clickable project cards
5. **Tech Stack Village**: Skills represented as buildings/objects
6. **Mini-Games Playground**: Interactive Zelda LA-style mini-games
7. **Controls Help**: Interactable key map display

## Interaction Patterns

- Hover: Subtle scale/glow effect on interactive objects
- Click: Play sound + trigger action
- Character proximity: Auto-display interaction prompts
- Signs/Plates: Display directional arrows and section names

## Testing Requirements

- Test character movement in all 8 directions
- Verify collision detection on all boundaries
- Test sound toggle persistence (localStorage)
- Verify theme switching updates all materials
- Test on Chrome, Firefox, Safari
- Performance test on mobile devices

## Accessibility Considerations

- Provide keyboard-only navigation
- Include screen reader labels for UI elements
- Offer alternative 2D fallback for users who can't use 3D
- Ensure sufficient color contrast for text
- Provide option to reduce motion/animations

## Common Tasks

### Adding a new 3D object:
1. Place model in `assets/models/`
2. Create component in `components/3d/`
3. Use `useGLTF` hook to load model
4. Add to scene with proper position and scale
5. Implement interaction handlers if needed

### Adding a new section:
1. Create component in `components/sections/`
2. Add entry point marker in world
3. Update navigation system
4. Add signpost pointing to section
5. Implement section-specific interactions

### Adding a sound:
1. Place audio file in `assets/sounds/`
2. Register in audio manager
3. Use via hook: `useSound('sound-name')`
4. Respect global sound toggle setting

## Important Notes

- Never commit large binary files directly (use Git LFS if needed)
- Always compress assets before adding to repo
- Document any new dependencies in package.json
- Keep bundle size under 3MB initial load
- Use code splitting for section-specific code
- Implement proper error boundaries for 3D scenes

## Debug Helpers

- Press `~` to toggle FPS counter
- Press `F2` to toggle wireframe mode
- Press `F3` to toggle bounding boxes
- Press `F4` to toggle camera debug info

## Resources

- [React Three Fiber Docs](https://docs.pmnd.rs/react-three-fiber)
- [Drei Helpers](https://github.com/pmndrs/drei)
- [Three.js Docs](https://threejs.org/docs/)
- [Zelda LA Color Reference](https://www.nintendo.com/pt-br/store/products/the-legend-of-zelda-links-awakening-switch/)
- [Bruno Simon Portfolio](https://bruno-simon.com/) - Main inspiration
- [Shadcn/UI](https://ui.shadcn.com/) - UI framework

## Contact

Portfolio Owner: Iago Rodrigues
- GitHub: @oiagorodrigues
- LinkedIn: https://www.linkedin.com/in/iagorodrigues/
- Twitter: https://x.com/iagokv
- Email: yagomello@gmail.com
- Website: https://iagorodrigues.dev
- Location: Belém, PA, Brazil
- Purpose: Professional portfolio showcasing software engineering skills
