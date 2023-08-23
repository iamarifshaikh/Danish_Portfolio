import './App.css';
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from './Utility/Themes';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Skills from './Components/Skills/Skills';
import Education from './Components/Education/Education';
import { BrowserRouter as Router } from 'react-router-dom';

const Body = styled.div`
background-color: ${({ theme }) => theme.bg};
width:100%;
overflow-x:hidden;
`;

const Wrapper = styled.div`
background:linear-gradient(
  38.73deg,
  rgba(204,0,187,0.15) 0%,
  rgba(201,32,184,0) 50%),
linear-gradient(
  141.27deg,
  rgba(0,70,209,0)50%,
  rgba(0,70,209,0.15)100%
  ); 
  width:100%;
  clip-path:polygon(0 0,100% 0, 100% 100%, 0 calc(100%-5vw));
`;

function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
      <Navbar />
      <Body>
        <Hero />
        <Wrapper>
          <Skills />
          <Education />
        </Wrapper>
      </Body>
      </Router>
    </ThemeProvider>
  )
}

export default App;
