import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
// import { ApiService } from '../../../api/userApi/api.service';
import { ApiService } from '../../../../api.service';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-livedoctors',
  templateUrl: './livedoctors.component.html',
  styleUrls: ['./livedoctors.component.css']
})
export class LivedoctorsComponent implements OnInit {

  Doctor_List: any;



  constructor(
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private router: Router,
    private _api: ApiService
  ) {

  }


  ViewDoctors(data) {
    this.saveInLocal('Doctor_Details', data);
    console.log(data);
    this.router.navigateByUrl('/Home/buttons/view_doctors');

  }

  ngOnInit() {

    this._api.LiveDoctorList().subscribe(
      (response: any) => {
        console.log(response);
        this.Doctor_List = response.Data;
      }
    );
  }

  DeleteDoctor(i) {
    this._api.LiveDeleteDoctor(i).subscribe(
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
  ViewProfile(maindata) {

    this.saveInLocal('Doctor_Details', maindata);

    this.router.navigateByUrl('admin_panel/profile_view')
    // const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
    //   width: '500px',
    //   data: maindata
    // });

    // dialogRef.afterClosed().subscribe(result => {
    // });
  }
  unlive(item) {
    let data = {
      "Email": item.Email,
      "Verification_Status": "not verified",
      "Live_Status": "Last Update Not Live"
    }
    this._api.forunlive1(data).subscribe(
      (response: any) => {
        console.log(response);
        alert(response.Message);
        this.ngOnInit();
      }
    );
    this._api.forunlive2(data).subscribe(
      (response: any) => {
        console.log(response);
        alert(response.Message);
        this.ngOnInit();
      }
    );
  }
}

