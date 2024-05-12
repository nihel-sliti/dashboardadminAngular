import { Component } from '@angular/core';
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

isSideNavCollapsed= false;
screenWidth= 0;

  onToggleSideNAv(data: SideNAvToggle):void{
    this.screenWidth= data.screenWidth;
    this.isSideNavCollapsed= data.collapsed;
  }
}
