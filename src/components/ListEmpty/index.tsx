import { Container, Title } from './styles';

type Props = {
  message: string;
}

const ListEmpty = ({ message }: Props) => {
  return (
    <>
      <Container>
        <Title>{message}</Title>
      </Container>
    </>
  );
}

export default ListEmpty;
