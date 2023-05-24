import { 
    VStack, 
    Text, Box, 
    FormControl, Input, Button, Link,
    Image } from "native-base";
import Logo from '../assets/logo.png';
import { TouchableOpacity } from 'react-native'

export default function Login(){
    return(
        <VStack 
            p={5}
            flex={1} 
            alignItems="center" 
            justifyContent="center"
        >
            <Image source={Logo} alt="logo" />
            <Text 
                fontSize="2xl"
                fontWeight="bold"
                color="gray.500"
                textAlign="center"
                mt={5}
            >Faça Login em sua conta</Text>
            <Box>
                <FormControl mt={3}>
                    <FormControl.Label>E-mail</FormControl.Label>
                    <Input 
                        placeholder="Insira seu endereço de email"
                        size="lg"
                        w="100%"
                        borderRadius="lg"
                        bgColor="gray.100"
                        shadow={3}
                    />
                </FormControl>
                <FormControl mt={3}>
                    <FormControl.Label>Senha</FormControl.Label>
                    <Input 
                        placeholder="****************"
                        size="lg"
                        w="100%"
                        borderRadius="lg"
                        bgColor="gray.100"
                        shadow={3}
                    />
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