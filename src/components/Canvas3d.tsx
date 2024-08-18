import { PropsWithChildren, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stats, OrbitControls, Tube } from '@react-three/drei';
import { CurvePath, LineCurve3, TubeGeometry, Vector3 } from 'three';
import { Box } from './Box';

export interface ICanvas3d extends PropsWithChildren {}

export const Canvas3d = ({ children }: ICanvas3d) => {
  return (
    <Canvas>
      <ambientLight intensity={1} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={1}
      />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={1} />
      <OrbitControls />
      <Stats />
      {children}
    </Canvas>
  );
};
