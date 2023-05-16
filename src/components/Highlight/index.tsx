
import { Container, SubTitle, Title } from './styles';

type Props = {
  title: string;
  subTitle: string;
}

const Highlight = ({ title, subTitle }: Props) => {
  return (
    <>
      <Container>
        <Title >{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
      </Container>
    </>
  );
}

export default Highlight;
