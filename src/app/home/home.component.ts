import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  text:string = "";
  aRoute:ActivatedRoute = inject(ActivatedRoute);
  constructor() {
    this.text = this.aRoute.snapshot.data['title'];
  }

}
