import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CRUD-APP';
 
  router:Router 
  constructor(private activateroute:ActivatedRoute, router:Router){
    this.router=router; 
    console.log("ActivatrRoute:",this.activateroute);
      console.log("Router",this.router);
  }
}
