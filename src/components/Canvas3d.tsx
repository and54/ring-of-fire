import { Canvas } from '@react-three/fiber';
import {
  Stats,
  OrbitControls,
  OrthographicCamera,
  PerspectiveCamera,
} from '@react-three/drei';
import { ICanvas3d } from '../types';

export const Canvas3d = ({ children, ortho }: ICanvas3d) => (
  <Canvas>
    <ambientLight intensity={1} />
    <spotLight
      position={[10, 10, 10]}
      angle={0.15}
      penumbra={1}
      decay={0}
      intensity={1}
      castShadow
    />
    <pointLight position={[-10, -10, -10]} decay={0} intensity={1} />
    <pointLight position={[10, 10, 10]} decay={0} intensity={1} />

    <OrbitControls>
      <PerspectiveCamera
        position={[0, 0, 10]}
        fov={50}
        zoom={0.5}
        makeDefault={!ortho}
      />
      <OrthographicCamera position={[0, 0, 10]} zoom={50} makeDefault={ortho} />
    </OrbitControls>
    <Stats />

    {children}
  </Canvas>
);
