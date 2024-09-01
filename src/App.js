import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import LandingPage from './components/landing-sec/landing-sec';
import Projects from './components/projects/projects';
import Footer from './components/footer/footer';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#C30606',
    },
    secondary: {
      main: '#1AFCF4',
    },
  },
});

function App() {
  return (
    <div className="App">
      <Header></Header>
      <LandingPage></LandingPage>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
}

export default App;
