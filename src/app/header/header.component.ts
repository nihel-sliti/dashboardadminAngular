import { Component, HostListener, Input, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { languages, userItems } from './header-dummy-data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']  // Corrected 'styleUrl' to 'styleUrls'
})
export class HeaderComponent implements OnInit {
  
  @Input() collapsed = false;
  @Input() screenWidth = 0;
  showDropdown = false;
  canShowSearchAsOverlay = false;
  selectLanguage: any;
  languages = languages;
  userItems= userItems;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (isPlatformBrowser(this.platformId)) {
      this.checkCanShowSearchAsOverlay(window.innerWidth);
    }
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.checkCanShowSearchAsOverlay(window.innerWidth);
      if (this.languages && this.languages.length > 0) {
        this.selectLanguage = this.languages[0];
      }
    }
  }

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  getHeadClass(): string {
    let styleClass = '';
    if (this.collapsed && this.screenWidth > 768) {
      styleClass = 'head-trimmed';
    } else {
      styleClass = 'head-md-screen';
    }
    return styleClass;
  }

  checkCanShowSearchAsOverlay(innerWidth: number): void {
    if (innerWidth < 845) {
      this.canShowSearchAsOverlay = true;
    } else {
      this.canShowSearchAsOverlay = false;
    }
  }
}
