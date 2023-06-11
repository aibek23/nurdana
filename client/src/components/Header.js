import React, { useContext, useState, useEffect } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom'
import { Context } from '../context/Context'
export const Header = (props) => {
  const isAuthenticated = props.props;
  const [state, setState] = useState({ authenticated: false, adm: false });
  const data = JSON.parse(localStorage.getItem('user'));
  const auth = useContext(Context)
  const logoutHandler = () => {
    auth.logout();
    window.location.reload();
  }
  useEffect(() => {
    setState(prevState => {
      const newState = { ...prevState };
      if (isAuthenticated) {
        newState.authenticated = true;

      }
      if (data && data.userId === "64689a53239a224948afe3e6") {
        newState.adm = true;
      }
      return newState;
    });
  }, [isAuthenticated]);
  return (
    <>
      <Navbar variant="dark" expand="lg" sticky="top" style={{ "background": "#1c7fb3" }}>
        <div className='container'>
          <Navbar.Brand href="/">DEUTSCH MIT UNS</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="ml-auto">
              {state.adm ?<NavLink className="nav-link" to={"/admin"}>admin</NavLink>:""}
              <NavLink className="nav-link" to={"/"}>Главная</NavLink>
              {state.authenticated ? <NavLink className="nav-link" to={"/Media"}>Медиатека</NavLink> : ""}
              {state.authenticated ? <NavLink className="nav-link" to={"/tests"}>Тесты</NavLink> : ""}
              <NavLink className="nav-link" to={"/grammar"}>Грамматика</NavLink>
              {!state.authenticated ? <NavLink className="nav-link" to={"/AuthPage"}>Вход</NavLink> : <NavLink className="nav-link" to={"/AuthPage"} onClick={(e) => logoutHandler(e)}>Выйти</NavLink>}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>

    </>
  )
}
