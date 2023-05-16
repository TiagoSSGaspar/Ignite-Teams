
import { TouchableOpacityProps } from 'react-native';
import { Container, Title } from './styles';

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY'

type Props  = TouchableOpacityProps & {
  title: string
  type?: ButtonTypeStyleProps
}

const Button = ({ title, type = 'PRIMARY', ...rest }: Props) => {
  return (
    <>
      <Container {...rest} className={type === 'PRIMARY'? "bg-green-700" : "bg-red_dark"} >
        <Title>{title}</Title>
      </Container>
    </>
  );
}

export default Button;
