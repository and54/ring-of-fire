import { PropsWithChildren } from 'react';

export enum EPipeProp {
  RADIUS = 'radius',
  ANGLE = 'angle',
  FIRST_ARM_LENGTH = 'firstArmLength',
  SECOND_ARM_LENGTH = 'secondArmLength',
}

export type TPipePropsState = {
  [key in EPipeProp]: number;
};

export interface ICanvas3d extends PropsWithChildren {}

export interface IPipe {
  radius: number;
  angle: number;
  firstArmLength: number;
  secondArmLength: number;
}

export interface IConfigSlider {
  id: string;
  min: number;
  max: number;
  label: string;
  value: number;
  onChange: (key: string, value: number) => void;
  multiplier?: number;
}
