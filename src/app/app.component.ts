import { Component } from '@angular/core';
import { Router } from '@angular/router';
interface SideNAvToggle{
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dashAdmin';
  constructor(private router: Router) {}

  get isAuthRoute() {
    // Vérifie si la route actuelle est celle de l'authentification
    return this.router.url.includes('/auth')|| this.router.url.includes('/signup');
  }
isSideNavCollapsed= false;
screenWidth= 0;

  onToggleSideNAv(data: SideNAvToggle):void{
    this.screenWidth= data.screenWidth;
    this.isSideNavCollapsed= data.collapsed;
  }
}
