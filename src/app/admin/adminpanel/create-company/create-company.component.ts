import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../../api.service';
// import { ThemeService } from 'ng2-charts';
import { ValidatorService } from '../../../validator.services';
import { Router } from '@angular/router';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';



@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent implements OnInit {
  name: string;
  location: string;
  coverage_self: number;
  coverage_family: number;
  coverage_parent: number;
  consultantdoc_all: any;
  consultantdoc_below: number;
  prepaid_amount: number;
  discount_offered: number;
  Corporatecode: any;
  Balance_Amount: any;
  Used_Amount: any;
  form_type: any = 'create';
  company_detail: any;
  emp_no: number;
  constructor(@Inject(SESSION_STORAGE) private storage: StorageService,
    private http: HttpClient, private _api: ApiService, private ValidatorService: ValidatorService, private router: Router,) { }

  ngOnInit(): void {
    this.form_type = this.getFromLocal('Form_type');
    this.company_detail = this.getFromLocal('Company_detail');
    console.log(this.company_detail)
    if (this.company_detail != undefined) {
      this.form_data()

    }
  }

  form_data() {
    this.name = this.company_detail.CompanyName;
    this.location = this.company_detail.Location;
    this.coverage_self = this.company_detail.Coverage_Self;
    this.coverage_family = this.company_detail.Coverage_Family;
    this.coverage_parent = this.company_detail.Coverage_Parents;
    this.consultantdoc_all = this.company_detail.ConsultantDoctorsRange_ALL.toString();
    this.consultantdoc_below = this.company_detail.ConsultantDoctorsRange_Below;
    this.prepaid_amount = this.company_detail.Prepaid_Amount;
    this.discount_offered = this.company_detail.DiscountOffered;
    this.Corporatecode = this.company_detail.Corporatecode;
    this.Balance_Amount = this.company_detail.Balance_Amount;
    this.Used_Amount = this.company_detail.Used_Amount;
    this.emp_no = this.company_detail.emp_no;
  }
  _keyPress(event: any) {
    const pattern = /[0-9]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();

    }
  }
  valitation() {
    if (
      (this.name == undefined || this.name == '') ||
      (this.location == undefined || this.location == '') ||
      (this.coverage_self == undefined || this.coverage_self == null) ||
      (this.coverage_family == undefined || this.coverage_family == null) ||
      (this.coverage_parent == undefined || this.coverage_parent == null) ||
      (this.prepaid_amount == undefined || this.prepaid_amount == null) ||
      (this.discount_offered == undefined || this.discount_offered == null)
    ) {
      return false
    }
    else {
      return true
    }
  }
  submit() {
    if(this.valitation() == true){
      if (this.consultantdoc_all == 'true') {
        this.consultantdoc_below = null;
      }
      let data = {
        "_id": "",
        "CompanyName": this.name,
        "Location": this.location,
        "Coverage_Self": this.coverage_self,
        "Coverage_Family": this.coverage_family,
        "Coverage_Parents": this.coverage_parent,
        "ConsultantDoctorsRange_ALL": this.consultantdoc_all,
        "ConsultantDoctorsRange_Below": this.consultantdoc_below,
        "Prepaid_Amount": this.prepaid_amount,
        "Used_Amount": undefined,
        "Balance_Amount": undefined,
        "DiscountOffered": this.discount_offered,
        "emp_no":this.emp_no
      }
      console.log(data)
      this._api.createcompany(data).subscribe((res: any) => {
        console.log(res)
        if (res.Code == 200) {
          alert('Company created successfully')
          this.clear();
        }
        else {
          alert('Error')
        }
  
      });
    }
    else{
      alert('Fill all the fields')
  }
   
  }


  edit() {
    if (this.consultantdoc_all == 'true') {
      this.consultantdoc_below = null;
    }
    let data = {
      "_id": this.company_detail._id,
      "CompanyName": this.name,
      "Location": this.location,
      "Coverage_Self": this.coverage_self,
      "Coverage_Family": this.coverage_family,
      "Coverage_Parents": this.coverage_parent,
      "ConsultantDoctorsRange_ALL": this.consultantdoc_all,
      "ConsultantDoctorsRange_Below": this.consultantdoc_below,
      "Prepaid_Amount": this.prepaid_amount,
      "Used_Amount": this.company_detail.Used_Amount,
      "Balance_Amount": this.company_detail.Balance_Amount,
      "DiscountOffered": this.discount_offered,
      "emp_no":this.emp_no
    }
    console.log(data)
    this._api.Editcompany(data).subscribe((res) => {
      console.log(res)
      this.router.navigateByUrl('admin_panel/company_list')
    });
  }
  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }

  getFromLocal(key): any {
    return this.storage.get(key);
  }
  clear() {
    this.name = undefined;
    this.location = undefined;
    this.coverage_self = undefined;
    this.coverage_family = undefined;
    this.coverage_parent = undefined;
    this.consultantdoc_all = undefined;
    this.consultantdoc_below = undefined;
    this.prepaid_amount = undefined;
    this.discount_offered = undefined;
    this.emp_no = undefined;

  }
  cj() {
    console.log(this.consultantdoc_all)
  }
}
