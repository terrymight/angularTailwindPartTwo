import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faAngleUp,faAngleDown,faVoicemail,faFile,faPanorama,faUserCog,faDashboard ,faBars } from "@fortawesome/free-solid-svg-icons";

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
  arrow:boolean = false;
  title = 'T Dev Class';
  faBars = faBars;
  faDashboard = faDashboard;
  faUserCog = faUserCog;
  faPanorama = faPanorama;
  faFile = faFile;
  faVoicemail = faVoicemail
  faAngleDown = faAngleDown
  faAngleUp = faAngleUp

  toggleMenu() {
    this.open = ! this.open
  }

  toggleArrow() {
    this.arrow = ! this.arrow
  }

  linkAction(key:string){
    switch (key) {
      case 'Dashboard':
        console.log('Dashboard');   
        //this.router.navigate(['/url'])
        break;
        case 'Manage Users':
          console.log('Manage Users');   
          //this.router.navigate(['/url'])
          break;

          case 'Settings':
        console.log('Settings');   
        //this.router.navigate(['/url'])
        break;

        case 'File':
        console.log('File');   
        //this.router.navigate(['/url'])
        break;
        case 'Voice Mail':
        console.log('Voice Mail');   
        //this.router.navigate(['/url'])
        break;
      default:
        break;
    }
   
  }

  menus = [
    {
      icon: this.faDashboard,
      title: 'Dashboard',
      submenu: false
    },
    {
      icon: this.faUserCog,
      title: 'Manage Users',
      submenu: false
    },
    {
      icon: this.faPanorama,
      title: 'Settings',
      submenu: true,
      submenuItems: [
        {
          title: 'File',
          icon: this.faFile
        },
        {
          title: 'Voice Mail',
          icon: this.faVoicemail
        }
      ]
    }
  ]
}
