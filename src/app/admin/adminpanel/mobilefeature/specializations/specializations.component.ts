import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
// import { ApiService } from '../../../api/userApi/api.service';
import { ApiService } from '../../../../api.service';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { HttpClient } from '@angular/common/http';
import { MatTabBody } from '@angular/material/tabs';

@Component({
  selector: 'app-specializations',
  templateUrl: './specializations.component.html',
  styleUrls: ['./specializations.component.css']
})
export class SpecializationsComponent implements OnInit {

  Specialisation_List: any = [];
  Specialisation: string = '';
  selectedAudio1: any;
  Specializations_image: string = undefined;
  Specializations_Shown: string = "";
  Specializations: any = [];

  addbuttonshow: boolean = true;
  id: any;
  edit: boolean = false;
  displayModal:boolean=false;
  constructor(
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private router: Router,
    private _api: ApiService,
    private http: HttpClient

  ) {

  }


  ViewDoctors(data) {
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




  DeleteSpecialisation() {
    this.displayModal = false;
    let a = {
      "Specialization_id": this.id
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


  fileupload1(event) {
    this.selectedAudio1 = event.target.files[0];
    const fd = new FormData();
    fd.append('sampleFile', this.selectedAudio1, this.selectedAudio1.name);
    this.http.post('http://54.183.139.229:3000/upload', fd)
      .subscribe((res: any) => {
        console.log(res);
        this.Specializations_image = res.Data;
      });
  }



  addfiles1() {
    if (this.selectedAudio1 == undefined) {
      alert('Upload Image');
    } else if (this.Specialisation == "") {
      alert('Enter Specializations');
    }
    else {
      const fd = new FormData();
      fd.append('sampleFile', this.selectedAudio1, this.selectedAudio1.name);
      this.http.post('http://54.183.139.229:3000/upload', fd)
        .subscribe((res: any) => {
          console.log(res);
          this.Specializations_image = res.Data;
          this.addSpecialisation()
        });
    }
  }
  addSpecialisation() {
    if (this.Specialisation == "") {
      alert('Enter Specialisation');
    }
    else {
      let check = 0;
      for (let a = 0; a < this.Specialisation_List.length; a++) {
        if (this.Specialisation_List[a].Specialization == this.Specialisation) {
          check = 1;
        }
      }

      if (check == 0) {
        let data = {
          "Specialization": this.Specialisation,
          'Specialization_image': this.Specializations_image
        }
        this._api.Createspecialization(data).subscribe(
          (response: any) => {
            console.log(response);
            if (response.Code == 300) {
              alert("There Was a Problem in register this doctor try it again");
            } else {
              alert('Data Uploaded SuccessFully');
              this.Specialisation = '';
              this.Specializations_image = undefined;
              this.selectedAudio1 = undefined;
              this.ngOnInit();
            }
          }
        );


      } else {
        alert('This Specialisation already Exists');
      }
    }
  }
  EditSpecialisation(data) {
    window.scrollTo(0,0);
    this.Specialisation = data.Specialization;
    this.Specializations_image = data.Specialization_image;
    this.id = data._id;
    this.edit = true;
  }
  update() {
    if (this.Specializations_image == undefined) {
      alert('Upload Image');
    } else if (this.Specialisation == "") {
      alert('Enter Specializations');
    }
    else {
      if (this.selectedAudio1 != undefined) {
        const fd = new FormData();
        fd.append('sampleFile', this.selectedAudio1, this.selectedAudio1.name);
        this.http.post('http://54.183.139.229:3000/upload', fd)
          .subscribe((res: any) => {
            console.log(res);
            this.Specializations_image = res.Data;
            let data = {
              'Specialization_id': this.id,
              "Specialization": this.Specialisation,
              'Specialization_image': this.Specializations_image
            }
            this._api.Editspecialization(data).subscribe(
              (response: any) => {
                console.log(response);
                if (response.Code == 300) {
                  alert("There Was a Problem in register this doctor try it again");
                } else {
                  alert('Data Uploaded SuccessFully');
                  this.Specialisation = '';
                  this.Specializations_image = undefined;
                  this.selectedAudio1 = undefined;
                  this.edit = false;
                  this.ngOnInit();
                }
              });
          });
      }
      else {
        let data = {
          'Specialization_id': this.id,
          "Specialization": this.Specialisation,
          'Specialization_image': this.Specializations_image
        }
        this._api.Editspecialization(data).subscribe(
          (response: any) => {
            console.log(response);
            if (response.Code == 300) {
              alert("There Was a Problem in register this doctor try it again");
            } else {
              alert('Data Uploaded SuccessFully');
              this.Specialisation = '';
              this.Specializations_image = undefined;
              this.selectedAudio1 = undefined;
              this.edit = false;
              this.ngOnInit();
            }
          });
      }

    }
  }

  open(id){
    this.id ={
      "_id": id
  }
    this.displayModal = true;
  }
}

