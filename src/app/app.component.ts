import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faUserCog,faDashboard ,faBars } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private router:Router){}
  open:boolean = false;
  title = 'T Dev Class';
  faBars = faBars;
  faDashboard = faDashboard;
  faUserCog = faUserCog;

  toggleMenu() {
    this.open = ! this.open
  }

  linkAction(){
    console.log('url pressed');   
    //this.router.navigate(['/url'])
  }
}
