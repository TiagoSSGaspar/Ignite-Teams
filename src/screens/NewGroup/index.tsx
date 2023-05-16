import Header from '@components/Header';
import { Container, Content, Icon } from './styles';
import { useState } from 'react';
import Button from '@components/Button';
import appTheme from '@theme/theme';
import Highlight from '@components/Highlight';
import Input from '@components/Input';

const NewGroup = () => {
  const [newGroup, setNewGroup] = useState('')

  return (
    <>
      <Container>
        <Header showBackButton />
        <Content>
          <Icon size={56} color={appTheme.COLORS.GREEN_700} />

          <Highlight title='Nova turma' subTitle='crie a turma para adicionar as pessoas' />

          <Input />

          <Button className='mt-5' title='Criar nova turma' />
        </Content>
      </Container>
    </>
  );
}

export default NewGroup;
