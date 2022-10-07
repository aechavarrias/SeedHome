import React, { useState, useContext } from "react";
import { Nav, Barsbutton, NavMenu, NavLink } from "./NavbarElements";



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // let currentUser = "/users";
  // if (localStorage.getItem("user")) {
  //   const actualLocalStorage = JSON.parse(localStorage.getItem("user"));
  //   currentUser = `/users/${actualLocalStorage.user}`;
  // };

  return (
    <Nav>
      <NavLink to="/">SeedHome</NavLink>
      <Barsbutton
        onClick={() => setIsOpen(!isOpen)}
        className={isOpen ? "open" : ""}
      >
        <span></span>
        <span></span>
        <span></span>
      </Barsbutton>
      <NavMenu isOpen={isOpen}>
        <NavLink to="/">Home</NavLink>
        {/* {localStorage.getItem("user") && <NavLink to="/create">Crear turno</NavLink>} */}
        {/* {localStorage.getItem("user") && <NavLink to={currentUser}>Perfil</NavLink>} */}
        {/* {localStorage.getItem("user") && <NavLink to='/requests'>Solicitudes</NavLink>} */}
        {/* {!localStorage.getItem("user") && <NavLink to='/login'>Ingresar</NavLink>} */}
        {/* {localStorage.getItem("user") && <NavLink to="/chat">Chat</NavLink>}
        {!localStorage.getItem("user") && <NavLink to='/register'>Registrarse</NavLink>}
        {localStorage.getItem("user") && <NavLink to='/logout'>Cerrar Sesión</NavLink>} */}
        <NavLink to='/signin'>Ingresar</NavLink>
        <NavLink to='/signinside'>Ingresar2</NavLink>
        <NavLink to='/signup'>Registrarse</NavLink>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;