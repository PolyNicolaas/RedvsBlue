# Red vs Blue - 3D Sphere Strategy Game

A strategic turn-based game played on a 3D sphere where two players compete to control territory by moving tiles and capturing opponent pieces.

## 🎮 Game Overview

Red vs Blue is a tactical board game played on various 3D polyhedra (sphere approximations). Players take turns moving their pieces, capturing enemy tiles, and eliminating strategic positions. The game features multiple AI opponents with different strategies and customizable sphere geometries.

## ✨ Features

- **Multiple Sphere Types**: Goldberg (Hexagonal), Triangular, Quad Sphere, Dodecahedron, and Octahedron
- **AI Opponents**: Random, Greedy, Defensive, and Strategic AI with different play styles
- **3D Visualization**: Fully interactive 3D sphere using Three.js
- **Dynamic Scaling**: Sphere automatically scales to fit any window size or device
- **Responsive Layout**: Optimized UI with sidebar and prominent sphere display
- **Smooth Animations**: Color transitions, pulse effects, and particle systems
- **Sound Effects**: Audio feedback for moves, captures, and eliminations
- **Customizable Settings**: Adjust detail level, starting tiles, and elimination rules
- **Auto-Focus Camera**: Automatically rotates to show the current player's position

## 🚀 Getting Started

### Prerequisites

You need to have **Node.js** and **npm** installed on your computer.

- Download from [nodejs.org](https://nodejs.org/) (LTS version recommended)
- Verify installation: `node --version` and `npm --version`

### Installation

1. **Navigate to the project directory:**
   ```bash
   cd /Users/nicolaasvermeulen/Desktop/Repository/RedvsBlue
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

### Running the Game

**Start the development server:**
```bash
npm run dev
```

The game will open in your default browser at `http://localhost:5173` (or similar).

### Building for Production

**Create a production build:**
```bash
npm run build
```

**Preview the production build:**
```bash
npm run preview
```

## 🎯 How to Play

### Game Rules

1. **Select a Tile**: Click one of your colored tiles to select it
2. **Choose an Action**:
   - **Move** (Green): Move to an adjacent empty tile. This captures all adjacent enemy tiles!
   - **Eliminate** (Orange): Remove the empty tile on the opposite side of the sphere
3. **Captures**: When you move, all adjacent enemy tiles become yours
4. **Surrounded Territory**: Empty tiles that only touch your tiles automatically become yours
5. **Win Condition**: Force your opponent into a position where they cannot move or eliminate

### Controls

- **Mouse**: Click and drag to rotate the sphere
- **Touch**: Swipe on mobile devices to rotate
- **Keyboard**: Use arrow keys or WASD to rotate
- **Tile Selection**: Click on tiles to select and move
- **Window Resize**: Sphere automatically scales to fit your window size

### Game Settings

- **Sphere Type**: Choose from different geometric shapes
- **Detail Level**: Adjust subdivision (more detail = more tiles)
- **Starting Tiles**: Number of initial tiles per player (1-8)
- **Elimination Mode**:
  - **Exact**: Only eliminates the precise antipodal tile
  - **Nearest**: Eliminates the closest tile to the antipodal point
- **Player Types**: Set each player as Human or one of 4 AI types
- **Sound**: Toggle sound effects on/off
- **Auto-Focus**: Automatically rotate camera to current player

### AI Types

- **Random**: Makes random valid moves
- **Greedy**: Maximizes immediate tile count
- **Defensive**: Balances offense with limiting opponent moves
- **Strategic**: Considers both territory control and move options

## 🛠️ Technology Stack

- **React** - UI framework
- **Three.js** - 3D graphics rendering with dynamic viewport scaling
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling with responsive design
- **ResizeObserver API** - Real-time container size monitoring

## 📁 Project Structure

```
RedvsBlue/
├── src/
│   ├── App.jsx          # Main game component
│   └── main.jsx         # React entry point
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
└── README.md            # This file
```

## 🎨 Color Legend

- **Red**: Red player tiles
- **Blue**: Blue player tiles
- **Gray**: Empty tiles
- **Yellow**: Currently selected tile
- **Green**: Valid move destination
- **Orange**: Valid elimination target
- **Black**: Eliminated tiles (removed from play)

## 🐛 Troubleshooting

### Common Issues

**Port already in use:**
- Kill the process on port 5173 or Vite will automatically use a different port

**Dependencies not installing:**
- Try deleting `node_modules` folder and running `npm install` again
- Clear npm cache: `npm cache clean --force`

**3D rendering issues:**
- Make sure your browser supports WebGL
- Try updating your graphics drivers
- Test in a different browser (Chrome, Firefox, Safari recommended)
- Try resizing your browser window - the sphere should scale automatically

**Audio not working:**
- Some browsers require user interaction before playing audio
- Check if sound is enabled in the game settings

## 🎮 Strategy Tips

1. **Control the Center**: Tiles in the middle have more adjacent tiles for captures
2. **Think Ahead**: Plan your moves to set up multiple captures
3. **Use Elimination Wisely**: Eliminating strategic tiles can block opponent expansion
4. **Surround Territory**: Create pockets of empty space that only touch your tiles
5. **Count Available Moves**: Sometimes winning means limiting opponent options, not just capturing tiles

## 📝 License

This project is open source and available for personal and educational use.

## 🤝 Contributing

Feel free to fork the project and submit pull requests with improvements!

## 🎉 Enjoy the Game!

Have fun playing Red vs Blue! Try different sphere types and AI opponents to find your favorite strategy.
