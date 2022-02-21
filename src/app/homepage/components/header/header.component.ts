import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isNav = false;

  constructor() { }

  ngOnInit(): void {
  }

  NavClick(){
    this.isNav=!this.isNav;
    console.log("hloo",this.isNav)
  }

}
