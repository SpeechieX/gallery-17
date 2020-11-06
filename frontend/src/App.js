import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'

const App = () => {
    return (
      <>
        <Header />
          <Container>
            <main>
              <h1>Welcome to Gallery 17!</h1>
            </main>
          </Container>
          <Footer />
      </>


    );
}

export default App;
