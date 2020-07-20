import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
// import { ThemeService } from 'ng2-charts';
import {ValidatorService} from '../validator.services';
import { Router } from '@angular/router';
@Component({
  selector: 'app-doctor-create',
  templateUrl: './doctor-create.component.html',
  styleUrls: ['./doctor-create.component.css']
})
export class DoctorCreateComponent  {
  Pic:any = "";
  Available_type:any = "";
  Charge_Per_15min:any;
  Service:any = "";
  DrName:any;
  Email_id:any;
  Password:string;
  Phone_number:any;
  Gender:any;
  DOB:any;
  Languages:any = "";
  LanguagesList:any = [];
  Qualifications:any;
  Institution:any;
  YOP:any;
  Specialisation:any = '';
  SpecialisationList:any = [];
  OverallExp:any;
  Special:any;
  Current_location:any;
  Current_employe_at:any;
  hours_per_day:any;
  current_engaged:any;
  Additional_info:any;
  File_name:any;
  File_list:any = [];
  selectedAudio: any;
  selectedAudio1:any;
  Charge_Salveo :any;
  specialization:any;
  language:any;
  imageSrc:any;
  Email_idError: boolean = false;
  Validation : boolean;
  maxDate:any = new Date();
  year:any[]=[];
  constructor(private http: HttpClient,private _api: ApiService,private ValidatorService:ValidatorService, private router: Router,   ) {
     this._api.specializationList().subscribe((res) => {
      console.log(res)
      this.specialization = res.Data;
    })
    this._api.languageList().subscribe((res)=>{
      console.log(res)
      this.language = res.Data;
    })
    this.Pic = "http://54.214.141.11:3000/uploads/images.png";
    for(let a=1950; a <= 2020; a++){
      this.year.push(a)
    }
   }


  isCollapsed: boolean = false;
  iconCollapse: string = 'icon-arrow-up';

  collapsed(event: any): void {
    // console.log(event);
  }


  addlanguage()
  {
    if(this.Languages == ""){
      alert('Enter Language');
    }
    else{
      this.LanguagesList.push(this.Languages);
      this.Languages = '';
    }

  }

  deletelanguage(i){
    this.LanguagesList.splice(i, 1);
  }



  addSpecialisation()
{

  if(this.Specialisation == ""){
    alert('Enter Specialisation');
  }
  else{
    this.SpecialisationList.push(this.Specialisation);
    this.Specialisation = '';
  }




}



fileupload1(event){
  this.selectedAudio1 = event.target.files[0];
  console.log(this.selectedAudio1)
  const reader = new FileReader();
  if (event.target.files && event.target.files.length) {

    const [file] = event.target.files;

    reader.readAsDataURL(file);
    reader.onload = () => {
      this.Pic = reader.result as string;
      console.log(this.Pic)
    };
  }
  this.addfiles1();
}

addfiles1()
{
  const fd = new FormData();
  fd.append('sampleFile', this.selectedAudio1, this.selectedAudio1.name);
  console.log(fd)
  this.http.post('http://54.214.141.11:3000/upload', fd)
  .subscribe((res: any) => {
  console.log(res);
  this.Pic = res.Data;
});
}


deleteSpecialisation(i){
  this.SpecialisationList.splice(i, 1);
}


deletefile(i){
  this.File_list.splice(i, 1);
}

addfiles(){
  const fd = new FormData();
  fd.append('sampleFile', this.selectedAudio, this.selectedAudio.name);
  this.http.post('http://54.214.141.11:3000/upload', fd)
  .subscribe((res: any) => {
  console.log(res);
  this.File_list.push({
    "title":this.File_name,
    "path": res.Data
  });
  this.File_name = "";
});
}


fileupload(event){
  this.selectedAudio = event.target.files[0];
}


  expanded(event: any): void {
    // console.log(event);
  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
    this.iconCollapse = this.isCollapsed ? 'icon-arrow-down' : 'icon-arrow-up';
  }

submit()
{
  this.validation();
  console.log(this.Validation)
  if(this.Validation == true){
    console.log(
      this.DrName,
      this.Email_id,
      this.Password,
      this.Phone_number,
      this.Gender,
      this.DOB,
      this.Languages,
      this.LanguagesList,
      this.Qualifications,
      this.Institution,
      this.YOP,
      this.Specialisation,
      this.SpecialisationList,
      this.OverallExp,
      this.Special,
      this.Current_location,
      this.Current_employe_at,
      this.hours_per_day,
      this.current_engaged,
      this.Additional_info,
      this.File_name,
      this.File_list,
      )

      let data =
        {
          "Name" : this.DrName,
          "Email" : this.Email_id,
          "Password" : this.Password,
          "Type": 1,
          "Phone" : +this.Phone_number,
          "Logintype" : 1,
          "UpdatedAt" : ""+new Date(),
          "Lastlogin": ""+new Date()
      }
      this._api.CreateDoctor(data).subscribe(
        (response: any) => {
          console.log(response);
          if(response.Code == 300){
            alert(response.Message);
          }else{

            let data =
        {
          "_id": response.Data._id,
          "Pic" : this.Pic,
          "Name" : this.DrName,
          "DOB" : this.DOB,
          "Gender": this.Gender,
          "Type": 1,
          "Languages" : this.LanguagesList,
          "Email" : this.Email_id,
          "Password" : this.Password,
          "Phone": this.Phone_number,
          "Qualifications": this.Qualifications,
          "HighestQualifications": this.Institution,
          "Specilization": this.SpecialisationList,
          "Year_of_Passout": this.YOP,
          "Current_location": "",
          "Experience": this.OverallExp,
          "Current_employee_id": "",
          "EmployeeAt":this.Current_employe_at,
          "AvailableHours": this.hours_per_day,
          "OnlineConsultant":this.current_engaged,
          "Information": this.Additional_info,
          "Updated_At": ""+new Date(),
          "last_login_time": ""+new Date(),
          "Available_type": this.Available_type,
          "Service": this.Service,
          "Special_mention": this.Special,
          "Charge_Per_15min": this.Charge_Per_15min,
          "File_list": this.File_list,
          "signature":  "",
          "Salveo_Price" : +this.Charge_Salveo,
          "Verification_Status": "not verified",
          "Live_Status": "not live",
      }
      console.log(data);
      this._api.CreateDoctor1(data).subscribe(
        (response: any) => {
          console.log(response);
          if(response.Code == 300){
            alert("There Was a Problem in register this doctor try it again");
          }else{
            alert('Data Uploaded SuccessFully');
            this.router.navigate(['Home/Doctor', 'List_doctors']);


          }
        }
      );
          }
        }
      );
  }
  else{
    alert ('Fill all the mandatory fields');
  }

}


EmailidChange(data) {
  this.Email_id = data;
  this.Email_idError = this.ValidatorService.emailValidator(this.Email_id);
}

_keyPress(event: any) {
  const pattern = /[0-9]/;
  let inputChar = String.fromCharCode(event.charCode);
  if (!pattern.test(inputChar)) {
    event.preventDefault();

  }
}
validation(){
  // console.log(this.Charge_Per_15min)
  if(this.DrName == undefined || this.Email_id ==undefined || (this.Password == undefined || this.Password.length < 6 ) || this.Phone_number == undefined || (this.Specialisation == '' && this.SpecialisationList.length < 1 )|| this.Charge_Salveo == undefined || this.Charge_Per_15min == undefined || this.Gender == undefined || this.Qualifications == undefined || this.Institution == undefined){
    this.Validation = false;
    console.log(this.DrName)
    console.log('asdff')
    console.log(this.Specialisation)
  }
  else{
    this.Validation = true;
    console.log(this.Validation)
  }
}
ch(){
  console.log(this.Gender)
}
}
