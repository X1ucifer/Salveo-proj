import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
// import { ApiService } from '../../../api/userApi/api.service';
import { ApiService } from '../../../../api.service';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { ValidatorService } from '../../../../validator.services';
import { DatePipe } from '@angular/common';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-viewdoctors',
  templateUrl: './viewdoctors.component.html',
  styleUrls: ['./viewdoctors.component.css'],
  providers: [DatePipe]
})
export class ViewdoctorsComponent implements OnInit {
  Pic: any;
  Doctor_title = "";
  KMS_registration = "";
  Available_type: any;
  Charge_Per_15min: any;
  Service: any;
  DrName: any;
  Email_id: any;
  Password: any;
  Phone_number: any;
  Gender: any;
  DOB: any;
  Languages: any;
  LanguagesList: any = [];
  Qualifications: any;
  Institution: any;
  YOP: any;
  Specialisation: any;
  SpecialisationList: any = [];
  OverallExp: any;
  Special: any;
  Current_location: any;
  Current_employe_at: any;
  hours_per_day: any;
  current_engaged: any;
  Additional_info: any;
  File_name: any;
  File_list: any = [];
  selectedAudio: any;
  selectedAudio1: any;
  Charge_Salveo: any;
  specialization: any;
  language: any;
  imageSrc: any;
  Email_idError: boolean = false;
  Validation: boolean;
  Doctor_Detail: any;
  verification:any;
  maxDate:any = new Date();
  signature:any;
  year:any[]=[];
  Charge_Salveo_total : any = 0;
  Doctor_title_list : any;
  constructor(
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private router: Router,
    private http: HttpClient,
    private _api: ApiService,
    private ValidatorService: ValidatorService,
    private datePipe: DatePipe,
  ) {



    for(let a=1950; a <= 2020; a++){
      this.year.push(a)
    }
    this._api.specializationList().subscribe((res) => {
      console.log(res)
      this.specialization = res.Data;
    })
    this._api.doctor_title_lists().subscribe((res)=>{
      console.log(res)
      this.Doctor_title_list = res.Data;
    })
    this._api.languageList().subscribe((res) => {
      console.log(res)
      this.language = res.Data;
    })
    this.Doctor_Detail = this.storage.get('Doctor_Details');
    console.log(this.Doctor_Detail);
    console.log(this.Doctor_Detail.DOB);
    // console.log(this.datePipe.transform(new Date(this.Doctor_Detail.DOB)));
    let myDate = this.Doctor_Detail.DOB.replace(/(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3")
    let newDate = this.datePipe.transform(myDate, 'yyyy-MM-dd', 'es-ES');
    console.log(newDate);
    this.Pic = this.Doctor_Detail.Pic;
    this.Doctor_title = this.Doctor_Detail.Doctor_title;
    this.DrName = this.Doctor_Detail.Name;
    this.DOB =  this.datePipe.transform(newDate ,"yyyy-MM-dd");
    this.LanguagesList = this.Doctor_Detail.Languages;
    this.Email_id = this.Doctor_Detail.Email;
    this.Password = this.Doctor_Detail.Password;
    this.Phone_number = this.Doctor_Detail.Phone;
    this.Qualifications = this.Doctor_Detail.Qualifications;
    this.Institution = this.Doctor_Detail.HighestQualifications;
    this.SpecialisationList = this.Doctor_Detail.Specilization;
    this.YOP = this.Doctor_Detail.Year_of_Passout;
    this.OverallExp = this.Doctor_Detail.Experience;
    this.current_engaged = this.Doctor_Detail.OnlineConsultant;
    this.Additional_info = this.Doctor_Detail.Information;
    this.Available_type = this.Doctor_Detail.Available_type;
    this.Service = this.Doctor_Detail.Service;
    this.Special = this.Doctor_Detail.Special_mention;
    this.Charge_Per_15min = this.Doctor_Detail.Charge_Per_15min;
    this.File_list = this.Doctor_Detail.File_list;
    this.verification = this.Doctor_Detail.Verification_Status;
    this.Gender= this.Doctor_Detail.Gender;
    this.Current_location = this.Doctor_Detail.Current_location;
    this.Current_employe_at = this.Doctor_Detail.EmployeeAt;
    this.hours_per_day = this.Doctor_Detail.AvailableHours;
    this.KMS_registration =  this.Doctor_Detail.KMS_registration;

    this.Charge_Salveo_total = this.Doctor_Detail.Salveo_Price;
    console.log(this.Charge_Salveo,this.Charge_Salveo_total,this.Charge_Per_15min);

    this.Charge_Salveo = +this.Charge_Salveo_total - +this.Charge_Per_15min;

     console.log(this.Charge_Salveo);

    // this.Charge_Salveo =  this.Charge_Salveo_total - this.Charge_Per_15min;


  }
  isCollapsed: boolean = false;
  iconCollapse: string = 'icon-arrow-up';

  collapsed(event: any): void {
    // console.log(event);
  }



  onSearchChange(item){
    console.log("in");
    this.Charge_Salveo_total = +this.Charge_Salveo + +this.Charge_Per_15min;
  }

  addlanguage() {
    if (this.Languages == "") {
      alert('Enter Language');
    }
    else {
      this.LanguagesList.push(this.Languages);
      this.Languages = '';
    }

  }

  deletelanguage(i) {
    this.LanguagesList.splice(i, 1);
  }



  addSpecialisation() {

    if (this.Specialisation == "") {
      alert('Enter Specialisation');
    }
    else {
      this.SpecialisationList.push(this.Specialisation);
      this.Specialisation = '';
    }




  }

  ngOnInit(){

  }



  fileupload1(event) {
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

  addfiles1() {
    const fd = new FormData();
    fd.append('sampleFile', this.selectedAudio1, this.selectedAudio1.name);
    this.http.post('http://54.214.141.11:3000/upload', fd)
      .subscribe((res: any) => {
        console.log(res);
        this.Pic = res.Data;
      });
  }


  deleteSpecialisation(i) {
    this.SpecialisationList.splice(i, 1);
  }








  deletefile(i) {
    this.File_list.splice(i, 1);
  }

  addfiles() {
    const fd = new FormData();
    fd.append('sampleFile', this.selectedAudio, this.selectedAudio.name);
    this.http.post('http://54.214.141.11:3000/upload', fd)
      .subscribe((res: any) => {
        console.log(res);
        this.File_list.push({
          "title": this.File_name,
          "path": res.Data
        });
        this.File_name = "";
      });
  }


  fileupload(event) {
    this.selectedAudio = event.target.files[0];
  }


  expanded(event: any): void {
    // console.log(event);
  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
    this.iconCollapse = this.isCollapsed ? 'icon-arrow-down' : 'icon-arrow-up';
  }

  submit() {

    this.validation();
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
          "AvailableHours": +this.hours_per_day,
          "Available_type": this.Available_type,
          "Charge_Per_15min": +this.Charge_Per_15min,
          "Current_employee_id": "",
          "Current_location": this.Current_location,
          "DOB" : this.datePipe.transform(this.DOB  ,"dd-MM-yyyy"),
          "Doctor_title" : this.Doctor_title,
          "Doctor_Range" : 0,
          "Email" : this.Email_id,
          "EmployeeAt":this.Current_employe_at,
          "Experience": +this.OverallExp,
          "File_list": this.File_list,
          "Gender": this.Gender,
          "HighestQualifications": this.Institution,
          "Information": this.Additional_info,
          "KMS_registration": this.KMS_registration,
          "Languages" : this.LanguagesList,
          "Live_Status": "Last Update Not Live",
          "Name" : this.DrName,
          "Notification_Token" : "",
          "OnlineConsultant": +this.current_engaged,
          "Password" : this.Password,
          "Phone": this.Phone_number,
          "Pic" : this.Pic,
          "Qualifications": this.Qualifications,
          "Salveo_Price" : +this.Charge_Salveo_total,
          "Service": this.Service,
          "Special_mention": this.Special,
          "Specilization": this.SpecialisationList,
          "Type": 1,
          "Updated_At": ""+new Date(),
          "Verification_Status": "not verified",
          "Year_of_Passout": +this.YOP,
          "corporatecode" : "",
          "last_login_time": ""+new Date(),
          "login_type" :"",
          "signature":  this.signature,
          //  "Profile_update_sts" :"",
          ////////////////////
          "_id": this.Doctor_Detail._id,
      }
      console.log(data);
      this._api.CreateDoctor1(data).subscribe(
        (response: any) => {
          console.log(response);
          if(response.Code == 300){
            alert("There Was a Problem in register this doctor try it again");
          }else{
            alert('Data Uploaded SuccessFully');
            this.router.navigate(['admin_panel', 'List_doctors']);
          }
        }
      );
    }
    else {
      alert('Fill all the mandatory fields');
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
  validation() {
    if (this.DrName == undefined || this.Email_id == undefined || this.Password == undefined || this.Phone_number == undefined || this.Specialisation == '' || this.Charge_Salveo == undefined) {
      this.Validation = false;
      console.log(this.DrName)
      console.log('asdff')
      console.log(this.Specialisation)
    }
    else {
      this.Validation = true;
    }
  }
  date(){
    console.log(this.DOB)
  }
}
