import { folder } from 'leva';
import { NegX, NegY, NegZ, PosX, PosY, PosZ } from './assets';
import { EMaterial, EPipeProp } from './types';

export const slidersLeva = {
  Bending: folder({
    [EPipeProp.RADIUS]: {
      value: 1,
      min: 1,
      max: 10,
      step: 0.5,
      label: 'Bend Radius',
    },
    [EPipeProp.ANGLE]: {
      value: 45,
      min: 0,
      max: 180,
      step: 1,
      label: 'Bend Angle',
    },
  }),
  'Segments Length': folder({
    [EPipeProp.SEGMENT_A]: {
      value: 5,
      min: 2,
      max: 10,
      step: 0.5,
      label: 'Segment A',
    },
    [EPipeProp.SEGMENT_B]: {
      value: 5,
      min: 2,
      max: 10,
      step: 0.5,
      label: 'Segment B',
    },
  }),
  Tube: folder({
    [EPipeProp.TUBE_DIAMETER]: {
      value: [0.3, 0.5],
      min: 0.3,
      max: 1,
      step: 0.1,
      label: 'Diameter',
    },
    [EPipeProp.MATERIAL]: { options: EMaterial },
  }),
  'Camera Options': folder({
    ortho: {
      value: true,
      label: 'Orthographic',
    },
  }),
};

export const envMap = [NegX, NegY, NegZ, PosX, PosY, PosZ];

export const materialConfig = {
  [EMaterial.ALUMINUM]: {
    color: '#b3b3b3',
    roughness: 0.44,
    metalness: 0.48,
  },
  [EMaterial.COOPER]: {
    color: '#f67104',
    roughness: 0.21,
    metalness: 0.8,
  },
  [EMaterial.GOLD]: {
    color: '#f6a904',
    roughness: 0,
    metalness: 1,
  },
  [EMaterial.SILVER]: {
    color: '#a2a1a0',
    roughness: 0.23,
    metalness: 0.64,
  },
};
