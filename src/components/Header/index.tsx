
import appTheme from '@theme/theme';
import { BackButton, BackIcon, Container, Logo } from './styles';
import logoPng from '@assets/logo.png';

type Props = {
  showBackButton?: boolean
}

const Header = ({ showBackButton }: Props) => {
  return (
    <>
      <Container>
        {
          showBackButton &&
          <BackButton>
            <BackIcon size={32} color={appTheme.COLORS.WHITE} />
          </BackButton>
        }

        <Logo source={logoPng} />
      </Container>
    </>
  );
}

export default Header;
