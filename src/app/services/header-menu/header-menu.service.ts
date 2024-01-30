import { Injectable, WritableSignal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HeaderMenuService {
  private openedHeaderMenu: WritableSignal<boolean> = signal<boolean>(false);

  openHeaderMenu() {
    this.openedHeaderMenu.set(true);
  }

  closeHeaderMenu() {
    this.openedHeaderMenu.set(false);
  }

  getHeaderMenuState(): boolean {
    return this.openedHeaderMenu();
  }
}
