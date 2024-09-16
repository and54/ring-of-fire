import { useMemo, useState } from 'react';
import {
  Vector3,
  CurvePath,
  LineCurve3,
  TubeGeometry,
  MeshStandardMaterial,
  DoubleSide,
  EllipseCurve,
  CubeTextureLoader,
  RingGeometry,
} from 'three';
import type { IPipe } from '../types';
import { envMap, materialConfig } from '../config';

type TVectorArray = [x: number, y: number, z: number];

export const Pipe = ({
  radius,
  angle,
  segmentA,
  segmentB,
  tubeDiameter,
  tubeMaterial,
}: IPipe) => {
  const [meshPos, setMeshPos] = useState<TVectorArray>([0, 0, 0]);

  const deg2rad = (angle: number) => (Math.PI * angle) / 180;

  const newVector = ({ x, y }: { x: number; y: number }) =>
    new Vector3(x, y, 0);

  const getPosition = (rad: number, length: number) =>
    newVector({
      x: Math.cos(deg2rad(rad)) * length,
      y: Math.sin(deg2rad(rad)) * length,
    });

  const tubeGeometry = useMemo(() => {
    const elipse = new EllipseCurve(
      0,
      0,
      radius,
      radius,
      deg2rad(-90),
      deg2rad(angle + 90),
      true
    )
      .getPoints(Math.floor((180 - angle) / 3))
      .filter(({ x, y }) => !isNaN(x) && !isNaN(y));

    const arm1Center = getPosition(-90, radius);
    const arm1End = getPosition(0, segmentA).add(arm1Center);
    const arm2Center = getPosition(angle + 90, radius);
    const arm2End = getPosition(angle, segmentB).add(arm2Center);

    const limitLeft = Math.min(...elipse.map(({ x }) => x), arm2End.x);
    const limitRight = Math.max(arm1End.x, arm2End.x);
    const halfHor = (limitRight - limitLeft) / 2;

    const limitTop = Math.max(...elipse.map(({ y }) => y), arm2End.y);
    const limitBottom = arm1End.y;
    const halfVer = (limitTop - limitBottom) / 2;

    setMeshPos([-halfHor - limitLeft, -halfVer - limitBottom, 0]);

    const curve = new CurvePath<Vector3>();
    curve.add(new LineCurve3(arm1End, arm1Center));
    if (elipse.length > 1)
      elipse.forEach((point, i) =>
        curve.add(
          new LineCurve3(
            i ? newVector(elipse[i - 1]) : arm1Center,
            newVector(point)
          )
        )
      );
    curve.add(new LineCurve3(arm2Center, arm2End));

    return {
      external: new TubeGeometry(curve, 150, tubeDiameter[1], 32, false),
      internal: new TubeGeometry(curve, 150, tubeDiameter[0], 32, false),
      segmentA: {
        geometry: new RingGeometry(tubeDiameter[0], tubeDiameter[1], 32),
        position: arm1End,
        rotation: [0, Math.PI / 2, 0] as TVectorArray,
      },
      segmentB: {
        geometry: new RingGeometry(tubeDiameter[0], tubeDiameter[1], 32),
        position: arm2End,
        rotation: [
          Math.PI / 2,
          Math.atan2(arm2Center.y - arm2End.y, arm2Center.x - arm2End.x) +
            Math.PI / 2,
          0,
        ] as TVectorArray,
      },
    };
  }, [radius, angle, segmentA, segmentB, tubeDiameter]);

  const cubeMap = useMemo(() => {
    const cLoader = new CubeTextureLoader();
    const map = cLoader.load(envMap);
    return map;
  }, []);

  const material = useMemo(
    () =>
      new MeshStandardMaterial({
        emissive: 0,
        side: DoubleSide,
        envMap: cubeMap,
        ...materialConfig[tubeMaterial],
      }),
    [tubeMaterial]
  );

  const elemProps = useMemo(
    () => ({ material, receiveShadow: true, castShadow: true }),
    [material]
  );

  return (
    <mesh position={meshPos}>
      <mesh geometry={tubeGeometry.internal} {...elemProps} />
      <mesh geometry={tubeGeometry.external} {...elemProps} />
      <mesh {...tubeGeometry.segmentA} {...elemProps} />
      <mesh {...tubeGeometry.segmentB} {...elemProps} />
    </mesh>
  );
};
