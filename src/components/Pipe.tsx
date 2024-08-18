import { Sphere } from '@react-three/drei';
import { useMemo } from 'react';
import {
  Vector3,
  CurvePath,
  LineCurve3,
  TubeGeometry,
  MeshStandardMaterial,
  DoubleSide,
} from 'three';

export interface IPipe {
  radius: number;
  angle: number;
  firstArmLength: number;
  secondArmLength: number;
}

export const Pipe = ({
  radius,
  angle,
  firstArmLength,
  secondArmLength,
}: IPipe) => {
  const tubeGeometry = useMemo(() => {
    const rad = (Math.PI * angle) / 180;

    const arm1Ini = new Vector3(-firstArmLength, 0, 0);
    const intersec = new Vector3(0, 0, 0);
    const arm2Fin = new Vector3(
      Math.cos(rad) * secondArmLength,
      Math.sin(rad) * secondArmLength,
      0
    );

    const curve = new CurvePath<Vector3>();
    curve.add(new LineCurve3(arm1Ini, intersec));
    //curve.add(new QuadraticBezierCurve3(v2, vc, v2));
    curve.add(new LineCurve3(intersec, arm2Fin));

    return new TubeGeometry(curve, 150, radius, 32, false);
  }, [radius, angle, firstArmLength, secondArmLength]);

  const material = useMemo(
    () =>
      new MeshStandardMaterial({
        color: 0xff69b4,
        side: DoubleSide,
      }),
    []
  );

  return (
    <>
      <Sphere args={[radius, 32, 16]} material={material} />
      <mesh geometry={tubeGeometry} material={material} />
    </>
  );
};
