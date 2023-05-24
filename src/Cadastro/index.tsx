import { 
    VStack, 
    Text, Box, 
    FormControl, Input, Button, Link,
    Image } from "native-base";
import Logo from '../assets/logo.png';
import { TouchableOpacity } from 'react-native'
import Titulo from "../Componentes/Titulo";

export default function Cadastro(){
    return(
        <VStack 
            p={5}
            flex={1} 
            alignItems="center" 
            justifyContent="center"
        >
            <Image source={Logo} alt="logo" />
            {/* <Titulo children="Faça Login em sua conta" /> */}
            <Titulo color="gray.500"> Cadastro </Titulo>
            <Box>
                <FormControl mt={3}>
                    <FormControl.Label>E-mail</FormControl.Label>
                    <Input placeholder="exemplo@mail.com.br" w="100%"/>
                </FormControl>
                <FormControl mt={3}>
                    <FormControl.Label>Senha</FormControl.Label>
                    <Input placeholder="***********"  w="100%" />
                </FormControl>
            </Box>
            <Button 
                w="100%"
                bg="blue.800"
                mt={10}
                borderRadius="lg"
            >
                Entrar
            </Button>
            <Link
                mt={5} 
                href='https://www.google.coom.br'>
                Esqueceu a senha
            </Link>
            <Box 
                w="100%" 
                flexDirection="row" 
                justifyContent="center"
                marginTop={5}
            >
                <Text>Ainda Não tem cadastro?</Text>
                <TouchableOpacity>
                    <Text marginLeft={2}  color="blue.500">Cadastra-se</Text>
                </TouchableOpacity>
            </Box>
            
            
        </VStack>
    )
}