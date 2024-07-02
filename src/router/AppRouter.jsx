//yarn add react-router-dom
import { Navigate,Route, Routes} from 'react-router-dom';
import { MarvelPage } from '../pages/MarvelPage';
import { DcPage } from '../pages/DcPage';
import { LoginPage } from '../auth/pages/LoginPage';

export const AppRouter = () => {
  return (
    <> 
        <Routes>
            <Route path="marvel" element = {<MarvelPage/>} />
            <Route path="dc" element={<DcPage/>}/>
            <Route path="login" element={<LoginPage/>}/>
            <Route path="/" element ={<Navigate to="/marvel"/>}/>
        </Routes>
    </>
  )
}
