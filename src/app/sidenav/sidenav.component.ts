import { Component, Output, EventEmitter, HostListener, OnInit } from '@angular/core';
import { navbarData } from './nav-data';

interface SideNAvToggle{
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent implements OnInit{
  @Output() onToggleSideNAv: EventEmitter<SideNAvToggle> = new EventEmitter;
  collapsed= false;
  screenWidth=0;
  navData=navbarData;

  @HostListener('window:resize', ['$event'])
  onResize(event:any){
    this.screenWidth=window.innerWidth;
    if(this.screenWidth<=768){
      this.collapsed= false;
      this.onToggleSideNAv.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
    }
  }
  ngOnInit():void{
 
    
    
  }
  toggleCollapsed():void {
    this.collapsed= !this.collapsed;
    this.onToggleSideNAv.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }
  closeSidenav():void{
    this.collapsed= false;
    this.onToggleSideNAv.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }
}
