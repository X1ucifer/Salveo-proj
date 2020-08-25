import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { ApiService } from '../../../api/userApi/api.service';
import { ApiService } from '../../../../api.service';


@Component({
  selector: 'app-appusers',
  templateUrl: './appusers.component.html',
  styleUrls: ['./appusers.component.css']
})
export class AppusersComponent implements OnInit {

  Doctor_List:any;

  constructor(
    private router: Router,
    private _api: ApiService
  ) {

  }
  ngOnInit() {
    this._api.UserList().subscribe(
      (response: any) => {
         console.log(response);
         this.Doctor_List = response.Data;
      }
      );
  }

  DeleteUser(i){
    this._api.DeleteUser(i).subscribe(
      (response: any) => {
         console.log(response);
         alert("User Deleted successfully");
         this.ngOnInit();
      }
      );
  }
}

