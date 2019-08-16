import React from 'react';
import '~/config/reactotron';
import GlobalStyle from '~/styles/global';
import { Wrapper, Container } from '~/styles/components';

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Container>
          <h1>Tudo funfando</h1>
        </Container>
      </Wrapper>
    </>
  );
}

export default App;
