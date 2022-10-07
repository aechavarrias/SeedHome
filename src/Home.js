import logo from './logo.svg';
import './App.css';
import react from 'react';
import Footer from './components/layout/navigation/Footer/Footer';
import { StyledEngineProvider } from '@mui/material/styles';
import NavBar from './components/layout/navigation/NavBar/NavBar';
import DeptoCard from './components/layout/information/Cards/DeptoCard';
import SearchComunas from './components/layout/display/LandinPage/SearchComunas';
import SuscripcionView from './components/layout/display/LandinPage/SuscripcionView';

function Home() {
  return (
    <div>
      <div>
        <StyledEngineProvider injectFirst>
          <NavBar />
        </StyledEngineProvider>
      </div>
      <div
        style={{
          display: 'grid',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <StyledEngineProvider injectFirst>
          <SearchComunas />
        </StyledEngineProvider>
        <StyledEngineProvider injectFirst>
          <SuscripcionView />
        </StyledEngineProvider>
        <StyledEngineProvider injectFirst>
          <DeptoCard />
        </StyledEngineProvider>
      </div>
      <div>
        <StyledEngineProvider injectFirst>
          <Footer />
        </StyledEngineProvider>
      </div>
    </div>
  );
}

export default Home;