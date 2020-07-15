
import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
// import { ApiService } from '../../../api/userApi/api.service';
import { ApiService } from '../../../../api.service';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';



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
    private _api: ApiService

  ) {

  }


  ViewDoctors(data){
      this.saveInLocal('Doctor_Details', data);
      console.log(data);
      this.router.navigateByUrl('/Home/Doctor/view_doctors');
  }

  ngOnInit() {

    this._api.DoctorList().subscribe(
      (response: any) => {
         console.log(response);
         this.Doctor_List = response.Data;
      }
      );

      this._api.LiveDoctorList().subscribe(
        (response: any) => {
           console.log(response);
           this.Live_Doctor_List = response.Data;
        }
        );



  }


  Makelive(data)
  {
    console.log(data);
    if(data.Verification_Status == "not verified"){
       alert("Doctor not verified");
    }else {
    this.Live_Doctor_data = data;
    console.log(data.Email);
    this.Live_Doctor_id = '';
    let checkdata = 0 ;
    for (let a = 0 ; a < this.Live_Doctor_List.length ; a++){
     if(this.Live_Doctor_List[a].Email == data.Email){
       checkdata = 1 ;
       this.Live_Doctor_id = this.Live_Doctor_List[a]._id;
     }
    }
    if(checkdata == 0){
      console.log("Insert Data");
      this.InsertLiveDoctor();
    }else {
      console.log("Update Data");
      this.UpdateLiveDoctor();
    }
  }
  }

  DeleteDoctor(i){
    this._api.DeleteDoctor(i).subscribe(
      (response: any) => {
         console.log(response);
         alert(response.message);
         this.ngOnInit();
         }
      );
  }



  InsertLiveDoctor(){
    console.log(this.Live_Doctor_data);
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
      "Live_Status": this.Live_Doctor_data.Live_Status,
      "Verification_Status": this.Live_Doctor_data.Verification_Status,
      "Salveo_Price": this.Live_Doctor_data.Salveo_Price,
      "signature" : this.Live_Doctor_data.signature,
      "KMS_registration": this.Live_Doctor_data.KMS_registration,
      "corporatecode" :"",
      "Doctor_Range":0

  }
  console.log(data);
  this._api.CreateLiveDoctor(data).subscribe(
    (response: any) => {
      console.log(response);
      if(response.Code == 300){
        alert("There Was a Problem in register this doctor try it again");
      }else{
        alert('Data Uploaded SuccessFully');
        this.ngOnInit();
      }
    }
  );
  }



  UpdateLiveDoctor(){
    console.log(this.Live_Doctor_data);
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
      "Live_Status": this.Live_Doctor_data.Live_Status,
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
      console.log(response);
      if(response.Code == 300){
        alert("There Was a Problem in register this doctor try it again");
      }else{
        alert('Data Uploaded SuccessFully and Made Live');
        this.ngOnInit();
      }
    }
  );
  }


  verifydoctor(data){
    console.log(data);
    let a = {
      "_id": data,
      "Verification_Status": "Verified"
    }
    this._api.CreateDoctor1(a).subscribe(
      (response: any) => {
        console.log(response);
        if(response.Code == 300){
          alert("There Was a Problem in register this doctor try it again");
        }else{
          alert('Data Uploaded SuccessFully and Made Live');
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

}

