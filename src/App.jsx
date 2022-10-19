import styled from 'styled-components';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Feature from './components/Feature';

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
`;

const IntoShape = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  clip-path: polygon(1000% 0%, 66% 0%, 45% 100%, 100% 100%);
  background-color: crimson;
  z-index: -1;
`;

function App() {
  return (
    <>
      <Container>
        <Navbar />
        <Intro />
        <IntoShape />
      </Container>
      <Container>
        <Feature />
      </Container>
    </>
  );
}

export default App;
