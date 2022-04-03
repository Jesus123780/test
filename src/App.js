import './App.css';
import React, { useEffect, useMemo, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import LayoutComponent from './components/Layout';
import { Home } from './pages/home';
import { Dashboard } from './pages/dashboard';
import Context from '../src/context';
import { decodeToken, getToken, removeToken } from './utils';
import AutoContext from './AutoContext';
// import '../styles/theme.scss';
// import LayoutComponent from '../components/Layout';
// import Login from '../pages/login';
// import Register from '../pages/register';
// import { logoutUser } from '../actions/user';
// 
function App() {
  const CloseButton = ({ closeToast }) => <i onClick={closeToast} className="la la-close notifications-close" />
  const PrivateRoute = ({ dispatch, component, ...rest }) => {
    // if (!Login.isAuthenticated(localStorage.getItem('authenticated'))) {
    //   dispatch(logoutUser());
    //   return (<Redirect to="/login" />)
    // } else {
    //   return ( // eslint-disable-line
    //     <Route {...rest} render={props => (React.createElement(component, props))} />
    //   );
    // }
  };
  const [auth, setAuth] = useState(undefined)
  useEffect(() => {
    const token = getToken()
    if (!token) {
      setAuth(null)
    } else {
      setAuth(decodeToken(token))
    }
  }, [])

  const logout = () => {
    // eslint-disable-next-line
    removeToken()
    setAuth(null)
  }
  const setUser = user => {
    setAuth(user)
  }
  const authData = useMemo(
    () => ({
      auth,
      logout,
      setUser
    }),
    [auth]
  )
  if (auth === undefined) return null
  return (
    <div>
      <ToastContainer
        autoClose={5000}
        hideProgressBar
        closeButton={<CloseButton />}
      />
      <BrowserRouter value={authData}>
        <AutoContext.Provider value={authData}>

          {!auth ?
            <>
              <Routes>
                <Route exact path="/login" element={<Home />} />
              </Routes>
            </> :
            <>
              <LayoutComponent>
                <Routes>
                  <Route exact path="/dashboard" element={<Dashboard />} />
                  <Route exact path="/invoices" element={<About />} />
                  {/* <PrivateRoute path="/app" dispatch={() => { }} component={LayoutComponent} /> */}
                </Routes>
              </LayoutComponent>
            </>
          }
        </AutoContext.Provider>

      </BrowserRouter>
    </div>
  );
}

export default App;

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}
