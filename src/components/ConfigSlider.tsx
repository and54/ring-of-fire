import { Slider } from '@mui/material';
import { ConfigSliderStyled } from '../styles';
import { EPipeProp, IConfigSlider } from '../types';

export const ConfigSlider = ({
  id,
  min,
  max,
  label,
  value,
  onChange,
  multiplier = 1,
}: IConfigSlider) => (
  <ConfigSliderStyled>
    <div>{`${label}: ${value}${id === EPipeProp.ANGLE ? '°' : 'm'}`}</div>
    <Slider
      min={min}
      max={max}
      aria-label={label}
      value={value * multiplier}
      onChange={(_: Event, value: number | number[]) =>
        onChange(id, +value / multiplier)
      }
    />
  </ConfigSliderStyled>
);
