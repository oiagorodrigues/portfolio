import { useMemo } from "react";
import * as THREE from "three";

export function Terrain() {
  const computedMesh = useMemo(() => {
    const geometry = new THREE.PlaneGeometry(50, 50, 32, 32);
    const positions = geometry.attributes.position;

    // Add simple height variation
    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i);
      const y = positions.getY(i);

      // Simple wave pattern for hills
      const height = Math.sin(x * 0.1) * Math.cos(y * 0.1) * 2;
      positions.setZ(i, height);
    }

    geometry.computeVertexNormals();
    return geometry;
  }, []);

  return (
    <>
      {/* Main ground */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0, 0]}
        geometry={computedMesh}
        receiveShadow
      >
        <meshStandardMaterial color="#88c070" flatShading />
      </mesh>

      {/* Grid overlay */}
      <gridHelper
        args={[50, 50, "#306850", "#306850"]}
        position={[0, 0.01, 0]}
      />
    </>
  );
}
