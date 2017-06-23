import {Injectable} from '@angular/core';

import {HEROES} from './mock-hero';
import {Hero} from '../hero-detail/hero';

@Injectable()
export class HeroService{
    getHeroes(): Promise<Hero[]>{
        return Promise.resolve(HEROES);
    }

    getHero(id: number): Promise<Hero>{
        return this.getHeroes()
            .then(heroes => heroes.find(hero => hero.id===id));
    }
}