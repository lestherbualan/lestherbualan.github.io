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
      </div>
      
    </Stack>
  );
}

export default App;
