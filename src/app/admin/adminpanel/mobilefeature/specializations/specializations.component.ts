import { Component, OnInit,Inject } from '@angular/core';
import { Router } from '@angular/router';
// import { ApiService } from '../../../api/userApi/api.service';
import { ApiService } from '../../../../api.service';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-specializations',
  templateUrl: './specializations.component.html',
  styleUrls: ['./specializations.component.css']
})
export class SpecializationsComponent implements OnInit {

  Specialisation_List:any = [];
  Specialisation:string = '';


  constructor(
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private router: Router,
    private _api: ApiService
  ) {

  }


  ViewDoctors(data){
      this.saveInLocal('Doctor_Details', data);
      console.log(data);
      this.router.navigateByUrl('/Home/buttons/view_doctors');

  }

  ngOnInit() {

    this._api.specializationList().subscribe(
      (response: any) => {
         console.log(response);
         this.Specialisation_List = response.Data;
      }
      );
  }


  addSpecialisation(){
    if(this.Specialisation == ""){
      alert('Enter Specialisation');
    }
    else{
     let check = 0 ;
     for (let a = 0 ; a < this.Specialisation_List.length ; a ++){
       if (this.Specialisation_List[a].Specialization == this.Specialisation) {
        check = 1 ;
       }
     }

     if(check == 0){
       let data = {"Specialization": this.Specialisation}
      this._api.Createspecialization(data).subscribe(
        (response: any) => {
          console.log(response);
          if(response.Code == 300){
            alert("There Was a Problem in register this doctor try it again");
          }else{
            alert('Data Uploaded SuccessFully');
            this.Specialisation = '';
            this.ngOnInit();
          }
        }
      );


     }else {
      alert('This Specialisation already Exists');
     }
    }
  }

  DeleteSpecialisation(i){
    let a = {
      "Specialization_id":i
    }
    this._api.DeleteSpecialisation(a).subscribe(
      (response: any) => {
         console.log(response);
         alert(response.Message);
         this.ngOnInit();
         }
      );
  }


  saveInLocal(key, val): void {
    this.storage.set(key, val);
   }

   getFromLocal(key): any {
    return this.storage.get(key);
   }

}

