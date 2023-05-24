import { NativeBaseProvider, StatusBar} from 'native-base'
import { TEMAS } from './src/estilos/temas';
import Cadastro from './src/Cadastro';

export default function App() {
  return (
      <NativeBaseProvider theme={TEMAS}>
        <Cadastro />
        <StatusBar backgroundColor={TEMAS.colors.blue[900]} />
      </NativeBaseProvider>
  );
}