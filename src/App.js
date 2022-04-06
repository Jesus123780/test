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
import { Dashboard } from './pages/dashboard/index';
import { decodeToken, getToken, removeToken } from './utils';
import AutoContext from './AutoContext';
import { QR } from './components/Qr';
// import '../styles/theme.scss';
// import LayoutComponent from '../components/Layout';
// import Login from '../pages/login';
// import Register from '../pages/register';
// import { logoutUser } from '../actions/user';
// 
function App() {
  const CloseButton = ({ closeToast }) => <i onClick={closeToast} className="la la-close notifications-close" />
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
            <>
              <Routes>
                <Route exact path="/login" element={<Home/>} />
              </Routes>
            </> 
            <>
              <LayoutComponent>
                <Routes>
                  <Route exact path="/dashboard" element={<Dashboard />} />
                  <Route exact path="/qr" element={<QR />} />
                  {/* <PrivateRoute path="/app" dispatch={() => { }} component={LayoutComponent} /> */}
                </Routes>
              </LayoutComponent>
              
            </>
          

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
