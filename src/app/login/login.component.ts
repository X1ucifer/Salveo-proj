import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  showPassword :boolean =false;
  isLoading: boolean = false;
  name:any;
  password:any;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
login(){
  if(this.name == 'salveo@gmail.com' && this.password == 'Salveo$#2021'){
    this.router.navigate(['admin_panel']);
  }
  else{
    alert('Invalid Login Details')
  }

}
}
