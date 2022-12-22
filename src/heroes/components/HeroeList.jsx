import { useMemo } from 'react';
import { getHeroesByPublishers } from '../helpers';
import { HeroCard } from './HeroCard';

export const HeroeList = ({publisher}) => {
  //para recordar valores sirve el useMemo
  const heroes = useMemo(() => getHeroesByPublishers(publisher), [publisher]) ;
  
  return (
    <ul>
      {
        heroes.map(hero => 
          <HeroCard key={hero.id}{...hero} />
        )
      }
    </ul>
  )
}
