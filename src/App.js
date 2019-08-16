import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import '~/config/reactotron';
import GlobalStyle from '~/styles/global';
import ErrorBox from '~/components/ErrorBox';
import Header from '~/components/Header';
import Routes from '~/routes';
import store from '~/store';
import { Wrapper, Container, Content } from '~/styles/components';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <>
          <GlobalStyle />
          <Wrapper>
            <Container>
              <Content>
                <Header />
                <ErrorBox />
                <Routes />
              </Content>
            </Container>
          </Wrapper>
        </>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
