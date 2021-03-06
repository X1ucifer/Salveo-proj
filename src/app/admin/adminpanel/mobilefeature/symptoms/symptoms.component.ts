import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
// import { ApiService } from '../../../api/userApi/api.service';
import { ApiService } from '../../../../api.service';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-symptoms',
  templateUrl: './symptoms.component.html',
  styleUrls: ['./symptoms.component.css']
})
export class SymptomsComponent implements OnInit {

  selectedAudio1: any;
  Symptoms_image: string = undefined;
  Symptoms_Shown: string = undefined;
  Specializations: any = [];

  addbuttonshow: boolean = true;


  Specialisation: string = '';




  Symptoms_list: any = [];
  reSymptoms_list: any = [];
  Specialisation_List: any = [];
  id: any;
  edit: boolean = false;
  index: any;
  displayModal:boolean=false;

  constructor(
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private router: Router,
    private _api: ApiService,
    private http: HttpClient
  ) {

  }


  fileupload1(event) {
    this.selectedAudio1 = event.target.files[0];
    const fd = new FormData();
    fd.append('sampleFile', this.selectedAudio1, this.selectedAudio1.name);
    this.http.post('http://54.183.139.229:3000/upload', fd)
      .subscribe((res: any) => {
        console.log(res);
        this.Symptoms_image = res.Data;
      });
  }



  addfiles1() {
    if (this.Symptoms_image == undefined) {
      alert('Upload Image');
    } else if (this.Symptoms_Shown == "") {
      alert('Enter Symptoms');
    }
    else {
      const fd = new FormData();
      fd.append('sampleFile', this.selectedAudio1, this.selectedAudio1.name);
      this.http.post('http://54.183.139.229:3000/upload', fd)
        .subscribe((res: any) => {
          console.log(res);
          this.Symptoms_image = res.Data;
          this.addbanners()
        });
    }
  }


  addbanners() {
    if (this.Symptoms_Shown == "") {
      alert('Enter Symptoms');
    }
    else {
      let data = {
        "Symptoms_image": this.Symptoms_image,
        "Symptoms_Shown": this.Symptoms_Shown,
        "Specializations": []
      }
      this._api.CreateSymptoms(data).subscribe(
        (response: any) => {
          console.log(response);
          if (response.Code == 300) {
            alert("There Was a Problem in register this doctor try it again");
          } else {
            alert('Data Uploaded SuccessFully');
            this.Symptoms_image = undefined;
            this.Symptoms_Shown = undefined;
            this.Specialisation = '';
            this.Specialisation_List = [];
            this.Symptoms_list = [];
            this.reSymptoms_list = [];
            this.ngOnInit();
          }
        }
      );
    }
  }






  ngOnInit() {
    this.Symptoms_list=[];
    this._api.Symptoms_list().subscribe(
      (response: any) => {
        console.log(response);
        this.reSymptoms_list = response.Data;
        this._api.specializationList().subscribe(
          (response: any) => {
            console.log(response);
            this.Specialisation_List = response.Data;
            for (let a = 0; a < this.reSymptoms_list.length; a++) {
              let j = {
                "Specializations": this.reSymptoms_list[a].Specializations,
                "Symptoms_Shown": this.reSymptoms_list[a].Symptoms_Shown,
                "Symptoms_image": this.reSymptoms_list[a].Symptoms_image,
                "__v": this.reSymptoms_list[a].__v,
                "_id": this.reSymptoms_list[a]._id,
                "Specialisation_List": this.Specialisation_List,
              }
              this.Symptoms_list.push(j);
            }
            console.log(this.Symptoms_list);


          }
        );


      }
    );




  }



  addspecialisatin(i) {
    console.log(i)
    if (this.Specialisation == '') {
      alert("Please Select Specialisations");
    } else {
      let check = 0;
      let sp_data = this.Symptoms_list[i].Specializations;
      for (let a = 0; a < sp_data.length; a++) {
        if (sp_data[a] == this.Specialisation) {
          check = 1;
        }
      }
      if (check == 0) {
        this.Symptoms_list[i].Specializations.push(this.Specialisation);
        let data = {
          "Specializations": this.Symptoms_list[i].Specializations,
          "Symptoms_Shown": this.Symptoms_list[i].Symptoms_Shown,
          "Symptoms_image": this.Symptoms_list[i].Symptoms_image,
          "__v": this.Symptoms_list[i].__v,
          "Symptoms_id": this.Symptoms_list[i]._id
        }
        this._api.editSymptoms(data).subscribe(
          (response: any) => {
            console.log(response);
            if (response.Code == 300) {
              alert("There Was a Problem in register this doctor try it again");
            } else {
              alert('Data Uploaded SuccessFully');
              this.Specialisation = '';
              this.Specialisation_List = [];
              this.Symptoms_list = [];
              this.reSymptoms_list = [];
              this.ngOnInit();
            }
          }
        );
      } else {
        alert("this Specialisations is already in the Table");
      }
    }
  }

  ChangingValue(i) {
    console.log(i);
    this.Specialisation = i;
  }



  DeleteSpecialisation() {
    this.displayModal = false;
    let a = {
      "Symptoms_id": this.id
    }
    this._api.deleteSymptoms(a).subscribe(
      (response: any) => {
        console.log(response);
        alert(response.Message);
        this.Specialisation = '';
        this.Specialisation_List = [];
        this.Symptoms_list = [];
        this.reSymptoms_list = [];
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
  EditSymptoms(i) {
    window.scrollTo(0, 0);
    this.Symptoms_Shown = this.Symptoms_list[i].Symptoms_Shown;
    this.Symptoms_image = this.Symptoms_list[i].Symptoms_image;
    this.id = this.Symptoms_list[i]._id;
    this.edit = true;
    this.index = i;
  }
  update() {
    let i = this.index;
    if (this.Symptoms_image == undefined) {
      alert('Upload Image');
    } else if (this.Symptoms_Shown == undefined) {
      alert('Enter Symptoms');
    }
    else {
      if (this.selectedAudio1 != undefined) {
        const fd = new FormData();
        fd.append('sampleFile', this.selectedAudio1, this.selectedAudio1.name);
        this.http.post('http://54.183.139.229:3000/upload', fd)
          .subscribe((res: any) => {
            console.log(res);
            this.Symptoms_image = res.Data;
            let data = {
              "Specializations": this.Symptoms_list[i].Specializations,
              "Symptoms_Shown": this.Symptoms_Shown,
              "Symptoms_image": this.Symptoms_image,
              "__v": this.Symptoms_list[i].__v,
              "Symptoms_id": this.id
            }
            this._api.EditSymptoms(data).subscribe(
              (response: any) => {
                console.log(response);
                if (response.Code == 300) {
                  alert("There Was a Problem in register this doctor try it again");
                } else {
                  alert('Data Uploaded SuccessFully');
                  this.Symptoms_Shown = undefined;
                  this.Symptoms_image = undefined;
                  this.selectedAudio1 = undefined;
                  this.edit = false;
                  this.ngOnInit();
                }
              });
          });
      }
      else {
        let data = {
          "Specializations": this.Symptoms_list[i].Specializations,
          "Symptoms_Shown": this.Symptoms_Shown,
          "Symptoms_image": this.Symptoms_image,
          "__v": this.Symptoms_list[i].__v,
          "Symptoms_id": this.id
        }
        this._api.EditSymptoms(data).subscribe(
          (response: any) => {
            console.log(response);
            if (response.Code == 300) {
              alert("There Was a Problem in register this doctor try it again");
            } else {
              alert('Data Uploaded SuccessFully');
              this.Symptoms_Shown = undefined;
              this.Symptoms_image = undefined;
              this.selectedAudio1 = undefined;
              this.edit = false;
              this.ngOnInit();
            }
          });
      }

    }
  }

  removespe(i, l) {
    this.Symptoms_list[i].Specializations.splice(l, 1)
    let data = {
      "Specializations":this.Symptoms_list[i].Specializations,
      "Symptoms_Shown": this.Symptoms_list[i].Symptoms_Shown,
      "Symptoms_image": this.Symptoms_list[i].Symptoms_image,
      "__v": this.Symptoms_list[i].__v,
      "Symptoms_id": this.Symptoms_list[i]._id
    }
    this._api.EditSymptoms(data).subscribe(
      (response: any) => {
        console.log(response);
        if (response.Code == 300) {
          alert("There Was a Problem in register this doctor try it again");
        } else {
          this.Symptoms_Shown = undefined;
          this.Symptoms_image = undefined;
          this.selectedAudio1 = undefined;
          this.edit = false;
          this.ngOnInit();
        }
      });
  }

  open(id){
    this.id ={
      "_id": id
  }
    this.displayModal = true;
  }
}

