import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'main-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MainMenuComponent {
  activeLink: string = "/";

  public links = [
    { route: '/boardComponent', icon: 'home'}
  ];

  constructor(private location: Location) {
    
  }

  ngOnInit() {
    this.activeLink = this.location.path();
  }
}
