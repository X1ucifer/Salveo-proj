
import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
// import { ApiService } from '../../../api/userApi/api.service';
import { ApiService } from '../../../../api.service';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-listdoctors',
  templateUrl: './listdoctors.component.html',
  styleUrls: ['./listdoctors.component.css']
})
export class ListdoctorsComponent implements OnInit {

  Doctor_List:any;
  Live_Doctor_List:any;

  Live_Doctor_data :  any;
  Live_Doctor_id: string;


  constructor(
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private router: Router,
    private _api: ApiService,
    public dialog: MatDialog

  ) {

  }


  ViewDoctors(data){
      this.saveInLocal('Doctor_Details', data);

      this.router.navigateByUrl('admin_panel/view_doctors');
  }

  ngOnInit() {
    this._api.DoctorList().subscribe(
      (response: any) => {
         this.Doctor_List = response.Data;
      }
      );
      this._api.LiveDoctorList().subscribe(
        (response: any) => {

           this.Live_Doctor_List = response.Data;
        }
        );



  }


  Makelive(data)
  {

    if(data.Verification_Status == "not verified"){
       alert("Doctor not verified");
    }else {
    this.Live_Doctor_data = data;
    this.Live_Doctor_id = '';
    let checkdata = 0 ;
    for (let a = 0 ; a < this.Live_Doctor_List.length ; a++){
     if(this.Live_Doctor_List[a].Email == data.Email){
       checkdata = 1 ;
       this.Live_Doctor_id = this.Live_Doctor_List[a]._id;
     }
    }
    if(checkdata == 0){

      this.InsertLiveDoctor();
    }else {

      this.UpdateLiveDoctor();
    }
    this.updatedoctor(data._id);
  }
  }

  DeleteDoctor(i){
    this._api.DeleteDoctor(i._id).subscribe(
      (response: any) => {
         for (let a = 0 ; a < this.Live_Doctor_List.length ; a++){
          if(this.Live_Doctor_List[a].Email == i.Email){
            // this.Live_Doctor_id = this.Live_Doctor_List[a]._id;
              this._api.LiveDeleteDoctor(this.Live_Doctor_List[a]._id).subscribe(
                (response: any) => {
                   console.log(response);
                   alert(response.message);
                   this.ngOnInit();
                   }
                );
          }
         }
         }
      );
  }

   updatedoctor(id){
    let data =
  {
      "_id" : id,
      "Live_Status": 'Live'
  }

  this._api.EditDoctor(data).subscribe(
    (response: any) => {

      if(response.Code == 300){
        alert("There Was a Problem in register this doctor try it again");
      }else{
        alert('Doctor Moved to Live');
        this.ngOnInit();
      }
    }
  );
   }



  InsertLiveDoctor(){

    let data =
    {
      "Pic" : this.Live_Doctor_data.Pic,
      "Name" : this.Live_Doctor_data.Name,
      "DOB" :this.Live_Doctor_data.DOB,
      "Type":this.Live_Doctor_data.Type,
      "Gender": this.Live_Doctor_data.Gender,
      "Languages" : this.Live_Doctor_data.Languages,
      "Email" :this.Live_Doctor_data.Email,
      "Password" : this.Live_Doctor_data.Password,
      "Phone": +this.Live_Doctor_data.Phone,
      "Qualifications": this.Live_Doctor_data.Qualifications,
      "HighestQualifications": this.Live_Doctor_data.HighestQualifications,
      "Specilization": this.Live_Doctor_data.Specilization,
      "Year_of_Passout": this.Live_Doctor_data.Year_of_Passout,
      "Current_location": this.Live_Doctor_data.Current_location,
      "Experience":this.Live_Doctor_data.Experience,
      "Current_employee_id": "",
      "EmployeeAt":this.Live_Doctor_data.EmployeeAt,
      "AvailableHours": this.Live_Doctor_data.AvailableHours,
      "OnlineConsultant":this.Live_Doctor_data.OnlineConsultant,
      "Information": this.Live_Doctor_data.Information,
      "Updated_At": ""+new Date(),
      "last_login_time": ""+new Date(),
      "Available_type": this.Live_Doctor_data.Available_type,
      "Service": this.Live_Doctor_data.Service,
      "Special_mention": this.Live_Doctor_data.Special_mention,
      "Charge_Per_15min": this.Live_Doctor_data.Charge_Per_15min,
      "Live_Status": 'Live',
      "Verification_Status": this.Live_Doctor_data.Verification_Status,
      "Salveo_Price": this.Live_Doctor_data.Salveo_Price,
      "signature" : this.Live_Doctor_data.signature,
      "KMS_registration": this.Live_Doctor_data.KMS_registration,
      "corporatecode" :"",
      "Doctor_Range":0

  }

  this._api.CreateLiveDoctor(data).subscribe(
    (response: any) => {
      if(response.Code == 300){
        alert("There Was a Problem in register this doctor try it again");
      }else{
        alert('Doctor Moved to Live');
        this.ngOnInit();
      }
    }
  );
  }



  UpdateLiveDoctor(){
    let data =
    {
      "_id": this.Live_Doctor_id,
      "Pic" : this.Live_Doctor_data.Pic,
      "Name" : this.Live_Doctor_data.Name,
      "DOB" :this.Live_Doctor_data.DOB,
      "Gender": "Male",
      "Type":this.Live_Doctor_data.Type,
      "Languages" : this.Live_Doctor_data.Languages,
      "Email" :this.Live_Doctor_data.Email,
      "Password" : this.Live_Doctor_data.Password,
      "Phone": +this.Live_Doctor_data.Phone,
      "Qualifications": this.Live_Doctor_data.Qualifications,
      "HighestQualifications": this.Live_Doctor_data.HighestQualifications,
      "Specilization": this.Live_Doctor_data.Specilization,
      "Year_of_Passout": this.Live_Doctor_data.Year_of_Passout,
      "Current_location": "Chennai",
      "Experience":this.Live_Doctor_data.Experience,
      "Current_employee_id": "",
      "EmployeeAt":this.Live_Doctor_data.EmployeeAt,
      "AvailableHours": this.Live_Doctor_data.AvailableHours,
      "OnlineConsultant":this.Live_Doctor_data.OnlineConsultant,
      "Information": this.Live_Doctor_data.Information,
      "Updated_At": ""+new Date(),
      "last_login_time": ""+new Date(),
      "Available_type": this.Live_Doctor_data.Available_type,
      "Service": this.Live_Doctor_data.Service,
      "Special_mention": this.Live_Doctor_data.Special_mention,
      "Charge_Per_15min": this.Live_Doctor_data.Charge_Per_15min,
      "Live_Status": 'Live',
      "Verification_Status": this.Live_Doctor_data.Verification_Status,
      "Salveo_Price": this.Live_Doctor_data.Salveo_Price,
      "signature" : this.Live_Doctor_data.signature,
      "KMS_registration": this.Live_Doctor_data.KMS_registration,
      "corporatecode" :"",
      "Doctor_Range":0
  }
  console.log(data);
  this._api.EditLiveDoctor(data).subscribe(
    (response: any) => {
      if(response.Code == 300){
        alert("There Was a Problem in register this doctor try it again");
      }else{
        console.log(response.data);
        alert('Doctor Made Live!');
        this.ngOnInit();
      }
    }
  );
  }


  verifydoctor(data){
    let a = {
      "_id": data,
      "Verification_Status": "Verified"
    }
    this._api.CreateDoctor1(a).subscribe(
      (response: any) => {
        if(response.Code == 300){
          alert("There Was a Problem in register this doctor try it again");
        }else{
          alert('Doctor Verified successfully!');
          this.ngOnInit();
        }
      }
    );
  }

  saveInLocal(key, val): void {
    this.storage.set(key, val);
   }

   getFromLocal(key): any {
    return this.storage.get(key);
   }
   ViewProfile(maindata){

    this.saveInLocal('Doctor_Details', maindata);

    this.router.navigateByUrl('admin_panel/profile_view')
    // const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
    //   width: '500px',
    //   data: maindata
    // });

    // dialogRef.afterClosed().subscribe(result => {
    // });
   }
}



// @Component({
//   selector: 'dialog-overview-example-dialog',
//   templateUrl: 'dialog-overview-example-dialog.html',
//   styleUrls: ['./dialog.css']
// })
// export class DialogOverviewExampleDialog {

//   constructor(
//     public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
//     @Inject(MAT_DIALOG_DATA) public data) {}

//   onNoClick(): void {
//     this.dialogRef.close();
//   }

// }
