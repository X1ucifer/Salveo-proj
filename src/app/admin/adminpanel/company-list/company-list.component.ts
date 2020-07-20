import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
// import { ApiService } from '../../../api/userApi/api.service';
import { ApiService } from '../../../api.service';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  Company_List: any;
  displayModal:boolean = false;
  del_id:any;
  constructor(
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private router: Router,
    private _api: ApiService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this._api.companylist().subscribe(
      (response: any) => {
        console.log(response);
        this.Company_List = response.Data;
      }
    );
  }
  DeleteCompany() {
   
    this._api.Deletecompany(this.del_id).subscribe(
      (response: any) => {
        console.log(response);
        alert(response.Message);
        this.ngOnInit();
      }
    );
    this.displayModal =false;
  }
  edit(data) {
    this.saveInLocal('Company_detail', data);
    this.saveInLocal('Form_type', 'edit');
    console.log(data);
    this.router.navigateByUrl('admin_panel/create_company');
  }
  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }

  getFromLocal(key): any {
    return this.storage.get(key);
  }
  open(id){
    this.del_id ={
      "_id": id
  }
    this.displayModal = true;
  }
}
