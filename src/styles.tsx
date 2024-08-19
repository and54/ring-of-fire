import { styled } from '@mui/material';

export const AppStyled = styled('div')(() => ({
  '.canvas-container': {
    height: 'calc(100vh - 300px)',
  },
  '.sliders': {
    margin: 50,
    maxWidth: 300,
  },
}));

export const ConfigSliderStyled = styled('div')(() => ({
  marginBottom: 5,
}));
