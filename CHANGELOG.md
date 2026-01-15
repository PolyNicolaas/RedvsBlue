# Changelog

All notable changes to the Red vs Blue game project.

## [2.0.0] - 2025

### Added - Dynamic Sphere Scaling

#### Automatic Window Scaling
- **Dynamic Viewport Adaptation**: Sphere now automatically scales to fit any window size
- **ResizeObserver Integration**: Real-time monitoring of container size changes
- **Adaptive Field of View**: Camera FOV adjusts based on aspect ratio for optimal sphere fitting
- **Window Resize Handler**: Responds instantly to browser window resizing
- **Better Camera Positioning**: Optimized camera distance (z=2.5) and FOV (50°) for larger sphere

#### Benefits
- Works perfectly on mobile phones, tablets, laptops, and large monitors
- Adapts when browser window is resized or when using split screen
- Handles browser zoom and dev tools opening/closing
- No distortion or stretching - maintains proper sphere proportions
- Smooth transitions during resize

#### Technical Implementation
- Container height changed from fixed 480px to dynamic `clientHeight`
- Camera aspect ratio updates automatically on resize
- FOV calculation: Increases for portrait mode, optimizes for landscape
- Proper cleanup with `ResizeObserver.disconnect()` on unmount
- Fallback to window resize events for broader compatibility

### Added - UI Redesign

#### New Layout Structure
- **Header Bar**: Compact header (40px) with title and turn/tile info
- **Sidebar Layout**: 280px left sidebar with all controls and settings (desktop)
- **Prominent Canvas**: Main canvas now occupies 70-80% of screen space
- **Responsive Design**: Adapts from mobile (vertical) to desktop (horizontal sidebar)

#### Space Optimization
- Canvas area increased by approximately **70%** compared to previous design
- Reduced padding throughout: p-6 → p-2/p-3
- Compact typography: text-4xl → text-xl, text-lg → text-xs/sm
- Minimal gaps: gap-6 → gap-2
- Collapsible settings panel to save space

#### Component Changes
- **Score Badges**: Compact design (text-xl/2xl), stacked vertically on desktop
- **Status Message**: Smaller card (p-2) with xs/sm text
- **Action Buttons**: Full-width in sidebar, text-sm with py-2
- **Quick Controls**: Vertical stack of compact buttons (text-xs)
- **Legend**: 2-column grid with small icons (w-3 h-3)
- **Settings Panel**: Collapsible with condensed controls

#### Visual Improvements
- Header: text-6xl → text-2xl/3xl
- Sidebar scrollable when needed (overflow-y-auto)
- Canvas fills all available space with h-full
- No fixed heights - everything responds to viewport
- Body overflow changed to 'auto' to prevent hidden elements

### Removed - Multiplayer Functionality

#### Summary
Removed all online multiplayer features as the game is designed for local play only. There is no server infrastructure to support online multiplayer at this time.

#### Files Removed
- `src/MultiplayerLobby.jsx` - Multiplayer lobby UI component
- `src/useMultiplayer.jsx` - WebSocket multiplayer hook and provider
- `server.js` - Express/Socket.io server for multiplayer
- `MULTIPLAYER_GUIDE.md` - Multiplayer setup documentation

#### Dependencies Removed
- `socket.io` (^4.8.3) - Server-side WebSocket library
- `socket.io-client` (^4.8.3) - Client-side WebSocket library  
- `express` (^5.2.1) - Web server framework
- `cors` (^2.8.5) - CORS middleware for Express

#### Scripts Removed from package.json
- `server` - Start multiplayer server
- `dev:server` - Development server
- `dev:client` - Development client

#### Code Changes

**src/GameModeSelector.jsx**
- Removed multiplayer mode card completely
- Updated UI to show only single player mode
- Changed title from "Choose Your Game Mode" to "Strategic 3D Sphere Game"
- Updated button from "Play Solo" to "Start Game"

**src/Game.jsx**
- Removed multiplayer imports (`MultiplayerLobby`, `useMultiplayer`)
- Removed lobby state management
- Simplified game mode to only 'single' player
- Removed all multiplayer-related props and callbacks

**src/main.jsx**
- Removed `MultiplayerProvider` wrapper
- Simplified to direct `<Game />` component rendering

**src/App.jsx (RedVsBlueSphere component)**
- Added props parameter to accept `mode` and `onReturnToMenu`
- Added "Back to Menu" button when game is over
- No other changes needed as multiplayer logic was never integrated into core game

#### What Still Works

The game retains all core local functionality:
- ✅ Local single player vs AI
- ✅ Local two-player (hot seat) mode
- ✅ 4 AI difficulty levels (Random, Greedy, Defensive, Strategic)
- ✅ All sphere types and customization options
- ✅ Full 3D visualization and animations
- ✅ Sound effects and auto-rotation
- ✅ All game rules and mechanics

#### Reason for Removal

The multiplayer feature was removed because:
1. No server infrastructure is currently available or planned
2. The game is designed for local play (pass-and-play or vs AI)
3. Maintaining unused multiplayer code adds complexity
4. Server hosting would require ongoing infrastructure costs

### Documentation

#### New Files
- `UI_REDESIGN.md` - Complete documentation of UI changes and dynamic scaling
- `CHANGELOG.md` - This file

#### Updated Files
- `README.md` - Updated features list, added dynamic scaling and responsive layout
- `UI_IMPROVEMENTS.md` - Existing UI documentation (kept for reference)

---

## [1.0.0] - Initial Release

### Added
- Complete 3D sphere strategy game
- Multiple sphere geometries (Goldberg, Triangular, Quad, Dodecahedron, Octahedron)
- AI opponents with different strategies
- Local multiplayer support
- Beautiful glassmorphism UI
- Smooth animations and particle effects
- Sound effects
- Customizable game settings
- Auto-focus camera system

---

## Version Summary

- **v2.0.0**: Major UI overhaul + Dynamic scaling + Multiplayer removal
- **v1.0.0**: Initial release with all core features

## Future Considerations

If online multiplayer is desired in the future, it would require:
- Dedicated server hosting (cloud provider or similar)
- Server infrastructure maintenance
- Potentially a matchmaking system
- User authentication
- Connection stability handling
- Security considerations

For now, the focus is on providing an excellent local gaming experience with a beautiful, responsive interface that works perfectly on any device.