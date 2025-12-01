import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Character } from "@/components/Character";
import { Terrain } from "@/components/Terrain";

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }} shadows>
        {/* Zelda sky color */}
        <color attach="background" args={["#78c8e8"]} />
        <fog attach="fog" args={["#78c8e8", 30, 100]} />

        {/* Lighting */}
        <ambientLight intensity={0.6} />
        <directionalLight
          position={[10, 20, 10]}
          intensity={1}
          castShadow
          shadow-mapSize={[2048, 2048]}
        />

        {/* Terrain */}
        <Terrain />

        {/* Character */}
        <Character position={[0, 0, 0]} />

        {/* Camera controls */}
        <OrbitControls
          maxPolarAngle={Math.PI / 2 - 0.1}
          minDistance={5}
          maxDistance={50}
        />
      </Canvas>
    </div>
  );
}

export default App;
