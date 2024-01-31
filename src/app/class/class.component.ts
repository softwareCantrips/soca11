import { Component, inject } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router,
   RouterOutlet, RouterLink, RouterLinkActive} from '@angular/router';


@Component({
  selector: 'app-class',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './class.component.html',
  styleUrl: './class.component.scss'
})
export class ClassComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  router: Router = inject(Router);
  routeId:number = 0;

  characterClass:string[] = ["Barbarian", "Bard", "Cleric"];

  constructor() {

    //this.routeId = Number(this.route.snapshot.params["id"]);

    this.router.events.subscribe((event) => {

      if(event instanceof ActivationEnd) {
        console.log("Activation End");
        this.routeId = event.snapshot.params["id"];
      }

    });

  }

  goHome() {
    this.router.navigate(['home']);
  }

}
