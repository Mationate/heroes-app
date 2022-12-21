import { heroes } from "../data/heroes";

export const getHeroesByPublishers = (publisher) =>{
    const validPublisher = ['DC Comics','Marvel Comics'];
    if (!validPublisher.includes(publisher)) {
        throw new Error(`${publisher} no es un publicador válido`);
    }

    return heroes.filter(heroe => heroe.publisher === publisher);
}