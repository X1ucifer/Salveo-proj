import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
// import { ApiService } from '../../../api/userApi/api.service';
import { ApiService } from '../../../api.service';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-appoinmentlist',
  templateUrl: './appoinmentlist.component.html',
  styleUrls: ['./appoinmentlist.component.css']
})
export class AppoinmentlistComponent implements OnInit {

  app_List:any;
  constructor(
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private router: Router,
    private _api: ApiService,
    public dialog: MatDialog,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    this._api.appointment().subscribe(
      (response: any) => {
        this.app_List = response.Data;
        console.log(this.app_List);
      }
    );
  }

}
