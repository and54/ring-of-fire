import { EPipeProp } from './types';

export const sliders = [
  {
    id: EPipeProp.RADIUS,
    min: 3,
    max: 10,
    label: 'Radius',
    multiplier: 10,
  },
  {
    id: EPipeProp.ANGLE,
    min: 0,
    max: 120,
    label: 'Angle',
  },
  {
    id: EPipeProp.FIRST_ARM_LENGTH,
    min: 2,
    max: 10,
    label: 'First Arm Length',
  },
  {
    id: EPipeProp.SECOND_ARM_LENGTH,
    min: 2,
    max: 10,
    label: 'Second Arm Length',
  },
];
