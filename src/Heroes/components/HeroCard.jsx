import React from 'react'
import { Link } from 'react-router-dom'

const CharacterByHero = ({alter_ego, characters}) =>{
    if(alter_ego === characters) return (<></>);
    
    return <p>{characters}</p>
}
export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {
    const heroImageUrl = `/assets/heroes/${id}.jpg`
    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={heroImageUrl} className='card-img' alt={superhero} />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-tittle">
                                {superhero}
                            </h5>
                            <p className="card-text">
                                {alter_ego}
                            </p>
                            {/* {(alter_ego !== characters) && characterByHero} */}
                            <CharacterByHero characters={characters} alter_ego={alter_ego}/>
                            <p className="card-text">
                                {first_appearance}
                            </p>
                            <Link to={`/hero/${id}`}> 
                            Más
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
