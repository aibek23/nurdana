import React, { useContext, useState, useEffect } from 'react'
import { Navbar,Nav} from 'react-bootstrap'
import { NavLink, useNavigate  } from 'react-router-dom'
import { Context } from '../context/Context'

export const Header = (props) => {
  const isAuthenticated = props.props;
  const [state, setState] = useState({ authenticated: false, studentTime: false, adm: false });
  const data = JSON.parse(localStorage.getItem('userData'));
  const history = useNavigate()
  const auth = useContext(Context)
  const logoutHandler = event => {
    // event.preventDefault()
    auth.logout()
    // history.push(null, 'login');
  }

  useEffect(() => {
    setState(prevState => {
      const newState = { ...prevState };
      if (isAuthenticated !== null) {
        newState.authenticated = true;
      
      }
      if (data && data.userEmail === "admin@gmail.com") {
        newState.adm = true;
      }
    //   if (data && data.userEmail) {
    //     studentTime==1
    //       newState.studentTime = true;
    //   }
  
      return newState;
    });
  }, [isAuthenticated]);
  return (
    
    <>
    <Navbar variant="dark" expand="lg" sticky="top" style={{"background":"#1c7fb3"}}>
        <div className='container'>
                                <Navbar.Brand href="/">DEUTSCH MIT UNS</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav" >
                                    <Nav className="ml-auto">
                                    <NavLink className="nav-link" to={"/"}>Главная</NavLink>
                                    {!state.authenticated?<NavLink className="nav-link" to={"/Courses"}>Курсы</NavLink>:""}
                                    
                                    <NavLink className="nav-link" to={"/grammar"}>Грамматика</NavLink>
                                    {state.authenticated?<NavLink className="nav-link" to={"/AuthPage"}>Вход</NavLink>:<NavLink className="nav-link" to={"/AuthPage"} onClick={(e)=>logoutHandler(e)}>Выйти</NavLink>}
                                    
                                    </Nav>
                                    
                                </Navbar.Collapse>
                                </div>
                            </Navbar>
                          
 </>
  )
}
{/* <ul className="navbar-nav me-auto mb-2 mb-md-0">
              {data ? state.operator ?
                <li className="nav-item">
                  <NavLink className="nav-link" to="/CallPage">прием звонков</NavLink>
                </li> :
                <li className="nav-item">
                  <NavLink className="nav-link" to="/CallPage">позвонить</NavLink>
                </li> : ''}
              {state.adm ? <NavLink className="nav-link" to="/AdminPanel">админ панель</NavLink> : ""}
            </ul>
            <ul className='navbar-nav'>
              <li className="nav-item">
                <a className="nav-link" href="/AuthPage" onClick={logoutHandler}>{data?"выйти":"вход в аккаунт"}</a>
              </li>
            </ul> */}