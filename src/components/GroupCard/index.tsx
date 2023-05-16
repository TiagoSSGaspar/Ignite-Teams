
import appTheme from '@theme/theme';
import { Container, Title, Icon } from './styles';

type Props = {
  title: string;
}

const GroupCard = ({ title }: Props) => {
  return (
    <>
      <Container>
        <Icon weight='fill' size={32} color={appTheme.COLORS.GREEN_700} />
        <Title >{title}</Title>
      </Container>
    </>
  );
}

export default GroupCard;
