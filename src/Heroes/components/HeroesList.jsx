import React from 'react'
import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher'

export const HeroesList = ({ publisher }) => {
    const heroes = getHeroesByPublisher(publisher)
    return (
        heroes.map(heroe => <li key={heroe.id}>{heroe.superhero}</li>)

    )
}
