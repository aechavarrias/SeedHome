import logo from './logo.svg';
import './App.css';
import react from 'react';
import Footer from './components/layout/navigation/Footer/Footer';
import StickyFooter from './components/layout/navigation/Footer/Footer2';
import { StyledEngineProvider } from '@mui/material/styles';
import Navbar from './components/layout/navigation/NavBar/NavBar';
import DeptoCard from './components/layout/information/Cards/DeptoCard';
import SearchComunas from './components/layout/display/LandinPage/SearchComunas';
import SuscripcionView from './components/layout/display/LandinPage/SuscripcionView';
import Home from './views/Home/Home';
import NotFoundPage from './views/NotFound/NotFoundPage';
import Login from './views/Users/Login';
import SignIn from './views/Users/SignIn';
import SignInSide from './views/Users/SignIn';
import SignUp from './views/Users/SignUp';
import About from './views/About/About';

import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signinside" element={<SignInSide />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/cardtest" component={CardTest} /> */}
          {/* <Route path="/users" element={<Users />}> */}
            {/* <Route path="/" element={<UsersList />} /> */}
            {/* <Route path=":userId" element={<User />} /> */}
          {/* </Route> */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
        {/* <StickyFooter /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
