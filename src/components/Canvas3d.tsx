import { Canvas } from '@react-three/fiber';
import {
  Stats,
  OrbitControls,
  OrthographicCamera,
  PerspectiveCamera,
} from '@react-three/drei';
import { ICanvas3d } from '../types';
import { useState, useEffect } from 'react';

export const Canvas3d = ({ children }: ICanvas3d) => {
  const [ortho, setOrtho] = useState(true);

  useEffect(() => {
    //const interval = setInterval(() => setOrtho((state) => !state), 10000);
    //return () => clearInterval(interval);
  }, []);

  return (
    <Canvas camera={{ fov: 50, zoom: 0.2, focus: 1 }}>
      <ambientLight intensity={1} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={1}
      />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={0.5} />
      <pointLight position={[10, 10, 10]} decay={0} intensity={0.5} />

      <OrbitControls>
        <PerspectiveCamera
          position={[0, 0, 2.5]}
          fov={100}
          makeDefault={!ortho}
        />
        <OrthographicCamera
          position={[0, 0, 10]}
          zoom={50}
          makeDefault={ortho}
        />
      </OrbitControls>
      <Stats />
      {children}
    </Canvas>
  );
};
