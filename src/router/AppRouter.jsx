//yarn add react-router-dom

//para solo tener las rutas en un documento
import { Route, Routes } from 'react-router-dom';
//import { MarvelPage } from '../Heroes/pages/MarvelPage';
//import { DcPage } from '../Heroes/pages/DcPage';
//import { LoginPage } from '../auth/pages/LoginPage';
import { LoginPage } from "../auth";
import { HeroesRoutes } from '../Heroes';
import { Navbar } from '../ui';

export const AppRouter = () => {
  return (
    <>

      {
        <Routes>
          <Route path="login" element={<LoginPage />} />
          <Route path="/*" element={<HeroesRoutes />} />
        </Routes>
      }
    </>
  )
}
