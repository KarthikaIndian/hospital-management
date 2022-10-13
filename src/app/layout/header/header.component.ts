import { Component, OnInit } from '@angular/core';
import { MENU } from '../menu';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuItems:any=[]
  constructor() { }

  ngOnInit(): void {
    this.menuItems = MENU;
  }

}
