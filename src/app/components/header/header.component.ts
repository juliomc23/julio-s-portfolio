import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { HeaderMenuComponent } from '../header-menu/header-menu.component';
import { HeaderMenuService } from '../../services/header-menu/header-menu.service';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    MatIconModule,
    NgClass,
    HeaderMenuComponent,
    NavbarComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  private headerMenuService = inject(HeaderMenuService);

  openMenu() {
    this.headerMenuService.openHeaderMenu();
  }
}
