import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
// import { ApiService } from '../../../api/userApi/api.service';
import { ApiService } from '../../../../api.service';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-listpatients',
  templateUrl: './listpatients.component.html',
  styleUrls: ['./listpatients.component.css']
})
export class ListpatientsComponent implements OnInit {


  Patient_list: any;
  selectedcorporate: any;
  selectedemp: any;
  list: any;
  corporate:any=[];
  constructor(
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private router: Router,
    private _api: ApiService
  ) {

  }
  ngOnInit() {
    this._api.PatientList().subscribe(
      (response: any) => {
        console.log(response);
        this.list = response.Data;
        this.Patient_list = response.Data;
      }
    );
    this._api.companyget().subscribe(
      (response: any) => {
        console.log(response);
        this.corporate=[];
        for(let i=0; i< response.Data.length; i++ ){
          this.corporate.push( { name: response.Data[i].Corporatecode, code: response.Data[i].Corporatecode },)
        }
        console.log(this.corporate);
      }
    );
  }



  DeletePatient(i) {
    this._api.DeletePatient(i).subscribe(
      (response: any) => {
        console.log(response);
        alert("User Deleted successfully");
        this.ngOnInit();
      }
    );
  }

  ViewPatient(data) {
    this.saveInLocal('Patient_Details', data);
    console.log(data);
    this.router.navigateByUrl('/admin_panel/View_patient_profile');
  }


  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }

  getFromLocal(key): any {
    return this.storage.get(key);
  }

  filter() {
    this.Patient_list = this.list;
    if (this.selectedcorporate != undefined) {
      this.Patient_list = this.Patient_list.filter((x: any) => x.CorporateCode == this.selectedcorporate)
    }
    if (this.selectedemp != undefined && this.selectedemp != '') {
      this.Patient_list = this.Patient_list.filter((x: any) => x.emp_codes == this.selectedemp)
    }
  }
  refresh(){
    this.Patient_list = this.list;
    this.selectedcorporate = undefined;
    this.selectedemp = undefined;
  }
}

