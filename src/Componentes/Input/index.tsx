import { Input, IInputProps } from 'native-base'
import { ReactNode } from 'react'

interface IIpuntText extends IInputProps{
    children: ReactNode
}

export default function InputText({ children, ...rest}: IIpuntText){
    return(
        <Input
            size="lg"
            w="100%"
            borderRadius="lg"
            bgColor="gray.100"
            shadow={3}
            {...rest}
        >
        </Input>
    )
}