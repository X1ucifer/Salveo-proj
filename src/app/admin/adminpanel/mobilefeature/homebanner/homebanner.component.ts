import { Component, OnInit,Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
// import { ApiService } from '../../../api/userApi/api.service';
import { ApiService } from '../../../../api.service';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-homebanner',
  templateUrl: './homebanner.component.html',
  styleUrls: ['./homebanner.component.css']
})
export class HomebannerComponent implements OnInit {

  Banner_List:any = [];
  Banner_path:string = '';
  selectedAudio1:any;

  constructor(
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private router: Router,
    private _api: ApiService,
    private http: HttpClient
  ) {

  }




  ngOnInit() {

    this._api.Banner_List().subscribe(
      (response: any) => {
         console.log(response);
         this.Banner_List = response.Data;
      }
      );
  }


  fileupload1(event){
    this.selectedAudio1 = event.target.files[0];
  }


  addfiles1()
{
  const fd = new FormData();
  fd.append('sampleFile', this.selectedAudio1, this.selectedAudio1.name);
  this.http.post('http://54.183.139.229:3000/upload', fd)
  .subscribe((res: any) => {
  console.log(res);
  this.Banner_path = res.Data;
  this.addbanners()
});
}


  addbanners(){
    if(this.Banner_path == ""){
      alert('Enter Specialisation');
    }
    else{
       let data = {
         "Image_link": this.Banner_path,
         "Added_by":"Admin",
         "UpdatedAt":""+new Date()
      }
      this._api.CreateBanner(data).subscribe(
        (response: any) => {
          console.log(response);
          if(response.Code == 300){
            alert("There Was a Problem in register this doctor try it again");
          }else{
            alert('Data Uploaded SuccessFully');
            this.Banner_path = '';
            this.ngOnInit();
          }
        }
      );
    }
  }

  Deletbanners(i){
    this._api.DeleteBanner(i).subscribe(
      (response: any) => {
         console.log(response);
         alert(response.message);
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

