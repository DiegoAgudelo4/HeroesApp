import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher'
import { HeroCard } from './HeroCard'

export const HeroesList = ({ publisher }) => {

    //el useMemo evita que la funcion sea llamada de nuevo 
    //cuando el componente vuelve  a ser renderizado 
    //por ejemplo cuando un padre se vuelve a renderizar
    //la funcion no se llama de nuevo;
    //se se disparará la funcion cuando [heroid] sea diferente
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])

    return (
        <div className='row rows-cols-1 row-cols-md-3 g-3'>
            {
                heroes.map(heroe => <HeroCard
                    key={heroe.id}
                    {...heroe}
                />)
            }
        </div>
    )

}
