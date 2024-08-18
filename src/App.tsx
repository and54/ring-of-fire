import React, { useState } from 'react';
import { Canvas3d } from './components/Canvas3d';
import { Pipe } from './components/Pipe';
import { Slider } from '@mui/material';

function App() {
  const [pipeProps, setPipeProps] = useState({
    radius: 0.5,
    angle: 45,
    firstArmLength: 5,
    secondArmLength: 3,
  });

  const handleChange = (name: string, newValue: number) => {
    setPipeProps({ ...pipeProps, [name]: newValue });
  };

  return (
    <>
      <div style={{ height: 'calc(100vh - 300px)' }}>
        <Canvas3d>
          <Pipe {...pipeProps} />
        </Canvas3d>
      </div>
      <div style={{ margin: 50, maxWidth: 300 }}>
        <Slider
          min={3}
          max={10}
          aria-label="Radius"
          value={pipeProps.radius * 10}
          onChange={(_: Event, value: number | number[]) =>
            handleChange('radius', +value / 10)
          }
        />
        <Slider
          min={-180}
          max={180}
          aria-label="Angle"
          value={pipeProps.angle}
          onChange={(_: Event, value: number | number[]) =>
            handleChange('angle', +value)
          }
        />
        <Slider
          min={2}
          max={10}
          aria-label="First Arm Length"
          value={pipeProps.firstArmLength}
          onChange={(_: Event, value: number | number[]) =>
            handleChange('firstArmLength', +value)
          }
        />
        <Slider
          min={2}
          max={10}
          aria-label="Second Arm Length"
          value={pipeProps.secondArmLength}
          onChange={(_: Event, value: number | number[]) =>
            handleChange('secondArmLength', +value)
          }
        />
      </div>
    </>
  );
}

export default App;
