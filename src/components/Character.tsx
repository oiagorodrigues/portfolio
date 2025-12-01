import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type * as THREE from "three";

interface CharacterProps {
  position?: [number, number, number];
  isMoving?: boolean;
}

export function Character({
  position = [0, 0, 0],
  isMoving = false,
}: CharacterProps) {
  const groupRef = useRef<THREE.Group>(null);
  const bobOffset = useRef(0);
  const previousTime = useRef(0);

  useFrame((state) => {
    if (!groupRef.current) return;

    const currentTime = state.clock.getElapsedTime();
    const delta =
      previousTime.current > 0 ? currentTime - previousTime.current : 0.016;
    previousTime.current = currentTime;

    const speed = isMoving ? 8 : 2;
    bobOffset.current += delta * speed;

    const bobAmount = isMoving ? 0.15 : 0.08;
    const bobY = Math.sin(bobOffset.current) * bobAmount;

    groupRef.current.position.y = position[1] + bobY;
    groupRef.current.position.x = position[0];
    groupRef.current.position.z = position[2];
  });

  const skinColor = "#f8f8d8";
  const tunicColor = "#88c070";
  const pantsColor = "#886840";
  const hatColor = "#306850";

  return (
    <group ref={groupRef} castShadow>
      {/* Hat */}
      <group position={[0, 1.72, 0]}>
        <mesh castShadow>
          <coneGeometry args={[0.25, 0.3, 4]} />
          <meshStandardMaterial color={hatColor} flatShading />
        </mesh>
      </group>

      {/* Head */}
      <group position={[0, 1.35, 0]}>
        <mesh castShadow>
          <boxGeometry args={[0.4, 0.4, 0.4]} />
          <meshStandardMaterial color={skinColor} flatShading />
        </mesh>
      </group>

      {/* Tunic */}
      <group position={[0, 0.8, 0]}>
        <mesh castShadow>
          <boxGeometry args={[0.5, 0.6, 0.3]} />
          <meshStandardMaterial color={tunicColor} flatShading />
        </mesh>
      </group>

      {/* Right Arm */}
      <group position={[-0.35, 0.7, 0]}>
        <mesh castShadow rotation={[0, 0, 0]}>
          <cylinderGeometry args={[0.08, 0.08, 0.4, 6]} />
          <meshStandardMaterial color={skinColor} flatShading />
        </mesh>
      </group>

      {/* Left Arm */}
      <group position={[0.35, 0.7, 0]}>
        <mesh castShadow rotation={[0, 0, 0]}>
          <cylinderGeometry args={[0.08, 0.08, 0.4, 6]} />
          <meshStandardMaterial color={skinColor} flatShading />
        </mesh>
      </group>

      {/* Right Leg */}
      <group position={[-0.15, 0.22, 0]}>
        <mesh castShadow>
          <cylinderGeometry args={[0.1, 0.1, 0.5, 6]} />
          <meshStandardMaterial color={pantsColor} flatShading />
        </mesh>
      </group>

      {/* Left Leg */}
      <group position={[0.15, 0.22, 0]}>
        <mesh castShadow>
          <cylinderGeometry args={[0.1, 0.1, 0.5, 6]} />
          <meshStandardMaterial color={pantsColor} flatShading />
        </mesh>
      </group>
    </group>
  );
}
