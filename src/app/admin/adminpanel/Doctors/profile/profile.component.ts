import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
// import { ApiService } from '../../../api/userApi/api.service';
import { ApiService } from '../../../../api.service';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { ValidatorService } from '../../../../validator.services';
import { Location } from '@angular/common';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
data:any;
  constructor(
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private router: Router,
    private http: HttpClient,
    private _api: ApiService,
    private ValidatorService: ValidatorService,
    private location: Location,
  ) { 
    document.body.scrollTop = 0;
    this.data = this.getFromLocal('Doctor_Details');
    console.log(this.data);
  }
  saveInLocal(key, val): void {
    this.storage.set(key, val);
   }

   getFromLocal(key): any {
    return this.storage.get(key);
   }
  ngOnInit(): void {
    
  }
  
back(){
  this.location.back();
}
}
