import { useMemo } from 'react';
import {
  Vector3,
  CurvePath,
  LineCurve3,
  TubeGeometry,
  MeshStandardMaterial,
  DoubleSide,
  QuadraticBezierCurve3,
} from 'three';
import type { IPipe } from '../types';

export const Pipe = ({
  radius,
  angle,
  firstArmLength,
  secondArmLength,
}: IPipe) => {
  const geometry = useMemo(() => {
    const rad = (Math.PI * angle) / 180;

    const arm1Ini = new Vector3(-firstArmLength, 0, 0);
    const arm1Fin = new Vector3(-radius, 0, 0);
    const intersec = new Vector3(0, 0, 0);
    const arm2Ini = new Vector3(
      Math.cos(rad) * radius,
      Math.sin(rad) * radius,
      0
    );
    const arm2Fin = new Vector3(
      Math.cos(rad) * secondArmLength,
      Math.sin(rad) * secondArmLength,
      0
    );

    const curve = new CurvePath<Vector3>();
    curve.add(new LineCurve3(arm1Ini, arm1Fin));
    curve.add(new QuadraticBezierCurve3(arm1Fin, intersec, arm2Ini));
    curve.add(new LineCurve3(arm2Ini, arm2Fin));

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

  return <mesh geometry={geometry} material={material} />;
};
