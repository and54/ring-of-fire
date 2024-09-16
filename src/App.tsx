import { AppStyled } from './styles';
import { Canvas3d, Pipe } from './components';
import { slidersLeva } from './config';
import { useControls } from 'leva';

const App = () => {
  const { ortho, ...pipeProps } = useControls(slidersLeva);

  return (
    <AppStyled>
      <Canvas3d ortho={ortho}>
        <Pipe {...pipeProps} />
      </Canvas3d>
    </AppStyled>
  );
};

export default App;
