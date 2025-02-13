import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../components/';
//yarn add query-string
//para extraer todo del objeto search
import queryString from 'query-string';
import { getHeroesByName } from '../helpers/getHeroesByName';
import { useEffect } from 'react';

export const SearchPage = () => {

  const { searchText, onInputChange } = useForm({
    searchText: '' //estado incial
  });
  //para enviar los parametros es necesario navegar o cambiar
  //de pantalla, pero es la misma.
  const navigate = useNavigate();

  //para recibir los parametros
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search)
  const heroes = getHeroesByName(q);

  const showSerch = (q.length === 0);
  const showError=( q.length > 0 ) && (heroes.length ===0);

  const onSearchSubmit = (e) => {
    e.preventDefault(); //evita refresh

    //if (searchText.trim().length <= 1) return;
    navigate(`?q=${searchText}&asc=true`)
  };


  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary  mt-1"> Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {/* {q === '' ?
            <div className="alert alert-primary">
              Search a hero
            </div>
            : (heroes.length === 0) && 
            <div className="alert alert-danger">
              No hero with <b>{q}</b>
            </div>
          } */}
          <div className="alert alert-primary animate__animated animate__fadeIn" 
            style={{ display: showSerch ? '' : 'none' }}>
            Search a hero
          </div>
          <div className="alert alert-danger animate__animated animate__fadeIn"  
            style={{ display: showError ? '' : 'none' }}>
            No hero with <b>{q}</b>
          </div>

          {heroes.map(hero => (
            <HeroCard
             
              key={hero.id} //recordar siempre darle un id a componentes creados con map
              {...hero}//pasamos todos los atributos del hero
            />
          ))
          /* <HeroCard /> */}
        </div>
      </div>
    </>
  )
}
