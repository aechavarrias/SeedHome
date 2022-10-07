import react from 'react';
import Footer from '../../components/layout/navigation/Footer/Footer';
import { StyledEngineProvider } from '@mui/material/styles';
import NavBar from '../../components/layout/navigation/NavBar/NavBar';
import DeptoCard from '../../components/layout/information/Cards/DeptoCard';
import SearchComunas from '../../components/layout/display/LandinPage/SearchComunas';
import SuscripcionView from '../../components/layout/display/LandinPage/SuscripcionView';
import CardTest from '../../components/layout/information/Cards/CardTest';
// import csvJSON from '../../utils/CrearDeptos';
import Departamentos_airtable from '../../static/tables/Departamentos_airtable.csv';

function Home() {

  // const deptos = csvJSON(Departamentos_airtable);
  // console.log(deptos);
  console.log(Departamentos_airtable);
  var lines = Departamentos_airtable.split("");
  var result = [];
  var headers = lines[0].split(",");
  console.log(lines);

  // var lines = csv.split("");
  //   var result = [];
  //   var headers = lines[0].split(",");

  return (
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
        {/* {deptos.map((depto) => (              
          <CardTest
            tipo={depto.Tipo}
            precio={depto.Precio}
            m_2_totales={depto.m_2_totales}
            dormitorios={depto.Dormitorios}
            banos={depto.Baños}
          ></CardTest>
        ))} */}
        
        
    </StyledEngineProvider>
    </div>
  );
}

export default Home;