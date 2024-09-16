import { MeshProps, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { Mesh } from 'three';

interface IBox extends MeshProps {
  color?: string;
}

export const Box = ({ color, ...meshProps }: IBox) => {
  const meshRef = useRef<Mesh | null>(null);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame((state, delta) => (meshRef.current!.rotation.x += delta));

  return (
    <mesh
      {...meshProps}
      ref={meshRef}
      scale={active ? 1 : 0.5}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color || (hovered ? 'hotpink' : 'orange')} />
    </mesh>
  );
};
