import {heroes} from '../data/heroes-with-desc';


export const getHeroesByPublisher = (publisher) => {
    const validPublisher = ['DC Comics', 'Marvel Comics']
    if( !validPublisher.includes(publisher)){
        throw new error(`${publisher} is not a valid publisher`)
    }
    return heroes.filter(heroe => heroe.publisher === publisher)
}
