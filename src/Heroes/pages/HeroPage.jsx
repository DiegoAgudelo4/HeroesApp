import React, { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../helpers/getHeroById';

export const HeroPage = () => {
  const {heroid, ...rest} = useParams();
  const navigate = useNavigate();

  // console.log(heroid) 
  // console.log(rest)//resto de parametros

  //el useMemo evita que la funcion sea llamada de nuevo 
  //cuando el componente vuelve  a ser renderizado 
  //por ejemplo cuando un padre se vuelve a renderizar
  //la funcion no se llama de nuevo;
  //se se disparará la funcion cuando [heroid] sea diferente
  const hero= useMemo(() => getHeroById(heroid), [heroid])

  
  const handleNavigateBack = () =>{
    navigate(-1);
  }
  if(!hero){
    return <Navigate to={'/marvel'}/>
  }
  return (
    <div className='row mt-5'>
      <div className="col-4">
        <img 
        src={`/assets/heroes/${heroid}.jpg`} 
        alt={hero.superhero}
        className='img-thumbnail animate__animated animate__fadeInLeft'/>{/*le pone un margen*/}
      </div>
      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'><b>Alter ego:</b> {hero.alter_ego}</li>
          <li className='list-group-item'><b>Publisher:</b> {hero.publisher}</li>
          <li className='list-group-item'><b>First appearance:</b> {hero.first_appearance}</li>
        </ul>
        <h5 className="mt-3"> Characters</h5>
        <p>{hero.characters}</p>
      </div>
      <button 
      className='btn btn-outline-primary'
      onClick={handleNavigateBack}
      >
        Regresar
      </button>

    </div>
  )
}
