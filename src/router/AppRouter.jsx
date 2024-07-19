//yarn add react-router-dom

//para solo tener las rutas en un documento
import { Route, Routes } from 'react-router-dom';
//import { MarvelPage } from '../Heroes/pages/MarvelPage';
//import { DcPage } from '../Heroes/pages/DcPage';
//import { LoginPage } from '../auth/pages/LoginPage';
import { LoginPage } from "../auth";
import { HeroesRoutes } from '../Heroes';
import { Navbar } from '../ui';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
  return (
    <>

      {
        <Routes>
          {/* Rutas publicas */}

          {/* <Route path="login" element={<LoginPage />} /> */}
          {/*-> <Route path="login/*" element={ */}
          <Route path="login" element={
            <PublicRoute>
              <LoginPage/>
              {/*->  <Route path="/*" element={<LoginPage />} /> */}
            </PublicRoute>
            } 
            />

          {/* Rutas privadas */}
          <Route path='/*' element={
            <PrivateRoute>
              <HeroesRoutes/>
            </PrivateRoute>
          }/>

          {/* <Route path="/*" element={<HeroesRoutes />} /> */}
        </Routes>
      }
    </>
  )
}
