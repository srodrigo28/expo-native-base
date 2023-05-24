import { NativeBaseProvider, StatusBar} from 'native-base'
import Principal from './src/Principal';
import { TEMAS } from './src/estilos/temas';

export default function App() {
  return (
      <NativeBaseProvider theme={TEMAS}>
        <Principal />
        <StatusBar backgroundColor={TEMAS.colors.blue[900]} />
      </NativeBaseProvider>
  );
}