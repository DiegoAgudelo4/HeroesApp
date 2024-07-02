import { Link, NavLink, useNavigate } from 'react-router-dom';


export const Navbar = () => {
   

    //se debe acceder al navigation provider para traer 
    //el push y el replace
    //custom hook que nos ayuda con la navegacion 
    const navigate= useNavigate();
    const handleLogout = () =>{
        navigate('/login',
            {
                replace: true
            }
        )
        //replace: evita que el usuario pueda volver a la pagina anterior
    }
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}` } 
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}` } 
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink 
                        className={({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}` } 
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">

                    <span 
                        className='nav-item nav-link text-primary'
                    >
                        Usuario.nombre
                    </span>

                    <button
                        className='nav-item nav-link btn'
                        onClick={handleLogout}
                    >
                            Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}