import { Component, HostListener } from '@angular/core';
import { MatListModule, MatNavList } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';



@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatNavList, MatIconModule, MatButtonModule, RouterModule, MatSidenavModule, MatListModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  isMobile = false;
  menuOpen = false;
  hideSubHeader = false;
  showFiller = false;


  private lastScrollTop = 0;

  constructor() {
    this.onResize();
  }

  @HostListener('window:resize')
  onResize() {
    this.isMobile = window.innerWidth < 768;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    this.hideSubHeader = scrollTop > this.lastScrollTop && scrollTop > 100;
    this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }

}
