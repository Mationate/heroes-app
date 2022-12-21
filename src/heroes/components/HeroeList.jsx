import { getHeroesByPublishers } from '../helpers';

export const HeroeList = ({publisher}) => {
  const heroes = getHeroesByPublishers(publisher);
  return (
    <ul>
      {
        heroes.map(hero => 
        <li key={hero.id}>{hero.superhero} </li>
        )
      }
    </ul>
  )
}
