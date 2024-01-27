import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Container from '@mui/material/Container';
import Teachers from '../Teachers/Teachers';
import Models from '../Models/Models';
import Gallery from '../Gallery/Gallery';
import Courses from '../Courses/Courses';

const App = () => {
  return (
    <Container maxWidth={'xl'}>
      <Header />
      <Main></Main>
      <Courses />
      <Teachers />
      <Models />
      <Gallery></Gallery>
      <Footer></Footer>
    </Container>
  );
};

export default App;
