import './App.css';
import { NavbarComponent } from './components/NavbarComponent';
import { HomeComponent } from './components/HomeComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

import{
  Stack,
}from 'react-bootstrap';

function App() {
  return (
    <Stack>
      <div className="home-container">
        <Stack>
          <NavbarComponent />
          <HomeComponent />
        </Stack>
        <svg viewBox="0 0 1440 320">
          <path fill="#0e1523" fill-opacity="1" d="M0,64L48,85.3C96,107,192,149,288,154.7C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,181.3C1248,203,1344,213,1392,218.7L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
      </div>
      
    </Stack>
  );
}

export default App;
