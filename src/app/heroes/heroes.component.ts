import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero-detail/hero';
import {HeroService} from '../services/hero.service';


@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['../home/app.component.css'],
  providers: []
})

export class HeroesComponent implements OnInit {

    heroes: Hero[];
    selectedHero: Hero;

    constructor(private heroService: HeroService){}

    getHeroes(): void{
        this.heroService.getHeroes().then(heroes => this.heroes=heroes);
    }

    ngOnInit(): void{
        this.getHeroes();
    }

    onSelect(hero: Hero): void{
      this.selectedHero = hero;
  }
}
