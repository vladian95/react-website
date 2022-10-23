import styled, { css } from 'styled-components';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Feature from './components/Feature';
import Service from './components/Service';
import Price from './components/Price';
import Contact from './components/Contact';
import Footer from './components/Footer';

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const Shape = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: -1;
`;

const IntoShape = styled.div`
  ${Shape}
  clip-path: polygon(1000% 0%, 66% 0%, 45% 100%, 100% 100%);
  background-color: crimson;
`;

const FeatureShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 45% 0, 37% 100%, 0% 100%);
  background-color: green;
`;

const ServiceShape = styled.div`
  ${Shape}
  clip-path: polygon(32% 0, 37% 0, 37% 100%, 32% 100%);

  background-color: crimson;
`;

const PriceShape = styled.div`
  ${Shape}
  clip-path: polygon(37% 0, 100% 0, 100% 100%, 68% 100%);
  background-color: darkblue;
`;

const ContacteShape = styled.div`
  ${Shape}
  clip-path: polygon(20% 0%, 68% 0, 100% 100%, 0% 100%);
  background-color: crimson;
`;

function App() {
  return (
    <>
      <Container id="Home">
        <Navbar />
        <Intro />
        <IntoShape />
      </Container>
      <Container id="Features">
        <Feature />
        <FeatureShape />
      </Container>
      <Container id="Service">
        <Service />
        <ServiceShape />
      </Container>
      <Container id="Price">
        <Price />
        <PriceShape />
      </Container>
      <Container id="Contact">
        <Contact />
        <Footer />
        <ContacteShape />
      </Container>
    </>
  );
}

export default App;
