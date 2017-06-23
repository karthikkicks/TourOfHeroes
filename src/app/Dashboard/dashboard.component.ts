import {Component} from "@angular/core";
import {HeroService} from "../services/hero.service"
import {Hero} from "../hero-detail/hero";

@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html'
})

export class DashboardComponent{

    heroes: Hero[];

    constructor(private heroService: HeroService){};

    ngOnInit(): void{
        this.heroService.getHeroes().then(heroes=> this.heroes=heroes.slice(1,5));
    }

}