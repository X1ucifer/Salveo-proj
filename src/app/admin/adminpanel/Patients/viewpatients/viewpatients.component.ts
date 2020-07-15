import { Component, OnInit , Inject} from '@angular/core';
import { Router } from '@angular/router';
// import { ApiService } from '../../../api/userApi/api.service';
import { ApiService } from '../../../../api.service';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-viewpatients',
  templateUrl: './viewpatients.component.html',
  styleUrls: ['./viewpatients.component.css']
})
export class ViewpatientsComponent implements OnInit {
  Family_list:any;
  Patient_details: any;
  patient_id: string;
  constructor(
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private router: Router,
    private _api: ApiService
    ) {
   }

  ngOnInit() {



  this.Patient_details =  this.getFromLocal('Patient_Details');
  console.log(this.Patient_details);
  this.patient_id = this.Patient_details._id;
  this.Listmembers(this.patient_id);


  }


  saveInLocal(key, val): void {
    this.storage.set(key, val);
   }

   getFromLocal(key): any {
    return this.storage.get(key);
   }

  Listmembers(i){
    let datas = {
      "pid": i
     }
       this._api.GetFamilyList(datas).subscribe(
         (response: any) => {
            console.log(response);
            this.Family_list = response.Data;
         }
         );
  }


  DeleteMembers(i){
    console.log(i);
    let a = {
      "pid": i
    }
      this._api.DeleteMembers(a).subscribe(
        (response: any) => {
           console.log(response);
           alert("User Deleted successfully");
           this.Listmembers(this.patient_id);
        }
        );
  }
}
