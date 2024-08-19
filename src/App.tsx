import React, { useState } from 'react';
import { Slider } from '@mui/material';
import { AppStyled } from './styles';
import { Canvas3d, ConfigSlider, Pipe } from './components';
import { sliders } from './config';
import { TPipePropsState } from './types';

const App = () => {
  const [pipeProps, setPipeProps] = useState<TPipePropsState>({
    radius: 0.5,
    angle: 45,
    firstArmLength: 5,
    secondArmLength: 3,
  });

  const handleChange = (name: string, newValue: number) => {
    setPipeProps({ ...pipeProps, [name]: newValue });
  };

  return (
    <AppStyled>
      <div className="canvas-container">
        <Canvas3d>
          <Pipe {...pipeProps} />
        </Canvas3d>
      </div>
      <div className="sliders">
        {sliders.map((slider) => (
          <ConfigSlider
            key={slider.id}
            value={pipeProps[slider.id]}
            onChange={handleChange}
            {...slider}
          />
        ))}
      </div>
    </AppStyled>
  );
};

export default App;
