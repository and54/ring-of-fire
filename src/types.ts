import { PropsWithChildren } from 'react';

export enum EMaterial {
  GOLD = 'gold',
  SILVER = 'silver',
  ALUMINUM = 'aluminum',
  COOPER = 'cooper',
}

export enum EPipeProp {
  RADIUS = 'radius',
  ANGLE = 'angle',
  SEGMENT_A = 'segmentA',
  SEGMENT_B = 'segmentB',
  TUBE_DIAMETER = 'tubeDiameter',
  MATERIAL = 'tubeMaterial',
}

export type TPipePropsState = {
  [key in EPipeProp]: number;
};

export interface ICanvas3d extends PropsWithChildren {
  ortho?: boolean;
}

export interface IPipe {
  [EPipeProp.RADIUS]: number;
  [EPipeProp.ANGLE]: number;
  [EPipeProp.SEGMENT_A]: number;
  [EPipeProp.SEGMENT_B]: number;
  [EPipeProp.TUBE_DIAMETER]: [number, number];
  [EPipeProp.MATERIAL]: EMaterial;
}
