import { Component, effect, inject } from '@angular/core';
import { HeaderMenuService } from '../../services/header-menu/header-menu.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { NgClass } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header-menu',
  standalone: true,
  imports: [NavbarComponent, NgClass, MatIconModule, NavbarComponent],
  templateUrl: './header-menu.component.html',
  styleUrl: './header-menu.component.css',
})
export class HeaderMenuComponent {
  private headerMenuService = inject(HeaderMenuService);

  $openedHeaderMenu!: boolean;

  constructor() {
    effect(() => {
      this.getHeaderMenuState();
    });
  }

  getHeaderMenuState() {
    this.$openedHeaderMenu = this.headerMenuService.getHeaderMenuState();
  }

  closeHeaderMenu() {
    this.headerMenuService.closeHeaderMenu();
  }
}
